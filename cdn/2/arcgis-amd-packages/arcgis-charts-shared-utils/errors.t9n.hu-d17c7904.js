define(["exports"],(function(exports){"use strict";const defaultError="Hiba történt a diagram betöltése közben.";const uniqueSeriesBarCountCannotExceedLimit="Összesen ${ elementCount } oszlop van ehhez a diagramhoz. Az egy sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const twoSeriesBarCountCannotExceedLimit="A két sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const threePlusSeriesBarCountCannotExceedLimit="A három vagy több sorozatból álló oszlopdiagram legfeljebb ${ totalLimit } oszlopot tartalmazhat, vagy sorozatonként ${ seriesLimit } oszlopot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const barSeriesCountCannotExceedLimit="A sávdiagramok legfeljebb ${ seriesLimit } sorozatot tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező felosztási szempont mezőt";const defaultInvalidChart="Hiba történt a diagram létrehozása közben.";const negativeValueInDataForLogTransformation="A log transzformáció nem alkalmazható negatív vagy nulla értékre.";const negativeValueInDataForSqrtTransformation="A négyzetgyök transzformáció nem alkalmazható negatív értékre.";const layerLoadFailure="Hiba történt a réteg betöltés közben. URL = ${ url }. Portál elemazonosítója = ${ portalItemId }.";const duplicateSeriesID="Egyedinek kell lennie: ${ dataPath } A(z) ${ seriesName } nevű sorozat azonosítóját (${ seriesID }) egy másik sorozat már használja.";const nonNumericAggregation="A(z) ${ dataPath } nem hajthat végre nem megszámlálható összevonást nem numerikus mezőn.";const requiredProperty="A(z) ${ dataPath } esetében hiányzik a(z) ${ missingProperty } nevű tulajdonság.";const minLength="A(z) ${ dataPath } hossza legalább ${ limit } karakter kell legyen.";const minItems="A(z) ${ dataPath } elemeinek száma legalább ${ limit } kell legyen.";const maxItems="A(z) ${ dataPath } elemeinek száma legfeljebb ${ limit } lehet.";const whiteSpacePattern="A következőnek legalább egy nem-whitespace karaktert kell tartalmaznia: ${ dataPath }";const additionalProperty="${ dataPath } nem rendelkezhet ezzel: ${ additionalProperty }.";const enumValues="${ dataPath } értékének egyeznie kell a következő megengedett értékek egyikével: ${ allowedValues }.";const anyOfValues="A(z) ${ dataPath } értékének egyeznie kell a következők egyikének sémájával: ${ schemaOptions }.";const bubbleChartValidateMsg="A méretarányos szimbólummal rendelkező szórásdiagramok nem támogatottak. Az alapértelmezett szimbólum méret lesz alkalmazva.";const queryError="Nem sikerült beolvasni a bemeneti adatokat.";const histogramEmptyField="A hisztogramoknak legalább két számértékre van szükségük.";const invalidSeriesType="A várt sorozattípus a(z) ${ seriesIndex } indexnél '${ expectedType }', de helyette '${ receivedType }' érkezett.";const or="vagy";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Győződjön meg arról, hogy a kiválasztott numerikus mező(k) összege pozitív vagy negatív értéket adjanak vissza.";const pieChartSlicesCannotExceedLimit="Ez a diagram összesen ${ sliceCount } szeletet tartalmaz. A kördiagramok legfeljebb ${ totalLimit } szeletet tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, adjon hozzá kevesedd numerikus mezőt, vagy szűrje az adatokat.";const gaugeCannotExceedLimit="A vektoros elem alapú mérőeszközök ${ totalLimit } vektoros elemre korlátozódnak. Szűrje az adatokat";const uniqueSeriesLineCountCannotExceedLimit="Összesen ${ elementCount } jelölő van ehhez a diagramhoz. Az egy sorozatból álló vonaldiagram legfeljebb ${ totalLimit } jelölőt tartalmazhat. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const twoSeriesLineCountCannotExceedLimit="A két sorozatból álló vonaldiagram legfeljebb ${ totalLimit } jelölőt tartalmazhat, vagy sorozatonként ${ seriesLimit } jelölőt. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const threePlusSeriesLineCountCannotExceedLimit="A három vagy több sorozatból álló vonaldiagram legfeljebb ${ totalLimit } jelölőt tartalmazhat, vagy sorozatonként ${ seriesLimit } jelölőt. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const lineSeriesCountCannotExceedLimit="A vonaldiagramok legfeljebb ${ seriesLimit } sorozatot tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező felosztási szempont mezőt";const uniqueSeriesBoxCountCannotExceedLimit="Összesen ${ elementCount } box van ehhez a diagramhoz. Az egy sorozatot tartalmazó boxdiagramok legfeljebb ${ totalLimit } boxot tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const twoSeriesBoxCountCannotExceedLimit="A két sorozatból álló boxdiagramok legfeljebb ${ totalLimit } boxot tartalmazhatnak, vagy sorozatonként ${ seriesLimit } boxot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const threePlusBoxLineCountCannotExceedLimit="A három vagy több sorozatból álló boxdiagramok legfeljebb ${ totalLimit } boxot tartalmazhatnak, vagy sorozatonként ${ seriesLimit } boxot. Válasszon kevesebb egyedi értékkel rendelkező Kategória mezőt, vagy szűrje az adatokat.";const boxSeriesCountCannotExceedLimit="A boxdiagramok legfeljebb ${ seriesLimit } sorozatot tartalmazhatnak. Válasszon kevesebb egyedi értékkel rendelkező felosztási szempont mezőt";const boxSeriesOutlierCannotExceedLimit="A boxdiagramok csak ${ totalLimit } kiugró pontot jeleníthetnek meg. Szűrje az adatokat.";var errors_t9n_hu={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};exports.additionalProperty=additionalProperty;exports.anyOfValues=anyOfValues;exports.barSeriesCountCannotExceedLimit=barSeriesCountCannotExceedLimit;exports.boxSeriesCountCannotExceedLimit=boxSeriesCountCannotExceedLimit;exports.boxSeriesOutlierCannotExceedLimit=boxSeriesOutlierCannotExceedLimit;exports.bubbleChartValidateMsg=bubbleChartValidateMsg;exports["default"]=errors_t9n_hu;exports.defaultError=defaultError;exports.defaultInvalidChart=defaultInvalidChart;exports.duplicateSeriesID=duplicateSeriesID;exports.enumValues=enumValues;exports.gaugeCannotExceedLimit=gaugeCannotExceedLimit;exports.histogramEmptyField=histogramEmptyField;exports.invalidSeriesType=invalidSeriesType;exports.layerLoadFailure=layerLoadFailure;exports.lineSeriesCountCannotExceedLimit=lineSeriesCountCannotExceedLimit;exports.maxItems=maxItems;exports.minItems=minItems;exports.minLength=minLength;exports.negativeValueInDataForLogTransformation=negativeValueInDataForLogTransformation;exports.negativeValueInDataForSqrtTransformation=negativeValueInDataForSqrtTransformation;exports.nonNumericAggregation=nonNumericAggregation;exports.or=or;exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;exports.pieChartSlicesCannotExceedLimit=pieChartSlicesCannotExceedLimit;exports.queryError=queryError;exports.requiredProperty=requiredProperty;exports.threePlusBoxLineCountCannotExceedLimit=threePlusBoxLineCountCannotExceedLimit;exports.threePlusSeriesBarCountCannotExceedLimit=threePlusSeriesBarCountCannotExceedLimit;exports.threePlusSeriesLineCountCannotExceedLimit=threePlusSeriesLineCountCannotExceedLimit;exports.twoSeriesBarCountCannotExceedLimit=twoSeriesBarCountCannotExceedLimit;exports.twoSeriesBoxCountCannotExceedLimit=twoSeriesBoxCountCannotExceedLimit;exports.twoSeriesLineCountCannotExceedLimit=twoSeriesLineCountCannotExceedLimit;exports.uniqueSeriesBarCountCannotExceedLimit=uniqueSeriesBarCountCannotExceedLimit;exports.uniqueSeriesBoxCountCannotExceedLimit=uniqueSeriesBoxCountCannotExceedLimit;exports.uniqueSeriesLineCountCannotExceedLimit=uniqueSeriesLineCountCannotExceedLimit;exports.whiteSpacePattern=whiteSpacePattern}));
//# sourceMappingURL=errors.t9n.hu-d17c7904.js.map