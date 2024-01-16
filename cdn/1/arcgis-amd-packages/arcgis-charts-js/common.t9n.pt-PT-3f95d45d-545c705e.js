define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Média",median:"Mediana",sum:"Soma",discretePercentitle:"Percentil discreto",minimum:"Mínimo",maximum:"Máximo",variance:"Variação",count:"Contagem",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sem agregação"};const defaultTitle="Gráfico";const countSeries="Séries de Contagem";const xAxis="Eixo X";const notAvailable="Não disponível";const timeAggregationTypes={start:"Ajustar ao primeiro ponto de dados",end:"Ajustar ao último ponto de dados"};const noDataMessage="Não existem dados disponíveis para exibição devido a campos de dados vazios e/ou à combinação de filtros.";const noDataFBSMessage="ã_Filter by selection is enabled. There are no selected features to display______________________________________Ç.";const noDataFBEMessage="ã_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Ç.";var common_t9n_ptPT={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_ptPT;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.pt-PT-3f95d45d-545c705e.js.map
