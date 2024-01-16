/*! For license information please see errors.t9n.pl-ff93c2fd-ebde2b94-52f986a4-663fd14f.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const i="Wystąpił błąd podczas wczytywania diagramu.",a="Na tym diagramie znajduje się łącznie następująca liczba słupków: ${ elementCount }. Diagramy słupkowe z jedną serią są ograniczone do następującej liczby słupków: ${ totalLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",t="Diagramy słupkowe z dwiema seriami są ograniczone do następującej liczby słupków: ${ totalLimit } lub następującej liczby słupków na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",n="Diagramy słupkowe z trzema lub większą liczbą serii są ograniczone do następującej liczby słupków: ${ totalLimit } lub następującej liczby słupków na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",o="Diagramy słupkowe mogą mieć do ${ seriesLimit } serii. Wybierz pole Dziel według z mniejszą liczbą niepowtarzalnych wartości",r="Wystąpił błąd podczas tworzenia diagramu.",s="Nie można zastosować transformacji Logarytm do wartości ujemnych lub równych zero.",c="Nie można zastosować transformacji Pierwiastek kwadratowy do wartości ujemnych.",l="Wystąpił błąd podczas wczytywania warstwy. URL = ${ url }. Identyfikator elementu portalu = ${ portalItemId }.",u="Nazwa ${ dataPath } musi być unikalna. Seria o nazwie ${ seriesName } ma identyfikator (${ seriesID }), który jest już używany przez inną serię.",m="Element ${ dataPath } nie może wykonywać agregacji innej niż zliczenie na polu innym niż liczbowe.",d="W elemencie ${ dataPath } brak właściwości o nazwie ${ missingProperty }.",z="Element ${ dataPath } nie może być krótszy niż następująca liczba znaków: ${ limit }.",y="Element ${ dataPath } nie może mieć mniej elementów niż ${ limit }.",w="Element ${ dataPath } nie może mieć więcej elementów niż ${ limit }.",j="Element ${ dataPath } musi zawierać co najmniej jeden znak inny niż biały znak.",p="Element ${ dataPath } nie może zawierać ${ additionalProperty }.",b="Element ${ dataPath } musi mieć wartość równą jednej z tych dozwolonych wartości: ${ allowedValues }.",h="Element ${ dataPath } musi być zgodny z jednym z tych schematów: ${ schemaOptions }.",g="Diagramy punktowe z symbolami proporcjonalnymi nie są obsługiwane. Zastosowano domyślną wielkość symbolu.",k="Nie powiódł się odczyt danych wejściowych.",C="Histogramy wymagają co najmniej dwóch wartości liczbowych.",L="Oczekiwany typ serii z indeksem ${ seriesIndex } to '${ expectedType }', ale zamiast niego otrzymano '${ receivedType }'",$="Sprawdź, czy suma całkowita wybranych pól liczbowych zwraca tylko wartości dodatnie czy tylko wartości ujemne.",x="Na tym diagramie znajduje się łącznie następująca liczba wycinków: ${ sliceCount }. Na diagramach kołowych może znajdować się maksymalnie ${ totalLimit } wycinków. Wybierz pole Kategoria zawierające mniej wartości unikalnych, dodaj mniej pól liczbowych lub zastosuj filtr do swoich danych.",E="Kontrolki oparte na obiektach są ograniczone do następującej liczby obiektów: ${ totalLimit }. Przefiltruj dane.",S="Na tym diagramie znajduje się łącznie następująca liczba znaczników: ${ elementCount }. Diagramy liniowe z jedną serią są ograniczone do następującej liczby znaczników: ${ totalLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",f="Diagramy liniowe z dwiema seriami są ograniczone do następującej liczby znaczników: ${ totalLimit } lub następującej liczby znaczników na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",P="Diagramy liniowe z trzema lub większą liczbą serii są ograniczone do następującej liczby znaczników: ${ totalLimit } lub następującej liczby znaczników na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",D="Diagramy liniowe mogą mieć do ${ seriesLimit } serii. Wybierz pole Dziel według z mniejszą liczbą niepowtarzalnych wartości",I="Na tym diagramie znajduje się łącznie następująca liczba pudełek: ${ elementCount }. Diagramy pudełkowe z jedną serią są ograniczone do następującej liczby pudełek: ${ totalLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",W="Diagramy pudełkowe z dwiema seriami są ograniczone do następującej liczby pudełek: ${ totalLimit } lub następującej liczby pudełek na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",v="Diagramy pudełkowe z trzema lub większą liczbą serii są ograniczone do następującej liczby pudełek: ${ totalLimit } lub następującej liczby pudełek na serię: ${ seriesLimit }. Wybierz pole Kategoria zawierające mniej wartości unikalnych lub zastosuj filtr do swoich danych.",N="Diagramy pudełkowe mogą mieć do ${ seriesLimit } serii. Wybierz pole Dziel według z mniejszą liczbą niepowtarzalnych wartości",q="Diagramy pudełkowe mogą wyświetlać tylko do ${ totalLimit } punktów odstających. Filtruj dane.";var B={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:n,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:r,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:c,layerLoadFailure:l,duplicateSeriesID:u,nonNumericAggregation:m,requiredProperty:d,minLength:z,minItems:y,maxItems:w,whiteSpacePattern:j,additionalProperty:p,enumValues:b,anyOfValues:h,bubbleChartValidateMsg:g,queryError:k,histogramEmptyField:C,invalidSeriesType:L,or:"lub",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:$,pieChartSlicesCannotExceedLimit:x,gaugeCannotExceedLimit:E,uniqueSeriesLineCountCannotExceedLimit:S,twoSeriesLineCountCannotExceedLimit:f,threePlusSeriesLineCountCannotExceedLimit:P,lineSeriesCountCannotExceedLimit:D,uniqueSeriesBoxCountCannotExceedLimit:I,twoSeriesBoxCountCannotExceedLimit:W,threePlusBoxLineCountCannotExceedLimit:v,boxSeriesCountCannotExceedLimit:N,boxSeriesOutlierCannotExceedLimit:q};e.additionalProperty=p,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=N,e.boxSeriesOutlierCannotExceedLimit=q,e.bubbleChartValidateMsg=g,e.default=B,e.defaultError=i,e.defaultInvalidChart=r,e.duplicateSeriesID=u,e.enumValues=b,e.gaugeCannotExceedLimit=E,e.histogramEmptyField=C,e.invalidSeriesType=L,e.layerLoadFailure=l,e.lineSeriesCountCannotExceedLimit=D,e.maxItems=w,e.minItems=y,e.minLength=z,e.negativeValueInDataForLogTransformation=s,e.negativeValueInDataForSqrtTransformation=c,e.nonNumericAggregation=m,e.or="lub",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=$,e.pieChartSlicesCannotExceedLimit=x,e.queryError=k,e.requiredProperty=d,e.threePlusBoxLineCountCannotExceedLimit=v,e.threePlusSeriesBarCountCannotExceedLimit=n,e.threePlusSeriesLineCountCannotExceedLimit=P,e.twoSeriesBarCountCannotExceedLimit=t,e.twoSeriesBoxCountCannotExceedLimit=W,e.twoSeriesLineCountCannotExceedLimit=f,e.uniqueSeriesBarCountCannotExceedLimit=a,e.uniqueSeriesBoxCountCannotExceedLimit=I,e.uniqueSeriesLineCountCannotExceedLimit=S,e.whiteSpacePattern=j}));