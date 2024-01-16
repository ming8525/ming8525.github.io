/*! For license information please see errors.t9n.lv-57e77a14-b63cb66e.js.LICENSE.txt */
define(["exports"],(function(i){"use strict";const a="Ielādējot diagrammu, radās kļūda.",e="Šajā diagrammā ir pavisam ${ elementCount } joslas. Joslu diagrammām ar vienu sēriju ir joslu skaita ierobežojums: ${ totalLimit } joslas. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",t="Joslu diagrammām ar divām sērijām ir joslu skaita ierobežojums: ${ totalLimit } joslas vai ${ seriesLimit } joslas katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",r="Joslu diagrammām ar trīs vai vairāk sērijām ir joslu skaita ierobežojums: ${ totalLimit } joslas vai ${ seriesLimit } joslas katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",s="Joslu diagrammas attiecas tikai uz ${ seriesLimit } sērijām. Izvēlieties sadalīt pēc lauka ar mazāku unikālo vērtību",o="Izveidojot diagrammu, radās kļūda.",m="Žurnālfaila transformāciju nevar piemērot negatīvām vai nulles vērtībām.",n="Kvadrātsaknes transformāciju nevar lietot negatīvām vērtībām.",u="Ielādējot slāni, radās kļūda. Vietrādis (URL) = ${ url }. Portāla vienības ID = ${ portalItemId }.",l="${ dataPath } jābūt unikālam. Sērijai ar nosaukumu ${ seriesName } ir ID (${ seriesID }), ko jau izmanto cita sērija.",d="${ dataPath } nevar veikt apkopošanu laukā, kurā nav skaitlisku vērtību.",v="${ dataPath } trūkst parametra ar nosaukumu ${ missingProperty }.",k="${ dataPath } nedrīkst būt īsāks par ${ limit } rakstzīmēm.",j="${ dataPath } nedrīkst būt mazāk par ${ limit } vienībām.",L="${ dataPath } nedrīkst būt vairāk par ${ limit } vienībām.",C="${ dataPath } jābūt vismaz vienai rakstzīmei, kas nav atstarpe.",g="${ dataPath } nedrīkst būt ${ additionalProperty }.",c="${ dataPath } jābūt vienādam ar kādu no šīm atļautajām vērtībām: ${ allowedValues }.",b="${ dataPath } jāatbilst kādai no šādām shēmām: ${ schemaOptions }.",p="Izkliedes diagrammas ar proporcionāliem simboliem netiek atbalstītas. Ticis piemērots noklusējuma simbola izmērs.",z="Neizdevās nolasīt ievades datus.",$="Histogrammām nepieciešamas vismaz divas skaitliskas vērtības.",x="Indeksa ${ seriesIndex } prognozētais sērijas veids ir “${ expectedType }”, bet tā vietā tika saņemts “${ receivedType }”",S="Nodrošina, ka izvēlētā(-o) skaitliskā(-o) lauka(-u) kopsumma atgriež visas pozitīvās vērtības vai visas negatīvās vērtības.",E="Šajā diagrammā ir pavisam ${ sliceCount } sektori. Sektoru diagrammas ir ierobežotas līdz ${ totalLimit } sektoriem. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu, pievienojiet mazāk skaitlisko lauku vai lietojiet datiem filtru.",I="Elementos balstītas mērierīces ir ierobežotas līdz ${ totalLimit } elementiem. Filtrēt datus.",h="Šajā diagrammā kopumā ir ${ elementCount } marķieri. Līniju diagrammas ar vienu sēriju var būt tikai ${ totalLimit } marķieri. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",f="Līniju diagrammas ar divām sērijām ir ierobežotas līdz ${ totalLimit } marķieriem vai ${ seriesLimit } marķieriem katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",P="Līniju diagrammas ar trīs vai vairāk sērijām ir ierobežotas līdz ${ totalLimit } marķieriem vai ${ seriesLimit } marķieriem katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",y="Līniju diagrammas attiecas tikai uz ${ seriesLimit } sērijām. Izvēlieties sadalīt pēc lauka ar mazāku unikālo vērtību",K="Šajā diagrammā ir pavisam ${ elementCount } lodziņi. Kastveida diagrammām ar vienu sēriju var būt tikai ${ totalLimit } lodziņi. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",q="Katveida diagrammas ar divām sērijām ir ierobežotas līdz ${ totalLimit } lodziņiem vai ${ seriesLimit } lodziņiem katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",B="Kastveida diagrammas ar trīs vai vairāk sērijām ir ierobežotas līdz ${ totalLimit } lodziņiem vai ${ seriesLimit } lodziņiem katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",V="Kastveida diagrammas attiecas tikai uz ${ seriesLimit } sērijām. Izvēlieties sadalīt pēc lauka ar mazāku unikālo vērtību",F="Kastveida diagrammas var parādīt tikai līdz ${ totalLimit } nepiederošu elementu punktiem. Filtrēt datus.";var w={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:r,barSeriesCountCannotExceedLimit:s,defaultInvalidChart:o,negativeValueInDataForLogTransformation:m,negativeValueInDataForSqrtTransformation:n,layerLoadFailure:u,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:v,minLength:k,minItems:j,maxItems:L,whiteSpacePattern:C,additionalProperty:g,enumValues:c,anyOfValues:b,bubbleChartValidateMsg:p,queryError:z,histogramEmptyField:$,invalidSeriesType:x,or:"vai",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:S,pieChartSlicesCannotExceedLimit:E,gaugeCannotExceedLimit:I,uniqueSeriesLineCountCannotExceedLimit:h,twoSeriesLineCountCannotExceedLimit:f,threePlusSeriesLineCountCannotExceedLimit:P,lineSeriesCountCannotExceedLimit:y,uniqueSeriesBoxCountCannotExceedLimit:K,twoSeriesBoxCountCannotExceedLimit:q,threePlusBoxLineCountCannotExceedLimit:B,boxSeriesCountCannotExceedLimit:V,boxSeriesOutlierCannotExceedLimit:F};i.additionalProperty=g,i.anyOfValues=b,i.barSeriesCountCannotExceedLimit=s,i.boxSeriesCountCannotExceedLimit=V,i.boxSeriesOutlierCannotExceedLimit=F,i.bubbleChartValidateMsg=p,i.default=w,i.defaultError=a,i.defaultInvalidChart=o,i.duplicateSeriesID=l,i.enumValues=c,i.gaugeCannotExceedLimit=I,i.histogramEmptyField=$,i.invalidSeriesType=x,i.layerLoadFailure=u,i.lineSeriesCountCannotExceedLimit=y,i.maxItems=L,i.minItems=j,i.minLength=k,i.negativeValueInDataForLogTransformation=m,i.negativeValueInDataForSqrtTransformation=n,i.nonNumericAggregation=d,i.or="vai",i.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=S,i.pieChartSlicesCannotExceedLimit=E,i.queryError=z,i.requiredProperty=v,i.threePlusBoxLineCountCannotExceedLimit=B,i.threePlusSeriesBarCountCannotExceedLimit=r,i.threePlusSeriesLineCountCannotExceedLimit=P,i.twoSeriesBarCountCannotExceedLimit=t,i.twoSeriesBoxCountCannotExceedLimit=q,i.twoSeriesLineCountCannotExceedLimit=f,i.uniqueSeriesBarCountCannotExceedLimit=e,i.uniqueSeriesBoxCountCannotExceedLimit=K,i.uniqueSeriesLineCountCannotExceedLimit=h,i.whiteSpacePattern=C}));