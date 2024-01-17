define(['exports'], (function (exports) { 'use strict';

	const defaultError="אירעה שגיאה במהלך טעינת התרשים.";const uniqueSeriesBarCountCannotExceedLimit='קיימות בסה"כ ${ elementCount } עמודות בתרשים זה. תרשימי עמודות עם סדרה אחת מוגבלים ל-${ totalLimit } עמודות. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.';const twoSeriesBarCountCannotExceedLimit="תרשימי עמודות עם שתי סדרות מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות בכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const threePlusSeriesBarCountCannotExceedLimit="תרשימי עמודות עם שלוש סדרות או יותר מוגבלים ל-${ totalLimit } עמודות, או ל-${ seriesLimit } עמודות לכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const barSeriesCountCannotExceedLimit="תרשימי טורים מוגבלים ל-${ seriesLimit } סדרות. בחר שדה 'פיצול לפי' עם פחות ערכים ייחודיים";const defaultInvalidChart="אירעה שגיאה ביצירת התרשים.";const negativeValueInDataForLogTransformation="לא ניתן לבצע טרנספורמציה לוגריתמית על ערכים שליליים או על אפס.";const negativeValueInDataForSqrtTransformation="לא ניתן לבצע טרנספורמציה של שורש ריבועי על ערכים שליליים.";const layerLoadFailure="אירעה שגיאה במהלך טעינת השכבה. URL = ${ url }. מזהה פריט פורטל =${ portalItemId }.";const duplicateSeriesID="${ dataPath } חייב/ת להיות ייחודי/ת. לסדרה בשם ${ seriesName } יש מזהה (${ seriesID }) שבו משתמשת כבר סדרה אחרת.";const nonNumericAggregation="ל-${ dataPath } אסור לבצע צבירה שאינה ספירה על שדה לא מספרי.";const requiredProperty="ב-${ dataPath } חסר מאפיין בשם ${ missingProperty }.";const minLength="${ dataPath } לא יכול להיות קצר יות מ-${ limit } תווים.";const minItems="ל-${ dataPath } לא יכולים להיות פחות מ-${ limit } פריטים.";const maxItems="ל-${ dataPath } לא יכולים להיות יותר מ-${ limit } פריטים.";const whiteSpacePattern="ל-${ dataPath } חייב להיות לפחות תו אחד שאינו רווח בלתי נראה.";const additionalProperty="ל-${ dataPath } אסור לכלול ${ additionalProperty }.";const enumValues="${ dataPath } חייב להיות שווה לאחד מהערכים המותרים הבאים: ${ allowedValues }.";const anyOfValues="${ dataPath } חייב להתאים לסכמה של אחד מאלה: ${ schemaOptions }.";const bubbleChartValidateMsg="תרשימי פיזור עם סמלים פרופורציונליים לא נתמכים. הוחל גודל סמל שמוגדר כברירת מחדל.";const queryError="קריאת נתוני הקלט נכשלה.";const histogramEmptyField="היסטוגרמות חייבות לכלול לפחות שני ערכים מספריים.";const invalidSeriesType="סוג הסדרה הצפוי במדד ${ seriesIndex } הוא '${ expectedType }', אבל במקום זאת התקבל '${ receivedType }'.";const or="או";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="הבטח שהסכום הכולל של השדה/ות המספריים שנבחרו יחזירו רק ערכים חיוביים או רק נתונים שליליים.";const pieChartSlicesCannotExceedLimit='קיימות בסה"כ ${ sliceCount } פרוסות בתרשים זה. תרשימי עוגה מוגבלים ל-${ totalLimit } פלחים. בחר שדה קטגוריה עם פחות ערכים ייחודיים, הוסף פחות שדות מספריים או החל מסנן על הנתונים שלך.';const gaugeCannotExceedLimit="מדים מבוססי-ישויות מוגבלים ל-${ totalLimit } ישויות. סנן את הנתונים.";const uniqueSeriesLineCountCannotExceedLimit='קיימים בסה"כ ${ elementCount } סמנים בתרשים זה. תרשימי שורות עם סדרה אחת מוגבלים ל-${ totalLimit } סמנים. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.';const twoSeriesLineCountCannotExceedLimit="תרשימי שורות עם שתי סדרות מוגבלים ל-${ totalLimit } סמנים, או ל-${ seriesLimit } סמנים בכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const threePlusSeriesLineCountCannotExceedLimit="תרשימי שורות עם שלוש סדרות או יותר מוגבלים ל-${ totalLimit } סמנים, או ל-${ seriesLimit } עמודות לכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const lineSeriesCountCannotExceedLimit="תרשימי שורות מוגבלים ל-${ seriesLimit } סדרות. בחר שדה 'פיצול לפי' עם פחות ערכים ייחודיים";const uniqueSeriesBoxCountCannotExceedLimit='קיימות בסה"כ ${ elementCount } תיבות בתרשים זה. תרשימי תיבה עם סדרה אחת מוגבלים ל-${ totalLimit } תיבות. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.';const twoSeriesBoxCountCannotExceedLimit="תרשימי תיבה עם שתי סדרות מוגבלים ל-${ totalLimit } תיבות, או ל-${ seriesLimit } תיבות בכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const threePlusBoxLineCountCannotExceedLimit="תרשימי תיבות עם שלוש סדרות או יותר מוגבלים ל-${ totalLimit } תיבות, או ל-${ seriesLimit } תיבות לכל סדרה. בחר שדה קטגוריה עם פחות ערכים ייחודיים או החל מסנן על הנתונים שלך.";const boxSeriesCountCannotExceedLimit="תרשימי תיבה מוגבלים ל-${ seriesLimit } סדרות. בחר שדה 'פיצול לפי' עם פחות ערכים ייחודיים";const boxSeriesOutlierCannotExceedLimit="בתרשימי תיבה ניתן להציג עד ${ totalLimit } נקודות סטייה ניכרת בלבד. סנן את הנתונים.";var errors_t9n_he={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_he;
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
//# sourceMappingURL=errors.t9n.he-1f425b0c-06dbbf2e-d1262216.js.map
