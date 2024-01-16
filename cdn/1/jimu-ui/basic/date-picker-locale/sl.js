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

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatDistance/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/sl/_lib/formatDistance/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isPluralType(val) {
  return val.one !== undefined;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    present: {
      one: 'manj kot {{count}} sekunda',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    },
    past: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundama',
      few: 'manj kot {{count}} sekundami',
      other: 'manj kot {{count}} sekundami'
    },
    future: {
      one: 'manj kot {{count}} sekundo',
      two: 'manj kot {{count}} sekundi',
      few: 'manj kot {{count}} sekunde',
      other: 'manj kot {{count}} sekund'
    }
  },
  xSeconds: {
    present: {
      one: '{{count}} sekunda',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    },
    past: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundama',
      few: '{{count}} sekundami',
      other: '{{count}} sekundami'
    },
    future: {
      one: '{{count}} sekundo',
      two: '{{count}} sekundi',
      few: '{{count}} sekunde',
      other: '{{count}} sekund'
    }
  },
  halfAMinute: 'pol minute',
  lessThanXMinutes: {
    present: {
      one: 'manj kot {{count}} minuta',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    },
    past: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minutama',
      few: 'manj kot {{count}} minutami',
      other: 'manj kot {{count}} minutami'
    },
    future: {
      one: 'manj kot {{count}} minuto',
      two: 'manj kot {{count}} minuti',
      few: 'manj kot {{count}} minute',
      other: 'manj kot {{count}} minut'
    }
  },
  xMinutes: {
    present: {
      one: '{{count}} minuta',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    },
    past: {
      one: '{{count}} minuto',
      two: '{{count}} minutama',
      few: '{{count}} minutami',
      other: '{{count}} minutami'
    },
    future: {
      one: '{{count}} minuto',
      two: '{{count}} minuti',
      few: '{{count}} minute',
      other: '{{count}} minut'
    }
  },
  aboutXHours: {
    present: {
      one: 'približno {{count}} ura',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    },
    past: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} urama',
      few: 'približno {{count}} urami',
      other: 'približno {{count}} urami'
    },
    future: {
      one: 'približno {{count}} uro',
      two: 'približno {{count}} uri',
      few: 'približno {{count}} ure',
      other: 'približno {{count}} ur'
    }
  },
  xHours: {
    present: {
      one: '{{count}} ura',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    },
    past: {
      one: '{{count}} uro',
      two: '{{count}} urama',
      few: '{{count}} urami',
      other: '{{count}} urami'
    },
    future: {
      one: '{{count}} uro',
      two: '{{count}} uri',
      few: '{{count}} ure',
      other: '{{count}} ur'
    }
  },
  xDays: {
    present: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    },
    past: {
      one: '{{count}} dnem',
      two: '{{count}} dnevoma',
      few: '{{count}} dnevi',
      other: '{{count}} dnevi'
    },
    future: {
      one: '{{count}} dan',
      two: '{{count}} dni',
      few: '{{count}} dni',
      other: '{{count}} dni'
    }
  },
  // no tenses for weeks?
  aboutXWeeks: {
    one: 'približno {{count}} teden',
    two: 'približno {{count}} tedna',
    few: 'približno {{count}} tedne',
    other: 'približno {{count}} tednov'
  },
  // no tenses for weeks?
  xWeeks: {
    one: '{{count}} teden',
    two: '{{count}} tedna',
    few: '{{count}} tedne',
    other: '{{count}} tednov'
  },
  aboutXMonths: {
    present: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    },
    past: {
      one: 'približno {{count}} mesecem',
      two: 'približno {{count}} mesecema',
      few: 'približno {{count}} meseci',
      other: 'približno {{count}} meseci'
    },
    future: {
      one: 'približno {{count}} mesec',
      two: 'približno {{count}} meseca',
      few: 'približno {{count}} mesece',
      other: 'približno {{count}} mesecev'
    }
  },
  xMonths: {
    present: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} meseci',
      other: '{{count}} mesecev'
    },
    past: {
      one: '{{count}} mesecem',
      two: '{{count}} mesecema',
      few: '{{count}} meseci',
      other: '{{count}} meseci'
    },
    future: {
      one: '{{count}} mesec',
      two: '{{count}} meseca',
      few: '{{count}} mesece',
      other: '{{count}} mesecev'
    }
  },
  aboutXYears: {
    present: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    },
    past: {
      one: 'približno {{count}} letom',
      two: 'približno {{count}} letoma',
      few: 'približno {{count}} leti',
      other: 'približno {{count}} leti'
    },
    future: {
      one: 'približno {{count}} leto',
      two: 'približno {{count}} leti',
      few: 'približno {{count}} leta',
      other: 'približno {{count}} let'
    }
  },
  xYears: {
    present: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    },
    past: {
      one: '{{count}} letom',
      two: '{{count}} letoma',
      few: '{{count}} leti',
      other: '{{count}} leti'
    },
    future: {
      one: '{{count}} leto',
      two: '{{count}} leti',
      few: '{{count}} leta',
      other: '{{count}} let'
    }
  },
  overXYears: {
    present: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    },
    past: {
      one: 'več kot {{count}} letom',
      two: 'več kot {{count}} letoma',
      few: 'več kot {{count}} leti',
      other: 'več kot {{count}} leti'
    },
    future: {
      one: 'več kot {{count}} leto',
      two: 'več kot {{count}} leti',
      few: 'več kot {{count}} leta',
      other: 'več kot {{count}} let'
    }
  },
  almostXYears: {
    present: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    },
    past: {
      one: 'skoraj {{count}} letom',
      two: 'skoraj {{count}} letoma',
      few: 'skoraj {{count}} leti',
      other: 'skoraj {{count}} leti'
    },
    future: {
      one: 'skoraj {{count}} leto',
      two: 'skoraj {{count}} leti',
      few: 'skoraj {{count}} leta',
      other: 'skoraj {{count}} let'
    }
  }
};
function getFormFromCount(count) {
  switch (count % 100) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
    case 4:
      return 'few';
    default:
      return 'other';
  }
}
var formatDistance = function formatDistance(token, count, options) {
  var result = '';
  var tense = 'present';
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      tense = 'future';
      result = 'čez ';
    } else {
      tense = 'past';
      result = 'pred ';
    }
  }
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result += tokenValue;
  } else {
    var form = getFormFromCount(count);
    if (isPluralType(tokenValue)) {
      result += tokenValue[form].replace('{{count}}', String(count));
    } else {
      result += tokenValue[tense][form].replace('{{count}}', String(count));
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatLong/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/sl/_lib/formatLong/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, dd. MMMM y',
  long: 'dd. MMMM y',
  medium: 'd. MMM y',
  short: 'd. MM. yy'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: '{{date}} {{time}}',
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

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/formatRelative/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/sl/_lib/formatRelative/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'prejšnjo nedeljo ob' p";
      case 3:
        return "'prejšnjo sredo ob' p";
      case 6:
        return "'prejšnjo soboto ob' p";
      default:
        return "'prejšnji' EEEE 'ob' p";
    }
  },
  yesterday: "'včeraj ob' p",
  today: "'danes ob' p",
  tomorrow: "'jutri ob' p",
  nextWeek: function nextWeek(date) {
    var day = date.getUTCDay();
    switch (day) {
      case 0:
        return "'naslednjo nedeljo ob' p";
      case 3:
        return "'naslednjo sredo ob' p";
      case 6:
        return "'naslednjo soboto ob' p";
      default:
        return "'naslednji' EEEE 'ob' p";
    }
  },
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/localize/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/sl/_lib/localize/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['pr. n. št.', 'po n. št.'],
  abbreviated: ['pr. n. št.', 'po n. št.'],
  wide: ['pred našim štetjem', 'po našem štetju']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1. čet.', '2. čet.', '3. čet.', '4. čet.'],
  wide: ['1. četrtletje', '2. četrtletje', '3. četrtletje', '4. četrtletje']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december']
};
var dayValues = {
  narrow: ['n', 'p', 't', 's', 'č', 'p', 's'],
  short: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  abbreviated: ['ned.', 'pon.', 'tor.', 'sre.', 'čet.', 'pet.', 'sob.'],
  wide: ['nedelja', 'ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota']
};
var dayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'j',
    afternoon: 'p',
    evening: 'v',
    night: 'n'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'poln.',
    noon: 'pold.',
    morning: 'jut.',
    afternoon: 'pop.',
    evening: 'več.',
    night: 'noč'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'polnoč',
    noon: 'poldne',
    morning: 'jutro',
    afternoon: 'popoldne',
    evening: 'večer',
    night: 'noč'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'd',
    pm: 'p',
    midnight: '24.00',
    noon: '12.00',
    morning: 'zj',
    afternoon: 'p',
    evening: 'zv',
    night: 'po'
  },
  abbreviated: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opoln.',
    noon: 'opold.',
    morning: 'zjut.',
    afternoon: 'pop.',
    evening: 'zveč.',
    night: 'ponoči'
  },
  wide: {
    am: 'dop.',
    pm: 'pop.',
    midnight: 'opolnoči',
    noon: 'opoldne',
    morning: 'zjutraj',
    afternoon: 'popoldan',
    evening: 'zvečer',
    night: 'ponoči'
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
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
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

/***/ "./node_modules/date-fns/esm/locale/sl/_lib/match/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/sl/_lib/match/index.js ***!
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
  abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i,
  wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|na[sš]em)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?[čc]et\.?/i,
  wide: /^[1234]\. [čc]etrtletje/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,
  wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i],
  wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[nptsčc]/i,
  short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i],
  any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,
  any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^d/i,
    pm: /^p/i,
    midnight: /^24/i,
    noon: /^12/i,
    morning: /^(z?j)/i,
    afternoon: /^p/i,
    evening: /^(z?v)/i,
    night: /^(n|po)/i
  },
  any: {
    am: /^dop\./i,
    pm: /^pop\./i,
    midnight: /^o?poln/i,
    noon: /^o?pold/i,
    morning: /j/i,
    afternoon: /^pop\./i,
    evening: /^z?ve/i,
    night: /(po)?no/i
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
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
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
  !*** ./node_modules/date-fns/esm/locale/sl/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/sl/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/sl/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/sl/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/sl/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/sl/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary Slovenian locale.
 * @language Slovenian
 * @iso-639-2 slv
 * @author Adam Stradovnik [@Neoglyph]{@link https://github.com/Neoglyph}
 * @author Mato Žgajner [@mzgajner]{@link https://github.com/mzgajner}
 */
var locale = {
  code: 'sl',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9kYXRlLXBpY2tlci1sb2NhbGUvc2wuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix5QkFBeUIsUUFBUTtBQUNqQyxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix5QkFBeUIsUUFBUTtBQUNqQyxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsUUFBUTtBQUMvQix5QkFBeUIsUUFBUTtBQUNqQztBQUNBLEdBQUc7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUyxNQUFNO0FBQzFCLFdBQVcsU0FBUyxNQUFNO0FBQzFCLGFBQWEsU0FBUyxNQUFNO0FBQzVCLFlBQVksU0FBUyxNQUFNO0FBQzNCO0FBQ0E7QUFDQSxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWSwyRUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHlFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDdEh3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkVBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHNFQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsc0VBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHNFQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7O1VDM0dwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNSO0FBQ1E7QUFDWjtBQUNOO0FBQzFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvc2wvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvc2wvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9zbC9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9zbC9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9zbC9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvc2wvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJmdW5jdGlvbiBpc1BsdXJhbFR5cGUodmFsKSB7XG4gIHJldHVybiB2YWwub25lICE9PSB1bmRlZmluZWQ7XG59XG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kYScsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ21hbmoga290IHt7Y291bnR9fSBzZWt1bmQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kYW1hJyxcbiAgICAgIGZldzogJ21hbmoga290IHt7Y291bnR9fSBzZWt1bmRhbWknLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kbycsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kaScsXG4gICAgICBmZXc6ICdtYW5qIGtvdCB7e2NvdW50fX0gc2VrdW5kZScsXG4gICAgICBvdGhlcjogJ21hbmoga290IHt7Y291bnR9fSBzZWt1bmQnXG4gICAgfVxuICB9LFxuICB4U2Vjb25kczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBzZWt1bmRhJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBzZWt1bmRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBzZWt1bmRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBzZWt1bmRvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBzZWt1bmRhbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IHNla3VuZGFtaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWt1bmRhbWknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBzZWt1bmRvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBzZWt1bmRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBzZWt1bmRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHNla3VuZCdcbiAgICB9XG4gIH0sXG4gIGhhbGZBTWludXRlOiAncG9sIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRhJyxcbiAgICAgIHR3bzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGknLFxuICAgICAgZmV3OiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ21hbmoga290IHt7Y291bnR9fSBtaW51dCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ21hbmoga290IHt7Y291bnR9fSBtaW51dG8nLFxuICAgICAgdHdvOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0YW1hJyxcbiAgICAgIGZldzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGFtaScsXG4gICAgICBvdGhlcjogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGFtaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAnbWFuaiBrb3Qge3tjb3VudH19IG1pbnV0bycsXG4gICAgICB0d286ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXRpJyxcbiAgICAgIGZldzogJ21hbmoga290IHt7Y291bnR9fSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICdtYW5qIGtvdCB7e2NvdW50fX0gbWludXQnXG4gICAgfVxuICB9LFxuICB4TWludXRlczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBtaW51dGEnLFxuICAgICAgdHdvOiAne3tjb3VudH19IG1pbnV0aScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbWludXRlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IG1pbnV0bycsXG4gICAgICB0d286ICd7e2NvdW50fX0gbWludXRhbWEnLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1pbnV0YW1pJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0YW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbWludXRvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtaW51dGknLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dCdcbiAgICB9XG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJhJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmUnLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cidcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVybycsXG4gICAgICB0d286ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmFtYScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cmFtaScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyYW1pJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB1cm8nLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdXJpJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyZScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IHVyJ1xuICAgIH1cbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAne3tjb3VudH19IHVyYScsXG4gICAgICB0d286ICd7e2NvdW50fX0gdXJpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSB1cmUnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gdXInXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gdXJvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSB1cmFtYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gdXJhbWknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gdXJhbWknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSB1cm8nLFxuICAgICAgdHdvOiAne3tjb3VudH19IHVyaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gdXJlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHVyJ1xuICAgIH1cbiAgfSxcbiAgeERheXM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gZGFuJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBkbmknLFxuICAgICAgZmV3OiAne3tjb3VudH19IGRuaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBkbmknXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gZG5lbScsXG4gICAgICB0d286ICd7e2NvdW50fX0gZG5ldm9tYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gZG5ldmknLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gZG5ldmknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBkYW4nLFxuICAgICAgdHdvOiAne3tjb3VudH19IGRuaScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gZG5pJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGRuaSdcbiAgICB9XG4gIH0sXG4gIC8vIG5vIHRlbnNlcyBmb3Igd2Vla3M/XG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gdGVkZW4nLFxuICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IHRlZG5hJyxcbiAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB0ZWRuZScsXG4gICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSB0ZWRub3YnXG4gIH0sXG4gIC8vIG5vIHRlbnNlcyBmb3Igd2Vla3M/XG4gIHhXZWVrczoge1xuICAgIG9uZTogJ3t7Y291bnR9fSB0ZWRlbicsXG4gICAgdHdvOiAne3tjb3VudH19IHRlZG5hJyxcbiAgICBmZXc6ICd7e2NvdW50fX0gdGVkbmUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHRlZG5vdidcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWMnLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWNhJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjZScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjZXYnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBtZXNlY2VtJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjZW1hJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjaScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjaSdcbiAgICB9LFxuICAgIGZ1dHVyZToge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWMnLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbWVzZWNhJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjZScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IG1lc2VjZXYnXG4gICAgfVxuICB9LFxuICB4TW9udGhzOiB7XG4gICAgcHJlc2VudDoge1xuICAgICAgb25lOiAne3tjb3VudH19IG1lc2VjJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBtZXNlY2EnLFxuICAgICAgZmV3OiAne3tjb3VudH19IG1lc2VjaScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNlY2V2J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAne3tjb3VudH19IG1lc2VjZW0nLFxuICAgICAgdHdvOiAne3tjb3VudH19IG1lc2VjZW1hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBtZXNlY2knLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbWVzZWNpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd7e2NvdW50fX0gbWVzZWMnLFxuICAgICAgdHdvOiAne3tjb3VudH19IG1lc2VjYScsXG4gICAgICBmZXc6ICd7e2NvdW50fX0gbWVzZWNlJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IG1lc2VjZXYnXG4gICAgfVxuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRhJyxcbiAgICAgIG90aGVyOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0b21hJyxcbiAgICAgIGZldzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGknLFxuICAgICAgb3RoZXI6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICdwcmlibGnFvm5vIHt7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAncHJpYmxpxb5ubyB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3ByaWJsacW+bm8ge3tjb3VudH19IGxldCdcbiAgICB9XG4gIH0sXG4gIHhZZWFyczoge1xuICAgIHByZXNlbnQ6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBsZXRhJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGxldCdcbiAgICB9LFxuICAgIHBhc3Q6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBsZXRvbScsXG4gICAgICB0d286ICd7e2NvdW50fX0gbGV0b21hJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBsZXRpJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGxldGknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3t7Y291bnR9fSBsZXRvJyxcbiAgICAgIHR3bzogJ3t7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3t7Y291bnR9fSBsZXRhJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGxldCdcbiAgICB9XG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3ZlxI0ga290IHt7Y291bnR9fSBsZXQnXG4gICAgfSxcbiAgICBwYXN0OiB7XG4gICAgICBvbmU6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0b20nLFxuICAgICAgdHdvOiAndmXEjSBrb3Qge3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0aScsXG4gICAgICBvdGhlcjogJ3ZlxI0ga290IHt7Y291bnR9fSBsZXRpJ1xuICAgIH0sXG4gICAgZnV0dXJlOiB7XG4gICAgICBvbmU6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0aScsXG4gICAgICBmZXc6ICd2ZcSNIGtvdCB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3ZlxI0ga290IHt7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBwcmVzZW50OiB7XG4gICAgICBvbmU6ICdza29yYWoge3tjb3VudH19IGxldG8nLFxuICAgICAgdHdvOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRpJyxcbiAgICAgIGZldzogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0YScsXG4gICAgICBvdGhlcjogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0J1xuICAgIH0sXG4gICAgcGFzdDoge1xuICAgICAgb25lOiAnc2tvcmFqIHt7Y291bnR9fSBsZXRvbScsXG4gICAgICB0d286ICdza29yYWoge3tjb3VudH19IGxldG9tYScsXG4gICAgICBmZXc6ICdza29yYWoge3tjb3VudH19IGxldGknLFxuICAgICAgb3RoZXI6ICdza29yYWoge3tjb3VudH19IGxldGknXG4gICAgfSxcbiAgICBmdXR1cmU6IHtcbiAgICAgIG9uZTogJ3Nrb3JhaiB7e2NvdW50fX0gbGV0bycsXG4gICAgICB0d286ICdza29yYWoge3tjb3VudH19IGxldGknLFxuICAgICAgZmV3OiAnc2tvcmFqIHt7Y291bnR9fSBsZXRhJyxcbiAgICAgIG90aGVyOiAnc2tvcmFqIHt7Y291bnR9fSBsZXQnXG4gICAgfVxuICB9XG59O1xuZnVuY3Rpb24gZ2V0Rm9ybUZyb21Db3VudChjb3VudCkge1xuICBzd2l0Y2ggKGNvdW50ICUgMTAwKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdvbmUnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAndHdvJztcbiAgICBjYXNlIDM6XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuICdmZXcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ290aGVyJztcbiAgfVxufVxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIHRlbnNlID0gJ3ByZXNlbnQnO1xuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHRlbnNlID0gJ2Z1dHVyZSc7XG4gICAgICByZXN1bHQgPSAnxI1leiAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW5zZSA9ICdwYXN0JztcbiAgICAgIHJlc3VsdCA9ICdwcmVkICc7XG4gICAgfVxuICB9XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ICs9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZvcm0gPSBnZXRGb3JtRnJvbUNvdW50KGNvdW50KTtcbiAgICBpZiAoaXNQbHVyYWxUeXBlKHRva2VuVmFsdWUpKSB7XG4gICAgICByZXN1bHQgKz0gdG9rZW5WYWx1ZVtmb3JtXS5yZXBsYWNlKCd7e2NvdW50fX0nLCBTdHJpbmcoY291bnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHRva2VuVmFsdWVbdGVuc2VdW2Zvcm1dLnJlcGxhY2UoJ3t7Y291bnR9fScsIFN0cmluZyhjb3VudCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgZGQuIE1NTU0geScsXG4gIGxvbmc6ICdkZC4gTU1NTSB5JyxcbiAgbWVkaXVtOiAnZC4gTU1NIHknLFxuICBzaG9ydDogJ2QuIE1NLiB5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdISDptbTpzcyB6enp6JyxcbiAgbG9uZzogJ0hIOm1tOnNzIHonLFxuICBtZWRpdW06ICdISDptbTpzcycsXG4gIHNob3J0OiAnSEg6bW0nXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbG9uZzogJ3t7ZGF0ZX19IHt7dGltZX19JyxcbiAgbWVkaXVtOiAne3tkYXRlfX0ge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19IHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IGZ1bmN0aW9uIGxhc3RXZWVrKGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmpvIG5lZGVsam8gb2InIHBcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIFwiJ3ByZWrFoW5qbyBzcmVkbyBvYicgcFwiO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gXCIncHJlasWhbmpvIHNvYm90byBvYicgcFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiJ3ByZWrFoW5qaScgRUVFRSAnb2InIHBcIjtcbiAgICB9XG4gIH0sXG4gIHllc3RlcmRheTogXCIndsSNZXJhaiBvYicgcFwiLFxuICB0b2RheTogXCInZGFuZXMgb2InIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ2p1dHJpIG9iJyBwXCIsXG4gIG5leHRXZWVrOiBmdW5jdGlvbiBuZXh0V2VlayhkYXRlKSB7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qbyBuZWRlbGpvIG9iJyBwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIiduYXNsZWRuam8gc3JlZG8gb2InIHBcIjtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIFwiJ25hc2xlZG5qbyBzb2JvdG8gb2InIHBcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIiduYXNsZWRuamknIEVFRUUgJ29iJyBwXCI7XG4gICAgfVxuICB9LFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIGRhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdCA9IGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRhdGUpO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydwci4gbi4gxaF0LicsICdwbyBuLiDFoXQuJ10sXG4gIGFiYnJldmlhdGVkOiBbJ3ByLiBuLiDFoXQuJywgJ3BvIG4uIMWhdC4nXSxcbiAgd2lkZTogWydwcmVkIG5hxaFpbSDFoXRldGplbScsICdwbyBuYcWhZW0gxaF0ZXRqdSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJzEuIMSNZXQuJywgJzIuIMSNZXQuJywgJzMuIMSNZXQuJywgJzQuIMSNZXQuJ10sXG4gIHdpZGU6IFsnMS4gxI1ldHJ0bGV0amUnLCAnMi4gxI1ldHJ0bGV0amUnLCAnMy4gxI1ldHJ0bGV0amUnLCAnNC4gxI1ldHJ0bGV0amUnXVxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2onLCAnZicsICdtJywgJ2EnLCAnbScsICdqJywgJ2onLCAnYScsICdzJywgJ28nLCAnbicsICdkJ10sXG4gIGFiYnJldmlhdGVkOiBbJ2phbi4nLCAnZmViLicsICdtYXIuJywgJ2Fwci4nLCAnbWFqJywgJ2p1bi4nLCAnanVsLicsICdhdmcuJywgJ3NlcC4nLCAnb2t0LicsICdub3YuJywgJ2RlYy4nXSxcbiAgd2lkZTogWydqYW51YXInLCAnZmVicnVhcicsICdtYXJlYycsICdhcHJpbCcsICdtYWonLCAnanVuaWonLCAnanVsaWonLCAnYXZndXN0JywgJ3NlcHRlbWJlcicsICdva3RvYmVyJywgJ25vdmVtYmVyJywgJ2RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnbicsICdwJywgJ3QnLCAncycsICfEjScsICdwJywgJ3MnXSxcbiAgc2hvcnQ6IFsnbmVkLicsICdwb24uJywgJ3Rvci4nLCAnc3JlLicsICfEjWV0LicsICdwZXQuJywgJ3NvYi4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnbmVkLicsICdwb24uJywgJ3Rvci4nLCAnc3JlLicsICfEjWV0LicsICdwZXQuJywgJ3NvYi4nXSxcbiAgd2lkZTogWyduZWRlbGphJywgJ3BvbmVkZWxqZWsnLCAndG9yZWsnLCAnc3JlZGEnLCAnxI1ldHJ0ZWsnLCAncGV0ZWsnLCAnc29ib3RhJ11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2QnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICcyNC4wMCcsXG4gICAgbm9vbjogJzEyLjAwJyxcbiAgICBtb3JuaW5nOiAnaicsXG4gICAgYWZ0ZXJub29uOiAncCcsXG4gICAgZXZlbmluZzogJ3YnLFxuICAgIG5pZ2h0OiAnbidcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2RvcC4nLFxuICAgIHBtOiAncG9wLicsXG4gICAgbWlkbmlnaHQ6ICdwb2xuLicsXG4gICAgbm9vbjogJ3BvbGQuJyxcbiAgICBtb3JuaW5nOiAnanV0LicsXG4gICAgYWZ0ZXJub29uOiAncG9wLicsXG4gICAgZXZlbmluZzogJ3ZlxI0uJyxcbiAgICBuaWdodDogJ25vxI0nXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2RvcC4nLFxuICAgIHBtOiAncG9wLicsXG4gICAgbWlkbmlnaHQ6ICdwb2xub8SNJyxcbiAgICBub29uOiAncG9sZG5lJyxcbiAgICBtb3JuaW5nOiAnanV0cm8nLFxuICAgIGFmdGVybm9vbjogJ3BvcG9sZG5lJyxcbiAgICBldmVuaW5nOiAndmXEjWVyJyxcbiAgICBuaWdodDogJ25vxI0nXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdkJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnMjQuMDAnLFxuICAgIG5vb246ICcxMi4wMCcsXG4gICAgbW9ybmluZzogJ3pqJyxcbiAgICBhZnRlcm5vb246ICdwJyxcbiAgICBldmVuaW5nOiAnenYnLFxuICAgIG5pZ2h0OiAncG8nXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdkb3AuJyxcbiAgICBwbTogJ3BvcC4nLFxuICAgIG1pZG5pZ2h0OiAnb3BvbG4uJyxcbiAgICBub29uOiAnb3BvbGQuJyxcbiAgICBtb3JuaW5nOiAnemp1dC4nLFxuICAgIGFmdGVybm9vbjogJ3BvcC4nLFxuICAgIGV2ZW5pbmc6ICd6dmXEjS4nLFxuICAgIG5pZ2h0OiAncG9ub8SNaSdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnZG9wLicsXG4gICAgcG06ICdwb3AuJyxcbiAgICBtaWRuaWdodDogJ29wb2xub8SNaScsXG4gICAgbm9vbjogJ29wb2xkbmUnLFxuICAgIG1vcm5pbmc6ICd6anV0cmFqJyxcbiAgICBhZnRlcm5vb246ICdwb3BvbGRhbicsXG4gICAgZXZlbmluZzogJ3p2ZcSNZXInLFxuICAgIG5pZ2h0OiAncG9ub8SNaSdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIHJldHVybiBudW1iZXIgKyAnLic7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKylcXC4vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBhYmJyZXZpYXRlZDogL14ocHJcXC4gblxcLiDFoXRcXC58cG8gblxcLiDFoXRcXC4pL2ksXG4gIHdpZGU6IC9eKHByZWQgS3Jpc3R1c29tfHByZWQgbmFbc8WhXWltIFtzxaFddGV0amVtfHBvIEtyaXN0dXN1fHBvIG5hW3PFoV1lbSBbc8WhXXRldGp1fG5hW3PFoV1lZ2EgW3PFoV10ZXRqYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXnByL2ksIC9eKHBvfG5hW3PFoV1lbSkvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eWzEyMzRdXFwuXFxzP1vEjWNdZXRcXC4/L2ksXG4gIHdpZGU6IC9eWzEyMzRdXFwuIFvEjWNdZXRydGxldGplL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphblxcLnxmZWJcXC58bWFyXFwufGFwclxcLnxtYWp8anVuXFwufGp1bFxcLnxhdmdcXC58c2VwXFwufG9rdFxcLnxub3ZcXC58ZGVjXFwuKS9pLFxuICB3aWRlOiAvXihqYW51YXJ8ZmVicnVhcnxtYXJlY3xhcHJpbHxtYWp8anVuaWp8anVsaWp8YXZndXN0fHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFiYnJldmlhdGVkOiBbL15qYS9pLCAvXmZlL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYWovaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdi9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIHdpZGU6IFsvXmphL2ksIC9eZmUvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1hai9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF2L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW25wdHPEjWNdL2ksXG4gIHNob3J0OiAvXihuZWRcXC58cG9uXFwufHRvclxcLnxzcmVcXC58W2PEjV1ldFxcLnxwZXRcXC58c29iXFwuKS9pLFxuICBhYmJyZXZpYXRlZDogL14obmVkXFwufHBvblxcLnx0b3JcXC58c3JlXFwufFtjxI1dZXRcXC58cGV0XFwufHNvYlxcLikvaSxcbiAgd2lkZTogL14obmVkZWxqYXxwb25lZGVsamVrfHRvcmVrfHNyZWRhfFtjxI1dZXRydGVrfHBldGVrfHNvYm90YSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXm4vaSwgL15wL2ksIC9edC9pLCAvXnMvaSwgL15bY8SNXS9pLCAvXnAvaSwgL15zL2ldLFxuICBhbnk6IFsvXm4vaSwgL15wby9pLCAvXnQvaSwgL15zci9pLCAvXltjxI1dL2ksIC9ecGUvaSwgL15zby9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGR8cG8/fHo/dnxufHo/anwyNFxcLjAwfDEyXFwuMDApL2ksXG4gIGFueTogL14oZG9wXFwufHBvcFxcLnxvP3BvbG4oXFwufG9bY8SNXWk/KXxvP3BvbGQoXFwufG5lKXx6P3ZlW2PEjV0oXFwufGVyKXwocG8pP25vW2PEjV1pP3xwb3BvbGQobmV8YW4pfGp1dChcXC58cm8pfHpqdXQoXFwufHJhaikpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IC9eZC9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL14yNC9pLFxuICAgIG5vb246IC9eMTIvaSxcbiAgICBtb3JuaW5nOiAvXih6P2opL2ksXG4gICAgYWZ0ZXJub29uOiAvXnAvaSxcbiAgICBldmVuaW5nOiAvXih6P3YpL2ksXG4gICAgbmlnaHQ6IC9eKG58cG8pL2lcbiAgfSxcbiAgYW55OiB7XG4gICAgYW06IC9eZG9wXFwuL2ksXG4gICAgcG06IC9ecG9wXFwuL2ksXG4gICAgbWlkbmlnaHQ6IC9ebz9wb2xuL2ksXG4gICAgbm9vbjogL15vP3BvbGQvaSxcbiAgICBtb3JuaW5nOiAvai9pLFxuICAgIGFmdGVybm9vbjogL15wb3BcXC4vaSxcbiAgICBldmVuaW5nOiAvXno/dmUvaSxcbiAgICBuaWdodDogLyhwbyk/bm8vaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgU2xvdmVuaWFuIGxvY2FsZS5cbiAqIEBsYW5ndWFnZSBTbG92ZW5pYW5cbiAqIEBpc28tNjM5LTIgc2x2XG4gKiBAYXV0aG9yIEFkYW0gU3RyYWRvdm5payBbQE5lb2dseXBoXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vTmVvZ2x5cGh9XG4gKiBAYXV0aG9yIE1hdG8gxb1nYWpuZXIgW0Btemdham5lcl17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL216Z2FqbmVyfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnc2wnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDEgLyogTW9uZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==