define(['exports'], (function (exports) { 'use strict';

	const defaultError="Terjadi kesalahan saat memuat grafik.";const uniqueSeriesBarCountCannotExceedLimit="Ada total ${ elementCount } bilah untuk diagram ini. Grafik batang dengan satu rangkaian dibatasi menjadi ${ totalLimit } batang. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const twoSeriesBarCountCannotExceedLimit="Grafik batang dengan dua rangkaian dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const threePlusSeriesBarCountCannotExceedLimit="Grafik batang dengan tiga rangkaian atau lebih dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const barSeriesCountCannotExceedLimit="Diagram batang terbatas pada seri ${ seriesLimit }. Pilih bidang terpisah dengan nilai unik yang lebih sedikit";const defaultInvalidChart="Terjadi kesalahan saat membuat grafik.";const negativeValueInDataForLogTransformation="Tidak dapat menerapkan transformasi log ke nilai negatif atau nol.";const negativeValueInDataForSqrtTransformation="Tidak dapat menerapkan transformasi akar pangkat dua ke nilai negatif.";const layerLoadFailure="Terjadi kesalahan saat memuat layer. URL = ${ url }. ID item portal = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } harus unik. Rangkaian yang bernama ${ seriesName } memiliki ID (${ seriesID }) yang sudah digunakan oleh rangkaian lain.";const nonNumericAggregation="${ dataPath } tidak dapat melakukan agregasi non-hitungan di kolom non-numerik.";const requiredProperty="${ dataPath } tidak memiliki properti bernama ${ missingProperty }.";const minLength="${ dataPath } tidak boleh lebih pendek dari ${ limit } karakter.";const minItems="${ dataPath } tidak boleh memiliki kurang dari ${ limit } item.";const maxItems="${ dataPath } tidak boleh memiliki lebih dari ${ limit } item.";const whiteSpacePattern="${ dataPath } harus memiliki setidaknya satu karakter non-spasi.";const additionalProperty="${ dataPath } tidak boleh memiliki ${ additionalProperty }.";const enumValues="${ dataPath } harus sama dengan salah satu nilai yang diizinkan ini: ${ allowedValues }.";const anyOfValues="${ dataPath } harus cocok dengan skema salah satu dari ini: ${ schemaOptions }.";const bubbleChartValidateMsg="Scatter plot dengan simbol proporsional tidak didukung. Ukuran simbol default sudah diterapkan.";const queryError="Gagal membaca input data.";const histogramEmptyField="Histogram memerlukan minimal dua nilai numerik.";const invalidSeriesType="Jenis seri yang diharapkan pada indeks ${ seriesIndex } adalah '${ expectedType }' tetapi '${ receivedType }' diterima sebagai gantinya";const or="atau";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Pastikan total jumlah kolom numerik yang dipilih mengembalikan semua nilai positif atau semua nilai negatif.";const pieChartSlicesCannotExceedLimit="Ada total ${ sliceCount } irisan dalam diagram ini. Diagram pai dibatasi hingga ${ totalLimit } irisan. Pilih kolom Kategori dengan nilai unik yang lebih sedikit, tambahkan kolom Numerik yang lebih sedikit, atau terapkan filter ke data Anda.";const gaugeCannotExceedLimit="Pengukur berbasis fitur terbatas ${ totalLimit } fitur. Filter data Anda";const uniqueSeriesLineCountCannotExceedLimit="Ada total ${ elementCount } penanda dalam diagram ini. Diagram garis dengan satu rangkaian dibatasi dengan ${ totalLimit } penanda. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const twoSeriesLineCountCannotExceedLimit="Diagram garis dengan dua rangkaian dibatasi dengan ${ totalLimit } penanda, atau ${ seriesLimit } penanda per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const threePlusSeriesLineCountCannotExceedLimit="Diagram garis dengan tiga rangkaian atau lebih dibatasi dengan ${ totalLimit } penanda, atau ${ seriesLimit } penanda per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const lineSeriesCountCannotExceedLimit="Diagram garis dibatasi dengan ${ seriesLimit } seri. Pilih bidang terpisah dengan nilai unik yang lebih sedikit";const uniqueSeriesBoxCountCannotExceedLimit="Ada total ${ elementCount } kotak pada diagram ini. Plot kotak dengan satu seri dibatasi hanya dengan ${ totalLimit } kotak. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const twoSeriesBoxCountCannotExceedLimit="Plot kotak dengan dua seri dibatasi dengan ${ totalLimit } kotak, atau ${ seriesLimit } kotak per seri. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const threePlusBoxLineCountCannotExceedLimit="Plot kotak dengan tiga seri atau lebih dibatasi dengan ${ totalLimit } kotak, atau ${ seriesLimit } kotak per seri. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.";const boxSeriesCountCannotExceedLimit="Plot kotak dibatasi dengan ${ seriesLimit } seri. Pilih bidang terpisah dengan nilai unik yang lebih sedikit";const boxSeriesOutlierCannotExceedLimit="Plot kotak hanya dapat menampilkan hingga ${ totalLimit } titik outlier. Filter data Anda.";var errors_t9n_id={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_id;
	exports.defaultError = defaultError;
	exports.defaultInvalidChart = defaultInvalidChart;
	exports.duplicateSeriesID = duplicateSeriesID;
	exports.enumValues = enumValues;
	exports.gaugeCannotExceedLimit = gaugeCannotExceedLimit;
	exports.histogramEmptyField = histogramEmptyField;
	exports.invalidSeriesType = invalidSeriesType;
	exports.layerLoadFailure = layerLoadFailure;
	exports.lineSeriesCountCannotExceedLimit = lineSeriesCountCannotExceedLimit;
	exports.maxItems = maxItems;
	exports.minItems = minItems;
	exports.minLength = minLength;
	exports.negativeValueInDataForLogTransformation = negativeValueInDataForLogTransformation;
	exports.negativeValueInDataForSqrtTransformation = negativeValueInDataForSqrtTransformation;
	exports.nonNumericAggregation = nonNumericAggregation;
	exports.or = or;
	exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices = pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;
	exports.pieChartSlicesCannotExceedLimit = pieChartSlicesCannotExceedLimit;
	exports.queryError = queryError;
	exports.requiredProperty = requiredProperty;
	exports.threePlusBoxLineCountCannotExceedLimit = threePlusBoxLineCountCannotExceedLimit;
	exports.threePlusSeriesBarCountCannotExceedLimit = threePlusSeriesBarCountCannotExceedLimit;
	exports.threePlusSeriesLineCountCannotExceedLimit = threePlusSeriesLineCountCannotExceedLimit;
	exports.twoSeriesBarCountCannotExceedLimit = twoSeriesBarCountCannotExceedLimit;
	exports.twoSeriesBoxCountCannotExceedLimit = twoSeriesBoxCountCannotExceedLimit;
	exports.twoSeriesLineCountCannotExceedLimit = twoSeriesLineCountCannotExceedLimit;
	exports.uniqueSeriesBarCountCannotExceedLimit = uniqueSeriesBarCountCannotExceedLimit;
	exports.uniqueSeriesBoxCountCannotExceedLimit = uniqueSeriesBoxCountCannotExceedLimit;
	exports.uniqueSeriesLineCountCannotExceedLimit = uniqueSeriesLineCountCannotExceedLimit;
	exports.whiteSpacePattern = whiteSpacePattern;

}));
//# sourceMappingURL=errors.t9n.id-3f98f9f0-3fdeffca.js.map