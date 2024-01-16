/*! For license information please see errors.t9n.cs-7e6217f6-cb2e6de9.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="Při načítání grafu došlo k chybě.",o="V tomto grafu je celkem ${ elementCount } sloupců. Pruhové grafy s jednou řadou mohou mít maximálně ${ totalLimit } pruhů. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",n="Pruhové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",a="Pruhové grafy se třemi a více řadami mohou mít maximálně ${ totalLimit } pruhů nebo ${ seriesLimit } pruhů na řadu. Vyberte pole Kategorie s méně jedinečnými hodnotami nebo svá data vyfiltrujte.",i="Sloupcové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.",r="Při vytváření grafu došlo k chybě.",m="Nelze uplatnit logaritmickou transformaci na záporné nebo nulové hodnoty.",s="Nelze uplatnit transformaci odmocniny na záporné hodnoty.",d="Při načítání vrstvy došlo k chybě. URL = ${ url }. ID položky portálu = ${ portalItemId }.",l="${ dataPath } musí být jedinečné. Řada s názvem ${ seriesName } má ID (${ seriesID }), které již používá jiná řada.",u="${ dataPath } nemůže provádět jiné seskupení než podle počtu na jiném než numerickém poli.",c="V ${ dataPath } chybí vlastnost s názvem ${ missingProperty }.",h="${ dataPath } nesmí být kratší než ${ limit } znaků.",p="${ dataPath } nesmí obsahovat méně než ${ limit } položek.",v="${ dataPath } nesmí obsahovat více než ${ limit } položek.",y="${ dataPath } musí obsahovat alespoň jeden znak jiný než mezera.",b="${ dataPath } nesmí obsahovat ${ additionalProperty }.",C="${ dataPath } se musí rovnat jedné z těchto povolených hodnot: ${ allowedValues }.",L="${ dataPath } se musí shodovat s jedním z těchto schémat: ${ schemaOptions }.",x="Rozptýlené bodové grafy s proporcionálními symboly nejsou podporovány. Byla použita výchozí velikost symbolu.",g="Vstupní data se nepodařilo přečíst.",j="Histogramy vyžadují alespoň dvě číselné hodnoty.",$="Očekávaný typ řady s indexem ${ seriesIndex } je '${ expectedType }', ale obdrželi jsme '${ receivedType }'",f="nebo",S="Ujistěte se, že hodnoty součtů vybraných číselných polí jsou všechny kladné nebo všechny záporné.",E="V tomto grafu je celkem ${ sliceCount } výsečí. Koláčové grafy jsou omezeny na ${ totalLimit } výseče. Vyberte pole Kategorie s menším počtem jedinečných hodnot, přidejte méně číselných polí nebo použijte na data filtr.",k="Měřiče založené na prvcích jsou omezeny na počet ${ totalLimit } prvků. Filtrujte data.",P="V tomto grafu je celkem ${ elementCount } značek. Spojnicové grafy s jednou řadou mohou mít maximálně ${ totalLimit } značek. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",z="Spojnicové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } značek nebo ${ seriesLimit } značek na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",V="Spojnicové grafy se třemi nebo více řadami mohou mít maximálně ${ totalLimit } značek nebo ${ seriesLimit } značek na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",I="Spojnicové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.",K="V tomto grafu je celkem ${ elementCount } krabic. Krabicové grafy s jednou řadou mohou mít maximálně ${ totalLimit } krabic. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",B="Krabicové grafy se dvěma řadami mohou mít maximálně ${ totalLimit } krabic nebo ${ seriesLimit } krabic na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",q="Krabicové grafy se třemi nebo více řadami mohou mít maximálně ${ totalLimit } krabic nebo ${ seriesLimit } krabic na řadu. Vyberte pole Kategorie s menším počtem jedinečných hodnot nebo svá data vyfiltrujte.",F="Krabicové grafy mohou mít maximálně ${ seriesLimit } řad. Zvolte pole rozdělení s menším počtem jedinečných hodnot.",w="Krabicové grafy mohou zobrazit maximálně ${ totalLimit } odlehlých prvků. Filtrovat data.";var D={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:o,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:a,barSeriesCountCannotExceedLimit:i,defaultInvalidChart:r,negativeValueInDataForLogTransformation:m,negativeValueInDataForSqrtTransformation:s,layerLoadFailure:d,duplicateSeriesID:l,nonNumericAggregation:u,requiredProperty:c,minLength:h,minItems:p,maxItems:v,whiteSpacePattern:y,additionalProperty:b,enumValues:C,anyOfValues:L,bubbleChartValidateMsg:x,queryError:g,histogramEmptyField:j,invalidSeriesType:$,or:f,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:S,pieChartSlicesCannotExceedLimit:E,gaugeCannotExceedLimit:k,uniqueSeriesLineCountCannotExceedLimit:P,twoSeriesLineCountCannotExceedLimit:z,threePlusSeriesLineCountCannotExceedLimit:V,lineSeriesCountCannotExceedLimit:I,uniqueSeriesBoxCountCannotExceedLimit:K,twoSeriesBoxCountCannotExceedLimit:B,threePlusBoxLineCountCannotExceedLimit:q,boxSeriesCountCannotExceedLimit:F,boxSeriesOutlierCannotExceedLimit:w};e.additionalProperty=b,e.anyOfValues=L,e.barSeriesCountCannotExceedLimit=i,e.boxSeriesCountCannotExceedLimit=F,e.boxSeriesOutlierCannotExceedLimit=w,e.bubbleChartValidateMsg=x,e.default=D,e.defaultError=t,e.defaultInvalidChart=r,e.duplicateSeriesID=l,e.enumValues=C,e.gaugeCannotExceedLimit=k,e.histogramEmptyField=j,e.invalidSeriesType=$,e.layerLoadFailure=d,e.lineSeriesCountCannotExceedLimit=I,e.maxItems=v,e.minItems=p,e.minLength=h,e.negativeValueInDataForLogTransformation=m,e.negativeValueInDataForSqrtTransformation=s,e.nonNumericAggregation=u,e.or=f,e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=S,e.pieChartSlicesCannotExceedLimit=E,e.queryError=g,e.requiredProperty=c,e.threePlusBoxLineCountCannotExceedLimit=q,e.threePlusSeriesBarCountCannotExceedLimit=a,e.threePlusSeriesLineCountCannotExceedLimit=V,e.twoSeriesBarCountCannotExceedLimit=n,e.twoSeriesBoxCountCannotExceedLimit=B,e.twoSeriesLineCountCannotExceedLimit=z,e.uniqueSeriesBarCountCannotExceedLimit=o,e.uniqueSeriesBoxCountCannotExceedLimit=K,e.uniqueSeriesLineCountCannotExceedLimit=P,e.whiteSpacePattern=y}));