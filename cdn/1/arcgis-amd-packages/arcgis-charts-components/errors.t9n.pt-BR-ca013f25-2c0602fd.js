/*! For license information please see errors.t9n.pt-BR-ca013f25-2c0602fd.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const o="Ocorreu um erro ao carregar o gráfico.",a="Há um total de ${ elementCount } barras para este gráfico. Os gráficos de barras com uma série são limitados a ${ totalLimit } barras. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",i="Os gráficos de barras com duas séries são limitados a ${ totalLimit } barras ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",s="Os gráficos de barras com três séries são limitados a ${ totalLimit } barras, ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",t="Os gráficos de barras são limitados a séries ${ seriesLimit }. Escolha um campo dividido por com menos valores únicos",r="Ocorreu um erro ao criar o gráfico.",m="Não é possível aplicar transformação de log para valores negativos ou zero.",n="Não é possível aplicar transformação de raiz quadrada para valores negativos.",d="Ocorreu um erro ao carregar a camada. URL = ${ url }. D de item do portal = ${ portalItemId }.",u="${ dataPath } deve ser único. A série denominada ${ seriesName } tem um id (${ seriesID }) que já é usado por outra série.",c="${ dataPath } não deve realizar agregação sem contagem em campo não numérico.",l="${ dataPath } está sem uma propriedade denominada ${ missingProperty }.",p="${ dataPath } não deve ser menor que ${ limit } caracteres.",C="${ dataPath } não deve ter menos que ${ limit } itens.",x="${ dataPath } não deve ter mais de ${ limit } itens.",g="${ dataPath } deve ter pelo menos um caractere diferente de espaço em branco.",L="${ dataPath } não deve ter ${ additionalProperty }.",v="${ dataPath } deve ser igual a um destes valores permitidos: ${ allowedValues }.",h="${ dataPath } deve corresponder ao esquema de um destes: ${ schemaOptions }.",f="Gráficos de dispersão com símbolos proporcionais não são suportados. O tamanho padrão do símbolo foi aplicado.",E="Falha ao ler os dados de entrada.",$="Os histogramas exigem pelo menos dois valores numéricos.",S="O tipo de série esperado no índice${ seriesIndex } é '${ expectedType }' mas '${ receivedType }' foi recebido em seu lugar",q="Certifique-se de que a soma total dos campos numéricos escolhidos retorne todos os valores positivos ou todos os valores negativos.",b="Há um total de ${ sliceCount } divisões neste gráfico. Os gráficos de pizza são limitados a ${ totalLimit } divisões. Escolha um campo de Categoria com menos valores únicos, adicione menos campos numéricos ou aplique um filtro aos seus dados.",P="Medidores baseados em feição são limitados a ${ totalLimit } feições. Filtre seus dados.",O="Há um total de ${ elementCount } marcadores neste gráfico. Os gráficos de linhas com uma série são limitados a ${ totalLimit } marcadores. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",y="Os gráficos de linhas com duas séries estão limitados a ${ totalLimit } marcadores, ou ${ seriesLimit } marcadores por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",I="Os gráficos de linhas com três ou mais séries estão limitados a ${ totalLimit } marcadores, ou ${ seriesLimit } marcadores por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",B="Os gráficos de linhas são limitados a séries ${ seriesLimit }. Escolha um campo dividido por com menos valores únicos",D="Há um total de caixas ${ elementCount } neste gráfico. Diagramas de caixa com uma série são limitados a ${ totalLimit } caixas. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",F="Diagramas de caixa com duas séries são limitados a caixas ${ totalLimit } ou ${ seriesLimit } caixas por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",V="Diagramas de caixa com três ou mais séries estão limitados a ${ totalLimit } caixas ou ${ seriesLimit } caixas por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",w="Os diagramas de caixa são limitados às séries ${ seriesLimit }. Escolha um campo dividido por com menos valores únicos",T="Os gráficos de caixa só podem exibir ${ totalLimit } pontos discrepantes. Filtre seus dados.";var N={defaultError:o,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:s,barSeriesCountCannotExceedLimit:t,defaultInvalidChart:r,negativeValueInDataForLogTransformation:m,negativeValueInDataForSqrtTransformation:n,layerLoadFailure:d,duplicateSeriesID:u,nonNumericAggregation:c,requiredProperty:l,minLength:p,minItems:C,maxItems:x,whiteSpacePattern:g,additionalProperty:L,enumValues:v,anyOfValues:h,bubbleChartValidateMsg:f,queryError:E,histogramEmptyField:$,invalidSeriesType:S,or:"ou",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:q,pieChartSlicesCannotExceedLimit:b,gaugeCannotExceedLimit:P,uniqueSeriesLineCountCannotExceedLimit:O,twoSeriesLineCountCannotExceedLimit:y,threePlusSeriesLineCountCannotExceedLimit:I,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:D,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:V,boxSeriesCountCannotExceedLimit:w,boxSeriesOutlierCannotExceedLimit:T};e.additionalProperty=L,e.anyOfValues=h,e.barSeriesCountCannotExceedLimit=t,e.boxSeriesCountCannotExceedLimit=w,e.boxSeriesOutlierCannotExceedLimit=T,e.bubbleChartValidateMsg=f,e.default=N,e.defaultError=o,e.defaultInvalidChart=r,e.duplicateSeriesID=u,e.enumValues=v,e.gaugeCannotExceedLimit=P,e.histogramEmptyField=$,e.invalidSeriesType=S,e.layerLoadFailure=d,e.lineSeriesCountCannotExceedLimit=B,e.maxItems=x,e.minItems=C,e.minLength=p,e.negativeValueInDataForLogTransformation=m,e.negativeValueInDataForSqrtTransformation=n,e.nonNumericAggregation=c,e.or="ou",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=q,e.pieChartSlicesCannotExceedLimit=b,e.queryError=E,e.requiredProperty=l,e.threePlusBoxLineCountCannotExceedLimit=V,e.threePlusSeriesBarCountCannotExceedLimit=s,e.threePlusSeriesLineCountCannotExceedLimit=I,e.twoSeriesBarCountCannotExceedLimit=i,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=y,e.uniqueSeriesBarCountCannotExceedLimit=a,e.uniqueSeriesBoxCountCannotExceedLimit=D,e.uniqueSeriesLineCountCannotExceedLimit=O,e.whiteSpacePattern=g}));