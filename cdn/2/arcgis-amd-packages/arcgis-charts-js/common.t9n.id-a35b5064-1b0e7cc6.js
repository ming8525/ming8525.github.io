define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Rata-rata",median:"Median",sum:"Sum",discretePercentitle:"Persentil diskrit",minimum:"Minimal",maximum:"Maksimal",variance:"Varian",count:"Count",aggregation:"${ statistics } dari ${ fieldName }",noAggregation:"Tidak ada agregasi"};const defaultTitle="Diagram";const countSeries="Jumlah Rangkaian";const xAxis="Sumbu X";const notAvailable="Tidak Tersedia";const timeAggregationTypes={start:"Posisikan ke titik data pertama",end:"Posisikan ke titik data terakhir"};const noDataMessage="Tidak ada data yang tersedia untuk ditampilkan karena kolom data kosong dan/atau kombinasi filter.";const noDataFBSMessage="ng_Filter by selection is enabled. There are no selected features to display______________________________________ny.";const noDataFBEMessage="ng_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ny.";var common_t9n_id={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_id;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.id-a35b5064-1b0e7cc6.js.map
