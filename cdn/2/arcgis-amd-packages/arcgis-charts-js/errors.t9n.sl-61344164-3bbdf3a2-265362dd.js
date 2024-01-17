define(['exports'], (function (exports) { 'use strict';

	const defaultError="Med nalaganjem grafikona je prišlo do napake.";const uniqueSeriesBarCountCannotExceedLimit="V tem grafikonu je skupno ${ elementCount } vrstic. Palični grafikoni z eno serijo so omejeni na ${ totalLimit } vrstic. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const twoSeriesBarCountCannotExceedLimit="Palični grafikoni z dvema serijama so omejeni na ${ totalLimit } vrstic ali ${ seriesLimit } vrstic na serijo. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const threePlusSeriesBarCountCannotExceedLimit="Palični grafikoni s tremi ali več serijami so omejeni na ${ totalLimit } vrstic ali ${ seriesLimit } vrstic na serijo. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const barSeriesCountCannotExceedLimit="Palični grafikoni so omejeni na ${ seriesLimit } nizov. Izberite razdeljeno polje z manj enoličnimi vrednostmi";const defaultInvalidChart="Pri ustvarjanju grafikona je prišlo do napake.";const negativeValueInDataForLogTransformation="Pretvorbe dnevnika ni mogoče uporabiti za negativne ali ničelne vrednosti.";const negativeValueInDataForSqrtTransformation="Pretvorbe kvadratnega korena ni mogoče uporabiti za negativne vrednosti.";const layerLoadFailure="Med nalaganjem sloja je prišlo do napake. URL = ${ url }. ID elementa portala = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } mora biti edinstveno. Serija z imenom ${ seriesName } ima ID (${ seriesID }), ki ga že uporablja druga serija.";const nonNumericAggregation="${ dataPath } ne more izvajati združevanja brez števila na neštevilskem polju.";const requiredProperty="${ dataPath } manjka lastnost imenovana ${ missingProperty }.";const minLength="${ dataPath } ne sme biti krajše od ${ limit } znakov.";const minItems="${ dataPath } ne sme imeti manj kot ${ limit } elementov.";const maxItems="${ dataPath } ne sme imeti več kot ${ limit } elementov.";const whiteSpacePattern="${ dataPath } mora vsebovati vsaj en znak, ki ni presledek.";const additionalProperty="${ dataPath } ne sme imeti ${ additionalProperty }.";const enumValues="${ dataPath } mora biti enak eni od teh dovoljenih vrednosti: ${ allowedValues }.";const anyOfValues="${ dataPath } se mora ujemati s shemo ene od teh: ${ schemaOptions }.";const bubbleChartValidateMsg="Raztreseni grafikoni s proporcionalnimi simboli niso podprti. Uporabljena je bila privzeta velikost simbolov.";const queryError="Branje vhodnih podatkov ni uspelo.";const histogramEmptyField="Za histograme sta potrebni vsaj dve številčni vrednosti.";const invalidSeriesType="Pričakovani tip niza z indeksom ${ seriesIndex } je '${ expectedType }', ampak '${ receivedType }' je bil prejet namesto";const or="ali";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Prepričajte se, da skupna vsota izbranih številčnih polj vrne vse pozitivne vrednosti ali vse negativne vrednosti.";const pieChartSlicesCannotExceedLimit="V tem grafikonu je skupno ${ sliceCount } rezin. Tortni grafikoni so omejeni na ${ totalLimit } rezin. Izberite polje kategorije z manj enoličnimi vrednostmi, dodajte manj številskih polj ali uporabite filter za svoje podatke.";const gaugeCannotExceedLimit="Števci na osnovi geoobjektov so omejeni na geoobjekte ${ totalLimit }. Filtrirajte vaše podatke.";const uniqueSeriesLineCountCannotExceedLimit="V tem grafikonu je skupno ${ elementCount } označb. Črtni grafi z enim nizom so omejeni na ${ totalLimit } označb. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const twoSeriesLineCountCannotExceedLimit="Črtni grafi z dvema nizoma so omejeni na ${ totalLimit } označb ali ${ seriesLimit } označb na niz. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const threePlusSeriesLineCountCannotExceedLimit="Črtni grafi s tremi ali več nizi so omejeni na ${ totalLimit } označb ali ${ seriesLimit } označb na niz. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const lineSeriesCountCannotExceedLimit="Črtni grafi so omejeni na ${ seriesLimit } nizov. Izberite razdeljeno polje z manj enoličnimi vrednostmi";const uniqueSeriesBoxCountCannotExceedLimit="V tem grafikonu je skupno ${ elementCount } škatel. Škatlasti grafi z enim nizom so omejeni na ${ totalLimit } škatel. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const twoSeriesBoxCountCannotExceedLimit="Škatlasti grafi z dvema nizoma so omejeni na ${ totalLimit } škatel ali ${ seriesLimit } škatel na niz. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const threePlusBoxLineCountCannotExceedLimit="Škatlasti grafi s tremi ali več nizi so omejeni na ${ totalLimit } škatel ali ${ seriesLimit } škatel na niz. Izberite polje kategorije z manj enoličnimi vrednostmi ali filtrirajte svoje podatke.";const boxSeriesCountCannotExceedLimit="Škatlasti grafi so omejeni na ${ seriesLimit } nizov. Izberite razdeljeno polje z manj enoličnimi vrednostmi";const boxSeriesOutlierCannotExceedLimit="Škatlasti grafi lahko prikazujejo največ ${ totalLimit } točk osamelcev. Filtrirajte vaše podatke.";var errors_t9n_sl={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_sl;
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
//# sourceMappingURL=errors.t9n.sl-61344164-3bbdf3a2-265362dd.js.map
