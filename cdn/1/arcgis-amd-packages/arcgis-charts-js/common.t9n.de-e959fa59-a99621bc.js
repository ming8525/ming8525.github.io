define(["exports"],(function(e){"use strict";const _={mean:"Mittelwert",median:"Medianwert",sum:"Summe",discretePercentitle:"Diskontinuierliches Perzentil",minimum:"Minimum",maximum:"Maximum",variance:"Varianz",count:"Anzahl",aggregation:"${ statistics } von ${ fieldName }",noAggregation:"Keine Aggregation"},t="Diagramm",n="Mengenserie",a="X-Achse",i="Nicht verfügbar",s={start:"Am ersten Datenpunkt fangen",end:"Am letzten Datenpunkt fangen"},r="Aufgrund von leeren Datenfeldern und/oder einer Kombination von Filtern sind keine Daten zum Anzeigen verfügbar.",o="ä_Filter by selection is enabled. There are no selected features to display______________________________________Ü.",g="ä_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Ü.";var l={statistics:_,defaultTitle:t,countSeries:n,xAxis:a,notAvailable:i,timeAggregationTypes:s,noDataMessage:r,noDataFBSMessage:o,noDataFBEMessage:g};e.countSeries=n,e.default=l,e.defaultTitle=t,e.noDataFBEMessage=g,e.noDataFBSMessage=o,e.noDataMessage=r,e.notAvailable=i,e.statistics=_,e.timeAggregationTypes=s,e.xAxis=a}));