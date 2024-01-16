/*! For license information please see errors.t9n.lt-0e773f3b-dac69201-d288cf26.js.LICENSE.txt */
define(["exports"],(function(i){"use strict";const a="Įkeliant diagramą įvyko klaida.",e="Šioje diagramoje iš viso yra ${ elementCount } stulpeliai (-ių). Juostinės diagramos su 1 serija apribotos iki ${ totalLimit } juostų. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",t="Juostinės diagramos su 2 serijomis apribotos iki ${ totalLimit } juostų arba ${ seriesLimit } juostų vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",r="Juostinės diagramos su 3 arba daugiau serijų apribotos iki ${ totalLimit } juostų arba ${ seriesLimit } juostų vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",s="Juostinių diagramų riba – ${ seriesLimit } serijų. Pasirinkite skaidymo lauką, kuriame būtų mažiau unikalių reikšmių",n="Kuriant diagramą įvyko klaida.",o="Negalima pritaikyti log. transformacijos neigiamoms arba nulinėms reikšmėms.",m="Negalima pritaikyti kvadratinės šaknies transformacijos neigiamoms reikšmėms.",u="Įkeliant sluoksnį įvyko klaida. URL = ${ url }. Portalo elemento ID = ${ portalItemId }.",l="${ dataPath } turi būti unikalus. Serijos, kurios pavadinimas ${ seriesName }, ID (${ seriesID }) jau naudojamas kitai serijai.",k="${ dataPath } negali atikti neskaičiavimo agregavimo ne skaičių lauke.",d="${ dataPath } trūksta savybės pavadinimu ${ missingProperty }.",g="${ dataPath } negali būti trumpesnis negu ${ limit } simb.",C="${ dataPath } negali turėti mažiau negu ${ limit } elementų.",L="${ dataPath } negali turėti daugiau negu ${ limit } elementų.",y="${ dataPath } turi sudaryti bent vienas simbolis, kuris nėra tarpas.",p="${ dataPath } negali sudaryti ${ additionalProperty }.",b="${ dataPath } turi būti lygus vienai iš šių leidžiamų reikšmių: ${ allowedValues }.",v="${ dataPath } turi sutapti su viena iš šių schemų: ${ schemaOptions }.",j="Sklaidos diagramos su proporciniais simboliais nėra palaikomos. Pritaikytas numatytasis simbolių dydis.",c="Nepavyko nuskaityti įvesties duomenų.",$="Histogramoms reikalingos bent dvi skaitinės vertės.",x="Numatytas serijos tipas indeksui ${ seriesIndex } yra ${ expectedType }, bet vietoj to gauta ${ receivedType }",S="arba",P="Užtikrinkite, kad pasirinkto (-ų) skaitinio (-ų) lauko (-ų) bendra suma pateikia visas teigiamas reikšmes arba visas neigiamas reikšmes.",E="Šioje diagramoje iš viso yra ${ sliceCount } skiltys (-ių). Skritulinėms diagramoms taikomas ${ totalLimit } skilčių limitas. Pasirinkite Category lauką su mažiau unikalių reikšmių, pridėkite mažiau skaitinių laukų arba pritaikykite filtrą savo duomenims.",h="Elementais pagrįsti matuokliai gali naudoti ${ totalLimit } elementus (-ų). Filtruokite duomenis.",f="Iš viso diagramoje yra ${ elementCount } žymekliai. Linijinės diagramos su 1 serija apribotos iki ${ totalLimit } žymeklių. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",I="Linijinės diagramos su 2 serijomis apribotos iki ${ totalLimit } žymeklių arba ${ seriesLimit } žymeklių vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",q="Linijinės diagramos su 3 arba daugiau serijų apribotos iki ${ totalLimit } žymeklių arba ${ seriesLimit } žymeklių vienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",B="Linijinių diagramų riba – ${ seriesLimit } serijų. Pasirinkite skaidymo lauką, kuriame būtų mažiau unikalių reikšmių",V="Diagramoje iš viso yra ${ elementCount } laukeliai. Stačiakampių diagramų su viena serija riba – ${ totalLimit } laukelių. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",D="Stačiakampių diagramų su 2 serijomis riba – ${ totalLimit } laukelių arba ${ seriesLimit } laukelių kiekvienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",F="Stačiakampių diagramų su 3 serijomis riba – ${ totalLimit } laukelių arba ${ seriesLimit } laukelių kiekvienoje serijoje. Pasirinkite Category lauką su mažiau unikalių reikšmių arba pritaikykite filtrą savo duomenims.",w="Stačiakampių diagramų riba – ${ seriesLimit } serijų. Pasirinkite skaidymo lauką, kuriame būtų mažiau unikalių reikšmių",N="Stačiakampėse diagramose gali būti tik iki ${ totalLimit } išskirties taškų. Filtruokite duomenis.";var T={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,barSeriesCountCannotExceedLimit:s,defaultInvalidChart:n,negativeValueInDataForLogTransformation:o,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:u,duplicateSeriesID:l,nonNumericAggregation:k,requiredProperty:d,minLength:g,minItems:C,maxItems:L,whiteSpacePattern:y,additionalProperty:p,enumValues:b,anyOfValues:v,bubbleChartValidateMsg:j,queryError:c,histogramEmptyField:$,invalidSeriesType:x,or:S,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:P,pieChartSlicesCannotExceedLimit:E,gaugeCannotExceedLimit:h,uniqueSeriesLineCountCannotExceedLimit:f,twoSeriesLineCountCannotExceedLimit:I,threePlusSeriesLineCountCannotExceedLimit:q,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:V,twoSeriesBoxCountCannotExceedLimit:D,threePlusBoxLineCountCannotExceedLimit:F,boxSeriesCountCannotExceedLimit:w,boxSeriesOutlierCannotExceedLimit:N};i.additionalProperty=p,i.anyOfValues=v,i.barSeriesCountCannotExceedLimit=s,i.boxSeriesCountCannotExceedLimit=w,i.boxSeriesOutlierCannotExceedLimit=N,i.bubbleChartValidateMsg=j,i.default=T,i.defaultError=a,i.defaultInvalidChart=n,i.duplicateSeriesID=l,i.enumValues=b,i.gaugeCannotExceedLimit=h,i.histogramEmptyField=$,i.invalidSeriesType=x,i.layerLoadFailure=u,i.lineSeriesCountCannotExceedLimit=B,i.maxItems=L,i.minItems=C,i.minLength=g,i.negativeValueInDataForLogTransformation=o,i.negativeValueInDataForSqrtTransformation=m,i.nonNumericAggregation=k,i.or=S,i.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=P,i.pieChartSlicesCannotExceedLimit=E,i.queryError=c,i.requiredProperty=d,i.threePlusBoxLineCountCannotExceedLimit=F,i.threePlusSeriesBarCountCannotExceedLimit=r,i.threePlusSeriesLineCountCannotExceedLimit=q,i.twoSeriesBarCountCannotExceedLimit=t,i.twoSeriesBoxCountCannotExceedLimit=D,i.twoSeriesLineCountCannotExceedLimit=I,i.uniqueSeriesBarCountCannotExceedLimit=e,i.uniqueSeriesBoxCountCannotExceedLimit=V,i.uniqueSeriesLineCountCannotExceedLimit=f,i.whiteSpacePattern=y}));