/*! For license information please see errors.t9n.es-3a67083c-c55b944c.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const a="Se ha producido un error al cargar el gráfico.",o="Este gráfico tiene un total de ${ elementCount } barras. Los gráficos de barras con una serie están limitados a ${ totalLimit } barras. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",i="Los gráficos de barras con dos series están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",s="Los gráficos de barras con tres series o más están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",t='Los gráficos de barras están limitados a ${ seriesLimit } series. Elija un campo "dividir por" con menos valores únicos',r="Se ha producido un error al crear el gráfico.",n="No se puede aplicar una transformación del registro a valores negativos o de cero.",d="No se puede aplicar una transformación de raíz cuadrada a valores negativos.",l="Se ha producido un error al cargar la capa. URL = ${ url }. Id. de elemento de portal = ${ portalItemId }.",c="El elemento ${ dataPath } debe ser único. La serie denominada ${ seriesName } tiene un Id. (${ seriesID }) que ya se utiliza en otra serie.",u="${ dataPath } no puede realizar una agregación no numérica en un campo no numérico.",m="A ${ dataPath } le falta la propiedad denominada ${ missingProperty }.",p="${ dataPath } no debe tener menos de ${ limit } caracteres.",L="${ dataPath } no debe tener menos de ${ limit } elementos.",C="${ dataPath } no debe tener más de ${ limit } elementos.",g="${ dataPath } debe tener al menos un carácter que no sea un espacio en blanco.",E="${ dataPath } no debe tener ${ additionalProperty }",f="${ dataPath } debe ser igual a uno de los siguientes valores permitidos: ${ allowedValues }.",$="${ dataPath } debe coincidir con el esquema de uno de estos: ${ schemaOptions }.",x="No se admiten diagramas de dispersión con símbolos proporcionales. Se ha aplicado el tamaño de símbolo predeterminado.",v="Error al leer los datos de entrada.",h="Los histogramas requieren al menos dos valores numéricos.",S='El tipo de serie esperado en el índice ${ seriesIndex } es "${ expectedType }", pero en su lugar se ha recibido "${ receivedType }"',b="Asegúrese de que la suma total de los campos numéricos elegidos devuelva valores positivos en su totalidad o valores negativos en su totalidad.",q="Este gráfico tiene un total de ${ sliceCount } fracciones. Los gráficos circulares están limitados a ${ totalLimit } sectores. Elija un campo de categoría con menos valores únicos, agregue menos campos numéricos o aplique un filtro a sus datos.",P="Los calibres basados en entidades se limitan a ${ totalLimit } entidades. Filtre los datos.",j="En este gráfico hay un total de ${ elementCount } marcadores. Los gráficos lineales con una serie están limitados a ${ totalLimit } marcadores. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",y="Los gráficos lineales con dos series están limitados a ${ totalLimit } marcadores o a ${ seriesLimit } marcadores por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",I="Los gráficos de líneas con tres o más series están limitados a ${ totalLimit } marcadores o a ${ seriesLimit } marcadores por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",B='Los gráficos de líneas están limitados a ${ seriesLimit } series. Elija un campo "dividir por" con menos valores únicos',V="En este gráfico hay un total de ${ elementCount } cuadros. Los gráficos de caja con una serie están limitados a ${ totalLimit } las cajas. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",F="Los gráficos de cajas con dos series están limitados a ${ totalLimit } cajas o a ${ seriesLimit } cajas por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",w="Los gráficos de cajas con tres o más series están limitados a ${ totalLimit } cajas o a ${ seriesLimit } cajas por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",N='Los gráficos de caja están limitados a ${ seriesLimit } series. Elija un campo "dividir por" con menos valores únicos',T="Los gráficos de caja solo pueden mostrar hasta ${ totalLimit } puntos de valores atípicos. Filtre sus datos.";var D={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:o,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:s,barSeriesCountCannotExceedLimit:t,defaultInvalidChart:r,negativeValueInDataForLogTransformation:n,negativeValueInDataForSqrtTransformation:d,layerLoadFailure:l,duplicateSeriesID:c,nonNumericAggregation:u,requiredProperty:m,minLength:p,minItems:L,maxItems:C,whiteSpacePattern:g,additionalProperty:E,enumValues:f,anyOfValues:$,bubbleChartValidateMsg:x,queryError:v,histogramEmptyField:h,invalidSeriesType:S,or:"o",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:b,pieChartSlicesCannotExceedLimit:q,gaugeCannotExceedLimit:P,uniqueSeriesLineCountCannotExceedLimit:j,twoSeriesLineCountCannotExceedLimit:y,threePlusSeriesLineCountCannotExceedLimit:I,lineSeriesCountCannotExceedLimit:B,uniqueSeriesBoxCountCannotExceedLimit:V,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:w,boxSeriesCountCannotExceedLimit:N,boxSeriesOutlierCannotExceedLimit:T};e.additionalProperty=E,e.anyOfValues=$,e.barSeriesCountCannotExceedLimit=t,e.boxSeriesCountCannotExceedLimit=N,e.boxSeriesOutlierCannotExceedLimit=T,e.bubbleChartValidateMsg=x,e.default=D,e.defaultError=a,e.defaultInvalidChart=r,e.duplicateSeriesID=c,e.enumValues=f,e.gaugeCannotExceedLimit=P,e.histogramEmptyField=h,e.invalidSeriesType=S,e.layerLoadFailure=l,e.lineSeriesCountCannotExceedLimit=B,e.maxItems=C,e.minItems=L,e.minLength=p,e.negativeValueInDataForLogTransformation=n,e.negativeValueInDataForSqrtTransformation=d,e.nonNumericAggregation=u,e.or="o",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=b,e.pieChartSlicesCannotExceedLimit=q,e.queryError=v,e.requiredProperty=m,e.threePlusBoxLineCountCannotExceedLimit=w,e.threePlusSeriesBarCountCannotExceedLimit=s,e.threePlusSeriesLineCountCannotExceedLimit=I,e.twoSeriesBarCountCannotExceedLimit=i,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=y,e.uniqueSeriesBarCountCannotExceedLimit=o,e.uniqueSeriesBoxCountCannotExceedLimit=V,e.uniqueSeriesLineCountCannotExceedLimit=j,e.whiteSpacePattern=g}));