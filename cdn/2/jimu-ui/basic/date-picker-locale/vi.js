System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'dưới 1 giây',
    other: 'dưới {{count}} giây'
  },
  xSeconds: {
    one: '1 giây',
    other: '{{count}} giây'
  },
  halfAMinute: 'nửa phút',
  lessThanXMinutes: {
    one: 'dưới 1 phút',
    other: 'dưới {{count}} phút'
  },
  xMinutes: {
    one: '1 phút',
    other: '{{count}} phút'
  },
  aboutXHours: {
    one: 'khoảng 1 giờ',
    other: 'khoảng {{count}} giờ'
  },
  xHours: {
    one: '1 giờ',
    other: '{{count}} giờ'
  },
  xDays: {
    one: '1 ngày',
    other: '{{count}} ngày'
  },
  aboutXWeeks: {
    one: 'khoảng 1 tuần',
    other: 'khoảng {{count}} tuần'
  },
  xWeeks: {
    one: '1 tuần',
    other: '{{count}} tuần'
  },
  aboutXMonths: {
    one: 'khoảng 1 tháng',
    other: 'khoảng {{count}} tháng'
  },
  xMonths: {
    one: '1 tháng',
    other: '{{count}} tháng'
  },
  aboutXYears: {
    one: 'khoảng 1 năm',
    other: 'khoảng {{count}} năm'
  },
  xYears: {
    one: '1 năm',
    other: '{{count}} năm'
  },
  overXYears: {
    one: 'hơn 1 năm',
    other: 'hơn {{count}} năm'
  },
  almostXYears: {
    one: 'gần 1 năm',
    other: 'gần {{count}} năm'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + ' nữa';
    } else {
      return result + ' trước';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: '{{date}} {{time}}',
  // ngày 25 tháng 08 năm 2017 23:25
  long: '{{date}} {{time}}',
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/localize/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/_lib/localize/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");
 // Vietnamese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134
var eraValues = {
  narrow: ['TCN', 'SCN'],
  abbreviated: ['trước CN', 'sau CN'],
  wide: ['trước Công Nguyên', 'sau Công Nguyên']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  // I notice many news outlet use this "quý II/2018"
  wide: ['quý I', 'quý II', 'quý III', 'quý IV']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
  wide: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']
};
// In Vietnamese date formatting, month number less than 10 expected to have leading zero
var formattingMonthValues = {
  narrow: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  abbreviated: ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'],
  wide: ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 12']
};
var dayValues = {
  narrow: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  short: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
  abbreviated: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  wide: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
};

// Vietnamese are used to AM/PM borrowing from English, hence `narrow` and
// `abbreviated` are just like English but I'm leaving the `wide`
// format being localized with abbreviations found in some systems (SÁng / CHiều);
// however, personally, I don't think `Chiều` sounds appropriate for `PM`
var dayPeriodValues = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'nửa đêm',
    noon: 'tr',
    morning: 'sg',
    afternoon: 'ch',
    evening: 'tối',
    night: 'đêm'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'nửa đêm',
    noon: 'trưa',
    morning: 'sáng',
    afternoon: 'chiều',
    evening: 'tối',
    night: 'đêm'
  },
  wide: {
    am: 'SA',
    pm: 'CH',
    midnight: 'nửa đêm',
    noon: 'giữa trưa',
    morning: 'vào buổi sáng',
    afternoon: 'vào buổi chiều',
    evening: 'vào buổi tối',
    night: 'vào ban đêm'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === 'quarter') {
    // many news outlets use "quý I"...
    switch (number) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
    }
  } else if (unit === 'day') {
    // day of week in Vietnamese has ordinal number meaning,
    // so we should use them, else it'll sound weird
    switch (number) {
      case 1:
        return 'thứ 2';
      // meaning 2nd day but it's the first day of the week :D
      case 2:
        return 'thứ 3';
      // meaning 3rd day
      case 3:
        return 'thứ 4';
      // meaning 4th day and so on
      case 4:
        return 'thứ 5';
      case 5:
        return 'thứ 6';
      case 6:
        return 'thứ 7';
      case 7:
        return 'chủ nhật';
      // meaning Sunday, there's no 8th day :D
    }
  } else if (unit === 'week') {
    if (number === 1) {
      return 'thứ nhất';
    } else {
      return 'thứ ' + number;
    }
  } else if (unit === 'dayOfYear') {
    if (number === 1) {
      return 'đầu tiên';
    } else {
      return 'thứ ' + number;
    }
  }

  // there are no different forms of ordinal numbers in Vietnamese
  return String(number);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/match/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/_lib/match/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
};
var parseEraPatterns = {
  any: [/^t/i, /^s/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
};
var parseQuarterPatterns = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
};
var matchMonthPatterns = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
};
var parseMonthPatterns = {
  narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
  abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
  wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
};
var matchDayPatterns = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};
var parseDayPatterns = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'wide'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/vi/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/vi/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/vi/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary Vietnamese locale (Vietnam).
 * @language Vietnamese
 * @iso-639-2 vie
 * @author Thanh Tran [@trongthanh]{@link https://github.com/trongthanh}
 * @author Leroy Hopson [@lihop]{@link https://github.com/lihop}
 */
var locale = {
  code: 'vi',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1 /* First week of new year contains Jan 1st  */
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);
})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9kYXRlLXBpY2tlci1sb2NhbGUvdmkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0oseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2xGNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTLE1BQU07QUFDMUI7QUFDQSxXQUFXLFNBQVMsTUFBTTtBQUMxQixhQUFhLFNBQVMsTUFBTTtBQUM1QixZQUFZLFNBQVMsTUFBTTtBQUMzQjtBQUNBO0FBQ0EsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVksMkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3ZDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ1h3QyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDdk13QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSTtBQUMxQiw0QkFBNEIsSUFBSTtBQUNoQyx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkVBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHNFQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsc0VBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHNFQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7O1VDekdwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNSO0FBQ1E7QUFDWjtBQUNOO0FBQzFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL3ZpL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL3ZpL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvdmkvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvdmkvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvdmkvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL3ZpL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnZMaw4bubaSAxIGdpw6J5JyxcbiAgICBvdGhlcjogJ2TGsOG7m2kge3tjb3VudH19IGdpw6J5J1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgZ2nDonknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGdpw6J5J1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ27hu61hIHBow7p0JyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2TGsOG7m2kgMSBwaMO6dCcsXG4gICAgb3RoZXI6ICdkxrDhu5tpIHt7Y291bnR9fSBwaMO6dCdcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIHBow7p0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBwaMO6dCdcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdraG/huqNuZyAxIGdp4budJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSBnaeG7nSdcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBnaeG7nScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZ2nhu50nXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBuZ8OgeScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbmfDoHknXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAna2hv4bqjbmcgMSB0deG6p24nLFxuICAgIG90aGVyOiAna2hv4bqjbmcge3tjb3VudH19IHR14bqnbidcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB0deG6p24nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHR14bqnbidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAna2hv4bqjbmcgMSB0aMOhbmcnLFxuICAgIG90aGVyOiAna2hv4bqjbmcge3tjb3VudH19IHRow6FuZydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgdGjDoW5nJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB0aMOhbmcnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAna2hv4bqjbmcgMSBuxINtJyxcbiAgICBvdGhlcjogJ2tob+G6o25nIHt7Y291bnR9fSBuxINtJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIG7Eg20nLFxuICAgIG90aGVyOiAne3tjb3VudH19IG7Eg20nXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdoxqFuIDEgbsSDbScsXG4gICAgb3RoZXI6ICdoxqFuIHt7Y291bnR9fSBuxINtJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdn4bqnbiAxIG7Eg20nLFxuICAgIG90aGVyOiAnZ+G6p24ge3tjb3VudH19IG7Eg20nXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIG7hu69hJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgdHLGsOG7m2MnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICAvLyB0aOG7qSBTw6F1LCBuZ8OgeSAyNSB0aMOhbmcgMDggbsSDbSAyMDE3XG4gIGZ1bGw6IFwiRUVFRSwgJ25nw6B5JyBkIE1NTU0gJ27Eg20nIHlcIixcbiAgLy8gbmfDoHkgMjUgdGjDoW5nIDA4IG7Eg20gMjAxN1xuICBsb25nOiBcIiduZ8OgeScgZCBNTU1NICduxINtJyB5XCIsXG4gIC8vIDI1IHRoZyAwOCBuxINtIDIwMTdcbiAgbWVkaXVtOiBcImQgTU1NICduxINtJyB5XCIsXG4gIC8vIDI1LzA4LzIwMTdcbiAgc2hvcnQ6ICdkZC9NTS95J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICAvLyB0aOG7qSBTw6F1LCBuZ8OgeSAyNSB0aMOhbmcgMDggbsSDbSAyMDE3IDIzOjI1OjU5XG4gIGZ1bGw6ICd7e2RhdGV9fSB7e3RpbWV9fScsXG4gIC8vIG5nw6B5IDI1IHRow6FuZyAwOCBuxINtIDIwMTcgMjM6MjVcbiAgbG9uZzogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiZWVlZSAndHXhuqduIHRyxrDhu5tjIHbDoG8gbMO6YycgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ2jDtG0gcXVhIHbDoG8gbMO6YycgcFwiLFxuICB0b2RheTogXCInaMO0bSBuYXkgdsOgbyBsw7pjJyBwXCIsXG4gIHRvbW9ycm93OiBcIiduZ8OgeSBtYWkgdsOgbyBsw7pjJyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ3Thu5tpIHbDoG8gbMO6YycgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjsgLy8gVmlldG5hbWVzZSBsb2NhbGUgcmVmZXJlbmNlOiBodHRwOi8vd3d3LmxvY2FsZXBsYW5ldC5jb20vaWN1L3ZpLVZOL2luZGV4Lmh0bWxcbi8vIENhcGl0YWxpemF0aW9uIHJlZmVyZW5jZTogaHR0cDovL2hjbXVwLmVkdS52bi9pbmRleC5waHA/b3B0aW9uPWNvbV9jb250ZW50JnZpZXc9YXJ0aWNsZSZpZD00MTA2JTNBdml0LWhvYS10cm9uZy12bi1ibi1oYW5oLWNoaW5oJmNhdGlkPTIzNDUlM0F0aGFtLWtobyZJdGVtaWQ9NDEwMyZsYW5nPXZpJnNpdGU9MTM0XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnVENOJywgJ1NDTiddLFxuICBhYmJyZXZpYXRlZDogWyd0csaw4bubYyBDTicsICdzYXUgQ04nXSxcbiAgd2lkZTogWyd0csaw4bubYyBDw7RuZyBOZ3V5w6puJywgJ3NhdSBDw7RuZyBOZ3V5w6puJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWydRdcO9IDEnLCAnUXXDvSAyJywgJ1F1w70gMycsICdRdcO9IDQnXVxufTtcbnZhciBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgLy8gSSBub3RpY2UgbWFueSBuZXdzIG91dGxldCB1c2UgdGhpcyBcInF1w70gSUkvMjAxOFwiXG4gIHdpZGU6IFsncXXDvSBJJywgJ3F1w70gSUknLCAncXXDvSBJSUknLCAncXXDvSBJViddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddLFxuICBhYmJyZXZpYXRlZDogWydUaGcgMScsICdUaGcgMicsICdUaGcgMycsICdUaGcgNCcsICdUaGcgNScsICdUaGcgNicsICdUaGcgNycsICdUaGcgOCcsICdUaGcgOScsICdUaGcgMTAnLCAnVGhnIDExJywgJ1RoZyAxMiddLFxuICB3aWRlOiBbJ1Row6FuZyBN4buZdCcsICdUaMOhbmcgSGFpJywgJ1Row6FuZyBCYScsICdUaMOhbmcgVMawJywgJ1Row6FuZyBOxINtJywgJ1Row6FuZyBTw6F1JywgJ1Row6FuZyBC4bqjeScsICdUaMOhbmcgVMOhbScsICdUaMOhbmcgQ2jDrW4nLCAnVGjDoW5nIE3GsOG7nWknLCAnVGjDoW5nIE3GsOG7nWkgTeG7mXQnLCAnVGjDoW5nIE3GsOG7nWkgSGFpJ11cbn07XG4vLyBJbiBWaWV0bmFtZXNlIGRhdGUgZm9ybWF0dGluZywgbW9udGggbnVtYmVyIGxlc3MgdGhhbiAxMCBleHBlY3RlZCB0byBoYXZlIGxlYWRpbmcgemVyb1xudmFyIGZvcm1hdHRpbmdNb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3RoZyAxJywgJ3RoZyAyJywgJ3RoZyAzJywgJ3RoZyA0JywgJ3RoZyA1JywgJ3RoZyA2JywgJ3RoZyA3JywgJ3RoZyA4JywgJ3RoZyA5JywgJ3RoZyAxMCcsICd0aGcgMTEnLCAndGhnIDEyJ10sXG4gIHdpZGU6IFsndGjDoW5nIDAxJywgJ3Row6FuZyAwMicsICd0aMOhbmcgMDMnLCAndGjDoW5nIDA0JywgJ3Row6FuZyAwNScsICd0aMOhbmcgMDYnLCAndGjDoW5nIDA3JywgJ3Row6FuZyAwOCcsICd0aMOhbmcgMDknLCAndGjDoW5nIDEwJywgJ3Row6FuZyAxMScsICd0aMOhbmcgMTInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydDTicsICdUMicsICdUMycsICdUNCcsICdUNScsICdUNicsICdUNyddLFxuICBzaG9ydDogWydDTicsICdUaCAyJywgJ1RoIDMnLCAnVGggNCcsICdUaCA1JywgJ1RoIDYnLCAnVGggNyddLFxuICBhYmJyZXZpYXRlZDogWydDTicsICdUaOG7qSAyJywgJ1Ro4bupIDMnLCAnVGjhu6kgNCcsICdUaOG7qSA1JywgJ1Ro4bupIDYnLCAnVGjhu6kgNyddLFxuICB3aWRlOiBbJ0No4bunIE5o4bqtdCcsICdUaOG7qSBIYWknLCAnVGjhu6kgQmEnLCAnVGjhu6kgVMawJywgJ1Ro4bupIE7Eg20nLCAnVGjhu6kgU8OhdScsICdUaOG7qSBC4bqjeSddXG59O1xuXG4vLyBWaWV0bmFtZXNlIGFyZSB1c2VkIHRvIEFNL1BNIGJvcnJvd2luZyBmcm9tIEVuZ2xpc2gsIGhlbmNlIGBuYXJyb3dgIGFuZFxuLy8gYGFiYnJldmlhdGVkYCBhcmUganVzdCBsaWtlIEVuZ2xpc2ggYnV0IEknbSBsZWF2aW5nIHRoZSBgd2lkZWBcbi8vIGZvcm1hdCBiZWluZyBsb2NhbGl6ZWQgd2l0aCBhYmJyZXZpYXRpb25zIGZvdW5kIGluIHNvbWUgc3lzdGVtcyAoU8OBbmcgLyBDSGnhu4F1KTtcbi8vIGhvd2V2ZXIsIHBlcnNvbmFsbHksIEkgZG9uJ3QgdGhpbmsgYENoaeG7gXVgIHNvdW5kcyBhcHByb3ByaWF0ZSBmb3IgYFBNYFxudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgLy8gbmFycm93IGRhdGUgcGVyaW9kIGlzIGV4dHJlbWVseSByYXJlIGluIFZpZXRuYW1lc2VcbiAgLy8gSSB1c2VkIGFiYnJldmlhdGVkIGZvcm0gZm9yIG5vb24sIG1vcm5pbmcgYW5kIGFmdGVybm9vblxuICAvLyB3aGljaCBhcmUgcmVnY29uaXphYmxlIGJ5IFZpZXRuYW1lc2UsIG90aGVycyBjYW5ub3QgYmUgYW55IHNob3J0ZXJcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyJyxcbiAgICBtb3JuaW5nOiAnc2cnLFxuICAgIGFmdGVybm9vbjogJ2NoJyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyxrBhJyxcbiAgICBtb3JuaW5nOiAnc8OhbmcnLFxuICAgIGFmdGVybm9vbjogJ2NoaeG7gXUnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnU0EnLFxuICAgIHBtOiAnQ0gnLFxuICAgIG1pZG5pZ2h0OiAnbuG7rWEgxJHDqm0nLFxuICAgIG5vb246ICd0csawYScsXG4gICAgbW9ybmluZzogJ3PDoW5nJyxcbiAgICBhZnRlcm5vb246ICdjaGnhu4F1JyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyJyxcbiAgICBtb3JuaW5nOiAnc2cnLFxuICAgIGFmdGVybm9vbjogJ2NoJyxcbiAgICBldmVuaW5nOiAndOG7kWknLFxuICAgIG5pZ2h0OiAnxJHDqm0nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdu4butYSDEkcOqbScsXG4gICAgbm9vbjogJ3RyxrBhJyxcbiAgICBtb3JuaW5nOiAnc8OhbmcnLFxuICAgIGFmdGVybm9vbjogJ2NoaeG7gXUnLFxuICAgIGV2ZW5pbmc6ICd04buRaScsXG4gICAgbmlnaHQ6ICfEkcOqbSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnU0EnLFxuICAgIHBtOiAnQ0gnLFxuICAgIG1pZG5pZ2h0OiAnbuG7rWEgxJHDqm0nLFxuICAgIG5vb246ICdnaeG7r2EgdHLGsGEnLFxuICAgIG1vcm5pbmc6ICd2w6BvIGJ14buVaSBzw6FuZycsXG4gICAgYWZ0ZXJub29uOiAndsOgbyBideG7lWkgY2hp4buBdScsXG4gICAgZXZlbmluZzogJ3bDoG8gYnXhu5VpIHThu5FpJyxcbiAgICBuaWdodDogJ3bDoG8gYmFuIMSRw6ptJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBvcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICB2YXIgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgLy8gbWFueSBuZXdzIG91dGxldHMgdXNlIFwicXXDvSBJXCIuLi5cbiAgICBzd2l0Y2ggKG51bWJlcikge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gJ0knO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ0lJJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuICdJSUknO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gJ0lWJztcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICAvLyBkYXkgb2Ygd2VlayBpbiBWaWV0bmFtZXNlIGhhcyBvcmRpbmFsIG51bWJlciBtZWFuaW5nLFxuICAgIC8vIHNvIHdlIHNob3VsZCB1c2UgdGhlbSwgZWxzZSBpdCdsbCBzb3VuZCB3ZWlyZFxuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAndGjhu6kgMic7XG4gICAgICAvLyBtZWFuaW5nIDJuZCBkYXkgYnV0IGl0J3MgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayA6RFxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gJ3Ro4bupIDMnO1xuICAgICAgLy8gbWVhbmluZyAzcmQgZGF5XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAndGjhu6kgNCc7XG4gICAgICAvLyBtZWFuaW5nIDR0aCBkYXkgYW5kIHNvIG9uXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiAndGjhu6kgNSc7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiAndGjhu6kgNic7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiAndGjhu6kgNyc7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiAnY2jhu6cgbmjhuq10JztcbiAgICAgIC8vIG1lYW5pbmcgU3VuZGF5LCB0aGVyZSdzIG5vIDh0aCBkYXkgOkRcbiAgICB9XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuICd0aOG7qSBuaOG6pXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Ro4bupICcgKyBudW1iZXI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXlPZlllYXInKSB7XG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuICfEkeG6p3UgdGnDqm4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3Ro4bupICcgKyBudW1iZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gdGhlcmUgYXJlIG5vIGRpZmZlcmVudCBmb3JtcyBvZiBvcmRpbmFsIG51bWJlcnMgaW4gVmlldG5hbWVzZVxuICByZXR1cm4gU3RyaW5nKG51bWJlcik7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdRdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdNb250aFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykvaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKHRjbnxzY24pL2ksXG4gIGFiYnJldmlhdGVkOiAvXih0csaw4bubYyBDTnxzYXUgQ04pL2ksXG4gIHdpZGU6IC9eKHRyxrDhu5tjIEPDtG5nIE5ndXnDqm58c2F1IEPDtG5nIE5ndXnDqm4pL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL150L2ksIC9ecy9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihbMTIzNF18aXsxLDN9dj8pL2ksXG4gIGFiYnJldmlhdGVkOiAvXnEoWzEyMzRdfGl7MSwzfXY/KS9pLFxuICB3aWRlOiAvXnF1w70gKFsxMjM0XXxpezEsM312PykvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLygxfGkpJC9pLCAvKDJ8aWkpJC9pLCAvKDN8aWlpKSQvaSwgLyg0fGl2KSQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICAvLyBtb250aCBudW1iZXIgbWF5IGNvbnRhaW4gbGVhZGluZyAwLCAndGhnJyBwcmVmaXggbWF5IGhhdmUgc3BhY2UsIHVuZGVyc2NvcmUgb3IgZW1wdHkgYmVmb3JlIG51bWJlclxuICAvLyBub3RlIHRoZSBvcmRlciBvZiAnMScgc2luY2UgaXQgaXMgYSBzdWItc3RyaW5nIG9mICcxMCcsIHNvIG11c3QgYmUgbG93ZXIgcHJpb3JpdHlcbiAgbmFycm93OiAvXigwP1syLTldfDEwfDExfDEyfDA/MSkvaSxcbiAgLy8gbm90ZSB0aGUgb3JkZXIgb2YgJ3RoZyAxJyBzaW5jZSBpdCBpcyBzdWItc3RyaW5nIG9mICd0aGcgMTAnLCBzbyBtdXN0IGJlIGxvd2VyIHByaW9yaXR5XG4gIGFiYnJldmlhdGVkOiAvXnRoZ1sgX10/KDA/WzEtOV0oPyFcXGQpfDEwfDExfDEyKS9pLFxuICAvLyBub3RlIHRoZSBvcmRlciBvZiAnTcaw4budaScgc2luY2UgaXQgaXMgc3ViLXN0cmluZyBvZiBNxrDhu51pIE3hu5l0LCBzbyBtdXN0IGJlIGxvd2VyIHByaW9yaXR5XG4gIHdpZGU6IC9edGjDoW5nID8oTeG7mXR8SGFpfEJhfFTGsHxOxINtfFPDoXV8QuG6o3l8VMOhbXxDaMOtbnxNxrDhu51pfE3GsOG7nWkgP03hu5l0fE3GsOG7nWkgP0hhaXwwP1sxLTldKD8hXFxkKXwxMHwxMXwxMikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy8wPzEkL2ksIC8wPzIvaSwgLzMvLCAvNC8sIC81LywgLzYvLCAvNy8sIC84LywgLzkvLCAvMTAvLCAvMTEvLCAvMTIvXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXnRoZ1sgX10/MD8xKD8hXFxkKS9pLCAvXnRoZ1sgX10/MD8yL2ksIC9edGhnWyBfXT8wPzMvaSwgL150aGdbIF9dPzA/NC9pLCAvXnRoZ1sgX10/MD81L2ksIC9edGhnWyBfXT8wPzYvaSwgL150aGdbIF9dPzA/Ny9pLCAvXnRoZ1sgX10/MD84L2ksIC9edGhnWyBfXT8wPzkvaSwgL150aGdbIF9dPzEwL2ksIC9edGhnWyBfXT8xMS9pLCAvXnRoZ1sgX10/MTIvaV0sXG4gIHdpZGU6IFsvXnRow6FuZyA/KE3hu5l0fDA/MSg/IVxcZCkpL2ksIC9edGjDoW5nID8oSGFpfDA/MikvaSwgL150aMOhbmcgPyhCYXwwPzMpL2ksIC9edGjDoW5nID8oVMawfDA/NCkvaSwgL150aMOhbmcgPyhOxINtfDA/NSkvaSwgL150aMOhbmcgPyhTw6F1fDA/NikvaSwgL150aMOhbmcgPyhC4bqjeXwwPzcpL2ksIC9edGjDoW5nID8oVMOhbXwwPzgpL2ksIC9edGjDoW5nID8oQ2jDrW58MD85KS9pLCAvXnRow6FuZyA/KE3GsOG7nWl8MTApL2ksIC9edGjDoW5nID8oTcaw4budaSA/TeG7mXR8MTEpL2ksIC9edGjDoW5nID8oTcaw4budaSA/SGFpfDEyKS9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKENOfFQyfFQzfFQ0fFQ1fFQ2fFQ3KS9pLFxuICBzaG9ydDogL14oQ058VGggPzJ8VGggPzN8VGggPzR8VGggPzV8VGggPzZ8VGggPzcpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihDTnxUaCA/MnxUaCA/M3xUaCA/NHxUaCA/NXxUaCA/NnxUaCA/NykvaSxcbiAgd2lkZTogL14oQ2jhu6cgP05o4bqtdHxDaMO6YSA/Tmjhuq10fHRo4bupID9IYWl8dGjhu6kgP0JhfHRo4bupID9UxrB8dGjhu6kgP07Eg218dGjhu6kgP1PDoXV8dGjhu6kgP0LhuqN5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9DTi9pLCAvMi9pLCAvMy9pLCAvNC9pLCAvNS9pLCAvNi9pLCAvNy9pXSxcbiAgc2hvcnQ6IFsvQ04vaSwgLzIvaSwgLzMvaSwgLzQvaSwgLzUvaSwgLzYvaSwgLzcvaV0sXG4gIGFiYnJldmlhdGVkOiBbL0NOL2ksIC8yL2ksIC8zL2ksIC80L2ksIC81L2ksIC82L2ksIC83L2ldLFxuICB3aWRlOiBbLyhDaOG7p3xDaMO6YSkgP05o4bqtdC9pLCAvSGFpL2ksIC9CYS9pLCAvVMawL2ksIC9OxINtL2ksIC9Tw6F1L2ksIC9C4bqjeS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxu4butYSDEkcOqbXx0csawYXwoZ2nhu50pIChzw6FuZ3xjaGnhu4F1fHThu5FpfMSRw6ptKSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGFtfHBtfG7hu61hIMSRw6ptfHRyxrBhfChnaeG7nSkgKHPDoW5nfGNoaeG7gXV8dOG7kWl8xJHDqm0pKS9pLFxuICB3aWRlOiAvXihjaFteaV0qfHNhfG7hu61hIMSRw6ptfHRyxrBhfChnaeG7nSkgKHPDoW5nfGNoaeG7gXV8dOG7kWl8xJHDqm0pKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXihhfHNhKS9pLFxuICAgIHBtOiAvXihwfGNoW15pXSopL2ksXG4gICAgbWlkbmlnaHQ6IC9u4butYSDEkcOqbS9pLFxuICAgIG5vb246IC90csawYS9pLFxuICAgIG1vcm5pbmc6IC9zw6FuZy9pLFxuICAgIGFmdGVybm9vbjogL2NoaeG7gXUvaSxcbiAgICBldmVuaW5nOiAvdOG7kWkvaSxcbiAgICBuaWdodDogL17EkcOqbS9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IFZpZXRuYW1lc2UgbG9jYWxlIChWaWV0bmFtKS5cbiAqIEBsYW5ndWFnZSBWaWV0bmFtZXNlXG4gKiBAaXNvLTYzOS0yIHZpZVxuICogQGF1dGhvciBUaGFuaCBUcmFuIFtAdHJvbmd0aGFuaF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3Ryb25ndGhhbmh9XG4gKiBAYXV0aG9yIExlcm95IEhvcHNvbiBbQGxpaG9wXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGlob3B9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICd2aScsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMSAvKiBNb25kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxIC8qIEZpcnN0IHdlZWsgb2YgbmV3IHllYXIgY29udGFpbnMgSmFuIDFzdCAgKi9cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==