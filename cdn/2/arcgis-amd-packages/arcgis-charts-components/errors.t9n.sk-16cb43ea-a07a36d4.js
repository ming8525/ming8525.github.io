define(["exports"],(function(exports){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See LICENSE.md for details.
	 * v1.0.0-beta.703
	 */const defaultError="Pri načítavaní grafu sa vyskytla chyba.";const uniqueSeriesBarCountCannotExceedLimit="V tomto grafe je celkom ${ elementCount } pruhov. Pruhové grafy s jednou sériou sú obmedzené na ${ totalLimit } pruhov. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const twoSeriesBarCountCannotExceedLimit="Stĺpcové grafy s dvoma sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.";const threePlusSeriesBarCountCannotExceedLimit="Stĺpcové grafy s troma alebo viac sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.";const barSeriesCountCannotExceedLimit="Stĺpcové grafy sú obmedzené na ${ seriesLimit } sérií. Vyberte pole pre rozdelenie s menším počtom jedinečných hodnôt";const defaultInvalidChart="Pri vytváraní grafu sa vyskytla chyba.";const negativeValueInDataForLogTransformation="Nie je možné aplikovať Log transformáciu na záporné alebo nulové hodnoty.";const negativeValueInDataForSqrtTransformation="Nie je možné aplikovať Square Root transformáciu na záporné hodnoty.";const layerLoadFailure="Pri načítavaní vrstvy sa vyskytla chyba. URL = ${ url }. ID položky portálu = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } musí byť jedinečný. Séria pomenovaná ${ seriesName } má id (${ seriesID }), ktoré už je používané inou sériou.";const nonNumericAggregation="${ dataPath } nemôže vykonávať agregáciu bez počtov na nečíselnom poli.";const requiredProperty="${ dataPath } chýba vlastnosť s názvom ${ missingProperty }.";const minLength="${ dataPath } musí byť kratší než ${ limit } znakov.";const minItems="${ dataPath } nesmie mať menej než ${ limit } položiek.";const maxItems="${ dataPath } nesmie mať viac než ${ limit } položiek.";const whiteSpacePattern="${ dataPath } musí mať aspoň jeden znak bez prázdneho miesta.";const additionalProperty="${ dataPath } nesmie mať ${ additionalProperty }.";const enumValues="${ dataPath } musí byť rovné jednej z týchto povolených hodnôt: ${ allowedValues }.";const anyOfValues="${ dataPath } sa musí zhodovať so schémou jednej z týchto: ${ schemaOptions }.";const bubbleChartValidateMsg="Korelačné grafy s proporcionálnymi symbolmi nie sú podporované. Bola aplikovaná predvolená veľkosť symbolu.";const queryError="Zlyhanie načítania vstupných údajov.";const histogramEmptyField="Histogramy vyžadujú aspoň dve numerické hodnoty.";const invalidSeriesType="Očakávaný typ série pri indexe ${ seriesIndex } je '${ expectedType }', ale namiesto toho bolo prijaté '${ receivedType }'";const or="alebo";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Uistite sa, že súčet vybraných číselných polí vráti všetky hodnoty kladné alebo všetky hodnoty záporné.";const pieChartSlicesCannotExceedLimit="V tomto grafe je celkom ${ sliceCount } segmentov. Koláčové grafy sú obmedzené na ${ totalLimit } segmentov. Vyberte pole kategórie s menším počtom jedinečných hodnôt, pridajte menej číselných polí alebo použite na vaše dáta filter.";const gaugeCannotExceedLimit="Meradlá založené na prvkoch majú limit ${ totalLimit } prvkov. Filtrovať dáta.";const uniqueSeriesLineCountCannotExceedLimit="K dispozícii je celkovo ${ elementCount } značiek v tomto grafe. Čiarové grafy s jednou sériou sú obmedzené na ${ totalLimit } značiek. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const twoSeriesLineCountCannotExceedLimit="Čiarové grafy s dvoma radmi sú obmedzené na ${ totalLimit } značiek, alebo ${ seriesLimit } značiek na sériu. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const threePlusSeriesLineCountCannotExceedLimit="Čiarové grafy s tromi alebo viacerými sériami sú obmedzené na ${ totalLimit } značiek, alebo ${ seriesLimit } značiek na sériu. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const lineSeriesCountCannotExceedLimit="Čiarové grafy sú obmedzené na ${ seriesLimit } sérií. Vyberte pole pre rozdelenie s menším počtom jedinečných hodnôt";const uniqueSeriesBoxCountCannotExceedLimit="K dispozícii je celkovo ${ elementCount } boxov v tomto grafe. Krabicové grafy s jednou sériou sú obmedzené na ${ totalLimit } boxov. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const twoSeriesBoxCountCannotExceedLimit="Krabicové grafy s dvoma sériami sú obmedzené na ${ totalLimit } boxov, alebo ${ seriesLimit } boxov na sériu. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const threePlusBoxLineCountCannotExceedLimit="Krabicové grafy s tromi alebo viacerými sériami sú obmedzené na ${ totalLimit } boxov, alebo ${ seriesLimit } boxov na sériu. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.";const boxSeriesCountCannotExceedLimit="Krabicové grafy sú obmedzené na ${ seriesLimit } sérií. Vyberte pole pre rozdelenie s menším počtom jedinečných hodnôt";const boxSeriesOutlierCannotExceedLimit="Krabicové grafy môžu zobraziť len do ${ totalLimit } odľahlých body. Vyfiltrujte vaše dáta.";var errors_t9n_sk={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};exports.additionalProperty=additionalProperty;exports.anyOfValues=anyOfValues;exports.barSeriesCountCannotExceedLimit=barSeriesCountCannotExceedLimit;exports.boxSeriesCountCannotExceedLimit=boxSeriesCountCannotExceedLimit;exports.boxSeriesOutlierCannotExceedLimit=boxSeriesOutlierCannotExceedLimit;exports.bubbleChartValidateMsg=bubbleChartValidateMsg;exports["default"]=errors_t9n_sk;exports.defaultError=defaultError;exports.defaultInvalidChart=defaultInvalidChart;exports.duplicateSeriesID=duplicateSeriesID;exports.enumValues=enumValues;exports.gaugeCannotExceedLimit=gaugeCannotExceedLimit;exports.histogramEmptyField=histogramEmptyField;exports.invalidSeriesType=invalidSeriesType;exports.layerLoadFailure=layerLoadFailure;exports.lineSeriesCountCannotExceedLimit=lineSeriesCountCannotExceedLimit;exports.maxItems=maxItems;exports.minItems=minItems;exports.minLength=minLength;exports.negativeValueInDataForLogTransformation=negativeValueInDataForLogTransformation;exports.negativeValueInDataForSqrtTransformation=negativeValueInDataForSqrtTransformation;exports.nonNumericAggregation=nonNumericAggregation;exports.or=or;exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;exports.pieChartSlicesCannotExceedLimit=pieChartSlicesCannotExceedLimit;exports.queryError=queryError;exports.requiredProperty=requiredProperty;exports.threePlusBoxLineCountCannotExceedLimit=threePlusBoxLineCountCannotExceedLimit;exports.threePlusSeriesBarCountCannotExceedLimit=threePlusSeriesBarCountCannotExceedLimit;exports.threePlusSeriesLineCountCannotExceedLimit=threePlusSeriesLineCountCannotExceedLimit;exports.twoSeriesBarCountCannotExceedLimit=twoSeriesBarCountCannotExceedLimit;exports.twoSeriesBoxCountCannotExceedLimit=twoSeriesBoxCountCannotExceedLimit;exports.twoSeriesLineCountCannotExceedLimit=twoSeriesLineCountCannotExceedLimit;exports.uniqueSeriesBarCountCannotExceedLimit=uniqueSeriesBarCountCannotExceedLimit;exports.uniqueSeriesBoxCountCannotExceedLimit=uniqueSeriesBoxCountCannotExceedLimit;exports.uniqueSeriesLineCountCannotExceedLimit=uniqueSeriesLineCountCannotExceedLimit;exports.whiteSpacePattern=whiteSpacePattern}));