define(["exports"],(function(e){"use strict";const _={mean:"Ortalama",median:"Medyan",sum:"Toplam",discretePercentitle:"Ayrık yüzdelik",minimum:"Minimum",maximum:"Maksimum",variance:"Varyans",count:"Sayım",aggregation:"${ statistics } / ${ fieldName }",noAggregation:"Kümeleme yok"},a="Grafik",t="Serileri Say",i="X Ekseni",n="Kullanılabilir Değil",s={start:"İlk veri noktasına yerleştir",end:"Son veri noktasına yerleştir"},r="Boş veri alanları ve/veya filtre kombinasyonu nedeniyle görüntülenecek veri bulunmuyor.",l="ı_Filter by selection is enabled. There are no selected features to display______________________________________İ.",o="ı_Filter by extent is enabled. There are no features in the map extent to display_________________________________________İ.";var m={statistics:_,defaultTitle:a,countSeries:t,xAxis:i,notAvailable:n,timeAggregationTypes:s,noDataMessage:r,noDataFBSMessage:l,noDataFBEMessage:o};e.countSeries=t,e.default=m,e.defaultTitle=a,e.noDataFBEMessage=o,e.noDataFBSMessage=l,e.noDataMessage=r,e.notAvailable=n,e.statistics=_,e.timeAggregationTypes=s,e.xAxis=i}));