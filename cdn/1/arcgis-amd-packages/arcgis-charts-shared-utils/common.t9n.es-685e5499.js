define(["exports"],(function(e){"use strict";const _={mean:"Valor medio",median:"Mediana",sum:"Suma",discretePercentitle:"Percentil discreto",minimum:"Mínimo",maximum:"Máximo",variance:"Varianza",count:"Recuento",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sin agregación"},a="Gráfico",t="Recuento de series",i="Eje X",s="No disponible",o={start:"Alinear con el primer punto de datos",end:"Alinear con el último punto de datos"},n="No hay datos disponibles para mostrar debido a que los campos de datos están vacíos o debido a la combinación de filtros.",r="á_Filter by selection is enabled. There are no selected features to display______________________________________Ó.",d="á_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Ó.";var l={statistics:_,defaultTitle:a,countSeries:t,xAxis:i,notAvailable:s,timeAggregationTypes:o,noDataMessage:n,noDataFBSMessage:r,noDataFBEMessage:d};e.countSeries=t,e.default=l,e.defaultTitle=a,e.noDataFBEMessage=d,e.noDataFBSMessage=r,e.noDataMessage=n,e.notAvailable=s,e.statistics=_,e.timeAggregationTypes=o,e.xAxis=i}));