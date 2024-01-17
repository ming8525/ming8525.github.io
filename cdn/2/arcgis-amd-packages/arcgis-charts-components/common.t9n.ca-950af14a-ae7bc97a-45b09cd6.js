define(["exports"],(function(exports){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See LICENSE.md for details.
	 * v1.0.0-beta.703
	 */const statistics={mean:"Mitjana",median:"Mediana",sum:"Suma",discretePercentitle:"Percentil discret",minimum:"Mínim",maximum:"Màxim",variance:"Variància",count:"Recompte",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Sense agregació"};const defaultTitle="Gràfic";const countSeries="Recompte de sèries";const xAxis="Eix X";const notAvailable="No disponible";const timeAggregationTypes={start:"Ajusta al primer punt de dades",end:"Ajusta a l'últim punt de dades"};const noDataMessage="No hi ha dades disponibles per mostrar a causa de camps de dades buits o de combinacions de filtres.";const noDataFBSMessage="ó_Filter by selection is enabled. There are no selected features to display______________________________________à.";const noDataFBEMessage="ó_Filter by extent is enabled. There are no features in the map extent to display_________________________________________à.";var common_t9n_ca={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};exports.countSeries=countSeries;exports["default"]=common_t9n_ca;exports.defaultTitle=defaultTitle;exports.noDataFBEMessage=noDataFBEMessage;exports.noDataFBSMessage=noDataFBSMessage;exports.noDataMessage=noDataMessage;exports.notAvailable=notAvailable;exports.statistics=statistics;exports.timeAggregationTypes=timeAggregationTypes;exports.xAxis=xAxis}));