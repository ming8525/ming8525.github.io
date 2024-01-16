define(['exports'], (function (exports) { 'use strict';

	const defaultError="Při načítání grafu došlo k chybě.";const uniqueSeriesBarCountCannotExceedLimit="V tomto grafu je celkem ${ elementCount } sloupců. Pruhové grafy s jednou řadou mohou mít maximálně ${ totalLimit } pruhů. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const twoSeriesBarCountCannotExceedLimit="Pruhové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.";const threePlusSeriesBarCountCannotExceedLimit="Pruhové grafy se třemi a více řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.";const barSeriesCountCannotExceedLimit="Sloupcové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.";const defaultInvalidChart="Při vytváření grafu došlo k chybě.";const negativeValueInDataForLogTransformation="Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.";const negativeValueInDataForSqrtTransformation="Nelze uplatnit transformaci odmocniny na záporné hodnoty.";const layerLoadFailure="Při načítání vrstvy došlo k chybě. URL = ${ url }. ID položky portálu = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } musí být jedinečné. Řada s názvem ${ seriesName } má ID (${ seriesID }), které již používá jiná řada.";const nonNumericAggregation="${ dataPath } nemůže provádět jiné seskupení než podle počtu na jiném než numerickém poli.";const requiredProperty="V ${ dataPath } chybí vlastnost s názvem ${ missingProperty }.";const minLength="${ dataPath } nesmí být kratší než ${ limit } znaků.";const minItems="${ dataPath } nesmí obsahovat méně než ${ limit } položek.";const maxItems="${ dataPath } nesmí obsahovat více než ${ limit } položek.";const whiteSpacePattern="${ dataPath } musí obsahovat alespoň jeden znak jiný než mezera.";const additionalProperty="${ dataPath } nesmí obsahovat ${ additionalProperty }.";const enumValues="${ dataPath } se musí rovnat jedné z těchto povolených hodnot: ${ allowedValues }.";const anyOfValues="${ dataPath } se musí shodovat s jedním z těchto schémat: ${ schemaOptions }.";const bubbleChartValidateMsg="Rozptýlené bodové grafy s proporcionálními symboly nejsou podporovány. Byla použita výchozí velikost symbolu.";const queryError="Vstupní data se nepodařilo přečíst.";const histogramEmptyField="Histogramy vyžadují alespoň dvě číselné hodnoty.";const invalidSeriesType="Očekávaný typ řady s indexem ${ seriesIndex } je '${ expectedType }', ale obdrželi jsme '${ receivedType }'";const or="nebo";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.";const pieChartSlicesCannotExceedLimit="V tomto grafu je celkem ${ sliceCount } výsečí. Koláčové grafy jsou omezeny na ${ totalLimit } výseče. Vyberte pole Kategorie s menším počtem jedinečných hodnot, přidejte méně číselných polí nebo použijte na data filtr.";const gaugeCannotExceedLimit="Měřiče založené na prvcích jsou omezeny na počet ${ totalLimit } prvků. Filtrujte data.";const uniqueSeriesLineCountCannotExceedLimit="V tomto grafu je celkem ${ elementCount } značek. Spojnicové grafy s jednou řadou mohou mít maximálně ${ totalLimit } značek. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const twoSeriesLineCountCannotExceedLimit="Spojnicové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } značek nebo ${ seriesLimit } značek na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const threePlusSeriesLineCountCannotExceedLimit="Spojnicové grafy se třemi nebo více řadami mohou mít maximálně ${ totalLimit } značek nebo ${ seriesLimit } značek na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const lineSeriesCountCannotExceedLimit="Spojnicové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.";const uniqueSeriesBoxCountCannotExceedLimit="V tomto grafu je celkem ${ elementCount } krabic. Krabicové grafy s jednou řadou mohou mít maximálně ${ totalLimit } krabic. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const twoSeriesBoxCountCannotExceedLimit="Krabicové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } krabic nebo ${ seriesLimit } krabic na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const threePlusBoxLineCountCannotExceedLimit="Krabicové grafy se třemi nebo více řadami mohou mít maximálně ${ totalLimit } krabic nebo ${ seriesLimit } krabic na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.";const boxSeriesCountCannotExceedLimit="Krabicové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.";const boxSeriesOutlierCannotExceedLimit="Krabicové grafy mohou zobrazit maximálně ${ totalLimit } odlehlých prvků. Filtrovat data.";var errors_t9n_cs={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_cs;
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
//# sourceMappingURL=errors.t9n.cs-7e6217f6-5ab75e88.js.map
