System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCache)
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);

    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleSheet: () => (/* binding */ StyleSheet)
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weakMemoize)
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};




/***/ }),

/***/ "./node_modules/cssjanus/src/cssjanus.js":
/*!***********************************************!*\
  !*** ./node_modules/cssjanus/src/cssjanus.js ***!
  \***********************************************/
/***/ ((module, exports) => {

/*!
 * CSSJanus. https://github.com/cssjanus/cssjanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssjanus;

/**
 * Create a tokenizer object.
 *
 * This utility class is used by CSSJanus to protect strings by replacing them temporarily with
 * tokens and later transforming them back.
 *
 * @class
 * @constructor
 * @param {RegExp} regex Regular expression whose matches to replace by a token
 * @param {string} token Placeholder text
 */
function Tokenizer( regex, token ) {

	var matches = [],
		index = 0;

	/**
	 * Add a match.
	 *
	 * @private
	 * @param {string} match Matched string
	 * @return {string} Token to leave in the matched string's place
	 */
	function tokenizeCallback( match ) {
		matches.push( match );
		return token;
	}

	/**
	 * Get a match.
	 *
	 * @private
	 * @return {string} Original matched string to restore
	 */
	function detokenizeCallback() {
		return matches[ index++ ];
	}

	return {
		/**
		 * Replace matching strings with tokens.
		 *
		 * @param {string} str String to tokenize
		 * @return {string} Tokenized string
		 */
		tokenize: function ( str ) {
			return str.replace( regex, tokenizeCallback );
		},

		/**
		 * Restores tokens to their original values.
		 *
		 * @param {string} str String previously run through tokenize()
		 * @return {string} Original string
		 */
		detokenize: function ( str ) {
			return str.replace( new RegExp( '(' + token + ')', 'g' ), detokenizeCallback );
		}
	};
}

/**
 * Create a CSSJanus object.
 *
 * CSSJanus transforms CSS rules with horizontal relevance so that a left-to-right stylesheet can
 * become a right-to-left stylesheet automatically. Processing can be bypassed for an entire rule
 * or a single property by adding a / * @noflip * / comment above the rule or property.
 *
 * @class
 * @constructor
 */
function CSSJanus() {

	var
		// Tokens
		temporaryToken = '`TMP`',
		noFlipSingleToken = '`NOFLIP_SINGLE`',
		noFlipClassToken = '`NOFLIP_CLASS`',
		commentToken = '`COMMENT`',
		// Patterns
		nonAsciiPattern = '[^\\u0020-\\u007e]',
		unicodePattern = '(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)',
		numPattern = '(?:[0-9]*\\.[0-9]+|[0-9]+)',
		unitPattern = '(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)',
		directionPattern = 'direction\\s*:\\s*',
		urlSpecialCharsPattern = '[!#$%&*-~]',
		validAfterUriCharsPattern = '[\'"]?\\s*',
		nonLetterPattern = '(^|[^a-zA-Z])',
		charsWithinSelectorPattern = '[^\\}]*?',
		noFlipPattern = '\\/\\*\\!?\\s*@noflip\\s*\\*\\/',
		commentPattern = '\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/',
		escapePattern = '(?:' + unicodePattern + '|\\\\[^\\r\\n\\f0-9a-f])',
		nmstartPattern = '(?:[_a-z]|' + nonAsciiPattern + '|' + escapePattern + ')',
		nmcharPattern = '(?:[_a-z0-9-]|' + nonAsciiPattern + '|' + escapePattern + ')',
		identPattern = '-?' + nmstartPattern + nmcharPattern + '*',
		quantPattern = numPattern + '(?:\\s*' + unitPattern + '|' + identPattern + ')?',
		signedQuantPattern = '((?:-?' + quantPattern + ')|(?:inherit|auto))',
		fourNotationQuantPropsPattern = '((?:margin|padding|border-width)\\s*:\\s*)',
		fourNotationColorPropsPattern = '((?:-color|border-style)\\s*:\\s*)',
		colorPattern = '(#?' + nmcharPattern + '+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))',
		// The use of a lazy match ("*?") may cause a backtrack limit to be exceeded before finding
		// the intended match. This affects 'urlCharsPattern' and 'lookAheadNotOpenBracePattern'.
		// We have not yet found this problem on Node.js, but we have on PHP 7, where it was
		// mitigated by using a possessive quantifier ("*+"), which are not supported in JS.
		// See <https://github.com/cssjanus/php-cssjanus/issues/14> and <https://phabricator.wikimedia.org/T215746#4944830>.
		urlCharsPattern = '(?:' + urlSpecialCharsPattern + '|' + nonAsciiPattern + '|' + escapePattern + ')*?',
		lookAheadNotLetterPattern = '(?![a-zA-Z])',
		lookAheadNotOpenBracePattern = '(?!(' + nmcharPattern + '|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|\'[^\']*\'|"[^"]*"|' + commentToken + ')*?{)',
		lookAheadNotClosingParenPattern = '(?!' + urlCharsPattern + validAfterUriCharsPattern + '\\))',
		lookAheadForClosingParenPattern = '(?=' + urlCharsPattern + validAfterUriCharsPattern + '\\))',
		suffixPattern = '(\\s*(?:!important\\s*)?[;}])',
		// Regular expressions
		temporaryTokenRegExp = /`TMP`/g,
		commentRegExp = new RegExp( commentPattern, 'gi' ),
		noFlipSingleRegExp = new RegExp( '(' + noFlipPattern + lookAheadNotOpenBracePattern + '[^;}]+;?)', 'gi' ),
		noFlipClassRegExp = new RegExp( '(' + noFlipPattern + charsWithinSelectorPattern + '})', 'gi' ),
		directionLtrRegExp = new RegExp( '(' + directionPattern + ')ltr', 'gi' ),
		directionRtlRegExp = new RegExp( '(' + directionPattern + ')rtl', 'gi' ),
		leftRegExp = new RegExp( nonLetterPattern + '(left)' + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, 'gi' ),
		rightRegExp = new RegExp( nonLetterPattern + '(right)' + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, 'gi' ),
		leftInUrlRegExp = new RegExp( nonLetterPattern + '(left)' + lookAheadForClosingParenPattern, 'gi' ),
		rightInUrlRegExp = new RegExp( nonLetterPattern + '(right)' + lookAheadForClosingParenPattern, 'gi' ),
		ltrInUrlRegExp = new RegExp( nonLetterPattern + '(ltr)' + lookAheadForClosingParenPattern, 'gi' ),
		rtlInUrlRegExp = new RegExp( nonLetterPattern + '(rtl)' + lookAheadForClosingParenPattern, 'gi' ),
		cursorEastRegExp = new RegExp( nonLetterPattern + '([ns]?)e-resize', 'gi' ),
		cursorWestRegExp = new RegExp( nonLetterPattern + '([ns]?)w-resize', 'gi' ),
		fourNotationQuantRegExp = new RegExp( fourNotationQuantPropsPattern + signedQuantPattern + '(\\s+)' + signedQuantPattern + '(\\s+)' + signedQuantPattern + '(\\s+)' + signedQuantPattern + suffixPattern, 'gi' ),
		fourNotationColorRegExp = new RegExp( fourNotationColorPropsPattern + colorPattern + '(\\s+)' + colorPattern + '(\\s+)' + colorPattern + '(\\s+)' + colorPattern + suffixPattern, 'gi' ),
		bgHorizontalPercentageRegExp = new RegExp( '(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(' + quantPattern + ')', 'gi' ),
		bgHorizontalPercentageXRegExp = new RegExp( '(background-position-x\\s*:\\s*)(-?' + numPattern + '%)', 'gi' ),
		// border-radius: <length or percentage>{1,4} [optional: / <length or percentage>{1,4} ]
		borderRadiusRegExp = new RegExp( '(border-radius\\s*:\\s*)' + signedQuantPattern + '(?:(?:\\s+' + signedQuantPattern + ')(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?)?' +
			'(?:(?:(?:\\s*\\/\\s*)' + signedQuantPattern + ')(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?(?:\\s+' + signedQuantPattern + ')?)?' + suffixPattern, 'gi' ),
		boxShadowRegExp = new RegExp( '(box-shadow\\s*:\\s*(?:inset\\s*)?)' + signedQuantPattern, 'gi' ),
		textShadow1RegExp = new RegExp( '(text-shadow\\s*:\\s*)' + signedQuantPattern + '(\\s*)' + colorPattern, 'gi' ),
		textShadow2RegExp = new RegExp( '(text-shadow\\s*:\\s*)' + colorPattern + '(\\s*)' + signedQuantPattern, 'gi' ),
		textShadow3RegExp = new RegExp( '(text-shadow\\s*:\\s*)' + signedQuantPattern, 'gi' ),
		translateXRegExp = new RegExp( '(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)' + signedQuantPattern + '(\\s*\\))', 'gi' ),
		translateRegExp = new RegExp( '(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)' + signedQuantPattern + '((?:\\s*,\\s*' + signedQuantPattern + '){0,2}\\s*\\))', 'gi' );

	/**
	 * Invert the horizontal value of a background position property.
	 *
	 * @private
	 * @param {string} match Matched property
	 * @param {string} pre Text before value
	 * @param {string} value Horizontal value
	 * @return {string} Inverted property
	 */
	function calculateNewBackgroundPosition( match, pre, value ) {
		var idx, len;
		if ( value.slice( -1 ) === '%' ) {
			idx = value.indexOf( '.' );
			if ( idx !== -1 ) {
				// Two off, one for the "%" at the end, one for the dot itself
				len = value.length - idx - 2;
				value = 100 - parseFloat( value );
				value = value.toFixed( len ) + '%';
			} else {
				value = 100 - parseFloat( value ) + '%';
			}
		}
		return pre + value;
	}

	/**
	 * Invert a set of border radius values.
	 *
	 * @private
	 * @param {Array} values Matched values
	 * @return {string} Inverted values
	 */
	function flipBorderRadiusValues( values ) {
		switch ( values.length ) {
			case 4:
				values = [ values[ 1 ], values[ 0 ], values[ 3 ], values[ 2 ] ];
				break;
			case 3:
				values = [ values[ 1 ], values[ 0 ], values[ 1 ], values[ 2 ] ];
				break;
			case 2:
				values = [ values[ 1 ], values[ 0 ] ];
				break;
			case 1:
				values = [ values[ 0 ] ];
				break;
		}

		return values.join( ' ' );
	}

	/**
	 * Invert a set of border radius values.
	 *
	 * @private
	 * @param {string} match Matched property
	 * @param {string} pre Text before value
	 * @param {string} [firstGroup1]
	 * @param {string} [firstGroup2]
	 * @param {string} [firstGroup3]
	 * @param {string} [firstGroup4]
	 * @param {string} [secondGroup1]
	 * @param {string} [secondGroup2]
	 * @param {string} [secondGroup3]
	 * @param {string} [secondGroup4]
	 * @param {string} [post] Text after value
	 * @return {string} Inverted property
	 */
	function calculateNewBorderRadius( match, pre ) {
		var values,
			args = [].slice.call( arguments ),
			firstGroup = args.slice( 2, 6 ).filter( function ( val ) { return val; } ),
			secondGroup = args.slice( 6, 10 ).filter( function ( val ) { return val; } ),
			post = args[ 10 ] || '';

		if ( secondGroup.length ) {
			values = flipBorderRadiusValues( firstGroup ) + ' / ' + flipBorderRadiusValues( secondGroup );
		} else {
			values = flipBorderRadiusValues( firstGroup );
		}

		return pre + values + post;
	}

	/**
	 * Flip the sign of a CSS value, possibly with a unit.
	 *
	 * We can't just negate the value with unary minus due to the units.
	 *
	 * @private
	 * @param {string} value
	 * @return {string}
	 */
	function flipSign( value ) {
		if ( parseFloat( value ) === 0 ) {
			// Don't mangle zeroes
			return value;
		}

		if ( value[ 0 ] === '-' ) {
			return value.slice( 1 );
		}

		return '-' + value;
	}

	/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} offset
	 * @return {string}
	 */
	function calculateNewShadow( match, property, offset ) {
		return property + flipSign( offset );
	}

	/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} prefix
	 * @param {string} offset
	 * @param {string} suffix
	 * @return {string}
	 */
	function calculateNewTranslate( match, property, prefix, offset, suffix ) {
		return property + prefix + flipSign( offset ) + suffix;
	}

	/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} color
	 * @param {string} space
	 * @param {string} offset
	 * @return {string}
	 */
	function calculateNewFourTextShadow( match, property, color, space, offset ) {
		return property + color + space + flipSign( offset );
	}

	return {
		/**
		 * Transform a left-to-right stylesheet to right-to-left.
		 *
		 * @param {string} css Stylesheet to transform
		 * @param {Object} options Options
		 * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
		 * (e.g. 'ltr', 'rtl')
		 * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
		 * (e.g. 'left', 'right')
		 * @return {string} Transformed stylesheet
		 */
		'transform': function ( css, options ) { // eslint-disable-line quote-props
			// Use single quotes in this object literal key for closure compiler.
			// Tokenizers
			var noFlipSingleTokenizer = new Tokenizer( noFlipSingleRegExp, noFlipSingleToken ),
				noFlipClassTokenizer = new Tokenizer( noFlipClassRegExp, noFlipClassToken ),
				commentTokenizer = new Tokenizer( commentRegExp, commentToken );

			// Tokenize
			css = commentTokenizer.tokenize(
				noFlipClassTokenizer.tokenize(
					noFlipSingleTokenizer.tokenize(
						// We wrap tokens in ` , not ~ like the original implementation does.
						// This was done because ` is not a legal character in CSS and can only
						// occur in URLs, where we escape it to %60 before inserting our tokens.
						css.replace( '`', '%60' )
					)
				)
			);

			// Transform URLs
			if ( options.transformDirInUrl ) {
				// Replace 'ltr' with 'rtl' and vice versa in background URLs
				css = css
					.replace( ltrInUrlRegExp, '$1' + temporaryToken )
					.replace( rtlInUrlRegExp, '$1ltr' )
					.replace( temporaryTokenRegExp, 'rtl' );
			}
			if ( options.transformEdgeInUrl ) {
				// Replace 'left' with 'right' and vice versa in background URLs
				css = css
					.replace( leftInUrlRegExp, '$1' + temporaryToken )
					.replace( rightInUrlRegExp, '$1left' )
					.replace( temporaryTokenRegExp, 'right' );
			}

			// Transform rules
			css = css
				// Replace direction: ltr; with direction: rtl; and vice versa.
				.replace( directionLtrRegExp, '$1' + temporaryToken )
				.replace( directionRtlRegExp, '$1ltr' )
				.replace( temporaryTokenRegExp, 'rtl' )
				// Flip rules like left: , padding-right: , etc.
				.replace( leftRegExp, '$1' + temporaryToken )
				.replace( rightRegExp, '$1left' )
				.replace( temporaryTokenRegExp, 'right' )
				// Flip East and West in rules like cursor: nw-resize;
				.replace( cursorEastRegExp, '$1$2' + temporaryToken )
				.replace( cursorWestRegExp, '$1$2e-resize' )
				.replace( temporaryTokenRegExp, 'w-resize' )
				// Border radius
				.replace( borderRadiusRegExp, calculateNewBorderRadius )
				// Shadows
				.replace( boxShadowRegExp, calculateNewShadow )
				.replace( textShadow1RegExp, calculateNewFourTextShadow )
				.replace( textShadow2RegExp, calculateNewFourTextShadow )
				.replace( textShadow3RegExp, calculateNewShadow )
				// Translate
				.replace( translateXRegExp, calculateNewTranslate )
				.replace( translateRegExp, calculateNewTranslate )
				// Swap the second and fourth parts in four-part notation rules
				// like padding: 1px 2px 3px 4px;
				.replace( fourNotationQuantRegExp, '$1$2$3$8$5$6$7$4$9' )
				.replace( fourNotationColorRegExp, '$1$2$3$8$5$6$7$4$9' )
				// Flip horizontal background percentages
				.replace( bgHorizontalPercentageRegExp, calculateNewBackgroundPosition )
				.replace( bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition );

			// Detokenize
			css = noFlipSingleTokenizer.detokenize(
				noFlipClassTokenizer.detokenize(
					commentTokenizer.detokenize( css )
				)
			);

			return css;
		}
	};
}

/* Initialization */

cssjanus = new CSSJanus();

/* Exports */

if (  true && module.exports ) {
	/**
	 * Transform a left-to-right stylesheet to right-to-left.
	 *
	 * This function is a static wrapper around the transform method of an instance of CSSJanus.
	 *
	 * @param {string} css Stylesheet to transform
	 * @param {Object|boolean} [options] Options object, or transformDirInUrl option (back-compat)
	 * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
	 * (e.g. 'ltr', 'rtl')
	 * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
	 * (e.g. 'left', 'right')
	 * @param {boolean} [transformEdgeInUrl] Back-compat parameter
	 * @return {string} Transformed stylesheet
	 */
	exports.transform = function ( css, options, transformEdgeInUrl ) {
		var norm;
		if ( typeof options === 'object' ) {
			norm = options;
		} else {
			norm = {};
			if ( typeof options === 'boolean' ) {
				norm.transformDirInUrl = options;
			}
			if ( typeof transformEdgeInUrl === 'boolean' ) {
				norm.transformEdgeInUrl = transformEdgeInUrl;
			}
		}
		return cssjanus.transform( css, norm );
	};
} else if ( typeof window !== 'undefined' ) {
	/* global window */
	// Allow cssjanus to be used in a browser.
	// eslint-disable-next-line dot-notation
	window[ 'cssjanus' ] = cssjanus;
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js":
/*!***********************************************************!*\
  !*** ./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cssjanus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cssjanus */ "./node_modules/cssjanus/src/cssjanus.js");
/* harmony import */ var cssjanus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cssjanus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");


function stringifyPreserveComments(element, index, children) {
    switch (element.type) {
        case stylis__WEBPACK_IMPORTED_MODULE_1__.IMPORT:
        case stylis__WEBPACK_IMPORTED_MODULE_1__.DECLARATION:
        case stylis__WEBPACK_IMPORTED_MODULE_1__.COMMENT:
            return (element.return = element.return || element.value);
        case stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET: {
            element.value = Array.isArray(element.props) ? element.props.join(',') : element.props;
            if (Array.isArray(element.children)) {
                element.children.forEach(function (x) {
                    if (x.type === stylis__WEBPACK_IMPORTED_MODULE_1__.COMMENT)
                        x.children = x.value;
                });
            }
        }
    }
    var serializedChildren = (0,stylis__WEBPACK_IMPORTED_MODULE_2__.serialize)(Array.prototype.concat(element.children), stringifyPreserveComments);
    return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.strlen)(serializedChildren) ? (element.return = element.value + '{' + serializedChildren + '}') : '';
}
function stylisRTLPlugin(element, index, children, callback) {
    if (element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES ||
        element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.SUPPORTS ||
        (element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET && (!element.parent || element.parent.type === stylis__WEBPACK_IMPORTED_MODULE_1__.MEDIA || element.parent.type === stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET))) {
        var stringified = cssjanus__WEBPACK_IMPORTED_MODULE_0___default().transform(stringifyPreserveComments(element, index, children));
        element.children = stringified ? (0,stylis__WEBPACK_IMPORTED_MODULE_4__.compile)(stringified)[0].children : [];
        element.return = '';
    }
}
// stable identifier that will not be dropped by minification unless the whole module
// is unused
Object.defineProperty(stylisRTLPlugin, 'name', { value: 'stylisRTLPlugin' });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylisRTLPlugin);
//# sourceMappingURL=stylis-rtl.js.map

/***/ }),

/***/ "./jimu-theme/lib/__emotion__/cache.ts":
/*!*********************************************!*\
  !*** ./jimu-theme/lib/__emotion__/cache.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmotionCache: () => (/* reexport safe */ _emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createEmotionRTLCache: () => (/* binding */ createEmotionRTLCache)
/* harmony export */ });
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis-plugin-rtl */ "./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");


function createEmotionRTLCache(isRTL = false) {
    const options = isRTL
        ? {
            stylisPlugins: [stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_0__["default"]],
            key: 'app-root-emotion-cache-rtl'
        }
        : { key: 'app-root-emotion-cache-ltr' };
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
}



/***/ }),

/***/ "./jimu-theme/lib/__emotion__/emotion.tsx":
/*!************************************************!*\
  !*** ./jimu-theme/lib/__emotion__/emotion.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* binding */ CacheProvider),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),
/* harmony export */   styled: () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

/**
 * Previously, `emotion` was directly exported from `jimu-core`.
 * In order to divide the modules more reasonably, chose to disprecated the emotion-related interfaces in `jimu-core` and export them from the `jimu-theme` module.
 * Only one `emotion` is allowed at runtime, so the emotion-related methods are first imported from `jimu-core` to this file, and then exported uniformly.
 */
/**
 * It can be useful to customize emotion’s options - i.e. to add custom Stylis plugins,
 * customize prefix of inserted class names, render style tags into specific element and more.
 */
const CacheProvider = jimu_core__WEBPACK_IMPORTED_MODULE_0__.CacheProvider;
/**
 * A react context holds the theme context.
 */
const ThemeContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ThemeContext;
/**
 * `styled` is a way to create React components that have styles attached to them.
 */
const styled = jimu_core__WEBPACK_IMPORTED_MODULE_0__.styled;
/**
 * Sometimes you might want to insert global css like resets or font faces.
 * You can use the Global component to do this.
 */
const Global = jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global;
/**
 * A React component that passes the theme object down the component tree via context.
 */
const ThemeProvider = (props) => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider, Object.assign({}, props));
};


/***/ }),

/***/ "./jimu-theme/lib/__emotion__/index.tsx":
/*!**********************************************!*\
  !*** ./jimu-theme/lib/__emotion__/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion__WEBPACK_IMPORTED_MODULE_0__.CacheProvider),
/* harmony export */   Global: () => (/* reexport safe */ _emotion__WEBPACK_IMPORTED_MODULE_0__.Global),
/* harmony export */   GlobalStyle: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion__WEBPACK_IMPORTED_MODULE_0__.ThemeContext),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _emotion__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),
/* harmony export */   createEmotionCache: () => (/* reexport safe */ _cache__WEBPACK_IMPORTED_MODULE_1__.createEmotionCache),
/* harmony export */   createEmotionRTLCache: () => (/* reexport safe */ _cache__WEBPACK_IMPORTED_MODULE_1__.createEmotionRTLCache),
/* harmony export */   styled: () => (/* reexport safe */ _emotion__WEBPACK_IMPORTED_MODULE_0__.styled)
/* harmony export */ });
/* harmony import */ var _emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emotion */ "./jimu-theme/lib/__emotion__/emotion.tsx");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ "./jimu-theme/lib/__emotion__/cache.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./jimu-theme/lib/__emotion__/type.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./jimu-theme/lib/__emotion__/styles.tsx");






/***/ }),

/***/ "./jimu-theme/lib/__emotion__/styles.tsx":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/__emotion__/styles.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyle: () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emotion */ "./jimu-theme/lib/__emotion__/emotion.tsx");


function GlobalStyle(props) {
    const { styles, theme } = props;
    const globalStyles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => typeof styles === 'function' ? styles(theme) : styles, [styles, theme]);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion__WEBPACK_IMPORTED_MODULE_1__.Global, { styles: globalStyles });
}


/***/ }),

/***/ "./jimu-theme/lib/__emotion__/type.ts":
/*!********************************************!*\
  !*** ./jimu-theme/lib/__emotion__/type.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-theme/lib/base/assets/fonts/index.tsx":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/base/assets/fonts/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFontFaces: () => (/* binding */ getFontFaces)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const getFontFaces = () => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    @import url('${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getFixedRootPath()}jimu-theme/base/assets/fonts/avenir/fonts.css');
  `;
};


/***/ }),

/***/ "./jimu-theme/lib/base/index.ts":
/*!**************************************!*\
  !*** ./jimu-theme/lib/base/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuillCoreStyle: () => (/* reexport safe */ _third_party__WEBPACK_IMPORTED_MODULE_0__.getQuillCoreStyle)
/* harmony export */ });
/* harmony import */ var _third_party__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-party */ "./jimu-theme/lib/base/third-party/index.ts");



/***/ }),

/***/ "./jimu-theme/lib/base/third-party/index.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/base/third-party/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuillCoreStyle: () => (/* reexport safe */ _quill__WEBPACK_IMPORTED_MODULE_0__.getQuillCoreStyle)
/* harmony export */ });
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quill */ "./jimu-theme/lib/base/third-party/quill.ts");



/***/ }),

/***/ "./jimu-theme/lib/base/third-party/quill.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/base/third-party/quill.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuillCoreStyle: () => (/* binding */ getQuillCoreStyle)
/* harmony export */ });
function getQuillCoreStyle(theme) {
    var _a, _b;
    return `
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    overflow-x: hidden;
    tab-size: 4;
    -moz-tab-size: 4;
    word-wrap: break-word;
    white-space: pre-wrap;
    & >* {
      cursor: text;
    }
    p,
    ol,
    ul,
    pre,
    blockquote,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    ol,
    ul {
      padding-left: 1.5em;
    }
    p {
      margin-bottom: 0;
    }
    ul>li,
    ol>li{
      list-style-type: none;
    }
    ul>li::before {
        content: '\u2022';
    }
    ul[data-checked=true],
    ul[data-checked=false] {
      pointer-events: none;
    }
    ul[data-checked=true]>li *,
    ul[data-checked=false]>li * {
      pointer-events: all;
    }
    ul[data-checked=true]>li::before,
    ul[data-checked=false]>li::before {
      color: #777;
      cursor: pointer;
      pointer-events: all;
    }
    ul[data-checked=true]>li::before {
      content: '\\2611';
    }
    ul[data-checked=false]>li::before {
      content: '\\2610';
    }
    li::before {
      display: inline-block;
      white-space: nowrap;
      width: 1.2em;
    }
    li:not(.ql-direction-rtl)::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }
    li.ql-direction-rtl::before {
      margin-left: 0.3em;
      margin-right: -1.5em;
    }
    ol li {
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
      counter-increment: list-0;
    }
    ol li:before {
      content: counter(list-0, decimal) '. ';
    }
    ol li.ql-indent-1 {
      counter-increment: list-1;
    }
    ol li.ql-indent-1:before {
      content: counter(list-1, lower-alpha) '. ';
    }
    ol li.ql-indent-1 {
      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    ol li.ql-indent-2 {
      counter-increment: list-2;
    }
    ol li.ql-indent-2:before {
      content: counter(list-2, lower-roman) '. ';
    }
    ol li.ql-indent-2 {
      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    ol li.ql-indent-3 {
      counter-increment: list-3;
    }
    ol li.ql-indent-3:before {
      content: counter(list-3, decimal) '. ';
    }
    ol li.ql-indent-3 {
      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    ol li.ql-indent-4 {
      counter-increment: list-4;
    }
    ol li.ql-indent-4:before {
      content: counter(list-4, lower-alpha) '. ';
    }
    ol li.ql-indent-4 {
      counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    ol li.ql-indent-5 {
      counter-increment: list-5;
    }
    ol li.ql-indent-5:before {
      content: counter(list-5, lower-roman) '. ';
    }
    ol li.ql-indent-5 {
      counter-reset: list-6 list-7 list-8 list-9;
    }
    ol li.ql-indent-6 {
      counter-increment: list-6;
    }
    ol li.ql-indent-6:before {
      content: counter(list-6, decimal) '. ';
    }
    ol li.ql-indent-6 {
      counter-reset: list-7 list-8 list-9;
    }
    ol li.ql-indent-7 {
      counter-increment: list-7;
    }
    ol li.ql-indent-7:before {
      content: counter(list-7, lower-alpha) '. ';
    }
    ol li.ql-indent-7 {
      counter-reset: list-8 list-9;
    }
    ol li.ql-indent-8 {
      counter-increment: list-8;
    }
    ol li.ql-indent-8:before {
      content: counter(list-8, lower-roman) '. ';
    }
    ol li.ql-indent-8 {
      counter-reset: list-9;
    }
    ol li.ql-indent-9 {
      counter-increment: list-9;
    }
    ol li.ql-indent-9:before {
      content: counter(list-9, decimal) '. ';
    }
    .ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 3em;
    }
    li.ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 4.5em;
    }
    .ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 3em;
    }
    li.ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 4.5em;
    }
    .ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 6em;
    }
    li.ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 7.5em;
    }
    .ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 6em;
    }
    li.ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 7.5em;
    }
    .ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 9em;
    }
    li.ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 10.5em;
    }
    .ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 9em;
    }
    li.ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 10.5em;
    }
    .ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 12em;
    }
    li.ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 13.5em;
    }
    .ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 12em;
    }
    li.ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 13.5em;
    }
    .ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 15em;
    }
    li.ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 16.5em;
    }
    .ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 15em;
    }
    li.ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 16.5em;
    }
    .ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 18em;
    }
    li.ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 19.5em;
    }
    .ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 18em;
    }
    li.ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 19.5em;
    }
    .ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 21em;
    }
    li.ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 22.5em;
    }
    .ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 21em;
    }
    li.ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 22.5em;
    }
    .ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 24em;
    }
    li.ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 25.5em;
    }
    .ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 24em;
    }
    li.ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 25.5em;
    }
    .ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 27em;
    }
    li.ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 28.5em;
    }
    .ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 27em;
    }
    li.ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 28.5em;
    }
    img {
      max-width: 100%;
    }
    .ql-direction-rtl {
      direction: rtl;
      text-align: inherit;
    }
    .ql-align-center {
      text-align: center;
    }
    .ql-align-justify {
      text-align: justify;
    }
    .ql-align-right {
      text-align: right;
    }

    .ql-blank,
    &.ql-blank {
      &::before {
        opacity: 0.6;
        content: attr(data-placeholder);
        font-style: italic;
        left: .5rem;
        right: .5rem;
        pointer-events: none;
        position: absolute;
      }
    }
    /** should be over write by theme style */
    .ql-size-small {
      font-size: 0.75em;
    }
    .ql-size-large {
      font-size: 1.5em;
    }
    .ql-size-huge {
      font-size: 2.5em;
    }
    blockquote {
      border-left: 4px solid #ccc;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: 16px;
    }
    code {
      background-color: #f0f0f0;
      border-radius: 3px;
    }
    pre {
      white-space: pre-wrap;
    }
    code {
      font-size: 85%;
      padding: 2px 4px;
    }
    exp {
      cursor: pointer;
      user-select: auto;
      &:hover {
        outline: 1px solid white;
        background: #d8d8d8;
      }
    }
    a:not([href]) {
      color: ${(_b = (_a = theme === null || theme === void 0 ? void 0 : theme.link) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : '#076fe5'} !important;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    a {
      &.invalid {
        opacity: 0.5;
        background: red;
        outline: 1px solid white;
      }
    }
  `;
}


/***/ }),

/***/ "./jimu-theme/lib/classic/components/arcgis.ts":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/classic/components/arcgis.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArcGISVariables: () => (/* binding */ getArcGISVariables)
/* harmony export */ });
const getArcGISVariables = (theme, components) => {
    const borderRadiuses = theme.borderRadiuses;
    const colors = theme.colors;
    const body = theme.body;
    const border = theme.border;
    const inputBaseVariables = {
        bg: colors.white,
        color: colors.black,
        border: {
            color: colors.palette.light[400],
            width: border.width
        }
    };
    return {
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.20)',
        components: {
            button: {
                variants: {
                    default: {
                        default: {
                            color: colors.palette.dark[600],
                            bg: colors.palette.light[100]
                        },
                        hover: {
                            color: colors.primary,
                            bg: colors.palette.light[100]
                        },
                        active: {
                            color: colors.white,
                            bg: colors.primary
                        },
                        disabled: {
                            color: colors.palette.light[800],
                            bg: colors.palette.light[100]
                        }
                    },
                    secondary: components.button.variants.secondary,
                    tertiary: Object.assign(Object.assign({}, components.button.variants.tertiary), { hover: {
                            color: colors.primary,
                            bg: colors.palette.primary[400]
                        }, active: {
                            color: colors.white,
                            bg: colors.primary
                        } })
                }
            },
            input: Object.assign(Object.assign({}, inputBaseVariables), { placeHolderColor: colors.palette.light[800], focus: {
                    borderColor: colors.primary,
                    boxShadow: null
                } }),
            menu: {
                bg: colors.palette.light[100],
                border: {
                    color: colors.palette.light[400],
                    width: '1px'
                },
                borderRadius: borderRadiuses.default,
                item: {
                    default: {
                        color: colors.palette.dark[900],
                        bg: colors.palette.light[100],
                        border: {
                            width: 0
                        }
                    },
                    hover: {
                        bg: colors.palette.light[300]
                    },
                    active: {
                        bg: colors.palette.light[300]
                    }
                }
            },
            panel: {
                color: colors.palette.dark[600],
                bg: colors.palette.light[100]
            },
            table: {
                root: {
                    color: body.color
                }
            },
            updatingIndicator: {
                bg: colors.transparent,
                progress: colors.primary
            }
        },
        widgets: {
            layerlist: {
                root: {
                    bg: colors.palette.light[100],
                    color: colors.palette.dark[800]
                },
                item: {
                    default: {
                        bg: colors.palette.light[100],
                        border: {
                            color: colors.palette.light[500]
                        }
                    },
                    disabled: {
                        color: colors.palette.light[800]
                    }
                },
                actionsList: {
                    root: {
                        bg: colors.palette.light[200],
                        color: body.color
                    },
                    item: {
                        default: {
                            color: colors.palette.dark[600]
                        },
                        hover: {
                            color: colors.primary,
                            bg: colors.transparent
                        },
                        active: {
                            color: colors.palette.light[100],
                            bg: colors.primary
                        }
                    },
                    separator: {
                        color: colors.palette.light[300],
                        width: '2px'
                    }
                },
                icon: {
                    default: {
                        color: colors.palette.dark[600]
                    },
                    hover: {
                        color: colors.primary,
                        bg: colors.transparent
                    },
                    active: {
                        color: colors.palette.light[100],
                        bg: colors.primary
                    }
                }
            },
            legend: {
                variants: {
                    default: {
                        root: {
                            color: colors.palette.dark[800]
                        }
                    },
                    card: {
                        root: {
                            color: colors.palette.dark[800],
                            bg: colors.palette.light[100]
                        },
                        carousel: {
                            bg: colors.palette.light[300]
                        },
                        caption: {
                            bg: colors.palette.light[300]
                        }
                    }
                }
            },
            basemapGallery: {
                root: {
                    color: colors.palette.dark[800],
                    bg: colors.palette.light[100]
                },
                item: {
                    hover: {
                        bg: colors.palette.light[300],
                        border: {
                            color: colors.palette.light[300]
                        }
                    },
                    active: {
                        bg: colors.palette.primary[100],
                        border: {
                            color: colors.primary
                        }
                    },
                    focus: {
                        bg: colors.palette.light[300],
                        border: {
                            color: colors.palette.light[300]
                        }
                    }
                }
            },
            measure: {
                measurement: {
                    bg: colors.palette.light[200],
                    valueColor: colors.black,
                    disabledColor: colors.palette.light[700]
                }
            }
        }
    };
};


/***/ }),

/***/ "./jimu-theme/lib/classic/components/index.ts":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/classic/components/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArcGISVariables: () => (/* reexport safe */ _arcgis__WEBPACK_IMPORTED_MODULE_1__.getArcGISVariables),
/* harmony export */   getComponentsVariables: () => (/* binding */ getComponentsVariables)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arcgis */ "./jimu-theme/lib/classic/components/arcgis.ts");

const getComponentsVariables = (theme) => {
    const sizes = theme.sizes;
    const typography = theme.typography;
    const borderRadiuses = theme.borderRadiuses;
    const colors = theme.colors;
    const gutters = theme.gutters;
    const surfaces = theme.surfaces;
    const border = theme.border;
    const spacer = theme.spacer;
    const body = theme.body;
    const link = theme.link;
    const boxShadows = theme.boxShadows;
    const inputBaseVariables = {
        bg: colors.white,
        color: colors.black,
        border: {
            color: colors.palette.light[400],
            width: border.width
        }
    };
    return {
        alert: {
            paddingY: sizes[2],
            paddingX: sizes[4],
            marginBottom: '0.625rem',
            borderRadius: '0.25rem',
            linkFontWeight: typography.weights.light,
            borderWidth: '1px',
            bgLevel: '-10',
            borderLevel: '-9',
            colorLevel: '6'
        },
        badge: {
            fontSize: '85%',
            fontWeight: typography.weights.medium,
            paddingX: '0.5rem',
            paddingY: '0.25rem',
            borderRadius: borderRadiuses.pill,
            minSize: '6px',
            border: {
                width: '1px',
                color: colors.white
            }
        },
        breadcrumb: {
            bg: colors.palette.light[200],
            activeColor: colors.palette.dark[200],
            paddingY: '0.75rem',
            paddingX: '1rem',
            marginBottom: '1rem',
            borderRadius: borderRadiuses.default,
            item: {
                color: colors.palette.dark[900],
                hoverColor: colors.primary,
                padding: '0.5rem'
            },
            divider: {
                content: '"/"',
                color: colors.palette.dark[200]
            }
        },
        button: {
            sizes: {
                default: {
                    fontSize: typography.sizes.body1,
                    lineHeight: '1.375rem',
                    paddingX: sizes[4],
                    paddingY: sizes[1],
                    borderRadius: '2px'
                },
                sm: {
                    fontSize: typography.sizes.body2,
                    lineHeight: '1rem',
                    paddingX: sizes[4],
                    paddingY: sizes[1],
                    borderRadius: '2px'
                },
                lg: {
                    fontSize: typography.sizes.display5,
                    lineHeight: '1.375rem',
                    paddingX: sizes[4],
                    paddingY: sizes[2],
                    borderRadius: '2px'
                }
            },
            variants: {
                default: {
                    default: {
                        color: colors.palette.dark[800],
                        bg: colors.white,
                        border: {
                            color: colors.palette.light[400],
                            width: '1px'
                        }
                    },
                    hover: {
                        bg: colors.palette.light[100]
                    },
                    active: {
                        color: colors.white,
                        bg: colors.primary,
                        border: {
                            color: colors.primary
                        }
                    },
                    disabled: {
                        color: colors.palette.light[800],
                        bg: colors.palette.light[200],
                        border: {
                            color: colors.palette.light[400]
                        }
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   }
                    // }
                },
                primary: {
                    default: {
                        color: colors.white,
                        bg: colors.primary,
                        border: {
                            color: colors.primary,
                            width: '1px'
                        }
                    },
                    hover: {
                        bg: colors.palette.primary[600]
                    },
                    active: {
                        bg: colors.palette.primary[600]
                    },
                    disabled: {
                        color: colors.palette.light[800],
                        bg: colors.palette.light[200],
                        border: {
                            color: colors.palette.light[200]
                        }
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   },
                    //   shadow: 'inset 0 0 0 1px white'
                    // }
                },
                secondary: {
                    default: {
                        color: colors.primary,
                        bg: colors.transparent,
                        border: {
                            width: '1px',
                            color: colors.primary
                        }
                    },
                    hover: {
                        color: colors.white,
                        bg: colors.primary,
                        border: {
                            color: colors.primary
                        }
                    },
                    active: {
                        color: colors.white,
                        bg: colors.primary,
                        border: {
                            color: colors.primary
                        }
                    },
                    disabled: {
                        color: colors.palette.light[800],
                        bg: colors.palette.light[200],
                        border: {
                            color: colors.palette.light[400]
                        }
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   }
                    // }
                },
                tertiary: {
                    default: {
                        color: colors.palette.dark[800],
                        bg: colors.transparent,
                        border: {
                            width: '1px',
                            color: colors.transparent
                        }
                    },
                    hover: {
                        color: colors.primary
                    },
                    active: {
                        color: colors.white,
                        bg: colors.primary
                    },
                    disabled: {
                        color: colors.palette.light[800]
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   }
                    // }
                },
                danger: {
                    default: {
                        color: colors.white,
                        bg: colors.danger,
                        border: {
                            width: '1px',
                            color: colors.danger
                        }
                    },
                    hover: {
                        bg: colors.palette.danger[600]
                    },
                    active: {
                        bg: colors.palette.danger[600]
                    },
                    disabled: {
                        color: colors.palette.light[800],
                        bg: colors.palette.light[200],
                        border: {
                            color: colors.palette.light[200]
                        }
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   },
                    //   shadow: 'inset 0 0 0 1px white'
                    // }
                },
                link: {
                    default: {
                        color: colors.primary,
                        bg: colors.transparent,
                        border: {
                            width: '1px',
                            color: colors.transparent
                        },
                        decoration: 'underline'
                    },
                    hover: {
                        color: colors.palette.primary[600],
                        decoration: 'underline'
                    },
                    active: {
                        color: colors.palette.primary[600]
                    },
                    disabled: {
                        color: colors.palette.light[800]
                    }
                    // ,
                    // focus: {
                    //   border: {
                    //     width: '1px',
                    //     color: colors.black
                    //   },
                    //   decoration: 'underline'
                    // }
                }
            },
            icon: {
                spacing: gutters[4],
                size: 'auto'
            }
        },
        card: {
            root: {
                default: Object.assign(Object.assign({}, surfaces[1]), { borderRadius: borderRadiuses.none }),
                hover: {
                    border: {
                        width: '1px',
                        color: colors.primary
                    },
                    shadow: `0 0 0 1px ${colors.primary}`
                },
                active: {
                    border: {
                        width: '1px',
                        color: colors.primary
                    },
                    shadow: `0 0 0 1px ${colors.primary}`
                }
            },
            spacer: {
                y: '0.625rem',
                x: sizes[5]
            },
            headerBg: colors.white,
            divider: {
                color: colors.palette.light[200],
                width: '1px'
            },
            checkMark: {
                color: colors.white,
                bg: colors.primary
            }
        },
        close: {
            fontSize: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${typography.fontSizeBase} * 1.5`),
            fontWeight: typography.weights.bold,
            color: colors.black,
            textShadow: `0 1px 0 ${colors.white}`
        },
        dropdown: Object.assign(Object.assign({ button: {
                sizes: {
                    default: {
                        paddingX: '0.375rem'
                    }
                }
            }, minWidth: '10rem', paddingY: sizes[1], spacer: '4px' }, surfaces[2]), { borderRadius: borderRadiuses.default, divider: {
                bg: colors.palette.light[400],
                margin: `${sizes[1]} ${sizes[2]}`
            }, link: {
                color: colors.palette.dark[900],
                hoverColor: colors.white,
                hoverBg: colors.primary,
                activeColor: colors.white,
                activeBg: colors.primary,
                checkIconColor: 'inherit',
                checkIconGutter: gutters[4],
                disabledColor: colors.palette.dark[200]
            }, item: {
                paddingY: '0.25rem',
                paddingX: '1rem'
            }, header: {
                color: colors.palette.dark[200]
            } }),
        form: {
            group: {
                marginBottom: '1rem'
            },
            helpText: {
                marginTop: '0.25rem',
                fontSize: '0.8125rem'
            },
            check: {
                inline: {
                    marginX: '0.75rem',
                    inputMarginX: '0.3125rem'
                }
            }
        },
        input: Object.assign(Object.assign({}, inputBaseVariables), { boxShadow: null, disabled: {
                bg: colors.palette.light[100],
                borderColor: colors.palette.light[400],
                color: colors.palette.light[800]
            }, focus: {
                borderColor: colors.primary,
                boxShadow: null
            }, placeHolderColor: colors.palette.dark[200], sizes: {
                default: {
                    fontSize: typography.sizes.body1,
                    lineHeight: 1.5,
                    paddingX: sizes[2],
                    paddingY: sizes[1],
                    borderRadius: borderRadiuses.default,
                    height: '32px'
                },
                sm: {
                    fontSize: typography.sizes.body2,
                    lineHeight: 1,
                    paddingX: sizes[2],
                    paddingY: sizes[1],
                    borderRadius: borderRadiuses.default,
                    height: '26px'
                },
                lg: {
                    fontSize: typography.sizes.display5,
                    lineHeight: 1.5,
                    paddingX: sizes[2],
                    paddingY: sizes[2],
                    borderRadius: borderRadiuses.default,
                    height: '40px'
                }
            }, transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out', checkbox: {
                size: '16px',
                border: {
                    color: colors.palette.light[600],
                    width: '2px'
                },
                hover: {
                    borderColor: colors.primary
                },
                bg: inputBaseVariables.bg,
                checked: {
                    color: colors.white,
                    bg: colors.primary
                },
                // focusColor: colors.black,
                iconSize: '12px',
                borderRadius: '2px'
            }, radio: {
                size: '16px',
                border: {
                    color: colors.palette.light[600],
                    width: '2px'
                },
                hover: {
                    borderColor: colors.primary
                },
                bg: inputBaseVariables.bg,
                checked: {
                    color: colors.primary,
                    bg: colors.white
                },
                // focusColor: colors.black,
                iconSize: '8px',
                borderRadius: borderRadiuses.pill
            }, switch: {
                width: '28px',
                height: '16px',
                bg: inputBaseVariables.bg,
                border: {
                    width: inputBaseVariables.border.width,
                    color: colors.palette.light[600]
                },
                checkedBg: colors.primary,
                checkedBorder: {
                    color: colors.primary
                },
                slider: {
                    gap: '2px',
                    height: 'auto',
                    width: 'auto',
                    color: colors.palette.dark[800],
                    checkedColor: 'white',
                    disabledColor: colors.palette.light[800]
                },
                borderRadius: borderRadiuses.pill,
                focusColor: colors.black
            } }),
        select: {
            button: {
                sizes: {
                    default: {
                        paddingX: '0.375rem'
                    },
                    sm: {
                        paddingX: '0.375rem'
                    },
                    lg: {
                        paddingX: '0.375rem'
                    }
                }
            }
        },
        listGroup: {
            fontSize: '1rem',
            bg: colors.white,
            border: {
                color: border.color,
                width: border.width
            },
            borderRadius: borderRadiuses.default,
            item: {
                paddingY: '0.75rem',
                paddingX: '1rem'
            },
            hover: {
                bg: colors.palette.light[100]
            },
            active: {
                color: 'inherit',
                bg: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(colors.primary, 0.1),
                borderColor: border.color
            },
            disabled: {
                color: colors.palette.light[700],
                bg: colors.palette.light[200]
            },
            action: {
                color: colors.palette.dark[600],
                hover: {
                    color: colors.palette.dark[600]
                },
                active: {
                    color: body.color,
                    bg: colors.palette.light[200]
                }
            }
        },
        inputGroup: {
            addon: {
                color: inputBaseVariables.color,
                bg: colors.palette.light[200],
                borderColor: inputBaseVariables.border.color
            }
        },
        modal: {
            innerPadding: '1rem',
            transition: 'transform .3s ease-out',
            dialog: {
                margin: '.5rem',
                marginYSmUp: '1.75rem'
            },
            title: {
                lineHeight: typography.lineHeights.medium
            },
            content: Object.assign(Object.assign({}, surfaces[2]), { borderRadius: '0.25rem' }),
            backdrop: {
                bg: colors.black,
                opacity: 0.6
            },
            header: {
                border: {
                    color: colors.palette.light[300],
                    width: border.width
                },
                paddingY: '.75rem',
                paddingX: '1rem'
            },
            footer: {
                border: {
                    color: colors.palette.light[300],
                    width: '0'
                },
                button: {
                    minWidth: '6.25rem'
                }
            },
            sizes: {
                lg: '800px',
                md: '500px',
                sm: '300px'
            }
        },
        nav: {
            variants: {
                default: {
                    size: {
                        fontSize: typography.sizes.body1,
                        lineHeight: 1.5,
                        paddingX: sizes[4],
                        paddingY: sizes[1]
                    },
                    gutter: gutters[3],
                    icon: {
                        spacing: gutters[4]
                    },
                    root: {
                        borderRadius: borderRadiuses.default
                    },
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.transparent,
                            border: {
                                width: 0
                            },
                            borderRadius: borderRadiuses.default
                        },
                        hover: {
                            color: colors.primary,
                            borderRadius: borderRadiuses.default
                        },
                        active: {
                            color: colors.primary,
                            borderRadius: borderRadiuses.default
                        },
                        disabled: {
                            color: colors.palette.light[700],
                            shadow: 'none',
                            borderRadius: borderRadiuses.default
                        }
                        // ,
                        // focus: {
                        //   shadow: `inset 0 0 0 1px ${colors.black}`
                        // }
                    }
                },
                underline: {
                    size: {
                        fontSize: typography.sizes.body1,
                        lineHeight: 1.5,
                        paddingX: sizes[4],
                        paddingY: sizes[1]
                    },
                    gutter: gutters[3],
                    icon: {
                        spacing: gutters[4]
                    },
                    root: {
                        border: {
                            width: 0
                        },
                        borderRadius: borderRadiuses.none
                    },
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.transparent,
                            border: {
                                color: colors.transparent,
                                width: '2px'
                            },
                            borderRadius: borderRadiuses.none
                        },
                        hover: {
                            color: colors.primary,
                            border: {
                                color: colors.transparent,
                                width: '2px'
                            },
                            borderRadius: borderRadiuses.none
                        },
                        active: {
                            color: colors.primary,
                            border: {
                                color: colors.primary,
                                width: '2px'
                            },
                            borderRadius: borderRadiuses.none
                        },
                        disabled: {
                            color: colors.palette.light[700],
                            shadow: 'none',
                            borderRadius: borderRadiuses.none
                        }
                        // ,
                        // focus: {
                        //   shadow: `inset 0 0 0 1px ${colors.black}`,
                        //   borderRadius: borderRadiuses.none
                        // }
                    }
                },
                pills: {
                    size: {
                        fontSize: typography.sizes.body1,
                        lineHeight: 1.5,
                        paddingX: sizes[4],
                        paddingY: sizes[1]
                    },
                    gutter: gutters[3],
                    icon: {
                        spacing: gutters[4]
                    },
                    root: {
                        borderRadius: borderRadiuses.pill
                    },
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            border: {
                                width: '0px'
                            },
                            borderRadius: borderRadiuses.pill
                        },
                        hover: {
                            color: colors.primary,
                            borderRadius: borderRadiuses.pill
                        },
                        active: {
                            color: colors.white,
                            bg: colors.primary,
                            borderRadius: borderRadiuses.pill
                        },
                        disabled: {
                            color: colors.palette.light[700],
                            shadow: 'none',
                            borderRadius: borderRadiuses.pill
                        }
                        // ,
                        // focus: {
                        //   shadow: 'inset 0 0 0 1px white',
                        //   border: {
                        //     width: '1px',
                        //     color: colors.black
                        //   },
                        //   borderRadius: borderRadiuses.pill
                        // }
                    }
                },
                tabs: {
                    size: {
                        fontSize: typography.sizes.body1,
                        lineHeight: 1.5,
                        paddingX: sizes[4],
                        paddingY: sizes[1]
                    },
                    gutter: gutters[3],
                    icon: {
                        spacing: gutters[4]
                    },
                    root: {
                        border: {
                            width: '1px',
                            color: colors.palette.light[500]
                        },
                        borderRadius: borderRadiuses.default
                    },
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.palette.light[100],
                            border: {
                                width: '1px',
                                color: colors.palette.light[500]
                            },
                            borderRadius: borderRadiuses.default
                        },
                        hover: {
                            bg: colors.white
                        },
                        active: {
                            color: colors.primary,
                            bg: colors.white,
                            border: {
                                width: '1px',
                                color: colors.palette.light[500]
                            }
                        },
                        disabled: {
                            color: colors.palette.light[700],
                            bg: colors.palette.light[200],
                            shadow: 'none'
                        }
                        // ,
                        // focus: {
                        //   border: {
                        //     width: '1px',
                        //     color: colors.black
                        //   }
                        // }
                    }
                }
            }
        },
        navbar: {
            fontSize: '1rem',
            paddingY: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${spacer} * 0.5`),
            paddingX: spacer,
            nav: {
                link: {
                    paddingX: '0.5rem',
                    height: 'auto'
                }
            },
            brand: {
                fontSize: '1rem',
                height: 'auto',
                paddingY: 'auto'
            },
            toggler: {
                paddingY: '0.25rem',
                paddingX: '0.75rem',
                fontSize: typography.sizes.display5,
                borderRadius: '2px'
            },
            themes: {
                dark: {
                    color: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(colors.white, 0.75),
                    hoverColor: colors.white,
                    activeColor: colors.white,
                    disabledColor: colors.palette.light[700],
                    toggler: {
                        borderColor: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(colors.white, 0.1)
                    }
                },
                light: {
                    color: 'inherit',
                    hoverColor: colors.primary,
                    activeColor: colors.primary,
                    disabledColor: colors.palette.light[700],
                    toggler: {
                        borderColor: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(colors.black, 0.1)
                    }
                }
            }
        },
        pagination: {
            gutter: gutters[3],
            sizes: {
                default: {
                    button: {
                        paddingY: '0.25rem',
                        paddingX: '0.25rem',
                        minWidth: '1.625rem',
                        lineHeight: 1
                    }
                },
                sm: {
                    button: {
                        paddingY: '0.25rem',
                        paddingX: '0.25rem',
                        minWidth: '1.5rem',
                        lineHeight: 1
                    }
                },
                lg: {
                    button: {
                        paddingY: '0.5rem',
                        paddingX: '0.5rem',
                        minWidth: '2rem',
                        lineHeight: 1
                    }
                }
            },
            variants: {
                default: {
                    root: {
                        default: {
                            borderRadius: borderRadiuses.lg
                        }
                    },
                    button: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.white,
                            border: {
                                color: colors.palette.light[400],
                                width: border.width
                            },
                            borderRadius: borderRadiuses.lg
                        },
                        hover: {
                            color: link.color,
                            bg: colors.palette.light[200],
                            border: {
                                width: '1px',
                                color: colors.palette.light[400]
                            }
                        },
                        active: {
                            color: colors.white,
                            bg: colors.primary,
                            border: {
                                width: '1px',
                                color: colors.primary
                            }
                        },
                        disabled: {
                            color: colors.palette.light[800],
                            bg: colors.palette.light[200],
                            border: {
                                width: '1px',
                                color: colors.palette.light[400]
                            }
                        }
                        // ,
                        // focus: {
                        //   shadow: `0 0 0 0.2rem ${polished.rgba(colors.primary, 0.25)}`
                        // }
                    }
                }
            }
        },
        popper: Object.assign(Object.assign({}, surfaces[2]), { fontSize: typography.fontSizeBase, borderRadius: borderRadiuses.lg, header: {
                bg: colors.white,
                color: 'inherit',
                paddingY: '0.625rem',
                paddingX: '0.625rem'
            }, body: {
                color: body.color,
                paddingY: '0.5rem',
                paddingX: '0.75rem'
            }, arrow: {
                color: surfaces[2].bg,
                outerColor: surfaces[2].border.color
            } }),
        paper: {
            bg: body.bg,
            color: body.color,
            paddingX: 0,
            paddingY: 0,
            border: {
                width: 0,
                color: 'transparent'
            }
        },
        progress: {
            fontSize: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${typography.fontSizeBase} * 0.75`),
            bg: colors.palette.light[200],
            borderRadius: borderRadiuses.none
        },
        slider: {
            sizes: {
                default: {
                    root: '0.125rem',
                    thumb: '0.875rem'
                },
                sm: {
                    root: '0.125rem',
                    thumb: '0.875rem'
                },
                lg: {
                    root: '0.25rem',
                    thumb: '1.5rem'
                }
            },
            variants: {
                default: {
                    root: {
                        bg: colors.transparent,
                        border: {
                            width: 0
                        }
                    },
                    track: {
                        bg: colors.palette.light[600],
                        borderRadius: borderRadiuses.pill
                    },
                    progress: {
                        default: {
                            bg: colors.primary,
                            borderRadius: borderRadiuses.pill
                        }
                    },
                    thumb: {
                        default: {
                            bg: colors.white,
                            border: {
                                color: colors.palette.primary[500],
                                width: '2px'
                            },
                            borderRadius: borderRadiuses.circle
                        },
                        hover: {
                            border: {
                                color: colors.palette.primary[600],
                                width: '2px'
                            }
                        },
                        focus: {
                            shadow: `0 0 0 2px ${colors.white}, 0 0 0 3px ${colors.black}`
                        }
                    }
                }
            }
        },
        table: {
            color: body.color,
            bg: body.bg,
            border: {
                color: colors.palette.light[400],
                width: border.width
            },
            head: {
                fontSize: '1rem',
                bg: colors.transparent
            },
            cell: {
                default: {
                    paddingX: sizes[4],
                    paddingY: sizes[2]
                },
                sm: {
                    paddingX: sizes[4],
                    paddingY: sizes[2]
                }
            },
            variants: {
                striped: {
                    bg: colors.palette.light[100]
                },
                dark: {
                    color: colors.light,
                    bg: colors.dark,
                    border: {
                        color: colors.palette.light[900]
                    },
                    head: {
                        bg: colors.transparent
                    }
                }
            }
        },
        tooltip: {
            fontSize: typography.sizes.body2,
            maxWidth: '360px',
            color: colors.black,
            bg: colors.palette.light[300],
            borderRadius: borderRadiuses.default,
            border: {
                width: '1px',
                color: colors.palette.light[600]
            },
            boxShadow: boxShadows.default,
            opacity: 1,
            paddingY: sizes[1],
            paddingX: sizes[2],
            arrow: {
                color: colors.palette.light[300],
                border: {
                    width: '1px',
                    color: colors.palette.light[600]
                }
            }
        },
        navButtonGroup: {
            variants: {
                default: {
                    root: {},
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.white,
                            border: {
                                color: colors.light[500],
                                width: '1px'
                            },
                            borderRadius: sizes[1]
                        },
                        hover: {
                            bg: colors.palette.light[100],
                            borderRadius: sizes[1]
                        },
                        disabled: {
                            color: colors.palette.light[800],
                            bg: colors.palette.light[200],
                            border: {
                                color: colors.palette.light[400]
                            },
                            borderRadius: sizes[1]
                        }
                    }
                },
                primary: {
                    root: {
                        bg: colors.primary,
                        borderRadius: sizes[6]
                    },
                    item: {
                        default: {
                            color: colors.white,
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        },
                        hover: {
                            color: colors.light[500],
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        },
                        disabled: {
                            color: colors.palette.light[800],
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        }
                    }
                },
                tertiary: {
                    root: {},
                    item: {
                        default: {
                            color: colors.palette.dark[800],
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        },
                        hover: {
                            color: colors.primary,
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        },
                        disabled: {
                            color: colors.palette.light[800],
                            bg: colors.transparent,
                            border: {
                                width: '0px',
                                color: colors.transparent
                            }
                        }
                    }
                }
            }
        }
    };
};



/***/ }),

/***/ "./jimu-theme/lib/classic/core/border-radiuses.ts":
/*!********************************************************!*\
  !*** ./jimu-theme/lib/classic/core/border-radiuses.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderRadiuses: () => (/* binding */ borderRadiuses),
/* harmony export */   createBorderRadius: () => (/* binding */ createBorderRadius)
/* harmony export */ });
const borderRadiuses = {
    none: '0rem',
    sm: '0rem',
    default: '0.125rem', //2px
    lg: '0.25rem', //4px
    circle: '50%',
    pill: '50rem'
};
const createBorderRadius = (inputRadiuses = {}) => {
    return Object.assign(Object.assign({}, borderRadiuses), inputRadiuses);
};


/***/ }),

/***/ "./jimu-theme/lib/classic/core/border.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/classic/core/border.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBorder: () => (/* binding */ createBorder)
/* harmony export */ });
const createBorder = (options = {}, colors) => {
    let border = {
        type: 'solid',
        color: colors.palette.light[300],
        width: '1px'
    };
    border = Object.assign(Object.assign({}, border), options);
    return border;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/core/index.ts":
/*!**********************************************!*\
  !*** ./jimu-theme/lib/classic/core/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderRadiuses: () => (/* reexport safe */ _border_radiuses__WEBPACK_IMPORTED_MODULE_3__.borderRadiuses),
/* harmony export */   calculateGutters: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.calculateGutters),
/* harmony export */   calculateSizes: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.calculateSizes),
/* harmony export */   crateShadows: () => (/* reexport safe */ _shadows__WEBPACK_IMPORTED_MODULE_4__.crateShadows),
/* harmony export */   createBorder: () => (/* reexport safe */ _border__WEBPACK_IMPORTED_MODULE_2__.createBorder),
/* harmony export */   createBorderRadius: () => (/* reexport safe */ _border_radiuses__WEBPACK_IMPORTED_MODULE_3__.createBorderRadius),
/* harmony export */   createGutters: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.createGutters),
/* harmony export */   createSizes: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.createSizes),
/* harmony export */   createSurfaces: () => (/* reexport safe */ _shadows__WEBPACK_IMPORTED_MODULE_4__.createSurfaces),
/* harmony export */   createTypography: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.createTypography),
/* harmony export */   fontFamilyBase: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.fontFamilyBase),
/* harmony export */   fontSizeBase: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.fontSizeBase),
/* harmony export */   fontSizeRoot: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.fontSizeRoot),
/* harmony export */   fontWeights: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.fontWeights),
/* harmony export */   gutters: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.gutters),
/* harmony export */   lineHeights: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_0__.lineHeights),
/* harmony export */   shadows: () => (/* reexport safe */ _shadows__WEBPACK_IMPORTED_MODULE_4__.shadows),
/* harmony export */   sizes: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.sizes),
/* harmony export */   spacer: () => (/* reexport safe */ _sizing__WEBPACK_IMPORTED_MODULE_1__.spacer)
/* harmony export */ });
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography */ "./jimu-theme/lib/classic/core/typography.ts");
/* harmony import */ var _sizing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizing */ "./jimu-theme/lib/classic/core/sizing.ts");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./border */ "./jimu-theme/lib/classic/core/border.ts");
/* harmony import */ var _border_radiuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border-radiuses */ "./jimu-theme/lib/classic/core/border-radiuses.ts");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shadows */ "./jimu-theme/lib/classic/core/shadows.ts");







/***/ }),

/***/ "./jimu-theme/lib/classic/core/shadows.ts":
/*!************************************************!*\
  !*** ./jimu-theme/lib/classic/core/shadows.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crateShadows: () => (/* binding */ crateShadows),
/* harmony export */   createSurfaces: () => (/* binding */ createSurfaces),
/* harmony export */   shadows: () => (/* binding */ shadows)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");


const shadows = {
    none: 'none',
    sm: `0 0 6px 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba('black', 0.15)}`,
    default: `0 0 10px 1px ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba('black', 0.2)}`,
    lg: `0 0 20px 2px ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba('black', 0.2)}`
};
const crateShadows = (inputShadows = {}) => {
    return Object.assign(Object.assign({}, shadows), inputShadows);
};
const createSurfaces = (inputSurfaces = {}, shadows, colors) => {
    let surfaces = {
        1: {
            bg: colors.white,
            border: {
                width: '1px',
                color: colors.palette.light[400]
            },
            shadow: shadows.none
        },
        2: {
            bg: colors.white,
            border: {
                width: '1px',
                color: colors.palette.light[300]
            },
            shadow: shadows.default
        },
        3: {
            bg: colors.palette.light[100],
            border: {
                width: '1px',
                color: colors.palette.light[400]
            },
            shadow: shadows.sm
        }
    };
    surfaces = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(surfaces, inputSurfaces);
    return surfaces;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/core/sizing.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/classic/core/sizing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateGutters: () => (/* binding */ calculateGutters),
/* harmony export */   calculateSizes: () => (/* binding */ calculateSizes),
/* harmony export */   createGutters: () => (/* binding */ createGutters),
/* harmony export */   createSizes: () => (/* binding */ createSizes),
/* harmony export */   gutters: () => (/* binding */ gutters),
/* harmony export */   sizes: () => (/* binding */ sizes),
/* harmony export */   spacer: () => (/* binding */ spacer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const spacer = '1rem';
const sizes = calculateSizes(spacer);
function calculateSizes(newSpacer = spacer) {
    return {
        0: 0, // 0
        1: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.25`), // 4px
        2: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.5`), // 8px
        3: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.75`), // 12px
        4: newSpacer, // 16px
        5: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 1.25`), // 20px
        6: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 1.5`) // 24px
    };
}
const gutters = calculateSizes(spacer);
function calculateGutters(newSpacer = spacer) {
    return {
        0: 0, // 0
        1: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.0625`), // 1px
        2: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.125`), // 2px
        3: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.25`), // 4px
        4: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.5`), // 8px
        5: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${newSpacer} * 0.625`) // 10px
    };
}
const createSizes = (spacer, options = {}) => {
    let sizes = calculateSizes(spacer);
    sizes = Object.assign(Object.assign({}, sizes), options);
    return sizes;
};
const createGutters = (spacer, options = {}) => {
    let gutters = calculateGutters(spacer);
    gutters = Object.assign(Object.assign({}, gutters), options);
    return gutters;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/core/typography.ts":
/*!***************************************************!*\
  !*** ./jimu-theme/lib/classic/core/typography.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTypography: () => (/* binding */ createTypography),
/* harmony export */   fontFamilyBase: () => (/* binding */ fontFamilyBase),
/* harmony export */   fontSizeBase: () => (/* binding */ fontSizeBase),
/* harmony export */   fontSizeRoot: () => (/* binding */ fontSizeRoot),
/* harmony export */   fontWeights: () => (/* binding */ fontWeights),
/* harmony export */   lineHeights: () => (/* binding */ lineHeights)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");


const fontFamilyBase = '"Avenir Next", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"';
const fontSizeRoot = '100%';
const fontSizeBase = '0.8125rem'; // 13px
const fontSizeBaseInPx = 13;
const fontWeights = {
    extraLight: '200',
    light: '300',
    medium: '400',
    bold: '500',
    extraBold: '600'
};
const lineHeights = {
    medium: 1.5,
    sm: 1.3,
    lg: 1.7
};
const defaultTypography = {
    fontFamilyBase,
    fontSizeRoot,
    fontSizeBase,
    fontWeights,
    lineHeights
};
const createDisplaySize = (number) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${fontSizeBase} * ${number} / ${fontSizeBaseInPx}`);
const createTypography = (typographyOptions = {}, colors) => {
    var _a, _b, _c;
    const fontFamilyBase = (_a = typographyOptions.fontFamilyBase) !== null && _a !== void 0 ? _a : defaultTypography.fontFamilyBase;
    const fontSizeRoot = (_b = typographyOptions.fontSizeRoot) !== null && _b !== void 0 ? _b : defaultTypography.fontSizeRoot;
    const fontSizeBase = (_c = typographyOptions.fontSizeBase) !== null && _c !== void 0 ? _c : defaultTypography.fontSizeBase;
    const typographyBase = {
        fontFamilyBase: fontFamilyBase,
        fontSizeRoot: fontSizeRoot,
        fontSizeBase: fontSizeBase,
        sizes: Object.assign({ display1: createDisplaySize(30), display2: createDisplaySize(24), display3: createDisplaySize(20), display4: createDisplaySize(18), display5: createDisplaySize(16), display6: createDisplaySize(14), body1: createDisplaySize(14), body2: fontSizeBase, caption1: createDisplaySize(12), caption2: createDisplaySize(10) }, typographyOptions.sizes),
        weights: Object.assign(Object.assign({}, defaultTypography.fontWeights), typographyOptions.weights),
        lineHeights: Object.assign(Object.assign({}, defaultTypography.lineHeights), typographyOptions.lineHeights),
        colors: Object.assign({ title: colors.palette.dark[900], normal: colors.palette.dark[700], caption: colors.palette.dark[500], disabled: colors.palette.light[500] }, typographyOptions.colors)
    };
    const PARTIAL_VARIANT_OPTIONS = {
        default: {
            fontFamily: typographyBase.fontFamilyBase,
            fontWeight: typographyBase.weights.medium,
            lineHeight: typographyBase.lineHeights.medium,
            color: typographyBase.colors.normal
        },
        heading: {
            fontFamily: typographyBase.fontFamilyBase,
            fontWeight: typographyBase.weights.bold,
            lineHeight: typographyBase.lineHeights.medium,
            color: typographyBase.colors.title
        }
    };
    let typography = Object.assign(Object.assign({}, typographyBase), { variants: {
            display1: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display1 }),
            display2: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display2 }),
            display3: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display3 }),
            display4: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display4 }),
            display5: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display5 }),
            display6: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.heading), { fontSize: typographyBase.sizes.display6 }),
            body1: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.default), { fontSize: typographyBase.sizes.body1 }),
            body2: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.default), { fontSize: typographyBase.sizes.body2 }),
            caption1: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.default), { fontSize: typographyBase.sizes.caption1, color: typographyBase.colors.caption }),
            caption2: Object.assign(Object.assign({}, PARTIAL_VARIANT_OPTIONS.default), { fontSize: typographyBase.sizes.caption2, color: typographyBase.colors.caption })
        } });
    typography = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(typography, typographyOptions);
    return typography;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/create-palette.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/classic/create-palette.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   augmentColor: () => (/* binding */ augmentColor),
/* harmony export */   augmentThemeColor: () => (/* binding */ augmentThemeColor),
/* harmony export */   commonColors: () => (/* binding */ commonColors),
/* harmony export */   createColors: () => (/* binding */ createColors),
/* harmony export */   createPalette: () => (/* binding */ createPalette),
/* harmony export */   revertPalette: () => (/* binding */ revertPalette),
/* harmony export */   themeColors: () => (/* binding */ themeColors),
/* harmony export */   themePalette: () => (/* binding */ themePalette)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const commonColors = {
    white: '#fff',
    black: '#000',
    transparent: 'transparent'
};
const themeColors = {
    primary: '#076fe5',
    secondary: '#c5c5c5',
    light: '#f0f0f0',
    dark: '#050505',
    info: '#089bdc',
    success: '#09cf74',
    warning: '#ffea1d',
    danger: '#e1001b'
};
const themePalette = {
    primary: {
        100: '#e6f2ff',
        200: '#acd3ff',
        300: '#65adff',
        400: '#2c8fff',
        500: '#076fe5',
        600: '#005eca',
        700: '#004ca3',
        800: '#003c82',
        900: '#002958'
    },
    secondary: {
        100: '#f0f0f0',
        200: '#e3e3e3',
        300: '#d5d5d5',
        400: '#c5c5c5',
        500: '#b6b6b6',
        600: '#a8a8a8',
        700: '#989898',
        800: '#8b8b8b',
        900: '#828282'
    },
    light: {
        100: '#f0f0f0',
        200: '#e3e3e3',
        300: '#d5d5d5',
        400: '#c5c5c5',
        500: '#b6b6b6',
        600: '#a8a8a8',
        700: '#989898',
        800: '#8b8b8b',
        900: '#828282'
    },
    dark: {
        100: '#767676',
        200: '#6a6a6a',
        300: '#5e5e5e',
        400: '#525252',
        500: '#444444',
        600: '#363636',
        700: '#282828',
        800: '#181818',
        900: '#050505'
    },
    info: {
        100: '#e5f7ff',
        200: '#9fe2ff',
        300: '#60ceff',
        400: '#21bbff',
        500: '#089bdc',
        600: '#0077ac',
        700: '#005a82',
        800: '#003b56',
        900: '#002231'
    },
    success: {
        100: '#ebfff6',
        200: '#acffd9',
        300: '#56f8ad',
        400: '#16ed8a',
        500: '#09cf74',
        600: '#03b161',
        700: '#00904e',
        800: '#006838',
        900: '#004022'
    },
    warning: {
        100: '#fffdeb',
        200: '#fff9c3',
        300: '#fff592',
        400: '#fff05f',
        500: '#ffea1d',
        600: '#eed800',
        700: '#d4c000',
        800: '#b5a400',
        900: '#938500'
    },
    danger: {
        100: '#ffe9ec',
        200: '#ff94a1',
        300: '#ff5066',
        400: '#ff203c',
        500: '#e1001b',
        600: '#bf0017',
        700: '#9f0013',
        800: '#79000f',
        900: '#4a0009'
    }
};
const brighten = (color) => {
    const hsl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.parseToHsl(color);
    return hsl === null || hsl === void 0 ? void 0 : hsl.lightness;
};
const augmentColor = (color, options) => {
    var _a, _b, _c, _d, _e;
    const count = (_a = options === null || options === void 0 ? void 0 : options.count) !== null && _a !== void 0 ? _a : 9;
    const level = (_b = options === null || options === void 0 ? void 0 : options.level) !== null && _b !== void 0 ? _b : Math.ceil(count / 2);
    const range = (_c = options === null || options === void 0 ? void 0 : options.range) !== null && _c !== void 0 ? _c : [0.1, 0.9];
    const reverse = (_d = options === null || options === void 0 ? void 0 : options.reverse) !== null && _d !== void 0 ? _d : false;
    const classic = (_e = options === null || options === void 0 ? void 0 : options.classic) !== null && _e !== void 0 ? _e : false;
    const tint = classic ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.lighten : jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.tint;
    const shade = classic ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.darken : jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.shade;
    const palette = {};
    const lightness = parseInt(`${brighten(color) * 100}`) / 100;
    let lightenStep = (range[1] - lightness) / (level - 1);
    let darkenStep = (lightness - range[0]) / (count - level);
    lightenStep = lightenStep > 0.1 ? 0.1 : lightenStep;
    darkenStep = darkenStep > 0.1 ? 0.1 : darkenStep;
    for (let i = 1; i <= count; i++) {
        const index = (reverse ? count - i + 1 : i) * 100;
        if (i === level) {
            palette[index] = color;
        }
        else if (i < level) {
            palette[index] =
                lightenStep < 0
                    ? '#fff'
                    : tint((level - i) * lightenStep, color);
        }
        else {
            palette[index] =
                darkenStep < 0
                    ? '#000'
                    : shade((i - level) * darkenStep, color);
        }
    }
    return palette;
};
const augmentThemeColor = (color, options) => {
    var _a, _b;
    const count = (_a = options === null || options === void 0 ? void 0 : options.count) !== null && _a !== void 0 ? _a : 9;
    let level = Math.ceil(count / 2);
    const isDark = (_b = options === null || options === void 0 ? void 0 : options.isDark) !== null && _b !== void 0 ? _b : false;
    const name = options === null || options === void 0 ? void 0 : options.name;
    const range = [0.1, 0.9];
    if (name && (name === 'light' || name === 'dark')) {
        if ((isDark && name === 'light') || (!isDark && name === 'dark')) {
            range[1] = 0.49;
            level = count;
        }
        else {
            range[0] = 0.5;
            level = 1;
        }
    }
    return augmentColor(color, { range, level, count, reverse: isDark, classic: true });
};
const createPalette = (inputColors, isDark) => {
    var _a;
    const defaultThemePalette = isDark ? revertPalette(themePalette) : themePalette;
    const palette = {};
    for (const name in themeColors) {
        if ((_a = inputColors === null || inputColors === void 0 ? void 0 : inputColors.palette) === null || _a === void 0 ? void 0 : _a[name]) {
            palette[name] = inputColors === null || inputColors === void 0 ? void 0 : inputColors.palette[name];
        }
        else if (inputColors === null || inputColors === void 0 ? void 0 : inputColors[name]) {
            palette[name] = augmentThemeColor(inputColors[name], { name, isDark });
        }
        else {
            palette[name] = defaultThemePalette[name];
        }
    }
    return palette;
};
const revertPalette = (palette) => {
    const reversed = {};
    Object.keys(palette).forEach((name) => {
        const paletteLength = Object.keys(palette[name]).length;
        reversed[name] = {};
        for (let i = Math.ceil(paletteLength / 2); i > 0; i--) {
            reversed[name][i * 100] = palette[name][(paletteLength - i + 1) * 100];
            reversed[name][(paletteLength - i + 1) * 100] = palette[name][i * 100];
        }
    });
    reversed.dark = [reversed.light, (reversed.light = reversed.dark)][0];
    return reversed;
};
const createCommonColors = (inputColors, isDarkTheme) => {
    const common = Object.assign(Object.assign({}, commonColors), { white: isDarkTheme ? commonColors.black : commonColors.white, black: isDarkTheme ? commonColors.white : commonColors.black });
    for (const name in commonColors) {
        if (inputColors === null || inputColors === void 0 ? void 0 : inputColors[name]) {
            common[name] = inputColors[name];
        }
    }
    return common;
};
const createThemeColors = (inputColors, isDarkTheme) => {
    const colors = Object.assign(Object.assign({}, themeColors), { dark: isDarkTheme ? themeColors.light : themeColors.dark, light: isDarkTheme ? themeColors.dark : themeColors.light });
    for (const name in themeColors) {
        if (inputColors === null || inputColors === void 0 ? void 0 : inputColors[name]) {
            colors[name] = inputColors[name];
        }
    }
    return colors;
};
const createColors = (inputColors, isDarkTheme) => {
    const common = createCommonColors(inputColors, isDarkTheme);
    const colors = createThemeColors(inputColors, isDarkTheme);
    const palette = createPalette(inputColors, isDarkTheme);
    return Object.assign(Object.assign(Object.assign({}, common), colors), { palette });
};



/***/ }),

/***/ "./jimu-theme/lib/classic/create-theme.ts":
/*!************************************************!*\
  !*** ./jimu-theme/lib/classic/create-theme.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTheme: () => (/* binding */ createTheme)
/* harmony export */ });
/* harmony import */ var _create_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-palette */ "./jimu-theme/lib/classic/create-palette.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./jimu-theme/lib/classic/components/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-theme/lib/classic/core/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/classic/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./jimu-theme/lib/utils/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





const createTheme = (overwrite = {}) => {
    var _a;
    const { darkTheme = false, colors: inputColors, typography: inputTypography, spacer: inputSpacer = _core__WEBPACK_IMPORTED_MODULE_2__.spacer, sizes: inputSizes, gutters: inputGutters, border: inputBorder, boxShadows: inputShadows, surfaces: inputSurfaces, borderRadiuses: inputRadius, body: inputBody, header: inputHeader, footer: inputFooter, link: inputLink } = overwrite, others = __rest(overwrite, ["darkTheme", "colors", "typography", "spacer", "sizes", "gutters", "border", "boxShadows", "surfaces", "borderRadiuses", "body", "header", "footer", "link"]);
    const colors = (0,_create_palette__WEBPACK_IMPORTED_MODULE_0__.createColors)(inputColors, darkTheme);
    const typography = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createTypography)(inputTypography, colors);
    const spacer = inputSpacer;
    const sizes = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createSizes)(spacer, inputSizes);
    const gutters = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createGutters)(spacer, inputGutters);
    const border = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createBorder)(inputBorder, colors);
    const borderRadiuses = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createBorderRadius)(inputRadius);
    const boxShadows = (0,_core__WEBPACK_IMPORTED_MODULE_2__.crateShadows)(inputShadows);
    const surfaces = (0,_core__WEBPACK_IMPORTED_MODULE_2__.createSurfaces)(inputSurfaces, boxShadows, colors);
    const focusedStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createFocusedStyles)(colors);
    const coloration = (_a = overwrite.coloration) !== null && _a !== void 0 ? _a : 'default';
    const colorationVariants = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createColoration)(overwrite === null || overwrite === void 0 ? void 0 : overwrite.colorationVariants, colors);
    let variables = {
        darkTheme,
        coloration,
        colorationVariants,
        colors,
        typography,
        spacer,
        sizes,
        gutters,
        border,
        borderRadiuses,
        boxShadows,
        surfaces,
        focusedStyles
    };
    const body = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createBody)(inputBody, variables);
    const header = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createHeader)(inputHeader, variables);
    const footer = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createFooter)(inputFooter, variables);
    const link = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createLink)(inputLink, colors);
    variables = Object.assign(Object.assign({}, variables), { body,
        header,
        footer,
        link });
    const components = (0,_components__WEBPACK_IMPORTED_MODULE_1__.getComponentsVariables)(variables);
    const arcgis = (0,_components__WEBPACK_IMPORTED_MODULE_1__.getArcGISVariables)(variables, components);
    variables = Object.assign(Object.assign({}, variables), { components,
        arcgis });
    variables = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepmerge)(variables, others);
    return variables;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-baseline/index.ts":
/*!*************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-baseline/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   getClassicThemeBaseLineStyles: () => (/* binding */ getClassicThemeBaseLineStyles),
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../manager */ "./jimu-theme/lib/manager/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");


const html = (theme) => {
    return {
        fontSize: theme.typography.fontSizeRoot,
        webkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        mozTextSizeAdjust: '100%',
        webkitFontSmoothing: 'subpixel-antialiased'
    };
};
const body = (theme) => {
    return {
        fontFamily: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.normalizeFontFamily)(theme.body.fontFamily),
        fontSize: theme.body.fontSize,
        fontWeight: theme.body.fontWeight,
        lineHeight: theme.body.lineHeight,
        color: theme.body.color,
        backgroundColor: theme.body.bg
    };
};
const getClassicThemeBaseLineStyles = (theme) => {
    let overrideStyles;
    const themeOverrides = (0,_manager__WEBPACK_IMPORTED_MODULE_0__.getThemeStyle)('Global');
    if (themeOverrides) {
        overrideStyles = typeof themeOverrides === 'function' ? themeOverrides({ theme }) : themeOverrides;
    }
    const styles = {
        html: html(theme),
        body: body(theme),
        overrideStyles
    };
    return styles;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/colors.ts":
/*!***************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/colors.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorsUtilities: () => (/* binding */ colorsUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const ClassicThemeColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'white', 'black', 'transparent', 'light', 'dark'];
const colorUtilities = (theme) => {
    let utilities = {};
    ClassicThemeColors.forEach((name) => {
        const color = theme.colors[name];
        utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTypeColorUtilities)(name, color));
    });
    const light = theme.colors.palette.light;
    Object.entries(light).forEach(([shade, color]) => {
        const name = `light-${shade}`;
        utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTypeColorUtilities)(name, color));
    });
    const dark = theme.colors.palette.dark;
    Object.entries(dark).forEach(([shade, color]) => {
        const name = `dark-${shade}`;
        utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTypeColorUtilities)(name, color));
    });
    return utilities;
};
const borderColorUtilities = (theme) => {
    var _a;
    const borderWidth = '1px';
    const borderColor = (_a = theme === null || theme === void 0 ? void 0 : theme.border.color) !== null && _a !== void 0 ? _a : '#ccc';
    const borderWhite = theme === null || theme === void 0 ? void 0 : theme.colors.white;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getBorderColorUtilities)(borderColor, borderWidth, borderWhite);
};
const colorsUtilities = (theme) => {
    return Object.assign(Object.assign({}, colorUtilities(theme)), borderColorUtilities(theme));
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/index.ts":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClassicThemeUtilities: () => (/* binding */ getClassicThemeUtilities)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./jimu-theme/lib/classic/global/css-utilities/colors.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacing */ "./jimu-theme/lib/classic/global/css-utilities/spacing.ts");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadows */ "./jimu-theme/lib/classic/global/css-utilities/shadows.ts");
/* harmony import */ var _radius__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radius */ "./jimu-theme/lib/classic/global/css-utilities/radius.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography */ "./jimu-theme/lib/classic/global/css-utilities/typography.ts");





const getClassicThemeUtilities = (theme) => {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_colors__WEBPACK_IMPORTED_MODULE_0__.colorsUtilities)(theme)), (0,_spacing__WEBPACK_IMPORTED_MODULE_1__.spacingUtilities)(theme)), (0,_shadows__WEBPACK_IMPORTED_MODULE_2__.shadowUtilities)(theme)), (0,_radius__WEBPACK_IMPORTED_MODULE_3__.borderRadiusUtilities)(theme)), (0,_typography__WEBPACK_IMPORTED_MODULE_4__.typographyUtilities)(theme));
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/radius.ts":
/*!***************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/radius.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderRadiusUtilities: () => (/* binding */ borderRadiusUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const borderRadiusUtilities = (theme) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getShapeUtilities)(theme.borderRadiuses);
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/shadows.ts":
/*!****************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/shadows.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowUtilities: () => (/* binding */ shadowUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const shadowUtilities = (theme) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getShadowUtilities)(theme === null || theme === void 0 ? void 0 : theme.boxShadows);
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/spacing.ts":
/*!****************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/spacing.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spacingUtilities: () => (/* binding */ spacingUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const spacingUtilities = (theme) => {
    let classes = {};
    Object.entries(theme.sizes).forEach(([key, value]) => {
        classes = Object.assign(Object.assign({}, classes), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getSpacingUtilities)(key, value));
    });
    return classes;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-utilities/typography.ts":
/*!*******************************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-utilities/typography.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typographyUtilities: () => (/* binding */ typographyUtilities)
/* harmony export */ });
const getClassicTypographyColorUtilities = (theme) => {
    const typography = theme === null || theme === void 0 ? void 0 : theme.typography;
    const utilities = {};
    Object.keys(typography.colors).forEach((key) => {
        utilities[`.text-${key}${key === 'disabled' ? ', .text-muted' : ''}`] = {
            color: `${typography.colors[key]} !important`
        };
    });
    return utilities;
};
const getClassicTypographyVariantsUtilities = (theme) => {
    const typography = theme === null || theme === void 0 ? void 0 : theme.typography;
    const utilities = {};
    const CLASS_PREFIX = 'font-';
    Object.entries(typography.variants).forEach(([key, fontVariant]) => {
        let ruleName = `.${CLASS_PREFIX}${key}`;
        if (key.indexOf('display') === 0) {
            ruleName = `h${key.split('display')[1]}, .${CLASS_PREFIX}h${key.split('display')[1]}`;
        }
        utilities[ruleName] = {
            fontFamily: fontVariant.fontFamily,
            fontWeight: fontVariant.fontWeight,
            fontSize: fontVariant.fontSize,
            lineHeight: fontVariant.lineHeight,
            color: fontVariant.color
        };
    });
    return utilities;
};
const getSettingTextUtilities = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const utilities = {};
    utilities['.setting-text-level-0'] = {
        fontSize: '14px !important',
        color: `${(_b = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark[800]} !important`,
        fontWeight: `${(_c = theme.typography) === null || _c === void 0 ? void 0 : _c.weights.bold} !important`
    };
    utilities['.setting-text-level-1'] = {
        fontSize: '14px !important',
        color: `${(_e = (_d = theme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.dark[600]} !important`,
        fontWeight: `${(_f = theme.typography) === null || _f === void 0 ? void 0 : _f.weights.bold} !important`
    };
    utilities['.setting-text-level-2'] = {
        fontSize: '13px !important',
        color: `${(_h = (_g = theme.colors) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.dark[600]} !important`,
        fontWeight: `${(_j = theme.typography) === null || _j === void 0 ? void 0 : _j.weights.bold} !important`
    };
    utilities['.setting-text-level-3'] = {
        fontSize: '13px !important',
        color: `${(_l = (_k = theme.colors) === null || _k === void 0 ? void 0 : _k.palette) === null || _l === void 0 ? void 0 : _l.dark[400]} !important`,
        fontWeight: `${(_m = theme.typography) === null || _m === void 0 ? void 0 : _m.weights.bold} !important`
    };
    return utilities;
};
const typographyUtilities = (theme) => {
    const utilities = Object.assign(Object.assign(Object.assign({}, getClassicTypographyColorUtilities(theme)), getClassicTypographyVariantsUtilities(theme)), getSettingTextUtilities(theme));
    return utilities;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/css-vars/index.ts":
/*!*********************************************************!*\
  !*** ./jimu-theme/lib/classic/global/css-vars/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClassicThemeCSSVars: () => (/* binding */ getClassicThemeCSSVars)
/* harmony export */ });
const CommonColors = ['white', 'black', 'transparent'];
const getPaletteCommonClasses = (theme) => {
    const classes = {};
    CommonColors.forEach((name) => {
        classes[`--${name}`] = theme === null || theme === void 0 ? void 0 : theme.colors[name];
    });
    return classes;
};
const PaletteColors = [
    'primary',
    'secondary',
    'light',
    'dark',
    'danger',
    'warning',
    'info',
    'success'
];
const getPaletteColorClasses = (theme) => {
    let classes = {};
    PaletteColors.forEach((name) => {
        classes = Object.assign(Object.assign({}, classes), getPaletteItemClasses(theme, name));
    });
    return classes;
};
const getPaletteItemClasses = (theme, name) => {
    const classes = {};
    const main = theme === null || theme === void 0 ? void 0 : theme.colors[name];
    classes[`--${name}`] = main;
    const value = theme === null || theme === void 0 ? void 0 : theme.colors.palette[name];
    Object.entries(value).forEach(([direction, color]) => {
        classes[`--${name}-${direction}`] = color;
    });
    return classes;
};
const getSharedPaletteColorClasses = (theme) => {
    const classes = {};
    if (theme.colors.orgSharedColors) {
        Object.keys(theme.colors.orgSharedColors).forEach((name) => {
            Object.entries(theme.colors.orgSharedColors[name]).forEach(([direction, color]) => {
                classes[`--org-${name}-${direction}`] = color;
            });
        });
    }
    return classes;
};
const getClassicPaletteClasses = (theme) => {
    let classes = {};
    classes = Object.assign(Object.assign({}, classes), getPaletteColorClasses(theme));
    return classes;
};
const getClassicThemeCSSVars = (theme) => {
    return Object.assign(Object.assign(Object.assign({}, getPaletteCommonClasses(theme)), getClassicPaletteClasses(theme)), getSharedPaletteColorClasses(theme));
};


/***/ }),

/***/ "./jimu-theme/lib/classic/global/index.tsx":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/classic/global/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* reexport safe */ _css_baseline__WEBPACK_IMPORTED_MODULE_0__.body),
/* harmony export */   getClassicThemeBaseLineStyles: () => (/* reexport safe */ _css_baseline__WEBPACK_IMPORTED_MODULE_0__.getClassicThemeBaseLineStyles),
/* harmony export */   getClassicThemeCSSVars: () => (/* reexport safe */ _css_vars__WEBPACK_IMPORTED_MODULE_2__.getClassicThemeCSSVars),
/* harmony export */   getClassicThemeUtilities: () => (/* reexport safe */ _css_utilities__WEBPACK_IMPORTED_MODULE_1__.getClassicThemeUtilities),
/* harmony export */   html: () => (/* reexport safe */ _css_baseline__WEBPACK_IMPORTED_MODULE_0__.html)
/* harmony export */ });
/* harmony import */ var _css_baseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-baseline */ "./jimu-theme/lib/classic/global/css-baseline/index.ts");
/* harmony import */ var _css_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-utilities */ "./jimu-theme/lib/classic/global/css-utilities/index.ts");
/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-vars */ "./jimu-theme/lib/classic/global/css-vars/index.ts");





/***/ }),

/***/ "./jimu-theme/lib/classic/index.ts":
/*!*****************************************!*\
  !*** ./jimu-theme/lib/classic/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   augmentThemeColor: () => (/* reexport safe */ _create_palette__WEBPACK_IMPORTED_MODULE_1__.augmentThemeColor),
/* harmony export */   body: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.body),
/* harmony export */   caret: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.caret),
/* harmony export */   classicCommonColors: () => (/* reexport safe */ _create_palette__WEBPACK_IMPORTED_MODULE_1__.commonColors),
/* harmony export */   classicThemeColors: () => (/* reexport safe */ _create_palette__WEBPACK_IMPORTED_MODULE_1__.themeColors),
/* harmony export */   createBody: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createBody),
/* harmony export */   createClassicPalette: () => (/* reexport safe */ _create_palette__WEBPACK_IMPORTED_MODULE_1__.createPalette),
/* harmony export */   createClassicTheme: () => (/* reexport safe */ _create_theme__WEBPACK_IMPORTED_MODULE_0__.createTheme),
/* harmony export */   createColoration: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createColoration),
/* harmony export */   createColors: () => (/* reexport safe */ _create_palette__WEBPACK_IMPORTED_MODULE_1__.createColors),
/* harmony export */   createFocusedStyles: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createFocusedStyles),
/* harmony export */   createFooter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createFooter),
/* harmony export */   createHeader: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createHeader),
/* harmony export */   createLink: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.createLink),
/* harmony export */   formValidation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.formValidation),
/* harmony export */   getBoxInterpolationStyles: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getBoxInterpolationStyles),
/* harmony export */   getBoxStyles: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getBoxStyles),
/* harmony export */   getClassicThemeBaseLineStyles: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.getClassicThemeBaseLineStyles),
/* harmony export */   getClassicThemeCSSVars: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.getClassicThemeCSSVars),
/* harmony export */   getClassicThemeUtilities: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.getClassicThemeUtilities),
/* harmony export */   hover: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.hover),
/* harmony export */   hoverFocus: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.hoverFocus),
/* harmony export */   html: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.html),
/* harmony export */   navDivider: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.navDivider),
/* harmony export */   popperPointer: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.popperPointer)
/* harmony export */ });
/* harmony import */ var _create_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-theme */ "./jimu-theme/lib/classic/create-theme.ts");
/* harmony import */ var _create_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-palette */ "./jimu-theme/lib/classic/create-palette.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/classic/utils/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./jimu-theme/lib/classic/global/index.tsx");






/***/ }),

/***/ "./jimu-theme/lib/classic/utils/coloration.ts":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/classic/utils/coloration.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBody: () => (/* binding */ createBody),
/* harmony export */   createColoration: () => (/* binding */ createColoration),
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createHeader: () => (/* binding */ createHeader),
/* harmony export */   createLink: () => (/* binding */ createLink)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const createColoration = (inputColoration = {}, colors) => {
    let coloration = {
        minimal: {
            header: {
                bg: colors.light,
                color: colors.dark
            },
            body: {
                bg: colors.white,
                color: colors.dark
            },
            footer: {
                bg: colors.white,
                color: colors.dark
            }
        },
        default: {
            header: {
                bg: colors.palette.primary[700],
                color: colors.light
            },
            body: {
                bg: colors.palette.light[100],
                color: colors.dark
            },
            footer: {
                bg: colors.palette.light[100],
                color: colors.dark
            }
        }
    };
    coloration = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(coloration, inputColoration);
    return coloration;
};
const createBody = (input = {}, variables) => {
    var _a, _b, _c, _d;
    const { coloration, colorationVariants, colors, typography } = variables;
    let body = {
        bg: ((_b = (_a = colorationVariants[coloration]) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.bg) || colors.white,
        color: ((_d = (_c = colorationVariants[coloration]) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.color) || colors.black,
        fontFamily: typography.fontFamilyBase,
        fontWeight: typography.weights.medium,
        fontSize: typography.fontSizeBase,
        fontStyle: 'unset',
        lineHeight: typography.lineHeights.medium
    };
    body = Object.assign(Object.assign({}, body), input);
    return body;
};
const createHeader = (input = {}, variables) => {
    var _a, _b, _c, _d;
    const { coloration, colorationVariants, colors } = variables;
    let header = {
        bg: ((_b = (_a = colorationVariants[coloration]) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.bg) || colors.primary,
        color: ((_d = (_c = colorationVariants[coloration]) === null || _c === void 0 ? void 0 : _c.header) === null || _d === void 0 ? void 0 : _d.color) || colors.white
    };
    header = Object.assign(Object.assign({}, header), input);
    return header;
};
const createFooter = (input = {}, variables) => {
    var _a, _b, _c, _d;
    const { coloration, colorationVariants, colors } = variables;
    let footer = {
        bg: ((_b = (_a = colorationVariants[coloration]) === null || _a === void 0 ? void 0 : _a.footer) === null || _b === void 0 ? void 0 : _b.bg) || colors.primary,
        color: ((_d = (_c = colorationVariants[coloration]) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.color) || colors.white
    };
    footer = Object.assign(Object.assign({}, footer), input);
    return footer;
};
const createLink = (input = {}, colors) => {
    let link = {
        color: colors.primary,
        decoration: 'none',
        hover: {
            color: colors.palette.primary[600],
            decoration: 'underline'
        }
    };
    link = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(link, input);
    return link;
};


/***/ }),

/***/ "./jimu-theme/lib/classic/utils/index.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/classic/utils/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   createBody: () => (/* reexport safe */ _coloration__WEBPACK_IMPORTED_MODULE_2__.createBody),
/* harmony export */   createColoration: () => (/* reexport safe */ _coloration__WEBPACK_IMPORTED_MODULE_2__.createColoration),
/* harmony export */   createFocusedStyles: () => (/* binding */ createFocusedStyles),
/* harmony export */   createFooter: () => (/* reexport safe */ _coloration__WEBPACK_IMPORTED_MODULE_2__.createFooter),
/* harmony export */   createHeader: () => (/* reexport safe */ _coloration__WEBPACK_IMPORTED_MODULE_2__.createHeader),
/* harmony export */   createLink: () => (/* reexport safe */ _coloration__WEBPACK_IMPORTED_MODULE_2__.createLink),
/* harmony export */   formValidation: () => (/* binding */ formValidation),
/* harmony export */   getBoxInterpolationStyles: () => (/* binding */ getBoxInterpolationStyles),
/* harmony export */   getBoxStyles: () => (/* binding */ getBoxStyles),
/* harmony export */   hover: () => (/* binding */ hover),
/* harmony export */   hoverFocus: () => (/* binding */ hoverFocus),
/* harmony export */   navDivider: () => (/* binding */ navDivider),
/* harmony export */   popperPointer: () => (/* reexport safe */ _pointer__WEBPACK_IMPORTED_MODULE_1__.popperPointer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _pointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointer */ "./jimu-theme/lib/classic/utils/pointer.ts");
/* harmony import */ var _coloration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coloration */ "./jimu-theme/lib/classic/utils/coloration.ts");

const toCSSTextUnderLine = (text) => {
    if (!text) {
        return 'none';
    }
    if (text.underline && text.strike) {
        return 'underline line-through';
    }
    else if (text.underline) {
        return 'underline';
    }
    else if (text.strike) {
        return 'line-through';
    }
    return 'none';
};
/** get common styles for an HTML element as a CSS basic box model */
function getBoxStyles(variables) {
    var _a, _b;
    return variables && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    color: ${variables.color};
    background-color: ${variables.bg};
    ${variables.border && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      border-width: ${variables.border.width};
      ${variables.border.width && `border-style: ${(_b = (_a = variables.border) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'solid'};`}
      border-color: ${variables.border.color};
    `}
    border-radius: ${variables.borderRadius};
    box-shadow: ${variables.shadow};
    font-weight: ${variables.bold ? 'bold' : variables.fontWeight};
    text-decoration: ${variables.decoration || toCSSTextUnderLine(variables)};
    font-style: ${variables.italic ? 'italic' : 'normal'};
  `;
}
/** get common interpolation styles for an HTML element as a CSS basic box model */
function getBoxInterpolationStyles(variables) {
    var _a, _b;
    return variables && `
    color: ${variables.color};
    background-color: ${variables.bg};
    ${variables.border && `
      border-width: ${variables.border.width};
      ${variables.border.width && `border-style: ${(_b = (_a = variables.border) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'solid'};`}
      border-color: ${variables.border.color};
    `}
    border-radius: ${variables.borderRadius};
    box-shadow: ${variables.shadow};
    font-weight: ${variables.bold ? 'bold' : variables.fontWeight};
    text-decoration: ${variables.decoration || toCSSTextUnderLine(variables)};
    font-style: ${variables.italic ? 'italic' : 'normal'};
  `;
}
const ROTATIONMAPPING = {
    up: '180deg',
    down: null,
    left: '90deg',
    right: '-90deg'
};
function caret(direction) {
    const rotationDeg = ROTATIONMAPPING[direction];
    return `
    ${rotationDeg && `
      transform: rotate(${rotationDeg});
    `}
  `;
}
function hover(content) {
    return `
    &:hover {
      ${content}
    }
  `;
}
function hoverFocus(content) {
    return `
    &:hover,
    &:focus {
      ${content}
    }
  `;
}
function navDivider(color, margin) {
    return `
    height: 0;
    margin: ${margin};
    overflow: hidden;
    border-top: 1px solid ${color};
  `;
}
function formValidation(isValid, theme) {
    const stateColor = theme && theme.colors
        ? isValid ? theme.colors.success : theme.colors.danger
        : isValid ? 'green' : 'red';
    const baseClassName = isValid ? 'valid' : 'invalid';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  &.is-${baseClassName} {
    border-color: ${stateColor || (isValid ? 'green' : 'red')};
    ${!isValid && `background: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(stateColor, 0.1)}`};
  }
  `;
}
const createFocusedStyles = (colors) => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        color: colors.palette.primary[700],
        width: '2px',
        offset: '2px'
    });
};




/***/ }),

/***/ "./jimu-theme/lib/classic/utils/pointer.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/classic/utils/pointer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popperPointer: () => (/* binding */ popperPointer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const oppositePosition = {
    left: 'right',
    right: 'left',
    top: 'bottom',
    bottom: 'top'
};
function opposite(position, isRTL) {
    if (!isRTL) {
        return oppositePosition[position];
    }
    return (position === 'left' || position === 'right') ? position : oppositePosition[position];
}
function flipPlacement(position, isRTL) {
    if (!isRTL)
        return position;
    if (position === 'left')
        return 'right';
    if (position === 'right')
        return 'left';
    return position;
}
function popperPointer(arrowStyle) {
    var _a;
    const placements = ['left', 'right', 'top', 'bottom'];
    const isRTL = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.isRTL;
    const border = arrowStyle === null || arrowStyle === void 0 ? void 0 : arrowStyle.border;
    const background = arrowStyle === null || arrowStyle === void 0 ? void 0 : arrowStyle.background;
    const size = ((_a = arrowStyle === null || arrowStyle === void 0 ? void 0 : arrowStyle.size) !== null && _a !== void 0 ? _a : 12) + 'px';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .jimu-popper--arrow {
      position: absolute;
      &::before,
      &::after {
        content: " ";
        display: block;
        width: 0;
        height: 0;
        border: ${size} solid transparent;
        position: absolute;
      }
    }
    &[data-popper-placement^="top"],
    &[data-popper-placement^="bottom"] {
      .jimu-popper--arrow {
        ${isRTL ? 'right: 50%' : 'left: 50%'};
        &::before,
        &::after {
          transform: translateX(-50%);
        }
      }
    }
    &[data-popper-placement^="left"],
    &[data-popper-placement^="right"] {
      .jimu-popper--arrow {
        top: 50%;
        &::before,
        &::after {
          transform: translateY(-50%);
        }
      }
    }
    ${placements.map((placement) => {
        var _a, _b;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      &[data-popper-placement^="${placement}"] {
        .jimu-popper--arrow {
          ${opposite(placement, isRTL)}: -${size};
          &::before,
          &::after {
            border-${opposite(placement, isRTL)}-width: 0;
            border-${flipPlacement(placement, isRTL)}-color: ${(_a = border === null || border === void 0 ? void 0 : border.color) !== null && _a !== void 0 ? _a : 'inherit'};
            ${opposite(placement, isRTL)}: 0;
          }
          &::after {
            border-${flipPlacement(placement, isRTL)}-color: ${background !== null && background !== void 0 ? background : 'inherit'};
            ${opposite(placement, isRTL)}: ${(_b = border === null || border === void 0 ? void 0 : border.width) !== null && _b !== void 0 ? _b : '1px'};
          }
        }
      }
    `;
    })}
  `;
}


/***/ }),

/***/ "./jimu-theme/lib/index.ts":
/*!*********************************!*\
  !*** ./jimu-theme/lib/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion___WEBPACK_IMPORTED_MODULE_1__.CacheProvider),
/* harmony export */   ClassicThemeFirstContext: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ClassicThemeFirstContext),
/* harmony export */   CssBaseline: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.CssBaseline),
/* harmony export */   CssUtilitiesProvider: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.CssUtilitiesProvider),
/* harmony export */   CssVarsProvider: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.CssVarsProvider),
/* harmony export */   DefaultThemeSourceOptions: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.DefaultThemeSourceOptions),
/* harmony export */   FontLoader: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.FontLoader),
/* harmony export */   Global: () => (/* reexport safe */ _emotion___WEBPACK_IMPORTED_MODULE_1__.Global),
/* harmony export */   GlobalStyles: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles),
/* harmony export */   ReferencePaletteColorFullTones: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.ReferencePaletteColorFullTones),
/* harmony export */   ReferencePaletteColorTones: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.ReferencePaletteColorTones),
/* harmony export */   ReferencePaletteNeutralTones: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.ReferencePaletteNeutralTones),
/* harmony export */   SourceKeyColorNames: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.SourceKeyColorNames),
/* harmony export */   Theme2Context: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.Theme2Context),
/* harmony export */   Theme2GlobalStyleClassName: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.Theme2GlobalStyleClassName),
/* harmony export */   Theme2Style: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.Theme2Style),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion___WEBPACK_IMPORTED_MODULE_1__.ThemeContext),
/* harmony export */   ThemeManager: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ThemeManager),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider),
/* harmony export */   ThemeSpacingVariants: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.ThemeSpacingVariants),
/* harmony export */   ThemeStore: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ThemeStore),
/* harmony export */   ThemeSwitchComponent: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ThemeSwitchComponent),
/* harmony export */   ThemeSwitcher: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.ThemeSwitcher),
/* harmony export */   TypographyVariants: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.TypographyVariants),
/* harmony export */   UseTheme2Context: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.UseTheme2Context),
/* harmony export */   augmentColor: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.augmentColor),
/* harmony export */   augmentThemeColor: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.augmentThemeColor),
/* harmony export */   body: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.body),
/* harmony export */   caret: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.caret),
/* harmony export */   classesUtils: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.classesUtils),
/* harmony export */   classicCommonColors: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.classicCommonColors),
/* harmony export */   classicThemeColors: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.classicThemeColors),
/* harmony export */   colorUtils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils),
/* harmony export */   createBody: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createBody),
/* harmony export */   createClassicPalette: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createClassicPalette),
/* harmony export */   createClassicTheme: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createClassicTheme),
/* harmony export */   createColorScheme: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createColorScheme),
/* harmony export */   createColoration: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createColoration),
/* harmony export */   createColors: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createColors),
/* harmony export */   createEmotionCache: () => (/* reexport safe */ _emotion___WEBPACK_IMPORTED_MODULE_1__.createEmotionCache),
/* harmony export */   createEmotionRTLCache: () => (/* reexport safe */ _emotion___WEBPACK_IMPORTED_MODULE_1__.createEmotionRTLCache),
/* harmony export */   createFocusedStyles: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createFocusedStyles),
/* harmony export */   createFooter: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createFooter),
/* harmony export */   createHeader: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createHeader),
/* harmony export */   createLink: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.createLink),
/* harmony export */   createMixedTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.createMixedTheme),
/* harmony export */   createReference: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createReference),
/* harmony export */   createReferencePalette: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createReferencePalette),
/* harmony export */   createReferencePaletteColor: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createReferencePaletteColor),
/* harmony export */   createReferenceTypeface: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createReferenceTypeface),
/* harmony export */   createShadow: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createShadow),
/* harmony export */   createShape: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createShape),
/* harmony export */   createStyled: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createStyled),
/* harmony export */   createTheme: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createTheme),
/* harmony export */   createThemeOptions: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.createThemeOptions),
/* harmony export */   createUnarySpacing: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.createUnarySpacing),
/* harmony export */   defaultFonts: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.defaultFonts),
/* harmony export */   defaultTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.defaultTheme),
/* harmony export */   formValidation: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.formValidation),
/* harmony export */   getAppThemeManifest: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getAppThemeManifest),
/* harmony export */   getBoxInterpolationStyles: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.getBoxInterpolationStyles),
/* harmony export */   getBoxStyles: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.getBoxStyles),
/* harmony export */   getBuilderThemeVariables: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getBuilderThemeVariables),
/* harmony export */   getClassicThemeBaseLineStyles: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.getClassicThemeBaseLineStyles),
/* harmony export */   getClassicThemeCSSVars: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.getClassicThemeCSSVars),
/* harmony export */   getClassicThemeUtilities: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.getClassicThemeUtilities),
/* harmony export */   getClassicVarsMapping: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getClassicVarsMapping),
/* harmony export */   getComponentVariants: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getComponentVariants),
/* harmony export */   getFocusStyles: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getFocusStyles),
/* harmony export */   getLoadingStyles: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getLoadingStyles),
/* harmony export */   getNavigationVariables: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getNavigationVariables),
/* harmony export */   getQuillCoreStyle: () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_2__.getQuillCoreStyle),
/* harmony export */   getRegisteredStyle: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyle),
/* harmony export */   getSchemeColor: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.getSchemeColor),
/* harmony export */   getTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getTheme),
/* harmony export */   getTheme2: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getTheme2),
/* harmony export */   getTheme2Manifest: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getTheme2Manifest),
/* harmony export */   getTheme2Module: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getTheme2Module),
/* harmony export */   getTheme2Style: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getTheme2Style),
/* harmony export */   getThemeBaselineStyles: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.getThemeBaselineStyles),
/* harmony export */   getThemeColorValue: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getThemeColorValue),
/* harmony export */   getThemeManifest: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getThemeManifest),
/* harmony export */   getThemeModule: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getThemeModule),
/* harmony export */   getThemeStyle: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.getThemeStyle),
/* harmony export */   hover: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.hover),
/* harmony export */   hoverFocus: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.hoverFocus),
/* harmony export */   html: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.html),
/* harmony export */   isCSSVariable: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.isCSSVariable),
/* harmony export */   isThemeLoaded: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.isThemeLoaded),
/* harmony export */   loadFontStyleSheet: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.loadFontStyleSheet),
/* harmony export */   loadTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.loadTheme),
/* harmony export */   mapping: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.mapping),
/* harmony export */   navDivider: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.navDivider),
/* harmony export */   popperPointer: () => (/* reexport safe */ _classic__WEBPACK_IMPORTED_MODULE_4__.popperPointer),
/* harmony export */   registerStyle: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.registerStyle),
/* harmony export */   registerStyles: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.registerStyles),
/* harmony export */   setThemeModule: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.setThemeModule),
/* harmony export */   shouldForwardProp: () => (/* reexport safe */ _system__WEBPACK_IMPORTED_MODULE_5__.shouldForwardProp),
/* harmony export */   styled: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.styled),
/* harmony export */   themeOptionsUtils: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.themeOptionsUtils),
/* harmony export */   useMultiTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useMultiTheme),
/* harmony export */   useMultiThemeValue: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useMultiThemeValue),
/* harmony export */   useTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useTheme),
/* harmony export */   useTheme2: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useTheme2),
/* harmony export */   useThemeLoaded: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useThemeLoaded),
/* harmony export */   useThemeSwitching: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useThemeSwitching),
/* harmony export */   useUseTheme2: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.useUseTheme2),
/* harmony export */   utils: () => (/* reexport module object */ _utils__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   withBuilderTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.withBuilderTheme),
/* harmony export */   withStyles: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.withStyles),
/* harmony export */   withTheme: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.withTheme),
/* harmony export */   withTheme2: () => (/* reexport safe */ _manager__WEBPACK_IMPORTED_MODULE_3__.withTheme2)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./jimu-theme/lib/base/index.ts");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager */ "./jimu-theme/lib/manager/index.tsx");
/* harmony import */ var _classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classic */ "./jimu-theme/lib/classic/index.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system */ "./jimu-theme/lib/system/index.ts");










/***/ }),

/***/ "./jimu-theme/lib/manager/context/context.tsx":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/manager/context/context.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassicThemeFirstContext: () => (/* binding */ ClassicThemeFirstContext),
/* harmony export */   Theme2Context: () => (/* binding */ Theme2Context),
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),
/* harmony export */   ThemeSwitcher: () => (/* binding */ ThemeSwitcher),
/* harmony export */   UseTheme2Context: () => (/* binding */ UseTheme2Context),
/* harmony export */   useMultiTheme: () => (/* binding */ useMultiTheme),
/* harmony export */   useMultiThemeValue: () => (/* binding */ useMultiThemeValue),
/* harmony export */   useTheme: () => (/* binding */ useTheme),
/* harmony export */   useTheme2: () => (/* binding */ useTheme2),
/* harmony export */   useUseTheme2: () => (/* binding */ useUseTheme2)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");




const UseTheme2Context = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext(false);
UseTheme2Context.displayName = 'UseTheme2Context';
const ClassicThemeFirstContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext(true);
ClassicThemeFirstContext.displayName = 'ClassicThemeFirstContext';
/**
 * The sub-components can be switched between two themes.
 * Note: `ThemeSwitcher` can only be used in the app in the builder environment.
 */
const ThemeSwitcher = ({ children, useTheme2 = false }) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(UseTheme2Context.Provider, { value: useTheme2 }, children));
};
const Theme2Context = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext(null);
Theme2Context.displayName = 'Theme2Context';
const EmptyTheme = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
const ThemeProvider = (props) => {
    const { theme = EmptyTheme, theme2, children } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, { theme: theme },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Theme2Context.Provider, { value: theme2 },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(UseTheme2Context.Provider, { value: false }, children))));
};
/**
 * Whether to use theme2.
 */
const useUseTheme2 = () => {
    const useTheme2 = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(UseTheme2Context);
    if (useTheme2 && (!window.jimuConfig.isBuilder && !window.jimuConfig.isInBuilder)) {
        console.warn('`Theme2` is only allowed in builder or app-in-builder.');
    }
    return useTheme2;
};
/**
 * A React hook that provides the current theme as its value.
 * If the theme is updated, the child component will be re-rendered accordingly.
 */
const useTheme = () => {
    const useTheme2 = useUseTheme2();
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(useTheme2 ? Theme2Context : _emotion___WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
};
/**
 * A React hook that provides the theme2 as its value.
 * If the theme is updated, the child component will be re-rendered accordingly.
 */
const useTheme2 = () => {
    const useTheme2 = useUseTheme2();
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(useTheme2 ? _emotion___WEBPACK_IMPORTED_MODULE_1__.ThemeContext : Theme2Context);
};
/**
 * A React hook that get all theme values.
 */
const useMultiThemeValue = () => {
    const useTheme2 = useUseTheme2();
    let theme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(_emotion___WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
    theme = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyObj)(theme) ? _theme_module__WEBPACK_IMPORTED_MODULE_3__.defaultTheme : theme;
    const theme2 = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(Theme2Context);
    return { useTheme2, theme, theme2 };
};
/**
 * A React hook that provides the current theme as its value.
 * If the theme is updated, the child component will be re-rendered accordingly.
 */
const useMultiTheme = (multiTheme = false) => {
    const { useTheme2, theme, theme2 } = useMultiThemeValue();
    const themeProps = { useTheme2 };
    themeProps.theme = useTheme2 ? theme2 : theme;
    if (multiTheme) {
        themeProps.theme2 = useTheme2 ? theme : theme2;
    }
    return themeProps;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/context/index.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/context/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassicThemeFirstContext: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.ClassicThemeFirstContext),
/* harmony export */   Theme2Context: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.Theme2Context),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),
/* harmony export */   ThemeSwitchComponent: () => (/* reexport safe */ _theme_switch_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitchComponent),
/* harmony export */   ThemeSwitcher: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcher),
/* harmony export */   UseTheme2Context: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.UseTheme2Context),
/* harmony export */   useMultiTheme: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useMultiTheme),
/* harmony export */   useMultiThemeValue: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useMultiThemeValue),
/* harmony export */   useTheme: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useTheme),
/* harmony export */   useTheme2: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useTheme2),
/* harmony export */   useUseTheme2: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.useUseTheme2)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./jimu-theme/lib/manager/context/context.tsx");
/* harmony import */ var _theme_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-switch-component */ "./jimu-theme/lib/manager/context/theme-switch-component.tsx");




/***/ }),

/***/ "./jimu-theme/lib/manager/context/theme-switch-component.tsx":
/*!*******************************************************************!*\
  !*** ./jimu-theme/lib/manager/context/theme-switch-component.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitchComponent: () => (/* binding */ ThemeSwitchComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./jimu-theme/lib/manager/context/context.tsx");


/**
 * Used to create a context area that can switch between `theme` and `theme2`.
 */
const ThemeSwitchComponent = (props) => {
    const { useTheme2 = false, children } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_context__WEBPACK_IMPORTED_MODULE_1__.UseTheme2Context.Provider, { value: useTheme2 }, children));
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/base/bootstrap.ts":
/*!*********************************************************!*\
  !*** ./jimu-theme/lib/manager/global/base/bootstrap.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* binding */ bootstrap)
/* harmony export */ });
/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
const bootstrap = `
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff
}

[tabindex='-1']:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[role='button'] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type='radio'],
input[type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

/**
 * grid
 */

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1140px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*='col-'] {
  padding-right: 0;
  padding-left: 0;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}

.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.33333%;
}

.offset-2 {
  margin-left: 16.66667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333%;
}

.offset-5 {
  margin-left: 41.66667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333%;
}

.offset-8 {
  margin-left: 66.66667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333%;
}

.offset-11 {
  margin-left: 91.66667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-4 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-5 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-sm-6 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    order: -1;
  }
  .order-sm-last {
    order: 13;
  }
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-4 {
    order: 3;
  }
  .order-sm-5 {
    order: 4;
  }
  .order-sm-6 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333%;
  }
  .offset-sm-2 {
    margin-left: 16.66667%;
  }
  .offset-sm-4 {
    margin-left: 25%;
  }
  .offset-sm-5 {
    margin-left: 33.33333%;
  }
  .offset-sm-6 {
    margin-left: 41.66667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333%;
  }
  .offset-sm-8 {
    margin-left: 66.66667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333%;
  }
  .offset-sm-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-md-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    order: -1;
  }
  .order-md-last {
    order: 13;
  }
  .order-md-0 {
    order: 0;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333%;
  }
  .offset-md-2 {
    margin-left: 16.66667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333%;
  }
  .offset-md-5 {
    margin-left: 41.66667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333%;
  }
  .offset-md-8 {
    margin-left: 66.66667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333%;
  }
  .offset-md-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    order: -1;
  }
  .order-lg-last {
    order: 13;
  }
  .order-lg-0 {
    order: 0;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333%;
  }
  .offset-lg-2 {
    margin-left: 16.66667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333%;
  }
  .offset-lg-5 {
    margin-left: 41.66667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333%;
  }
  .offset-lg-8 {
    margin-left: 66.66667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333%;
  }
  .offset-lg-11 {
    margin-left: 91.66667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
  .col-xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    order: -1;
  }
  .order-xl-last {
    order: 13;
  }
  .order-xl-0 {
    order: 0;
  }
  .order-xl-1 {
    order: 1;
  }
  .order-xl-2 {
    order: 2;
  }
  .order-xl-3 {
    order: 3;
  }
  .order-xl-4 {
    order: 4;
  }
  .order-xl-5 {
    order: 5;
  }
  .order-xl-6 {
    order: 6;
  }
  .order-xl-7 {
    order: 7;
  }
  .order-xl-8 {
    order: 8;
  }
  .order-xl-9 {
    order: 9;
  }
  .order-xl-10 {
    order: 10;
  }
  .order-xl-11 {
    order: 11;
  }
  .order-xl-12 {
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333%;
  }
  .offset-xl-2 {
    margin-left: 16.66667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333%;
  }
  .offset-xl-5 {
    margin-left: 41.66667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333%;
  }
  .offset-xl-8 {
    margin-left: 66.66667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333%;
  }
  .offset-xl-11 {
    margin-left: 91.66667%;
  }
}

/**
 * transitions
 */

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.width {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.width {
    transition: none;
  }
}

/**
 * align
 */
.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

/**
 * clearfix
 */
.clearfix::after {
  display: block;
  clear: both;
  content: '';
}

/**
 * display
 */
.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
}

/**
 * embed
 */
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.embed-responsive::before {
  display: block;
  content: '';
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.85714%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

/**
 * flex
 */
.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}

/**
 * float
 */
.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
}

/**
 * overflow
 */
.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

/**
 * position
 */
.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

/**
 * Screenreaders
 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/**
 * sizing
 */
.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

/**
 * text
 */
.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}
`;


/***/ }),

/***/ "./jimu-theme/lib/manager/global/base/index.tsx":
/*!******************************************************!*\
  !*** ./jimu-theme/lib/manager/global/base/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseStyles: () => (/* binding */ BaseStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./jimu-theme/lib/manager/global/base/bootstrap.ts");



const BaseStyles = () => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.Global, { styles: _bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap });
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/classic-adapter/css-utilities.tsx":
/*!*************************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/classic-adapter/css-utilities.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssUtilitiesAdapter: () => (/* binding */ CssUtilitiesAdapter)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mapping */ "./jimu-theme/lib/manager/mapping/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");





const ClassicThemeColorsMap = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'danger',
    white: 'white',
    black: 'black',
    custom1: 'light',
    custom2: 'dark'
};
const ColorShades = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const paletteUtilities = (uri) => {
    const module = (0,_theme_module__WEBPACK_IMPORTED_MODULE_4__.getThemeModule)(uri, false);
    const isNewTheme = (0,_mapping__WEBPACK_IMPORTED_MODULE_2__.whetherIsNewTheme)(module);
    let utilities = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getTypeColorUtilities)('transparent', 'transparent');
    Object.entries(ClassicThemeColorsMap).forEach(([current, classic]) => {
        if (classic === 'light' || classic === 'dark') {
            ColorShades.forEach((shade) => {
                if (!isNewTheme) {
                    const classickey = `${classic}-${shade}`;
                    const currentCssVar = `var(--ref-palette-${current}-${shade})`;
                    utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getTypeColorUtilities)(classickey, currentCssVar));
                    const mainShade = classic === 'light' ? '100' : '900';
                    if (shade === mainShade) {
                        utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getTypeColorUtilities)(classic, currentCssVar));
                    }
                }
            });
        }
        else {
            let currentCssVar = `var(--sys-color-${current}-main)`;
            if (current === 'white' || current === 'black') {
                currentCssVar = `var(--ref-palette-${current})`;
            }
            utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getTypeColorUtilities)(classic, currentCssVar));
        }
    });
    return utilities;
};
const borderRadiusUtilities = (theme) => {
    const utilities = {
        '.rounded-sm': {
            borderRadius: `${theme.borderRadiuses.sm} !important`
        },
        '.rounded': {
            borderRadius: 'var(--sys-shape-1) !important'
        },
        '.rounded-lg': {
            borderRadius: 'var(--sys-shape-2) !important'
        },
        '.rounded-circle': {
            borderRadius: `${theme.borderRadiuses.circle} !important`
        },
        '.rounded-pill': {
            borderRadius: `${theme.borderRadiuses.pill} !important`
        }
    };
    return utilities;
};
const shadowUtilities = () => {
    const utilities = {
        '.shadow-none': {
            boxShadow: 'none !important'
        },
        '.shadow-sm': {
            boxShadow: 'var(--sys-shadow-1) !important'
        },
        '.shadow-lg': {
            boxShadow: 'var(--sys-shadow-3) !important'
        }
    };
    return utilities;
};
const settingTextLevelUtilities = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const utilities = {};
    utilities['.setting-text-level-0'] = {
        fontSize: '14px !important',
        color: `${(_b = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark[800]} !important`,
        fontWeight: `${(_c = theme.typography) === null || _c === void 0 ? void 0 : _c.weights.bold} !important`
    };
    utilities['.setting-text-level-1'] = {
        fontSize: '14px !important',
        color: `${(_e = (_d = theme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.dark[600]} !important`,
        fontWeight: `${(_f = theme.typography) === null || _f === void 0 ? void 0 : _f.weights.bold} !important`
    };
    utilities['.setting-text-level-2'] = {
        fontSize: '13px !important',
        color: `${(_h = (_g = theme.colors) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.dark[600]} !important`,
        fontWeight: `${(_j = theme.typography) === null || _j === void 0 ? void 0 : _j.weights.bold} !important`
    };
    utilities['.setting-text-level-3'] = {
        fontSize: '13px !important',
        color: `${(_l = (_k = theme.colors) === null || _k === void 0 ? void 0 : _k.palette) === null || _l === void 0 ? void 0 : _l.dark[400]} !important`,
        fontWeight: `${(_m = theme.typography) === null || _m === void 0 ? void 0 : _m.weights.bold} !important`
    };
    return utilities;
};
const typographyUtilities = (theme) => {
    const typography = theme === null || theme === void 0 ? void 0 : theme.typography;
    let utilities = settingTextLevelUtilities(theme);
    Object.keys(typography.colors).forEach((key) => {
        utilities[`.text-${key}${key === 'disabled' ? ', .text-muted' : ''}`] = {
            color: `${typography.colors[key]} !important`
        };
    });
    utilities = Object.assign(Object.assign({}, utilities), { '.text-title': {
            color: `${typography.colors.title} !important`
        }, '.text-normal': {
            color: `${typography.colors.normal} !important`
        }, '.text-caption': {
            color: `${typography.colors.caption} !important`
        }, '.text-disabled, .text-muted': {
            color: `${typography.colors.disabled} !important`
        }, 'h1, .font-h1': {
            fontFamily: 'var(--sys-typography-h1-font-family)',
            fontWeight: 'var(--sys-typography-h1-font-weight)',
            fontSize: 'var(--sys-typography-h1-font-size)',
            lineHeight: 'var(--sys-typography-h1-line-height)',
            color: typography.colors.title
        }, 'h2, .font-h2': {
            fontFamily: 'var(--sys-typography-h2-font-family)',
            fontWeight: 'var(--sys-typography-h2-font-weight)',
            fontSize: 'var(--sys-typography-h2-font-size)',
            lineHeight: 'var(--sys-typography-h2-line-height)',
            color: typography.colors.title
        }, 'h3, .font-h3': {
            fontFamily: 'var(--sys-typography-h3-font-family)',
            fontWeight: 'var(--sys-typography-h3-font-weight)',
            fontSize: 'var(--sys-typography-h3-font-size)',
            lineHeight: 'var(--sys-typography-h3-line-height)',
            color: typography.colors.title
        }, 'h4, .font-h4': {
            fontFamily: 'var(--sys-typography-h4-font-family)',
            fontWeight: 'var(--sys-typography-h4-font-weight)',
            fontSize: 'var(--sys-typography-h4-font-size)',
            lineHeight: 'var(--sys-typography-h4-line-height)',
            color: typography.colors.title
        }, 'h5, .font-h5': {
            fontFamily: 'var(--sys-typography-h5-font-family)',
            fontWeight: 'var(--sys-typography-h5-font-weight)',
            fontSize: 'var(--sys-typography-h5-font-size)',
            lineHeight: 'var(--sys-typography-h5-line-height)',
            color: typography.colors.title
        }, 'h6, .font-h6': {
            fontFamily: 'var(--sys-typography-h6-font-family)',
            fontWeight: 'var(--sys-typography-h6-font-weight)',
            fontSize: 'var(--sys-typography-h6-font-size)',
            lineHeight: 'var(--sys-typography-h6-line-height)',
            color: typography.colors.title
        }, '.font-body1': {
            fontFamily: 'var(--sys-typography-body1-font-family)',
            fontWeight: 'var(--sys-typography-body1-font-weight)',
            fontSize: 'var(--sys-typography-body1-font-size)',
            lineHeight: 'var(--sys-typography-body1-line-height)',
            color: typography.colors.normal
        }, '.font-body2': {
            fontFamily: 'var(--sys-typography-body2-font-family)',
            fontWeight: 'var(--sys-typography-body2-font-weight)',
            fontSize: 'var(--sys-typography-body2-font-size)',
            lineHeight: 'var(--sys-typography-body2-line-height)',
            color: typography.colors.normal
        }, '.font-caption1': {
            fontFamily: 'var(--sys-typography-label2-font-family)',
            fontWeight: 'var(--sys-typography-label2-font-weight)',
            fontSize: 'var(--sys-typography-label2-font-size)',
            lineHeight: 'var(--sys-typography-label2-line-height)',
            color: typography.colors.caption
        }, '.font-caption2': {
            fontFamily: 'var(--sys-typography-label3-font-family)',
            fontWeight: 'var(--sys-typography-label3-font-weight)',
            fontSize: 'var(--sys-typography-label3-font-size)',
            lineHeight: 'var(--sys-typography-label3-line-height)',
            color: typography.colors.caption
        } });
    return utilities;
};
const surfacesUtilities = (theme) => {
    const surfaces = theme === null || theme === void 0 ? void 0 : theme.surfaces;
    const utilities = {};
    Object.entries(surfaces).forEach(([level, value]) => {
        var _a, _b;
        const ruleName = `.surface-${level}`;
        const cssValue = {};
        if (value === null || value === void 0 ? void 0 : value.bg) {
            cssValue.backgroundColor = `${value.bg} !important;`;
        }
        if (value === null || value === void 0 ? void 0 : value.border) {
            cssValue.border = `${value.border.color} ${(_a = value.border.style) !== null && _a !== void 0 ? _a : 'solid'} ${(_b = value.border.width) !== null && _b !== void 0 ? _b : '1px'} !important;`;
        }
        if (value === null || value === void 0 ? void 0 : value.shadow) {
            cssValue.boxShadow = `${value.shadow} !important;`;
        }
        utilities[ruleName] = cssValue;
    });
    return utilities;
};
const cssUtilities = (uri, theme) => {
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, paletteUtilities(uri)), shadowUtilities()), borderRadiusUtilities(theme)), typographyUtilities(theme)), surfacesUtilities(theme));
};
const CssUtilitiesAdapter = (props) => {
    const { theme, uri } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => cssUtilities(uri, theme), [theme, uri]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, theme && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { theme: theme, styles: styles })));
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/classic-adapter/css-vars.tsx":
/*!********************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/classic-adapter/css-vars.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssVarsAdapter: () => (/* binding */ CssVarsAdapter),
/* harmony export */   getClassicVarsMapping: () => (/* binding */ getClassicVarsMapping)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mapping */ "./jimu-theme/lib/manager/mapping/index.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");




const ClassicThemeColorsMap = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'danger',
    custom1: 'light',
    custom2: 'dark'
};
const ColorShades = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
const paletteVars = (uri) => {
    const vars = {
        '--transparent': 'transparent',
        '--white': 'var(--ref-palette-white)',
        '--black': 'var(--ref-palette-black)'
    };
    const module = (0,_theme_module__WEBPACK_IMPORTED_MODULE_3__.getThemeModule)(uri);
    const isNewTheme = (0,_mapping__WEBPACK_IMPORTED_MODULE_2__.whetherIsNewTheme)(module);
    Object.entries(ClassicThemeColorsMap).forEach(([current, classic]) => {
        ColorShades.forEach((shade) => {
            const valid = current.includes('custom') ? !isNewTheme : true;
            if (valid) {
                const classickey = `--${classic}-${shade}`;
                const currentCssVar = `var(--ref-palette-${current}-${shade})`;
                if (classic === 'light' || classic === 'dark') {
                    const mainShade = classic === 'light' ? '100' : '900';
                    if (shade === mainShade) {
                        vars[`--${classic}`] = currentCssVar;
                    }
                }
                else {
                    if (shade === '500') {
                        const mainCssVar = `var(--sys-color-${current}-main)`;
                        vars[`--${classic}`] = mainCssVar;
                    }
                }
                vars[classickey] = currentCssVar;
            }
        });
    });
    return vars;
};
const sharedThemeVars = () => {
    const vars = {
        '--org-header-bg': 'var(--mixin-shared-theme-header-bg)',
        '--org-header-color': 'var(--mixin-shared-theme-header-color)',
        '--org-body-bg': 'var(--mixin-shared-theme-body-bg)',
        '--org-body-color': 'var(--mixin-shared-theme-body-color)',
        '--org-body-link': 'var(--mixin-shared-theme-body-link)',
        '--org-button-bg': 'var(--mixin-shared-theme-button-bg)',
        '--org-button-color': 'var(--mixin-shared-theme-button-color)'
    };
    return vars;
};
const getClassicVarsMapping = (uri) => {
    return Object.assign(Object.assign({}, paletteVars(uri)), sharedThemeVars());
};
const CssVarsAdapter = (props) => {
    const { theme, uri } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => ({
        ':root': getClassicVarsMapping(uri)
    }), [uri]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, theme && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { theme: theme, styles: styles })));
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/classic-adapter/index.tsx":
/*!*****************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/classic-adapter/index.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassicThemeAdapter: () => (/* binding */ ClassicThemeAdapter),
/* harmony export */   getClassicVarsMapping: () => (/* reexport safe */ _css_vars__WEBPACK_IMPORTED_MODULE_1__.getClassicVarsMapping)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-vars */ "./jimu-theme/lib/manager/global/classic-adapter/css-vars.tsx");
/* harmony import */ var _css_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-utilities */ "./jimu-theme/lib/manager/global/classic-adapter/css-utilities.tsx");



const ClassicThemeAdapter = (props) => {
    const { theme, uri } = props;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_css_vars__WEBPACK_IMPORTED_MODULE_1__.CssVarsAdapter, { theme: theme, uri: uri }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_css_utilities__WEBPACK_IMPORTED_MODULE_2__.CssUtilitiesAdapter, { theme: theme, uri: uri }));
};



/***/ }),

/***/ "./jimu-theme/lib/manager/global/font-loader/index.tsx":
/*!*************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/font-loader/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontLoader: () => (/* binding */ FontLoader),
/* harmony export */   defaultFonts: () => (/* binding */ defaultFonts),
/* harmony export */   loadFontStyleSheet: () => (/* binding */ loadFontStyleSheet)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _base_assets_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/assets/fonts */ "./jimu-theme/lib/base/assets/fonts/index.tsx");



const defaultFonts = [
    'Avenir Next',
    'Calibri',
    'PmingLiu',
    'Impact',
    'Georgia',
    'Arial',
    'Times New Roman',
    'SimHei',
    'Microsoft YaHei'
];
const fontStyle = (0,_base_assets_fonts__WEBPACK_IMPORTED_MODULE_2__.getFontFaces)();
const CacheFonts = {};
const loadFontStyleSheet = (font) => {
    const { name, url } = font;
    if (CacheFonts[name])
        return Promise.resolve(CacheFonts[name]);
    return fetch(url).then(() => {
        CacheFonts[name] = name;
        return name;
    });
};
const FontLoader = (props) => {
    var _a;
    const { theme } = props;
    const customFonts = (_a = theme.ref.typeface) === null || _a === void 0 ? void 0 : _a.customFonts;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const promises = customFonts === null || customFonts === void 0 ? void 0 : customFonts.map(customFont => loadFontStyleSheet(customFont));
        if (promises === null || promises === void 0 ? void 0 : promises.length) {
            Promise.all(promises).then(() => {
            }).catch(error => {
                console.log(error);
            });
        }
    }, [customFonts]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { theme: theme, styles: fontStyle }));
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/index.tsx":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/global/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontLoader: () => (/* reexport safe */ _font_loader__WEBPACK_IMPORTED_MODULE_4__.FontLoader),
/* harmony export */   GlobalStyles: () => (/* binding */ GlobalStyles),
/* harmony export */   Theme2GlobalStyleClassName: () => (/* reexport safe */ _theme2__WEBPACK_IMPORTED_MODULE_2__.Theme2GlobalStyleClassName),
/* harmony export */   Theme2Style: () => (/* reexport safe */ _theme2__WEBPACK_IMPORTED_MODULE_2__.Theme2Style),
/* harmony export */   defaultFonts: () => (/* reexport safe */ _font_loader__WEBPACK_IMPORTED_MODULE_4__.defaultFonts),
/* harmony export */   getClassicVarsMapping: () => (/* reexport safe */ _classic_adapter__WEBPACK_IMPORTED_MODULE_6__.getClassicVarsMapping),
/* harmony export */   loadFontStyleSheet: () => (/* reexport safe */ _font_loader__WEBPACK_IMPORTED_MODULE_4__.loadFontStyleSheet)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./jimu-theme/lib/manager/global/base/index.tsx");
/* harmony import */ var _theme2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme2 */ "./jimu-theme/lib/manager/global/theme2/index.tsx");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixin */ "./jimu-theme/lib/manager/global/mixin/index.tsx");
/* harmony import */ var _font_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-loader */ "./jimu-theme/lib/manager/global/font-loader/index.tsx");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../system */ "./jimu-theme/lib/system/index.ts");
/* harmony import */ var _classic_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classic-adapter */ "./jimu-theme/lib/manager/global/classic-adapter/index.tsx");







const GlobalStyles = (props) => {
    var _a, _b;
    const { module, module2, isRTL = false } = props;
    const uri = module === null || module === void 0 ? void 0 : module.uri;
    const style = (_b = (_a = module === null || module === void 0 ? void 0 : module.manifest) === null || _a === void 0 ? void 0 : _a.styleFiles) === null || _b === void 0 ? void 0 : _b.css;
    const theme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => { var _a; return (_a = module === null || module === void 0 ? void 0 : module.theme) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true }); }, [module === null || module === void 0 ? void 0 : module.theme]);
    const theme2 = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => { var _a; return (_a = module2 === null || module2 === void 0 ? void 0 : module2.theme) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true }); }, [module2 === null || module2 === void 0 ? void 0 : module2.theme]);
    const themeStyleSheet = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (!style)
            return;
        return isRTL ? `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getFixedRootPath()}${uri}/style-rtl.css` : `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getFixedRootPath()}${uri}/style.css`;
    }, [style, isRTL, uri]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_base__WEBPACK_IMPORTED_MODULE_1__.BaseStyles, null),
        theme &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                themeStyleSheet && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: themeStyleSheet }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_font_loader__WEBPACK_IMPORTED_MODULE_4__.FontLoader, { theme: theme }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_mixin__WEBPACK_IMPORTED_MODULE_3__.MixinStyles, { theme: theme }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_theme2__WEBPACK_IMPORTED_MODULE_2__.Theme2Style, { theme2: theme2 }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_system__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, { theme: theme }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_system__WEBPACK_IMPORTED_MODULE_5__.CssVarsProvider, { theme: theme }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_system__WEBPACK_IMPORTED_MODULE_5__.CssUtilitiesProvider, { theme: theme }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_classic_adapter__WEBPACK_IMPORTED_MODULE_6__.ClassicThemeAdapter, { theme: theme, uri: uri }))));
};





/***/ }),

/***/ "./jimu-theme/lib/manager/global/mixin/arcgis-charts.ts":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/mixin/arcgis-charts.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chartComponentsStyles: () => (/* binding */ chartComponentsStyles)
/* harmony export */ });
const chartComponentsStyles = `
  :root, :host {
    --arcgis-charts-bar-chart-width: 100%;
    --arcgis-charts-bar-chart-height: 100%;
    --arcgis-charts-pie-chart-width: 100%;
    --arcgis-charts-pie-chart-height: 100%;
    --arcgis-charts-line-chart-width: 100%;
    --arcgis-charts-line-chart-height: 100%;
    --arcgis-charts-histogram-width: 100%;
    --arcgis-charts-histogram-height: 100%;
    --arcgis-charts-scatter-plot-width: 100%;
    --arcgis-charts-scatter-plot-height: 100%;
  }
`;


/***/ }),

/***/ "./jimu-theme/lib/manager/global/mixin/arcgis-components.ts":
/*!******************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/mixin/arcgis-components.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arcgisComponentsStyles: () => (/* binding */ arcgisComponentsStyles)
/* harmony export */ });
/* harmony import */ var _classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../classic */ "./jimu-theme/lib/classic/index.ts");

function getStylesByStates(variablesByState) {
    return `
    ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(variablesByState === null || variablesByState === void 0 ? void 0 : variablesByState.default)};
    &:hover {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(variablesByState === null || variablesByState === void 0 ? void 0 : variablesByState.hover)};
    }
    &:disabled,
    &.esri-disabled {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(variablesByState === null || variablesByState === void 0 ? void 0 : variablesByState.disabled)};
    }
    &.active {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(variablesByState === null || variablesByState === void 0 ? void 0 : variablesByState.active)};
    }
    &:focus {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(variablesByState === null || variablesByState === void 0 ? void 0 : variablesByState.focus)};
      outline: none;
    }
  `;
}
function overridePopupStyle(arcgisPanelVars) {
    const styles = [];
    if (arcgisPanelVars) {
        if (arcgisPanelVars.bg) {
            // override popup background color
            styles.push(`--calcite-ui-foreground-1: ${arcgisPanelVars.bg};`);
        }
        if (arcgisPanelVars.color) {
            // override popup title color
            styles.push(`--calcite-ui-text-2: ${arcgisPanelVars.color};`);
            // override popup icon color
            styles.push(`--calcite-ui-text-3: ${arcgisPanelVars.color};`);
        }
    }
    return styles.join(' ');
}
const arcgisComponentsStyles = (theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67;
    const arcgisVars = theme === null || theme === void 0 ? void 0 : theme.arcgis;
    const arcgisButtonVars = (_a = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _a === void 0 ? void 0 : _a.button;
    const { default: buttonDefaultVariant, secondary: buttonSecondaryVariant, tertiary: buttonTertiaryVariant } = (_b = arcgisButtonVars === null || arcgisButtonVars === void 0 ? void 0 : arcgisButtonVars.variants) !== null && _b !== void 0 ? _b : {};
    const arcgisInputVars = (_c = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _c === void 0 ? void 0 : _c.input;
    const arcgisMenuVars = (_d = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _d === void 0 ? void 0 : _d.menu;
    const arcgisPanelVars = (_e = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _e === void 0 ? void 0 : _e.panel;
    const arcgisTableVars = (_f = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _f === void 0 ? void 0 : _f.table;
    const arcgisUpdatingIndicatorVars = (_g = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.components) === null || _g === void 0 ? void 0 : _g.updatingIndicator;
    const arcgisLayerListVars = (_h = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.widgets) === null || _h === void 0 ? void 0 : _h.layerlist;
    const arcgisLegendVars = (_j = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.widgets) === null || _j === void 0 ? void 0 : _j.legend;
    const arcgisBasemapGalleryVars = (_k = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.widgets) === null || _k === void 0 ? void 0 : _k.basemapGallery;
    const arcgisMeasureVars = (_l = arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.widgets) === null || _l === void 0 ? void 0 : _l.measure;
    const buttonVars = (_m = theme === null || theme === void 0 ? void 0 : theme.components) === null || _m === void 0 ? void 0 : _m.button;
    const { primary: themeButtonPrimaryVariant, link: themeButtonLinkVariant } = (_o = buttonVars === null || buttonVars === void 0 ? void 0 : buttonVars.variants) !== null && _o !== void 0 ? _o : {};
    return `
    .esri-button,
    .esri-widget--button,
    .esri-popup__button,
    .esri-sketch__button {
      ${getStylesByStates(buttonDefaultVariant)}
    }
    .esri-disabled .esri-widget--button {
      > * {
        color: ${(_p = buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.disabled) === null || _p === void 0 ? void 0 : _p.color};
      }
    }
    .esri-button--secondary {
      ${getStylesByStates(buttonSecondaryVariant)}
    }
    .esri-input,
    .esri-select {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisInputVars)};
      &:focus {
        border-color: ${(_q = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.focus) === null || _q === void 0 ? void 0 : _q.borderColor};
        outline: none;
      }
      &::placeholder {
        color: ${arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.placeHolderColor};
      }
    }
    .esri-select {
    }
    .esri-menu {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisMenuVars)}
      font-size: inherit;
      line-height: 1;
    }
    .esri-menu__list-item {
      &,
      &:focus {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_r = arcgisMenuVars === null || arcgisMenuVars === void 0 ? void 0 : arcgisMenuVars.item) === null || _r === void 0 ? void 0 : _r.default)};
      }
      &:hover {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_s = arcgisMenuVars === null || arcgisMenuVars === void 0 ? void 0 : arcgisMenuVars.item) === null || _s === void 0 ? void 0 : _s.hover)};
      }
      &:active {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_t = arcgisMenuVars === null || arcgisMenuVars === void 0 ? void 0 : arcgisMenuVars.item) === null || _t === void 0 ? void 0 : _t.active)};
      }
    }
    .esri-menu__list-item--active,
    .esri-menu__list-item--active:hover,
    .esri-menu__list-item--active:focus {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_u = arcgisMenuVars === null || arcgisMenuVars === void 0 ? void 0 : arcgisMenuVars.item) === null || _u === void 0 ? void 0 : _u.active)};
    }

    /*
    * ArcGIS API 4.x Widgets:
    */

    /* General */

    /* Heading */
    .esri-widget__heading {
      color: ${(_w = (_v = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _v === void 0 ? void 0 : _v.colors) === null || _w === void 0 ? void 0 : _w.title};
    }

    /* Table */
    .esri-widget__table {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisTableVars === null || arcgisTableVars === void 0 ? void 0 : arcgisTableVars.root)}
    }
    .esri-layer-list__item--updating {
      &:before {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.bg};
      }
      &:after {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.progress};
      }
    }

    /* Toggle */
    .esri-navigation-toggle {
      .esri-navigation-toggle__button:hover {
        color: ${(_x = buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.hover) === null || _x === void 0 ? void 0 : _x.color};
      }

      &.esri-disabled {
        .esri-navigation-toggle__button {
          ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(buttonDefaultVariant.disabled)};
          + .esri-navigation-toggle__button {
            margin-top: -${(_0 = (_z = (_y = buttonDefaultVariant.default) === null || _y === void 0 ? void 0 : _y.border) === null || _z === void 0 ? void 0 : _z.width) !== null && _0 !== void 0 ? _0 : '0'};
          }
        }
      }
    }
    .esri-navigation-toggle__button {
      &:before {
        border-right-color: ${(_1 = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _1 === void 0 ? void 0 : _1.primary};
      }
      + .esri-navigation-toggle__button {
        margin-top: -${(_4 = (_3 = (_2 = buttonDefaultVariant.default) === null || _2 === void 0 ? void 0 : _2.border) === null || _3 === void 0 ? void 0 : _3.width) !== null && _4 !== void 0 ? _4 : '0'};
      }
    }

    /* zoom */
    .esri-zoom .esri-widget--button:last-child {
      border-top: 0;
    }
    /* Search */
    .esri-search {
      /* padding: ${(_5 = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _5 === void 0 ? void 0 : _5[4]}; */
      .esri-search__container {
        > .esri-widget--button {
          background-color: ${arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.bg};
          ${(arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) && `border: ${(_6 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _6 === void 0 ? void 0 : _6.color} solid ${(_7 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _7 === void 0 ? void 0 : _7.width};`}
        }
      }
      .esri-search__input-container {
        margin-left: -1px;
        margin-right: -1px;
        .esri-search__input {
          text-overflow: ellipsis;
          padding-right: 32px; /* the width of the clear button */
          ${(arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.focus) && `&:focus {
            border: ${(_8 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.focus) === null || _8 === void 0 ? void 0 : _8.borderColor} solid ${(_10 = (_9 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _9 === void 0 ? void 0 : _9.width) !== null && _10 !== void 0 ? _10 : '1px'};
          }`}
        }
        .esri-search__clear-button {
          position: absolute;
          right: 32px;
          top: ${(_12 = (_11 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _11 === void 0 ? void 0 : _11.width) !== null && _12 !== void 0 ? _12 : 0};
          height: calc(32px - ${(_14 = (_13 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _13 === void 0 ? void 0 : _13.width) !== null && _14 !== void 0 ? _14 : 0} * 2);
          z-index: 1;
          background-color: ${arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.bg};
        }
      }
      .esri-search--multiple-sources {
        .esri-search__sources-button {
          z-index: 1;
          border-right: 0;
          margin-right: -${(_15 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _15 === void 0 ? void 0 : _15.width};
        }
        .esri-search__input {
          border-left: ${(_16 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _16 === void 0 ? void 0 : _16.width} solid transparent;
          border-right: ${(_17 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.border) === null || _17 === void 0 ? void 0 : _17.width} solid transparent;
          &:focus {
            border-color: ${(_18 = arcgisInputVars === null || arcgisInputVars === void 0 ? void 0 : arcgisInputVars.focus) === null || _18 === void 0 ? void 0 : _18.borderColor};
          }
        }
      }
    }

    /* Popup */
    .esri-popup__main-container {
      ${overridePopupStyle(arcgisPanelVars)}
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisPanelVars)}

      .esri-widget {
        font-family: inherit;
        background-color: transparent;
        color: inherit;
      }
      .esri-widget--panel {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisPanelVars)}
      }
    }
    .esri-popup__pointer-direction {
      background-color: ${arcgisPanelVars === null || arcgisPanelVars === void 0 ? void 0 : arcgisPanelVars.bg};
    }
    .esri-popup__navigation {
      background: transparent;
    }

    /* Layer List */
    .esri-layer-list {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.root)}
      calcite-list {
        calcite-action[slot="actions-start"].esri-layer-list__visible-toggle {
          --calcite-color-text-1: ${(_19 = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _19 === void 0 ? void 0 : _19.primary};
          --calcite-color-text-3: ${(_20 = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _20 === void 0 ? void 0 : _20.primary};
        }
        calcite-list-item {
          div.esri-layer-list__item-content {
            font-family: ${theme === null || theme === void 0 ? void 0 : theme.typography.fontFamilyBase};
          }
        }
      }
    }
    .esri-layer-list__item {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_21 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.item) === null || _21 === void 0 ? void 0 : _21.default)}
    }
    .esri-layer-list__item-container {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
    }
    .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
      color: ${(_23 = (_22 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.item) === null || _22 === void 0 ? void 0 : _22.disabled) === null || _23 === void 0 ? void 0 : _23.color}
    }
    .esri-layer-list__item-actions {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_24 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _24 === void 0 ? void 0 : _24.root)}
      margin: 0;
    }
    .esri-layer-list__item-action {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_26 = (_25 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _25 === void 0 ? void 0 : _25.item) === null || _26 === void 0 ? void 0 : _26.default)}
      &:hover {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_28 = (_27 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _27 === void 0 ? void 0 : _27.item) === null || _28 === void 0 ? void 0 : _28.hover)}
      }
    }
    .esri-layer-list__item-actions-list {
      border-color: ${(_30 = (_29 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _29 === void 0 ? void 0 : _29.separator) === null || _30 === void 0 ? void 0 : _30.color};
      border-width: ${(_32 = (_31 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _31 === void 0 ? void 0 : _31.separator) === null || _32 === void 0 ? void 0 : _32.width};
      padding: 0;
    }
    .esri-layer-list__item-actions-menu {
      padding: 0.25rem;
      margin-top: -0.25rem;
    }
    .esri-layer-list__item-toggle,
    .esri-layer-list__child-toggle,
    .esri-layer-list__item-actions-menu-item {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_33 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.icon) === null || _33 === void 0 ? void 0 : _33.default)}
      &:hover {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_34 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.icon) === null || _34 === void 0 ? void 0 : _34.hover)}
      }
    }
    .esri-layer-list__item-actions-menu-item--active {
      &, &:hover {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_36 = (_35 = arcgisLayerListVars === null || arcgisLayerListVars === void 0 ? void 0 : arcgisLayerListVars.actionsList) === null || _35 === void 0 ? void 0 : _35.item) === null || _36 === void 0 ? void 0 : _36.active)}
      }
    }

    /* Legend */
    .esri-legend {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_38 = (_37 = arcgisLegendVars === null || arcgisLegendVars === void 0 ? void 0 : arcgisLegendVars.variants) === null || _37 === void 0 ? void 0 : _37.default) === null || _38 === void 0 ? void 0 : _38.root)}
    }
    .esri-widget__heading {
      color: inherit;
    }
    .esri-legend--card {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_40 = (_39 = arcgisLegendVars === null || arcgisLegendVars === void 0 ? void 0 : arcgisLegendVars.variants) === null || _39 === void 0 ? void 0 : _39.card) === null || _40 === void 0 ? void 0 : _40.root)}
    }
    .esri-legend--card__section {
      width: 100%;
    }
    .esri-legend--card__carousel-indicator-container {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_42 = (_41 = arcgisLegendVars === null || arcgisLegendVars === void 0 ? void 0 : arcgisLegendVars.variants) === null || _41 === void 0 ? void 0 : _41.card) === null || _42 === void 0 ? void 0 : _42.carousel)}
    }
    .esri-legend--card__service {
      width: 100%;
    }
    .esri-legend--card__service-caption-container {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_44 = (_43 = arcgisLegendVars === null || arcgisLegendVars === void 0 ? void 0 : arcgisLegendVars.variants) === null || _43 === void 0 ? void 0 : _43.card) === null || _44 === void 0 ? void 0 : _44.caption)}
    }

    /* Basemap Gallery */
    .esri-basemap-gallery {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.root)}
    }
    .esri-basemap-gallery__item {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_45 = arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.item) === null || _45 === void 0 ? void 0 : _45.default)}
      &:hover {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_46 = arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.item) === null || _46 === void 0 ? void 0 : _46.hover)}
        border-right-color: transparent;
      }
      &:focus {
        ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_47 = arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.item) === null || _47 === void 0 ? void 0 : _47.hover)}
        border-right-color: transparent;
      }
    }
    .esri-basemap-gallery__item--selected,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,
    .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)((_48 = arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.item) === null || _48 === void 0 ? void 0 : _48.active)}
      border-right-color: transparent;
    }
    .esri-basemap-gallery__item-title {
      color: inherit !important;
    }
    .esri-basemap-gallery__loader {
      &:before {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.bg};
      }
      &:after {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.progress};
      }
    }
    .esri-basemap-gallery__item--loading {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisBasemapGalleryVars === null || arcgisBasemapGalleryVars === void 0 ? void 0 : arcgisBasemapGalleryVars.root)}
    }

    .esri-direct-line-measurement-2d,
    .esri-area-measurement-2d,
    .esri-direct-line-measurement-3d,
    .esri-area-measurement-3d {
      ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisMeasureVars === null || arcgisMeasureVars === void 0 ? void 0 : arcgisMeasureVars.root)}
    }
    .esri-distance-measurement-2d__measurement,
    .esri-area-measurement-2d__measurement,
    .esri-direct-line-measurement-2d__measurement,
    .esri-direct-line-measurement-3d__measurement,
    .esri-area-measurement-3d__measurement {
      background-color: ${arcgisMeasureVars === null || arcgisMeasureVars === void 0 ? void 0 : arcgisMeasureVars.measurement.bg};
    }
    .esri-direct-line-measurement-2d__measurement-item-value,
    .esri-area-measurement-2d__measurement-item-value,
    .esri-direct-line-measurement-3d__measurement-item-value,
    .esri-area-measurement-3d__measurement-item-value {
      color: ${arcgisMeasureVars === null || arcgisMeasureVars === void 0 ? void 0 : arcgisMeasureVars.measurement.valueColor};
      font-size: 1rem;
      font-weight: 500;
    }
    .esri-area-measurement-2d__measurement-item--disabled,
    .esri-area-measurement-3d__measurement-item--disabled {
      color: ${arcgisMeasureVars === null || arcgisMeasureVars === void 0 ? void 0 : arcgisMeasureVars.measurement.disabledColor};
    }

    /* Attribution */
    .esri-attribution {
      color: #323232; /* Original color from API is used here */
      background-color: rgba(255,255,255,0.65); /* Original color from API is used here */
    }

    /* Sketch */
    .esri-sketch {
      /* usually */
      --calcite-ui-foreground-1: ${(_49 = buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.default) === null || _49 === void 0 ? void 0 : _49.bg};
      --calcite-ui-text-3: ${(_50 = buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.default) === null || _50 === void 0 ? void 0 : _50.color};
      /* hover */
      --calcite-ui-foreground-2: ${buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.hover.bg};
      /* --calcite-ui-text-1: ${buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.hover.color};*/  /* in Calcite, :hover.color === :focus.color */
      /* focus */
      --calcite-ui-foreground-3: ${buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.active.bg};
      --calcite-ui-text-1: ${buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.active.color};
      /* a11y */
      --calcite-ui-brand: ${buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.active.bg};

      /* polyfill css for theme change ,#11593 */
      > .esri-sketch__panel {
        display: flex;

        .esri-sketch__tool-section {
          display: flex;
        }
      }
      /*
      .esri-sketch__button {
        background-color: transparent;
        &.esri-sketch__button--selected {
          &, &:hover {
            ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.active)};
          }
        }
        &:focus {
          color: ${(_51 = buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.default) === null || _51 === void 0 ? void 0 : _51.color};
        }
      }
      .esri-sketch__tool-section {
        border-color: ${theme.colors.palette.light[800]};
      }
      */

      /* a11y */
      button:focus {
        outline-offset: -2px;
      }
    }

    /* Timezone */
    .jimu-calcite-timezone {
      --calcite-ui-brand: ${theme.components.dropdown.link.hoverBg};
      --calcite-ui-border-input: ${theme.components.input.border.color};
      --calcite-ui-foreground-1: ${theme.components.input.bg}; /* item default bg */
      --calcite-ui-foreground-2: ${theme.components.dropdown.link.hoverBg}; /* item hover bg */
      --calcite-ui-text-1: ${theme.components.dropdown.link.hoverColor}; /* item label default */
      --calcite-ui-text-3: ${theme.components.dropdown.link.hoverColor}; /* item label hover */

      --calcite-color-brand: ${theme.components.dropdown.link.hoverBg};
      --calcite-color-border-input: ${theme.components.input.border.color};
      --calcite-color-foreground-1: ${theme.components.input.bg}; /* item default bg */
      --calcite-color-foreground-2: ${theme.components.dropdown.link.hoverBg}; /* item hover bg */
      --calcite-color-text-1: ${theme.components.dropdown.link.hoverColor}; /* item label default */
      --calcite-color-text-3: ${theme.components.dropdown.link.hoverColor}; /* item label hover */
    }

    /* 3D Toolbox */
    .esri-widget.esri-daylight,
    .esri-widget.esri-weather,
    .esri-widget.esri-shadow-cast,
    .esri-widget.esri-line-of-sight,
    .esri-widget.esri-slice {
      background-color: ${theme.surfaces[1].bg};
      /* usually */
      --calcite-ui-brand: ${theme.colors.palette.primary[500]};
      --calcite-ui-text-inverse: ${(_52 = buttonTertiaryVariant === null || buttonTertiaryVariant === void 0 ? void 0 : buttonTertiaryVariant.default) === null || _52 === void 0 ? void 0 : _52.color};
      /* hover */
      --calcite-ui-brand-hover: ${theme.colors.palette.primary[600]};

      /* slider */
      .esri-slider {
        background-color: ${theme.surfaces[1].bg};

        .esri-slider__thumb {
          background-color: ${theme.colors.palette.primary[500]};
          border-color: ${theme.colors.palette.primary[500]};

          &:hover {
            border-color: ${theme.colors.palette.primary[600]} !important;
            background-color: ${theme.colors.palette.primary[500]} !important;
          }
        }

        .esri-slider__anchor:focus .esri-slider__thumb {
          outline: ${theme.colors.palette.primary[600]};
        }

        .esri-slider__segment--interactive,
        .esri-slider__segment-1 {
          background: ${theme.colors.palette.primary[500]};
        }
      }

      /* primary btn */
      /* https://www.figma.com/file/8EJ9ktTFkIZU3KmaMAz2lb/Design-System-ExB?node-id=287%3A5239&t=9kFu8ZNQiWmozlje-0 */
      .esri-button--primary.esri-button {
        color: ${theme.colors.white} !important;

        background: ${theme.colors.palette.primary[500]};
        border-color: ${theme.colors.palette.primary[500]};

        &:hover {
          background: ${theme.colors.palette.primary[600]};
        }
      }
    }
    /* Daylight */
    .esri-widget.esri-daylight {
      --calcite-ui-icon-color: ${theme.surfaces[1].bg};

      .esri-daylight__container__tick {
        border-color: transparent !important
      }
    }
    /* Weather */
    /* Shadow cast */
    /* Line of sight */
    /* Slice */
    .esri-widget.esri-weather,
    .esri-widget.esri-shadow-cast,
    .esri-widget.esri-line-of-sight,
    .esri-widget.esri-slice {
      --calcite-ui-text-inverse: ${theme.surfaces[1].bg};
    }

    /* arcgis app components and analysis components */
    analysis-item-browser,
    [calcite-hydrated],
    [class^='arcgis-'],
    [class^='analysis-'] {
      --calcite-ui-brand: ${(_53 = themeButtonPrimaryVariant === null || themeButtonPrimaryVariant === void 0 ? void 0 : themeButtonPrimaryVariant.default) === null || _53 === void 0 ? void 0 : _53.bg};
      --calcite-ui-brand-hover: ${(_54 = themeButtonPrimaryVariant === null || themeButtonPrimaryVariant === void 0 ? void 0 : themeButtonPrimaryVariant.hover) === null || _54 === void 0 ? void 0 : _54.bg};
      --calcite-ui-brand-press: ${(_55 = themeButtonPrimaryVariant === null || themeButtonPrimaryVariant === void 0 ? void 0 : themeButtonPrimaryVariant.active) === null || _55 === void 0 ? void 0 : _55.bg};
      --calcite-ui-text-inverse: ${(_56 = themeButtonPrimaryVariant === null || themeButtonPrimaryVariant === void 0 ? void 0 : themeButtonPrimaryVariant.default) === null || _56 === void 0 ? void 0 : _56.color};
      --calcite-ui-text-link: ${(_57 = themeButtonLinkVariant === null || themeButtonLinkVariant === void 0 ? void 0 : themeButtonLinkVariant.default) === null || _57 === void 0 ? void 0 : _57.color};
      --calcite-link-blue-underline: ${(_58 = themeButtonLinkVariant === null || themeButtonLinkVariant === void 0 ? void 0 : themeButtonLinkVariant.default) === null || _58 === void 0 ? void 0 : _58.color};
    }

    /*
     * ExB's own component
     */

    .exbmap-ui-tool-shell {
      box-shadow: ${arcgisVars === null || arcgisVars === void 0 ? void 0 : arcgisVars.boxShadow};
    }
    .exbmap-ui-tool,
    .exbmap-ui-tool-panel {
      pointer-events: auto;
      position: relative;
      .exbmap-ui-tool-icon-selected {
        &,
        :hover {
          color: ${(_59 = buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.active) === null || _59 === void 0 ? void 0 : _59.color};
          background-color: ${(_60 = buttonDefaultVariant === null || buttonDefaultVariant === void 0 ? void 0 : buttonDefaultVariant.active) === null || _60 === void 0 ? void 0 : _60.bg};
        }
      }
    }
    .exbmap-ui-popper {
      .exbmap-ui-expand-content {
        color: ${arcgisPanelVars === null || arcgisPanelVars === void 0 ? void 0 : arcgisPanelVars.color};
        background:  ${arcgisPanelVars === null || arcgisPanelVars === void 0 ? void 0 : arcgisPanelVars.bg};
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        /* min-width: 260px; */
        .exbmap-ui-expand-content-header {
          padding: ${theme === null || theme === void 0 ? void 0 : theme.sizes[2]} ${theme === null || theme === void 0 ? void 0 : theme.sizes[4]} ${theme === null || theme === void 0 ? void 0 : theme.sizes[2]};
        }
        .panel-title {
          font-weight: ${(_62 = (_61 = theme === null || theme === void 0 ? void 0 : theme.typography) === null || _61 === void 0 ? void 0 : _61.weights) === null || _62 === void 0 ? void 0 : _62.medium};
        }
        .panel-icon { /* <-- Need To use the tertiary button */
          cursor: pointer;
          &:hover {
            color: ${(_63 = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _63 === void 0 ? void 0 : _63.primary};
          }
        }
        .esri-search {
          padding: 0 ${theme === null || theme === void 0 ? void 0 : theme.sizes[4]} ${theme === null || theme === void 0 ? void 0 : theme.sizes[4]};
        }

        .esri-widget {
          font-family: inherit;
          background-color: transparent;
          color: inherit;
        }
        .esri-widget--panel {
          ${(0,_classic__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles)(arcgisPanelVars)}
        }
      }

      [data-popper-placement^='bottom'] {
        margin-top: ${(_64 = theme === null || theme === void 0 ? void 0 : theme.gutters) === null || _64 === void 0 ? void 0 : _64[3]} !important;
      }

      [data-popper-placement^='left'] {
        margin-right: ${(_65 = theme === null || theme === void 0 ? void 0 : theme.gutters) === null || _65 === void 0 ? void 0 : _65[3]} !important;
      }

      [data-popper-placement^='right'] {
        margin-left: ${(_66 = theme === null || theme === void 0 ? void 0 : theme.gutters) === null || _66 === void 0 ? void 0 : _66[3]} !important;
      }

      [data-popper-placement^='top'] {
        margin-bottom: ${(_67 = theme === null || theme === void 0 ? void 0 : theme.gutters) === null || _67 === void 0 ? void 0 : _67[3]} !important;
      }
    }
    .exbmap-basetool-loader {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      width: 100%;
      animation: esri-fade-in 500ms ease-in-out;
      &:before {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.bg};
      }
      &:after {
        background-color: ${arcgisUpdatingIndicatorVars === null || arcgisUpdatingIndicatorVars === void 0 ? void 0 : arcgisUpdatingIndicatorVars.progress};
      }
  }`;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/mixin/base-components.ts":
/*!****************************************************************!*\
  !*** ./jimu-theme/lib/manager/global/mixin/base-components.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseComponentsStyles: () => (/* binding */ baseComponentsStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const baseComponentsStyles = (theme) => {
    var _a, _b, _c;
    return {
        '.jimu-widget': {
            width: '100%',
            height: '100%'
        },
        '.jimu-widget-setting': {
            width: '100%',
            height: '100%',
            overflow: 'auto'
        },
        '.page': {
            width: '100%',
            position: 'relative'
        },
        '.close': {
            float: 'right',
            fontSize: theme.components.close.fontSize,
            fontWeight: theme.components.close.fontWeight,
            lineHeight: 1,
            color: theme.components.close.color,
            textShadow: theme.components.close.textShadow,
            opacity: 0.5,
            '&:not(:disabled):not(.disabled)': {
                '&:hover, &:focus': {
                    color: theme.components.close.color,
                    textDecoration: 'none',
                    opacity: 0.75
                },
                cursor: 'pointer'
            }
        },
        'button.close': {
            padding: 0,
            backgroundColor: 'transparent',
            border: 0,
            WebKitAppearance: 'none'
        },
        '.modal-open': {
            overflow: 'hidden',
            '.modal': {
                overflowX: 'hidden',
                overflowY: 'hidden'
            }
        },
        '.modal': {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1050,
            display: 'none',
            overflow: 'hidden',
            outline: 0
        },
        '.modal-backdrop': {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1040,
            backgroundColor: theme.components.modal.backdrop.bg,
            '&.fade': { opacity: 0 },
            '&.show': { opacity: theme.components.modal.backdrop.opacity }
        },
        // cover analysis components's style
        '.modal-dialog .modal-content': {
            height: 'auto'
        },
        [`@media (min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.BREAK_POINTS[0]}px)`]: {
            '.modal-sm': {
                maxWidth: theme.components.modal.sizes.sm
            }
        },
        [`@media (min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.BREAK_POINTS[1]}px)`]: {
            '.modal-lg': {
                maxWidth: theme.components.modal.sizes.lg
            }
        },
        '.form-inline': {
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            '.form-check': {
                width: '100%'
            },
            [`@media (min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.BREAK_POINTS[0]}px)`]: {
                label: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 0
                },
                '.form-group': {
                    display: 'flex',
                    flex: '0 0 auto',
                    flexFlow: 'row wrap',
                    alignItems: 'center',
                    marginBottom: 0
                },
                '.form-control': {
                    display: 'inline-block',
                    width: 'auto',
                    verticalAlign: 'middle'
                },
                '.input-group': {
                    width: 'auto'
                },
                '.form-check': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    paddingLeft: 0
                },
                '.form-check-input': {
                    position: 'relative',
                    marginTop: 0,
                    marginRight: '25rem',
                    marginLeft: 0
                }
            }
        },
        '.frame-active': {
            border: `1px solid ${(_a = theme.colors) === null || _a === void 0 ? void 0 : _a.primary} !important`,
            boxShadow: `0 0 0 1px ${(_b = theme.colors) === null || _b === void 0 ? void 0 : _b.primary} !important`,
            position: 'relative',
            '::after': {
                content: '""',
                display: 'block',
                borderTop: `0.5rem solid ${(_c = theme.colors) === null || _c === void 0 ? void 0 : _c.primary}`,
                borderLeft: '0.5rem solid transparent',
                position: 'absolute',
                right: 0,
                top: 0
            }
        }
    };
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/mixin/index.tsx":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/manager/global/mixin/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MixinStyles: () => (/* binding */ MixinStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-components */ "./jimu-theme/lib/manager/global/mixin/base-components.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/manager/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _arcgis_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arcgis-charts */ "./jimu-theme/lib/manager/global/mixin/arcgis-charts.ts");
/* harmony import */ var _arcgis_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arcgis-components */ "./jimu-theme/lib/manager/global/mixin/arcgis-components.ts");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ "./jimu-theme/lib/manager/global/mixin/loading.ts");








const cssStyles = (theme) => {
    return `
    ${_arcgis_charts__WEBPACK_IMPORTED_MODULE_5__.chartComponentsStyles}
    body {
      ${(0,_arcgis_components__WEBPACK_IMPORTED_MODULE_6__.arcgisComponentsStyles)(theme)}
    }
  `;
};
const focusStyle = (theme) => {
    const focusStyles = {
        width: theme.focusedStyles.width,
        color: theme.focusedStyles.color,
        offset: theme.focusedStyles.offset
    };
    return Object.assign({ 
        /*
          Hide focus styles if they're not needed, for example,
          when an element receives focus via the mouse.
          Note: Not use outline for focused element by default.
          */
        '*:focus': {
            outline: 0
        }, '*:focus-visible': {
            outline: 0
        } }, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getFocusStyles)(focusStyles));
};
const scrollbarStyle = (theme) => {
    const scrollbarStyles = {
        thumb: theme.colors.palette.light[600],
        thumbHover: theme.colors.palette.light[900],
        track: theme.colors.palette.light[200]
    };
    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getScrollbarStyles)(scrollbarStyles);
};
const cssObject = (theme) => {
    var _a, _b;
    return Object.assign(Object.assign(Object.assign(Object.assign({}, scrollbarStyle(theme)), (0,_base_components__WEBPACK_IMPORTED_MODULE_2__.baseComponentsStyles)(theme)), (0,_loading__WEBPACK_IMPORTED_MODULE_7__.loadingUtilities)(theme)), { html: {
            mozFontFeatureSettings: '"liga" 1,"calt" 0',
            webkitFontFeatureSettings: '"liga" 1,"calt" 0',
            oFontFeatureSettings: '"liga" 1,"calt" 0',
            msFontFeatureSettings: '"liga" 1,"calt" 0',
            fontKerning: 'normal',
            textRendering: 'optimizeLegibility',
            '&.is-in-builder': {
                overflow: 'hidden'
            }
        }, body: Object.assign({ a: {
                color: theme.link.color,
                textDecoration: (_a = theme.link.decoration) !== null && _a !== void 0 ? _a : 'none',
                backgroundColor: 'transparent',
                '&:not([role="button"]):hover': {
                    color: theme.link.hover.color,
                    textDecoration: (_b = theme.link.hover.decoration) !== null && _b !== void 0 ? _b : 'underline'
                }
            } }, focusStyle(theme)) });
};
const MixinStyles = ({ theme }) => {
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => [cssObject(theme), cssStyles(theme)], [theme]);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, theme && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { theme: theme, styles: styles }));
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/mixin/loading.ts":
/*!********************************************************!*\
  !*** ./jimu-theme/lib/manager/global/mixin/loading.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingUtilities: () => (/* binding */ loadingUtilities)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/manager/utils/index.ts");


const loadingUtilities = (theme) => {
    const utilities = {};
    const primaryLoadingColor = theme.colors.palette.primary[500];
    const secondaryLoadingColor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.palette.light[800], 0.5);
    utilities['.jimu-primary-loading'] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getLoadingStyles)('0.85rem', '2rem', primaryLoadingColor, 'primary');
    utilities['.jimu-secondary-loading'] = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getLoadingStyles)('0.51rem', '1.2rem', secondaryLoadingColor, 'small');
    return utilities;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/global/theme2/constant.ts":
/*!**********************************************************!*\
  !*** ./jimu-theme/lib/manager/global/theme2/constant.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Theme2GlobalStyleClassName: () => (/* binding */ Theme2GlobalStyleClassName)
/* harmony export */ });
const Theme2GlobalStyleClassName = 'jimu-theme2-global-style';


/***/ }),

/***/ "./jimu-theme/lib/manager/global/theme2/index.tsx":
/*!********************************************************!*\
  !*** ./jimu-theme/lib/manager/global/theme2/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Theme2GlobalStyleClassName: () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_3__.Theme2GlobalStyleClassName),
/* harmony export */   Theme2Style: () => (/* binding */ Theme2Style)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./jimu-theme/lib/manager/global/theme2/styles.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./jimu-theme/lib/manager/global/theme2/constant.ts");



const Theme2Style = (props) => {
    const { theme2 } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return theme2 ? (0,_styles__WEBPACK_IMPORTED_MODULE_2__.getTheme2GlobalStyle)(theme2) : null;
    }, [theme2]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, theme2 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { theme: theme2, styles: styles })));
};



/***/ }),

/***/ "./jimu-theme/lib/manager/global/theme2/styles.ts":
/*!********************************************************!*\
  !*** ./jimu-theme/lib/manager/global/theme2/styles.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTheme2GlobalStyle: () => (/* binding */ getTheme2GlobalStyle)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./jimu-theme/lib/manager/global/theme2/constant.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/manager/utils/index.ts");



const getTheme2GlobalStyle = (theme2) => {
    //TODO: Mapping with new theme
    const scrollbarStyle = {
        thumb: theme2.colors.palette.light[600],
        thumbHover: theme2.colors.palette.light[900],
        track: theme2.colors.palette.light[200]
    };
    const focusStyle = {
        width: theme2.focusedStyles.width,
        color: theme2.focusedStyles.color,
        offset: theme2.focusedStyles.offset
    };
    const scrollbarStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getScrollbarStyles)(scrollbarStyle, `.${_constant__WEBPACK_IMPORTED_MODULE_0__.Theme2GlobalStyleClassName}`);
    const focusStyles = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFocusStyles)(focusStyle, `.${_constant__WEBPACK_IMPORTED_MODULE_0__.Theme2GlobalStyleClassName}`);
    return Object.assign(Object.assign({}, scrollbarStyles), focusStyles);
};


/***/ }),

/***/ "./jimu-theme/lib/manager/index.tsx":
/*!******************************************!*\
  !*** ./jimu-theme/lib/manager/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassicThemeFirstContext: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ClassicThemeFirstContext),
/* harmony export */   FontLoader: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.FontLoader),
/* harmony export */   GlobalStyles: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles),
/* harmony export */   Theme2Context: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.Theme2Context),
/* harmony export */   Theme2GlobalStyleClassName: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.Theme2GlobalStyleClassName),
/* harmony export */   Theme2Style: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.Theme2Style),
/* harmony export */   ThemeManager: () => (/* binding */ ThemeManager),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider),
/* harmony export */   ThemeStore: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.ThemeStore),
/* harmony export */   ThemeSwitchComponent: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ThemeSwitchComponent),
/* harmony export */   ThemeSwitcher: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.ThemeSwitcher),
/* harmony export */   UseTheme2Context: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.UseTheme2Context),
/* harmony export */   createMixedTheme: () => (/* reexport safe */ _mapping__WEBPACK_IMPORTED_MODULE_6__.createMixedTheme),
/* harmony export */   createThemeOptions: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.createThemeOptions),
/* harmony export */   defaultFonts: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.defaultFonts),
/* harmony export */   defaultTheme: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.defaultTheme),
/* harmony export */   getAppThemeManifest: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getAppThemeManifest),
/* harmony export */   getBuilderThemeVariables: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getBuilderThemeVariables),
/* harmony export */   getClassicVarsMapping: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.getClassicVarsMapping),
/* harmony export */   getComponentVariants: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getComponentVariants),
/* harmony export */   getFocusStyles: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.getFocusStyles),
/* harmony export */   getLoadingStyles: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.getLoadingStyles),
/* harmony export */   getNavigationVariables: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getNavigationVariables),
/* harmony export */   getRegisteredStyle: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getRegisteredStyle),
/* harmony export */   getTheme: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getTheme),
/* harmony export */   getTheme2: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getTheme2),
/* harmony export */   getTheme2Manifest: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getTheme2Manifest),
/* harmony export */   getTheme2Module: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getTheme2Module),
/* harmony export */   getTheme2Style: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getTheme2Style),
/* harmony export */   getThemeColorValue: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getThemeColorValue),
/* harmony export */   getThemeManifest: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getThemeManifest),
/* harmony export */   getThemeModule: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getThemeModule),
/* harmony export */   getThemeStyle: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.getThemeStyle),
/* harmony export */   isCSSVariable: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.isCSSVariable),
/* harmony export */   isThemeLoaded: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.isThemeLoaded),
/* harmony export */   loadFontStyleSheet: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_3__.loadFontStyleSheet),
/* harmony export */   loadTheme: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.loadTheme),
/* harmony export */   mapping: () => (/* binding */ mapping),
/* harmony export */   registerStyle: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.registerStyle),
/* harmony export */   registerStyles: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.registerStyles),
/* harmony export */   setThemeModule: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.setThemeModule),
/* harmony export */   styled: () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_10__.styled),
/* harmony export */   themeOptionsUtils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.themeOptionsUtils),
/* harmony export */   useMultiTheme: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.useMultiTheme),
/* harmony export */   useMultiThemeValue: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.useMultiThemeValue),
/* harmony export */   useTheme: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.useTheme),
/* harmony export */   useTheme2: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.useTheme2),
/* harmony export */   useThemeLoaded: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.useThemeLoaded),
/* harmony export */   useThemeSwitching: () => (/* reexport safe */ _use_theme_switching__WEBPACK_IMPORTED_MODULE_1__.useThemeSwitching),
/* harmony export */   useUseTheme2: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_5__.useUseTheme2),
/* harmony export */   withBuilderTheme: () => (/* reexport safe */ _with_theme__WEBPACK_IMPORTED_MODULE_9__.withBuilderTheme),
/* harmony export */   withStyles: () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_8__.withStyles),
/* harmony export */   withTheme: () => (/* reexport safe */ _with_theme__WEBPACK_IMPORTED_MODULE_9__.withTheme),
/* harmony export */   withTheme2: () => (/* reexport safe */ _with_theme__WEBPACK_IMPORTED_MODULE_9__.withTheme2)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _use_theme_switching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-theme-switching */ "./jimu-theme/lib/manager/use-theme-switching.ts");
/* harmony import */ var _use_theme_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-theme-sync */ "./jimu-theme/lib/manager/use-theme-sync.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./jimu-theme/lib/manager/global/index.tsx");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./jimu-theme/lib/manager/context/index.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapping */ "./jimu-theme/lib/manager/mapping/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/utils/index.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");
/* harmony import */ var _with_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./with-theme */ "./jimu-theme/lib/manager/with-theme/index.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./jimu-theme/lib/manager/styled/index.tsx");







const mapping = Object.assign(Object.assign({}, _mapping__WEBPACK_IMPORTED_MODULE_6__), { getClassicVarsMapping: _global__WEBPACK_IMPORTED_MODULE_3__.getClassicVarsMapping });
const ThemeManager = ({ children }) => {
    var _a;
    const module = (0,_use_theme_switching__WEBPACK_IMPORTED_MODULE_1__.useThemeSwitching)();
    const module2 = (0,_use_theme_sync__WEBPACK_IMPORTED_MODULE_2__.useThemeSync)(module);
    const isRTL = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext) === null || _a === void 0 ? void 0 : _a.isRTL;
    const emotionRTLCache = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => _emotion___WEBPACK_IMPORTED_MODULE_4__.createEmotionRTLCache === null || _emotion___WEBPACK_IMPORTED_MODULE_4__.createEmotionRTLCache === void 0 ? void 0 : (0,_emotion___WEBPACK_IMPORTED_MODULE_4__.createEmotionRTLCache)(isRTL), [isRTL]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_context__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, { theme: module === null || module === void 0 ? void 0 : module.theme, theme2: module2 === null || module2 === void 0 ? void 0 : module2.theme },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_4__.CacheProvider, { value: emotionRTLCache },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_global__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles, { module: module, module2: module2, isRTL: isRTL }),
            children)));
};










/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/color.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/color.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedAction: () => (/* binding */ getMappedAction),
/* harmony export */   getMappedColorOptions: () => (/* binding */ getMappedColorOptions),
/* harmony export */   getMappedColors: () => (/* binding */ getMappedColors),
/* harmony export */   getMappedDivider: () => (/* binding */ getMappedDivider),
/* harmony export */   getMappedSurface: () => (/* binding */ getMappedSurface)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const mappingColorNames = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'error'
};
const getMappedPaletteItem = (classic, shadeOption) => {
    const { main, light, dark } = shadeOption;
    return {
        main: classic[main],
        light: classic[light],
        dark: classic[dark]
    };
};
const getMappedColors = (inputTheme, shadeOptions) => {
    const isDark = inputTheme.darkTheme;
    const mapped = {};
    Object.entries(mappingColorNames).forEach(([classicName, name]) => {
        const colorObj = getMappedPaletteItem(inputTheme.colors.palette[classicName], shadeOptions[classicName]);
        if (colorObj.main !== inputTheme.colors[classicName]) {
            colorObj.main = inputTheme.colors[classicName];
        }
        colorObj.text = isDark ? inputTheme.colors.black : ((classicName === 'primary' || classicName === 'secondary') ? inputTheme.colors.white : inputTheme.colors.black);
        mapped[name] = colorObj;
    });
    return mapped;
};
const getMappedDivider = (theme) => {
    const isDark = theme.darkTheme;
    return isDark
        ? {
            primary: theme.border.color,
            secondary: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[600], theme.colors.palette.light[700]),
            tertiary: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[400], theme.colors.palette.light[500]),
            input: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[100], theme.colors.palette.dark[200])
        }
        : {
            primary: theme.border.color,
            secondary: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[400], theme.colors.palette.light[500]),
            tertiary: theme.colors.palette.light[300],
            input: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[800], theme.colors.palette.light[900])
        };
};
const getMappedSurface = (theme) => {
    const isDark = theme.darkTheme;
    return isDark
        ? {
            background: theme.body.bg,
            backgroundText: theme.body.color,
            backgroundHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[300], theme.colors.palette.dark[400]),
            paper: theme.surfaces[1].bg,
            paperText: theme.colors.palette.dark[900],
            paperHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[500], theme.colors.palette.dark[600]),
            overlay: theme.surfaces[2].bg,
            overlayText: theme.colors.black,
            overlayHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[700], theme.colors.palette.dark[800])
        }
        : {
            background: theme.body.bg,
            backgroundText: theme.body.color,
            backgroundHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[700], theme.colors.palette.dark[800]),
            paper: theme.surfaces[1].bg,
            paperText: theme.colors.palette.dark[900],
            paperHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[500], theme.colors.palette.dark[600]),
            overlay: theme.surfaces[2].bg,
            overlayText: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[700], theme.colors.palette.dark[800]),
            overlayHint: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[300], theme.colors.palette.dark[400])
        };
};
const getMappedAction = (theme) => {
    const isDark = theme.darkTheme;
    return isDark
        ? {
            default: theme.colors.palette.light[300],
            hover: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[400], theme.colors.palette.light[500]),
            pressed: theme.colors.palette.light[200],
            text: theme.colors.black,
            disabled: {
                default: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[600], theme.colors.palette.light[700]),
                text: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[100], theme.colors.palette.dark[200])
            },
            focus: theme.focusedStyles.color,
            selected: {
                default: theme.colors.palette.primary[500],
                hover: theme.colors.palette.primary[300],
                text: theme.colors.black
            },
            link: {
                default: theme.link.color,
                hover: theme.link.hover.color,
                visited: theme.colors.palette.light[300]
            }
        }
        : {
            default: theme.colors.palette.light[100],
            hover: theme.colors.palette.light[300],
            pressed: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[400], theme.colors.palette.light[500]),
            text: theme.colors.black,
            disabled: {
                default: theme.colors.palette.light[300],
                text: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.light[600], theme.colors.palette.light[700])
            },
            focus: theme.focusedStyles.color,
            selected: {
                default: theme.colors.palette.primary[500],
                hover: theme.colors.palette.primary[700],
                text: theme.colors.white
            },
            link: {
                default: theme.link.color,
                hover: theme.link.hover.color,
                visited: _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(theme.colors.palette.dark[500], theme.colors.palette.dark[600])
            }
        };
};
const getMappedColorOptions = (inputTheme, shadeOptions) => {
    const isDark = inputTheme.darkTheme;
    const colors = getMappedColors(inputTheme, shadeOptions);
    const surface = getMappedSurface(inputTheme);
    const divider = getMappedDivider(inputTheme);
    const action = getMappedAction(inputTheme);
    const mode = isDark ? 'dark' : 'light';
    const option = {
        mode,
        [mode]: Object.assign(Object.assign({ mode }, colors), { surface,
            action,
            divider })
    };
    return option;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/components.tsx":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/components.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedComponentStyles: () => (/* binding */ getMappedComponentStyles),
/* harmony export */   getMappedComponentVars: () => (/* binding */ getMappedComponentVars),
/* harmony export */   getMappedComponents: () => (/* binding */ getMappedComponents)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _utils_create_theme_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/create-theme-options */ "./jimu-theme/lib/manager/utils/create-theme-options.ts");


const getMappedComponentStyles = (styles) => {
    if (!styles || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(styles))
        return;
    const components = {};
    Object.entries(styles).forEach(([name, style]) => {
        name = name === 'Global' ? 'CssBaseline' : (0,_utils__WEBPACK_IMPORTED_MODULE_0__.uppercaseFirstLetter)(name);
        components[name] = {
            root: style
        };
    });
    return components;
};
const getMappedComponentVars = (theme) => {
    const header = theme.header;
    const footer = theme.footer;
    return {
        Header: {
            root: header
        },
        Footer: {
            root: footer
        }
    };
};
const getMappedComponents = (theme, inputStyles) => {
    const vars = getMappedComponentVars(theme);
    const styles = getMappedComponentStyles(inputStyles);
    const options = (0,_utils_create_theme_options__WEBPACK_IMPORTED_MODULE_1__.createThemeCompOptions)(vars, null, styles);
    return options;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/index.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypographyVariantsMap: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_5__.TypographyVariantsMap),
/* harmony export */   color: () => (/* reexport module object */ _color__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   components: () => (/* reexport module object */ _components__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   createMappedThemeOption: () => (/* binding */ createMappedThemeOption),
/* harmony export */   createMixedTheme: () => (/* binding */ createMixedTheme),
/* harmony export */   createShadeOptions: () => (/* binding */ createShadeOptions),
/* harmony export */   palette: () => (/* reexport module object */ _palette__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   shadow: () => (/* reexport module object */ _shadow__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   shape: () => (/* reexport module object */ _shape__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   spacing: () => (/* reexport module object */ _spacing__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   typeface: () => (/* reexport module object */ _typeface__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   typography: () => (/* reexport module object */ _typography__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   utils: () => (/* reexport module object */ _utils__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   whetherIsNewTheme: () => (/* binding */ whetherIsNewTheme)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../system */ "./jimu-theme/lib/system/index.ts");
/* harmony import */ var _classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classic */ "./jimu-theme/lib/classic/index.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./jimu-theme/lib/manager/mapping/color.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/mapping/utils.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./jimu-theme/lib/manager/mapping/typography.ts");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette */ "./jimu-theme/lib/manager/mapping/palette.ts");
/* harmony import */ var _typeface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typeface */ "./jimu-theme/lib/manager/mapping/typeface.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shadow */ "./jimu-theme/lib/manager/mapping/shadow.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./jimu-theme/lib/manager/mapping/shape.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spacing */ "./jimu-theme/lib/manager/mapping/spacing.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components */ "./jimu-theme/lib/manager/mapping/components.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./jimu-theme/lib/manager/utils/index.ts");






















const defultShadeOptionItems = {
    light: {
        light: 300,
        main: 500,
        dark: 700
    },
    dark: {
        light: 700,
        main: 500,
        dark: 300
    },
    warningLight: {
        main: 500,
        light: 300,
        dark: 900
    }
};
const shouldUseWarningLightShadeOption = (uri, name) => (name === 'warning' && uri && ['themes/default/', 'themes/ink/', 'themes/vivid/'].includes(uri));
const paletteColors = ['primary', 'secondary', 'danger', 'warning', 'info', 'success'];
const createShadeOptions = (uri, isDark = false) => {
    const shadeOptions = {};
    paletteColors.forEach((name) => {
        const shadeOption = shouldUseWarningLightShadeOption(uri, name) ? defultShadeOptionItems.warningLight : (isDark ? defultShadeOptionItems.dark : defultShadeOptionItems.light);
        shadeOptions[name] = shadeOption;
    });
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(shadeOptions);
};
/**
 * Create a mapped new theme options based on the classic theme.
 */
const createMappedThemeOption = (classicTheme, compStyles, shadeOptions) => {
    const palette = (0,_palette__WEBPACK_IMPORTED_MODULE_6__.getMappedPaletteOptions)(classicTheme);
    const typeface = (0,_typeface__WEBPACK_IMPORTED_MODULE_7__.getMappedTypefaceOptions)(classicTheme);
    const color = (0,_color__WEBPACK_IMPORTED_MODULE_3__.getMappedColorOptions)(classicTheme, shadeOptions);
    const typography = (0,_typography__WEBPACK_IMPORTED_MODULE_5__.getMappedTypographyOptions)(classicTheme);
    const shadow = (0,_shadow__WEBPACK_IMPORTED_MODULE_8__.getMappedShadow)(classicTheme);
    const shape = (0,_shape__WEBPACK_IMPORTED_MODULE_9__.getMappedShape)(classicTheme);
    const spacing = (0,_spacing__WEBPACK_IMPORTED_MODULE_10__.getMappedSpacing)(classicTheme);
    const components = (0,_components__WEBPACK_IMPORTED_MODULE_11__.getMappedComponents)(classicTheme, compStyles);
    const options = {
        src: {
            primary: {
                color: color[color.mode].primary.main
            }
        },
        ref: {
            palette,
            typeface
        },
        sys: {
            color,
            typography,
            shadow,
            shape,
            spacing
        },
        comp: components
    };
    return options;
};
/**
 * Check whether the input uri is a new theme.
 * Note: It can be used in builder and only valid for the app themes.
 */
const whetherIsNewTheme = (module) => { var _a, _b; return (_b = (_a = module === null || module === void 0 ? void 0 : module.manifest) === null || _a === void 0 ? void 0 : _a.isNewTheme) !== null && _b !== void 0 ? _b : false; };
/**
 * Create mixed theme variables compatible with classic theme and new theme.
 */
const createMixedTheme = (module, inputThemeOptions, mixins) => {
    const uri = module === null || module === void 0 ? void 0 : module.uri;
    const isNewTheme = whetherIsNewTheme(module);
    let themeOptions = null;
    let classicTheme = null;
    if (uri && !isNewTheme) {
        const customTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createClassicCustomTheme)(module.variables, inputThemeOptions);
        classicTheme = (0,_classic__WEBPACK_IMPORTED_MODULE_2__.createClassicTheme)(customTheme);
        const shadeOptions = createShadeOptions(uri, classicTheme.darkTheme);
        themeOptions = createMappedThemeOption(classicTheme, module.styles, shadeOptions);
    }
    else {
        classicTheme = (0,_classic__WEBPACK_IMPORTED_MODULE_2__.createClassicTheme)();
        const baseThemeOptions = module === null || module === void 0 ? void 0 : module.variables;
        themeOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.createThemeOptions)(baseThemeOptions, inputThemeOptions, module === null || module === void 0 ? void 0 : module.styles);
    }
    const newTheme = (0,_system__WEBPACK_IMPORTED_MODULE_1__.createTheme)(Object.assign({}, themeOptions), mixins);
    const theme = Object.assign(Object.assign(Object.assign({}, classicTheme), newTheme), { __newTheme__: newTheme, __classicTheme__: classicTheme });
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(theme);
};




/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/palette.ts":
/*!***************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/palette.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedNeutral: () => (/* binding */ getMappedNeutral),
/* harmony export */   getMappedPaletteOptions: () => (/* binding */ getMappedPaletteOptions)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const mappingColorNames = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'error',
    light: 'custom1',
    dark: 'custom2'
};
const getMappedNeutral = (classic, isDark = false) => {
    const light = classic.light;
    const dark = classic.dark;
    const n100 = isDark ? '#000000' : '#ffffff';
    const n200 = light[100];
    const n300 = light[200];
    const n400 = light[300];
    const n500 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(light[400], light[500]);
    const n600 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(light[600], light[700]);
    const n700 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(light[800], light[900]);
    const n800 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(dark[100], dark[200]);
    const n900 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(dark[300], dark[400]);
    const n1000 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(dark[500], dark[600]);
    const n1100 = _utils__WEBPACK_IMPORTED_MODULE_0__.colorUtils.averaging(dark[700], dark[800]);
    const n1200 = dark[900];
    const n1300 = isDark ? '#ffffff' : '#000000';
    const colors = {
        100: n100,
        200: n200,
        300: n300,
        400: n400,
        500: n500,
        600: n600,
        700: n700,
        800: n800,
        900: n900,
        1000: n1000,
        1100: n1100,
        1200: n1200,
        1300: n1300
    };
    const neutral = colors;
    if (isDark) {
        const values = Object.values(colors);
        values.reverse().forEach((value, index) => {
            const key = `${index + 1}00`;
            neutral[key] = value;
        });
    }
    return neutral;
};
const getMappedPaletteOptions = (inputTheme) => {
    const mapped = {};
    const classicPalette = inputTheme.colors.palette;
    Object.entries(mappingColorNames).forEach(([classicName, name]) => {
        const colorObj = classicPalette[classicName];
        if (colorObj) {
            mapped[name] = colorObj;
        }
    });
    const nertual = getMappedNeutral(classicPalette, inputTheme.darkTheme);
    mapped.neutral = nertual;
    mapped.white = inputTheme.colors.white;
    mapped.black = inputTheme.colors.black;
    return mapped;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/shadow.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/shadow.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedShadow: () => (/* binding */ getMappedShadow)
/* harmony export */ });
const getMappedShadow = (input) => {
    return {
        shadow1: input.boxShadows.sm,
        shadow2: input.boxShadows.default,
        shadow3: input.boxShadows.lg
    };
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/shape.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/shape.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedShape: () => (/* binding */ getMappedShape)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/mapping/utils.ts");

const getMappedShape = (input) => {
    return {
        shape1: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.remToPx)(input.borderRadiuses.default),
        shape2: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.remToPx)(input.borderRadiuses.lg)
    };
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/spacing.ts":
/*!***************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/spacing.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedSpacing: () => (/* binding */ getMappedSpacing)
/* harmony export */ });
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../system */ "./jimu-theme/lib/system/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/mapping/utils.ts");


const getMappedSpacing = (input) => {
    const spacing = ['0px'];
    _system__WEBPACK_IMPORTED_MODULE_0__.ThemeSpacingVariants.forEach((variant) => {
        if (input.sizes[variant]) {
            spacing.push((0,_utils__WEBPACK_IMPORTED_MODULE_1__.remToPx)(input.sizes[variant]));
        }
        else {
            spacing.push(`${variant * 4}px`);
        }
    });
    return spacing;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/typeface.ts":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/typeface.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMappedTypefaceOptions: () => (/* binding */ getMappedTypefaceOptions)
/* harmony export */ });
const getMappedTypefaceOptions = (theme) => {
    const htmlFontSize = theme.typography.fontSizeRoot;
    const fontFamily = theme.typography.fontFamilyBase;
    const fontWeightLight = Number(theme.typography.weights.light);
    const fontWeightRegular = Number(theme.typography.weights.medium);
    const fontWeightMedium = Number(theme.typography.weights.bold);
    const fontWeightBold = Number(theme.typography.weights.extraBold);
    const options = {
        htmlFontSize,
        fontFamily,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold
    };
    return options;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/typography.ts":
/*!******************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/typography.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypographyVariantsMap: () => (/* binding */ TypographyVariantsMap),
/* harmony export */   getMappedTypographyOptions: () => (/* binding */ getMappedTypographyOptions)
/* harmony export */ });
const TypographyVariantsMap = {
    display1: 'h1',
    display2: 'h2',
    display3: 'h3',
    display4: 'h4',
    display5: 'h5',
    display6: 'h6',
    body1: 'body1',
    body2: 'body2',
    caption1: 'label2',
    caption2: 'label3'
};
const getMappedTypographyOptions = (inputTheme) => {
    const inputTypography = inputTheme.typography;
    const inputBody = inputTheme.body;
    const body2 = {
        lineHeight: inputBody.lineHeight,
        fontSize: inputBody.fontSize,
        fontWeight: Number(inputBody.fontWeight),
        fontFamily: inputBody.fontFamily
    };
    const variants = {};
    Object.entries(TypographyVariantsMap).forEach(([classic, current]) => {
        if (inputTypography.variants[classic]) {
            const value = {
                lineHeight: inputTypography.variants[classic].lineHeight,
                fontSize: inputTypography.variants[classic].fontSize,
                fontWeight: Number(inputTypography.variants[classic].fontWeight),
                fontFamily: inputTypography.variants[classic].fontFamily
            };
            variants[current] = value;
        }
    });
    const options = Object.assign(Object.assign({}, variants), { body2 });
    return options;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/mapping/utils.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/mapping/utils.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClassicCustomTheme: () => (/* binding */ createClassicCustomTheme),
/* harmony export */   getClassicCustomTheme: () => (/* binding */ getClassicCustomTheme),
/* harmony export */   remToPx: () => (/* binding */ remToPx)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classic */ "./jimu-theme/lib/classic/index.ts");


const remToPxNumber = (input) => {
    const [number, unit] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(input);
    if (unit !== 'rem')
        return number;
    return number * 16;
};
const remToPx = (input) => {
    return `${remToPxNumber(input)}px`;
};
const isValidPaletteItem = (item, counts = 9) => {
    return item && Object.keys(item).length === counts;
};
const getClassicCustomTheme = (inputCustomTheme) => {
    if (!inputCustomTheme)
        return inputCustomTheme;
    const customTheme = {};
    if (inputCustomTheme.darkTheme) {
        customTheme.darkTheme = inputCustomTheme.darkTheme;
    }
    if (inputCustomTheme.coloration) {
        customTheme.coloration = inputCustomTheme.coloration;
    }
    if (inputCustomTheme.colorationVariants) {
        customTheme.colorationVariants = inputCustomTheme.colorationVariants;
    }
    if (inputCustomTheme.typography) {
        customTheme.typography = inputCustomTheme.typography;
    }
    if (inputCustomTheme.colors) {
        customTheme.colors = inputCustomTheme.colors;
    }
    if (inputCustomTheme.spacer) {
        customTheme.spacer = inputCustomTheme.spacer;
    }
    if (inputCustomTheme.sizes) {
        customTheme.sizes = inputCustomTheme.sizes;
    }
    if (inputCustomTheme.gutters) {
        customTheme.gutters = inputCustomTheme.gutters;
    }
    if (inputCustomTheme.borderRadiuses) {
        customTheme.borderRadiuses = inputCustomTheme.borderRadiuses;
    }
    if (inputCustomTheme.boxShadows) {
        customTheme.boxShadows = inputCustomTheme.boxShadows;
    }
    if (inputCustomTheme.focusedStyles) {
        customTheme.focusedStyles = inputCustomTheme.focusedStyles;
    }
    if (inputCustomTheme.surfaces) {
        customTheme.surfaces = inputCustomTheme.surfaces;
    }
    if (inputCustomTheme.header) {
        customTheme.header = inputCustomTheme.header;
    }
    if (inputCustomTheme.footer) {
        customTheme.footer = inputCustomTheme.footer;
    }
    if (inputCustomTheme.body) {
        customTheme.body = inputCustomTheme.body;
    }
    if (inputCustomTheme.link) {
        customTheme.link = inputCustomTheme.link;
    }
    if (inputCustomTheme.border) {
        customTheme.border = inputCustomTheme.border;
    }
    if (inputCustomTheme.components) {
        customTheme.components = inputCustomTheme.components;
    }
    if (inputCustomTheme.arcgis) {
        customTheme.arcgis = inputCustomTheme.arcgis;
    }
    return customTheme;
};
const DefaultCustomTheme = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
const createClassicCustomTheme = (overwrite = DefaultCustomTheme, customTheme) => {
    var _a, _b, _c, _d, _e, _f;
    const base = getClassicCustomTheme(overwrite);
    const mixin = getClassicCustomTheme(customTheme);
    if (!mixin)
        return base;
    const baseColors = (_a = base === null || base === void 0 ? void 0 : base.colors) !== null && _a !== void 0 ? _a : {};
    const basePalette = (_c = (_b = base === null || base === void 0 ? void 0 : base.colors) === null || _b === void 0 ? void 0 : _b.palette) !== null && _c !== void 0 ? _c : {};
    const mixinColors = (_d = mixin.colors) !== null && _d !== void 0 ? _d : {};
    const mixinPalette = (_f = (_e = mixin === null || mixin === void 0 ? void 0 : mixin.colors) === null || _e === void 0 ? void 0 : _e.palette) !== null && _f !== void 0 ? _f : {};
    let colors = {};
    const palette = {};
    for (const name in _classic__WEBPACK_IMPORTED_MODULE_1__.classicThemeColors) {
        if (mixinColors === null || mixinColors === void 0 ? void 0 : mixinColors[name]) {
            colors[name] = mixinColors[name];
            if (isValidPaletteItem(mixinPalette === null || mixinPalette === void 0 ? void 0 : mixinPalette[name])) {
                palette[name] = mixinPalette[name];
            }
        }
        else if (baseColors === null || baseColors === void 0 ? void 0 : baseColors[name]) {
            colors[name] = baseColors[name];
            if (isValidPaletteItem(basePalette === null || basePalette === void 0 ? void 0 : basePalette[name])) {
                palette[name] = basePalette[name];
            }
        }
    }
    for (const name in _classic__WEBPACK_IMPORTED_MODULE_1__.classicCommonColors) {
        if (baseColors === null || baseColors === void 0 ? void 0 : baseColors[name]) {
            colors[name] = baseColors[name];
        }
        if (mixinColors === null || mixinColors === void 0 ? void 0 : mixinColors[name]) {
            colors[name] = mixinColors[name];
        }
    }
    if (Object.keys(palette).length > 0) {
        colors = Object.assign(Object.assign({}, colors), { palette });
    }
    colors = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.cloneDeep(colors);
    let mixed = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.merge(base, mixin);
    mixed = Object.assign(Object.assign({}, mixed), { colors });
    return mixed;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/styled/index.tsx":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/styled/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styled: () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../system */ "./jimu-theme/lib/system/index.ts");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");


const styled = (0,_system__WEBPACK_IMPORTED_MODULE_0__.createStyled)({
    defaultTheme: _theme_module__WEBPACK_IMPORTED_MODULE_1__.defaultTheme,
    rootShouldForwardProp: _system__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp
});


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/default-theme.ts":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/default-theme.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTheme: () => (/* binding */ defaultTheme)
/* harmony export */ });
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapping */ "./jimu-theme/lib/manager/mapping/index.ts");

const defaultTheme = (0,_mapping__WEBPACK_IMPORTED_MODULE_0__.createMixedTheme)();


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/index.ts":
/*!******************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeStore: () => (/* reexport safe */ _theme_store__WEBPACK_IMPORTED_MODULE_0__.ThemeStore),
/* harmony export */   defaultTheme: () => (/* reexport safe */ _default_theme__WEBPACK_IMPORTED_MODULE_6__.defaultTheme),
/* harmony export */   getAppThemeManifest: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getAppThemeManifest),
/* harmony export */   getBuilderThemeVariables: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getBuilderThemeVariables),
/* harmony export */   getComponentVariants: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getComponentVariants),
/* harmony export */   getNavigationVariables: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getNavigationVariables),
/* harmony export */   getRegisteredStyle: () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyle),
/* harmony export */   getTheme: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getTheme),
/* harmony export */   getTheme2: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getTheme2),
/* harmony export */   getTheme2Manifest: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getTheme2Manifest),
/* harmony export */   getTheme2Module: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getTheme2Module),
/* harmony export */   getTheme2Style: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getTheme2Style),
/* harmony export */   getThemeColorValue: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getThemeColorValue),
/* harmony export */   getThemeManifest: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getThemeManifest),
/* harmony export */   getThemeModule: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getThemeModule),
/* harmony export */   getThemeStyle: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getThemeStyle),
/* harmony export */   isCSSVariable: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isCSSVariable),
/* harmony export */   isThemeLoaded: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.isThemeLoaded),
/* harmony export */   loadTheme: () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_1__.loadTheme),
/* harmony export */   registerStyle: () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_3__.registerStyle),
/* harmony export */   registerStyles: () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_3__.registerStyles),
/* harmony export */   setThemeModule: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.setThemeModule),
/* harmony export */   useThemeLoaded: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.useThemeLoaded),
/* harmony export */   withStyles: () => (/* reexport safe */ _with_style__WEBPACK_IMPORTED_MODULE_4__.withStyles)
/* harmony export */ });
/* harmony import */ var _theme_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-store */ "./jimu-theme/lib/manager/theme-module/theme-store.ts");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./jimu-theme/lib/manager/theme-module/loader.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/theme-module/utils.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./jimu-theme/lib/manager/theme-module/register.ts");
/* harmony import */ var _with_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-style */ "./jimu-theme/lib/manager/theme-module/with-style.tsx");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type */ "./jimu-theme/lib/manager/theme-module/type.ts");
/* harmony import */ var _default_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-theme */ "./jimu-theme/lib/manager/theme-module/default-theme.ts");









/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/loader.ts":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/loader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTheme: () => (/* binding */ loadTheme)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./jimu-theme/lib/manager/theme-module/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const ThemeInfoCache = {};
const loadThemeInfo = (url) => __awaiter(void 0, void 0, void 0, function* () {
    if (ThemeInfoCache[url]) {
        if (ThemeInfoCache[url].toString() === '[object Promise]') {
            return yield ThemeInfoCache[url];
        }
        else {
            return Promise.resolve(ThemeInfoCache[url]);
        }
    }
    else {
        ThemeInfoCache[url] = window.fetch(url).then((res) => __awaiter(void 0, void 0, void 0, function* () { return yield res.json(); }));
        return ThemeInfoCache[url].then((res) => __awaiter(void 0, void 0, void 0, function* () {
            ThemeInfoCache[url] = res;
            return res;
        }));
    }
});
const loadThemeManifest = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAbsoluteRootUrl()}${uri}manifest.json`;
    return loadThemeInfo(url)
        .then((manifest) => {
        return manifest !== null && manifest !== void 0 ? manifest : {};
    })
        .catch((error) => {
        console.error(error);
    });
});
const loadThemeStyles = (uri, manifest) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!((_a = manifest === null || manifest === void 0 ? void 0 : manifest.styleFiles) === null || _a === void 0 ? void 0 : _a.js))
        return;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule(`${uri}style.js`);
});
const loadThemeVariables = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAbsoluteRootUrl()}${uri}variables.json`;
    return loadThemeInfo(url)
        .then((variables) => {
        return variables !== null && variables !== void 0 ? variables : {};
    })
        .catch((error) => {
        console.error(error);
    });
});
/**
  * Load theme by the theme uri.
  * @param uri
  */
const loadTheme = (uri) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isThemeLoaded)(uri)) {
        return Promise.resolve((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getThemeModule)(uri));
    }
    const manifest = yield loadThemeManifest(uri);
    const variables = yield loadThemeVariables(uri);
    const styles = yield loadThemeStyles(uri, manifest);
    const themeModule = { uri, manifest, styles, variables };
    return Promise.resolve(themeModule);
});


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/register.ts":
/*!*********************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/register.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredStyle: () => (/* binding */ getRegisteredStyle),
/* harmony export */   registerStyle: () => (/* binding */ registerStyle),
/* harmony export */   registerStyles: () => (/* binding */ registerStyles)
/* harmony export */ });
// Store the basic styles for jimu components.
const RegisteredStyles = {};
const RegisteredEntries = {};
const isRegisteredStyle = (name) => !!RegisteredStyles[name];
const isRegisteredStyleEntry = (entry) => !!RegisteredEntries[entry];
/**
 * Register the style function of the component, it will be used with `withStyles`.
 * @param name
 * @param style
 */
const registerStyle = (name, style) => {
    if (RegisteredStyles[name]) {
        console.warn(`The component style of ${name} has been registered.`);
        return;
    }
    RegisteredStyles[name] = style;
};
/**
 * Register the style function of the components in one entry, it will be used with `withStyles`.
 * @param entry
 */
const registerStyles = (entry, styles) => {
    if (isRegisteredStyleEntry(entry)) {
        console.warn(`The styles entry ${entry} has been registered.`);
        return;
    }
    RegisteredEntries[entry] = true;
    Object.entries(styles).forEach(([component, style]) => { registerStyle(component, style); });
};
/**
 * Get the basic style function of the specified component.
 * @param component
 * @param useTheme2
 */
const getRegisteredStyle = (component, showWarning) => {
    if (!isRegisteredStyle(component) && showWarning) {
        console.warn(`The component style of ${component} has't been registered.`);
    }
    return RegisteredStyles[component];
};


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/theme-store.ts":
/*!************************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/theme-store.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeStore: () => (/* binding */ ThemeStore)
/* harmony export */ });
const createThemeStore = () => {
    const state = {
        module: null,
        modules: {},
        module2: null
    };
    let listeners = [];
    //Only listen for changes of current module and theme2 module
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };
    const setModule = (module) => {
        state.module = module;
        listeners.forEach(listener => listener(module, false));
    };
    const setModules = (uri, module) => {
        state.modules[uri] = module;
    };
    const getModule = (uri, showWarning = true) => {
        if (!uri) {
            if (!state.module && showWarning) {
                console.warn('Theme is not loaded yet.');
            }
            return state.module;
        }
        else {
            const module = state.modules[uri];
            if (!module && showWarning) {
                console.warn('Theme ' + uri + ' is not loaded yet.');
            }
            return module;
        }
    };
    const setModule2 = (module) => {
        state.module2 = module;
        listeners.forEach(listener => listener(module, true));
    };
    const getModule2 = (showWarning = true) => {
        const module2 = state.module2;
        if (!module2 && showWarning) {
            console.warn('Theme2 has not been synchronized to the current frame.');
        }
        return module2;
    };
    return {
        setModule,
        setModules,
        getModule,
        setModule2,
        getModule2,
        subscribe
    };
};
const ThemeStore = createThemeStore();


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/type.ts":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/type.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/utils.ts":
/*!******************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/utils.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppThemeManifest: () => (/* binding */ getAppThemeManifest),
/* harmony export */   getBuilderThemeVariables: () => (/* binding */ getBuilderThemeVariables),
/* harmony export */   getComponentVariants: () => (/* binding */ getComponentVariants),
/* harmony export */   getNavigationVariables: () => (/* binding */ getNavigationVariables),
/* harmony export */   getTheme: () => (/* binding */ getTheme),
/* harmony export */   getTheme2: () => (/* binding */ getTheme2),
/* harmony export */   getTheme2Manifest: () => (/* binding */ getTheme2Manifest),
/* harmony export */   getTheme2Module: () => (/* binding */ getTheme2Module),
/* harmony export */   getTheme2Style: () => (/* binding */ getTheme2Style),
/* harmony export */   getThemeColorValue: () => (/* binding */ getThemeColorValue),
/* harmony export */   getThemeManifest: () => (/* binding */ getThemeManifest),
/* harmony export */   getThemeModule: () => (/* binding */ getThemeModule),
/* harmony export */   getThemeStyle: () => (/* binding */ getThemeStyle),
/* harmony export */   isCSSVariable: () => (/* binding */ isCSSVariable),
/* harmony export */   isThemeLoaded: () => (/* binding */ isThemeLoaded),
/* harmony export */   setThemeModule: () => (/* binding */ setThemeModule),
/* harmony export */   useThemeLoaded: () => (/* binding */ useThemeLoaded)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _theme_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-store */ "./jimu-theme/lib/manager/theme-module/theme-store.ts");


function getBuilderThemeVariables() {
    if (!window.jimuConfig.isInBuilder) {
        return null;
    }
    return getTheme2();
}
function getAppThemeVariables() {
    let variables = null;
    if (window.jimuConfig.isBuilder) {
        variables = getTheme2();
    }
    else {
        variables = getTheme();
    }
    return variables;
}
/**
 * Get component variables from theme variables.
 * @param categoryName
 */
function getComponentVariants(name) {
    var _a;
    const themeVariables = getAppThemeVariables();
    const component = themeVariables.getIn(['components', name]);
    const variants = (_a = component === null || component === void 0 ? void 0 : component.variants) !== null && _a !== void 0 ? _a : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ default: component });
    if (name === 'navButtonGroup') {
        let navButtonVariants = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        const variantKeys = ['default', 'primary', 'tertiary'];
        const buttonVariants = themeVariables.getIn(['components', 'button', 'variants']);
        variantKeys.forEach((variantKey) => {
            var _a;
            const rootVariant = variants === null || variants === void 0 ? void 0 : variants[variantKey];
            const baseVariant = (_a = variants === null || variants === void 0 ? void 0 : variants[variantKey]) === null || _a === void 0 ? void 0 : _a.item;
            const buttonVariant = buttonVariants === null || buttonVariants === void 0 ? void 0 : buttonVariants[variantKey];
            const variant = buttonVariant.merge(baseVariant !== null && baseVariant !== void 0 ? baseVariant : {}, { deep: true });
            navButtonVariants = navButtonVariants.set(variantKey, Object.assign(Object.assign({}, rootVariant), { item: variant }));
        });
        return navButtonVariants;
    }
    else {
        return variants;
    }
}
const navigationComponents = ['nav', 'pagination', 'slider', 'navButtonGroup'];
/**
 * Get components variables for navigation.
 * @returns
 */
const getNavigationVariables = () => {
    let variables = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    navigationComponents.forEach((name) => {
        const variants = getComponentVariants(name);
        variables = variables.set(name, variants);
    });
    return variables;
};
const CssVariableTester = /^var\(--(.+?)\)$/;
/**
 * Identify if a given string is a CSS variable.
 */
const isCSSVariable = (variable) => {
    return CssVariableTester.test(variable);
};
/**
 * Get value from a theme variable path.
 * @param path - Path to the theme variable.
 * @param variables - Target theme variables object used to get value from.
 * if undefined, the theme variables from the current app will be used.
 */
function getThemeValue(path, variables) {
    if (typeof path !== 'string') {
        return null;
    }
    variables = variables || getAppThemeVariables();
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.getValue(variables, path);
}
/**
 * Get value from a path to a theme color variable.
 * @param path - Path to the theme variable. There are two types of paths:
 * One is the path separated by dots,(e.g primary.200), the other is CSS variable(var(--primary-100))
 * @param variables - Target theme variables object used to get value from.
 * if undefined, the theme variables from the current app will be used.
 */
const getThemeColorValue = (path, variables) => {
    var _a;
    if (typeof path !== 'string') {
        return null;
    }
    let colorsPath = 'colors';
    let splittedColorPath;
    if (isCSSVariable(path)) {
        const pathExpArray = path.match(CssVariableTester);
        splittedColorPath = pathExpArray[1].split('-');
    }
    else {
        splittedColorPath = path.split('.');
    }
    if (splittedColorPath.length > 1 &&
        parseInt(splittedColorPath[1]) % 100 === 0) {
        colorsPath = 'colors.palette';
        // If it starts with `org`(e.g var(--org-body-color) => ['org', 'body', 'color']), it means it's an `orgSharedColors` color
    }
    else if ((splittedColorPath === null || splittedColorPath === void 0 ? void 0 : splittedColorPath[0]) === 'org') {
        colorsPath = 'colors.orgSharedColors';
        splittedColorPath = splittedColorPath.slice(1);
    }
    return (_a = getThemeValue(`${colorsPath}.${splittedColorPath.join('.')}`, variables)) !== null && _a !== void 0 ? _a : path;
};
/**
 * Check whether a specific theme module is loaded.
 * @param uri
 */
const isThemeLoaded = (uri) => {
    const loaded = !!_theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule(uri, false);
    return loaded;
};
/**
 * Get a specific theme module.
 * @param uri
 */
const getThemeModule = (uri, showWarning = true) => _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule(uri, showWarning);
/**
 * Get the theme module for theme2.
 * @param uri
 */
const getTheme2Module = (showWarning = true) => _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule2(showWarning);
/**
 * Update the currently used theme module.
 * Note: for components and widgets, this method should only be called during testing.
 */
const setThemeModule = (module) => { _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModule(module); };
const getThemeStyles = (uri) => {
    const module = getThemeModule(uri);
    const styles = module === null || module === void 0 ? void 0 : module.styles;
    return styles;
};
/**
 * Get the override style function of the specific component.
 * @param name
 * @param uri
 */
const getThemeStyle = (name, uri) => {
    const styleFunctions = getThemeStyles(uri);
    const styleFunction = styleFunctions === null || styleFunctions === void 0 ? void 0 : styleFunctions[name];
    return styleFunction;
};
/**
 * Get the theme manifest.
 * @param uri
 */
const getThemeManifest = (uri, showWarning = true) => {
    const module = getThemeModule(uri, showWarning);
    return module === null || module === void 0 ? void 0 : module.manifest;
};
/**
 * Get the theme manifest for theme2.
 * @param uri
 */
const getTheme2Manifest = (showWarning = true) => {
    const module = getTheme2Module(showWarning);
    return module === null || module === void 0 ? void 0 : module.manifest;
};
/**
 * Get the theme manifest for app themes.
 * @param uri
 */
const getAppThemeManifest = (uri, showWarning = true) => {
    let manifest = null;
    if (window.jimuConfig.isBuilder) {
        manifest = getTheme2Manifest(showWarning);
    }
    else {
        manifest = getThemeManifest(uri, showWarning);
    }
    return manifest;
};
/**
 * Get the override style function of the specific component for theme2.
 * @param name
 * @param uri
 */
const getTheme2Style = (name) => {
    const module = _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule2();
    const styles = module === null || module === void 0 ? void 0 : module.styles;
    const style = styles === null || styles === void 0 ? void 0 : styles[name];
    return style;
};
/**
 * Get the theme variable for the current iframe.
 */
const getTheme = () => {
    const module = _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule();
    return module === null || module === void 0 ? void 0 : module.theme;
};
/**
 * Get the theme variable for another framework.
 * In the app-in-builder env, this variable points to the builder.
 * In the builder env, this variable points to the app.
 * In a single app env, this variable is null.
 */
const getTheme2 = () => {
    const module = _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.getModule2();
    return module === null || module === void 0 ? void 0 : module.theme;
};
const useThemeLoaded = (uri) => {
    const [loaded, setLoaded] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const cancle = _theme_store__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.subscribe((module) => {
            if (module.uri === uri) {
                setLoaded(true);
            }
        });
        return () => { cancle(); };
    }, [uri]);
    return loaded;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/theme-module/with-style.tsx":
/*!************************************************************!*\
  !*** ./jimu-theme/lib/manager/theme-module/with-style.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withStyles: () => (/* binding */ withStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./jimu-theme/lib/manager/theme-module/register.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./jimu-theme/lib/manager/context/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");





/**
 * A higher-order component that links the registered component style.
 * @param Component
 * @param name
 * @param options
 */
function withStyles(Component, name, options) {
    const componentName = name || (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDisplayName)(Component);
    if (!componentName) {
        console.error('A component name is required.');
        return Component;
    }
    const StyledComponent = (0,_emotion___WEBPACK_IMPORTED_MODULE_1__.styled)(Component, options)((props) => {
        var _a, _b;
        const { theme: theme1, theme2, useTheme2 } = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useMultiThemeValue)();
        const theme = useTheme2 ? theme2 : theme1;
        const registeredStyle = (0,_register__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyle)(componentName, !useTheme2);
        const overwriteStyle = (_b = (_a = theme1.comp) === null || _a === void 0 ? void 0 : _a[componentName]) === null || _b === void 0 ? void 0 : _b.root.style;
        if (!registeredStyle && !overwriteStyle) {
            return null;
        }
        let mergeProps = props;
        if (useTheme2) {
            mergeProps = {};
            for (const key in props) {
                mergeProps[key] = props[key];
            }
            mergeProps.theme = theme;
        }
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css)(registeredStyle(mergeProps), overwriteStyle === null || overwriteStyle === void 0 ? void 0 : overwriteStyle(mergeProps));
    });
    StyledComponent.displayName = componentName;
    // To make storybook docgen work, this weird hack is needed
    // eslint-disable-next-line no-self-assign
    StyledComponent.displayName = StyledComponent.displayName;
    return StyledComponent;
}


/***/ }),

/***/ "./jimu-theme/lib/manager/use-theme-switching.ts":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/manager/use-theme-switching.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useThemeSwitching: () => (/* binding */ useThemeSwitching)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapping */ "./jimu-theme/lib/manager/mapping/index.ts");



const getCleanSharedThemeVariables = (sharedThemeVariables) => sharedThemeVariables === null || sharedThemeVariables === void 0 ? void 0 : sharedThemeVariables.without('fonts', 'logo');
const createTheme = (module, inputCustomTheme, sharedThemeVariables, customThemeOption) => {
    const uri = module === null || module === void 0 ? void 0 : module.uri;
    const customTheme = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.sharedThemeUtils.isSharedTheme(uri)
        ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.sharedThemeUtils.createCustomSharedThemeVariables(sharedThemeVariables)
        : inputCustomTheme);
    const sharedTheme = getCleanSharedThemeVariables(sharedThemeVariables);
    const themeOptions = (!(0,_mapping__WEBPACK_IMPORTED_MODULE_2__.whetherIsNewTheme)(module) ? customTheme : customThemeOption);
    let variables = (0,_mapping__WEBPACK_IMPORTED_MODULE_2__.createMixedTheme)(module, themeOptions, { sharedTheme });
    variables = variables
        .setIn(['colors', 'orgSharedColors'], sharedTheme)
        .setIn(['colors', 'getPalette'], () => { var _a; return (_a = variables.colors) === null || _a === void 0 ? void 0 : _a.palette; })
        .setIn(['colors', 'getOrgShareColors'], () => sharedTheme);
    window._theme = variables;
    return variables;
};
/**
 * When switching the theme or customizing the theme,
 * generate the latest theme variable and theme module.
 */
const useThemeSwitching = () => {
    const [module, setModule] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const uri = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a; return (_a = state.appConfig) === null || _a === void 0 ? void 0 : _a.theme; });
    const customTheme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a; return (_a = state.appConfig) === null || _a === void 0 ? void 0 : _a.customTheme; });
    const customThemeOptions = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a; return (_a = state.appConfig) === null || _a === void 0 ? void 0 : _a.customThemeOptions; });
    const sharedThemeVariables = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a; return (_a = state.appConfig) === null || _a === void 0 ? void 0 : _a.sharedThemeVariables; });
    const moduleRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!uri)
            return;
        (0,_theme_module__WEBPACK_IMPORTED_MODULE_1__.loadTheme)(uri).then((module) => {
            var _a, _b, _c;
            const customTheme = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _a === void 0 ? void 0 : _a.customTheme;
            const customThemeOptions = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _b === void 0 ? void 0 : _b.customThemeOptions;
            const sharedThemeVariables = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _c === void 0 ? void 0 : _c.sharedThemeVariables;
            const theme = createTheme(module, customTheme, sharedThemeVariables, customThemeOptions);
            const filledModule = Object.assign(Object.assign({}, module), { theme });
            moduleRef.current = filledModule;
            _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModules(module.uri, filledModule);
            _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModule(filledModule);
            setModule(filledModule);
        });
    }, [uri]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const module = moduleRef.current;
        if (!module)
            return;
        const uri = module.uri;
        const curi = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.theme;
        if (uri !== curi)
            return;
        const theme = createTheme(module, customTheme, sharedThemeVariables, customThemeOptions);
        const filledModule = Object.assign(Object.assign({}, module), { theme });
        _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModules(module.uri, filledModule);
        _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModule(filledModule);
        setModule(filledModule);
    }, [customTheme, sharedThemeVariables, customThemeOptions]);
    return module;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/use-theme-sync.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/manager/use-theme-sync.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useThemeSync: () => (/* binding */ useThemeSync)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-module */ "./jimu-theme/lib/manager/theme-module/index.ts");


const BuilderThemeChanged = 'to_app.theme_changed';
const AppThemeChanged = 'to_builder.theme_changed';
const AppThemeSwitcherLoaded = 'to_builder.app_theme_switcher_loaded';
/**
 * Synchronize theme variables and theme modules between the two frameworks.
 */
const useThemeSync = (module) => {
    const [module2, setModule2] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const module2Ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (window.jimuConfig.isInBuilder) {
            const pubsub = window.parent && window.parent._builderPubsub;
            pubsub.subscribe(BuilderThemeChanged, (evt, module) => {
                setModule2(module);
                _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModule2(module);
            });
            pubsub.publishSync(AppThemeSwitcherLoaded);
        }
        else if (window.jimuConfig.isBuilder) {
            const pubsub = window._builderPubsub;
            pubsub.subscribe(AppThemeChanged, (evt, module) => {
                setModule2(module);
                _theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.setModule2(module);
            });
            pubsub.subscribe(AppThemeSwitcherLoaded, () => {
                if (module2Ref.current) {
                    pubsub.publishSync(BuilderThemeChanged, module2Ref.current);
                }
            });
        }
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!module || !module.theme)
            return;
        if (window.jimuConfig.isInBuilder) {
            const pubsub = window.parent && window.parent._builderPubsub;
            pubsub.publishSync(AppThemeChanged, module);
        }
        else if (window.jimuConfig.isBuilder) {
            module2Ref.current = module;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [module]);
    return module2;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/utils/create-theme-options.ts":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/manager/utils/create-theme-options.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createColorSchemeOptions: () => (/* binding */ createColorSchemeOptions),
/* harmony export */   createThemeCompOptions: () => (/* binding */ createThemeCompOptions),
/* harmony export */   createThemeOptions: () => (/* binding */ createThemeOptions),
/* harmony export */   createThemeRefOptions: () => (/* binding */ createThemeRefOptions),
/* harmony export */   createThemeSrcOptions: () => (/* binding */ createThemeSrcOptions),
/* harmony export */   createThemeSysOptions: () => (/* binding */ createThemeSysOptions)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const isValidSchemeColor = (name, value) => {
    if (!value)
        return false;
    if (['primary', 'secondary', 'error', 'warning', 'info', 'success'].includes(name)) {
        return !!value.main;
    }
    else if (name === 'surface' || name === 'divider' || name === 'action') {
        return Object.keys(value).length > 0;
    }
};
const SchemeColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
const SchemeElementColors = ['surface', 'divider', 'action'];
const createColorSchemeOptions = (base, mixin, mode = 'light') => {
    const color = { mode };
    SchemeColors.forEach((name) => {
        const baseSchemeColor = base === null || base === void 0 ? void 0 : base[name];
        const mixinSchemeColor = mixin === null || mixin === void 0 ? void 0 : mixin[name];
        if (isValidSchemeColor(name, mixinSchemeColor)) {
            color[name] = mixinSchemeColor;
        }
        else if (isValidSchemeColor(name, baseSchemeColor)) {
            color[name] = baseSchemeColor;
        }
    });
    SchemeElementColors.forEach((name) => {
        const basePalette = base === null || base === void 0 ? void 0 : base[name];
        const mixinPalette = mixin === null || mixin === void 0 ? void 0 : mixin[name];
        if (isValidSchemeColor(name, basePalette) && isValidSchemeColor(name, mixinPalette)) {
            color[name] = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(basePalette, mixinPalette);
        }
        else {
            if (isValidSchemeColor(name, mixinPalette)) {
                color[name] = mixinPalette;
            }
            else if (isValidSchemeColor(name, basePalette)) {
                color[name] = basePalette;
            }
        }
    });
    return color;
};
const Modes = ['light', 'dark'];
const createModeBasedColorSchemeOptions = (base, mixin) => {
    var _a;
    const basePalettes = base !== null && base !== void 0 ? base : {};
    const mixinPalettes = (mixin !== null && mixin !== void 0 ? mixin : {});
    const options = {};
    Modes.forEach((mode) => {
        if (basePalettes[mode] || mixinPalettes[mode]) {
            const palette = createColorSchemeOptions(basePalettes[mode], mixinPalettes[mode], mode);
            options[mode] = palette;
        }
    });
    const mode = (_a = base === null || base === void 0 ? void 0 : base.mode) !== null && _a !== void 0 ? _a : mixin === null || mixin === void 0 ? void 0 : mixin.mode;
    const defaultOption = mode ? { mode } : null;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(options) ? defaultOption : Object.assign(Object.assign({}, options), { mode: mode !== null && mode !== void 0 ? mode : 'light' });
};
const createThemeSrcOptions = (base, mixin) => {
    if (!mixin)
        return base;
    if (!base)
        return mixin;
    const source = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(base, mixin);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(source) ? null : source;
};
const createThemeRefOptions = (base, mixin) => {
    var _a, _b;
    if (!mixin)
        return base;
    if (!base)
        return mixin;
    const palette = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)((_a = base.palette) !== null && _a !== void 0 ? _a : {}, mixin.palette);
    const typeface = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)((_b = base.typeface) !== null && _b !== void 0 ? _b : {}, mixin.typeface);
    const options = {};
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(palette)) {
        options.palette = palette;
    }
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(typeface)) {
        options.typeface = typeface;
    }
    return options;
};
const createThemeSysOptions = (base, mixin) => {
    var _a, _b, _c;
    const color = createModeBasedColorSchemeOptions(base === null || base === void 0 ? void 0 : base.color, mixin === null || mixin === void 0 ? void 0 : mixin.color);
    const options = {};
    if (color) {
        options.color = color;
    }
    const shape = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)((_a = base === null || base === void 0 ? void 0 : base.shape) !== null && _a !== void 0 ? _a : {}, mixin === null || mixin === void 0 ? void 0 : mixin.shape);
    const shadow = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)((_b = base === null || base === void 0 ? void 0 : base.shadow) !== null && _b !== void 0 ? _b : {}, mixin === null || mixin === void 0 ? void 0 : mixin.shadow);
    const typography = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)((_c = base === null || base === void 0 ? void 0 : base.typography) !== null && _c !== void 0 ? _c : {}, mixin === null || mixin === void 0 ? void 0 : mixin.typography);
    const spacing = (mixin === null || mixin === void 0 ? void 0 : mixin.spacing) || (base === null || base === void 0 ? void 0 : base.spacing);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(shape)) {
        options.shape = shape;
    }
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(shadow)) {
        options.shadow = shadow;
    }
    if (spacing) {
        options.spacing = spacing;
    }
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(typography)) {
        options.typography = typography;
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(options) ? null : options;
};
const createThemeCompOptions = (base, mixin, styles) => {
    const vars = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(base !== null && base !== void 0 ? base : {}, mixin || {});
    const comp = {};
    Object.entries(vars).forEach(([name, slotVars]) => {
        Object.entries(slotVars).forEach(([slot, vars]) => {
            if (comp[name]) {
                comp[name][slot] = { vars };
            }
            else {
                comp[name] = { [slot]: { vars } };
            }
        });
    });
    if (styles) {
        Object.entries(styles).forEach(([name, slotStyles]) => {
            Object.entries(slotStyles).forEach(([slot, style]) => {
                if (comp[name]) {
                    if (comp[name][slot]) {
                        comp[name][slot].style = style;
                    }
                    else {
                        comp[name][slot] = { style };
                    }
                }
                else {
                    comp[name] = { [slot]: { style } };
                }
            });
        });
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(comp) ? null : comp;
};
/**
 * Merge two theme options.
 */
const createThemeOptions = (base, mixin, styles) => {
    if (!base && !mixin && !styles)
        return null;
    const src = createThemeSrcOptions(base === null || base === void 0 ? void 0 : base.src, mixin === null || mixin === void 0 ? void 0 : mixin.src);
    const ref = createThemeRefOptions(base === null || base === void 0 ? void 0 : base.ref, mixin === null || mixin === void 0 ? void 0 : mixin.ref);
    const sys = createThemeSysOptions(base === null || base === void 0 ? void 0 : base.sys, mixin === null || mixin === void 0 ? void 0 : mixin.sys);
    const comp = createThemeCompOptions(base === null || base === void 0 ? void 0 : base.comp, mixin === null || mixin === void 0 ? void 0 : mixin.comp, styles);
    const options = {};
    if (ref) {
        options.ref = ref;
    }
    if (sys) {
        options.sys = sys;
    }
    if (src) {
        options.src = src;
    }
    if (comp) {
        options.comp = comp;
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(options) ? null : options;
};


/***/ }),

/***/ "./jimu-theme/lib/manager/utils/focus.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/manager/utils/focus.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFocusStyles: () => (/* binding */ getFocusStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const getFocusStyles = (focusedStyles, prefix) => {
    const focusedOutline = `${focusedStyles.width} solid ${focusedStyles.color}`;
    const focusedBoxShadow = `0 0px 0px 2px ${focusedStyles.color}`;
    const focusStyle = {
        /* For browsers those do not support :focus-visible*/
        /**:-moz-focusring,  FF, before 85, but it affects chrome */
        '&:focus, &:focus-visible, *:focus, *:focus-visible': {
            outline: focusedOutline,
            outlineOffset: focusedStyles.offset
        },
        '.jimu-outline-inside': {
            '&:focus, &:focus-visible': {
                outlineOffset: `-${focusedStyles.offset}`
            }
        },
        /* Custom interactive elements, like radio, checkbox, switch*/
        [`.${jimu_core__WEBPACK_IMPORTED_MODULE_0__.INTERACTIVE_CLASS}`]: {
            '&:focus-within': {
                boxShadow: `${focusedBoxShadow} !important`
            }
        }
    };
    return prefix
        ? {
            '.jimu-keyboard-nav': {
                [prefix]: focusStyle
            }
        }
        : {
            '&.jimu-keyboard-nav': focusStyle
        };
};


/***/ }),

/***/ "./jimu-theme/lib/manager/utils/index.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/manager/utils/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createThemeOptions: () => (/* reexport safe */ _create_theme_options__WEBPACK_IMPORTED_MODULE_0__.createThemeOptions),
/* harmony export */   getFocusStyles: () => (/* reexport safe */ _focus__WEBPACK_IMPORTED_MODULE_1__.getFocusStyles),
/* harmony export */   getLoadingStyles: () => (/* reexport safe */ _loading__WEBPACK_IMPORTED_MODULE_2__.getLoadingStyles),
/* harmony export */   themeOptionsUtils: () => (/* reexport module object */ _create_theme_options__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _create_theme_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-theme-options */ "./jimu-theme/lib/manager/utils/create-theme-options.ts");
/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus */ "./jimu-theme/lib/manager/utils/focus.ts");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ "./jimu-theme/lib/manager/utils/loading.ts");







/***/ }),

/***/ "./jimu-theme/lib/manager/utils/loading.ts":
/*!*************************************************!*\
  !*** ./jimu-theme/lib/manager/utils/loading.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoadingStyles: () => (/* binding */ getLoadingStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const getLoadingStyles = (width, height, color, name) => {
    return {
        [`@keyframes loading-keys-${name}`]: {
            '0%,80%,100%': {
                opacity: 0.75,
                boxShadow: `0 0 ${color}`,
                height: height
            },
            '40%': {
                opacity: 1,
                boxShadow: `0 -0.5rem ${color}`,
                height: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`1.25 * ${height}`)
            }
        },
        textIndent: '-9999em',
        margin: 'auto',
        position: 'absolute',
        right: `calc(50% - ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${width} * 0.5`)})`,
        top: `calc(50% - ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`${height} * 0.5`)})`,
        animationDelay: '0.16s !important',
        '&:before,&:after,&': {
            background: color,
            animation: `loading-keys-${name} 0.8s infinite ease-in-out`,
            width: width,
            height: height
        },
        '&:before,&:after': {
            position: 'absolute',
            top: 0,
            content: '""'
        },
        '&:before': {
            left: `-${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`1.47 * ${width}`)}`
        },
        '&:after': {
            left: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`1.47 * ${width}`),
            animationDelay: '0.32s'
        }
    };
};


/***/ }),

/***/ "./jimu-theme/lib/manager/with-theme/index.tsx":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/manager/with-theme/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withBuilderTheme: () => (/* binding */ withBuilderTheme),
/* harmony export */   withTheme: () => (/* binding */ withTheme),
/* harmony export */   withTheme2: () => (/* binding */ withTheme2)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./jimu-theme/lib/manager/context/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./jimu-theme/lib/manager/global/index.tsx");





/**
 * A higher-order component that provides the current theme as a prop to the wrapped child and listens for changes.
 * If the theme is updated, the child component will be re-rendered accordingly.
 */
function withTheme(Component, multiTheme = false) {
    const componentName = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDisplayName)(Component);
    function render(props, ref) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { theme: theme1, theme2, useTheme2 } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useMultiThemeValue)();
        const themeProps = {};
        let classes = props.className;
        if (useTheme2) {
            themeProps.theme = theme2;
            if (multiTheme) {
                themeProps.theme2 = theme1;
            }
            classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(classes, _global__WEBPACK_IMPORTED_MODULE_4__.Theme2GlobalStyleClassName);
            themeProps.className = classes;
        }
        else {
            themeProps.theme = theme1;
            if (multiTheme) {
                themeProps.theme2 = theme2;
            }
        }
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Component, Object.assign({ ref: ref }, props, themeProps));
    }
    const WithTheme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef(render);
    WithTheme.displayName = `WithTheme(${componentName})`;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__(WithTheme, Component);
}
/**
* A higher-order component that provides the theme2 as a prop to the
* wrapped child and listens for changes.
* @param Component
*/
function withTheme2(Component) {
    const componentName = Component.displayName || Component.name || 'Component';
    const ThemedComponent = withTheme(Component);
    function render(props, ref) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_context__WEBPACK_IMPORTED_MODULE_2__.ThemeSwitchComponent, { useTheme2: true },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ThemedComponent, Object.assign({}, props, { ref: ref })));
    }
    const WithTheme2 = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef(render);
    WithTheme2.displayName = `WithTheme2(${componentName})`;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__(WithTheme2, Component);
}
/**
 * A higher-order component that provides the builder theme as a prop to the
 * wrapped child and listens for changes.
 * @param Component
 */
const withBuilderTheme = withTheme2;


/***/ }),

/***/ "./jimu-theme/lib/system/color-scheme/index.ts":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/system/color-scheme/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   augmentColor: () => (/* binding */ augmentColor),
/* harmony export */   "default": () => (/* binding */ createColorScheme),
/* harmony export */   getSchemeColor: () => (/* binding */ getSchemeColor)
/* harmony export */ });
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/color */ "./jimu-theme/lib/utils/color/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _reference_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reference/palette */ "./jimu-theme/lib/system/reference/palette.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const ColorSchemeKeyNames = ['primary', 'secondary', 'error'];
const ColorSchemeExtNames = ['warning', 'info', 'success'];
const ColorSchemeMapping = {
    light: {
        light: 500,
        main: 600,
        dark: 700,
        text: 0
    },
    dark: {
        light: 100,
        main: 200,
        dark: 300,
        text: 900
    }
};
const getSchemeColor = (palette, mode) => {
    const light = palette[ColorSchemeMapping[mode].light];
    const main = palette[ColorSchemeMapping[mode].main];
    const dark = palette[ColorSchemeMapping[mode].dark];
    const text = palette[ColorSchemeMapping[mode].text];
    return { light, main, dark, text };
};
function augmentColor(color, mode = 'light', name) {
    color = Object.assign({}, color);
    if (!Object.hasOwnProperty.call(color, 'main')) {
        throw new Error(`The color ${name} provided to augmentColor(color) is invalid.
        The color object needs to have a "main" property.`);
    }
    if (typeof color.main !== 'string') {
        throw new Error(`The color ${name} provided to augmentColor(color) is invalid.
      "color.main" should be a string, but ${color.main} was provided instead.`);
    }
    const { type } = (0,_utils_color__WEBPACK_IMPORTED_MODULE_0__.decomposeColor)(color.main);
    if (!['rgb', 'rgba'].includes(type)) {
        throw new Error(`The color ${name} provided to augmentColor(color) is invalid.
       The following formats are supported: #nnn, #nnnnnn, rgb(), rgba().`);
    }
    if (!color.light || !color.dark || !color.text) {
        const palette = (0,_reference_palette__WEBPACK_IMPORTED_MODULE_2__.createReferencePaletteColor)(color.main);
        if (!color.light) {
            color.light = palette[ColorSchemeMapping[mode].light];
        }
        if (!color.dark) {
            color.dark = palette[ColorSchemeMapping[mode].dark];
        }
        if (!color.text) {
            color.text = palette[ColorSchemeMapping[mode].text];
        }
    }
    return color;
}
const lightFromReferencePalette = (palette) => {
    const scheme = {};
    ColorSchemeKeyNames.forEach((name) => {
        scheme[name] = {
            light: palette[name][500],
            main: palette[name][600],
            dark: palette[name][700],
            text: palette.neutral[100]
        };
    });
    ColorSchemeExtNames.forEach((name) => {
        scheme[name] = {
            light: palette[name][500],
            main: palette[name][600],
            dark: palette[name][700],
            text: palette.neutral[100]
        };
    });
    scheme.surface = {
        background: palette.neutral[300],
        backgroundText: palette.neutral[1300],
        backgroundHint: palette.neutral[1100],
        paper: palette.neutral[200],
        paperText: palette.neutral[1200],
        paperHint: palette.neutral[1000],
        overlay: palette.neutral[100],
        overlayText: palette.neutral[1100],
        overlayHint: palette.neutral[900]
    };
    scheme.divider = {
        primary: palette.neutral[600],
        secondary: palette.neutral[500],
        tertiary: palette.neutral[400],
        input: palette.neutral[700]
    };
    scheme.action = {
        default: palette.neutral[200],
        hover: palette.neutral[400],
        pressed: palette.neutral[500],
        text: palette.neutral[1300],
        disabled: {
            default: palette.neutral[400],
            text: palette.neutral[600]
        },
        focus: scheme.primary.light,
        selected: {
            default: scheme.primary.main,
            hover: scheme.primary.dark,
            text: scheme.primary.text
        },
        link: {
            default: scheme.primary.main,
            hover: scheme.primary.dark,
            visited: palette.neutral[1000]
        }
    };
    return scheme;
};
const darkFromReferencePalette = (palette) => {
    const scheme = {};
    ColorSchemeKeyNames.forEach((name) => {
        scheme[name] = {
            light: palette[name][100],
            main: palette[name][200],
            dark: palette[name][300],
            text: palette[name][900]
        };
    });
    ColorSchemeExtNames.forEach((name) => {
        scheme[name] = {
            light: palette[name][100],
            main: palette[name][200],
            dark: palette[name][300],
            text: palette[name][900]
        };
    });
    scheme.surface = {
        background: palette.neutral[1200],
        backgroundText: palette.neutral[300],
        backgroundHint: palette.neutral[500],
        paper: palette.neutral[1100],
        paperText: palette.neutral[200],
        paperHint: palette.neutral[400],
        overlay: palette.neutral[1000],
        overlayText: palette.neutral[100],
        overlayHint: palette.neutral[300]
    };
    scheme.divider = {
        primary: palette.neutral[700],
        secondary: palette.neutral[800],
        tertiary: palette.neutral[900],
        input: palette.neutral[600]
    };
    scheme.action = {
        default: palette.neutral[700],
        hover: palette.neutral[600],
        pressed: palette.neutral[900],
        text: palette.neutral[100],
        disabled: {
            default: palette.neutral[800],
            text: palette.neutral[600]
        },
        focus: scheme.primary.light,
        selected: {
            default: scheme.primary.main,
            hover: scheme.primary.dark,
            text: scheme.primary.text
        },
        link: {
            default: scheme.primary.main,
            hover: scheme.primary.dark,
            visited: palette.neutral[1000]
        }
    };
    return scheme;
};
const schemeFromReferencePalette = (palette, mode = 'light') => {
    const scheme = mode === 'dark' ? darkFromReferencePalette(palette) : lightFromReferencePalette(palette);
    return scheme;
};
function createColorScheme(options, palette) {
    let { mode = 'light', primary: inputPrimary, secondary: inputSecondary, error: inputError, info: inputInfo, success: inputSuccess, warning: inputWarning, surface: inputSurface, action: inputAction, divider: inputDivider } = options, other = __rest(options, ["mode", "primary", "secondary", "error", "info", "success", "warning", "surface", "action", "divider"]);
    if (mode !== 'light' && mode !== 'dark') {
        mode = 'light';
        console.error(`The palette mode \`${mode}\` is not supported.`);
    }
    const scheme = schemeFromReferencePalette(palette, mode);
    inputPrimary = inputPrimary || scheme.primary;
    inputSecondary = inputSecondary || scheme.secondary;
    inputError = inputError || scheme.error;
    inputWarning = inputWarning || scheme.warning;
    inputInfo = inputInfo || scheme.info;
    inputSuccess = inputSuccess || scheme.success;
    inputSurface = inputSurface || scheme.surface;
    inputAction = inputAction || scheme.action;
    inputDivider = inputDivider || scheme.divider;
    const primary = augmentColor(inputPrimary, mode, 'primary');
    const secondary = augmentColor(inputSecondary, mode, 'secondary');
    const error = augmentColor(inputError, mode, 'error');
    const warning = augmentColor(inputWarning, mode, 'warning');
    const info = augmentColor(inputInfo, mode, 'info');
    const success = augmentColor(inputSuccess, mode, 'success');
    const surface = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(scheme.surface, inputSurface);
    const divider = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(scheme.divider, inputDivider);
    const action = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(scheme.action, inputAction);
    const output = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)({
        mode,
        primary,
        secondary,
        error,
        warning,
        info,
        success,
        surface,
        divider,
        action
    }, other);
    return output;
}


/***/ }),

/***/ "./jimu-theme/lib/system/component/index.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/system/component/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overrides */ "./jimu-theme/lib/system/component/overrides.ts");
// Sample theme.comp options
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SampleComponents = {
    Checkbox: {
        root: {
            style: ({ theme, ownerState }) => {
                return `
        background-color: ${ownerState.checked ? theme.sys.color.action.selected.default : theme.sys.color.action.default};
        `;
            }
        },
        icon: {
            style: ({ theme, ownerState }) => {
                return {
                    color: ownerState.checked ? theme.sys.color.action.selected.text : theme.sys.color.action.text
                };
            }
        }
    },
    Radio: {
        root: {
            vars: {
                color: '#fff'
            },
            style: ({ ownerState, theme }) => ({
                background: ownerState.checked ? theme.sys.color.action.selected.default : theme.sys.color.action.default
            })
        }
    }
};



/***/ }),

/***/ "./jimu-theme/lib/system/component/overrides.ts":
/*!******************************************************!*\
  !*** ./jimu-theme/lib/system/component/overrides.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-theme/lib/system/create-theme/index.ts":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/system/create-theme/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _color_scheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-scheme */ "./jimu-theme/lib/system/color-scheme/index.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shadow */ "./jimu-theme/lib/system/shadow/index.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shape */ "./jimu-theme/lib/system/shape/index.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spacing */ "./jimu-theme/lib/system/spacing/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typography */ "./jimu-theme/lib/system/typography/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reference */ "./jimu-theme/lib/system/reference/index.ts");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../source */ "./jimu-theme/lib/system/source/index.ts");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mixin */ "./jimu-theme/lib/system/mixin/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









const DefaultColorOptions = {
    mode: 'light'
};
const createTheme = (options, mixin) => {
    var _a, _b;
    const _c = options || {}, { src = _source__WEBPACK_IMPORTED_MODULE_7__.DefaultThemeSourceOptions, ref: inputRef, sys, comp, mixin: inputMixins } = _c, other = __rest(_c, ["src", "ref", "sys", "comp", "mixin"]);
    const { color: colorInput = DefaultColorOptions, typography: typographyInput = {}, spacing: spacingInput = 4, shadow: shadowsInput, shape: shapeInput = _shape__WEBPACK_IMPORTED_MODULE_2__["default"] } = sys || {};
    const mode = (_a = colorInput.mode) !== null && _a !== void 0 ? _a : 'light';
    const colorOption = (_b = colorInput === null || colorInput === void 0 ? void 0 : colorInput[mode]) !== null && _b !== void 0 ? _b : { mode };
    const ref = (0,_reference__WEBPACK_IMPORTED_MODULE_6__.createReference)(src, inputRef);
    const color = (0,_color_scheme__WEBPACK_IMPORTED_MODULE_0__["default"])(colorOption, ref.palette);
    const spacing = (0,_spacing__WEBPACK_IMPORTED_MODULE_3__["default"])(spacingInput);
    const shadow = (0,_shadow__WEBPACK_IMPORTED_MODULE_1__["default"])(shadowsInput);
    const shape = (0,_shape__WEBPACK_IMPORTED_MODULE_2__.createShape)(shapeInput);
    const typography = (0,_typography__WEBPACK_IMPORTED_MODULE_4__["default"])(ref.typeface, typographyInput);
    mixin = (0,_mixin__WEBPACK_IMPORTED_MODULE_8__.createMixin)(inputMixins, mixin);
    let theme = {
        src,
        ref,
        sys: {
            color,
            shadow,
            typography,
            spacing,
            shape
        },
        comp,
        mixin
    };
    theme = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.deepmerge)(theme, other);
    return theme;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTheme);


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-baseline/index.tsx":
/*!*************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-baseline/index.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssBaseline: () => (/* binding */ CssBaseline),
/* harmony export */   getThemeBaselineStyles: () => (/* binding */ getThemeBaselineStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");



const html = (theme) => {
    return ({
        webkitFontSmoothing: 'antialiased', // Antialiasing.
        mozOsxFontSmoothing: 'grayscale', // Antialiasing.
        webkitTextSizeAdjust: '100%', // Fix font resize problem in iOS
        msTextSizeAdjust: '100%',
        mozTextSizeAdjust: '100%',
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
        fontSize: theme.ref.typeface.htmlFontSize
    });
};
const defaultFontStyle = (theme) => ({
    color: theme.sys.color.surface.backgroundText,
    fontFamily: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeFontFamily)(theme.sys.typography.body2.fontFamily),
    fontWeight: theme.sys.typography.body2.fontWeight,
    fontSize: theme.sys.typography.body2.fontSize,
    lineHeight: theme.sys.typography.body2.lineHeight
});
const body = (theme) => (Object.assign(Object.assign({}, defaultFontStyle(theme)), { backgroundColor: theme.sys.color.surface.background, margin: 0, '@media print': {
        // Save printer ink.
        backgroundColor: theme.ref.palette.neutral[100]
    }, 
    // Add support for document.body.requestFullScreen().
    // Other elements, if background transparent, are not supported.
    '&::backdrop': {
        backgroundColor: theme.sys.color.surface.background
    } }));
const getThemeBaselineStyles = (theme) => {
    var _a, _b, _c;
    let styles = [{
            'strong, b': {
                fontWeight: theme.sys.typography.fontWeightBold
            },
            html: html(theme),
            body: body(theme)
        }];
    let overrideStyles;
    const themeOverrides = (_c = (_b = (_a = theme.comp) === null || _a === void 0 ? void 0 : _a.CssBaseline) === null || _b === void 0 ? void 0 : _b.root) === null || _c === void 0 ? void 0 : _c.style;
    if (themeOverrides) {
        overrideStyles = typeof themeOverrides === 'function' ? (theme) => themeOverrides({ theme }) : themeOverrides;
        styles = styles.concat(overrideStyles);
    }
    return styles;
};
const CssBaseline = (props) => {
    const { theme } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => getThemeBaselineStyles(theme), [theme]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { styles: styles, theme: theme }));
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/border.ts":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/border.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   borderColorUtilities: () => (/* binding */ borderColorUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const borderColorUtilities = (theme) => {
    var _a;
    const borderWidth = '1px';
    const borderColor = (_a = theme.sys.color.divider.primary) !== null && _a !== void 0 ? _a : '#ccc';
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getBorderColorUtilities)(borderColor, borderWidth, theme.ref.palette.white);
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/color.ts":
/*!*************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/color.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorsUtilities: () => (/* binding */ colorsUtilities)
/* harmony export */ });
const bgClass = (color) => ({ background: `${color} !important` });
const borderClass = (color) => ({ borderColor: `${color} !important` });
const textClass = (color) => ({ color: `${color} !important` });
const colorsUtilities = (colors) => {
    const utilities = {};
    const surface = colors.surface;
    utilities['.bg-default'] = bgClass(surface.background);
    utilities['.text-default'] = textClass(surface.backgroundText);
    utilities['.hint-default'] = textClass(surface.backgroundHint);
    utilities['.bg-paper'] = bgClass(surface.paper);
    utilities['.text-paper'] = textClass(surface.paperText);
    utilities['.hint-paper'] = textClass(surface.paperHint);
    utilities['.bg-overlay'] = bgClass(surface.overlay);
    utilities['.text-overlay'] = textClass(surface.overlayText);
    utilities['.hint-overlay'] = textClass(surface.overlayHint);
    const action = colors.action;
    utilities['.text-disabled'] = textClass(action.disabled.text);
    const divider = colors.divider;
    utilities['.border-primary'] = borderClass(divider.primary);
    utilities['.border-secondary'] = borderClass(divider.secondary);
    utilities['.border-tertiary'] = borderClass(divider.tertiary);
    utilities['.border-input'] = borderClass(divider.input);
    return utilities;
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/index.tsx":
/*!**************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssUtilitiesProvider: () => (/* binding */ CssUtilitiesProvider),
/* harmony export */   classesUtils: () => (/* binding */ classesUtils)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./jimu-theme/lib/system/global/css-utilities/color.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing */ "./jimu-theme/lib/system/global/css-utilities/spacing.ts");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadows */ "./jimu-theme/lib/system/global/css-utilities/shadows.ts");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape */ "./jimu-theme/lib/system/global/css-utilities/shape.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography */ "./jimu-theme/lib/system/global/css-utilities/typography.ts");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./border */ "./jimu-theme/lib/system/global/css-utilities/border.ts");








const getThemeUtilities = (theme) => {
    const sys = theme.sys;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_color__WEBPACK_IMPORTED_MODULE_1__.colorsUtilities)(sys.color)), (0,_border__WEBPACK_IMPORTED_MODULE_7__.borderColorUtilities)(theme)), (0,_spacing__WEBPACK_IMPORTED_MODULE_2__.spacingUtilities)(sys.spacing)), (0,_shadows__WEBPACK_IMPORTED_MODULE_3__.shadowUtilities)(sys.shadow)), (0,_shape__WEBPACK_IMPORTED_MODULE_5__.shapeUtilities)(sys.shape)), (0,_typography__WEBPACK_IMPORTED_MODULE_6__.typographyUtilities)(sys.typography));
};
const CssUtilitiesProvider = (props) => {
    const { theme } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => getThemeUtilities(theme), [theme]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_4__.GlobalStyle, { styles: styles, theme: theme }));
};
const classesUtils = { colorsUtilities: _color__WEBPACK_IMPORTED_MODULE_1__.colorsUtilities, borderColorUtilities: _border__WEBPACK_IMPORTED_MODULE_7__.borderColorUtilities, spacingUtilities: _spacing__WEBPACK_IMPORTED_MODULE_2__.spacingUtilities, shadowUtilities: _shadows__WEBPACK_IMPORTED_MODULE_3__.shadowUtilities, shapeUtilities: _shape__WEBPACK_IMPORTED_MODULE_5__.shapeUtilities, typographyUtilities: _typography__WEBPACK_IMPORTED_MODULE_6__.typographyUtilities };


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/shadows.ts":
/*!***************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/shadows.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shadowUtilities: () => (/* binding */ shadowUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const getShadowUtilities = (shadows) => {
    const classes = {};
    if (!shadows)
        return classes;
    Object.keys(shadows).forEach((level) => {
        const key = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)('shadow', level);
        const ruleName = `shadow-${key}`;
        classes[`.${ruleName}`] = {
            boxShadow: `${shadows[level]} !important`
        };
        if (level === 'shadow2') {
            classes['.shadow'] = {
                boxShadow: `${shadows[level]} !important`
            };
        }
    });
    return classes;
};
const shadowUtilities = (inputShadows) => {
    return getShadowUtilities(inputShadows);
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/shape.ts":
/*!*************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/shape.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shapeUtilities: () => (/* binding */ shapeUtilities)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");

const shapeUtilities = (shape) => {
    const classes = {
        '.rounded-0': {
            borderRadius: 'none !important'
        }
    };
    Object.entries(shape).forEach(([level, value]) => {
        const key = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)('shape', level);
        const ruleName = `.rounded-${key}`;
        classes[ruleName] = {
            borderRadius: `${value} !important`
        };
    });
    return classes;
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/spacing.ts":
/*!***************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/spacing.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spacingUtilities: () => (/* binding */ spacingUtilities)
/* harmony export */ });
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../spacing */ "./jimu-theme/lib/system/spacing/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");


const SpacingVariants = [0].concat(_spacing__WEBPACK_IMPORTED_MODULE_0__.ThemeSpacingVariants);
const spacingUtilities = (spacing) => {
    let utilities = {};
    SpacingVariants.forEach((variant) => {
        const value = spacing(variant);
        utilities = Object.assign(Object.assign({}, utilities), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSpacingUtilities)(variant, value));
    });
    utilities = Object.assign(Object.assign({}, utilities), { '.m-auto': {
            margin: 'auto !important'
        }, '.mt-auto': {
            marginTop: 'auto !important'
        }, '.my-auto': {
            marginTop: 'auto !important',
            marginBottom: 'auto !important'
        }, '.mr-auto': {
            marginRight: 'auto !important'
        }, '.mx-auto': {
            marginLeft: 'auto !important',
            marginRight: 'auto !important'
        }, '.mb-auto': {
            marginBottom: 'auto !important'
        }, '.ml-auto': {
            marginLeft: 'auto !important'
        } });
    return utilities;
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-utilities/typography.ts":
/*!******************************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-utilities/typography.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typographyUtilities: () => (/* binding */ typographyUtilities)
/* harmony export */ });
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../typography */ "./jimu-theme/lib/system/typography/index.ts");

const typographyUtilities = (typography) => {
    const utilities = {};
    _typography__WEBPACK_IMPORTED_MODULE_0__.TypographyVariants.forEach((variant) => {
        const ruleName = `.${variant}`;
        if (variant.indexOf('h') === 0) {
            utilities[variant] = typography[variant];
        }
        utilities[ruleName] = {
            fontFamily: `${typography[variant].fontFamily} !important`,
            fontWeight: `${typography[variant].fontWeight} !important`,
            fontSize: `${typography[variant].fontSize} !important`,
            lineHeight: `${typography[variant].lineHeight} !important`
        };
    });
    return utilities;
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/css-vars/index.tsx":
/*!*********************************************************!*\
  !*** ./jimu-theme/lib/system/global/css-vars/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssVarsProvider: () => (/* binding */ CssVarsProvider)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./jimu-theme/lib/utils/index.ts");



const getThemeCssVars = (theme) => {
    var _a;
    const palette = theme.ref.palette;
    const { fontFamily, fontSize, fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold, htmlFontSize } = theme.ref.typeface;
    const typeface = { fontFamily, fontSize, fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold, htmlFontSize };
    const ref = { palette, typeface };
    let vars = { ref, sys: theme.sys, mixin: {} };
    if ((_a = theme.mixin) === null || _a === void 0 ? void 0 : _a.sharedTheme) {
        vars = Object.assign(Object.assign({}, vars), { mixin: { sharedTheme: theme.mixin.sharedTheme } });
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.generateCssVars)(vars);
};
const CssVarsProvider = (props) => {
    const { theme } = props;
    const styles = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => ({
        ':root': getThemeCssVars(theme)
    }), [theme]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_emotion___WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, { styles: styles, theme: theme }));
};


/***/ }),

/***/ "./jimu-theme/lib/system/global/index.tsx":
/*!************************************************!*\
  !*** ./jimu-theme/lib/system/global/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssBaseline: () => (/* reexport safe */ _css_baseline__WEBPACK_IMPORTED_MODULE_0__.CssBaseline),
/* harmony export */   CssUtilitiesProvider: () => (/* reexport safe */ _css_utilities__WEBPACK_IMPORTED_MODULE_2__.CssUtilitiesProvider),
/* harmony export */   CssVarsProvider: () => (/* reexport safe */ _css_vars__WEBPACK_IMPORTED_MODULE_1__.CssVarsProvider),
/* harmony export */   classesUtils: () => (/* reexport safe */ _css_utilities__WEBPACK_IMPORTED_MODULE_2__.classesUtils),
/* harmony export */   getThemeBaselineStyles: () => (/* reexport safe */ _css_baseline__WEBPACK_IMPORTED_MODULE_0__.getThemeBaselineStyles)
/* harmony export */ });
/* harmony import */ var _css_baseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-baseline */ "./jimu-theme/lib/system/global/css-baseline/index.tsx");
/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-vars */ "./jimu-theme/lib/system/global/css-vars/index.tsx");
/* harmony import */ var _css_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-utilities */ "./jimu-theme/lib/system/global/css-utilities/index.tsx");





/***/ }),

/***/ "./jimu-theme/lib/system/index.ts":
/*!****************************************!*\
  !*** ./jimu-theme/lib/system/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssBaseline: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_10__.CssBaseline),
/* harmony export */   CssUtilitiesProvider: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_10__.CssUtilitiesProvider),
/* harmony export */   CssVarsProvider: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_10__.CssVarsProvider),
/* harmony export */   DefaultThemeSourceOptions: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_8__.DefaultThemeSourceOptions),
/* harmony export */   ReferencePaletteColorFullTones: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.ReferencePaletteColorFullTones),
/* harmony export */   ReferencePaletteColorTones: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.ReferencePaletteColorTones),
/* harmony export */   ReferencePaletteNeutralTones: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.ReferencePaletteNeutralTones),
/* harmony export */   SourceKeyColorNames: () => (/* reexport safe */ _source__WEBPACK_IMPORTED_MODULE_8__.SourceKeyColorNames),
/* harmony export */   ThemeSpacingVariants: () => (/* reexport safe */ _spacing__WEBPACK_IMPORTED_MODULE_2__.ThemeSpacingVariants),
/* harmony export */   TypographyVariants: () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_5__.TypographyVariants),
/* harmony export */   augmentColor: () => (/* reexport safe */ _color_scheme__WEBPACK_IMPORTED_MODULE_7__.augmentColor),
/* harmony export */   classesUtils: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_10__.classesUtils),
/* harmony export */   createColorScheme: () => (/* reexport safe */ _color_scheme__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   createReference: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.createReference),
/* harmony export */   createReferencePalette: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.createReferencePalette),
/* harmony export */   createReferencePaletteColor: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.createReferencePaletteColor),
/* harmony export */   createReferenceTypeface: () => (/* reexport safe */ _reference__WEBPACK_IMPORTED_MODULE_1__.createReferenceTypeface),
/* harmony export */   createShadow: () => (/* reexport safe */ _shadow__WEBPACK_IMPORTED_MODULE_3__.createShadow),
/* harmony export */   createShape: () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_4__.createShape),
/* harmony export */   createStyled: () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.createStyled),
/* harmony export */   createTheme: () => (/* reexport safe */ _create_theme__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   createUnarySpacing: () => (/* reexport safe */ _spacing__WEBPACK_IMPORTED_MODULE_2__.createUnarySpacing),
/* harmony export */   getSchemeColor: () => (/* reexport safe */ _color_scheme__WEBPACK_IMPORTED_MODULE_7__.getSchemeColor),
/* harmony export */   getThemeBaselineStyles: () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_10__.getThemeBaselineStyles),
/* harmony export */   shouldForwardProp: () => (/* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.shouldForwardProp)
/* harmony export */ });
/* harmony import */ var _create_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-theme */ "./jimu-theme/lib/system/create-theme/index.ts");
/* harmony import */ var _reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reference */ "./jimu-theme/lib/system/reference/index.ts");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing */ "./jimu-theme/lib/system/spacing/index.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ "./jimu-theme/lib/system/shadow/index.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape */ "./jimu-theme/lib/system/shape/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./jimu-theme/lib/system/typography/index.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./jimu-theme/lib/system/styled/index.ts");
/* harmony import */ var _color_scheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-scheme */ "./jimu-theme/lib/system/color-scheme/index.ts");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./source */ "./jimu-theme/lib/system/source/index.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component */ "./jimu-theme/lib/system/component/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global */ "./jimu-theme/lib/system/global/index.tsx");














/***/ }),

/***/ "./jimu-theme/lib/system/mixin/index.ts":
/*!**********************************************!*\
  !*** ./jimu-theme/lib/system/mixin/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMixin: () => (/* binding */ createMixin)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const createMixin = (options, mixin) => {
    if (!mixin)
        return options;
    if (!options)
        return mixin;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(options, mixin);
};


/***/ }),

/***/ "./jimu-theme/lib/system/reference/index.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/system/reference/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferencePaletteColorFullTones: () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteColorFullTones),
/* harmony export */   ReferencePaletteColorTones: () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteColorTones),
/* harmony export */   ReferencePaletteNeutralTones: () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteNeutralTones),
/* harmony export */   createReference: () => (/* binding */ createReference),
/* harmony export */   createReferencePalette: () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.createReferencePalette),
/* harmony export */   createReferencePaletteColor: () => (/* reexport safe */ _palette__WEBPACK_IMPORTED_MODULE_0__.createReferencePaletteColor),
/* harmony export */   createReferenceTypeface: () => (/* reexport safe */ _typeface__WEBPACK_IMPORTED_MODULE_1__.createReferenceTypeface)
/* harmony export */ });
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./jimu-theme/lib/system/reference/palette.ts");
/* harmony import */ var _typeface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeface */ "./jimu-theme/lib/system/reference/typeface.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");



const createReference = (source, options) => {
    let palette = (0,_palette__WEBPACK_IMPORTED_MODULE_0__.createReferencePalette)(source);
    if (options === null || options === void 0 ? void 0 : options.palette) {
        palette = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(palette, options.palette);
    }
    const typeface = (0,_typeface__WEBPACK_IMPORTED_MODULE_1__.createReferenceTypeface)(options === null || options === void 0 ? void 0 : options.typeface);
    return { palette, typeface };
};




/***/ }),

/***/ "./jimu-theme/lib/system/reference/palette.ts":
/*!****************************************************!*\
  !*** ./jimu-theme/lib/system/reference/palette.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferencePaletteColorFullTones: () => (/* binding */ ReferencePaletteColorFullTones),
/* harmony export */   ReferencePaletteColorTones: () => (/* binding */ ReferencePaletteColorTones),
/* harmony export */   ReferencePaletteNeutralTones: () => (/* binding */ ReferencePaletteNeutralTones),
/* harmony export */   createReferencePalette: () => (/* binding */ createReferencePalette),
/* harmony export */   createReferencePaletteColor: () => (/* binding */ createReferencePaletteColor)
/* harmony export */ });
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source */ "./jimu-theme/lib/system/source/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");



const ReferencePaletteColorTones = [90, 80, 70, 60, 50, 40, 30, 20, 10];
const ReferencePaletteColorFullTones = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
const ReferencePaletteNeutralTones = [100, 98, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
const createReferencePaletteColor = (source, tones = ReferencePaletteColorFullTones) => {
    const argb = _utils__WEBPACK_IMPORTED_MODULE_2__.colorUtils.argbFromColor(source);
    const hct = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
    const tonalPalette = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHct(hct);
    const referencePaletteColor = {};
    tones.forEach((tone, index) => {
        const argb = tonalPalette.tone(tone);
        const key = index * 100;
        referencePaletteColor[key] = (0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.hexFromArgb)(argb);
    });
    return referencePaletteColor;
};
const createPaletteColorFromTones = (input, tones = ReferencePaletteColorTones) => {
    const referencePaletteColor = {};
    tones.forEach((tone, index) => {
        const argb = input.tone(tone);
        const key = (index + 1) * 100;
        referencePaletteColor[key] = (0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.hexFromArgb)(argb);
    });
    return referencePaletteColor;
};
const createReferencePalette = (options) => {
    const { white, black } = options;
    const sourcePalette = (0,_source__WEBPACK_IMPORTED_MODULE_1__.createSourcePalette)(options);
    const { primary, secondary, neutral, error, warning, info, success } = sourcePalette;
    const { custom1, custom2, custom3, custom4, custom5 } = sourcePalette;
    const palette = {};
    palette.primary = createPaletteColorFromTones(primary, ReferencePaletteColorTones);
    palette.secondary = createPaletteColorFromTones(secondary, ReferencePaletteColorTones);
    palette.neutral = createPaletteColorFromTones(neutral, ReferencePaletteNeutralTones);
    palette.error = createPaletteColorFromTones(error, ReferencePaletteColorTones);
    palette.warning = createPaletteColorFromTones(warning, ReferencePaletteColorTones);
    palette.info = createPaletteColorFromTones(info, ReferencePaletteColorTones);
    palette.success = createPaletteColorFromTones(success, ReferencePaletteColorTones);
    palette.white = white || '#ffffff';
    palette.black = black || '#000000';
    if (custom1) {
        palette.custom1 = createPaletteColorFromTones(custom1, ReferencePaletteColorTones);
    }
    if (custom2) {
        palette.custom2 = createPaletteColorFromTones(custom2, ReferencePaletteColorTones);
    }
    if (custom3) {
        palette.custom3 = createPaletteColorFromTones(custom3, ReferencePaletteColorTones);
    }
    if (custom4) {
        palette.custom4 = createPaletteColorFromTones(custom4, ReferencePaletteColorTones);
    }
    if (custom5) {
        palette.custom5 = createPaletteColorFromTones(custom5, ReferencePaletteColorTones);
    }
    return palette;
};


/***/ }),

/***/ "./jimu-theme/lib/system/reference/typeface.ts":
/*!*****************************************************!*\
  !*** ./jimu-theme/lib/system/reference/typeface.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReferenceTypeface: () => (/* binding */ createReferenceTypeface)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

const defaultFontFamily = '"Avenir Next", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"';
const DefaultReferenceTypeface = {
    fontFamily: defaultFontFamily,
    // The default font size of body
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: '100%'
};
const createReferenceTypeface = (options) => {
    const { fontFamily = defaultFontFamily, fontSize = 13, fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, htmlFontSize = '100%', customFonts } = options || {};
    const typeface = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deepmerge)(DefaultReferenceTypeface, {
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
        htmlFontSize,
        customFonts
    });
    return typeface;
};


/***/ }),

/***/ "./jimu-theme/lib/system/shadow/index.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/system/shadow/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShadow: () => (/* binding */ createShadow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultShadow = {
    shadow1: '0 0 10px 1px rgba(0,0,0,0.2)',
    shadow2: '0 0 6px 0 rgba(0,0,0,0.15)',
    shadow3: '0 0 20px 2px rgba(0,0,0,0.2)'
};
const createShadow = (options) => {
    return Object.assign(Object.assign({}, defaultShadow), options);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShadow);


/***/ }),

/***/ "./jimu-theme/lib/system/shape/index.ts":
/*!**********************************************!*\
  !*** ./jimu-theme/lib/system/shape/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShape: () => (/* binding */ createShape),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shape = {
    shape1: '3px',
    shape2: '6px'
};
const createShape = (options) => {
    return Object.assign(Object.assign({}, shape), options);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);


/***/ }),

/***/ "./jimu-theme/lib/system/source/index.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/system/source/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultThemeSourceOptions: () => (/* binding */ DefaultThemeSourceOptions),
/* harmony export */   SourceColorNames: () => (/* binding */ SourceColorNames),
/* harmony export */   SourceCustomColorNames: () => (/* binding */ SourceCustomColorNames),
/* harmony export */   SourceKeyColorNames: () => (/* binding */ SourceKeyColorNames),
/* harmony export */   createFromSource: () => (/* binding */ createFromSource),
/* harmony export */   createSourcePalette: () => (/* binding */ createSourcePalette)
/* harmony export */ });
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
/* harmony import */ var jimu_theme_lib_utils_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme/lib/utils/color */ "./jimu-theme/lib/utils/color/index.ts");



const SourceKeyColorNames = ['primary', 'secondary', 'neutral', 'error', 'warning', 'info', 'success'];
const SourceCustomColorNames = ['custom1', 'custom2', 'custom3', 'custom4', 'custom5'];
const SourceColorNames = [...SourceKeyColorNames, ...SourceCustomColorNames];
const DefaultThemeSourceOptions = {
    primary: {
        color: '#007ADE',
        harmonize: true
    },
    error: {
        color: '#B3261E',
        harmonize: true
    },
    warning: {
        color: '#C77E00',
        harmonize: true
    },
    info: {
        color: '#0073AC',
        harmonize: true
    },
    success: {
        color: '#00551E',
        harmonize: true
    }
};
const createFromArgbSource = (source) => {
    const { argb, harmonize = true } = source;
    const hct = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
    const hue = hct.hue;
    const chroma = hct.chroma;
    const primaryChroma = harmonize ? Math.max(48, chroma) : chroma;
    const primary = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(hue, primaryChroma);
    const secondary = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(hue, 16);
    const neutral = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(hue, harmonize ? 2 : 0);
    const error = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(26, 76);
    const warning = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(70, 52);
    const info = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(245, 47);
    const success = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(150, 46);
    return { primary, secondary, neutral, error, warning, info, success };
};
const createFromSource = (source) => {
    const { color, harmonize = false } = source;
    const argb = _utils__WEBPACK_IMPORTED_MODULE_1__.colorUtils.argbFromColor(color);
    return createFromArgbSource({ argb, harmonize });
};
const createCustomFromSource = (custom, source) => {
    const { color, harmonize = false } = custom;
    let argb = (0,jimu_theme_lib_utils_color__WEBPACK_IMPORTED_MODULE_2__.argbFromColor)(color);
    if (harmonize) {
        const to = (0,jimu_theme_lib_utils_color__WEBPACK_IMPORTED_MODULE_2__.argbFromColor)(source.color);
        const from = (0,jimu_theme_lib_utils_color__WEBPACK_IMPORTED_MODULE_2__.argbFromColor)(color);
        argb = _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.Blend.harmonize(from, to);
    }
    return createFromArgbSource({ argb, harmonize: false });
};
const createSourcePalette = (sourceColors) => {
    const { primary, secondary, neutral, error, warning, info, success } = sourceColors;
    const { custom1, custom2, custom3, custom4, custom5 } = sourceColors;
    const palette = createFromSource(primary);
    if (secondary) {
        const p = createFromSource(secondary);
        palette.secondary = p.primary;
    }
    if (neutral) {
        const p = createFromSource(neutral);
        palette.neutral = p.neutral;
    }
    else {
        //When there is no neutral color in source, the unharmonized neutral color based on primary should be used by default.
        if (primary.harmonize) {
            const p = createFromSource({ color: primary.color, harmonize: false });
            palette.neutral = p.neutral;
        }
    }
    if (error) {
        const p = createFromSource(error);
        palette.error = p.primary;
    }
    if (warning) {
        const p = createFromSource(warning);
        palette.warning = p.primary;
    }
    if (info) {
        const p = createFromSource(info);
        palette.info = p.primary;
    }
    if (success) {
        const p = createFromSource(success);
        palette.success = p.primary;
    }
    if (custom1) {
        const p = createCustomFromSource(custom1, primary);
        palette.custom1 = p.primary;
    }
    if (custom2) {
        const p = createCustomFromSource(custom2, primary);
        palette.custom2 = p.primary;
    }
    if (custom3) {
        const p = createCustomFromSource(custom3, primary);
        palette.custom3 = p.primary;
    }
    if (custom4) {
        const p = createCustomFromSource(custom4, primary);
        palette.custom4 = p.primary;
    }
    if (custom5) {
        const p = createCustomFromSource(custom5, primary);
        palette.custom5 = p.primary;
    }
    return palette;
};


/***/ }),

/***/ "./jimu-theme/lib/system/spacing/create-unary-unit.ts":
/*!************************************************************!*\
  !*** ./jimu-theme/lib/system/spacing/create-unary-unit.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUnaryUnit: () => (/* binding */ createUnaryUnit)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");

function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    var _a;
    const themeSpacing = (_a = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPath)(theme, themeKey)) !== null && _a !== void 0 ? _a : defaultValue;
    if (typeof themeSpacing === 'number') {
        return (abs) => {
            if (typeof abs === 'string') {
                return abs;
            }
            if (true) {
                if (typeof abs !== 'number') {
                    console.error(`Jimu-Theme: Expected ${propName} argument to be a number or a string, got ${abs}.`);
                }
            }
            return themeSpacing * abs;
        };
    }
    if (Array.isArray(themeSpacing)) {
        return (abs) => {
            if (typeof abs === 'string') {
                return abs;
            }
            if (true) {
                if (!Number.isInteger(abs)) {
                    console.error([
                        `Jimu-Theme: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` +
                            `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`
                    ].join('\n'));
                }
                else if (abs > themeSpacing.length - 1) {
                    console.error([
                        `Jimu-Theme: The value provided (${abs}) overflows.`,
                        `The supported values are: ${JSON.stringify(themeSpacing)}.`,
                        `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`
                    ].join('\n'));
                }
            }
            return themeSpacing[abs];
        };
    }
    if (typeof themeSpacing === 'function') {
        return themeSpacing;
    }
    console.error([
        `Jimu-Theme: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`,
        'It should be a number, an array or a function.'
    ].join('\n'));
    return () => undefined;
}


/***/ }),

/***/ "./jimu-theme/lib/system/spacing/index.ts":
/*!************************************************!*\
  !*** ./jimu-theme/lib/system/spacing/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSpacingVariants: () => (/* binding */ ThemeSpacingVariants),
/* harmony export */   createUnarySpacing: () => (/* binding */ createUnarySpacing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_unary_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-unary-unit */ "./jimu-theme/lib/system/spacing/create-unary-unit.ts");

const ThemeSpacingVariants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function createUnarySpacing(theme) {
    return (0,_create_unary_unit__WEBPACK_IMPORTED_MODULE_0__.createUnaryUnit)(theme, 'spacing', 4, 'spacing');
}
const createSpacing = (spacingInput = 4) => {
    const transform = createUnarySpacing({
        spacing: spacingInput
    });
    const spacingFunc = (...argsInput) => {
        if (!(argsInput.length <= 4)) {
            console.error(`Jimu-Theme: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
        const args = argsInput.length === 0 ? [1] : argsInput;
        return args
            .map((argument) => {
            const output = transform(argument);
            return typeof output === 'number' ? `${output}px` : output;
        })
            .join(' ');
    };
    const spacing = spacingFunc;
    spacing[0] = '0px';
    ThemeSpacingVariants.forEach((variant) => {
        spacing[variant] = spacing(variant);
    });
    return spacing;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSpacing);


/***/ }),

/***/ "./jimu-theme/lib/system/styled/create-styled.ts":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/system/styled/create-styled.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   shouldForwardProp: () => (/* binding */ shouldForwardProp)
/* harmony export */ });
/* harmony import */ var _emotion___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../__emotion__ */ "./jimu-theme/lib/__emotion__/index.tsx");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ "./jimu-theme/lib/system/styled/tags.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'as';
}
const getStyleOverrides = (name, theme) => {
    var _a;
    if ((_a = theme.comp) === null || _a === void 0 ? void 0 : _a[name]) {
        return theme.comp[name];
    }
    return null;
};
const createStyled = (input = {}) => {
    const { defaultTheme, rootShouldForwardProp = shouldForwardProp, slotShouldForwardProp = shouldForwardProp } = input;
    const output = (tag, inputOptions = {}) => {
        const { name: componentName, slot: componentSlot, overridesResolver } = inputOptions, options = __rest(inputOptions, ["name", "slot", "overridesResolver"]);
        const label = componentName ? `${componentName}-${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.lowercaseFirstLetter)(componentSlot || 'Root')}` : '';
        let shouldForwardPropOption = shouldForwardProp;
        if (componentSlot === 'root') {
            shouldForwardPropOption = rootShouldForwardProp;
        }
        else if (componentSlot) {
            // any other slot specified
            shouldForwardPropOption = slotShouldForwardProp;
        }
        const defaultStyledResolver = (0,_emotion___WEBPACK_IMPORTED_MODULE_0__.styled)(tag, Object.assign({ shouldForwardProp: shouldForwardPropOption, label }, options));
        const styledResolver = (styleArg, ...expressions) => {
            const expressionsWithDefaultTheme = expressions
                ? expressions.map((stylesArg) => {
                    // On the server Emotion doesn't use React.forwardRef for creating components, so the created
                    // component stays as a function. This condition makes sure that we do not interpolate functions
                    // which are basically components used as a selectors.
                    // eslint-disable-next-line no-underscore-dangle
                    return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg
                        ? (_a) => {
                            var { theme: themeInput } = _a, other = __rest(_a, ["theme"]);
                            return stylesArg(Object.assign({ theme: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyObj)(themeInput) ? defaultTheme : themeInput }, other));
                        }
                        : stylesArg;
                })
                : [];
            let transformedStyleArg = styleArg;
            if (componentName) {
                expressionsWithDefaultTheme.push((props) => {
                    const theme = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyObj)(props.theme) ? defaultTheme : props.theme;
                    const styleOverrides = getStyleOverrides(componentName, theme);
                    if (styleOverrides) {
                        const resolvedStyleOverrides = {};
                        Object.entries(styleOverrides).forEach(([slotKey, slotValue]) => {
                            const slotStyle = slotValue.style;
                            if (slotStyle) {
                                resolvedStyleOverrides[slotKey] =
                                    typeof slotStyle === 'function' ? slotStyle(Object.assign(Object.assign({}, props), { theme })) : slotStyle;
                            }
                        });
                        if (overridesResolver) {
                            return overridesResolver(props, resolvedStyleOverrides);
                        }
                        else {
                            return resolvedStyleOverrides[componentSlot];
                        }
                    }
                    return null;
                });
            }
            const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
            if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
                const placeholders = new Array(numOfCustomFnsApplied).fill('');
                // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
                transformedStyleArg = [...styleArg, ...placeholders];
                transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
            }
            else if (typeof styleArg === 'function' &&
                // On the server Emotion doesn't use React.forwardRef for creating components, so the created
                // component stays as a function. This condition makes sure that we do not interpolate functions
                // which are basically components used as a selectors.
                // eslint-disable-next-line no-underscore-dangle
                styleArg.__emotion_real !== styleArg) {
                // If the type is function, we need to define the default theme.
                transformedStyleArg = (_a) => {
                    var { theme: themeInput } = _a, other = __rest(_a, ["theme"]);
                    return styleArg(Object.assign({ theme: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isEmptyObj)(themeInput) ? defaultTheme : themeInput }, other));
                };
            }
            const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
            let displayName;
            if (componentName) {
                displayName = componentName + (componentSlot || '');
            }
            if (displayName === undefined) {
                displayName = 'Styled' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(tag);
            }
            Component.displayName = displayName;
            return Component;
        };
        return styledResolver;
    };
    _tags__WEBPACK_IMPORTED_MODULE_1__.tags.forEach(tag => {
        // Compatible with the usage of `styled.<tag>`, transfer all the tag methods on `styled`
        output[tag] = _emotion___WEBPACK_IMPORTED_MODULE_0__.styled[tag];
    });
    return output;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStyled);


/***/ }),

/***/ "./jimu-theme/lib/system/styled/default-theme.ts":
/*!*******************************************************!*\
  !*** ./jimu-theme/lib/system/styled/default-theme.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-theme */ "./jimu-theme/lib/system/create-theme/index.ts");

const defaultTheme = (0,_create_theme__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);


/***/ }),

/***/ "./jimu-theme/lib/system/styled/index.ts":
/*!***********************************************!*\
  !*** ./jimu-theme/lib/system/styled/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStyled: () => (/* reexport safe */ _create_styled__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   rootShouldForwardProp: () => (/* binding */ rootShouldForwardProp),
/* harmony export */   shouldForwardProp: () => (/* reexport safe */ _create_styled__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp),
/* harmony export */   slotShouldForwardProp: () => (/* binding */ slotShouldForwardProp)
/* harmony export */ });
/* harmony import */ var _create_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-styled */ "./jimu-theme/lib/system/styled/create-styled.ts");
/* harmony import */ var _default_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-theme */ "./jimu-theme/lib/system/styled/default-theme.ts");


const rootShouldForwardProp = (prop) => (0,_create_styled__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp)(prop);
const slotShouldForwardProp = _create_styled__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp;
const styled = (0,_create_styled__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _default_theme__WEBPACK_IMPORTED_MODULE_1__["default"],
    rootShouldForwardProp
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);


/***/ }),

/***/ "./jimu-theme/lib/system/styled/tags.ts":
/*!**********************************************!*\
  !*** ./jimu-theme/lib/system/styled/tags.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
const tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    // SVG
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];


/***/ }),

/***/ "./jimu-theme/lib/system/typography/index.ts":
/*!***************************************************!*\
  !*** ./jimu-theme/lib/system/typography/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypographyVariants: () => (/* binding */ TypographyVariants),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./jimu-theme/lib/utils/index.ts");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const TypographyVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title1', 'title2', 'title3', 'body1', 'body2', 'label1', 'label2', 'label3'];
let htmlFontSize = 0;
const getNumericHtmlFontSize = () => {
    if (htmlFontSize)
        return htmlFontSize;
    const fontSize = window.getComputedStyle(document.documentElement).fontSize;
    const [number] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(fontSize);
    htmlFontSize = number;
    return htmlFontSize;
};
const createTypography = (typeface, options) => {
    const { fontFamily, fontSize, fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typeface;
    const { 
    // Apply the CSS properties to all the variants.
    allVariants } = options, other = __rest(options, ["allVariants"]);
    const pxToRem = (px) => {
        const number = typeof px === 'string'
            ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(px)[0]
            : px;
        return `${(number / getNumericHtmlFontSize())}rem`;
    };
    const remToPx = (rem) => {
        const number = typeof rem === 'string'
            ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(rem)[0]
            : rem;
        return `${(number * getNumericHtmlFontSize())}px`;
    };
    const buildVariant = (fontWeight, size, lineHeight) => (Object.assign({ fontFamily,
        fontWeight, fontSize: pxToRem(size), lineHeight }, allVariants));
    const variants = {
        h1: buildVariant(fontWeightRegular, 48, 1.5),
        h2: buildVariant(fontWeightRegular, 40, 1.5),
        h3: buildVariant(fontWeightRegular, 32, 1.5),
        h4: buildVariant(fontWeightRegular, 28, 1.5),
        h5: buildVariant(fontWeightMedium, 24, 1.5),
        h6: buildVariant(fontWeightMedium, 18, 1.5),
        title1: buildVariant(fontWeightMedium, 16, 1.5),
        title2: buildVariant(fontWeightMedium, 14, 1.5),
        title3: buildVariant(fontWeightMedium, 13, 1.5),
        body1: buildVariant(fontWeightRegular, 14, 1.5),
        body2: buildVariant(fontWeightRegular, fontSize, 1.5),
        label1: buildVariant(fontWeightMedium, 14, 1.5),
        label2: buildVariant(fontWeightRegular, 12, 1.5),
        label3: buildVariant(fontWeightRegular, 10, 1.5)
    };
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)(Object.assign({ pxToRem,
        remToPx,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold }, variants), other, {
        clone: false
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTypography);


/***/ }),

/***/ "./jimu-theme/lib/utils/color/index.ts":
/*!*********************************************!*\
  !*** ./jimu-theme/lib/utils/color/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.alpha),
/* harmony export */   argbFromColor: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.argbFromColor),
/* harmony export */   argbFromRgb: () => (/* reexport safe */ _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_1__.argbFromRgb),
/* harmony export */   argbFromRgba: () => (/* reexport safe */ _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_1__.argbFromRgba),
/* harmony export */   averaging: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.averaging),
/* harmony export */   colorChannel: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.colorChannel),
/* harmony export */   darken: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.darken),
/* harmony export */   decomposeColor: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.decomposeColor),
/* harmony export */   emphasize: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.emphasize),
/* harmony export */   getContrastRatio: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.getContrastRatio),
/* harmony export */   getLuminance: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.getLuminance),
/* harmony export */   hexFromArgb: () => (/* reexport safe */ _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_1__.hexFromArgb),
/* harmony export */   hexToRgb: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.hexToRgb),
/* harmony export */   hslToRgb: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.hslToRgb),
/* harmony export */   lighten: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.lighten),
/* harmony export */   recomposeColor: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.recomposeColor),
/* harmony export */   rgbToHex: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.rgbToHex),
/* harmony export */   roundToDecimalPlace: () => (/* reexport safe */ _manipulator__WEBPACK_IMPORTED_MODULE_0__.roundToDecimalPlace),
/* harmony export */   sourceColorFromImage: () => (/* reexport safe */ _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_1__.sourceColorFromImage)
/* harmony export */ });
/* harmony import */ var _manipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manipulator */ "./jimu-theme/lib/utils/color/manipulator.ts");
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");




/***/ }),

/***/ "./jimu-theme/lib/utils/color/manipulator.ts":
/*!***************************************************!*\
  !*** ./jimu-theme/lib/utils/color/manipulator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   argbFromColor: () => (/* binding */ argbFromColor),
/* harmony export */   averaging: () => (/* binding */ averaging),
/* harmony export */   colorChannel: () => (/* binding */ colorChannel),
/* harmony export */   darken: () => (/* binding */ darken),
/* harmony export */   decomposeColor: () => (/* binding */ decomposeColor),
/* harmony export */   emphasize: () => (/* binding */ emphasize),
/* harmony export */   getContrastRatio: () => (/* binding */ getContrastRatio),
/* harmony export */   getLuminance: () => (/* binding */ getLuminance),
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb),
/* harmony export */   hslToRgb: () => (/* binding */ hslToRgb),
/* harmony export */   lighten: () => (/* binding */ lighten),
/* harmony export */   recomposeColor: () => (/* binding */ recomposeColor),
/* harmony export */   rgbToHex: () => (/* binding */ rgbToHex),
/* harmony export */   roundToDecimalPlace: () => (/* binding */ roundToDecimalPlace)
/* harmony export */ });
/* harmony import */ var _material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/material-color-utilities */ "./node_modules/@material/material-color-utilities/index.js");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");


/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {
    if (true) {
        if (value < min || value > max) {
            console.error(`The value provided ${value} is out of range [${min}, ${max}].`);
        }
    }
    return Math.min(Math.max(min, value), max);
}
/**
 * Rounds a numeric value to a specified number of decimal places.
 */
function roundToDecimalPlace(value, decimalPlaces = 2) {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier) / multiplier;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
    color = color.slice(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);
    if (colors && colors[0].length === 1) {
        colors = colors.map((n) => n + n);
    }
    return colors
        ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
            .map((n, index) => {
            return index < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
            .join(', ')})`
        : '';
}
function intToHex(int) {
    const hex = int.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
    // Idempotent
    if (color.type) {
        return color;
    }
    if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
        throw new Error(`Unsupported ${color}
      The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
    }
    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;
    if (type === 'color') {
        values = values.split(' ');
        colorSpace = values.shift();
        if (values.length === 4 && values[3].charAt(0) === '/') {
            values[3] = values[3].slice(1);
        }
        if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
            throw new Error(`Unsupportedcolor ${colorSpace}
        The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.'`);
        }
    }
    else {
        values = values.split(',');
    }
    values = values.map((value) => parseFloat(value));
    return { type, values, colorSpace };
}
/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = (color) => {
    const decomposedColor = decomposeColor(color);
    return decomposedColor.values
        .slice(0, 3)
        .map((val, idx) => (decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val))
        .join(' ');
};
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
    const { type, colorSpace } = color;
    let { values } = color;
    if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
    }
    else if (type.indexOf('hsl') !== -1) {
        values[1] = `${values[1]}%`;
        values[2] = `${values[2]}%`;
    }
    if (type.indexOf('color') !== -1) {
        values = `${colorSpace} ${values.join(' ')}`;
    }
    else {
        values = `${values.join(', ')}`;
    }
    return `${type}(${values})`;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
    // Idempotent
    if (color.indexOf('#') === 0) {
        return color;
    }
    const { values } = decomposeColor(color);
    return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
    color = decomposeColor(color);
    const { values } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
    }
    return recomposeColor({ type, values: rgb });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map((val) => {
        if (color.type !== 'color') {
            val /= 255; // normalized
        }
        return val <= 0.03928 ? val / 12.92 : Math.pow(((val + 0.055) / 1.055), 2.4);
    });
    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);
    if (color.type === 'rgb' || color.type === 'hsl') {
        color.type += 'a';
    }
    if (color.type === 'color') {
        color.values[3] = `/${value}`;
    }
    else {
        color.values[3] = value;
    }
    return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
    }
    else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] *= 1 - coefficient;
        }
    }
    return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
    }
    else if (color.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (255 - color.values[i]) * coefficient;
        }
    }
    else if (color.type.indexOf('color') !== -1) {
        for (let i = 0; i < 3; i += 1) {
            color.values[i] += (1 - color.values[i]) * coefficient;
        }
    }
    return recomposeColor(color);
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Return int32 color from a given color stirng
 */
const argbFromColor = (color) => {
    const { type, values } = decomposeColor(color);
    if (!['rgb', 'rgba'].includes(type)) {
        throw new Error(`Unsupported ${color}
      The following formats are supported: #nnn, #nnnnnn, rgb(), rgba().`);
    }
    const [r, g, b, a] = values;
    if (type === 'rgb') {
        return (0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.argbFromRgb)(r, g, b);
    }
    else if (type === 'rgba') {
        return (0,_material_material_color_utilities__WEBPACK_IMPORTED_MODULE_0__.argbFromRgba)({ r, g, b, a: a * 255 });
    }
};
/**
 * Mix two colors evenly
 */
const averaging = (color1, color2) => {
    const { type: type1 } = decomposeColor(color1);
    const { type: type2 } = decomposeColor(color2);
    if (!['rgb', 'rgba'].includes(type1) || !['rgb', 'rgba'].includes(type2)) {
        console.error(`Unsupported ${color1} or ${color1}
      The following formats are supported: #nnn, #nnnnnn, rgb(), rgba().`);
    }
    const mixed = jimu_core__WEBPACK_IMPORTED_MODULE_1__.polished.mix(0.5, color1, color2);
    return mixed;
};


/***/ }),

/***/ "./jimu-theme/lib/utils/common.ts":
/*!****************************************!*\
  !*** ./jimu-theme/lib/utils/common.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decamelize: () => (/* binding */ decamelize),
/* harmony export */   deepmerge: () => (/* binding */ deepmerge),
/* harmony export */   getPath: () => (/* binding */ getPath),
/* harmony export */   isEmptyObj: () => (/* binding */ isEmptyObj),
/* harmony export */   lowercaseFirstLetter: () => (/* binding */ lowercaseFirstLetter),
/* harmony export */   normalizeFontFamily: () => (/* binding */ normalizeFontFamily),
/* harmony export */   normalizeKey: () => (/* binding */ normalizeKey),
/* harmony export */   uppercaseFirstLetter: () => (/* binding */ uppercaseFirstLetter)
/* harmony export */ });
const lowercaseFirstLetter = (string) => {
    if (!string)
        return string;
    return string.charAt(0).toLowerCase() + string.slice(1);
};
const uppercaseFirstLetter = (string) => {
    if (!string)
        return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const decamelize = (str, separator = '_') => {
    return str.replace(/\B([A-Z])/g, `${separator}$1`).toLowerCase();
};
const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
};
function isPlainObject(item) {
    return item !== null && typeof item === 'object' && item.constructor.name === 'Object';
}
const deepmerge = (target, source, options = { clone: true }) => {
    const output = options.clone ? Object.assign({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key) => {
            // Avoid prototype pollution
            if (key === '__proto__') {
                return;
            }
            if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
                // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
                output[key] = deepmerge(target[key], source[key], options);
            }
            else {
                output[key] = source[key];
            }
        });
    }
    return output;
};
function getPath(obj, path) {
    if (!path || typeof path !== 'string') {
        return null;
    }
    return path.split('.').reduce((acc, item) => {
        if (acc && acc[item] != null) {
            return acc[item];
        }
        return null;
    }, obj);
}
/**
 * Normalize the key of css vars and css classes.
 * @example normalizeKey('shape', 'shape-1') => '1'
 */
const normalizeKey = (pkey, key) => {
    const pkeys = pkey.split('-');
    const ke = key.replace(/\d{1}/g, '');
    if (pkeys[pkeys.length - 1].includes(ke)) {
        key = key.replace(ke, '');
    }
    return key;
};
const normalizeFontFamily = (fontFamily) => {
    if (fontFamily.includes(',')) {
        return fontFamily;
    }
    else {
        return `"${fontFamily}", "Helvetica Neue", sans-serif, "PingFang SC", "Microsoft YaHei"`;
    }
};


/***/ }),

/***/ "./jimu-theme/lib/utils/css-vars.ts":
/*!******************************************!*\
  !*** ./jimu-theme/lib/utils/css-vars.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCssVars: () => (/* binding */ generateCssVars)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./jimu-theme/lib/utils/common.ts");

const fillPaletteVars = (pkey, value, vars) => {
    Object.entries(value).forEach(([key, value]) => {
        key = (0,_common__WEBPACK_IMPORTED_MODULE_0__.decamelize)(key, '-');
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            key = (0,_common__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)(pkey, key);
            if (key !== 'default') {
                vars[`${pkey}-${key}`] = value;
            }
            if (key === 'main' || key === 'default') {
                vars[`${pkey}`] = value;
            }
        }
        else {
            return fillPaletteVars(`${pkey}-${key}`, value, vars);
        }
    });
    return vars;
};
const generateCssVars = (input) => {
    const vars = {};
    fillPaletteVars('-', input, vars);
    return vars;
};


/***/ }),

/***/ "./jimu-theme/lib/utils/get-display-name.ts":
/*!**************************************************!*\
  !*** ./jimu-theme/lib/utils/get-display-name.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDisplayName),
/* harmony export */   getFunctionName: () => (/* binding */ getFunctionName)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
    const match = `${fn}`.match(fnNameMatchRegex);
    const name = match && match[1];
    return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return (outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName));
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */
function getDisplayName(Component) {
    if (Component == null) {
        return undefined;
    }
    if (typeof Component === 'string') {
        return Component;
    }
    if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
    }
    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
        switch (Component.$$typeof) {
            case react_is__WEBPACK_IMPORTED_MODULE_0__.ForwardRef:
                return getWrappedName(Component, Component.render, 'ForwardRef');
            case react_is__WEBPACK_IMPORTED_MODULE_0__.Memo:
                return getWrappedName(Component, Component.type, 'memo');
            default:
                return undefined;
        }
    }
    return undefined;
}


/***/ }),

/***/ "./jimu-theme/lib/utils/index.ts":
/*!***************************************!*\
  !*** ./jimu-theme/lib/utils/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorUtils: () => (/* reexport module object */ _color__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   decamelize: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.decamelize),
/* harmony export */   deepmerge: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.deepmerge),
/* harmony export */   generateCssVars: () => (/* reexport safe */ _css_vars__WEBPACK_IMPORTED_MODULE_1__.generateCssVars),
/* harmony export */   getBorderColorUtilities: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__.getBorderColorUtilities),
/* harmony export */   getDisplayName: () => (/* reexport safe */ _get_display_name__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   getPath: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.getPath),
/* harmony export */   getScrollbarStyles: () => (/* reexport safe */ _scrollbar__WEBPACK_IMPORTED_MODULE_4__.getScrollbarStyles),
/* harmony export */   getShadowUtilities: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__.getShadowUtilities),
/* harmony export */   getShapeUtilities: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__.getShapeUtilities),
/* harmony export */   getSpacingUtilities: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__.getSpacingUtilities),
/* harmony export */   getTypeColorUtilities: () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__.getTypeColorUtilities),
/* harmony export */   isEmptyObj: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.isEmptyObj),
/* harmony export */   lowercaseFirstLetter: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.lowercaseFirstLetter),
/* harmony export */   normalizeFontFamily: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.normalizeFontFamily),
/* harmony export */   normalizeKey: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.normalizeKey),
/* harmony export */   uppercaseFirstLetter: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_3__.uppercaseFirstLetter)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./jimu-theme/lib/utils/color/index.ts");
/* harmony import */ var _css_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-vars */ "./jimu-theme/lib/utils/css-vars.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./jimu-theme/lib/utils/utilities.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./jimu-theme/lib/utils/common.ts");
/* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollbar */ "./jimu-theme/lib/utils/scrollbar.ts");
/* harmony import */ var _get_display_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-display-name */ "./jimu-theme/lib/utils/get-display-name.ts");









/***/ }),

/***/ "./jimu-theme/lib/utils/scrollbar.ts":
/*!*******************************************!*\
  !*** ./jimu-theme/lib/utils/scrollbar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScrollbarStyles: () => (/* binding */ getScrollbarStyles)
/* harmony export */ });
/**
 * get the scrollbar styles based on the theme
 */
const getScrollbarStyles = (props, prefix) => {
    const { thumb, thumbHover, track } = props;
    return Object.assign(Object.assign({}, (prefix
        ? {
            [`${prefix} ::-webkit-scrollbar`]: {
                width: '6px',
                height: ' 6px'
            },
            [prefix]: {
                scrollbarWidth: 'thin'
            }
        }
        : {
            '::-webkit-scrollbar': {
                width: '6px',
                height: '6px'
            },
            scrollbarWidth: 'thin'
        })), (prefix
        ? {
            [`${prefix} ::-webkit-scrollbar-track, ${prefix} ::-webkit-scrollbar-corner`]: {
                background: track
            },
            [`${prefix} ::-webkit-scrollbar-thumb`]: {
                background: thumb
            },
            [`${prefix} ::-webkit-scrollbar-thumb:hover`]: {
                background: thumbHover
            },
            [prefix]: {
                scrollbarColor: `${thumb} ${track}`
            }
        }
        : {
            '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
                background: track
            },
            '::-webkit-scrollbar-thumb': {
                background: thumb
            },
            '::-webkit-scrollbar-thumb:hover': {
                background: thumbHover
            },
            scrollbarColor: `${thumb} ${track}`
        }));
};


/***/ }),

/***/ "./jimu-theme/lib/utils/utilities.ts":
/*!*******************************************!*\
  !*** ./jimu-theme/lib/utils/utilities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBorderColorUtilities: () => (/* binding */ getBorderColorUtilities),
/* harmony export */   getShadowUtilities: () => (/* binding */ getShadowUtilities),
/* harmony export */   getShapeUtilities: () => (/* binding */ getShapeUtilities),
/* harmony export */   getSpacingUtilities: () => (/* binding */ getSpacingUtilities),
/* harmony export */   getTypeColorUtilities: () => (/* binding */ getTypeColorUtilities)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./jimu-theme/lib/utils/common.ts");

const SpacingMapping = {
    m: 'margin',
    p: 'padding'
};
const SidesMapping = {
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left',
    x: ['left', 'right'],
    y: ['top', 'bottom']
};
const getSpacingUtilities = (key, value) => {
    value = typeof value === 'number' ? `${value}px` : value;
    const utilities = {};
    Object.entries(SpacingMapping).forEach(([spacingKey, spacingValue]) => {
        utilities[`.${spacingKey}-${key}`] = {
            [spacingValue]: `${value} !important`
        };
        Object.entries(SidesMapping).forEach(([sideKey, sideValue]) => {
            if (Array.isArray(sideValue)) {
                const cssValue = {};
                sideValue.forEach((sideValueItem) => {
                    const cssKey = `${spacingValue}${(0,_common__WEBPACK_IMPORTED_MODULE_0__.uppercaseFirstLetter)(sideValueItem)}`;
                    cssValue[cssKey] = `${value} !important`;
                });
                const ruleName = `.${spacingKey}${sideKey}-${key}`;
                utilities[ruleName] = cssValue;
            }
            else {
                const ruleName = `.${spacingKey}${sideKey}-${key}`;
                const cssKey = `${spacingValue}${(0,_common__WEBPACK_IMPORTED_MODULE_0__.uppercaseFirstLetter)(sideValue)}`;
                const cssValue = `${value} !important`;
                utilities[ruleName] = { [cssKey]: cssValue };
            }
        });
    });
    return utilities;
};
const getTypeColorUtilities = (color, value) => {
    return {
        [`.bg-${color}`]: {
            backgroundColor: `${value} !important`
        },
        [`.border-${color}`]: {
            borderColor: `${value} !important`
        },
        [`.text-${color}`]: {
            color: `${value} !important`
        }
    };
};
const getBorderColorUtilities = (borderColor, borderWidth = '1px', whiteColor) => {
    let utilities = {
        '.border': {
            border: `${borderWidth} solid ${borderColor} !important`
        },
        '.border-top': {
            borderTop: `${borderWidth} solid ${borderColor} !important`
        },
        '.border-right': {
            borderRight: `${borderWidth} solid ${borderColor} !important`
        },
        '.border-bottom': {
            borderBottom: `${borderWidth} solid ${borderColor} !important`
        },
        '.border-left': {
            borderLeft: `${borderWidth} solid ${borderColor} !important`
        },
        '.border-0': {
            border: '0 !important'
        },
        '.border-1': {
            borderWidth: '1px !important'
        },
        '.border-2': {
            borderWidth: '2px !important'
        },
        '.border-top-0': {
            borderTop: '0 !important'
        },
        '.border-right-0': {
            borderRight: '0 !important'
        },
        '.border-bottom-0': {
            borderBottom: '0 !important'
        },
        '.border-left-0': {
            borderLeft: '0 !important'
        }
    };
    if (whiteColor) {
        utilities = Object.assign(Object.assign({}, utilities), { '.border-white': {
                borderColor: `${whiteColor} !important`
            } });
    }
    return utilities;
};
const getShadowUtilities = (shadows) => {
    const utilities = {};
    if (!shadows)
        return utilities;
    Object.keys(shadows).forEach((level) => {
        const ruleName = level === 'default' ? 'shadow' : `shadow-${level}`;
        utilities[`.${ruleName}`] = {
            boxShadow: `${shadows[level]} !important`
        };
    });
    if (!utilities['shadow-none']) {
        utilities['shadow-none'] = {
            boxShadow: 'none !important'
        };
    }
    return utilities;
};
const getShapeUtilities = (shape) => {
    const utilities = {};
    if (!shape)
        return utilities;
    Object.entries(shape).forEach(([level, value]) => {
        const key = (0,_common__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)('shape', level);
        const ruleName = level === 'default' ? '.rounded' : `.rounded-${key}`;
        utilities[ruleName] = {
            borderRadius: `${value} !important`
        };
    });
    return utilities;
};


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Middleware.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Parser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Prefixer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Serializer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Tokenizer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js":
/*!************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/stylis/src/Utility.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./node_modules/@material/material-color-utilities/blend/blend.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/blend/blend.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blend: () => (/* binding */ Blend)
/* harmony export */ });
/* harmony import */ var _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Functions for blending in HCT and CAM16.
 */
class Blend {
    /**
     * Blend the design color's HCT hue towards the key color's HCT
     * hue, in a way that leaves the original color recognizable and
     * recognizably shifted towards the key color.
     *
     * @param designColor ARGB representation of an arbitrary color.
     * @param sourceColor ARGB representation of the main theme color.
     * @return The design color with a hue shifted towards the
     * system's color, a slightly warmer/cooler variant of the design
     * color's hue.
     */
    static harmonize(designColor, sourceColor) {
        const fromHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.fromInt(designColor);
        const toHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.fromInt(sourceColor);
        const differenceDegrees = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.differenceDegrees(fromHct.hue, toHct.hue);
        const rotationDegrees = Math.min(differenceDegrees * 0.5, 15.0);
        const outputHue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.sanitizeDegreesDouble(fromHct.hue +
            rotationDegrees * _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_3__.rotationDirection(fromHct.hue, toHct.hue));
        return _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(outputHue, fromHct.chroma, fromHct.tone).toInt();
    }
    /**
     * Blends hue from one color into another. The chroma and tone of
     * the original color are maintained.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, with a hue blended towards to. Chroma and tone
     * are constant.
     */
    static hctHue(from, to, amount) {
        const ucs = Blend.cam16Ucs(from, to, amount);
        const ucsCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(ucs);
        const fromCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(from);
        const blended = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(ucsCam.hue, fromCam.chroma, _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_2__.lstarFromArgb(from));
        return blended.toInt();
    }
    /**
     * Blend in CAM16-UCS space.
     *
     * @param from ARGB representation of color
     * @param to ARGB representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, blended towards to. Hue, chroma, and tone will
     * change.
     */
    static cam16Ucs(from, to, amount) {
        const fromCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(from);
        const toCam = _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromInt(to);
        const fromJ = fromCam.jstar;
        const fromA = fromCam.astar;
        const fromB = fromCam.bstar;
        const toJ = toCam.jstar;
        const toA = toCam.astar;
        const toB = toCam.bstar;
        const jstar = fromJ + (toJ - fromJ) * amount;
        const astar = fromA + (toA - fromA) * amount;
        const bstar = fromB + (toB - fromB) * amount;
        return _hct_cam16_js__WEBPACK_IMPORTED_MODULE_0__.Cam16.fromUcs(jstar, astar, bstar).toInt();
    }
}
//# sourceMappingURL=blend.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/contrast/contrast.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/contrast/contrast.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contrast: () => (/* binding */ Contrast)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace


/**
 * Utility methods for calculating contrast given two colors, or calculating a
 * color given one color and a contrast ratio.
 *
 * Contrast ratio is calculated using XYZ's Y. When linearized to match human
 * perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
 * lightness of a color.
 *
 * Methods refer to tone, T in the the HCT color space.
 * Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
 * space.
 */
class Contrast {
    /**
     * Returns a contrast ratio, which ranges from 1 to 21.
     *
     * @param toneA Tone between 0 and 100. Values outside will be clamped.
     * @param toneB Tone between 0 and 100. Values outside will be clamped.
     */
    static ratioOfTones(toneA, toneB) {
        toneA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0.0, 100.0, toneA);
        toneB = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0.0, 100.0, toneB);
        return Contrast.ratioOfYs(_utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(toneA), _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(toneB));
    }
    static ratioOfYs(y1, y2) {
        const lighter = y1 > y2 ? y1 : y2;
        const darker = (lighter === y2) ? y1 : y2;
        return (lighter + 5.0) / (darker + 5.0);
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighter(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1.0;
        }
        const darkY = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(tone);
        const lightY = ratio * (darkY + 5.0) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(lightY) + 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone <= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns -1 if ratio cannot be achieved with tone parameter.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in -1 being returned.
     * @param ratio Contrast ratio of return value and tone.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darker(tone, ratio) {
        if (tone < 0.0 || tone > 100.0) {
            return -1.0;
        }
        const lightY = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(tone);
        const darkY = ((lightY + 5.0) / ratio) - 5.0;
        const realContrast = Contrast.ratioOfYs(lightY, darkY);
        const delta = Math.abs(realContrast - ratio);
        if (realContrast < ratio && delta > 0.04) {
            return -1;
        }
        // Ensure gamut mapping, which requires a 'range' on tone, will still result
        // the correct ratio by darkening slightly.
        const returnValue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(darkY) - 0.4;
        if (returnValue < 0 || returnValue > 100) {
            return -1;
        }
        return returnValue;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the ratio with tone. For example, there is no color lighter than T100.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 100 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static lighterUnsafe(tone, ratio) {
        const lighterSafe = Contrast.lighter(tone, ratio);
        return (lighterSafe < 0.0) ? 100.0 : lighterSafe;
    }
    /**
     * Returns a tone >= tone parameter that ensures ratio parameter.
     * Return value is between 0 and 100.
     * Returns 100 if ratio cannot be achieved with tone parameter.
     *
     * This method is unsafe because the returned value is guaranteed to be in
     * bounds for tone, i.e. between 0 and 100. However, that value may not reach
     * the [ratio with [tone]. For example, there is no color darker than T0.
     *
     * @param tone Tone return value must contrast with.
     * Range is 0 to 100. Invalid values will result in 0 being returned.
     * @param ratio Desired contrast ratio of return value and tone parameter.
     * Range is 1 to 21, invalid values have undefined behavior.
     */
    static darkerUnsafe(tone, ratio) {
        const darkerSafe = Contrast.darker(tone, ratio);
        return (darkerSafe < 0.0) ? 0.0 : darkerSafe;
    }
}
//# sourceMappingURL=contrast.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DislikeAnalyzer: () => (/* binding */ DislikeAnalyzer)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Check and/or fix universally disliked colors.
 * Color science studies of color preference indicate universal distaste for
 * dark yellow-greens, and also show this is correlated to distate for
 * biological waste and rotting food.
 *
 * See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
 * of Color Psychology (2015).
 */
class DislikeAnalyzer {
    /**
     * Returns true if a color is disliked.
     *
     * @param hct A color to be judged.
     * @return Whether the color is disliked.
     *
     * Disliked is defined as a dark yellow-green that is not neutral.
     */
    static isDisliked(hct) {
        const huePasses = Math.round(hct.hue) >= 90.0 && Math.round(hct.hue) <= 111.0;
        const chromaPasses = Math.round(hct.chroma) > 16.0;
        const tonePasses = Math.round(hct.tone) < 65.0;
        return huePasses && chromaPasses && tonePasses;
    }
    /**
     * If a color is disliked, lighten it to make it likable.
     *
     * @param hct A color to be judged.
     * @return A new color if the original color is disliked, or the original
     *   color if it is acceptable.
     */
    static fixIfDisliked(hct) {
        if (DislikeAnalyzer.isDisliked(hct)) {
            return _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hct.hue, hct.chroma, 70.0);
        }
        return hct;
    }
}
//# sourceMappingURL=dislike_analyzer.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastCurve: () => (/* binding */ ContrastCurve)
/* harmony export */ });
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A class containing the contrast curve for a dynamic color on its background.
 *
 * The four values correspond to contrast requirements for contrast levels
 * -1.0, 0.0, 0.5, and 1.0, respectively.
 */
class ContrastCurve {
    /**
     * Creates a `ContrastCurve` object.
     *
     * @param low Contrast requirement for contrast level -1.0
     * @param normal Contrast requirement for contrast level 0.0
     * @param medium Contrast requirement for contrast level 0.5
     * @param high Contrast requirement for contrast level 1.0
     */
    constructor(low, normal, medium, high) {
        this.low = low;
        this.normal = normal;
        this.medium = medium;
        this.high = high;
    }
    /**
     * Returns the contrast ratio at a given contrast level.
     *
     * @param contrastLevel The contrast level. 0.0 is the default (normal);
     * -1.0 is the lowest; 1.0 is the highest.
     * @return The contrast ratio, a number between 1.0 and 21.0.
     */
    getContrast(contrastLevel) {
        if (contrastLevel <= -1.0) {
            return this.low;
        }
        else if (contrastLevel < 0.0) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.low, this.normal, (contrastLevel - (-1)) / 1);
        }
        else if (contrastLevel < 0.5) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
        }
        else if (contrastLevel < 1.0) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
        }
        else {
            return this.high;
        }
    }
}
//# sourceMappingURL=contrast_curve.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicColor: () => (/* binding */ DynamicColor)
/* harmony export */ });
/* harmony import */ var _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contrast/contrast.js */ "./node_modules/@material/material-color-utilities/contrast/contrast.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A color that adjusts itself based on UI state provided by DynamicScheme.
 *
 * Colors without backgrounds do not change tone when contrast changes. Colors
 * with backgrounds become closer to their background as contrast lowers, and
 * further when contrast increases.
 *
 * Prefer static constructors. They require either a hexcode, a palette and
 * tone, or a hue and chroma. Optionally, they can provide a background
 * DynamicColor.
 */
class DynamicColor {
    /**
     * Create a DynamicColor defined by a TonalPalette and HCT tone.
     *
     * @param args Functions with DynamicScheme as input. Must provide a palette
     * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
     */
    static fromPalette(args) {
        return new DynamicColor(args.name ?? '', args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
    }
    /**
     * The base constructor for DynamicColor.
     *
     * _Strongly_ prefer using one of the convenience constructors. This class is
     * arguably too flexible to ensure it can support any scenario. Functional
     * arguments allow  overriding without risks that come with subclasses.
     *
     * For example, the default behavior of adjust tone at max contrast
     * to be at a 7.0 ratio with its background is principled and
     * matches accessibility guidance. That does not mean it's the desired
     * approach for _every_ design system, and every color pairing,
     * always, in every case.
     *
     * @param name The name of the dynamic color. Defaults to empty.
     * @param palette Function that provides a TonalPalette given
     * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
     * replaces the need to specify hue/chroma. By providing a tonal palette, when
     * contrast adjustments are made, intended chroma can be preserved.
     * @param tone Function that provides a tone, given a DynamicScheme.
     * @param isBackground Whether this dynamic color is a background, with
     * some other color as the foreground. Defaults to false.
     * @param background The background of the dynamic color (as a function of a
     *     `DynamicScheme`), if it exists.
     * @param secondBackground A second background of the dynamic color (as a
     *     function of a `DynamicScheme`), if it
     * exists.
     * @param contrastCurve A `ContrastCurve` object specifying how its contrast
     * against its background should behave in various contrast levels options.
     * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
     * constraint between two colors. One of them must be the color being
     * constructed.
     */
    constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
        this.name = name;
        this.palette = palette;
        this.tone = tone;
        this.isBackground = isBackground;
        this.background = background;
        this.secondBackground = secondBackground;
        this.contrastCurve = contrastCurve;
        this.toneDeltaPair = toneDeltaPair;
        this.hctCache = new Map();
        if ((!background) && secondBackground) {
            throw new Error(`Color ${name} has secondBackground` +
                `defined, but background is not defined.`);
        }
        if ((!background) && contrastCurve) {
            throw new Error(`Color ${name} has contrastCurve` +
                `defined, but background is not defined.`);
        }
        if (background && !contrastCurve) {
            throw new Error(`Color ${name} has background` +
                `defined, but contrastCurve is not defined.`);
        }
    }
    /**
     * Return a ARGB integer (i.e. a hex code).
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getArgb(scheme) {
        return this.getHct(scheme).toInt();
    }
    /**
     * Return a color, expressed in the HCT color space, that this
     * DynamicColor is under the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getHct(scheme) {
        const cachedAnswer = this.hctCache.get(scheme);
        if (cachedAnswer != null) {
            return cachedAnswer;
        }
        const tone = this.getTone(scheme);
        const answer = this.palette(scheme).getHct(tone);
        if (this.hctCache.size > 4) {
            this.hctCache.clear();
        }
        this.hctCache.set(scheme, answer);
        return answer;
    }
    /**
     * Return a tone, T in the HCT color space, that this DynamicColor is under
     * the conditions in scheme.
     *
     * @param scheme Defines the conditions of the user interface, for example,
     * whether or not it is dark mode or light mode, and what the desired
     * contrast level is.
     */
    getTone(scheme) {
        const decreasingContrast = scheme.contrastLevel < 0;
        // Case 1: dual foreground, pair of colors with delta constraint.
        if (this.toneDeltaPair) {
            const toneDeltaPair = this.toneDeltaPair(scheme);
            const roleA = toneDeltaPair.roleA;
            const roleB = toneDeltaPair.roleB;
            const delta = toneDeltaPair.delta;
            const polarity = toneDeltaPair.polarity;
            const stayTogether = toneDeltaPair.stayTogether;
            const bg = this.background(scheme);
            const bgTone = bg.getTone(scheme);
            const aIsNearer = (polarity === 'nearer' ||
                (polarity === 'lighter' && !scheme.isDark) ||
                (polarity === 'darker' && scheme.isDark));
            const nearer = aIsNearer ? roleA : roleB;
            const farther = aIsNearer ? roleB : roleA;
            const amNearer = this.name === nearer.name;
            const expansionDir = scheme.isDark ? 1 : -1;
            // 1st round: solve to min, each
            const nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel);
            const fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel);
            // If a color is good enough, it is not adjusted.
            // Initial and adjusted tones for `nearer`
            const nInitialTone = nearer.tone(scheme);
            let nTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ?
                nInitialTone :
                DynamicColor.foregroundTone(bgTone, nContrast);
            // Initial and adjusted tones for `farther`
            const fInitialTone = farther.tone(scheme);
            let fTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ?
                fInitialTone :
                DynamicColor.foregroundTone(bgTone, fContrast);
            if (decreasingContrast) {
                // If decreasing contrast, adjust color to the "bare minimum"
                // that satisfies contrast.
                nTone = DynamicColor.foregroundTone(bgTone, nContrast);
                fTone = DynamicColor.foregroundTone(bgTone, fContrast);
            }
            if ((fTone - nTone) * expansionDir >= delta) {
                // Good! Tones satisfy the constraint; no change needed.
            }
            else {
                // 2nd round: expand farther to match delta.
                fTone = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0, 100, nTone + delta * expansionDir);
                if ((fTone - nTone) * expansionDir >= delta) {
                    // Good! Tones now satisfy the constraint; no change needed.
                }
                else {
                    // 3rd round: contract nearer to match delta.
                    nTone = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.clampDouble(0, 100, fTone - delta * expansionDir);
                }
            }
            // Avoids the 50-59 awkward zone.
            if (50 <= nTone && nTone < 60) {
                // If `nearer` is in the awkward zone, move it away, together with
                // `farther`.
                if (expansionDir > 0) {
                    nTone = 60;
                    fTone = Math.max(fTone, nTone + delta * expansionDir);
                }
                else {
                    nTone = 49;
                    fTone = Math.min(fTone, nTone + delta * expansionDir);
                }
            }
            else if (50 <= fTone && fTone < 60) {
                if (stayTogether) {
                    // Fixes both, to avoid two colors on opposite sides of the "awkward
                    // zone".
                    if (expansionDir > 0) {
                        nTone = 60;
                        fTone = Math.max(fTone, nTone + delta * expansionDir);
                    }
                    else {
                        nTone = 49;
                        fTone = Math.min(fTone, nTone + delta * expansionDir);
                    }
                }
                else {
                    // Not required to stay together; fixes just one.
                    if (expansionDir > 0) {
                        fTone = 60;
                    }
                    else {
                        fTone = 49;
                    }
                }
            }
            // Returns `nTone` if this color is `nearer`, otherwise `fTone`.
            return amNearer ? nTone : fTone;
        }
        else {
            // Case 2: No contrast pair; just solve for itself.
            let answer = this.tone(scheme);
            if (this.background == null) {
                return answer; // No adjustment for colors with no background.
            }
            const bgTone = this.background(scheme).getTone(scheme);
            const desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel);
            if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {
                // Don't "improve" what's good enough.
            }
            else {
                // Rough improvement.
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (decreasingContrast) {
                answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
            }
            if (this.isBackground && 50 <= answer && answer < 60) {
                // Must adjust
                if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(49, bgTone) >= desiredRatio) {
                    answer = 49;
                }
                else {
                    answer = 60;
                }
            }
            if (this.secondBackground) {
                // Case 3: Adjust for dual backgrounds.
                const [bg1, bg2] = [this.background, this.secondBackground];
                const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
                const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
                if (_contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(upper, answer) >= desiredRatio &&
                    _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
                    return answer;
                }
                // The darkest light tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const lightOption = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.lighter(upper, desiredRatio);
                // The lightest dark tone that satisfies the desired ratio,
                // or -1 if such ratio cannot be reached.
                const darkOption = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.darker(lower, desiredRatio);
                // Tones suitable for the foreground.
                const availables = [];
                if (lightOption !== -1)
                    availables.push(lightOption);
                if (darkOption !== -1)
                    availables.push(darkOption);
                const prefersLight = DynamicColor.tonePrefersLightForeground(bgTone1) ||
                    DynamicColor.tonePrefersLightForeground(bgTone2);
                if (prefersLight) {
                    return (lightOption < 0) ? 100 : lightOption;
                }
                if (availables.length === 1) {
                    return availables[0];
                }
                return (darkOption < 0) ? 0 : darkOption;
            }
            return answer;
        }
    }
    /**
     * Given a background tone, find a foreground tone, while ensuring they reach
     * a contrast ratio that is as close to [ratio] as possible.
     *
     * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
     *     falls outside that range.
     * @param ratio The contrast ratio desired between bgTone and the return
     *     value.
     */
    static foregroundTone(bgTone, ratio) {
        const lighterTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.lighterUnsafe(bgTone, ratio);
        const darkerTone = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.darkerUnsafe(bgTone, ratio);
        const lighterRatio = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(lighterTone, bgTone);
        const darkerRatio = _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_0__.Contrast.ratioOfTones(darkerTone, bgTone);
        const preferLighter = DynamicColor.tonePrefersLightForeground(bgTone);
        if (preferLighter) {
            // This handles an edge case where the initial contrast ratio is high
            // (ex. 13.0), and the ratio passed to the function is that high
            // ratio, and both the lighter and darker ratio fails to pass that
            // ratio.
            //
            // This was observed with Tonal Spot's On Primary Container turning
            // black momentarily between high and max contrast in light mode. PC's
            // standard tone was T90, OPC's was T10, it was light mode, and the
            // contrast value was 0.6568521221032331.
            const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 &&
                lighterRatio < ratio && darkerRatio < ratio;
            return lighterRatio >= ratio || lighterRatio >= darkerRatio ||
                negligibleDifference ?
                lighterTone :
                darkerTone;
        }
        else {
            return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone :
                lighterTone;
        }
    }
    /**
     * Returns whether [tone] prefers a light foreground.
     *
     * People prefer white foregrounds on ~T60-70. Observed over time, and also
     * by Andrew Somers during research for APCA.
     *
     * T60 used as to create the smallest discontinuity possible when skipping
     * down to T49 in order to ensure light foregrounds.
     * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
     * 60, it should not be adjusted. Therefore, 60 is excluded here.
     */
    static tonePrefersLightForeground(tone) {
        return Math.round(tone) < 60.0;
    }
    /**
     * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
     * color.
     */
    static toneAllowsLightForeground(tone) {
        return Math.round(tone) <= 49.0;
    }
    /**
     * Adjust a tone such that white has 4.5 contrast, if the tone is
     * reasonably close to supporting it.
     */
    static enableLightForeground(tone) {
        if (DynamicColor.tonePrefersLightForeground(tone) &&
            !DynamicColor.toneAllowsLightForeground(tone)) {
            return 49.0;
        }
        return tone;
    }
}
//# sourceMappingURL=dynamic_color.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialDynamicColors: () => (/* binding */ MaterialDynamicColors)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hct/viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/* harmony import */ var _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scheme/variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/* harmony import */ var _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contrast_curve.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js");
/* harmony import */ var _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic_color.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js");
/* harmony import */ var _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tone_delta_pair.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







function isFidelity(scheme) {
    return scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.FIDELITY ||
        scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.CONTENT;
}
function isMonochrome(scheme) {
    return scheme.variant === _scheme_variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.MONOCHROME;
}
function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
    let answer = tone;
    let closestToChroma = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(hue, chroma, tone);
    if (closestToChroma.chroma < chroma) {
        let chromaPeak = closestToChroma.chroma;
        while (closestToChroma.chroma < chroma) {
            answer += byDecreasingTone ? -1.0 : 1.0;
            const potentialSolution = _hct_hct_js__WEBPACK_IMPORTED_MODULE_1__.Hct.from(hue, chroma, answer);
            if (chromaPeak > potentialSolution.chroma) {
                break;
            }
            if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
                break;
            }
            const potentialDelta = Math.abs(potentialSolution.chroma - chroma);
            const currentDelta = Math.abs(closestToChroma.chroma - chroma);
            if (potentialDelta < currentDelta) {
                closestToChroma = potentialSolution;
            }
            chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
        }
    }
    return answer;
}
function viewingConditionsForAlbers(scheme) {
    return _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.make(
    /*whitePoint=*/ undefined, 
    /*adaptingLuminance=*/ undefined, 
    /*backgroundLstar=*/ scheme.isDark ? 30 : 80, 
    /*surround=*/ undefined, 
    /*discountingIlluminant=*/ undefined);
}
function performAlbers(prealbers, scheme) {
    const albersd = prealbers.inViewingConditions(viewingConditionsForAlbers(scheme));
    if (_dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.tonePrefersLightForeground(prealbers.tone) &&
        !_dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.toneAllowsLightForeground(albersd.tone)) {
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.enableLightForeground(prealbers.tone);
    }
    else {
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.enableLightForeground(albersd.tone);
    }
}
/**
 * DynamicColors for the colors in the Material Design system.
 */
// Material Color Utilities namespaces the various utilities it provides.
// tslint:disable-next-line:class-as-namespace
class MaterialDynamicColors {
    static highestSurface(s) {
        return s.isDark ? MaterialDynamicColors.surfaceBright :
            MaterialDynamicColors.surfaceDim;
    }
}
MaterialDynamicColors.contentAccentToneDelta = 15.0;
MaterialDynamicColors.primaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_palette_key_color',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.primaryPalette.keyColor.tone,
});
MaterialDynamicColors.secondaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_palette_key_color',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.secondaryPalette.keyColor.tone,
});
MaterialDynamicColors.tertiaryPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_palette_key_color',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => s.tertiaryPalette.keyColor.tone,
});
MaterialDynamicColors.neutralPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'neutral_palette_key_color',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.neutralPalette.keyColor.tone,
});
MaterialDynamicColors.neutralVariantPaletteKeyColor = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'neutral_variant_palette_key_color',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.neutralVariantPalette.keyColor.tone,
});
MaterialDynamicColors.background = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.onBackground = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_background',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.background,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 3, 4.5, 7),
});
MaterialDynamicColors.surface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_dim',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 6 : 87,
    isBackground: true,
});
MaterialDynamicColors.surfaceBright = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_bright',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 24 : 98,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLowest = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_lowest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 4 : 100,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerLow = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_low',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 10 : 96,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 12 : 94,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHigh = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_high',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 17 : 92,
    isBackground: true,
});
MaterialDynamicColors.surfaceContainerHighest = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_container_highest',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 22 : 90,
    isBackground: true,
});
MaterialDynamicColors.onSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.surfaceVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
});
MaterialDynamicColors.onSurfaceVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_surface_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 80 : 30,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.inverseSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 90 : 20,
});
MaterialDynamicColors.inverseOnSurface = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_on_surface',
    palette: (s) => s.neutralPalette,
    tone: (s) => s.isDark ? 20 : 95,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.outline = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'outline',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 60 : 50,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1.5, 3, 4.5, 7),
});
MaterialDynamicColors.outlineVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'outline_variant',
    palette: (s) => s.neutralVariantPalette,
    tone: (s) => s.isDark ? 30 : 80,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
});
MaterialDynamicColors.shadow = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'shadow',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.scrim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'scrim',
    palette: (s) => s.neutralPalette,
    tone: (s) => 0,
});
MaterialDynamicColors.surfaceTint = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'surface_tint',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
});
MaterialDynamicColors.primary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 100 : 0;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, 'nearer', false),
});
MaterialDynamicColors.onPrimary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.primary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.primaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return performAlbers(s.sourceColorHct, s);
        }
        if (isMonochrome(s)) {
            return s.isDark ? 85 : 25;
        }
        return s.isDark ? 30 : 90;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 15, 'nearer', false),
});
MaterialDynamicColors.onPrimaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_container',
    palette: (s) => s.primaryPalette,
    tone: (s) => {
        if (isFidelity(s)) {
            return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
        }
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        return s.isDark ? 90 : 10;
    },
    background: (s) => MaterialDynamicColors.primaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.inversePrimary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'inverse_primary',
    palette: (s) => s.primaryPalette,
    tone: (s) => s.isDark ? 40 : 80,
    background: (s) => MaterialDynamicColors.inverseSurface,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.secondary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, 'nearer', false),
});
MaterialDynamicColors.onSecondary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 100;
        }
        else {
            return s.isDark ? 20 : 100;
        }
    },
    background: (s) => MaterialDynamicColors.secondary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.secondaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        const initialTone = s.isDark ? 30 : 90;
        if (isMonochrome(s)) {
            return s.isDark ? 30 : 85;
        }
        if (!isFidelity(s)) {
            return initialTone;
        }
        let answer = findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
        answer = performAlbers(s.secondaryPalette.getHct(answer), s);
        return answer;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 15, 'nearer', false),
});
MaterialDynamicColors.onSecondaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_container',
    palette: (s) => s.secondaryPalette,
    tone: (s) => {
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 10;
        }
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.secondaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.tertiary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 90 : 25;
        }
        return s.isDark ? 80 : 40;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, 'nearer', false),
});
MaterialDynamicColors.onTertiary = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 10 : 90;
        }
        return s.isDark ? 20 : 100;
    },
    background: (s) => MaterialDynamicColors.tertiary,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.tertiaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 60 : 49;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 30 : 90;
        }
        const albersTone = performAlbers(s.tertiaryPalette.getHct(s.sourceColorHct.tone), s);
        const proposedHct = s.tertiaryPalette.getHct(albersTone);
        return _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
    },
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 15, 'nearer', false),
});
MaterialDynamicColors.onTertiaryContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_container',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => {
        if (isMonochrome(s)) {
            return s.isDark ? 0 : 100;
        }
        if (!isFidelity(s)) {
            return s.isDark ? 90 : 10;
        }
        return _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
    },
    background: (s) => MaterialDynamicColors.tertiaryContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.error = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 80 : 40,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, 'nearer', false),
});
MaterialDynamicColors.onError = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_error',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 20 : 100,
    background: (s) => MaterialDynamicColors.error,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.errorContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 30 : 90,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 15, 'nearer', false),
});
MaterialDynamicColors.onErrorContainer = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_error_container',
    palette: (s) => s.errorPalette,
    tone: (s) => s.isDark ? 90 : 10,
    background: (s) => MaterialDynamicColors.errorContainer,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.primaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.primaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'primary_fixed_dim',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onPrimaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_fixed',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onPrimaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_primary_fixed_variant',
    palette: (s) => s.primaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.primaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.primaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.secondaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 80.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.secondaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'secondary_fixed_dim',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 70.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onSecondaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_fixed',
    palette: (s) => s.secondaryPalette,
    tone: (s) => 10.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onSecondaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_secondary_fixed_variant',
    palette: (s) => s.secondaryPalette,
    tone: (s) => isMonochrome(s) ? 25.0 : 30.0,
    background: (s) => MaterialDynamicColors.secondaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
MaterialDynamicColors.tertiaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 40.0 : 90.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.tertiaryFixedDim = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'tertiary_fixed_dim',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 30.0 : 80.0,
    isBackground: true,
    background: (s) => MaterialDynamicColors.highestSurface(s),
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(1, 1, 3, 7),
    toneDeltaPair: (s) => new _tone_delta_pair_js__WEBPACK_IMPORTED_MODULE_6__.ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, 'lighter', true),
});
MaterialDynamicColors.onTertiaryFixed = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_fixed',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 100.0 : 10.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(4.5, 7, 11, 21),
});
MaterialDynamicColors.onTertiaryFixedVariant = _dynamic_color_js__WEBPACK_IMPORTED_MODULE_5__.DynamicColor.fromPalette({
    name: 'on_tertiary_fixed_variant',
    palette: (s) => s.tertiaryPalette,
    tone: (s) => isMonochrome(s) ? 90.0 : 30.0,
    background: (s) => MaterialDynamicColors.tertiaryFixedDim,
    secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
    contrastCurve: new _contrast_curve_js__WEBPACK_IMPORTED_MODULE_4__.ContrastCurve(3, 4.5, 7, 11),
});
//# sourceMappingURL=material_dynamic_colors.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToneDeltaPair: () => (/* binding */ ToneDeltaPair)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Documents a constraint between two DynamicColors, in which their tones must
 * have a certain distance from each other.
 *
 * Prefer a DynamicColor with a background, this is for special cases when
 * designers want tonal distance, literally contrast, between two colors that
 * don't have a background / foreground relationship or a contrast guarantee.
 */
class ToneDeltaPair {
    /**
     * Documents a constraint in tone distance between two DynamicColors.
     *
     * The polarity is an adjective that describes "A", compared to "B".
     *
     * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
     * A's tone should be at least 15 darker than B's.
     *
     * 'nearer' and 'farther' describes closeness to the surface roles. For
     * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
     * should be 10 lighter than B in light mode, and 10 darker than B in dark
     * mode.
     *
     * @param roleA The first role in a pair.
     * @param roleB The second role in a pair.
     * @param delta Required difference between tones. Absolute value, negative
     * values have undefined behavior.
     * @param polarity The relative relation between tones of roleA and roleB,
     * as described above.
     * @param stayTogether Whether these two roles should stay on the same side of
     * the "awkward zone" (T50-59). This is necessary for certain cases where
     * one role has two backgrounds.
     */
    constructor(roleA, roleB, delta, polarity, stayTogether) {
        this.roleA = roleA;
        this.roleB = roleB;
        this.delta = delta;
        this.polarity = polarity;
        this.stayTogether = stayTogether;
    }
}
//# sourceMappingURL=tone_delta_pair.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/cam16.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/cam16.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cam16: () => (/* binding */ Cam16)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */
class Cam16 {
    /**
     * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
     * the following combinations:
     *      -  {j or q} and {c, m, or s} and hue
     *      - jstar, astar, bstar
     * Prefer using a static method that constructs from 3 of those dimensions.
     * This constructor is intended for those methods to use to return all
     * possible dimensions.
     *
     * @param hue
     * @param chroma informally, colorfulness / color intensity. like saturation
     *     in HSL, except perceptually accurate.
     * @param j lightness
     * @param q brightness; ratio of lightness to white point's lightness
     * @param m colorfulness
     * @param s saturation; ratio of chroma to white point's chroma
     * @param jstar CAM16-UCS J coordinate
     * @param astar CAM16-UCS a coordinate
     * @param bstar CAM16-UCS b coordinate
     */
    constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
        this.hue = hue;
        this.chroma = chroma;
        this.j = j;
        this.q = q;
        this.m = m;
        this.s = s;
        this.jstar = jstar;
        this.astar = astar;
        this.bstar = bstar;
    }
    /**
     * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
     * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
     * specification, and is used to measure distances between colors.
     */
    distance(other) {
        const dJ = this.jstar - other.jstar;
        const dA = this.astar - other.astar;
        const dB = this.bstar - other.bstar;
        const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
        const dE = 1.41 * Math.pow(dEPrime, 0.63);
        return dE;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return CAM16 color, assuming the color was viewed in default viewing
     *     conditions.
     */
    static fromInt(argb) {
        return Cam16.fromIntInViewingConditions(argb, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param argb ARGB representation of a color.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     * @return CAM16 color.
     */
    static fromIntInViewingConditions(argb, viewingConditions) {
        const red = (argb & 0x00ff0000) >> 16;
        const green = (argb & 0x0000ff00) >> 8;
        const blue = (argb & 0x000000ff);
        const redL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(red);
        const greenL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(green);
        const blueL = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.linearized(blue);
        const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
        const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
        const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        const rAF = Math.pow((viewingConditions.fl * Math.abs(rD)) / 100.0, 0.42);
        const gAF = Math.pow((viewingConditions.fl * Math.abs(gD)) / 100.0, 0.42);
        const bAF = Math.pow((viewingConditions.fl * Math.abs(bD)) / 100.0, 0.42);
        const rA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rD) * 400.0 * rAF) / (rAF + 27.13);
        const gA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gD) * 400.0 * gAF) / (gAF + 27.13);
        const bA = (_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bD) * 400.0 * bAF) / (bAF + 27.13);
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        const b = (rA + gA - 2.0 * bA) / 9.0;
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        const atan2 = Math.atan2(b, a);
        const atanDegrees = (atan2 * 180.0) / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360.0 :
                atanDegrees;
        const hueRadians = (hue * Math.PI) / 180.0;
        const ac = p2 * viewingConditions.nbb;
        const j = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const huePrime = hue < 20.14 ? hue + 360 : hue;
        const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8);
        const p1 = (50000.0 / 13.0) * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const c = alpha * Math.sqrt(j / 100.0);
        const m = c * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     */
    static fromJch(j, c, h) {
        return Cam16.fromJchInViewingConditions(j, c, h, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param j CAM16 lightness
     * @param c CAM16 chroma
     * @param h CAM16 hue
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromJchInViewingConditions(j, c, h, viewingConditions) {
        const q = (4.0 / viewingConditions.c) * Math.sqrt(j / 100.0) *
            (viewingConditions.aw + 4.0) * viewingConditions.fLRoot;
        const m = c * viewingConditions.fLRoot;
        const alpha = c / Math.sqrt(j / 100.0);
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        const hueRadians = (h * Math.PI) / 180.0;
        const jstar = ((1.0 + 100.0 * 0.007) * j) / (1.0 + 0.007 * j);
        const mstar = (1.0 / 0.0228) * Math.log(1.0 + 0.0228 * m);
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     */
    static fromUcs(jstar, astar, bstar) {
        return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param jstar CAM16-UCS lightness.
     * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the Y axis.
     * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
     *     coordinate on the X axis.
     * @param viewingConditions Information about the environment where the color
     *     was observed.
     */
    static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
        const a = astar;
        const b = bstar;
        const m = Math.sqrt(a * a + b * b);
        const M = (Math.exp(m * 0.0228) - 1.0) / 0.0228;
        const c = M / viewingConditions.fLRoot;
        let h = Math.atan2(b, a) * (180.0 / Math.PI);
        if (h < 0.0) {
            h += 360.0;
        }
        const j = jstar / (1 - (jstar - 100) * 0.007);
        return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
    }
    /**
     *  @return ARGB representation of color, assuming the color was viewed in
     *     default viewing conditions, which are near-identical to the default
     *     viewing conditions for sRGB.
     */
    toInt() {
        return this.viewed(_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_2__.ViewingConditions.DEFAULT);
    }
    /**
     * @param viewingConditions Information about the environment where the color
     *     will be viewed.
     * @return ARGB representation of color
     */
    viewed(viewingConditions) {
        const alpha = this.chroma === 0.0 || this.j === 0.0 ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = (this.hue * Math.PI) / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = ac / viewingConditions.nbb;
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = (23.0 * (p2 + 0.305) * t) /
            (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
        const argb = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromXyz(x, y, z);
        return argb;
    }
    /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
    /// CAM16.
    static fromXyzInViewingConditions(x, y, z, viewingConditions) {
        // Transform XYZ to 'cone'/'rgb' responses
        const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
        const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
        const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
        // Discount illuminant
        const rD = viewingConditions.rgbD[0] * rC;
        const gD = viewingConditions.rgbD[1] * gC;
        const bD = viewingConditions.rgbD[2] * bC;
        // chromatic adaptation
        const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100.0, 0.42);
        const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100.0, 0.42);
        const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100.0, 0.42);
        const rA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rD) * 400.0 * rAF / (rAF + 27.13);
        const gA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gD) * 400.0 * gAF / (gAF + 27.13);
        const bA = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bD) * 400.0 * bAF / (bAF + 27.13);
        // redness-greenness
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        // auxiliary components
        const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
        const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
        // hue
        const atan2 = Math.atan2(b, a);
        const atanDegrees = atan2 * 180.0 / Math.PI;
        const hue = atanDegrees < 0 ? atanDegrees + 360.0 :
            atanDegrees >= 360 ? atanDegrees - 360 :
                atanDegrees;
        const hueRadians = hue * Math.PI / 180.0;
        // achromatic response to color
        const ac = p2 * viewingConditions.nbb;
        // CAM16 lightness and brightness
        const J = 100.0 *
            Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
        const Q = (4.0 / viewingConditions.c) * Math.sqrt(J / 100.0) *
            (viewingConditions.aw + 4.0) * (viewingConditions.fLRoot);
        const huePrime = (hue < 20.14) ? hue + 360 : hue;
        const eHue = (1.0 / 4.0) * (Math.cos(huePrime * Math.PI / 180.0 + 2.0) + 3.8);
        const p1 = 50000.0 / 13.0 * eHue * viewingConditions.nc * viewingConditions.ncb;
        const t = p1 * Math.sqrt(a * a + b * b) / (u + 0.305);
        const alpha = Math.pow(t, 0.9) *
            Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        // CAM16 chroma, colorfulness, chroma
        const C = alpha * Math.sqrt(J / 100.0);
        const M = C * viewingConditions.fLRoot;
        const s = 50.0 *
            Math.sqrt((alpha * viewingConditions.c) / (viewingConditions.aw + 4.0));
        // CAM16-UCS components
        const jstar = (1.0 + 100.0 * 0.007) * J / (1.0 + 0.007 * J);
        const mstar = Math.log(1.0 + 0.0228 * M) / 0.0228;
        const astar = mstar * Math.cos(hueRadians);
        const bstar = mstar * Math.sin(hueRadians);
        return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
    }
    /// XYZ representation of CAM16 seen in [viewingConditions].
    xyzInViewingConditions(viewingConditions) {
        const alpha = (this.chroma === 0.0 || this.j === 0.0) ?
            0.0 :
            this.chroma / Math.sqrt(this.j / 100.0);
        const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73), 1.0 / 0.9);
        const hRad = this.hue * Math.PI / 180.0;
        const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
        const ac = viewingConditions.aw *
            Math.pow(this.j / 100.0, 1.0 / viewingConditions.c / viewingConditions.z);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const p2 = (ac / viewingConditions.nbb);
        const hSin = Math.sin(hRad);
        const hCos = Math.cos(hRad);
        const gamma = 23.0 * (p2 + 0.305) * t /
            (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
        const a = gamma * hCos;
        const b = gamma * hSin;
        const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
        const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
        const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
        const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
        const rC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(rA) * (100.0 / viewingConditions.fl) *
            Math.pow(rCBase, 1.0 / 0.42);
        const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
        const gC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(gA) * (100.0 / viewingConditions.fl) *
            Math.pow(gCBase, 1.0 / 0.42);
        const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
        const bC = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(bA) * (100.0 / viewingConditions.fl) *
            Math.pow(bCBase, 1.0 / 0.42);
        const rF = rC / viewingConditions.rgbD[0];
        const gF = gC / viewingConditions.rgbD[1];
        const bF = bC / viewingConditions.rgbD[2];
        const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
        const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
        const z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
        return [x, y, z];
    }
}
//# sourceMappingURL=cam16.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/hct.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/hct.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hct: () => (/* binding */ Hct)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _cam16_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_solver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hct_solver.js */ "./node_modules/@material/material-color-utilities/hct/hct_solver.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */




/**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */
class Hct {
    static from(hue, chroma, tone) {
        return new Hct(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(hue, chroma, tone));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return HCT representation of a color in default viewing conditions
     */
    static fromInt(argb) {
        return new Hct(argb);
    }
    toInt() {
        return this.argb;
    }
    /**
     * A number, in degrees, representing ex. red, orange, yellow, etc.
     * Ranges from 0 <= hue < 360.
     */
    get hue() {
        return this.internalHue;
    }
    /**
     * @param newHue 0 <= newHue < 360; invalid values are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set hue(newHue) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
    }
    get chroma() {
        return this.internalChroma;
    }
    /**
     * @param newChroma 0 <= newChroma < ?
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set chroma(newChroma) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
    }
    /** Lightness. Ranges from 0 to 100. */
    get tone() {
        return this.internalTone;
    }
    /**
     * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
     * Chroma may decrease because chroma has a different maximum for any given
     * hue and tone.
     */
    set tone(newTone) {
        this.setInternalState(_hct_solver_js__WEBPACK_IMPORTED_MODULE_2__.HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
    }
    constructor(argb) {
        this.argb = argb;
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromArgb(argb);
        this.argb = argb;
    }
    setInternalState(argb) {
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(argb);
        this.internalHue = cam.hue;
        this.internalChroma = cam.chroma;
        this.internalTone = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromArgb(argb);
        this.argb = argb;
    }
    /**
     * Translates a color into different [ViewingConditions].
     *
     * Colors change appearance. They look different with lights on versus off,
     * the same color, as in hex code, on white looks different when on black.
     * This is called color relativity, most famously explicated by Josef Albers
     * in Interaction of Color.
     *
     * In color science, color appearance models can account for this and
     * calculate the appearance of a color in different settings. HCT is based on
     * CAM16, a color appearance model, and uses it to make these calculations.
     *
     * See [ViewingConditions.make] for parameters affecting color appearance.
     */
    inViewingConditions(vc) {
        // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
        const cam = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromInt(this.toInt());
        const viewedInVc = cam.xyzInViewingConditions(vc);
        // 2. Create CAM16 of those XYZ coordinates in default VC.
        const recastInVc = _cam16_js__WEBPACK_IMPORTED_MODULE_1__.Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__.ViewingConditions.make());
        // 3. Create HCT from:
        // - CAM16 using default VC with XYZ coordinates in specified VC.
        // - L* converted from Y in XYZ coordinates in specified VC.
        const recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.lstarFromY(viewedInVc[1]));
        return recastHct;
    }
}
//# sourceMappingURL=hct.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/hct_solver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/hct_solver.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HctSolver: () => (/* binding */ HctSolver)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _cam16_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.




// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * A class that solves the HCT equation.
 */
class HctSolver {
    /**
     * Sanitizes a small enough angle in radians.
     *
     * @param angle An angle in radians; must not deviate too much
     * from 0.
     * @return A coterminal angle between 0 and 2pi.
     */
    static sanitizeRadians(angle) {
        return (angle + Math.PI * 8) % (Math.PI * 2);
    }
    /**
     * Delinearizes an RGB component, returning a floating-point
     * number.
     *
     * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
     * linear R/G/B channel
     * @return 0.0 <= output <= 255.0, color channel converted to
     * regular RGB space
     */
    static trueDelinearized(rgbComponent) {
        const normalized = rgbComponent / 100.0;
        let delinearized = 0.0;
        if (normalized <= 0.0031308) {
            delinearized = normalized * 12.92;
        }
        else {
            delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
        }
        return delinearized * 255.0;
    }
    static chromaticAdaptation(component) {
        const af = Math.pow(Math.abs(component), 0.42);
        return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(component) * 400.0 * af / (af + 27.13);
    }
    /**
     * Returns the hue of a linear RGB color in CAM16.
     *
     * @param linrgb The linear RGB coordinates of a color.
     * @return The hue of the color in CAM16, in radians.
     */
    static hueOf(linrgb) {
        const scaledDiscount = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
        const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
        const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
        const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
        // redness-greenness
        const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
        // yellowness-blueness
        const b = (rA + gA - 2.0 * bA) / 9.0;
        return Math.atan2(b, a);
    }
    static areInCyclicOrder(a, b, c) {
        const deltaAB = HctSolver.sanitizeRadians(b - a);
        const deltaAC = HctSolver.sanitizeRadians(c - a);
        return deltaAB < deltaAC;
    }
    /**
     * Solves the lerp equation.
     *
     * @param source The starting number.
     * @param mid The number in the middle.
     * @param target The ending number.
     * @return A number t such that lerp(source, target, t) = mid.
     */
    static intercept(source, mid, target) {
        return (mid - source) / (target - source);
    }
    static lerpPoint(source, t, target) {
        return [
            source[0] + (target[0] - source[0]) * t,
            source[1] + (target[1] - source[1]) * t,
            source[2] + (target[2] - source[2]) * t,
        ];
    }
    /**
     * Intersects a segment with a plane.
     *
     * @param source The coordinates of point A.
     * @param coordinate The R-, G-, or B-coordinate of the plane.
     * @param target The coordinates of point B.
     * @param axis The axis the plane is perpendicular with. (0: R, 1:
     * G, 2: B)
     * @return The intersection point of the segment AB with the plane
     * R=coordinate, G=coordinate, or B=coordinate
     */
    static setCoordinate(source, coordinate, target, axis) {
        const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
        return HctSolver.lerpPoint(source, t, target);
    }
    static isBounded(x) {
        return 0.0 <= x && x <= 100.0;
    }
    /**
     * Returns the nth possible vertex of the polygonal intersection.
     *
     * @param y The Y value of the plane.
     * @param n The zero-based index of the point. 0 <= n <= 11.
     * @return The nth possible vertex of the polygonal intersection
     * of the y plane and the RGB cube, in linear RGB coordinates, if
     * it exists. If this possible vertex lies outside of the cube,
     * [-1.0, -1.0, -1.0] is returned.
     */
    static nthVertex(y, n) {
        const kR = HctSolver.Y_FROM_LINRGB[0];
        const kG = HctSolver.Y_FROM_LINRGB[1];
        const kB = HctSolver.Y_FROM_LINRGB[2];
        const coordA = n % 4 <= 1 ? 0.0 : 100.0;
        const coordB = n % 2 === 0 ? 0.0 : 100.0;
        if (n < 4) {
            const g = coordA;
            const b = coordB;
            const r = (y - g * kG - b * kB) / kR;
            if (HctSolver.isBounded(r)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else if (n < 8) {
            const b = coordA;
            const r = coordB;
            const g = (y - r * kR - b * kB) / kG;
            if (HctSolver.isBounded(g)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
        else {
            const r = coordA;
            const g = coordB;
            const b = (y - r * kR - g * kG) / kB;
            if (HctSolver.isBounded(b)) {
                return [r, g, b];
            }
            else {
                return [-1.0, -1.0, -1.0];
            }
        }
    }
    /**
     * Finds the segment containing the desired color.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return A list of two sets of linear RGB coordinates, each
     * corresponding to an endpoint of the segment containing the
     * desired color.
     */
    static bisectToSegment(y, targetHue) {
        let left = [-1.0, -1.0, -1.0];
        let right = left;
        let leftHue = 0.0;
        let rightHue = 0.0;
        let initialized = false;
        let uncut = true;
        for (let n = 0; n < 12; n++) {
            const mid = HctSolver.nthVertex(y, n);
            if (mid[0] < 0) {
                continue;
            }
            const midHue = HctSolver.hueOf(mid);
            if (!initialized) {
                left = mid;
                right = mid;
                leftHue = midHue;
                rightHue = midHue;
                initialized = true;
                continue;
            }
            if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
                uncut = false;
                if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                    right = mid;
                    rightHue = midHue;
                }
                else {
                    left = mid;
                    leftHue = midHue;
                }
            }
        }
        return [left, right];
    }
    static midpoint(a, b) {
        return [
            (a[0] + b[0]) / 2,
            (a[1] + b[1]) / 2,
            (a[2] + b[2]) / 2,
        ];
    }
    static criticalPlaneBelow(x) {
        return Math.floor(x - 0.5);
    }
    static criticalPlaneAbove(x) {
        return Math.ceil(x - 0.5);
    }
    /**
     * Finds a color with the given Y and hue on the boundary of the
     * cube.
     *
     * @param y The Y value of the color.
     * @param targetHue The hue of the color.
     * @return The desired color, in linear RGB coordinates.
     */
    static bisectToLimit(y, targetHue) {
        const segment = HctSolver.bisectToSegment(y, targetHue);
        let left = segment[0];
        let leftHue = HctSolver.hueOf(left);
        let right = segment[1];
        for (let axis = 0; axis < 3; axis++) {
            if (left[axis] !== right[axis]) {
                let lPlane = -1;
                let rPlane = 255;
                if (left[axis] < right[axis]) {
                    lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
                }
                else {
                    lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
                    rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
                }
                for (let i = 0; i < 8; i++) {
                    if (Math.abs(rPlane - lPlane) <= 1) {
                        break;
                    }
                    else {
                        const mPlane = Math.floor((lPlane + rPlane) / 2.0);
                        const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
                        const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
                        const midHue = HctSolver.hueOf(mid);
                        if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
                            right = mid;
                            rPlane = mPlane;
                        }
                        else {
                            left = mid;
                            leftHue = midHue;
                            lPlane = mPlane;
                        }
                    }
                }
            }
        }
        return HctSolver.midpoint(left, right);
    }
    static inverseChromaticAdaptation(adapted) {
        const adaptedAbs = Math.abs(adapted);
        const base = Math.max(0, 27.13 * adaptedAbs / (400.0 - adaptedAbs));
        return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.signum(adapted) * Math.pow(base, 1.0 / 0.42);
    }
    /**
     * Finds a color with the given hue, chroma, and Y.
     *
     * @param hueRadians The desired hue in radians.
     * @param chroma The desired chroma.
     * @param y The desired Y.
     * @return The desired color as a hexadecimal integer, if found; 0
     * otherwise.
     */
    static findResultByJ(hueRadians, chroma, y) {
        // Initial estimate of j.
        let j = Math.sqrt(y) * 11.0;
        // ===========================================================
        // Operations inlined from Cam16 to avoid repeated calculation
        // ===========================================================
        const viewingConditions = _viewing_conditions_js__WEBPACK_IMPORTED_MODULE_3__.ViewingConditions.DEFAULT;
        const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(0.29, viewingConditions.n), 0.73);
        const eHue = 0.25 * (Math.cos(hueRadians + 2.0) + 3.8);
        const p1 = eHue * (50000.0 / 13.0) * viewingConditions.nc * viewingConditions.ncb;
        const hSin = Math.sin(hueRadians);
        const hCos = Math.cos(hueRadians);
        for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            const jNormalized = j / 100.0;
            const alpha = chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(jNormalized);
            const t = Math.pow(alpha * tInnerCoeff, 1.0 / 0.9);
            const ac = viewingConditions.aw *
                Math.pow(jNormalized, 1.0 / viewingConditions.c / viewingConditions.z);
            const p2 = ac / viewingConditions.nbb;
            const gamma = 23.0 * (p2 + 0.305) * t /
                (23.0 * p1 + 11 * t * hCos + 108.0 * t * hSin);
            const a = gamma * hCos;
            const b = gamma * hSin;
            const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
            const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
            const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
            const rCScaled = HctSolver.inverseChromaticAdaptation(rA);
            const gCScaled = HctSolver.inverseChromaticAdaptation(gA);
            const bCScaled = HctSolver.inverseChromaticAdaptation(bA);
            const linrgb = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.matrixMultiply([rCScaled, gCScaled, bCScaled], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
            // ===========================================================
            // Operations inlined from Cam16 to avoid repeated calculation
            // ===========================================================
            if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) {
                return 0;
            }
            const kR = HctSolver.Y_FROM_LINRGB[0];
            const kG = HctSolver.Y_FROM_LINRGB[1];
            const kB = HctSolver.Y_FROM_LINRGB[2];
            const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
            if (fnj <= 0) {
                return 0;
            }
            if (iterationRound === 4 || Math.abs(fnj - y) < 0.002) {
                if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) {
                    return 0;
                }
                return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLinrgb(linrgb);
            }
            // Iterates with Newton method,
            // Using 2 * fn(j) / j as the approximation of fn'(j)
            j = j - (fnj - y) * j / (2 * fnj);
        }
        return 0;
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return A hexadecimal representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToInt(hueDegrees, chroma, lstar) {
        if (chroma < 0.0001 || lstar < 0.0001 || lstar > 99.9999) {
            return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLstar(lstar);
        }
        hueDegrees = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(hueDegrees);
        const hueRadians = hueDegrees / 180 * Math.PI;
        const y = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(lstar);
        const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
        if (exactAnswer !== 0) {
            return exactAnswer;
        }
        const linrgb = HctSolver.bisectToLimit(y, hueRadians);
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLinrgb(linrgb);
    }
    /**
     * Finds an sRGB color with the given hue, chroma, and L*, if
     * possible.
     *
     * @param hueDegrees The desired hue, in degrees.
     * @param chroma The desired chroma.
     * @param lstar The desired L*.
     * @return An CAM16 object representing the sRGB color. The color
     * has sufficiently close hue, chroma, and L* to the desired
     * values, if possible; otherwise, the hue and L* will be
     * sufficiently close, and chroma will be maximized.
     */
    static solveToCam(hueDegrees, chroma, lstar) {
        return _cam16_js__WEBPACK_IMPORTED_MODULE_2__.Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
    }
}
HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
    [
        0.001200833568784504,
        0.002389694492170889,
        0.0002795742885861124,
    ],
    [
        0.0005891086651375999,
        0.0029785502573438758,
        0.0003270666104008398,
    ],
    [
        0.00010146692491640572,
        0.0005364214359186694,
        0.0032979401770712076,
    ],
];
HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
    [
        1373.2198709594231,
        -1100.4251190754821,
        -7.278681089101213,
    ],
    [
        -271.815969077903,
        559.6580465940733,
        -32.46047482791194,
    ],
    [
        1.9622899599665666,
        -57.173814538844006,
        308.7233197812385,
    ],
];
HctSolver.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
HctSolver.CRITICAL_PLANES = [
    0.015176349177441876, 0.045529047532325624, 0.07588174588720938,
    0.10623444424209313, 0.13658714259697685, 0.16693984095186062,
    0.19729253930674434, 0.2276452376616281, 0.2579979360165119,
    0.28835063437139563, 0.3188300904430532, 0.350925934958123,
    0.3848314933096426, 0.42057480301049466, 0.458183274052838,
    0.4976837250274023, 0.5391024159806381, 0.5824650784040898,
    0.6277969426914107, 0.6751227633498623, 0.7244668422128921,
    0.775853049866786, 0.829304845476233, 0.8848452951698498,
    0.942497089126609, 1.0022825574869039, 1.0642236851973577,
    1.1283421258858297, 1.1946592148522128, 1.2631959812511864,
    1.3339731595349034, 1.407011200216447, 1.4823302800086415,
    1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
    1.8068114625156377, 1.8938294463134073, 1.9832442801866852,
    2.075074464868551, 2.1693382909216234, 2.2660538449872063,
    2.36523901573795, 2.4669114995532007, 2.5710888059345764,
    2.6777882626779785, 2.7870270208169257, 2.898822059350997,
    3.0131901897720907, 3.1301480604002863, 3.2497121605402226,
    3.3718988244681087, 3.4967242352587946, 3.624204428461639,
    3.754355295633311, 3.887192587735158, 4.022731918402185,
    4.160988767090289, 4.301978482107941, 4.445716283538092,
    4.592217266055746, 4.741496401646282, 4.893568542229298,
    5.048448422192488, 5.20615066083972, 5.3666897647573375,
    5.5300801301023865, 5.696336044816294, 5.865471690767354,
    6.037501145825082, 6.212438385869475, 6.390297286737924,
    6.571091626112461, 6.7548350853498045, 6.941541251256611,
    7.131223617812143, 7.323895587840543, 7.5195704746346665,
    7.7182615035334345, 7.919981813454504, 8.124744458384042,
    8.332562408825165, 8.543448553206703, 8.757415699253682,
    8.974476575321063, 9.194643831691977, 9.417930041841839,
    9.644347703669503, 9.873909240696694, 10.106627003236781,
    10.342513269534024, 10.58158024687427, 10.8238400726681,
    11.069304815507364, 11.317986476196008, 11.569896988756009,
    11.825048221409341, 12.083451977536606, 12.345119996613247,
    12.610063955123938, 12.878295467455942, 13.149826086772048,
    13.42466730586372, 13.702830557985108, 13.984327217668513,
    14.269168601521828, 14.55736596900856, 14.848930523210871,
    15.143873411576273, 15.44220572664832, 15.743938506781891,
    16.04908273684337, 16.35764934889634, 16.66964922287304,
    16.985093187232053, 17.30399201960269, 17.62635644741625,
    17.95219714852476, 18.281524751807332, 18.614349837764564,
    18.95068293910138, 19.290534541298456, 19.633915083172692,
    19.98083495742689, 20.331304511189067, 20.685334046541502,
    21.042933821039977, 21.404114048223256, 21.76888489811322,
    22.137256497705877, 22.50923893145328, 22.884842241736916,
    23.264076429332462, 23.6469514538663, 24.033477234264016,
    24.42366364919083, 24.817520537484558, 25.21505769858089,
    25.61628489293138, 26.021211842414342, 26.429848230738664,
    26.842203703840827, 27.258287870275353, 27.678110301598522,
    28.10168053274597, 28.529008062403893, 28.96010235337422,
    29.39497283293396, 29.83362889318845, 30.276079891419332,
    30.722335150426627, 31.172403958865512, 31.62629557157785,
    32.08401920991837, 32.54558406207592, 33.010999283389665,
    33.4802739966603, 33.953417292456834, 34.430438229418264,
    34.911345834551085, 35.39614910352207, 35.88485700094671,
    36.37747846067349, 36.87402238606382, 37.37449765026789,
    37.87891309649659, 38.38727753828926, 38.89959975977785,
    39.41588851594697, 39.93615253289054, 40.460400508064545,
    40.98864111053629, 41.520882981230194, 42.05713473317016,
    42.597404951718396, 43.141702194811224, 43.6900349931913,
    44.24241185063697, 44.798841244188324, 45.35933162437017,
    45.92389141541209, 46.49252901546552, 47.065252796817916,
    47.64207110610409, 48.22299226451468, 48.808024568002054,
    49.3971762874833, 49.9904556690408, 50.587870934119984,
    51.189430279724725, 51.79514187861014, 52.40501387947288,
    53.0190544071392, 53.637271562750364, 54.259673423945976,
    54.88626804504493, 55.517063457223934, 56.15206766869424,
    56.79128866487574, 57.43473440856916, 58.08241284012621,
    58.734331877617365, 59.39049941699807, 60.05092333227251,
    60.715611475655585, 61.38457167773311, 62.057811747619894,
    62.7353394731159, 63.417162620860914, 64.10328893648692,
    64.79372614476921, 65.48848194977529, 66.18756403501224,
    66.89098006357258, 67.59873767827808, 68.31084450182222,
    69.02730813691093, 69.74813616640164, 70.47333615344107,
    71.20291564160104, 71.93688215501312, 72.67524319850172,
    73.41800625771542, 74.16517879925733, 74.9167682708136,
    75.67278210128072, 76.43322770089146, 77.1981124613393,
    77.96744375590167, 78.74122893956174, 79.51947534912904,
    80.30219030335869, 81.08938110306934, 81.88105503125999,
    82.67721935322541, 83.4778813166706, 84.28304815182372,
    85.09272707154808, 85.90692527145302, 86.72564993000343,
    87.54890820862819, 88.3767072518277, 89.2090541872801,
    90.04595612594655, 90.88742016217518, 91.73345337380438,
    92.58406282226491, 93.43925555268066, 94.29903859396902,
    95.16341895893969, 96.03240364439274, 96.9059996312159,
    97.78421388448044, 98.6670533535366, 99.55452497210776,
];
//# sourceMappingURL=hct_solver.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/hct/viewing_conditions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewingConditions: () => (/* binding */ ViewingConditions)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */
class ViewingConditions {
    /**
     * Create ViewingConditions from a simple, physically relevant, set of
     * parameters.
     *
     * @param whitePoint White point, measured in the XYZ color space.
     *     default = D65, or sunny day afternoon
     * @param adaptingLuminance The luminance of the adapting field. Informally,
     *     how bright it is in the room where the color is viewed. Can be
     *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
     *     or 200 lux.
     * @param backgroundLstar The lightness of the area surrounding the color.
     *     measured by L* in L*a*b*. default = 50.0
     * @param surround A general description of the lighting surrounding the
     *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
     *     dimly light room, like watching TV at home at night. 2.0 means there
     *     is no difference between the lighting on the color and around it.
     *     default = 2.0
     * @param discountingIlluminant Whether the eye accounts for the tint of the
     *     ambient lighting, such as knowing an apple is still red in green light.
     *     default = false, the eye does not perform this process on
     *       self-luminous objects like displays.
     */
    static make(whitePoint = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.whitePointD65(), adaptingLuminance = (200.0 / Math.PI) * _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(50.0) / 100.0, backgroundLstar = 50.0, surround = 2.0, discountingIlluminant = false) {
        const xyz = whitePoint;
        const rW = xyz[0] * 0.401288 + xyz[1] * 0.650173 + xyz[2] * -0.051461;
        const gW = xyz[0] * -0.250268 + xyz[1] * 1.204414 + xyz[2] * 0.045854;
        const bW = xyz[0] * -0.002079 + xyz[1] * 0.048952 + xyz[2] * 0.953127;
        const f = 0.8 + surround / 10.0;
        const c = f >= 0.9 ? _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.lerp(0.59, 0.69, (f - 0.9) * 10.0) :
            _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.lerp(0.525, 0.59, (f - 0.8) * 10.0);
        let d = discountingIlluminant ?
            1.0 :
            f * (1.0 - (1.0 / 3.6) * Math.exp((-adaptingLuminance - 42.0) / 92.0));
        d = d > 1.0 ? 1.0 : d < 0.0 ? 0.0 : d;
        const nc = f;
        const rgbD = [
            d * (100.0 / rW) + 1.0 - d,
            d * (100.0 / gW) + 1.0 - d,
            d * (100.0 / bW) + 1.0 - d,
        ];
        const k = 1.0 / (5.0 * adaptingLuminance + 1.0);
        const k4 = k * k * k * k;
        const k4F = 1.0 - k4;
        const fl = k4 * adaptingLuminance +
            0.1 * k4F * k4F * Math.cbrt(5.0 * adaptingLuminance);
        const n = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.yFromLstar(backgroundLstar) / whitePoint[1];
        const z = 1.48 + Math.sqrt(n);
        const nbb = 0.725 / Math.pow(n, 0.2);
        const ncb = nbb;
        const rgbAFactors = [
            Math.pow((fl * rgbD[0] * rW) / 100.0, 0.42),
            Math.pow((fl * rgbD[1] * gW) / 100.0, 0.42),
            Math.pow((fl * rgbD[2] * bW) / 100.0, 0.42),
        ];
        const rgbA = [
            (400.0 * rgbAFactors[0]) / (rgbAFactors[0] + 27.13),
            (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13),
            (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13),
        ];
        const aw = (2.0 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]) * nbb;
        return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, 0.25), z);
    }
    /**
     * Parameters are intermediate values of the CAM16 conversion process. Their
     * names are shorthand for technical color science terminology, this class
     * would not benefit from documenting them individually. A brief overview
     * is available in the CAM16 specification, and a complete overview requires
     * a color science textbook, such as Fairchild's Color Appearance Models.
     */
    constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
        this.n = n;
        this.aw = aw;
        this.nbb = nbb;
        this.ncb = ncb;
        this.c = c;
        this.nc = nc;
        this.rgbD = rgbD;
        this.fl = fl;
        this.fLRoot = fLRoot;
        this.z = z;
    }
}
/** sRGB-like viewing conditions.  */
ViewingConditions.DEFAULT = ViewingConditions.make();
//# sourceMappingURL=viewing_conditions.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blend: () => (/* reexport safe */ _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__.Blend),
/* harmony export */   Cam16: () => (/* reexport safe */ _hct_cam16_js__WEBPACK_IMPORTED_MODULE_5__.Cam16),
/* harmony export */   Contrast: () => (/* reexport safe */ _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_1__.Contrast),
/* harmony export */   CorePalette: () => (/* reexport safe */ _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_8__.CorePalette),
/* harmony export */   DislikeAnalyzer: () => (/* reexport safe */ _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_2__.DislikeAnalyzer),
/* harmony export */   DynamicColor: () => (/* reexport safe */ _dynamiccolor_dynamic_color_js__WEBPACK_IMPORTED_MODULE_3__.DynamicColor),
/* harmony export */   DynamicScheme: () => (/* reexport safe */ _scheme_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_14__.DynamicScheme),
/* harmony export */   Hct: () => (/* reexport safe */ _hct_hct_js__WEBPACK_IMPORTED_MODULE_6__.Hct),
/* harmony export */   MaterialDynamicColors: () => (/* reexport safe */ _dynamiccolor_material_dynamic_colors_js__WEBPACK_IMPORTED_MODULE_4__.MaterialDynamicColors),
/* harmony export */   QuantizerCelebi: () => (/* reexport safe */ _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_10__.QuantizerCelebi),
/* harmony export */   QuantizerMap: () => (/* reexport safe */ _quantize_quantizer_map_js__WEBPACK_IMPORTED_MODULE_11__.QuantizerMap),
/* harmony export */   QuantizerWsmeans: () => (/* reexport safe */ _quantize_quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_12__.QuantizerWsmeans),
/* harmony export */   QuantizerWu: () => (/* reexport safe */ _quantize_quantizer_wu_js__WEBPACK_IMPORTED_MODULE_13__.QuantizerWu),
/* harmony export */   Scheme: () => (/* reexport safe */ _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_15__.Scheme),
/* harmony export */   SchemeAndroid: () => (/* reexport safe */ _scheme_scheme_android_js__WEBPACK_IMPORTED_MODULE_16__.SchemeAndroid),
/* harmony export */   SchemeContent: () => (/* reexport safe */ _scheme_scheme_content_js__WEBPACK_IMPORTED_MODULE_17__.SchemeContent),
/* harmony export */   SchemeExpressive: () => (/* reexport safe */ _scheme_scheme_expressive_js__WEBPACK_IMPORTED_MODULE_18__.SchemeExpressive),
/* harmony export */   SchemeFidelity: () => (/* reexport safe */ _scheme_scheme_fidelity_js__WEBPACK_IMPORTED_MODULE_19__.SchemeFidelity),
/* harmony export */   SchemeMonochrome: () => (/* reexport safe */ _scheme_scheme_monochrome_js__WEBPACK_IMPORTED_MODULE_20__.SchemeMonochrome),
/* harmony export */   SchemeNeutral: () => (/* reexport safe */ _scheme_scheme_neutral_js__WEBPACK_IMPORTED_MODULE_21__.SchemeNeutral),
/* harmony export */   SchemeTonalSpot: () => (/* reexport safe */ _scheme_scheme_tonal_spot_js__WEBPACK_IMPORTED_MODULE_22__.SchemeTonalSpot),
/* harmony export */   SchemeVibrant: () => (/* reexport safe */ _scheme_scheme_vibrant_js__WEBPACK_IMPORTED_MODULE_23__.SchemeVibrant),
/* harmony export */   Score: () => (/* reexport safe */ _score_score_js__WEBPACK_IMPORTED_MODULE_24__.Score),
/* harmony export */   TemperatureCache: () => (/* reexport safe */ _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_25__.TemperatureCache),
/* harmony export */   TonalPalette: () => (/* reexport safe */ _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_9__.TonalPalette),
/* harmony export */   ViewingConditions: () => (/* reexport safe */ _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_7__.ViewingConditions),
/* harmony export */   alphaFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.alphaFromArgb),
/* harmony export */   applyTheme: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.applyTheme),
/* harmony export */   argbFromHex: () => (/* reexport safe */ _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__.argbFromHex),
/* harmony export */   argbFromLab: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLab),
/* harmony export */   argbFromLinrgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLinrgb),
/* harmony export */   argbFromLstar: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromLstar),
/* harmony export */   argbFromRgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromRgb),
/* harmony export */   argbFromRgba: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromRgba),
/* harmony export */   argbFromXyz: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.argbFromXyz),
/* harmony export */   blueFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.blueFromArgb),
/* harmony export */   clampDouble: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.clampDouble),
/* harmony export */   clampInt: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.clampInt),
/* harmony export */   customColor: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.customColor),
/* harmony export */   delinearized: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.delinearized),
/* harmony export */   differenceDegrees: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.differenceDegrees),
/* harmony export */   greenFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.greenFromArgb),
/* harmony export */   hexFromArgb: () => (/* reexport safe */ _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__.hexFromArgb),
/* harmony export */   isOpaque: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.isOpaque),
/* harmony export */   labFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.labFromArgb),
/* harmony export */   lerp: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.lerp),
/* harmony export */   linearized: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.linearized),
/* harmony export */   lstarFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.lstarFromArgb),
/* harmony export */   lstarFromY: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.lstarFromY),
/* harmony export */   matrixMultiply: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.matrixMultiply),
/* harmony export */   redFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.redFromArgb),
/* harmony export */   rgbaFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.rgbaFromArgb),
/* harmony export */   rotationDirection: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.rotationDirection),
/* harmony export */   sanitizeDegreesDouble: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.sanitizeDegreesDouble),
/* harmony export */   sanitizeDegreesInt: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.sanitizeDegreesInt),
/* harmony export */   signum: () => (/* reexport safe */ _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__.signum),
/* harmony export */   sourceColorFromImage: () => (/* reexport safe */ _utils_image_utils_js__WEBPACK_IMPORTED_MODULE_29__.sourceColorFromImage),
/* harmony export */   themeFromImage: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.themeFromImage),
/* harmony export */   themeFromSourceColor: () => (/* reexport safe */ _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__.themeFromSourceColor),
/* harmony export */   whitePointD65: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.whitePointD65),
/* harmony export */   xyzFromArgb: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.xyzFromArgb),
/* harmony export */   yFromLstar: () => (/* reexport safe */ _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__.yFromLstar)
/* harmony export */ });
/* harmony import */ var _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blend/blend.js */ "./node_modules/@material/material-color-utilities/blend/blend.js");
/* harmony import */ var _contrast_contrast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contrast/contrast.js */ "./node_modules/@material/material-color-utilities/contrast/contrast.js");
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _dynamiccolor_dynamic_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamiccolor/dynamic_color.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js");
/* harmony import */ var _dynamiccolor_material_dynamic_colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamiccolor/material_dynamic_colors.js */ "./node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js");
/* harmony import */ var _hct_cam16_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hct/cam16.js */ "./node_modules/@material/material-color-utilities/hct/cam16.js");
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _hct_viewing_conditions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hct/viewing_conditions.js */ "./node_modules/@material/material-color-utilities/hct/viewing_conditions.js");
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quantize/quantizer_celebi.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js");
/* harmony import */ var _quantize_quantizer_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quantize/quantizer_map.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js");
/* harmony import */ var _quantize_quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quantize/quantizer_wsmeans.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js");
/* harmony import */ var _quantize_quantizer_wu_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quantize/quantizer_wu.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js");
/* harmony import */ var _scheme_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scheme/dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scheme/scheme.js */ "./node_modules/@material/material-color-utilities/scheme/scheme.js");
/* harmony import */ var _scheme_scheme_android_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scheme/scheme_android.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_android.js");
/* harmony import */ var _scheme_scheme_content_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scheme/scheme_content.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_content.js");
/* harmony import */ var _scheme_scheme_expressive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scheme/scheme_expressive.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js");
/* harmony import */ var _scheme_scheme_fidelity_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scheme/scheme_fidelity.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js");
/* harmony import */ var _scheme_scheme_monochrome_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scheme/scheme_monochrome.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js");
/* harmony import */ var _scheme_scheme_neutral_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scheme/scheme_neutral.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js");
/* harmony import */ var _scheme_scheme_tonal_spot_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scheme/scheme_tonal_spot.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js");
/* harmony import */ var _scheme_scheme_vibrant_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scheme/scheme_vibrant.js */ "./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js");
/* harmony import */ var _score_score_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./score/score.js */ "./node_modules/@material/material-color-utilities/score/score.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _utils_string_utils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils/string_utils.js */ "./node_modules/@material/material-color-utilities/utils/string_utils.js");
/* harmony import */ var _utils_image_utils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/image_utils.js */ "./node_modules/@material/material-color-utilities/utils/image_utils.js");
/* harmony import */ var _utils_theme_utils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/theme_utils.js */ "./node_modules/@material/material-color-utilities/utils/theme_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/palettes/core_palette.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/palettes/core_palette.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorePalette: () => (/* binding */ CorePalette)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */
class CorePalette {
    /**
     * @param argb ARGB representation of a color
     */
    static of(argb) {
        return new CorePalette(argb, false);
    }
    /**
     * @param argb ARGB representation of a color
     */
    static contentOf(argb) {
        return new CorePalette(argb, true);
    }
    /**
     * Create a [CorePalette] from a set of colors
     */
    static fromColors(colors) {
        return CorePalette.createPaletteFromColors(false, colors);
    }
    /**
     * Create a content [CorePalette] from a set of colors
     */
    static contentFromColors(colors) {
        return CorePalette.createPaletteFromColors(true, colors);
    }
    static createPaletteFromColors(content, colors) {
        const palette = new CorePalette(colors.primary, content);
        if (colors.secondary) {
            const p = new CorePalette(colors.secondary, content);
            palette.a2 = p.a1;
        }
        if (colors.tertiary) {
            const p = new CorePalette(colors.tertiary, content);
            palette.a3 = p.a1;
        }
        if (colors.error) {
            const p = new CorePalette(colors.error, content);
            palette.error = p.a1;
        }
        if (colors.neutral) {
            const p = new CorePalette(colors.neutral, content);
            palette.n1 = p.n1;
        }
        if (colors.neutralVariant) {
            const p = new CorePalette(colors.neutralVariant, content);
            palette.n2 = p.n2;
        }
        return palette;
    }
    constructor(argb, isContent) {
        const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
        const hue = hct.hue;
        const chroma = hct.chroma;
        if (isContent) {
            this.a1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, chroma);
            this.a2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, chroma / 3);
            this.a3 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
            this.n1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
            this.n2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
        }
        else {
            this.a1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
            this.a2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 16);
            this.a3 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue + 60, 24);
            this.n1 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 4);
            this.n2 = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(hue, 8);
        }
        this.error = _tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(25, 84);
    }
}
//# sourceMappingURL=core_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/palettes/tonal_palette.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TonalPalette: () => (/* binding */ TonalPalette)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */
class TonalPalette {
    /**
     * @param argb ARGB representation of a color
     * @return Tones matching that color's hue and chroma.
     */
    static fromInt(argb) {
        const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
        return TonalPalette.fromHct(hct);
    }
    /**
     * @param hct Hct
     * @return Tones matching that color's hue and chroma.
     */
    static fromHct(hct) {
        return new TonalPalette(hct.hue, hct.chroma, hct);
    }
    /**
     * @param hue HCT hue
     * @param chroma HCT chroma
     * @return Tones matching hue and chroma.
     */
    static fromHueAndChroma(hue, chroma) {
        return new TonalPalette(hue, chroma, TonalPalette.createKeyColor(hue, chroma));
    }
    constructor(hue, chroma, keyColor) {
        this.hue = hue;
        this.chroma = chroma;
        this.keyColor = keyColor;
        this.cache = new Map();
    }
    static createKeyColor(hue, chroma) {
        const startTone = 50.0;
        let smallestDeltaHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone);
        let smallestDelta = Math.abs(smallestDeltaHct.chroma - chroma);
        // Starting from T50, check T+/-delta to see if they match the requested
        // chroma.
        //
        // Starts from T50 because T50 has the most chroma available, on
        // average. Thus it is most likely to have a direct answer and minimize
        // iteration.
        for (let delta = 1.0; delta < 50.0; delta += 1.0) {
            // Termination condition rounding instead of minimizing delta to avoid
            // case where requested chroma is 16.51, and the closest chroma is 16.49.
            // Error is minimized, but when rounded and displayed, requested chroma
            // is 17, key color's chroma is 16.
            if (Math.round(chroma) === Math.round(smallestDeltaHct.chroma)) {
                return smallestDeltaHct;
            }
            const hctAdd = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone + delta);
            const hctAddDelta = Math.abs(hctAdd.chroma - chroma);
            if (hctAddDelta < smallestDelta) {
                smallestDelta = hctAddDelta;
                smallestDeltaHct = hctAdd;
            }
            const hctSubtract = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, chroma, startTone - delta);
            const hctSubtractDelta = Math.abs(hctSubtract.chroma - chroma);
            if (hctSubtractDelta < smallestDelta) {
                smallestDelta = hctSubtractDelta;
                smallestDeltaHct = hctSubtract;
            }
        }
        return smallestDeltaHct;
    }
    /**
     * @param tone HCT tone, measured from 0 to 100.
     * @return ARGB representation of a color with that tone.
     */
    tone(tone) {
        let argb = this.cache.get(tone);
        if (argb === undefined) {
            argb = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(this.hue, this.chroma, tone).toInt();
            this.cache.set(tone, argb);
        }
        return argb;
    }
    /**
     * @param tone HCT tone.
     * @return HCT representation of a color with that tone.
     */
    getHct(tone) {
        return _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(this.tone(tone));
    }
}
//# sourceMappingURL=tonal_palette.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabPointProvider: () => (/* binding */ LabPointProvider)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides conversions needed for K-Means quantization. Converting input to
 * points, and converting the final state of the K-Means algorithm to colors.
 */
class LabPointProvider {
    /**
     * Convert a color represented in ARGB to a 3-element array of L*a*b*
     * coordinates of the color.
     */
    fromInt(argb) {
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.labFromArgb(argb);
    }
    /**
     * Convert a 3-element array to a color represented in ARGB.
     */
    toInt(point) {
        return _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.argbFromLab(point[0], point[1], point[2]);
    }
    /**
     * Standard CIE 1976 delta E formula also takes the square root, unneeded
     * here. This method is used by quantization algorithms to compare distance,
     * and the relative ordering is the same, with or without a square root.
     *
     * This relatively minor optimization is helpful because this method is
     * called at least once for each pixel in an image.
     */
    distance(from, to) {
        const dL = from[0] - to[0];
        const dA = from[1] - to[1];
        const dB = from[2] - to[2];
        return dL * dL + dA * dA + dB * dB;
    }
}
//# sourceMappingURL=lab_point_provider.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerCelebi: () => (/* binding */ QuantizerCelebi)
/* harmony export */ });
/* harmony import */ var _quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantizer_wsmeans.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js");
/* harmony import */ var _quantizer_wu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_wu.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * An image quantizer that improves on the quality of a standard K-Means
 * algorithm by setting the K-Means initial state to the output of a Wu
 * quantizer, instead of random centroids. Improves on speed by several
 * optimizations, as implemented in Wsmeans, or Weighted Square Means, K-Means
 * with those optimizations.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerCelebi {
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Map with keys of colors in ARGB format, and values of number of
     *     pixels in the original image that correspond to the color in the
     *     quantized image.
     */
    static quantize(pixels, maxColors) {
        const wu = new _quantizer_wu_js__WEBPACK_IMPORTED_MODULE_1__.QuantizerWu();
        const wuResult = wu.quantize(pixels, maxColors);
        return _quantizer_wsmeans_js__WEBPACK_IMPORTED_MODULE_0__.QuantizerWsmeans.quantize(pixels, wuResult, maxColors);
    }
}
//# sourceMappingURL=quantizer_celebi.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_map.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerMap: () => (/* binding */ QuantizerMap)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Quantizes an image into a map, with keys of ARGB colors, and values of the
 * number of times that color appears in the image.
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerMap {
    /**
     * @param pixels Colors in ARGB format.
     * @return A Map with keys of ARGB colors, and values of the number of times
     *     the color appears in the image.
     */
    static quantize(pixels) {
        const countByColor = new Map();
        for (let i = 0; i < pixels.length; i++) {
            const pixel = pixels[i];
            const alpha = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.alphaFromArgb(pixel);
            if (alpha < 255) {
                continue;
            }
            countByColor.set(pixel, (countByColor.get(pixel) ?? 0) + 1);
        }
        return countByColor;
    }
}
//# sourceMappingURL=quantizer_map.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerWsmeans: () => (/* binding */ QuantizerWsmeans)
/* harmony export */ });
/* harmony import */ var _lab_point_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lab_point_provider.js */ "./node_modules/@material/material-color-utilities/quantize/lab_point_provider.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MAX_ITERATIONS = 10;
const MIN_MOVEMENT_DISTANCE = 3.0;
/**
 * An image quantizer that improves on the speed of a standard K-Means algorithm
 * by implementing several optimizations, including deduping identical pixels
 * and a triangle inequality rule that reduces the number of comparisons needed
 * to identify which cluster a point should be moved to.
 *
 * Wsmeans stands for Weighted Square Means.
 *
 * This algorithm was designed by M. Emre Celebi, and was found in their 2011
 * paper, Improving the Performance of K-Means for Color Quantization.
 * https://arxiv.org/abs/1101.0395
 */
// material_color_utilities is designed to have a consistent API across
// platforms and modular components that can be moved around easily. Using a
// class as a namespace facilitates this.
//
// tslint:disable-next-line:class-as-namespace
class QuantizerWsmeans {
    /**
     * @param inputPixels Colors in ARGB format.
     * @param startingClusters Defines the initial state of the quantizer. Passing
     *     an empty array is fine, the implementation will create its own initial
     *     state that leads to reproducible results for the same inputs.
     *     Passing an array that is the result of Wu quantization leads to higher
     *     quality results.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    static quantize(inputPixels, startingClusters, maxColors) {
        const pixelToCount = new Map();
        const points = new Array();
        const pixels = new Array();
        const pointProvider = new _lab_point_provider_js__WEBPACK_IMPORTED_MODULE_0__.LabPointProvider();
        let pointCount = 0;
        for (let i = 0; i < inputPixels.length; i++) {
            const inputPixel = inputPixels[i];
            const pixelCount = pixelToCount.get(inputPixel);
            if (pixelCount === undefined) {
                pointCount++;
                points.push(pointProvider.fromInt(inputPixel));
                pixels.push(inputPixel);
                pixelToCount.set(inputPixel, 1);
            }
            else {
                pixelToCount.set(inputPixel, pixelCount + 1);
            }
        }
        const counts = new Array();
        for (let i = 0; i < pointCount; i++) {
            const pixel = pixels[i];
            const count = pixelToCount.get(pixel);
            if (count !== undefined) {
                counts[i] = count;
            }
        }
        let clusterCount = Math.min(maxColors, pointCount);
        if (startingClusters.length > 0) {
            clusterCount = Math.min(clusterCount, startingClusters.length);
        }
        const clusters = new Array();
        for (let i = 0; i < startingClusters.length; i++) {
            clusters.push(pointProvider.fromInt(startingClusters[i]));
        }
        const additionalClustersNeeded = clusterCount - clusters.length;
        if (startingClusters.length === 0 && additionalClustersNeeded > 0) {
            for (let i = 0; i < additionalClustersNeeded; i++) {
                const l = Math.random() * 100.0;
                const a = Math.random() * (100.0 - (-100.0) + 1) + -100;
                const b = Math.random() * (100.0 - (-100.0) + 1) + -100;
                clusters.push(new Array(l, a, b));
            }
        }
        const clusterIndices = new Array();
        for (let i = 0; i < pointCount; i++) {
            clusterIndices.push(Math.floor(Math.random() * clusterCount));
        }
        const indexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            indexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                indexMatrix[i].push(0);
            }
        }
        const distanceToIndexMatrix = new Array();
        for (let i = 0; i < clusterCount; i++) {
            distanceToIndexMatrix.push(new Array());
            for (let j = 0; j < clusterCount; j++) {
                distanceToIndexMatrix[i].push(new DistanceAndIndex());
            }
        }
        const pixelCountSums = new Array();
        for (let i = 0; i < clusterCount; i++) {
            pixelCountSums.push(0);
        }
        for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
            for (let i = 0; i < clusterCount; i++) {
                for (let j = i + 1; j < clusterCount; j++) {
                    const distance = pointProvider.distance(clusters[i], clusters[j]);
                    distanceToIndexMatrix[j][i].distance = distance;
                    distanceToIndexMatrix[j][i].index = i;
                    distanceToIndexMatrix[i][j].distance = distance;
                    distanceToIndexMatrix[i][j].index = j;
                }
                distanceToIndexMatrix[i].sort();
                for (let j = 0; j < clusterCount; j++) {
                    indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
                }
            }
            let pointsMoved = 0;
            for (let i = 0; i < pointCount; i++) {
                const point = points[i];
                const previousClusterIndex = clusterIndices[i];
                const previousCluster = clusters[previousClusterIndex];
                const previousDistance = pointProvider.distance(point, previousCluster);
                let minimumDistance = previousDistance;
                let newClusterIndex = -1;
                for (let j = 0; j < clusterCount; j++) {
                    if (distanceToIndexMatrix[previousClusterIndex][j].distance >=
                        4 * previousDistance) {
                        continue;
                    }
                    const distance = pointProvider.distance(point, clusters[j]);
                    if (distance < minimumDistance) {
                        minimumDistance = distance;
                        newClusterIndex = j;
                    }
                }
                if (newClusterIndex !== -1) {
                    const distanceChange = Math.abs((Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)));
                    if (distanceChange > MIN_MOVEMENT_DISTANCE) {
                        pointsMoved++;
                        clusterIndices[i] = newClusterIndex;
                    }
                }
            }
            if (pointsMoved === 0 && iteration !== 0) {
                break;
            }
            const componentASums = new Array(clusterCount).fill(0);
            const componentBSums = new Array(clusterCount).fill(0);
            const componentCSums = new Array(clusterCount).fill(0);
            for (let i = 0; i < clusterCount; i++) {
                pixelCountSums[i] = 0;
            }
            for (let i = 0; i < pointCount; i++) {
                const clusterIndex = clusterIndices[i];
                const point = points[i];
                const count = counts[i];
                pixelCountSums[clusterIndex] += count;
                componentASums[clusterIndex] += (point[0] * count);
                componentBSums[clusterIndex] += (point[1] * count);
                componentCSums[clusterIndex] += (point[2] * count);
            }
            for (let i = 0; i < clusterCount; i++) {
                const count = pixelCountSums[i];
                if (count === 0) {
                    clusters[i] = [0.0, 0.0, 0.0];
                    continue;
                }
                const a = componentASums[i] / count;
                const b = componentBSums[i] / count;
                const c = componentCSums[i] / count;
                clusters[i] = [a, b, c];
            }
        }
        const argbToPopulation = new Map();
        for (let i = 0; i < clusterCount; i++) {
            const count = pixelCountSums[i];
            if (count === 0) {
                continue;
            }
            const possibleNewCluster = pointProvider.toInt(clusters[i]);
            if (argbToPopulation.has(possibleNewCluster)) {
                continue;
            }
            argbToPopulation.set(possibleNewCluster, count);
        }
        return argbToPopulation;
    }
}
/**
 *  A wrapper for maintaining a table of distances between K-Means clusters.
 */
class DistanceAndIndex {
    constructor() {
        this.distance = -1;
        this.index = -1;
    }
}
//# sourceMappingURL=quantizer_wsmeans.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/quantize/quantizer_wu.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantizerWu: () => (/* binding */ QuantizerWu)
/* harmony export */ });
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _quantizer_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantizer_map.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_map.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const INDEX_BITS = 5;
const SIDE_LENGTH = 33; // ((1 << INDEX_INDEX_BITS) + 1)
const TOTAL_SIZE = 35937; // SIDE_LENGTH * SIDE_LENGTH * SIDE_LENGTH
const directions = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
};
/**
 * An image quantizer that divides the image's pixels into clusters by
 * recursively cutting an RGB cube, based on the weight of pixels in each area
 * of the cube.
 *
 * The algorithm was described by Xiaolin Wu in Graphic Gems II, published in
 * 1991.
 */
class QuantizerWu {
    constructor(weights = [], momentsR = [], momentsG = [], momentsB = [], moments = [], cubes = []) {
        this.weights = weights;
        this.momentsR = momentsR;
        this.momentsG = momentsG;
        this.momentsB = momentsB;
        this.moments = moments;
        this.cubes = cubes;
    }
    /**
     * @param pixels Colors in ARGB format.
     * @param maxColors The number of colors to divide the image into. A lower
     *     number of colors may be returned.
     * @return Colors in ARGB format.
     */
    quantize(pixels, maxColors) {
        this.constructHistogram(pixels);
        this.computeMoments();
        const createBoxesResult = this.createBoxes(maxColors);
        const results = this.createResult(createBoxesResult.resultCount);
        return results;
    }
    constructHistogram(pixels) {
        this.weights = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsR = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsG = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.momentsB = Array.from({ length: TOTAL_SIZE }).fill(0);
        this.moments = Array.from({ length: TOTAL_SIZE }).fill(0);
        const countByColor = _quantizer_map_js__WEBPACK_IMPORTED_MODULE_1__.QuantizerMap.quantize(pixels);
        for (const [pixel, count] of countByColor.entries()) {
            const red = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.redFromArgb(pixel);
            const green = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.greenFromArgb(pixel);
            const blue = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_0__.blueFromArgb(pixel);
            const bitsToRemove = 8 - INDEX_BITS;
            const iR = (red >> bitsToRemove) + 1;
            const iG = (green >> bitsToRemove) + 1;
            const iB = (blue >> bitsToRemove) + 1;
            const index = this.getIndex(iR, iG, iB);
            this.weights[index] = (this.weights[index] ?? 0) + count;
            this.momentsR[index] += count * red;
            this.momentsG[index] += count * green;
            this.momentsB[index] += count * blue;
            this.moments[index] += count * (red * red + green * green + blue * blue);
        }
    }
    computeMoments() {
        for (let r = 1; r < SIDE_LENGTH; r++) {
            const area = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaR = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaG = Array.from({ length: SIDE_LENGTH }).fill(0);
            const areaB = Array.from({ length: SIDE_LENGTH }).fill(0);
            const area2 = Array.from({ length: SIDE_LENGTH }).fill(0.0);
            for (let g = 1; g < SIDE_LENGTH; g++) {
                let line = 0;
                let lineR = 0;
                let lineG = 0;
                let lineB = 0;
                let line2 = 0.0;
                for (let b = 1; b < SIDE_LENGTH; b++) {
                    const index = this.getIndex(r, g, b);
                    line += this.weights[index];
                    lineR += this.momentsR[index];
                    lineG += this.momentsG[index];
                    lineB += this.momentsB[index];
                    line2 += this.moments[index];
                    area[b] += line;
                    areaR[b] += lineR;
                    areaG[b] += lineG;
                    areaB[b] += lineB;
                    area2[b] += line2;
                    const previousIndex = this.getIndex(r - 1, g, b);
                    this.weights[index] = this.weights[previousIndex] + area[b];
                    this.momentsR[index] = this.momentsR[previousIndex] + areaR[b];
                    this.momentsG[index] = this.momentsG[previousIndex] + areaG[b];
                    this.momentsB[index] = this.momentsB[previousIndex] + areaB[b];
                    this.moments[index] = this.moments[previousIndex] + area2[b];
                }
            }
        }
    }
    createBoxes(maxColors) {
        this.cubes =
            Array.from({ length: maxColors }).fill(0).map(() => new Box());
        const volumeVariance = Array.from({ length: maxColors }).fill(0.0);
        this.cubes[0].r0 = 0;
        this.cubes[0].g0 = 0;
        this.cubes[0].b0 = 0;
        this.cubes[0].r1 = SIDE_LENGTH - 1;
        this.cubes[0].g1 = SIDE_LENGTH - 1;
        this.cubes[0].b1 = SIDE_LENGTH - 1;
        let generatedColorCount = maxColors;
        let next = 0;
        for (let i = 1; i < maxColors; i++) {
            if (this.cut(this.cubes[next], this.cubes[i])) {
                volumeVariance[next] =
                    this.cubes[next].vol > 1 ? this.variance(this.cubes[next]) : 0.0;
                volumeVariance[i] =
                    this.cubes[i].vol > 1 ? this.variance(this.cubes[i]) : 0.0;
            }
            else {
                volumeVariance[next] = 0.0;
                i--;
            }
            next = 0;
            let temp = volumeVariance[0];
            for (let j = 1; j <= i; j++) {
                if (volumeVariance[j] > temp) {
                    temp = volumeVariance[j];
                    next = j;
                }
            }
            if (temp <= 0.0) {
                generatedColorCount = i + 1;
                break;
            }
        }
        return new CreateBoxesResult(maxColors, generatedColorCount);
    }
    createResult(colorCount) {
        const colors = [];
        for (let i = 0; i < colorCount; ++i) {
            const cube = this.cubes[i];
            const weight = this.volume(cube, this.weights);
            if (weight > 0) {
                const r = Math.round(this.volume(cube, this.momentsR) / weight);
                const g = Math.round(this.volume(cube, this.momentsG) / weight);
                const b = Math.round(this.volume(cube, this.momentsB) / weight);
                const color = (255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) |
                    (b & 0x0ff);
                colors.push(color);
            }
        }
        return colors;
    }
    variance(cube) {
        const dr = this.volume(cube, this.momentsR);
        const dg = this.volume(cube, this.momentsG);
        const db = this.volume(cube, this.momentsB);
        const xx = this.moments[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            this.moments[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            this.moments[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            this.moments[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            this.moments[this.getIndex(cube.r0, cube.g0, cube.b0)];
        const hypotenuse = dr * dr + dg * dg + db * db;
        const volume = this.volume(cube, this.weights);
        return xx - hypotenuse / volume;
    }
    cut(one, two) {
        const wholeR = this.volume(one, this.momentsR);
        const wholeG = this.volume(one, this.momentsG);
        const wholeB = this.volume(one, this.momentsB);
        const wholeW = this.volume(one, this.weights);
        const maxRResult = this.maximize(one, directions.RED, one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW);
        const maxGResult = this.maximize(one, directions.GREEN, one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW);
        const maxBResult = this.maximize(one, directions.BLUE, one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
        let direction;
        const maxR = maxRResult.maximum;
        const maxG = maxGResult.maximum;
        const maxB = maxBResult.maximum;
        if (maxR >= maxG && maxR >= maxB) {
            if (maxRResult.cutLocation < 0) {
                return false;
            }
            direction = directions.RED;
        }
        else if (maxG >= maxR && maxG >= maxB) {
            direction = directions.GREEN;
        }
        else {
            direction = directions.BLUE;
        }
        two.r1 = one.r1;
        two.g1 = one.g1;
        two.b1 = one.b1;
        switch (direction) {
            case directions.RED:
                one.r1 = maxRResult.cutLocation;
                two.r0 = one.r1;
                two.g0 = one.g0;
                two.b0 = one.b0;
                break;
            case directions.GREEN:
                one.g1 = maxGResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g1;
                two.b0 = one.b0;
                break;
            case directions.BLUE:
                one.b1 = maxBResult.cutLocation;
                two.r0 = one.r0;
                two.g0 = one.g0;
                two.b0 = one.b1;
                break;
            default:
                throw new Error('unexpected direction ' + direction);
        }
        one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
        two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
        return true;
    }
    maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
        const bottomR = this.bottom(cube, direction, this.momentsR);
        const bottomG = this.bottom(cube, direction, this.momentsG);
        const bottomB = this.bottom(cube, direction, this.momentsB);
        const bottomW = this.bottom(cube, direction, this.weights);
        let max = 0.0;
        let cut = -1;
        let halfR = 0;
        let halfG = 0;
        let halfB = 0;
        let halfW = 0;
        for (let i = first; i < last; i++) {
            halfR = bottomR + this.top(cube, direction, i, this.momentsR);
            halfG = bottomG + this.top(cube, direction, i, this.momentsG);
            halfB = bottomB + this.top(cube, direction, i, this.momentsB);
            halfW = bottomW + this.top(cube, direction, i, this.weights);
            if (halfW === 0) {
                continue;
            }
            let tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            let tempDenominator = halfW * 1.0;
            let temp = tempNumerator / tempDenominator;
            halfR = wholeR - halfR;
            halfG = wholeG - halfG;
            halfB = wholeB - halfB;
            halfW = wholeW - halfW;
            if (halfW === 0) {
                continue;
            }
            tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1.0;
            tempDenominator = halfW * 1.0;
            temp += tempNumerator / tempDenominator;
            if (temp > max) {
                max = temp;
                cut = i;
            }
        }
        return new MaximizeResult(cut, max);
    }
    volume(cube, moment) {
        return (moment[this.getIndex(cube.r1, cube.g1, cube.b1)] -
            moment[this.getIndex(cube.r1, cube.g1, cube.b0)] -
            moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
            moment[this.getIndex(cube.r1, cube.g0, cube.b0)] -
            moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
            moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
            moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
            moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
    }
    bottom(cube, direction, moment) {
        switch (direction) {
            case directions.RED:
                return (-moment[this.getIndex(cube.r0, cube.g1, cube.b1)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (-moment[this.getIndex(cube.r1, cube.g0, cube.b1)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g0, cube.b1)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            case directions.BLUE:
                return (-moment[this.getIndex(cube.r1, cube.g1, cube.b0)] +
                    moment[this.getIndex(cube.r1, cube.g0, cube.b0)] +
                    moment[this.getIndex(cube.r0, cube.g1, cube.b0)] -
                    moment[this.getIndex(cube.r0, cube.g0, cube.b0)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    top(cube, direction, position, moment) {
        switch (direction) {
            case directions.RED:
                return (moment[this.getIndex(position, cube.g1, cube.b1)] -
                    moment[this.getIndex(position, cube.g1, cube.b0)] -
                    moment[this.getIndex(position, cube.g0, cube.b1)] +
                    moment[this.getIndex(position, cube.g0, cube.b0)]);
            case directions.GREEN:
                return (moment[this.getIndex(cube.r1, position, cube.b1)] -
                    moment[this.getIndex(cube.r1, position, cube.b0)] -
                    moment[this.getIndex(cube.r0, position, cube.b1)] +
                    moment[this.getIndex(cube.r0, position, cube.b0)]);
            case directions.BLUE:
                return (moment[this.getIndex(cube.r1, cube.g1, position)] -
                    moment[this.getIndex(cube.r1, cube.g0, position)] -
                    moment[this.getIndex(cube.r0, cube.g1, position)] +
                    moment[this.getIndex(cube.r0, cube.g0, position)]);
            default:
                throw new Error('unexpected direction $direction');
        }
    }
    getIndex(r, g, b) {
        return (r << (INDEX_BITS * 2)) + (r << (INDEX_BITS + 1)) + r +
            (g << INDEX_BITS) + g + b;
    }
}
/**
 * Keeps track of the state of each box created as the Wu  quantization
 * algorithm progresses through dividing the image's pixels as plotted in RGB.
 */
class Box {
    constructor(r0 = 0, r1 = 0, g0 = 0, g1 = 0, b0 = 0, b1 = 0, vol = 0) {
        this.r0 = r0;
        this.r1 = r1;
        this.g0 = g0;
        this.g1 = g1;
        this.b0 = b0;
        this.b1 = b1;
        this.vol = vol;
    }
}
/**
 * Represents final result of Wu algorithm.
 */
class CreateBoxesResult {
    /**
     * @param requestedCount how many colors the caller asked to be returned from
     *     quantization.
     * @param resultCount the actual number of colors achieved from quantization.
     *     May be lower than the requested count.
     */
    constructor(requestedCount, resultCount) {
        this.requestedCount = requestedCount;
        this.resultCount = resultCount;
    }
}
/**
 * Represents the result of calculating where to cut an existing box in such
 * a way to maximize variance between the two new boxes created by a cut.
 */
class MaximizeResult {
    constructor(cutLocation, maximum) {
        this.cutLocation = cutLocation;
        this.maximum = maximum;
    }
}
//# sourceMappingURL=quantizer_wu.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicScheme: () => (/* binding */ DynamicScheme)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Constructed by a set of values representing the current UI state (such as
 * whether or not its dark theme, what the theme style is, etc.), and
 * provides a set of TonalPalettes that can create colors that fit in
 * with the theme style. Used by DynamicColor to resolve into a color.
 */
class DynamicScheme {
    constructor(args) {
        this.sourceColorArgb = args.sourceColorArgb;
        this.variant = args.variant;
        this.contrastLevel = args.contrastLevel;
        this.isDark = args.isDark;
        this.sourceColorHct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(args.sourceColorArgb);
        this.primaryPalette = args.primaryPalette;
        this.secondaryPalette = args.secondaryPalette;
        this.tertiaryPalette = args.tertiaryPalette;
        this.neutralPalette = args.neutralPalette;
        this.neutralVariantPalette = args.neutralVariantPalette;
        this.errorPalette = _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(25.0, 84.0);
    }
    /**
     * Support design spec'ing Dynamic Color by schemes that specify hue
     * rotations that should be applied at certain breakpoints.
     * @param sourceColor the source color of the theme, in HCT.
     * @param hues The "breakpoints", i.e. the hues at which a rotation should
     * be apply.
     * @param rotations The rotation that should be applied when source color's
     * hue is >= the same index in hues array, and <= the hue at the next index
     * in hues array.
     */
    static getRotatedHue(sourceColor, hues, rotations) {
        const sourceHue = sourceColor.hue;
        if (hues.length !== rotations.length) {
            throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
        }
        if (rotations.length === 1) {
            return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
        }
        const size = hues.length;
        for (let i = 0; i <= size - 2; i++) {
            const thisHue = hues[i];
            const nextHue = hues[i + 1];
            if (thisHue < sourceHue && sourceHue < nextHue) {
                return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(sourceHue + rotations[i]);
            }
        }
        // If this statement executes, something is wrong, there should have been a
        // rotation found using the arrays.
        return sourceHue;
    }
}
//# sourceMappingURL=dynamic_scheme.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheme: () => (/* binding */ Scheme)
/* harmony export */ });
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
class Scheme {
    get primary() {
        return this.props.primary;
    }
    get onPrimary() {
        return this.props.onPrimary;
    }
    get primaryContainer() {
        return this.props.primaryContainer;
    }
    get onPrimaryContainer() {
        return this.props.onPrimaryContainer;
    }
    get secondary() {
        return this.props.secondary;
    }
    get onSecondary() {
        return this.props.onSecondary;
    }
    get secondaryContainer() {
        return this.props.secondaryContainer;
    }
    get onSecondaryContainer() {
        return this.props.onSecondaryContainer;
    }
    get tertiary() {
        return this.props.tertiary;
    }
    get onTertiary() {
        return this.props.onTertiary;
    }
    get tertiaryContainer() {
        return this.props.tertiaryContainer;
    }
    get onTertiaryContainer() {
        return this.props.onTertiaryContainer;
    }
    get error() {
        return this.props.error;
    }
    get onError() {
        return this.props.onError;
    }
    get errorContainer() {
        return this.props.errorContainer;
    }
    get onErrorContainer() {
        return this.props.onErrorContainer;
    }
    get background() {
        return this.props.background;
    }
    get onBackground() {
        return this.props.onBackground;
    }
    get surface() {
        return this.props.surface;
    }
    get onSurface() {
        return this.props.onSurface;
    }
    get surfaceVariant() {
        return this.props.surfaceVariant;
    }
    get onSurfaceVariant() {
        return this.props.onSurfaceVariant;
    }
    get outline() {
        return this.props.outline;
    }
    get outlineVariant() {
        return this.props.outlineVariant;
    }
    get shadow() {
        return this.props.shadow;
    }
    get scrim() {
        return this.props.scrim;
    }
    get inverseSurface() {
        return this.props.inverseSurface;
    }
    get inverseOnSurface() {
        return this.props.inverseOnSurface;
    }
    get inversePrimary() {
        return this.props.inversePrimary;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material content color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        return Scheme.lightFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb));
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material content color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        return Scheme.darkFromCorePalette(_palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb));
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(40),
            onPrimary: core.a1.tone(100),
            primaryContainer: core.a1.tone(90),
            onPrimaryContainer: core.a1.tone(10),
            secondary: core.a2.tone(40),
            onSecondary: core.a2.tone(100),
            secondaryContainer: core.a2.tone(90),
            onSecondaryContainer: core.a2.tone(10),
            tertiary: core.a3.tone(40),
            onTertiary: core.a3.tone(100),
            tertiaryContainer: core.a3.tone(90),
            onTertiaryContainer: core.a3.tone(10),
            error: core.error.tone(40),
            onError: core.error.tone(100),
            errorContainer: core.error.tone(90),
            onErrorContainer: core.error.tone(10),
            background: core.n1.tone(99),
            onBackground: core.n1.tone(10),
            surface: core.n1.tone(99),
            onSurface: core.n1.tone(10),
            surfaceVariant: core.n2.tone(90),
            onSurfaceVariant: core.n2.tone(30),
            outline: core.n2.tone(50),
            outlineVariant: core.n2.tone(80),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(20),
            inverseOnSurface: core.n1.tone(95),
            inversePrimary: core.a1.tone(80)
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new Scheme({
            primary: core.a1.tone(80),
            onPrimary: core.a1.tone(20),
            primaryContainer: core.a1.tone(30),
            onPrimaryContainer: core.a1.tone(90),
            secondary: core.a2.tone(80),
            onSecondary: core.a2.tone(20),
            secondaryContainer: core.a2.tone(30),
            onSecondaryContainer: core.a2.tone(90),
            tertiary: core.a3.tone(80),
            onTertiary: core.a3.tone(20),
            tertiaryContainer: core.a3.tone(30),
            onTertiaryContainer: core.a3.tone(90),
            error: core.error.tone(80),
            onError: core.error.tone(20),
            errorContainer: core.error.tone(30),
            onErrorContainer: core.error.tone(80),
            background: core.n1.tone(10),
            onBackground: core.n1.tone(90),
            surface: core.n1.tone(10),
            onSurface: core.n1.tone(90),
            surfaceVariant: core.n2.tone(30),
            onSurfaceVariant: core.n2.tone(80),
            outline: core.n2.tone(60),
            outlineVariant: core.n2.tone(30),
            shadow: core.n1.tone(0),
            scrim: core.n1.tone(0),
            inverseSurface: core.n1.tone(90),
            inverseOnSurface: core.n1.tone(20),
            inversePrimary: core.a1.tone(40)
        });
    }
    constructor(props) {
        this.props = props;
    }
    toJSON() {
        return {
            ...this.props
        };
    }
}
//# sourceMappingURL=scheme.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_android.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_android.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeAndroid: () => (/* binding */ SchemeAndroid)
/* harmony export */ });
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents an Android 12 color scheme, a mapping of color roles to colors.
 */
class SchemeAndroid {
    get colorAccentPrimary() {
        return this.props.colorAccentPrimary;
    }
    get colorAccentPrimaryVariant() {
        return this.props.colorAccentPrimaryVariant;
    }
    get colorAccentSecondary() {
        return this.props.colorAccentSecondary;
    }
    get colorAccentSecondaryVariant() {
        return this.props.colorAccentSecondaryVariant;
    }
    get colorAccentTertiary() {
        return this.props.colorAccentTertiary;
    }
    get colorAccentTertiaryVariant() {
        return this.props.colorAccentTertiaryVariant;
    }
    get textColorPrimary() {
        return this.props.textColorPrimary;
    }
    get textColorSecondary() {
        return this.props.textColorSecondary;
    }
    get textColorTertiary() {
        return this.props.textColorTertiary;
    }
    get textColorPrimaryInverse() {
        return this.props.textColorPrimaryInverse;
    }
    get textColorSecondaryInverse() {
        return this.props.textColorSecondaryInverse;
    }
    get textColorTertiaryInverse() {
        return this.props.textColorTertiaryInverse;
    }
    get colorBackground() {
        return this.props.colorBackground;
    }
    get colorBackgroundFloating() {
        return this.props.colorBackgroundFloating;
    }
    get colorSurface() {
        return this.props.colorSurface;
    }
    get colorSurfaceVariant() {
        return this.props.colorSurfaceVariant;
    }
    get colorSurfaceHighlight() {
        return this.props.colorSurfaceHighlight;
    }
    get surfaceHeader() {
        return this.props.surfaceHeader;
    }
    get underSurface() {
        return this.props.underSurface;
    }
    get offState() {
        return this.props.offState;
    }
    get accentSurface() {
        return this.props.accentSurface;
    }
    get textPrimaryOnAccent() {
        return this.props.textPrimaryOnAccent;
    }
    get textSecondaryOnAccent() {
        return this.props.textSecondaryOnAccent;
    }
    get volumeBackground() {
        return this.props.volumeBackground;
    }
    get scrim() {
        return this.props.scrim;
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.of(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Light Android color scheme, based on the color's hue.
     */
    static lightContent(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb);
        return SchemeAndroid.lightFromCorePalette(core);
    }
    /**
     * @param argb ARGB representation of a color.
     * @return Dark Android color scheme, based on the color's hue.
     */
    static darkContent(argb) {
        const core = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_0__.CorePalette.contentOf(argb);
        return SchemeAndroid.darkFromCorePalette(core);
    }
    /**
     * Light scheme from core palette
     */
    static lightFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(40),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(40),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(40),
            textColorPrimary: core.n1.tone(10),
            textColorSecondary: core.n2.tone(30),
            textColorTertiary: core.n2.tone(50),
            textColorPrimaryInverse: core.n1.tone(95),
            textColorSecondaryInverse: core.n1.tone(80),
            textColorTertiaryInverse: core.n1.tone(60),
            colorBackground: core.n1.tone(95),
            colorBackgroundFloating: core.n1.tone(98),
            colorSurface: core.n1.tone(98),
            colorSurfaceVariant: core.n1.tone(90),
            colorSurfaceHighlight: core.n1.tone(100),
            surfaceHeader: core.n1.tone(90),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    /**
     * Dark scheme from core palette
     */
    static darkFromCorePalette(core) {
        return new SchemeAndroid({
            colorAccentPrimary: core.a1.tone(90),
            colorAccentPrimaryVariant: core.a1.tone(70),
            colorAccentSecondary: core.a2.tone(90),
            colorAccentSecondaryVariant: core.a2.tone(70),
            colorAccentTertiary: core.a3.tone(90),
            colorAccentTertiaryVariant: core.a3.tone(70),
            textColorPrimary: core.n1.tone(95),
            textColorSecondary: core.n2.tone(80),
            textColorTertiary: core.n2.tone(60),
            textColorPrimaryInverse: core.n1.tone(10),
            textColorSecondaryInverse: core.n1.tone(30),
            textColorTertiaryInverse: core.n1.tone(50),
            colorBackground: core.n1.tone(10),
            colorBackgroundFloating: core.n1.tone(10),
            colorSurface: core.n1.tone(20),
            colorSurfaceVariant: core.n1.tone(30),
            colorSurfaceHighlight: core.n1.tone(35),
            surfaceHeader: core.n1.tone(30),
            underSurface: core.n1.tone(0),
            offState: core.n1.tone(20),
            accentSurface: core.a2.tone(95),
            textPrimaryOnAccent: core.n1.tone(10),
            textSecondaryOnAccent: core.n2.tone(30),
            volumeBackground: core.n1.tone(25),
            scrim: core.n1.tone(80),
        });
    }
    constructor(props) {
        this.props = props;
    }
    toJSON() {
        return { ...this.props };
    }
}
//# sourceMappingURL=scheme_android.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_content.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_content.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeContent: () => (/* binding */ SchemeContent)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * A scheme that places the source color in `Scheme.primaryContainer`.
 *
 * Primary Container is the source color, adjusted for color relativity.
 * It maintains constant appearance in light mode and dark mode.
 * This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.
 * Tertiary Container is the complement to the source color, using
 * `TemperatureCache`. It also maintains constant appearance.
 */
class SchemeContent extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_4__.Variant.CONTENT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32.0, sourceColorHct.chroma * 0.5)),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromInt(_dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer
                .fixIfDisliked(new _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__.TemperatureCache(sourceColorHct).analogous(3, 6)[2])
                .toInt()),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0 + 4.0),
        });
    }
}
//# sourceMappingURL=scheme_content.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_expressive.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeExpressive: () => (/* binding */ SchemeExpressive)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A Dynamic Color theme that is intentionally detached from the source color.
 */
class SchemeExpressive extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.EXPRESSIVE,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(sourceColorHct.hue + 240.0), 40.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.secondaryRotations), 24.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.tertiaryRotations), 32.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12.0),
        });
    }
}
/**
 * Hues (in degrees) used at breakpoints such that designers can specify a
 * hue rotation that occurs at a given break point.
 */
SchemeExpressive.hues = [
    0.0,
    21.0,
    51.0,
    121.0,
    151.0,
    191.0,
    271.0,
    321.0,
    360.0,
];
/**
 * Hue rotations (in degrees) of the Secondary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeExpressive.secondaryRotations = [
    45.0,
    95.0,
    45.0,
    20.0,
    45.0,
    90.0,
    45.0,
    45.0,
    45.0,
];
/**
 * Hue rotations (in degrees) of the Tertiary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeExpressive.tertiaryRotations = [
    120.0,
    120.0,
    20.0,
    45.0,
    20.0,
    15.0,
    20.0,
    120.0,
    120.0,
];
//# sourceMappingURL=scheme_expressive.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeFidelity: () => (/* binding */ SchemeFidelity)
/* harmony export */ });
/* harmony import */ var _dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dislike/dislike_analyzer.js */ "./node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js");
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temperature/temperature_cache.js */ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * A scheme that places the source color in `Scheme.primaryContainer`.
 *
 * Primary Container is the source color, adjusted for color relativity.
 * It maintains constant appearance in light mode and dark mode.
 * This adds ~5 tone in light mode, and subtracts ~5 tone in dark mode.
 * Tertiary Container is the complement to the source color, using
 * `TemperatureCache`. It also maintains constant appearance.
 */
class SchemeFidelity extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_3__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_4__.Variant.FIDELITY,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32.0, sourceColorHct.chroma * 0.5)),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromInt(_dislike_dislike_analyzer_js__WEBPACK_IMPORTED_MODULE_0__.DislikeAnalyzer
                .fixIfDisliked(new _temperature_temperature_cache_js__WEBPACK_IMPORTED_MODULE_2__.TemperatureCache(sourceColorHct).complement)
                .toInt()),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_1__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8.0 + 4.0),
        });
    }
}
//# sourceMappingURL=scheme_fidelity.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeMonochrome: () => (/* binding */ SchemeMonochrome)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** A Dynamic Color theme that is grayscale. */
class SchemeMonochrome extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.MONOCHROME,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0.0),
        });
    }
}
//# sourceMappingURL=scheme_monochrome.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_neutral.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeNeutral: () => (/* binding */ SchemeNeutral)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/** A Dynamic Color theme that is near grayscale. */
class SchemeNeutral extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.NEUTRAL,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2.0),
        });
    }
}
//# sourceMappingURL=scheme_neutral.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeTonalSpot: () => (/* binding */ SchemeTonalSpot)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/**
 * A Dynamic Color theme with low to medium colorfulness and a Tertiary
 * TonalPalette with a hue related to the source color.
 *
 * The default Material You theme on Android 12 and 13.
 */
class SchemeTonalSpot extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_2__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_3__.Variant.TONAL_SPOT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesDouble(sourceColorHct.hue + 60.0), 24.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0),
        });
    }
}
//# sourceMappingURL=scheme_tonal_spot.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeVibrant: () => (/* binding */ SchemeVibrant)
/* harmony export */ });
/* harmony import */ var _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../palettes/tonal_palette.js */ "./node_modules/@material/material-color-utilities/palettes/tonal_palette.js");
/* harmony import */ var _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic_scheme.js */ "./node_modules/@material/material-color-utilities/scheme/dynamic_scheme.js");
/* harmony import */ var _variant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant.js */ "./node_modules/@material/material-color-utilities/scheme/variant.js");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * A Dynamic Color theme that maxes out colorfulness at each position in the
 * Primary Tonal Palette.
 */
class SchemeVibrant extends _dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme {
    constructor(sourceColorHct, isDark, contrastLevel) {
        super({
            sourceColorArgb: sourceColorHct.toInt(),
            variant: _variant_js__WEBPACK_IMPORTED_MODULE_2__.Variant.VIBRANT,
            contrastLevel,
            isDark,
            primaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200.0),
            secondaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.secondaryRotations), 24.0),
            tertiaryPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(_dynamic_scheme_js__WEBPACK_IMPORTED_MODULE_1__.DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.tertiaryRotations), 32.0),
            neutralPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10.0),
            neutralVariantPalette: _palettes_tonal_palette_js__WEBPACK_IMPORTED_MODULE_0__.TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0),
        });
    }
}
/**
 * Hues (in degrees) used at breakpoints such that designers can specify a
 * hue rotation that occurs at a given break point.
 */
SchemeVibrant.hues = [
    0.0,
    41.0,
    61.0,
    101.0,
    131.0,
    181.0,
    251.0,
    301.0,
    360.0,
];
/**
 * Hue rotations (in degrees) of the Secondary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeVibrant.secondaryRotations = [
    18.0,
    15.0,
    10.0,
    12.0,
    15.0,
    18.0,
    15.0,
    12.0,
    12.0,
];
/**
 * Hue rotations (in degrees) of the Tertiary [TonalPalette],
 * corresponding to the breakpoints in [hues].
 */
SchemeVibrant.tertiaryRotations = [
    35.0,
    30.0,
    20.0,
    25.0,
    30.0,
    35.0,
    30.0,
    25.0,
    25.0,
];
//# sourceMappingURL=scheme_vibrant.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/scheme/variant.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/scheme/variant.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Variant: () => (/* binding */ Variant)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Set of themes supported by Dynamic Color.
 * Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
 * colors corresponding to the theme.
 */
var Variant;
(function (Variant) {
    Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
    Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
    Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
    Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
    Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
    Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
    Variant[Variant["CONTENT"] = 6] = "CONTENT";
    Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
    Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
})(Variant || (Variant = {}));
//# sourceMappingURL=variant.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/score/score.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/score/score.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Score: () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const SCORE_OPTION_DEFAULTS = {
    desired: 4,
    fallbackColorARGB: 0xff4285f4,
    filter: true, // Avoid unsuitable colors.
};
function compare(a, b) {
    if (a.score > b.score) {
        return -1;
    }
    else if (a.score < b.score) {
        return 1;
    }
    return 0;
}
/**
 *  Given a large set of colors, remove colors that are unsuitable for a UI
 *  theme, and rank the rest based on suitability.
 *
 *  Enables use of a high cluster count for image quantization, thus ensuring
 *  colors aren't muddied, while curating the high cluster count to a much
 *  smaller number of appropriate choices.
 */
class Score {
    constructor() { }
    /**
     * Given a map with keys of colors and values of how often the color appears,
     * rank the colors based on suitability for being used for a UI theme.
     *
     * @param colorsToPopulation map with keys of colors and values of how often
     *     the color appears, usually from a source image.
     * @param {ScoreOptions} options optional parameters.
     * @return Colors sorted by suitability for a UI theme. The most suitable
     *     color is the first item, the least suitable is the last. There will
     *     always be at least one color returned. If all the input colors
     *     were not suitable for a theme, a default fallback color will be
     *     provided, Google Blue.
     */
    static score(colorsToPopulation, options) {
        const { desired, fallbackColorARGB, filter } = { ...SCORE_OPTION_DEFAULTS, ...options };
        // Get the HCT color for each Argb value, while finding the per hue count and
        // total count.
        const colorsHct = [];
        const huePopulation = new Array(360).fill(0);
        let populationSum = 0;
        for (const [argb, population] of colorsToPopulation.entries()) {
            const hct = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.fromInt(argb);
            colorsHct.push(hct);
            const hue = Math.floor(hct.hue);
            huePopulation[hue] += population;
            populationSum += population;
        }
        // Hues with more usage in neighboring 30 degree slice get a larger number.
        const hueExcitedProportions = new Array(360).fill(0.0);
        for (let hue = 0; hue < 360; hue++) {
            const proportion = huePopulation[hue] / populationSum;
            for (let i = hue - 14; i < hue + 16; i++) {
                const neighborHue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesInt(i);
                hueExcitedProportions[neighborHue] += proportion;
            }
        }
        // Scores each HCT color based on usage and chroma, while optionally
        // filtering out values that do not have enough chroma or usage.
        const scoredHct = new Array();
        for (const hct of colorsHct) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.sanitizeDegreesInt(Math.round(hct.hue));
            const proportion = hueExcitedProportions[hue];
            if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) {
                continue;
            }
            const proportionScore = proportion * 100.0 * Score.WEIGHT_PROPORTION;
            const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
            const chromaScore = (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
            const score = proportionScore + chromaScore;
            scoredHct.push({ hct, score });
        }
        // Sorted so that colors with higher scores come first.
        scoredHct.sort(compare);
        // Iterates through potential hue differences in degrees in order to select
        // the colors with the largest distribution of hues possible. Starting at
        // 90 degrees(maximum difference for 4 colors) then decreasing down to a
        // 15 degree minimum.
        const chosenColors = [];
        for (let differenceDegrees = 90; differenceDegrees >= 15; differenceDegrees--) {
            chosenColors.length = 0;
            for (const { hct } of scoredHct) {
                const duplicateHue = chosenColors.find(chosenHct => {
                    return _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_1__.differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees;
                });
                if (!duplicateHue) {
                    chosenColors.push(hct);
                }
                if (chosenColors.length >= desired)
                    break;
            }
            if (chosenColors.length >= desired)
                break;
        }
        const colors = [];
        if (chosenColors.length === 0) {
            colors.push(fallbackColorARGB);
        }
        for (const chosenHct of chosenColors) {
            colors.push(chosenHct.toInt());
        }
        return colors;
    }
}
Score.TARGET_CHROMA = 48.0; // A1 Chroma
Score.WEIGHT_PROPORTION = 0.7;
Score.WEIGHT_CHROMA_ABOVE = 0.3;
Score.WEIGHT_CHROMA_BELOW = 0.1;
Score.CUTOFF_CHROMA = 5.0;
Score.CUTOFF_EXCITED_PROPORTION = 0.01;
//# sourceMappingURL=score.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/temperature/temperature_cache.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/temperature/temperature_cache.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemperatureCache: () => (/* binding */ TemperatureCache)
/* harmony export */ });
/* harmony import */ var _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hct/hct.js */ "./node_modules/@material/material-color-utilities/hct/hct.js");
/* harmony import */ var _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/* harmony import */ var _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.



/**
 * Design utilities using color temperature theory.
 *
 * Analogous colors, complementary color, and cache to efficiently, lazily,
 * generate data for calculations when needed.
 */
class TemperatureCache {
    constructor(input) {
        this.input = input;
        this.hctsByTempCache = [];
        this.hctsByHueCache = [];
        this.tempsByHctCache = new Map();
        this.inputRelativeTemperatureCache = -1.0;
        this.complementCache = null;
    }
    get hctsByTemp() {
        if (this.hctsByTempCache.length > 0) {
            return this.hctsByTempCache;
        }
        const hcts = this.hctsByHue.concat([this.input]);
        const temperaturesByHct = this.tempsByHct;
        hcts.sort((a, b) => temperaturesByHct.get(a) - temperaturesByHct.get(b));
        this.hctsByTempCache = hcts;
        return hcts;
    }
    get warmest() {
        return this.hctsByTemp[this.hctsByTemp.length - 1];
    }
    get coldest() {
        return this.hctsByTemp[0];
    }
    /**
     * A set of colors with differing hues, equidistant in temperature.
     *
     * In art, this is usually described as a set of 5 colors on a color wheel
     * divided into 12 sections. This method allows provision of either of those
     * values.
     *
     * Behavior is undefined when [count] or [divisions] is 0.
     * When divisions < count, colors repeat.
     *
     * [count] The number of colors to return, includes the input color.
     * [divisions] The number of divisions on the color wheel.
     */
    analogous(count = 5, divisions = 12) {
        const startHue = Math.round(this.input.hue);
        const startHct = this.hctsByHue[startHue];
        let lastTemp = this.relativeTemperature(startHct);
        const allColors = [startHct];
        let absoluteTotalTempDelta = 0.0;
        for (let i = 0; i < 360; i++) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesInt(startHue + i);
            const hct = this.hctsByHue[hue];
            const temp = this.relativeTemperature(hct);
            const tempDelta = Math.abs(temp - lastTemp);
            lastTemp = temp;
            absoluteTotalTempDelta += tempDelta;
        }
        let hueAddend = 1;
        const tempStep = absoluteTotalTempDelta / divisions;
        let totalTempDelta = 0.0;
        lastTemp = this.relativeTemperature(startHct);
        while (allColors.length < divisions) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesInt(startHue + hueAddend);
            const hct = this.hctsByHue[hue];
            const temp = this.relativeTemperature(hct);
            const tempDelta = Math.abs(temp - lastTemp);
            totalTempDelta += tempDelta;
            const desiredTotalTempDeltaForIndex = allColors.length * tempStep;
            let indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
            let indexAddend = 1;
            // Keep adding this hue to the answers until its temperature is
            // insufficient. This ensures consistent behavior when there aren't
            // [divisions] discrete steps between 0 and 360 in hue with [tempStep]
            // delta in temperature between them.
            //
            // For example, white and black have no analogues: there are no other
            // colors at T100/T0. Therefore, they should just be added to the array
            // as answers.
            while (indexSatisfied && allColors.length < divisions) {
                allColors.push(hct);
                const desiredTotalTempDeltaForIndex = ((allColors.length + indexAddend) * tempStep);
                indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
                indexAddend++;
            }
            lastTemp = temp;
            hueAddend++;
            if (hueAddend > 360) {
                while (allColors.length < divisions) {
                    allColors.push(hct);
                }
                break;
            }
        }
        const answers = [this.input];
        // First, generate analogues from rotating counter-clockwise.
        const increaseHueCount = Math.floor((count - 1) / 2.0);
        for (let i = 1; i < (increaseHueCount + 1); i++) {
            let index = 0 - i;
            while (index < 0) {
                index = allColors.length + index;
            }
            if (index >= allColors.length) {
                index = index % allColors.length;
            }
            answers.splice(0, 0, allColors[index]);
        }
        // Second, generate analogues from rotating clockwise.
        const decreaseHueCount = count - increaseHueCount - 1;
        for (let i = 1; i < (decreaseHueCount + 1); i++) {
            let index = i;
            while (index < 0) {
                index = allColors.length + index;
            }
            if (index >= allColors.length) {
                index = index % allColors.length;
            }
            answers.push(allColors[index]);
        }
        return answers;
    }
    /**
     * A color that complements the input color aesthetically.
     *
     * In art, this is usually described as being across the color wheel.
     * History of this shows intent as a color that is just as cool-warm as the
     * input color is warm-cool.
     */
    get complement() {
        if (this.complementCache != null) {
            return this.complementCache;
        }
        const coldestHue = this.coldest.hue;
        const coldestTemp = this.tempsByHct.get(this.coldest);
        const warmestHue = this.warmest.hue;
        const warmestTemp = this.tempsByHct.get(this.warmest);
        const range = warmestTemp - coldestTemp;
        const startHueIsColdestToWarmest = TemperatureCache.isBetween(this.input.hue, coldestHue, warmestHue);
        const startHue = startHueIsColdestToWarmest ? warmestHue : coldestHue;
        const endHue = startHueIsColdestToWarmest ? coldestHue : warmestHue;
        const directionOfRotation = 1.0;
        let smallestError = 1000.0;
        let answer = this.hctsByHue[Math.round(this.input.hue)];
        const complementRelativeTemp = 1.0 - this.inputRelativeTemperature;
        // Find the color in the other section, closest to the inverse percentile
        // of the input color. This is the complement.
        for (let hueAddend = 0.0; hueAddend <= 360.0; hueAddend += 1.0) {
            const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(startHue + directionOfRotation * hueAddend);
            if (!TemperatureCache.isBetween(hue, startHue, endHue)) {
                continue;
            }
            const possibleAnswer = this.hctsByHue[Math.round(hue)];
            const relativeTemp = (this.tempsByHct.get(possibleAnswer) - coldestTemp) / range;
            const error = Math.abs(complementRelativeTemp - relativeTemp);
            if (error < smallestError) {
                smallestError = error;
                answer = possibleAnswer;
            }
        }
        this.complementCache = answer;
        return this.complementCache;
    }
    /**
     * Temperature relative to all colors with the same chroma and tone.
     * Value on a scale from 0 to 1.
     */
    relativeTemperature(hct) {
        const range = this.tempsByHct.get(this.warmest) - this.tempsByHct.get(this.coldest);
        const differenceFromColdest = this.tempsByHct.get(hct) - this.tempsByHct.get(this.coldest);
        // Handle when there's no difference in temperature between warmest and
        // coldest: for example, at T100, only one color is available, white.
        if (range === 0.0) {
            return 0.5;
        }
        return differenceFromColdest / range;
    }
    /** Relative temperature of the input color. See [relativeTemperature]. */
    get inputRelativeTemperature() {
        if (this.inputRelativeTemperatureCache >= 0.0) {
            return this.inputRelativeTemperatureCache;
        }
        this.inputRelativeTemperatureCache = this.relativeTemperature(this.input);
        return this.inputRelativeTemperatureCache;
    }
    /** A Map with keys of HCTs in [hctsByTemp], values of raw temperature. */
    get tempsByHct() {
        if (this.tempsByHctCache.size > 0) {
            return this.tempsByHctCache;
        }
        const allHcts = this.hctsByHue.concat([this.input]);
        const temperaturesByHct = new Map();
        for (const e of allHcts) {
            temperaturesByHct.set(e, TemperatureCache.rawTemperature(e));
        }
        this.tempsByHctCache = temperaturesByHct;
        return temperaturesByHct;
    }
    /**
     * HCTs for all hues, with the same chroma/tone as the input.
     * Sorted ascending, hue 0 to 360.
     */
    get hctsByHue() {
        if (this.hctsByHueCache.length > 0) {
            return this.hctsByHueCache;
        }
        const hcts = [];
        for (let hue = 0.0; hue <= 360.0; hue += 1.0) {
            const colorAtHue = _hct_hct_js__WEBPACK_IMPORTED_MODULE_0__.Hct.from(hue, this.input.chroma, this.input.tone);
            hcts.push(colorAtHue);
        }
        this.hctsByHueCache = hcts;
        return this.hctsByHueCache;
    }
    /** Determines if an angle is between two other angles, rotating clockwise. */
    static isBetween(angle, a, b) {
        if (a < b) {
            return a <= angle && angle <= b;
        }
        return a <= angle || angle <= b;
    }
    /**
     * Value representing cool-warm factor of a color.
     * Values below 0 are considered cool, above, warm.
     *
     * Color science has researched emotion and harmony, which art uses to select
     * colors. Warm-cool is the foundation of analogous and complementary colors.
     * See:
     * - Li-Chen Ou's Chapter 19 in Handbook of Color Psychology (2015).
     * - Josef Albers' Interaction of Color chapters 19 and 21.
     *
     * Implementation of Ou, Woodcock and Wright's algorithm, which uses
     * L*a*b* / LCH color space.
     * Return value has these properties:
     * - Values below 0 are cool, above 0 are warm.
     * - Lower bound: -0.52 - (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
     *   Assuming max of 130 chroma, -9.66.
     * - Upper bound: -0.52 + (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
     *   Assuming max of 130 chroma, 8.61.
     */
    static rawTemperature(color) {
        const lab = _utils_color_utils_js__WEBPACK_IMPORTED_MODULE_1__.labFromArgb(color.toInt());
        const hue = _utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(Math.atan2(lab[2], lab[1]) * 180.0 / Math.PI);
        const chroma = Math.sqrt((lab[1] * lab[1]) + (lab[2] * lab[2]));
        const temperature = -0.5 +
            0.02 * Math.pow(chroma, 1.07) *
                Math.cos(_utils_math_utils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeDegreesDouble(hue - 50.0) * Math.PI / 180.0);
        return temperature;
    }
}
//# sourceMappingURL=temperature_cache.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/color_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/color_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphaFromArgb: () => (/* binding */ alphaFromArgb),
/* harmony export */   argbFromLab: () => (/* binding */ argbFromLab),
/* harmony export */   argbFromLinrgb: () => (/* binding */ argbFromLinrgb),
/* harmony export */   argbFromLstar: () => (/* binding */ argbFromLstar),
/* harmony export */   argbFromRgb: () => (/* binding */ argbFromRgb),
/* harmony export */   argbFromRgba: () => (/* binding */ argbFromRgba),
/* harmony export */   argbFromXyz: () => (/* binding */ argbFromXyz),
/* harmony export */   blueFromArgb: () => (/* binding */ blueFromArgb),
/* harmony export */   delinearized: () => (/* binding */ delinearized),
/* harmony export */   greenFromArgb: () => (/* binding */ greenFromArgb),
/* harmony export */   isOpaque: () => (/* binding */ isOpaque),
/* harmony export */   labFromArgb: () => (/* binding */ labFromArgb),
/* harmony export */   linearized: () => (/* binding */ linearized),
/* harmony export */   lstarFromArgb: () => (/* binding */ lstarFromArgb),
/* harmony export */   lstarFromY: () => (/* binding */ lstarFromY),
/* harmony export */   redFromArgb: () => (/* binding */ redFromArgb),
/* harmony export */   rgbaFromArgb: () => (/* binding */ rgbaFromArgb),
/* harmony export */   whitePointD65: () => (/* binding */ whitePointD65),
/* harmony export */   xyzFromArgb: () => (/* binding */ xyzFromArgb),
/* harmony export */   yFromLstar: () => (/* binding */ yFromLstar)
/* harmony export */ });
/* harmony import */ var _math_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math_utils.js */ "./node_modules/@material/material-color-utilities/utils/math_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.

/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */
const SRGB_TO_XYZ = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
];
const XYZ_TO_SRGB = [
    [
        3.2413774792388685,
        -1.5376652402851851,
        -0.49885366846268053,
    ],
    [
        -0.9691452513005321,
        1.8758853451067872,
        0.04156585616912061,
    ],
    [
        0.05562093689691305,
        -0.20395524564742123,
        1.0571799111220335,
    ],
];
const WHITE_POINT_D65 = [95.047, 100.0, 108.883];
/**
 * Converts a color from RGB components to ARGB format.
 */
function argbFromRgb(red, green, blue) {
    return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>>
        0;
}
/**
 * Converts a color from linear RGB components to ARGB format.
 */
function argbFromLinrgb(linrgb) {
    const r = delinearized(linrgb[0]);
    const g = delinearized(linrgb[1]);
    const b = delinearized(linrgb[2]);
    return argbFromRgb(r, g, b);
}
/**
 * Returns the alpha component of a color in ARGB format.
 */
function alphaFromArgb(argb) {
    return argb >> 24 & 255;
}
/**
 * Returns the red component of a color in ARGB format.
 */
function redFromArgb(argb) {
    return argb >> 16 & 255;
}
/**
 * Returns the green component of a color in ARGB format.
 */
function greenFromArgb(argb) {
    return argb >> 8 & 255;
}
/**
 * Returns the blue component of a color in ARGB format.
 */
function blueFromArgb(argb) {
    return argb & 255;
}
/**
 * Returns whether a color in ARGB format is opaque.
 */
function isOpaque(argb) {
    return alphaFromArgb(argb) >= 255;
}
/**
 * Converts a color from ARGB to XYZ.
 */
function argbFromXyz(x, y, z) {
    const matrix = XYZ_TO_SRGB;
    const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
    const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
    const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
    const r = delinearized(linearR);
    const g = delinearized(linearG);
    const b = delinearized(linearB);
    return argbFromRgb(r, g, b);
}
/**
 * Converts a color from XYZ to ARGB.
 */
function xyzFromArgb(argb) {
    const r = linearized(redFromArgb(argb));
    const g = linearized(greenFromArgb(argb));
    const b = linearized(blueFromArgb(argb));
    return _math_utils_js__WEBPACK_IMPORTED_MODULE_0__.matrixMultiply([r, g, b], SRGB_TO_XYZ);
}
/**
 * Converts a color represented in Lab color space into an ARGB
 * integer.
 */
function argbFromLab(l, a, b) {
    const whitePoint = WHITE_POINT_D65;
    const fy = (l + 16.0) / 116.0;
    const fx = a / 500.0 + fy;
    const fz = fy - b / 200.0;
    const xNormalized = labInvf(fx);
    const yNormalized = labInvf(fy);
    const zNormalized = labInvf(fz);
    const x = xNormalized * whitePoint[0];
    const y = yNormalized * whitePoint[1];
    const z = zNormalized * whitePoint[2];
    return argbFromXyz(x, y, z);
}
/**
 * Converts a color from ARGB representation to L*a*b*
 * representation.
 *
 * @param argb the ARGB representation of a color
 * @return a Lab object representing the color
 */
function labFromArgb(argb) {
    const linearR = linearized(redFromArgb(argb));
    const linearG = linearized(greenFromArgb(argb));
    const linearB = linearized(blueFromArgb(argb));
    const matrix = SRGB_TO_XYZ;
    const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
    const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
    const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
    const whitePoint = WHITE_POINT_D65;
    const xNormalized = x / whitePoint[0];
    const yNormalized = y / whitePoint[1];
    const zNormalized = z / whitePoint[2];
    const fx = labF(xNormalized);
    const fy = labF(yNormalized);
    const fz = labF(zNormalized);
    const l = 116.0 * fy - 16;
    const a = 500.0 * (fx - fy);
    const b = 200.0 * (fy - fz);
    return [l, a, b];
}
/**
 * Converts an L* value to an ARGB representation.
 *
 * @param lstar L* in L*a*b*
 * @return ARGB representation of grayscale color with lightness
 * matching L*
 */
function argbFromLstar(lstar) {
    const y = yFromLstar(lstar);
    const component = delinearized(y);
    return argbFromRgb(component, component, component);
}
/**
 * Computes the L* value of a color in ARGB representation.
 *
 * @param argb ARGB representation of a color
 * @return L*, from L*a*b*, coordinate of the color
 */
function lstarFromArgb(argb) {
    const y = xyzFromArgb(argb)[1];
    return 116.0 * labF(y / 100.0) - 16.0;
}
/**
 * Converts an L* value to a Y value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param lstar L* in L*a*b*
 * @return Y in XYZ
 */
function yFromLstar(lstar) {
    return 100.0 * labInvf((lstar + 16.0) / 116.0);
}
/**
 * Converts a Y value to an L* value.
 *
 * L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
 *
 * L* measures perceptual luminance, a linear scale. Y in XYZ
 * measures relative luminance, a logarithmic scale.
 *
 * @param y Y in XYZ
 * @return L* in L*a*b*
 */
function lstarFromY(y) {
    return labF(y / 100.0) * 116.0 - 16.0;
}
/**
 * Linearizes an RGB component.
 *
 * @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
 * channel
 * @return 0.0 <= output <= 100.0, color channel converted to
 * linear RGB space
 */
function linearized(rgbComponent) {
    const normalized = rgbComponent / 255.0;
    if (normalized <= 0.040449936) {
        return normalized / 12.92 * 100.0;
    }
    else {
        return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
    }
}
/**
 * Delinearizes an RGB component.
 *
 * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
 * linear R/G/B channel
 * @return 0 <= output <= 255, color channel converted to regular
 * RGB space
 */
function delinearized(rgbComponent) {
    const normalized = rgbComponent / 100.0;
    let delinearized = 0.0;
    if (normalized <= 0.0031308) {
        delinearized = normalized * 12.92;
    }
    else {
        delinearized = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
    }
    return _math_utils_js__WEBPACK_IMPORTED_MODULE_0__.clampInt(0, 255, Math.round(delinearized * 255.0));
}
/**
 * Returns the standard white point; white on a sunny day.
 *
 * @return The white point
 */
function whitePointD65() {
    return WHITE_POINT_D65;
}
/**
 * Return RGBA from a given int32 color
 *
 * @param argb ARGB representation of a int32 color.
 * @return RGBA representation of a int32 color.
 */
function rgbaFromArgb(argb) {
    const r = redFromArgb(argb);
    const g = greenFromArgb(argb);
    const b = blueFromArgb(argb);
    const a = alphaFromArgb(argb);
    return { r, g, b, a };
}
/**
 * Return int32 color from a given RGBA component
 *
 * @param rgba RGBA representation of a int32 color.
 * @returns ARGB representation of a int32 color.
 */
function argbFromRgba({ r, g, b, a }) {
    const rValue = clampComponent(r);
    const gValue = clampComponent(g);
    const bValue = clampComponent(b);
    const aValue = clampComponent(a);
    return (aValue << 24) | (rValue << 16) | (gValue << 8) | bValue;
}
function clampComponent(value) {
    if (value < 0)
        return 0;
    if (value > 255)
        return 255;
    return value;
}
function labF(t) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    if (t > e) {
        return Math.pow(t, 1.0 / 3.0);
    }
    else {
        return (kappa * t + 16) / 116;
    }
}
function labInvf(ft) {
    const e = 216.0 / 24389.0;
    const kappa = 24389.0 / 27.0;
    const ft3 = ft * ft * ft;
    if (ft3 > e) {
        return ft3;
    }
    else {
        return (116 * ft - 16) / kappa;
    }
}
//# sourceMappingURL=color_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/image_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/image_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sourceColorFromImage: () => (/* binding */ sourceColorFromImage)
/* harmony export */ });
/* harmony import */ var _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quantize/quantizer_celebi.js */ "./node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js");
/* harmony import */ var _score_score_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/score.js */ "./node_modules/@material/material-color-utilities/score/score.js");
/* harmony import */ var _color_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Get the source color from an image.
 *
 * @param image The image element
 * @return Source color - the color most suitable for creating a UI theme
 */
async function sourceColorFromImage(image) {
    // Convert Image data to Pixel Array
    const imageBytes = await new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
            reject(new Error('Could not get canvas context'));
            return;
        }
        const callback = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            let rect = [0, 0, image.width, image.height];
            const area = image.dataset['area'];
            if (area && /^\d+(\s*,\s*\d+){3}$/.test(area)) {
                rect = area.split(/\s*,\s*/).map(s => {
                    // tslint:disable-next-line:ban
                    return parseInt(s, 10);
                });
            }
            const [sx, sy, sw, sh] = rect;
            resolve(context.getImageData(sx, sy, sw, sh).data);
        };
        if (image.complete) {
            callback();
        }
        else {
            image.onload = callback;
        }
    });
    // Convert Image data to Pixel Array
    const pixels = [];
    for (let i = 0; i < imageBytes.length; i += 4) {
        const r = imageBytes[i];
        const g = imageBytes[i + 1];
        const b = imageBytes[i + 2];
        const a = imageBytes[i + 3];
        if (a < 255) {
            continue;
        }
        const argb = (0,_color_utils_js__WEBPACK_IMPORTED_MODULE_2__.argbFromRgb)(r, g, b);
        pixels.push(argb);
    }
    // Convert Pixels to Material Colors
    const result = _quantize_quantizer_celebi_js__WEBPACK_IMPORTED_MODULE_0__.QuantizerCelebi.quantize(pixels, 128);
    const ranked = _score_score_js__WEBPACK_IMPORTED_MODULE_1__.Score.score(result);
    const top = ranked[0];
    return top;
}
//# sourceMappingURL=image_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/math_utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/math_utils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clampDouble: () => (/* binding */ clampDouble),
/* harmony export */   clampInt: () => (/* binding */ clampInt),
/* harmony export */   differenceDegrees: () => (/* binding */ differenceDegrees),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   matrixMultiply: () => (/* binding */ matrixMultiply),
/* harmony export */   rotationDirection: () => (/* binding */ rotationDirection),
/* harmony export */   sanitizeDegreesDouble: () => (/* binding */ sanitizeDegreesDouble),
/* harmony export */   sanitizeDegreesInt: () => (/* binding */ sanitizeDegreesInt),
/* harmony export */   signum: () => (/* binding */ signum)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */
/**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */
function signum(num) {
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 0;
    }
    else {
        return 1;
    }
}
/**
 * The linear interpolation function.
 *
 * @return start if amount = 0 and stop if amount = 1
 */
function lerp(start, stop, amount) {
    return (1.0 - amount) * start + amount * stop;
}
/**
 * Clamps an integer between two integers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampInt(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Clamps an integer between two floating-point numbers.
 *
 * @return input when min <= input <= max, and either min or max
 * otherwise.
 */
function clampDouble(min, max, input) {
    if (input < min) {
        return min;
    }
    else if (input > max) {
        return max;
    }
    return input;
}
/**
 * Sanitizes a degree measure as an integer.
 *
 * @return a degree measure between 0 (inclusive) and 360
 * (exclusive).
 */
function sanitizeDegreesInt(degrees) {
    degrees = degrees % 360;
    if (degrees < 0) {
        degrees = degrees + 360;
    }
    return degrees;
}
/**
 * Sanitizes a degree measure as a floating-point number.
 *
 * @return a degree measure between 0.0 (inclusive) and 360.0
 * (exclusive).
 */
function sanitizeDegreesDouble(degrees) {
    degrees = degrees % 360.0;
    if (degrees < 0) {
        degrees = degrees + 360.0;
    }
    return degrees;
}
/**
 * Sign of direction change needed to travel from one angle to
 * another.
 *
 * For angles that are 180 degrees apart from each other, both
 * directions have the same travel distance, so either direction is
 * shortest. The value 1.0 is returned in this case.
 *
 * @param from The angle travel starts from, in degrees.
 * @param to The angle travel ends at, in degrees.
 * @return -1 if decreasing from leads to the shortest travel
 * distance, 1 if increasing from leads to the shortest travel
 * distance.
 */
function rotationDirection(from, to) {
    const increasingDifference = sanitizeDegreesDouble(to - from);
    return increasingDifference <= 180.0 ? 1.0 : -1.0;
}
/**
 * Distance of two points on a circle, represented using degrees.
 */
function differenceDegrees(a, b) {
    return 180.0 - Math.abs(Math.abs(a - b) - 180.0);
}
/**
 * Multiplies a 1x3 row vector with a 3x3 matrix.
 */
function matrixMultiply(row, matrix) {
    const a = row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2];
    const b = row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2];
    const c = row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2];
    return [a, b, c];
}
//# sourceMappingURL=math_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/string_utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/string_utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argbFromHex: () => (/* binding */ argbFromHex),
/* harmony export */   hexFromArgb: () => (/* binding */ hexFromArgb)
/* harmony export */ });
/* harmony import */ var _color_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color_utils.js */ "./node_modules/@material/material-color-utilities/utils/color_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Utility methods for hexadecimal representations of colors.
 */
/**
 * @param argb ARGB representation of a color.
 * @return Hex string representing color, ex. #ff0000 for red.
 */
function hexFromArgb(argb) {
    const r = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.redFromArgb(argb);
    const g = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.greenFromArgb(argb);
    const b = _color_utils_js__WEBPACK_IMPORTED_MODULE_0__.blueFromArgb(argb);
    const outParts = [r.toString(16), g.toString(16), b.toString(16)];
    // Pad single-digit output values
    for (const [i, part] of outParts.entries()) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    }
    return '#' + outParts.join('');
}
/**
 * @param hex String representing color as hex code. Accepts strings with or
 *     without leading #, and string representing the color using 3, 6, or 8
 *     hex characters.
 * @return ARGB representation of color.
 */
function argbFromHex(hex) {
    hex = hex.replace('#', '');
    const isThree = hex.length === 3;
    const isSix = hex.length === 6;
    const isEight = hex.length === 8;
    if (!isThree && !isSix && !isEight) {
        throw new Error('unexpected hex ' + hex);
    }
    let r = 0;
    let g = 0;
    let b = 0;
    if (isThree) {
        r = parseIntHex(hex.slice(0, 1).repeat(2));
        g = parseIntHex(hex.slice(1, 2).repeat(2));
        b = parseIntHex(hex.slice(2, 3).repeat(2));
    }
    else if (isSix) {
        r = parseIntHex(hex.slice(0, 2));
        g = parseIntHex(hex.slice(2, 4));
        b = parseIntHex(hex.slice(4, 6));
    }
    else if (isEight) {
        r = parseIntHex(hex.slice(2, 4));
        g = parseIntHex(hex.slice(4, 6));
        b = parseIntHex(hex.slice(6, 8));
    }
    return (((255 << 24) | ((r & 0x0ff) << 16) | ((g & 0x0ff) << 8) | (b & 0x0ff)) >>>
        0);
}
function parseIntHex(value) {
    // tslint:disable-next-line:ban
    return parseInt(value, 16);
}
//# sourceMappingURL=string_utils.js.map

/***/ }),

/***/ "./node_modules/@material/material-color-utilities/utils/theme_utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material/material-color-utilities/utils/theme_utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTheme: () => (/* binding */ applyTheme),
/* harmony export */   customColor: () => (/* binding */ customColor),
/* harmony export */   themeFromImage: () => (/* binding */ themeFromImage),
/* harmony export */   themeFromSourceColor: () => (/* binding */ themeFromSourceColor)
/* harmony export */ });
/* harmony import */ var _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blend/blend.js */ "./node_modules/@material/material-color-utilities/blend/blend.js");
/* harmony import */ var _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../palettes/core_palette.js */ "./node_modules/@material/material-color-utilities/palettes/core_palette.js");
/* harmony import */ var _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheme/scheme.js */ "./node_modules/@material/material-color-utilities/scheme/scheme.js");
/* harmony import */ var _image_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_utils.js */ "./node_modules/@material/material-color-utilities/utils/image_utils.js");
/* harmony import */ var _string_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string_utils.js */ "./node_modules/@material/material-color-utilities/utils/string_utils.js");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */
function themeFromSourceColor(source, customColors = []) {
    const palette = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__.CorePalette.of(source);
    return {
        source,
        schemes: {
            light: _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__.Scheme.light(source),
            dark: _scheme_scheme_js__WEBPACK_IMPORTED_MODULE_2__.Scheme.dark(source),
        },
        palettes: {
            primary: palette.a1,
            secondary: palette.a2,
            tertiary: palette.a3,
            neutral: palette.n1,
            neutralVariant: palette.n2,
            error: palette.error,
        },
        customColors: customColors.map((c) => customColor(source, c)),
    };
}
/**
 * Generate a theme from an image source
 *
 * @param image Image element
 * @param customColors Array of custom colors
 * @return Theme object
 */
async function themeFromImage(image, customColors = []) {
    const source = await (0,_image_utils_js__WEBPACK_IMPORTED_MODULE_3__.sourceColorFromImage)(image);
    return themeFromSourceColor(source, customColors);
}
/**
 * Generate custom color group from source and target color
 *
 * @param source Source color
 * @param color Custom color
 * @return Custom color group
 *
 * @link https://m3.material.io/styles/color/the-color-system/color-roles
 */
function customColor(source, color) {
    let value = color.value;
    const from = value;
    const to = source;
    if (color.blend) {
        value = _blend_blend_js__WEBPACK_IMPORTED_MODULE_0__.Blend.harmonize(from, to);
    }
    const palette = _palettes_core_palette_js__WEBPACK_IMPORTED_MODULE_1__.CorePalette.of(value);
    const tones = palette.a1;
    return {
        color,
        value,
        light: {
            color: tones.tone(40),
            onColor: tones.tone(100),
            colorContainer: tones.tone(90),
            onColorContainer: tones.tone(10),
        },
        dark: {
            color: tones.tone(80),
            onColor: tones.tone(20),
            colorContainer: tones.tone(30),
            onColorContainer: tones.tone(90),
        },
    };
}
/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
function applyTheme(theme, options) {
    const target = options?.target || document.body;
    const isDark = options?.dark ?? false;
    const scheme = isDark ? theme.schemes.dark : theme.schemes.light;
    setSchemeProperties(target, scheme);
    if (options?.brightnessSuffix) {
        setSchemeProperties(target, theme.schemes.dark, '-dark');
        setSchemeProperties(target, theme.schemes.light, '-light');
    }
    if (options?.paletteTones) {
        const tones = options?.paletteTones ?? [];
        for (const [key, palette] of Object.entries(theme.palettes)) {
            const paletteKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            for (const tone of tones) {
                const token = `--md-ref-palette-${paletteKey}-${paletteKey}${tone}`;
                const color = (0,_string_utils_js__WEBPACK_IMPORTED_MODULE_4__.hexFromArgb)(palette.tone(tone));
                target.style.setProperty(token, color);
            }
        }
    }
}
function setSchemeProperties(target, scheme, suffix = '') {
    for (const [key, value] of Object.entries(scheme.toJSON())) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const color = (0,_string_utils_js__WEBPACK_IMPORTED_MODULE_4__.hexFromArgb)(value);
        target.style.setProperty(`--md-sys-color-${token}${suffix}`, color);
    }
}
//# sourceMappingURL=theme_utils.js.map

/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent, declarations), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./jimu-theme/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CacheProvider),
/* harmony export */   ClassicThemeFirstContext: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ClassicThemeFirstContext),
/* harmony export */   CssBaseline: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CssBaseline),
/* harmony export */   CssUtilitiesProvider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CssUtilitiesProvider),
/* harmony export */   CssVarsProvider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CssVarsProvider),
/* harmony export */   DefaultThemeSourceOptions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DefaultThemeSourceOptions),
/* harmony export */   FontLoader: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FontLoader),
/* harmony export */   Global: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Global),
/* harmony export */   GlobalStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.GlobalStyles),
/* harmony export */   ReferencePaletteColorFullTones: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteColorFullTones),
/* harmony export */   ReferencePaletteColorTones: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteColorTones),
/* harmony export */   ReferencePaletteNeutralTones: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ReferencePaletteNeutralTones),
/* harmony export */   SourceKeyColorNames: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SourceKeyColorNames),
/* harmony export */   Theme2Context: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Theme2Context),
/* harmony export */   Theme2GlobalStyleClassName: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Theme2GlobalStyleClassName),
/* harmony export */   Theme2Style: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Theme2Style),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeContext),
/* harmony export */   ThemeManager: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeManager),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),
/* harmony export */   ThemeSpacingVariants: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeSpacingVariants),
/* harmony export */   ThemeStore: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeStore),
/* harmony export */   ThemeSwitchComponent: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitchComponent),
/* harmony export */   ThemeSwitcher: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcher),
/* harmony export */   TypographyVariants: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TypographyVariants),
/* harmony export */   UseTheme2Context: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UseTheme2Context),
/* harmony export */   augmentColor: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.augmentColor),
/* harmony export */   augmentThemeColor: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.augmentThemeColor),
/* harmony export */   body: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.body),
/* harmony export */   caret: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.caret),
/* harmony export */   classesUtils: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.classesUtils),
/* harmony export */   classicCommonColors: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.classicCommonColors),
/* harmony export */   classicThemeColors: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.classicThemeColors),
/* harmony export */   colorUtils: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.colorUtils),
/* harmony export */   createBody: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createBody),
/* harmony export */   createClassicPalette: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createClassicPalette),
/* harmony export */   createClassicTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createClassicTheme),
/* harmony export */   createColorScheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createColorScheme),
/* harmony export */   createColoration: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createColoration),
/* harmony export */   createColors: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createColors),
/* harmony export */   createEmotionCache: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createEmotionCache),
/* harmony export */   createEmotionRTLCache: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createEmotionRTLCache),
/* harmony export */   createFocusedStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createFocusedStyles),
/* harmony export */   createFooter: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createFooter),
/* harmony export */   createHeader: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createHeader),
/* harmony export */   createLink: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createLink),
/* harmony export */   createMixedTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createMixedTheme),
/* harmony export */   createReference: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createReference),
/* harmony export */   createReferencePalette: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createReferencePalette),
/* harmony export */   createReferencePaletteColor: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createReferencePaletteColor),
/* harmony export */   createReferenceTypeface: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createReferenceTypeface),
/* harmony export */   createShadow: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createShadow),
/* harmony export */   createShape: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createShape),
/* harmony export */   createStyled: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createStyled),
/* harmony export */   createTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createTheme),
/* harmony export */   createThemeOptions: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createThemeOptions),
/* harmony export */   createUnarySpacing: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing),
/* harmony export */   defaultFonts: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultFonts),
/* harmony export */   defaultTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.defaultTheme),
/* harmony export */   formValidation: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.formValidation),
/* harmony export */   getAppThemeManifest: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getAppThemeManifest),
/* harmony export */   getBoxInterpolationStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getBoxInterpolationStyles),
/* harmony export */   getBoxStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getBoxStyles),
/* harmony export */   getBuilderThemeVariables: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getBuilderThemeVariables),
/* harmony export */   getClassicThemeBaseLineStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getClassicThemeBaseLineStyles),
/* harmony export */   getClassicThemeCSSVars: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getClassicThemeCSSVars),
/* harmony export */   getClassicThemeUtilities: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getClassicThemeUtilities),
/* harmony export */   getClassicVarsMapping: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getClassicVarsMapping),
/* harmony export */   getComponentVariants: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getComponentVariants),
/* harmony export */   getFocusStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getFocusStyles),
/* harmony export */   getLoadingStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getLoadingStyles),
/* harmony export */   getNavigationVariables: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getNavigationVariables),
/* harmony export */   getQuillCoreStyle: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getQuillCoreStyle),
/* harmony export */   getRegisteredStyle: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getRegisteredStyle),
/* harmony export */   getSchemeColor: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getSchemeColor),
/* harmony export */   getTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTheme),
/* harmony export */   getTheme2: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTheme2),
/* harmony export */   getTheme2Manifest: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTheme2Manifest),
/* harmony export */   getTheme2Module: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTheme2Module),
/* harmony export */   getTheme2Style: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getTheme2Style),
/* harmony export */   getThemeBaselineStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getThemeBaselineStyles),
/* harmony export */   getThemeColorValue: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getThemeColorValue),
/* harmony export */   getThemeManifest: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getThemeManifest),
/* harmony export */   getThemeModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getThemeModule),
/* harmony export */   getThemeStyle: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getThemeStyle),
/* harmony export */   hover: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.hover),
/* harmony export */   hoverFocus: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.hoverFocus),
/* harmony export */   html: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.html),
/* harmony export */   isCSSVariable: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.isCSSVariable),
/* harmony export */   isThemeLoaded: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.isThemeLoaded),
/* harmony export */   loadFontStyleSheet: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadFontStyleSheet),
/* harmony export */   loadTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.loadTheme),
/* harmony export */   mapping: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.mapping),
/* harmony export */   navDivider: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.navDivider),
/* harmony export */   popperPointer: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.popperPointer),
/* harmony export */   registerStyle: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.registerStyle),
/* harmony export */   registerStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.registerStyles),
/* harmony export */   setThemeModule: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.setThemeModule),
/* harmony export */   shouldForwardProp: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.shouldForwardProp),
/* harmony export */   styled: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.styled),
/* harmony export */   themeOptionsUtils: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.themeOptionsUtils),
/* harmony export */   useMultiTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useMultiTheme),
/* harmony export */   useMultiThemeValue: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useMultiThemeValue),
/* harmony export */   useTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useTheme),
/* harmony export */   useTheme2: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useTheme2),
/* harmony export */   useThemeLoaded: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useThemeLoaded),
/* harmony export */   useThemeSwitching: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useThemeSwitching),
/* harmony export */   useUseTheme2: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.useUseTheme2),
/* harmony export */   utils: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.utils),
/* harmony export */   withBuilderTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.withBuilderTheme),
/* harmony export */   withStyles: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.withStyles),
/* harmony export */   withTheme: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.withTheme),
/* harmony export */   withTheme2: () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.withTheme2)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./jimu-theme/lib/index.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});