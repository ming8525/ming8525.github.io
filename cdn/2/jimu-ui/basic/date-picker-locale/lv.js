System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameUTCWeek)
/* harmony export */ });
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");


function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

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

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatDistance/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/lv/_lib/formatDistance/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function buildLocalizeTokenFn(schema) {
  return function (count, options) {
    if (count === 1) {
      if (options !== null && options !== void 0 && options.addSuffix) {
        return schema.one[0].replace('{{time}}', schema.one[2]);
      } else {
        return schema.one[0].replace('{{time}}', schema.one[1]);
      }
    } else {
      var rem = count % 10 === 1 && count % 100 !== 11;
      if (options !== null && options !== void 0 && options.addSuffix) {
        return schema.other[0].replace('{{time}}', rem ? schema.other[3] : schema.other[4]).replace('{{count}}', String(count));
      } else {
        return schema.other[0].replace('{{time}}', rem ? schema.other[1] : schema.other[2]).replace('{{count}}', String(count));
      }
    }
  };
}
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'sekundi', 'sekundi'],
    other: ['mazāk nekā {{count}} {{time}}', 'sekunde', 'sekundes', 'sekundes', 'sekundēm']
  }),
  xSeconds: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'sekunde', 'sekundes'],
    other: ['{{count}} {{time}}', 'sekunde', 'sekundes', 'sekundes', 'sekundēm']
  }),
  halfAMinute: function halfAMinute(_count, options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      return 'pusminūtes';
    } else {
      return 'pusminūte';
    }
  },
  lessThanXMinutes: buildLocalizeTokenFn({
    one: ['mazāk par {{time}}', 'minūti', 'minūti'],
    other: ['mazāk nekā {{count}} {{time}}', 'minūte', 'minūtes', 'minūtes', 'minūtēm']
  }),
  xMinutes: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'minūte', 'minūtes'],
    other: ['{{count}} {{time}}', 'minūte', 'minūtes', 'minūtes', 'minūtēm']
  }),
  aboutXHours: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'stunda', 'stundas'],
    other: ['apmēram {{count}} {{time}}', 'stunda', 'stundas', 'stundas', 'stundām']
  }),
  xHours: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'stunda', 'stundas'],
    other: ['{{count}} {{time}}', 'stunda', 'stundas', 'stundas', 'stundām']
  }),
  xDays: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'diena', 'dienas'],
    other: ['{{count}} {{time}}', 'diena', 'dienas', 'dienas', 'dienām']
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'nedēļa', 'nedēļas'],
    other: ['apmēram {{count}} {{time}}', 'nedēļa', 'nedēļu', 'nedēļas', 'nedēļām']
  }),
  xWeeks: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'nedēļa', 'nedēļas'],
    other: ['{{count}} {{time}}',
    // TODO
    'nedēļa', 'nedēļu', 'nedēļas', 'nedēļām']
  }),
  aboutXMonths: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'mēnesis', 'mēneša'],
    other: ['apmēram {{count}} {{time}}', 'mēnesis', 'mēneši', 'mēneša', 'mēnešiem']
  }),
  xMonths: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'mēnesis', 'mēneša'],
    other: ['{{count}} {{time}}', 'mēnesis', 'mēneši', 'mēneša', 'mēnešiem']
  }),
  aboutXYears: buildLocalizeTokenFn({
    one: ['apmēram 1 {{time}}', 'gads', 'gada'],
    other: ['apmēram {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  xYears: buildLocalizeTokenFn({
    one: ['1 {{time}}', 'gads', 'gada'],
    other: ['{{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  overXYears: buildLocalizeTokenFn({
    one: ['ilgāk par 1 {{time}}', 'gadu', 'gadu'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  }),
  almostXYears: buildLocalizeTokenFn({
    one: ['gandrīz 1 {{time}}', 'gads', 'gada'],
    other: ['vairāk nekā {{count}} {{time}}', 'gads', 'gadi', 'gada', 'gadiem']
  })
};
var formatDistance = function formatDistance(token, count, options) {
  var result = formatDistanceLocale[token](count, options);
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'pēc ' + result;
    } else {
      return 'pirms ' + result;
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatLong/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/lv/_lib/formatLong/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: "EEEE, y. 'gada' d. MMMM",
  long: "y. 'gada' d. MMMM",
  medium: 'dd.MM.y.',
  short: 'dd.MM.y.'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'plkst.' {{time}}",
  long: "{{date}} 'plkst.' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
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

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/formatRelative/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/lv/_lib/formatRelative/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_lib/isSameUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js");

var weekdays = ['svētdienā', 'pirmdienā', 'otrdienā', 'trešdienā', 'ceturtdienā', 'piektdienā', 'sestdienā'];
var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }
    var weekday = weekdays[date.getUTCDay()];
    return "'Pagājušā " + weekday + " plkst.' p";
  },
  yesterday: "'Vakar plkst.' p",
  today: "'Šodien plkst.' p",
  tomorrow: "'Rīt plkst.' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    if ((0,_lib_isSameUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, baseDate, options)) {
      return "eeee 'plkst.' p";
    }
    var weekday = weekdays[date.getUTCDay()];
    return "'Nākamajā " + weekday + " plkst.' p";
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }
  return format;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/localize/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/lv/_lib/localize/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['p.m.ē', 'm.ē'],
  abbreviated: ['p. m. ē.', 'm. ē.'],
  wide: ['pirms mūsu ēras', 'mūsu ērā']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmais ceturksnis', 'otrais ceturksnis', 'trešais ceturksnis', 'ceturtais ceturksnis']
};
var formattingQuarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. cet.', '2. cet.', '3. cet.', '4. cet.'],
  wide: ['pirmajā ceturksnī', 'otrajā ceturksnī', 'trešajā ceturksnī', 'ceturtajā ceturksnī']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris']
};
var formattingMonthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'febr.', 'martā', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.', 'dec.'],
  wide: ['janvārī', 'februārī', 'martā', 'aprīlī', 'maijā', 'jūnijā', 'jūlijā', 'augustā', 'septembrī', 'oktobrī', 'novembrī', 'decembrī']
};
var dayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena']
};
var formattingDayValues = {
  narrow: ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
  short: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S'],
  abbreviated: ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
  wide: ['svētdienā', 'pirmdienā', 'otrdienā', 'trešdienā', 'ceturtdienā', 'piektdienā', 'sestdienā']
};
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'diena',
    evening: 'vakars',
    night: 'nakts'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rīts',
    afternoon: 'pēcpusd.',
    evening: 'vakars',
    night: 'nakts'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnakts',
    noon: 'pusdienlaiks',
    morning: 'rīts',
    afternoon: 'pēcpusdiena',
    evening: 'vakars',
    night: 'nakts'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'dienā',
    evening: 'vakarā',
    night: 'naktī'
  },
  abbreviated: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusn.',
    noon: 'pusd.',
    morning: 'rītā',
    afternoon: 'pēcpusd.',
    evening: 'vakarā',
    night: 'naktī'
  },
  wide: {
    am: 'am',
    pm: 'pm',
    midnight: 'pusnaktī',
    noon: 'pusdienlaikā',
    morning: 'rītā',
    afternoon: 'pēcpusdienā',
    evening: 'vakarā',
    night: 'naktī'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + '.';
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
    defaultWidth: 'wide',
    formattingValues: formattingDayValues,
    defaultFormattingWidth: 'wide'
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

/***/ "./node_modules/date-fns/esm/locale/lv/_lib/match/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/lv/_lib/match/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(p\.m\.ē|m\.ē)/i,
  abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i,
  wide: /^(pirms mūsu ēras|mūsu ērā)/i
};
var parseEraPatterns = {
  any: [/^p/i, /^m/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](\. cet\.)/i,
  wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i
};
var parseQuarterPatterns = {
  narrow: [/^1/i, /^2/i, /^3/i, /^4/i],
  abbreviated: [/^1/i, /^2/i, /^3/i, /^4/i],
  wide: [/^p/i, /^o/i, /^t/i, /^c/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,
  wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jūn/i, /^jūl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[spotc]/i,
  short: /^(sv|pi|o|t|c|pk|s)/i,
  abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,
  wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^p/i, /^o/i, /^t/i, /^c/i, /^p/i, /^s/i],
  any: [/^sv/i, /^pi/i, /^o/i, /^t/i, /^c/i, /^p/i, /^se/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,
  abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,
  wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^pusn/i,
    noon: /^pusd/i,
    morning: /^r/i,
    afternoon: /^(d|pēc)/i,
    evening: /^v/i,
    night: /^n/i
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
    defaultParseWidth: 'wide',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
  !*** ./node_modules/date-fns/esm/locale/lv/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/lv/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/lv/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/lv/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/lv/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/lv/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary Latvian locale (Latvia).
 * @language Latvian
 * @iso-639-2 lav
 * @author Rūdolfs Puķītis [@prudolfs]{@link https://github.com/prudolfs}
 */
var locale = {
  code: 'lv',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9kYXRlLXBpY2tlci1sb2NhbGUvbHYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQ0k7QUFDekM7QUFDZixFQUFFLGtFQUFZO0FBQ2QsNEJBQTRCLG9FQUFjO0FBQzFDLDZCQUE2QixvRUFBYztBQUMzQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0oyQztBQUNTO0FBQ047QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDUjtBQUNRO0FBQ1o7QUFDTjtBQUMxQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9pc1NhbWVVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9sdi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9sdi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2x2L19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2x2L19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2x2L19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvbHYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVVUQ1dlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsImZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVUb2tlbkZuKHNjaGVtYSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvdW50LCBvcHRpb25zKSB7XG4gICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVtYS5vbmVbMF0ucmVwbGFjZSgne3t0aW1lfX0nLCBzY2hlbWEub25lWzJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWEub25lWzBdLnJlcGxhY2UoJ3t7dGltZX19Jywgc2NoZW1hLm9uZVsxXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZW0gPSBjb3VudCAlIDEwID09PSAxICYmIGNvdW50ICUgMTAwICE9PSAxMTtcbiAgICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gc2NoZW1hLm90aGVyWzBdLnJlcGxhY2UoJ3t7dGltZX19JywgcmVtID8gc2NoZW1hLm90aGVyWzNdIDogc2NoZW1hLm90aGVyWzRdKS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzY2hlbWEub3RoZXJbMF0ucmVwbGFjZSgne3t0aW1lfX0nLCByZW0gPyBzY2hlbWEub3RoZXJbMV0gOiBzY2hlbWEub3RoZXJbMl0pLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbnZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydtYXrEgWsgcGFyIHt7dGltZX19JywgJ3Nla3VuZGknLCAnc2VrdW5kaSddLFxuICAgIG90aGVyOiBbJ21hesSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnc2VrdW5kZScsICdzZWt1bmRlcycsICdzZWt1bmRlcycsICdzZWt1bmTEk20nXVxuICB9KSxcbiAgeFNlY29uZHM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdzZWt1bmRlJywgJ3Nla3VuZGVzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ3Nla3VuZGUnLCAnc2VrdW5kZXMnLCAnc2VrdW5kZXMnLCAnc2VrdW5kxJNtJ11cbiAgfSksXG4gIGhhbGZBTWludXRlOiBmdW5jdGlvbiBoYWxmQU1pbnV0ZShfY291bnQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgIHJldHVybiAncHVzbWluxat0ZXMnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3B1c21pbsWrdGUnO1xuICAgIH1cbiAgfSxcbiAgbGVzc1RoYW5YTWludXRlczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydtYXrEgWsgcGFyIHt7dGltZX19JywgJ21pbsWrdGknLCAnbWluxat0aSddLFxuICAgIG90aGVyOiBbJ21hesSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnbWluxat0ZScsICdtaW7Fq3RlcycsICdtaW7Fq3RlcycsICdtaW7Fq3TEk20nXVxuICB9KSxcbiAgeE1pbnV0ZXM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdtaW7Fq3RlJywgJ21pbsWrdGVzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ21pbsWrdGUnLCAnbWluxat0ZXMnLCAnbWluxat0ZXMnLCAnbWluxat0xJNtJ11cbiAgfSksXG4gIGFib3V0WEhvdXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2FwbcSTcmFtIDEge3t0aW1lfX0nLCAnc3R1bmRhJywgJ3N0dW5kYXMnXSxcbiAgICBvdGhlcjogWydhcG3Ek3JhbSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnc3R1bmRhJywgJ3N0dW5kYXMnLCAnc3R1bmRhcycsICdzdHVuZMSBbSddXG4gIH0pLFxuICB4SG91cnM6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICdzdHVuZGEnLCAnc3R1bmRhcyddLFxuICAgIG90aGVyOiBbJ3t7Y291bnR9fSB7e3RpbWV9fScsICdzdHVuZGEnLCAnc3R1bmRhcycsICdzdHVuZGFzJywgJ3N0dW5kxIFtJ11cbiAgfSksXG4gIHhEYXlzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnZGllbmEnLCAnZGllbmFzJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ2RpZW5hJywgJ2RpZW5hcycsICdkaWVuYXMnLCAnZGllbsSBbSddXG4gIH0pLFxuICBhYm91dFhXZWVrczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydhcG3Ek3JhbSAxIHt7dGltZX19JywgJ25lZMSTxLxhJywgJ25lZMSTxLxhcyddLFxuICAgIG90aGVyOiBbJ2FwbcSTcmFtIHt7Y291bnR9fSB7e3RpbWV9fScsICduZWTEk8S8YScsICduZWTEk8S8dScsICduZWTEk8S8YXMnLCAnbmVkxJPEvMSBbSddXG4gIH0pLFxuICB4V2Vla3M6IGJ1aWxkTG9jYWxpemVUb2tlbkZuKHtcbiAgICBvbmU6IFsnMSB7e3RpbWV9fScsICduZWTEk8S8YScsICduZWTEk8S8YXMnXSxcbiAgICBvdGhlcjogWyd7e2NvdW50fX0ge3t0aW1lfX0nLFxuICAgIC8vIFRPRE9cbiAgICAnbmVkxJPEvGEnLCAnbmVkxJPEvHUnLCAnbmVkxJPEvGFzJywgJ25lZMSTxLzEgW0nXVxuICB9KSxcbiAgYWJvdXRYTW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2FwbcSTcmFtIDEge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWEnXSxcbiAgICBvdGhlcjogWydhcG3Ek3JhbSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWknLCAnbcSTbmXFoWEnLCAnbcSTbmXFoWllbSddXG4gIH0pLFxuICB4TW9udGhzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWEnXSxcbiAgICBvdGhlcjogWyd7e2NvdW50fX0ge3t0aW1lfX0nLCAnbcSTbmVzaXMnLCAnbcSTbmXFoWknLCAnbcSTbmXFoWEnLCAnbcSTbmXFoWllbSddXG4gIH0pLFxuICBhYm91dFhZZWFyczogYnVpbGRMb2NhbGl6ZVRva2VuRm4oe1xuICAgIG9uZTogWydhcG3Ek3JhbSAxIHt7dGltZX19JywgJ2dhZHMnLCAnZ2FkYSddLFxuICAgIG90aGVyOiBbJ2FwbcSTcmFtIHt7Y291bnR9fSB7e3RpbWV9fScsICdnYWRzJywgJ2dhZGknLCAnZ2FkYScsICdnYWRpZW0nXVxuICB9KSxcbiAgeFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJzEge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRhJ10sXG4gICAgb3RoZXI6IFsne3tjb3VudH19IHt7dGltZX19JywgJ2dhZHMnLCAnZ2FkaScsICdnYWRhJywgJ2dhZGllbSddXG4gIH0pLFxuICBvdmVyWFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2lsZ8SBayBwYXIgMSB7e3RpbWV9fScsICdnYWR1JywgJ2dhZHUnXSxcbiAgICBvdGhlcjogWyd2YWlyxIFrIG5la8SBIHt7Y291bnR9fSB7e3RpbWV9fScsICdnYWRzJywgJ2dhZGknLCAnZ2FkYScsICdnYWRpZW0nXVxuICB9KSxcbiAgYWxtb3N0WFllYXJzOiBidWlsZExvY2FsaXplVG9rZW5Gbih7XG4gICAgb25lOiBbJ2dhbmRyxKt6IDEge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRhJ10sXG4gICAgb3RoZXI6IFsndmFpcsSBayBuZWvEgSB7e2NvdW50fX0ge3t0aW1lfX0nLCAnZ2FkcycsICdnYWRpJywgJ2dhZGEnLCAnZ2FkaWVtJ11cbiAgfSlcbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXShjb3VudCwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdwxJNjICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAncGlybXMgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCB5LiAnZ2FkYScgZC4gTU1NTVwiLFxuICBsb25nOiBcInkuICdnYWRhJyBkLiBNTU1NXCIsXG4gIG1lZGl1bTogJ2RkLk1NLnkuJyxcbiAgc2hvcnQ6ICdkZC5NTS55Lidcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyB6enp6JyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAncGxrc3QuJyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdwbGtzdC4nIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsImltcG9ydCBpc1NhbWVVVENXZWVrIGZyb20gXCIuLi8uLi8uLi8uLi9fbGliL2lzU2FtZVVUQ1dlZWsvaW5kZXguanNcIjtcbnZhciB3ZWVrZGF5cyA9IFsnc3bEk3RkaWVuxIEnLCAncGlybWRpZW7EgScsICdvdHJkaWVuxIEnLCAndHJlxaFkaWVuxIEnLCAnY2V0dXJ0ZGllbsSBJywgJ3BpZWt0ZGllbsSBJywgJ3Nlc3RkaWVuxIEnXTtcbnZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzU2FtZVVUQ1dlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gXCJlZWVlICdwbGtzdC4nIHBcIjtcbiAgICB9XG4gICAgdmFyIHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXRlLmdldFVUQ0RheSgpXTtcbiAgICByZXR1cm4gXCInUGFnxIFqdcWhxIEgXCIgKyB3ZWVrZGF5ICsgXCIgcGxrc3QuJyBwXCI7XG4gIH0sXG4gIHllc3RlcmRheTogXCInVmFrYXIgcGxrc3QuJyBwXCIsXG4gIHRvZGF5OiBcIifFoG9kaWVuIHBsa3N0LicgcFwiLFxuICB0b21vcnJvdzogXCInUsSrdCBwbGtzdC4nIHBcIixcbiAgbmV4dFdlZWs6IGZ1bmN0aW9uIG5leHRXZWVrKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKGlzU2FtZVVUQ1dlZWsoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gXCJlZWVlICdwbGtzdC4nIHBcIjtcbiAgICB9XG4gICAgdmFyIHdlZWtkYXkgPSB3ZWVrZGF5c1tkYXRlLmdldFVUQ0RheSgpXTtcbiAgICByZXR1cm4gXCInTsSBa2FtYWrEgSBcIiArIHdlZWtkYXkgKyBcIiBwbGtzdC4nIHBcIjtcbiAgfSxcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgZm9ybWF0ID0gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydwLm0uxJMnLCAnbS7EkyddLFxuICBhYmJyZXZpYXRlZDogWydwLiBtLiDEky4nLCAnbS4gxJMuJ10sXG4gIHdpZGU6IFsncGlybXMgbcWrc3UgxJNyYXMnLCAnbcWrc3UgxJNyxIEnXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWycxLiBjZXQuJywgJzIuIGNldC4nLCAnMy4gY2V0LicsICc0LiBjZXQuJ10sXG4gIHdpZGU6IFsncGlybWFpcyBjZXR1cmtzbmlzJywgJ290cmFpcyBjZXR1cmtzbmlzJywgJ3RyZcWhYWlzIGNldHVya3NuaXMnLCAnY2V0dXJ0YWlzIGNldHVya3NuaXMnXVxufTtcbnZhciBmb3JtYXR0aW5nUXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnMS4gY2V0LicsICcyLiBjZXQuJywgJzMuIGNldC4nLCAnNC4gY2V0LiddLFxuICB3aWRlOiBbJ3Bpcm1hasSBIGNldHVya3NuxKsnLCAnb3RyYWrEgSBjZXR1cmtzbsSrJywgJ3RyZcWhYWrEgSBjZXR1cmtzbsSrJywgJ2NldHVydGFqxIEgY2V0dXJrc27EqyddXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFudi4nLCAnZmVici4nLCAnbWFydHMnLCAnYXByLicsICdtYWlqcycsICdqxatuLicsICdqxatsLicsICdhdWcuJywgJ3NlcHQuJywgJ29rdC4nLCAnbm92LicsICdkZWMuJ10sXG4gIHdpZGU6IFsnamFudsSBcmlzJywgJ2ZlYnJ1xIFyaXMnLCAnbWFydHMnLCAnYXByxKtsaXMnLCAnbWFpanMnLCAnasWrbmlqcycsICdqxatsaWpzJywgJ2F1Z3VzdHMnLCAnc2VwdGVtYnJpcycsICdva3RvYnJpcycsICdub3ZlbWJyaXMnLCAnZGVjZW1icmlzJ11cbn07XG52YXIgZm9ybWF0dGluZ01vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnamFudi4nLCAnZmVici4nLCAnbWFydMSBJywgJ2Fwci4nLCAnbWFpanMnLCAnasWrbi4nLCAnasWrbC4nLCAnYXVnLicsICdzZXB0LicsICdva3QuJywgJ25vdi4nLCAnZGVjLiddLFxuICB3aWRlOiBbJ2phbnbEgXLEqycsICdmZWJydcSBcsSrJywgJ21hcnTEgScsICdhcHLEq2zEqycsICdtYWlqxIEnLCAnasWrbmlqxIEnLCAnasWrbGlqxIEnLCAnYXVndXN0xIEnLCAnc2VwdGVtYnLEqycsICdva3RvYnLEqycsICdub3ZlbWJyxKsnLCAnZGVjZW1icsSrJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdQJywgJ08nLCAnVCcsICdDJywgJ1AnLCAnUyddLFxuICBzaG9ydDogWydTdicsICdQJywgJ08nLCAnVCcsICdDJywgJ1BrJywgJ1MnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3bEk3RkLicsICdwaXJtZC4nLCAnb3RyZC4nLCAndHJlxaFkLicsICdjZXR1cnRkLicsICdwaWVrdGQuJywgJ3Nlc3RkLiddLFxuICB3aWRlOiBbJ3N2xJN0ZGllbmEnLCAncGlybWRpZW5hJywgJ290cmRpZW5hJywgJ3RyZcWhZGllbmEnLCAnY2V0dXJ0ZGllbmEnLCAncGlla3RkaWVuYScsICdzZXN0ZGllbmEnXVxufTtcbnZhciBmb3JtYXR0aW5nRGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdQJywgJ08nLCAnVCcsICdDJywgJ1AnLCAnUyddLFxuICBzaG9ydDogWydTdicsICdQJywgJ08nLCAnVCcsICdDJywgJ1BrJywgJ1MnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnc3bEk3RkLicsICdwaXJtZC4nLCAnb3RyZC4nLCAndHJlxaFkLicsICdjZXR1cnRkLicsICdwaWVrdGQuJywgJ3Nlc3RkLiddLFxuICB3aWRlOiBbJ3N2xJN0ZGllbsSBJywgJ3Bpcm1kaWVuxIEnLCAnb3RyZGllbsSBJywgJ3RyZcWhZGllbsSBJywgJ2NldHVydGRpZW7EgScsICdwaWVrdGRpZW7EgScsICdzZXN0ZGllbsSBJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ3B1c24uJyxcbiAgICBub29uOiAncHVzZC4nLFxuICAgIG1vcm5pbmc6ICdyxKt0cycsXG4gICAgYWZ0ZXJub29uOiAnZGllbmEnLFxuICAgIGV2ZW5pbmc6ICd2YWthcnMnLFxuICAgIG5pZ2h0OiAnbmFrdHMnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdwdXNuLicsXG4gICAgbm9vbjogJ3B1c2QuJyxcbiAgICBtb3JuaW5nOiAncsSrdHMnLFxuICAgIGFmdGVybm9vbjogJ3DEk2NwdXNkLicsXG4gICAgZXZlbmluZzogJ3Zha2FycycsXG4gICAgbmlnaHQ6ICduYWt0cydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAncHVzbmFrdHMnLFxuICAgIG5vb246ICdwdXNkaWVubGFpa3MnLFxuICAgIG1vcm5pbmc6ICdyxKt0cycsXG4gICAgYWZ0ZXJub29uOiAncMSTY3B1c2RpZW5hJyxcbiAgICBldmVuaW5nOiAndmFrYXJzJyxcbiAgICBuaWdodDogJ25ha3RzJ1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAncHVzbi4nLFxuICAgIG5vb246ICdwdXNkLicsXG4gICAgbW9ybmluZzogJ3LEq3TEgScsXG4gICAgYWZ0ZXJub29uOiAnZGllbsSBJyxcbiAgICBldmVuaW5nOiAndmFrYXLEgScsXG4gICAgbmlnaHQ6ICduYWt0xKsnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdwdXNuLicsXG4gICAgbm9vbjogJ3B1c2QuJyxcbiAgICBtb3JuaW5nOiAncsSrdMSBJyxcbiAgICBhZnRlcm5vb246ICdwxJNjcHVzZC4nLFxuICAgIGV2ZW5pbmc6ICd2YWthcsSBJyxcbiAgICBuaWdodDogJ25ha3TEqydcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYW0nLFxuICAgIHBtOiAncG0nLFxuICAgIG1pZG5pZ2h0OiAncHVzbmFrdMSrJyxcbiAgICBub29uOiAncHVzZGllbmxhaWvEgScsXG4gICAgbW9ybmluZzogJ3LEq3TEgScsXG4gICAgYWZ0ZXJub29uOiAncMSTY3B1c2RpZW7EgScsXG4gICAgZXZlbmluZzogJ3Zha2FyxIEnLFxuICAgIG5pZ2h0OiAnbmFrdMSrJ1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgcmV0dXJuIG51bWJlciArICcuJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ1F1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ01vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKVxcLi9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14ocFxcLm1cXC7Ek3xtXFwuxJMpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihwXFwuIG1cXC4gxJNcXC58bVxcLiDEk1xcLikvaSxcbiAgd2lkZTogL14ocGlybXMgbcWrc3UgxJNyYXN8bcWrc3UgxJNyxIEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15wL2ksIC9ebS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15bMTIzNF0oXFwuIGNldFxcLikvaSxcbiAgd2lkZTogL14ocGlybWEoaXN8asSBKXxvdHJhKGlzfGrEgSl8dHJlxaFhKGlzfGrEgSl8Y2V0dXJ0YShpc3xqxIEpKSBjZXR1cmtzbihpc3zEqykvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL14xL2ksIC9eMi9pLCAvXjMvaSwgL140L2ldLFxuICBhYmJyZXZpYXRlZDogWy9eMS9pLCAvXjIvaSwgL14zL2ksIC9eNC9pXSxcbiAgd2lkZTogWy9ecC9pLCAvXm8vaSwgL150L2ksIC9eYy9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW52XFwufGZlYnJcXC58bWFydHN8YXByXFwufG1haWpzfGrFq25cXC58asWrbFxcLnxhdWdcXC58c2VwdFxcLnxva3RcXC58bm92XFwufGRlY1xcLikvaSxcbiAgd2lkZTogL14oamFudsSBcihpc3zEqyl8ZmVicnXEgXIoaXN8xKspfG1hcnRbc8SBXXxhcHLEq2woaXN8xKspfG1haWpbc8SBXXxqxatuaWpbc8SBXXxqxatsaWpbc8SBXXxhdWd1c3Rbc8SBXXxzZXB0ZW1icihpc3zEqyl8b2t0b2JyKGlzfMSrKXxub3ZlbWJyKGlzfMSrKXxkZWNlbWJyKGlzfMSrKSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWFpL2ksIC9easWrbi9pLCAvXmrFq2wvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzcG90Y10vaSxcbiAgc2hvcnQ6IC9eKHN2fHBpfG98dHxjfHBrfHMpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdsSTdGRcXC58cGlybWRcXC58b3RyZC5cXHx0cmXFoWRcXC58Y2V0dXJ0ZFxcLnxwaWVrdGRcXC58c2VzdGRcXC4pL2ksXG4gIHdpZGU6IC9eKHN2xJN0ZGllbihhfMSBKXxwaXJtZGllbihhfMSBKXxvdHJkaWVuKGF8xIEpfHRyZcWhZGllbihhfMSBKXxjZXR1cnRkaWVuKGF8xIEpfHBpZWt0ZGllbihhfMSBKXxzZXN0ZGllbihhfMSBKSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15wL2ksIC9eby9pLCAvXnQvaSwgL15jL2ksIC9ecC9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3YvaSwgL15waS9pLCAvXm8vaSwgL150L2ksIC9eYy9pLCAvXnAvaSwgL15zZS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGFtfHBtfHB1c25cXC58cHVzZFxcLnxyxKt0KHN8xIEpfGRpZW4oYXzEgSl8dmFrYXIoc3zEgSl8bmFrdChzfMSrKSkvLFxuICBhYmJyZXZpYXRlZDogL14oYW18cG18cHVzblxcLnxwdXNkXFwufHLEq3Qoc3zEgSl8cMSTY3B1c2RcXC58dmFrYXIoc3zEgSl8bmFrdChzfMSrKSkvLFxuICB3aWRlOiAvXihhbXxwbXxwdXNuYWt0KHN8xKspfHB1c2RpZW5sYWlrKHN8xIEpfHLEq3Qoc3zEgSl8cMSTY3B1c2RpZW4oYXzEgSl8dmFrYXIoc3zEgSl8bmFrdChzfMSrKSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hbS9pLFxuICAgIHBtOiAvXnBtL2ksXG4gICAgbWlkbmlnaHQ6IC9ecHVzbi9pLFxuICAgIG5vb246IC9ecHVzZC9pLFxuICAgIG1vcm5pbmc6IC9eci9pLFxuICAgIGFmdGVybm9vbjogL14oZHxwxJNjKS9pLFxuICAgIGV2ZW5pbmc6IC9edi9pLFxuICAgIG5pZ2h0OiAvXm4vaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgTGF0dmlhbiBsb2NhbGUgKExhdHZpYSkuXG4gKiBAbGFuZ3VhZ2UgTGF0dmlhblxuICogQGlzby02MzktMiBsYXZcbiAqIEBhdXRob3IgUsWrZG9sZnMgUHXEt8SrdGlzIFtAcHJ1ZG9sZnNde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9wcnVkb2xmc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2x2JyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAxIC8qIE1vbmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=