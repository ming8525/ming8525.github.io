define(['exports'], (function (exports) { 'use strict';

	const defaultError="เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ";const uniqueSeriesBarCountCannotExceedLimit="มีทั้งหมด ${ elementCount } แท่งในแผนภูมินี้ แผนภูมิแท่งที่มีหนึ่งซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const twoSeriesBarCountCannotExceedLimit="แผนภูมิแท่งที่มีสองซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const threePlusSeriesBarCountCannotExceedLimit="แผนภูมิแท่งที่มีอย่างน้อยสามซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const barSeriesCountCannotExceedLimit="แผนภูมิแท่งจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง";const defaultInvalidChart="เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ";const negativeValueInDataForLogTransformation="ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้";const negativeValueInDataForSqrtTransformation="ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้";const layerLoadFailure="เกิดข้อผิดพลาดขึ้นขณะโหลดชั้นข้อมูล URL = ${ url } ID รายการพอร์ทัล = ${ portalItemId }";const duplicateSeriesID="${ dataPath } ต้องไม่ซ้ำกัน ซีรีส์ที่ชื่อ ${ seriesName } มี ID (${ seriesID }) ที่ซีรีส์อื่นใช้งานอยู่แล้ว";const nonNumericAggregation="${ dataPath } ไม่สามารถดำเนินการรวมแบบไม่นับกับฟิลด์ที่ไม่ใช่ตัวเลขได้";const requiredProperty="${ dataPath } ไม่มีชื่อคุณสมบัติ ${ missingProperty }";const minLength="${ dataPath } ต้องมีความยาวมากกว่า ${ limit } อักขระ";const minItems="${ dataPath } ต้องมีไม่น้อยกว่า ${ limit } รายการ";const maxItems="${ dataPath } ต้องมีไม่เกิน ${ limit } รายการ";const whiteSpacePattern="${ dataPath } ต้องมีอย่างน้อยหนึ่งอักขระที่ไม่ใช่ไวท์สเปซ";const additionalProperty="${ dataPath } ต้องไม่มี ${ additionalProperty }";const enumValues="${ dataPath } ต้องเท่ากับหนึ่งในค่าที่อนุญาตเหล่านี้: ${ allowedValues }";const anyOfValues="${ dataPath } ต้องตรงกับรูปแบบของหนึ่งในรายการเหล่านี้: ${ schemaOptions }";const bubbleChartValidateMsg="ไม่รองรับพล็อตการกระจายที่มีสัญลักษณ์ตามสัดส่วน ใช้ขนาดสัญลักษณ์เริ่มต้นแล้ว";const queryError="ไม่สามารถอ่านข้อมูลขาเข้า";const histogramEmptyField="ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข";const invalidSeriesType="ประเภทซีรีส์ที่คาดหวังที่ดัชนี ${ seriesIndex } คือ '${ expectedType }' แต่ได้รับ '${ receivedType }' แทน";const or="หรือ";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="ตรวจสอบให้แน่ใจว่าผลรวมทั้งหมดของฟิลด์ตัวเลขที่เลือก ส่งคืนค่าบวกทั้งหมดหรือค่าลบทั้งหมด";const pieChartSlicesCannotExceedLimit="มีทั้งหมด ${ sliceCount } สไลซ์ในแผนภูมินี้ แผนภูมิวงกลมจะถูกจำกัดไว้ที่ ${ totalLimit } สไลซ์ เลือกฟิลด์ หมวดหมู่ ที่มีค่าที่ไม่ซ้ำกันในจำนวนที่น้อยลง เพิ่มฟิลด์ตัวเลขที่น้อยลง หรือใช้ตัวกรองกับข้อมูลของคุณ";const gaugeCannotExceedLimit="เกจแบบอิงฟีเจอร์จะถูกจำกัดไว้ที่ ${ totalLimit } ฟีเจอร์ กรองข้อมูลของคุณ";const uniqueSeriesLineCountCannotExceedLimit="มีทั้งหมด ${ elementCount } มาร์คเกอร์ในแผนภูมินี้ แผนภูมิเส้นที่มีหนึ่งซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const twoSeriesLineCountCannotExceedLimit="แผนภูมิเส้นที่มีสองซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ หรือ ${ seriesLimit } มาร์คเกอร์ต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const threePlusSeriesLineCountCannotExceedLimit="แผนภูมิเส้นที่มีอย่างน้อยสามซีรีส์ขึ้นไป จะถูกจำกัดไว้ที่ ${ totalLimit } มาร์คเกอร์ หรือ ${ seriesLimit } มาร์คเกอร์ต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const lineSeriesCountCannotExceedLimit="แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง";const uniqueSeriesBoxCountCannotExceedLimit="มีทั้งหมด ${ elementCount } กล่องในแผนภูมินี้ พล็อตแบบกล่องที่มีหนึ่งซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const twoSeriesBoxCountCannotExceedLimit="พล็อตแบบกล่องที่มีสองซีรีส์จะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง หรือ ${ seriesLimit } กล่องต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const threePlusBoxLineCountCannotExceedLimit="พล็อตแบบกล่องที่มีอย่างน้อยสามซีรีส์ขึ้นไปจะถูกจำกัดไว้ที่ ${ totalLimit } กล่อง หรือ ${ seriesLimit } กล่องต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ";const boxSeriesCountCannotExceedLimit="พล็อตแบบกล่องจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ เลือกแบ่งตามฟิลด์ด้วยค่าที่ไม่ซ้ำกันจำนวนน้อยลง";const boxSeriesOutlierCannotExceedLimit="พล็อตแบบกล่องจะสามารถแสดงผลได้สูงสุด ${ totalLimit } จุดค่าผิดปกติ กรองข้อมูลของคุณ";var errors_t9n_th={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_th;
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
//# sourceMappingURL=errors.t9n.th-a83666df-02c41747-1a9c4e38.js.map
