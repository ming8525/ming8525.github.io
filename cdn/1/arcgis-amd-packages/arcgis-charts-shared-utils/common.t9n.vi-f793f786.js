define(["exports"],(function(_){"use strict";const e={mean:"Trung bình",median:"Bình quân",sum:"Tổng",discretePercentitle:"Phân vị rời rạc",minimum:"Tối thiểu",maximum:"Tối đa",variance:"Phương sai",count:"Số lượng",aggregation:"${ statistics } / ${ fieldName }",noAggregation:"Không tổng hợp"},t="Biểu đồ",i="Đếm Số chuỗi",n="Trục X",a="Không Khả dụng",s={start:"Chuyển sang điểm dữ liệu đầu tiên",end:"Chuyển sang điểm dữ liệu cuối cùng"},g="Không có dữ liệu để hiển thị do (các) trường dữ liệu trống và/hoặc do sự kết hợp giữa các bộ lọc.",o="Đ_Filter by selection is enabled. There are no selected features to display______________________________________ớ.",r="Đ_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ớ.";var c={statistics:e,defaultTitle:t,countSeries:i,xAxis:n,notAvailable:a,timeAggregationTypes:s,noDataMessage:g,noDataFBSMessage:o,noDataFBEMessage:r};_.countSeries=i,_.default=c,_.defaultTitle=t,_.noDataFBEMessage=r,_.noDataFBSMessage=o,_.noDataMessage=g,_.notAvailable=a,_.statistics=e,_.timeAggregationTypes=s,_.xAxis=n}));