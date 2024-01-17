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

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatDistance/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ca/_lib/formatDistance/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Davant de les xifres que es diuen amb vocal inicial, 1 i 11, s'apostrofen els articles el i la i la preposició de igual que si estiguessin escrits amb lletres.
 *    l'1 de juliol ('l'u')
 *    l'11 de novembre ('l'onze')
 *    l'11a clàusula del contracte ('l'onzena')
 *    la contractació d'11 jugadors ('d'onze')
 *    l'aval d'11.000 socis ('d'onze mil')
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=apostrofaci%25F3+davant+xifres&action=Principal&method=detall_completa&numPagina=1&idHit=11236&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=11236&titol=apostrofaci%F3%20davant%20de%20xifres%20%2F%20apostrofaci%F3%20davant%20de%201%20i%2011&numeroResultat=1&clickLink=detall&tipusCerca=cerca.normes
 */

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "menys d'un segon",
    eleven: "menys d'onze segons",
    other: 'menys de {{count}} segons'
  },
  xSeconds: {
    one: '1 segon',
    other: '{{count}} segons'
  },
  halfAMinute: 'mig minut',
  lessThanXMinutes: {
    one: "menys d'un minut",
    eleven: "menys d'onze minuts",
    other: 'menys de {{count}} minuts'
  },
  xMinutes: {
    one: '1 minut',
    other: '{{count}} minuts'
  },
  aboutXHours: {
    one: 'aproximadament una hora',
    other: 'aproximadament {{count}} hores'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} hores'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dies'
  },
  aboutXWeeks: {
    one: 'aproximadament una setmana',
    other: 'aproximadament {{count}} setmanes'
  },
  xWeeks: {
    one: '1 setmana',
    other: '{{count}} setmanes'
  },
  aboutXMonths: {
    one: 'aproximadament un mes',
    other: 'aproximadament {{count}} mesos'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} mesos'
  },
  aboutXYears: {
    one: 'aproximadament un any',
    other: 'aproximadament {{count}} anys'
  },
  xYears: {
    one: '1 any',
    other: '{{count}} anys'
  },
  overXYears: {
    one: "més d'un any",
    eleven: "més d'onze anys",
    other: 'més de {{count}} anys'
  },
  almostXYears: {
    one: 'gairebé un any',
    other: 'gairebé {{count}} anys'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 11 && tokenValue.eleven) {
    result = tokenValue.eleven;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'en ' + result;
    } else {
      return 'fa ' + result;
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatLong/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ca/_lib/formatLong/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: "EEEE, d 'de' MMMM y",
  long: "d 'de' MMMM y",
  medium: 'd MMM y',
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'a les' {{time}}",
  long: "{{date}} 'a les' {{time}}",
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

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/formatRelative/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ca/_lib/formatRelative/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'el' eeee 'passat a la' LT",
  yesterday: "'ahir a la' p",
  today: "'avui a la' p",
  tomorrow: "'demà a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'passat a les' p",
  yesterday: "'ahir a les' p",
  today: "'avui a les' p",
  tomorrow: "'demà a les' p",
  nextWeek: "eeee 'a les' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  }
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/localize/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ca/_lib/localize/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

/**
 * General information
 * Reference: https://aplicacions.llengua.gencat.cat
 * Reference: https://www.uoc.edu/portal/ca/servei-linguistic/convencions/abreviacions/simbols/simbols-habituals.html
 */
/**
 * Abans de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abans+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6876&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6876&titol=abans%20de%20Crist%20(abreviatura)%20/%20abans%20de%20Crist%20(sigla)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 * Desprest de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=despr%E9s+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6879&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6879&titol=despr%E9s%20de%20Crist%20(sigla)%20/%20despr%E9s%20de%20Crist%20(abreviatura)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 */
var eraValues = {
  narrow: ['aC', 'dC'],
  abbreviated: ['a. de C.', 'd. de C.'],
  wide: ['abans de Crist', 'després de Crist']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1r trimestre', '2n trimestre', '3r trimestre', '4t trimestre']
};

/**
 * Dins d'un text convé fer servir la forma sencera dels mesos, ja que sempre és més clar el mot sencer que l'abreviatura, encara que aquesta sigui força coneguda.
 * Cal reservar, doncs, les abreviatures per a les llistes o classificacions, els gràfics, les taules o quadres estadístics, els textos publicitaris, etc.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviacions+mesos&action=Principal&method=detall_completa&numPagina=1&idHit=8402&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8402&titol=abreviatures%20dels%20mesos%20de%20l%27any&numeroResultat=5&clickLink=detall&tipusCerca=cerca.fitxes
 */
var monthValues = {
  narrow: ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
  /**
   * Les abreviatures dels mesos de l'any es formen seguint una de les normes generals de formació d'abreviatures.
   * S'escriu la primera síl·laba i les consonants de la síl·laba següent anteriors a la primera vocal.
   * Els mesos de març, maig i juny no s'abreugen perquè són paraules d'una sola síl·laba.
   */
  abbreviated: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
  wide: ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre']
};

/**
 * Les abreviatures dels dies de la setmana comencen totes amb la lletra d.
 * Tot seguit porten la consonant següent a la i, excepte en el cas de dimarts, dimecres i diumenge, en què aquesta consonant és la m i, per tant, hi podria haver confusió.
 * Per evitar-ho, s'ha substituït la m per una t (en el cas de dimarts), una c (en el cas de dimecres) i una g (en el cas de diumenge), respectivament.
 *
 * Seguint la norma general d'ús de les abreviatures, les dels dies de la setmana sempre porten punt final.
 * Igualment, van amb la primera lletra en majúscula quan la paraula sencera també hi aniria.
 * En canvi, van amb la primera lletra en minúscula quan la inicial de la paraula sencera també hi aniria.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviatures+dies&action=Principal&method=detall_completa&numPagina=1&idHit=8387&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8387&titol=abreviatures%20dels%20dies%20de%20la%20setmana&numeroResultat=1&clickLink=detall&tipusCerca=cerca.tot
 */
var dayValues = {
  narrow: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  short: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  abbreviated: ['dg.', 'dl.', 'dt.', 'dm.', 'dj.', 'dv.', 'ds.'],
  wide: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte']
};

/**
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?action=Principal&method=detall&input_cercar=parts+del+dia&numPagina=1&database=FITXES_PUB&idFont=12801&idHit=12801&tipusFont=Fitxes+de+l%27Optimot&numeroResultat=1&databases_avansada=&categories_avansada=&clickLink=detall&titol=Nom+de+les+parts+del+dia&tematica=&tipusCerca=cerca.fitxes
 */
var dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'mitjanit',
    noon: 'migdia',
    morning: 'matí',
    afternoon: 'tarda',
    evening: 'vespre',
    night: 'nit'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  },
  wide: {
    am: 'ante meridiem',
    pm: 'post meridiem',
    midnight: 'de la mitjanit',
    noon: 'del migdia',
    morning: 'del matí',
    afternoon: 'de la tarda',
    evening: 'del vespre',
    night: 'de la nit'
  }
};

/**
 * Quan van en singular, els nombres ordinals es representen, en forma d’abreviatura, amb la xifra seguida de l’última lletra del mot desplegat.
 * És optatiu posar punt després de la lletra.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/pdf/abrevia.pdf#page=18
 */
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'r';
      case 2:
        return number + 'n';
      case 3:
        return number + 'r';
      case 4:
        return number + 't';
    }
  }
  return number + 'è';
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

/***/ "./node_modules/date-fns/esm/locale/ca/_lib/match/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/ca/_lib/match/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(è|r|n|r|t)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a. de C.|d. de C.)/i,
  wide: /^(abans de Crist|despr[eé]s de Crist)/i
};
var parseEraPatterns = {
  narrow: [/^aC/i, /^dC/i],
  abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
  wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](è|r|n|r|t)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
  abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
  wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
};
var parseMonthPatterns = {
  narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i],
  abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i],
  wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i]
};
var matchDayPatterns = {
  narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
};
var parseDayPatterns = {
  narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
  abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
  wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mitjanit/i,
    noon: /^migdia/i,
    morning: /matí/i,
    afternoon: /tarda/i,
    evening: /vespre/i,
    night: /nit/i
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
    defaultParseWidth: 'wide'
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
  !*** ./node_modules/date-fns/esm/locale/ca/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/ca/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/ca/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/ca/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/ca/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/ca/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary Catalan locale.
 * @language Catalan
 * @iso-639-2 cat
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Alex Vizcaino [@avizcaino]{@link https://github.com/avizcaino}
 */
var locale = {
  code: 'ca',
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

// throw new Error('ca locale is currently unavailable. Please check the progress of converting this locale to v2.0.0 in this issue on Github: TBA')
})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9kYXRlLXBpY2tlci1sb2NhbGUvY2EuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLFFBQVE7QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0oseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2xHNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sVUFBVSxNQUFNO0FBQ2xDLFdBQVcsT0FBTyxVQUFVLE1BQU07QUFDbEMsYUFBYSxNQUFNLElBQUksTUFBTTtBQUM3QixZQUFZLE1BQU0sSUFBSSxNQUFNO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWSwyRUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3RCd0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHlFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDL0t3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkVBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHNFQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsc0VBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHNFQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7O1VDdEdwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNSO0FBQ1E7QUFDWjtBQUNOO0FBQzFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7QUFFdEIsb0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2NhL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2NhL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvY2EvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvY2EvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvY2EvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2NhL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwiLyoqXG4gKiBEYXZhbnQgZGUgbGVzIHhpZnJlcyBxdWUgZXMgZGl1ZW4gYW1iIHZvY2FsIGluaWNpYWwsIDEgaSAxMSwgcydhcG9zdHJvZmVuIGVscyBhcnRpY2xlcyBlbCBpIGxhIGkgbGEgcHJlcG9zaWNpw7MgZGUgaWd1YWwgcXVlIHNpIGVzdGlndWVzc2luIGVzY3JpdHMgYW1iIGxsZXRyZXMuXG4gKiAgICBsJzEgZGUganVsaW9sICgnbCd1JylcbiAqICAgIGwnMTEgZGUgbm92ZW1icmUgKCdsJ29uemUnKVxuICogICAgbCcxMWEgY2zDoHVzdWxhIGRlbCBjb250cmFjdGUgKCdsJ29uemVuYScpXG4gKiAgICBsYSBjb250cmFjdGFjacOzIGQnMTEganVnYWRvcnMgKCdkJ29uemUnKVxuICogICAgbCdhdmFsIGQnMTEuMDAwIHNvY2lzICgnZCdvbnplIG1pbCcpXG4gKlxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdC9sbGMvQXBwSmF2YS9pbmRleC5odG1sP2lucHV0X2NlcmNhcj1hcG9zdHJvZmFjaSUyNUYzK2RhdmFudCt4aWZyZXMmYWN0aW9uPVByaW5jaXBhbCZtZXRob2Q9ZGV0YWxsX2NvbXBsZXRhJm51bVBhZ2luYT0xJmlkSGl0PTExMjM2JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTExMjM2JnRpdG9sPWFwb3N0cm9mYWNpJUYzJTIwZGF2YW50JTIwZGUlMjB4aWZyZXMlMjAlMkYlMjBhcG9zdHJvZmFjaSVGMyUyMGRhdmFudCUyMGRlJTIwMSUyMGklMjAxMSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS5ub3JtZXNcbiAqL1xuXG52YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibWVueXMgZCd1biBzZWdvblwiLFxuICAgIGVsZXZlbjogXCJtZW55cyBkJ29uemUgc2Vnb25zXCIsXG4gICAgb3RoZXI6ICdtZW55cyBkZSB7e2NvdW50fX0gc2Vnb25zJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vnb24nLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlZ29ucydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdtaWcgbWludXQnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcIm1lbnlzIGQndW4gbWludXRcIixcbiAgICBlbGV2ZW46IFwibWVueXMgZCdvbnplIG1pbnV0c1wiLFxuICAgIG90aGVyOiAnbWVueXMgZGUge3tjb3VudH19IG1pbnV0cydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dHMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnQgdW5hIGhvcmEnLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnQge3tjb3VudH19IGhvcmVzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvcmEnLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvcmVzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGlhJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkaWVzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fwcm94aW1hZGFtZW50IHVuYSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBzZXRtYW5lcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSBzZXRtYW5hJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZXRtYW5lcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYXByb3hpbWFkYW1lbnQgdW4gbWVzJyxcbiAgICBvdGhlcjogJ2Fwcm94aW1hZGFtZW50IHt7Y291bnR9fSBtZXNvcydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbWVzJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtZXNvcydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhcHJveGltYWRhbWVudCB1biBhbnknLFxuICAgIG90aGVyOiAnYXByb3hpbWFkYW1lbnQge3tjb3VudH19IGFueXMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgYW55JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBhbnlzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm3DqXMgZCd1biBhbnlcIixcbiAgICBlbGV2ZW46IFwibcOpcyBkJ29uemUgYW55c1wiLFxuICAgIG90aGVyOiAnbcOpcyBkZSB7e2NvdW50fX0gYW55cydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnZ2FpcmViw6kgdW4gYW55JyxcbiAgICBvdGhlcjogJ2dhaXJlYsOpIHt7Y291bnR9fSBhbnlzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxMSAmJiB0b2tlblZhbHVlLmVsZXZlbikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUuZWxldmVuO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgU3RyaW5nKGNvdW50KSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2VuICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZmEgJyArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBkICdkZScgTU1NTSB5XCIsXG4gIGxvbmc6IFwiZCAnZGUnIE1NTU0geVwiLFxuICBtZWRpdW06ICdkIE1NTSB5JyxcbiAgc2hvcnQ6ICdkZC9NTS95J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0hIOm1tOnNzIHp6enonLFxuICBsb25nOiAnSEg6bW06c3MgeicsXG4gIG1lZGl1bTogJ0hIOm1tOnNzJyxcbiAgc2hvcnQ6ICdISDptbSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhIGxlcycge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYSBsZXMnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2VsJyBlZWVlICdwYXNzYXQgYSBsYScgTFRcIixcbiAgeWVzdGVyZGF5OiBcIidhaGlyIGEgbGEnIHBcIixcbiAgdG9kYXk6IFwiJ2F2dWkgYSBsYScgcFwiLFxuICB0b21vcnJvdzogXCInZGVtw6AgYSBsYScgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhIGxhJyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGVQbHVyYWwgPSB7XG4gIGxhc3RXZWVrOiBcIidlbCcgZWVlZSAncGFzc2F0IGEgbGVzJyBwXCIsXG4gIHllc3RlcmRheTogXCInYWhpciBhIGxlcycgcFwiLFxuICB0b2RheTogXCInYXZ1aSBhIGxlcycgcFwiLFxuICB0b21vcnJvdzogXCInZGVtw6AgYSBsZXMnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYSBsZXMnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBkYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIGlmIChkYXRlLmdldFVUQ0hvdXJzKCkgIT09IDEpIHtcbiAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVQbHVyYWxbdG9rZW5dO1xuICB9XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbi8qKlxuICogR2VuZXJhbCBpbmZvcm1hdGlvblxuICogUmVmZXJlbmNlOiBodHRwczovL2FwbGljYWNpb25zLmxsZW5ndWEuZ2VuY2F0LmNhdFxuICogUmVmZXJlbmNlOiBodHRwczovL3d3dy51b2MuZWR1L3BvcnRhbC9jYS9zZXJ2ZWktbGluZ3Vpc3RpYy9jb252ZW5jaW9ucy9hYnJldmlhY2lvbnMvc2ltYm9scy9zaW1ib2xzLWhhYml0dWFscy5odG1sXG4gKi9cbi8qKlxuICogQWJhbnMgZGUgQ3Jpc3Q6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWFiYW5zK2RlK2NyaXN0JmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD02ODc2JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTY4NzYmdGl0b2w9YWJhbnMlMjBkZSUyMENyaXN0JTIwKGFicmV2aWF0dXJhKSUyMC8lMjBhYmFucyUyMGRlJTIwQ3Jpc3QlMjAoc2lnbGEpJm51bWVyb1Jlc3VsdGF0PTEmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICogRGVzcHJlc3QgZGUgQ3Jpc3Q6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWRlc3ByJUU5cytkZStjcmlzdCZhY3Rpb249UHJpbmNpcGFsJm1ldGhvZD1kZXRhbGxfY29tcGxldGEmbnVtUGFnaW5hPTEmaWRIaXQ9Njg3OSZkYXRhYmFzZT1GSVRYRVNfUFVCJnRpcHVzRm9udD1GaXR4ZXMlMjBkZSUyMGwlMjdPcHRpbW90JmlkRm9udD02ODc5JnRpdG9sPWRlc3ByJUU5cyUyMGRlJTIwQ3Jpc3QlMjAoc2lnbGEpJTIwLyUyMGRlc3ByJUU5cyUyMGRlJTIwQ3Jpc3QlMjAoYWJyZXZpYXR1cmEpJm51bWVyb1Jlc3VsdGF0PTEmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnYUMnLCAnZEMnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnYS4gZGUgQy4nLCAnZC4gZGUgQy4nXSxcbiAgd2lkZTogWydhYmFucyBkZSBDcmlzdCcsICdkZXNwcsOpcyBkZSBDcmlzdCddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1QxJywgJ1QyJywgJ1QzJywgJ1Q0J10sXG4gIHdpZGU6IFsnMXIgdHJpbWVzdHJlJywgJzJuIHRyaW1lc3RyZScsICczciB0cmltZXN0cmUnLCAnNHQgdHJpbWVzdHJlJ11cbn07XG5cbi8qKlxuICogRGlucyBkJ3VuIHRleHQgY29udsOpIGZlciBzZXJ2aXIgbGEgZm9ybWEgc2VuY2VyYSBkZWxzIG1lc29zLCBqYSBxdWUgc2VtcHJlIMOpcyBtw6lzIGNsYXIgZWwgbW90IHNlbmNlciBxdWUgbCdhYnJldmlhdHVyYSwgZW5jYXJhIHF1ZSBhcXVlc3RhIHNpZ3VpIGZvcsOnYSBjb25lZ3VkYS5cbiAqIENhbCByZXNlcnZhciwgZG9uY3MsIGxlcyBhYnJldmlhdHVyZXMgcGVyIGEgbGVzIGxsaXN0ZXMgbyBjbGFzc2lmaWNhY2lvbnMsIGVscyBncsOgZmljcywgbGVzIHRhdWxlcyBvIHF1YWRyZXMgZXN0YWTDrXN0aWNzLCBlbHMgdGV4dG9zIHB1YmxpY2l0YXJpcywgZXRjLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXQvbGxjL0FwcEphdmEvaW5kZXguaHRtbD9pbnB1dF9jZXJjYXI9YWJyZXZpYWNpb25zK21lc29zJmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD04NDAyJmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTg0MDImdGl0b2w9YWJyZXZpYXR1cmVzJTIwZGVscyUyMG1lc29zJTIwZGUlMjBsJTI3YW55Jm51bWVyb1Jlc3VsdGF0PTUmY2xpY2tMaW5rPWRldGFsbCZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUcnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnRFMnXSxcbiAgLyoqXG4gICAqIExlcyBhYnJldmlhdHVyZXMgZGVscyBtZXNvcyBkZSBsJ2FueSBlcyBmb3JtZW4gc2VndWludCB1bmEgZGUgbGVzIG5vcm1lcyBnZW5lcmFscyBkZSBmb3JtYWNpw7MgZCdhYnJldmlhdHVyZXMuXG4gICAqIFMnZXNjcml1IGxhIHByaW1lcmEgc8OtbMK3bGFiYSBpIGxlcyBjb25zb25hbnRzIGRlIGxhIHPDrWzCt2xhYmEgc2Vnw7xlbnQgYW50ZXJpb3JzIGEgbGEgcHJpbWVyYSB2b2NhbC5cbiAgICogRWxzIG1lc29zIGRlIG1hcsOnLCBtYWlnIGkganVueSBubyBzJ2FicmV1Z2VuIHBlcnF1w6ggc8OzbiBwYXJhdWxlcyBkJ3VuYSBzb2xhIHPDrWzCt2xhYmEuXG4gICAqL1xuICBhYmJyZXZpYXRlZDogWydnZW4uJywgJ2ZlYnIuJywgJ21hcsOnJywgJ2Fici4nLCAnbWFpZycsICdqdW55JywgJ2p1bC4nLCAnYWcuJywgJ3NldC4nLCAnb2N0LicsICdub3YuJywgJ2Rlcy4nXSxcbiAgd2lkZTogWydnZW5lcicsICdmZWJyZXInLCAnbWFyw6cnLCAnYWJyaWwnLCAnbWFpZycsICdqdW55JywgJ2p1bGlvbCcsICdhZ29zdCcsICdzZXRlbWJyZScsICdvY3R1YnJlJywgJ25vdmVtYnJlJywgJ2Rlc2VtYnJlJ11cbn07XG5cbi8qKlxuICogTGVzIGFicmV2aWF0dXJlcyBkZWxzIGRpZXMgZGUgbGEgc2V0bWFuYSBjb21lbmNlbiB0b3RlcyBhbWIgbGEgbGxldHJhIGQuXG4gKiBUb3Qgc2VndWl0IHBvcnRlbiBsYSBjb25zb25hbnQgc2Vnw7xlbnQgYSBsYSBpLCBleGNlcHRlIGVuIGVsIGNhcyBkZSBkaW1hcnRzLCBkaW1lY3JlcyBpIGRpdW1lbmdlLCBlbiBxdcOoIGFxdWVzdGEgY29uc29uYW50IMOpcyBsYSBtIGksIHBlciB0YW50LCBoaSBwb2RyaWEgaGF2ZXIgY29uZnVzacOzLlxuICogUGVyIGV2aXRhci1obywgcydoYSBzdWJzdGl0dcOvdCBsYSBtIHBlciB1bmEgdCAoZW4gZWwgY2FzIGRlIGRpbWFydHMpLCB1bmEgYyAoZW4gZWwgY2FzIGRlIGRpbWVjcmVzKSBpIHVuYSBnIChlbiBlbCBjYXMgZGUgZGl1bWVuZ2UpLCByZXNwZWN0aXZhbWVudC5cbiAqXG4gKiBTZWd1aW50IGxhIG5vcm1hIGdlbmVyYWwgZCfDunMgZGUgbGVzIGFicmV2aWF0dXJlcywgbGVzIGRlbHMgZGllcyBkZSBsYSBzZXRtYW5hIHNlbXByZSBwb3J0ZW4gcHVudCBmaW5hbC5cbiAqIElndWFsbWVudCwgdmFuIGFtYiBsYSBwcmltZXJhIGxsZXRyYSBlbiBtYWrDunNjdWxhIHF1YW4gbGEgcGFyYXVsYSBzZW5jZXJhIHRhbWLDqSBoaSBhbmlyaWEuXG4gKiBFbiBjYW52aSwgdmFuIGFtYiBsYSBwcmltZXJhIGxsZXRyYSBlbiBtaW7DunNjdWxhIHF1YW4gbGEgaW5pY2lhbCBkZSBsYSBwYXJhdWxhIHNlbmNlcmEgdGFtYsOpIGhpIGFuaXJpYS5cbiAqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/aW5wdXRfY2VyY2FyPWFicmV2aWF0dXJlcytkaWVzJmFjdGlvbj1QcmluY2lwYWwmbWV0aG9kPWRldGFsbF9jb21wbGV0YSZudW1QYWdpbmE9MSZpZEhpdD04Mzg3JmRhdGFiYXNlPUZJVFhFU19QVUImdGlwdXNGb250PUZpdHhlcyUyMGRlJTIwbCUyN09wdGltb3QmaWRGb250PTgzODcmdGl0b2w9YWJyZXZpYXR1cmVzJTIwZGVscyUyMGRpZXMlMjBkZSUyMGxhJTIwc2V0bWFuYSZudW1lcm9SZXN1bHRhdD0xJmNsaWNrTGluaz1kZXRhbGwmdGlwdXNDZXJjYT1jZXJjYS50b3RcbiAqL1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ2RnLicsICdkbC4nLCAnZHQuJywgJ2RtLicsICdkai4nLCAnZHYuJywgJ2RzLiddLFxuICBzaG9ydDogWydkZy4nLCAnZGwuJywgJ2R0LicsICdkbS4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgYWJicmV2aWF0ZWQ6IFsnZGcuJywgJ2RsLicsICdkdC4nLCAnZG0uJywgJ2RqLicsICdkdi4nLCAnZHMuJ10sXG4gIHdpZGU6IFsnZGl1bWVuZ2UnLCAnZGlsbHVucycsICdkaW1hcnRzJywgJ2RpbWVjcmVzJywgJ2Rpam91cycsICdkaXZlbmRyZXMnLCAnZGlzc2FidGUnXVxufTtcblxuLyoqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vYXBsaWNhY2lvbnMubGxlbmd1YS5nZW5jYXQuY2F0L2xsYy9BcHBKYXZhL2luZGV4Lmh0bWw/YWN0aW9uPVByaW5jaXBhbCZtZXRob2Q9ZGV0YWxsJmlucHV0X2NlcmNhcj1wYXJ0cytkZWwrZGlhJm51bVBhZ2luYT0xJmRhdGFiYXNlPUZJVFhFU19QVUImaWRGb250PTEyODAxJmlkSGl0PTEyODAxJnRpcHVzRm9udD1GaXR4ZXMrZGUrbCUyN09wdGltb3QmbnVtZXJvUmVzdWx0YXQ9MSZkYXRhYmFzZXNfYXZhbnNhZGE9JmNhdGVnb3JpZXNfYXZhbnNhZGE9JmNsaWNrTGluaz1kZXRhbGwmdGl0b2w9Tm9tK2RlK2xlcytwYXJ0cytkZWwrZGlhJnRlbWF0aWNhPSZ0aXB1c0NlcmNhPWNlcmNhLmZpdHhlc1xuICovXG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2FtJyxcbiAgICBwbTogJ3BtJyxcbiAgICBtaWRuaWdodDogJ21pdGphbml0JyxcbiAgICBub29uOiAnbWlnZGlhJyxcbiAgICBtb3JuaW5nOiAnbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ3RhcmRhJyxcbiAgICBldmVuaW5nOiAndmVzcHJlJyxcbiAgICBuaWdodDogJ25pdCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaXRqYW5pdCcsXG4gICAgbm9vbjogJ21pZ2RpYScsXG4gICAgbW9ybmluZzogJ21hdMOtJyxcbiAgICBhZnRlcm5vb246ICd0YXJkYScsXG4gICAgZXZlbmluZzogJ3Zlc3ByZScsXG4gICAgbmlnaHQ6ICduaXQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FudGUgbWVyaWRpZW0nLFxuICAgIHBtOiAncG9zdCBtZXJpZGllbScsXG4gICAgbWlkbmlnaHQ6ICdtaXRqYW5pdCcsXG4gICAgbm9vbjogJ21pZ2RpYScsXG4gICAgbW9ybmluZzogJ21hdMOtJyxcbiAgICBhZnRlcm5vb246ICd0YXJkYScsXG4gICAgZXZlbmluZzogJ3Zlc3ByZScsXG4gICAgbmlnaHQ6ICduaXQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhbScsXG4gICAgcG06ICdwbScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2FudGUgbWVyaWRpZW0nLFxuICAgIHBtOiAncG9zdCBtZXJpZGllbScsXG4gICAgbWlkbmlnaHQ6ICdkZSBsYSBtaXRqYW5pdCcsXG4gICAgbm9vbjogJ2RlbCBtaWdkaWEnLFxuICAgIG1vcm5pbmc6ICdkZWwgbWF0w60nLFxuICAgIGFmdGVybm9vbjogJ2RlIGxhIHRhcmRhJyxcbiAgICBldmVuaW5nOiAnZGVsIHZlc3ByZScsXG4gICAgbmlnaHQ6ICdkZSBsYSBuaXQnXG4gIH1cbn07XG5cbi8qKlxuICogUXVhbiB2YW4gZW4gc2luZ3VsYXIsIGVscyBub21icmVzIG9yZGluYWxzIGVzIHJlcHJlc2VudGVuLCBlbiBmb3JtYSBk4oCZYWJyZXZpYXR1cmEsIGFtYiBsYSB4aWZyYSBzZWd1aWRhIGRlIGzigJnDumx0aW1hIGxsZXRyYSBkZWwgbW90IGRlc3BsZWdhdC5cbiAqIMOJcyBvcHRhdGl1IHBvc2FyIHB1bnQgZGVzcHLDqXMgZGUgbGEgbGxldHJhLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cHM6Ly9hcGxpY2FjaW9ucy5sbGVuZ3VhLmdlbmNhdC5jYXQvbGxjL0FwcEphdmEvcGRmL2FicmV2aWEucGRmI3BhZ2U9MThcbiAqL1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3InO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ24nO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3InO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3QnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ8OoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSjDqHxyfG58cnx0KT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGFDfGRDKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYS4gZGUgQy58ZC4gZGUgQy4pL2ksXG4gIHdpZGU6IC9eKGFiYW5zIGRlIENyaXN0fGRlc3ByW2XDqV1zIGRlIENyaXN0KS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eYUMvaSwgL15kQy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXihhLiBkZSBDLikvaSwgL14oZC4gZGUgQy4pL2ldLFxuICB3aWRlOiBbL14oYWJhbnMgZGUgQ3Jpc3QpL2ksIC9eKGRlc3ByW2XDqV1zIGRlIENyaXN0KS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15UWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKMOofHJ8bnxyfHQpPyB0cmltZXN0cmUvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKEdOfEZCfE3Dh3xBQnxNR3xKTnxKTHxBR3xTVHxPQ3xOVnxEUykvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGdlbi58ZmVici58bWFyw6d8YWJyLnxtYWlnfGp1bnl8anVsLnxhZy58c2V0LnxvY3QufG5vdi58ZGVzLikvaSxcbiAgd2lkZTogL14oZ2VuZXJ8ZmVicmVyfG1hcsOnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZSkvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eR04vaSwgL15GQi9pLCAvXk3Dhy9pLCAvXkFCL2ksIC9eTUcvaSwgL15KTi9pLCAvXkpML2ksIC9eQUcvaSwgL15TVC9pLCAvXk9DL2ksIC9eTlYvaSwgL15EUy9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXmdlbi4vaSwgL15mZWJyLi9pLCAvXm1hcsOnL2ksIC9eYWJyLi9pLCAvXm1haWcvaSwgL15qdW55L2ksIC9eanVsLi9pLCAvXmFnLi9pLCAvXnNldC4vaSwgL15vY3QuL2ksIC9ebm92Li9pLCAvXmRlcy4vaV0sXG4gIHdpZGU6IFsvXmdlbmVyL2ksIC9eZmVicmVyL2ksIC9ebWFyw6cvaSwgL15hYnJpbC9pLCAvXm1haWcvaSwgL15qdW55L2ksIC9eanVsaW9sL2ksIC9eYWdvc3QvaSwgL15zZXRlbWJyZS9pLCAvXm9jdHVicmUvaSwgL15ub3ZlbWJyZS9pLCAvXmRlc2VtYnJlL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oZGdcXC58ZGxcXC58ZHRcXC58ZG1cXC58ZGpcXC58ZHZcXC58ZHNcXC4pL2ksXG4gIHNob3J0OiAvXihkZ1xcLnxkbFxcLnxkdFxcLnxkbVxcLnxkalxcLnxkdlxcLnxkc1xcLikvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGRnXFwufGRsXFwufGR0XFwufGRtXFwufGRqXFwufGR2XFwufGRzXFwuKS9pLFxuICB3aWRlOiAvXihkaXVtZW5nZXxkaWxsdW5zfGRpbWFydHN8ZGltZWNyZXN8ZGlqb3VzfGRpdmVuZHJlc3xkaXNzYWJ0ZSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmRnLi9pLCAvXmRsLi9pLCAvXmR0Li9pLCAvXmRtLi9pLCAvXmRqLi9pLCAvXmR2Li9pLCAvXmRzLi9pXSxcbiAgYWJicmV2aWF0ZWQ6IFsvXmRnLi9pLCAvXmRsLi9pLCAvXmR0Li9pLCAvXmRtLi9pLCAvXmRqLi9pLCAvXmR2Li9pLCAvXmRzLi9pXSxcbiAgd2lkZTogWy9eZGl1bWVuZ2UvaSwgL15kaWxsdW5zL2ksIC9eZGltYXJ0cy9pLCAvXmRpbWVjcmVzL2ksIC9eZGlqb3VzL2ksIC9eZGl2ZW5kcmVzL2ksIC9eZGlzc3NhYnRlL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1ufG1kfChkZWx8ZGUgbGEpIChtYXTDrXx0YXJkYXx2ZXNwcmV8bml0KSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pdGphbml0fG1pZ2RpYXwoZGVsfGRlIGxhKSAobWF0w618dGFyZGF8dmVzcHJlfG5pdCkpL2ksXG4gIHdpZGU6IC9eKGFudGUgbWVyaWRpZW18cG9zdCBtZXJpZGllbXxtaXRqYW5pdHxtaWdkaWF8KGRlbHxkZSBsYSkgKG1hdMOtfHRhcmRhfHZlc3ByZXxuaXQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWl0amFuaXQvaSxcbiAgICBub29uOiAvXm1pZ2RpYS9pLFxuICAgIG1vcm5pbmc6IC9tYXTDrS9pLFxuICAgIGFmdGVybm9vbjogL3RhcmRhL2ksXG4gICAgZXZlbmluZzogL3Zlc3ByZS9pLFxuICAgIG5pZ2h0OiAvbml0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IENhdGFsYW4gbG9jYWxlLlxuICogQGxhbmd1YWdlIENhdGFsYW5cbiAqIEBpc28tNjM5LTIgY2F0XG4gKiBAYXV0aG9yIEd1aWxsZXJtbyBHcmF1IFtAZ3VpZ3JwYV17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2d1aWdycGF9XG4gKiBAYXV0aG9yIEFsZXggVml6Y2Fpbm8gW0Bhdml6Y2Fpbm9de0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hdml6Y2Fpbm99XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdjYScsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMSAvKiBNb25kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7XG5cbi8vIHRocm93IG5ldyBFcnJvcignY2EgbG9jYWxlIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZS4gUGxlYXNlIGNoZWNrIHRoZSBwcm9ncmVzcyBvZiBjb252ZXJ0aW5nIHRoaXMgbG9jYWxlIHRvIHYyLjAuMCBpbiB0aGlzIGlzc3VlIG9uIEdpdGh1YjogVEJBJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=