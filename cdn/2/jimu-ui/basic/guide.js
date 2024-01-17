System.register(["jimu-core","jimu-core/react","jimu-core/react-dom","jimu-for-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popper);
//# sourceMappingURL=popper.js.map


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-floater/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-floater/es/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactFloater)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is-lite */ "./node_modules/react-floater/node_modules/is-lite/esm/index.js");
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tree-changes */ "./node_modules/react-floater/node_modules/tree-changes/esm/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");








function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var DEFAULTS = {flip:{padding:20},preventOverflow:{padding:10}};

var VALIDATOR_ARG_ERROR_MESSAGE='The typeValidator argument must be a function '+'with the signature function(props, propName, componentName).';var MESSAGE_ARG_ERROR_MESSAGE='The error message is optional, but must be a string if provided.';function propIsRequired(condition,props,propName,componentName){if(typeof condition==='boolean'){return condition;}if(typeof condition==='function'){return condition(props,propName,componentName);}if(Boolean(condition)===true){return Boolean(condition);}return false;}function propExists(props,propName){return Object.hasOwnProperty.call(props,propName);}function missingPropError(props,propName,componentName,message){if(message){return new Error(message);}return new Error("Required ".concat(props[propName]," `").concat(propName,"` was not specified in `").concat(componentName,"`."));}function guardAgainstInvalidArgTypes(typeValidator,message){if(typeof typeValidator!=='function'){throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);}if(Boolean(message)&&typeof message!=='string'){throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE);}}function isRequiredIf(typeValidator,condition,message){guardAgainstInvalidArgTypes(typeValidator,message);return function(props,propName,componentName){for(var _len=arguments.length,rest=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){rest[_key-3]=arguments[_key];}if(propIsRequired(condition,props,propName,componentName)){if(propExists(props,propName)){return typeValidator.apply(void 0,[props,propName,componentName].concat(rest));}return missingPropError(props,propName,componentName,message);}// Is not required, so just run typeValidator.
return typeValidator.apply(void 0,[props,propName,componentName].concat(rest));};}

var STATUS = {INIT:'init',IDLE:'idle',OPENING:'opening',OPEN:'open',CLOSING:'closing',ERROR:'error'};

var isReact16=react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].createPortal!==undefined;function canUseDOM(){return !!(typeof window!=='undefined'&&window.document&&window.document.createElement);}function isMobile(){return 'ontouchstart'in window&&/Mobi/.test(navigator.userAgent);}/**
 * Log method calls if debug is enabled
 *
 * @private
 * @param {Object}       arg
 * @param {string}       arg.title    - The title the logger was called from
 * @param {Object|Array} [arg.data]   - The data to be logged
 * @param {boolean}      [arg.warn]  - If true, the message will be a warning
 * @param {boolean}      [arg.debug] - Nothing will be logged unless debug is true
 */function log(_ref){var title=_ref.title,data=_ref.data,_ref$warn=_ref.warn,warn=_ref$warn===void 0?false:_ref$warn,_ref$debug=_ref.debug,debug=_ref$debug===void 0?false:_ref$debug;/* eslint-disable no-console */var logFn=warn?console.warn||console.error:console.log;if(debug&&title&&data){console.groupCollapsed("%creact-floater: ".concat(title),'color: #9b00ff; font-weight: bold; font-size: 12px;');if(Array.isArray(data)){data.forEach(function(d){if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"].plainObject(d)&&d.key){logFn.apply(console,[d.key,d.value]);}else {logFn.apply(console,[d]);}});}else {logFn.apply(console,[data]);}console.groupEnd();}/* eslint-enable */}function on(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;element.addEventListener(event,cb,capture);}function off(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;element.removeEventListener(event,cb,capture);}function once(element,event,cb){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var _nextCB;// eslint-disable-next-line prefer-const
_nextCB=function nextCB(e){cb(e);off(element,event,_nextCB);};on(element,event,_nextCB,capture);}function noop(){}

var ReactFloaterPortal=/*#__PURE__*/function(_React$Component){_inherits(ReactFloaterPortal,_React$Component);var _super=_createSuper(ReactFloaterPortal);function ReactFloaterPortal(){_classCallCheck(this,ReactFloaterPortal);return _super.apply(this,arguments);}_createClass(ReactFloaterPortal,[{key:"componentDidMount",value:function componentDidMount(){if(!canUseDOM())return;if(!this.node){this.appendNode();}if(!isReact16){this.renderPortal();}}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(!canUseDOM())return;if(!isReact16){this.renderPortal();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!canUseDOM()||!this.node)return;if(!isReact16){react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].unmountComponentAtNode(this.node);}if(this.node&&this.node.parentNode===document.body){document.body.removeChild(this.node);this.node=undefined;}}},{key:"appendNode",value:function appendNode(){var _this$props=this.props,id=_this$props.id,zIndex=_this$props.zIndex;if(!this.node){this.node=document.createElement('div');/* istanbul ignore else */if(id){this.node.id=id;}if(zIndex){this.node.style.zIndex=zIndex;}document.body.appendChild(this.node);}}},{key:"renderPortal",value:function renderPortal(){if(!canUseDOM())return null;var _this$props2=this.props,children=_this$props2.children,setRef=_this$props2.setRef;if(!this.node){this.appendNode();}/* istanbul ignore else */if(isReact16){return/*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].createPortal(children,this.node);}var portal=react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].unstable_renderSubtreeIntoContainer(this,children.length>1?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",null,children):children[0],this.node);setRef(portal);return null;}},{key:"renderReact16",value:function renderReact16(){var _this$props3=this.props,hasChildren=_this$props3.hasChildren,placement=_this$props3.placement,target=_this$props3.target;if(!hasChildren){if(target||placement==='center'){return this.renderPortal();}return null;}return this.renderPortal();}},{key:"render",value:function render(){if(!isReact16){return null;}return this.renderReact16();}}]);return ReactFloaterPortal;}(react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);_defineProperty(ReactFloaterPortal,"propTypes",{children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]),hasChildren:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]),placement:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),setRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,target:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),zIndex:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)});

var FloaterArrow=/*#__PURE__*/function(_React$Component){_inherits(FloaterArrow,_React$Component);var _super=_createSuper(FloaterArrow);function FloaterArrow(){_classCallCheck(this,FloaterArrow);return _super.apply(this,arguments);}_createClass(FloaterArrow,[{key:"parentStyle",get:function get(){var _this$props=this.props,placement=_this$props.placement,styles=_this$props.styles;var length=styles.arrow.length;var arrow={pointerEvents:'none',position:'absolute',width:'100%'};/* istanbul ignore else */if(placement.startsWith('top')){arrow.bottom=0;arrow.left=0;arrow.right=0;arrow.height=length;}else if(placement.startsWith('bottom')){arrow.left=0;arrow.right=0;arrow.top=0;arrow.height=length;}else if(placement.startsWith('left')){arrow.right=0;arrow.top=0;arrow.bottom=0;}else if(placement.startsWith('right')){arrow.left=0;arrow.top=0;}return arrow;}},{key:"render",value:function render(){var _this$props2=this.props,placement=_this$props2.placement,setArrowRef=_this$props2.setArrowRef,styles=_this$props2.styles;var _styles$arrow=styles.arrow,color=_styles$arrow.color,display=_styles$arrow.display,length=_styles$arrow.length,margin=_styles$arrow.margin,position=_styles$arrow.position,spread=_styles$arrow.spread;var arrowStyles={display:display,position:position};var points;var x=spread;var y=length;/* istanbul ignore else */if(placement.startsWith('top')){points="0,0 ".concat(x/2,",").concat(y," ").concat(x,",0");arrowStyles.bottom=0;arrowStyles.marginLeft=margin;arrowStyles.marginRight=margin;}else if(placement.startsWith('bottom')){points="".concat(x,",").concat(y," ").concat(x/2,",0 0,").concat(y);arrowStyles.top=0;arrowStyles.marginLeft=margin;arrowStyles.marginRight=margin;}else if(placement.startsWith('left')){y=spread;x=length;points="0,0 ".concat(x,",").concat(y/2," 0,").concat(y);arrowStyles.right=0;arrowStyles.marginTop=margin;arrowStyles.marginBottom=margin;}else if(placement.startsWith('right')){y=spread;x=length;points="".concat(x,",").concat(y," ").concat(x,",0 0,").concat(y/2);arrowStyles.left=0;arrowStyles.marginTop=margin;arrowStyles.marginBottom=margin;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__arrow",style:this.parentStyle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span",{ref:setArrowRef,style:arrowStyles},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg",{width:x,height:y,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("polygon",{points:points,fill:color}))));}}]);return FloaterArrow;}(react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);_defineProperty(FloaterArrow,"propTypes",{placement:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,setArrowRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired});

var _excluded$1=["color","height","width"];function FloaterCloseBtn(_ref){var handleClick=_ref.handleClick,styles=_ref.styles;var color=styles.color,height=styles.height,width=styles.width,style=_objectWithoutProperties(styles,_excluded$1);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button",{"aria-label":"close",onClick:handleClick,style:style,type:"button"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg",{width:"".concat(width,"px"),height:"".concat(height,"px"),viewBox:"0 0 18 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("g",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path",{d:"M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",fill:color}))));}FloaterCloseBtn.propTypes={handleClick:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired};

function FloaterContainer(_ref){var content=_ref.content,footer=_ref.footer,handleClick=_ref.handleClick,open=_ref.open,positionWrapper=_ref.positionWrapper,showCloseButton=_ref.showCloseButton,title=_ref.title,styles=_ref.styles;var output={content:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].isValidElement(content)?content:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__content",style:styles.content},content)};if(title){output.title=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].isValidElement(title)?title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__title",style:styles.title},title);}if(footer){output.footer=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].isValidElement(footer)?footer:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__footer",style:styles.footer},footer);}if((showCloseButton||positionWrapper)&&!is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open)){output.close=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(FloaterCloseBtn,{styles:styles.close,handleClick:handleClick});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__container",style:styles.container},output.close,output.title,output.content,output.footer);}FloaterContainer.propTypes={content:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,footer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),handleClick:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,open:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),positionWrapper:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,showCloseButton:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired,title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)};

var Floater=/*#__PURE__*/function(_React$Component){_inherits(Floater,_React$Component);var _super=_createSuper(Floater);function Floater(){_classCallCheck(this,Floater);return _super.apply(this,arguments);}_createClass(Floater,[{key:"style",get:function get(){var _this$props=this.props,disableAnimation=_this$props.disableAnimation,component=_this$props.component,placement=_this$props.placement,hideArrow=_this$props.hideArrow,status=_this$props.status,styles=_this$props.styles;var length=styles.arrow.length,floater=styles.floater,floaterCentered=styles.floaterCentered,floaterClosing=styles.floaterClosing,floaterOpening=styles.floaterOpening,floaterWithAnimation=styles.floaterWithAnimation,floaterWithComponent=styles.floaterWithComponent;var element={};if(!hideArrow){if(placement.startsWith('top')){element.padding="0 0 ".concat(length,"px");}else if(placement.startsWith('bottom')){element.padding="".concat(length,"px 0 0");}else if(placement.startsWith('left')){element.padding="0 ".concat(length,"px 0 0");}else if(placement.startsWith('right')){element.padding="0 0 0 ".concat(length,"px");}}if([STATUS.OPENING,STATUS.OPEN].indexOf(status)!==-1){element=_objectSpread2(_objectSpread2({},element),floaterOpening);}if(status===STATUS.CLOSING){element=_objectSpread2(_objectSpread2({},element),floaterClosing);}if(status===STATUS.OPEN&&!disableAnimation){element=_objectSpread2(_objectSpread2({},element),floaterWithAnimation);}if(placement==='center'){element=_objectSpread2(_objectSpread2({},element),floaterCentered);}if(component){element=_objectSpread2(_objectSpread2({},element),floaterWithComponent);}return _objectSpread2(_objectSpread2({},floater),element);}},{key:"render",value:function render(){var _this$props2=this.props,component=_this$props2.component,closeFn=_this$props2.handleClick,hideArrow=_this$props2.hideArrow,setFloaterRef=_this$props2.setFloaterRef,status=_this$props2.status;var output={};var classes=['__floater'];if(component){if(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].isValidElement(component)){output.content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].cloneElement(component,{closeFn:closeFn});}else {output.content=component({closeFn:closeFn});}}else {output.content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(FloaterContainer,this.props);}if(status===STATUS.OPEN){classes.push('__floater__open');}if(!hideArrow){output.arrow=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(FloaterArrow,this.props);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{ref:setFloaterRef,className:classes.join(' '),style:this.style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div",{className:"__floater__body"},output.content,output.arrow));}}]);return Floater;}(react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);_defineProperty(Floater,"propTypes",{component:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element)]),content:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),disableAnimation:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,footer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),handleClick:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,hideArrow:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,open:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),placement:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,positionWrapper:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool).isRequired,setArrowRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,setFloaterRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,showCloseButton:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),status:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired,title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)});

var ReactFloaterWrapper=/*#__PURE__*/function(_React$Component){_inherits(ReactFloaterWrapper,_React$Component);var _super=_createSuper(ReactFloaterWrapper);function ReactFloaterWrapper(){_classCallCheck(this,ReactFloaterWrapper);return _super.apply(this,arguments);}_createClass(ReactFloaterWrapper,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,handleClick=_this$props.handleClick,handleMouseEnter=_this$props.handleMouseEnter,handleMouseLeave=_this$props.handleMouseLeave,setChildRef=_this$props.setChildRef,setWrapperRef=_this$props.setWrapperRef,style=_this$props.style,styles=_this$props.styles;var element;/* istanbul ignore else */if(children){if(react__WEBPACK_IMPORTED_MODULE_0__["default"].Children.count(children)===1){if(!/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].isValidElement(children)){element=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span",null,children);}else {var refProp=is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["function"](children.type)?'innerRef':'ref';element=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].cloneElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Children.only(children),_defineProperty({},refProp,setChildRef));}}else {element=children;}}if(!element){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span",{ref:setWrapperRef,style:_objectSpread2(_objectSpread2({},styles),style),onClick:handleClick,onMouseEnter:handleMouseEnter,onMouseLeave:handleMouseLeave},element);}}]);return ReactFloaterWrapper;}(react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);_defineProperty(ReactFloaterWrapper,"propTypes",{children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),handleClick:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,handleMouseEnter:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,handleMouseLeave:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,setChildRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,setWrapperRef:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,style:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired});

var defaultOptions={zIndex:100};function getStyles(styles){var options=deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(defaultOptions,styles.options||{});return {wrapper:{cursor:'help',display:'inline-flex',flexDirection:'column',zIndex:options.zIndex},wrapperPosition:{left:-1000,position:'absolute',top:-1000,visibility:'hidden'},floater:{display:'inline-block',filter:'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',maxWidth:300,opacity:0,position:'relative',transition:'opacity 0.3s',visibility:'hidden',zIndex:options.zIndex},floaterOpening:{opacity:1,visibility:'visible'},floaterWithAnimation:{opacity:1,transition:'opacity 0.3s, transform 0.2s',visibility:'visible'},floaterWithComponent:{maxWidth:'100%'},floaterClosing:{opacity:0,visibility:'visible'},floaterCentered:{left:'50%',position:'fixed',top:'50%',transform:'translate(-50%, -50%)'},container:{backgroundColor:'#fff',color:'#666',minHeight:60,minWidth:200,padding:20,position:'relative',zIndex:10},title:{borderBottom:'1px solid #555',color:'#555',fontSize:18,marginBottom:5,paddingBottom:6,paddingRight:18},content:{fontSize:15},close:{backgroundColor:'transparent',border:0,borderRadius:0,color:'#555',fontSize:0,height:15,outline:'none',padding:10,position:'absolute',right:0,top:0,width:15,WebkitAppearance:'none'},footer:{borderTop:'1px solid #ccc',fontSize:13,marginTop:10,paddingTop:5},arrow:{color:'#fff',display:'inline-flex',length:16,margin:8,position:'absolute',spread:32},options:options};}

var _excluded=["arrow","flip","offset"];var POSITIONING_PROPS=['position','top','right','bottom','left'];var ReactFloater=/*#__PURE__*/function(_React$Component){_inherits(ReactFloater,_React$Component);var _super=_createSuper(ReactFloater);function ReactFloater(props){var _this;_classCallCheck(this,ReactFloater);_this=_super.call(this,props);/* istanbul ignore else */_defineProperty(_assertThisInitialized(_this),"setArrowRef",function(ref){_this.arrowRef=ref;});_defineProperty(_assertThisInitialized(_this),"setChildRef",function(ref){_this.childRef=ref;});_defineProperty(_assertThisInitialized(_this),"setFloaterRef",function(ref){_this.floaterRef=ref;});_defineProperty(_assertThisInitialized(_this),"setWrapperRef",function(ref){_this.wrapperRef=ref;});_defineProperty(_assertThisInitialized(_this),"handleTransitionEnd",function(){var status=_this.state.status;var callback=_this.props.callback;/* istanbul ignore else */if(_this.wrapperPopper){_this.wrapperPopper.instance.update();}_this.setState({status:status===STATUS.OPENING?STATUS.OPEN:STATUS.IDLE},function(){var newStatus=_this.state.status;callback(newStatus===STATUS.OPEN?'open':'close',_this.props);});});_defineProperty(_assertThisInitialized(_this),"handleClick",function(){var _this$props=_this.props,event=_this$props.event,open=_this$props.open;if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open))return;var _this$state=_this.state,positionWrapper=_this$state.positionWrapper,status=_this$state.status;/* istanbul ignore else */if(_this.event==='click'||_this.event==='hover'&&positionWrapper){log({title:'click',data:[{event:event,status:status===STATUS.OPEN?'closing':'opening'}],debug:_this.debug});_this.toggle();}});_defineProperty(_assertThisInitialized(_this),"handleMouseEnter",function(){var _this$props2=_this.props,event=_this$props2.event,open=_this$props2.open;if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open)||isMobile())return;var status=_this.state.status;/* istanbul ignore else */if(_this.event==='hover'&&status===STATUS.IDLE){log({title:'mouseEnter',data:[{key:'originalEvent',value:event}],debug:_this.debug});clearTimeout(_this.eventDelayTimeout);_this.toggle();}});_defineProperty(_assertThisInitialized(_this),"handleMouseLeave",function(){var _this$props3=_this.props,event=_this$props3.event,eventDelay=_this$props3.eventDelay,open=_this$props3.open;if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open)||isMobile())return;var _this$state2=_this.state,status=_this$state2.status,positionWrapper=_this$state2.positionWrapper;/* istanbul ignore else */if(_this.event==='hover'){log({title:'mouseLeave',data:[{key:'originalEvent',value:event}],debug:_this.debug});if(!eventDelay){_this.toggle(STATUS.IDLE);}else if([STATUS.OPENING,STATUS.OPEN].indexOf(status)!==-1&&!positionWrapper&&!_this.eventDelayTimeout){_this.eventDelayTimeout=setTimeout(function(){delete _this.eventDelayTimeout;_this.toggle();},eventDelay*1000);}}});_this.state={currentPlacement:props.placement,needsUpdate:false,positionWrapper:props.wrapperOptions.position&&!!props.target,status:STATUS.INIT,statusWrapper:STATUS.INIT};_this._isMounted=false;_this.hasMounted=false;if(canUseDOM()){window.addEventListener('load',function(){if(_this.popper){_this.popper.instance.update();}if(_this.wrapperPopper){_this.wrapperPopper.instance.update();}});}return _this;}_createClass(ReactFloater,[{key:"componentDidMount",value:function componentDidMount(){if(!canUseDOM())return;var positionWrapper=this.state.positionWrapper;var _this$props5=this.props,children=_this$props5.children,open=_this$props5.open,target=_this$props5.target;this._isMounted=true;log({title:'init',data:{hasChildren:!!children,hasTarget:!!target,isControlled:is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open),positionWrapper:positionWrapper,target:this.target,floater:this.floaterRef},debug:this.debug});if(!this.hasMounted){this.initPopper();this.hasMounted=true;}if(!children&&target&&!is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open));}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(!canUseDOM())return;var _this$props6=this.props,autoOpen=_this$props6.autoOpen,open=_this$props6.open,target=_this$props6.target,wrapperOptions=_this$props6.wrapperOptions;var _treeChanges=(0,tree_changes__WEBPACK_IMPORTED_MODULE_5__["default"])(prevState,this.state),changedFrom=_treeChanges.changedFrom,changed=_treeChanges.changed;if(prevProps.open!==open){var forceStatus;// always follow `open` in controlled mode
if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"]["boolean"](open)){forceStatus=open?STATUS.OPENING:STATUS.CLOSING;}this.toggle(forceStatus);}if(prevProps.wrapperOptions.position!==wrapperOptions.position||prevProps.target!==target){this.changeWrapperPosition(this.props);}if(changed('status',STATUS.IDLE)&&open){this.toggle(STATUS.OPEN);}else if(changedFrom('status',STATUS.INIT,STATUS.IDLE)&&autoOpen){this.toggle(STATUS.OPEN);}if(this.popper&&changed('status',STATUS.OPENING)){this.popper.instance.update();}if(this.floaterRef&&(changed('status',STATUS.OPENING)||changed('status',STATUS.CLOSING))){once(this.floaterRef,'transitionend',this.handleTransitionEnd);}if(changed('needsUpdate',true)){this.rebuildPopper();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(!canUseDOM())return;this._isMounted=false;if(this.popper){this.popper.instance.destroy();}if(this.wrapperPopper){this.wrapperPopper.instance.destroy();}}},{key:"initPopper",value:function initPopper(){var _this2=this;var target=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.target;var positionWrapper=this.state.positionWrapper;var _this$props7=this.props,disableFlip=_this$props7.disableFlip,getPopper=_this$props7.getPopper,hideArrow=_this$props7.hideArrow,offset=_this$props7.offset,placement=_this$props7.placement,wrapperOptions=_this$props7.wrapperOptions;var flipBehavior=placement==='top'||placement==='bottom'?'flip':['right','bottom-end','top-end','left','top-start','bottom-start'];/* istanbul ignore else */if(placement==='center'){this.setState({status:STATUS.IDLE});}else if(target&&this.floaterRef){var _this$options=this.options,arrow=_this$options.arrow,flip=_this$options.flip,offsetOptions=_this$options.offset,rest=_objectWithoutProperties(_this$options,_excluded);new popper_js__WEBPACK_IMPORTED_MODULE_6__["default"](target,this.floaterRef,{placement:placement,modifiers:_objectSpread2({arrow:_objectSpread2({enabled:!hideArrow,element:this.arrowRef},arrow),flip:_objectSpread2({enabled:!disableFlip,behavior:flipBehavior},flip),offset:_objectSpread2({offset:"0, ".concat(offset,"px")},offsetOptions)},rest),onCreate:function onCreate(data){var _this2$floaterRef;_this2.popper=data;if(!((_this2$floaterRef=_this2.floaterRef)!==null&&_this2$floaterRef!==void 0&&_this2$floaterRef.isConnected)){_this2.setState({needsUpdate:true});return;}getPopper(data,'floater');if(_this2._isMounted){_this2.setState({currentPlacement:data.placement,status:STATUS.IDLE});}if(placement!==data.placement){setTimeout(function(){data.instance.update();},1);}},onUpdate:function onUpdate(data){_this2.popper=data;var currentPlacement=_this2.state.currentPlacement;if(_this2._isMounted&&data.placement!==currentPlacement){_this2.setState({currentPlacement:data.placement});}}});}if(positionWrapper){var wrapperOffset=!is_lite__WEBPACK_IMPORTED_MODULE_3__["default"].undefined(wrapperOptions.offset)?wrapperOptions.offset:0;new popper_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.target,this.wrapperRef,{placement:wrapperOptions.placement||placement,modifiers:{arrow:{enabled:false},offset:{offset:"0, ".concat(wrapperOffset,"px")},flip:{enabled:false}},onCreate:function onCreate(data){_this2.wrapperPopper=data;if(_this2._isMounted){_this2.setState({statusWrapper:STATUS.IDLE});}getPopper(data,'wrapper');if(placement!==data.placement){setTimeout(function(){data.instance.update();},1);}}});}}},{key:"rebuildPopper",value:function rebuildPopper(){var _this3=this;this.floaterRefInterval=setInterval(function(){var _this3$floaterRef;if((_this3$floaterRef=_this3.floaterRef)!==null&&_this3$floaterRef!==void 0&&_this3$floaterRef.isConnected){clearInterval(_this3.floaterRefInterval);_this3.setState({needsUpdate:false});_this3.initPopper();}},50);}},{key:"changeWrapperPosition",value:function changeWrapperPosition(_ref){var target=_ref.target,wrapperOptions=_ref.wrapperOptions;this.setState({positionWrapper:wrapperOptions.position&&!!target});}},{key:"toggle",value:function toggle(forceStatus){var status=this.state.status;var nextStatus=status===STATUS.OPEN?STATUS.CLOSING:STATUS.OPENING;if(!is_lite__WEBPACK_IMPORTED_MODULE_3__["default"].undefined(forceStatus)){nextStatus=forceStatus;}this.setState({status:nextStatus});}},{key:"debug",get:function get(){var debug=this.props.debug;return debug||canUseDOM()&&'ReactFloaterDebug'in window&&!!window.ReactFloaterDebug;}},{key:"event",get:function get(){var _this$props8=this.props,disableHoverToClick=_this$props8.disableHoverToClick,event=_this$props8.event;if(event==='hover'&&isMobile()&&!disableHoverToClick){return 'click';}return event;}},{key:"options",get:function get(){var options=this.props.options;return deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(DEFAULTS,options||{});}},{key:"styles",get:function get(){var _this4=this;var _this$state3=this.state,status=_this$state3.status,positionWrapper=_this$state3.positionWrapper,statusWrapper=_this$state3.statusWrapper;var styles=this.props.styles;var nextStyles=deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(getStyles(styles),styles);if(positionWrapper){var wrapperStyles;if(!([STATUS.IDLE].indexOf(status)!==-1)||!([STATUS.IDLE].indexOf(statusWrapper)!==-1)){wrapperStyles=nextStyles.wrapperPosition;}else {wrapperStyles=this.wrapperPopper.styles;}nextStyles.wrapper=_objectSpread2(_objectSpread2({},nextStyles.wrapper),wrapperStyles);}/* istanbul ignore else */if(this.target){var targetStyles=window.getComputedStyle(this.target);/* istanbul ignore else */if(this.wrapperStyles){nextStyles.wrapper=_objectSpread2(_objectSpread2({},nextStyles.wrapper),this.wrapperStyles);}else if(!(['relative','static'].indexOf(targetStyles.position)!==-1)){this.wrapperStyles={};if(!positionWrapper){POSITIONING_PROPS.forEach(function(d){_this4.wrapperStyles[d]=targetStyles[d];});nextStyles.wrapper=_objectSpread2(_objectSpread2({},nextStyles.wrapper),this.wrapperStyles);this.target.style.position='relative';this.target.style.top='auto';this.target.style.right='auto';this.target.style.bottom='auto';this.target.style.left='auto';}}}return nextStyles;}},{key:"target",get:function get(){if(!canUseDOM())return null;var target=this.props.target;if(target){if(is_lite__WEBPACK_IMPORTED_MODULE_3__["default"].domElement(target)){return target;}return document.querySelector(target);}return this.childRef||this.wrapperRef;}},{key:"render",value:function render(){var _this$state4=this.state,currentPlacement=_this$state4.currentPlacement,positionWrapper=_this$state4.positionWrapper,status=_this$state4.status;var _this$props9=this.props,children=_this$props9.children,component=_this$props9.component,content=_this$props9.content,disableAnimation=_this$props9.disableAnimation,footer=_this$props9.footer,hideArrow=_this$props9.hideArrow,id=_this$props9.id,open=_this$props9.open,showCloseButton=_this$props9.showCloseButton,style=_this$props9.style,target=_this$props9.target,title=_this$props9.title;var wrapper=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ReactFloaterWrapper,{handleClick:this.handleClick,handleMouseEnter:this.handleMouseEnter,handleMouseLeave:this.handleMouseLeave,setChildRef:this.setChildRef,setWrapperRef:this.setWrapperRef,style:style,styles:this.styles.wrapper},children);var output={};if(positionWrapper){output.wrapperInPortal=wrapper;}else {output.wrapperAsChildren=wrapper;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ReactFloaterPortal,{hasChildren:!!children,id:id,placement:currentPlacement,setRef:this.setFloaterRef,target:target,zIndex:this.styles.options.zIndex},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Floater,{component:component,content:content,disableAnimation:disableAnimation,footer:footer,handleClick:this.handleClick,hideArrow:hideArrow||currentPlacement==='center',open:open,placement:currentPlacement,positionWrapper:positionWrapper,setArrowRef:this.setArrowRef,setFloaterRef:this.setFloaterRef,showCloseButton:showCloseButton,status:status,styles:this.styles,title:title}),output.wrapperInPortal),output.wrapperAsChildren);}}]);return ReactFloater;}(react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);_defineProperty(ReactFloater,"propTypes",{autoOpen:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),callback:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),component:isRequiredIf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element)]),function(props){return !props.content;}),content:isRequiredIf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),function(props){return !props.component;}),debug:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),disableAnimation:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),disableFlip:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),disableHoverToClick:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),event:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['hover','click']),eventDelay:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),footer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),getPopper:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),hideArrow:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),id:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)]),offset:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),open:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),options:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),placement:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end','auto','center']),showCloseButton:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),style:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),styles:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),target:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),wrapperOptions:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({offset:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),placement:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end','auto']),position:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)})});_defineProperty(ReactFloater,"defaultProps",{autoOpen:false,callback:noop,debug:false,disableAnimation:false,disableFlip:false,disableHoverToClick:false,event:'click',eventDelay:0.4,getPopper:noop,hideArrow:false,offset:15,placement:'bottom',showCloseButton:false,styles:{},target:null,wrapperOptions:{position:false}});




/***/ }),

/***/ "./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/helpers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/helpers.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNull: () => (/* binding */ isNull),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isRegex: () => (/* binding */ isRegex),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-types
function isOfType(type) {
    return function (value) { return typeof value === type; };
}
// eslint-disable-next-line @typescript-eslint/ban-types
var isFunction = isOfType('function');
var isNull = function (value) {
    return value === null;
};
var isRegex = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp';
};
var isObject = function (value) {
    return !isUndefined(value) && !isNull(value) && (isFunction(value) || typeof value === 'object');
};
var isUndefined = isOfType('undefined');
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ equal)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/helpers.js");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

function equalArray(left, right) {
    var length = left.length;
    if (length !== right.length) {
        return false;
    }
    for (var index = length; index-- !== 0;) {
        if (!equal(left[index], right[index])) {
            return false;
        }
    }
    return true;
}
function equalArrayBuffer(left, right) {
    if (left.byteLength !== right.byteLength) {
        return false;
    }
    var view1 = new DataView(left.buffer);
    var view2 = new DataView(right.buffer);
    var index = left.byteLength;
    while (index--) {
        if (view1.getUint8(index) !== view2.getUint8(index)) {
            return false;
        }
    }
    return true;
}
function equalMap(left, right) {
    var e_1, _a, e_2, _b;
    if (left.size !== right.size) {
        return false;
    }
    try {
        for (var _c = __values(left.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var index = _d.value;
            if (!right.has(index[0])) {
                return false;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _e = __values(left.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var index = _f.value;
            if (!equal(index[1], right.get(index[0]))) {
                return false;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return true;
}
function equalSet(left, right) {
    var e_3, _a;
    if (left.size !== right.size) {
        return false;
    }
    try {
        for (var _b = __values(left.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var index = _c.value;
            if (!right.has(index[0])) {
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return true;
}
function equal(left, right) {
    if (left === right) {
        return true;
    }
    if (left && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(left) && right && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(right)) {
        if (left.constructor !== right.constructor) {
            return false;
        }
        if (Array.isArray(left) && Array.isArray(right)) {
            return equalArray(left, right);
        }
        if (left instanceof Map && right instanceof Map) {
            return equalMap(left, right);
        }
        if (left instanceof Set && right instanceof Set) {
            return equalSet(left, right);
        }
        if (ArrayBuffer.isView(left) && ArrayBuffer.isView(right)) {
            return equalArrayBuffer(left, right);
        }
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isRegex)(left) && (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isRegex)(right)) {
            return left.source === right.source && left.flags === right.flags;
        }
        if (left.valueOf !== Object.prototype.valueOf) {
            return left.valueOf() === right.valueOf();
        }
        if (left.toString !== Object.prototype.toString) {
            return left.toString() === right.toString();
        }
        var leftKeys = Object.keys(left);
        var rightKeys = Object.keys(right);
        if (leftKeys.length !== rightKeys.length) {
            return false;
        }
        for (var index = leftKeys.length; index-- !== 0;) {
            if (!Object.prototype.hasOwnProperty.call(right, leftKeys[index])) {
                return false;
            }
        }
        for (var index = leftKeys.length; index-- !== 0;) {
            var key = leftKeys[index];
            if (key === '_owner' && left.$$typeof) {
                // React-specific: avoid traversing React elements' _owner.
                //  _owner contains circular references
                // and is not needed when comparing the actual elements (and not their owners)
                // eslint-disable-next-line no-continue
                continue;
            }
            if (!equal(left[key], right[key])) {
                return false;
            }
        }
        return true;
    }
    if (Number.isNaN(left) && Number.isNaN(right)) {
        return true;
    }
    return left === right;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-floater/node_modules/is-lite/esm/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/is-lite/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getObjectType: () => (/* binding */ getObjectType)
/* harmony export */ });
var DOM_PROPERTIES_TO_CHECK = [
    'innerHTML',
    'ownerDocument',
    'style',
    'attributes',
    'nodeValue',
];
var objectTypes = [
    'Array',
    'ArrayBuffer',
    'AsyncFunction',
    'AsyncGenerator',
    'AsyncGeneratorFunction',
    'Date',
    'Error',
    'Function',
    'Generator',
    'GeneratorFunction',
    'HTMLElement',
    'Map',
    'Object',
    'Promise',
    'RegExp',
    'Set',
    'WeakMap',
    'WeakSet',
];
var primitiveTypes = [
    'bigint',
    'boolean',
    'null',
    'number',
    'string',
    'symbol',
    'undefined',
];
function getObjectType(value) {
    var objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
    if (/HTML\w+Element/.test(objectTypeName)) {
        return 'HTMLElement';
    }
    if (isObjectType(objectTypeName)) {
        return objectTypeName;
    }
    return undefined;
}
function isObjectOfType(type) {
    return function (value) { return getObjectType(value) === type; };
}
function isObjectType(name) {
    return objectTypes.includes(name);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isOfType(type) {
    return function (value) { return typeof value === type; };
}
function isPrimitiveType(name) {
    return primitiveTypes.includes(name);
}
function is(value) {
    if (value === null) {
        return 'null';
    }
    switch (typeof value) {
        case 'bigint':
            return 'bigint';
        case 'boolean':
            return 'boolean';
        case 'number':
            return 'number';
        case 'string':
            return 'string';
        case 'symbol':
            return 'symbol';
        case 'undefined':
            return 'undefined';
        default:
    }
    if (is.array(value)) {
        return 'Array';
    }
    if (is.plainFunction(value)) {
        return 'Function';
    }
    var tagType = getObjectType(value);
    /* istanbul ignore else */
    if (tagType) {
        return tagType;
    }
    /* istanbul ignore next */
    return 'Object';
}
is.array = Array.isArray;
is.arrayOf = function (target, predicate) {
    if (!is.array(target) && !is.function(predicate)) {
        return false;
    }
    return target.every(function (d) { return predicate(d); });
};
is.asyncGeneratorFunction = function (value) {
    return getObjectType(value) === 'AsyncGeneratorFunction';
};
// eslint-disable-next-line @typescript-eslint/ban-types
is.asyncFunction = isObjectOfType('AsyncFunction');
is.bigint = isOfType('bigint');
is.boolean = function (value) {
    return value === true || value === false;
};
is.date = isObjectOfType('Date');
is.defined = function (value) { return !is.undefined(value); };
is.domElement = function (value) {
    return (is.object(value) &&
        !is.plainObject(value) &&
        value.nodeType === 1 &&
        is.string(value.nodeName) &&
        DOM_PROPERTIES_TO_CHECK.every(function (property) { return property in value; }));
};
is.empty = function (value) {
    return ((is.string(value) && value.length === 0) ||
        (is.array(value) && value.length === 0) ||
        (is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0) ||
        (is.set(value) && value.size === 0) ||
        (is.map(value) && value.size === 0));
};
is.error = isObjectOfType('Error');
// eslint-disable-next-line @typescript-eslint/ban-types
is.function = isOfType('function');
is.generator = function (value) {
    return (is.iterable(value) &&
        is.function(value.next) &&
        is.function(value.throw));
};
is.generatorFunction = isObjectOfType('GeneratorFunction');
is.instanceOf = function (instance, class_) {
    if (!instance || !class_) {
        return false;
    }
    return Object.getPrototypeOf(instance) === class_.prototype;
};
is.iterable = function (value) {
    return (!is.nullOrUndefined(value) && is.function(value[Symbol.iterator]));
};
is.map = isObjectOfType('Map');
is.nan = function (value) {
    return Number.isNaN(value);
};
is.null = function (value) {
    return value === null;
};
is.nullOrUndefined = function (value) {
    return is.null(value) || is.undefined(value);
};
is.number = function (value) {
    return isOfType('number')(value) && !is.nan(value);
};
is.numericString = function (value) {
    return is.string(value) && value.length > 0 && !Number.isNaN(Number(value));
};
// eslint-disable-next-line @typescript-eslint/ban-types
is.object = function (value) {
    return !is.nullOrUndefined(value) && (is.function(value) || typeof value === 'object');
};
is.oneOf = function (target, value) {
    if (!is.array(target)) {
        return false;
    }
    // eslint-disable-next-line unicorn/prefer-includes
    return target.indexOf(value) > -1;
};
// eslint-disable-next-line @typescript-eslint/ban-types
is.plainFunction = isObjectOfType('Function');
is.plainObject = function (value) {
    if (getObjectType(value) !== 'Object') {
        return false;
    }
    var prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
};
is.primitive = function (value) {
    return is.null(value) || isPrimitiveType(typeof value);
};
is.promise = isObjectOfType('Promise');
is.propertyOf = function (target, key, predicate) {
    if (!is.object(target) || !key) {
        return false;
    }
    var value = target[key];
    if (is.function(predicate)) {
        return predicate(value);
    }
    return is.defined(value);
};
is.regexp = isObjectOfType('RegExp');
is.set = isObjectOfType('Set');
is.string = isOfType('string');
is.symbol = isOfType('symbol');
is.undefined = isOfType('undefined');
is.weakMap = isObjectOfType('WeakMap');
is.weakSet = isObjectOfType('WeakSet');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (is);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-floater/node_modules/tree-changes/esm/helpers.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/tree-changes/esm/helpers.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canHaveLength: () => (/* binding */ canHaveLength),
/* harmony export */   checkEquality: () => (/* binding */ checkEquality),
/* harmony export */   compareNumbers: () => (/* binding */ compareNumbers),
/* harmony export */   compareValues: () => (/* binding */ compareValues),
/* harmony export */   getIterables: () => (/* binding */ getIterables),
/* harmony export */   hasEntry: () => (/* binding */ hasEntry),
/* harmony export */   hasExtraKeys: () => (/* binding */ hasExtraKeys),
/* harmony export */   hasValue: () => (/* binding */ hasValue),
/* harmony export */   includesOrEqualsTo: () => (/* binding */ includesOrEqualsTo),
/* harmony export */   isEqualPredicate: () => (/* binding */ isEqualPredicate),
/* harmony export */   isSameType: () => (/* binding */ isSameType),
/* harmony export */   nested: () => (/* binding */ nested)
/* harmony export */ });
/* harmony import */ var _gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gilbarbara/deep-equal */ "./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/index.js");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-lite */ "./node_modules/react-floater/node_modules/is-lite/esm/index.js");


function canHaveLength() {
    var arguments_ = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arguments_[_i] = arguments[_i];
    }
    return arguments_.every(function (d) { return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(d); });
}
function checkEquality(left, right, value) {
    if (!isSameType(left, right)) {
        return false;
    }
    if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array)) {
        return !left.some(hasValue(value)) && right.some(hasValue(value));
    }
    /* istanbul ignore else */
    if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
        return (!Object.entries(left).some(hasEntry(value)) && Object.entries(right).some(hasEntry(value)));
    }
    return right === value;
}
function compareNumbers(previousData, data, options) {
    var actual = options.actual, key = options.key, previous = options.previous, type = options.type;
    var left = nested(previousData, key);
    var right = nested(data, key);
    var changed = [left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number) && (type === 'increased' ? left < right : left > right);
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].undefined(actual)) {
        changed = changed && right === actual;
    }
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].undefined(previous)) {
        changed = changed && left === previous;
    }
    return changed;
}
function compareValues(previousData, data, options) {
    var key = options.key, type = options.type, value = options.value;
    var left = nested(previousData, key);
    var right = nested(data, key);
    var primary = type === 'added' ? left : right;
    var secondary = type === 'added' ? right : left;
    // console.log({ primary, secondary });
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].nullOrUndefined(value)) {
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(primary)) {
            // check if nested data matches
            if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(primary) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(primary)) {
                return checkEquality(primary, secondary, value);
            }
        }
        else {
            return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(secondary, value);
        }
        return false;
    }
    if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array)) {
        return !secondary.every(isEqualPredicate(primary));
    }
    if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
        return hasExtraKeys(Object.keys(primary), Object.keys(secondary));
    }
    return (![left, right].every(function (d) { return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].primitive(d) && is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(d); }) &&
        (type === 'added'
            ? !is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(left) && is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(right)
            : is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(left) && !is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(right)));
}
function getIterables(previousData, data, _a) {
    var _b = _a === void 0 ? {} : _a, key = _b.key;
    var left = nested(previousData, key);
    var right = nested(data, key);
    if (!isSameType(left, right)) {
        throw new TypeError('Inputs have different types');
    }
    if (!canHaveLength(left, right)) {
        throw new TypeError("Inputs don't have length");
    }
    if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
        left = Object.keys(left);
        right = Object.keys(right);
    }
    return [left, right];
}
function hasEntry(input) {
    return function (_a) {
        var key = _a[0], value = _a[1];
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(input)) {
            return ((0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value) ||
                input.some(function (d) { return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value) || (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(value) && isEqualPredicate(value)(d)); }));
        }
        /* istanbul ignore else */
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input) && input[key]) {
            return !!input[key] && (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input[key], value);
        }
        return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value);
    };
}
function hasExtraKeys(left, right) {
    return right.some(function (d) { return !left.includes(d); });
}
function hasValue(input) {
    return function (value) {
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(input)) {
            return input.some(function (d) { return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value) || (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(value) && isEqualPredicate(value)(d)); });
        }
        return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value);
    };
}
function includesOrEqualsTo(previousValue, value) {
    return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(previousValue)
        ? previousValue.some(function (d) { return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value); })
        : (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(previousValue, value);
}
function isEqualPredicate(data) {
    return function (value) { return data.some(function (d) { return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value); }); };
}
function isSameType() {
    var arguments_ = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arguments_[_i] = arguments[_i];
    }
    return (arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array) ||
        arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number) ||
        arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject) ||
        arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string));
}
function nested(data, property) {
    /* istanbul ignore else */
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(data) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(data)) {
        /* istanbul ignore else */
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(property)) {
            var props = property.split('.');
            return props.reduce(function (acc, d) { return acc && acc[d]; }, data);
        }
        /* istanbul ignore else */
        if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(property)) {
            return data[property];
        }
        return data;
    }
    return data;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/react-floater/node_modules/tree-changes/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-floater/node_modules/tree-changes/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ treeChanges)
/* harmony export */ });
/* harmony import */ var _gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gilbarbara/deep-equal */ "./node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/index.js");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-lite */ "./node_modules/react-floater/node_modules/is-lite/esm/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/react-floater/node_modules/tree-changes/esm/helpers.js");



function treeChanges(previousData, data) {
    if ([previousData, data].some(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].nullOrUndefined)) {
        throw new Error('Missing required parameters');
    }
    if (![previousData, data].every(function (d) { return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(d); })) {
        throw new Error('Expected plain objects or array');
    }
    var added = function (key, value) {
        try {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.compareValues)(previousData, data, { key: key, type: 'added', value: value });
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    var changed = function (key, actual, previous) {
        try {
            var left = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nested)(previousData, key);
            var right = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nested)(data, key);
            var hasActual = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(actual);
            var hasPrevious = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(previous);
            if (hasActual || hasPrevious) {
                var leftComparator = hasPrevious
                    ? (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includesOrEqualsTo)(previous, left)
                    : !(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includesOrEqualsTo)(actual, left);
                var rightComparator = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includesOrEqualsTo)(actual, right);
                return leftComparator && rightComparator;
            }
            if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array) || [left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
                return !(0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(left, right);
            }
            return left !== right;
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    var changedFrom = function (key, previous, actual) {
        if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
            return false;
        }
        try {
            var left = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nested)(previousData, key);
            var right = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.nested)(data, key);
            var hasActual = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(actual);
            return ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includesOrEqualsTo)(previous, left) &&
                (hasActual ? (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.includesOrEqualsTo)(actual, right) : !hasActual));
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    /**
     * @deprecated
     * Use "changed" instead
     */
    var changedTo = function (key, actual) {
        if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
            return false;
        }
        /* istanbul ignore next */
        if (true) {
            // eslint-disable-next-line no-console
            console.warn('`changedTo` is deprecated! Replace it with `change`');
        }
        return changed(key, actual);
    };
    var decreased = function (key, actual, previous) {
        if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
            return false;
        }
        try {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.compareNumbers)(previousData, data, { key: key, actual: actual, previous: previous, type: 'decreased' });
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    var emptied = function (key) {
        try {
            var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getIterables)(previousData, data, { key: key }), left = _a[0], right = _a[1];
            return !!left.length && !right.length;
        }
        catch (_b) {
            /* istanbul ignore next */
            return false;
        }
    };
    var filled = function (key) {
        try {
            var _a = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getIterables)(previousData, data, { key: key }), left = _a[0], right = _a[1];
            return !left.length && !!right.length;
        }
        catch (_b) {
            /* istanbul ignore next */
            return false;
        }
    };
    var increased = function (key, actual, previous) {
        if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
            return false;
        }
        try {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.compareNumbers)(previousData, data, { key: key, actual: actual, previous: previous, type: 'increased' });
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    var removed = function (key, value) {
        try {
            return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.compareValues)(previousData, data, { key: key, type: 'removed', value: value });
        }
        catch (_a) {
            /* istanbul ignore next */
            return false;
        }
    };
    return { added: added, changed: changed, changedFrom: changedFrom, changedTo: changedTo, decreased: decreased, emptied: emptied, filled: filled, increased: increased, removed: removed };
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-innertext/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-innertext/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";

var hasProps = function (jsx) {
    return Object.prototype.hasOwnProperty.call(jsx, 'props');
};
var reduceJsxToString = function (previous, current) {
    return previous + innerText(current);
};
var innerText = function (jsx) {
    if (jsx === null ||
        typeof jsx === 'boolean' ||
        typeof jsx === 'undefined') {
        return '';
    }
    if (typeof jsx === 'number') {
        return jsx.toString();
    }
    if (typeof jsx === 'string') {
        return jsx;
    }
    if (Array.isArray(jsx)) {
        return jsx.reduce(reduceJsxToString, '');
    }
    if (hasProps(jsx) &&
        Object.prototype.hasOwnProperty.call(jsx.props, 'children')) {
        return innerText(jsx.props.children);
    }
    return '';
};
innerText.default = innerText;
module.exports = innerText;


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

/***/ "./node_modules/scroll/index.js":
/*!**************************************!*\
  !*** ./node_modules/scroll/index.js ***!
  \**************************************/
/***/ ((module) => {

var E_NOSCROLL = new Error('Element already at target scroll position')
var E_CANCELLED = new Error('Scroll cancelled')
var min = Math.min
var ms = Date.now

module.exports = {
  left: make('scrollLeft'),
  top: make('scrollTop')
}

function make (prop) {
  return function scroll (el, to, opts, cb) {
    opts = opts || {}

    if (typeof opts == 'function') cb = opts, opts = {}
    if (typeof cb != 'function') cb = noop

    var start = ms()
    var from = el[prop]
    var ease = opts.ease || inOutSine
    var duration = !isNaN(opts.duration) ? +opts.duration : 350
    var cancelled = false

    return from === to ?
      cb(E_NOSCROLL, el[prop]) :
      requestAnimationFrame(animate), cancel

    function cancel () {
      cancelled = true
    }

    function animate (timestamp) {
      if (cancelled) return cb(E_CANCELLED, el[prop])

      var now = ms()
      var time = min(1, ((now - start) / duration))
      var eased = ease(time)

      el[prop] = (eased * (to - from)) + from

      time < 1 ?
        requestAnimationFrame(animate) :
        requestAnimationFrame(function () {
          cb(null, el[prop])
        })
    }
  }
}

function inOutSine (n) {
  return 0.5 * (1 - Math.cos(Math.PI * n))
}

function noop () {}


/***/ }),

/***/ "./node_modules/scrollparent/scrollparent.js":
/*!***************************************************!*\
  !*** ./node_modules/scrollparent/scrollparent.js ***!
  \***************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function isScrolling(node) {
    var overflow = getComputedStyle(node, null).getPropertyValue("overflow");

    return overflow.indexOf("scroll") > -1 || overflow.indexOf("auto") > - 1;
  }

  function scrollParent(node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return undefined;
    }

    var current = node.parentNode;
    while (current.parentNode) {
      if (isScrolling(current)) {
        return current;
      }

      current = current.parentNode;
    }

    return document.scrollingElement || document.documentElement;
  }

  return scrollParent;
}));

/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-guide.tsx":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-guide.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataSourceSelectionGuide: () => (/* binding */ DataSourceSelectionGuide)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _core_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guide */ "./jimu-ui/basic/lib/guide/components/core/guide.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/basic/lib/guide/types.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const stepsJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceI18nPlaceholdersInObject(__webpack_require__(/*! ./ds-selection-steps.json */ "./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-steps.json"), jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(), jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
function usePreviousAppState(value) {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
function isDatasourceAdded(prevDSInfo, currentDSInfo) {
    if (!prevDSInfo || !currentDSInfo)
        return false;
    const prevDatasourceLength = Object.keys(prevDSInfo !== null && prevDSInfo !== void 0 ? prevDSInfo : {}).length;
    const currentDatasourceLength = Object.keys(currentDSInfo !== null && currentDSInfo !== void 0 ? currentDSInfo : {}).length;
    return currentDatasourceLength > prevDatasourceLength;
}
const _DataSourceSelectionGuide = (props) => {
    const { dataSourcesInfo, widgetDs, widgetJson } = props;
    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [conditionalStepIndexes, setConditionalStepIndexes] = useState({ 0: 0, 2: 0 });
    const prevDataSourcesInfo = usePreviousAppState(dataSourcesInfo);
    const isDsAdded = isDatasourceAdded(prevDataSourcesInfo, dataSourcesInfo);
    const handleClick = (e, step, index) => {
        var _a;
        if (index === 0) {
            if (Object.keys(dataSourcesInfo).length === 0) {
                setStepIndex(1);
            }
            else {
                setStepIndex(2);
            }
        }
        else if (index === 1) {
            setRun(false);
        }
        else {
            setStepIndex(index + 1);
        }
        (_a = props === null || props === void 0 ? void 0 : props.onActionClick) === null || _a === void 0 ? void 0 : _a.call(props, e, step, index);
    };
    const handleChange = (data) => {
        const { index, event } = data;
        if (index === 2 && event === _types__WEBPACK_IMPORTED_MODULE_2__.EVENTS.TOOLTIP) {
            setDisabled(true);
        }
        props === null || props === void 0 ? void 0 : props.onStepChange(data);
    };
    useEffect(() => {
        var _a;
        // conditional steps for map widget
        if (props.stepIndex === 0 && ((_a = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _a === void 0 ? void 0 : _a.name) === 'arcgis-map') {
            setConditionalStepIndexes({ 0: 1, 2: 1 });
        }
    }, [widgetJson, props.stepIndex]);
    useEffect(() => {
        setRun(props.run);
    }, [props.run]);
    useEffect(() => {
        setStepIndex(props.stepIndex);
    }, [props.stepIndex]);
    useEffect(() => {
        // detect datasource selection on widget
        if (run && widgetDs) {
            setDisabled(!widgetDs.length);
        }
        // detect adding datasource
        if (!run && isDsAdded) {
            setStepIndex(2);
            setRun(true);
        }
    }, [widgetDs, isDsAdded, run]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core_guide__WEBPACK_IMPORTED_MODULE_1__.Guide, Object.assign({}, props, { run: run, stepIndex: stepIndex, steps: stepsJson.steps, conditionalStepIndexes: conditionalStepIndexes, onActionClick: handleClick, onStepChange: handleChange, disabled: disabled, isInjected: true })));
};
const mapStateToProps = (state, ownProps) => {
    var _a, _b, _c, _d, _e;
    const widgetId = (_a = ownProps === null || ownProps === void 0 ? void 0 : ownProps.widgetJson) === null || _a === void 0 ? void 0 : _a.id;
    return {
        dataSourcesInfo: (_b = state.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.dataSourcesInfo,
        widgetDs: (_e = (_d = (_c = state.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.widgets[widgetId]) === null || _e === void 0 ? void 0 : _e.useDataSources
    };
};
const DataSourceSelectionGuide = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(_DataSourceSelectionGuide);


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/common/insert-widget/insert-widget-guide.tsx":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/common/insert-widget/insert-widget-guide.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsertWidgetGuide: () => (/* binding */ InsertWidgetGuide),
/* harmony export */   _InsertWidgetGuide: () => (/* binding */ _InsertWidgetGuide)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _core_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guide */ "./jimu-ui/basic/lib/guide/components/core/guide.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/basic/lib/guide/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./jimu-ui/basic/lib/guide/utils/index.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");







const { useState, useEffect, useMemo, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
function translate(id, widgetName = '') {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages[id] }, { widgetName });
}
const _InsertWidgetGuide = (props) => {
    const { widgetName, appConfig, widgetSelection } = props;
    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [dropDone, setDropDone] = useState(false);
    const dragStartListener = useRef(null);
    const dragEndListener = useRef(null);
    const steps = useMemo(() => [{
            title: translate('insertWidgetStep1Title'),
            content: {
                image: {
                    src: 'jimu-ui/basic/guide-assets/Insert-widget.gif',
                    alt: translate('insertWidgetStep1Title'),
                    border: true,
                    width: 400,
                    height: 220,
                    autoFlip: true
                },
                text: translate('insertWidgetStep1Content')
            },
            placement: 'auto',
            target: `[data-sectionid='opts-section'] .widget-card-item[data-widget-name='${widgetName}']`,
            spotlightClicks: true,
            requiredAction: {
                type: 'custom'
            }
        }], [widgetName]);
    const addDnDEventHandlers = (targetElm, targetSelector) => {
        dragStartListener.current = e => {
            var _a, _b;
            // make sure the dragging happens on the right element:
            if (((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.querySelector(targetSelector)) === e.target) {
                setRun(false);
                targetElm.addEventListener('dragend', dragEndListener.current);
            }
            else {
                removeDnDEventHandlers();
            }
        };
        dragEndListener.current = e => {
            var _a;
            if (((_a = e === null || e === void 0 ? void 0 : e.dataTransfer) === null || _a === void 0 ? void 0 : _a.dropEffect) === 'none') { // not dropped
                setStepIndex(0);
                setRun(true);
            }
            else {
                setDropDone(true);
            }
            removeDnDEventHandlers();
        };
        targetElm && document.body.addEventListener('dragstart', dragStartListener.current);
    };
    const removeDnDEventHandlers = () => {
        document.body.removeEventListener('dragstart', dragStartListener.current);
        document.body.removeEventListener('dragend', dragEndListener.current);
    };
    const onStepChange = (data) => {
        const { index, event, step } = data;
        const targetSelector = _utils__WEBPACK_IMPORTED_MODULE_3__.getTargetSelector(step);
        const targetElm = document.querySelector(targetSelector);
        if (event === _types__WEBPACK_IMPORTED_MODULE_2__.EVENTS.TOUR_START) {
            // hard coded to get the parent and scroll the target widget card to view:
            const insertContainerElm = document.querySelector('.widget-builder-header-insert-elements .tab-content');
            const targetElm = document.querySelector(step === null || step === void 0 ? void 0 : step.target);
            if (insertContainerElm && targetElm) {
                const scrollTop = targetElm.getBoundingClientRect().top - insertContainerElm.getBoundingClientRect().top;
                insertContainerElm === null || insertContainerElm === void 0 ? void 0 : insertContainerElm.scrollTo({ top: scrollTop > insertContainerElm.clientHeight ? scrollTop : scrollTop > 0 ? undefined : 0 });
            }
        }
        if (index === 0 && event === _types__WEBPACK_IMPORTED_MODULE_2__.EVENTS.TOOLTIP) {
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_6__.builderAppSync.publishChangeSelectionToApp(null); // remove widget selection to reset setting panel
            (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_6__.getAppConfigAction)().setLockLayout(false).exec(); // unlock layout
            addDnDEventHandlers(targetElm, targetSelector);
        }
        props === null || props === void 0 ? void 0 : props.onStepChange(data);
    };
    useEffect(() => {
        setRun(props.run);
    }, [props.run]);
    useEffect(() => {
        setStepIndex(props.stepIndex);
    }, [props.stepIndex]);
    useEffect(() => {
        if (!run) {
            // detect adding widget
            const layoutItem = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__.searchUtils.findLayoutItem(appConfig, widgetSelection);
            let widget;
            if (layoutItem && layoutItem.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget) {
                if (layoutItem.widgetId) {
                    widget = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets[layoutItem.widgetId];
                }
            }
            if (dropDone && (widget === null || widget === void 0 ? void 0 : widget.manifest.name) === widgetName) {
                setStepIndex(1);
                setRun(true);
            }
        }
    }, [widgetName, run, dropDone, appConfig, widgetSelection]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core_guide__WEBPACK_IMPORTED_MODULE_1__.Guide, Object.assign({}, props, { run: run, stepIndex: stepIndex, steps: steps, onStepChange: onStepChange, isInjected: true })));
};
const mapStateToProps = (state) => {
    var _a, _b, _c;
    return {
        appConfig: (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig,
        widgetSelection: (_c = (_b = state.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appRuntimeInfo) === null || _c === void 0 ? void 0 : _c.selection
    };
};
const InsertWidgetGuide = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(_InsertWidgetGuide);


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-guide.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-guide.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingGuide: () => (/* binding */ OnboardingGuide),
/* harmony export */   _OnboardingGuide: () => (/* binding */ _OnboardingGuide)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _core_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/guide */ "./jimu-ui/basic/lib/guide/components/core/guide.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/basic/lib/guide/types.ts");
/** @jsx jsx */




const stepsJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceI18nPlaceholdersInObject(__webpack_require__(/*! ./onboarding-steps.json */ "./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-steps.json"), jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(), jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
class _OnboardingGuide extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d;
        super(props);
        this.currentStep = 0;
        this.handleChange = (data) => {
            var _a, _b, _c;
            const { index, nextIndex, event } = data;
            if (index === 2) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeView('opts-section', 'insert');
            }
            else if (index === 4) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange('right-sidebar', 'collapse', true));
            }
            else if (index === 11) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeView('opts-section', 'page');
            }
            else if (index === 12) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeView('opts-section', 'data');
            }
            else if (index === 13) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeView('opts-section', 'theme');
            }
            if (nextIndex === 2 && event === _types__WEBPACK_IMPORTED_MODULE_3__.EVENTS.STEP_AFTER) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange('left-sidebar', 'collapse', true));
            }
            else if (nextIndex === 7 && event === _types__WEBPACK_IMPORTED_MODULE_3__.EVENTS.STEP_AFTER) {
                const pageMode = (_a = this.props) === null || _a === void 0 ? void 0 : _a.pageMode;
                this.setState({
                    conditionalStepIndexes: Object.assign(Object.assign({}, this.state.conditionalStepIndexes), { 7: pageMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.PageMode.AutoScroll ? 1 : 0 })
                });
            }
            // this.currentStep === index
            (_c = (_b = this.props) === null || _b === void 0 ? void 0 : _b.onStepChange) === null || _c === void 0 ? void 0 : _c.call(_b, data);
        };
        this.handleClick = (e, step, index) => {
            this.setState({
                stepIndex: index + 1
            });
        };
        this.state = {
            stepIndex: (_a = props.stepIndex) !== null && _a !== void 0 ? _a : 0,
            steps: (_b = stepsJson.steps) !== null && _b !== void 0 ? _b : [],
            conditionalStepIndexes: (_c = props.conditionalStepIndexes) !== null && _c !== void 0 ? _c : {},
            run: (_d = props.run) !== null && _d !== void 0 ? _d : true
        };
    }
    componentDidUpdate(prevProps) {
        if ((prevProps === null || prevProps === void 0 ? void 0 : prevProps.run) !== this.props.run) {
            this.setState({
                run: this.props.run
            });
        }
        if ((prevProps === null || prevProps === void 0 ? void 0 : prevProps.stepIndex) !== this.props.stepIndex) {
            this.setState({
                stepIndex: this.props.stepIndex
            });
        }
    }
    render() {
        const { stepIndex, steps, run, conditionalStepIndexes } = this.state;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_guide__WEBPACK_IMPORTED_MODULE_2__.Guide, { run: run, stepIndex: stepIndex, steps: steps, conditionalStepIndexes: conditionalStepIndexes, onStepChange: this.handleChange, onActionClick: this.handleClick }));
    }
}
const mapStateToProps = (state) => {
    var _a, _b, _c, _d, _e, _f;
    const currentPageId = (_b = (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo) === null || _b === void 0 ? void 0 : _b.currentPageId;
    return {
        queryObject: state.queryObject,
        pageMode: (_f = (_e = (_d = (_c = state.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.pages) === null || _e === void 0 ? void 0 : _e[currentPageId]) === null || _f === void 0 ? void 0 : _f.mode
    };
};
const OnboardingGuide = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(_OnboardingGuide);


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/core/guide.tsx":
/*!***********************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/core/guide.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guide: () => (/* binding */ Guide)
/* harmony export */ });
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-joyride */ "./node_modules/react-joyride/dist/index.mjs");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _step_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-dialog */ "./jimu-ui/basic/lib/guide/components/core/step-dialog/index.tsx");
/* harmony import */ var _step_dialog_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-dialog/style */ "./jimu-ui/basic/lib/guide/components/core/step-dialog/style.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ "./jimu-ui/basic/lib/guide/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./jimu-ui/basic/lib/guide/utils/index.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */








const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const CONSTS = {
    retryInterval: 200,
    retryFailCount: 10000 // 10 seconds
};
const JOYRIDE_STYLES = {
    options: {
        zIndex: 10000
    },
    spotlight: {
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.5)'
    }
};
const i18nMessage = (id, intl) => {
    return intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages[id] });
};
const _Guide = (props) => {
    const _currentStep = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const { disabled, isInjected, intl } = props;
    const [steps, setSteps] = useState([]);
    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [conditionalStepIndexes, setConditionalStepIndexes] = useState({});
    const [maskStyles, setMaskStyles] = useState({});
    const mockMask = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    const _retryTimer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const _retryTimerCount = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(0);
    let clickhandler;
    const getStepData = (index) => {
        var _a;
        const tempSteps = props.steps;
        if (!tempSteps[index])
            return;
        if (Object.prototype.hasOwnProperty.call(tempSteps[index], 'steps')) {
            return tempSteps[index].steps[(_a = conditionalStepIndexes === null || conditionalStepIndexes === void 0 ? void 0 : conditionalStepIndexes[index]) !== null && _a !== void 0 ? _a : 0];
        }
        return tempSteps[index];
    };
    const retryStep = (targetIndex, targetSelector, isInCanvas) => {
        var _a, _b;
        let nextTarget = null;
        setRun(false);
        if (isInCanvas) {
            const canvasIframe = document.querySelector('iframe[name="_appWindow"]');
            const inCanvasTargetSelector = targetSelector;
            nextTarget = (_a = canvasIframe === null || canvasIframe === void 0 ? void 0 : canvasIframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelector(inCanvasTargetSelector);
        }
        else {
            nextTarget = document.querySelector(targetSelector);
        }
        if (nextTarget) {
            _retryTimerCount.current = 0;
            clearTimeout(_retryTimer.current);
            const delayTimeout = setTimeout(() => {
                setStepIndex(targetIndex);
                setRun(true);
                clearTimeout(delayTimeout);
            }, 200);
        }
        else {
            _retryTimerCount.current += CONSTS.retryInterval;
            if (_retryTimerCount.current >= CONSTS.retryFailCount) {
                console.error(new Error('Guide Tour component: Could not be able to find the next step to display for the guide.'));
                _retryTimerCount.current = 0;
                clearTimeout(_retryTimer.current);
                setRun(false);
                (_b = props === null || props === void 0 ? void 0 : props.onStepChange) === null || _b === void 0 ? void 0 : _b.call(props, { status: _types__WEBPACK_IMPORTED_MODULE_4__.STATUS.ERROR, index: targetIndex, nextIndex: null, event: react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.TARGET_NOT_FOUND, isInjected });
                // TODO: add warning UI
            }
            else {
                _retryTimer.current = setTimeout(() => {
                    retryStep(targetIndex, targetSelector, isInCanvas);
                }, CONSTS.retryInterval);
            }
        }
    };
    const handleJoyrideCallback = (data) => {
        var _a, _b, _c;
        const { action, index, type, status: stepStatus } = data;
        const nextStepIndex = index + (action === react_joyride__WEBPACK_IMPORTED_MODULE_7__.ACTIONS.PREV ? -1 : 1);
        const currentStep = getStepData(index);
        const nextStep = getStepData(nextStepIndex);
        const targetSelector = _utils__WEBPACK_IMPORTED_MODULE_5__.getTargetSelector(currentStep, props.widgetJson);
        const targetElm = document.querySelector(targetSelector);
        _currentStep.current = currentStep;
        // check if first step is an injected guide
        if (type === react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.TOUR_START && _utils__WEBPACK_IMPORTED_MODULE_5__.isInjectedStep(currentStep)) {
            setRun(false);
            (_a = props === null || props === void 0 ? void 0 : props.onStepChange) === null || _a === void 0 ? void 0 : _a.call(props, { status: _types__WEBPACK_IMPORTED_MODULE_4__.STATUS.INJECTED, index: stepIndex, nextIndex: stepIndex + 1, isInjected: true, step: currentStep });
            return;
        }
        else if (type === react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.STEP_AFTER && _utils__WEBPACK_IMPORTED_MODULE_5__.isInjectedStep(nextStep)) {
            // prepare for the up-comming injected guide (jump out from current guide) one step before
            setRun(false);
            (_b = props === null || props === void 0 ? void 0 : props.onStepChange) === null || _b === void 0 ? void 0 : _b.call(props, { status: _types__WEBPACK_IMPORTED_MODULE_4__.STATUS.INJECTED, index: nextStepIndex, event: type, isInjected, step: nextStep });
            return;
        }
        else if (type !== react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.STEP_AFTER && run && !_utils__WEBPACK_IMPORTED_MODULE_5__.isInjectedStep(currentStep)) {
            // check if the target element exists in the dom tree
            if (currentStep.targetInCanvas) {
                const updatedMaskStyles = _utils__WEBPACK_IMPORTED_MODULE_5__.getMaskPositionCSS(currentStep, props.widgetJson);
                // retry step if the in-canvas target element is null
                if (!updatedMaskStyles) {
                    retryStep(index, currentStep.target, true);
                    return;
                }
                setMaskStyles(updatedMaskStyles);
            }
            else {
                // retry step if the target element is null
                if (!targetElm) {
                    retryStep(index, targetSelector);
                    return;
                }
            }
        }
        switch (type) {
            case react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.TOUR_END:
                setRun(false);
                setStepIndex(0);
                targetElm === null || targetElm === void 0 ? void 0 : targetElm.removeEventListener('click', clickhandler);
                break;
            case react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.STEP_AFTER:
                setStepIndex(nextStepIndex);
                break;
            case react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.TARGET_NOT_FOUND:
                setStepIndex(index - 1);
                break;
            case react_joyride__WEBPACK_IMPORTED_MODULE_7__.EVENTS.TOOLTIP:
                if (currentStep.requiredAction && currentStep.requiredAction.type === 'click') {
                    targetElm === null || targetElm === void 0 ? void 0 : targetElm.removeEventListener('click', clickhandler);
                    clickhandler = e => {
                        props.onActionClick && props.onActionClick(e, currentStep, index);
                    };
                    targetElm === null || targetElm === void 0 ? void 0 : targetElm.addEventListener('click', clickhandler);
                    break;
                }
                break;
        }
        (_c = props === null || props === void 0 ? void 0 : props.onStepChange) === null || _c === void 0 ? void 0 : _c.call(props, { status: stepStatus, index: index, nextIndex: nextStepIndex, event: type, isInjected, step: currentStep });
    };
    const initResizeWhenTargetInCanvas = (e) => {
        var _a;
        if ((_a = _currentStep.current) === null || _a === void 0 ? void 0 : _a.targetInCanvas) {
            const updatedMaskStyles = _utils__WEBPACK_IMPORTED_MODULE_5__.getMaskPositionCSS(_currentStep.current, props.widgetJson);
            setMaskStyles(updatedMaskStyles);
        }
    };
    useEffect(() => {
        const debounceInitResizeWhenTargetInCanvas = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce(initResizeWhenTargetInCanvas, 100);
        window.addEventListener('scroll', debounceInitResizeWhenTargetInCanvas, true);
        window.addEventListener('resize', debounceInitResizeWhenTargetInCanvas);
        return () => {
            window.removeEventListener('resize', debounceInitResizeWhenTargetInCanvas, true);
            window.removeEventListener('scroll', debounceInitResizeWhenTargetInCanvas);
        };
    }, []);
    useEffect(() => {
        setStepIndex(props.stepIndex);
    }, [props.stepIndex]);
    useEffect(() => {
        setSteps(props.steps);
    }, [props.steps]);
    useEffect(() => {
        setRun(props.run);
    }, [props.run]);
    useEffect(() => {
        setConditionalStepIndexes(props.conditionalStepIndexes);
    }, [props.conditionalStepIndexes]);
    const mappedSteps = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return _utils__WEBPACK_IMPORTED_MODULE_5__.mapStepProps(steps, conditionalStepIndexes);
    }, [steps, conditionalStepIndexes]);
    const MESSAGES = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return {
            back: i18nMessage('previous', intl),
            close: i18nMessage('closeTour', intl),
            next: i18nMessage('next', intl),
            skip: i18nMessage('skipTour', intl),
            last: i18nMessage(isInjected ? 'next' : 'finishTour', intl),
            start: i18nMessage('startTour', intl),
            open: i18nMessage('openTour', intl),
            actionRequired: i18nMessage('actionRequired', intl),
            errorCannotFindNextStep: i18nMessage('errorCannotFindNextStep', intl)
        };
    }, [isInjected, intl]);
    const CustomDialog = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(function (props) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_step_dialog__WEBPACK_IMPORTED_MODULE_2__.StepDialog, Object.assign({ disabled: disabled, isStepInjected: isInjected }, props));
    });
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-guide', props.className);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classes },
        run && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "aria-hidden": 'true', "data-component-id": 'guide-mask', style: maskStyles, ref: mockMask }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_joyride__WEBPACK_IMPORTED_MODULE_7__["default"], { run: run, stepIndex: stepIndex, steps: mappedSteps, tooltipComponent: CustomDialog, styles: JOYRIDE_STYLES, callback: handleJoyrideCallback, continuous: true, showSkipButton: true, showProgress: false, spotlightPadding: 0, disableOverlayClose: true, disableScrolling: true, disableScrollParentFix: true, hideBackButton: true, locale: MESSAGES }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_theme__WEBPACK_IMPORTED_MODULE_6__.Global, { styles: (0,_step_dialog_style__WEBPACK_IMPORTED_MODULE_3__.useGlobalStyle)() })));
};
const Guide = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_Guide);


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/core/step-dialog/index.tsx":
/*!***********************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/core/step-dialog/index.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepDialog: () => (/* binding */ StepDialog),
/* harmony export */   _StepDialog: () => (/* binding */ _StepDialog)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./jimu-ui/basic/lib/guide/components/core/step-dialog/style.ts");
/** @jsx jsx */




const _StepDialog = (props) => {
    var _a, _b;
    const { continuous, index, isLastStep, backProps, primaryProps, skipProps, tooltipProps, theme, disabled, isStepInjected } = props;
    const step = props.step;
    const MESSAGES = step.locale;
    const dialogWidth = (_b = (_a = step.styles) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.width;
    const nextLabel = MESSAGES[continuous ? isLastStep ? 'last' : step.type === 'splash' ? 'start' : 'next' : 'next'];
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'guide--custom-modal', css: (0,_style__WEBPACK_IMPORTED_MODULE_3__.useStyle)({ theme }) },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `modal-content ${step.type ? 'guide--splash' : ''}`, style: {
                maxWidth: dialogWidth !== null && dialogWidth !== void 0 ? dialogWidth : undefined
            } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: 'modal-body' }, tooltipProps), step.content),
            !step.hideFooter && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'modal-footer' },
                (isStepInjected || !isLastStep) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({}, skipProps, { className: 'rounded-pill text-truncate', type: 'tertiary', title: MESSAGES.skip, "aria-label": MESSAGES.skip }), MESSAGES.skip),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'modal-footer--spacer' })),
                index > 0 && !step.hideBackButton && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({}, backProps, { className: 'rounded-pill text-truncate', type: 'secondary', title: MESSAGES.back, "aria-label": MESSAGES.back, disabled: disabled }), MESSAGES.back)),
                !step.requiredAction && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({}, primaryProps, { autoFocus: true, className: 'rounded-pill text-truncate', title: nextLabel, "aria-label": nextLabel, type: 'primary', disabled: disabled || step.disableNextButton }), nextLabel)))));
};
const StepDialog = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withTheme)(_StepDialog);


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/core/step-dialog/style.ts":
/*!**********************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/core/step-dialog/style.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGlobalStyle: () => (/* binding */ useGlobalStyle),
/* harmony export */   useStyle: () => (/* binding */ useStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _lib_styles_components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../lib/styles/components/modal */ "./jimu-ui/lib/styles/components/modal.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./jimu-ui/basic/lib/guide/utils/index.tsx");



const DEFAULT_WIDTH = 460;
const COMPACT_WIDTH = 360;
/*
 * The variables used by the guide dialog component
 * are specifically assigned, and thet are not part of the theme.
 */
const guideTourDialogVars = {
    bg: '#fff',
    radius: '4px',
    shadow: '0 0 20px 2px rgba(0,0,0,0.20)',
    pointer: {
        bg: '#fff',
        borderColor: '#5f5fff'
    },
    link: {
        color: '#5f5fff',
        hoverColor: '#4949ff'
    },
    primaryButton: {
        default: {
            color: '#fff',
            bg: '#5f5fff',
            shadow: '0 2px 12px 0 rgba(95,95,255,0.40)'
        },
        hover: {
            color: '#fff',
            bg: '#4949ff'
        }
    },
    secondaryButton: {
        default: {
            color: '#6a6a6a',
            borderColor: '#6a6a6a'
        },
        hover: {
            color: '#fff',
            bg: '#5f5fff'
        }
    },
    tertiaryButton: {
        default: {
            color: '#a8a8a8'
        },
        hover: {
            color: '#6a6a6a'
        }
    }
};
const useGlobalStyle = () => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .react-joyride__overlay {
        cursor: default !important;
      }
      .__floater {
        filter: none !important;
        .__floater__arrow {
          > span {
            &::before {
              content: ' ';
              display: block;
              width: 24px;
              height: 24px;
              background-color: ${guideTourDialogVars.pointer.bg};
              border: 2px solid ${guideTourDialogVars.pointer.borderColor};
              border-radius: 50%;
              position: relative;
              z-index: 1;
            }
            &::after {
              content: ' ';
              display: block;
              background: #e3e3e3;
              position: absolute;
              z-index: 0;
            }
            svg {
              display: none;
            }
          }
        }
        &[x-placement^="bottom"] {
          padding-top: 36px !important;
          .__floater__arrow {
            margin-top: -12px;
            > span {
              &::after {
                width: 4px;
                height: 24px;
                top: 24px;
                left: 10px;
              }
            }
          }
        }
        &[x-placement^="right"] {
          ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('padding-left')}: 36px !important;
          .__floater__arrow {
            ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('margin-left')}: -12px;
            > span {
              ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('left')}: 0;
              &::after {
                width: 24px;
                height: 4px;
                top: 10px;
                ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('left')}: 24px;
              }
            }
          }
        }
        &[x-placement^="left"] {
          ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('padding-right')}: 36px !important;
          .__floater__arrow {
            ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('margin-right')}: -12px;
            > span {
              &::after {
                width: 24px;
                height: 4px;
                top: 10px;
                ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bidi)('right')}: 24px;
              }
            }
          }
        }
        &[x-placement^="top"] {
          padding-bottom: 36px !important;
          .__floater__arrow {
            margin-bottom: -12px;
            > span {
              &::after {
                width: 4px;
                height: 24px;
                bottom: 24px;
                left: 10px;
              }
            }
          }
        }
      }
    `;
    }, []);
};
const useStyle = (props) => {
    var _a;
    const theme = props.theme;
    const modalVars = (_a = theme === null || theme === void 0 ? void 0 : theme.components) === null || _a === void 0 ? void 0 : _a.modal;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      min-width: 360px;
      ${(0,_lib_styles_components_modal__WEBPACK_IMPORTED_MODULE_1__.modalStyles)(props)}
      color: #333;
      a {
        color: ${guideTourDialogVars.link.color};
        &:hover {
          color: ${guideTourDialogVars.link.hoverColor};
        }
      }
      h1, h2, h3, h4, h5, h6 {
        color: #333;
      }
      .modal-content {
        background-color: ${guideTourDialogVars.bg};
        border: 0;
        border-radius: ${guideTourDialogVars.radius};
        max-width: ${DEFAULT_WIDTH}px;
        p {
          margin-bottom: 0;
        }
      }
      .modal-body {
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
      }
      .modal-footer {
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
        padding-top: 0;
        .modal-footer--spacer {
          flex: 1;
        }
        .btn-secondary,
        .btn-tertiary {
          min-width: auto;
        }
      }
      .guide--content-horizontal {
        > div + div {
          margin-left: 2.5rem;
        }
        .guide--text-wrapper {
          h3 {
            margin-bottom: 1.875rem;
          }
        }
      }
      .guide--img-wrapper {
        margin-bottom: 1rem;
        img {
          display: block;
          &.border {
            border-color: #e3e3e3 !important;
          }
          &.flip {
            transform: scaleX(-1);
          }
        }
      }
      .guide--img-center {
        margin-bottom: 1rem;
        img {
          margin: 0 auto;
        }
      }
      .guide--img-fill {
        margin: -30px -30px ${modalVars.innerPadding};
        img {
          width: 100%;
          height: auto;
        }
      }
      .guide--text-wrapper {
        overflow-y: auto;
        overflow-x: hidden;
        word-break: break-word;
        h3 {
          font-weight: 500;
          font-size: 1rem;
        }
      }
      .btn {
        padding-left: 1rem;
        padding-right: 1rem;
        &:disabled {
          opacity: .25;
          pointer-events: none;
        }
      }
      .btn-primary {
        color: ${guideTourDialogVars.primaryButton.default.color};
        background-color: ${guideTourDialogVars.primaryButton.default.bg};
        border: 1px solid transparent;
        box-shadow: ${guideTourDialogVars.primaryButton.default.shadow};
        &:hover {
          color: ${guideTourDialogVars.primaryButton.hover.color};
          background-color: ${guideTourDialogVars.primaryButton.hover.bg};
          border: 1px solid transparent;
        }
      }
      .btn-secondary {
        color: ${guideTourDialogVars.secondaryButton.default.color};
        border-color: ${guideTourDialogVars.secondaryButton.default.borderColor};
        &:hover {
          color: ${guideTourDialogVars.secondaryButton.hover.color};
          background-color: ${guideTourDialogVars.secondaryButton.hover.bg};
          border-color: ${guideTourDialogVars.secondaryButton.hover.bg};
        }
      }
      .btn-tertiary {
        color: ${guideTourDialogVars.tertiaryButton.default.color};
        &:hover {
          color: ${guideTourDialogVars.tertiaryButton.hover.color};
        }
      }
      .guide--splash {
        .guide--text-wrapper {
          h3 {
            font-size: 1.5rem;
          }
          p {
            font-size: 1.125rem;
            line-height: 1.5;
          }
        }
      }
      @media (max-width: 1200px) {
        .modal-content {
          max-width: ${COMPACT_WIDTH}px;
        }
        .guide--content:not(.guide--content-horizontal) {
          .guide--img-wrapper img {
            width: 100%;
            height: auto;
          }
        }
      }
    `;
    }, [props, modalVars]);
};


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/index.tsx":
/*!*******************************************!*\
  !*** ./jimu-ui/basic/lib/guide/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMON_GUIDE_MODULES: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.COMMON_GUIDE_MODULES),
/* harmony export */   DataSourceSelectionGuide: () => (/* reexport safe */ _components_common_ds_selection_ds_selection_guide__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelectionGuide),
/* harmony export */   EVENTS: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.EVENTS),
/* harmony export */   Guide: () => (/* reexport safe */ _components_core_guide__WEBPACK_IMPORTED_MODULE_0__.Guide),
/* harmony export */   InsertWidgetGuide: () => (/* reexport safe */ _components_common_insert_widget_insert_widget_guide__WEBPACK_IMPORTED_MODULE_3__.InsertWidgetGuide),
/* harmony export */   OnboardingGuide: () => (/* reexport safe */ _components_common_onboarding_onboarding_guide__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuide),
/* harmony export */   STATUS: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.STATUS),
/* harmony export */   _InsertWidgetGuide: () => (/* reexport safe */ _components_common_insert_widget_insert_widget_guide__WEBPACK_IMPORTED_MODULE_3__._InsertWidgetGuide),
/* harmony export */   _OnboardingGuide: () => (/* reexport safe */ _components_common_onboarding_onboarding_guide__WEBPACK_IMPORTED_MODULE_1__._OnboardingGuide)
/* harmony export */ });
/* harmony import */ var _components_core_guide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/core/guide */ "./jimu-ui/basic/lib/guide/components/core/guide.tsx");
/* harmony import */ var _components_common_onboarding_onboarding_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/onboarding/onboarding-guide */ "./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-guide.tsx");
/* harmony import */ var _components_common_ds_selection_ds_selection_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/ds-selection/ds-selection-guide */ "./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-guide.tsx");
/* harmony import */ var _components_common_insert_widget_insert_widget_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/insert-widget/insert-widget-guide */ "./jimu-ui/basic/lib/guide/components/common/insert-widget/insert-widget-guide.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./jimu-ui/basic/lib/guide/types.ts");







/***/ }),

/***/ "./jimu-ui/basic/lib/guide/types.ts":
/*!******************************************!*\
  !*** ./jimu-ui/basic/lib/guide/types.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMON_GUIDE_MODULES: () => (/* binding */ COMMON_GUIDE_MODULES),
/* harmony export */   EVENTS: () => (/* reexport safe */ react_joyride__WEBPACK_IMPORTED_MODULE_0__.EVENTS),
/* harmony export */   STATUS: () => (/* binding */ STATUS)
/* harmony export */ });
/* harmony import */ var react_joyride__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-joyride */ "./node_modules/react-joyride/dist/index.mjs");

const STATUS = Object.assign(Object.assign({}, react_joyride__WEBPACK_IMPORTED_MODULE_0__.STATUS), { INJECTED: 'injected' });

const COMMON_GUIDE_MODULES = ['insert-widget', 'ds-selection'];


/***/ }),

/***/ "./jimu-ui/basic/lib/guide/utils/index.tsx":
/*!*************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/utils/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bidi: () => (/* binding */ bidi),
/* harmony export */   getMaskPositionCSS: () => (/* binding */ getMaskPositionCSS),
/* harmony export */   getTargetSelector: () => (/* binding */ getTargetSelector),
/* harmony export */   isInjectedStep: () => (/* binding */ isInjectedStep),
/* harmony export */   mapStepProps: () => (/* binding */ mapStepProps)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
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

const INJECTED_GUIDE_PROP_NAME = 'injectedGuide';
function mapStepProps(steps, condStepIndexes) {
    const mappedSteps = steps.map((step, index) => {
        var _a, _b, _c, _d;
        let tempStep;
        const isRTL = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appContext) === null || _b === void 0 ? void 0 : _b.isRTL;
        if (isInjectedStep(step)) {
            return {
                target: `injectedWidget ${step[INJECTED_GUIDE_PROP_NAME]}`, // still need a valid selector for Joyride to run correctly
                content: null
            };
        }
        if (Object.prototype.hasOwnProperty.call(step, 'steps') && ((_c = step.steps) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            tempStep = step.steps[(_d = condStepIndexes === null || condStepIndexes === void 0 ? void 0 : condStepIndexes[index]) !== null && _d !== void 0 ? _d : 0];
        }
        else {
            tempStep = step;
        }
        const { title, content, width, requiredAction, target, spotlightClicks, targetInCanvas, placement } = tempStep, otherProps = __rest(tempStep, ["title", "content", "width", "requiredAction", "target", "spotlightClicks", "targetInCanvas", "placement"]);
        let contentImage;
        if (content === null || content === void 0 ? void 0 : content.image) {
            const _e = content.image, { position, border, src, autoFlip } = _e, otherImageProps = __rest(_e, ["position", "border", "src", "autoFlip"]);
            contentImage = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `guide--img-wrapper guide--img-${position !== null && position !== void 0 ? position : 'center'}` },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", Object.assign({ className: `${border ? 'border' : ''}${isRTL && autoFlip ? ' flip' : ''}`, src: jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.isAbsoluteUrl(src) ? src : `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getFixedRootPath()}${src}` }, otherImageProps))));
        }
        const contentTitle = title && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, title);
        const contentText = content && ((content === null || content === void 0 ? void 0 : content.text) ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, content.text) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, content));
        return Object.assign({ target: targetInCanvas ? '[data-component-id="guide-mask"]' : target, content: jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: `guide--content ${(content === null || content === void 0 ? void 0 : content.direction) === 'horizontal' ? 'd-flex guide--content-horizontal align-items-center' : ''}` },
                contentImage,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'guide--text-wrapper' },
                    contentTitle,
                    contentText)), styles: {
                options: {
                    width: width
                }
            }, spotlightClicks: spotlightClicks !== null && spotlightClicks !== void 0 ? spotlightClicks : !!requiredAction, disableBeacon: index === 0, requiredAction,
            targetInCanvas, placement: isRTL ? bidi(placement, isRTL) : placement }, otherProps);
    });
    return mappedSteps;
}
function getMaskPositionCSS(step, widgetJson) {
    var _a, _b, _c, _d, _e;
    const canvasIframe = document.querySelector('iframe[name="_appWindow"]');
    const inCanvasTargetSelector = _getSelector(step, widgetJson);
    const inCanvasTargetElm = canvasIframe === null || canvasIframe === void 0 ? void 0 : canvasIframe.contentDocument.querySelector(inCanvasTargetSelector);
    if (!inCanvasTargetElm) {
        return null;
    }
    const canvasIframeRect = canvasIframe === null || canvasIframe === void 0 ? void 0 : canvasIframe.getBoundingClientRect();
    const inCanvasTargetElmRect = inCanvasTargetElm === null || inCanvasTargetElm === void 0 ? void 0 : inCanvasTargetElm.getBoundingClientRect();
    const zoomScale = (_e = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appRuntimeInfo) === null || _d === void 0 ? void 0 : _d.zoomScale) !== null && _e !== void 0 ? _e : 1;
    return inCanvasTargetElmRect
        ? {
            position: 'fixed',
            zIndex: -1,
            pointerEvents: step.spotlightClicks ? 'none' : undefined,
            left: (inCanvasTargetElmRect.left) * zoomScale + canvasIframeRect.left,
            top: (inCanvasTargetElmRect.top) * zoomScale + canvasIframeRect.top,
            width: (inCanvasTargetElmRect.width) * zoomScale,
            height: (inCanvasTargetElmRect.height) * zoomScale
        }
        : {};
}
function getTargetSelector(step, widgetJson) {
    return step.targetInCanvas ? '[data-component-id="guide-mask"]' : _getSelector(step, widgetJson);
}
function isInjectedStep(step) {
    return step ? Object.prototype.hasOwnProperty.call(step, INJECTED_GUIDE_PROP_NAME) : false;
}
function _getSelector(step, widgetJson) {
    var _a, _b;
    const prefix = (step === null || step === void 0 ? void 0 : step.targetPrefix) === 'widgetId' && (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.id) ? `[data-widgetid="${widgetJson.id}"] ` : '';
    return prefix + ((_b = (_a = step.requiredAction) === null || _a === void 0 ? void 0 : _a.target) !== null && _b !== void 0 ? _b : step.target);
}
function bidi(s, isRTL) {
    var _a, _b;
    if (!s)
        return s;
    isRTL = isRTL !== null && isRTL !== void 0 ? isRTL : (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appContext) === null || _b === void 0 ? void 0 : _b.isRTL;
    if (isRTL) {
        if (s.includes('left'))
            return s.replace('left', 'right');
        else if (s.includes('right'))
            return s.replace('right', 'left');
    }
    return s;
}


/***/ }),

/***/ "./jimu-ui/lib/styles/components/modal.ts":
/*!************************************************!*\
  !*** ./jimu-ui/lib/styles/components/modal.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalStyles: () => (/* binding */ modalStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const modalStyles = (props) => {
    var _a, _b;
    const theme = props.theme;
    const modalVars = (_a = theme === null || theme === void 0 ? void 0 : theme.components) === null || _a === void 0 ? void 0 : _a.modal;
    return modalVars && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &.modal-dialog {
      position: relative;
      width: auto;
      margin: ${modalVars.dialog.margin};
      pointer-events: none;

      .modal.fade & {
        transition:${modalVars.transition};
        transform: translate(0, -25%);
      }
      .modal.show & {
        transform: translate(0, 0);
      }
    }

    &.modal-dialog-centered {
      display: flex;
      align-items: center;
      min-height: calc(100% - (${modalVars.dialog.margin} * 2));
      &::before {
        display: block;
        height: calc(100vh - (${modalVars.dialog.margin} * 2));
        content: "";
      }
    }

    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: ${modalVars.content.bg};
      background-clip: padding-box;
      border: ${modalVars.content.border.width} solid ${modalVars.content.border.color};
      border-radius: ${modalVars.content.borderRadius};
      box-shadow: ${modalVars.content.shadow};
      outline: 0;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${modalVars.header.paddingY} ${modalVars.header.paddingX};
      border-bottom: ${modalVars.header.border.width} solid ${modalVars.header.border.color};
      ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.borderRadius('top', (_b = modalVars.content.borderRadius) !== null && _b !== void 0 ? _b : 0)};

      .close {
        padding: ${modalVars.header.paddingY} ${modalVars.header.paddingX};
        margin: -${modalVars.header.paddingY} -${modalVars.header.paddingX} -${modalVars.header.paddingY} auto;
      }
    }

    .modal-title {
      flex: 1;
      margin-bottom: 0;
      line-height: ${modalVars.title.lineHeight};
    }

    .modal-body {
      position: relative;
      flex: 1 1 auto;
      padding: ${modalVars.innerPadding};
    }

    .modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: ${modalVars.innerPadding};
      border-top: ${modalVars.footer.border.width} solid ${modalVars.footer.border.color};

      > * + * { margin-left: .5rem; }
      > .btn {
        min-width: ${modalVars.footer.button.minWidth};
      }
    }

    .modal-scrollbar-measure {
      position: absolute;
      top: -9999px;
      width: 50px;
      height: 50px;
      overflow: scroll;
    }

    /* TODO: use break points from config */
    @media (min-width: 576px) {
      &.modal-dialog {
        max-width: ${modalVars.sizes.md};
        margin: ${modalVars.dialog.marginYSmUp} auto;
      }
      &.modal-dialog-centered {
        min-height: calc(100% - (${modalVars.dialog.marginYSmUp} * 2));
      }
      &.modal-dialog-centered::before {
        height: calc(100vh - (${modalVars.dialog.marginYSmUp} * 2));
      }
      .modal-content {
        box-shadow: ${modalVars.content.shadowSmUp};
      }
    }

  `;
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

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "./node_modules/@gilbarbara/deep-equal/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@gilbarbara/deep-equal/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ equal)
/* harmony export */ });
// src/helpers.ts
function isOfType(type) {
  return (value) => typeof value === type;
}
var isFunction = isOfType("function");
var isNull = (value) => {
  return value === null;
};
var isRegex = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
};
var isObject = (value) => {
  return !isUndefined(value) && !isNull(value) && (isFunction(value) || typeof value === "object");
};
var isUndefined = isOfType("undefined");

// src/index.ts
function equalArray(left, right) {
  const { length } = left;
  if (length !== right.length) {
    return false;
  }
  for (let index = length; index-- !== 0; ) {
    if (!equal(left[index], right[index])) {
      return false;
    }
  }
  return true;
}
function equalArrayBuffer(left, right) {
  if (left.byteLength !== right.byteLength) {
    return false;
  }
  const view1 = new DataView(left.buffer);
  const view2 = new DataView(right.buffer);
  let index = left.byteLength;
  while (index--) {
    if (view1.getUint8(index) !== view2.getUint8(index)) {
      return false;
    }
  }
  return true;
}
function equalMap(left, right) {
  if (left.size !== right.size) {
    return false;
  }
  for (const index of left.entries()) {
    if (!right.has(index[0])) {
      return false;
    }
  }
  for (const index of left.entries()) {
    if (!equal(index[1], right.get(index[0]))) {
      return false;
    }
  }
  return true;
}
function equalSet(left, right) {
  if (left.size !== right.size) {
    return false;
  }
  for (const index of left.entries()) {
    if (!right.has(index[0])) {
      return false;
    }
  }
  return true;
}
function equal(left, right) {
  if (left === right) {
    return true;
  }
  if (left && isObject(left) && right && isObject(right)) {
    if (left.constructor !== right.constructor) {
      return false;
    }
    if (Array.isArray(left) && Array.isArray(right)) {
      return equalArray(left, right);
    }
    if (left instanceof Map && right instanceof Map) {
      return equalMap(left, right);
    }
    if (left instanceof Set && right instanceof Set) {
      return equalSet(left, right);
    }
    if (ArrayBuffer.isView(left) && ArrayBuffer.isView(right)) {
      return equalArrayBuffer(left, right);
    }
    if (isRegex(left) && isRegex(right)) {
      return left.source === right.source && left.flags === right.flags;
    }
    if (left.valueOf !== Object.prototype.valueOf) {
      return left.valueOf() === right.valueOf();
    }
    if (left.toString !== Object.prototype.toString) {
      return left.toString() === right.toString();
    }
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) {
      return false;
    }
    for (let index = leftKeys.length; index-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(right, leftKeys[index])) {
        return false;
      }
    }
    for (let index = leftKeys.length; index-- !== 0; ) {
      const key = leftKeys[index];
      if (key === "_owner" && left.$$typeof) {
        continue;
      }
      if (!equal(left[key], right[key])) {
        return false;
      }
    }
    return true;
  }
  if (Number.isNaN(left) && Number.isNaN(right)) {
    return true;
  }
  return left === right;
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@gilbarbara/helpers/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@gilbarbara/helpers/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASYNC_STATUS: () => (/* binding */ ASYNC_STATUS),
/* harmony export */   DAY: () => (/* binding */ DAY),
/* harmony export */   HOUR: () => (/* binding */ HOUR),
/* harmony export */   MINUTE: () => (/* binding */ MINUTE),
/* harmony export */   MONTH: () => (/* binding */ MONTH),
/* harmony export */   Types: () => (/* binding */ types_exports),
/* harmony export */   WEEK: () => (/* binding */ WEEK),
/* harmony export */   YEAR: () => (/* binding */ YEAR),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   cleanUpObject: () => (/* binding */ cleanUpObject),
/* harmony export */   cleanupHTML: () => (/* binding */ cleanupHTML),
/* harmony export */   cleanupNumericString: () => (/* binding */ cleanupNumericString),
/* harmony export */   cleanupURI: () => (/* binding */ cleanupURI),
/* harmony export */   conditional: () => (/* binding */ conditional),
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   cors: () => (/* binding */ cors),
/* harmony export */   createArray: () => (/* binding */ createArray),
/* harmony export */   demethodize: () => (/* binding */ demethodize),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   formatBoolean: () => (/* binding */ formatBoolean),
/* harmony export */   formatCPF: () => (/* binding */ formatCPF),
/* harmony export */   formatDateLocale: () => (/* binding */ formatDateLocale),
/* harmony export */   formatMoney: () => (/* binding */ formatMoney),
/* harmony export */   formatPhoneBR: () => (/* binding */ formatPhoneBR),
/* harmony export */   formatPhoneUS: () => (/* binding */ formatPhoneUS),
/* harmony export */   formatPostalCodeBR: () => (/* binding */ formatPostalCodeBR),
/* harmony export */   getDataType: () => (/* binding */ getDataType),
/* harmony export */   getInitials: () => (/* binding */ getInitials),
/* harmony export */   getNestedProperty: () => (/* binding */ getNestedProperty),
/* harmony export */   getRandomItem: () => (/* binding */ getRandomItem),
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   invertKeys: () => (/* binding */ invertKeys),
/* harmony export */   isDarkMode: () => (/* binding */ isDarkMode),
/* harmony export */   isIsoDate: () => (/* binding */ isIsoDate),
/* harmony export */   isJSON: () => (/* binding */ isJSON),
/* harmony export */   isRequired: () => (/* binding */ isRequired),
/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice),
/* harmony export */   isValidCPF: () => (/* binding */ isValidCPF),
/* harmony export */   isValidDate: () => (/* binding */ isValidDate),
/* harmony export */   isValidEmail: () => (/* binding */ isValidEmail),
/* harmony export */   isoDate: () => (/* binding */ isoDate),
/* harmony export */   keyMirror: () => (/* binding */ keyMirror),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   mean: () => (/* binding */ mean),
/* harmony export */   measureExecutionTime: () => (/* binding */ measureExecutionTime),
/* harmony export */   median: () => (/* binding */ median),
/* harmony export */   mergeProps: () => (/* binding */ mergeProps),
/* harmony export */   mode: () => (/* binding */ mode),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   nullify: () => (/* binding */ nullify),
/* harmony export */   objectEntries: () => (/* binding */ objectEntries),
/* harmony export */   objectKeys: () => (/* binding */ objectKeys),
/* harmony export */   objectToArray: () => (/* binding */ objectToArray),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   once: () => (/* binding */ once),
/* harmony export */   pad: () => (/* binding */ pad),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pluralize: () => (/* binding */ pluralize),
/* harmony export */   poll: () => (/* binding */ poll),
/* harmony export */   popupCenter: () => (/* binding */ popupCenter),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   queryStringFormat: () => (/* binding */ queryStringFormat),
/* harmony export */   queryStringParse: () => (/* binding */ queryStringParse),
/* harmony export */   quickSort: () => (/* binding */ quickSort),
/* harmony export */   randomNumber: () => (/* binding */ randomNumber),
/* harmony export */   removeAccents: () => (/* binding */ removeAccents),
/* harmony export */   removeDuplicates: () => (/* binding */ removeDuplicates),
/* harmony export */   removeEmojis: () => (/* binding */ removeEmojis),
/* harmony export */   removeEmptyTags: () => (/* binding */ removeEmptyTags),
/* harmony export */   removeNonPrintableCharacters: () => (/* binding */ removeNonPrintableCharacters),
/* harmony export */   removeTags: () => (/* binding */ removeTags),
/* harmony export */   removeWhitespace: () => (/* binding */ removeWhitespace),
/* harmony export */   request: () => (/* binding */ request),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   slugify: () => (/* binding */ slugify),
/* harmony export */   sortByLocaleCompare: () => (/* binding */ sortByLocaleCompare),
/* harmony export */   sortByPrimitive: () => (/* binding */ sortByPrimitive),
/* harmony export */   sortComparator: () => (/* binding */ sortComparator),
/* harmony export */   sortObjectKeys: () => (/* binding */ sortObjectKeys),
/* harmony export */   splitIntoChunks: () => (/* binding */ splitIntoChunks),
/* harmony export */   timeSince: () => (/* binding */ timeSince),
/* harmony export */   timestamp: () => (/* binding */ timestamp),
/* harmony export */   unique: () => (/* binding */ unique),
/* harmony export */   uuid: () => (/* binding */ uuid),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-lite */ "./node_modules/is-lite/dist/index.mjs");
// src/arrays.ts
function createArray(size, start = 1) {
  return Array.from({ length: size }, (_, index) => index + start);
}
function getRandomItem(input) {
  return input[Math.floor(Math.random() * input.length)];
}
function quickSort(input, comparator = sortComparator) {
  const output = [...input];
  const recursiveSort = (start, end) => {
    if (end - start < 1) {
      return;
    }
    const pivotValue = output[end];
    let splitIndex = start;
    for (let index = start; index < end; index++) {
      const sort = comparator(output[index], pivotValue);
      if (sort === -1) {
        if (splitIndex !== index) {
          const temp = output[splitIndex];
          output[splitIndex] = output[index];
          output[index] = temp;
        }
        splitIndex++;
      }
    }
    output[end] = output[splitIndex];
    output[splitIndex] = pivotValue;
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };
  recursiveSort(0, input.length - 1);
  return output;
}
function removeDuplicates(input) {
  return [...new Set(input)];
}
function shuffle(input) {
  let currentIndex = input.length;
  let randomIndex;
  let temporaryValue;
  const output = [...input];
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    temporaryValue = output[currentIndex];
    output[currentIndex] = output[randomIndex];
    output[randomIndex] = temporaryValue;
  }
  return output;
}
function sortByLocaleCompare(key, options = {}) {
  const { descending, ...compareOptions } = options;
  if (key) {
    if (descending) {
      return (left, right) => right[key].toLowerCase().localeCompare(left[key].toLowerCase(), void 0, compareOptions);
    }
    return (left, right) => left[key].toLowerCase().localeCompare(right[key].toLowerCase(), void 0, compareOptions);
  }
  if (descending) {
    return (left, right) => right.toLowerCase().localeCompare(left.toLowerCase(), void 0, compareOptions);
  }
  return (left, right) => left.toLowerCase().localeCompare(right.toLowerCase(), void 0, compareOptions);
}
function sortByPrimitive(key, descending = false) {
  const firstComparator = descending ? 1 : -1;
  const secondComparator = descending ? -1 : 1;
  if (key) {
    return (left, right) => {
      if (left[key] === right[key]) {
        return 0;
      }
      return left[key] < right[key] ? firstComparator : secondComparator;
    };
  }
  return (left, right) => {
    if (left === right) {
      return 0;
    }
    return left < right ? firstComparator : secondComparator;
  };
}
function sortComparator(left, right) {
  if (left < right) {
    return -1;
  }
  if (left > right) {
    return 1;
  }
  return 0;
}
function splitIntoChunks(input, chunkSize = 25) {
  if (!Array.isArray(input)) {
    throw new TypeError("expected an array for the first argument");
  }
  const chunks = [];
  for (let index = 0; index < Math.ceil(input.length / chunkSize); index++) {
    chunks.push(input.slice(index * chunkSize, (index + 1) * chunkSize));
  }
  return chunks;
}

// src/async.ts

var ASYNC_STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};
function cors(data, statusCodeOrOptions = 200) {
  const {
    allowCredentials = true,
    allowedHeaders = [],
    methods = ["GET"],
    origin = "*",
    responseHeaders = void 0,
    statusCode = 200
  } = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(statusCodeOrOptions) ? { statusCode: statusCodeOrOptions } : statusCodeOrOptions;
  const allowMethods = [...methods, "OPTIONS"];
  const allowHeaders = [
    .../* @__PURE__ */ new Set([
      "Accept-Version",
      "Accept",
      "Authorization",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Date",
      "x-amz-date",
      "x-amz-security-token",
      "X-Api-Version",
      "X-CSRF-Token",
      "X-Requested-With",
      ...allowedHeaders
    ])
  ];
  let exposedHeaders;
  if (responseHeaders) {
    exposedHeaders = {
      "Access-Control-Expose-Headers": Object.keys(responseHeaders).join(","),
      ...responseHeaders
    };
  }
  return {
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Credentials": allowCredentials,
      "Access-Control-Allow-Methods": allowMethods.join(","),
      "Access-Control-Allow-Headers": allowHeaders.join(","),
      ...exposedHeaders
    },
    statusCode
  };
}
async function poll(condition, options = {}) {
  const { delay = 1, maxRetries = 5 } = options;
  let retries = 0;
  while (!condition() && retries <= maxRetries) {
    await sleep(delay);
    retries++;
  }
  if (retries >= maxRetries) {
    throw new Error("Timeout");
  }
}
async function request(url, options = {}) {
  const { body, headers, method = "GET" } = options;
  if (!url) {
    throw new Error("URL is required");
  }
  const params = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    },
    method
  };
  if (body) {
    params.body = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(body) ? JSON.stringify(body) : body;
  }
  return fetch(url, params).then(async (response) => {
    const text = await response.text();
    let content;
    try {
      content = JSON.parse(text);
    } catch {
      content = text;
    }
    if (response.status > 299) {
      const error = new Error(response.statusText);
      error.status = response.status;
      error.response = content;
      throw error;
    } else {
      return content;
    }
  });
}
function sleep(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1e3);
  });
}

// src/date.ts


// src/strings.ts
function capitalize(input) {
  return input.charAt(0).toLocaleUpperCase() + input.slice(1).toLocaleLowerCase();
}
function cleanupHTML(input) {
  return removeWhitespace(removeEmptyTags(input));
}
function cleanupNumericString(value = "") {
  return value.replace(/\D+/g, "");
}
function cleanupURI(input) {
  return input.replace(/[$&+,/:;=?@]/g, "");
}
function getInitials(input) {
  if (!input) {
    return "";
  }
  const names = input.trim().split(" ");
  if (names.length === 1) {
    return `${names[0].charAt(0)}`;
  }
  return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`;
}
function pluralize(quantity, singular, plural) {
  if (quantity === 1) {
    return singular;
  }
  return plural || `${singular}s`;
}
function removeAccents(input) {
  const removalMap = {
    A: /[AÀÁÂÃÄÅĀĂĄǍǞǠǺȀȂȦḀẠẢẤẦẨẪẬẮẰẲẴẶⒶＡ]/g,
    AA: /Ꜳ/g,
    AE: /[ÆǢǼ]/g,
    AO: /Ꜵ/g,
    AU: /Ꜷ/g,
    AV: /[ꜸꜺ]/g,
    AY: /Ꜽ/g,
    B: /[BƁƂɃḂḄḆⒷＢ]/g,
    C: /[CÇĆĈĊČƇȻḈⒸꜾＣ]/g,
    D: /[DĎĐƉƊƋḊḌḎḐḒⒹꝹＤ]/g,
    DZ: /[ǄǱ]/g,
    Dz: /[ǅǲ]/g,
    E: /[EÈÉÊËĒĔĖĘĚƎƐȄȆȨḔḖḘḚḜẸẺẼẾỀỂỄỆⒺＥ]/g,
    F: /[FƑḞⒻꝻＦ]/g,
    G: /[GĜĞĠĢƓǤǦǴḠⒼꝽꝾꞠＧ]/g,
    H: /[HĤĦȞḢḤḦḨḪⒽⱧⱵꞍＨ]/g,
    I: /[IÌÍÎÏĨĪĬĮİƗǏȈȊḬḮỈỊⒾＩ]/g,
    J: /[JĴɈⒿＪ]/g,
    K: /[KĶƘǨḰḲḴⓀⱩꝀꝂꝄꞢＫ]/g,
    L: /[LĹĻĽĿŁȽḶḸḺḼⓁⱠⱢꝆꝈꞀＬ]/g,
    LJ: /Ǉ/g,
    Lj: /ǈ/g,
    M: /[MƜḾṀṂⓂⱮＭ]/g,
    N: /[NÑŃŅŇƝǸȠṄṆṈṊⓃꞐꞤＮ]/g,
    NJ: /Ǌ/g,
    Nj: /ǋ/g,
    O: /[OÒÓÔÕÖØŌŎŐƆƟƠǑǪǬǾȌȎȪȬȮȰṌṎṐṒỌỎỐỒỔỖỘỚỜỞỠỢⓄꝊꝌＯ]/g,
    OI: /Ƣ/g,
    OO: /Ꝏ/g,
    OU: /Ȣ/g,
    P: /[PƤṔṖⓅⱣꝐꝒꝔＰ]/g,
    Q: /[QɊⓆꝖꝘＱ]/g,
    R: /[RŔŖŘȐȒɌṘṚṜṞⓇⱤꝚꞂꞦＲ]/g,
    S: /[SŚŜŞŠȘṠṢṤṦṨẞⓈⱾꞄꞨＳ]/g,
    T: /[TŢŤŦƬƮȚȾṪṬṮṰⓉꞆＴ]/g,
    TZ: /Ꜩ/g,
    U: /[UÙÚÛÜŨŪŬŮŰŲƯǓǕǗǙǛȔȖɄṲṴṶṸṺỤỦỨỪỬỮỰⓊＵ]/g,
    V: /[VƲɅṼṾⓋꝞＶ]/g,
    VY: /Ꝡ/g,
    W: /[WŴẀẂẄẆẈⓌⱲＷ]/g,
    X: /[XẊẌⓍＸ]/g,
    Y: /[YÝŶŸƳȲɎẎỲỴỶỸỾⓎＹ]/g,
    Z: /[ZŹŻŽƵȤẐẒẔⓏⱫⱿꝢＺ]/g,
    a: /[aàáâãäåāăąǎǟǡǻȁȃȧɐḁẚạảấầẩẫậắằẳẵặⓐⱥａ]/g,
    aa: /ꜳ/g,
    ae: /[æǣǽ]/g,
    ao: /ꜵ/g,
    au: /ꜷ/g,
    av: /[ꜹꜻ]/g,
    ay: /ꜽ/g,
    b: /[bƀƃɓḃḅḇⓑｂ]/g,
    c: /[cçćĉċčƈȼḉↄⓒꜿｃ]/g,
    d: /[dďđƌɖɗḋḍḏḑḓⓓꝺｄ]/g,
    dz: /[ǆǳ]/g,
    e: /[eèéêëēĕėęěǝȅȇȩɇɛḕḗḙḛḝẹẻẽếềểễệⓔｅ]/g,
    f: /[fƒḟⓕꝼｆ]/g,
    g: /[gĝğġģǥǧǵɠᵹḡⓖꝿꞡｇ]/g,
    h: /[hĥħȟɥḣḥḧḩḫẖⓗⱨⱶｈ]/g,
    hv: /ƕ/g,
    i: /[iìíîïĩīĭįıǐȉȋɨḭḯỉịⓘｉ]/g,
    j: /[jĵǰɉⓙｊ]/g,
    k: /[kķƙǩḱḳḵⓚⱪꝁꝃꝅꞣｋ]/g,
    l: /[lĺļľŀłſƚɫḷḹḻḽⓛⱡꝇꝉꞁｌ]/g,
    lj: /ǉ/g,
    m: /[mɯɱḿṁṃⓜｍ]/g,
    n: /[nñńņňŉƞǹɲṅṇṉṋⓝꞑꞥｎ]/g,
    nj: /ǌ/g,
    o: /[oòóôõöøōŏőơǒǫǭǿȍȏȫȭȯȱɔɵṍṏṑṓọỏốồổỗộớờởỡợⓞꝋꝍｏ]/g,
    oi: /ƣ/g,
    ou: /ȣ/g,
    oo: /ꝏ/g,
    p: /[pƥᵽṕṗⓟꝑꝓꝕｐ]/g,
    q: /[qɋⓠꝗꝙｑ]/g,
    r: /[rŕŗřȑȓɍɽṙṛṝṟⓡꝛꞃꞧｒ]/g,
    s: /[sßśŝşšșȿṡṣṥṧṩẛⓢꞅꞩｓ]/g,
    t: /[tţťŧƭțʈṫṭṯṱẗⓣⱦꞇｔ]/g,
    tz: /ꜩ/g,
    u: /[uùúûüũūŭůűųưǔǖǘǚǜȕȗʉṳṵṷṹṻụủứừửữựⓤｕ]/g,
    v: /[vʋʌṽṿⓥꝟｖ]/g,
    vy: /ꝡ/g,
    w: /[wŵẁẃẅẇẉẘⓦⱳｗ]/g,
    x: /[xẋẍⓧｘ]/g,
    y: /[yýÿŷƴȳɏẏẙỳỵỷỹỿⓨｙ]/g,
    z: /[zźżžƶȥɀẑẓẕⓩⱬꝣｚ]/g
  };
  let parsedString = input;
  Object.entries(removalMap).forEach(([key, value]) => {
    parsedString = parsedString.replace(value, key);
  });
  return parsedString;
}
function removeEmojis(input) {
  const baseEmojiRegex = /[\u2700-\u27bf]|\ud83c[\udde6-\uddff]{2}|[\ud800-\udbff][\udc00-\udfff]/;
  const variationSelectorRegex = /[\ufe0e\ufe0f]?/;
  const modifierRegex = /[\u0300-\u036f\u20d0-\u20f0\ufe20-\ufe23]|\ud83c[\udffb-\udfff]/;
  const zeroWidthJoinerRegex = /\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\u20d0-\u20f0\ufe20-\ufe23]|\ud83c[\udffb-\udfff])?/;
  const emojiRegex = new RegExp(
    `(?:${baseEmojiRegex.source})${variationSelectorRegex.source}(?:${modifierRegex.source})?(?:${zeroWidthJoinerRegex.source})*`,
    "g"
  );
  return input.replace(emojiRegex, "").trim();
}
function removeEmptyTags(input) {
  return input.replace(/<[^/>][^>]*>\s*<\/[^>]+>/gi, "");
}
function removeNonPrintableCharacters(input) {
  return input.replace(/[^\x20-\x7E´\u00C0-\u00FFˆ˜]+/g, "");
}
function removeTags(input) {
  return input.replace(/(<([^>]+)>)/gi, "");
}
function removeWhitespace(input) {
  return input.replace(/\r\n|\r|\n|\t/g, "").replace(/ +/g, " ");
}
function slugify(input) {
  return removeAccents(input).replace(/[\u0300-\u036f]/g, "").replace(/[()]/g, "").replace(/ /g, "-").replace(/["%<>\\^`{|}]/g, "").toLowerCase();
}

// src/date.ts
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = 365 * DAY;
function isIsoDate(input) {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(input)) {
    return false;
  }
  const date = new Date(input);
  return date.toISOString() === input;
}
function isoDate(input) {
  if (typeof input !== "undefined") {
    return new Date(input).toISOString();
  }
  return (/* @__PURE__ */ new Date()).toISOString();
}
function isValidDate(input) {
  const date = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].date(input) ? input : new Date(input);
  return !Number.isNaN(date.getTime());
}
function now() {
  return Math.floor(Date.now() / 1e3);
}
function timeSince(input, options) {
  const {
    day = "day",
    days,
    hour = "hour",
    hours,
    minute = "minute",
    minutes,
    month = "month",
    months,
    prefix,
    second = "second",
    seconds,
    skipWeeks = false,
    suffix = "ago",
    week = "week",
    weeks,
    year = "year",
    years
  } = options || {};
  const date = typeof input === "number" ? input : timestamp(input);
  const diff = now() - date;
  let quantity = Math.floor(diff / YEAR);
  const output = (value, caption) => {
    let result = `${value} ${caption}`;
    if (prefix) {
      result = `${prefix} ${result}`;
    }
    if (suffix) {
      result = `${result} ${suffix}`;
    }
    return result;
  };
  if (quantity >= 1) {
    return output(quantity, pluralize(quantity, year, years));
  }
  quantity = Math.floor(diff / MONTH);
  if (quantity > 1) {
    return output(quantity, pluralize(quantity, month, months));
  }
  if (!skipWeeks) {
    quantity = Math.floor(diff / WEEK);
    if (quantity > 1) {
      return output(quantity, pluralize(quantity, week, weeks));
    }
  }
  quantity = Math.floor(diff / DAY);
  if (quantity >= 1) {
    return output(quantity, pluralize(quantity, day, days));
  }
  quantity = Math.floor(diff / HOUR);
  if (quantity >= 1) {
    return output(quantity, pluralize(quantity, hour, hours));
  }
  quantity = Math.floor(diff / MINUTE);
  if (quantity > 1) {
    return output(quantity, pluralize(quantity, minute, minutes));
  }
  return output(Math.floor(diff), pluralize(diff, second, seconds));
}
function timestamp(input) {
  if (!input) {
    return now();
  }
  const date = typeof input === "string" ? new Date(input) : input;
  return Math.floor(date.getTime() / 1e3);
}

// src/devices.ts
function isDarkMode() {
  return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function isTouchDevice() {
  return !!window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
}
function prefersReducedMotion() {
  return !!window.matchMedia && window.matchMedia("prefers-reduced-motion").matches;
}

// src/formatters.ts
function formatBoolean(input) {
  return input ? "Yes" : "No";
}
function formatCPF(value) {
  const clearValue = cleanupNumericString(value);
  if (clearValue.length >= 10) {
    return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}.${clearValue.slice(
      6,
      9
    )}-${clearValue.slice(9, 11)}`;
  } else if (clearValue.length >= 7) {
    return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}.${clearValue.slice(6, 9)}`;
  } else if (clearValue.length >= 4) {
    return `${clearValue.slice(0, 3)}.${clearValue.slice(3, 6)}`;
  }
  return clearValue;
}
function formatDateLocale(input, options = {}) {
  const { locale = "en-GB", showTime = false } = options;
  const formatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  };
  if (showTime) {
    formatOptions.hour = "2-digit";
    formatOptions.minute = "2-digit";
  }
  return new Date(input).toLocaleDateString(locale, formatOptions);
}
function formatMoney(input, options = {}) {
  const { decimalChar = ".", showCents = false, symbol = "$", thousandsChar = "," } = options;
  const isNegative = input < 0;
  const value = Math.abs(input);
  const [amount, cents] = value.toFixed(2).split(".");
  const padStart = amount.length > 3 ? amount.length % 3 : 0;
  const initial = amount.slice(0, padStart);
  const remain = amount.slice(padStart).replace(/(\d{3})(?=\d)/g, `$1${thousandsChar}`);
  let formatted = `${remain}`;
  if (initial) {
    formatted = `${initial}${thousandsChar}${remain}`;
  }
  if (cents !== "00" || showCents) {
    formatted += `${decimalChar}${cents}`;
  }
  return `${isNegative ? "-" : ""}${symbol}${formatted}`;
}
function formatPhoneBR(input) {
  const phone = input.replace(/\D/g, "");
  if (phone.length === 8) {
    return phone.replace(/^(\d{4})(\d{4}).*/, "$1-$2");
  }
  if (phone.length === 9) {
    return phone.replace(/^(\d{5})(\d{4}).*/, "$1-$2");
  }
  if (phone.length === 10 || phone.length === 11) {
    return phone.replace(/^(\d{2})(\d{4,5})(\d{4}).*/, "($1) $2-$3");
  }
  return phone;
}
function formatPhoneUS(input) {
  const phone = input.replace(/\D/g, "");
  if (phone.length === 10) {
    return phone.replace(/^(\d{3})(\d{3})(\d{4}).*/, "($1) $2-$3");
  }
  if (phone.length === 11 && phone.startsWith("1")) {
    return phone.replace(/^1(\d{3})(\d{3})(\d{4}).*/, "+1 ($1) $2-$3");
  }
  return phone;
}
function formatPostalCodeBR(value) {
  const clearValue = cleanupNumericString(value);
  if (clearValue.length >= 6) {
    return `${clearValue.slice(0, 5)}-${clearValue.slice(5, 8)}`;
  }
  return clearValue;
}

// src/functions.ts
function demethodize(fn) {
  return (parameter, ...rest) => fn.apply(parameter, rest);
}
async function measureExecutionTime(callback) {
  const start = performance.now();
  const result = await callback();
  const end = performance.now();
  const total = end - start;
  console.log(`Completed in ${Math.ceil(total)} milliseconds`);
  return result;
}
function noop() {
  return void 0;
}
function once(fn) {
  let done = false;
  let result;
  return function Fn(...arguments_) {
    if (!done) {
      done = true;
      result = fn(...arguments_);
    }
    return result;
  };
}
function pipe(...fns) {
  return (input) => fns.reduce((previousValue, fn) => fn(previousValue), input);
}

// src/misc.ts


// src/numbers.ts
function ceil(input, digits = 2) {
  const factor = 10 ** digits;
  return Math.ceil(input * factor) / factor;
}
function clamp(value, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}
function floor(input, digits = 2) {
  const factor = 10 ** digits;
  return Math.floor(input * factor) / factor;
}
function pad(input, length = 2) {
  return `${input}`.padStart(length, "0");
}
function randomNumber(min = 0, max = 10) {
  if (min >= max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function round(input, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(input * factor) / factor;
}

// src/misc.ts
function conditional(cases, defaultCase) {
  for (const [expression, callback] of cases) {
    if (expression) {
      return callback();
    }
  }
  return defaultCase?.();
}
async function copyToClipboard(input) {
  try {
    await navigator.clipboard.writeText(input);
  } catch {
    return false;
  }
  return true;
}
function getDataType(input, toLowerCase = false) {
  const dataTypeName = Object.prototype.toString.call(input).slice(8, -1);
  let output = dataTypeName;
  if (/HTML\w+Element/.test(dataTypeName)) {
    output = "HTMLElement";
  }
  return toLowerCase ? output.toLowerCase() : output;
}
function invariant(condition, message) {
  if (condition) {
    return;
  }
  const value = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].function(message) ? message() : message;
  throw new Error(value);
}
function isJSON(input) {
  try {
    JSON.parse(input);
  } catch {
    return false;
  }
  return true;
}
function isRequired(input = "parameter", Constructable = TypeError) {
  throw new Constructable(`"${input}" is required`);
}
function logger(type, title, data, options = {}) {
  const { collapsed = true, hideTimestamp = false, skip = false, typeColor = "gray" } = options;
  const groupMethod = collapsed ? console.groupCollapsed : console.group;
  const date = /* @__PURE__ */ new Date();
  const parts = [`%c ${type}`];
  const styles = [`color: ${typeColor}; font-weight: lighter;`, "color: inherit;"];
  if (!hideTimestamp) {
    styles.push("color: gray; font-weight: lighter;");
  }
  const time = `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}:${pad(
    date.getSeconds(),
    2
  )}`;
  parts.push(`%c${title}`);
  if (!hideTimestamp) {
    parts.push(`%c@ ${time}`);
  }
  if (!skip) {
    groupMethod(parts.join(" "), ...styles);
    console.log(data);
    console.groupEnd();
  }
}
function nullify(value) {
  return value ?? null;
}
function popupCenter(url, title, width, height) {
  const { screen, screenLeft, screenTop } = window;
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  if (!screenWidth) {
    screenWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  }
  if (!screenHeight) {
    screenHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  }
  const left = screenWidth / 2 - width / 2 + screenLeft;
  const top = screenHeight / 2 - height / 2 + screenTop;
  const popup = window.open(
    url,
    title,
    `menubar=no,location=no,resizable=no,scrollbars=yees,status=no,width=${width},height=${height},top=${top}, left=${left}`
  );
  if (popup) {
    popup.focus();
  }
  return popup;
}
function px(value) {
  return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(value) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].numericString(value) ? `${value}px` : value;
}
function unique(length = 8, options = {}) {
  const {
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = false,
    includeUppercase = true
  } = options;
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!?@#$%^&*+_-=:.~";
  let characters = "";
  if (includeLowercase) {
    characters += lowercase;
  }
  if (includeUppercase) {
    characters += uppercase;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }
  let result = "";
  for (let index = length; index > 0; --index) {
    result += characters[Math.round(Math.random() * (characters.length - 1))];
  }
  return result;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

// src/objects.ts

function cleanUpObject(input) {
  const output = {};
  for (const key in input) {
    if (input[key] !== void 0) {
      output[key] = input[key];
    }
  }
  return output;
}
function getNestedProperty(input, path) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input) && !is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(input) || !path) {
    return input;
  }
  const segments = path.split(".");
  const { length } = segments;
  let output = input;
  for (let index = 0; index < length; index++) {
    const currentSegment = segments[index];
    const remainingSegments = segments.slice(index + 1);
    if (currentSegment === "+" && is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(output) && remainingSegments.length === 1) {
      return output.map((d) => d[remainingSegments.join(".")]);
    }
    try {
      output = output[currentSegment];
    } catch {
    }
  }
  return output;
}
function invertKeys(input) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("Expected an object");
  }
  const result = {};
  for (const [key, value] of Object.entries(input)) {
    result[value] = key;
  }
  return result;
}
function keyMirror(input) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("Expected an object");
  }
  const output = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(output, key)) {
      output[key] = key;
    }
  }
  return output;
}
function mergeProps(defaultProps, props) {
  const cleanProps = cleanUpObject(props);
  return { ...defaultProps, ...cleanProps };
}
function objectEntries(input) {
  return Object.entries(input);
}
function objectKeys(input) {
  return Object.keys(input);
}
function objectToArray(input, includeOnly) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("Expected an object");
  }
  return Object.entries(input).filter(([, value]) => includeOnly ? typeof value === `${includeOnly}` : true).map(([key, value]) => ({ [key]: value }));
}
function omit(input, ...filter) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("Expected an object");
  }
  const output = {};
  for (const key in input) {
    if ({}.hasOwnProperty.call(input, key)) {
      if (!filter.includes(key)) {
        output[key] = input[key];
      }
    }
  }
  return output;
}
function pick(input, ...filter) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("Expected an object");
  }
  if (!filter.length) {
    return input;
  }
  const output = {};
  for (const key in input) {
    if ({}.hasOwnProperty.call(input, key)) {
      if (filter.includes(key)) {
        output[key] = input[key];
      }
    }
  }
  return output;
}
function queryStringFormat(input, options = {}) {
  const { addPrefix = false, encoder = encodeURIComponent, encodeValuesOnly = true } = options;
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input)) {
    throw new TypeError("input type isn't supported");
  }
  const isValidInput = Object.values(input).every((item) => {
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(item)) {
      return item.every((d) => is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(d));
    }
    return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(item);
  });
  if (!isValidInput) {
    throw new TypeError("input format isn't supported");
  }
  const output = Object.entries(input).map(([key, value]) => {
    const nextKey = encodeValuesOnly ? key : encoder(key);
    const nextValue = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(value) ? value.map(encoder).join(",") : encoder(`${value}`);
    return `${nextKey}=${nextValue}`;
  }).join("&");
  return `${addPrefix ? "?" : ""}${output}`;
}
function queryStringParse(input) {
  let search = input;
  if (input.slice(0, 1) === "?") {
    search = input.slice(1);
  }
  return search.split("&").reduce((acc, d) => {
    const [key, value] = d.split("=");
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    return acc;
  }, {});
}
function sortObjectKeys(input) {
  return objectKeys(input).sort().reduce((acc, key) => {
    acc[key] = input[key];
    return acc;
  }, {});
}

// src/statistics.ts

function mean(input, precision) {
  const output = input.reduce((sum, value) => sum + value, 0) / input.length;
  if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(precision)) {
    return round(output, precision);
  }
  return output;
}
function median(input) {
  const sorted = [...input].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}
function mode(input) {
  const count = /* @__PURE__ */ new Map();
  for (const value of input) {
    const current = count.get(value) ?? 0;
    count.set(value, current + 1);
  }
  const sorted = [...count.entries()].sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
}

// src/validators.ts
function isValidCPF(value) {
  if (!value) {
    return false;
  }
  const newValue = value.replace(/[.-]/g, "");
  let sum = 0;
  let rest;
  if (/^(\d)\1+$/.test(newValue)) {
    return false;
  }
  for (let index = 1; index <= 9; index++) {
    sum += parseInt(newValue.substring(index - 1, index), 10) * (11 - index);
  }
  rest = sum * 10 % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(newValue.substring(9, 10), 10)) {
    return false;
  }
  sum = 0;
  for (let index = 1; index <= 10; index++) {
    sum += parseInt(newValue.substring(index - 1, index), 10) * (12 - index);
  }
  rest = sum * 10 % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  return rest === parseInt(newValue.substring(10, 11), 10);
}
function isValidEmail(value) {
  return /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i.test(value);
}
function validatePassword(password, options) {
  const {
    maxLength = 64,
    maxLengthMessage = "Password must be a maximum of 64 characters",
    minLength = 6,
    minLengthMessage = "Password must be at least 6 characters long",
    regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&*?@^]).*$/,
    requiredCharactersMessage = "Password must have at least 1 number, 1 lowercase, 1 uppercase and 1 special character"
  } = options || {};
  if (password.length < minLength) {
    throw new Error(minLengthMessage);
  }
  if (password.length > maxLength) {
    throw new Error(maxLengthMessage);
  }
  if (!regex.test(password)) {
    throw new Error(requiredCharactersMessage);
  }
  return true;
}

// src/types.ts
var types_exports = {};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/is-lite/dist/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/is-lite/dist/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ src_default)
/* harmony export */ });
// src/helpers.ts
var objectTypes = [
  "Array",
  "ArrayBuffer",
  "AsyncFunction",
  "AsyncGenerator",
  "AsyncGeneratorFunction",
  "Date",
  "Error",
  "Function",
  "Generator",
  "GeneratorFunction",
  "HTMLElement",
  "Map",
  "Object",
  "Promise",
  "RegExp",
  "Set",
  "WeakMap",
  "WeakSet"
];
var primitiveTypes = [
  "bigint",
  "boolean",
  "null",
  "number",
  "string",
  "symbol",
  "undefined"
];
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (/HTML\w+Element/.test(objectTypeName)) {
    return "HTMLElement";
  }
  if (isObjectType(objectTypeName)) {
    return objectTypeName;
  }
  return void 0;
}
function isObjectOfType(type) {
  return (value) => getObjectType(value) === type;
}
function isObjectType(name) {
  return objectTypes.includes(name);
}
function isOfType(type) {
  return (value) => typeof value === type;
}
function isPrimitiveType(name) {
  return primitiveTypes.includes(name);
}

// src/index.ts
var DOM_PROPERTIES_TO_CHECK = [
  "innerHTML",
  "ownerDocument",
  "style",
  "attributes",
  "nodeValue"
];
function is(value) {
  if (value === null) {
    return "null";
  }
  switch (typeof value) {
    case "bigint":
      return "bigint";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "symbol":
      return "symbol";
    case "undefined":
      return "undefined";
    default:
  }
  if (is.array(value)) {
    return "Array";
  }
  if (is.plainFunction(value)) {
    return "Function";
  }
  const tagType = getObjectType(value);
  if (tagType) {
    return tagType;
  }
  return "Object";
}
is.array = Array.isArray;
is.arrayOf = (target, predicate) => {
  if (!is.array(target) && !is.function(predicate)) {
    return false;
  }
  return target.every((d) => predicate(d));
};
is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
is.asyncFunction = isObjectOfType("AsyncFunction");
is.bigint = isOfType("bigint");
is.boolean = (value) => {
  return value === true || value === false;
};
is.date = isObjectOfType("Date");
is.defined = (value) => !is.undefined(value);
is.domElement = (value) => {
  return is.object(value) && !is.plainObject(value) && value.nodeType === 1 && is.string(value.nodeName) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
};
is.empty = (value) => {
  return is.string(value) && value.length === 0 || is.array(value) && value.length === 0 || is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0 || is.set(value) && value.size === 0 || is.map(value) && value.size === 0;
};
is.error = isObjectOfType("Error");
is.function = isOfType("function");
is.generator = (value) => {
  return is.iterable(value) && is.function(value.next) && is.function(value.throw);
};
is.generatorFunction = isObjectOfType("GeneratorFunction");
is.instanceOf = (instance, class_) => {
  if (!instance || !class_) {
    return false;
  }
  return Object.getPrototypeOf(instance) === class_.prototype;
};
is.iterable = (value) => {
  return !is.nullOrUndefined(value) && is.function(value[Symbol.iterator]);
};
is.map = isObjectOfType("Map");
is.nan = (value) => {
  return Number.isNaN(value);
};
is.null = (value) => {
  return value === null;
};
is.nullOrUndefined = (value) => {
  return is.null(value) || is.undefined(value);
};
is.number = (value) => {
  return isOfType("number")(value) && !is.nan(value);
};
is.numericString = (value) => {
  return is.string(value) && value.length > 0 && !Number.isNaN(Number(value));
};
is.object = (value) => {
  return !is.nullOrUndefined(value) && (is.function(value) || typeof value === "object");
};
is.oneOf = (target, value) => {
  if (!is.array(target)) {
    return false;
  }
  return target.indexOf(value) > -1;
};
is.plainFunction = isObjectOfType("Function");
is.plainObject = (value) => {
  if (getObjectType(value) !== "Object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.getPrototypeOf({});
};
is.primitive = (value) => is.null(value) || isPrimitiveType(typeof value);
is.promise = isObjectOfType("Promise");
is.propertyOf = (target, key, predicate) => {
  if (!is.object(target) || !key) {
    return false;
  }
  const value = target[key];
  if (is.function(predicate)) {
    return predicate(value);
  }
  return is.defined(value);
};
is.regexp = isObjectOfType("RegExp");
is.set = isObjectOfType("Set");
is.string = isOfType("string");
is.symbol = isOfType("symbol");
is.undefined = isOfType("undefined");
is.weakMap = isObjectOfType("WeakMap");
is.weakSet = isObjectOfType("WeakSet");
var src_default = is;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/react-joyride/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/react-joyride/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIONS: () => (/* binding */ ACTIONS),
/* harmony export */   EVENTS: () => (/* binding */ EVENTS),
/* harmony export */   LIFECYCLE: () => (/* binding */ LIFECYCLE),
/* harmony export */   STATUS: () => (/* binding */ STATUS),
/* harmony export */   "default": () => (/* binding */ components_default)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gilbarbara/deep-equal */ "./node_modules/@gilbarbara/deep-equal/dist/index.mjs");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-lite */ "./node_modules/is-lite/dist/index.mjs");
/* harmony import */ var tree_changes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tree-changes */ "./node_modules/tree-changes/dist/index.mjs");
/* harmony import */ var scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scroll */ "./node_modules/scroll/index.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrollparent */ "./node_modules/scrollparent/scrollparent.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _gilbarbara_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gilbarbara/helpers */ "./node_modules/@gilbarbara/helpers/dist/index.mjs");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var react_floater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-floater */ "./node_modules/react-floater/es/index.js");
/* harmony import */ var react_innertext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-innertext */ "./node_modules/react-innertext/index.js");
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/literals/index.ts
var ACTIONS = {
  INIT: "init",
  START: "start",
  STOP: "stop",
  RESET: "reset",
  PREV: "prev",
  NEXT: "next",
  GO: "go",
  CLOSE: "close",
  SKIP: "skip",
  UPDATE: "update"
};
var EVENTS = {
  TOUR_START: "tour:start",
  STEP_BEFORE: "step:before",
  BEACON: "beacon",
  TOOLTIP: "tooltip",
  STEP_AFTER: "step:after",
  TOUR_END: "tour:end",
  TOUR_STATUS: "tour:status",
  TARGET_NOT_FOUND: "error:target_not_found",
  ERROR: "error"
};
var LIFECYCLE = {
  INIT: "init",
  READY: "ready",
  BEACON: "beacon",
  TOOLTIP: "tooltip",
  COMPLETE: "complete",
  ERROR: "error"
};
var STATUS = {
  IDLE: "idle",
  READY: "ready",
  WAITING: "waiting",
  RUNNING: "running",
  PAUSED: "paused",
  SKIPPED: "skipped",
  FINISHED: "finished",
  ERROR: "error"
};

// src/components/index.tsx





// src/modules/dom.ts


function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function getClientRect(element) {
  if (!element) {
    return null;
  }
  return element.getBoundingClientRect();
}
function getDocumentHeight() {
  const { body, documentElement } = document;
  if (!body || !documentElement) {
    return 0;
  }
  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    documentElement.clientHeight,
    documentElement.scrollHeight,
    documentElement.offsetHeight
  );
}
function getElement(element) {
  if (typeof element === "string") {
    return document.querySelector(element);
  }
  return element;
}
function getStyleComputedProperty(el) {
  if (!el || el.nodeType !== 1) {
    return null;
  }
  return getComputedStyle(el);
}
function getScrollParent(element, skipFix, forListener) {
  if (!element) {
    return scrollDocument();
  }
  const parent = scrollparent__WEBPACK_IMPORTED_MODULE_2__(element);
  if (parent) {
    if (parent.isSameNode(scrollDocument())) {
      if (forListener) {
        return document;
      }
      return scrollDocument();
    }
    const hasScrolling = parent.scrollHeight > parent.offsetHeight;
    if (!hasScrolling && !skipFix) {
      parent.style.overflow = "initial";
      return scrollDocument();
    }
  }
  return parent;
}
function hasCustomScrollParent(element, skipFix) {
  if (!element) {
    return false;
  }
  const parent = getScrollParent(element, skipFix);
  return !parent.isSameNode(scrollDocument());
}
function hasCustomOffsetParent(element) {
  return element.offsetParent !== document.body;
}
function hasPosition(el, type = "fixed") {
  if (!el || !(el instanceof HTMLElement)) {
    return false;
  }
  const { nodeName } = el;
  const styles = getStyleComputedProperty(el);
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (styles && styles.position === type) {
    return true;
  }
  if (!el.parentNode) {
    return false;
  }
  return hasPosition(el.parentNode, type);
}
function isElementVisible(element) {
  var _a;
  if (!element) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) {
      break;
    }
    if (parentElement instanceof HTMLElement) {
      const { display, visibility } = getComputedStyle(parentElement);
      if (display === "none" || visibility === "hidden") {
        return false;
      }
    }
    parentElement = (_a = parentElement.parentElement) != null ? _a : null;
  }
  return true;
}
function getElementPosition(element, offset, skipFix) {
  var _a;
  const elementRect = getClientRect(element);
  const parent = getScrollParent(element, skipFix);
  const hasScrollParent = hasCustomScrollParent(element, skipFix);
  let parentTop = 0;
  if (parent instanceof HTMLElement) {
    parentTop = parent.scrollTop;
  }
  const top = ((_a = elementRect == null ? void 0 : elementRect.top) != null ? _a : 0) + (!hasScrollParent && !hasPosition(element) ? parentTop : 0);
  return Math.floor(top - offset);
}
function getScrollTo(element, offset, skipFix) {
  if (!element) {
    return 0;
  }
  const parent = scrollparent__WEBPACK_IMPORTED_MODULE_2__(element);
  let top = element.offsetTop;
  if (parent && hasCustomScrollParent(element, skipFix) && !hasCustomOffsetParent(element)) {
    top -= parent.offsetTop;
  }
  return Math.floor(top - offset);
}
function scrollDocument() {
  var _a;
  return (_a = document.scrollingElement) != null ? _a : document.documentElement;
}
function scrollTo(value, options) {
  const { duration, element } = options;
  return new Promise((resolve, reject) => {
    const { scrollTop } = element;
    const limit = value > scrollTop ? value - scrollTop : scrollTop - value;
    scroll__WEBPACK_IMPORTED_MODULE_1__.top(element, value, { duration: limit < 100 ? 50 : duration }, (error) => {
      if (error && error.message !== "Element already at target scroll position") {
        return reject(error);
      }
      return resolve();
    });
  });
}

// src/modules/helpers.ts



var isReact16 = react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal !== void 0;
function getBrowser(userAgent = navigator.userAgent) {
  let browser = userAgent;
  if (typeof window === "undefined") {
    browser = "node";
  } else if (document.documentMode) {
    browser = "ie";
  } else if (/Edge/.test(userAgent)) {
    browser = "edge";
  } else if (Boolean(window.opera) || userAgent.includes(" OPR/")) {
    browser = "opera";
  } else if (typeof window.InstallTrigger !== "undefined") {
    browser = "firefox";
  } else if (window.chrome) {
    browser = "chrome";
  } else if (/(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(userAgent)) {
    browser = "safari";
  }
  return browser;
}
function getText(root) {
  const content = [];
  const recurse = (child) => {
    if (typeof child === "string" || typeof child === "number") {
      content.push(child);
    } else if (Array.isArray(child)) {
      child.forEach((c) => recurse(c));
    } else if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      const { children } = child.props;
      if (Array.isArray(children)) {
        children.forEach((c) => recurse(c));
      } else {
        recurse(children);
      }
    }
  };
  recurse(root);
  return content.join(" ").trim();
}
function hasValidKeys(object, keys) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].plainObject(object) || !is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].array(keys)) {
    return false;
  }
  return Object.keys(object).every((d) => keys.includes(d));
}
function hexToRGB(hex) {
  const shorthandRegex = /^#?([\da-f])([\da-f])([\da-f])$/i;
  const properHex = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(properHex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [];
}
function hideBeacon(step) {
  return step.disableBeacon || step.placement === "center";
}
function isLegacy() {
  return !["chrome", "safari", "firefox", "opera"].includes(getBrowser());
}
function log({ data, debug = false, title, warn = false }) {
  const logFn = warn ? console.warn || console.error : console.log;
  if (debug) {
    if (title && data) {
      console.groupCollapsed(
        `%creact-joyride: ${title}`,
        "color: #ff0044; font-weight: bold; font-size: 12px;"
      );
      if (Array.isArray(data)) {
        data.forEach((d) => {
          if (is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].plainObject(d) && d.key) {
            logFn.apply(console, [d.key, d.value]);
          } else {
            logFn.apply(console, [d]);
          }
        });
      } else {
        logFn.apply(console, [data]);
      }
      console.groupEnd();
    } else {
      console.error("Missing title or data props");
    }
  }
}
function shouldScroll(options) {
  const { isFirstStep, lifecycle, previousLifecycle, scrollToFirstStep, step, target } = options;
  return !step.disableScrolling && (!isFirstStep || scrollToFirstStep || lifecycle === LIFECYCLE.TOOLTIP) && step.placement !== "center" && (!step.isFixed || !hasPosition(target)) && // fixed steps don't need to scroll
  previousLifecycle !== lifecycle && [LIFECYCLE.BEACON, LIFECYCLE.TOOLTIP].includes(lifecycle);
}

// src/modules/step.ts




// src/defaults.ts

var defaultFloaterProps = {
  options: {
    preventOverflow: {
      boundariesElement: "scrollParent"
    }
  },
  wrapperOptions: {
    offset: -18,
    position: true
  }
};
var defaultLocale = {
  back: "Back",
  close: "Close",
  last: "Last",
  next: "Next",
  open: "Open the dialog",
  skip: "Skip"
};
var defaultStep = {
  event: "click",
  placement: "bottom",
  offset: 10,
  disableBeacon: false,
  disableCloseOnEsc: false,
  disableOverlay: false,
  disableOverlayClose: false,
  disableScrollParentFix: false,
  disableScrolling: false,
  hideBackButton: false,
  hideCloseButton: false,
  hideFooter: false,
  isFixed: false,
  locale: defaultLocale,
  showProgress: false,
  showSkipButton: false,
  spotlightClicks: false,
  spotlightPadding: 10
};
var defaultProps = {
  continuous: false,
  debug: false,
  disableCloseOnEsc: false,
  disableOverlay: false,
  disableOverlayClose: false,
  disableScrolling: false,
  disableScrollParentFix: false,
  getHelpers: (0,_gilbarbara_helpers__WEBPACK_IMPORTED_MODULE_6__.noop)(),
  hideBackButton: false,
  run: true,
  scrollOffset: 20,
  scrollDuration: 300,
  scrollToFirstStep: false,
  showSkipButton: false,
  showProgress: false,
  spotlightClicks: false,
  spotlightPadding: 10,
  steps: []
};

// src/styles.ts

var defaultOptions = {
  arrowColor: "#fff",
  backgroundColor: "#fff",
  beaconSize: 36,
  overlayColor: "rgba(0, 0, 0, 0.5)",
  primaryColor: "#f04",
  spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
  textColor: "#333",
  width: 380,
  zIndex: 100
};
var buttonBase = {
  backgroundColor: "transparent",
  border: 0,
  borderRadius: 0,
  color: "#555",
  cursor: "pointer",
  fontSize: 16,
  lineHeight: 1,
  padding: 8,
  WebkitAppearance: "none"
};
var spotlight = {
  borderRadius: 4,
  position: "absolute"
};
function getStyles(propsStyles, stepStyles) {
  const mergedStyles = deepmerge__WEBPACK_IMPORTED_MODULE_5__(propsStyles != null ? propsStyles : {}, stepStyles != null ? stepStyles : {});
  const options = deepmerge__WEBPACK_IMPORTED_MODULE_5__(defaultOptions, mergedStyles.options || {});
  let { width } = options;
  if (window.innerWidth > 480) {
    width = 380;
  }
  if ("width" in options) {
    width = typeof options.width === "number" && window.innerWidth < options.width ? window.innerWidth - 30 : options.width;
  }
  const overlay = {
    bottom: 0,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: options.zIndex
  };
  const defaultStyles = {
    beacon: {
      ...buttonBase,
      display: "inline-block",
      height: options.beaconSize,
      position: "relative",
      width: options.beaconSize,
      zIndex: options.zIndex
    },
    beaconInner: {
      animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
      backgroundColor: options.primaryColor,
      borderRadius: "50%",
      display: "block",
      height: "50%",
      left: "50%",
      opacity: 0.7,
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%"
    },
    beaconOuter: {
      animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
      backgroundColor: `rgba(${hexToRGB(options.primaryColor).join(",")}, 0.2)`,
      border: `2px solid ${options.primaryColor}`,
      borderRadius: "50%",
      boxSizing: "border-box",
      display: "block",
      height: "100%",
      left: 0,
      opacity: 0.9,
      position: "absolute",
      top: 0,
      transformOrigin: "center",
      width: "100%"
    },
    tooltip: {
      backgroundColor: options.backgroundColor,
      borderRadius: 5,
      boxSizing: "border-box",
      color: options.textColor,
      fontSize: 16,
      maxWidth: "100%",
      padding: 15,
      position: "relative",
      width
    },
    tooltipContainer: {
      lineHeight: 1.4,
      textAlign: "center"
    },
    tooltipTitle: {
      fontSize: 18,
      margin: 0
    },
    tooltipContent: {
      padding: "20px 10px"
    },
    tooltipFooter: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 15
    },
    tooltipFooterSpacer: {
      flex: 1
    },
    buttonNext: {
      ...buttonBase,
      backgroundColor: options.primaryColor,
      borderRadius: 4,
      color: "#fff"
    },
    buttonBack: {
      ...buttonBase,
      color: options.primaryColor,
      marginLeft: "auto",
      marginRight: 5
    },
    buttonClose: {
      ...buttonBase,
      color: options.textColor,
      height: 14,
      padding: 15,
      position: "absolute",
      right: 0,
      top: 0,
      width: 14
    },
    buttonSkip: {
      ...buttonBase,
      color: options.textColor,
      fontSize: 14
    },
    overlay: {
      ...overlay,
      backgroundColor: options.overlayColor,
      mixBlendMode: "hard-light"
    },
    overlayLegacy: {
      ...overlay
    },
    overlayLegacyCenter: {
      ...overlay,
      backgroundColor: options.overlayColor
    },
    spotlight: {
      ...spotlight,
      backgroundColor: "gray"
    },
    spotlightLegacy: {
      ...spotlight,
      boxShadow: `0 0 0 9999px ${options.overlayColor}, ${options.spotlightShadow}`
    },
    floaterStyles: {
      arrow: {
        color: options.arrowColor
      },
      options: {
        zIndex: options.zIndex + 100
      }
    },
    options
  };
  return deepmerge__WEBPACK_IMPORTED_MODULE_5__(defaultStyles, mergedStyles);
}

// src/modules/step.ts
function getTourProps(props) {
  return (0,_gilbarbara_helpers__WEBPACK_IMPORTED_MODULE_6__.pick)(
    props,
    "beaconComponent",
    "disableCloseOnEsc",
    "disableOverlay",
    "disableOverlayClose",
    "disableScrolling",
    "disableScrollParentFix",
    "floaterProps",
    "hideBackButton",
    "hideCloseButton",
    "locale",
    "showProgress",
    "showSkipButton",
    "spotlightClicks",
    "spotlightPadding",
    "styles",
    "tooltipComponent"
  );
}
function getMergedStep(currentStep, props) {
  var _a, _b, _c, _d, _e, _f;
  const step = currentStep != null ? currentStep : {};
  const mergedStep = deepmerge__WEBPACK_IMPORTED_MODULE_5__.all([defaultStep, getTourProps(props), step], {
    isMergeableObject: is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].plainObject
  });
  const mergedStyles = getStyles(props.styles, mergedStep.styles);
  const scrollParent2 = hasCustomScrollParent(
    getElement(mergedStep.target),
    mergedStep.disableScrollParentFix
  );
  const floaterProps = deepmerge__WEBPACK_IMPORTED_MODULE_5__.all([
    defaultFloaterProps,
    (_a = props.floaterProps) != null ? _a : {},
    (_b = mergedStep.floaterProps) != null ? _b : {}
  ]);
  floaterProps.offset = mergedStep.offset;
  floaterProps.styles = deepmerge__WEBPACK_IMPORTED_MODULE_5__((_c = floaterProps.styles) != null ? _c : {}, mergedStyles.floaterStyles);
  floaterProps.offset += (_e = (_d = props.spotlightPadding) != null ? _d : mergedStep.spotlightPadding) != null ? _e : 0;
  if (mergedStep.placementBeacon && floaterProps.wrapperOptions) {
    floaterProps.wrapperOptions.placement = mergedStep.placementBeacon;
  }
  if (scrollParent2 && floaterProps.options.preventOverflow) {
    floaterProps.options.preventOverflow.boundariesElement = "window";
  }
  return {
    ...mergedStep,
    locale: deepmerge__WEBPACK_IMPORTED_MODULE_5__.all([defaultLocale, (_f = props.locale) != null ? _f : {}, mergedStep.locale || {}]),
    floaterProps,
    styles: (0,_gilbarbara_helpers__WEBPACK_IMPORTED_MODULE_6__.omit)(mergedStyles, "floaterStyles")
  };
}
function validateStep(step, debug = false) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].plainObject(step)) {
    log({
      title: "validateStep",
      data: "step must be an object",
      warn: true,
      debug
    });
    return false;
  }
  if (!step.target) {
    log({
      title: "validateStep",
      data: "target is missing from the step",
      warn: true,
      debug
    });
    return false;
  }
  return true;
}
function validateSteps(steps, debug = false) {
  if (!is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].array(steps)) {
    log({
      title: "validateSteps",
      data: "steps must be an array",
      warn: true,
      debug
    });
    return false;
  }
  return steps.every((d) => validateStep(d, debug));
}

// src/modules/store.ts

var defaultState = {
  action: "init",
  controlled: false,
  index: 0,
  lifecycle: LIFECYCLE.INIT,
  size: 0,
  status: STATUS.IDLE
};
var validKeys = ["action", "index", "lifecycle", "status"];
var Store = class {
  constructor(options) {
    __publicField(this, "data", /* @__PURE__ */ new Map());
    __publicField(this, "listener");
    __publicField(this, "store", /* @__PURE__ */ new Map());
    __publicField(this, "addListener", (listener) => {
      this.listener = listener;
    });
    __publicField(this, "setSteps", (steps) => {
      const { size, status } = this.getState();
      const state = {
        size: steps.length,
        status
      };
      this.data.set("steps", steps);
      if (status === STATUS.WAITING && !size && steps.length) {
        state.status = STATUS.RUNNING;
      }
      this.setState(state);
    });
    __publicField(this, "close", () => {
      const { index, status } = this.getState();
      if (status !== STATUS.RUNNING) {
        return;
      }
      this.setState({
        ...this.getNextState({ action: ACTIONS.CLOSE, index: index + 1 })
      });
    });
    __publicField(this, "go", (nextIndex) => {
      const { controlled, status } = this.getState();
      if (controlled || status !== STATUS.RUNNING) {
        return;
      }
      const step = this.getSteps()[nextIndex];
      this.setState({
        ...this.getNextState({ action: ACTIONS.GO, index: nextIndex }),
        status: step ? status : STATUS.FINISHED
      });
    });
    __publicField(this, "info", () => this.getState());
    __publicField(this, "next", () => {
      const { index, status } = this.getState();
      if (status !== STATUS.RUNNING) {
        return;
      }
      this.setState(this.getNextState({ action: ACTIONS.NEXT, index: index + 1 }));
    });
    __publicField(this, "open", () => {
      const { status } = this.getState();
      if (status !== STATUS.RUNNING) {
        return;
      }
      this.setState({
        ...this.getNextState({ action: ACTIONS.UPDATE, lifecycle: LIFECYCLE.TOOLTIP })
      });
    });
    __publicField(this, "prev", () => {
      const { index, status } = this.getState();
      if (status !== STATUS.RUNNING) {
        return;
      }
      this.setState({
        ...this.getNextState({ action: ACTIONS.PREV, index: index - 1 })
      });
    });
    __publicField(this, "reset", (restart = false) => {
      const { controlled } = this.getState();
      if (controlled) {
        return;
      }
      this.setState({
        ...this.getNextState({ action: ACTIONS.RESET, index: 0 }),
        status: restart ? STATUS.RUNNING : STATUS.READY
      });
    });
    __publicField(this, "skip", () => {
      const { status } = this.getState();
      if (status !== STATUS.RUNNING) {
        return;
      }
      this.setState({
        action: ACTIONS.SKIP,
        lifecycle: LIFECYCLE.INIT,
        status: STATUS.SKIPPED
      });
    });
    __publicField(this, "start", (nextIndex) => {
      const { index, size } = this.getState();
      this.setState({
        ...this.getNextState(
          {
            action: ACTIONS.START,
            index: is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(nextIndex) ? nextIndex : index
          },
          true
        ),
        status: size ? STATUS.RUNNING : STATUS.WAITING
      });
    });
    __publicField(this, "stop", (advance = false) => {
      const { index, status } = this.getState();
      if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
        return;
      }
      this.setState({
        ...this.getNextState({ action: ACTIONS.STOP, index: index + (advance ? 1 : 0) }),
        status: STATUS.PAUSED
      });
    });
    __publicField(this, "update", (state) => {
      var _a;
      if (!hasValidKeys(state, validKeys)) {
        throw new Error(`State is not valid. Valid keys: ${validKeys.join(", ")}`);
      }
      this.setState({
        ...this.getNextState(
          {
            ...this.getState(),
            ...state,
            action: (_a = state.action) != null ? _a : ACTIONS.UPDATE
          },
          true
        )
      });
    });
    const { continuous = false, stepIndex, steps = [] } = options != null ? options : {};
    this.setState(
      {
        action: ACTIONS.INIT,
        controlled: is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(stepIndex),
        continuous,
        index: is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(stepIndex) ? stepIndex : 0,
        lifecycle: LIFECYCLE.INIT,
        status: steps.length ? STATUS.READY : STATUS.IDLE
      },
      true
    );
    this.listener = null;
    this.setSteps(steps);
  }
  getState() {
    if (!this.store.size) {
      return { ...defaultState };
    }
    return {
      action: this.store.get("action") || "",
      controlled: this.store.get("controlled") || false,
      index: parseInt(this.store.get("index"), 10),
      lifecycle: this.store.get("lifecycle") || "",
      size: this.store.get("size") || 0,
      status: this.store.get("status") || ""
    };
  }
  getNextState(state, force = false) {
    var _a, _b, _c, _d;
    const { action, controlled, index, size, status } = this.getState();
    const newIndex = is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(state.index) ? state.index : index;
    const nextIndex = controlled && !force ? index : Math.min(Math.max(newIndex, 0), size);
    return {
      action: (_a = state.action) != null ? _a : action,
      controlled,
      index: nextIndex,
      lifecycle: (_b = state.lifecycle) != null ? _b : LIFECYCLE.INIT,
      size: (_c = state.size) != null ? _c : size,
      status: nextIndex === size ? STATUS.FINISHED : (_d = state.status) != null ? _d : status
    };
  }
  getSteps() {
    const steps = this.data.get("steps");
    return Array.isArray(steps) ? steps : [];
  }
  hasUpdatedState(oldState) {
    const before = JSON.stringify(oldState);
    const after = JSON.stringify(this.getState());
    return before !== after;
  }
  setState(nextState, initial = false) {
    const state = this.getState();
    const { action, index, lifecycle, size, status } = {
      ...state,
      ...nextState
    };
    this.store.set("action", action);
    this.store.set("index", index);
    this.store.set("lifecycle", lifecycle);
    this.store.set("size", size);
    this.store.set("status", status);
    if (initial) {
      this.store.set("controlled", nextState.controlled);
      this.store.set("continuous", nextState.continuous);
    }
    if (this.listener && this.hasUpdatedState(state)) {
      this.listener(this.getState());
    }
  }
  getHelpers() {
    return {
      close: this.close,
      go: this.go,
      info: this.info,
      next: this.next,
      open: this.open,
      prev: this.prev,
      reset: this.reset,
      skip: this.skip
    };
  }
};
function createStore(options) {
  return new Store(options);
}

// src/components/Step.tsx





// src/modules/scope.ts
var Scope = class {
  constructor(element, options) {
    __publicField(this, "element");
    __publicField(this, "options");
    __publicField(this, "canBeTabbed", (element) => {
      const { tabIndex } = element;
      if (tabIndex === null || tabIndex < 0) {
        return false;
      }
      return this.canHaveFocus(element);
    });
    __publicField(this, "canHaveFocus", (element) => {
      const validTabNodes = /input|select|textarea|button|object/;
      const nodeName = element.nodeName.toLowerCase();
      const isValid = validTabNodes.test(nodeName) && !element.getAttribute("disabled") || nodeName === "a" && !!element.getAttribute("href");
      return isValid && this.isVisible(element);
    });
    __publicField(this, "findValidTabElements", () => [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed));
    __publicField(this, "handleKeyDown", (event) => {
      const { code = "Tab" } = this.options;
      if (event.code === code) {
        this.interceptTab(event);
      }
    });
    __publicField(this, "interceptTab", (event) => {
      event.preventDefault();
      const elements = this.findValidTabElements();
      const { shiftKey } = event;
      if (!elements.length) {
        return;
      }
      let x = document.activeElement ? elements.indexOf(document.activeElement) : 0;
      if (x === -1 || !shiftKey && x + 1 === elements.length) {
        x = 0;
      } else if (shiftKey && x === 0) {
        x = elements.length - 1;
      } else {
        x += shiftKey ? -1 : 1;
      }
      elements[x].focus();
    });
    // eslint-disable-next-line class-methods-use-this
    __publicField(this, "isHidden", (element) => {
      const noSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
      const style = window.getComputedStyle(element);
      if (noSize && !element.innerHTML) {
        return true;
      }
      return noSize && style.getPropertyValue("overflow") !== "visible" || style.getPropertyValue("display") === "none";
    });
    __publicField(this, "isVisible", (element) => {
      let parentElement = element;
      while (parentElement) {
        if (parentElement instanceof HTMLElement) {
          if (parentElement === document.body) {
            break;
          }
          if (this.isHidden(parentElement)) {
            return false;
          }
          parentElement = parentElement.parentNode;
        }
      }
      return true;
    });
    __publicField(this, "removeScope", () => {
      window.removeEventListener("keydown", this.handleKeyDown);
    });
    __publicField(this, "checkFocus", (target) => {
      if (document.activeElement !== target) {
        target.focus();
        window.requestAnimationFrame(() => this.checkFocus(target));
      }
    });
    __publicField(this, "setFocus", () => {
      const { selector } = this.options;
      if (!selector) {
        return;
      }
      const target = this.element.querySelector(selector);
      if (target) {
        window.requestAnimationFrame(() => this.checkFocus(target));
      }
    });
    if (!(element instanceof HTMLElement)) {
      throw new TypeError("Invalid parameter: element must be an HTMLElement");
    }
    this.element = element;
    this.options = options;
    window.addEventListener("keydown", this.handleKeyDown, false);
    this.setFocus();
  }
};

// src/components/Beacon.tsx



var JoyrideBeacon = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    __publicField(this, "beacon", null);
    __publicField(this, "setBeaconRef", (c) => {
      this.beacon = c;
    });
    if (props.beaconComponent) {
      return;
    }
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.id = "joyride-beacon-animation";
    if (props.nonce) {
      style.setAttribute("nonce", props.nonce);
    }
    const css = `
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `;
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
  componentDidMount() {
    const { shouldFocus } = this.props;
    if (true) {
      if (!is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].domElement(this.beacon)) {
        console.warn("beacon is not a valid DOM element");
      }
    }
    setTimeout(() => {
      if (is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].domElement(this.beacon) && shouldFocus) {
        this.beacon.focus();
      }
    }, 0);
  }
  componentWillUnmount() {
    const style = document.getElementById("joyride-beacon-animation");
    if (style == null ? void 0 : style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }
  render() {
    const {
      beaconComponent,
      continuous,
      index,
      isLastStep,
      locale,
      onClickOrHover,
      size,
      step,
      styles
    } = this.props;
    const title = is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].string(locale.open) ? locale.open : react_innertext__WEBPACK_IMPORTED_MODULE_8__(locale.open);
    const sharedProps = {
      "aria-label": title,
      onClick: onClickOrHover,
      onMouseEnter: onClickOrHover,
      ref: this.setBeaconRef,
      title
    };
    let component;
    if (beaconComponent) {
      const BeaconComponent = beaconComponent;
      component = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        BeaconComponent,
        {
          continuous,
          index,
          isLastStep,
          size,
          step,
          ...sharedProps
        }
      );
    } else {
      component = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "button",
        {
          key: "JoyrideBeacon",
          className: "react-joyride__beacon",
          "data-test-id": "button-beacon",
          style: styles.beacon,
          type: "button",
          ...sharedProps
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: styles.beaconInner }),
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: styles.beaconOuter })
      );
    }
    return component;
  }
};

// src/components/Overlay.tsx



// src/components/Spotlight.tsx

function JoyrideSpotlight({ styles }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      key: "JoyrideSpotlight",
      className: "react-joyride__spotlight",
      "data-test-id": "spotlight",
      style: styles
    }
  );
}
var Spotlight_default = JoyrideSpotlight;

// src/components/Overlay.tsx
var JoyrideOverlay = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "isActive", false);
    __publicField(this, "resizeTimeout");
    __publicField(this, "scrollTimeout");
    __publicField(this, "scrollParent");
    __publicField(this, "state", {
      isScrolling: false,
      mouseOverSpotlight: false,
      showSpotlight: true
    });
    __publicField(this, "handleMouseMove", (event) => {
      const { mouseOverSpotlight } = this.state;
      const { height, left, position, top, width } = this.spotlightStyles;
      const offsetY = position === "fixed" ? event.clientY : event.pageY;
      const offsetX = position === "fixed" ? event.clientX : event.pageX;
      const inSpotlightHeight = offsetY >= top && offsetY <= top + height;
      const inSpotlightWidth = offsetX >= left && offsetX <= left + width;
      const inSpotlight = inSpotlightWidth && inSpotlightHeight;
      if (inSpotlight !== mouseOverSpotlight) {
        this.updateState({ mouseOverSpotlight: inSpotlight });
      }
    });
    __publicField(this, "handleScroll", () => {
      const { target } = this.props;
      const element = getElement(target);
      if (this.scrollParent !== document) {
        const { isScrolling } = this.state;
        if (!isScrolling) {
          this.updateState({ isScrolling: true, showSpotlight: false });
        }
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = window.setTimeout(() => {
          this.updateState({ isScrolling: false, showSpotlight: true });
        }, 50);
      } else if (hasPosition(element, "sticky")) {
        this.updateState({});
      }
    });
    __publicField(this, "handleResize", () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = window.setTimeout(() => {
        if (!this.isActive) {
          return;
        }
        this.forceUpdate();
      }, 100);
    });
  }
  componentDidMount() {
    const { debug, disableScrolling, disableScrollParentFix = false, target } = this.props;
    const element = getElement(target);
    this.scrollParent = getScrollParent(element != null ? element : document.body, disableScrollParentFix, true);
    this.isActive = true;
    if (true) {
      if (!disableScrolling && hasCustomScrollParent(element, true)) {
        log({
          title: "step has a custom scroll parent and can cause trouble with scrolling",
          data: [{ key: "parent", value: this.scrollParent }],
          debug
        });
      }
    }
    window.addEventListener("resize", this.handleResize);
  }
  componentDidUpdate(previousProps) {
    var _a;
    const { lifecycle, spotlightClicks } = this.props;
    const { changed } = (0,tree_changes__WEBPACK_IMPORTED_MODULE_9__["default"])(previousProps, this.props);
    if (changed("lifecycle", LIFECYCLE.TOOLTIP)) {
      (_a = this.scrollParent) == null ? void 0 : _a.addEventListener("scroll", this.handleScroll, { passive: true });
      setTimeout(() => {
        const { isScrolling } = this.state;
        if (!isScrolling) {
          this.updateState({ showSpotlight: true });
        }
      }, 100);
    }
    if (changed("spotlightClicks") || changed("disableOverlay") || changed("lifecycle")) {
      if (spotlightClicks && lifecycle === LIFECYCLE.TOOLTIP) {
        window.addEventListener("mousemove", this.handleMouseMove, false);
      } else if (lifecycle !== LIFECYCLE.TOOLTIP) {
        window.removeEventListener("mousemove", this.handleMouseMove);
      }
    }
  }
  componentWillUnmount() {
    var _a;
    this.isActive = false;
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("resize", this.handleResize);
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.scrollTimeout);
    (_a = this.scrollParent) == null ? void 0 : _a.removeEventListener("scroll", this.handleScroll);
  }
  get spotlightStyles() {
    var _a, _b, _c;
    const { showSpotlight } = this.state;
    const {
      disableScrollParentFix = false,
      spotlightClicks,
      spotlightPadding = 0,
      styles,
      target
    } = this.props;
    const element = getElement(target);
    const elementRect = getClientRect(element);
    const isFixedTarget = hasPosition(element);
    const top = getElementPosition(element, spotlightPadding, disableScrollParentFix);
    return {
      ...isLegacy() ? styles.spotlightLegacy : styles.spotlight,
      height: Math.round(((_a = elementRect == null ? void 0 : elementRect.height) != null ? _a : 0) + spotlightPadding * 2),
      left: Math.round(((_b = elementRect == null ? void 0 : elementRect.left) != null ? _b : 0) - spotlightPadding),
      opacity: showSpotlight ? 1 : 0,
      pointerEvents: spotlightClicks ? "none" : "auto",
      position: isFixedTarget ? "fixed" : "absolute",
      top,
      transition: "opacity 0.2s",
      width: Math.round(((_c = elementRect == null ? void 0 : elementRect.width) != null ? _c : 0) + spotlightPadding * 2)
    };
  }
  updateState(state) {
    if (!this.isActive) {
      return;
    }
    this.setState((previousState) => ({ ...previousState, ...state }));
  }
  render() {
    const { mouseOverSpotlight, showSpotlight } = this.state;
    const { disableOverlay, disableOverlayClose, lifecycle, onClickOverlay, placement, styles } = this.props;
    if (disableOverlay || lifecycle !== LIFECYCLE.TOOLTIP) {
      return null;
    }
    let baseStyles = styles.overlay;
    if (isLegacy()) {
      baseStyles = placement === "center" ? styles.overlayLegacyCenter : styles.overlayLegacy;
    }
    const stylesOverlay = {
      cursor: disableOverlayClose ? "default" : "pointer",
      height: getDocumentHeight(),
      pointerEvents: mouseOverSpotlight ? "none" : "auto",
      ...baseStyles
    };
    let spotlight2 = placement !== "center" && showSpotlight && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Spotlight_default, { styles: this.spotlightStyles });
    if (getBrowser() === "safari") {
      const { mixBlendMode, zIndex, ...safarOverlay } = stylesOverlay;
      spotlight2 = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { ...safarOverlay } }, spotlight2);
      delete stylesOverlay.backgroundColor;
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: "react-joyride__overlay",
        "data-test-id": "overlay",
        onClick: onClickOverlay,
        role: "presentation",
        style: stylesOverlay
      },
      spotlight2
    );
  }
};

// src/components/Portal.tsx


var JoyridePortal = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "node", null);
  }
  componentDidMount() {
    const { id } = this.props;
    if (!canUseDOM()) {
      return;
    }
    this.node = document.createElement("div");
    this.node.id = id;
    document.body.appendChild(this.node);
    if (!isReact16) {
      this.renderReact15();
    }
  }
  componentDidUpdate() {
    if (!canUseDOM()) {
      return;
    }
    if (!isReact16) {
      this.renderReact15();
    }
  }
  componentWillUnmount() {
    if (!canUseDOM() || !this.node) {
      return;
    }
    if (!isReact16) {
      react_dom__WEBPACK_IMPORTED_MODULE_3__.unmountComponentAtNode(this.node);
    }
    if (this.node.parentNode === document.body) {
      document.body.removeChild(this.node);
      this.node = null;
    }
  }
  renderReact15() {
    if (!canUseDOM()) {
      return;
    }
    const { children } = this.props;
    if (this.node) {
      react_dom__WEBPACK_IMPORTED_MODULE_3__.unstable_renderSubtreeIntoContainer(this, children, this.node);
    }
  }
  renderReact16() {
    if (!canUseDOM() || !isReact16) {
      return null;
    }
    const { children } = this.props;
    if (!this.node) {
      return null;
    }
    return react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal(children, this.node);
  }
  render() {
    if (!isReact16) {
      return null;
    }
    return this.renderReact16();
  }
};

// src/components/Tooltip/index.tsx


// src/components/Tooltip/Container.tsx



// src/components/Tooltip/CloseButton.tsx

function JoyrideTooltipCloseButton({ styles, ...props }) {
  const { color, height, width, ...style } = styles;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", { style, type: "button", ...props }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
    "svg",
    {
      height: typeof height === "number" ? `${height}px` : height,
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 18 18",
      width: typeof width === "number" ? `${width}px` : width,
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("g", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(
      "path",
      {
        d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
        fill: color
      }
    ))
  ));
}
var CloseButton_default = JoyrideTooltipCloseButton;

// src/components/Tooltip/Container.tsx
function JoyrideTooltipContainer(props) {
  const {
    backProps,
    closeProps,
    continuous,
    index,
    isLastStep,
    primaryProps,
    size,
    skipProps,
    step,
    tooltipProps
  } = props;
  const {
    content,
    hideBackButton,
    hideCloseButton,
    hideFooter,
    locale,
    showProgress,
    showSkipButton,
    styles,
    title
  } = step;
  const { back, close, last, next, skip } = locale;
  const output = {
    primary: close
  };
  if (continuous) {
    output.primary = isLastStep ? last : next;
    if (showProgress) {
      output.primary = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, output.primary, " (", index + 1, "/", size, ")");
    }
  }
  if (showSkipButton && !isLastStep) {
    output.skip = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "button",
      {
        "aria-live": "off",
        "data-test-id": "button-skip",
        style: styles.buttonSkip,
        type: "button",
        ...skipProps
      },
      skip
    );
  }
  if (!hideBackButton && index > 0) {
    output.back = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { "data-test-id": "button-back", style: styles.buttonBack, type: "button", ...backProps }, back);
  }
  output.close = !hideCloseButton && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButton_default, { "data-test-id": "button-close", styles: styles.buttonClose, ...closeProps });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      key: "JoyrideTooltip",
      className: "react-joyride__tooltip",
      style: styles.tooltip,
      ...tooltipProps
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.tooltipContainer }, title && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { "aria-label": react_innertext__WEBPACK_IMPORTED_MODULE_8__(title), style: styles.tooltipTitle }, title), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.tooltipContent }, content)),
    !hideFooter && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.tooltipFooter }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.tooltipFooterSpacer }, output.skip), output.back, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "button",
      {
        "data-test-id": "button-primary",
        style: styles.buttonNext,
        type: "button",
        ...primaryProps
      },
      output.primary
    )),
    output.close
  );
}
var Container_default = JoyrideTooltipContainer;

// src/components/Tooltip/index.tsx
var JoyrideTooltip = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "handleClickBack", (event) => {
      event.preventDefault();
      const { helpers } = this.props;
      helpers.prev();
    });
    __publicField(this, "handleClickClose", (event) => {
      event.preventDefault();
      const { helpers } = this.props;
      helpers.close();
    });
    __publicField(this, "handleClickPrimary", (event) => {
      event.preventDefault();
      const { continuous, helpers } = this.props;
      if (!continuous) {
        helpers.close();
        return;
      }
      helpers.next();
    });
    __publicField(this, "handleClickSkip", (event) => {
      event.preventDefault();
      const { helpers } = this.props;
      helpers.skip();
    });
    __publicField(this, "getElementsProps", () => {
      const { continuous, isLastStep, setTooltipRef, step } = this.props;
      const back = getText(step.locale.back);
      const close = getText(step.locale.close);
      const last = getText(step.locale.last);
      const next = getText(step.locale.next);
      const skip = getText(step.locale.skip);
      let primaryText = continuous ? next : close;
      if (isLastStep) {
        primaryText = last;
      }
      return {
        backProps: {
          "aria-label": back,
          "data-action": "back",
          onClick: this.handleClickBack,
          role: "button",
          title: back
        },
        closeProps: {
          "aria-label": close,
          "data-action": "close",
          onClick: this.handleClickClose,
          role: "button",
          title: close
        },
        primaryProps: {
          "aria-label": primaryText,
          "data-action": "primary",
          onClick: this.handleClickPrimary,
          role: "button",
          title: primaryText
        },
        skipProps: {
          "aria-label": skip,
          "data-action": "skip",
          onClick: this.handleClickSkip,
          role: "button",
          title: skip
        },
        tooltipProps: {
          "aria-modal": true,
          ref: setTooltipRef,
          role: "alertdialog"
        }
      };
    });
  }
  render() {
    const { continuous, index, isLastStep, setTooltipRef, size, step } = this.props;
    const { beaconComponent, tooltipComponent, ...cleanStep } = step;
    let component;
    if (tooltipComponent) {
      const renderProps = {
        ...this.getElementsProps(),
        continuous,
        index,
        isLastStep,
        size,
        step: cleanStep,
        setTooltipRef
      };
      const TooltipComponent = tooltipComponent;
      component = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(TooltipComponent, { ...renderProps });
    } else {
      component = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        Container_default,
        {
          ...this.getElementsProps(),
          continuous,
          index,
          isLastStep,
          size,
          step
        }
      );
    }
    return component;
  }
};

// src/components/Step.tsx
var JoyrideStep = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "beaconPopper", null);
    __publicField(this, "scope", null);
    __publicField(this, "tooltip", null);
    __publicField(this, "tooltipPopper", null);
    /**
     * Beacon click/hover event listener
     */
    __publicField(this, "handleClickHoverBeacon", (event) => {
      const { step, update } = this.props;
      if (event.type === "mouseenter" && step.event !== "hover") {
        return;
      }
      update({ lifecycle: LIFECYCLE.TOOLTIP });
    });
    __publicField(this, "handleClickOverlay", () => {
      const { helpers, step } = this.props;
      if (!step.disableOverlayClose) {
        helpers.close();
      }
    });
    __publicField(this, "setTooltipRef", (element) => {
      this.tooltip = element;
    });
    __publicField(this, "setPopper", (popper, type) => {
      const { action, setPopper, update } = this.props;
      if (type === "wrapper") {
        this.beaconPopper = popper;
      } else {
        this.tooltipPopper = popper;
      }
      setPopper == null ? void 0 : setPopper(popper, type);
      if (this.beaconPopper && this.tooltipPopper) {
        update({
          action,
          lifecycle: LIFECYCLE.READY
        });
      }
    });
    __publicField(this, "renderTooltip", (renderProps) => {
      const { continuous, helpers, index, size, step } = this.props;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        JoyrideTooltip,
        {
          continuous,
          helpers,
          index,
          isLastStep: index + 1 === size,
          setTooltipRef: this.setTooltipRef,
          size,
          step,
          ...renderProps
        }
      );
    });
  }
  componentDidMount() {
    const { debug, index } = this.props;
    log({
      title: `step:${index}`,
      data: [{ key: "props", value: this.props }],
      debug
    });
  }
  componentDidUpdate(previousProps) {
    var _a;
    const {
      action,
      callback,
      continuous,
      controlled,
      debug,
      index,
      lifecycle,
      size,
      status,
      step,
      update
    } = this.props;
    const { changed, changedFrom } = (0,tree_changes__WEBPACK_IMPORTED_MODULE_9__["default"])(previousProps, this.props);
    const state = { action, controlled, index, lifecycle, size, status };
    const skipBeacon = continuous && action !== ACTIONS.CLOSE && (index > 0 || action === ACTIONS.PREV);
    const hasStoreChanged = changed("action") || changed("index") || changed("lifecycle") || changed("status");
    const isInitial = changedFrom("lifecycle", [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT);
    const isAfterAction = changed("action", [
      ACTIONS.NEXT,
      ACTIONS.PREV,
      ACTIONS.SKIP,
      ACTIONS.CLOSE
    ]);
    const isControlled = controlled && index === previousProps.index;
    if (isAfterAction && (isInitial || isControlled)) {
      callback({
        ...state,
        index: previousProps.index,
        lifecycle: LIFECYCLE.COMPLETE,
        step: previousProps.step,
        type: EVENTS.STEP_AFTER
      });
    }
    if (step.placement === "center" && status === STATUS.RUNNING && changed("index") && action !== ACTIONS.START && lifecycle === LIFECYCLE.INIT) {
      update({ lifecycle: LIFECYCLE.READY });
    }
    if (hasStoreChanged) {
      const element = getElement(step.target);
      const elementExists = !!element;
      const hasRenderedTarget = elementExists && isElementVisible(element);
      if (hasRenderedTarget) {
        if (changedFrom("status", STATUS.READY, STATUS.RUNNING) || changedFrom("lifecycle", LIFECYCLE.INIT, LIFECYCLE.READY)) {
          callback({
            ...state,
            step,
            type: EVENTS.STEP_BEFORE
          });
        }
      } else {
        console.warn(elementExists ? "Target not visible" : "Target not mounted", step);
        callback({
          ...state,
          type: EVENTS.TARGET_NOT_FOUND,
          step
        });
        if (!controlled) {
          update({ index: index + (action === ACTIONS.PREV ? -1 : 1) });
        }
      }
    }
    if (changedFrom("lifecycle", LIFECYCLE.INIT, LIFECYCLE.READY)) {
      update({ lifecycle: hideBeacon(step) || skipBeacon ? LIFECYCLE.TOOLTIP : LIFECYCLE.BEACON });
    }
    if (changed("index")) {
      log({
        title: `step:${lifecycle}`,
        data: [{ key: "props", value: this.props }],
        debug
      });
    }
    if (changed("lifecycle", LIFECYCLE.BEACON)) {
      callback({
        ...state,
        step,
        type: EVENTS.BEACON
      });
    }
    if (changed("lifecycle", LIFECYCLE.TOOLTIP)) {
      callback({
        ...state,
        step,
        type: EVENTS.TOOLTIP
      });
      if (this.tooltip) {
        this.scope = new Scope(this.tooltip, { selector: "[data-action=primary]" });
        this.scope.setFocus();
      }
    }
    if (changedFrom("lifecycle", [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT)) {
      (_a = this.scope) == null ? void 0 : _a.removeScope();
      this.beaconPopper = null;
      this.tooltipPopper = null;
    }
  }
  componentWillUnmount() {
    var _a;
    (_a = this.scope) == null ? void 0 : _a.removeScope();
  }
  get open() {
    const { lifecycle, step } = this.props;
    return hideBeacon(step) || lifecycle === LIFECYCLE.TOOLTIP;
  }
  render() {
    const { continuous, debug, index, lifecycle, nonce, shouldScroll: shouldScroll2, size, step } = this.props;
    const target = getElement(step.target);
    if (!validateStep(step) || !is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].domElement(target)) {
      return null;
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: `JoyrideStep-${index}`, className: "react-joyride__step" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(JoyridePortal, { id: "react-joyride-portal" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      JoyrideOverlay,
      {
        ...step,
        debug,
        lifecycle,
        onClickOverlay: this.handleClickOverlay
      }
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      react_floater__WEBPACK_IMPORTED_MODULE_7__["default"],
      {
        component: this.renderTooltip,
        debug,
        getPopper: this.setPopper,
        id: `react-joyride-step-${index}`,
        open: this.open,
        placement: step.placement,
        target: step.target,
        ...step.floaterProps
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        JoyrideBeacon,
        {
          beaconComponent: step.beaconComponent,
          continuous,
          index,
          isLastStep: index + 1 === size,
          locale: step.locale,
          nonce,
          onClickOrHover: this.handleClickHoverBeacon,
          shouldFocus: shouldScroll2,
          size,
          step,
          styles: step.styles
        }
      )
    ));
  }
};

// src/components/index.tsx
var Joyride = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    __publicField(this, "helpers");
    __publicField(this, "store");
    __publicField(this, "beaconPopper");
    __publicField(this, "tooltipPopper");
    /**
     * Trigger the callback.
     */
    __publicField(this, "callback", (data) => {
      const { callback } = this.props;
      if (is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].function(callback)) {
        callback(data);
      }
    });
    /**
     * Keydown event listener
     */
    __publicField(this, "handleKeyboard", (event) => {
      const { index, lifecycle } = this.state;
      const { steps } = this.props;
      const step = steps[index];
      if (lifecycle === LIFECYCLE.TOOLTIP) {
        if (event.code === "Escape" && step && !step.disableCloseOnEsc) {
          this.store.close();
        }
      }
    });
    /**
     * Sync the store with the component's state
     */
    __publicField(this, "syncState", (state) => {
      this.setState(state);
    });
    __publicField(this, "setPopper", (popper, type) => {
      if (type === "wrapper") {
        this.beaconPopper = popper;
      } else {
        this.tooltipPopper = popper;
      }
    });
    const { debug, getHelpers, run, stepIndex } = props;
    this.store = createStore({
      ...props,
      controlled: run && is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(stepIndex)
    });
    this.helpers = this.store.getHelpers();
    const { addListener } = this.store;
    log({
      title: "init",
      data: [
        { key: "props", value: this.props },
        { key: "state", value: this.state }
      ],
      debug
    });
    addListener(this.syncState);
    if (getHelpers) {
      getHelpers(this.helpers);
    }
    this.state = this.store.getState();
  }
  componentDidMount() {
    if (!canUseDOM()) {
      return;
    }
    const { debug, disableCloseOnEsc, run, steps } = this.props;
    const { start } = this.store;
    if (validateSteps(steps, debug) && run) {
      start();
    }
    if (!disableCloseOnEsc) {
      document.body.addEventListener("keydown", this.handleKeyboard, { passive: true });
    }
  }
  componentDidUpdate(previousProps, previousState) {
    if (!canUseDOM()) {
      return;
    }
    const { action, controlled, index, lifecycle, status } = this.state;
    const { debug, run, stepIndex, steps } = this.props;
    const { stepIndex: previousStepIndex, steps: previousSteps } = previousProps;
    const { reset, setSteps, start, stop, update } = this.store;
    const { changed: changedProps } = (0,tree_changes__WEBPACK_IMPORTED_MODULE_9__["default"])(previousProps, this.props);
    const { changed, changedFrom } = (0,tree_changes__WEBPACK_IMPORTED_MODULE_9__["default"])(previousState, this.state);
    const step = getMergedStep(steps[index], this.props);
    const stepsChanged = !(0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_10__["default"])(previousSteps, steps);
    const stepIndexChanged = is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(stepIndex) && changedProps("stepIndex");
    const target = getElement(step.target);
    if (stepsChanged) {
      if (validateSteps(steps, debug)) {
        setSteps(steps);
      } else {
        console.warn("Steps are not valid", steps);
      }
    }
    if (changedProps("run")) {
      if (run) {
        start(stepIndex);
      } else {
        stop();
      }
    }
    if (stepIndexChanged) {
      let nextAction = is_lite__WEBPACK_IMPORTED_MODULE_4__["default"].number(previousStepIndex) && previousStepIndex < stepIndex ? ACTIONS.NEXT : ACTIONS.PREV;
      if (action === ACTIONS.STOP) {
        nextAction = ACTIONS.START;
      }
      if (![STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
        update({
          action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : nextAction,
          index: stepIndex,
          lifecycle: LIFECYCLE.INIT
        });
      }
    }
    if (!controlled && status === STATUS.RUNNING && index === 0 && !target) {
      this.store.update({ index: index + 1 });
      this.callback({
        ...this.state,
        type: EVENTS.TARGET_NOT_FOUND,
        step
      });
    }
    const callbackData = {
      ...this.state,
      index,
      step
    };
    const isAfterAction = changed("action", [
      ACTIONS.NEXT,
      ACTIONS.PREV,
      ACTIONS.SKIP,
      ACTIONS.CLOSE
    ]);
    if (isAfterAction && changed("status", STATUS.PAUSED)) {
      const previousStep = getMergedStep(steps[previousState.index], this.props);
      this.callback({
        ...callbackData,
        index: previousState.index,
        lifecycle: LIFECYCLE.COMPLETE,
        step: previousStep,
        type: EVENTS.STEP_AFTER
      });
    }
    if (changed("status", [STATUS.FINISHED, STATUS.SKIPPED])) {
      const previousStep = getMergedStep(steps[previousState.index], this.props);
      if (!controlled) {
        this.callback({
          ...callbackData,
          index: previousState.index,
          lifecycle: LIFECYCLE.COMPLETE,
          step: previousStep,
          type: EVENTS.STEP_AFTER
        });
      }
      this.callback({
        ...callbackData,
        type: EVENTS.TOUR_END,
        // Return the last step when the tour is finished
        step: previousStep,
        index: previousState.index
      });
      reset();
    } else if (changedFrom("status", [STATUS.IDLE, STATUS.READY], STATUS.RUNNING)) {
      this.callback({
        ...callbackData,
        type: EVENTS.TOUR_START
      });
    } else if (changed("status") || changed("action", ACTIONS.RESET)) {
      this.callback({
        ...callbackData,
        type: EVENTS.TOUR_STATUS
      });
    }
    this.scrollToStep(previousState);
    if (step.placement === "center" && status === STATUS.RUNNING && lifecycle === LIFECYCLE.INIT) {
      this.store.update({ lifecycle: LIFECYCLE.READY });
    }
  }
  componentWillUnmount() {
    const { disableCloseOnEsc } = this.props;
    if (!disableCloseOnEsc) {
      document.body.removeEventListener("keydown", this.handleKeyboard);
    }
  }
  scrollToStep(previousState) {
    const { index, lifecycle, status } = this.state;
    const {
      debug,
      disableScrollParentFix = false,
      scrollDuration,
      scrollOffset = 20,
      scrollToFirstStep = false,
      steps
    } = this.props;
    const step = getMergedStep(steps[index], this.props);
    const target = getElement(step.target);
    const shouldScrollToStep = shouldScroll({
      isFirstStep: index === 0,
      lifecycle,
      previousLifecycle: previousState.lifecycle,
      scrollToFirstStep,
      step,
      target
    });
    if (status === STATUS.RUNNING && shouldScrollToStep) {
      const hasCustomScroll = hasCustomScrollParent(target, disableScrollParentFix);
      const scrollParent2 = getScrollParent(target, disableScrollParentFix);
      let scrollY = Math.floor(getScrollTo(target, scrollOffset, disableScrollParentFix)) || 0;
      log({
        title: "scrollToStep",
        data: [
          { key: "index", value: index },
          { key: "lifecycle", value: lifecycle },
          { key: "status", value: status }
        ],
        debug
      });
      if (lifecycle === LIFECYCLE.BEACON && this.beaconPopper) {
        const { placement, popper } = this.beaconPopper;
        if (!["bottom"].includes(placement) && !hasCustomScroll) {
          scrollY = Math.floor(popper.top - scrollOffset);
        }
      } else if (lifecycle === LIFECYCLE.TOOLTIP && this.tooltipPopper) {
        const { flipped, placement, popper } = this.tooltipPopper;
        if (["top", "right", "left"].includes(placement) && !flipped && !hasCustomScroll) {
          scrollY = Math.floor(popper.top - scrollOffset);
        } else {
          scrollY -= step.spotlightPadding;
        }
      }
      scrollY = scrollY >= 0 ? scrollY : 0;
      if (status === STATUS.RUNNING) {
        scrollTo(scrollY, { element: scrollParent2, duration: scrollDuration });
      }
    }
  }
  render() {
    if (!canUseDOM()) {
      return null;
    }
    const { index, status } = this.state;
    const {
      continuous = false,
      debug = false,
      nonce,
      scrollToFirstStep = false,
      steps
    } = this.props;
    let output;
    if (status === STATUS.RUNNING && steps[index]) {
      const step = getMergedStep(steps[index], this.props);
      output = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        JoyrideStep,
        {
          ...this.state,
          callback: this.callback,
          continuous,
          debug,
          helpers: this.helpers,
          nonce,
          setPopper: this.setPopper,
          shouldScroll: !step.disableScrolling && (index !== 0 || scrollToFirstStep),
          step,
          update: this.store.update
        }
      );
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "react-joyride" }, output);
  }
};
__publicField(Joyride, "defaultProps", defaultProps);
var components_default = Joyride;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/tree-changes/dist/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/tree-changes/dist/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ treeChanges)
/* harmony export */ });
/* harmony import */ var _gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gilbarbara/deep-equal */ "./node_modules/@gilbarbara/deep-equal/dist/index.mjs");
/* harmony import */ var is_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-lite */ "./node_modules/is-lite/dist/index.mjs");
// src/index.ts



// src/helpers.ts


function canHaveLength(...arguments_) {
  return arguments_.every((d) => is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(d));
}
function checkEquality(left, right, value) {
  if (!isSameType(left, right)) {
    return false;
  }
  if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array)) {
    return !left.some(hasValue(value)) && right.some(hasValue(value));
  }
  if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
    return !Object.entries(left).some(hasEntry(value)) && Object.entries(right).some(hasEntry(value));
  }
  return right === value;
}
function compareNumbers(previousData, data, options) {
  const { actual, key, previous, type } = options;
  const left = nested(previousData, key);
  const right = nested(data, key);
  let changed = [left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number) && (type === "increased" ? left < right : left > right);
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].undefined(actual)) {
    changed = changed && right === actual;
  }
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].undefined(previous)) {
    changed = changed && left === previous;
  }
  return changed;
}
function compareValues(previousData, data, options) {
  const { key, type, value } = options;
  const left = nested(previousData, key);
  const right = nested(data, key);
  const primary = type === "added" ? left : right;
  const secondary = type === "added" ? right : left;
  if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].nullOrUndefined(value)) {
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(primary)) {
      if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(primary) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(primary)) {
        return checkEquality(primary, secondary, value);
      }
    } else {
      return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(secondary, value);
    }
    return false;
  }
  if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array)) {
    return !secondary.every(isEqualPredicate(primary));
  }
  if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
    return hasExtraKeys(Object.keys(primary), Object.keys(secondary));
  }
  return ![left, right].every((d) => is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].primitive(d) && is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(d)) && (type === "added" ? !is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(left) && is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(right) : is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(left) && !is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(right));
}
function getIterables(previousData, data, { key } = {}) {
  let left = nested(previousData, key);
  let right = nested(data, key);
  if (!isSameType(left, right)) {
    throw new TypeError("Inputs have different types");
  }
  if (!canHaveLength(left, right)) {
    throw new TypeError("Inputs don't have length");
  }
  if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
    left = Object.keys(left);
    right = Object.keys(right);
  }
  return [left, right];
}
function hasEntry(input) {
  return ([key, value]) => {
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(input)) {
      return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value) || input.some((d) => (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(value) && isEqualPredicate(value)(d));
    }
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(input) && input[key]) {
      return !!input[key] && (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input[key], value);
    }
    return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value);
  };
}
function hasExtraKeys(left, right) {
  return right.some((d) => !left.includes(d));
}
function hasValue(input) {
  return (value) => {
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(input)) {
      return input.some((d) => (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(value) && isEqualPredicate(value)(d));
    }
    return (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(input, value);
  };
}
function includesOrEqualsTo(previousValue, value) {
  return is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(previousValue) ? previousValue.some((d) => (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value)) : (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(previousValue, value);
}
function isEqualPredicate(data) {
  return (value) => data.some((d) => (0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(d, value));
}
function isSameType(...arguments_) {
  return arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array) || arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number) || arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject) || arguments_.every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string);
}
function nested(data, property) {
  if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(data) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(data)) {
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].string(property)) {
      const props = property.split(".");
      return props.reduce((acc, d) => acc && acc[d], data);
    }
    if (is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].number(property)) {
      return data[property];
    }
    return data;
  }
  return data;
}

// src/index.ts
function treeChanges(previousData, data) {
  if ([previousData, data].some(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].nullOrUndefined)) {
    throw new Error("Missing required parameters");
  }
  if (![previousData, data].every((d) => is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject(d) || is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array(d))) {
    throw new Error("Expected plain objects or array");
  }
  const added = (key, value) => {
    try {
      return compareValues(previousData, data, { key, type: "added", value });
    } catch {
      return false;
    }
  };
  const changed = (key, actual, previous) => {
    try {
      const left = nested(previousData, key);
      const right = nested(data, key);
      const hasActual = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(actual);
      const hasPrevious = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(previous);
      if (hasActual || hasPrevious) {
        const leftComparator = hasPrevious ? includesOrEqualsTo(previous, left) : !includesOrEqualsTo(actual, left);
        const rightComparator = includesOrEqualsTo(actual, right);
        return leftComparator && rightComparator;
      }
      if ([left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].array) || [left, right].every(is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].plainObject)) {
        return !(0,_gilbarbara_deep_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(left, right);
      }
      return left !== right;
    } catch {
      return false;
    }
  };
  const changedFrom = (key, previous, actual) => {
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
      return false;
    }
    try {
      const left = nested(previousData, key);
      const right = nested(data, key);
      const hasActual = is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(actual);
      return includesOrEqualsTo(previous, left) && (hasActual ? includesOrEqualsTo(actual, right) : !hasActual);
    } catch {
      return false;
    }
  };
  const decreased = (key, actual, previous) => {
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
      return false;
    }
    try {
      return compareNumbers(previousData, data, { key, actual, previous, type: "decreased" });
    } catch {
      return false;
    }
  };
  const emptied = (key) => {
    try {
      const [left, right] = getIterables(previousData, data, { key });
      return !!left.length && !right.length;
    } catch {
      return false;
    }
  };
  const filled = (key) => {
    try {
      const [left, right] = getIterables(previousData, data, { key });
      return !left.length && !!right.length;
    } catch {
      return false;
    }
  };
  const increased = (key, actual, previous) => {
    if (!is_lite__WEBPACK_IMPORTED_MODULE_0__["default"].defined(key)) {
      return false;
    }
    try {
      return compareNumbers(previousData, data, { key, actual, previous, type: "increased" });
    } catch {
      return false;
    }
  };
  const removed = (key, value) => {
    try {
      return compareValues(previousData, data, { key, type: "removed", value });
    } catch {
      return false;
    }
  };
  return { added, changed, changedFrom, decreased, emptied, filled, increased, removed };
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-steps.json":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/common/ds-selection/ds-selection-steps.json ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"steps":[{"steps":[{"title":"${DSSelectionStep4Title}","content":"${DSSelectionStep4Content}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\']) .component-data-source-selector .jimu-btn","requiredAction":{"type":"click"}},{"title":"${DSSelectionStep1Title}","content":"${DSSelectionStep1Content}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\']) .component-data-source-selector .jimu-btn","requiredAction":{"type":"click"}}]},{"title":"${DSSelectionStep2Title}","content":{"image":{"src":"jimu-ui/basic/guide-assets/Add-new-data.gif","alt":"${DSSelectionStep2Title}","width":400,"height":220},"text":"${DSSelectionStep2Content}"},"placement":"left-end","target":".component-data-source-list .ds-add-data","requiredAction":{"type":"click"}},{"steps":[{"title":"${DSSelectionStep5Title}","content":"${DSSelectionStep5Content}","placement":"left","target":".component-data-source-list .ds-list","spotlightClicks":true},{"title":"${DSSelectionStep3Title}","content":"${DSSelectionStep3Content}","placement":"left","target":".component-data-source-list .ds-list","spotlightClicks":true}]}]}');

/***/ }),

/***/ "./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-steps.json":
/*!************************************************************************************!*\
  !*** ./jimu-ui/basic/lib/guide/components/common/onboarding/onboarding-steps.json ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"steps":[{"type":"splash","title":"${openingGuideStep1Title}","content":{"image":{"src":"jimu-ui/basic/guide-assets/S0-Splash.svg","alt":"${openingGuideStep1Title}","width":237,"height":286},"text":"${openingGuideStep1Content}","direction":"horizontal"},"placement":"center","target":"#app","width":600},{"title":"${openingGuideStep2Title}","content":{"image":{"src":"jimu-ui/basic/guide-assets/S1-Canvas.svg","alt":"Canvas","width":400,"height":220,"autoFlip":true},"text":"${openingGuideStep2Content}"},"target":"[data-widgetid=\'app-loader\']"},{"title":"${openingGuideStep3Title}","placement":"right","content":{"image":{"src":"jimu-ui/basic/guide-assets/S2-Sidebar.gif","alt":"${openingGuideStep3Title}","width":400,"height":220,"border":true,"autoFlip":true},"text":"${openingGuideStep3Content}"},"target":"[data-widgetid=\'left-sidebar\'] .side"},{"injectedGuide":"insert-widget","widgetName":"arcgis-map"},{"title":"${openingGuideStep5Title}","content":{"image":{"src":"jimu-ui/basic/guide-assets/S4-Resize-widget.gif","alt":"${openingGuideStep5Title}","width":400,"height":220,"autoFlip":true},"text":"${openingGuideStep5Content}"},"target":".selected.is-widget .widget-map-usemask","spotlightPadding":15,"targetInCanvas":true,"spotlightClicks":true},{"injectedGuide":"ds-selection"},{"title":"${openingGuideStep7Title}","content":"${openingGuideStep7Content}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-title-item:nth-child(2)","requiredAction":{"type":"click"}},{"steps":[{"title":"${openingGuideStep8Title}","content":"${openingGuideStep8Content}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-content","spotlightClicks":true},{"title":"${openingGuideStep8Title2}","content":"${openingGuideStep8Content2}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-content","spotlightClicks":true}]},{"title":"${openingGuideStep9Title}","content":"${openingGuideStep9Content}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-title-item:nth-child(3)","requiredAction":{"type":"click"}},{"title":"${openingGuideStep10Title}","content":{"image":{"src":"jimu-ui/basic/guide-assets/S9-Action.gif","alt":"${openingGuideStep10Title}","width":400,"height":220},"text":"${openingGuideStep10Content}"},"placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-content"},{"title":"${openingGuideStep11Title}","content":"${openingGuideStep11Content}","placement":"bottom","target":".widget-builder-header","spotlightClicks":true},{"title":"${openingGuideStep12Title}","content":"${openingGuideStep12Content}","placement":"right","target":"[data-sectionid=\'opts-section\']"},{"title":"${openingGuideStep13Title}","content":"${openingGuideStep13Content}","placement":"right","target":"[data-sectionid=\'opts-section\']"},{"title":"${openingGuideStep14Title}","content":"${openingGuideStep14Content}","placement":"right","target":"[data-sectionid=\'opts-section\']"},{"title":"${openingGuideStep15Title}","content":"${openingGuideStep15Content}","placement":"center","target":"[data-widgetid=\'app-loader\']"}]}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/*!*********************************!*\
  !*** ./jimu-ui/basic/guide.tsx ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMON_GUIDE_MODULES: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.COMMON_GUIDE_MODULES),
/* harmony export */   DataSourceSelectionGuide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelectionGuide),
/* harmony export */   EVENTS: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.EVENTS),
/* harmony export */   Guide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.Guide),
/* harmony export */   InsertWidgetGuide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.InsertWidgetGuide),
/* harmony export */   OnboardingGuide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.OnboardingGuide),
/* harmony export */   STATUS: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__.STATUS),
/* harmony export */   _InsertWidgetGuide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__._InsertWidgetGuide),
/* harmony export */   _OnboardingGuide: () => (/* reexport safe */ _lib_guide__WEBPACK_IMPORTED_MODULE_1__._OnboardingGuide)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _lib_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/guide */ "./jimu-ui/basic/lib/guide/index.tsx");


jimu_core__WEBPACK_IMPORTED_MODULE_0__.GuideManager.getInstance().registerGuideModule('insert-widget', _lib_guide__WEBPACK_IMPORTED_MODULE_1__.InsertWidgetGuide);
jimu_core__WEBPACK_IMPORTED_MODULE_0__.GuideManager.getInstance().registerGuideModule('ds-selection', _lib_guide__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelectionGuide);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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b0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNqbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLGdCQUFnQixtQkFBTyxDQUFDLGtEQUFVOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyx1RkFBMkI7QUFDdEQsRUFBRSxLQUFLLEVBSU47Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7O0FDWEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDUztBQUNKO0FBQ0c7QUFDVDtBQUNjO0FBQ047O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsTUFBTSxXQUFXLGtCQUFrQjs7QUFFbkQsZ0pBQWdKLGlHQUFpRyxnRUFBZ0UsaUNBQWlDLGtCQUFrQixrQ0FBa0MsZ0RBQWdELDhCQUE4QiwyQkFBMkIsY0FBYyxvQ0FBb0MsbURBQW1ELGdFQUFnRSxZQUFZLDJCQUEyQixtSUFBbUksNERBQTRELHNDQUFzQyxrREFBa0QsZ0RBQWdELGlEQUFpRCx1REFBdUQsbURBQW1ELDhDQUE4QyxxRUFBcUUsVUFBVSxRQUFRLDhCQUE4QiwyREFBMkQsK0JBQStCLGdGQUFnRiwrREFBK0Q7QUFDemlEOztBQUVBLGNBQWM7O0FBRWQsY0FBYyw4REFBcUIsYUFBYSxxQkFBcUIsd0ZBQXdGLG9CQUFvQixrRUFBa0U7QUFDblA7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixzQkFBc0IsaUtBQWlLLHNGQUFzRix1QkFBdUIsMEVBQTBFLG1CQUFtQixnQkFBZ0IsR0FBRyx3QkFBd0IseUJBQXlCLEdBQUcsK0NBQUUsd0JBQXdCLHNDQUFzQyxNQUFNLDJCQUEyQixHQUFHLE1BQU0sNkJBQTZCLG9CQUFvQixvQkFBb0IsOEJBQThCLDRFQUE0RSw0Q0FBNEMsK0JBQStCLDRFQUE0RSwrQ0FBK0MsZ0NBQWdDLDRFQUE0RSxZQUFZO0FBQy9oQywyQkFBMkIsTUFBTSw2QkFBNkIsbUNBQW1DOztBQUVqRywrREFBK0QsK0NBQStDLDRDQUE0Qyw4QkFBOEIseUNBQXlDLHFDQUFxQyxrQ0FBa0MsMkRBQTJELHVCQUF1QixlQUFlLG1CQUFtQixlQUFlLHVCQUF1QixFQUFFLDZEQUE2RCx1QkFBdUIsZUFBZSx1QkFBdUIsRUFBRSxpRUFBaUUsbUNBQW1DLGVBQWUsd0VBQStCLGFBQWEsb0RBQW9ELHFDQUFxQyx1QkFBdUIsRUFBRSw2Q0FBNkMsdUVBQXVFLGVBQWUsd0NBQXdDLGlDQUFpQyxpQkFBaUIsV0FBVywrQkFBK0Isd0NBQXdDLEVBQUUsaURBQWlELDRCQUE0QixzRkFBc0YsZUFBZSxtQkFBbUIsd0NBQXdDLG1CQUFtQiw4REFBcUIsc0JBQXNCLFdBQVcscUZBQTRDLHFDQUFxQywyREFBbUIsNkNBQTZDLGVBQWUsY0FBYyxFQUFFLG1EQUFtRCw2SEFBNkgsaUJBQWlCLGlDQUFpQyw0QkFBNEIsYUFBYSw2QkFBNkIsRUFBRSxxQ0FBcUMsZUFBZSxhQUFhLDhCQUE4QixHQUFHLDJCQUEyQixDQUFDLHVEQUFlLEVBQUUsZ0RBQWdELFNBQVMsMkRBQW1CLEVBQUUsMkRBQWlCLENBQUMseURBQWUsZUFBZSx3REFBYyxJQUFJLDJEQUFtQixFQUFFLDBEQUFnQixDQUFDLDBEQUFnQixhQUFhLDBEQUFnQixRQUFRLHdEQUFjLG1CQUFtQiwyREFBbUIsRUFBRSwwREFBZ0IsQ0FBQywwREFBZ0IsVUFBVSwwREFBZ0IsQ0FBQzs7QUFFOTNFLHlEQUF5RCx5Q0FBeUMsc0NBQXNDLHdCQUF3QixtQ0FBbUMscUNBQXFDLDRCQUE0QixxQ0FBcUMscUZBQXFGLCtCQUErQixXQUFXLHVEQUF1RCwwREFBMEQsZUFBZSxhQUFhLGNBQWMscUJBQXFCLHdDQUF3QyxhQUFhLGNBQWMsWUFBWSxxQkFBcUIsc0NBQXNDLGNBQWMsWUFBWSxnQkFBZ0IsdUNBQXVDLGFBQWEsYUFBYSxlQUFlLEVBQUUscUNBQXFDLDZIQUE2SCwyTUFBMk0saUJBQWlCLG1DQUFtQyxXQUFXLGFBQWEsYUFBYSwwREFBMEQsMkRBQTJELHFCQUFxQiw4QkFBOEIsZ0NBQWdDLHdDQUF3QyxvRUFBb0Usa0JBQWtCLDhCQUE4QixnQ0FBZ0Msc0NBQXNDLFNBQVMsU0FBUyx3REFBd0Qsb0JBQW9CLDZCQUE2QixpQ0FBaUMsdUNBQXVDLFNBQVMsU0FBUyxvRUFBb0UsbUJBQW1CLDZCQUE2QixpQ0FBaUMsbUJBQW1CLDJEQUFtQixRQUFRLG9EQUFvRCxjQUFjLDJEQUFtQixTQUFTLGtDQUFrQyxjQUFjLDJEQUFtQixRQUFRLGtFQUFrRSxjQUFjLDJEQUFtQixZQUFZLHlCQUF5QixPQUFPLEdBQUcscUJBQXFCLENBQUMsdURBQWUsRUFBRSwwQ0FBMEMsVUFBVSwwREFBZ0Isd0JBQXdCLHdEQUFjLG1CQUFtQiwwREFBZ0IsWUFBWTs7QUFFam1GLDJDQUEyQywrQkFBK0Isb0RBQW9ELGtIQUFrSCxtQkFBbUIsMkRBQW1CLFdBQVcsbUVBQW1FLGNBQWMsMkRBQW1CLFFBQVEsOEpBQThKLGNBQWMsMkRBQW1CLHVCQUF1QiwyREFBbUIsU0FBUyw0N0JBQTQ3QixNQUFNLDJCQUEyQixZQUFZLHdEQUFjLG1CQUFtQiwwREFBZ0I7O0FBRXpwRCxnQ0FBZ0Msc01BQXNNLFlBQVkscUJBQXFCLDREQUFvQiwrQkFBK0IsMkRBQW1CLFFBQVEsb0RBQW9ELFdBQVcsVUFBVSwwQkFBMEIsNERBQW9CLDJCQUEyQiwyREFBbUIsUUFBUSxnREFBZ0QsU0FBUyxXQUFXLDJCQUEyQiw0REFBb0IsNkJBQTZCLDJEQUFtQixRQUFRLGtEQUFrRCxVQUFVLHdDQUF3QywrQ0FBRSxtQkFBbUIsMEJBQTBCLDJEQUFtQixrQkFBa0IsNENBQTRDLEdBQUcsbUJBQW1CLDJEQUFtQixRQUFRLHdEQUF3RCwwREFBMEQsNEJBQTRCLFFBQVEsd0RBQWMsbUJBQW1CLHdEQUFjLGFBQWEsd0RBQWMsaUJBQWlCLHdEQUFjLGlCQUFpQix3REFBYyw0QkFBNEIsd0RBQWMsbUJBQW1CLDBEQUFnQixrQkFBa0Isd0RBQWM7O0FBRTcwQyxvREFBb0Qsb0NBQW9DLGlDQUFpQyxtQkFBbUIsOEJBQThCLHFDQUFxQyx1QkFBdUIsK0JBQStCLDZOQUE2Tix5UUFBeVEsZUFBZSxlQUFlLGdDQUFnQyw0Q0FBNEMsd0NBQXdDLDRDQUE0QyxzQ0FBc0MsOENBQThDLHVDQUF1QywrQ0FBK0Msc0RBQXNELHdDQUF3QywyQkFBMkIsNEJBQTRCLHdDQUF3QywyQkFBMkIsNENBQTRDLHdDQUF3QyxpQ0FBaUMseUJBQXlCLHdDQUF3Qyw0QkFBNEIsY0FBYyx3Q0FBd0MsaUNBQWlDLHVDQUF1QyxxQkFBcUIsRUFBRSxxQ0FBcUMsbU1BQW1NLGNBQWMsMEJBQTBCLGNBQWMsZ0JBQWdCLDREQUFvQixhQUFhLDRCQUE0QiwwREFBa0IsWUFBWSxnQkFBZ0IsR0FBRyxNQUFNLDBCQUEwQixnQkFBZ0IsSUFBSSxNQUFNLDRCQUE0QiwyREFBbUIsK0JBQStCLHlCQUF5QixpQ0FBaUMsZUFBZSwwQkFBMEIsMkRBQW1CLDJCQUEyQixtQkFBbUIsMkRBQW1CLFFBQVEsK0RBQStELGNBQWMsMkRBQW1CLFFBQVEsNEJBQTRCLGlDQUFpQyxHQUFHLGdCQUFnQixDQUFDLHVEQUFlLEVBQUUscUNBQXFDLFVBQVUsMkRBQW1CLEVBQUUsd0RBQWMsQ0FBQywyREFBaUIsV0FBVyx3REFBYyxrQkFBa0Isd0RBQWMsbUJBQW1CLHdEQUFjLGFBQWEsd0RBQWMsc0JBQXNCLHdEQUFjLGlCQUFpQix3REFBYyxXQUFXLDBEQUFnQiw0QkFBNEIsd0RBQWMsd0JBQXdCLHdEQUFjLDBCQUEwQix3REFBYyw0QkFBNEIsd0RBQWMsUUFBUSwwREFBZ0IsbUJBQW1CLDBEQUFnQixrQkFBa0Isd0RBQWMsQ0FBQzs7QUFFcG5HLGdFQUFnRSxnREFBZ0QsNkNBQTZDLCtCQUErQiwwQ0FBMEMscUNBQXFDLG1DQUFtQyxxQ0FBcUMsdVRBQXVULFlBQVksdUNBQXVDLEdBQUcsc0RBQWMsc0JBQXNCLGlCQUFpQiw0REFBb0IsWUFBWSxxQkFBcUIsMkRBQW1CLHdCQUF3QixNQUFNLFlBQVksK0NBQUUsNkNBQTZDLHFCQUFxQiwwREFBa0IsQ0FBQyxzREFBYyxrQ0FBa0MseUJBQXlCLE1BQU0sbUJBQW1CLGFBQWEsYUFBYSxtQkFBbUIsMkRBQW1CLFNBQVMsd0RBQXdELGdHQUFnRyxZQUFZLEdBQUcsNEJBQTRCLENBQUMsdURBQWUsRUFBRSxpREFBaUQsU0FBUyx3REFBYyxhQUFhLHdEQUFjLDZCQUE2Qix3REFBYyw2QkFBNkIsd0RBQWMsd0JBQXdCLHdEQUFjLDBCQUEwQix3REFBYyxrQkFBa0IsMERBQWdCLFFBQVEsMERBQWdCLFlBQVk7O0FBRTNvRCxvQkFBb0IsWUFBWSwyQkFBMkIsWUFBWSxnREFBUyxrQ0FBa0MsRUFBRSxRQUFRLFNBQVMsaUZBQWlGLGtCQUFrQiw2REFBNkQsVUFBVSx1TEFBdUwsaUJBQWlCLCtCQUErQix1QkFBdUIseUVBQXlFLHVCQUF1QixnQkFBZ0IsaUJBQWlCLCtCQUErQixrQkFBa0Isd0VBQXdFLFlBQVksdUdBQXVHLFFBQVEsc0dBQXNHLFVBQVUsWUFBWSxRQUFRLHFMQUFxTCxTQUFTLGlFQUFpRSxRQUFRLG9GQUFvRjs7QUFFajRDLHdDQUF3QyxpRUFBaUUseURBQXlELHlDQUF5QyxzQ0FBc0MsNkJBQTZCLFVBQVUsbUNBQW1DLDhCQUE4QixvR0FBb0csb0JBQW9CLEVBQUUsMEVBQTBFLG9CQUFvQixFQUFFLDRFQUE0RSxzQkFBc0IsRUFBRSw0RUFBNEUsc0JBQXNCLEVBQUUsK0VBQStFLDhCQUE4QixrQ0FBa0Msa0RBQWtELHVDQUF1QyxnQkFBZ0IsdURBQXVELFlBQVksaUNBQWlDLDhEQUE4RCxHQUFHLEVBQUUsdUVBQXVFLDBFQUEwRSxHQUFHLCtDQUFFLHlCQUF5QixrR0FBa0csNEZBQTRGLEtBQUsscUJBQXFCLDREQUE0RCxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSw0RUFBNEUsNkVBQTZFLEdBQUcsK0NBQUUscUNBQXFDLDhCQUE4QiwwRUFBMEUsS0FBSywwQkFBMEIsZ0NBQWdDLG9CQUFvQixFQUFFLHNDQUFzQyxpQkFBaUIsRUFBRSw0RUFBNEUsZ0hBQWdILEdBQUcsK0NBQUUscUNBQXFDLHFHQUFxRyxvREFBb0QsS0FBSywwQkFBMEIsZ0NBQWdDLG9CQUFvQixFQUFFLGdCQUFnQiwyQkFBMkIsdUdBQXVHLDhDQUE4QywrQkFBK0IsZ0JBQWdCLHFCQUFxQixFQUFFLGFBQWEsK0pBQStKLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLDBDQUEwQyxpQkFBaUIsZ0NBQWdDLHdCQUF3Qix3Q0FBd0MsR0FBRyxjQUFjLDRCQUE0QiwyREFBMkQsdUJBQXVCLCtDQUErQyw2R0FBNkcscUJBQXFCLEtBQUssbUJBQW1CLHVEQUF1RCwrQ0FBRSw2RkFBNkYsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixzQkFBc0IsdUJBQXVCLCtDQUFFLHFCQUFxQixFQUFFLGdGQUFnRix1QkFBdUIsd0pBQXdKLGlCQUFpQix3REFBVyx5RkFBeUYsMEJBQTBCLGdCQUFnQjtBQUMzcEksR0FBRywrQ0FBRSxtQkFBbUIsZ0RBQWdELDBCQUEwQiwyRkFBMkYsd0NBQXdDLHdDQUF3QywwQkFBMEIsaUVBQWlFLDBCQUEwQixrREFBa0QsK0JBQStCLDBGQUEwRixnRUFBZ0UsZ0NBQWdDLHdCQUF3QixFQUFFLGlFQUFpRSx1QkFBdUIsc0JBQXNCLGdCQUFnQixnQ0FBZ0MsdUJBQXVCLHlDQUF5QyxFQUFFLDZDQUE2QyxnQkFBZ0IsaUZBQWlGLCtDQUErQywwT0FBME8sbUlBQW1JLG1EQUFtRCxlQUFlLG1CQUFtQixHQUFHLGlDQUFpQywyS0FBMkssSUFBSSxpREFBTSx5QkFBeUIsOENBQThDLHNCQUFzQix5Q0FBeUMsNkJBQTZCLDJDQUEyQyw4QkFBOEIsaUNBQWlDLGdCQUFnQix3Q0FBd0Msc0JBQXNCLG1CQUFtQiwrR0FBK0csaUJBQWlCLGlCQUFpQixFQUFFLFFBQVEsMEJBQTBCLHNCQUFzQixpQkFBaUIsbURBQW1ELEdBQUcsK0JBQStCLHNCQUFzQix3QkFBd0IsTUFBTSxrQ0FBa0MsbUJBQW1CLG1EQUFtRCx5REFBeUQsaUJBQWlCLGdDQUFnQyxLQUFLLEdBQUcsb0JBQW9CLG1CQUFtQiwrQ0FBRSwwREFBMEQsSUFBSSxpREFBTSw4QkFBOEIseURBQXlELE9BQU8sY0FBYyxTQUFTLHdDQUF3QyxPQUFPLGVBQWUsa0NBQWtDLDBCQUEwQixzQkFBc0IsaUJBQWlCLDBCQUEwQixHQUFHLDBCQUEwQiwrQkFBK0Isc0JBQXNCLHdCQUF3QixPQUFPLEtBQUssRUFBRSxtREFBbUQsZ0JBQWdCLCtDQUErQyxzQkFBc0IsNEdBQTRHLHlDQUF5QyxpQkFBaUIsa0JBQWtCLEVBQUUsc0JBQXNCLE9BQU8sRUFBRSx1RUFBdUUsMERBQTBELGVBQWUsa0RBQWtELElBQUksRUFBRSxnREFBZ0QsNkJBQTZCLGtFQUFrRSxJQUFJLCtDQUFFLHlCQUF5Qix3QkFBd0IsZUFBZSxrQkFBa0IsSUFBSSxFQUFFLCtCQUErQiwyQkFBMkIsc0ZBQXNGLEVBQUUsK0JBQStCLDBHQUEwRyxzREFBc0QsZ0JBQWdCLGVBQWUsRUFBRSxpQ0FBaUMsK0JBQStCLE9BQU8sZ0RBQVMscUJBQXFCLElBQUksRUFBRSxnQ0FBZ0MsZ0JBQWdCLDZJQUE2SSw2QkFBNkIsZUFBZSxnREFBUywyQkFBMkIsb0JBQW9CLGtCQUFrQix3RkFBd0YsMENBQTBDLE1BQU0seUNBQXlDLG1EQUFtRCxxQ0FBcUMsMENBQTBDLHNEQUFzRCxpREFBaUQsbURBQW1ELDBDQUEwQyxzRUFBc0Usc0JBQXNCLHFCQUFxQixzQ0FBc0MseUNBQXlDLEVBQUUsbURBQW1ELHlDQUF5QyxzQ0FBc0MsNkJBQTZCLCtCQUErQixnQ0FBZ0MsaUNBQWlDLG9CQUFvQixFQUFFLGdDQUFnQyw0QkFBNEIsNkJBQTZCLFdBQVcsR0FBRywrQ0FBRSxxQkFBcUIsZUFBZSx1Q0FBdUMsd0NBQXdDLEVBQUUscUNBQXFDLG1KQUFtSix3WUFBd1kseUJBQXlCLDJEQUFtQixzQkFBc0IsZ05BQWdOLFdBQVcsY0FBYyxvQkFBb0IsZ0NBQWdDLE1BQU0sa0NBQWtDLG1CQUFtQiwyREFBbUIsMEJBQTBCLDJEQUFtQixxQkFBcUIsa0lBQWtJLGNBQWMsMkRBQW1CLFVBQVUsa1hBQWtYLHNEQUFzRCxHQUFHLHFCQUFxQixDQUFDLHVEQUFlLEVBQUUsMENBQTBDLFNBQVMsd0RBQWMsVUFBVSx3REFBYyxVQUFVLHdEQUFjLHdCQUF3QiwyREFBbUIsRUFBRSx3REFBYyxDQUFDLDJEQUFpQixtQkFBbUIsdUJBQXVCLHVCQUF1Qix3REFBYyxpQkFBaUIseUJBQXlCLFFBQVEsd0RBQWMsa0JBQWtCLHdEQUFjLGFBQWEsd0RBQWMscUJBQXFCLHdEQUFjLE9BQU8sdURBQWUsK0JBQStCLDBEQUFnQixRQUFRLHdEQUFjLFdBQVcsd0RBQWMsV0FBVyx3REFBYyxJQUFJLDJEQUFtQixFQUFFLDBEQUFnQixDQUFDLDBEQUFnQixVQUFVLDBEQUFnQixNQUFNLHdEQUFjLFNBQVMsMERBQWdCLFdBQVcsdURBQWUsc0tBQXNLLHdEQUFjLE9BQU8sMERBQWdCLFFBQVEsMERBQWdCLFFBQVEsMkRBQW1CLEVBQUUsMERBQWdCLENBQUMsMERBQWdCLFNBQVMsd0RBQWMsZ0JBQWdCLHVEQUFlLEVBQUUsT0FBTywwREFBZ0IsV0FBVyx1REFBZSxzSkFBc0osd0RBQWMsQ0FBQyxFQUFFLEVBQUUsNkNBQTZDLG9PQUFvTyw2QkFBNkIsZ0JBQWdCOztBQUVsa1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk5uQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsVUFBVTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVEsbUJBQW1CLGtEQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQU8sVUFBVSxpREFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwyQkFBMkI7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ3hCLGlFQUFlLEVBQUUsRUFBQztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNMkM7QUFDbEI7QUFDbEI7QUFDUDtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBLDJDQUEyQyxPQUFPLCtDQUFFLGNBQWMsK0NBQUUsYUFBYSwrQ0FBRSxrQkFBa0I7QUFDckc7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrQ0FBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQ0FBRTtBQUN4QyxTQUFTLCtDQUFFO0FBQ1g7QUFDQTtBQUNBLFNBQVMsK0NBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekMsU0FBUywrQ0FBRTtBQUNYLFlBQVksK0NBQUU7QUFDZDtBQUNBLGdCQUFnQiwrQ0FBRSxtQkFBbUIsK0NBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0VBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFFO0FBQzlCO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQUU7QUFDOUI7QUFDQTtBQUNBLGdEQUFnRCxPQUFPLCtDQUFFLGlCQUFpQiwrQ0FBRSxjQUFjO0FBQzFGO0FBQ0EsZUFBZSwrQ0FBRSxrQkFBa0IsK0NBQUU7QUFDckMsY0FBYywrQ0FBRSxtQkFBbUIsK0NBQUU7QUFDckM7QUFDTztBQUNQLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtDQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxZQUFZLCtDQUFFO0FBQ2Qsb0JBQW9CLGtFQUFLO0FBQ3pCLDBDQUEwQyxPQUFPLGtFQUFLLGVBQWUsK0NBQUUsK0NBQStDO0FBQ3RIO0FBQ0E7QUFDQSxZQUFZLCtDQUFFO0FBQ2QsbUNBQW1DLGtFQUFLO0FBQ3hDO0FBQ0EsZUFBZSxrRUFBSztBQUNwQjtBQUNBO0FBQ087QUFDUCxxQ0FBcUMsMkJBQTJCO0FBQ2hFO0FBQ087QUFDUDtBQUNBLFlBQVksK0NBQUU7QUFDZCw2Q0FBNkMsT0FBTyxrRUFBSyxlQUFlLCtDQUFFLCtDQUErQztBQUN6SDtBQUNBLGVBQWUsa0VBQUs7QUFDcEI7QUFDQTtBQUNPO0FBQ1AsV0FBVywrQ0FBRTtBQUNiLDRDQUE0QyxPQUFPLGtFQUFLLGFBQWE7QUFDckUsVUFBVSxrRUFBSztBQUNmO0FBQ087QUFDUCw4QkFBOEIsZ0NBQWdDLE9BQU8sa0VBQUssYUFBYTtBQUN2RjtBQUNPO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSw2QkFBNkIsK0NBQUU7QUFDL0IseUJBQXlCLCtDQUFFO0FBQzNCLHlCQUF5QiwrQ0FBRTtBQUMzQix5QkFBeUIsK0NBQUU7QUFDM0I7QUFDTztBQUNQO0FBQ0EsUUFBUSwrQ0FBRSxzQkFBc0IsK0NBQUU7QUFDbEM7QUFDQSxZQUFZLCtDQUFFO0FBQ2Q7QUFDQSxvREFBb0QsdUJBQXVCO0FBQzNFO0FBQ0E7QUFDQSxZQUFZLCtDQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJMkM7QUFDbEI7QUFDMkU7QUFDckY7QUFDZixrQ0FBa0MsK0NBQUU7QUFDcEM7QUFDQTtBQUNBLG1EQUFtRCxPQUFPLCtDQUFFLG1CQUFtQiwrQ0FBRSxZQUFZO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFhLHVCQUF1Qix1Q0FBdUM7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBTTtBQUM3Qix3QkFBd0IsZ0RBQU07QUFDOUIsNEJBQTRCLCtDQUFFO0FBQzlCLDhCQUE4QiwrQ0FBRTtBQUNoQztBQUNBO0FBQ0Esc0JBQXNCLDREQUFrQjtBQUN4Qyx1QkFBdUIsNERBQWtCO0FBQ3pDLHNDQUFzQyw0REFBa0I7QUFDeEQ7QUFDQTtBQUNBLG9DQUFvQywrQ0FBRSwrQkFBK0IsK0NBQUU7QUFDdkUsd0JBQXdCLGtFQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU07QUFDN0Isd0JBQXdCLGdEQUFNO0FBQzlCLDRCQUE0QiwrQ0FBRTtBQUM5QixvQkFBb0IsNERBQWtCO0FBQ3RDLDZCQUE2Qiw0REFBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQXNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQWMsdUJBQXVCLGlFQUFpRTtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFZLHVCQUF1QixVQUFVO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBWSx1QkFBdUIsVUFBVTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYyx1QkFBdUIsaUVBQWlFO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQWEsdUJBQXVCLHlDQUF5QztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDd0I7QUFDeEI7Ozs7Ozs7Ozs7O0FDaklhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGdJQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyREE7QUFDQSxNQUFNLElBQTBDO0FBQ2hELElBQUksaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ3ZCLElBQUksS0FBSyxFQUlOO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzJKO0FBQ25HO0FBQ3FDO0FBQ3JEO0FBRXpDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsNENBQUs7QUFFckMsTUFBTSxTQUFTLEdBQUcsNENBQUssQ0FBQywrQkFBK0IsQ0FBQyxtQkFBTyxDQUFDLG1IQUEyQixDQUFDLEVBQUUsMkNBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxvREFBZSxDQUFDO0FBTzlILFNBQVMsbUJBQW1CLENBQUUsS0FBSztJQUNqQyxNQUFNLEdBQUcsR0FBRyw0Q0FBSyxDQUFDLE1BQU0sRUFBRTtJQUMxQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ3JCLENBQUMsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLE9BQU87QUFDcEIsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUUsVUFBVSxFQUFFLGFBQWE7SUFDbkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGFBQWE7UUFBRSxPQUFPLEtBQUs7SUFDL0MsTUFBTSxvQkFBb0IsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDekUsTUFBTSx1QkFBdUIsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsYUFBYixhQUFhLGNBQWIsYUFBYSxHQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDL0UsT0FBTyx1QkFBdUIsR0FBRyxvQkFBb0I7QUFDdkQsQ0FBQztBQUVELE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxLQUFnQyxFQUFFLEVBQUU7SUFDckUsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSztJQUN2RCxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDckMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUseUJBQXlCLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwRixNQUFNLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDLGVBQWUsQ0FBQztJQUNoRSxNQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUM7SUFFekUsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBVSxFQUFFLEtBQWEsRUFBRSxFQUFFOztRQUNuRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNoQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUM5QyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO2FBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7YUFBTSxDQUFDO1lBQ04sWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUNELFdBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxhQUFhLHNEQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLElBQStCLEVBQUUsRUFBRTtRQUN2RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDN0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSywwQ0FBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUNELEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNiLG1DQUFtQztRQUNuQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLGlCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxJQUFJLE1BQUssWUFBWSxFQUFFLENBQUM7WUFDekUseUJBQXlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVyQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2Isd0NBQXdDO1FBQ3hDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQztRQUNELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ3RCLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFOUIsT0FBTyxDQUNMLDJEQUFDLDhDQUFLLG9CQUNBLEtBQUssSUFDVCxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBYyxFQUMvQixzQkFBc0IsRUFBRSxzQkFBc0IsRUFDOUMsYUFBYSxFQUFFLFdBQVcsRUFDMUIsWUFBWSxFQUFFLFlBQVksRUFDMUIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsVUFBVSxVQUNWLENBQ0g7QUFDSCxDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFjLEVBQUUsUUFBb0IsRUFBZ0IsRUFBRTs7SUFDN0UsTUFBTSxRQUFRLEdBQUcsY0FBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFVBQVUsMENBQUUsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsZUFBZSxFQUFFLFdBQUssQ0FBQyxpQkFBaUIsMENBQUUsZUFBZTtRQUN6RCxRQUFRLEVBQUUsdUJBQUssQ0FBQyxpQkFBaUIsMENBQUUsU0FBUywwQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLDBDQUFFLGNBQWM7S0FDaEY7QUFDSCxDQUFDO0FBRU0sTUFBTSx3QkFBd0IsR0FBRyxpREFBVSxDQUFDLE9BQU8sQ0FBb0MsZUFBZSxDQUFDLENBQUMseUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HcEI7QUFDNUQ7QUFDYztBQUNoQztBQUNFO0FBQ2dCO0FBQ1k7QUFFckUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLDRDQUFLO0FBT3RELFNBQVMsU0FBUyxDQUFFLEVBQVUsRUFBRSxhQUFxQixFQUFFO0lBQ3JELE9BQU8sMkNBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxvREFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUN0RyxDQUFDO0FBRU0sTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEtBQWdDLEVBQUUsRUFBRTtJQUNyRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsR0FBRyxLQUFLO0lBQ3hELE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNyQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQy9DLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQUMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM1RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzQixLQUFLLEVBQUUsU0FBUyxDQUFDLHdCQUF3QixDQUFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLDhDQUE4QztvQkFDbkQsR0FBRyxFQUFFLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsTUFBTSxFQUFFLElBQUk7b0JBQ1osS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQzthQUM1QztZQUNELFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSx1RUFBdUUsVUFBVSxJQUFJO1lBQzdGLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGNBQWMsRUFBRTtnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQWtCLEVBQUUsY0FBc0IsRUFBRSxFQUFFO1FBQ3pFLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRTs7WUFDOUIsdURBQXVEO1lBQ3ZELElBQUksY0FBQyxDQUFDLE1BQU0sMENBQUUsYUFBYSwwQ0FBRSxhQUFhLENBQUMsY0FBYyxDQUFDLE1BQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4RSxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNiLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUNoRSxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sc0JBQXNCLEVBQUU7WUFDMUIsQ0FBQztRQUNILENBQUM7UUFDRCxlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFOztZQUM1QixJQUFJLFFBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxZQUFZLDBDQUFFLFVBQVUsTUFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGNBQWM7Z0JBQzFELFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7aUJBQU0sQ0FBQztnQkFDTixXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFDRCxzQkFBc0IsRUFBRTtRQUMxQixDQUFDO1FBQ0QsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7UUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQ3pFLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDdkUsQ0FBQztJQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBK0IsRUFBRSxFQUFFO1FBQ3ZELE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7UUFDbkMsTUFBTSxjQUFjLEdBQUcscURBQXVCLENBQUMsSUFBSSxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBRXhELElBQUksS0FBSyxLQUFLLDBDQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEMsMEVBQTBFO1lBQzFFLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxREFBcUQsQ0FBQztZQUN4RyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLENBQUM7WUFDdEQsSUFBSSxrQkFBa0IsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRztnQkFDeEcsa0JBQWtCLGFBQWxCLGtCQUFrQix1QkFBbEIsa0JBQWtCLENBQUUsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoSSxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssMENBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1Qyw0REFBYyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxFQUFDLGlEQUFpRDtZQUNsRyxvRUFBa0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxnQkFBZ0I7WUFDakUsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFZixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXJCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDVCx1QkFBdUI7WUFDdkIsTUFBTSxVQUFVLEdBQUcsb0VBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztZQUN6RSxJQUFJLE1BQU07WUFDVixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLHFEQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzVELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixNQUFNLEdBQUcsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUNsRCxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksUUFBUSxJQUFJLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLENBQUMsSUFBSSxNQUFLLFVBQVUsRUFBRSxDQUFDO2dCQUNyRCxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUUzRCxPQUFPLENBQ0wsMkRBQUMsOENBQUssb0JBQ0EsS0FBSyxJQUNULEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQVksRUFDbkIsWUFBWSxFQUFFLFlBQVksRUFDMUIsVUFBVSxVQUNWLENBQ0g7QUFDSCxDQUFDO0FBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFjLEVBQWdCLEVBQUU7O0lBQ3ZELE9BQU87UUFDTCxTQUFTLEVBQUUsV0FBSyxDQUFDLGlCQUFpQiwwQ0FBRSxTQUFTO1FBQzdDLGVBQWUsRUFBRSxpQkFBSyxDQUFDLGlCQUFpQiwwQ0FBRSxjQUFjLDBDQUFFLFNBQVM7S0FDcEU7QUFDSCxDQUFDO0FBRU0sTUFBTSxpQkFBaUIsR0FBRyxpREFBVSxDQUFDLE9BQU8sQ0FBb0MsZUFBZSxDQUFDLENBQUMsa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJM0gsZUFBZTtBQUN3SjtBQUM5SDtBQUNnQjtBQUNrQztBQUUzRixNQUFNLFNBQVMsR0FBRyw0Q0FBSyxDQUFDLCtCQUErQixDQUFDLG1CQUFPLENBQUMsNkdBQXlCLENBQUMsRUFBRSwyQ0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLG9EQUFlLENBQUM7QUFjckgsTUFBTSxnQkFBaUIsU0FBUSw0Q0FBSyxDQUFDLGFBQStDO0lBR3pGLFlBQWEsS0FBSzs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUhHLGdCQUFXLEdBQUcsQ0FBQztRQTJCZixpQkFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7O1lBQ3ZDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7WUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ2hCLGtEQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7WUFDbEQsQ0FBQztpQkFBTSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsc0RBQVcsRUFBRSxDQUFDLFFBQVEsQ0FDcEIsaURBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUNwRTtZQUNILENBQUM7aUJBQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3hCLGtEQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7WUFDaEQsQ0FBQztpQkFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDeEIsa0RBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztZQUNoRCxDQUFDO2lCQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO2dCQUN4QixrREFBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1lBQ2pELENBQUM7WUFFRCxJQUFJLFNBQVMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLDBDQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25ELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQ3BCLGlEQUFVLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FDbkU7WUFDSCxDQUFDO2lCQUFNLElBQUksU0FBUyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssMENBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDMUQsTUFBTSxRQUFRLEdBQUcsVUFBSSxDQUFDLEtBQUssMENBQUUsUUFBUTtnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixzQkFBc0Isa0NBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEtBQ3BDLENBQUMsRUFBRSxRQUFRLEtBQUssK0NBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUM1QztpQkFDRixDQUFDO1lBQ0osQ0FBQztZQUVELDZCQUE2QjtZQUM3QixnQkFBSSxDQUFDLEtBQUssMENBQUUsWUFBWSxtREFBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQztRQUVnQixnQkFBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQVUsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxLQUFLLEdBQUcsQ0FBQzthQUNyQixDQUFDO1FBQ0osQ0FBQztRQTVEQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsU0FBUyxFQUFFLFdBQUssQ0FBQyxTQUFTLG1DQUFJLENBQUM7WUFDL0IsS0FBSyxFQUFFLGVBQVMsQ0FBQyxLQUFLLG1DQUFJLEVBQUU7WUFDNUIsc0JBQXNCLEVBQUUsV0FBSyxDQUFDLHNCQUFzQixtQ0FBSSxFQUFFO1lBQzFELEdBQUcsRUFBRSxXQUFLLENBQUMsR0FBRyxtQ0FBSSxJQUFJO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFFLFNBQW9DO1FBQ3RELElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLEdBQUcsTUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzthQUNwQixDQUFDO1FBQ0osQ0FBQztRQUVELElBQUksVUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFNBQVMsTUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzthQUNoQyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUEwQ0QsTUFBTTtRQUNKLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3BFLE9BQU8sQ0FDTCwrQ0FBQyw4Q0FBSyxJQUNKLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQWUsRUFDdEIsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQzlDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FDL0IsQ0FDSDtJQUNILENBQUM7Q0FDRjtBQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBYyxFQUFnQixFQUFFOztJQUN2RCxNQUFNLGFBQWEsR0FBRyxpQkFBSyxDQUFDLGlCQUFpQiwwQ0FBRSxjQUFjLDBDQUFFLGFBQWE7SUFDNUUsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztRQUM5QixRQUFRLEVBQUUsNkJBQUssQ0FBQyxpQkFBaUIsMENBQUUsU0FBUywwQ0FBRSxLQUFLLDBDQUFHLGFBQWEsQ0FBQywwQ0FBRSxJQUFJO0tBQzNFO0FBQ0gsQ0FBQztBQUVNLE1BQU0sZUFBZSxHQUFHLGlEQUFVLENBQUMsT0FBTyxDQUFvQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0d2SCxlQUFlO0FBQzZEO0FBQzJCO0FBQzlEO0FBQ0M7QUFDVTtBQUMwRjtBQUMxRztBQUNEO0FBRW5DLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsNENBQUs7QUFFckMsTUFBTSxNQUFNLEdBQUc7SUFDYixhQUFhLEVBQUUsR0FBRztJQUNsQixjQUFjLEVBQUUsS0FBSyxDQUFDLGFBQWE7Q0FDcEM7QUFFRCxNQUFNLGNBQWMsR0FBRztJQUNyQixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsS0FBSztLQUNkO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsU0FBUyxFQUFFLHVDQUF1QztLQUNuRDtDQUNGO0FBRUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFVLEVBQUUsSUFBZSxFQUFFLEVBQUU7SUFDbEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsb0RBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzVFLENBQUM7QUFzREQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUE4QixFQUFFLEVBQUU7SUFDaEQsTUFBTSxZQUFZLEdBQUcsNENBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUs7SUFDNUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQVEsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFVLEtBQUssQ0FBQztJQUM5QyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBUyxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDLEdBQUcsUUFBUSxDQUF5QixFQUFFLENBQUM7SUFDaEcsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRyxRQUFRLENBQXNCLEVBQUUsQ0FBQztJQUNyRSxNQUFNLFFBQVEsR0FBRyw0Q0FBSyxDQUFDLFNBQVMsRUFBa0I7SUFDbEQsTUFBTSxXQUFXLEdBQUcsNENBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFBQyxNQUFNLGdCQUFnQixHQUFHLDRDQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRixJQUFJLFlBQVk7SUFFaEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTs7UUFDMUMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFNO1FBQzdCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3BFLE9BQVEsU0FBUyxDQUFDLEtBQUssQ0FBcUIsQ0FBQyxLQUFLLENBQUMsNEJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUcsS0FBSyxDQUFDLG1DQUFJLENBQUMsQ0FBQztRQUMxRixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFTO0lBQ2pDLENBQUM7SUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLFdBQW1CLEVBQUUsY0FBc0IsRUFBRSxVQUFvQixFQUFFLEVBQUU7O1FBQ3RGLElBQUksVUFBVSxHQUFHLElBQUk7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNiLElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztZQUMzRixNQUFNLHNCQUFzQixHQUFHLGNBQWM7WUFDN0MsVUFBVSxHQUFHLGtCQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsZUFBZSwwQ0FBRSxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFDbkYsQ0FBQzthQUFNLENBQUM7WUFDTixVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDckQsQ0FBQztRQUVELElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUM1QixZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNuQyxZQUFZLENBQUMsV0FBVyxDQUFDO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNaLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNULENBQUM7YUFBTSxDQUFDO1lBQ04sZ0JBQWdCLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxhQUFhO1lBQ2hELElBQUksZ0JBQWdCLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO2dCQUNuSCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQztnQkFDNUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2IsV0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFlBQVksc0RBQUcsRUFBRSxNQUFNLEVBQUUsMENBQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpREFBTSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUNoSSx1QkFBdUI7WUFDekIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLFdBQVcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDcEMsU0FBUyxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDO2dCQUNwRCxDQUFDLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHFCQUFxQixHQUFHLENBQUMsSUFBbUIsRUFBRSxFQUFFOztRQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUk7UUFDeEQsTUFBTSxhQUFhLEdBQUcsS0FBSyxHQUFHLENBQUMsTUFBTSxLQUFLLGtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDbkYsTUFBTSxjQUFjLEdBQUcscURBQXVCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDN0UsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDeEQsWUFBWSxDQUFDLE9BQU8sR0FBRyxXQUFXO1FBRWxDLDJDQUEyQztRQUMzQyxJQUFJLElBQUksS0FBSyxpREFBTSxDQUFDLFVBQVUsSUFBSSxrREFBb0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixXQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsWUFBWSxzREFBRyxFQUFFLE1BQU0sRUFBRSwwQ0FBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ25JLE9BQU07UUFDUixDQUFDO2FBQU0sSUFBSSxJQUFJLEtBQUssaURBQU0sQ0FBQyxVQUFVLElBQUksa0RBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4RSwwRkFBMEY7WUFDMUYsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLFdBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxZQUFZLHNEQUFHLEVBQUUsTUFBTSxFQUFFLDBDQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ2pILE9BQU07UUFDUixDQUFDO2FBQU0sSUFBSSxJQUFJLEtBQUssaURBQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsa0RBQW9CLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUNuRixxREFBcUQ7WUFDckQsSUFBSSxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQy9CLE1BQU0saUJBQWlCLEdBQUcsc0RBQXdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ2pGLHFEQUFxRDtnQkFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3ZCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7b0JBQzFDLE9BQU07Z0JBQ1IsQ0FBQztnQkFDRCxhQUFhLENBQUMsaUJBQWlCLENBQUM7WUFDbEMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLDJDQUEyQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNmLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDO29CQUNoQyxPQUFNO2dCQUNSLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDYixLQUFLLGlEQUFNLENBQUMsUUFBUTtnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDYixZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNmLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO2dCQUNyRCxNQUFLO1lBQ1AsS0FBSyxpREFBTSxDQUFDLFVBQVU7Z0JBQ3BCLFlBQVksQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLE1BQUs7WUFDUCxLQUFLLGlEQUFNLENBQUMsZ0JBQWdCO2dCQUMxQixZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsTUFBSztZQUNQLEtBQUssaURBQU0sQ0FBQyxPQUFPO2dCQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLENBQUM7b0JBQzlFLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO29CQUNyRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztvQkFDbkUsQ0FBQztvQkFDRCxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztvQkFDbEQsTUFBSztnQkFDUCxDQUFDO2dCQUNELE1BQUs7UUFDVCxDQUFDO1FBQ0QsV0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFlBQVksc0RBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDbkksQ0FBQztJQUVELE1BQU0sNEJBQTRCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7UUFDekMsSUFBSSxrQkFBWSxDQUFDLE9BQU8sMENBQUUsY0FBYyxFQUFFLENBQUM7WUFDekMsTUFBTSxpQkFBaUIsR0FBRyxzREFBd0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDMUYsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE1BQU0sb0NBQW9DLEdBQUcsNkNBQU0sQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDO1FBQy9GLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLENBQUM7UUFDdkUsT0FBTyxHQUFHLEVBQUU7WUFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG9DQUFvQyxFQUFFLElBQUksQ0FBQztZQUNoRixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG9DQUFvQyxDQUFDO1FBQzVFLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVyQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFZixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IseUJBQXlCLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3pELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRWxDLE1BQU0sV0FBVyxHQUFHLDRDQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNyQyxPQUFPLGdEQUFrQixDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQztJQUMxRCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUVuQyxNQUFNLFFBQVEsR0FBRyw0Q0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFDbEMsT0FBTztZQUNMLElBQUksRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUNuQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFDckMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQy9CLElBQUksRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUNuQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1lBQzNELEtBQUssRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUNyQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDbkMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7WUFDbkQsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQztTQUN0RTtJQUNILENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0QixNQUFNLFlBQVksR0FBRyw0Q0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQVU7UUFDbEQsT0FBTywrQ0FBQyxvREFBVSxrQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxVQUFVLElBQU0sS0FBSyxFQUFJO0lBQ2xGLENBQUMsQ0FBQztJQUVGLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQ3hCLFlBQVksRUFDWixLQUFLLENBQUMsU0FBUyxDQUNoQjtJQUVELE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUUsT0FBTztRQUNwQixHQUFHLElBQUksdUVBQWlCLE1BQU0sdUJBQW1CLFlBQVksRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUk7UUFDbkcsK0NBQUMscURBQU8sSUFDTixHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEtBQUssRUFBRSxXQUFXLEVBQ2xCLGdCQUFnQixFQUFFLFlBQVksRUFDOUIsTUFBTSxFQUFFLGNBQWMsRUFDdEIsUUFBUSxFQUFFLHFCQUFxQixFQUMvQixVQUFVLFFBQ1YsY0FBYyxRQUNkLFlBQVksRUFBRSxLQUFLLEVBQ25CLGdCQUFnQixFQUFFLENBQUMsRUFDbkIsbUJBQW1CLFFBQ25CLGdCQUFnQixRQUNoQixzQkFBc0IsUUFDdEIsY0FBYyxRQUNkLE1BQU0sRUFBRSxRQUFRLEdBQ2hCO1FBQ0YsK0NBQUMsOENBQU0sSUFBQyxNQUFNLEVBQUUsa0VBQWMsRUFBRSxHQUFJLENBQ2hDLENBQ1A7QUFDSCxDQUFDO0FBRU0sTUFBTSxLQUFLLEdBQUcscURBQVUsQ0FBZ0MsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvUnRFLGVBQWU7QUFDOEM7QUFDN0I7QUFDTTtBQUVKO0FBUzNCLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBc0MsRUFBRSxFQUFFOztJQUNwRSxNQUFNLEVBQ0osVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNmLEdBQUcsS0FBSztJQUNULE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFrQjtJQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUM1QixNQUFNLFdBQVcsR0FBRyxnQkFBSSxDQUFDLE1BQU0sMENBQUUsT0FBTywwQ0FBRSxLQUFLO0lBQy9DLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUVqSCxPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLHFCQUFxQixFQUFDLEdBQUcsRUFBRSxnREFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0Qsd0RBQ0UsU0FBUyxFQUFFLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckUsUUFBUSxFQUFFLFdBQVcsYUFBWCxXQUFXLGNBQVgsV0FBVyxHQUFJLFNBQVM7YUFDbkM7WUFFRCxzRUFBSyxTQUFTLEVBQUMsWUFBWSxJQUFLLFlBQVksR0FDekMsSUFBSSxDQUFDLE9BQU8sQ0FDVDtZQUNMLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSx3REFBSyxTQUFTLEVBQUMsY0FBYztnQkFDL0MsQ0FBQyxjQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSwrQ0FBQyw0Q0FBSyxDQUFDLFFBQVE7b0JBQ2pELCtDQUFDLDJDQUFNLG9CQUFLLFNBQVMsSUFBRSxTQUFTLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQWMsZ0JBQWMsUUFBUSxDQUFDLElBQWMsS0FDOUksUUFBUSxDQUFDLElBQUksQ0FDUDtvQkFDVCx3REFBSyxTQUFTLEVBQUMsc0JBQXNCLEdBQUcsQ0FDekI7Z0JBQ2hCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQ3BDLCtDQUFDLDJDQUFNLG9CQUFLLFNBQVMsSUFBRSxTQUFTLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQWMsZ0JBQWMsUUFBUSxDQUFDLElBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxLQUNuSyxRQUFRLENBQUMsSUFBSSxDQUNQLENBQ1Y7Z0JBQ0EsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLCtDQUFDLDJDQUFNLG9CQUMxQixZQUFZLElBQUUsU0FBUyxRQUFDLFNBQVMsRUFBQyw0QkFBNEIsRUFBQyxLQUFLLEVBQUUsU0FBUyxnQkFBYyxTQUFTLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQ2pJLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBR25DLFNBQVMsQ0FDSCxDQUNMLENBQ0YsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVNLE1BQU0sVUFBVSxHQUFHLHFEQUFTLENBQUMsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FOEQ7QUFDbkM7QUFDdEM7QUFFckMsTUFBTSxhQUFhLEdBQUcsR0FBRztBQUN6QixNQUFNLGFBQWEsR0FBRyxHQUFHO0FBRXpCOzs7R0FHRztBQUNILE1BQU0sbUJBQW1CLEdBQUc7SUFDMUIsRUFBRSxFQUFFLE1BQU07SUFDVixNQUFNLEVBQUUsS0FBSztJQUNiLE1BQU0sRUFBRSwrQkFBK0I7SUFDdkMsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLE1BQU07UUFDVixXQUFXLEVBQUUsU0FBUztLQUN2QjtJQUNELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFVBQVUsRUFBRSxTQUFTO0tBQ3RCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLE1BQU07WUFDYixFQUFFLEVBQUUsU0FBUztZQUNiLE1BQU0sRUFBRSxtQ0FBbUM7U0FDNUM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsTUFBTTtZQUNiLEVBQUUsRUFBRSxTQUFTO1NBQ2Q7S0FDRjtJQUNELGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLE1BQU07WUFDYixFQUFFLEVBQUUsU0FBUztTQUNkO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsU0FBUztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxTQUFTO1NBQ2pCO0tBQ0Y7Q0FDRjtBQUVNLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtJQUNqQyxPQUFPLDRDQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUN4QixPQUFPLDhDQUFHOzs7Ozs7Ozs7Ozs7O2tDQWFvQixtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtrQ0FDOUIsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0M3RCw0Q0FBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FFbEIsNENBQUksQ0FBQyxhQUFhLENBQUM7O2dCQUVqQiw0Q0FBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7a0JBS1YsNENBQUksQ0FBQyxNQUFNLENBQUM7Ozs7OztZQU1sQiw0Q0FBSSxDQUFDLGVBQWUsQ0FBQzs7Y0FFbkIsNENBQUksQ0FBQyxjQUFjLENBQUM7Ozs7OztrQkFNaEIsNENBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBb0IxQjtJQUNILENBQUMsRUFBRSxFQUFFLENBQUM7QUFDUixDQUFDO0FBRU0sTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7SUFDaEMsTUFBTSxLQUFLLEdBQXFCLEtBQUssQ0FBQyxLQUFLO0lBQzNDLE1BQU0sU0FBUyxHQUFnQyxXQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsVUFBVSwwQ0FBRSxLQUFLO0lBQ3ZFLE9BQU8sNENBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sOENBQUc7O1FBRU4seUVBQVcsQ0FBQyxLQUFLLENBQUM7OztpQkFHVCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSzs7bUJBRTVCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVOzs7Ozs7OzRCQU8xQixtQkFBbUIsQ0FBQyxFQUFFOzt5QkFFekIsbUJBQW1CLENBQUMsTUFBTTtxQkFDOUIsYUFBYTs7Ozs7O21CQU1mLCtDQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs7O21CQUdoQiwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkF1Q0wsU0FBUyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkF3Qm5DLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSzs0QkFDcEMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztzQkFFbEQsbUJBQW1CLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzttQkFFbkQsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLOzhCQUNsQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Ozs7O2lCQUt2RCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUs7d0JBQzFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVzs7bUJBRTVELG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSzs4QkFDcEMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFOzBCQUNoRCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7Ozs7aUJBSXJELG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSzs7bUJBRTlDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFnQjFDLGFBQWE7Ozs7Ozs7OztLQVMvQjtJQUNILENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Tc0M7QUFDd0I7QUFDSTtBQUNFO0FBQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjhIO0FBVTlJLE1BQU0sTUFBTSxtQ0FDZCxpREFBYyxLQUNqQixRQUFRLEVBQUUsVUFBaUIsR0FDNUI7QUFxSGdCO0FBRVYsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElJO0FBSXpFLE1BQU0sd0JBQXdCLEdBQUcsZUFBZTtBQUV6QyxTQUFTLFlBQVksQ0FBRSxLQUFZLEVBQUUsZUFBdUM7SUFDakYsTUFBTSxXQUFXLEdBQWtCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQyxFQUFFLEtBQWEsRUFBRSxFQUFFOztRQUMxRyxJQUFJLFFBQWM7UUFDbEIsTUFBTSxLQUFLLEdBQUcsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxVQUFVLDBDQUFFLEtBQUs7UUFFekQsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6QixPQUFPO2dCQUNMLE1BQU0sRUFBRSxrQkFBa0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsRUFBRSwyREFBMkQ7Z0JBQ3ZILE9BQU8sRUFBRSxJQUFJO2FBQ0E7UUFDakIsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxPQUFDLElBQXdCLENBQUMsS0FBSywwQ0FBRSxNQUFNLElBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkcsUUFBUSxHQUFJLElBQXdCLENBQUMsS0FBSyxDQUFDLHFCQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUcsS0FBSyxDQUFDLG1DQUFJLENBQUMsQ0FBQztRQUMzRSxDQUFDO2FBQU0sQ0FBQztZQUNOLFFBQVEsR0FBRyxJQUFZO1FBQ3pCLENBQUM7UUFFRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFNBQVMsS0FBb0IsUUFBUSxFQUF2QixVQUFVLFVBQUssUUFBUSxFQUF2SCwyR0FBNEcsQ0FBVztRQUM3SCxJQUFJLFlBQVk7UUFDaEIsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSyxFQUFFLENBQUM7WUFDbkIsTUFBTSxLQUEwRCxPQUFPLENBQUMsS0FBSyxFQUF2RSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsT0FBc0MsRUFBakMsZUFBZSxjQUFyRCx5Q0FBdUQsQ0FBZ0I7WUFDN0UsWUFBWSxHQUFHLENBQ2Isb0VBQUssU0FBUyxFQUFFLGlDQUFpQyxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxRQUFRLEVBQUU7Z0JBQ3JFLGtGQUFLLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsK0NBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRywrQ0FBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxFQUFFLElBQU0sZUFBZSxFQUFJLENBQ3BMLENBQ1A7UUFDSCxDQUFDO1FBQ0QsTUFBTSxZQUFZLEdBQUcsS0FBSyxJQUFJLHVFQUFLLEtBQUssQ0FBTTtRQUM5QyxNQUFNLFdBQVcsR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxzRUFBSSxPQUFPLENBQUMsSUFBSSxDQUFLLENBQUMsQ0FBQyxDQUFDLHdFQUFNLE9BQWMsQ0FBTyxDQUFDO1FBRXBHLE9BQU8sZ0JBQ0wsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDcEUsT0FBTyxFQUFFLG9FQUNQLFNBQVMsRUFBRSxrQkFBa0IsUUFBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsTUFBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBRTlILFlBQVk7Z0JBQ2Isb0VBQUssU0FBUyxFQUFDLHFCQUFxQjtvQkFDakMsWUFBWTtvQkFDWixXQUFXLENBQ1IsQ0FDRixFQUNOLE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLEtBQUs7aUJBQ2I7YUFDRixFQUNELGVBQWUsRUFBRSxlQUFlLGFBQWYsZUFBZSxjQUFmLGVBQWUsR0FBSSxDQUFDLENBQUMsY0FBYyxFQUNwRCxhQUFhLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFDMUIsY0FBYztZQUNkLGNBQWMsRUFDZCxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQ2xELFVBQVUsQ0FDQTtJQUNqQixDQUFDLENBQUM7SUFFRixPQUFPLFdBQVc7QUFDcEIsQ0FBQztBQUVNLFNBQVMsa0JBQWtCLENBQUUsSUFBVSxFQUFFLFVBQXVCOztJQUNyRSxNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztJQUMzRixNQUFNLHNCQUFzQixHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO0lBQzdELE1BQU0saUJBQWlCLEdBQUcsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGVBQWUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7SUFDN0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkIsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNELE1BQU0sZ0JBQWdCLEdBQUcsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLHFCQUFxQixFQUFFO0lBQzlELE1BQU0scUJBQXFCLEdBQUcsaUJBQWlCLGFBQWpCLGlCQUFpQix1QkFBakIsaUJBQWlCLENBQUUscUJBQXFCLEVBQUU7SUFDeEUsTUFBTSxTQUFTLEdBQUcsb0ZBQVcsRUFBRSwwQ0FBRSxRQUFRLEVBQUUsMENBQUUsaUJBQWlCLDBDQUFFLGNBQWMsMENBQUUsU0FBUyxtQ0FBSSxDQUFDO0lBRTlGLE9BQU8scUJBQXFCO1FBQzFCLENBQUMsQ0FBQztZQUNFLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDVixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ3hELElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJO1lBQ3RFLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHO1lBQ25FLEtBQUssRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVM7WUFDaEQsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUztTQUNuRDtRQUNILENBQUMsQ0FBQyxFQUFFO0FBQ1IsQ0FBQztBQUVNLFNBQVMsaUJBQWlCLENBQUUsSUFBVSxFQUFFLFVBQXVCO0lBQ3BFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDO0FBQ2xHLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBRSxJQUEyQztJQUN6RSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQzVGLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBRSxJQUFVLEVBQUUsVUFBdUI7O0lBQ3hELE1BQU0sTUFBTSxHQUFHLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxZQUFZLE1BQUssVUFBVSxLQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLG1CQUFtQixVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDL0csT0FBTyxNQUFNLEdBQUcsQ0FBQyxnQkFBSSxDQUFDLGNBQWMsMENBQUUsTUFBTSxtQ0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlELENBQUM7QUFFTSxTQUFTLElBQUksQ0FBRSxDQUFTLEVBQUUsS0FBZTs7SUFDOUMsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLENBQUM7SUFDaEIsS0FBSyxHQUFHLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLGtFQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsMENBQUUsVUFBVSwwQ0FBRSxLQUFLO0lBQzVELElBQUksS0FBSyxFQUFFLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDcEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQ2pFLENBQUM7SUFDRCxPQUFPLENBQUM7QUFDVixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlHK0Q7QUFFekQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7SUFDbkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQXlCO0lBQzdDLE1BQU0sU0FBUyxHQUFHLFdBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxVQUFVLDBDQUFFLEtBQUs7SUFFMUMsT0FBTyxTQUFTLElBQUksOENBQUc7Ozs7Z0JBSVQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O3FCQUlsQixTQUFTLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7aUNBV1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7Z0NBR3hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7MEJBVzdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTs7Z0JBRTlCLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLO3VCQUMvRCxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVk7b0JBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTTs7Ozs7Ozs7aUJBUTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUTt1QkFDaEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDbkYsK0NBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGVBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxtQ0FBSSxDQUFDLENBQUM7OzttQkFHdEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO21CQUN0RCxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVE7Ozs7Ozs7cUJBT25GLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVTs7Ozs7O2lCQU05QixTQUFTLENBQUMsWUFBWTs7Ozs7OztpQkFPdEIsU0FBUyxDQUFDLFlBQVk7b0JBQ25CLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLOzs7O3FCQUluRSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7cUJBZWhDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtrQkFDckIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXOzs7bUNBR1gsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXOzs7Z0NBRy9CLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVzs7O3NCQUd0QyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVU7Ozs7R0FJL0M7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoSEQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsR0FBRztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBOEZFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQzNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNpQztBQUV6RSxtREFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSx5REFBaUIsQ0FBQztBQUNsRixtREFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxnRUFBd0IsQ0FBQztBQUU3RCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvY2pzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3BvcHBlci5qcy9kaXN0L2VzbS9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL2hhcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsb2F0ZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1mbG9hdGVyL25vZGVfbW9kdWxlcy9AZ2lsYmFyYmFyYS9kZWVwLWVxdWFsL2VzbS9oZWxwZXJzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxvYXRlci9ub2RlX21vZHVsZXMvQGdpbGJhcmJhcmEvZGVlcC1lcXVhbC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1mbG9hdGVyL25vZGVfbW9kdWxlcy9pcy1saXRlL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsb2F0ZXIvbm9kZV9tb2R1bGVzL3RyZWUtY2hhbmdlcy9lc20vaGVscGVycy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsb2F0ZXIvbm9kZV9tb2R1bGVzL3RyZWUtY2hhbmdlcy9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbm5lcnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Njcm9sbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Njcm9sbHBhcmVudC9zY3JvbGxwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2d1aWRlL2NvbXBvbmVudHMvY29tbW9uL2RzLXNlbGVjdGlvbi9kcy1zZWxlY3Rpb24tZ3VpZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9ndWlkZS9jb21wb25lbnRzL2NvbW1vbi9pbnNlcnQtd2lkZ2V0L2luc2VydC13aWRnZXQtZ3VpZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9ndWlkZS9jb21wb25lbnRzL2NvbW1vbi9vbmJvYXJkaW5nL29uYm9hcmRpbmctZ3VpZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9ndWlkZS9jb21wb25lbnRzL2NvcmUvZ3VpZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9ndWlkZS9jb21wb25lbnRzL2NvcmUvc3RlcC1kaWFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9ndWlkZS9jb21wb25lbnRzL2NvcmUvc3RlcC1kaWFsb2cvc3R5bGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2d1aWRlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9saWIvZ3VpZGUvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2d1aWRlL3V0aWxzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvc3R5bGVzL2NvbXBvbmVudHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0LWRvbVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZ2lsYmFyYmFyYS9kZWVwLWVxdWFsL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGdpbGJhcmJhcmEvaGVscGVycy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2lzLWxpdGUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1qb3lyaWRlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvdHJlZS1jaGFuZ2VzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9ndWlkZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBzeW1ib2wpXG5cdFx0fSlcblx0XHQ6IFtdXG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHByb3BlcnR5IGluIG9iamVjdFxuXHR9IGNhdGNoKF8pIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxufVxuXG4vLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuXHRyZXR1cm4gcHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG5cdFx0JiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcblx0XHRcdCYmIE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldCwga2V5KSkgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cdC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcblx0Ly8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXHRvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiohXG4gKiBAZmlsZU92ZXJ2aWV3IEtpY2thc3MgbGlicmFyeSB0byBjcmVhdGUgYW5kIHBsYWNlIHBvcHBlcnMgbmVhciB0aGVpciByZWZlcmVuY2UgZWxlbWVudHMuXG4gKiBAdmVyc2lvbiAxLjE2LjFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcblxudmFyIHRpbWVvdXREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKTtcblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHZhciBnZXRUeXBlID0ge307XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHk7XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cblxudmFyIGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgdmFyIG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuXG5mdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50O1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5mdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICB2YXIgb3JkZXIgPSBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgdmFyIHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICB2YXIgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIHZhciBjb21tb25BbmNlc3RvckNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcblxuICBpZiAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciB8fCBzdGFydC5jb250YWlucyhlbmQpKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICB2YXIgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5mdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCkge1xuICB2YXIgc2lkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3RvcCc7XG5cbiAgdmFyIHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCkge1xuICB2YXIgc3VidHJhY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICB2YXIgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbi8qXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYXhpcyAtIGB4YCBvciBgeWBcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsIGF4aXMpIHtcbiAgdmFyIHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIHZhciBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUEgKyAnV2lkdGgnXSkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10pO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICB2YXIgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIHZhciB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgdmFyIGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICB2YXIgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgaXNJRTEwID0gaXNJRSgxMCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xuICB2YXIgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYgKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudCkgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJykge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQpIHtcbiAgdmFyIGV4Y2x1ZGVTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgdmFyIHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgdmFyIHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICB2YXIgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgdmFyIGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICB2YXIgYm91bmRhcmllc05vZGUgPSB2b2lkIDA7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2dldFdpbmRvd1NpemVzLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwO1xuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDtcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDtcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cblxuZnVuY3Rpb24gZ2V0QXJlYShfcmVmKSB7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCByZWZSZWN0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDA7XG5cbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgcmVjdHNba2V5XSwge1xuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgIH0pO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuYXJlYSAtIGEuYXJlYTtcbiAgfSk7XG5cbiAgdmFyIGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICByZXR1cm4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0O1xuICB9KTtcblxuICB2YXIgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleSA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgdmFyIGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIHZhciBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICB2YXIgbWF0Y2ggPSBmaW5kKGFyciwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgfVxuICAgIHZhciBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge31cbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHModGhpcy5zdGF0ZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQodGhpcy5vcHRpb25zLnBsYWNlbWVudCwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyh0aGlzLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gIHJldHVybiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBlbmFibGVkID0gX3JlZi5lbmFibGVkO1xuICAgIHJldHVybiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIHZhciBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICB2YXIgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciB0b0NoZWNrID0gcHJlZml4ID8gJycgKyBwcmVmaXggKyB1cHBlclByb3AgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdG9DaGVjaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICB2YXIgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgdmFyIHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICB2YXIgbm9Sb3VuZCA9IGZ1bmN0aW9uIG5vUm91bmQodikge1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIHZhciByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIHZhciBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIHZhciBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgdmFyIGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgdmFyIGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHkgPyByb3VuZCA6IGZsb29yO1xuICB2YXIgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmQgPyBwb3BwZXIubGVmdCAtIDEgOiBwb3BwZXIubGVmdCksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodClcbiAgfTtcbn1cblxudmFyIGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICB2YXIgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94KTtcblxuICB2YXIgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICB0b3AgPSB2b2lkIDA7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgdmFyIGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICB2YXIgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gc2lkZUEgKyAnLCAnICsgc2lkZUI7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMuYXJyb3csIGRhdGEuYXJyb3dTdHlsZXMpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgIGNvbnNvbGUud2FybihyZXF1ZXN0ZWQgKyAnIG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICcgKyBfcmVxdWVzdGluZyArICcgbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAnICsgX3JlcXVlc3RpbmcgKyAnIScpO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyRhcnJvdztcblxuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIHZhciBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICB2YXIgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1snbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZF0pO1xuICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10pO1xuICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSAoX2RhdGEkb2Zmc2V0cyRhcnJvdyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBzaWRlLCBNYXRoLnJvdW5kKHNpZGVWYWx1ZSkpLCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBhbHRTaWRlLCAnJyksIF9kYXRhJG9mZnNldHMkYXJyb3cpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBwbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxudmFyIHZhbGlkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuc2xpY2UoMyk7XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAqIGNsb2Nrd2lzZSAob3IgY291bnRlci1jbG9ja3dpc2UpLlxuICpcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHBsYWNlbWVudHMgaW5jbHVkaW5nIHRoZWlyIHZhcmlhdGlvbnNcbiAqL1xuZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCkge1xuICB2YXIgY291bnRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgdmFyIGFyciA9IHZhbGlkUGxhY2VtZW50cy5zbGljZShpbmRleCArIDEpLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuXG52YXIgQkVIQVZJT1JTID0ge1xuICBGTElQOiAnZmxpcCcsXG4gIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJ1xufTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAvLyBpZiBgaW5uZXJgIG1vZGlmaWVyIGlzIGVuYWJsZWQsIHdlIGNhbid0IHVzZSB0aGUgYGZsaXBgIG1vZGlmaWVyXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICB2YXIgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgdmFyIHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICB2YXIgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1RvcCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcG9wcGVyIGNvbnRlbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9uc0J5Q29udGVudCAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0xlZnQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0JvdHRvbSB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCk7XG5cbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgdmFyIHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIHZhciB0b3AgPSBwb3BwZXJTdHlsZXMudG9wLFxuICAgICAgbGVmdCA9IHBvcHBlclN0eWxlcy5sZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdO1xuXG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgdmFyIG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgdmFyIGNoZWNrID0ge1xuICAgIHByaW1hcnk6IGZ1bmN0aW9uIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIHBsYWNlbWVudCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiBmdW5jdGlvbiBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHBvcHBlclttYWluU2lkZV0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHZhciBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgdmFyIHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdKSxcbiAgICAgIGVuZDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdKVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICB9KS5ib3VuZGFyaWVzO1xuXG4gIGlmIChyZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fCByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fCByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fCByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdCkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xudmFyIG1vZGlmaWVycyA9IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDBcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IGl0IHBvaW50cyB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XSdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICpcbiAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBmbGlwOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogZmxpcCxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgKiBUaGUgYmVoYXZpb3IgdXNlZCB0byBjaGFuZ2UgdGhlIHBvcHBlcidzIHBsYWNlbWVudC4gSXQgY2FuIGJlIG9uZSBvZlxuICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbi5cbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0JyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnM9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zQnlDb250ZW50PWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHBvcHBlciBlbGVtZW50IG92ZXJsYXBzIGl0cyByZWZlcmVuY2UgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zQnlDb250ZW50OiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXJcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBYIGF4aXMgKGBib3R0b21gIG9yIGB0b3BgKS4gQUtBIFggb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAqL1xuICAgIHg6ICdib3R0b20nLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFkgYXhpcyAoYGxlZnRgIG9yIGByaWdodGApLiBBS0EgWSBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgKi9cbiAgICB5OiAncmlnaHQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UgZGlzYWJsZSB0aGlzIG1vZGlmaWVyLCB5b3UgbXVzdCBtYWtlIHN1cmUgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91ciBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWRcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gdXNlZCBieSBQb3BwZXIuanMuXG4gKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMuYXJyb3ddIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGUgYG9wdGlvbnNgIG9iamVjdCwgYXMgdGhlIDNyZCBhcmd1bWVudC4gRm9yIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIERlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZC5cbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZC4gVGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLy8gVXRpbHNcbi8vIE1ldGhvZHNcbnZhciBQb3BwZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZS5cbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgLyBYTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQb3BwZXIpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgICB9O1xuXG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsIG9wdGlvbnMubW9kaWZpZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBuYW1lOiBuYW1lXG4gICAgICB9LCBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSk7XG4gICAgfSlcbiAgICAvLyBzb3J0IHRoZSBtb2RpZmllcnMgYnkgb3JkZXJcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyT3B0aW9ucykge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChfdGhpcy5yZWZlcmVuY2UsIF90aGlzLnBvcHBlciwgX3RoaXMub3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBfdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdmFyIGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG5cblxuICBjcmVhdGVDbGFzcyhQb3BwZXIsIFt7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlJCQxKCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95JCQxKCkge1xuICAgICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiB1cGRhdGUuIEl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgICAqIFN0YXJ0aW5nIGZyb20gdmVyc2lvbiAxLjcsIHRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBvbmx5IGlmIHlvdVxuICAgICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgICAqXG4gICAgICogKipERVBSRUNBVElPTioqOiBUaGlzIHdheSB0byBhY2Nlc3MgUG9wcGVyVXRpbHMgaXMgZGVwcmVjYXRlZFxuICAgICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICAgKiBndWFyYW50ZWUgdGhlbSB0byBmb2xsb3cgc2VtdmVyLiBVc2UgdGhlbSBhdCB5b3VyIG93biByaXNrIVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICAgKiBAbWVtYmVyIFV0aWxzXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG4gIH1dKTtcbiAgcmV0dXJuIFBvcHBlcjtcbn0oKTtcblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuXG5cblBvcHBlci5VdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5Qb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5Qb3BwZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuZXhwb3J0IGRlZmF1bHQgUG9wcGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSByZXF1aXJlKCcuL2xpYi9oYXMnKTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkgeyAvKiovIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgK1xuICAgICAgICAgICAgICAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL2xpYi9oYXMnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJpZ2ludDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2JpZ2ludCcpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlLCBkYXRhKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhICYmIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGE6IHt9O1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpLFxuICAgICAgICAgIHtleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZX1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgdmFyIGNoZWNrZXJSZXN1bHQgPSBjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoY2hlY2tlclJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrZXJSZXN1bHQuZGF0YSAmJiBoYXMoY2hlY2tlclJlc3VsdC5kYXRhLCAnZXhwZWN0ZWRUeXBlJykpIHtcbiAgICAgICAgICBleHBlY3RlZFR5cGVzLnB1c2goY2hlY2tlclJlc3VsdC5kYXRhLmV4cGVjdGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleHBlY3RlZFR5cGVzTWVzc2FnZSA9IChleHBlY3RlZFR5cGVzLmxlbmd0aCA+IDApID8gJywgZXhwZWN0ZWQgb25lIG9mIHR5cGUgWycgKyBleHBlY3RlZFR5cGVzLmpvaW4oJywgJykgKyAnXSc6ICcnO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCcgKyBleHBlY3RlZFR5cGVzTWVzc2FnZSArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52YWxpZFZhbGlkYXRvckVycm9yKGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIGtleSwgdHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5ICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlICsgJ2AuJ1xuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGludmFsaWRWYWxpZGF0b3JFcnJvcihjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBrZXksIGdldFByZWNpc2VUeXBlKGNoZWNrZXIpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbSBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmIChoYXMoc2hhcGVUeXBlcywga2V5KSAmJiB0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsaWRhdG9yRXJyb3IoY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwga2V5LCBnZXRQcmVjaXNlVHlwZShjaGVja2VyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgaXMgZnJvbSAnaXMtbGl0ZSc7XG5pbXBvcnQgdHJlZUNoYW5nZXMgZnJvbSAndHJlZS1jaGFuZ2VzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIoZSkge1xuICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgcmVzdWx0O1xuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufVxuXG52YXIgREVGQVVMVFMgPSB7ZmxpcDp7cGFkZGluZzoyMH0scHJldmVudE92ZXJmbG93OntwYWRkaW5nOjEwfX07XG5cbnZhciBWQUxJREFUT1JfQVJHX0VSUk9SX01FU1NBR0U9J1RoZSB0eXBlVmFsaWRhdG9yIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbiAnKyd3aXRoIHRoZSBzaWduYXR1cmUgZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKS4nO3ZhciBNRVNTQUdFX0FSR19FUlJPUl9NRVNTQUdFPSdUaGUgZXJyb3IgbWVzc2FnZSBpcyBvcHRpb25hbCwgYnV0IG11c3QgYmUgYSBzdHJpbmcgaWYgcHJvdmlkZWQuJztmdW5jdGlvbiBwcm9wSXNSZXF1aXJlZChjb25kaXRpb24scHJvcHMscHJvcE5hbWUsY29tcG9uZW50TmFtZSl7aWYodHlwZW9mIGNvbmRpdGlvbj09PSdib29sZWFuJyl7cmV0dXJuIGNvbmRpdGlvbjt9aWYodHlwZW9mIGNvbmRpdGlvbj09PSdmdW5jdGlvbicpe3JldHVybiBjb25kaXRpb24ocHJvcHMscHJvcE5hbWUsY29tcG9uZW50TmFtZSk7fWlmKEJvb2xlYW4oY29uZGl0aW9uKT09PXRydWUpe3JldHVybiBCb29sZWFuKGNvbmRpdGlvbik7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gcHJvcEV4aXN0cyhwcm9wcyxwcm9wTmFtZSl7cmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLHByb3BOYW1lKTt9ZnVuY3Rpb24gbWlzc2luZ1Byb3BFcnJvcihwcm9wcyxwcm9wTmFtZSxjb21wb25lbnROYW1lLG1lc3NhZ2Upe2lmKG1lc3NhZ2Upe3JldHVybiBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBuZXcgRXJyb3IoXCJSZXF1aXJlZCBcIi5jb25jYXQocHJvcHNbcHJvcE5hbWVdLFwiIGBcIikuY29uY2F0KHByb3BOYW1lLFwiYCB3YXMgbm90IHNwZWNpZmllZCBpbiBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLFwiYC5cIikpO31mdW5jdGlvbiBndWFyZEFnYWluc3RJbnZhbGlkQXJnVHlwZXModHlwZVZhbGlkYXRvcixtZXNzYWdlKXtpZih0eXBlb2YgdHlwZVZhbGlkYXRvciE9PSdmdW5jdGlvbicpe3Rocm93IG5ldyBUeXBlRXJyb3IoVkFMSURBVE9SX0FSR19FUlJPUl9NRVNTQUdFKTt9aWYoQm9vbGVhbihtZXNzYWdlKSYmdHlwZW9mIG1lc3NhZ2UhPT0nc3RyaW5nJyl7dGhyb3cgbmV3IFR5cGVFcnJvcihNRVNTQUdFX0FSR19FUlJPUl9NRVNTQUdFKTt9fWZ1bmN0aW9uIGlzUmVxdWlyZWRJZih0eXBlVmFsaWRhdG9yLGNvbmRpdGlvbixtZXNzYWdlKXtndWFyZEFnYWluc3RJbnZhbGlkQXJnVHlwZXModHlwZVZhbGlkYXRvcixtZXNzYWdlKTtyZXR1cm4gZnVuY3Rpb24ocHJvcHMscHJvcE5hbWUsY29tcG9uZW50TmFtZSl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgscmVzdD1uZXcgQXJyYXkoX2xlbj4zP19sZW4tMzowKSxfa2V5PTM7X2tleTxfbGVuO19rZXkrKyl7cmVzdFtfa2V5LTNdPWFyZ3VtZW50c1tfa2V5XTt9aWYocHJvcElzUmVxdWlyZWQoY29uZGl0aW9uLHByb3BzLHByb3BOYW1lLGNvbXBvbmVudE5hbWUpKXtpZihwcm9wRXhpc3RzKHByb3BzLHByb3BOYW1lKSl7cmV0dXJuIHR5cGVWYWxpZGF0b3IuYXBwbHkodm9pZCAwLFtwcm9wcyxwcm9wTmFtZSxjb21wb25lbnROYW1lXS5jb25jYXQocmVzdCkpO31yZXR1cm4gbWlzc2luZ1Byb3BFcnJvcihwcm9wcyxwcm9wTmFtZSxjb21wb25lbnROYW1lLG1lc3NhZ2UpO30vLyBJcyBub3QgcmVxdWlyZWQsIHNvIGp1c3QgcnVuIHR5cGVWYWxpZGF0b3IuXG5yZXR1cm4gdHlwZVZhbGlkYXRvci5hcHBseSh2b2lkIDAsW3Byb3BzLHByb3BOYW1lLGNvbXBvbmVudE5hbWVdLmNvbmNhdChyZXN0KSk7fTt9XG5cbnZhciBTVEFUVVMgPSB7SU5JVDonaW5pdCcsSURMRTonaWRsZScsT1BFTklORzonb3BlbmluZycsT1BFTjonb3BlbicsQ0xPU0lORzonY2xvc2luZycsRVJST1I6J2Vycm9yJ307XG5cbnZhciBpc1JlYWN0MTY9UmVhY3RET00uY3JlYXRlUG9ydGFsIT09dW5kZWZpbmVkO2Z1bmN0aW9uIGNhblVzZURPTSgpe3JldHVybiAhISh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJndpbmRvdy5kb2N1bWVudCYmd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO31mdW5jdGlvbiBpc01vYmlsZSgpe3JldHVybiAnb250b3VjaHN0YXJ0J2luIHdpbmRvdyYmL01vYmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7fS8qKlxuICogTG9nIG1ldGhvZCBjYWxscyBpZiBkZWJ1ZyBpcyBlbmFibGVkXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICBhcmdcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICBhcmcudGl0bGUgICAgLSBUaGUgdGl0bGUgdGhlIGxvZ2dlciB3YXMgY2FsbGVkIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBbYXJnLmRhdGFdICAgLSBUaGUgZGF0YSB0byBiZSBsb2dnZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICBbYXJnLndhcm5dICAtIElmIHRydWUsIHRoZSBtZXNzYWdlIHdpbGwgYmUgYSB3YXJuaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICAgICAgW2FyZy5kZWJ1Z10gLSBOb3RoaW5nIHdpbGwgYmUgbG9nZ2VkIHVubGVzcyBkZWJ1ZyBpcyB0cnVlXG4gKi9mdW5jdGlvbiBsb2coX3JlZil7dmFyIHRpdGxlPV9yZWYudGl0bGUsZGF0YT1fcmVmLmRhdGEsX3JlZiR3YXJuPV9yZWYud2Fybix3YXJuPV9yZWYkd2Fybj09PXZvaWQgMD9mYWxzZTpfcmVmJHdhcm4sX3JlZiRkZWJ1Zz1fcmVmLmRlYnVnLGRlYnVnPV9yZWYkZGVidWc9PT12b2lkIDA/ZmFsc2U6X3JlZiRkZWJ1ZzsvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovdmFyIGxvZ0ZuPXdhcm4/Y29uc29sZS53YXJufHxjb25zb2xlLmVycm9yOmNvbnNvbGUubG9nO2lmKGRlYnVnJiZ0aXRsZSYmZGF0YSl7Y29uc29sZS5ncm91cENvbGxhcHNlZChcIiVjcmVhY3QtZmxvYXRlcjogXCIuY29uY2F0KHRpdGxlKSwnY29sb3I6ICM5YjAwZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDEycHg7Jyk7aWYoQXJyYXkuaXNBcnJheShkYXRhKSl7ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpe2lmKGlzLnBsYWluT2JqZWN0KGQpJiZkLmtleSl7bG9nRm4uYXBwbHkoY29uc29sZSxbZC5rZXksZC52YWx1ZV0pO31lbHNlIHtsb2dGbi5hcHBseShjb25zb2xlLFtkXSk7fX0pO31lbHNlIHtsb2dGbi5hcHBseShjb25zb2xlLFtkYXRhXSk7fWNvbnNvbGUuZ3JvdXBFbmQoKTt9LyogZXNsaW50LWVuYWJsZSAqL31mdW5jdGlvbiBvbihlbGVtZW50LGV2ZW50LGNiKXt2YXIgY2FwdHVyZT1hcmd1bWVudHMubGVuZ3RoPjMmJmFyZ3VtZW50c1szXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbM106ZmFsc2U7ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LGNiLGNhcHR1cmUpO31mdW5jdGlvbiBvZmYoZWxlbWVudCxldmVudCxjYil7dmFyIGNhcHR1cmU9YXJndW1lbnRzLmxlbmd0aD4zJiZhcmd1bWVudHNbM10hPT11bmRlZmluZWQ/YXJndW1lbnRzWzNdOmZhbHNlO2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCxjYixjYXB0dXJlKTt9ZnVuY3Rpb24gb25jZShlbGVtZW50LGV2ZW50LGNiKXt2YXIgY2FwdHVyZT1hcmd1bWVudHMubGVuZ3RoPjMmJmFyZ3VtZW50c1szXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbM106ZmFsc2U7dmFyIF9uZXh0Q0I7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuX25leHRDQj1mdW5jdGlvbiBuZXh0Q0IoZSl7Y2IoZSk7b2ZmKGVsZW1lbnQsZXZlbnQsX25leHRDQik7fTtvbihlbGVtZW50LGV2ZW50LF9uZXh0Q0IsY2FwdHVyZSk7fWZ1bmN0aW9uIG5vb3AoKXt9XG5cbnZhciBSZWFjdEZsb2F0ZXJQb3J0YWw9LyojX19QVVJFX18qL2Z1bmN0aW9uKF9SZWFjdCRDb21wb25lbnQpe19pbmhlcml0cyhSZWFjdEZsb2F0ZXJQb3J0YWwsX1JlYWN0JENvbXBvbmVudCk7dmFyIF9zdXBlcj1fY3JlYXRlU3VwZXIoUmVhY3RGbG9hdGVyUG9ydGFsKTtmdW5jdGlvbiBSZWFjdEZsb2F0ZXJQb3J0YWwoKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxSZWFjdEZsb2F0ZXJQb3J0YWwpO3JldHVybiBfc3VwZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpO31fY3JlYXRlQ2xhc3MoUmVhY3RGbG9hdGVyUG9ydGFsLFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpe2lmKCFjYW5Vc2VET00oKSlyZXR1cm47aWYoIXRoaXMubm9kZSl7dGhpcy5hcHBlbmROb2RlKCk7fWlmKCFpc1JlYWN0MTYpe3RoaXMucmVuZGVyUG9ydGFsKCk7fX19LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKXtpZighY2FuVXNlRE9NKCkpcmV0dXJuO2lmKCFpc1JlYWN0MTYpe3RoaXMucmVuZGVyUG9ydGFsKCk7fX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7aWYoIWNhblVzZURPTSgpfHwhdGhpcy5ub2RlKXJldHVybjtpZighaXNSZWFjdDE2KXtSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMubm9kZSk7fWlmKHRoaXMubm9kZSYmdGhpcy5ub2RlLnBhcmVudE5vZGU9PT1kb2N1bWVudC5ib2R5KXtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7dGhpcy5ub2RlPXVuZGVmaW5lZDt9fX0se2tleTpcImFwcGVuZE5vZGVcIix2YWx1ZTpmdW5jdGlvbiBhcHBlbmROb2RlKCl7dmFyIF90aGlzJHByb3BzPXRoaXMucHJvcHMsaWQ9X3RoaXMkcHJvcHMuaWQsekluZGV4PV90aGlzJHByb3BzLnpJbmRleDtpZighdGhpcy5ub2RlKXt0aGlzLm5vZGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7LyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9pZihpZCl7dGhpcy5ub2RlLmlkPWlkO31pZih6SW5kZXgpe3RoaXMubm9kZS5zdHlsZS56SW5kZXg9ekluZGV4O31kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7fX19LHtrZXk6XCJyZW5kZXJQb3J0YWxcIix2YWx1ZTpmdW5jdGlvbiByZW5kZXJQb3J0YWwoKXtpZighY2FuVXNlRE9NKCkpcmV0dXJuIG51bGw7dmFyIF90aGlzJHByb3BzMj10aGlzLnByb3BzLGNoaWxkcmVuPV90aGlzJHByb3BzMi5jaGlsZHJlbixzZXRSZWY9X3RoaXMkcHJvcHMyLnNldFJlZjtpZighdGhpcy5ub2RlKXt0aGlzLmFwcGVuZE5vZGUoKTt9LyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9pZihpc1JlYWN0MTYpe3JldHVybi8qI19fUFVSRV9fKi9SZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sdGhpcy5ub2RlKTt9dmFyIHBvcnRhbD1SZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcih0aGlzLGNoaWxkcmVuLmxlbmd0aD4xPy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCxjaGlsZHJlbik6Y2hpbGRyZW5bMF0sdGhpcy5ub2RlKTtzZXRSZWYocG9ydGFsKTtyZXR1cm4gbnVsbDt9fSx7a2V5OlwicmVuZGVyUmVhY3QxNlwiLHZhbHVlOmZ1bmN0aW9uIHJlbmRlclJlYWN0MTYoKXt2YXIgX3RoaXMkcHJvcHMzPXRoaXMucHJvcHMsaGFzQ2hpbGRyZW49X3RoaXMkcHJvcHMzLmhhc0NoaWxkcmVuLHBsYWNlbWVudD1fdGhpcyRwcm9wczMucGxhY2VtZW50LHRhcmdldD1fdGhpcyRwcm9wczMudGFyZ2V0O2lmKCFoYXNDaGlsZHJlbil7aWYodGFyZ2V0fHxwbGFjZW1lbnQ9PT0nY2VudGVyJyl7cmV0dXJuIHRoaXMucmVuZGVyUG9ydGFsKCk7fXJldHVybiBudWxsO31yZXR1cm4gdGhpcy5yZW5kZXJQb3J0YWwoKTt9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7aWYoIWlzUmVhY3QxNil7cmV0dXJuIG51bGw7fXJldHVybiB0aGlzLnJlbmRlclJlYWN0MTYoKTt9fV0pO3JldHVybiBSZWFjdEZsb2F0ZXJQb3J0YWw7fShSZWFjdC5Db21wb25lbnQpO19kZWZpbmVQcm9wZXJ0eShSZWFjdEZsb2F0ZXJQb3J0YWwsXCJwcm9wVHlwZXNcIix7Y2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsUHJvcFR5cGVzLmFycmF5XSksaGFzQ2hpbGRyZW46UHJvcFR5cGVzLmJvb2wsaWQ6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMubnVtYmVyXSkscGxhY2VtZW50OlByb3BUeXBlcy5zdHJpbmcsc2V0UmVmOlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsdGFyZ2V0OlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsUHJvcFR5cGVzLnN0cmluZ10pLHpJbmRleDpQcm9wVHlwZXMubnVtYmVyfSk7XG5cbnZhciBGbG9hdGVyQXJyb3c9LyojX19QVVJFX18qL2Z1bmN0aW9uKF9SZWFjdCRDb21wb25lbnQpe19pbmhlcml0cyhGbG9hdGVyQXJyb3csX1JlYWN0JENvbXBvbmVudCk7dmFyIF9zdXBlcj1fY3JlYXRlU3VwZXIoRmxvYXRlckFycm93KTtmdW5jdGlvbiBGbG9hdGVyQXJyb3coKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyxGbG9hdGVyQXJyb3cpO3JldHVybiBfc3VwZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpO31fY3JlYXRlQ2xhc3MoRmxvYXRlckFycm93LFt7a2V5OlwicGFyZW50U3R5bGVcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIF90aGlzJHByb3BzPXRoaXMucHJvcHMscGxhY2VtZW50PV90aGlzJHByb3BzLnBsYWNlbWVudCxzdHlsZXM9X3RoaXMkcHJvcHMuc3R5bGVzO3ZhciBsZW5ndGg9c3R5bGVzLmFycm93Lmxlbmd0aDt2YXIgYXJyb3c9e3BvaW50ZXJFdmVudHM6J25vbmUnLHBvc2l0aW9uOidhYnNvbHV0ZScsd2lkdGg6JzEwMCUnfTsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKHBsYWNlbWVudC5zdGFydHNXaXRoKCd0b3AnKSl7YXJyb3cuYm90dG9tPTA7YXJyb3cubGVmdD0wO2Fycm93LnJpZ2h0PTA7YXJyb3cuaGVpZ2h0PWxlbmd0aDt9ZWxzZSBpZihwbGFjZW1lbnQuc3RhcnRzV2l0aCgnYm90dG9tJykpe2Fycm93LmxlZnQ9MDthcnJvdy5yaWdodD0wO2Fycm93LnRvcD0wO2Fycm93LmhlaWdodD1sZW5ndGg7fWVsc2UgaWYocGxhY2VtZW50LnN0YXJ0c1dpdGgoJ2xlZnQnKSl7YXJyb3cucmlnaHQ9MDthcnJvdy50b3A9MDthcnJvdy5ib3R0b209MDt9ZWxzZSBpZihwbGFjZW1lbnQuc3RhcnRzV2l0aCgncmlnaHQnKSl7YXJyb3cubGVmdD0wO2Fycm93LnRvcD0wO31yZXR1cm4gYXJyb3c7fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdGhpcyRwcm9wczI9dGhpcy5wcm9wcyxwbGFjZW1lbnQ9X3RoaXMkcHJvcHMyLnBsYWNlbWVudCxzZXRBcnJvd1JlZj1fdGhpcyRwcm9wczIuc2V0QXJyb3dSZWYsc3R5bGVzPV90aGlzJHByb3BzMi5zdHlsZXM7dmFyIF9zdHlsZXMkYXJyb3c9c3R5bGVzLmFycm93LGNvbG9yPV9zdHlsZXMkYXJyb3cuY29sb3IsZGlzcGxheT1fc3R5bGVzJGFycm93LmRpc3BsYXksbGVuZ3RoPV9zdHlsZXMkYXJyb3cubGVuZ3RoLG1hcmdpbj1fc3R5bGVzJGFycm93Lm1hcmdpbixwb3NpdGlvbj1fc3R5bGVzJGFycm93LnBvc2l0aW9uLHNwcmVhZD1fc3R5bGVzJGFycm93LnNwcmVhZDt2YXIgYXJyb3dTdHlsZXM9e2Rpc3BsYXk6ZGlzcGxheSxwb3NpdGlvbjpwb3NpdGlvbn07dmFyIHBvaW50czt2YXIgeD1zcHJlYWQ7dmFyIHk9bGVuZ3RoOy8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovaWYocGxhY2VtZW50LnN0YXJ0c1dpdGgoJ3RvcCcpKXtwb2ludHM9XCIwLDAgXCIuY29uY2F0KHgvMixcIixcIikuY29uY2F0KHksXCIgXCIpLmNvbmNhdCh4LFwiLDBcIik7YXJyb3dTdHlsZXMuYm90dG9tPTA7YXJyb3dTdHlsZXMubWFyZ2luTGVmdD1tYXJnaW47YXJyb3dTdHlsZXMubWFyZ2luUmlnaHQ9bWFyZ2luO31lbHNlIGlmKHBsYWNlbWVudC5zdGFydHNXaXRoKCdib3R0b20nKSl7cG9pbnRzPVwiXCIuY29uY2F0KHgsXCIsXCIpLmNvbmNhdCh5LFwiIFwiKS5jb25jYXQoeC8yLFwiLDAgMCxcIikuY29uY2F0KHkpO2Fycm93U3R5bGVzLnRvcD0wO2Fycm93U3R5bGVzLm1hcmdpbkxlZnQ9bWFyZ2luO2Fycm93U3R5bGVzLm1hcmdpblJpZ2h0PW1hcmdpbjt9ZWxzZSBpZihwbGFjZW1lbnQuc3RhcnRzV2l0aCgnbGVmdCcpKXt5PXNwcmVhZDt4PWxlbmd0aDtwb2ludHM9XCIwLDAgXCIuY29uY2F0KHgsXCIsXCIpLmNvbmNhdCh5LzIsXCIgMCxcIikuY29uY2F0KHkpO2Fycm93U3R5bGVzLnJpZ2h0PTA7YXJyb3dTdHlsZXMubWFyZ2luVG9wPW1hcmdpbjthcnJvd1N0eWxlcy5tYXJnaW5Cb3R0b209bWFyZ2luO31lbHNlIGlmKHBsYWNlbWVudC5zdGFydHNXaXRoKCdyaWdodCcpKXt5PXNwcmVhZDt4PWxlbmd0aDtwb2ludHM9XCJcIi5jb25jYXQoeCxcIixcIikuY29uY2F0KHksXCIgXCIpLmNvbmNhdCh4LFwiLDAgMCxcIikuY29uY2F0KHkvMik7YXJyb3dTdHlsZXMubGVmdD0wO2Fycm93U3R5bGVzLm1hcmdpblRvcD1tYXJnaW47YXJyb3dTdHlsZXMubWFyZ2luQm90dG9tPW1hcmdpbjt9cmV0dXJuLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiX19mbG9hdGVyX19hcnJvd1wiLHN0eWxlOnRoaXMucGFyZW50U3R5bGV9LC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtyZWY6c2V0QXJyb3dSZWYsc3R5bGU6YXJyb3dTdHlsZXN9LC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOngsaGVpZ2h0OnksdmVyc2lvbjpcIjEuMVwiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn0sLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5Z29uXCIse3BvaW50czpwb2ludHMsZmlsbDpjb2xvcn0pKSkpO319XSk7cmV0dXJuIEZsb2F0ZXJBcnJvdzt9KFJlYWN0LkNvbXBvbmVudCk7X2RlZmluZVByb3BlcnR5KEZsb2F0ZXJBcnJvdyxcInByb3BUeXBlc1wiLHtwbGFjZW1lbnQ6UHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLHNldEFycm93UmVmOlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsc3R5bGVzOlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZH0pO1xuXG52YXIgX2V4Y2x1ZGVkJDE9W1wiY29sb3JcIixcImhlaWdodFwiLFwid2lkdGhcIl07ZnVuY3Rpb24gRmxvYXRlckNsb3NlQnRuKF9yZWYpe3ZhciBoYW5kbGVDbGljaz1fcmVmLmhhbmRsZUNsaWNrLHN0eWxlcz1fcmVmLnN0eWxlczt2YXIgY29sb3I9c3R5bGVzLmNvbG9yLGhlaWdodD1zdHlsZXMuaGVpZ2h0LHdpZHRoPXN0eWxlcy53aWR0aCxzdHlsZT1fb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3R5bGVzLF9leGNsdWRlZCQxKTtyZXR1cm4vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtcImFyaWEtbGFiZWxcIjpcImNsb3NlXCIsb25DbGljazpoYW5kbGVDbGljayxzdHlsZTpzdHlsZSx0eXBlOlwiYnV0dG9uXCJ9LC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiXCIuY29uY2F0KHdpZHRoLFwicHhcIiksaGVpZ2h0OlwiXCIuY29uY2F0KGhlaWdodCxcInB4XCIpLHZpZXdCb3g6XCIwIDAgMTggMThcIix2ZXJzaW9uOlwiMS4xXCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHByZXNlcnZlQXNwZWN0UmF0aW86XCJ4TWlkWU1pZFwifSwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIixudWxsLC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTguMTM5MTExMjksOS4wMDI2ODE5MSBMMC4xNzE1MjE4MjcsMTcuMDI1ODQ2NyBDLTAuMDQ5ODAyNzA0OSwxNy4yNDg3MTUgLTAuMDQ5ODAyNzA0OSwxNy42MDk4Mzk0IDAuMTcxNTIxODI3LDE3LjgzMjc1NDUgQzAuMjgyMDQzNTQsMTcuOTQ0MzUyNiAwLjQyNzE4ODIwNiwxNy45OTk4NzA2IDAuNTcyMDUxNzY1LDE3Ljk5OTg3MDYgQzAuNzE3MTQ5NTgsMTcuOTk5ODcwNiAwLjg2MjAxMzEzOSwxNy45NDQzNTI2IDAuOTcyNTgxNzAzLDE3LjgzMjc1NDUgTDkuMDAwMDkzNyw5Ljc0OTI0NjE4IEwxNy4wMjc2MDU3LDE3LjgzMjc1NDUgQzE3LjEzODQwODUsMTcuOTQ0MzUyNiAxNy4yODMyNzIxLDE3Ljk5OTg3MDYgMTcuNDI4MTM1NiwxNy45OTk4NzA2IEMxNy41NzI5OTkyLDE3Ljk5OTg3MDYgMTcuNzE4MDk3LDE3Ljk0NDM1MjYgMTcuODI4NjY1NiwxNy44MzI3NTQ1IEMxOC4wNDk5OTAxLDE3LjYwOTg4NjIgMTguMDQ5OTkwMSwxNy4yNDg3NjE4IDE3LjgyODY2NTYsMTcuMDI1ODQ2NyBMOS44NjEzNTcyMiw5LjAwMjY4MTkxIEwxNy44MzQwMDY2LDAuOTczODQ4MjI1IEMxOC4wNTUzMzExLDAuNzUwOTc5OTM0IDE4LjA1NTMzMTEsMC4zODk4NTU1MzIgMTcuODM0MDA2NiwwLjE2Njk0MDM5IEMxNy42MTI2ODIxLC0wLjA1NTY0Njc5NjggMTcuMjU0MDM3LC0wLjA1NTY0Njc5NjggMTcuMDMyOTQ2NywwLjE2Njk0MDM5IEw5LjAwMDQyMTY2LDguMjU2MTE3NjUgTDAuOTY3MDA2NDI0LDAuMTY3MjY4MzQ1IEMwLjc0NTY4MTg5MiwtMC4wNTUzMTg4NDI2IDAuMzg3MzE3OTMxLC0wLjA1NTMxODg0MjYgMC4xNjU5OTMzOTksMC4xNjcyNjgzNDUgQy0wLjA1NTMzMTEzMzEsMC4zOTAxMzY2MzUgLTAuMDU1MzMxMTMzMSwwLjc1MTI2MTAzOCAwLjE2NTk5MzM5OSwwLjk3NDE3NjE3OSBMOC4xMzkyMDQ5OSw5LjAwMjY4MTkxIEw4LjEzOTExMTI5LDkuMDAyNjgxOTEgWlwiLGZpbGw6Y29sb3J9KSkpKTt9RmxvYXRlckNsb3NlQnRuLnByb3BUeXBlcz17aGFuZGxlQ2xpY2s6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxzdHlsZXM6UHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkfTtcblxuZnVuY3Rpb24gRmxvYXRlckNvbnRhaW5lcihfcmVmKXt2YXIgY29udGVudD1fcmVmLmNvbnRlbnQsZm9vdGVyPV9yZWYuZm9vdGVyLGhhbmRsZUNsaWNrPV9yZWYuaGFuZGxlQ2xpY2ssb3Blbj1fcmVmLm9wZW4scG9zaXRpb25XcmFwcGVyPV9yZWYucG9zaXRpb25XcmFwcGVyLHNob3dDbG9zZUJ1dHRvbj1fcmVmLnNob3dDbG9zZUJ1dHRvbix0aXRsZT1fcmVmLnRpdGxlLHN0eWxlcz1fcmVmLnN0eWxlczt2YXIgb3V0cHV0PXtjb250ZW50Oi8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjb250ZW50KT9jb250ZW50Oi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIl9fZmxvYXRlcl9fY29udGVudFwiLHN0eWxlOnN0eWxlcy5jb250ZW50fSxjb250ZW50KX07aWYodGl0bGUpe291dHB1dC50aXRsZT0vKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQodGl0bGUpP3RpdGxlOi8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIl9fZmxvYXRlcl9fdGl0bGVcIixzdHlsZTpzdHlsZXMudGl0bGV9LHRpdGxlKTt9aWYoZm9vdGVyKXtvdXRwdXQuZm9vdGVyPS8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChmb290ZXIpP2Zvb3RlcjovKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJfX2Zsb2F0ZXJfX2Zvb3RlclwiLHN0eWxlOnN0eWxlcy5mb290ZXJ9LGZvb3Rlcik7fWlmKChzaG93Q2xvc2VCdXR0b258fHBvc2l0aW9uV3JhcHBlcikmJiFpc1tcImJvb2xlYW5cIl0ob3Blbikpe291dHB1dC5jbG9zZT0vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGbG9hdGVyQ2xvc2VCdG4se3N0eWxlczpzdHlsZXMuY2xvc2UsaGFuZGxlQ2xpY2s6aGFuZGxlQ2xpY2t9KTt9cmV0dXJuLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiX19mbG9hdGVyX19jb250YWluZXJcIixzdHlsZTpzdHlsZXMuY29udGFpbmVyfSxvdXRwdXQuY2xvc2Usb3V0cHV0LnRpdGxlLG91dHB1dC5jb250ZW50LG91dHB1dC5mb290ZXIpO31GbG9hdGVyQ29udGFpbmVyLnByb3BUeXBlcz17Y29udGVudDpQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLGZvb3RlcjpQcm9wVHlwZXMubm9kZSxoYW5kbGVDbGljazpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLG9wZW46UHJvcFR5cGVzLmJvb2wscG9zaXRpb25XcmFwcGVyOlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsc2hvd0Nsb3NlQnV0dG9uOlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsc3R5bGVzOlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCx0aXRsZTpQcm9wVHlwZXMubm9kZX07XG5cbnZhciBGbG9hdGVyPS8qI19fUFVSRV9fKi9mdW5jdGlvbihfUmVhY3QkQ29tcG9uZW50KXtfaW5oZXJpdHMoRmxvYXRlcixfUmVhY3QkQ29tcG9uZW50KTt2YXIgX3N1cGVyPV9jcmVhdGVTdXBlcihGbG9hdGVyKTtmdW5jdGlvbiBGbG9hdGVyKCl7X2NsYXNzQ2FsbENoZWNrKHRoaXMsRmxvYXRlcik7cmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fV9jcmVhdGVDbGFzcyhGbG9hdGVyLFt7a2V5Olwic3R5bGVcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIF90aGlzJHByb3BzPXRoaXMucHJvcHMsZGlzYWJsZUFuaW1hdGlvbj1fdGhpcyRwcm9wcy5kaXNhYmxlQW5pbWF0aW9uLGNvbXBvbmVudD1fdGhpcyRwcm9wcy5jb21wb25lbnQscGxhY2VtZW50PV90aGlzJHByb3BzLnBsYWNlbWVudCxoaWRlQXJyb3c9X3RoaXMkcHJvcHMuaGlkZUFycm93LHN0YXR1cz1fdGhpcyRwcm9wcy5zdGF0dXMsc3R5bGVzPV90aGlzJHByb3BzLnN0eWxlczt2YXIgbGVuZ3RoPXN0eWxlcy5hcnJvdy5sZW5ndGgsZmxvYXRlcj1zdHlsZXMuZmxvYXRlcixmbG9hdGVyQ2VudGVyZWQ9c3R5bGVzLmZsb2F0ZXJDZW50ZXJlZCxmbG9hdGVyQ2xvc2luZz1zdHlsZXMuZmxvYXRlckNsb3NpbmcsZmxvYXRlck9wZW5pbmc9c3R5bGVzLmZsb2F0ZXJPcGVuaW5nLGZsb2F0ZXJXaXRoQW5pbWF0aW9uPXN0eWxlcy5mbG9hdGVyV2l0aEFuaW1hdGlvbixmbG9hdGVyV2l0aENvbXBvbmVudD1zdHlsZXMuZmxvYXRlcldpdGhDb21wb25lbnQ7dmFyIGVsZW1lbnQ9e307aWYoIWhpZGVBcnJvdyl7aWYocGxhY2VtZW50LnN0YXJ0c1dpdGgoJ3RvcCcpKXtlbGVtZW50LnBhZGRpbmc9XCIwIDAgXCIuY29uY2F0KGxlbmd0aCxcInB4XCIpO31lbHNlIGlmKHBsYWNlbWVudC5zdGFydHNXaXRoKCdib3R0b20nKSl7ZWxlbWVudC5wYWRkaW5nPVwiXCIuY29uY2F0KGxlbmd0aCxcInB4IDAgMFwiKTt9ZWxzZSBpZihwbGFjZW1lbnQuc3RhcnRzV2l0aCgnbGVmdCcpKXtlbGVtZW50LnBhZGRpbmc9XCIwIFwiLmNvbmNhdChsZW5ndGgsXCJweCAwIDBcIik7fWVsc2UgaWYocGxhY2VtZW50LnN0YXJ0c1dpdGgoJ3JpZ2h0Jykpe2VsZW1lbnQucGFkZGluZz1cIjAgMCAwIFwiLmNvbmNhdChsZW5ndGgsXCJweFwiKTt9fWlmKFtTVEFUVVMuT1BFTklORyxTVEFUVVMuT1BFTl0uaW5kZXhPZihzdGF0dXMpIT09LTEpe2VsZW1lbnQ9X29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sZWxlbWVudCksZmxvYXRlck9wZW5pbmcpO31pZihzdGF0dXM9PT1TVEFUVVMuQ0xPU0lORyl7ZWxlbWVudD1fb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSxlbGVtZW50KSxmbG9hdGVyQ2xvc2luZyk7fWlmKHN0YXR1cz09PVNUQVRVUy5PUEVOJiYhZGlzYWJsZUFuaW1hdGlvbil7ZWxlbWVudD1fb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSxlbGVtZW50KSxmbG9hdGVyV2l0aEFuaW1hdGlvbik7fWlmKHBsYWNlbWVudD09PSdjZW50ZXInKXtlbGVtZW50PV9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LGVsZW1lbnQpLGZsb2F0ZXJDZW50ZXJlZCk7fWlmKGNvbXBvbmVudCl7ZWxlbWVudD1fb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSxlbGVtZW50KSxmbG9hdGVyV2l0aENvbXBvbmVudCk7fXJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSxmbG9hdGVyKSxlbGVtZW50KTt9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF90aGlzJHByb3BzMj10aGlzLnByb3BzLGNvbXBvbmVudD1fdGhpcyRwcm9wczIuY29tcG9uZW50LGNsb3NlRm49X3RoaXMkcHJvcHMyLmhhbmRsZUNsaWNrLGhpZGVBcnJvdz1fdGhpcyRwcm9wczIuaGlkZUFycm93LHNldEZsb2F0ZXJSZWY9X3RoaXMkcHJvcHMyLnNldEZsb2F0ZXJSZWYsc3RhdHVzPV90aGlzJHByb3BzMi5zdGF0dXM7dmFyIG91dHB1dD17fTt2YXIgY2xhc3Nlcz1bJ19fZmxvYXRlciddO2lmKGNvbXBvbmVudCl7aWYoLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNvbXBvbmVudCkpe291dHB1dC5jb250ZW50PS8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY29tcG9uZW50LHtjbG9zZUZuOmNsb3NlRm59KTt9ZWxzZSB7b3V0cHV0LmNvbnRlbnQ9Y29tcG9uZW50KHtjbG9zZUZuOmNsb3NlRm59KTt9fWVsc2Uge291dHB1dC5jb250ZW50PS8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZsb2F0ZXJDb250YWluZXIsdGhpcy5wcm9wcyk7fWlmKHN0YXR1cz09PVNUQVRVUy5PUEVOKXtjbGFzc2VzLnB1c2goJ19fZmxvYXRlcl9fb3BlbicpO31pZighaGlkZUFycm93KXtvdXRwdXQuYXJyb3c9LyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmxvYXRlckFycm93LHRoaXMucHJvcHMpO31yZXR1cm4vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6c2V0RmxvYXRlclJlZixjbGFzc05hbWU6Y2xhc3Nlcy5qb2luKCcgJyksc3R5bGU6dGhpcy5zdHlsZX0sLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiX19mbG9hdGVyX19ib2R5XCJ9LG91dHB1dC5jb250ZW50LG91dHB1dC5hcnJvdykpO319XSk7cmV0dXJuIEZsb2F0ZXI7fShSZWFjdC5Db21wb25lbnQpO19kZWZpbmVQcm9wZXJ0eShGbG9hdGVyLFwicHJvcFR5cGVzXCIse2NvbXBvbmVudDpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYyxQcm9wVHlwZXMuZWxlbWVudF0pLGNvbnRlbnQ6UHJvcFR5cGVzLm5vZGUsZGlzYWJsZUFuaW1hdGlvbjpQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLGZvb3RlcjpQcm9wVHlwZXMubm9kZSxoYW5kbGVDbGljazpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLGhpZGVBcnJvdzpQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLG9wZW46UHJvcFR5cGVzLmJvb2wscGxhY2VtZW50OlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxwb3NpdGlvbldyYXBwZXI6UHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxzZXRBcnJvd1JlZjpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLHNldEZsb2F0ZXJSZWY6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxzaG93Q2xvc2VCdXR0b246UHJvcFR5cGVzLmJvb2wsc3RhdHVzOlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxzdHlsZXM6UHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLHRpdGxlOlByb3BUeXBlcy5ub2RlfSk7XG5cbnZhciBSZWFjdEZsb2F0ZXJXcmFwcGVyPS8qI19fUFVSRV9fKi9mdW5jdGlvbihfUmVhY3QkQ29tcG9uZW50KXtfaW5oZXJpdHMoUmVhY3RGbG9hdGVyV3JhcHBlcixfUmVhY3QkQ29tcG9uZW50KTt2YXIgX3N1cGVyPV9jcmVhdGVTdXBlcihSZWFjdEZsb2F0ZXJXcmFwcGVyKTtmdW5jdGlvbiBSZWFjdEZsb2F0ZXJXcmFwcGVyKCl7X2NsYXNzQ2FsbENoZWNrKHRoaXMsUmVhY3RGbG9hdGVyV3JhcHBlcik7cmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fV9jcmVhdGVDbGFzcyhSZWFjdEZsb2F0ZXJXcmFwcGVyLFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF90aGlzJHByb3BzPXRoaXMucHJvcHMsY2hpbGRyZW49X3RoaXMkcHJvcHMuY2hpbGRyZW4saGFuZGxlQ2xpY2s9X3RoaXMkcHJvcHMuaGFuZGxlQ2xpY2ssaGFuZGxlTW91c2VFbnRlcj1fdGhpcyRwcm9wcy5oYW5kbGVNb3VzZUVudGVyLGhhbmRsZU1vdXNlTGVhdmU9X3RoaXMkcHJvcHMuaGFuZGxlTW91c2VMZWF2ZSxzZXRDaGlsZFJlZj1fdGhpcyRwcm9wcy5zZXRDaGlsZFJlZixzZXRXcmFwcGVyUmVmPV90aGlzJHByb3BzLnNldFdyYXBwZXJSZWYsc3R5bGU9X3RoaXMkcHJvcHMuc3R5bGUsc3R5bGVzPV90aGlzJHByb3BzLnN0eWxlczt2YXIgZWxlbWVudDsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKGNoaWxkcmVuKXtpZihSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbik9PT0xKXtpZighLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSl7ZWxlbWVudD0vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIixudWxsLGNoaWxkcmVuKTt9ZWxzZSB7dmFyIHJlZlByb3A9aXNbXCJmdW5jdGlvblwiXShjaGlsZHJlbi50eXBlKT8naW5uZXJSZWYnOidyZWYnO2VsZW1lbnQ9LyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSxfZGVmaW5lUHJvcGVydHkoe30scmVmUHJvcCxzZXRDaGlsZFJlZikpO319ZWxzZSB7ZWxlbWVudD1jaGlsZHJlbjt9fWlmKCFlbGVtZW50KXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse3JlZjpzZXRXcmFwcGVyUmVmLHN0eWxlOl9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LHN0eWxlcyksc3R5bGUpLG9uQ2xpY2s6aGFuZGxlQ2xpY2ssb25Nb3VzZUVudGVyOmhhbmRsZU1vdXNlRW50ZXIsb25Nb3VzZUxlYXZlOmhhbmRsZU1vdXNlTGVhdmV9LGVsZW1lbnQpO319XSk7cmV0dXJuIFJlYWN0RmxvYXRlcldyYXBwZXI7fShSZWFjdC5Db21wb25lbnQpO19kZWZpbmVQcm9wZXJ0eShSZWFjdEZsb2F0ZXJXcmFwcGVyLFwicHJvcFR5cGVzXCIse2NoaWxkcmVuOlByb3BUeXBlcy5ub2RlLGhhbmRsZUNsaWNrOlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsaGFuZGxlTW91c2VFbnRlcjpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLGhhbmRsZU1vdXNlTGVhdmU6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxzZXRDaGlsZFJlZjpQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLHNldFdyYXBwZXJSZWY6UHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxzdHlsZTpQcm9wVHlwZXMub2JqZWN0LHN0eWxlczpQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWR9KTtcblxudmFyIGRlZmF1bHRPcHRpb25zPXt6SW5kZXg6MTAwfTtmdW5jdGlvbiBnZXRTdHlsZXMoc3R5bGVzKXt2YXIgb3B0aW9ucz1kZWVwbWVyZ2UoZGVmYXVsdE9wdGlvbnMsc3R5bGVzLm9wdGlvbnN8fHt9KTtyZXR1cm4ge3dyYXBwZXI6e2N1cnNvcjonaGVscCcsZGlzcGxheTonaW5saW5lLWZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsekluZGV4Om9wdGlvbnMuekluZGV4fSx3cmFwcGVyUG9zaXRpb246e2xlZnQ6LTEwMDAscG9zaXRpb246J2Fic29sdXRlJyx0b3A6LTEwMDAsdmlzaWJpbGl0eTonaGlkZGVuJ30sZmxvYXRlcjp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyxmaWx0ZXI6J2Ryb3Atc2hhZG93KDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpKScsbWF4V2lkdGg6MzAwLG9wYWNpdHk6MCxwb3NpdGlvbjoncmVsYXRpdmUnLHRyYW5zaXRpb246J29wYWNpdHkgMC4zcycsdmlzaWJpbGl0eTonaGlkZGVuJyx6SW5kZXg6b3B0aW9ucy56SW5kZXh9LGZsb2F0ZXJPcGVuaW5nOntvcGFjaXR5OjEsdmlzaWJpbGl0eTondmlzaWJsZSd9LGZsb2F0ZXJXaXRoQW5pbWF0aW9uOntvcGFjaXR5OjEsdHJhbnNpdGlvbjonb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4ycycsdmlzaWJpbGl0eTondmlzaWJsZSd9LGZsb2F0ZXJXaXRoQ29tcG9uZW50OnttYXhXaWR0aDonMTAwJSd9LGZsb2F0ZXJDbG9zaW5nOntvcGFjaXR5OjAsdmlzaWJpbGl0eTondmlzaWJsZSd9LGZsb2F0ZXJDZW50ZXJlZDp7bGVmdDonNTAlJyxwb3NpdGlvbjonZml4ZWQnLHRvcDonNTAlJyx0cmFuc2Zvcm06J3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSd9LGNvbnRhaW5lcjp7YmFja2dyb3VuZENvbG9yOicjZmZmJyxjb2xvcjonIzY2NicsbWluSGVpZ2h0OjYwLG1pbldpZHRoOjIwMCxwYWRkaW5nOjIwLHBvc2l0aW9uOidyZWxhdGl2ZScsekluZGV4OjEwfSx0aXRsZTp7Ym9yZGVyQm90dG9tOicxcHggc29saWQgIzU1NScsY29sb3I6JyM1NTUnLGZvbnRTaXplOjE4LG1hcmdpbkJvdHRvbTo1LHBhZGRpbmdCb3R0b206NixwYWRkaW5nUmlnaHQ6MTh9LGNvbnRlbnQ6e2ZvbnRTaXplOjE1fSxjbG9zZTp7YmFja2dyb3VuZENvbG9yOid0cmFuc3BhcmVudCcsYm9yZGVyOjAsYm9yZGVyUmFkaXVzOjAsY29sb3I6JyM1NTUnLGZvbnRTaXplOjAsaGVpZ2h0OjE1LG91dGxpbmU6J25vbmUnLHBhZGRpbmc6MTAscG9zaXRpb246J2Fic29sdXRlJyxyaWdodDowLHRvcDowLHdpZHRoOjE1LFdlYmtpdEFwcGVhcmFuY2U6J25vbmUnfSxmb290ZXI6e2JvcmRlclRvcDonMXB4IHNvbGlkICNjY2MnLGZvbnRTaXplOjEzLG1hcmdpblRvcDoxMCxwYWRkaW5nVG9wOjV9LGFycm93Ontjb2xvcjonI2ZmZicsZGlzcGxheTonaW5saW5lLWZsZXgnLGxlbmd0aDoxNixtYXJnaW46OCxwb3NpdGlvbjonYWJzb2x1dGUnLHNwcmVhZDozMn0sb3B0aW9uczpvcHRpb25zfTt9XG5cbnZhciBfZXhjbHVkZWQ9W1wiYXJyb3dcIixcImZsaXBcIixcIm9mZnNldFwiXTt2YXIgUE9TSVRJT05JTkdfUFJPUFM9Wydwb3NpdGlvbicsJ3RvcCcsJ3JpZ2h0JywnYm90dG9tJywnbGVmdCddO3ZhciBSZWFjdEZsb2F0ZXI9LyojX19QVVJFX18qL2Z1bmN0aW9uKF9SZWFjdCRDb21wb25lbnQpe19pbmhlcml0cyhSZWFjdEZsb2F0ZXIsX1JlYWN0JENvbXBvbmVudCk7dmFyIF9zdXBlcj1fY3JlYXRlU3VwZXIoUmVhY3RGbG9hdGVyKTtmdW5jdGlvbiBSZWFjdEZsb2F0ZXIocHJvcHMpe3ZhciBfdGhpcztfY2xhc3NDYWxsQ2hlY2sodGhpcyxSZWFjdEZsb2F0ZXIpO190aGlzPV9zdXBlci5jYWxsKHRoaXMscHJvcHMpOy8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFwic2V0QXJyb3dSZWZcIixmdW5jdGlvbihyZWYpe190aGlzLmFycm93UmVmPXJlZjt9KTtfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXCJzZXRDaGlsZFJlZlwiLGZ1bmN0aW9uKHJlZil7X3RoaXMuY2hpbGRSZWY9cmVmO30pO19kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcInNldEZsb2F0ZXJSZWZcIixmdW5jdGlvbihyZWYpe190aGlzLmZsb2F0ZXJSZWY9cmVmO30pO19kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcInNldFdyYXBwZXJSZWZcIixmdW5jdGlvbihyZWYpe190aGlzLndyYXBwZXJSZWY9cmVmO30pO19kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcImhhbmRsZVRyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe3ZhciBzdGF0dXM9X3RoaXMuc3RhdGUuc3RhdHVzO3ZhciBjYWxsYmFjaz1fdGhpcy5wcm9wcy5jYWxsYmFjazsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKF90aGlzLndyYXBwZXJQb3BwZXIpe190aGlzLndyYXBwZXJQb3BwZXIuaW5zdGFuY2UudXBkYXRlKCk7fV90aGlzLnNldFN0YXRlKHtzdGF0dXM6c3RhdHVzPT09U1RBVFVTLk9QRU5JTkc/U1RBVFVTLk9QRU46U1RBVFVTLklETEV9LGZ1bmN0aW9uKCl7dmFyIG5ld1N0YXR1cz1fdGhpcy5zdGF0ZS5zdGF0dXM7Y2FsbGJhY2sobmV3U3RhdHVzPT09U1RBVFVTLk9QRU4/J29wZW4nOidjbG9zZScsX3RoaXMucHJvcHMpO30pO30pO19kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcImhhbmRsZUNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgX3RoaXMkcHJvcHM9X3RoaXMucHJvcHMsZXZlbnQ9X3RoaXMkcHJvcHMuZXZlbnQsb3Blbj1fdGhpcyRwcm9wcy5vcGVuO2lmKGlzW1wiYm9vbGVhblwiXShvcGVuKSlyZXR1cm47dmFyIF90aGlzJHN0YXRlPV90aGlzLnN0YXRlLHBvc2l0aW9uV3JhcHBlcj1fdGhpcyRzdGF0ZS5wb3NpdGlvbldyYXBwZXIsc3RhdHVzPV90aGlzJHN0YXRlLnN0YXR1czsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKF90aGlzLmV2ZW50PT09J2NsaWNrJ3x8X3RoaXMuZXZlbnQ9PT0naG92ZXInJiZwb3NpdGlvbldyYXBwZXIpe2xvZyh7dGl0bGU6J2NsaWNrJyxkYXRhOlt7ZXZlbnQ6ZXZlbnQsc3RhdHVzOnN0YXR1cz09PVNUQVRVUy5PUEVOPydjbG9zaW5nJzonb3BlbmluZyd9XSxkZWJ1ZzpfdGhpcy5kZWJ1Z30pO190aGlzLnRvZ2dsZSgpO319KTtfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXCJoYW5kbGVNb3VzZUVudGVyXCIsZnVuY3Rpb24oKXt2YXIgX3RoaXMkcHJvcHMyPV90aGlzLnByb3BzLGV2ZW50PV90aGlzJHByb3BzMi5ldmVudCxvcGVuPV90aGlzJHByb3BzMi5vcGVuO2lmKGlzW1wiYm9vbGVhblwiXShvcGVuKXx8aXNNb2JpbGUoKSlyZXR1cm47dmFyIHN0YXR1cz1fdGhpcy5zdGF0ZS5zdGF0dXM7LyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9pZihfdGhpcy5ldmVudD09PSdob3ZlcicmJnN0YXR1cz09PVNUQVRVUy5JRExFKXtsb2coe3RpdGxlOidtb3VzZUVudGVyJyxkYXRhOlt7a2V5OidvcmlnaW5hbEV2ZW50Jyx2YWx1ZTpldmVudH1dLGRlYnVnOl90aGlzLmRlYnVnfSk7Y2xlYXJUaW1lb3V0KF90aGlzLmV2ZW50RGVsYXlUaW1lb3V0KTtfdGhpcy50b2dnbGUoKTt9fSk7X2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFwiaGFuZGxlTW91c2VMZWF2ZVwiLGZ1bmN0aW9uKCl7dmFyIF90aGlzJHByb3BzMz1fdGhpcy5wcm9wcyxldmVudD1fdGhpcyRwcm9wczMuZXZlbnQsZXZlbnREZWxheT1fdGhpcyRwcm9wczMuZXZlbnREZWxheSxvcGVuPV90aGlzJHByb3BzMy5vcGVuO2lmKGlzW1wiYm9vbGVhblwiXShvcGVuKXx8aXNNb2JpbGUoKSlyZXR1cm47dmFyIF90aGlzJHN0YXRlMj1fdGhpcy5zdGF0ZSxzdGF0dXM9X3RoaXMkc3RhdGUyLnN0YXR1cyxwb3NpdGlvbldyYXBwZXI9X3RoaXMkc3RhdGUyLnBvc2l0aW9uV3JhcHBlcjsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKF90aGlzLmV2ZW50PT09J2hvdmVyJyl7bG9nKHt0aXRsZTonbW91c2VMZWF2ZScsZGF0YTpbe2tleTonb3JpZ2luYWxFdmVudCcsdmFsdWU6ZXZlbnR9XSxkZWJ1ZzpfdGhpcy5kZWJ1Z30pO2lmKCFldmVudERlbGF5KXtfdGhpcy50b2dnbGUoU1RBVFVTLklETEUpO31lbHNlIGlmKFtTVEFUVVMuT1BFTklORyxTVEFUVVMuT1BFTl0uaW5kZXhPZihzdGF0dXMpIT09LTEmJiFwb3NpdGlvbldyYXBwZXImJiFfdGhpcy5ldmVudERlbGF5VGltZW91dCl7X3RoaXMuZXZlbnREZWxheVRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2RlbGV0ZSBfdGhpcy5ldmVudERlbGF5VGltZW91dDtfdGhpcy50b2dnbGUoKTt9LGV2ZW50RGVsYXkqMTAwMCk7fX19KTtfdGhpcy5zdGF0ZT17Y3VycmVudFBsYWNlbWVudDpwcm9wcy5wbGFjZW1lbnQsbmVlZHNVcGRhdGU6ZmFsc2UscG9zaXRpb25XcmFwcGVyOnByb3BzLndyYXBwZXJPcHRpb25zLnBvc2l0aW9uJiYhIXByb3BzLnRhcmdldCxzdGF0dXM6U1RBVFVTLklOSVQsc3RhdHVzV3JhcHBlcjpTVEFUVVMuSU5JVH07X3RoaXMuX2lzTW91bnRlZD1mYWxzZTtfdGhpcy5oYXNNb3VudGVkPWZhbHNlO2lmKGNhblVzZURPTSgpKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtpZihfdGhpcy5wb3BwZXIpe190aGlzLnBvcHBlci5pbnN0YW5jZS51cGRhdGUoKTt9aWYoX3RoaXMud3JhcHBlclBvcHBlcil7X3RoaXMud3JhcHBlclBvcHBlci5pbnN0YW5jZS51cGRhdGUoKTt9fSk7fXJldHVybiBfdGhpczt9X2NyZWF0ZUNsYXNzKFJlYWN0RmxvYXRlcixbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKXtpZighY2FuVXNlRE9NKCkpcmV0dXJuO3ZhciBwb3NpdGlvbldyYXBwZXI9dGhpcy5zdGF0ZS5wb3NpdGlvbldyYXBwZXI7dmFyIF90aGlzJHByb3BzNT10aGlzLnByb3BzLGNoaWxkcmVuPV90aGlzJHByb3BzNS5jaGlsZHJlbixvcGVuPV90aGlzJHByb3BzNS5vcGVuLHRhcmdldD1fdGhpcyRwcm9wczUudGFyZ2V0O3RoaXMuX2lzTW91bnRlZD10cnVlO2xvZyh7dGl0bGU6J2luaXQnLGRhdGE6e2hhc0NoaWxkcmVuOiEhY2hpbGRyZW4saGFzVGFyZ2V0OiEhdGFyZ2V0LGlzQ29udHJvbGxlZDppc1tcImJvb2xlYW5cIl0ob3BlbikscG9zaXRpb25XcmFwcGVyOnBvc2l0aW9uV3JhcHBlcix0YXJnZXQ6dGhpcy50YXJnZXQsZmxvYXRlcjp0aGlzLmZsb2F0ZXJSZWZ9LGRlYnVnOnRoaXMuZGVidWd9KTtpZighdGhpcy5oYXNNb3VudGVkKXt0aGlzLmluaXRQb3BwZXIoKTt0aGlzLmhhc01vdW50ZWQ9dHJ1ZTt9aWYoIWNoaWxkcmVuJiZ0YXJnZXQmJiFpc1tcImJvb2xlYW5cIl0ob3BlbikpO319LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLHByZXZTdGF0ZSl7aWYoIWNhblVzZURPTSgpKXJldHVybjt2YXIgX3RoaXMkcHJvcHM2PXRoaXMucHJvcHMsYXV0b09wZW49X3RoaXMkcHJvcHM2LmF1dG9PcGVuLG9wZW49X3RoaXMkcHJvcHM2Lm9wZW4sdGFyZ2V0PV90aGlzJHByb3BzNi50YXJnZXQsd3JhcHBlck9wdGlvbnM9X3RoaXMkcHJvcHM2LndyYXBwZXJPcHRpb25zO3ZhciBfdHJlZUNoYW5nZXM9dHJlZUNoYW5nZXMocHJldlN0YXRlLHRoaXMuc3RhdGUpLGNoYW5nZWRGcm9tPV90cmVlQ2hhbmdlcy5jaGFuZ2VkRnJvbSxjaGFuZ2VkPV90cmVlQ2hhbmdlcy5jaGFuZ2VkO2lmKHByZXZQcm9wcy5vcGVuIT09b3Blbil7dmFyIGZvcmNlU3RhdHVzOy8vIGFsd2F5cyBmb2xsb3cgYG9wZW5gIGluIGNvbnRyb2xsZWQgbW9kZVxuaWYoaXNbXCJib29sZWFuXCJdKG9wZW4pKXtmb3JjZVN0YXR1cz1vcGVuP1NUQVRVUy5PUEVOSU5HOlNUQVRVUy5DTE9TSU5HO310aGlzLnRvZ2dsZShmb3JjZVN0YXR1cyk7fWlmKHByZXZQcm9wcy53cmFwcGVyT3B0aW9ucy5wb3NpdGlvbiE9PXdyYXBwZXJPcHRpb25zLnBvc2l0aW9ufHxwcmV2UHJvcHMudGFyZ2V0IT09dGFyZ2V0KXt0aGlzLmNoYW5nZVdyYXBwZXJQb3NpdGlvbih0aGlzLnByb3BzKTt9aWYoY2hhbmdlZCgnc3RhdHVzJyxTVEFUVVMuSURMRSkmJm9wZW4pe3RoaXMudG9nZ2xlKFNUQVRVUy5PUEVOKTt9ZWxzZSBpZihjaGFuZ2VkRnJvbSgnc3RhdHVzJyxTVEFUVVMuSU5JVCxTVEFUVVMuSURMRSkmJmF1dG9PcGVuKXt0aGlzLnRvZ2dsZShTVEFUVVMuT1BFTik7fWlmKHRoaXMucG9wcGVyJiZjaGFuZ2VkKCdzdGF0dXMnLFNUQVRVUy5PUEVOSU5HKSl7dGhpcy5wb3BwZXIuaW5zdGFuY2UudXBkYXRlKCk7fWlmKHRoaXMuZmxvYXRlclJlZiYmKGNoYW5nZWQoJ3N0YXR1cycsU1RBVFVTLk9QRU5JTkcpfHxjaGFuZ2VkKCdzdGF0dXMnLFNUQVRVUy5DTE9TSU5HKSkpe29uY2UodGhpcy5mbG9hdGVyUmVmLCd0cmFuc2l0aW9uZW5kJyx0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQpO31pZihjaGFuZ2VkKCduZWVkc1VwZGF0ZScsdHJ1ZSkpe3RoaXMucmVidWlsZFBvcHBlcigpO319fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpe2lmKCFjYW5Vc2VET00oKSlyZXR1cm47dGhpcy5faXNNb3VudGVkPWZhbHNlO2lmKHRoaXMucG9wcGVyKXt0aGlzLnBvcHBlci5pbnN0YW5jZS5kZXN0cm95KCk7fWlmKHRoaXMud3JhcHBlclBvcHBlcil7dGhpcy53cmFwcGVyUG9wcGVyLmluc3RhbmNlLmRlc3Ryb3koKTt9fX0se2tleTpcImluaXRQb3BwZXJcIix2YWx1ZTpmdW5jdGlvbiBpbml0UG9wcGVyKCl7dmFyIF90aGlzMj10aGlzO3ZhciB0YXJnZXQ9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOnRoaXMudGFyZ2V0O3ZhciBwb3NpdGlvbldyYXBwZXI9dGhpcy5zdGF0ZS5wb3NpdGlvbldyYXBwZXI7dmFyIF90aGlzJHByb3BzNz10aGlzLnByb3BzLGRpc2FibGVGbGlwPV90aGlzJHByb3BzNy5kaXNhYmxlRmxpcCxnZXRQb3BwZXI9X3RoaXMkcHJvcHM3LmdldFBvcHBlcixoaWRlQXJyb3c9X3RoaXMkcHJvcHM3LmhpZGVBcnJvdyxvZmZzZXQ9X3RoaXMkcHJvcHM3Lm9mZnNldCxwbGFjZW1lbnQ9X3RoaXMkcHJvcHM3LnBsYWNlbWVudCx3cmFwcGVyT3B0aW9ucz1fdGhpcyRwcm9wczcud3JhcHBlck9wdGlvbnM7dmFyIGZsaXBCZWhhdmlvcj1wbGFjZW1lbnQ9PT0ndG9wJ3x8cGxhY2VtZW50PT09J2JvdHRvbSc/J2ZsaXAnOlsncmlnaHQnLCdib3R0b20tZW5kJywndG9wLWVuZCcsJ2xlZnQnLCd0b3Atc3RhcnQnLCdib3R0b20tc3RhcnQnXTsvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL2lmKHBsYWNlbWVudD09PSdjZW50ZXInKXt0aGlzLnNldFN0YXRlKHtzdGF0dXM6U1RBVFVTLklETEV9KTt9ZWxzZSBpZih0YXJnZXQmJnRoaXMuZmxvYXRlclJlZil7dmFyIF90aGlzJG9wdGlvbnM9dGhpcy5vcHRpb25zLGFycm93PV90aGlzJG9wdGlvbnMuYXJyb3csZmxpcD1fdGhpcyRvcHRpb25zLmZsaXAsb2Zmc2V0T3B0aW9ucz1fdGhpcyRvcHRpb25zLm9mZnNldCxyZXN0PV9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRvcHRpb25zLF9leGNsdWRlZCk7bmV3IFBvcHBlcih0YXJnZXQsdGhpcy5mbG9hdGVyUmVmLHtwbGFjZW1lbnQ6cGxhY2VtZW50LG1vZGlmaWVyczpfb2JqZWN0U3ByZWFkMih7YXJyb3c6X29iamVjdFNwcmVhZDIoe2VuYWJsZWQ6IWhpZGVBcnJvdyxlbGVtZW50OnRoaXMuYXJyb3dSZWZ9LGFycm93KSxmbGlwOl9vYmplY3RTcHJlYWQyKHtlbmFibGVkOiFkaXNhYmxlRmxpcCxiZWhhdmlvcjpmbGlwQmVoYXZpb3J9LGZsaXApLG9mZnNldDpfb2JqZWN0U3ByZWFkMih7b2Zmc2V0OlwiMCwgXCIuY29uY2F0KG9mZnNldCxcInB4XCIpfSxvZmZzZXRPcHRpb25zKX0scmVzdCksb25DcmVhdGU6ZnVuY3Rpb24gb25DcmVhdGUoZGF0YSl7dmFyIF90aGlzMiRmbG9hdGVyUmVmO190aGlzMi5wb3BwZXI9ZGF0YTtpZighKChfdGhpczIkZmxvYXRlclJlZj1fdGhpczIuZmxvYXRlclJlZikhPT1udWxsJiZfdGhpczIkZmxvYXRlclJlZiE9PXZvaWQgMCYmX3RoaXMyJGZsb2F0ZXJSZWYuaXNDb25uZWN0ZWQpKXtfdGhpczIuc2V0U3RhdGUoe25lZWRzVXBkYXRlOnRydWV9KTtyZXR1cm47fWdldFBvcHBlcihkYXRhLCdmbG9hdGVyJyk7aWYoX3RoaXMyLl9pc01vdW50ZWQpe190aGlzMi5zZXRTdGF0ZSh7Y3VycmVudFBsYWNlbWVudDpkYXRhLnBsYWNlbWVudCxzdGF0dXM6U1RBVFVTLklETEV9KTt9aWYocGxhY2VtZW50IT09ZGF0YS5wbGFjZW1lbnQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtkYXRhLmluc3RhbmNlLnVwZGF0ZSgpO30sMSk7fX0sb25VcGRhdGU6ZnVuY3Rpb24gb25VcGRhdGUoZGF0YSl7X3RoaXMyLnBvcHBlcj1kYXRhO3ZhciBjdXJyZW50UGxhY2VtZW50PV90aGlzMi5zdGF0ZS5jdXJyZW50UGxhY2VtZW50O2lmKF90aGlzMi5faXNNb3VudGVkJiZkYXRhLnBsYWNlbWVudCE9PWN1cnJlbnRQbGFjZW1lbnQpe190aGlzMi5zZXRTdGF0ZSh7Y3VycmVudFBsYWNlbWVudDpkYXRhLnBsYWNlbWVudH0pO319fSk7fWlmKHBvc2l0aW9uV3JhcHBlcil7dmFyIHdyYXBwZXJPZmZzZXQ9IWlzLnVuZGVmaW5lZCh3cmFwcGVyT3B0aW9ucy5vZmZzZXQpP3dyYXBwZXJPcHRpb25zLm9mZnNldDowO25ldyBQb3BwZXIodGhpcy50YXJnZXQsdGhpcy53cmFwcGVyUmVmLHtwbGFjZW1lbnQ6d3JhcHBlck9wdGlvbnMucGxhY2VtZW50fHxwbGFjZW1lbnQsbW9kaWZpZXJzOnthcnJvdzp7ZW5hYmxlZDpmYWxzZX0sb2Zmc2V0OntvZmZzZXQ6XCIwLCBcIi5jb25jYXQod3JhcHBlck9mZnNldCxcInB4XCIpfSxmbGlwOntlbmFibGVkOmZhbHNlfX0sb25DcmVhdGU6ZnVuY3Rpb24gb25DcmVhdGUoZGF0YSl7X3RoaXMyLndyYXBwZXJQb3BwZXI9ZGF0YTtpZihfdGhpczIuX2lzTW91bnRlZCl7X3RoaXMyLnNldFN0YXRlKHtzdGF0dXNXcmFwcGVyOlNUQVRVUy5JRExFfSk7fWdldFBvcHBlcihkYXRhLCd3cmFwcGVyJyk7aWYocGxhY2VtZW50IT09ZGF0YS5wbGFjZW1lbnQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtkYXRhLmluc3RhbmNlLnVwZGF0ZSgpO30sMSk7fX19KTt9fX0se2tleTpcInJlYnVpbGRQb3BwZXJcIix2YWx1ZTpmdW5jdGlvbiByZWJ1aWxkUG9wcGVyKCl7dmFyIF90aGlzMz10aGlzO3RoaXMuZmxvYXRlclJlZkludGVydmFsPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIF90aGlzMyRmbG9hdGVyUmVmO2lmKChfdGhpczMkZmxvYXRlclJlZj1fdGhpczMuZmxvYXRlclJlZikhPT1udWxsJiZfdGhpczMkZmxvYXRlclJlZiE9PXZvaWQgMCYmX3RoaXMzJGZsb2F0ZXJSZWYuaXNDb25uZWN0ZWQpe2NsZWFySW50ZXJ2YWwoX3RoaXMzLmZsb2F0ZXJSZWZJbnRlcnZhbCk7X3RoaXMzLnNldFN0YXRlKHtuZWVkc1VwZGF0ZTpmYWxzZX0pO190aGlzMy5pbml0UG9wcGVyKCk7fX0sNTApO319LHtrZXk6XCJjaGFuZ2VXcmFwcGVyUG9zaXRpb25cIix2YWx1ZTpmdW5jdGlvbiBjaGFuZ2VXcmFwcGVyUG9zaXRpb24oX3JlZil7dmFyIHRhcmdldD1fcmVmLnRhcmdldCx3cmFwcGVyT3B0aW9ucz1fcmVmLndyYXBwZXJPcHRpb25zO3RoaXMuc2V0U3RhdGUoe3Bvc2l0aW9uV3JhcHBlcjp3cmFwcGVyT3B0aW9ucy5wb3NpdGlvbiYmISF0YXJnZXR9KTt9fSx7a2V5OlwidG9nZ2xlXCIsdmFsdWU6ZnVuY3Rpb24gdG9nZ2xlKGZvcmNlU3RhdHVzKXt2YXIgc3RhdHVzPXRoaXMuc3RhdGUuc3RhdHVzO3ZhciBuZXh0U3RhdHVzPXN0YXR1cz09PVNUQVRVUy5PUEVOP1NUQVRVUy5DTE9TSU5HOlNUQVRVUy5PUEVOSU5HO2lmKCFpcy51bmRlZmluZWQoZm9yY2VTdGF0dXMpKXtuZXh0U3RhdHVzPWZvcmNlU3RhdHVzO310aGlzLnNldFN0YXRlKHtzdGF0dXM6bmV4dFN0YXR1c30pO319LHtrZXk6XCJkZWJ1Z1wiLGdldDpmdW5jdGlvbiBnZXQoKXt2YXIgZGVidWc9dGhpcy5wcm9wcy5kZWJ1ZztyZXR1cm4gZGVidWd8fGNhblVzZURPTSgpJiYnUmVhY3RGbG9hdGVyRGVidWcnaW4gd2luZG93JiYhIXdpbmRvdy5SZWFjdEZsb2F0ZXJEZWJ1Zzt9fSx7a2V5OlwiZXZlbnRcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIF90aGlzJHByb3BzOD10aGlzLnByb3BzLGRpc2FibGVIb3ZlclRvQ2xpY2s9X3RoaXMkcHJvcHM4LmRpc2FibGVIb3ZlclRvQ2xpY2ssZXZlbnQ9X3RoaXMkcHJvcHM4LmV2ZW50O2lmKGV2ZW50PT09J2hvdmVyJyYmaXNNb2JpbGUoKSYmIWRpc2FibGVIb3ZlclRvQ2xpY2spe3JldHVybiAnY2xpY2snO31yZXR1cm4gZXZlbnQ7fX0se2tleTpcIm9wdGlvbnNcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIG9wdGlvbnM9dGhpcy5wcm9wcy5vcHRpb25zO3JldHVybiBkZWVwbWVyZ2UoREVGQVVMVFMsb3B0aW9uc3x8e30pO319LHtrZXk6XCJzdHlsZXNcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIF90aGlzND10aGlzO3ZhciBfdGhpcyRzdGF0ZTM9dGhpcy5zdGF0ZSxzdGF0dXM9X3RoaXMkc3RhdGUzLnN0YXR1cyxwb3NpdGlvbldyYXBwZXI9X3RoaXMkc3RhdGUzLnBvc2l0aW9uV3JhcHBlcixzdGF0dXNXcmFwcGVyPV90aGlzJHN0YXRlMy5zdGF0dXNXcmFwcGVyO3ZhciBzdHlsZXM9dGhpcy5wcm9wcy5zdHlsZXM7dmFyIG5leHRTdHlsZXM9ZGVlcG1lcmdlKGdldFN0eWxlcyhzdHlsZXMpLHN0eWxlcyk7aWYocG9zaXRpb25XcmFwcGVyKXt2YXIgd3JhcHBlclN0eWxlcztpZighKFtTVEFUVVMuSURMRV0uaW5kZXhPZihzdGF0dXMpIT09LTEpfHwhKFtTVEFUVVMuSURMRV0uaW5kZXhPZihzdGF0dXNXcmFwcGVyKSE9PS0xKSl7d3JhcHBlclN0eWxlcz1uZXh0U3R5bGVzLndyYXBwZXJQb3NpdGlvbjt9ZWxzZSB7d3JhcHBlclN0eWxlcz10aGlzLndyYXBwZXJQb3BwZXIuc3R5bGVzO31uZXh0U3R5bGVzLndyYXBwZXI9X29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sbmV4dFN0eWxlcy53cmFwcGVyKSx3cmFwcGVyU3R5bGVzKTt9LyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9pZih0aGlzLnRhcmdldCl7dmFyIHRhcmdldFN0eWxlcz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhcmdldCk7LyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9pZih0aGlzLndyYXBwZXJTdHlsZXMpe25leHRTdHlsZXMud3JhcHBlcj1fb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSxuZXh0U3R5bGVzLndyYXBwZXIpLHRoaXMud3JhcHBlclN0eWxlcyk7fWVsc2UgaWYoIShbJ3JlbGF0aXZlJywnc3RhdGljJ10uaW5kZXhPZih0YXJnZXRTdHlsZXMucG9zaXRpb24pIT09LTEpKXt0aGlzLndyYXBwZXJTdHlsZXM9e307aWYoIXBvc2l0aW9uV3JhcHBlcil7UE9TSVRJT05JTkdfUFJPUFMuZm9yRWFjaChmdW5jdGlvbihkKXtfdGhpczQud3JhcHBlclN0eWxlc1tkXT10YXJnZXRTdHlsZXNbZF07fSk7bmV4dFN0eWxlcy53cmFwcGVyPV9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LG5leHRTdHlsZXMud3JhcHBlciksdGhpcy53cmFwcGVyU3R5bGVzKTt0aGlzLnRhcmdldC5zdHlsZS5wb3NpdGlvbj0ncmVsYXRpdmUnO3RoaXMudGFyZ2V0LnN0eWxlLnRvcD0nYXV0byc7dGhpcy50YXJnZXQuc3R5bGUucmlnaHQ9J2F1dG8nO3RoaXMudGFyZ2V0LnN0eWxlLmJvdHRvbT0nYXV0byc7dGhpcy50YXJnZXQuc3R5bGUubGVmdD0nYXV0byc7fX19cmV0dXJuIG5leHRTdHlsZXM7fX0se2tleTpcInRhcmdldFwiLGdldDpmdW5jdGlvbiBnZXQoKXtpZighY2FuVXNlRE9NKCkpcmV0dXJuIG51bGw7dmFyIHRhcmdldD10aGlzLnByb3BzLnRhcmdldDtpZih0YXJnZXQpe2lmKGlzLmRvbUVsZW1lbnQodGFyZ2V0KSl7cmV0dXJuIHRhcmdldDt9cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTt9cmV0dXJuIHRoaXMuY2hpbGRSZWZ8fHRoaXMud3JhcHBlclJlZjt9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF90aGlzJHN0YXRlND10aGlzLnN0YXRlLGN1cnJlbnRQbGFjZW1lbnQ9X3RoaXMkc3RhdGU0LmN1cnJlbnRQbGFjZW1lbnQscG9zaXRpb25XcmFwcGVyPV90aGlzJHN0YXRlNC5wb3NpdGlvbldyYXBwZXIsc3RhdHVzPV90aGlzJHN0YXRlNC5zdGF0dXM7dmFyIF90aGlzJHByb3BzOT10aGlzLnByb3BzLGNoaWxkcmVuPV90aGlzJHByb3BzOS5jaGlsZHJlbixjb21wb25lbnQ9X3RoaXMkcHJvcHM5LmNvbXBvbmVudCxjb250ZW50PV90aGlzJHByb3BzOS5jb250ZW50LGRpc2FibGVBbmltYXRpb249X3RoaXMkcHJvcHM5LmRpc2FibGVBbmltYXRpb24sZm9vdGVyPV90aGlzJHByb3BzOS5mb290ZXIsaGlkZUFycm93PV90aGlzJHByb3BzOS5oaWRlQXJyb3csaWQ9X3RoaXMkcHJvcHM5LmlkLG9wZW49X3RoaXMkcHJvcHM5Lm9wZW4sc2hvd0Nsb3NlQnV0dG9uPV90aGlzJHByb3BzOS5zaG93Q2xvc2VCdXR0b24sc3R5bGU9X3RoaXMkcHJvcHM5LnN0eWxlLHRhcmdldD1fdGhpcyRwcm9wczkudGFyZ2V0LHRpdGxlPV90aGlzJHByb3BzOS50aXRsZTt2YXIgd3JhcHBlcj0vKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEZsb2F0ZXJXcmFwcGVyLHtoYW5kbGVDbGljazp0aGlzLmhhbmRsZUNsaWNrLGhhbmRsZU1vdXNlRW50ZXI6dGhpcy5oYW5kbGVNb3VzZUVudGVyLGhhbmRsZU1vdXNlTGVhdmU6dGhpcy5oYW5kbGVNb3VzZUxlYXZlLHNldENoaWxkUmVmOnRoaXMuc2V0Q2hpbGRSZWYsc2V0V3JhcHBlclJlZjp0aGlzLnNldFdyYXBwZXJSZWYsc3R5bGU6c3R5bGUsc3R5bGVzOnRoaXMuc3R5bGVzLndyYXBwZXJ9LGNoaWxkcmVuKTt2YXIgb3V0cHV0PXt9O2lmKHBvc2l0aW9uV3JhcHBlcil7b3V0cHV0LndyYXBwZXJJblBvcnRhbD13cmFwcGVyO31lbHNlIHtvdXRwdXQud3JhcHBlckFzQ2hpbGRyZW49d3JhcHBlcjt9cmV0dXJuLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsbnVsbCwvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEZsb2F0ZXJQb3J0YWwse2hhc0NoaWxkcmVuOiEhY2hpbGRyZW4saWQ6aWQscGxhY2VtZW50OmN1cnJlbnRQbGFjZW1lbnQsc2V0UmVmOnRoaXMuc2V0RmxvYXRlclJlZix0YXJnZXQ6dGFyZ2V0LHpJbmRleDp0aGlzLnN0eWxlcy5vcHRpb25zLnpJbmRleH0sLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmxvYXRlcix7Y29tcG9uZW50OmNvbXBvbmVudCxjb250ZW50OmNvbnRlbnQsZGlzYWJsZUFuaW1hdGlvbjpkaXNhYmxlQW5pbWF0aW9uLGZvb3Rlcjpmb290ZXIsaGFuZGxlQ2xpY2s6dGhpcy5oYW5kbGVDbGljayxoaWRlQXJyb3c6aGlkZUFycm93fHxjdXJyZW50UGxhY2VtZW50PT09J2NlbnRlcicsb3BlbjpvcGVuLHBsYWNlbWVudDpjdXJyZW50UGxhY2VtZW50LHBvc2l0aW9uV3JhcHBlcjpwb3NpdGlvbldyYXBwZXIsc2V0QXJyb3dSZWY6dGhpcy5zZXRBcnJvd1JlZixzZXRGbG9hdGVyUmVmOnRoaXMuc2V0RmxvYXRlclJlZixzaG93Q2xvc2VCdXR0b246c2hvd0Nsb3NlQnV0dG9uLHN0YXR1czpzdGF0dXMsc3R5bGVzOnRoaXMuc3R5bGVzLHRpdGxlOnRpdGxlfSksb3V0cHV0LndyYXBwZXJJblBvcnRhbCksb3V0cHV0LndyYXBwZXJBc0NoaWxkcmVuKTt9fV0pO3JldHVybiBSZWFjdEZsb2F0ZXI7fShSZWFjdC5Db21wb25lbnQpO19kZWZpbmVQcm9wZXJ0eShSZWFjdEZsb2F0ZXIsXCJwcm9wVHlwZXNcIix7YXV0b09wZW46UHJvcFR5cGVzLmJvb2wsY2FsbGJhY2s6UHJvcFR5cGVzLmZ1bmMsY2hpbGRyZW46UHJvcFR5cGVzLm5vZGUsY29tcG9uZW50OmlzUmVxdWlyZWRJZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYyxQcm9wVHlwZXMuZWxlbWVudF0pLGZ1bmN0aW9uKHByb3BzKXtyZXR1cm4gIXByb3BzLmNvbnRlbnQ7fSksY29udGVudDppc1JlcXVpcmVkSWYoUHJvcFR5cGVzLm5vZGUsZnVuY3Rpb24ocHJvcHMpe3JldHVybiAhcHJvcHMuY29tcG9uZW50O30pLGRlYnVnOlByb3BUeXBlcy5ib29sLGRpc2FibGVBbmltYXRpb246UHJvcFR5cGVzLmJvb2wsZGlzYWJsZUZsaXA6UHJvcFR5cGVzLmJvb2wsZGlzYWJsZUhvdmVyVG9DbGljazpQcm9wVHlwZXMuYm9vbCxldmVudDpQcm9wVHlwZXMub25lT2YoWydob3ZlcicsJ2NsaWNrJ10pLGV2ZW50RGVsYXk6UHJvcFR5cGVzLm51bWJlcixmb290ZXI6UHJvcFR5cGVzLm5vZGUsZ2V0UG9wcGVyOlByb3BUeXBlcy5mdW5jLGhpZGVBcnJvdzpQcm9wVHlwZXMuYm9vbCxpZDpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5udW1iZXJdKSxvZmZzZXQ6UHJvcFR5cGVzLm51bWJlcixvcGVuOlByb3BUeXBlcy5ib29sLG9wdGlvbnM6UHJvcFR5cGVzLm9iamVjdCxwbGFjZW1lbnQ6UHJvcFR5cGVzLm9uZU9mKFsndG9wJywndG9wLXN0YXJ0JywndG9wLWVuZCcsJ2JvdHRvbScsJ2JvdHRvbS1zdGFydCcsJ2JvdHRvbS1lbmQnLCdsZWZ0JywnbGVmdC1zdGFydCcsJ2xlZnQtZW5kJywncmlnaHQnLCdyaWdodC1zdGFydCcsJ3JpZ2h0LWVuZCcsJ2F1dG8nLCdjZW50ZXInXSksc2hvd0Nsb3NlQnV0dG9uOlByb3BUeXBlcy5ib29sLHN0eWxlOlByb3BUeXBlcy5vYmplY3Qsc3R5bGVzOlByb3BUeXBlcy5vYmplY3QsdGFyZ2V0OlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsUHJvcFR5cGVzLnN0cmluZ10pLHRpdGxlOlByb3BUeXBlcy5ub2RlLHdyYXBwZXJPcHRpb25zOlByb3BUeXBlcy5zaGFwZSh7b2Zmc2V0OlByb3BUeXBlcy5udW1iZXIscGxhY2VtZW50OlByb3BUeXBlcy5vbmVPZihbJ3RvcCcsJ3RvcC1zdGFydCcsJ3RvcC1lbmQnLCdib3R0b20nLCdib3R0b20tc3RhcnQnLCdib3R0b20tZW5kJywnbGVmdCcsJ2xlZnQtc3RhcnQnLCdsZWZ0LWVuZCcsJ3JpZ2h0JywncmlnaHQtc3RhcnQnLCdyaWdodC1lbmQnLCdhdXRvJ10pLHBvc2l0aW9uOlByb3BUeXBlcy5ib29sfSl9KTtfZGVmaW5lUHJvcGVydHkoUmVhY3RGbG9hdGVyLFwiZGVmYXVsdFByb3BzXCIse2F1dG9PcGVuOmZhbHNlLGNhbGxiYWNrOm5vb3AsZGVidWc6ZmFsc2UsZGlzYWJsZUFuaW1hdGlvbjpmYWxzZSxkaXNhYmxlRmxpcDpmYWxzZSxkaXNhYmxlSG92ZXJUb0NsaWNrOmZhbHNlLGV2ZW50OidjbGljaycsZXZlbnREZWxheTowLjQsZ2V0UG9wcGVyOm5vb3AsaGlkZUFycm93OmZhbHNlLG9mZnNldDoxNSxwbGFjZW1lbnQ6J2JvdHRvbScsc2hvd0Nsb3NlQnV0dG9uOmZhbHNlLHN0eWxlczp7fSx0YXJnZXQ6bnVsbCx3cmFwcGVyT3B0aW9uczp7cG9zaXRpb246ZmFsc2V9fSk7XG5cbmV4cG9ydCB7IFJlYWN0RmxvYXRlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gaXNPZlR5cGUodHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTsgfTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgdmFyIGlzRnVuY3Rpb24gPSBpc09mVHlwZSgnZnVuY3Rpb24nKTtcbmV4cG9ydCB2YXIgaXNOdWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufTtcbmV4cG9ydCB2YXIgaXNSZWdleCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSA9PT0gJ1JlZ0V4cCc7XG59O1xuZXhwb3J0IHZhciBpc09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpICYmIChpc0Z1bmN0aW9uKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKTtcbn07XG5leHBvcnQgdmFyIGlzVW5kZWZpbmVkID0gaXNPZlR5cGUoJ3VuZGVmaW5lZCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJ2YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgeyBpc09iamVjdCwgaXNSZWdleCB9IGZyb20gJy4vaGVscGVycyc7XG5mdW5jdGlvbiBlcXVhbEFycmF5KGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGxlbmd0aCA9IGxlZnQubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGluZGV4ID0gbGVuZ3RoOyBpbmRleC0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWVxdWFsKGxlZnRbaW5kZXhdLCByaWdodFtpbmRleF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBlcXVhbEFycmF5QnVmZmVyKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQuYnl0ZUxlbmd0aCAhPT0gcmlnaHQuYnl0ZUxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB2aWV3MSA9IG5ldyBEYXRhVmlldyhsZWZ0LmJ1ZmZlcik7XG4gICAgdmFyIHZpZXcyID0gbmV3IERhdGFWaWV3KHJpZ2h0LmJ1ZmZlcik7XG4gICAgdmFyIGluZGV4ID0gbGVmdC5ieXRlTGVuZ3RoO1xuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGlmICh2aWV3MS5nZXRVaW50OChpbmRleCkgIT09IHZpZXcyLmdldFVpbnQ4KGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZXF1YWxNYXAobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcbiAgICBpZiAobGVmdC5zaXplICE9PSByaWdodC5zaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyhsZWZ0LmVudHJpZXMoKSksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFyaWdodC5oYXMoaW5kZXhbMF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9hID0gX2MucmV0dXJuKSkgX2EuY2FsbChfYyk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfZSA9IF9fdmFsdWVzKGxlZnQuZW50cmllcygpKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gX2YudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWVxdWFsKGluZGV4WzFdLCByaWdodC5nZXQoaW5kZXhbMF0pKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKF9mICYmICFfZi5kb25lICYmIChfYiA9IF9lLnJldHVybikpIF9iLmNhbGwoX2UpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBlcXVhbFNldChsZWZ0LCByaWdodCkge1xuICAgIHZhciBlXzMsIF9hO1xuICAgIGlmIChsZWZ0LnNpemUgIT09IHJpZ2h0LnNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGxlZnQuZW50cmllcygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gX2MudmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0LmhhcyhpbmRleFswXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXF1YWwobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAobGVmdCA9PT0gcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChsZWZ0ICYmIGlzT2JqZWN0KGxlZnQpICYmIHJpZ2h0ICYmIGlzT2JqZWN0KHJpZ2h0KSkge1xuICAgICAgICBpZiAobGVmdC5jb25zdHJ1Y3RvciAhPT0gcmlnaHQuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVxdWFsQXJyYXkobGVmdCwgcmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0IGluc3RhbmNlb2YgTWFwICYmIHJpZ2h0IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gZXF1YWxNYXAobGVmdCwgcmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0IGluc3RhbmNlb2YgU2V0ICYmIHJpZ2h0IGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gZXF1YWxTZXQobGVmdCwgcmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcobGVmdCkgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KHJpZ2h0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVxdWFsQXJyYXlCdWZmZXIobGVmdCwgcmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZ2V4KGxlZnQpICYmIGlzUmVnZXgocmlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVmdC5zb3VyY2UgPT09IHJpZ2h0LnNvdXJjZSAmJiBsZWZ0LmZsYWdzID09PSByaWdodC5mbGFncztcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdC52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0LnZhbHVlT2YoKSA9PT0gcmlnaHQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0LnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVmdC50b1N0cmluZygpID09PSByaWdodC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZWZ0S2V5cyA9IE9iamVjdC5rZXlzKGxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRLZXlzID0gT2JqZWN0LmtleXMocmlnaHQpO1xuICAgICAgICBpZiAobGVmdEtleXMubGVuZ3RoICE9PSByaWdodEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSBsZWZ0S2V5cy5sZW5ndGg7IGluZGV4LS0gIT09IDA7KSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyaWdodCwgbGVmdEtleXNbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IGxlZnRLZXlzLmxlbmd0aDsgaW5kZXgtLSAhPT0gMDspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsZWZ0S2V5c1tpbmRleF07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBsZWZ0LiQkdHlwZW9mKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgICAvLyBhbmQgaXMgbm90IG5lZWRlZCB3aGVuIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZXF1YWwobGVmdFtrZXldLCByaWdodFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc05hTihsZWZ0KSAmJiBOdW1iZXIuaXNOYU4ocmlnaHQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgRE9NX1BST1BFUlRJRVNfVE9fQ0hFQ0sgPSBbXG4gICAgJ2lubmVySFRNTCcsXG4gICAgJ293bmVyRG9jdW1lbnQnLFxuICAgICdzdHlsZScsXG4gICAgJ2F0dHJpYnV0ZXMnLFxuICAgICdub2RlVmFsdWUnLFxuXTtcbnZhciBvYmplY3RUeXBlcyA9IFtcbiAgICAnQXJyYXknLFxuICAgICdBcnJheUJ1ZmZlcicsXG4gICAgJ0FzeW5jRnVuY3Rpb24nLFxuICAgICdBc3luY0dlbmVyYXRvcicsXG4gICAgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLFxuICAgICdEYXRlJyxcbiAgICAnRXJyb3InLFxuICAgICdGdW5jdGlvbicsXG4gICAgJ0dlbmVyYXRvcicsXG4gICAgJ0dlbmVyYXRvckZ1bmN0aW9uJyxcbiAgICAnSFRNTEVsZW1lbnQnLFxuICAgICdNYXAnLFxuICAgICdPYmplY3QnLFxuICAgICdQcm9taXNlJyxcbiAgICAnUmVnRXhwJyxcbiAgICAnU2V0JyxcbiAgICAnV2Vha01hcCcsXG4gICAgJ1dlYWtTZXQnLFxuXTtcbnZhciBwcmltaXRpdmVUeXBlcyA9IFtcbiAgICAnYmlnaW50JyxcbiAgICAnYm9vbGVhbicsXG4gICAgJ251bGwnLFxuICAgICdudW1iZXInLFxuICAgICdzdHJpbmcnLFxuICAgICdzeW1ib2wnLFxuICAgICd1bmRlZmluZWQnLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3RUeXBlKHZhbHVlKSB7XG4gICAgdmFyIG9iamVjdFR5cGVOYW1lID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKC9IVE1MXFx3K0VsZW1lbnQvLnRlc3Qob2JqZWN0VHlwZU5hbWUpKSB7XG4gICAgICAgIHJldHVybiAnSFRNTEVsZW1lbnQnO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3RUeXBlKG9iamVjdFR5cGVOYW1lKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0VHlwZU5hbWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc09iamVjdE9mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZ2V0T2JqZWN0VHlwZSh2YWx1ZSkgPT09IHR5cGU7IH07XG59XG5mdW5jdGlvbiBpc09iamVjdFR5cGUobmFtZSkge1xuICAgIHJldHVybiBvYmplY3RUeXBlcy5pbmNsdWRlcyhuYW1lKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBpc09mVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSB0eXBlOyB9O1xufVxuZnVuY3Rpb24gaXNQcmltaXRpdmVUeXBlKG5hbWUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlVHlwZXMuaW5jbHVkZXMobmFtZSk7XG59XG5mdW5jdGlvbiBpcyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdiaWdpbnQnOlxuICAgICAgICAgICAgcmV0dXJuICdiaWdpbnQnO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHJldHVybiAnYm9vbGVhbic7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIGlmIChpcy5hcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdBcnJheSc7XG4gICAgfVxuICAgIGlmIChpcy5wbGFpbkZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgICB9XG4gICAgdmFyIHRhZ1R5cGUgPSBnZXRPYmplY3RUeXBlKHZhbHVlKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0YWdUeXBlKSB7XG4gICAgICAgIHJldHVybiB0YWdUeXBlO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiAnT2JqZWN0Jztcbn1cbmlzLmFycmF5ID0gQXJyYXkuaXNBcnJheTtcbmlzLmFycmF5T2YgPSBmdW5jdGlvbiAodGFyZ2V0LCBwcmVkaWNhdGUpIHtcbiAgICBpZiAoIWlzLmFycmF5KHRhcmdldCkgJiYgIWlzLmZ1bmN0aW9uKHByZWRpY2F0ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0LmV2ZXJ5KGZ1bmN0aW9uIChkKSB7IHJldHVybiBwcmVkaWNhdGUoZCk7IH0pO1xufTtcbmlzLmFzeW5jR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZ2V0T2JqZWN0VHlwZSh2YWx1ZSkgPT09ICdBc3luY0dlbmVyYXRvckZ1bmN0aW9uJztcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuaXMuYXN5bmNGdW5jdGlvbiA9IGlzT2JqZWN0T2ZUeXBlKCdBc3luY0Z1bmN0aW9uJyk7XG5pcy5iaWdpbnQgPSBpc09mVHlwZSgnYmlnaW50Jyk7XG5pcy5ib29sZWFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn07XG5pcy5kYXRlID0gaXNPYmplY3RPZlR5cGUoJ0RhdGUnKTtcbmlzLmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICFpcy51bmRlZmluZWQodmFsdWUpOyB9O1xuaXMuZG9tRWxlbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAoaXMub2JqZWN0KHZhbHVlKSAmJlxuICAgICAgICAhaXMucGxhaW5PYmplY3QodmFsdWUpICYmXG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgIGlzLnN0cmluZyh2YWx1ZS5ub2RlTmFtZSkgJiZcbiAgICAgICAgRE9NX1BST1BFUlRJRVNfVE9fQ0hFQ0suZXZlcnkoZnVuY3Rpb24gKHByb3BlcnR5KSB7IHJldHVybiBwcm9wZXJ0eSBpbiB2YWx1ZTsgfSkpO1xufTtcbmlzLmVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgoaXMuc3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHx8XG4gICAgICAgIChpcy5hcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB8fFxuICAgICAgICAoaXMub2JqZWN0KHZhbHVlKSAmJiAhaXMubWFwKHZhbHVlKSAmJiAhaXMuc2V0KHZhbHVlKSAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSB8fFxuICAgICAgICAoaXMuc2V0KHZhbHVlKSAmJiB2YWx1ZS5zaXplID09PSAwKSB8fFxuICAgICAgICAoaXMubWFwKHZhbHVlKSAmJiB2YWx1ZS5zaXplID09PSAwKSk7XG59O1xuaXMuZXJyb3IgPSBpc09iamVjdE9mVHlwZSgnRXJyb3InKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5pcy5mdW5jdGlvbiA9IGlzT2ZUeXBlKCdmdW5jdGlvbicpO1xuaXMuZ2VuZXJhdG9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpcy5pdGVyYWJsZSh2YWx1ZSkgJiZcbiAgICAgICAgaXMuZnVuY3Rpb24odmFsdWUubmV4dCkgJiZcbiAgICAgICAgaXMuZnVuY3Rpb24odmFsdWUudGhyb3cpKTtcbn07XG5pcy5nZW5lcmF0b3JGdW5jdGlvbiA9IGlzT2JqZWN0T2ZUeXBlKCdHZW5lcmF0b3JGdW5jdGlvbicpO1xuaXMuaW5zdGFuY2VPZiA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgY2xhc3NfKSB7XG4gICAgaWYgKCFpbnN0YW5jZSB8fCAhY2xhc3NfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSkgPT09IGNsYXNzXy5wcm90b3R5cGU7XG59O1xuaXMuaXRlcmFibGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKCFpcy5udWxsT3JVbmRlZmluZWQodmFsdWUpICYmIGlzLmZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pKTtcbn07XG5pcy5tYXAgPSBpc09iamVjdE9mVHlwZSgnTWFwJyk7XG5pcy5uYW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKTtcbn07XG5pcy5udWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufTtcbmlzLm51bGxPclVuZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpcy5udWxsKHZhbHVlKSB8fCBpcy51bmRlZmluZWQodmFsdWUpO1xufTtcbmlzLm51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc09mVHlwZSgnbnVtYmVyJykodmFsdWUpICYmICFpcy5uYW4odmFsdWUpO1xufTtcbmlzLm51bWVyaWNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmlzLm9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhaXMubnVsbE9yVW5kZWZpbmVkKHZhbHVlKSAmJiAoaXMuZnVuY3Rpb24odmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpO1xufTtcbmlzLm9uZU9mID0gZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcbiAgICBpZiAoIWlzLmFycmF5KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICByZXR1cm4gdGFyZ2V0LmluZGV4T2YodmFsdWUpID4gLTE7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmlzLnBsYWluRnVuY3Rpb24gPSBpc09iamVjdE9mVHlwZSgnRnVuY3Rpb24nKTtcbmlzLnBsYWluT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGdldE9iamVjdFR5cGUodmFsdWUpICE9PSAnT2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xufTtcbmlzLnByaW1pdGl2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpcy5udWxsKHZhbHVlKSB8fCBpc1ByaW1pdGl2ZVR5cGUodHlwZW9mIHZhbHVlKTtcbn07XG5pcy5wcm9taXNlID0gaXNPYmplY3RPZlR5cGUoJ1Byb21pc2UnKTtcbmlzLnByb3BlcnR5T2YgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHByZWRpY2F0ZSkge1xuICAgIGlmICghaXMub2JqZWN0KHRhcmdldCkgfHwgIWtleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuICAgIGlmIChpcy5mdW5jdGlvbihwcmVkaWNhdGUpKSB7XG4gICAgICAgIHJldHVybiBwcmVkaWNhdGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gaXMuZGVmaW5lZCh2YWx1ZSk7XG59O1xuaXMucmVnZXhwID0gaXNPYmplY3RPZlR5cGUoJ1JlZ0V4cCcpO1xuaXMuc2V0ID0gaXNPYmplY3RPZlR5cGUoJ1NldCcpO1xuaXMuc3RyaW5nID0gaXNPZlR5cGUoJ3N0cmluZycpO1xuaXMuc3ltYm9sID0gaXNPZlR5cGUoJ3N5bWJvbCcpO1xuaXMudW5kZWZpbmVkID0gaXNPZlR5cGUoJ3VuZGVmaW5lZCcpO1xuaXMud2Vha01hcCA9IGlzT2JqZWN0T2ZUeXBlKCdXZWFrTWFwJyk7XG5pcy53ZWFrU2V0ID0gaXNPYmplY3RPZlR5cGUoJ1dlYWtTZXQnKTtcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGRlZmF1bHQgaXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgZXF1YWwgZnJvbSAnQGdpbGJhcmJhcmEvZGVlcC1lcXVhbCc7XG5pbXBvcnQgaXMgZnJvbSAnaXMtbGl0ZSc7XG5leHBvcnQgZnVuY3Rpb24gY2FuSGF2ZUxlbmd0aCgpIHtcbiAgICB2YXIgYXJndW1lbnRzXyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3VtZW50c19bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3VtZW50c18uZXZlcnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGlzLnN0cmluZyhkKSB8fCBpcy5hcnJheShkKSB8fCBpcy5wbGFpbk9iamVjdChkKTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFcXVhbGl0eShsZWZ0LCByaWdodCwgdmFsdWUpIHtcbiAgICBpZiAoIWlzU2FtZVR5cGUobGVmdCwgcmlnaHQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMuYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiAhbGVmdC5zb21lKGhhc1ZhbHVlKHZhbHVlKSkgJiYgcmlnaHQuc29tZShoYXNWYWx1ZSh2YWx1ZSkpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChbbGVmdCwgcmlnaHRdLmV2ZXJ5KGlzLnBsYWluT2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gKCFPYmplY3QuZW50cmllcyhsZWZ0KS5zb21lKGhhc0VudHJ5KHZhbHVlKSkgJiYgT2JqZWN0LmVudHJpZXMocmlnaHQpLnNvbWUoaGFzRW50cnkodmFsdWUpKSk7XG4gICAgfVxuICAgIHJldHVybiByaWdodCA9PT0gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZU51bWJlcnMocHJldmlvdXNEYXRhLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIGFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsLCBrZXkgPSBvcHRpb25zLmtleSwgcHJldmlvdXMgPSBvcHRpb25zLnByZXZpb3VzLCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHZhciBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgICB2YXIgcmlnaHQgPSBuZXN0ZWQoZGF0YSwga2V5KTtcbiAgICB2YXIgY2hhbmdlZCA9IFtsZWZ0LCByaWdodF0uZXZlcnkoaXMubnVtYmVyKSAmJiAodHlwZSA9PT0gJ2luY3JlYXNlZCcgPyBsZWZ0IDwgcmlnaHQgOiBsZWZ0ID4gcmlnaHQpO1xuICAgIGlmICghaXMudW5kZWZpbmVkKGFjdHVhbCkpIHtcbiAgICAgICAgY2hhbmdlZCA9IGNoYW5nZWQgJiYgcmlnaHQgPT09IGFjdHVhbDtcbiAgICB9XG4gICAgaWYgKCFpcy51bmRlZmluZWQocHJldmlvdXMpKSB7XG4gICAgICAgIGNoYW5nZWQgPSBjaGFuZ2VkICYmIGxlZnQgPT09IHByZXZpb3VzO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmFsdWVzKHByZXZpb3VzRGF0YSwgZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciBrZXkgPSBvcHRpb25zLmtleSwgdHlwZSA9IG9wdGlvbnMudHlwZSwgdmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuICAgIHZhciBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgICB2YXIgcmlnaHQgPSBuZXN0ZWQoZGF0YSwga2V5KTtcbiAgICB2YXIgcHJpbWFyeSA9IHR5cGUgPT09ICdhZGRlZCcgPyBsZWZ0IDogcmlnaHQ7XG4gICAgdmFyIHNlY29uZGFyeSA9IHR5cGUgPT09ICdhZGRlZCcgPyByaWdodCA6IGxlZnQ7XG4gICAgLy8gY29uc29sZS5sb2coeyBwcmltYXJ5LCBzZWNvbmRhcnkgfSk7XG4gICAgaWYgKCFpcy5udWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIGlmIChpcy5kZWZpbmVkKHByaW1hcnkpKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBuZXN0ZWQgZGF0YSBtYXRjaGVzXG4gICAgICAgICAgICBpZiAoaXMuYXJyYXkocHJpbWFyeSkgfHwgaXMucGxhaW5PYmplY3QocHJpbWFyeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tFcXVhbGl0eShwcmltYXJ5LCBzZWNvbmRhcnksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlcXVhbChzZWNvbmRhcnksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChbbGVmdCwgcmlnaHRdLmV2ZXJ5KGlzLmFycmF5KSkge1xuICAgICAgICByZXR1cm4gIXNlY29uZGFyeS5ldmVyeShpc0VxdWFsUHJlZGljYXRlKHByaW1hcnkpKTtcbiAgICB9XG4gICAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMucGxhaW5PYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBoYXNFeHRyYUtleXMoT2JqZWN0LmtleXMocHJpbWFyeSksIE9iamVjdC5rZXlzKHNlY29uZGFyeSkpO1xuICAgIH1cbiAgICByZXR1cm4gKCFbbGVmdCwgcmlnaHRdLmV2ZXJ5KGZ1bmN0aW9uIChkKSB7IHJldHVybiBpcy5wcmltaXRpdmUoZCkgJiYgaXMuZGVmaW5lZChkKTsgfSkgJiZcbiAgICAgICAgKHR5cGUgPT09ICdhZGRlZCdcbiAgICAgICAgICAgID8gIWlzLmRlZmluZWQobGVmdCkgJiYgaXMuZGVmaW5lZChyaWdodClcbiAgICAgICAgICAgIDogaXMuZGVmaW5lZChsZWZ0KSAmJiAhaXMuZGVmaW5lZChyaWdodCkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVyYWJsZXMocHJldmlvdXNEYXRhLCBkYXRhLCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBrZXkgPSBfYi5rZXk7XG4gICAgdmFyIGxlZnQgPSBuZXN0ZWQocHJldmlvdXNEYXRhLCBrZXkpO1xuICAgIHZhciByaWdodCA9IG5lc3RlZChkYXRhLCBrZXkpO1xuICAgIGlmICghaXNTYW1lVHlwZShsZWZ0LCByaWdodCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5wdXRzIGhhdmUgZGlmZmVyZW50IHR5cGVzJyk7XG4gICAgfVxuICAgIGlmICghY2FuSGF2ZUxlbmd0aChsZWZ0LCByaWdodCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklucHV0cyBkb24ndCBoYXZlIGxlbmd0aFwiKTtcbiAgICB9XG4gICAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMucGxhaW5PYmplY3QpKSB7XG4gICAgICAgIGxlZnQgPSBPYmplY3Qua2V5cyhsZWZ0KTtcbiAgICAgICAgcmlnaHQgPSBPYmplY3Qua2V5cyhyaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBbbGVmdCwgcmlnaHRdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc0VudHJ5KGlucHV0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIGlmIChpcy5hcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXF1YWwoaW5wdXQsIHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgIGlucHV0LnNvbWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGVxdWFsKGQsIHZhbHVlKSB8fCAoaXMuYXJyYXkodmFsdWUpICYmIGlzRXF1YWxQcmVkaWNhdGUodmFsdWUpKGQpKTsgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChpcy5wbGFpbk9iamVjdChpbnB1dCkgJiYgaW5wdXRba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICEhaW5wdXRba2V5XSAmJiBlcXVhbChpbnB1dFtrZXldLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVxdWFsKGlucHV0LCB2YWx1ZSk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNFeHRyYUtleXMobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gcmlnaHQuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gIWxlZnQuaW5jbHVkZXMoZCk7IH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoaXMuYXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZXF1YWwoZCwgdmFsdWUpIHx8IChpcy5hcnJheSh2YWx1ZSkgJiYgaXNFcXVhbFByZWRpY2F0ZSh2YWx1ZSkoZCkpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXF1YWwoaW5wdXQsIHZhbHVlKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzT3JFcXVhbHNUbyhwcmV2aW91c1ZhbHVlLCB2YWx1ZSkge1xuICAgIHJldHVybiBpcy5hcnJheShwcmV2aW91c1ZhbHVlKVxuICAgICAgICA/IHByZXZpb3VzVmFsdWUuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZXF1YWwoZCwgdmFsdWUpOyB9KVxuICAgICAgICA6IGVxdWFsKHByZXZpb3VzVmFsdWUsIHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsUHJlZGljYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBkYXRhLnNvbWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGVxdWFsKGQsIHZhbHVlKTsgfSk7IH07XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lVHlwZSgpIHtcbiAgICB2YXIgYXJndW1lbnRzXyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3VtZW50c19bX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIChhcmd1bWVudHNfLmV2ZXJ5KGlzLmFycmF5KSB8fFxuICAgICAgICBhcmd1bWVudHNfLmV2ZXJ5KGlzLm51bWJlcikgfHxcbiAgICAgICAgYXJndW1lbnRzXy5ldmVyeShpcy5wbGFpbk9iamVjdCkgfHxcbiAgICAgICAgYXJndW1lbnRzXy5ldmVyeShpcy5zdHJpbmcpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoZGF0YSwgcHJvcGVydHkpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChpcy5wbGFpbk9iamVjdChkYXRhKSB8fCBpcy5hcnJheShkYXRhKSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXMuc3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZCkgeyByZXR1cm4gYWNjICYmIGFjY1tkXTsgfSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGlzLm51bWJlcihwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsImltcG9ydCBlcXVhbCBmcm9tICdAZ2lsYmFyYmFyYS9kZWVwLWVxdWFsJztcbmltcG9ydCBpcyBmcm9tICdpcy1saXRlJztcbmltcG9ydCB7IGNvbXBhcmVOdW1iZXJzLCBjb21wYXJlVmFsdWVzLCBnZXRJdGVyYWJsZXMsIGluY2x1ZGVzT3JFcXVhbHNUbywgbmVzdGVkIH0gZnJvbSAnLi9oZWxwZXJzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyZWVDaGFuZ2VzKHByZXZpb3VzRGF0YSwgZGF0YSkge1xuICAgIGlmIChbcHJldmlvdXNEYXRhLCBkYXRhXS5zb21lKGlzLm51bGxPclVuZGVmaW5lZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcnMnKTtcbiAgICB9XG4gICAgaWYgKCFbcHJldmlvdXNEYXRhLCBkYXRhXS5ldmVyeShmdW5jdGlvbiAoZCkgeyByZXR1cm4gaXMucGxhaW5PYmplY3QoZCkgfHwgaXMuYXJyYXkoZCk7IH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgcGxhaW4gb2JqZWN0cyBvciBhcnJheScpO1xuICAgIH1cbiAgICB2YXIgYWRkZWQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVWYWx1ZXMocHJldmlvdXNEYXRhLCBkYXRhLCB7IGtleToga2V5LCB0eXBlOiAnYWRkZWQnLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgY2hhbmdlZCA9IGZ1bmN0aW9uIChrZXksIGFjdHVhbCwgcHJldmlvdXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IG5lc3RlZChkYXRhLCBrZXkpO1xuICAgICAgICAgICAgdmFyIGhhc0FjdHVhbCA9IGlzLmRlZmluZWQoYWN0dWFsKTtcbiAgICAgICAgICAgIHZhciBoYXNQcmV2aW91cyA9IGlzLmRlZmluZWQocHJldmlvdXMpO1xuICAgICAgICAgICAgaWYgKGhhc0FjdHVhbCB8fCBoYXNQcmV2aW91cykge1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0Q29tcGFyYXRvciA9IGhhc1ByZXZpb3VzXG4gICAgICAgICAgICAgICAgICAgID8gaW5jbHVkZXNPckVxdWFsc1RvKHByZXZpb3VzLCBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICA6ICFpbmNsdWRlc09yRXF1YWxzVG8oYWN0dWFsLCBsZWZ0KTtcbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRDb21wYXJhdG9yID0gaW5jbHVkZXNPckVxdWFsc1RvKGFjdHVhbCwgcmlnaHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0Q29tcGFyYXRvciAmJiByaWdodENvbXBhcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoW2xlZnQsIHJpZ2h0XS5ldmVyeShpcy5hcnJheSkgfHwgW2xlZnQsIHJpZ2h0XS5ldmVyeShpcy5wbGFpbk9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWVxdWFsKGxlZnQsIHJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsZWZ0ICE9PSByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjaGFuZ2VkRnJvbSA9IGZ1bmN0aW9uIChrZXksIHByZXZpb3VzLCBhY3R1YWwpIHtcbiAgICAgICAgaWYgKCFpcy5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBuZXN0ZWQocHJldmlvdXNEYXRhLCBrZXkpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gbmVzdGVkKGRhdGEsIGtleSk7XG4gICAgICAgICAgICB2YXIgaGFzQWN0dWFsID0gaXMuZGVmaW5lZChhY3R1YWwpO1xuICAgICAgICAgICAgcmV0dXJuIChpbmNsdWRlc09yRXF1YWxzVG8ocHJldmlvdXMsIGxlZnQpICYmXG4gICAgICAgICAgICAgICAgKGhhc0FjdHVhbCA/IGluY2x1ZGVzT3JFcXVhbHNUbyhhY3R1YWwsIHJpZ2h0KSA6ICFoYXNBY3R1YWwpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogVXNlIFwiY2hhbmdlZFwiIGluc3RlYWRcbiAgICAgKi9cbiAgICB2YXIgY2hhbmdlZFRvID0gZnVuY3Rpb24gKGtleSwgYWN0dWFsKSB7XG4gICAgICAgIGlmICghaXMuZGVmaW5lZChrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdgY2hhbmdlZFRvYCBpcyBkZXByZWNhdGVkISBSZXBsYWNlIGl0IHdpdGggYGNoYW5nZWAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlZChrZXksIGFjdHVhbCk7XG4gICAgfTtcbiAgICB2YXIgZGVjcmVhc2VkID0gZnVuY3Rpb24gKGtleSwgYWN0dWFsLCBwcmV2aW91cykge1xuICAgICAgICBpZiAoIWlzLmRlZmluZWQoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZU51bWJlcnMocHJldmlvdXNEYXRhLCBkYXRhLCB7IGtleToga2V5LCBhY3R1YWw6IGFjdHVhbCwgcHJldmlvdXM6IHByZXZpb3VzLCB0eXBlOiAnZGVjcmVhc2VkJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBlbXB0aWVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIF9hID0gZ2V0SXRlcmFibGVzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXk6IGtleSB9KSwgbGVmdCA9IF9hWzBdLCByaWdodCA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuICEhbGVmdC5sZW5ndGggJiYgIXJpZ2h0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBmaWxsZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBnZXRJdGVyYWJsZXMocHJldmlvdXNEYXRhLCBkYXRhLCB7IGtleToga2V5IH0pLCBsZWZ0ID0gX2FbMF0sIHJpZ2h0ID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gIWxlZnQubGVuZ3RoICYmICEhcmlnaHQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYikge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGluY3JlYXNlZCA9IGZ1bmN0aW9uIChrZXksIGFjdHVhbCwgcHJldmlvdXMpIHtcbiAgICAgICAgaWYgKCFpcy5kZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVOdW1iZXJzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXk6IGtleSwgYWN0dWFsOiBhY3R1YWwsIHByZXZpb3VzOiBwcmV2aW91cywgdHlwZTogJ2luY3JlYXNlZCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVtb3ZlZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVZhbHVlcyhwcmV2aW91c0RhdGEsIGRhdGEsIHsga2V5OiBrZXksIHR5cGU6ICdyZW1vdmVkJywgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgYWRkZWQ6IGFkZGVkLCBjaGFuZ2VkOiBjaGFuZ2VkLCBjaGFuZ2VkRnJvbTogY2hhbmdlZEZyb20sIGNoYW5nZWRUbzogY2hhbmdlZFRvLCBkZWNyZWFzZWQ6IGRlY3JlYXNlZCwgZW1wdGllZDogZW1wdGllZCwgZmlsbGVkOiBmaWxsZWQsIGluY3JlYXNlZDogaW5jcmVhc2VkLCByZW1vdmVkOiByZW1vdmVkIH07XG59XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIGhhc1Byb3BzID0gZnVuY3Rpb24gKGpzeCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoanN4LCAncHJvcHMnKTtcbn07XG52YXIgcmVkdWNlSnN4VG9TdHJpbmcgPSBmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICByZXR1cm4gcHJldmlvdXMgKyBpbm5lclRleHQoY3VycmVudCk7XG59O1xudmFyIGlubmVyVGV4dCA9IGZ1bmN0aW9uIChqc3gpIHtcbiAgICBpZiAoanN4ID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBqc3ggPT09ICdib29sZWFuJyB8fFxuICAgICAgICB0eXBlb2YganN4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YganN4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4ganN4LnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YganN4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ganN4O1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc3gpKSB7XG4gICAgICAgIHJldHVybiBqc3gucmVkdWNlKHJlZHVjZUpzeFRvU3RyaW5nLCAnJyk7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcyhqc3gpICYmXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChqc3gucHJvcHMsICdjaGlsZHJlbicpKSB7XG4gICAgICAgIHJldHVybiBpbm5lclRleHQoanN4LnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcbmlubmVyVGV4dC5kZWZhdWx0ID0gaW5uZXJUZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBpbm5lclRleHQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwidmFyIEVfTk9TQ1JPTEwgPSBuZXcgRXJyb3IoJ0VsZW1lbnQgYWxyZWFkeSBhdCB0YXJnZXQgc2Nyb2xsIHBvc2l0aW9uJylcbnZhciBFX0NBTkNFTExFRCA9IG5ldyBFcnJvcignU2Nyb2xsIGNhbmNlbGxlZCcpXG52YXIgbWluID0gTWF0aC5taW5cbnZhciBtcyA9IERhdGUubm93XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsZWZ0OiBtYWtlKCdzY3JvbGxMZWZ0JyksXG4gIHRvcDogbWFrZSgnc2Nyb2xsVG9wJylcbn1cblxuZnVuY3Rpb24gbWFrZSAocHJvcCkge1xuICByZXR1cm4gZnVuY3Rpb24gc2Nyb2xsIChlbCwgdG8sIG9wdHMsIGNiKSB7XG4gICAgb3B0cyA9IG9wdHMgfHwge31cblxuICAgIGlmICh0eXBlb2Ygb3B0cyA9PSAnZnVuY3Rpb24nKSBjYiA9IG9wdHMsIG9wdHMgPSB7fVxuICAgIGlmICh0eXBlb2YgY2IgIT0gJ2Z1bmN0aW9uJykgY2IgPSBub29wXG5cbiAgICB2YXIgc3RhcnQgPSBtcygpXG4gICAgdmFyIGZyb20gPSBlbFtwcm9wXVxuICAgIHZhciBlYXNlID0gb3B0cy5lYXNlIHx8IGluT3V0U2luZVxuICAgIHZhciBkdXJhdGlvbiA9ICFpc05hTihvcHRzLmR1cmF0aW9uKSA/ICtvcHRzLmR1cmF0aW9uIDogMzUwXG4gICAgdmFyIGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICByZXR1cm4gZnJvbSA9PT0gdG8gP1xuICAgICAgY2IoRV9OT1NDUk9MTCwgZWxbcHJvcF0pIDpcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKSwgY2FuY2VsXG5cbiAgICBmdW5jdGlvbiBjYW5jZWwgKCkge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUgKHRpbWVzdGFtcCkge1xuICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuIGNiKEVfQ0FOQ0VMTEVELCBlbFtwcm9wXSlcblxuICAgICAgdmFyIG5vdyA9IG1zKClcbiAgICAgIHZhciB0aW1lID0gbWluKDEsICgobm93IC0gc3RhcnQpIC8gZHVyYXRpb24pKVxuICAgICAgdmFyIGVhc2VkID0gZWFzZSh0aW1lKVxuXG4gICAgICBlbFtwcm9wXSA9IChlYXNlZCAqICh0byAtIGZyb20pKSArIGZyb21cblxuICAgICAgdGltZSA8IDEgP1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSkgOlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNiKG51bGwsIGVsW3Byb3BdKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbk91dFNpbmUgKG4pIHtcbiAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5TY3JvbGxwYXJlbnQgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBpc1Njcm9sbGluZyhub2RlKSB7XG4gICAgdmFyIG92ZXJmbG93ID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIik7XG5cbiAgICByZXR1cm4gb3ZlcmZsb3cuaW5kZXhPZihcInNjcm9sbFwiKSA+IC0xIHx8IG92ZXJmbG93LmluZGV4T2YoXCJhdXRvXCIpID4gLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChpc1Njcm9sbGluZyhjdXJyZW50KSkge1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsUGFyZW50O1xufSkpOyIsImltcG9ydCB7IFJlYWN0LCBSZWFjdFJlZHV4LCB1dGlscywgaTE4biwgdHlwZSBJTVN0YXRlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBEYXRhU291cmNlSW5mbywgdHlwZSBVc2VEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgR3VpZGUsIHR5cGUgR3VpZGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvZ3VpZGUnXG5pbXBvcnQgeyB0eXBlIFN0ZXAsIHR5cGUgU3RlcHMsIEVWRU5UUywgdHlwZSBTdGVwT25DaGFuZ2VDYWxsQmFja1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbmNvbnN0IHN0ZXBzSnNvbiA9IHV0aWxzLnJlcGxhY2VJMThuUGxhY2Vob2xkZXJzSW5PYmplY3QocmVxdWlyZSgnLi9kcy1zZWxlY3Rpb24tc3RlcHMuanNvbicpLCBpMThuLmdldEludGwoKSwgZGVmYXVsdE1lc3NhZ2VzKVxuXG5pbnRlcmZhY2UgU3RhdGVUb1Byb3BzIHtcbiAgZGF0YVNvdXJjZXNJbmZvOiBJbW11dGFibGVPYmplY3Q8eyBbZHNJZDogc3RyaW5nXTogRGF0YVNvdXJjZUluZm8gfT5cbiAgd2lkZ2V0RHM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG59XG5cbmZ1bmN0aW9uIHVzZVByZXZpb3VzQXBwU3RhdGUgKHZhbHVlKTogYW55IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlXG4gIH0pXG4gIHJldHVybiByZWYuY3VycmVudFxufVxuXG5mdW5jdGlvbiBpc0RhdGFzb3VyY2VBZGRlZCAocHJldkRTSW5mbywgY3VycmVudERTSW5mbykge1xuICBpZiAoIXByZXZEU0luZm8gfHwgIWN1cnJlbnREU0luZm8pIHJldHVybiBmYWxzZVxuICBjb25zdCBwcmV2RGF0YXNvdXJjZUxlbmd0aDogbnVtYmVyID0gT2JqZWN0LmtleXMocHJldkRTSW5mbyA/PyB7fSkubGVuZ3RoXG4gIGNvbnN0IGN1cnJlbnREYXRhc291cmNlTGVuZ3RoOiBudW1iZXIgPSBPYmplY3Qua2V5cyhjdXJyZW50RFNJbmZvID8/IHt9KS5sZW5ndGhcbiAgcmV0dXJuIGN1cnJlbnREYXRhc291cmNlTGVuZ3RoID4gcHJldkRhdGFzb3VyY2VMZW5ndGhcbn1cblxuY29uc3QgX0RhdGFTb3VyY2VTZWxlY3Rpb25HdWlkZSA9IChwcm9wczogR3VpZGVQcm9wcyAmIFN0YXRlVG9Qcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGFTb3VyY2VzSW5mbywgd2lkZ2V0RHMsIHdpZGdldEpzb24gfSA9IHByb3BzXG4gIGNvbnN0IFtydW4sIHNldFJ1bl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0ZXBJbmRleCwgc2V0U3RlcEluZGV4XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb25kaXRpb25hbFN0ZXBJbmRleGVzLCBzZXRDb25kaXRpb25hbFN0ZXBJbmRleGVzXSA9IHVzZVN0YXRlKHsgMDogMCwgMjogMCB9KVxuICBjb25zdCBwcmV2RGF0YVNvdXJjZXNJbmZvID0gdXNlUHJldmlvdXNBcHBTdGF0ZShkYXRhU291cmNlc0luZm8pXG4gIGNvbnN0IGlzRHNBZGRlZCA9IGlzRGF0YXNvdXJjZUFkZGVkKHByZXZEYXRhU291cmNlc0luZm8sIGRhdGFTb3VyY2VzSW5mbylcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBzdGVwOiBTdGVwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YVNvdXJjZXNJbmZvKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0U3RlcEluZGV4KDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdGVwSW5kZXgoMilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICBzZXRSdW4oZmFsc2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0ZXBJbmRleChpbmRleCArIDEpXG4gICAgfVxuICAgIHByb3BzPy5vbkFjdGlvbkNsaWNrPy4oZSwgc3RlcCwgaW5kZXgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZGF0YTogU3RlcE9uQ2hhbmdlQ2FsbEJhY2tQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIGV2ZW50IH0gPSBkYXRhXG4gICAgaWYgKGluZGV4ID09PSAyICYmIGV2ZW50ID09PSBFVkVOVFMuVE9PTFRJUCkge1xuICAgICAgc2V0RGlzYWJsZWQodHJ1ZSlcbiAgICB9XG4gICAgcHJvcHM/Lm9uU3RlcENoYW5nZShkYXRhKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25kaXRpb25hbCBzdGVwcyBmb3IgbWFwIHdpZGdldFxuICAgIGlmIChwcm9wcy5zdGVwSW5kZXggPT09IDAgJiYgd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/Lm5hbWUgPT09ICdhcmNnaXMtbWFwJykge1xuICAgICAgc2V0Q29uZGl0aW9uYWxTdGVwSW5kZXhlcyh7IDA6IDEsIDI6IDEgfSlcbiAgICB9XG4gIH0sIFt3aWRnZXRKc29uLCBwcm9wcy5zdGVwSW5kZXhdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UnVuKHByb3BzLnJ1bilcbiAgfSwgW3Byb3BzLnJ1bl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGVwSW5kZXgocHJvcHMuc3RlcEluZGV4KVxuICB9LCBbcHJvcHMuc3RlcEluZGV4XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGRldGVjdCBkYXRhc291cmNlIHNlbGVjdGlvbiBvbiB3aWRnZXRcbiAgICBpZiAocnVuICYmIHdpZGdldERzKSB7XG4gICAgICBzZXREaXNhYmxlZCghd2lkZ2V0RHMubGVuZ3RoKVxuICAgIH1cbiAgICAvLyBkZXRlY3QgYWRkaW5nIGRhdGFzb3VyY2VcbiAgICBpZiAoIXJ1biAmJiBpc0RzQWRkZWQpIHtcbiAgICAgIHNldFN0ZXBJbmRleCgyKVxuICAgICAgc2V0UnVuKHRydWUpXG4gICAgfVxuICB9LCBbd2lkZ2V0RHMsIGlzRHNBZGRlZCwgcnVuXSlcblxuICByZXR1cm4gKFxuICAgIDxHdWlkZVxuICAgICAgey4uLnByb3BzfVxuICAgICAgcnVuPXtydW59XG4gICAgICBzdGVwSW5kZXg9e3N0ZXBJbmRleH1cbiAgICAgIHN0ZXBzPXtzdGVwc0pzb24uc3RlcHMgYXMgU3RlcHN9XG4gICAgICBjb25kaXRpb25hbFN0ZXBJbmRleGVzPXtjb25kaXRpb25hbFN0ZXBJbmRleGVzfVxuICAgICAgb25BY3Rpb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBvblN0ZXBDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGlzSW5qZWN0ZWRcbiAgICAvPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSwgb3duUHJvcHM6IEd1aWRlUHJvcHMpOiBTdGF0ZVRvUHJvcHMgPT4ge1xuICBjb25zdCB3aWRnZXRJZCA9IG93blByb3BzPy53aWRnZXRKc29uPy5pZFxuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2VzSW5mbzogc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXI/LmRhdGFTb3VyY2VzSW5mbyxcbiAgICB3aWRnZXREczogc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZz8ud2lkZ2V0c1t3aWRnZXRJZF0/LnVzZURhdGFTb3VyY2VzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhdGFTb3VyY2VTZWxlY3Rpb25HdWlkZSA9IFJlYWN0UmVkdXguY29ubmVjdDxTdGF0ZVRvUHJvcHMsIHVua25vd24sIEd1aWRlUHJvcHM+KG1hcFN0YXRlVG9Qcm9wcykoX0RhdGFTb3VyY2VTZWxlY3Rpb25HdWlkZSlcbiIsImltcG9ydCB7IFJlYWN0LCBSZWFjdFJlZHV4LCBpMThuLCB0eXBlIElNU3RhdGUsIHR5cGUgSU1BcHBDb25maWcsIHR5cGUgSU1TZWxlY3Rpb24sIExheW91dEl0ZW1UeXBlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgR3VpZGUsIHR5cGUgR3VpZGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvZ3VpZGUnXG5pbXBvcnQgeyBFVkVOVFMsIHR5cGUgU3RlcE9uQ2hhbmdlQ2FsbEJhY2tQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgc2VhcmNoVXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXG5pbXBvcnQgeyBidWlsZGVyQXBwU3luYywgZ2V0QXBwQ29uZmlnQWN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSA9IFJlYWN0XG5cbmludGVyZmFjZSBTdGF0ZVRvUHJvcHMge1xuICBhcHBDb25maWc6IElNQXBwQ29uZmlnXG4gIHdpZGdldFNlbGVjdGlvbjogSU1TZWxlY3Rpb25cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlIChpZDogc3RyaW5nLCB3aWRnZXROYW1lOiBzdHJpbmcgPSAnJykge1xuICByZXR1cm4gaTE4bi5nZXRJbnRsKCkuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSwgeyB3aWRnZXROYW1lIH0pXG59XG5cbmV4cG9ydCBjb25zdCBfSW5zZXJ0V2lkZ2V0R3VpZGUgPSAocHJvcHM6IEd1aWRlUHJvcHMgJiBTdGF0ZVRvUHJvcHMpID0+IHtcbiAgY29uc3QgeyB3aWRnZXROYW1lLCBhcHBDb25maWcsIHdpZGdldFNlbGVjdGlvbiB9ID0gcHJvcHNcbiAgY29uc3QgW3J1biwgc2V0UnVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RlcEluZGV4LCBzZXRTdGVwSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2Ryb3BEb25lLCBzZXREcm9wRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZHJhZ1N0YXJ0TGlzdGVuZXIgPSB1c2VSZWYobnVsbCk7IGNvbnN0IGRyYWdFbmRMaXN0ZW5lciA9IHVzZVJlZihudWxsKVxuICBjb25zdCBzdGVwcyA9IHVzZU1lbW8oKCkgPT4gW3tcbiAgICB0aXRsZTogdHJhbnNsYXRlKCdpbnNlcnRXaWRnZXRTdGVwMVRpdGxlJyksXG4gICAgY29udGVudDoge1xuICAgICAgaW1hZ2U6IHtcbiAgICAgICAgc3JjOiAnamltdS11aS9iYXNpYy9ndWlkZS1hc3NldHMvSW5zZXJ0LXdpZGdldC5naWYnLFxuICAgICAgICBhbHQ6IHRyYW5zbGF0ZSgnaW5zZXJ0V2lkZ2V0U3RlcDFUaXRsZScpLFxuICAgICAgICBib3JkZXI6IHRydWUsXG4gICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgIGhlaWdodDogMjIwLFxuICAgICAgICBhdXRvRmxpcDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRleHQ6IHRyYW5zbGF0ZSgnaW5zZXJ0V2lkZ2V0U3RlcDFDb250ZW50JylcbiAgICB9LFxuICAgIHBsYWNlbWVudDogJ2F1dG8nLFxuICAgIHRhcmdldDogYFtkYXRhLXNlY3Rpb25pZD0nb3B0cy1zZWN0aW9uJ10gLndpZGdldC1jYXJkLWl0ZW1bZGF0YS13aWRnZXQtbmFtZT0nJHt3aWRnZXROYW1lfSddYCxcbiAgICBzcG90bGlnaHRDbGlja3M6IHRydWUsXG4gICAgcmVxdWlyZWRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdjdXN0b20nXG4gICAgfVxuICB9XSwgW3dpZGdldE5hbWVdKVxuXG4gIGNvbnN0IGFkZERuREV2ZW50SGFuZGxlcnMgPSAodGFyZ2V0RWxtOiBFbGVtZW50LCB0YXJnZXRTZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgZHJhZ1N0YXJ0TGlzdGVuZXIuY3VycmVudCA9IGUgPT4ge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZSBkcmFnZ2luZyBoYXBwZW5zIG9uIHRoZSByaWdodCBlbGVtZW50OlxuICAgICAgaWYgKGUudGFyZ2V0Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKSA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgc2V0UnVuKGZhbHNlKVxuICAgICAgICB0YXJnZXRFbG0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmRMaXN0ZW5lci5jdXJyZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlRG5ERXZlbnRIYW5kbGVycygpXG4gICAgICB9XG4gICAgfVxuICAgIGRyYWdFbmRMaXN0ZW5lci5jdXJyZW50ID0gZSA9PiB7XG4gICAgICBpZiAoZT8uZGF0YVRyYW5zZmVyPy5kcm9wRWZmZWN0ID09PSAnbm9uZScpIHsgLy8gbm90IGRyb3BwZWRcbiAgICAgICAgc2V0U3RlcEluZGV4KDApXG4gICAgICAgIHNldFJ1bih0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RHJvcERvbmUodHJ1ZSlcbiAgICAgIH1cbiAgICAgIHJlbW92ZURuREV2ZW50SGFuZGxlcnMoKVxuICAgIH1cbiAgICB0YXJnZXRFbG0gJiYgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRMaXN0ZW5lci5jdXJyZW50KVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlRG5ERXZlbnRIYW5kbGVycyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydExpc3RlbmVyLmN1cnJlbnQpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZExpc3RlbmVyLmN1cnJlbnQpXG4gIH1cblxuICBjb25zdCBvblN0ZXBDaGFuZ2UgPSAoZGF0YTogU3RlcE9uQ2hhbmdlQ2FsbEJhY2tQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIGV2ZW50LCBzdGVwIH0gPSBkYXRhXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB1dGlscy5nZXRUYXJnZXRTZWxlY3RvcihzdGVwKVxuICAgIGNvbnN0IHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG5cbiAgICBpZiAoZXZlbnQgPT09IEVWRU5UUy5UT1VSX1NUQVJUKSB7XG4gICAgICAvLyBoYXJkIGNvZGVkIHRvIGdldCB0aGUgcGFyZW50IGFuZCBzY3JvbGwgdGhlIHRhcmdldCB3aWRnZXQgY2FyZCB0byB2aWV3OlxuICAgICAgY29uc3QgaW5zZXJ0Q29udGFpbmVyRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldC1idWlsZGVyLWhlYWRlci1pbnNlcnQtZWxlbWVudHMgLnRhYi1jb250ZW50JylcbiAgICAgIGNvbnN0IHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RlcD8udGFyZ2V0KVxuICAgICAgaWYgKGluc2VydENvbnRhaW5lckVsbSAmJiB0YXJnZXRFbG0pIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGFyZ2V0RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGluc2VydENvbnRhaW5lckVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgaW5zZXJ0Q29udGFpbmVyRWxtPy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsVG9wID4gaW5zZXJ0Q29udGFpbmVyRWxtLmNsaWVudEhlaWdodCA/IHNjcm9sbFRvcCA6IHNjcm9sbFRvcCA+IDAgPyB1bmRlZmluZWQgOiAwIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbmRleCA9PT0gMCAmJiBldmVudCA9PT0gRVZFTlRTLlRPT0xUSVApIHtcbiAgICAgIGJ1aWxkZXJBcHBTeW5jLnB1Ymxpc2hDaGFuZ2VTZWxlY3Rpb25Ub0FwcChudWxsKSAvLyByZW1vdmUgd2lkZ2V0IHNlbGVjdGlvbiB0byByZXNldCBzZXR0aW5nIHBhbmVsXG4gICAgICBnZXRBcHBDb25maWdBY3Rpb24oKS5zZXRMb2NrTGF5b3V0KGZhbHNlKS5leGVjKCkgLy8gdW5sb2NrIGxheW91dFxuICAgICAgYWRkRG5ERXZlbnRIYW5kbGVycyh0YXJnZXRFbG0sIHRhcmdldFNlbGVjdG9yKVxuICAgIH1cblxuICAgIHByb3BzPy5vblN0ZXBDaGFuZ2UoZGF0YSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UnVuKHByb3BzLnJ1bilcbiAgfSwgW3Byb3BzLnJ1bl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGVwSW5kZXgocHJvcHMuc3RlcEluZGV4KVxuICB9LCBbcHJvcHMuc3RlcEluZGV4XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcnVuKSB7XG4gICAgICAvLyBkZXRlY3QgYWRkaW5nIHdpZGdldFxuICAgICAgY29uc3QgbGF5b3V0SXRlbSA9IHNlYXJjaFV0aWxzLmZpbmRMYXlvdXRJdGVtKGFwcENvbmZpZywgd2lkZ2V0U2VsZWN0aW9uKVxuICAgICAgbGV0IHdpZGdldFxuICAgICAgaWYgKGxheW91dEl0ZW0gJiYgbGF5b3V0SXRlbS50eXBlID09PSBMYXlvdXRJdGVtVHlwZS5XaWRnZXQpIHtcbiAgICAgICAgaWYgKGxheW91dEl0ZW0ud2lkZ2V0SWQpIHtcbiAgICAgICAgICB3aWRnZXQgPSBhcHBDb25maWc/LndpZGdldHNbbGF5b3V0SXRlbS53aWRnZXRJZF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJvcERvbmUgJiYgd2lkZ2V0Py5tYW5pZmVzdC5uYW1lID09PSB3aWRnZXROYW1lKSB7XG4gICAgICAgIHNldFN0ZXBJbmRleCgxKVxuICAgICAgICBzZXRSdW4odHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt3aWRnZXROYW1lLCBydW4sIGRyb3BEb25lLCBhcHBDb25maWcsIHdpZGdldFNlbGVjdGlvbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8R3VpZGVcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJ1bj17cnVufVxuICAgICAgc3RlcEluZGV4PXtzdGVwSW5kZXh9XG4gICAgICBzdGVwcz17c3RlcHMgYXMgYW55fVxuICAgICAgb25TdGVwQ2hhbmdlPXtvblN0ZXBDaGFuZ2V9XG4gICAgICBpc0luamVjdGVkXG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElNU3RhdGUpOiBTdGF0ZVRvUHJvcHMgPT4ge1xuICByZXR1cm4ge1xuICAgIGFwcENvbmZpZzogc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyxcbiAgICB3aWRnZXRTZWxlY3Rpb246IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBSdW50aW1lSW5mbz8uc2VsZWN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEluc2VydFdpZGdldEd1aWRlID0gUmVhY3RSZWR1eC5jb25uZWN0PFN0YXRlVG9Qcm9wcywgdW5rbm93biwgR3VpZGVQcm9wcz4obWFwU3RhdGVUb1Byb3BzKShfSW5zZXJ0V2lkZ2V0R3VpZGUpXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBSZWFjdFJlZHV4LCBqc3gsIGppbXVIaXN0b3J5LCB1dGlscywgaTE4biwgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMsIFBhZ2VNb2RlLCB0eXBlIElNU3RhdGUsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFVybFBhcmFtZXRlcnMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgR3VpZGUsIHR5cGUgR3VpZGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvZ3VpZGUnXG5pbXBvcnQgeyB0eXBlIFN0ZXAsIHR5cGUgU3RlcHMsIHR5cGUgQ29uZGl0aW9uYWxTdGVwSW5kZXhlcywgRVZFTlRTIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5cbmNvbnN0IHN0ZXBzSnNvbiA9IHV0aWxzLnJlcGxhY2VJMThuUGxhY2Vob2xkZXJzSW5PYmplY3QocmVxdWlyZSgnLi9vbmJvYXJkaW5nLXN0ZXBzLmpzb24nKSwgaTE4bi5nZXRJbnRsKCksIGRlZmF1bHRNZXNzYWdlcylcblxuaW50ZXJmYWNlIFN0YXRlVG9Qcm9wcyB7XG4gIHF1ZXJ5T2JqZWN0OiBJbW11dGFibGVPYmplY3Q8VXJsUGFyYW1ldGVycz5cbiAgcGFnZU1vZGU6IFBhZ2VNb2RlXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHN0ZXBJbmRleDogbnVtYmVyXG4gIHN0ZXBzOiBTdGVwc1xuICBjb25kaXRpb25hbFN0ZXBJbmRleGVzOiBDb25kaXRpb25hbFN0ZXBJbmRleGVzXG4gIHJ1bjogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgX09uYm9hcmRpbmdHdWlkZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8R3VpZGVQcm9wcyAmIFN0YXRlVG9Qcm9wcywgU3RhdGU+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50U3RlcCA9IDBcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGVwSW5kZXg6IHByb3BzLnN0ZXBJbmRleCA/PyAwLFxuICAgICAgc3RlcHM6IHN0ZXBzSnNvbi5zdGVwcyA/PyBbXSxcbiAgICAgIGNvbmRpdGlvbmFsU3RlcEluZGV4ZXM6IHByb3BzLmNvbmRpdGlvbmFsU3RlcEluZGV4ZXMgPz8ge30sXG4gICAgICBydW46IHByb3BzLnJ1biA/PyB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEd1aWRlUHJvcHMgJiBTdGF0ZVRvUHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzPy5ydW4gIT09IHRoaXMucHJvcHMucnVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcnVuOiB0aGlzLnByb3BzLnJ1blxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzPy5zdGVwSW5kZXggIT09IHRoaXMucHJvcHMuc3RlcEluZGV4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RlcEluZGV4OiB0aGlzLnByb3BzLnN0ZXBJbmRleFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZUNoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgbmV4dEluZGV4LCBldmVudCB9ID0gZGF0YVxuICAgIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgamltdUhpc3RvcnkuY2hhbmdlVmlldygnb3B0cy1zZWN0aW9uJywgJ2luc2VydCcpXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gNCkge1xuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcbiAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoJ3JpZ2h0LXNpZGViYXInLCAnY29sbGFwc2UnLCB0cnVlKVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG4gICAgICBqaW11SGlzdG9yeS5jaGFuZ2VWaWV3KCdvcHRzLXNlY3Rpb24nLCAncGFnZScpXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMTIpIHtcbiAgICAgIGppbXVIaXN0b3J5LmNoYW5nZVZpZXcoJ29wdHMtc2VjdGlvbicsICdkYXRhJylcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxMykge1xuICAgICAgamltdUhpc3RvcnkuY2hhbmdlVmlldygnb3B0cy1zZWN0aW9uJywgJ3RoZW1lJylcbiAgICB9XG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAyICYmIGV2ZW50ID09PSBFVkVOVFMuU1RFUF9BRlRFUikge1xuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcbiAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoJ2xlZnQtc2lkZWJhcicsICdjb2xsYXBzZScsIHRydWUpXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChuZXh0SW5kZXggPT09IDcgJiYgZXZlbnQgPT09IEVWRU5UUy5TVEVQX0FGVEVSKSB7XG4gICAgICBjb25zdCBwYWdlTW9kZSA9IHRoaXMucHJvcHM/LnBhZ2VNb2RlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29uZGl0aW9uYWxTdGVwSW5kZXhlczoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY29uZGl0aW9uYWxTdGVwSW5kZXhlcyxcbiAgICAgICAgICA3OiBwYWdlTW9kZSA9PT0gUGFnZU1vZGUuQXV0b1Njcm9sbCA/IDEgOiAwXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdGhpcy5jdXJyZW50U3RlcCA9PT0gaW5kZXhcbiAgICB0aGlzLnByb3BzPy5vblN0ZXBDaGFuZ2U/LihkYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVDbGljayA9IChlLCBzdGVwOiBTdGVwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGVwSW5kZXg6IGluZGV4ICsgMVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3RlcEluZGV4LCBzdGVwcywgcnVuLCBjb25kaXRpb25hbFN0ZXBJbmRleGVzIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxHdWlkZVxuICAgICAgICBydW49e3J1bn1cbiAgICAgICAgc3RlcEluZGV4PXtzdGVwSW5kZXh9XG4gICAgICAgIHN0ZXBzPXtzdGVwcyBhcyBTdGVwW119XG4gICAgICAgIGNvbmRpdGlvbmFsU3RlcEluZGV4ZXM9e2NvbmRpdGlvbmFsU3RlcEluZGV4ZXN9XG4gICAgICAgIG9uU3RlcENoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIG9uQWN0aW9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElNU3RhdGUpOiBTdGF0ZVRvUHJvcHMgPT4ge1xuICBjb25zdCBjdXJyZW50UGFnZUlkID0gc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcFJ1bnRpbWVJbmZvPy5jdXJyZW50UGFnZUlkXG4gIHJldHVybiB7XG4gICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0LFxuICAgIHBhZ2VNb2RlOiBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnPy5wYWdlcz8uW2N1cnJlbnRQYWdlSWRdPy5tb2RlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE9uYm9hcmRpbmdHdWlkZSA9IFJlYWN0UmVkdXguY29ubmVjdDxTdGF0ZVRvUHJvcHMsIHVua25vd24sIEd1aWRlUHJvcHM+KG1hcFN0YXRlVG9Qcm9wcykoX09uYm9hcmRpbmdHdWlkZSlcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IEpveXJpZGUsIHsgQUNUSU9OUywgdHlwZSBDYWxsQmFja1Byb3BzLCBFVkVOVFMgfSBmcm9tICdyZWFjdC1qb3lyaWRlJ1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY2xhc3NOYW1lcywgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUsIHR5cGUgV2lkZ2V0SnNvbiwgbG9kYXNoIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFN0ZXBEaWFsb2cgfSBmcm9tICcuL3N0ZXAtZGlhbG9nJ1xuaW1wb3J0IHsgdXNlR2xvYmFsU3R5bGUgfSBmcm9tICcuL3N0ZXAtZGlhbG9nL3N0eWxlJ1xuaW1wb3J0IHsgdHlwZSBTdGVwLCB0eXBlIENvbmRpdGlvbmFsU3RlcCwgdHlwZSBTdGVwcywgU1RBVFVTLCB0eXBlIENvbmRpdGlvbmFsU3RlcEluZGV4ZXMsIHR5cGUgU3RlcE9uQ2hhbmdlQ2FsbEJhY2tQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdqaW11LXRoZW1lJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbmNvbnN0IENPTlNUUyA9IHtcbiAgcmV0cnlJbnRlcnZhbDogMjAwLFxuICByZXRyeUZhaWxDb3VudDogMTAwMDAgLy8gMTAgc2Vjb25kc1xufVxuXG5jb25zdCBKT1lSSURFX1NUWUxFUyA9IHtcbiAgb3B0aW9uczoge1xuICAgIHpJbmRleDogMTAwMDBcbiAgfSxcbiAgc3BvdGxpZ2h0OiB7XG4gICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KSdcbiAgfVxufVxuXG5jb25zdCBpMThuTWVzc2FnZSA9IChpZDogc3RyaW5nLCBpbnRsOiBJbnRsU2hhcGUpID0+IHtcbiAgcmV0dXJuIGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWlkZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSBzdGVwcyBvZiB0aGUgZ3VpZGUuXG4gICAqL1xuICBzdGVwczogU3RlcHNcbiAgLyoqXG4gICAqIFNldHMgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHN0ZXAuXG4gICAqL1xuICBzdGVwSW5kZXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIFJ1bi9zdG9wIHRoZSBndWlkZS5cbiAgICovXG4gIHJ1bj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluZGV4KGVzKSBvZiB0aGUgYWN0aXZlIHN1YiBzdGVwIHdpdGhpbiBjb25kaXRpb25hbCBzdGVwcy5cbiAgICogVGhlIGRlZmF1bHQgaW5kZXggZm9yIGEgY29uZGl0aW9uYWwgc3RlcCBpcyAwLlxuICAgKi9cbiAgY29uZGl0aW9uYWxTdGVwSW5kZXhlcz86IENvbmRpdGlvbmFsU3RlcEluZGV4ZXNcbiAgLyoqXG4gICAqIENhbGxiYWNrIHdoZW4gdGhlIHN0ZXAgc3RhdHVzIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgb25TdGVwQ2hhbmdlPzogKGRhdGE6IFN0ZXBPbkNoYW5nZUNhbGxCYWNrUHJvcHMpID0+IHZvaWRcbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHJlcXVpcmVkIGFjdGlvbiBpbiBhIHN0ZXAgaXMgdHJpZ2dlcmVkLlxuICAgKi9cbiAgb25BY3Rpb25DbGljaz86IChlLCBzdGVwOiBTdGVwLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lKHMpIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHdpZGdldCB0aGF0IGlzIGJlaW5nIHRhcmdldGVkIGF0IGJ5IHRoZSBndWlkZS5cbiAgICovXG4gIHdpZGdldE5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBKc29uIG9iamVjdCBvZiB0aGUgd2lkZ2V0IHRoYXQgaXMgYmVpbmcgdGFyZ2V0ZWQgYXQgYnkgdGhlIGd1aWRlLlxuICAgKi9cbiAgd2lkZ2V0SnNvbj86IFdpZGdldEpzb25cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBndWlkZSBpcyBpbmplY3RlZCBpbiBhbm90aGVyIGd1aWRlIGFzIGEgc3RlcC5cbiAgICovXG4gIGlzSW5qZWN0ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ3VpZGUgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsPzogSW50bFNoYXBlXG59XG5cbmNvbnN0IF9HdWlkZSA9IChwcm9wczogR3VpZGVQcm9wcyAmIEV4dHJhUHJvcHMpID0+IHtcbiAgY29uc3QgX2N1cnJlbnRTdGVwID0gUmVhY3QudXNlUmVmKG51bGwpXG4gIGNvbnN0IHsgZGlzYWJsZWQsIGlzSW5qZWN0ZWQsIGludGwgfSA9IHByb3BzXG4gIGNvbnN0IFtzdGVwcywgc2V0U3RlcHNdID0gdXNlU3RhdGU8U3RlcHM+KFtdKVxuICBjb25zdCBbcnVuLCBzZXRSdW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtzdGVwSW5kZXgsIHNldFN0ZXBJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFtjb25kaXRpb25hbFN0ZXBJbmRleGVzLCBzZXRDb25kaXRpb25hbFN0ZXBJbmRleGVzXSA9IHVzZVN0YXRlPENvbmRpdGlvbmFsU3RlcEluZGV4ZXM+KHt9KVxuICBjb25zdCBbbWFza1N0eWxlcywgc2V0TWFza1N0eWxlc10gPSB1c2VTdGF0ZTxSZWFjdC5DU1NQcm9wZXJ0aWVzPih7fSlcbiAgY29uc3QgbW9ja01hc2sgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KClcbiAgY29uc3QgX3JldHJ5VGltZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7IGNvbnN0IF9yZXRyeVRpbWVyQ291bnQgPSBSZWFjdC51c2VSZWYoMClcbiAgbGV0IGNsaWNraGFuZGxlclxuXG4gIGNvbnN0IGdldFN0ZXBEYXRhID0gKGluZGV4OiBudW1iZXIpOiBTdGVwID0+IHtcbiAgICBjb25zdCB0ZW1wU3RlcHMgPSBwcm9wcy5zdGVwc1xuICAgIGlmICghdGVtcFN0ZXBzW2luZGV4XSkgcmV0dXJuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0ZW1wU3RlcHNbaW5kZXhdLCAnc3RlcHMnKSkge1xuICAgICAgcmV0dXJuICh0ZW1wU3RlcHNbaW5kZXhdIGFzIENvbmRpdGlvbmFsU3RlcCkuc3RlcHNbY29uZGl0aW9uYWxTdGVwSW5kZXhlcz8uW2luZGV4XSA/PyAwXVxuICAgIH1cbiAgICByZXR1cm4gdGVtcFN0ZXBzW2luZGV4XSBhcyBTdGVwXG4gIH1cblxuICBjb25zdCByZXRyeVN0ZXAgPSAodGFyZ2V0SW5kZXg6IG51bWJlciwgdGFyZ2V0U2VsZWN0b3I6IHN0cmluZywgaXNJbkNhbnZhcz86IGJvb2xlYW4pID0+IHtcbiAgICBsZXQgbmV4dFRhcmdldCA9IG51bGxcbiAgICBzZXRSdW4oZmFsc2UpXG4gICAgaWYgKGlzSW5DYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWVbbmFtZT1cIl9hcHBXaW5kb3dcIl0nKVxuICAgICAgY29uc3QgaW5DYW52YXNUYXJnZXRTZWxlY3RvciA9IHRhcmdldFNlbGVjdG9yXG4gICAgICBuZXh0VGFyZ2V0ID0gY2FudmFzSWZyYW1lPy5jb250ZW50RG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoaW5DYW52YXNUYXJnZXRTZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dFRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpXG4gICAgfVxuXG4gICAgaWYgKG5leHRUYXJnZXQpIHtcbiAgICAgIF9yZXRyeVRpbWVyQ291bnQuY3VycmVudCA9IDBcbiAgICAgIGNsZWFyVGltZW91dChfcmV0cnlUaW1lci5jdXJyZW50KVxuICAgICAgY29uc3QgZGVsYXlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFN0ZXBJbmRleCh0YXJnZXRJbmRleClcbiAgICAgICAgc2V0UnVuKHRydWUpXG4gICAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVvdXQpXG4gICAgICB9LCAyMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZXRyeVRpbWVyQ291bnQuY3VycmVudCArPSBDT05TVFMucmV0cnlJbnRlcnZhbFxuICAgICAgaWYgKF9yZXRyeVRpbWVyQ291bnQuY3VycmVudCA+PSBDT05TVFMucmV0cnlGYWlsQ291bnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ0d1aWRlIFRvdXIgY29tcG9uZW50OiBDb3VsZCBub3QgYmUgYWJsZSB0byBmaW5kIHRoZSBuZXh0IHN0ZXAgdG8gZGlzcGxheSBmb3IgdGhlIGd1aWRlLicpKVxuICAgICAgICBfcmV0cnlUaW1lckNvdW50LmN1cnJlbnQgPSAwXG4gICAgICAgIGNsZWFyVGltZW91dChfcmV0cnlUaW1lci5jdXJyZW50KVxuICAgICAgICBzZXRSdW4oZmFsc2UpXG4gICAgICAgIHByb3BzPy5vblN0ZXBDaGFuZ2U/Lih7IHN0YXR1czogU1RBVFVTLkVSUk9SLCBpbmRleDogdGFyZ2V0SW5kZXgsIG5leHRJbmRleDogbnVsbCwgZXZlbnQ6IEVWRU5UUy5UQVJHRVRfTk9UX0ZPVU5ELCBpc0luamVjdGVkIH0pXG4gICAgICAgIC8vIFRPRE86IGFkZCB3YXJuaW5nIFVJXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmV0cnlUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmV0cnlTdGVwKHRhcmdldEluZGV4LCB0YXJnZXRTZWxlY3RvciwgaXNJbkNhbnZhcylcbiAgICAgICAgfSwgQ09OU1RTLnJldHJ5SW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSm95cmlkZUNhbGxiYWNrID0gKGRhdGE6IENhbGxCYWNrUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGlvbiwgaW5kZXgsIHR5cGUsIHN0YXR1czogc3RlcFN0YXR1cyB9ID0gZGF0YVxuICAgIGNvbnN0IG5leHRTdGVwSW5kZXggPSBpbmRleCArIChhY3Rpb24gPT09IEFDVElPTlMuUFJFViA/IC0xIDogMSlcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IGdldFN0ZXBEYXRhKGluZGV4KTsgY29uc3QgbmV4dFN0ZXAgPSBnZXRTdGVwRGF0YShuZXh0U3RlcEluZGV4KVxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdXRpbHMuZ2V0VGFyZ2V0U2VsZWN0b3IoY3VycmVudFN0ZXAsIHByb3BzLndpZGdldEpzb24pXG4gICAgY29uc3QgdGFyZ2V0RWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3RvcilcbiAgICBfY3VycmVudFN0ZXAuY3VycmVudCA9IGN1cnJlbnRTdGVwXG5cbiAgICAvLyBjaGVjayBpZiBmaXJzdCBzdGVwIGlzIGFuIGluamVjdGVkIGd1aWRlXG4gICAgaWYgKHR5cGUgPT09IEVWRU5UUy5UT1VSX1NUQVJUICYmIHV0aWxzLmlzSW5qZWN0ZWRTdGVwKGN1cnJlbnRTdGVwKSkge1xuICAgICAgc2V0UnVuKGZhbHNlKVxuICAgICAgcHJvcHM/Lm9uU3RlcENoYW5nZT8uKHsgc3RhdHVzOiBTVEFUVVMuSU5KRUNURUQsIGluZGV4OiBzdGVwSW5kZXgsIG5leHRJbmRleDogc3RlcEluZGV4ICsgMSwgaXNJbmplY3RlZDogdHJ1ZSwgc3RlcDogY3VycmVudFN0ZXAgfSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRVZFTlRTLlNURVBfQUZURVIgJiYgdXRpbHMuaXNJbmplY3RlZFN0ZXAobmV4dFN0ZXApKSB7XG4gICAgICAvLyBwcmVwYXJlIGZvciB0aGUgdXAtY29tbWluZyBpbmplY3RlZCBndWlkZSAoanVtcCBvdXQgZnJvbSBjdXJyZW50IGd1aWRlKSBvbmUgc3RlcCBiZWZvcmVcbiAgICAgIHNldFJ1bihmYWxzZSlcbiAgICAgIHByb3BzPy5vblN0ZXBDaGFuZ2U/Lih7IHN0YXR1czogU1RBVFVTLklOSkVDVEVELCBpbmRleDogbmV4dFN0ZXBJbmRleCwgZXZlbnQ6IHR5cGUsIGlzSW5qZWN0ZWQsIHN0ZXA6IG5leHRTdGVwIH0pXG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IEVWRU5UUy5TVEVQX0FGVEVSICYmIHJ1biAmJiAhdXRpbHMuaXNJbmplY3RlZFN0ZXAoY3VycmVudFN0ZXApKSB7XG4gICAgICAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgZXhpc3RzIGluIHRoZSBkb20gdHJlZVxuICAgICAgaWYgKGN1cnJlbnRTdGVwLnRhcmdldEluQ2FudmFzKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRNYXNrU3R5bGVzID0gdXRpbHMuZ2V0TWFza1Bvc2l0aW9uQ1NTKGN1cnJlbnRTdGVwLCBwcm9wcy53aWRnZXRKc29uKVxuICAgICAgICAvLyByZXRyeSBzdGVwIGlmIHRoZSBpbi1jYW52YXMgdGFyZ2V0IGVsZW1lbnQgaXMgbnVsbFxuICAgICAgICBpZiAoIXVwZGF0ZWRNYXNrU3R5bGVzKSB7XG4gICAgICAgICAgcmV0cnlTdGVwKGluZGV4LCBjdXJyZW50U3RlcC50YXJnZXQsIHRydWUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2V0TWFza1N0eWxlcyh1cGRhdGVkTWFza1N0eWxlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHJ5IHN0ZXAgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIG51bGxcbiAgICAgICAgaWYgKCF0YXJnZXRFbG0pIHtcbiAgICAgICAgICByZXRyeVN0ZXAoaW5kZXgsIHRhcmdldFNlbGVjdG9yKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEVWRU5UUy5UT1VSX0VORDpcbiAgICAgICAgc2V0UnVuKGZhbHNlKVxuICAgICAgICBzZXRTdGVwSW5kZXgoMClcbiAgICAgICAgdGFyZ2V0RWxtPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNraGFuZGxlcilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRVZFTlRTLlNURVBfQUZURVI6XG4gICAgICAgIHNldFN0ZXBJbmRleChuZXh0U3RlcEluZGV4KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBFVkVOVFMuVEFSR0VUX05PVF9GT1VORDpcbiAgICAgICAgc2V0U3RlcEluZGV4KGluZGV4IC0gMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgRVZFTlRTLlRPT0xUSVA6XG4gICAgICAgIGlmIChjdXJyZW50U3RlcC5yZXF1aXJlZEFjdGlvbiAmJiBjdXJyZW50U3RlcC5yZXF1aXJlZEFjdGlvbi50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgdGFyZ2V0RWxtPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNraGFuZGxlcilcbiAgICAgICAgICBjbGlja2hhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQWN0aW9uQ2xpY2sgJiYgcHJvcHMub25BY3Rpb25DbGljayhlLCBjdXJyZW50U3RlcCwgaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldEVsbT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja2hhbmRsZXIpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBwcm9wcz8ub25TdGVwQ2hhbmdlPy4oeyBzdGF0dXM6IHN0ZXBTdGF0dXMsIGluZGV4OiBpbmRleCwgbmV4dEluZGV4OiBuZXh0U3RlcEluZGV4LCBldmVudDogdHlwZSwgaXNJbmplY3RlZCwgc3RlcDogY3VycmVudFN0ZXAgfSlcbiAgfVxuXG4gIGNvbnN0IGluaXRSZXNpemVXaGVuVGFyZ2V0SW5DYW52YXMgPSAoZSkgPT4ge1xuICAgIGlmIChfY3VycmVudFN0ZXAuY3VycmVudD8udGFyZ2V0SW5DYW52YXMpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRNYXNrU3R5bGVzID0gdXRpbHMuZ2V0TWFza1Bvc2l0aW9uQ1NTKF9jdXJyZW50U3RlcC5jdXJyZW50LCBwcm9wcy53aWRnZXRKc29uKVxuICAgICAgc2V0TWFza1N0eWxlcyh1cGRhdGVkTWFza1N0eWxlcylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlYm91bmNlSW5pdFJlc2l6ZVdoZW5UYXJnZXRJbkNhbnZhcyA9IGxvZGFzaC5kZWJvdW5jZShpbml0UmVzaXplV2hlblRhcmdldEluQ2FudmFzLCAxMDApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlSW5pdFJlc2l6ZVdoZW5UYXJnZXRJbkNhbnZhcywgdHJ1ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VJbml0UmVzaXplV2hlblRhcmdldEluQ2FudmFzKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VJbml0UmVzaXplV2hlblRhcmdldEluQ2FudmFzLCB0cnVlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlSW5pdFJlc2l6ZVdoZW5UYXJnZXRJbkNhbnZhcylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcEluZGV4KHByb3BzLnN0ZXBJbmRleClcbiAgfSwgW3Byb3BzLnN0ZXBJbmRleF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGVwcyhwcm9wcy5zdGVwcylcbiAgfSwgW3Byb3BzLnN0ZXBzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFJ1bihwcm9wcy5ydW4pXG4gIH0sIFtwcm9wcy5ydW5dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29uZGl0aW9uYWxTdGVwSW5kZXhlcyhwcm9wcy5jb25kaXRpb25hbFN0ZXBJbmRleGVzKVxuICB9LCBbcHJvcHMuY29uZGl0aW9uYWxTdGVwSW5kZXhlc10pXG5cbiAgY29uc3QgbWFwcGVkU3RlcHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gdXRpbHMubWFwU3RlcFByb3BzKHN0ZXBzLCBjb25kaXRpb25hbFN0ZXBJbmRleGVzKVxuICB9LCBbc3RlcHMsIGNvbmRpdGlvbmFsU3RlcEluZGV4ZXNdKVxuXG4gIGNvbnN0IE1FU1NBR0VTID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2s6IGkxOG5NZXNzYWdlKCdwcmV2aW91cycsIGludGwpLFxuICAgICAgY2xvc2U6IGkxOG5NZXNzYWdlKCdjbG9zZVRvdXInLCBpbnRsKSxcbiAgICAgIG5leHQ6IGkxOG5NZXNzYWdlKCduZXh0JywgaW50bCksXG4gICAgICBza2lwOiBpMThuTWVzc2FnZSgnc2tpcFRvdXInLCBpbnRsKSxcbiAgICAgIGxhc3Q6IGkxOG5NZXNzYWdlKGlzSW5qZWN0ZWQgPyAnbmV4dCcgOiAnZmluaXNoVG91cicsIGludGwpLFxuICAgICAgc3RhcnQ6IGkxOG5NZXNzYWdlKCdzdGFydFRvdXInLCBpbnRsKSxcbiAgICAgIG9wZW46IGkxOG5NZXNzYWdlKCdvcGVuVG91cicsIGludGwpLFxuICAgICAgYWN0aW9uUmVxdWlyZWQ6IGkxOG5NZXNzYWdlKCdhY3Rpb25SZXF1aXJlZCcsIGludGwpLFxuICAgICAgZXJyb3JDYW5ub3RGaW5kTmV4dFN0ZXA6IGkxOG5NZXNzYWdlKCdlcnJvckNhbm5vdEZpbmROZXh0U3RlcCcsIGludGwpXG4gICAgfVxuICB9LCBbaXNJbmplY3RlZCwgaW50bF0pXG5cbiAgY29uc3QgQ3VzdG9tRGlhbG9nID0gUmVhY3QubWVtbyhmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8U3RlcERpYWxvZyBkaXNhYmxlZD17ZGlzYWJsZWR9IGlzU3RlcEluamVjdGVkPXtpc0luamVjdGVkfSB7Li4ucHJvcHN9IC8+XG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgJ2ppbXUtZ3VpZGUnLFxuICAgIHByb3BzLmNsYXNzTmFtZVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7cnVuICYmIDxkaXYgYXJpYS1oaWRkZW49J3RydWUnIGRhdGEtY29tcG9uZW50LWlkPSdndWlkZS1tYXNrJyBzdHlsZT17bWFza1N0eWxlc30gcmVmPXttb2NrTWFza30gLz59XG4gICAgICA8Sm95cmlkZVxuICAgICAgICBydW49e3J1bn1cbiAgICAgICAgc3RlcEluZGV4PXtzdGVwSW5kZXh9XG4gICAgICAgIHN0ZXBzPXttYXBwZWRTdGVwc31cbiAgICAgICAgdG9vbHRpcENvbXBvbmVudD17Q3VzdG9tRGlhbG9nfVxuICAgICAgICBzdHlsZXM9e0pPWVJJREVfU1RZTEVTfVxuICAgICAgICBjYWxsYmFjaz17aGFuZGxlSm95cmlkZUNhbGxiYWNrfVxuICAgICAgICBjb250aW51b3VzXG4gICAgICAgIHNob3dTa2lwQnV0dG9uXG4gICAgICAgIHNob3dQcm9ncmVzcz17ZmFsc2V9XG4gICAgICAgIHNwb3RsaWdodFBhZGRpbmc9ezB9XG4gICAgICAgIGRpc2FibGVPdmVybGF5Q2xvc2VcbiAgICAgICAgZGlzYWJsZVNjcm9sbGluZ1xuICAgICAgICBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4XG4gICAgICAgIGhpZGVCYWNrQnV0dG9uXG4gICAgICAgIGxvY2FsZT17TUVTU0FHRVN9XG4gICAgICAvPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e3VzZUdsb2JhbFN0eWxlKCl9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IEd1aWRlID0gaW5qZWN0SW50bDxudWxsLCBHdWlkZVByb3BzICYgRXh0cmFQcm9wcz4oX0d1aWRlKVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIElNVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCB7IHR5cGUgVG9vbHRpcFJlbmRlclByb3BzIH0gZnJvbSAncmVhY3Qtam95cmlkZSdcbmltcG9ydCB7IHVzZVN0eWxlIH0gZnJvbSAnLi9zdHlsZSdcbmltcG9ydCB7IHR5cGUgTWFwcGVkU3RlcCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XG4gIHRoZW1lPzogSU1UaGVtZVZhcmlhYmxlc1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgaXNTdGVwSW5qZWN0ZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBfU3RlcERpYWxvZyA9IChwcm9wczogVG9vbHRpcFJlbmRlclByb3BzICYgRXh0cmFQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29udGludW91cyxcbiAgICBpbmRleCxcbiAgICBpc0xhc3RTdGVwLFxuICAgIGJhY2tQcm9wcyxcbiAgICBwcmltYXJ5UHJvcHMsXG4gICAgc2tpcFByb3BzLFxuICAgIHRvb2x0aXBQcm9wcyxcbiAgICB0aGVtZSxcbiAgICBkaXNhYmxlZCxcbiAgICBpc1N0ZXBJbmplY3RlZFxuICB9ID0gcHJvcHNcbiAgY29uc3Qgc3RlcCA9IHByb3BzLnN0ZXAgYXMgTWFwcGVkU3RlcFxuICBjb25zdCBNRVNTQUdFUyA9IHN0ZXAubG9jYWxlXG4gIGNvbnN0IGRpYWxvZ1dpZHRoID0gc3RlcC5zdHlsZXM/Lm9wdGlvbnM/LndpZHRoXG4gIGNvbnN0IG5leHRMYWJlbCA9IE1FU1NBR0VTW2NvbnRpbnVvdXMgPyBpc0xhc3RTdGVwID8gJ2xhc3QnIDogc3RlcC50eXBlID09PSAnc3BsYXNoJyA/ICdzdGFydCcgOiAnbmV4dCcgOiAnbmV4dCddXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3VpZGUtLWN1c3RvbS1tb2RhbCcgY3NzPXt1c2VTdHlsZSh7IHRoZW1lIH0pfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbW9kYWwtY29udGVudCAke3N0ZXAudHlwZSA/ICdndWlkZS0tc3BsYXNoJyA6ICcnfWB9IHN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6IGRpYWxvZ1dpZHRoID8/IHVuZGVmaW5lZFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keScgey4uLnRvb2x0aXBQcm9wc30+XG4gICAgICAgICAge3N0ZXAuY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshc3RlcC5oaWRlRm9vdGVyICYmIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1mb290ZXInPlxuICAgICAgICAgIHsoaXNTdGVwSW5qZWN0ZWQgfHwgIWlzTGFzdFN0ZXApICYmIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCdXR0b24gey4uLnNraXBQcm9wc30gY2xhc3NOYW1lPSdyb3VuZGVkLXBpbGwgdGV4dC10cnVuY2F0ZScgdHlwZT0ndGVydGlhcnknIHRpdGxlPXtNRVNTQUdFUy5za2lwIGFzIHN0cmluZ30gYXJpYS1sYWJlbD17TUVTU0FHRVMuc2tpcCBhcyBzdHJpbmd9PlxuICAgICAgICAgICAgICB7TUVTU0FHRVMuc2tpcH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWZvb3Rlci0tc3BhY2VyJyAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAgICAgIHtpbmRleCA+IDAgJiYgIXN0ZXAuaGlkZUJhY2tCdXR0b24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiB7Li4uYmFja1Byb3BzfSBjbGFzc05hbWU9J3JvdW5kZWQtcGlsbCB0ZXh0LXRydW5jYXRlJyB0eXBlPSdzZWNvbmRhcnknIHRpdGxlPXtNRVNTQUdFUy5iYWNrIGFzIHN0cmluZ30gYXJpYS1sYWJlbD17TUVTU0FHRVMuYmFjayBhcyBzdHJpbmd9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIHtNRVNTQUdFUy5iYWNrfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IXN0ZXAucmVxdWlyZWRBY3Rpb24gJiYgPEJ1dHRvblxuICAgICAgICAgICAgey4uLnByaW1hcnlQcm9wc30gYXV0b0ZvY3VzIGNsYXNzTmFtZT0ncm91bmRlZC1waWxsIHRleHQtdHJ1bmNhdGUnIHRpdGxlPXtuZXh0TGFiZWx9IGFyaWEtbGFiZWw9e25leHRMYWJlbH0gdHlwZT0ncHJpbWFyeScgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICBkaXNhYmxlZCB8fCBzdGVwLmRpc2FibGVOZXh0QnV0dG9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25leHRMYWJlbH1cbiAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBTdGVwRGlhbG9nID0gd2l0aFRoZW1lKF9TdGVwRGlhbG9nKVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNzcywgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCB0eXBlIFRoZW1lTW9kYWwsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IG1vZGFsU3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3N0eWxlcy9jb21wb25lbnRzL21vZGFsJ1xuaW1wb3J0IHsgYmlkaSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBERUZBVUxUX1dJRFRIID0gNDYwXG5jb25zdCBDT01QQUNUX1dJRFRIID0gMzYwXG5cbi8qXG4gKiBUaGUgdmFyaWFibGVzIHVzZWQgYnkgdGhlIGd1aWRlIGRpYWxvZyBjb21wb25lbnRcbiAqIGFyZSBzcGVjaWZpY2FsbHkgYXNzaWduZWQsIGFuZCB0aGV0IGFyZSBub3QgcGFydCBvZiB0aGUgdGhlbWUuXG4gKi9cbmNvbnN0IGd1aWRlVG91ckRpYWxvZ1ZhcnMgPSB7XG4gIGJnOiAnI2ZmZicsXG4gIHJhZGl1czogJzRweCcsXG4gIHNoYWRvdzogJzAgMCAyMHB4IDJweCByZ2JhKDAsMCwwLDAuMjApJyxcbiAgcG9pbnRlcjoge1xuICAgIGJnOiAnI2ZmZicsXG4gICAgYm9yZGVyQ29sb3I6ICcjNWY1ZmZmJ1xuICB9LFxuICBsaW5rOiB7XG4gICAgY29sb3I6ICcjNWY1ZmZmJyxcbiAgICBob3ZlckNvbG9yOiAnIzQ5NDlmZidcbiAgfSxcbiAgcHJpbWFyeUJ1dHRvbjoge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBiZzogJyM1ZjVmZmYnLFxuICAgICAgc2hhZG93OiAnMCAycHggMTJweCAwIHJnYmEoOTUsOTUsMjU1LDAuNDApJ1xuICAgIH0sXG4gICAgaG92ZXI6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBiZzogJyM0OTQ5ZmYnXG4gICAgfVxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb2xvcjogJyM2YTZhNmEnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjNmE2YTZhJ1xuICAgIH0sXG4gICAgaG92ZXI6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBiZzogJyM1ZjVmZmYnXG4gICAgfVxuICB9LFxuICB0ZXJ0aWFyeUJ1dHRvbjoge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbG9yOiAnI2E4YThhOCdcbiAgICB9LFxuICAgIGhvdmVyOiB7XG4gICAgICBjb2xvcjogJyM2YTZhNmEnXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxTdHlsZSA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAucmVhY3Qtam95cmlkZV9fb3ZlcmxheSB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLl9fZmxvYXRlciB7XG4gICAgICAgIGZpbHRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAuX19mbG9hdGVyX19hcnJvdyB7XG4gICAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy5wb2ludGVyLmJnfTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtndWlkZVRvdXJEaWFsb2dWYXJzLnBvaW50ZXIuYm9yZGVyQ29sb3J9O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJlt4LXBsYWNlbWVudF49XCJib3R0b21cIl0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLl9fZmxvYXRlcl9fYXJyb3cge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJlt4LXBsYWNlbWVudF49XCJyaWdodFwiXSB7XG4gICAgICAgICAgJHtiaWRpKCdwYWRkaW5nLWxlZnQnKX06IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAuX19mbG9hdGVyX19hcnJvdyB7XG4gICAgICAgICAgICAke2JpZGkoJ21hcmdpbi1sZWZ0Jyl9OiAtMTJweDtcbiAgICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICAgICR7YmlkaSgnbGVmdCcpfTogMDtcbiAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAke2JpZGkoJ2xlZnQnKX06IDI0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJlt4LXBsYWNlbWVudF49XCJsZWZ0XCJdIHtcbiAgICAgICAgICAke2JpZGkoJ3BhZGRpbmctcmlnaHQnKX06IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAuX19mbG9hdGVyX19hcnJvdyB7XG4gICAgICAgICAgICAke2JpZGkoJ21hcmdpbi1yaWdodCcpfTogLTEycHg7XG4gICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICR7YmlkaSgncmlnaHQnKX06IDI0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJlt4LXBsYWNlbWVudF49XCJ0b3BcIl0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLl9fZmxvYXRlcl9fYXJyb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH0sIFtdKVxufVxuXG5leHBvcnQgY29uc3QgdXNlU3R5bGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXMgPSBwcm9wcy50aGVtZVxuICBjb25zdCBtb2RhbFZhcnM6IEltbXV0YWJsZU9iamVjdDxUaGVtZU1vZGFsPiA9IHRoZW1lPy5jb21wb25lbnRzPy5tb2RhbFxuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG1pbi13aWR0aDogMzYwcHg7XG4gICAgICAke21vZGFsU3R5bGVzKHByb3BzKX1cbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMubGluay5jb2xvcn07XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMubGluay5ob3ZlckNvbG9yfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMuYmd9O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy5yYWRpdXN9O1xuICAgICAgICBtYXgtd2lkdGg6ICR7REVGQVVMVF9XSURUSH1weDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1vZGFsLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgzMCl9O1xuICAgICAgfVxuICAgICAgLm1vZGFsLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDMwKX07XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAubW9kYWwtZm9vdGVyLS1zcGFjZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1zZWNvbmRhcnksXG4gICAgICAgIC5idG4tdGVydGlhcnkge1xuICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmd1aWRlLS1jb250ZW50LWhvcml6b250YWwge1xuICAgICAgICA+IGRpdiArIGRpdiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ3VpZGUtLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZ3VpZGUtLWltZy13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAmLmJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlM2UzZTMgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5mbGlwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ndWlkZS0taW1nLWNlbnRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ndWlkZS0taW1nLWZpbGwge1xuICAgICAgICBtYXJnaW46IC0zMHB4IC0zMHB4ICR7bW9kYWxWYXJzLmlubmVyUGFkZGluZ307XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZ3VpZGUtLXRleHQtd3JhcHBlciB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMucHJpbWFyeUJ1dHRvbi5kZWZhdWx0LmNvbG9yfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtndWlkZVRvdXJEaWFsb2dWYXJzLnByaW1hcnlCdXR0b24uZGVmYXVsdC5iZ307XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMucHJpbWFyeUJ1dHRvbi5kZWZhdWx0LnNoYWRvd307XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMucHJpbWFyeUJ1dHRvbi5ob3Zlci5jb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtndWlkZVRvdXJEaWFsb2dWYXJzLnByaW1hcnlCdXR0b24uaG92ZXIuYmd9O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMuc2Vjb25kYXJ5QnV0dG9uLmRlZmF1bHQuY29sb3J9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy5zZWNvbmRhcnlCdXR0b24uZGVmYXVsdC5ib3JkZXJDb2xvcn07XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMuc2Vjb25kYXJ5QnV0dG9uLmhvdmVyLmNvbG9yfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1aWRlVG91ckRpYWxvZ1ZhcnMuc2Vjb25kYXJ5QnV0dG9uLmhvdmVyLmJnfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy5zZWNvbmRhcnlCdXR0b24uaG92ZXIuYmd9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnRuLXRlcnRpYXJ5IHtcbiAgICAgICAgY29sb3I6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy50ZXJ0aWFyeUJ1dHRvbi5kZWZhdWx0LmNvbG9yfTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7Z3VpZGVUb3VyRGlhbG9nVmFycy50ZXJ0aWFyeUJ1dHRvbi5ob3Zlci5jb2xvcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ndWlkZS0tc3BsYXNoIHtcbiAgICAgICAgLmd1aWRlLS10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAke0NPTVBBQ1RfV0lEVEh9cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmd1aWRlLS1jb250ZW50Om5vdCguZ3VpZGUtLWNvbnRlbnQtaG9yaXpvbnRhbCkge1xuICAgICAgICAgIC5ndWlkZS0taW1nLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfSwgW3Byb3BzLCBtb2RhbFZhcnNdKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvcmUvZ3VpZGUnXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL29uYm9hcmRpbmcvb25ib2FyZGluZy1ndWlkZSdcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vZHMtc2VsZWN0aW9uL2RzLXNlbGVjdGlvbi1ndWlkZSdcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vaW5zZXJ0LXdpZGdldC9pbnNlcnQtd2lkZ2V0LWd1aWRlJ1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcydcbiIsImltcG9ydCB7IHR5cGUgU3RlcCBhcyBKb3lSaWRlU3RlcCwgdHlwZSBQbGFjZW1lbnQsIHR5cGUgTG9jYWxlLCBTVEFUVVMgYXMgSk9ZUklERV9TVEFUVVMsIHR5cGUgU3RhdHVzIGFzIEpveXJpZGVTdGF0dXMsIEVWRU5UUyB9IGZyb20gJ3JlYWN0LWpveXJpZGUnXG5cbmV4cG9ydCB0eXBlIFN0ZXBUeXBlID0gJ3NwbGFzaCcgfCAnc3RlcCdcblxudHlwZSBWYWx1ZU9mPE9iamVjdFR5cGUsIFZhbHVlVHlwZSBleHRlbmRzIGtleW9mIE9iamVjdFR5cGUgPSBrZXlvZiBPYmplY3RUeXBlPiA9IE9iamVjdFR5cGVbVmFsdWVUeXBlXVxuXG5leHBvcnQgZGVjbGFyZSBjb25zdCBTdGF0dXM6IHtcbiAgcmVhZG9ubHkgSU5KRUNURUQ6ICdpbmplY3RlZCdcbn1cblxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IHtcbiAgLi4uSk9ZUklERV9TVEFUVVMsXG4gIElOSkVDVEVEOiAnaW5qZWN0ZWQnIGFzIGFueVxufVxuXG5leHBvcnQgdHlwZSBTdGF0dXNWYWx1ZSA9IFZhbHVlT2Y8dHlwZW9mIFN0YXR1cz4gfCBKb3lyaWRlU3RhdHVzXG5cbmludGVyZmFjZSBDdXN0b21TdGVwUHJvcHMge1xuICAvKiogVGhlIHR5cGUgb2YgdGhlIHN0ZXAuXG4gICAqIFwic3BsYXNoXCI6IHRoZSBpbnRyb2R1Y3RpdmUgZGlhbG9nIGluIGEgZ3VpZGUgdGhhdCBpcyBjZW50ZXJlZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXG4gICAqIFwic3RlcFwiOiB0aGUgZGVmYXVsdCBzdGVwIHR5cGUuXG4gICAqIEBkZWZhdWx0IFwic3RlcFwiXG4gICAqL1xuICB0eXBlPzogU3RlcFR5cGVcbiAgLyoqXG4gICAqIFJlcXVpcmVzIHVzZXIgdG8gcGVyZm9ybSBhIHNwZWNpZmljIGFjdGlvbiBpbiBvcmRlciB0byBtb3ZlIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAqIElmIGRlZmluZWQsIHRoZSBcIk5leHRcIiBidXR0b24gaXMgZGlzYWJsZWQgaW4gc3RlcCdzIHRvb2x0aXAsIHdoaWNoIGZvcmNlcyB0aGUgZ3VpZGVcbiAgICogdG8gYmUgY29udHJvbGxlZC5cbiAgICovXG4gIHJlcXVpcmVkQWN0aW9uPzoge1xuICAgIC8qKiBUeXBlIG9mIHRoZSBhY3Rpb246XG4gICAgICogXCJjbGlja1wiOiB0aGUgdGFyZ2V0IGhhcyB0byBiZSBjbGlja2VkLiBVc2UgR3VpZGUgY29tcG9uZW50J3MgXCJvbkFjdGlvbkNsaWNrXCIgY2FsbGJhY2sgdG8gaGFuZGxlIHRoaXMgZXZlbnQuXG4gICAgICogXCJjdXN0b21cIjogbWVyZWx5IHRvIHRlbGwgdGhlIEd1aWRlIGNvbXBvbmVudCB0byB3YWl0IGZvciBhbiBhY3Rpb24gdG8gYmUgcGVyZm9ybWVkLlxuICAgICAqL1xuICAgIHR5cGU6ICdjbGljaycgfCAnY3VzdG9tJ1xuICAgIC8qKiB0aGUgdGFyZ2V0IG9mIHRoZSBhY3Rpb24gdG8gYmUgcGVyZm9ybWVkLiAqL1xuICAgIHRhcmdldD86IHN0cmluZ1xuICB9XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdGFyZ2V0IGlzIGluc2lkZSBvZiB0aGUgY2FudmFzIGFyZWEgaW4gdGhlIGJ1aWxkZXIuXG4gICAqIElmIHNvLCBhIGRpZmZlcmVudCBhcHByb2FjaCB3aWxsIGJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldEluQ2FudmFzPzogYm9vbGVhblxuICAvKiogTWFudWFsbHkgZGlzYWJsZSB0aGUgXCJOZXh0XCIgYnV0dG9uICovXG4gIGRpc2FibGVOZXh0QnV0dG9uPzogYm9vbGVhblxuICAvKiogQXBwZW5kcyBhIHByZWZpeCBzdHJpbmcgYmVmb3JlIHRoZSB0YXJnZXQgc3RyaW5nLiB0aGUgb25seSBvcHRpb24gYXZhaWxhYmxlIGlzICd3aWRnZXRJZCcuXG4gICAqICd3aWRnZXRJZCc6IFRoZSBpZCBvZiB0aGUgY3VycmVudCB3aWRnZXQgdGhhdCB0aGUgR3VpZGUgY29tcG9uZW50IGlzIHRhcmdldGVkIHdpbGwgYmUgdXNlZC5cbiAgICovXG4gIHRhcmdldFByZWZpeD86ICd3aWRnZXRJZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGVwIGV4dGVuZHMgQ3VzdG9tU3RlcFByb3BzIHtcbiAgLyoqIFRoZSB0YXJnZXQgZm9yIHRoZSBzdGVwLiBJdCBuZWVkcyB0byBiZSBhIENTUyBzZWxlY3Rvci4gKi9cbiAgdGFyZ2V0OiBzdHJpbmdcbiAgLyoqIFRoZSBzdGVwIHRvb2x0aXAncyB0aXRsZS4gKi9cbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIFRoZSBzdGVwIHRvb2x0aXAncyBjb250ZW50LlxuICAgKiBUZXh0LCBpbWFnZSwgb3IgYm90aCBjYW4gYmUgYWRkZWQuXG4gICAqL1xuICBjb250ZW50OiB7XG4gICAgLyoqIFRoZSB0ZXh0IG9mIGEgc3RlcCB0b29sdGlwJ3MgY29udGVudC4gKi9cbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgLyoqIFRoZSBpbWFnZSBvZiBhIHN0ZXAgdG9vbHRpcCdzIGNvbnRlbnQuICovXG4gICAgaW1hZ2U/OiB7XG4gICAgICAvKiogVGhlIHNvdXJjZSB1cmwgb2YgdGhlIGltYWdlLiAqL1xuICAgICAgc3JjOiBzdHJpbmdcbiAgICAgIC8qKiBUaGUgYWx0ZXJuYXRlIHRleHQgb2YgdGhlIGltYWdlLiAqL1xuICAgICAgYWx0Pzogc3RyaW5nXG4gICAgICAvKiogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZS4gKi9cbiAgICAgIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG4gICAgICAvKiogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2UuICovXG4gICAgICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXJcbiAgICAgIC8qKiBUaGUgcG9zaXRpb24gb2YgdGhlIGltYWdlLiAqL1xuICAgICAgcG9zaXRpb24/OiAnZmlsbCcgfCAnY2VudGVyJ1xuICAgICAgLyoqIFRvIGFkZCBhIGJvcmRlciB0byB0aGUgaW1hZ2UuICovXG4gICAgICBib3JkZXI/OiBib29sZWFuXG4gICAgICAvKiogV2V0aGVyIHRvIGF1dG8gZmxpcCB0aGUgaW1hZ2UgYmFzZWQgb24gbG9jYWxlcy4gKi9cbiAgICAgIGF1dG9GbGlwPzogYm9vbGVhblxuICAgIH1cbiAgICAvKiogVGhlIGNvbnRlbnQgYWxpZ25tZW50IGRpcmVjdGlvbi4gKi9cbiAgICBkaXJlY3Rpb24/OiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnXG4gIH1cbiAgLyoqIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHRvb2x0aXAuICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKiogdGhlIGRlZmF1bHQgd2lkdGggb2YgdGhlIHRvb2x0aXAuICovXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyXG4gIC8qKiBAaWdub3JlICovXG4gIGxvY2FsZT86IExvY2FsZVxuICAvKiogaGlkZSB0aGUgZm9vdGVyIHNlY3Rpb24gaW4gdGhlIHRvb2x0aXAuICovXG4gIGhpZGVGb290ZXI/OiBib29sZWFuXG4gIC8qKiBUaGUgcGFkZGluZyBvZiB0aGUgc3BvdGxpZ2h0LiAqL1xuICBzcG90bGlnaHRQYWRkaW5nPzogbnVtYmVyXG4gIC8qKiBBbGxvdyBtb3VzZSBhbmQgdG91Y2ggZXZlbnRzIHRocnUgdGhlIHNwb3RsaWdodC4gKi9cbiAgc3BvdGxpZ2h0Q2xpY2tzPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmRpdGlvbmFsU3RlcEluZGV4ZXMge1xuICBbaWQ6IG51bWJlcl06IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmRpdGlvbmFsU3RlcCB7XG4gIHN0ZXBzOiBTdGVwW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmplY3RlZFN0ZXAge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGluamVjdGVkIGd1aWRlLlxuICAgKiBBdmFpbGFibGUgaW5qZWN0YWJsZSBndWlkZXMgYXJlOiBcImluc2VydC13aWRnZXRcIiBhbmQgXCJkcy1zZWxlY3Rpb25cIi5cbiAgICovXG4gIGluamVjdGVkR3VpZGU6IHN0cmluZ1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIHdpZGdldCB0aGF0IGlzIHBhc3NlZCB0byB0aGUgaW5qZWN0ZWQgZ3VpZGUuXG4gICAqL1xuICB3aWRnZXROYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFN0ZXBzID0gQXJyYXk8U3RlcCB8IENvbmRpdGlvbmFsU3RlcD5cblxuZXhwb3J0IHR5cGUgTWFwcGVkU3RlcCA9IEpveVJpZGVTdGVwICYgQ3VzdG9tU3RlcFByb3BzXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcE9uQ2hhbmdlQ2FsbEJhY2tQcm9wcyB7XG4gIHN0YXR1cz86IFN0YXR1c1ZhbHVlXG4gIGluZGV4PzogbnVtYmVyXG4gIG5leHRJbmRleD86IG51bWJlclxuICBldmVudD86IHN0cmluZ1xuICBpc0luamVjdGVkPzogYm9vbGVhblxuICBzdGVwPzogU3RlcFxufVxuXG5leHBvcnQgeyBFVkVOVFMgfVxuXG5leHBvcnQgY29uc3QgQ09NTU9OX0dVSURFX01PRFVMRVMgPSBbJ2luc2VydC13aWRnZXQnLCAnZHMtc2VsZWN0aW9uJ11cbiIsImltcG9ydCB7IFJlYWN0LCBnZXRBcHBTdG9yZSwgdXJsVXRpbHMsIHR5cGUgV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU3RlcCBhcyBKb3lSaWRlU3RlcCB9IGZyb20gJ3JlYWN0LWpveXJpZGUnXG5pbXBvcnQgeyB0eXBlIFN0ZXAsIHR5cGUgQ29uZGl0aW9uYWxTdGVwLCB0eXBlIEluamVjdGVkU3RlcCwgdHlwZSBTdGVwcywgdHlwZSBDb25kaXRpb25hbFN0ZXBJbmRleGVzLCB0eXBlIE1hcHBlZFN0ZXAgfSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgSU5KRUNURURfR1VJREVfUFJPUF9OQU1FID0gJ2luamVjdGVkR3VpZGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGVwUHJvcHMgKHN0ZXBzOiBTdGVwcywgY29uZFN0ZXBJbmRleGVzOiBDb25kaXRpb25hbFN0ZXBJbmRleGVzKTogSm95UmlkZVN0ZXBbXSB7XG4gIGNvbnN0IG1hcHBlZFN0ZXBzOiBKb3lSaWRlU3RlcFtdID0gc3RlcHMubWFwKChzdGVwOiBTdGVwIHwgQ29uZGl0aW9uYWxTdGVwIHwgSW5qZWN0ZWRTdGVwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHRlbXBTdGVwOiBTdGVwXG4gICAgY29uc3QgaXNSVEwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbnRleHQ/LmlzUlRMXG5cbiAgICBpZiAoaXNJbmplY3RlZFN0ZXAoc3RlcCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhcmdldDogYGluamVjdGVkV2lkZ2V0ICR7c3RlcFtJTkpFQ1RFRF9HVUlERV9QUk9QX05BTUVdfWAsIC8vIHN0aWxsIG5lZWQgYSB2YWxpZCBzZWxlY3RvciBmb3IgSm95cmlkZSB0byBydW4gY29ycmVjdGx5XG4gICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgIH0gYXMgTWFwcGVkU3RlcFxuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RlcCwgJ3N0ZXBzJykgJiYgKHN0ZXAgYXMgQ29uZGl0aW9uYWxTdGVwKS5zdGVwcz8ubGVuZ3RoID4gMCkge1xuICAgICAgdGVtcFN0ZXAgPSAoc3RlcCBhcyBDb25kaXRpb25hbFN0ZXApLnN0ZXBzW2NvbmRTdGVwSW5kZXhlcz8uW2luZGV4XSA/PyAwXVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wU3RlcCA9IHN0ZXAgYXMgU3RlcFxuICAgIH1cblxuICAgIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQsIHdpZHRoLCByZXF1aXJlZEFjdGlvbiwgdGFyZ2V0LCBzcG90bGlnaHRDbGlja3MsIHRhcmdldEluQ2FudmFzLCBwbGFjZW1lbnQsIC4uLm90aGVyUHJvcHMgfSA9IHRlbXBTdGVwXG4gICAgbGV0IGNvbnRlbnRJbWFnZVxuICAgIGlmIChjb250ZW50Py5pbWFnZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgYm9yZGVyLCBzcmMsIGF1dG9GbGlwLCAuLi5vdGhlckltYWdlUHJvcHMgfSA9IGNvbnRlbnQuaW1hZ2VcbiAgICAgIGNvbnRlbnRJbWFnZSA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BndWlkZS0taW1nLXdyYXBwZXIgZ3VpZGUtLWltZy0ke3Bvc2l0aW9uID8/ICdjZW50ZXInfWB9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtib3JkZXIgPyAnYm9yZGVyJyA6ICcnfSR7aXNSVEwgJiYgYXV0b0ZsaXAgPyAnIGZsaXAnIDogJyd9YH0gc3JjPXt1cmxVdGlscy5pc0Fic29sdXRlVXJsKHNyYykgPyBzcmMgOiBgJHt1cmxVdGlscy5nZXRGaXhlZFJvb3RQYXRoKCl9JHtzcmN9YH0gey4uLm90aGVySW1hZ2VQcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IHRpdGxlICYmIDxoMz57dGl0bGV9PC9oMz5cbiAgICBjb25zdCBjb250ZW50VGV4dCA9IGNvbnRlbnQgJiYgKGNvbnRlbnQ/LnRleHQgPyA8cD57Y29udGVudC50ZXh0fTwvcD4gOiA8ZGl2Pntjb250ZW50IGFzIGFueX08L2Rpdj4pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdGFyZ2V0OiB0YXJnZXRJbkNhbnZhcyA/ICdbZGF0YS1jb21wb25lbnQtaWQ9XCJndWlkZS1tYXNrXCJdJyA6IHRhcmdldCxcbiAgICAgIGNvbnRlbnQ6IDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZ3VpZGUtLWNvbnRlbnQgJHtjb250ZW50Py5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICdkLWZsZXggZ3VpZGUtLWNvbnRlbnQtaG9yaXpvbnRhbCBhbGlnbi1pdGVtcy1jZW50ZXInIDogJyd9YH1cbiAgICAgID5cbiAgICAgICAge2NvbnRlbnRJbWFnZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2d1aWRlLS10ZXh0LXdyYXBwZXInPlxuICAgICAgICAgIHtjb250ZW50VGl0bGV9XG4gICAgICAgICAge2NvbnRlbnRUZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PixcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzcG90bGlnaHRDbGlja3M6IHNwb3RsaWdodENsaWNrcyA/PyAhIXJlcXVpcmVkQWN0aW9uLFxuICAgICAgZGlzYWJsZUJlYWNvbjogaW5kZXggPT09IDAsXG4gICAgICByZXF1aXJlZEFjdGlvbixcbiAgICAgIHRhcmdldEluQ2FudmFzLFxuICAgICAgcGxhY2VtZW50OiBpc1JUTCA/IGJpZGkocGxhY2VtZW50LCBpc1JUTCkgOiBwbGFjZW1lbnQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSBhcyBNYXBwZWRTdGVwXG4gIH0pXG5cbiAgcmV0dXJuIG1hcHBlZFN0ZXBzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXNrUG9zaXRpb25DU1MgKHN0ZXA6IFN0ZXAsIHdpZGdldEpzb24/OiBXaWRnZXRKc29uKTogUmVhY3QuQ1NTUHJvcGVydGllcyB7XG4gIGNvbnN0IGNhbnZhc0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWVbbmFtZT1cIl9hcHBXaW5kb3dcIl0nKVxuICBjb25zdCBpbkNhbnZhc1RhcmdldFNlbGVjdG9yID0gX2dldFNlbGVjdG9yKHN0ZXAsIHdpZGdldEpzb24pXG4gIGNvbnN0IGluQ2FudmFzVGFyZ2V0RWxtID0gY2FudmFzSWZyYW1lPy5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbkNhbnZhc1RhcmdldFNlbGVjdG9yKVxuICBpZiAoIWluQ2FudmFzVGFyZ2V0RWxtKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBjYW52YXNJZnJhbWVSZWN0ID0gY2FudmFzSWZyYW1lPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBjb25zdCBpbkNhbnZhc1RhcmdldEVsbVJlY3QgPSBpbkNhbnZhc1RhcmdldEVsbT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3Qgem9vbVNjYWxlID0gZ2V0QXBwU3RvcmUoKT8uZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcFJ1bnRpbWVJbmZvPy56b29tU2NhbGUgPz8gMVxuXG4gIHJldHVybiBpbkNhbnZhc1RhcmdldEVsbVJlY3RcbiAgICA/IHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IHN0ZXAuc3BvdGxpZ2h0Q2xpY2tzID8gJ25vbmUnIDogdW5kZWZpbmVkLFxuICAgICAgICBsZWZ0OiAoaW5DYW52YXNUYXJnZXRFbG1SZWN0LmxlZnQpICogem9vbVNjYWxlICsgY2FudmFzSWZyYW1lUmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IChpbkNhbnZhc1RhcmdldEVsbVJlY3QudG9wKSAqIHpvb21TY2FsZSArIGNhbnZhc0lmcmFtZVJlY3QudG9wLFxuICAgICAgICB3aWR0aDogKGluQ2FudmFzVGFyZ2V0RWxtUmVjdC53aWR0aCkgKiB6b29tU2NhbGUsXG4gICAgICAgIGhlaWdodDogKGluQ2FudmFzVGFyZ2V0RWxtUmVjdC5oZWlnaHQpICogem9vbVNjYWxlXG4gICAgICB9XG4gICAgOiB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0U2VsZWN0b3IgKHN0ZXA6IFN0ZXAsIHdpZGdldEpzb24/OiBXaWRnZXRKc29uKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ZXAudGFyZ2V0SW5DYW52YXMgPyAnW2RhdGEtY29tcG9uZW50LWlkPVwiZ3VpZGUtbWFza1wiXScgOiBfZ2V0U2VsZWN0b3Ioc3RlcCwgd2lkZ2V0SnNvbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5qZWN0ZWRTdGVwIChzdGVwOiBTdGVwIHwgQ29uZGl0aW9uYWxTdGVwIHwgSW5qZWN0ZWRTdGVwKTogYm9vbGVhbiB7XG4gIHJldHVybiBzdGVwID8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0ZXAsIElOSkVDVEVEX0dVSURFX1BST1BfTkFNRSkgOiBmYWxzZVxufVxuXG5mdW5jdGlvbiBfZ2V0U2VsZWN0b3IgKHN0ZXA6IFN0ZXAsIHdpZGdldEpzb24/OiBXaWRnZXRKc29uKTogc3RyaW5nIHtcbiAgY29uc3QgcHJlZml4ID0gc3RlcD8udGFyZ2V0UHJlZml4ID09PSAnd2lkZ2V0SWQnICYmIHdpZGdldEpzb24/LmlkID8gYFtkYXRhLXdpZGdldGlkPVwiJHt3aWRnZXRKc29uLmlkfVwiXSBgIDogJydcbiAgcmV0dXJuIHByZWZpeCArIChzdGVwLnJlcXVpcmVkQWN0aW9uPy50YXJnZXQgPz8gc3RlcC50YXJnZXQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWRpIChzOiBzdHJpbmcsIGlzUlRMPzogYm9vbGVhbik6IHN0cmluZyB7XG4gIGlmICghcykgcmV0dXJuIHNcbiAgaXNSVEwgPSBpc1JUTCA/PyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbnRleHQ/LmlzUlRMXG4gIGlmIChpc1JUTCkge1xuICAgIGlmIChzLmluY2x1ZGVzKCdsZWZ0JykpIHJldHVybiBzLnJlcGxhY2UoJ2xlZnQnLCAncmlnaHQnKVxuICAgIGVsc2UgaWYgKHMuaW5jbHVkZXMoJ3JpZ2h0JykpIHJldHVybiBzLnJlcGxhY2UoJ3JpZ2h0JywgJ2xlZnQnKVxuICB9XG4gIHJldHVybiBzXG59XG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgcG9saXNoZWQgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBjb25zdCBtb2RhbFN0eWxlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lIGFzIElNVGhlbWVWYXJpYWJsZXNcbiAgY29uc3QgbW9kYWxWYXJzID0gdGhlbWU/LmNvbXBvbmVudHM/Lm1vZGFsXG5cbiAgcmV0dXJuIG1vZGFsVmFycyAmJiBjc3NgXG4gICAgJi5tb2RhbC1kaWFsb2cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46ICR7bW9kYWxWYXJzLmRpYWxvZy5tYXJnaW59O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgIC5tb2RhbC5mYWRlICYge1xuICAgICAgICB0cmFuc2l0aW9uOiR7bW9kYWxWYXJzLnRyYW5zaXRpb259O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC5zaG93ICYge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1vZGFsLWRpYWxvZy1jZW50ZXJlZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgke21vZGFsVmFycy5kaWFsb2cubWFyZ2lufSAqIDIpKTtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoJHttb2RhbFZhcnMuZGlhbG9nLm1hcmdpbn0gKiAyKSk7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RhbFZhcnMuY29udGVudC5iZ307XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgYm9yZGVyOiAke21vZGFsVmFycy5jb250ZW50LmJvcmRlci53aWR0aH0gc29saWQgJHttb2RhbFZhcnMuY29udGVudC5ib3JkZXIuY29sb3J9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHttb2RhbFZhcnMuY29udGVudC5ib3JkZXJSYWRpdXN9O1xuICAgICAgYm94LXNoYWRvdzogJHttb2RhbFZhcnMuY29udGVudC5zaGFkb3d9O1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG5cbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogJHttb2RhbFZhcnMuaGVhZGVyLnBhZGRpbmdZfSAke21vZGFsVmFycy5oZWFkZXIucGFkZGluZ1h9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHttb2RhbFZhcnMuaGVhZGVyLmJvcmRlci53aWR0aH0gc29saWQgJHttb2RhbFZhcnMuaGVhZGVyLmJvcmRlci5jb2xvcn07XG4gICAgICAke3BvbGlzaGVkLmJvcmRlclJhZGl1cygndG9wJywgbW9kYWxWYXJzLmNvbnRlbnQuYm9yZGVyUmFkaXVzID8/IDApfTtcblxuICAgICAgLmNsb3NlIHtcbiAgICAgICAgcGFkZGluZzogJHttb2RhbFZhcnMuaGVhZGVyLnBhZGRpbmdZfSAke21vZGFsVmFycy5oZWFkZXIucGFkZGluZ1h9O1xuICAgICAgICBtYXJnaW46IC0ke21vZGFsVmFycy5oZWFkZXIucGFkZGluZ1l9IC0ke21vZGFsVmFycy5oZWFkZXIucGFkZGluZ1h9IC0ke21vZGFsVmFycy5oZWFkZXIucGFkZGluZ1l9IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbGluZS1oZWlnaHQ6ICR7bW9kYWxWYXJzLnRpdGxlLmxpbmVIZWlnaHR9O1xuICAgIH1cblxuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgcGFkZGluZzogJHttb2RhbFZhcnMuaW5uZXJQYWRkaW5nfTtcbiAgICB9XG5cbiAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmc6ICR7bW9kYWxWYXJzLmlubmVyUGFkZGluZ307XG4gICAgICBib3JkZXItdG9wOiAke21vZGFsVmFycy5mb290ZXIuYm9yZGVyLndpZHRofSBzb2xpZCAke21vZGFsVmFycy5mb290ZXIuYm9yZGVyLmNvbG9yfTtcblxuICAgICAgPiAqICsgKiB7IG1hcmdpbi1sZWZ0OiAuNXJlbTsgfVxuICAgICAgPiAuYnRuIHtcbiAgICAgICAgbWluLXdpZHRoOiAke21vZGFsVmFycy5mb290ZXIuYnV0dG9uLm1pbldpZHRofTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtOTk5OXB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC8qIFRPRE86IHVzZSBicmVhayBwb2ludHMgZnJvbSBjb25maWcgKi9cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAgICYubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAke21vZGFsVmFycy5zaXplcy5tZH07XG4gICAgICAgIG1hcmdpbjogJHttb2RhbFZhcnMuZGlhbG9nLm1hcmdpbllTbVVwfSBhdXRvO1xuICAgICAgfVxuICAgICAgJi5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoJHttb2RhbFZhcnMuZGlhbG9nLm1hcmdpbllTbVVwfSAqIDIpKTtcbiAgICAgIH1cbiAgICAgICYubW9kYWwtZGlhbG9nLWNlbnRlcmVkOjpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoJHttb2RhbFZhcnMuZGlhbG9nLm1hcmdpbllTbVVwfSAqIDIpKTtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYm94LXNoYWRvdzogJHttb2RhbFZhcnMuY29udGVudC5zaGFkb3dTbVVwfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgYFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gc3JjL2hlbHBlcnMudHNcbmZ1bmN0aW9uIGlzT2ZUeXBlKHR5cGUpIHtcbiAgcmV0dXJuICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSB0eXBlO1xufVxudmFyIGlzRnVuY3Rpb24gPSBpc09mVHlwZShcImZ1bmN0aW9uXCIpO1xudmFyIGlzTnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59O1xudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpID09PSBcIlJlZ0V4cFwiO1xufTtcbnZhciBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiAhaXNOdWxsKHZhbHVlKSAmJiAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKTtcbn07XG52YXIgaXNVbmRlZmluZWQgPSBpc09mVHlwZShcInVuZGVmaW5lZFwiKTtcblxuLy8gc3JjL2luZGV4LnRzXG5mdW5jdGlvbiBlcXVhbEFycmF5KGxlZnQsIHJpZ2h0KSB7XG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBsZWZ0O1xuICBpZiAobGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaW5kZXggPSBsZW5ndGg7IGluZGV4LS0gIT09IDA7ICkge1xuICAgIGlmICghZXF1YWwobGVmdFtpbmRleF0sIHJpZ2h0W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBlcXVhbEFycmF5QnVmZmVyKGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChsZWZ0LmJ5dGVMZW5ndGggIT09IHJpZ2h0LmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgdmlldzEgPSBuZXcgRGF0YVZpZXcobGVmdC5idWZmZXIpO1xuICBjb25zdCB2aWV3MiA9IG5ldyBEYXRhVmlldyhyaWdodC5idWZmZXIpO1xuICBsZXQgaW5kZXggPSBsZWZ0LmJ5dGVMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKHZpZXcxLmdldFVpbnQ4KGluZGV4KSAhPT0gdmlldzIuZ2V0VWludDgoaW5kZXgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZXF1YWxNYXAobGVmdCwgcmlnaHQpIHtcbiAgaWYgKGxlZnQuc2l6ZSAhPT0gcmlnaHQuc2l6ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGNvbnN0IGluZGV4IG9mIGxlZnQuZW50cmllcygpKSB7XG4gICAgaWYgKCFyaWdodC5oYXMoaW5kZXhbMF0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgaW5kZXggb2YgbGVmdC5lbnRyaWVzKCkpIHtcbiAgICBpZiAoIWVxdWFsKGluZGV4WzFdLCByaWdodC5nZXQoaW5kZXhbMF0pKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVxdWFsU2V0KGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChsZWZ0LnNpemUgIT09IHJpZ2h0LnNpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChjb25zdCBpbmRleCBvZiBsZWZ0LmVudHJpZXMoKSkge1xuICAgIGlmICghcmlnaHQuaGFzKGluZGV4WzBdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVxdWFsKGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChsZWZ0ID09PSByaWdodCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChsZWZ0ICYmIGlzT2JqZWN0KGxlZnQpICYmIHJpZ2h0ICYmIGlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIGlmIChsZWZ0LmNvbnN0cnVjdG9yICE9PSByaWdodC5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIGVxdWFsQXJyYXkobGVmdCwgcmlnaHQpO1xuICAgIH1cbiAgICBpZiAobGVmdCBpbnN0YW5jZW9mIE1hcCAmJiByaWdodCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgcmV0dXJuIGVxdWFsTWFwKGxlZnQsIHJpZ2h0KTtcbiAgICB9XG4gICAgaWYgKGxlZnQgaW5zdGFuY2VvZiBTZXQgJiYgcmlnaHQgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgIHJldHVybiBlcXVhbFNldChsZWZ0LCByaWdodCk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcobGVmdCkgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIGVxdWFsQXJyYXlCdWZmZXIobGVmdCwgcmlnaHQpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdleChsZWZ0KSAmJiBpc1JlZ2V4KHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIGxlZnQuc291cmNlID09PSByaWdodC5zb3VyY2UgJiYgbGVmdC5mbGFncyA9PT0gcmlnaHQuZmxhZ3M7XG4gICAgfVxuICAgIGlmIChsZWZ0LnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikge1xuICAgICAgcmV0dXJuIGxlZnQudmFsdWVPZigpID09PSByaWdodC52YWx1ZU9mKCk7XG4gICAgfVxuICAgIGlmIChsZWZ0LnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICByZXR1cm4gbGVmdC50b1N0cmluZygpID09PSByaWdodC50b1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0S2V5cyA9IE9iamVjdC5rZXlzKGxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0S2V5cyA9IE9iamVjdC5rZXlzKHJpZ2h0KTtcbiAgICBpZiAobGVmdEtleXMubGVuZ3RoICE9PSByaWdodEtleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGluZGV4ID0gbGVmdEtleXMubGVuZ3RoOyBpbmRleC0tICE9PSAwOyApIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJpZ2h0LCBsZWZ0S2V5c1tpbmRleF0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaW5kZXggPSBsZWZ0S2V5cy5sZW5ndGg7IGluZGV4LS0gIT09IDA7ICkge1xuICAgICAgY29uc3Qga2V5ID0gbGVmdEtleXNbaW5kZXhdO1xuICAgICAgaWYgKGtleSA9PT0gXCJfb3duZXJcIiAmJiBsZWZ0LiQkdHlwZW9mKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFlcXVhbChsZWZ0W2tleV0sIHJpZ2h0W2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKE51bWJlci5pc05hTihsZWZ0KSAmJiBOdW1iZXIuaXNOYU4ocmlnaHQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xufVxuZXhwb3J0IHtcbiAgZXF1YWwgYXMgZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBzcmMvYXJyYXlzLnRzXG5mdW5jdGlvbiBjcmVhdGVBcnJheShzaXplLCBzdGFydCA9IDEpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIHN0YXJ0KTtcbn1cbmZ1bmN0aW9uIGdldFJhbmRvbUl0ZW0oaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGlucHV0Lmxlbmd0aCldO1xufVxuZnVuY3Rpb24gcXVpY2tTb3J0KGlucHV0LCBjb21wYXJhdG9yID0gc29ydENvbXBhcmF0b3IpIHtcbiAgY29uc3Qgb3V0cHV0ID0gWy4uLmlucHV0XTtcbiAgY29uc3QgcmVjdXJzaXZlU29ydCA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgaWYgKGVuZCAtIHN0YXJ0IDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwaXZvdFZhbHVlID0gb3V0cHV0W2VuZF07XG4gICAgbGV0IHNwbGl0SW5kZXggPSBzdGFydDtcbiAgICBmb3IgKGxldCBpbmRleCA9IHN0YXJ0OyBpbmRleCA8IGVuZDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc29ydCA9IGNvbXBhcmF0b3Iob3V0cHV0W2luZGV4XSwgcGl2b3RWYWx1ZSk7XG4gICAgICBpZiAoc29ydCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHNwbGl0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IG91dHB1dFtzcGxpdEluZGV4XTtcbiAgICAgICAgICBvdXRwdXRbc3BsaXRJbmRleF0gPSBvdXRwdXRbaW5kZXhdO1xuICAgICAgICAgIG91dHB1dFtpbmRleF0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHNwbGl0SW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0W2VuZF0gPSBvdXRwdXRbc3BsaXRJbmRleF07XG4gICAgb3V0cHV0W3NwbGl0SW5kZXhdID0gcGl2b3RWYWx1ZTtcbiAgICByZWN1cnNpdmVTb3J0KHN0YXJ0LCBzcGxpdEluZGV4IC0gMSk7XG4gICAgcmVjdXJzaXZlU29ydChzcGxpdEluZGV4ICsgMSwgZW5kKTtcbiAgfTtcbiAgcmVjdXJzaXZlU29ydCgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoaW5wdXQpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGlucHV0KV07XG59XG5mdW5jdGlvbiBzaHVmZmxlKGlucHV0KSB7XG4gIGxldCBjdXJyZW50SW5kZXggPSBpbnB1dC5sZW5ndGg7XG4gIGxldCByYW5kb21JbmRleDtcbiAgbGV0IHRlbXBvcmFyeVZhbHVlO1xuICBjb25zdCBvdXRwdXQgPSBbLi4uaW5wdXRdO1xuICB3aGlsZSAoY3VycmVudEluZGV4KSB7XG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgtLSk7XG4gICAgdGVtcG9yYXJ5VmFsdWUgPSBvdXRwdXRbY3VycmVudEluZGV4XTtcbiAgICBvdXRwdXRbY3VycmVudEluZGV4XSA9IG91dHB1dFtyYW5kb21JbmRleF07XG4gICAgb3V0cHV0W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBzb3J0QnlMb2NhbGVDb21wYXJlKGtleSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZGVzY2VuZGluZywgLi4uY29tcGFyZU9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gIGlmIChrZXkpIHtcbiAgICBpZiAoZGVzY2VuZGluZykge1xuICAgICAgcmV0dXJuIChsZWZ0LCByaWdodCkgPT4gcmlnaHRba2V5XS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobGVmdFtrZXldLnRvTG93ZXJDYXNlKCksIHZvaWQgMCwgY29tcGFyZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0W2tleV0udG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0W2tleV0udG9Mb3dlckNhc2UoKSwgdm9pZCAwLCBjb21wYXJlT3B0aW9ucyk7XG4gIH1cbiAgaWYgKGRlc2NlbmRpbmcpIHtcbiAgICByZXR1cm4gKGxlZnQsIHJpZ2h0KSA9PiByaWdodC50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUobGVmdC50b0xvd2VyQ2FzZSgpLCB2b2lkIDAsIGNvbXBhcmVPcHRpb25zKTtcbiAgfVxuICByZXR1cm4gKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodC50b0xvd2VyQ2FzZSgpLCB2b2lkIDAsIGNvbXBhcmVPcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHNvcnRCeVByaW1pdGl2ZShrZXksIGRlc2NlbmRpbmcgPSBmYWxzZSkge1xuICBjb25zdCBmaXJzdENvbXBhcmF0b3IgPSBkZXNjZW5kaW5nID8gMSA6IC0xO1xuICBjb25zdCBzZWNvbmRDb21wYXJhdG9yID0gZGVzY2VuZGluZyA/IC0xIDogMTtcbiAgaWYgKGtleSkge1xuICAgIHJldHVybiAobGVmdCwgcmlnaHQpID0+IHtcbiAgICAgIGlmIChsZWZ0W2tleV0gPT09IHJpZ2h0W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdFtrZXldIDwgcmlnaHRba2V5XSA/IGZpcnN0Q29tcGFyYXRvciA6IHNlY29uZENvbXBhcmF0b3I7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQgPCByaWdodCA/IGZpcnN0Q29tcGFyYXRvciA6IHNlY29uZENvbXBhcmF0b3I7XG4gIH07XG59XG5mdW5jdGlvbiBzb3J0Q29tcGFyYXRvcihsZWZ0LCByaWdodCkge1xuICBpZiAobGVmdCA8IHJpZ2h0KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChsZWZ0ID4gcmlnaHQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIHNwbGl0SW50b0NodW5rcyhpbnB1dCwgY2h1bmtTaXplID0gMjUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RlZCBhbiBhcnJheSBmb3IgdGhlIGZpcnN0IGFyZ3VtZW50XCIpO1xuICB9XG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5jZWlsKGlucHV0Lmxlbmd0aCAvIGNodW5rU2l6ZSk7IGluZGV4KyspIHtcbiAgICBjaHVua3MucHVzaChpbnB1dC5zbGljZShpbmRleCAqIGNodW5rU2l6ZSwgKGluZGV4ICsgMSkgKiBjaHVua1NpemUpKTtcbiAgfVxuICByZXR1cm4gY2h1bmtzO1xufVxuXG4vLyBzcmMvYXN5bmMudHNcbmltcG9ydCBpcyBmcm9tIFwiaXMtbGl0ZVwiO1xudmFyIEFTWU5DX1NUQVRVUyA9IHtcbiAgSURMRTogXCJJRExFXCIsXG4gIFBFTkRJTkc6IFwiUEVORElOR1wiLFxuICBTVUNDRVNTOiBcIlNVQ0NFU1NcIixcbiAgRVJST1I6IFwiRVJST1JcIlxufTtcbmZ1bmN0aW9uIGNvcnMoZGF0YSwgc3RhdHVzQ29kZU9yT3B0aW9ucyA9IDIwMCkge1xuICBjb25zdCB7XG4gICAgYWxsb3dDcmVkZW50aWFscyA9IHRydWUsXG4gICAgYWxsb3dlZEhlYWRlcnMgPSBbXSxcbiAgICBtZXRob2RzID0gW1wiR0VUXCJdLFxuICAgIG9yaWdpbiA9IFwiKlwiLFxuICAgIHJlc3BvbnNlSGVhZGVycyA9IHZvaWQgMCxcbiAgICBzdGF0dXNDb2RlID0gMjAwXG4gIH0gPSBpcy5udW1iZXIoc3RhdHVzQ29kZU9yT3B0aW9ucykgPyB7IHN0YXR1c0NvZGU6IHN0YXR1c0NvZGVPck9wdGlvbnMgfSA6IHN0YXR1c0NvZGVPck9wdGlvbnM7XG4gIGNvbnN0IGFsbG93TWV0aG9kcyA9IFsuLi5tZXRob2RzLCBcIk9QVElPTlNcIl07XG4gIGNvbnN0IGFsbG93SGVhZGVycyA9IFtcbiAgICAuLi4vKiBAX19QVVJFX18gKi8gbmV3IFNldChbXG4gICAgICBcIkFjY2VwdC1WZXJzaW9uXCIsXG4gICAgICBcIkFjY2VwdFwiLFxuICAgICAgXCJBdXRob3JpemF0aW9uXCIsXG4gICAgICBcIkNvbnRlbnQtTGVuZ3RoXCIsXG4gICAgICBcIkNvbnRlbnQtTUQ1XCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiLFxuICAgICAgXCJEYXRlXCIsXG4gICAgICBcIngtYW16LWRhdGVcIixcbiAgICAgIFwieC1hbXotc2VjdXJpdHktdG9rZW5cIixcbiAgICAgIFwiWC1BcGktVmVyc2lvblwiLFxuICAgICAgXCJYLUNTUkYtVG9rZW5cIixcbiAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLFxuICAgICAgLi4uYWxsb3dlZEhlYWRlcnNcbiAgICBdKVxuICBdO1xuICBsZXQgZXhwb3NlZEhlYWRlcnM7XG4gIGlmIChyZXNwb25zZUhlYWRlcnMpIHtcbiAgICBleHBvc2VkSGVhZGVycyA9IHtcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtRXhwb3NlLUhlYWRlcnNcIjogT2JqZWN0LmtleXMocmVzcG9uc2VIZWFkZXJzKS5qb2luKFwiLFwiKSxcbiAgICAgIC4uLnJlc3BvbnNlSGVhZGVyc1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBvcmlnaW4sXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCI6IGFsbG93Q3JlZGVudGlhbHMsXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogYWxsb3dNZXRob2RzLmpvaW4oXCIsXCIpLFxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IGFsbG93SGVhZGVycy5qb2luKFwiLFwiKSxcbiAgICAgIC4uLmV4cG9zZWRIZWFkZXJzXG4gICAgfSxcbiAgICBzdGF0dXNDb2RlXG4gIH07XG59XG5hc3luYyBmdW5jdGlvbiBwb2xsKGNvbmRpdGlvbiwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZGVsYXkgPSAxLCBtYXhSZXRyaWVzID0gNSB9ID0gb3B0aW9ucztcbiAgbGV0IHJldHJpZXMgPSAwO1xuICB3aGlsZSAoIWNvbmRpdGlvbigpICYmIHJldHJpZXMgPD0gbWF4UmV0cmllcykge1xuICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICByZXRyaWVzKys7XG4gIH1cbiAgaWYgKHJldHJpZXMgPj0gbWF4UmV0cmllcykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRpbWVvdXRcIik7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBib2R5LCBoZWFkZXJzLCBtZXRob2QgPSBcIkdFVFwiIH0gPSBvcHRpb25zO1xuICBpZiAoIXVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVSTCBpcyByZXF1aXJlZFwiKTtcbiAgfVxuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgLi4uaGVhZGVyc1xuICAgIH0sXG4gICAgbWV0aG9kXG4gIH07XG4gIGlmIChib2R5KSB7XG4gICAgcGFyYW1zLmJvZHkgPSBpcy5wbGFpbk9iamVjdChib2R5KSA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keTtcbiAgfVxuICByZXR1cm4gZmV0Y2godXJsLCBwYXJhbXMpLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBsZXQgY29udGVudDtcbiAgICB0cnkge1xuICAgICAgY29udGVudCA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDI5OSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICBlcnJvci5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICBlcnJvci5yZXNwb25zZSA9IGNvbnRlbnQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNsZWVwKHNlY29uZHMgPSAxKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgc2Vjb25kcyAqIDFlMyk7XG4gIH0pO1xufVxuXG4vLyBzcmMvZGF0ZS50c1xuaW1wb3J0IGlzMiBmcm9tIFwiaXMtbGl0ZVwiO1xuXG4vLyBzcmMvc3RyaW5ncy50c1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQuY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKCkgKyBpbnB1dC5zbGljZSgxKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gY2xlYW51cEhUTUwoaW5wdXQpIHtcbiAgcmV0dXJuIHJlbW92ZVdoaXRlc3BhY2UocmVtb3ZlRW1wdHlUYWdzKGlucHV0KSk7XG59XG5mdW5jdGlvbiBjbGVhbnVwTnVtZXJpY1N0cmluZyh2YWx1ZSA9IFwiXCIpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRCsvZywgXCJcIik7XG59XG5mdW5jdGlvbiBjbGVhbnVwVVJJKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9bJCYrLC86Oz0/QF0vZywgXCJcIik7XG59XG5mdW5jdGlvbiBnZXRJbml0aWFscyhpbnB1dCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgbmFtZXMgPSBpbnB1dC50cmltKCkuc3BsaXQoXCIgXCIpO1xuICBpZiAobmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGAke25hbWVzWzBdLmNoYXJBdCgwKX1gO1xuICB9XG4gIHJldHVybiBgJHtuYW1lc1swXS5jaGFyQXQoMCl9JHtuYW1lc1tuYW1lcy5sZW5ndGggLSAxXS5jaGFyQXQoMCl9YDtcbn1cbmZ1bmN0aW9uIHBsdXJhbGl6ZShxdWFudGl0eSwgc2luZ3VsYXIsIHBsdXJhbCkge1xuICBpZiAocXVhbnRpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cbiAgcmV0dXJuIHBsdXJhbCB8fCBgJHtzaW5ndWxhcn1zYDtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFjY2VudHMoaW5wdXQpIHtcbiAgY29uc3QgcmVtb3ZhbE1hcCA9IHtcbiAgICBBOiAvW0HDgMOBw4LDg8OEw4XEgMSCxITHjceex6DHusiAyILIpuG4gOG6oOG6ouG6pOG6puG6qOG6quG6rOG6ruG6sOG6suG6tOG6tuKStu+8oV0vZyxcbiAgICBBQTogL+qcsi9nLFxuICAgIEFFOiAvW8OGx6LHvF0vZyxcbiAgICBBTzogL+qctC9nLFxuICAgIEFVOiAv6py2L2csXG4gICAgQVY6IC9b6py46py6XS9nLFxuICAgIEFZOiAv6py8L2csXG4gICAgQjogL1tCxoHGgsmD4biC4biE4biG4pK377yiXS9nLFxuICAgIEM6IC9bQ8OHxIbEiMSKxIzGh8i74biI4pK46py+77yjXS9nLFxuICAgIEQ6IC9bRMSOxJDGicaKxovhuIrhuIzhuI7huJDhuJLikrnqnbnvvKRdL2csXG4gICAgRFo6IC9bx4THsV0vZyxcbiAgICBEejogL1vHhceyXS9nLFxuICAgIEU6IC9bRcOIw4nDisOLxJLElMSWxJjEmsaOxpDIhMiGyKjhuJThuJbhuJjhuJrhuJzhurjhurrhurzhur7hu4Dhu4Lhu4Thu4bikrrvvKVdL2csXG4gICAgRjogL1tGxpHhuJ7ikrvqnbvvvKZdL2csXG4gICAgRzogL1tHxJzEnsSgxKLGk8ekx6bHtOG4oOKSvOqdveqdvuqeoO+8p10vZyxcbiAgICBIOiAvW0jEpMSmyJ7huKLhuKThuKbhuKjhuKrikr3isafisbXqno3vvKhdL2csXG4gICAgSTogL1tJw4zDjcOOw4/EqMSqxKzErsSwxpfHj8iIyIrhuKzhuK7hu4jhu4rikr7vvKldL2csXG4gICAgSjogL1tKxLTJiOKSv++8ql0vZyxcbiAgICBLOiAvW0vEtsaYx6jhuLDhuLLhuLTik4DisanqnYDqnYLqnYTqnqLvvKtdL2csXG4gICAgTDogL1tMxLnEu8S9xL/Fgci94bi24bi44bi64bi84pOB4rGg4rGi6p2G6p2I6p6A77ysXS9nLFxuICAgIExKOiAvx4cvZyxcbiAgICBMajogL8eIL2csXG4gICAgTTogL1tNxpzhuL7huYDhuYLik4Lisa7vvK1dL2csXG4gICAgTjogL1tOw5HFg8WFxYfGnce4yKDhuYThuYbhuYjhuYrik4PqnpDqnqTvvK5dL2csXG4gICAgTko6IC/Hii9nLFxuICAgIE5qOiAvx4svZyxcbiAgICBPOiAvW0/DksOTw5TDlcOWw5jFjMWOxZDGhsafxqDHkceqx6zHvsiMyI7IqsisyK7IsOG5jOG5juG5kOG5kuG7jOG7juG7kOG7kuG7lOG7luG7mOG7muG7nOG7nuG7oOG7ouKThOqdiuqdjO+8r10vZyxcbiAgICBPSTogL8aiL2csXG4gICAgT086IC/qnY4vZyxcbiAgICBPVTogL8iiL2csXG4gICAgUDogL1tQxqThuZThuZbik4XisaPqnZDqnZLqnZTvvLBdL2csXG4gICAgUTogL1tRyYrik4bqnZbqnZjvvLFdL2csXG4gICAgUjogL1tSxZTFlsWYyJDIksmM4bmY4bma4bmc4bme4pOH4rGk6p2a6p6C6p6m77yyXS9nLFxuICAgIFM6IC9bU8WaxZzFnsWgyJjhuaDhuaLhuaThuabhuajhup7ik4jisb7qnoTqnqjvvLNdL2csXG4gICAgVDogL1tUxaLFpMWmxqzGrsiayL7huarhuazhua7hubDik4nqnobvvLRdL2csXG4gICAgVFo6IC/qnKgvZyxcbiAgICBVOiAvW1XDmcOaw5vDnMWoxarFrMWuxbDFssavx5PHlceXx5nHm8iUyJbJhOG5suG5tOG5tuG5uOG5uuG7pOG7puG7qOG7quG7rOG7ruG7sOKTiu+8tV0vZyxcbiAgICBWOiAvW1bGssmF4bm84bm+4pOL6p2e77y2XS9nLFxuICAgIFZZOiAv6p2gL2csXG4gICAgVzogL1tXxbThuoDhuoLhuoThuobhuojik4zisbLvvLddL2csXG4gICAgWDogL1tY4bqK4bqM4pON77y4XS9nLFxuICAgIFk6IC9bWcOdxbbFuMazyLLJjuG6juG7suG7tOG7tuG7uOG7vuKTju+8uV0vZyxcbiAgICBaOiAvW1rFucW7xb3Gtcik4bqQ4bqS4bqU4pOP4rGr4rG/6p2i77y6XS9nLFxuICAgIGE6IC9bYcOgw6HDosOjw6TDpcSBxIPEhceOx5/Hoce7yIHIg8inyZDhuIHhuprhuqHhuqPhuqXhuqfhuqnhuqvhuq3huq/hurHhurPhurXhurfik5DisaXvvYFdL2csXG4gICAgYWE6IC/qnLMvZyxcbiAgICBhZTogL1vDpsejx71dL2csXG4gICAgYW86IC/qnLUvZyxcbiAgICBhdTogL+qcty9nLFxuICAgIGF2OiAvW+qcueqcu10vZyxcbiAgICBheTogL+qcvS9nLFxuICAgIGI6IC9bYsaAxoPJk+G4g+G4heG4h+KTke+9gl0vZyxcbiAgICBjOiAvW2PDp8SHxInEi8SNxojIvOG4ieKGhOKTkuqcv++9g10vZyxcbiAgICBkOiAvW2TEj8SRxozJlsmX4biL4biN4biP4biR4biT4pOT6p26772EXS9nLFxuICAgIGR6OiAvW8eGx7NdL2csXG4gICAgZTogL1tlw6jDqcOqw6vEk8SVxJfEmcSbx53IhciHyKnJh8mb4biV4biX4biZ4bib4bid4bq54bq74bq94bq/4buB4buD4buF4buH4pOU772FXS9nLFxuICAgIGY6IC9bZsaS4bif4pOV6p28772GXS9nLFxuICAgIGc6IC9bZ8SdxJ/EocSjx6XHp8e1yaDhtbnhuKHik5bqnb/qnqHvvYddL2csXG4gICAgaDogL1toxKXEp8ifyaXhuKPhuKXhuKfhuKnhuKvhupbik5fisajisbbvvYhdL2csXG4gICAgaHY6IC/GlS9nLFxuICAgIGk6IC9bacOsw63DrsOvxKnEq8StxK/EsceQyInIi8mo4bit4biv4buJ4buL4pOY772JXS9nLFxuICAgIGo6IC9basS1x7DJieKTme+9il0vZyxcbiAgICBrOiAvW2vEt8aZx6nhuLHhuLPhuLXik5risarqnYHqnYPqnYXqnqPvvYtdL2csXG4gICAgbDogL1tsxLrEvMS+xYDFgsW/xprJq+G4t+G4ueG4u+G4veKTm+Kxoeqdh+qdieqege+9jF0vZyxcbiAgICBsajogL8eJL2csXG4gICAgbTogL1ttya/JseG4v+G5geG5g+KTnO+9jV0vZyxcbiAgICBuOiAvW27DscWExYbFiMWJxp7Hucmy4bmF4bmH4bmJ4bmL4pOd6p6R6p6l772OXS9nLFxuICAgIG5qOiAvx4wvZyxcbiAgICBvOiAvW2/DssOzw7TDtcO2w7jFjcWPxZHGoceSx6vHrce/yI3Ij8iryK3Ir8ixyZTJteG5jeG5j+G5keG5k+G7jeG7j+G7keG7k+G7leG7l+G7meG7m+G7neG7n+G7oeG7o+KTnuqdi+qdje+9j10vZyxcbiAgICBvaTogL8ajL2csXG4gICAgb3U6IC/Ioy9nLFxuICAgIG9vOiAv6p2PL2csXG4gICAgcDogL1twxqXhtb3huZXhuZfik5/qnZHqnZPqnZXvvZBdL2csXG4gICAgcTogL1txyYvik6DqnZfqnZnvvZFdL2csXG4gICAgcjogL1tyxZXFl8WZyJHIk8mNyb3huZnhuZvhuZ3huZ/ik6HqnZvqnoPqnqfvvZJdL2csXG4gICAgczogL1tzw5/Fm8WdxZ/FociZyL/huaHhuaPhuaXhuafhuanhupvik6LqnoXqnqnvvZNdL2csXG4gICAgdDogL1t0xaPFpcWnxq3Im8qI4bmr4bmt4bmv4bmx4bqX4pOj4rGm6p6H772UXS9nLFxuICAgIHR6OiAv6pypL2csXG4gICAgdTogL1t1w7nDusO7w7zFqcWrxa3Fr8WxxbPGsMeUx5bHmMeax5zIlciXyonhubPhubXhubfhubnhubvhu6Xhu6fhu6nhu6vhu63hu6/hu7Hik6TvvZVdL2csXG4gICAgdjogL1t2yovKjOG5veG5v+KTpeqdn++9ll0vZyxcbiAgICB2eTogL+qdoS9nLFxuICAgIHc6IC9bd8W14bqB4bqD4bqF4bqH4bqJ4bqY4pOm4rGz772XXS9nLFxuICAgIHg6IC9beOG6i+G6jeKTp++9mF0vZyxcbiAgICB5OiAvW3nDvcO/xbfGtMizyY/huo/hupnhu7Phu7Xhu7fhu7nhu7/ik6jvvZldL2csXG4gICAgejogL1t6xbrFvMW+xrbIpcmA4bqR4bqT4bqV4pOp4rGs6p2j772aXS9nXG4gIH07XG4gIGxldCBwYXJzZWRTdHJpbmcgPSBpbnB1dDtcbiAgT2JqZWN0LmVudHJpZXMocmVtb3ZhbE1hcCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgcGFyc2VkU3RyaW5nID0gcGFyc2VkU3RyaW5nLnJlcGxhY2UodmFsdWUsIGtleSk7XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkU3RyaW5nO1xufVxuZnVuY3Rpb24gcmVtb3ZlRW1vamlzKGlucHV0KSB7XG4gIGNvbnN0IGJhc2VFbW9qaVJlZ2V4ID0gL1tcXHUyNzAwLVxcdTI3YmZdfFxcdWQ4M2NbXFx1ZGRlNi1cXHVkZGZmXXsyfXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdLztcbiAgY29uc3QgdmFyaWF0aW9uU2VsZWN0b3JSZWdleCA9IC9bXFx1ZmUwZVxcdWZlMGZdPy87XG4gIGNvbnN0IG1vZGlmaWVyUmVnZXggPSAvW1xcdTAzMDAtXFx1MDM2ZlxcdTIwZDAtXFx1MjBmMFxcdWZlMjAtXFx1ZmUyM118XFx1ZDgzY1tcXHVkZmZiLVxcdWRmZmZdLztcbiAgY29uc3QgemVyb1dpZHRoSm9pbmVyUmVnZXggPSAvXFx1MjAwZCg/OlteXFx1ZDgwMC1cXHVkZmZmXXwoPzpcXHVkODNjW1xcdWRkZTYtXFx1ZGRmZl0pezJ9fFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl0pW1xcdWZlMGVcXHVmZTBmXT8oPzpbXFx1MDMwMC1cXHUwMzZmXFx1MjBkMC1cXHUyMGYwXFx1ZmUyMC1cXHVmZTIzXXxcXHVkODNjW1xcdWRmZmItXFx1ZGZmZl0pPy87XG4gIGNvbnN0IGVtb2ppUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzoke2Jhc2VFbW9qaVJlZ2V4LnNvdXJjZX0pJHt2YXJpYXRpb25TZWxlY3RvclJlZ2V4LnNvdXJjZX0oPzoke21vZGlmaWVyUmVnZXguc291cmNlfSk/KD86JHt6ZXJvV2lkdGhKb2luZXJSZWdleC5zb3VyY2V9KSpgLFxuICAgIFwiZ1wiXG4gICk7XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKGVtb2ppUmVnZXgsIFwiXCIpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5VGFncyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvPFteLz5dW14+XSo+XFxzKjxcXC9bXj5dKz4vZ2ksIFwiXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlTm9uUHJpbnRhYmxlQ2hhcmFjdGVycyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvW15cXHgyMC1cXHg3RcK0XFx1MDBDMC1cXHUwMEZGy4bLnF0rL2csIFwiXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVGFncyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksIFwiXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlV2hpdGVzcGFjZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxyXFxufFxccnxcXG58XFx0L2csIFwiXCIpLnJlcGxhY2UoLyArL2csIFwiIFwiKTtcbn1cbmZ1bmN0aW9uIHNsdWdpZnkoaW5wdXQpIHtcbiAgcmV0dXJuIHJlbW92ZUFjY2VudHMoaW5wdXQpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2UoL1soKV0vZywgXCJcIikucmVwbGFjZSgvIC9nLCBcIi1cIikucmVwbGFjZSgvW1wiJTw+XFxcXF5ge3x9XS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyBzcmMvZGF0ZS50c1xudmFyIE1JTlVURSA9IDYwO1xudmFyIEhPVVIgPSBNSU5VVEUgKiA2MDtcbnZhciBEQVkgPSBIT1VSICogMjQ7XG52YXIgV0VFSyA9IERBWSAqIDc7XG52YXIgTU9OVEggPSBEQVkgKiAzMDtcbnZhciBZRUFSID0gMzY1ICogREFZO1xuZnVuY3Rpb24gaXNJc29EYXRlKGlucHV0KSB7XG4gIGlmICghL1xcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9LlxcZHszfVovLnRlc3QoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpbnB1dCk7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkgPT09IGlucHV0O1xufVxuZnVuY3Rpb24gaXNvRGF0ZShpbnB1dCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGlucHV0KS50b0lTT1N0cmluZygpO1xuICB9XG4gIHJldHVybiAoLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShpbnB1dCkge1xuICBjb25zdCBkYXRlID0gaXMyLmRhdGUoaW5wdXQpID8gaW5wdXQgOiBuZXcgRGF0ZShpbnB1dCk7XG4gIHJldHVybiAhTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDFlMyk7XG59XG5mdW5jdGlvbiB0aW1lU2luY2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRheSA9IFwiZGF5XCIsXG4gICAgZGF5cyxcbiAgICBob3VyID0gXCJob3VyXCIsXG4gICAgaG91cnMsXG4gICAgbWludXRlID0gXCJtaW51dGVcIixcbiAgICBtaW51dGVzLFxuICAgIG1vbnRoID0gXCJtb250aFwiLFxuICAgIG1vbnRocyxcbiAgICBwcmVmaXgsXG4gICAgc2Vjb25kID0gXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzLFxuICAgIHNraXBXZWVrcyA9IGZhbHNlLFxuICAgIHN1ZmZpeCA9IFwiYWdvXCIsXG4gICAgd2VlayA9IFwid2Vla1wiLFxuICAgIHdlZWtzLFxuICAgIHllYXIgPSBcInllYXJcIixcbiAgICB5ZWFyc1xuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgZGF0ZSA9IHR5cGVvZiBpbnB1dCA9PT0gXCJudW1iZXJcIiA/IGlucHV0IDogdGltZXN0YW1wKGlucHV0KTtcbiAgY29uc3QgZGlmZiA9IG5vdygpIC0gZGF0ZTtcbiAgbGV0IHF1YW50aXR5ID0gTWF0aC5mbG9vcihkaWZmIC8gWUVBUik7XG4gIGNvbnN0IG91dHB1dCA9ICh2YWx1ZSwgY2FwdGlvbikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBgJHt2YWx1ZX0gJHtjYXB0aW9ufWA7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgcmVzdWx0ID0gYCR7cHJlZml4fSAke3Jlc3VsdH1gO1xuICAgIH1cbiAgICBpZiAoc3VmZml4KSB7XG4gICAgICByZXN1bHQgPSBgJHtyZXN1bHR9ICR7c3VmZml4fWA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGlmIChxdWFudGl0eSA+PSAxKSB7XG4gICAgcmV0dXJuIG91dHB1dChxdWFudGl0eSwgcGx1cmFsaXplKHF1YW50aXR5LCB5ZWFyLCB5ZWFycykpO1xuICB9XG4gIHF1YW50aXR5ID0gTWF0aC5mbG9vcihkaWZmIC8gTU9OVEgpO1xuICBpZiAocXVhbnRpdHkgPiAxKSB7XG4gICAgcmV0dXJuIG91dHB1dChxdWFudGl0eSwgcGx1cmFsaXplKHF1YW50aXR5LCBtb250aCwgbW9udGhzKSk7XG4gIH1cbiAgaWYgKCFza2lwV2Vla3MpIHtcbiAgICBxdWFudGl0eSA9IE1hdGguZmxvb3IoZGlmZiAvIFdFRUspO1xuICAgIGlmIChxdWFudGl0eSA+IDEpIHtcbiAgICAgIHJldHVybiBvdXRwdXQocXVhbnRpdHksIHBsdXJhbGl6ZShxdWFudGl0eSwgd2Vlaywgd2Vla3MpKTtcbiAgICB9XG4gIH1cbiAgcXVhbnRpdHkgPSBNYXRoLmZsb29yKGRpZmYgLyBEQVkpO1xuICBpZiAocXVhbnRpdHkgPj0gMSkge1xuICAgIHJldHVybiBvdXRwdXQocXVhbnRpdHksIHBsdXJhbGl6ZShxdWFudGl0eSwgZGF5LCBkYXlzKSk7XG4gIH1cbiAgcXVhbnRpdHkgPSBNYXRoLmZsb29yKGRpZmYgLyBIT1VSKTtcbiAgaWYgKHF1YW50aXR5ID49IDEpIHtcbiAgICByZXR1cm4gb3V0cHV0KHF1YW50aXR5LCBwbHVyYWxpemUocXVhbnRpdHksIGhvdXIsIGhvdXJzKSk7XG4gIH1cbiAgcXVhbnRpdHkgPSBNYXRoLmZsb29yKGRpZmYgLyBNSU5VVEUpO1xuICBpZiAocXVhbnRpdHkgPiAxKSB7XG4gICAgcmV0dXJuIG91dHB1dChxdWFudGl0eSwgcGx1cmFsaXplKHF1YW50aXR5LCBtaW51dGUsIG1pbnV0ZXMpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0KE1hdGguZmxvb3IoZGlmZiksIHBsdXJhbGl6ZShkaWZmLCBzZWNvbmQsIHNlY29uZHMpKTtcbn1cbmZ1bmN0aW9uIHRpbWVzdGFtcChpbnB1dCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIG5vdygpO1xuICB9XG4gIGNvbnN0IGRhdGUgPSB0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIgPyBuZXcgRGF0ZShpbnB1dCkgOiBpbnB1dDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxZTMpO1xufVxuXG4vLyBzcmMvZGV2aWNlcy50c1xuZnVuY3Rpb24gaXNEYXJrTW9kZSgpIHtcbiAgcmV0dXJuICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXM7XG59XG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICByZXR1cm4gISF3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYShcIihwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM7XG59XG5mdW5jdGlvbiBwcmVmZXJzUmVkdWNlZE1vdGlvbigpIHtcbiAgcmV0dXJuICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoXCJwcmVmZXJzLXJlZHVjZWQtbW90aW9uXCIpLm1hdGNoZXM7XG59XG5cbi8vIHNyYy9mb3JtYXR0ZXJzLnRzXG5mdW5jdGlvbiBmb3JtYXRCb29sZWFuKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dCA/IFwiWWVzXCIgOiBcIk5vXCI7XG59XG5mdW5jdGlvbiBmb3JtYXRDUEYodmFsdWUpIHtcbiAgY29uc3QgY2xlYXJWYWx1ZSA9IGNsZWFudXBOdW1lcmljU3RyaW5nKHZhbHVlKTtcbiAgaWYgKGNsZWFyVmFsdWUubGVuZ3RoID49IDEwKSB7XG4gICAgcmV0dXJuIGAke2NsZWFyVmFsdWUuc2xpY2UoMCwgMyl9LiR7Y2xlYXJWYWx1ZS5zbGljZSgzLCA2KX0uJHtjbGVhclZhbHVlLnNsaWNlKFxuICAgICAgNixcbiAgICAgIDlcbiAgICApfS0ke2NsZWFyVmFsdWUuc2xpY2UoOSwgMTEpfWA7XG4gIH0gZWxzZSBpZiAoY2xlYXJWYWx1ZS5sZW5ndGggPj0gNykge1xuICAgIHJldHVybiBgJHtjbGVhclZhbHVlLnNsaWNlKDAsIDMpfS4ke2NsZWFyVmFsdWUuc2xpY2UoMywgNil9LiR7Y2xlYXJWYWx1ZS5zbGljZSg2LCA5KX1gO1xuICB9IGVsc2UgaWYgKGNsZWFyVmFsdWUubGVuZ3RoID49IDQpIHtcbiAgICByZXR1cm4gYCR7Y2xlYXJWYWx1ZS5zbGljZSgwLCAzKX0uJHtjbGVhclZhbHVlLnNsaWNlKDMsIDYpfWA7XG4gIH1cbiAgcmV0dXJuIGNsZWFyVmFsdWU7XG59XG5mdW5jdGlvbiBmb3JtYXREYXRlTG9jYWxlKGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBsb2NhbGUgPSBcImVuLUdCXCIsIHNob3dUaW1lID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGZvcm1hdE9wdGlvbnMgPSB7XG4gICAgeWVhcjogXCIyLWRpZ2l0XCIsXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgIGRheTogXCIyLWRpZ2l0XCJcbiAgfTtcbiAgaWYgKHNob3dUaW1lKSB7XG4gICAgZm9ybWF0T3B0aW9ucy5ob3VyID0gXCIyLWRpZ2l0XCI7XG4gICAgZm9ybWF0T3B0aW9ucy5taW51dGUgPSBcIjItZGlnaXRcIjtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUoaW5wdXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIGZvcm1hdE9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZm9ybWF0TW9uZXkoaW5wdXQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGRlY2ltYWxDaGFyID0gXCIuXCIsIHNob3dDZW50cyA9IGZhbHNlLCBzeW1ib2wgPSBcIiRcIiwgdGhvdXNhbmRzQ2hhciA9IFwiLFwiIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc05lZ2F0aXZlID0gaW5wdXQgPCAwO1xuICBjb25zdCB2YWx1ZSA9IE1hdGguYWJzKGlucHV0KTtcbiAgY29uc3QgW2Ftb3VudCwgY2VudHNdID0gdmFsdWUudG9GaXhlZCgyKS5zcGxpdChcIi5cIik7XG4gIGNvbnN0IHBhZFN0YXJ0ID0gYW1vdW50Lmxlbmd0aCA+IDMgPyBhbW91bnQubGVuZ3RoICUgMyA6IDA7XG4gIGNvbnN0IGluaXRpYWwgPSBhbW91bnQuc2xpY2UoMCwgcGFkU3RhcnQpO1xuICBjb25zdCByZW1haW4gPSBhbW91bnQuc2xpY2UocGFkU3RhcnQpLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBgJDEke3Rob3VzYW5kc0NoYXJ9YCk7XG4gIGxldCBmb3JtYXR0ZWQgPSBgJHtyZW1haW59YDtcbiAgaWYgKGluaXRpYWwpIHtcbiAgICBmb3JtYXR0ZWQgPSBgJHtpbml0aWFsfSR7dGhvdXNhbmRzQ2hhcn0ke3JlbWFpbn1gO1xuICB9XG4gIGlmIChjZW50cyAhPT0gXCIwMFwiIHx8IHNob3dDZW50cykge1xuICAgIGZvcm1hdHRlZCArPSBgJHtkZWNpbWFsQ2hhcn0ke2NlbnRzfWA7XG4gIH1cbiAgcmV0dXJuIGAke2lzTmVnYXRpdmUgPyBcIi1cIiA6IFwiXCJ9JHtzeW1ib2x9JHtmb3JtYXR0ZWR9YDtcbn1cbmZ1bmN0aW9uIGZvcm1hdFBob25lQlIoaW5wdXQpIHtcbiAgY29uc3QgcGhvbmUgPSBpbnB1dC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gIGlmIChwaG9uZS5sZW5ndGggPT09IDgpIHtcbiAgICByZXR1cm4gcGhvbmUucmVwbGFjZSgvXihcXGR7NH0pKFxcZHs0fSkuKi8sIFwiJDEtJDJcIik7XG4gIH1cbiAgaWYgKHBob25lLmxlbmd0aCA9PT0gOSkge1xuICAgIHJldHVybiBwaG9uZS5yZXBsYWNlKC9eKFxcZHs1fSkoXFxkezR9KS4qLywgXCIkMS0kMlwiKTtcbiAgfVxuICBpZiAocGhvbmUubGVuZ3RoID09PSAxMCB8fCBwaG9uZS5sZW5ndGggPT09IDExKSB7XG4gICAgcmV0dXJuIHBob25lLnJlcGxhY2UoL14oXFxkezJ9KShcXGR7NCw1fSkoXFxkezR9KS4qLywgXCIoJDEpICQyLSQzXCIpO1xuICB9XG4gIHJldHVybiBwaG9uZTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFBob25lVVMoaW5wdXQpIHtcbiAgY29uc3QgcGhvbmUgPSBpbnB1dC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gIGlmIChwaG9uZS5sZW5ndGggPT09IDEwKSB7XG4gICAgcmV0dXJuIHBob25lLnJlcGxhY2UoL14oXFxkezN9KShcXGR7M30pKFxcZHs0fSkuKi8sIFwiKCQxKSAkMi0kM1wiKTtcbiAgfVxuICBpZiAocGhvbmUubGVuZ3RoID09PSAxMSAmJiBwaG9uZS5zdGFydHNXaXRoKFwiMVwiKSkge1xuICAgIHJldHVybiBwaG9uZS5yZXBsYWNlKC9eMShcXGR7M30pKFxcZHszfSkoXFxkezR9KS4qLywgXCIrMSAoJDEpICQyLSQzXCIpO1xuICB9XG4gIHJldHVybiBwaG9uZTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFBvc3RhbENvZGVCUih2YWx1ZSkge1xuICBjb25zdCBjbGVhclZhbHVlID0gY2xlYW51cE51bWVyaWNTdHJpbmcodmFsdWUpO1xuICBpZiAoY2xlYXJWYWx1ZS5sZW5ndGggPj0gNikge1xuICAgIHJldHVybiBgJHtjbGVhclZhbHVlLnNsaWNlKDAsIDUpfS0ke2NsZWFyVmFsdWUuc2xpY2UoNSwgOCl9YDtcbiAgfVxuICByZXR1cm4gY2xlYXJWYWx1ZTtcbn1cblxuLy8gc3JjL2Z1bmN0aW9ucy50c1xuZnVuY3Rpb24gZGVtZXRob2RpemUoZm4pIHtcbiAgcmV0dXJuIChwYXJhbWV0ZXIsIC4uLnJlc3QpID0+IGZuLmFwcGx5KHBhcmFtZXRlciwgcmVzdCk7XG59XG5hc3luYyBmdW5jdGlvbiBtZWFzdXJlRXhlY3V0aW9uVGltZShjYWxsYmFjaykge1xuICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsYmFjaygpO1xuICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgdG90YWwgPSBlbmQgLSBzdGFydDtcbiAgY29uc29sZS5sb2coYENvbXBsZXRlZCBpbiAke01hdGguY2VpbCh0b3RhbCl9IG1pbGxpc2Vjb25kc2ApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHZvaWQgMDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdDtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZuKC4uLmFyZ3VtZW50c18pIHtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJndW1lbnRzXyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5mdW5jdGlvbiBwaXBlKC4uLmZucykge1xuICByZXR1cm4gKGlucHV0KSA9PiBmbnMucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBmbikgPT4gZm4ocHJldmlvdXNWYWx1ZSksIGlucHV0KTtcbn1cblxuLy8gc3JjL21pc2MudHNcbmltcG9ydCBpczMgZnJvbSBcImlzLWxpdGVcIjtcblxuLy8gc3JjL251bWJlcnMudHNcbmZ1bmN0aW9uIGNlaWwoaW5wdXQsIGRpZ2l0cyA9IDIpIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzO1xuICByZXR1cm4gTWF0aC5jZWlsKGlucHV0ICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4gPSAwLCBtYXggPSAxMDApIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxuZnVuY3Rpb24gZmxvb3IoaW5wdXQsIGRpZ2l0cyA9IDIpIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzO1xuICByZXR1cm4gTWF0aC5mbG9vcihpbnB1dCAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5mdW5jdGlvbiBwYWQoaW5wdXQsIGxlbmd0aCA9IDIpIHtcbiAgcmV0dXJuIGAke2lucHV0fWAucGFkU3RhcnQobGVuZ3RoLCBcIjBcIik7XG59XG5mdW5jdGlvbiByYW5kb21OdW1iZXIobWluID0gMCwgbWF4ID0gMTApIHtcbiAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuZnVuY3Rpb24gcm91bmQoaW5wdXQsIGRpZ2l0cyA9IDIpIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzO1xuICByZXR1cm4gTWF0aC5yb3VuZChpbnB1dCAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5cbi8vIHNyYy9taXNjLnRzXG5mdW5jdGlvbiBjb25kaXRpb25hbChjYXNlcywgZGVmYXVsdENhc2UpIHtcbiAgZm9yIChjb25zdCBbZXhwcmVzc2lvbiwgY2FsbGJhY2tdIG9mIGNhc2VzKSB7XG4gICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdENhc2U/LigpO1xufVxuYXN5bmMgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaW5wdXQpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXREYXRhVHlwZShpbnB1dCwgdG9Mb3dlckNhc2UgPSBmYWxzZSkge1xuICBjb25zdCBkYXRhVHlwZU5hbWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpLnNsaWNlKDgsIC0xKTtcbiAgbGV0IG91dHB1dCA9IGRhdGFUeXBlTmFtZTtcbiAgaWYgKC9IVE1MXFx3K0VsZW1lbnQvLnRlc3QoZGF0YVR5cGVOYW1lKSkge1xuICAgIG91dHB1dCA9IFwiSFRNTEVsZW1lbnRcIjtcbiAgfVxuICByZXR1cm4gdG9Mb3dlckNhc2UgPyBvdXRwdXQudG9Mb3dlckNhc2UoKSA6IG91dHB1dDtcbn1cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWx1ZSA9IGlzMy5mdW5jdGlvbihtZXNzYWdlKSA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2U7XG4gIHRocm93IG5ldyBFcnJvcih2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0pTT04oaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICBKU09OLnBhcnNlKGlucHV0KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gaXNSZXF1aXJlZChpbnB1dCA9IFwicGFyYW1ldGVyXCIsIENvbnN0cnVjdGFibGUgPSBUeXBlRXJyb3IpIHtcbiAgdGhyb3cgbmV3IENvbnN0cnVjdGFibGUoYFwiJHtpbnB1dH1cIiBpcyByZXF1aXJlZGApO1xufVxuZnVuY3Rpb24gbG9nZ2VyKHR5cGUsIHRpdGxlLCBkYXRhLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBjb2xsYXBzZWQgPSB0cnVlLCBoaWRlVGltZXN0YW1wID0gZmFsc2UsIHNraXAgPSBmYWxzZSwgdHlwZUNvbG9yID0gXCJncmF5XCIgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGdyb3VwTWV0aG9kID0gY29sbGFwc2VkID8gY29uc29sZS5ncm91cENvbGxhcHNlZCA6IGNvbnNvbGUuZ3JvdXA7XG4gIGNvbnN0IGRhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgY29uc3QgcGFydHMgPSBbYCVjICR7dHlwZX1gXTtcbiAgY29uc3Qgc3R5bGVzID0gW2Bjb2xvcjogJHt0eXBlQ29sb3J9OyBmb250LXdlaWdodDogbGlnaHRlcjtgLCBcImNvbG9yOiBpbmhlcml0O1wiXTtcbiAgaWYgKCFoaWRlVGltZXN0YW1wKSB7XG4gICAgc3R5bGVzLnB1c2goXCJjb2xvcjogZ3JheTsgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XCIpO1xuICB9XG4gIGNvbnN0IHRpbWUgPSBgJHtwYWQoZGF0ZS5nZXRIb3VycygpLCAyKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCksIDIpfToke3BhZChcbiAgICBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAyXG4gICl9YDtcbiAgcGFydHMucHVzaChgJWMke3RpdGxlfWApO1xuICBpZiAoIWhpZGVUaW1lc3RhbXApIHtcbiAgICBwYXJ0cy5wdXNoKGAlY0AgJHt0aW1lfWApO1xuICB9XG4gIGlmICghc2tpcCkge1xuICAgIGdyb3VwTWV0aG9kKHBhcnRzLmpvaW4oXCIgXCIpLCAuLi5zdHlsZXMpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxufVxuZnVuY3Rpb24gbnVsbGlmeSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPz8gbnVsbDtcbn1cbmZ1bmN0aW9uIHBvcHVwQ2VudGVyKHVybCwgdGl0bGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgeyBzY3JlZW4sIHNjcmVlbkxlZnQsIHNjcmVlblRvcCB9ID0gd2luZG93O1xuICBsZXQgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgbGV0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgaWYgKCFzY3JlZW5XaWR0aCkge1xuICAgIHNjcmVlbldpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogc2NyZWVuLndpZHRoO1xuICB9XG4gIGlmICghc2NyZWVuSGVpZ2h0KSB7XG4gICAgc2NyZWVuSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBzY3JlZW4uaGVpZ2h0O1xuICB9XG4gIGNvbnN0IGxlZnQgPSBzY3JlZW5XaWR0aCAvIDIgLSB3aWR0aCAvIDIgKyBzY3JlZW5MZWZ0O1xuICBjb25zdCB0b3AgPSBzY3JlZW5IZWlnaHQgLyAyIC0gaGVpZ2h0IC8gMiArIHNjcmVlblRvcDtcbiAgY29uc3QgcG9wdXAgPSB3aW5kb3cub3BlbihcbiAgICB1cmwsXG4gICAgdGl0bGUsXG4gICAgYG1lbnViYXI9bm8sbG9jYXRpb249bm8scmVzaXphYmxlPW5vLHNjcm9sbGJhcnM9eWVlcyxzdGF0dXM9bm8sd2lkdGg9JHt3aWR0aH0saGVpZ2h0PSR7aGVpZ2h0fSx0b3A9JHt0b3B9LCBsZWZ0PSR7bGVmdH1gXG4gICk7XG4gIGlmIChwb3B1cCkge1xuICAgIHBvcHVwLmZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIHBvcHVwO1xufVxuZnVuY3Rpb24gcHgodmFsdWUpIHtcbiAgcmV0dXJuIGlzMy5udW1iZXIodmFsdWUpIHx8IGlzMy5udW1lcmljU3RyaW5nKHZhbHVlKSA/IGAke3ZhbHVlfXB4YCA6IHZhbHVlO1xufVxuZnVuY3Rpb24gdW5pcXVlKGxlbmd0aCA9IDgsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgaW5jbHVkZUxvd2VyY2FzZSA9IHRydWUsXG4gICAgaW5jbHVkZU51bWJlcnMgPSB0cnVlLFxuICAgIGluY2x1ZGVTeW1ib2xzID0gZmFsc2UsXG4gICAgaW5jbHVkZVVwcGVyY2FzZSA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGxvd2VyY2FzZSA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbiAgY29uc3QgdXBwZXJjYXNlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICBjb25zdCBudW1iZXJzID0gXCIwMTIzNDU2Nzg5XCI7XG4gIGNvbnN0IHN5bWJvbHMgPSBcIiE/QCMkJV4mKitfLT06Ln5cIjtcbiAgbGV0IGNoYXJhY3RlcnMgPSBcIlwiO1xuICBpZiAoaW5jbHVkZUxvd2VyY2FzZSkge1xuICAgIGNoYXJhY3RlcnMgKz0gbG93ZXJjYXNlO1xuICB9XG4gIGlmIChpbmNsdWRlVXBwZXJjYXNlKSB7XG4gICAgY2hhcmFjdGVycyArPSB1cHBlcmNhc2U7XG4gIH1cbiAgaWYgKGluY2x1ZGVOdW1iZXJzKSB7XG4gICAgY2hhcmFjdGVycyArPSBudW1iZXJzO1xuICB9XG4gIGlmIChpbmNsdWRlU3ltYm9scykge1xuICAgIGNoYXJhY3RlcnMgKz0gc3ltYm9scztcbiAgfVxuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgZm9yIChsZXQgaW5kZXggPSBsZW5ndGg7IGluZGV4ID4gMDsgLS1pbmRleCkge1xuICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChjaGFyYWN0ZXJzLmxlbmd0aCAtIDEpKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHV1aWQoKSB7XG4gIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcbiAgICBjb25zdCB2ID0gYyA9PT0gXCJ4XCIgPyByIDogciAmIDMgfCA4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG5cbi8vIHNyYy9vYmplY3RzLnRzXG5pbXBvcnQgaXM0IGZyb20gXCJpcy1saXRlXCI7XG5mdW5jdGlvbiBjbGVhblVwT2JqZWN0KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGlmIChpbnB1dFtrZXldICE9PSB2b2lkIDApIHtcbiAgICAgIG91dHB1dFtrZXldID0gaW5wdXRba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIGdldE5lc3RlZFByb3BlcnR5KGlucHV0LCBwYXRoKSB7XG4gIGlmICghaXM0LnBsYWluT2JqZWN0KGlucHV0KSAmJiAhaXM0LmFycmF5KGlucHV0KSB8fCAhcGF0aCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2VnbWVudHM7XG4gIGxldCBvdXRwdXQgPSBpbnB1dDtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaW5kZXhdO1xuICAgIGNvbnN0IHJlbWFpbmluZ1NlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UoaW5kZXggKyAxKTtcbiAgICBpZiAoY3VycmVudFNlZ21lbnQgPT09IFwiK1wiICYmIGlzNC5hcnJheShvdXRwdXQpICYmIHJlbWFpbmluZ1NlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG91dHB1dC5tYXAoKGQpID0+IGRbcmVtYWluaW5nU2VnbWVudHMuam9pbihcIi5cIildKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG91dHB1dCA9IG91dHB1dFtjdXJyZW50U2VnbWVudF07XG4gICAgfSBjYXRjaCB7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBpbnZlcnRLZXlzKGlucHV0KSB7XG4gIGlmICghaXM0LnBsYWluT2JqZWN0KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbiBvYmplY3RcIik7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0KSkge1xuICAgIHJlc3VsdFt2YWx1ZV0gPSBrZXk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGtleU1pcnJvcihpbnB1dCkge1xuICBpZiAoIWlzNC5wbGFpbk9iamVjdChpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYW4gb2JqZWN0XCIpO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dHB1dCwga2V5KSkge1xuICAgICAgb3V0cHV0W2tleV0gPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBtZXJnZVByb3BzKGRlZmF1bHRQcm9wcywgcHJvcHMpIHtcbiAgY29uc3QgY2xlYW5Qcm9wcyA9IGNsZWFuVXBPYmplY3QocHJvcHMpO1xuICByZXR1cm4geyAuLi5kZWZhdWx0UHJvcHMsIC4uLmNsZWFuUHJvcHMgfTtcbn1cbmZ1bmN0aW9uIG9iamVjdEVudHJpZXMoaW5wdXQpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGlucHV0KTtcbn1cbmZ1bmN0aW9uIG9iamVjdEtleXMoaW5wdXQpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGlucHV0KTtcbn1cbmZ1bmN0aW9uIG9iamVjdFRvQXJyYXkoaW5wdXQsIGluY2x1ZGVPbmx5KSB7XG4gIGlmICghaXM0LnBsYWluT2JqZWN0KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbiBvYmplY3RcIik7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGlucHV0KS5maWx0ZXIoKFssIHZhbHVlXSkgPT4gaW5jbHVkZU9ubHkgPyB0eXBlb2YgdmFsdWUgPT09IGAke2luY2x1ZGVPbmx5fWAgOiB0cnVlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHsgW2tleV06IHZhbHVlIH0pKTtcbn1cbmZ1bmN0aW9uIG9taXQoaW5wdXQsIC4uLmZpbHRlcikge1xuICBpZiAoIWlzNC5wbGFpbk9iamVjdChpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYW4gb2JqZWN0XCIpO1xuICB9XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKSB7XG4gICAgICBpZiAoIWZpbHRlci5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gaW5wdXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHBpY2soaW5wdXQsIC4uLmZpbHRlcikge1xuICBpZiAoIWlzNC5wbGFpbk9iamVjdChpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYW4gb2JqZWN0XCIpO1xuICB9XG4gIGlmICghZmlsdGVyLmxlbmd0aCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICBjb25zdCBvdXRwdXQgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gaW5wdXQpIHtcbiAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChpbnB1dCwga2V5KSkge1xuICAgICAgaWYgKGZpbHRlci5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gaW5wdXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRm9ybWF0KGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBhZGRQcmVmaXggPSBmYWxzZSwgZW5jb2RlciA9IGVuY29kZVVSSUNvbXBvbmVudCwgZW5jb2RlVmFsdWVzT25seSA9IHRydWUgfSA9IG9wdGlvbnM7XG4gIGlmICghaXM0LnBsYWluT2JqZWN0KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJpbnB1dCB0eXBlIGlzbid0IHN1cHBvcnRlZFwiKTtcbiAgfVxuICBjb25zdCBpc1ZhbGlkSW5wdXQgPSBPYmplY3QudmFsdWVzKGlucHV0KS5ldmVyeSgoaXRlbSkgPT4ge1xuICAgIGlmIChpczQuYXJyYXkoaXRlbSkpIHtcbiAgICAgIHJldHVybiBpdGVtLmV2ZXJ5KChkKSA9PiBpczQuc3RyaW5nKGQpIHx8IGlzNC5udW1iZXIoZCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXM0LnN0cmluZyhpdGVtKTtcbiAgfSk7XG4gIGlmICghaXNWYWxpZElucHV0KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImlucHV0IGZvcm1hdCBpc24ndCBzdXBwb3J0ZWRcIik7XG4gIH1cbiAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmVudHJpZXMoaW5wdXQpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3QgbmV4dEtleSA9IGVuY29kZVZhbHVlc09ubHkgPyBrZXkgOiBlbmNvZGVyKGtleSk7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gaXM0LmFycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChlbmNvZGVyKS5qb2luKFwiLFwiKSA6IGVuY29kZXIoYCR7dmFsdWV9YCk7XG4gICAgcmV0dXJuIGAke25leHRLZXl9PSR7bmV4dFZhbHVlfWA7XG4gIH0pLmpvaW4oXCImXCIpO1xuICByZXR1cm4gYCR7YWRkUHJlZml4ID8gXCI/XCIgOiBcIlwifSR7b3V0cHV0fWA7XG59XG5mdW5jdGlvbiBxdWVyeVN0cmluZ1BhcnNlKGlucHV0KSB7XG4gIGxldCBzZWFyY2ggPSBpbnB1dDtcbiAgaWYgKGlucHV0LnNsaWNlKDAsIDEpID09PSBcIj9cIikge1xuICAgIHNlYXJjaCA9IGlucHV0LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBzZWFyY2guc3BsaXQoXCImXCIpLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gZC5zcGxpdChcIj1cIik7XG4gICAgYWNjW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuZnVuY3Rpb24gc29ydE9iamVjdEtleXMoaW5wdXQpIHtcbiAgcmV0dXJuIG9iamVjdEtleXMoaW5wdXQpLnNvcnQoKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgYWNjW2tleV0gPSBpbnB1dFtrZXldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuLy8gc3JjL3N0YXRpc3RpY3MudHNcbmltcG9ydCBpczUgZnJvbSBcImlzLWxpdGVcIjtcbmZ1bmN0aW9uIG1lYW4oaW5wdXQsIHByZWNpc2lvbikge1xuICBjb25zdCBvdXRwdXQgPSBpbnB1dC5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKSAvIGlucHV0Lmxlbmd0aDtcbiAgaWYgKGlzNS5udW1iZXIocHJlY2lzaW9uKSkge1xuICAgIHJldHVybiByb3VuZChvdXRwdXQsIHByZWNpc2lvbik7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIG1lZGlhbihpbnB1dCkge1xuICBjb25zdCBzb3J0ZWQgPSBbLi4uaW5wdXRdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgY29uc3QgbWlkZGxlID0gTWF0aC5mbG9vcihzb3J0ZWQubGVuZ3RoIC8gMik7XG4gIGlmIChzb3J0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgIHJldHVybiAoc29ydGVkW21pZGRsZSAtIDFdICsgc29ydGVkW21pZGRsZV0pIC8gMjtcbiAgfVxuICByZXR1cm4gc29ydGVkW21pZGRsZV07XG59XG5mdW5jdGlvbiBtb2RlKGlucHV0KSB7XG4gIGNvbnN0IGNvdW50ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBpbnB1dCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBjb3VudC5nZXQodmFsdWUpID8/IDA7XG4gICAgY291bnQuc2V0KHZhbHVlLCBjdXJyZW50ICsgMSk7XG4gIH1cbiAgY29uc3Qgc29ydGVkID0gWy4uLmNvdW50LmVudHJpZXMoKV0uc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuICByZXR1cm4gc29ydGVkWzBdWzBdO1xufVxuXG4vLyBzcmMvdmFsaWRhdG9ycy50c1xuZnVuY3Rpb24gaXNWYWxpZENQRih2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUucmVwbGFjZSgvWy4tXS9nLCBcIlwiKTtcbiAgbGV0IHN1bSA9IDA7XG4gIGxldCByZXN0O1xuICBpZiAoL14oXFxkKVxcMSskLy50ZXN0KG5ld1ZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDk7IGluZGV4KyspIHtcbiAgICBzdW0gKz0gcGFyc2VJbnQobmV3VmFsdWUuc3Vic3RyaW5nKGluZGV4IC0gMSwgaW5kZXgpLCAxMCkgKiAoMTEgLSBpbmRleCk7XG4gIH1cbiAgcmVzdCA9IHN1bSAqIDEwICUgMTE7XG4gIGlmIChyZXN0ID09PSAxMCB8fCByZXN0ID09PSAxMSkge1xuICAgIHJlc3QgPSAwO1xuICB9XG4gIGlmIChyZXN0ICE9PSBwYXJzZUludChuZXdWYWx1ZS5zdWJzdHJpbmcoOSwgMTApLCAxMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3VtID0gMDtcbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSAxMDsgaW5kZXgrKykge1xuICAgIHN1bSArPSBwYXJzZUludChuZXdWYWx1ZS5zdWJzdHJpbmcoaW5kZXggLSAxLCBpbmRleCksIDEwKSAqICgxMiAtIGluZGV4KTtcbiAgfVxuICByZXN0ID0gc3VtICogMTAgJSAxMTtcbiAgaWYgKHJlc3QgPT09IDEwIHx8IHJlc3QgPT09IDExKSB7XG4gICAgcmVzdCA9IDA7XG4gIH1cbiAgcmV0dXJuIHJlc3QgPT09IHBhcnNlSW50KG5ld1ZhbHVlLnN1YnN0cmluZygxMCwgMTEpLCAxMCk7XG59XG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwodmFsdWUpIHtcbiAgcmV0dXJuIC9eW1xcdyUrLi1dK0BbXFxkLmEtei1dK1xcLlthLXpdezIsfSQvaS50ZXN0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIG1heExlbmd0aCA9IDY0LFxuICAgIG1heExlbmd0aE1lc3NhZ2UgPSBcIlBhc3N3b3JkIG11c3QgYmUgYSBtYXhpbXVtIG9mIDY0IGNoYXJhY3RlcnNcIixcbiAgICBtaW5MZW5ndGggPSA2LFxuICAgIG1pbkxlbmd0aE1lc3NhZ2UgPSBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdcIixcbiAgICByZWdleCA9IC9eKD89LipbQS1aXSkoPz0uKlthLXpdKSg/PS4qXFxkKSg/PS4qWyEjJCUmKj9AXl0pLiokLyxcbiAgICByZXF1aXJlZENoYXJhY3RlcnNNZXNzYWdlID0gXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgMSBudW1iZXIsIDEgbG93ZXJjYXNlLCAxIHVwcGVyY2FzZSBhbmQgMSBzcGVjaWFsIGNoYXJhY3RlclwiXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1pbkxlbmd0aE1lc3NhZ2UpO1xuICB9XG4gIGlmIChwYXNzd29yZC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWF4TGVuZ3RoTWVzc2FnZSk7XG4gIH1cbiAgaWYgKCFyZWdleC50ZXN0KHBhc3N3b3JkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihyZXF1aXJlZENoYXJhY3RlcnNNZXNzYWdlKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gc3JjL3R5cGVzLnRzXG52YXIgdHlwZXNfZXhwb3J0cyA9IHt9O1xuZXhwb3J0IHtcbiAgQVNZTkNfU1RBVFVTLFxuICBEQVksXG4gIEhPVVIsXG4gIE1JTlVURSxcbiAgTU9OVEgsXG4gIHR5cGVzX2V4cG9ydHMgYXMgVHlwZXMsXG4gIFdFRUssXG4gIFlFQVIsXG4gIGNhcGl0YWxpemUsXG4gIGNlaWwsXG4gIGNsYW1wLFxuICBjbGVhblVwT2JqZWN0LFxuICBjbGVhbnVwSFRNTCxcbiAgY2xlYW51cE51bWVyaWNTdHJpbmcsXG4gIGNsZWFudXBVUkksXG4gIGNvbmRpdGlvbmFsLFxuICBjb3B5VG9DbGlwYm9hcmQsXG4gIGNvcnMsXG4gIGNyZWF0ZUFycmF5LFxuICBkZW1ldGhvZGl6ZSxcbiAgZmxvb3IsXG4gIGZvcm1hdEJvb2xlYW4sXG4gIGZvcm1hdENQRixcbiAgZm9ybWF0RGF0ZUxvY2FsZSxcbiAgZm9ybWF0TW9uZXksXG4gIGZvcm1hdFBob25lQlIsXG4gIGZvcm1hdFBob25lVVMsXG4gIGZvcm1hdFBvc3RhbENvZGVCUixcbiAgZ2V0RGF0YVR5cGUsXG4gIGdldEluaXRpYWxzLFxuICBnZXROZXN0ZWRQcm9wZXJ0eSxcbiAgZ2V0UmFuZG9tSXRlbSxcbiAgaW52YXJpYW50LFxuICBpbnZlcnRLZXlzLFxuICBpc0RhcmtNb2RlLFxuICBpc0lzb0RhdGUsXG4gIGlzSlNPTixcbiAgaXNSZXF1aXJlZCxcbiAgaXNUb3VjaERldmljZSxcbiAgaXNWYWxpZENQRixcbiAgaXNWYWxpZERhdGUsXG4gIGlzVmFsaWRFbWFpbCxcbiAgaXNvRGF0ZSxcbiAga2V5TWlycm9yLFxuICBsb2dnZXIsXG4gIG1lYW4sXG4gIG1lYXN1cmVFeGVjdXRpb25UaW1lLFxuICBtZWRpYW4sXG4gIG1lcmdlUHJvcHMsXG4gIG1vZGUsXG4gIG5vb3AsXG4gIG5vdyxcbiAgbnVsbGlmeSxcbiAgb2JqZWN0RW50cmllcyxcbiAgb2JqZWN0S2V5cyxcbiAgb2JqZWN0VG9BcnJheSxcbiAgb21pdCxcbiAgb25jZSxcbiAgcGFkLFxuICBwaWNrLFxuICBwaXBlLFxuICBwbHVyYWxpemUsXG4gIHBvbGwsXG4gIHBvcHVwQ2VudGVyLFxuICBwcmVmZXJzUmVkdWNlZE1vdGlvbixcbiAgcHgsXG4gIHF1ZXJ5U3RyaW5nRm9ybWF0LFxuICBxdWVyeVN0cmluZ1BhcnNlLFxuICBxdWlja1NvcnQsXG4gIHJhbmRvbU51bWJlcixcbiAgcmVtb3ZlQWNjZW50cyxcbiAgcmVtb3ZlRHVwbGljYXRlcyxcbiAgcmVtb3ZlRW1vamlzLFxuICByZW1vdmVFbXB0eVRhZ3MsXG4gIHJlbW92ZU5vblByaW50YWJsZUNoYXJhY3RlcnMsXG4gIHJlbW92ZVRhZ3MsXG4gIHJlbW92ZVdoaXRlc3BhY2UsXG4gIHJlcXVlc3QsXG4gIHJvdW5kLFxuICBzaHVmZmxlLFxuICBzbGVlcCxcbiAgc2x1Z2lmeSxcbiAgc29ydEJ5TG9jYWxlQ29tcGFyZSxcbiAgc29ydEJ5UHJpbWl0aXZlLFxuICBzb3J0Q29tcGFyYXRvcixcbiAgc29ydE9iamVjdEtleXMsXG4gIHNwbGl0SW50b0NodW5rcyxcbiAgdGltZVNpbmNlLFxuICB0aW1lc3RhbXAsXG4gIHVuaXF1ZSxcbiAgdXVpZCxcbiAgdmFsaWRhdGVQYXNzd29yZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBzcmMvaGVscGVycy50c1xudmFyIG9iamVjdFR5cGVzID0gW1xuICBcIkFycmF5XCIsXG4gIFwiQXJyYXlCdWZmZXJcIixcbiAgXCJBc3luY0Z1bmN0aW9uXCIsXG4gIFwiQXN5bmNHZW5lcmF0b3JcIixcbiAgXCJBc3luY0dlbmVyYXRvckZ1bmN0aW9uXCIsXG4gIFwiRGF0ZVwiLFxuICBcIkVycm9yXCIsXG4gIFwiRnVuY3Rpb25cIixcbiAgXCJHZW5lcmF0b3JcIixcbiAgXCJHZW5lcmF0b3JGdW5jdGlvblwiLFxuICBcIkhUTUxFbGVtZW50XCIsXG4gIFwiTWFwXCIsXG4gIFwiT2JqZWN0XCIsXG4gIFwiUHJvbWlzZVwiLFxuICBcIlJlZ0V4cFwiLFxuICBcIlNldFwiLFxuICBcIldlYWtNYXBcIixcbiAgXCJXZWFrU2V0XCJcbl07XG52YXIgcHJpbWl0aXZlVHlwZXMgPSBbXG4gIFwiYmlnaW50XCIsXG4gIFwiYm9vbGVhblwiLFxuICBcIm51bGxcIixcbiAgXCJudW1iZXJcIixcbiAgXCJzdHJpbmdcIixcbiAgXCJzeW1ib2xcIixcbiAgXCJ1bmRlZmluZWRcIlxuXTtcbmZ1bmN0aW9uIGdldE9iamVjdFR5cGUodmFsdWUpIHtcbiAgY29uc3Qgb2JqZWN0VHlwZU5hbWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgaWYgKC9IVE1MXFx3K0VsZW1lbnQvLnRlc3Qob2JqZWN0VHlwZU5hbWUpKSB7XG4gICAgcmV0dXJuIFwiSFRNTEVsZW1lbnRcIjtcbiAgfVxuICBpZiAoaXNPYmplY3RUeXBlKG9iamVjdFR5cGVOYW1lKSkge1xuICAgIHJldHVybiBvYmplY3RUeXBlTmFtZTtcbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxuZnVuY3Rpb24gaXNPYmplY3RPZlR5cGUodHlwZSkge1xuICByZXR1cm4gKHZhbHVlKSA9PiBnZXRPYmplY3RUeXBlKHZhbHVlKSA9PT0gdHlwZTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0VHlwZShuYW1lKSB7XG4gIHJldHVybiBvYmplY3RUeXBlcy5pbmNsdWRlcyhuYW1lKTtcbn1cbmZ1bmN0aW9uIGlzT2ZUeXBlKHR5cGUpIHtcbiAgcmV0dXJuICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSB0eXBlO1xufVxuZnVuY3Rpb24gaXNQcmltaXRpdmVUeXBlKG5hbWUpIHtcbiAgcmV0dXJuIHByaW1pdGl2ZVR5cGVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG4vLyBzcmMvaW5kZXgudHNcbnZhciBET01fUFJPUEVSVElFU19UT19DSEVDSyA9IFtcbiAgXCJpbm5lckhUTUxcIixcbiAgXCJvd25lckRvY3VtZW50XCIsXG4gIFwic3R5bGVcIixcbiAgXCJhdHRyaWJ1dGVzXCIsXG4gIFwibm9kZVZhbHVlXCJcbl07XG5mdW5jdGlvbiBpcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIH1cbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICByZXR1cm4gXCJiaWdpbnRcIjtcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgcmV0dXJuIFwiYm9vbGVhblwiO1xuICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgIHJldHVybiBcIm51bWJlclwiO1xuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgIHJldHVybiBcInN5bWJvbFwiO1xuICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xuICAgIGRlZmF1bHQ6XG4gIH1cbiAgaWYgKGlzLmFycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBcIkFycmF5XCI7XG4gIH1cbiAgaWYgKGlzLnBsYWluRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiRnVuY3Rpb25cIjtcbiAgfVxuICBjb25zdCB0YWdUeXBlID0gZ2V0T2JqZWN0VHlwZSh2YWx1ZSk7XG4gIGlmICh0YWdUeXBlKSB7XG4gICAgcmV0dXJuIHRhZ1R5cGU7XG4gIH1cbiAgcmV0dXJuIFwiT2JqZWN0XCI7XG59XG5pcy5hcnJheSA9IEFycmF5LmlzQXJyYXk7XG5pcy5hcnJheU9mID0gKHRhcmdldCwgcHJlZGljYXRlKSA9PiB7XG4gIGlmICghaXMuYXJyYXkodGFyZ2V0KSAmJiAhaXMuZnVuY3Rpb24ocHJlZGljYXRlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0LmV2ZXJ5KChkKSA9PiBwcmVkaWNhdGUoZCkpO1xufTtcbmlzLmFzeW5jR2VuZXJhdG9yRnVuY3Rpb24gPSAodmFsdWUpID0+IGdldE9iamVjdFR5cGUodmFsdWUpID09PSBcIkFzeW5jR2VuZXJhdG9yRnVuY3Rpb25cIjtcbmlzLmFzeW5jRnVuY3Rpb24gPSBpc09iamVjdE9mVHlwZShcIkFzeW5jRnVuY3Rpb25cIik7XG5pcy5iaWdpbnQgPSBpc09mVHlwZShcImJpZ2ludFwiKTtcbmlzLmJvb2xlYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn07XG5pcy5kYXRlID0gaXNPYmplY3RPZlR5cGUoXCJEYXRlXCIpO1xuaXMuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gIWlzLnVuZGVmaW5lZCh2YWx1ZSk7XG5pcy5kb21FbGVtZW50ID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpcy5vYmplY3QodmFsdWUpICYmICFpcy5wbGFpbk9iamVjdCh2YWx1ZSkgJiYgdmFsdWUubm9kZVR5cGUgPT09IDEgJiYgaXMuc3RyaW5nKHZhbHVlLm5vZGVOYW1lKSAmJiBET01fUFJPUEVSVElFU19UT19DSEVDSy5ldmVyeSgocHJvcGVydHkpID0+IHByb3BlcnR5IGluIHZhbHVlKTtcbn07XG5pcy5lbXB0eSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXMuc3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDAgfHwgaXMuYXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBpcy5vYmplY3QodmFsdWUpICYmICFpcy5tYXAodmFsdWUpICYmICFpcy5zZXQodmFsdWUpICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAgfHwgaXMuc2V0KHZhbHVlKSAmJiB2YWx1ZS5zaXplID09PSAwIHx8IGlzLm1hcCh2YWx1ZSkgJiYgdmFsdWUuc2l6ZSA9PT0gMDtcbn07XG5pcy5lcnJvciA9IGlzT2JqZWN0T2ZUeXBlKFwiRXJyb3JcIik7XG5pcy5mdW5jdGlvbiA9IGlzT2ZUeXBlKFwiZnVuY3Rpb25cIik7XG5pcy5nZW5lcmF0b3IgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzLml0ZXJhYmxlKHZhbHVlKSAmJiBpcy5mdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpcy5mdW5jdGlvbih2YWx1ZS50aHJvdyk7XG59O1xuaXMuZ2VuZXJhdG9yRnVuY3Rpb24gPSBpc09iamVjdE9mVHlwZShcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuaXMuaW5zdGFuY2VPZiA9IChpbnN0YW5jZSwgY2xhc3NfKSA9PiB7XG4gIGlmICghaW5zdGFuY2UgfHwgIWNsYXNzXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKSA9PT0gY2xhc3NfLnByb3RvdHlwZTtcbn07XG5pcy5pdGVyYWJsZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzLm51bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiYgaXMuZnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuaXMubWFwID0gaXNPYmplY3RPZlR5cGUoXCJNYXBcIik7XG5pcy5uYW4gPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSk7XG59O1xuaXMubnVsbCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59O1xuaXMubnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBpcy5udWxsKHZhbHVlKSB8fCBpcy51bmRlZmluZWQodmFsdWUpO1xufTtcbmlzLm51bWJlciA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gaXNPZlR5cGUoXCJudW1iZXJcIikodmFsdWUpICYmICFpcy5uYW4odmFsdWUpO1xufTtcbmlzLm51bWVyaWNTdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIGlzLnN0cmluZyh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpO1xufTtcbmlzLm9iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gIWlzLm51bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiYgKGlzLmZ1bmN0aW9uKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpO1xufTtcbmlzLm9uZU9mID0gKHRhcmdldCwgdmFsdWUpID0+IHtcbiAgaWYgKCFpcy5hcnJheSh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0YXJnZXQuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn07XG5pcy5wbGFpbkZ1bmN0aW9uID0gaXNPYmplY3RPZlR5cGUoXCJGdW5jdGlvblwiKTtcbmlzLnBsYWluT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gIGlmIChnZXRPYmplY3RUeXBlKHZhbHVlKSAhPT0gXCJPYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcbn07XG5pcy5wcmltaXRpdmUgPSAodmFsdWUpID0+IGlzLm51bGwodmFsdWUpIHx8IGlzUHJpbWl0aXZlVHlwZSh0eXBlb2YgdmFsdWUpO1xuaXMucHJvbWlzZSA9IGlzT2JqZWN0T2ZUeXBlKFwiUHJvbWlzZVwiKTtcbmlzLnByb3BlcnR5T2YgPSAodGFyZ2V0LCBrZXksIHByZWRpY2F0ZSkgPT4ge1xuICBpZiAoIWlzLm9iamVjdCh0YXJnZXQpIHx8ICFrZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgaWYgKGlzLmZ1bmN0aW9uKHByZWRpY2F0ZSkpIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gaXMuZGVmaW5lZCh2YWx1ZSk7XG59O1xuaXMucmVnZXhwID0gaXNPYmplY3RPZlR5cGUoXCJSZWdFeHBcIik7XG5pcy5zZXQgPSBpc09iamVjdE9mVHlwZShcIlNldFwiKTtcbmlzLnN0cmluZyA9IGlzT2ZUeXBlKFwic3RyaW5nXCIpO1xuaXMuc3ltYm9sID0gaXNPZlR5cGUoXCJzeW1ib2xcIik7XG5pcy51bmRlZmluZWQgPSBpc09mVHlwZShcInVuZGVmaW5lZFwiKTtcbmlzLndlYWtNYXAgPSBpc09iamVjdE9mVHlwZShcIldlYWtNYXBcIik7XG5pcy53ZWFrU2V0ID0gaXNPYmplY3RPZlR5cGUoXCJXZWFrU2V0XCIpO1xudmFyIHNyY19kZWZhdWx0ID0gaXM7XG5leHBvcnQge1xuICBzcmNfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gc3JjL2xpdGVyYWxzL2luZGV4LnRzXG52YXIgQUNUSU9OUyA9IHtcbiAgSU5JVDogXCJpbml0XCIsXG4gIFNUQVJUOiBcInN0YXJ0XCIsXG4gIFNUT1A6IFwic3RvcFwiLFxuICBSRVNFVDogXCJyZXNldFwiLFxuICBQUkVWOiBcInByZXZcIixcbiAgTkVYVDogXCJuZXh0XCIsXG4gIEdPOiBcImdvXCIsXG4gIENMT1NFOiBcImNsb3NlXCIsXG4gIFNLSVA6IFwic2tpcFwiLFxuICBVUERBVEU6IFwidXBkYXRlXCJcbn07XG52YXIgRVZFTlRTID0ge1xuICBUT1VSX1NUQVJUOiBcInRvdXI6c3RhcnRcIixcbiAgU1RFUF9CRUZPUkU6IFwic3RlcDpiZWZvcmVcIixcbiAgQkVBQ09OOiBcImJlYWNvblwiLFxuICBUT09MVElQOiBcInRvb2x0aXBcIixcbiAgU1RFUF9BRlRFUjogXCJzdGVwOmFmdGVyXCIsXG4gIFRPVVJfRU5EOiBcInRvdXI6ZW5kXCIsXG4gIFRPVVJfU1RBVFVTOiBcInRvdXI6c3RhdHVzXCIsXG4gIFRBUkdFVF9OT1RfRk9VTkQ6IFwiZXJyb3I6dGFyZ2V0X25vdF9mb3VuZFwiLFxuICBFUlJPUjogXCJlcnJvclwiXG59O1xudmFyIExJRkVDWUNMRSA9IHtcbiAgSU5JVDogXCJpbml0XCIsXG4gIFJFQURZOiBcInJlYWR5XCIsXG4gIEJFQUNPTjogXCJiZWFjb25cIixcbiAgVE9PTFRJUDogXCJ0b29sdGlwXCIsXG4gIENPTVBMRVRFOiBcImNvbXBsZXRlXCIsXG4gIEVSUk9SOiBcImVycm9yXCJcbn07XG52YXIgU1RBVFVTID0ge1xuICBJRExFOiBcImlkbGVcIixcbiAgUkVBRFk6IFwicmVhZHlcIixcbiAgV0FJVElORzogXCJ3YWl0aW5nXCIsXG4gIFJVTk5JTkc6IFwicnVubmluZ1wiLFxuICBQQVVTRUQ6IFwicGF1c2VkXCIsXG4gIFNLSVBQRUQ6IFwic2tpcHBlZFwiLFxuICBGSU5JU0hFRDogXCJmaW5pc2hlZFwiLFxuICBFUlJPUjogXCJlcnJvclwiXG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9pbmRleC50c3hcbmltcG9ydCAqIGFzIFJlYWN0OSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJAZ2lsYmFyYmFyYS9kZWVwLWVxdWFsXCI7XG5pbXBvcnQgaXM2IGZyb20gXCJpcy1saXRlXCI7XG5pbXBvcnQgdHJlZUNoYW5nZXMzIGZyb20gXCJ0cmVlLWNoYW5nZXNcIjtcblxuLy8gc3JjL21vZHVsZXMvZG9tLnRzXG5pbXBvcnQgc2Nyb2xsIGZyb20gXCJzY3JvbGxcIjtcbmltcG9ydCBzY3JvbGxQYXJlbnQgZnJvbSBcInNjcm9sbHBhcmVudFwiO1xuZnVuY3Rpb24gY2FuVXNlRE9NKCkge1xuICByZXR1cm4gISEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRIZWlnaHQoKSB7XG4gIGNvbnN0IHsgYm9keSwgZG9jdW1lbnRFbGVtZW50IH0gPSBkb2N1bWVudDtcbiAgaWYgKCFib2R5IHx8ICFkb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gTWF0aC5tYXgoXG4gICAgYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgIGRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgKTtcbn1cbmZ1bmN0aW9uIGdldEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cbmZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCkge1xuICBpZiAoIWVsIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWwpO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQsIHNraXBGaXgsIGZvckxpc3RlbmVyKSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBzY3JvbGxEb2N1bWVudCgpO1xuICB9XG4gIGNvbnN0IHBhcmVudCA9IHNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgaWYgKHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQuaXNTYW1lTm9kZShzY3JvbGxEb2N1bWVudCgpKSkge1xuICAgICAgaWYgKGZvckxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzY3JvbGxEb2N1bWVudCgpO1xuICAgIH1cbiAgICBjb25zdCBoYXNTY3JvbGxpbmcgPSBwYXJlbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50Lm9mZnNldEhlaWdodDtcbiAgICBpZiAoIWhhc1Njcm9sbGluZyAmJiAhc2tpcEZpeCkge1xuICAgICAgcGFyZW50LnN0eWxlLm92ZXJmbG93ID0gXCJpbml0aWFsXCI7XG4gICAgICByZXR1cm4gc2Nyb2xsRG9jdW1lbnQoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn1cbmZ1bmN0aW9uIGhhc0N1c3RvbVNjcm9sbFBhcmVudChlbGVtZW50LCBza2lwRml4KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCwgc2tpcEZpeCk7XG4gIHJldHVybiAhcGFyZW50LmlzU2FtZU5vZGUoc2Nyb2xsRG9jdW1lbnQoKSk7XG59XG5mdW5jdGlvbiBoYXNDdXN0b21PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQgIT09IGRvY3VtZW50LmJvZHk7XG59XG5mdW5jdGlvbiBoYXNQb3NpdGlvbihlbCwgdHlwZSA9IFwiZml4ZWRcIikge1xuICBpZiAoIWVsIHx8ICEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWw7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCk7XG4gIGlmIChub2RlTmFtZSA9PT0gXCJCT0RZXCIgfHwgbm9kZU5hbWUgPT09IFwiSFRNTFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChzdHlsZXMgJiYgc3R5bGVzLnBvc2l0aW9uID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoYXNQb3NpdGlvbihlbC5wYXJlbnROb2RlLCB0eXBlKTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUoZWxlbWVudCkge1xuICB2YXIgX2E7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCB7IGRpc3BsYXksIHZpc2liaWxpdHkgfSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50RWxlbWVudCk7XG4gICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIgfHwgdmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmVudEVsZW1lbnQgPSAoX2EgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpICE9IG51bGwgPyBfYSA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWxlbWVudCwgb2Zmc2V0LCBza2lwRml4KSB7XG4gIHZhciBfYTtcbiAgY29uc3QgZWxlbWVudFJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICBjb25zdCBwYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCwgc2tpcEZpeCk7XG4gIGNvbnN0IGhhc1Njcm9sbFBhcmVudCA9IGhhc0N1c3RvbVNjcm9sbFBhcmVudChlbGVtZW50LCBza2lwRml4KTtcbiAgbGV0IHBhcmVudFRvcCA9IDA7XG4gIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHBhcmVudFRvcCA9IHBhcmVudC5zY3JvbGxUb3A7XG4gIH1cbiAgY29uc3QgdG9wID0gKChfYSA9IGVsZW1lbnRSZWN0ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50UmVjdC50b3ApICE9IG51bGwgPyBfYSA6IDApICsgKCFoYXNTY3JvbGxQYXJlbnQgJiYgIWhhc1Bvc2l0aW9uKGVsZW1lbnQpID8gcGFyZW50VG9wIDogMCk7XG4gIHJldHVybiBNYXRoLmZsb29yKHRvcCAtIG9mZnNldCk7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxUbyhlbGVtZW50LCBvZmZzZXQsIHNraXBGaXgpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gc2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gIGlmIChwYXJlbnQgJiYgaGFzQ3VzdG9tU2Nyb2xsUGFyZW50KGVsZW1lbnQsIHNraXBGaXgpICYmICFoYXNDdXN0b21PZmZzZXRQYXJlbnQoZWxlbWVudCkpIHtcbiAgICB0b3AgLT0gcGFyZW50Lm9mZnNldFRvcDtcbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcih0b3AgLSBvZmZzZXQpO1xufVxuZnVuY3Rpb24gc2Nyb2xsRG9jdW1lbnQoKSB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpICE9IG51bGwgPyBfYSA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKHZhbHVlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZHVyYXRpb24sIGVsZW1lbnQgfSA9IG9wdGlvbnM7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IGVsZW1lbnQ7XG4gICAgY29uc3QgbGltaXQgPSB2YWx1ZSA+IHNjcm9sbFRvcCA/IHZhbHVlIC0gc2Nyb2xsVG9wIDogc2Nyb2xsVG9wIC0gdmFsdWU7XG4gICAgc2Nyb2xsLnRvcChlbGVtZW50LCB2YWx1ZSwgeyBkdXJhdGlvbjogbGltaXQgPCAxMDAgPyA1MCA6IGR1cmF0aW9uIH0sIChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgIT09IFwiRWxlbWVudCBhbHJlYWR5IGF0IHRhcmdldCBzY3JvbGwgcG9zaXRpb25cIikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBzcmMvbW9kdWxlcy9oZWxwZXJzLnRzXG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IGlzIGZyb20gXCJpcy1saXRlXCI7XG52YXIgaXNSZWFjdDE2ID0gY3JlYXRlUG9ydGFsICE9PSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRCcm93c2VyKHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgbGV0IGJyb3dzZXIgPSB1c2VyQWdlbnQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgYnJvd3NlciA9IFwibm9kZVwiO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgIGJyb3dzZXIgPSBcImllXCI7XG4gIH0gZWxzZSBpZiAoL0VkZ2UvLnRlc3QodXNlckFnZW50KSkge1xuICAgIGJyb3dzZXIgPSBcImVkZ2VcIjtcbiAgfSBlbHNlIGlmIChCb29sZWFuKHdpbmRvdy5vcGVyYSkgfHwgdXNlckFnZW50LmluY2x1ZGVzKFwiIE9QUi9cIikpIHtcbiAgICBicm93c2VyID0gXCJvcGVyYVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuSW5zdGFsbFRyaWdnZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBicm93c2VyID0gXCJmaXJlZm94XCI7XG4gIH0gZWxzZSBpZiAod2luZG93LmNocm9tZSkge1xuICAgIGJyb3dzZXIgPSBcImNocm9tZVwiO1xuICB9IGVsc2UgaWYgKC8oVmVyc2lvblxcLyhbXFxkLl9dKykuKlNhZmFyaXxDcmlPU3xGeGlPU3wgTW9iaWxlXFwvKS8udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgYnJvd3NlciA9IFwic2FmYXJpXCI7XG4gIH1cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5mdW5jdGlvbiBnZXRUZXh0KHJvb3QpIHtcbiAgY29uc3QgY29udGVudCA9IFtdO1xuICBjb25zdCByZWN1cnNlID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnRlbnQucHVzaChjaGlsZCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgY2hpbGQuZm9yRWFjaCgoYykgPT4gcmVjdXJzZShjKSk7XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGNoaWxkLnByb3BzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGMpID0+IHJlY3Vyc2UoYykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjdXJzZShjaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZWN1cnNlKHJvb3QpO1xuICByZXR1cm4gY29udGVudC5qb2luKFwiIFwiKS50cmltKCk7XG59XG5mdW5jdGlvbiBoYXNWYWxpZEtleXMob2JqZWN0LCBrZXlzKSB7XG4gIGlmICghaXMucGxhaW5PYmplY3Qob2JqZWN0KSB8fCAhaXMuYXJyYXkoa2V5cykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkuZXZlcnkoKGQpID0+IGtleXMuaW5jbHVkZXMoZCkpO1xufVxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4KSB7XG4gIGNvbnN0IHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbXFxkYS1mXSkoW1xcZGEtZl0pKFtcXGRhLWZdKSQvaTtcbiAgY29uc3QgcHJvcGVySGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIChfbSwgciwgZywgYikgPT4gciArIHIgKyBnICsgZyArIGIgKyBiKTtcbiAgY29uc3QgcmVzdWx0ID0gL14jPyhbXFxkYS1mXXsyfSkoW1xcZGEtZl17Mn0pKFtcXGRhLWZdezJ9KSQvaS5leGVjKHByb3BlckhleCk7XG4gIHJldHVybiByZXN1bHQgPyBbcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KV0gOiBbXTtcbn1cbmZ1bmN0aW9uIGhpZGVCZWFjb24oc3RlcCkge1xuICByZXR1cm4gc3RlcC5kaXNhYmxlQmVhY29uIHx8IHN0ZXAucGxhY2VtZW50ID09PSBcImNlbnRlclwiO1xufVxuZnVuY3Rpb24gaXNMZWdhY3koKSB7XG4gIHJldHVybiAhW1wiY2hyb21lXCIsIFwic2FmYXJpXCIsIFwiZmlyZWZveFwiLCBcIm9wZXJhXCJdLmluY2x1ZGVzKGdldEJyb3dzZXIoKSk7XG59XG5mdW5jdGlvbiBsb2coeyBkYXRhLCBkZWJ1ZyA9IGZhbHNlLCB0aXRsZSwgd2FybiA9IGZhbHNlIH0pIHtcbiAgY29uc3QgbG9nRm4gPSB3YXJuID8gY29uc29sZS53YXJuIHx8IGNvbnNvbGUuZXJyb3IgOiBjb25zb2xlLmxvZztcbiAgaWYgKGRlYnVnKSB7XG4gICAgaWYgKHRpdGxlICYmIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIGAlY3JlYWN0LWpveXJpZGU6ICR7dGl0bGV9YCxcbiAgICAgICAgXCJjb2xvcjogI2ZmMDA0NDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTJweDtcIlxuICAgICAgKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIGlmIChpcy5wbGFpbk9iamVjdChkKSAmJiBkLmtleSkge1xuICAgICAgICAgICAgbG9nRm4uYXBwbHkoY29uc29sZSwgW2Qua2V5LCBkLnZhbHVlXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ0ZuLmFwcGx5KGNvbnNvbGUsIFtkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ0ZuLmFwcGx5KGNvbnNvbGUsIFtkYXRhXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIHRpdGxlIG9yIGRhdGEgcHJvcHNcIik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBzaG91bGRTY3JvbGwob3B0aW9ucykge1xuICBjb25zdCB7IGlzRmlyc3RTdGVwLCBsaWZlY3ljbGUsIHByZXZpb3VzTGlmZWN5Y2xlLCBzY3JvbGxUb0ZpcnN0U3RlcCwgc3RlcCwgdGFyZ2V0IH0gPSBvcHRpb25zO1xuICByZXR1cm4gIXN0ZXAuZGlzYWJsZVNjcm9sbGluZyAmJiAoIWlzRmlyc3RTdGVwIHx8IHNjcm9sbFRvRmlyc3RTdGVwIHx8IGxpZmVjeWNsZSA9PT0gTElGRUNZQ0xFLlRPT0xUSVApICYmIHN0ZXAucGxhY2VtZW50ICE9PSBcImNlbnRlclwiICYmICghc3RlcC5pc0ZpeGVkIHx8ICFoYXNQb3NpdGlvbih0YXJnZXQpKSAmJiAvLyBmaXhlZCBzdGVwcyBkb24ndCBuZWVkIHRvIHNjcm9sbFxuICBwcmV2aW91c0xpZmVjeWNsZSAhPT0gbGlmZWN5Y2xlICYmIFtMSUZFQ1lDTEUuQkVBQ09OLCBMSUZFQ1lDTEUuVE9PTFRJUF0uaW5jbHVkZXMobGlmZWN5Y2xlKTtcbn1cblxuLy8gc3JjL21vZHVsZXMvc3RlcC50c1xuaW1wb3J0IHsgb21pdCwgcGljayB9IGZyb20gXCJAZ2lsYmFyYmFyYS9oZWxwZXJzXCI7XG5pbXBvcnQgZGVlcG1lcmdlMiBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQgaXMyIGZyb20gXCJpcy1saXRlXCI7XG5cbi8vIHNyYy9kZWZhdWx0cy50c1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gXCJAZ2lsYmFyYmFyYS9oZWxwZXJzXCI7XG52YXIgZGVmYXVsdEZsb2F0ZXJQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IFwic2Nyb2xsUGFyZW50XCJcbiAgICB9XG4gIH0sXG4gIHdyYXBwZXJPcHRpb25zOiB7XG4gICAgb2Zmc2V0OiAtMTgsXG4gICAgcG9zaXRpb246IHRydWVcbiAgfVxufTtcbnZhciBkZWZhdWx0TG9jYWxlID0ge1xuICBiYWNrOiBcIkJhY2tcIixcbiAgY2xvc2U6IFwiQ2xvc2VcIixcbiAgbGFzdDogXCJMYXN0XCIsXG4gIG5leHQ6IFwiTmV4dFwiLFxuICBvcGVuOiBcIk9wZW4gdGhlIGRpYWxvZ1wiLFxuICBza2lwOiBcIlNraXBcIlxufTtcbnZhciBkZWZhdWx0U3RlcCA9IHtcbiAgZXZlbnQ6IFwiY2xpY2tcIixcbiAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICBvZmZzZXQ6IDEwLFxuICBkaXNhYmxlQmVhY29uOiBmYWxzZSxcbiAgZGlzYWJsZUNsb3NlT25Fc2M6IGZhbHNlLFxuICBkaXNhYmxlT3ZlcmxheTogZmFsc2UsXG4gIGRpc2FibGVPdmVybGF5Q2xvc2U6IGZhbHNlLFxuICBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4OiBmYWxzZSxcbiAgZGlzYWJsZVNjcm9sbGluZzogZmFsc2UsXG4gIGhpZGVCYWNrQnV0dG9uOiBmYWxzZSxcbiAgaGlkZUNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgaGlkZUZvb3RlcjogZmFsc2UsXG4gIGlzRml4ZWQ6IGZhbHNlLFxuICBsb2NhbGU6IGRlZmF1bHRMb2NhbGUsXG4gIHNob3dQcm9ncmVzczogZmFsc2UsXG4gIHNob3dTa2lwQnV0dG9uOiBmYWxzZSxcbiAgc3BvdGxpZ2h0Q2xpY2tzOiBmYWxzZSxcbiAgc3BvdGxpZ2h0UGFkZGluZzogMTBcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb250aW51b3VzOiBmYWxzZSxcbiAgZGVidWc6IGZhbHNlLFxuICBkaXNhYmxlQ2xvc2VPbkVzYzogZmFsc2UsXG4gIGRpc2FibGVPdmVybGF5OiBmYWxzZSxcbiAgZGlzYWJsZU92ZXJsYXlDbG9zZTogZmFsc2UsXG4gIGRpc2FibGVTY3JvbGxpbmc6IGZhbHNlLFxuICBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4OiBmYWxzZSxcbiAgZ2V0SGVscGVyczogbm9vcCgpLFxuICBoaWRlQmFja0J1dHRvbjogZmFsc2UsXG4gIHJ1bjogdHJ1ZSxcbiAgc2Nyb2xsT2Zmc2V0OiAyMCxcbiAgc2Nyb2xsRHVyYXRpb246IDMwMCxcbiAgc2Nyb2xsVG9GaXJzdFN0ZXA6IGZhbHNlLFxuICBzaG93U2tpcEJ1dHRvbjogZmFsc2UsXG4gIHNob3dQcm9ncmVzczogZmFsc2UsXG4gIHNwb3RsaWdodENsaWNrczogZmFsc2UsXG4gIHNwb3RsaWdodFBhZGRpbmc6IDEwLFxuICBzdGVwczogW11cbn07XG5cbi8vIHNyYy9zdHlsZXMudHNcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSBcImRlZXBtZXJnZVwiO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBhcnJvd0NvbG9yOiBcIiNmZmZcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgYmVhY29uU2l6ZTogMzYsXG4gIG92ZXJsYXlDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcbiAgcHJpbWFyeUNvbG9yOiBcIiNmMDRcIixcbiAgc3BvdGxpZ2h0U2hhZG93OiBcIjAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KVwiLFxuICB0ZXh0Q29sb3I6IFwiIzMzM1wiLFxuICB3aWR0aDogMzgwLFxuICB6SW5kZXg6IDEwMFxufTtcbnZhciBidXR0b25CYXNlID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgYm9yZGVyOiAwLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIGNvbG9yOiBcIiM1NTVcIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgZm9udFNpemU6IDE2LFxuICBsaW5lSGVpZ2h0OiAxLFxuICBwYWRkaW5nOiA4LFxuICBXZWJraXRBcHBlYXJhbmNlOiBcIm5vbmVcIlxufTtcbnZhciBzcG90bGlnaHQgPSB7XG4gIGJvcmRlclJhZGl1czogNCxcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxufTtcbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wc1N0eWxlcywgc3RlcFN0eWxlcykge1xuICBjb25zdCBtZXJnZWRTdHlsZXMgPSBkZWVwbWVyZ2UocHJvcHNTdHlsZXMgIT0gbnVsbCA/IHByb3BzU3R5bGVzIDoge30sIHN0ZXBTdHlsZXMgIT0gbnVsbCA/IHN0ZXBTdHlsZXMgOiB7fSk7XG4gIGNvbnN0IG9wdGlvbnMgPSBkZWVwbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG1lcmdlZFN0eWxlcy5vcHRpb25zIHx8IHt9KTtcbiAgbGV0IHsgd2lkdGggfSA9IG9wdGlvbnM7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDQ4MCkge1xuICAgIHdpZHRoID0gMzgwO1xuICB9XG4gIGlmIChcIndpZHRoXCIgaW4gb3B0aW9ucykge1xuICAgIHdpZHRoID0gdHlwZW9mIG9wdGlvbnMud2lkdGggPT09IFwibnVtYmVyXCIgJiYgd2luZG93LmlubmVyV2lkdGggPCBvcHRpb25zLndpZHRoID8gd2luZG93LmlubmVyV2lkdGggLSAzMCA6IG9wdGlvbnMud2lkdGg7XG4gIH1cbiAgY29uc3Qgb3ZlcmxheSA9IHtcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4XG4gIH07XG4gIGNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgYmVhY29uOiB7XG4gICAgICAuLi5idXR0b25CYXNlLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIGhlaWdodDogb3B0aW9ucy5iZWFjb25TaXplLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHdpZHRoOiBvcHRpb25zLmJlYWNvblNpemUsXG4gICAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4XG4gICAgfSxcbiAgICBiZWFjb25Jbm5lcjoge1xuICAgICAgYW5pbWF0aW9uOiBcImpveXJpZGUtYmVhY29uLWlubmVyIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXRcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0aW9ucy5wcmltYXJ5Q29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgb3BhY2l0eTogMC43LFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgfSxcbiAgICBiZWFjb25PdXRlcjoge1xuICAgICAgYW5pbWF0aW9uOiBcImpveXJpZGUtYmVhY29uLW91dGVyIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXRcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoJHtoZXhUb1JHQihvcHRpb25zLnByaW1hcnlDb2xvcikuam9pbihcIixcIil9LCAwLjIpYCxcbiAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke29wdGlvbnMucHJpbWFyeUNvbG9yfWAsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBvcGFjaXR5OiAwLjksXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdG9wOiAwLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgIGNvbG9yOiBvcHRpb25zLnRleHRDb2xvcixcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgIHBhZGRpbmc6IDE1LFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHdpZHRoXG4gICAgfSxcbiAgICB0b29sdGlwQ29udGFpbmVyOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIHRvb2x0aXBUaXRsZToge1xuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICB0b29sdGlwQ29udGVudDoge1xuICAgICAgcGFkZGluZzogXCIyMHB4IDEwcHhcIlxuICAgIH0sXG4gICAgdG9vbHRpcEZvb3Rlcjoge1xuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgIG1hcmdpblRvcDogMTVcbiAgICB9LFxuICAgIHRvb2x0aXBGb290ZXJTcGFjZXI6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIGJ1dHRvbk5leHQ6IHtcbiAgICAgIC4uLmJ1dHRvbkJhc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMucHJpbWFyeUNvbG9yLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgY29sb3I6IFwiI2ZmZlwiXG4gICAgfSxcbiAgICBidXR0b25CYWNrOiB7XG4gICAgICAuLi5idXR0b25CYXNlLFxuICAgICAgY29sb3I6IG9wdGlvbnMucHJpbWFyeUNvbG9yLFxuICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICBtYXJnaW5SaWdodDogNVxuICAgIH0sXG4gICAgYnV0dG9uQ2xvc2U6IHtcbiAgICAgIC4uLmJ1dHRvbkJhc2UsXG4gICAgICBjb2xvcjogb3B0aW9ucy50ZXh0Q29sb3IsXG4gICAgICBoZWlnaHQ6IDE0LFxuICAgICAgcGFkZGluZzogMTUsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMTRcbiAgICB9LFxuICAgIGJ1dHRvblNraXA6IHtcbiAgICAgIC4uLmJ1dHRvbkJhc2UsXG4gICAgICBjb2xvcjogb3B0aW9ucy50ZXh0Q29sb3IsXG4gICAgICBmb250U2l6ZTogMTRcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIC4uLm92ZXJsYXksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMub3ZlcmxheUNvbG9yLFxuICAgICAgbWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIlxuICAgIH0sXG4gICAgb3ZlcmxheUxlZ2FjeToge1xuICAgICAgLi4ub3ZlcmxheVxuICAgIH0sXG4gICAgb3ZlcmxheUxlZ2FjeUNlbnRlcjoge1xuICAgICAgLi4ub3ZlcmxheSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogb3B0aW9ucy5vdmVybGF5Q29sb3JcbiAgICB9LFxuICAgIHNwb3RsaWdodDoge1xuICAgICAgLi4uc3BvdGxpZ2h0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIlxuICAgIH0sXG4gICAgc3BvdGxpZ2h0TGVnYWN5OiB7XG4gICAgICAuLi5zcG90bGlnaHQsXG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCA5OTk5cHggJHtvcHRpb25zLm92ZXJsYXlDb2xvcn0sICR7b3B0aW9ucy5zcG90bGlnaHRTaGFkb3d9YFxuICAgIH0sXG4gICAgZmxvYXRlclN0eWxlczoge1xuICAgICAgYXJyb3c6IHtcbiAgICAgICAgY29sb3I6IG9wdGlvbnMuYXJyb3dDb2xvclxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCArIDEwMFxuICAgICAgfVxuICAgIH0sXG4gICAgb3B0aW9uc1xuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKGRlZmF1bHRTdHlsZXMsIG1lcmdlZFN0eWxlcyk7XG59XG5cbi8vIHNyYy9tb2R1bGVzL3N0ZXAudHNcbmZ1bmN0aW9uIGdldFRvdXJQcm9wcyhwcm9wcykge1xuICByZXR1cm4gcGljayhcbiAgICBwcm9wcyxcbiAgICBcImJlYWNvbkNvbXBvbmVudFwiLFxuICAgIFwiZGlzYWJsZUNsb3NlT25Fc2NcIixcbiAgICBcImRpc2FibGVPdmVybGF5XCIsXG4gICAgXCJkaXNhYmxlT3ZlcmxheUNsb3NlXCIsXG4gICAgXCJkaXNhYmxlU2Nyb2xsaW5nXCIsXG4gICAgXCJkaXNhYmxlU2Nyb2xsUGFyZW50Rml4XCIsXG4gICAgXCJmbG9hdGVyUHJvcHNcIixcbiAgICBcImhpZGVCYWNrQnV0dG9uXCIsXG4gICAgXCJoaWRlQ2xvc2VCdXR0b25cIixcbiAgICBcImxvY2FsZVwiLFxuICAgIFwic2hvd1Byb2dyZXNzXCIsXG4gICAgXCJzaG93U2tpcEJ1dHRvblwiLFxuICAgIFwic3BvdGxpZ2h0Q2xpY2tzXCIsXG4gICAgXCJzcG90bGlnaHRQYWRkaW5nXCIsXG4gICAgXCJzdHlsZXNcIixcbiAgICBcInRvb2x0aXBDb21wb25lbnRcIlxuICApO1xufVxuZnVuY3Rpb24gZ2V0TWVyZ2VkU3RlcChjdXJyZW50U3RlcCwgcHJvcHMpIHtcbiAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gIGNvbnN0IHN0ZXAgPSBjdXJyZW50U3RlcCAhPSBudWxsID8gY3VycmVudFN0ZXAgOiB7fTtcbiAgY29uc3QgbWVyZ2VkU3RlcCA9IGRlZXBtZXJnZTIuYWxsKFtkZWZhdWx0U3RlcCwgZ2V0VG91clByb3BzKHByb3BzKSwgc3RlcF0sIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXMyLnBsYWluT2JqZWN0XG4gIH0pO1xuICBjb25zdCBtZXJnZWRTdHlsZXMgPSBnZXRTdHlsZXMocHJvcHMuc3R5bGVzLCBtZXJnZWRTdGVwLnN0eWxlcyk7XG4gIGNvbnN0IHNjcm9sbFBhcmVudDIgPSBoYXNDdXN0b21TY3JvbGxQYXJlbnQoXG4gICAgZ2V0RWxlbWVudChtZXJnZWRTdGVwLnRhcmdldCksXG4gICAgbWVyZ2VkU3RlcC5kaXNhYmxlU2Nyb2xsUGFyZW50Rml4XG4gICk7XG4gIGNvbnN0IGZsb2F0ZXJQcm9wcyA9IGRlZXBtZXJnZTIuYWxsKFtcbiAgICBkZWZhdWx0RmxvYXRlclByb3BzLFxuICAgIChfYSA9IHByb3BzLmZsb2F0ZXJQcm9wcykgIT0gbnVsbCA/IF9hIDoge30sXG4gICAgKF9iID0gbWVyZ2VkU3RlcC5mbG9hdGVyUHJvcHMpICE9IG51bGwgPyBfYiA6IHt9XG4gIF0pO1xuICBmbG9hdGVyUHJvcHMub2Zmc2V0ID0gbWVyZ2VkU3RlcC5vZmZzZXQ7XG4gIGZsb2F0ZXJQcm9wcy5zdHlsZXMgPSBkZWVwbWVyZ2UyKChfYyA9IGZsb2F0ZXJQcm9wcy5zdHlsZXMpICE9IG51bGwgPyBfYyA6IHt9LCBtZXJnZWRTdHlsZXMuZmxvYXRlclN0eWxlcyk7XG4gIGZsb2F0ZXJQcm9wcy5vZmZzZXQgKz0gKF9lID0gKF9kID0gcHJvcHMuc3BvdGxpZ2h0UGFkZGluZykgIT0gbnVsbCA/IF9kIDogbWVyZ2VkU3RlcC5zcG90bGlnaHRQYWRkaW5nKSAhPSBudWxsID8gX2UgOiAwO1xuICBpZiAobWVyZ2VkU3RlcC5wbGFjZW1lbnRCZWFjb24gJiYgZmxvYXRlclByb3BzLndyYXBwZXJPcHRpb25zKSB7XG4gICAgZmxvYXRlclByb3BzLndyYXBwZXJPcHRpb25zLnBsYWNlbWVudCA9IG1lcmdlZFN0ZXAucGxhY2VtZW50QmVhY29uO1xuICB9XG4gIGlmIChzY3JvbGxQYXJlbnQyICYmIGZsb2F0ZXJQcm9wcy5vcHRpb25zLnByZXZlbnRPdmVyZmxvdykge1xuICAgIGZsb2F0ZXJQcm9wcy5vcHRpb25zLnByZXZlbnRPdmVyZmxvdy5ib3VuZGFyaWVzRWxlbWVudCA9IFwid2luZG93XCI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5tZXJnZWRTdGVwLFxuICAgIGxvY2FsZTogZGVlcG1lcmdlMi5hbGwoW2RlZmF1bHRMb2NhbGUsIChfZiA9IHByb3BzLmxvY2FsZSkgIT0gbnVsbCA/IF9mIDoge30sIG1lcmdlZFN0ZXAubG9jYWxlIHx8IHt9XSksXG4gICAgZmxvYXRlclByb3BzLFxuICAgIHN0eWxlczogb21pdChtZXJnZWRTdHlsZXMsIFwiZmxvYXRlclN0eWxlc1wiKVxuICB9O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVTdGVwKHN0ZXAsIGRlYnVnID0gZmFsc2UpIHtcbiAgaWYgKCFpczIucGxhaW5PYmplY3Qoc3RlcCkpIHtcbiAgICBsb2coe1xuICAgICAgdGl0bGU6IFwidmFsaWRhdGVTdGVwXCIsXG4gICAgICBkYXRhOiBcInN0ZXAgbXVzdCBiZSBhbiBvYmplY3RcIixcbiAgICAgIHdhcm46IHRydWUsXG4gICAgICBkZWJ1Z1xuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXN0ZXAudGFyZ2V0KSB7XG4gICAgbG9nKHtcbiAgICAgIHRpdGxlOiBcInZhbGlkYXRlU3RlcFwiLFxuICAgICAgZGF0YTogXCJ0YXJnZXQgaXMgbWlzc2luZyBmcm9tIHRoZSBzdGVwXCIsXG4gICAgICB3YXJuOiB0cnVlLFxuICAgICAgZGVidWdcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVN0ZXBzKHN0ZXBzLCBkZWJ1ZyA9IGZhbHNlKSB7XG4gIGlmICghaXMyLmFycmF5KHN0ZXBzKSkge1xuICAgIGxvZyh7XG4gICAgICB0aXRsZTogXCJ2YWxpZGF0ZVN0ZXBzXCIsXG4gICAgICBkYXRhOiBcInN0ZXBzIG11c3QgYmUgYW4gYXJyYXlcIixcbiAgICAgIHdhcm46IHRydWUsXG4gICAgICBkZWJ1Z1xuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gc3RlcHMuZXZlcnkoKGQpID0+IHZhbGlkYXRlU3RlcChkLCBkZWJ1ZykpO1xufVxuXG4vLyBzcmMvbW9kdWxlcy9zdG9yZS50c1xuaW1wb3J0IGlzMyBmcm9tIFwiaXMtbGl0ZVwiO1xudmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgYWN0aW9uOiBcImluaXRcIixcbiAgY29udHJvbGxlZDogZmFsc2UsXG4gIGluZGV4OiAwLFxuICBsaWZlY3ljbGU6IExJRkVDWUNMRS5JTklULFxuICBzaXplOiAwLFxuICBzdGF0dXM6IFNUQVRVUy5JRExFXG59O1xudmFyIHZhbGlkS2V5cyA9IFtcImFjdGlvblwiLCBcImluZGV4XCIsIFwibGlmZWN5Y2xlXCIsIFwic3RhdHVzXCJdO1xudmFyIFN0b3JlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImRhdGFcIiwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImxpc3RlbmVyXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzdG9yZVwiLCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiYWRkTGlzdGVuZXJcIiwgKGxpc3RlbmVyKSA9PiB7XG4gICAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNldFN0ZXBzXCIsIChzdGVwcykgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBzdGF0dXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBzaXplOiBzdGVwcy5sZW5ndGgsXG4gICAgICAgIHN0YXR1c1xuICAgICAgfTtcbiAgICAgIHRoaXMuZGF0YS5zZXQoXCJzdGVwc1wiLCBzdGVwcyk7XG4gICAgICBpZiAoc3RhdHVzID09PSBTVEFUVVMuV0FJVElORyAmJiAhc2l6ZSAmJiBzdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gU1RBVFVTLlJVTk5JTkc7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBpbmRleCwgc3RhdHVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4gICAgICBpZiAoc3RhdHVzICE9PSBTVEFUVVMuUlVOTklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5nZXROZXh0U3RhdGUoeyBhY3Rpb246IEFDVElPTlMuQ0xPU0UsIGluZGV4OiBpbmRleCArIDEgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJnb1wiLCAobmV4dEluZGV4KSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRyb2xsZWQsIHN0YXR1cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgaWYgKGNvbnRyb2xsZWQgfHwgc3RhdHVzICE9PSBTVEFUVVMuUlVOTklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRTdGVwcygpW25leHRJbmRleF07XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5nZXROZXh0U3RhdGUoeyBhY3Rpb246IEFDVElPTlMuR08sIGluZGV4OiBuZXh0SW5kZXggfSksXG4gICAgICAgIHN0YXR1czogc3RlcCA/IHN0YXR1cyA6IFNUQVRVUy5GSU5JU0hFRFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImluZm9cIiwgKCkgPT4gdGhpcy5nZXRTdGF0ZSgpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibmV4dFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGluZGV4LCBzdGF0dXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChzdGF0dXMgIT09IFNUQVRVUy5SVU5OSU5HKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXROZXh0U3RhdGUoeyBhY3Rpb246IEFDVElPTlMuTkVYVCwgaW5kZXg6IGluZGV4ICsgMSB9KSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9wZW5cIiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChzdGF0dXMgIT09IFNUQVRVUy5SVU5OSU5HKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAuLi50aGlzLmdldE5leHRTdGF0ZSh7IGFjdGlvbjogQUNUSU9OUy5VUERBVEUsIGxpZmVjeWNsZTogTElGRUNZQ0xFLlRPT0xUSVAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJwcmV2XCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHN0YXR1cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgaWYgKHN0YXR1cyAhPT0gU1RBVFVTLlJVTk5JTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuZ2V0TmV4dFN0YXRlKHsgYWN0aW9uOiBBQ1RJT05TLlBSRVYsIGluZGV4OiBpbmRleCAtIDEgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZXNldFwiLCAocmVzdGFydCA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRyb2xsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChjb250cm9sbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAuLi50aGlzLmdldE5leHRTdGF0ZSh7IGFjdGlvbjogQUNUSU9OUy5SRVNFVCwgaW5kZXg6IDAgfSksXG4gICAgICAgIHN0YXR1czogcmVzdGFydCA/IFNUQVRVUy5SVU5OSU5HIDogU1RBVFVTLlJFQURZXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic2tpcFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgaWYgKHN0YXR1cyAhPT0gU1RBVFVTLlJVTk5JTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OUy5TS0lQLFxuICAgICAgICBsaWZlY3ljbGU6IExJRkVDWUNMRS5JTklULFxuICAgICAgICBzdGF0dXM6IFNUQVRVUy5TS0lQUEVEXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic3RhcnRcIiwgKG5leHRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBpbmRleCwgc2l6ZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuZ2V0TmV4dFN0YXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OUy5TVEFSVCxcbiAgICAgICAgICAgIGluZGV4OiBpczMubnVtYmVyKG5leHRJbmRleCkgPyBuZXh0SW5kZXggOiBpbmRleFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApLFxuICAgICAgICBzdGF0dXM6IHNpemUgPyBTVEFUVVMuUlVOTklORyA6IFNUQVRVUy5XQUlUSU5HXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic3RvcFwiLCAoYWR2YW5jZSA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCB7IGluZGV4LCBzdGF0dXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICAgIGlmIChbU1RBVFVTLkZJTklTSEVELCBTVEFUVVMuU0tJUFBFRF0uaW5jbHVkZXMoc3RhdHVzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5nZXROZXh0U3RhdGUoeyBhY3Rpb246IEFDVElPTlMuU1RPUCwgaW5kZXg6IGluZGV4ICsgKGFkdmFuY2UgPyAxIDogMCkgfSksXG4gICAgICAgIHN0YXR1czogU1RBVFVTLlBBVVNFRFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVwZGF0ZVwiLCAoc3RhdGUpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGlmICghaGFzVmFsaWRLZXlzKHN0YXRlLCB2YWxpZEtleXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU3RhdGUgaXMgbm90IHZhbGlkLiBWYWxpZCBrZXlzOiAke3ZhbGlkS2V5cy5qb2luKFwiLCBcIil9YCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5nZXROZXh0U3RhdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhY3Rpb246IChfYSA9IHN0YXRlLmFjdGlvbikgIT0gbnVsbCA/IF9hIDogQUNUSU9OUy5VUERBVEVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250aW51b3VzID0gZmFsc2UsIHN0ZXBJbmRleCwgc3RlcHMgPSBbXSB9ID0gb3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucyA6IHt9O1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogQUNUSU9OUy5JTklULFxuICAgICAgICBjb250cm9sbGVkOiBpczMubnVtYmVyKHN0ZXBJbmRleCksXG4gICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgIGluZGV4OiBpczMubnVtYmVyKHN0ZXBJbmRleCkgPyBzdGVwSW5kZXggOiAwLFxuICAgICAgICBsaWZlY3ljbGU6IExJRkVDWUNMRS5JTklULFxuICAgICAgICBzdGF0dXM6IHN0ZXBzLmxlbmd0aCA/IFNUQVRVUy5SRUFEWSA6IFNUQVRVUy5JRExFXG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5zZXRTdGVwcyhzdGVwcyk7XG4gIH1cbiAgZ2V0U3RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnN0b3JlLnNpemUpIHtcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRTdGF0ZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiB0aGlzLnN0b3JlLmdldChcImFjdGlvblwiKSB8fCBcIlwiLFxuICAgICAgY29udHJvbGxlZDogdGhpcy5zdG9yZS5nZXQoXCJjb250cm9sbGVkXCIpIHx8IGZhbHNlLFxuICAgICAgaW5kZXg6IHBhcnNlSW50KHRoaXMuc3RvcmUuZ2V0KFwiaW5kZXhcIiksIDEwKSxcbiAgICAgIGxpZmVjeWNsZTogdGhpcy5zdG9yZS5nZXQoXCJsaWZlY3ljbGVcIikgfHwgXCJcIixcbiAgICAgIHNpemU6IHRoaXMuc3RvcmUuZ2V0KFwic2l6ZVwiKSB8fCAwLFxuICAgICAgc3RhdHVzOiB0aGlzLnN0b3JlLmdldChcInN0YXR1c1wiKSB8fCBcIlwiXG4gICAgfTtcbiAgfVxuICBnZXROZXh0U3RhdGUoc3RhdGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgY29uc3QgeyBhY3Rpb24sIGNvbnRyb2xsZWQsIGluZGV4LCBzaXplLCBzdGF0dXMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBuZXdJbmRleCA9IGlzMy5udW1iZXIoc3RhdGUuaW5kZXgpID8gc3RhdGUuaW5kZXggOiBpbmRleDtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBjb250cm9sbGVkICYmICFmb3JjZSA/IGluZGV4IDogTWF0aC5taW4oTWF0aC5tYXgobmV3SW5kZXgsIDApLCBzaXplKTtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiAoX2EgPSBzdGF0ZS5hY3Rpb24pICE9IG51bGwgPyBfYSA6IGFjdGlvbixcbiAgICAgIGNvbnRyb2xsZWQsXG4gICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgbGlmZWN5Y2xlOiAoX2IgPSBzdGF0ZS5saWZlY3ljbGUpICE9IG51bGwgPyBfYiA6IExJRkVDWUNMRS5JTklULFxuICAgICAgc2l6ZTogKF9jID0gc3RhdGUuc2l6ZSkgIT0gbnVsbCA/IF9jIDogc2l6ZSxcbiAgICAgIHN0YXR1czogbmV4dEluZGV4ID09PSBzaXplID8gU1RBVFVTLkZJTklTSEVEIDogKF9kID0gc3RhdGUuc3RhdHVzKSAhPSBudWxsID8gX2QgOiBzdGF0dXNcbiAgICB9O1xuICB9XG4gIGdldFN0ZXBzKCkge1xuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5kYXRhLmdldChcInN0ZXBzXCIpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHN0ZXBzKSA/IHN0ZXBzIDogW107XG4gIH1cbiAgaGFzVXBkYXRlZFN0YXRlKG9sZFN0YXRlKSB7XG4gICAgY29uc3QgYmVmb3JlID0gSlNPTi5zdHJpbmdpZnkob2xkU3RhdGUpO1xuICAgIGNvbnN0IGFmdGVyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRTdGF0ZSgpKTtcbiAgICByZXR1cm4gYmVmb3JlICE9PSBhZnRlcjtcbiAgfVxuICBzZXRTdGF0ZShuZXh0U3RhdGUsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHsgYWN0aW9uLCBpbmRleCwgbGlmZWN5Y2xlLCBzaXplLCBzdGF0dXMgfSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4ubmV4dFN0YXRlXG4gICAgfTtcbiAgICB0aGlzLnN0b3JlLnNldChcImFjdGlvblwiLCBhY3Rpb24pO1xuICAgIHRoaXMuc3RvcmUuc2V0KFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIHRoaXMuc3RvcmUuc2V0KFwibGlmZWN5Y2xlXCIsIGxpZmVjeWNsZSk7XG4gICAgdGhpcy5zdG9yZS5zZXQoXCJzaXplXCIsIHNpemUpO1xuICAgIHRoaXMuc3RvcmUuc2V0KFwic3RhdHVzXCIsIHN0YXR1cyk7XG4gICAgaWYgKGluaXRpYWwpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0KFwiY29udHJvbGxlZFwiLCBuZXh0U3RhdGUuY29udHJvbGxlZCk7XG4gICAgICB0aGlzLnN0b3JlLnNldChcImNvbnRpbnVvdXNcIiwgbmV4dFN0YXRlLmNvbnRpbnVvdXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5saXN0ZW5lciAmJiB0aGlzLmhhc1VwZGF0ZWRTdGF0ZShzdGF0ZSkpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIodGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gIH1cbiAgZ2V0SGVscGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xvc2U6IHRoaXMuY2xvc2UsXG4gICAgICBnbzogdGhpcy5nbyxcbiAgICAgIGluZm86IHRoaXMuaW5mbyxcbiAgICAgIG5leHQ6IHRoaXMubmV4dCxcbiAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgIHByZXY6IHRoaXMucHJldixcbiAgICAgIHJlc2V0OiB0aGlzLnJlc2V0LFxuICAgICAgc2tpcDogdGhpcy5za2lwXG4gICAgfTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBTdG9yZShvcHRpb25zKTtcbn1cblxuLy8gc3JjL2NvbXBvbmVudHMvU3RlcC50c3hcbmltcG9ydCAqIGFzIFJlYWN0OCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGbG9hdGVyIGZyb20gXCJyZWFjdC1mbG9hdGVyXCI7XG5pbXBvcnQgaXM1IGZyb20gXCJpcy1saXRlXCI7XG5pbXBvcnQgdHJlZUNoYW5nZXMyIGZyb20gXCJ0cmVlLWNoYW5nZXNcIjtcblxuLy8gc3JjL21vZHVsZXMvc2NvcGUudHNcbnZhciBTY29wZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJlbGVtZW50XCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvcHRpb25zXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYW5CZVRhYmJlZFwiLCAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgeyB0YWJJbmRleCB9ID0gZWxlbWVudDtcbiAgICAgIGlmICh0YWJJbmRleCA9PT0gbnVsbCB8fCB0YWJJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2FuSGF2ZUZvY3VzKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYW5IYXZlRm9jdXNcIiwgKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkVGFiTm9kZXMgPSAvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvO1xuICAgICAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRUYWJOb2Rlcy50ZXN0KG5vZGVOYW1lKSAmJiAhZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSB8fCBub2RlTmFtZSA9PT0gXCJhXCIgJiYgISFlbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICByZXR1cm4gaXNWYWxpZCAmJiB0aGlzLmlzVmlzaWJsZShlbGVtZW50KTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZmluZFZhbGlkVGFiRWxlbWVudHNcIiwgKCkgPT4gW10uc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIiksIDApLmZpbHRlcih0aGlzLmNhbkJlVGFiYmVkKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUtleURvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgPSBcIlRhYlwiIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gY29kZSkge1xuICAgICAgICB0aGlzLmludGVyY2VwdFRhYihldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImludGVyY2VwdFRhYlwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZmluZFZhbGlkVGFiRWxlbWVudHMoKTtcbiAgICAgIGNvbnN0IHsgc2hpZnRLZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHggPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID8gZWxlbWVudHMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA6IDA7XG4gICAgICBpZiAoeCA9PT0gLTEgfHwgIXNoaWZ0S2V5ICYmIHggKyAxID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgeCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5ICYmIHggPT09IDApIHtcbiAgICAgICAgeCA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ICs9IHNoaWZ0S2V5ID8gLTEgOiAxO1xuICAgICAgfVxuICAgICAgZWxlbWVudHNbeF0uZm9jdXMoKTtcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpc0hpZGRlblwiLCAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgbm9TaXplID0gZWxlbWVudC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IDA7XG4gICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgaWYgKG5vU2l6ZSAmJiAhZWxlbWVudC5pbm5lckhUTUwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9TaXplICYmIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJvdmVyZmxvd1wiKSAhPT0gXCJ2aXNpYmxlXCIgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgPT09IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpc1Zpc2libGVcIiwgKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKHBhcmVudEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZW1vdmVTY29wZVwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2hlY2tGb2N1c1wiLCAodGFyZ2V0KSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuY2hlY2tGb2N1cyh0YXJnZXQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic2V0Rm9jdXNcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBzZWxlY3RvciB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5jaGVja0ZvY3VzKHRhcmdldCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlcjogZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50XCIpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvQmVhY29uLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW5uZXJUZXh0IGZyb20gXCJyZWFjdC1pbm5lcnRleHRcIjtcbmltcG9ydCBpczQgZnJvbSBcImlzLWxpdGVcIjtcbnZhciBKb3lyaWRlQmVhY29uID0gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiYmVhY29uXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzZXRCZWFjb25SZWZcIiwgKGMpID0+IHtcbiAgICAgIHRoaXMuYmVhY29uID0gYztcbiAgICB9KTtcbiAgICBpZiAocHJvcHMuYmVhY29uQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS5pZCA9IFwiam95cmlkZS1iZWFjb24tYW5pbWF0aW9uXCI7XG4gICAgaWYgKHByb3BzLm5vbmNlKSB7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBwcm9wcy5ub25jZSk7XG4gICAgfVxuICAgIGNvbnN0IGNzcyA9IGBcbiAgICAgICAgQGtleWZyYW1lcyBqb3lyaWRlLWJlYWNvbi1pbm5lciB7XG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGpveXJpZGUtYmVhY29uLW91dGVyIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgNDUlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc2hvdWxkRm9jdXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKCFpczQuZG9tRWxlbWVudCh0aGlzLmJlYWNvbikpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiYmVhY29uIGlzIG5vdCBhIHZhbGlkIERPTSBlbGVtZW50XCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChpczQuZG9tRWxlbWVudCh0aGlzLmJlYWNvbikgJiYgc2hvdWxkRm9jdXMpIHtcbiAgICAgICAgdGhpcy5iZWFjb24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam95cmlkZS1iZWFjb24tYW5pbWF0aW9uXCIpO1xuICAgIGlmIChzdHlsZSA9PSBudWxsID8gdm9pZCAwIDogc3R5bGUucGFyZW50Tm9kZSkge1xuICAgICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBiZWFjb25Db21wb25lbnQsXG4gICAgICBjb250aW51b3VzLFxuICAgICAgaW5kZXgsXG4gICAgICBpc0xhc3RTdGVwLFxuICAgICAgbG9jYWxlLFxuICAgICAgb25DbGlja09ySG92ZXIsXG4gICAgICBzaXplLFxuICAgICAgc3RlcCxcbiAgICAgIHN0eWxlc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRpdGxlID0gaXM0LnN0cmluZyhsb2NhbGUub3BlbikgPyBsb2NhbGUub3BlbiA6IGlubmVyVGV4dChsb2NhbGUub3Blbik7XG4gICAgY29uc3Qgc2hhcmVkUHJvcHMgPSB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogdGl0bGUsXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrT3JIb3ZlcixcbiAgICAgIG9uTW91c2VFbnRlcjogb25DbGlja09ySG92ZXIsXG4gICAgICByZWY6IHRoaXMuc2V0QmVhY29uUmVmLFxuICAgICAgdGl0bGVcbiAgICB9O1xuICAgIGxldCBjb21wb25lbnQ7XG4gICAgaWYgKGJlYWNvbkNvbXBvbmVudCkge1xuICAgICAgY29uc3QgQmVhY29uQ29tcG9uZW50ID0gYmVhY29uQ29tcG9uZW50O1xuICAgICAgY29tcG9uZW50ID0gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEJlYWNvbkNvbXBvbmVudCxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaXNMYXN0U3RlcCxcbiAgICAgICAgICBzaXplLFxuICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgLi4uc2hhcmVkUHJvcHNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50ID0gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiSm95cmlkZUJlYWNvblwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1qb3lyaWRlX19iZWFjb25cIixcbiAgICAgICAgICBcImRhdGEtdGVzdC1pZFwiOiBcImJ1dHRvbi1iZWFjb25cIixcbiAgICAgICAgICBzdHlsZTogc3R5bGVzLmJlYWNvbixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIC4uLnNoYXJlZFByb3BzXG4gICAgICAgIH0sXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiBzdHlsZXMuYmVhY29uSW5uZXIgfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiBzdHlsZXMuYmVhY29uT3V0ZXIgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL092ZXJsYXkudHN4XG5pbXBvcnQgKiBhcyBSZWFjdDMgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHJlZUNoYW5nZXMgZnJvbSBcInRyZWUtY2hhbmdlc1wiO1xuXG4vLyBzcmMvY29tcG9uZW50cy9TcG90bGlnaHQudHN4XG5pbXBvcnQgKiBhcyBSZWFjdDIgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBKb3lyaWRlU3BvdGxpZ2h0KHsgc3R5bGVzIH0pIHtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDIuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGtleTogXCJKb3lyaWRlU3BvdGxpZ2h0XCIsXG4gICAgICBjbGFzc05hbWU6IFwicmVhY3Qtam95cmlkZV9fc3BvdGxpZ2h0XCIsXG4gICAgICBcImRhdGEtdGVzdC1pZFwiOiBcInNwb3RsaWdodFwiLFxuICAgICAgc3R5bGU6IHN0eWxlc1xuICAgIH1cbiAgKTtcbn1cbnZhciBTcG90bGlnaHRfZGVmYXVsdCA9IEpveXJpZGVTcG90bGlnaHQ7XG5cbi8vIHNyYy9jb21wb25lbnRzL092ZXJsYXkudHN4XG52YXIgSm95cmlkZU92ZXJsYXkgPSBjbGFzcyBleHRlbmRzIFJlYWN0My5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpc0FjdGl2ZVwiLCBmYWxzZSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlc2l6ZVRpbWVvdXRcIik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNjcm9sbFRpbWVvdXRcIik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNjcm9sbFBhcmVudFwiKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgbW91c2VPdmVyU3BvdGxpZ2h0OiBmYWxzZSxcbiAgICAgIHNob3dTcG90bGlnaHQ6IHRydWVcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlTW91c2VNb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBtb3VzZU92ZXJTcG90bGlnaHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IGhlaWdodCwgbGVmdCwgcG9zaXRpb24sIHRvcCwgd2lkdGggfSA9IHRoaXMuc3BvdGxpZ2h0U3R5bGVzO1xuICAgICAgY29uc3Qgb2Zmc2V0WSA9IHBvc2l0aW9uID09PSBcImZpeGVkXCIgPyBldmVudC5jbGllbnRZIDogZXZlbnQucGFnZVk7XG4gICAgICBjb25zdCBvZmZzZXRYID0gcG9zaXRpb24gPT09IFwiZml4ZWRcIiA/IGV2ZW50LmNsaWVudFggOiBldmVudC5wYWdlWDtcbiAgICAgIGNvbnN0IGluU3BvdGxpZ2h0SGVpZ2h0ID0gb2Zmc2V0WSA+PSB0b3AgJiYgb2Zmc2V0WSA8PSB0b3AgKyBoZWlnaHQ7XG4gICAgICBjb25zdCBpblNwb3RsaWdodFdpZHRoID0gb2Zmc2V0WCA+PSBsZWZ0ICYmIG9mZnNldFggPD0gbGVmdCArIHdpZHRoO1xuICAgICAgY29uc3QgaW5TcG90bGlnaHQgPSBpblNwb3RsaWdodFdpZHRoICYmIGluU3BvdGxpZ2h0SGVpZ2h0O1xuICAgICAgaWYgKGluU3BvdGxpZ2h0ICE9PSBtb3VzZU92ZXJTcG90bGlnaHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7IG1vdXNlT3ZlclNwb3RsaWdodDogaW5TcG90bGlnaHQgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZVNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KHRhcmdldCk7XG4gICAgICBpZiAodGhpcy5zY3JvbGxQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgaXNTY3JvbGxpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICghaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsgaXNTY3JvbGxpbmc6IHRydWUsIHNob3dTcG90bGlnaHQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xuICAgICAgICB0aGlzLnNjcm9sbFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7IGlzU2Nyb2xsaW5nOiBmYWxzZSwgc2hvd1Nwb3RsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfSBlbHNlIGlmIChoYXNQb3NpdGlvbihlbGVtZW50LCBcInN0aWNreVwiKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHt9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlUmVzaXplXCIsICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlYnVnLCBkaXNhYmxlU2Nyb2xsaW5nLCBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4ID0gZmFsc2UsIHRhcmdldCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgIHRoaXMuc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQgOiBkb2N1bWVudC5ib2R5LCBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4LCB0cnVlKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoIWRpc2FibGVTY3JvbGxpbmcgJiYgaGFzQ3VzdG9tU2Nyb2xsUGFyZW50KGVsZW1lbnQsIHRydWUpKSB7XG4gICAgICAgIGxvZyh7XG4gICAgICAgICAgdGl0bGU6IFwic3RlcCBoYXMgYSBjdXN0b20gc2Nyb2xsIHBhcmVudCBhbmQgY2FuIGNhdXNlIHRyb3VibGUgd2l0aCBzY3JvbGxpbmdcIixcbiAgICAgICAgICBkYXRhOiBbeyBrZXk6IFwicGFyZW50XCIsIHZhbHVlOiB0aGlzLnNjcm9sbFBhcmVudCB9XSxcbiAgICAgICAgICBkZWJ1Z1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2aW91c1Byb3BzKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHsgbGlmZWN5Y2xlLCBzcG90bGlnaHRDbGlja3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjaGFuZ2VkIH0gPSB0cmVlQ2hhbmdlcyhwcmV2aW91c1Byb3BzLCB0aGlzLnByb3BzKTtcbiAgICBpZiAoY2hhbmdlZChcImxpZmVjeWNsZVwiLCBMSUZFQ1lDTEUuVE9PTFRJUCkpIHtcbiAgICAgIChfYSA9IHRoaXMuc2Nyb2xsUGFyZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNTY3JvbGxpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICghaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsgc2hvd1Nwb3RsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWQoXCJzcG90bGlnaHRDbGlja3NcIikgfHwgY2hhbmdlZChcImRpc2FibGVPdmVybGF5XCIpIHx8IGNoYW5nZWQoXCJsaWZlY3ljbGVcIikpIHtcbiAgICAgIGlmIChzcG90bGlnaHRDbGlja3MgJiYgbGlmZWN5Y2xlID09PSBMSUZFQ1lDTEUuVE9PTFRJUCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChsaWZlY3ljbGUgIT09IExJRkVDWUNMRS5UT09MVElQKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIF9hO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xuICAgIChfYSA9IHRoaXMuc2Nyb2xsUGFyZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cbiAgZ2V0IHNwb3RsaWdodFN0eWxlcygpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCB7IHNob3dTcG90bGlnaHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZVNjcm9sbFBhcmVudEZpeCA9IGZhbHNlLFxuICAgICAgc3BvdGxpZ2h0Q2xpY2tzLFxuICAgICAgc3BvdGxpZ2h0UGFkZGluZyA9IDAsXG4gICAgICBzdHlsZXMsXG4gICAgICB0YXJnZXRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICBjb25zdCBpc0ZpeGVkVGFyZ2V0ID0gaGFzUG9zaXRpb24oZWxlbWVudCk7XG4gICAgY29uc3QgdG9wID0gZ2V0RWxlbWVudFBvc2l0aW9uKGVsZW1lbnQsIHNwb3RsaWdodFBhZGRpbmcsIGRpc2FibGVTY3JvbGxQYXJlbnRGaXgpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5pc0xlZ2FjeSgpID8gc3R5bGVzLnNwb3RsaWdodExlZ2FjeSA6IHN0eWxlcy5zcG90bGlnaHQsXG4gICAgICBoZWlnaHQ6IE1hdGgucm91bmQoKChfYSA9IGVsZW1lbnRSZWN0ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50UmVjdC5oZWlnaHQpICE9IG51bGwgPyBfYSA6IDApICsgc3BvdGxpZ2h0UGFkZGluZyAqIDIpLFxuICAgICAgbGVmdDogTWF0aC5yb3VuZCgoKF9iID0gZWxlbWVudFJlY3QgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1lbnRSZWN0LmxlZnQpICE9IG51bGwgPyBfYiA6IDApIC0gc3BvdGxpZ2h0UGFkZGluZyksXG4gICAgICBvcGFjaXR5OiBzaG93U3BvdGxpZ2h0ID8gMSA6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiBzcG90bGlnaHRDbGlja3MgPyBcIm5vbmVcIiA6IFwiYXV0b1wiLFxuICAgICAgcG9zaXRpb246IGlzRml4ZWRUYXJnZXQgPyBcImZpeGVkXCIgOiBcImFic29sdXRlXCIsXG4gICAgICB0b3AsXG4gICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4yc1wiLFxuICAgICAgd2lkdGg6IE1hdGgucm91bmQoKChfYyA9IGVsZW1lbnRSZWN0ID09IG51bGwgPyB2b2lkIDAgOiBlbGVtZW50UmVjdC53aWR0aCkgIT0gbnVsbCA/IF9jIDogMCkgKyBzcG90bGlnaHRQYWRkaW5nICogMilcbiAgICB9O1xuICB9XG4gIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZpb3VzU3RhdGUpID0+ICh7IC4uLnByZXZpb3VzU3RhdGUsIC4uLnN0YXRlIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb3VzZU92ZXJTcG90bGlnaHQsIHNob3dTcG90bGlnaHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBkaXNhYmxlT3ZlcmxheSwgZGlzYWJsZU92ZXJsYXlDbG9zZSwgbGlmZWN5Y2xlLCBvbkNsaWNrT3ZlcmxheSwgcGxhY2VtZW50LCBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGRpc2FibGVPdmVybGF5IHx8IGxpZmVjeWNsZSAhPT0gTElGRUNZQ0xFLlRPT0xUSVApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgYmFzZVN0eWxlcyA9IHN0eWxlcy5vdmVybGF5O1xuICAgIGlmIChpc0xlZ2FjeSgpKSB7XG4gICAgICBiYXNlU3R5bGVzID0gcGxhY2VtZW50ID09PSBcImNlbnRlclwiID8gc3R5bGVzLm92ZXJsYXlMZWdhY3lDZW50ZXIgOiBzdHlsZXMub3ZlcmxheUxlZ2FjeTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzT3ZlcmxheSA9IHtcbiAgICAgIGN1cnNvcjogZGlzYWJsZU92ZXJsYXlDbG9zZSA/IFwiZGVmYXVsdFwiIDogXCJwb2ludGVyXCIsXG4gICAgICBoZWlnaHQ6IGdldERvY3VtZW50SGVpZ2h0KCksXG4gICAgICBwb2ludGVyRXZlbnRzOiBtb3VzZU92ZXJTcG90bGlnaHQgPyBcIm5vbmVcIiA6IFwiYXV0b1wiLFxuICAgICAgLi4uYmFzZVN0eWxlc1xuICAgIH07XG4gICAgbGV0IHNwb3RsaWdodDIgPSBwbGFjZW1lbnQgIT09IFwiY2VudGVyXCIgJiYgc2hvd1Nwb3RsaWdodCAmJiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoU3BvdGxpZ2h0X2RlZmF1bHQsIHsgc3R5bGVzOiB0aGlzLnNwb3RsaWdodFN0eWxlcyB9KTtcbiAgICBpZiAoZ2V0QnJvd3NlcigpID09PSBcInNhZmFyaVwiKSB7XG4gICAgICBjb25zdCB7IG1peEJsZW5kTW9kZSwgekluZGV4LCAuLi5zYWZhck92ZXJsYXkgfSA9IHN0eWxlc092ZXJsYXk7XG4gICAgICBzcG90bGlnaHQyID0gLyogQF9fUFVSRV9fICovIFJlYWN0My5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4uc2FmYXJPdmVybGF5IH0gfSwgc3BvdGxpZ2h0Mik7XG4gICAgICBkZWxldGUgc3R5bGVzT3ZlcmxheS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QzLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwicmVhY3Qtam95cmlkZV9fb3ZlcmxheVwiLFxuICAgICAgICBcImRhdGEtdGVzdC1pZFwiOiBcIm92ZXJsYXlcIixcbiAgICAgICAgb25DbGljazogb25DbGlja092ZXJsYXksXG4gICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgIHN0eWxlOiBzdHlsZXNPdmVybGF5XG4gICAgICB9LFxuICAgICAgc3BvdGxpZ2h0MlxuICAgICk7XG4gIH1cbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL1BvcnRhbC50c3hcbmltcG9ydCAqIGFzIFJlYWN0NCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbnZhciBKb3lyaWRlUG9ydGFsID0gY2xhc3MgZXh0ZW5kcyBSZWFjdDQuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibm9kZVwiLCBudWxsKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2FuVXNlRE9NKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLm5vZGUuaWQgPSBpZDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgaWYgKCFpc1JlYWN0MTYpIHtcbiAgICAgIHRoaXMucmVuZGVyUmVhY3QxNSgpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgdGhpcy5yZW5kZXJSZWFjdDE1KCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICghY2FuVXNlRE9NKCkgfHwgIXRoaXMubm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIHRoaXMubm9kZSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlbmRlclJlYWN0MTUoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgIFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIGNoaWxkcmVuLCB0aGlzLm5vZGUpO1xuICAgIH1cbiAgfVxuICByZW5kZXJSZWFjdDE2KCkge1xuICAgIGlmICghY2FuVXNlRE9NKCkgfHwgIWlzUmVhY3QxNikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCB0aGlzLm5vZGUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclJlYWN0MTYoKTtcbiAgfVxufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvVG9vbHRpcC9pbmRleC50c3hcbmltcG9ydCAqIGFzIFJlYWN0NyBmcm9tIFwicmVhY3RcIjtcblxuLy8gc3JjL2NvbXBvbmVudHMvVG9vbHRpcC9Db250YWluZXIudHN4XG5pbXBvcnQgKiBhcyBSZWFjdDYgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW5uZXJUZXh0MiBmcm9tIFwicmVhY3QtaW5uZXJ0ZXh0XCI7XG5cbi8vIHNyYy9jb21wb25lbnRzL1Rvb2x0aXAvQ2xvc2VCdXR0b24udHN4XG5pbXBvcnQgUmVhY3Q1IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gSm95cmlkZVRvb2x0aXBDbG9zZUJ1dHRvbih7IHN0eWxlcywgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGNvbG9yLCBoZWlnaHQsIHdpZHRoLCAuLi5zdHlsZSB9ID0gc3R5bGVzO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0NS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgc3R5bGUsIHR5cGU6IFwiYnV0dG9uXCIsIC4uLnByb3BzIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDUuY3JlYXRlRWxlbWVudChcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIGhlaWdodDogdHlwZW9mIGhlaWdodCA9PT0gXCJudW1iZXJcIiA/IGAke2hlaWdodH1weGAgOiBoZWlnaHQsXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkXCIsXG4gICAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTggMThcIixcbiAgICAgIHdpZHRoOiB0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIgPyBgJHt3aWR0aH1weGAgOiB3aWR0aCxcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB9LFxuICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDUuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgLyogQF9fUFVSRV9fICovIFJlYWN0NS5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJwYXRoXCIsXG4gICAgICB7XG4gICAgICAgIGQ6IFwiTTguMTM5MTExMjksOS4wMDI2ODE5MSBMMC4xNzE1MjE4MjcsMTcuMDI1ODQ2NyBDLTAuMDQ5ODAyNzA0OSwxNy4yNDg3MTUgLTAuMDQ5ODAyNzA0OSwxNy42MDk4Mzk0IDAuMTcxNTIxODI3LDE3LjgzMjc1NDUgQzAuMjgyMDQzNTQsMTcuOTQ0MzUyNiAwLjQyNzE4ODIwNiwxNy45OTk4NzA2IDAuNTcyMDUxNzY1LDE3Ljk5OTg3MDYgQzAuNzE3MTQ5NTgsMTcuOTk5ODcwNiAwLjg2MjAxMzEzOSwxNy45NDQzNTI2IDAuOTcyNTgxNzAzLDE3LjgzMjc1NDUgTDkuMDAwMDkzNyw5Ljc0OTI0NjE4IEwxNy4wMjc2MDU3LDE3LjgzMjc1NDUgQzE3LjEzODQwODUsMTcuOTQ0MzUyNiAxNy4yODMyNzIxLDE3Ljk5OTg3MDYgMTcuNDI4MTM1NiwxNy45OTk4NzA2IEMxNy41NzI5OTkyLDE3Ljk5OTg3MDYgMTcuNzE4MDk3LDE3Ljk0NDM1MjYgMTcuODI4NjY1NiwxNy44MzI3NTQ1IEMxOC4wNDk5OTAxLDE3LjYwOTg4NjIgMTguMDQ5OTkwMSwxNy4yNDg3NjE4IDE3LjgyODY2NTYsMTcuMDI1ODQ2NyBMOS44NjEzNTcyMiw5LjAwMjY4MTkxIEwxNy44MzQwMDY2LDAuOTczODQ4MjI1IEMxOC4wNTUzMzExLDAuNzUwOTc5OTM0IDE4LjA1NTMzMTEsMC4zODk4NTU1MzIgMTcuODM0MDA2NiwwLjE2Njk0MDM5IEMxNy42MTI2ODIxLC0wLjA1NTY0Njc5NjggMTcuMjU0MDM3LC0wLjA1NTY0Njc5NjggMTcuMDMyOTQ2NywwLjE2Njk0MDM5IEw5LjAwMDQyMTY2LDguMjU2MTE3NjUgTDAuOTY3MDA2NDI0LDAuMTY3MjY4MzQ1IEMwLjc0NTY4MTg5MiwtMC4wNTUzMTg4NDI2IDAuMzg3MzE3OTMxLC0wLjA1NTMxODg0MjYgMC4xNjU5OTMzOTksMC4xNjcyNjgzNDUgQy0wLjA1NTMzMTEzMzEsMC4zOTAxMzY2MzUgLTAuMDU1MzMxMTMzMSwwLjc1MTI2MTAzOCAwLjE2NTk5MzM5OSwwLjk3NDE3NjE3OSBMOC4xMzkyMDQ5OSw5LjAwMjY4MTkxIEw4LjEzOTExMTI5LDkuMDAyNjgxOTEgWlwiLFxuICAgICAgICBmaWxsOiBjb2xvclxuICAgICAgfVxuICAgICkpXG4gICkpO1xufVxudmFyIENsb3NlQnV0dG9uX2RlZmF1bHQgPSBKb3lyaWRlVG9vbHRpcENsb3NlQnV0dG9uO1xuXG4vLyBzcmMvY29tcG9uZW50cy9Ub29sdGlwL0NvbnRhaW5lci50c3hcbmZ1bmN0aW9uIEpveXJpZGVUb29sdGlwQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBiYWNrUHJvcHMsXG4gICAgY2xvc2VQcm9wcyxcbiAgICBjb250aW51b3VzLFxuICAgIGluZGV4LFxuICAgIGlzTGFzdFN0ZXAsXG4gICAgcHJpbWFyeVByb3BzLFxuICAgIHNpemUsXG4gICAgc2tpcFByb3BzLFxuICAgIHN0ZXAsXG4gICAgdG9vbHRpcFByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qge1xuICAgIGNvbnRlbnQsXG4gICAgaGlkZUJhY2tCdXR0b24sXG4gICAgaGlkZUNsb3NlQnV0dG9uLFxuICAgIGhpZGVGb290ZXIsXG4gICAgbG9jYWxlLFxuICAgIHNob3dQcm9ncmVzcyxcbiAgICBzaG93U2tpcEJ1dHRvbixcbiAgICBzdHlsZXMsXG4gICAgdGl0bGVcbiAgfSA9IHN0ZXA7XG4gIGNvbnN0IHsgYmFjaywgY2xvc2UsIGxhc3QsIG5leHQsIHNraXAgfSA9IGxvY2FsZTtcbiAgY29uc3Qgb3V0cHV0ID0ge1xuICAgIHByaW1hcnk6IGNsb3NlXG4gIH07XG4gIGlmIChjb250aW51b3VzKSB7XG4gICAgb3V0cHV0LnByaW1hcnkgPSBpc0xhc3RTdGVwID8gbGFzdCA6IG5leHQ7XG4gICAgaWYgKHNob3dQcm9ncmVzcykge1xuICAgICAgb3V0cHV0LnByaW1hcnkgPSAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIG91dHB1dC5wcmltYXJ5LCBcIiAoXCIsIGluZGV4ICsgMSwgXCIvXCIsIHNpemUsIFwiKVwiKTtcbiAgICB9XG4gIH1cbiAgaWYgKHNob3dTa2lwQnV0dG9uICYmICFpc0xhc3RTdGVwKSB7XG4gICAgb3V0cHV0LnNraXAgPSAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBcImFyaWEtbGl2ZVwiOiBcIm9mZlwiLFxuICAgICAgICBcImRhdGEtdGVzdC1pZFwiOiBcImJ1dHRvbi1za2lwXCIsXG4gICAgICAgIHN0eWxlOiBzdHlsZXMuYnV0dG9uU2tpcCxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgLi4uc2tpcFByb3BzXG4gICAgICB9LFxuICAgICAgc2tpcFxuICAgICk7XG4gIH1cbiAgaWYgKCFoaWRlQmFja0J1dHRvbiAmJiBpbmRleCA+IDApIHtcbiAgICBvdXRwdXQuYmFjayA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IFwiZGF0YS10ZXN0LWlkXCI6IFwiYnV0dG9uLWJhY2tcIiwgc3R5bGU6IHN0eWxlcy5idXR0b25CYWNrLCB0eXBlOiBcImJ1dHRvblwiLCAuLi5iYWNrUHJvcHMgfSwgYmFjayk7XG4gIH1cbiAgb3V0cHV0LmNsb3NlID0gIWhpZGVDbG9zZUJ1dHRvbiAmJiAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQoQ2xvc2VCdXR0b25fZGVmYXVsdCwgeyBcImRhdGEtdGVzdC1pZFwiOiBcImJ1dHRvbi1jbG9zZVwiLCBzdHlsZXM6IHN0eWxlcy5idXR0b25DbG9zZSwgLi4uY2xvc2VQcm9wcyB9KTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGtleTogXCJKb3lyaWRlVG9vbHRpcFwiLFxuICAgICAgY2xhc3NOYW1lOiBcInJlYWN0LWpveXJpZGVfX3Rvb2x0aXBcIixcbiAgICAgIHN0eWxlOiBzdHlsZXMudG9vbHRpcCxcbiAgICAgIC4uLnRvb2x0aXBQcm9wc1xuICAgIH0sXG4gICAgLyogQF9fUFVSRV9fICovIFJlYWN0Ni5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy50b29sdGlwQ29udGFpbmVyIH0sIHRpdGxlICYmIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChcImg0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IGlubmVyVGV4dDIodGl0bGUpLCBzdHlsZTogc3R5bGVzLnRvb2x0aXBUaXRsZSB9LCB0aXRsZSksIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMudG9vbHRpcENvbnRlbnQgfSwgY29udGVudCkpLFxuICAgICFoaWRlRm9vdGVyICYmIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDYuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMudG9vbHRpcEZvb3RlciB9LCAvKiBAX19QVVJFX18gKi8gUmVhY3Q2LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnRvb2x0aXBGb290ZXJTcGFjZXIgfSwgb3V0cHV0LnNraXApLCBvdXRwdXQuYmFjaywgLyogQF9fUFVSRV9fICovIFJlYWN0Ni5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgXCJkYXRhLXRlc3QtaWRcIjogXCJidXR0b24tcHJpbWFyeVwiLFxuICAgICAgICBzdHlsZTogc3R5bGVzLmJ1dHRvbk5leHQsXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIC4uLnByaW1hcnlQcm9wc1xuICAgICAgfSxcbiAgICAgIG91dHB1dC5wcmltYXJ5XG4gICAgKSksXG4gICAgb3V0cHV0LmNsb3NlXG4gICk7XG59XG52YXIgQ29udGFpbmVyX2RlZmF1bHQgPSBKb3lyaWRlVG9vbHRpcENvbnRhaW5lcjtcblxuLy8gc3JjL2NvbXBvbmVudHMvVG9vbHRpcC9pbmRleC50c3hcbnZhciBKb3lyaWRlVG9vbHRpcCA9IGNsYXNzIGV4dGVuZHMgUmVhY3Q3LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUNsaWNrQmFja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGhlbHBlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBoZWxwZXJzLnByZXYoKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlQ2xpY2tDbG9zZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGhlbHBlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBoZWxwZXJzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUNsaWNrUHJpbWFyeVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGNvbnRpbnVvdXMsIGhlbHBlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIWNvbnRpbnVvdXMpIHtcbiAgICAgICAgaGVscGVycy5jbG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoZWxwZXJzLm5leHQoKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlQ2xpY2tTa2lwXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgaGVscGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGhlbHBlcnMuc2tpcCgpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJnZXRFbGVtZW50c1Byb3BzXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGludW91cywgaXNMYXN0U3RlcCwgc2V0VG9vbHRpcFJlZiwgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGJhY2sgPSBnZXRUZXh0KHN0ZXAubG9jYWxlLmJhY2spO1xuICAgICAgY29uc3QgY2xvc2UgPSBnZXRUZXh0KHN0ZXAubG9jYWxlLmNsb3NlKTtcbiAgICAgIGNvbnN0IGxhc3QgPSBnZXRUZXh0KHN0ZXAubG9jYWxlLmxhc3QpO1xuICAgICAgY29uc3QgbmV4dCA9IGdldFRleHQoc3RlcC5sb2NhbGUubmV4dCk7XG4gICAgICBjb25zdCBza2lwID0gZ2V0VGV4dChzdGVwLmxvY2FsZS5za2lwKTtcbiAgICAgIGxldCBwcmltYXJ5VGV4dCA9IGNvbnRpbnVvdXMgPyBuZXh0IDogY2xvc2U7XG4gICAgICBpZiAoaXNMYXN0U3RlcCkge1xuICAgICAgICBwcmltYXJ5VGV4dCA9IGxhc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrUHJvcHM6IHtcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogYmFjayxcbiAgICAgICAgICBcImRhdGEtYWN0aW9uXCI6IFwiYmFja1wiLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tCYWNrLFxuICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgdGl0bGU6IGJhY2tcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VQcm9wczoge1xuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZSxcbiAgICAgICAgICBcImRhdGEtYWN0aW9uXCI6IFwiY2xvc2VcIixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrQ2xvc2UsXG4gICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgICB0aXRsZTogY2xvc2VcbiAgICAgICAgfSxcbiAgICAgICAgcHJpbWFyeVByb3BzOiB7XG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByaW1hcnlUZXh0LFxuICAgICAgICAgIFwiZGF0YS1hY3Rpb25cIjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1ByaW1hcnksXG4gICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgICB0aXRsZTogcHJpbWFyeVRleHRcbiAgICAgICAgfSxcbiAgICAgICAgc2tpcFByb3BzOiB7XG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHNraXAsXG4gICAgICAgICAgXCJkYXRhLWFjdGlvblwiOiBcInNraXBcIixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrU2tpcCxcbiAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIHRpdGxlOiBza2lwXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBQcm9wczoge1xuICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiB0cnVlLFxuICAgICAgICAgIHJlZjogc2V0VG9vbHRpcFJlZixcbiAgICAgICAgICByb2xlOiBcImFsZXJ0ZGlhbG9nXCJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250aW51b3VzLCBpbmRleCwgaXNMYXN0U3RlcCwgc2V0VG9vbHRpcFJlZiwgc2l6ZSwgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGJlYWNvbkNvbXBvbmVudCwgdG9vbHRpcENvbXBvbmVudCwgLi4uY2xlYW5TdGVwIH0gPSBzdGVwO1xuICAgIGxldCBjb21wb25lbnQ7XG4gICAgaWYgKHRvb2x0aXBDb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IHJlbmRlclByb3BzID0ge1xuICAgICAgICAuLi50aGlzLmdldEVsZW1lbnRzUHJvcHMoKSxcbiAgICAgICAgY29udGludW91cyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGlzTGFzdFN0ZXAsXG4gICAgICAgIHNpemUsXG4gICAgICAgIHN0ZXA6IGNsZWFuU3RlcCxcbiAgICAgICAgc2V0VG9vbHRpcFJlZlxuICAgICAgfTtcbiAgICAgIGNvbnN0IFRvb2x0aXBDb21wb25lbnQgPSB0b29sdGlwQ29tcG9uZW50O1xuICAgICAgY29tcG9uZW50ID0gLyogQF9fUFVSRV9fICovIFJlYWN0Ny5jcmVhdGVFbGVtZW50KFRvb2x0aXBDb21wb25lbnQsIHsgLi4ucmVuZGVyUHJvcHMgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudCA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDcuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29udGFpbmVyX2RlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICAuLi50aGlzLmdldEVsZW1lbnRzUHJvcHMoKSxcbiAgICAgICAgICBjb250aW51b3VzLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGlzTGFzdFN0ZXAsXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBzdGVwXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn07XG5cbi8vIHNyYy9jb21wb25lbnRzL1N0ZXAudHN4XG52YXIgSm95cmlkZVN0ZXAgPSBjbGFzcyBleHRlbmRzIFJlYWN0OC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJiZWFjb25Qb3BwZXJcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNjb3BlXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ0b29sdGlwXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ0b29sdGlwUG9wcGVyXCIsIG51bGwpO1xuICAgIC8qKlxuICAgICAqIEJlYWNvbiBjbGljay9ob3ZlciBldmVudCBsaXN0ZW5lclxuICAgICAqL1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVDbGlja0hvdmVyQmVhY29uXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwLCB1cGRhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWVudGVyXCIgJiYgc3RlcC5ldmVudCAhPT0gXCJob3ZlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSh7IGxpZmVjeWNsZTogTElGRUNZQ0xFLlRPT0xUSVAgfSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUNsaWNrT3ZlcmxheVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGhlbHBlcnMsIHN0ZXAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIXN0ZXAuZGlzYWJsZU92ZXJsYXlDbG9zZSkge1xuICAgICAgICBoZWxwZXJzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNldFRvb2x0aXBSZWZcIiwgKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGVsZW1lbnQ7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNldFBvcHBlclwiLCAocG9wcGVyLCB0eXBlKSA9PiB7XG4gICAgICBjb25zdCB7IGFjdGlvbiwgc2V0UG9wcGVyLCB1cGRhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAodHlwZSA9PT0gXCJ3cmFwcGVyXCIpIHtcbiAgICAgICAgdGhpcy5iZWFjb25Qb3BwZXIgPSBwb3BwZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3BwZXIgPSBwb3BwZXI7XG4gICAgICB9XG4gICAgICBzZXRQb3BwZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHNldFBvcHBlcihwb3BwZXIsIHR5cGUpO1xuICAgICAgaWYgKHRoaXMuYmVhY29uUG9wcGVyICYmIHRoaXMudG9vbHRpcFBvcHBlcikge1xuICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsaWZlY3ljbGU6IExJRkVDWUNMRS5SRUFEWVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVuZGVyVG9vbHRpcFwiLCAocmVuZGVyUHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGludW91cywgaGVscGVycywgaW5kZXgsIHNpemUsIHN0ZXAgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBKb3lyaWRlVG9vbHRpcCxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgICAgaGVscGVycyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBpc0xhc3RTdGVwOiBpbmRleCArIDEgPT09IHNpemUsXG4gICAgICAgICAgc2V0VG9vbHRpcFJlZjogdGhpcy5zZXRUb29sdGlwUmVmLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgc3RlcCxcbiAgICAgICAgICAuLi5yZW5kZXJQcm9wc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGVidWcsIGluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgIGxvZyh7XG4gICAgICB0aXRsZTogYHN0ZXA6JHtpbmRleH1gLFxuICAgICAgZGF0YTogW3sga2V5OiBcInByb3BzXCIsIHZhbHVlOiB0aGlzLnByb3BzIH1dLFxuICAgICAgZGVidWdcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wcykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpb24sXG4gICAgICBjYWxsYmFjayxcbiAgICAgIGNvbnRpbnVvdXMsXG4gICAgICBjb250cm9sbGVkLFxuICAgICAgZGVidWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxpZmVjeWNsZSxcbiAgICAgIHNpemUsXG4gICAgICBzdGF0dXMsXG4gICAgICBzdGVwLFxuICAgICAgdXBkYXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjaGFuZ2VkLCBjaGFuZ2VkRnJvbSB9ID0gdHJlZUNoYW5nZXMyKHByZXZpb3VzUHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0geyBhY3Rpb24sIGNvbnRyb2xsZWQsIGluZGV4LCBsaWZlY3ljbGUsIHNpemUsIHN0YXR1cyB9O1xuICAgIGNvbnN0IHNraXBCZWFjb24gPSBjb250aW51b3VzICYmIGFjdGlvbiAhPT0gQUNUSU9OUy5DTE9TRSAmJiAoaW5kZXggPiAwIHx8IGFjdGlvbiA9PT0gQUNUSU9OUy5QUkVWKTtcbiAgICBjb25zdCBoYXNTdG9yZUNoYW5nZWQgPSBjaGFuZ2VkKFwiYWN0aW9uXCIpIHx8IGNoYW5nZWQoXCJpbmRleFwiKSB8fCBjaGFuZ2VkKFwibGlmZWN5Y2xlXCIpIHx8IGNoYW5nZWQoXCJzdGF0dXNcIik7XG4gICAgY29uc3QgaXNJbml0aWFsID0gY2hhbmdlZEZyb20oXCJsaWZlY3ljbGVcIiwgW0xJRkVDWUNMRS5UT09MVElQLCBMSUZFQ1lDTEUuSU5JVF0sIExJRkVDWUNMRS5JTklUKTtcbiAgICBjb25zdCBpc0FmdGVyQWN0aW9uID0gY2hhbmdlZChcImFjdGlvblwiLCBbXG4gICAgICBBQ1RJT05TLk5FWFQsXG4gICAgICBBQ1RJT05TLlBSRVYsXG4gICAgICBBQ1RJT05TLlNLSVAsXG4gICAgICBBQ1RJT05TLkNMT1NFXG4gICAgXSk7XG4gICAgY29uc3QgaXNDb250cm9sbGVkID0gY29udHJvbGxlZCAmJiBpbmRleCA9PT0gcHJldmlvdXNQcm9wcy5pbmRleDtcbiAgICBpZiAoaXNBZnRlckFjdGlvbiAmJiAoaXNJbml0aWFsIHx8IGlzQ29udHJvbGxlZCkpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluZGV4OiBwcmV2aW91c1Byb3BzLmluZGV4LFxuICAgICAgICBsaWZlY3ljbGU6IExJRkVDWUNMRS5DT01QTEVURSxcbiAgICAgICAgc3RlcDogcHJldmlvdXNQcm9wcy5zdGVwLFxuICAgICAgICB0eXBlOiBFVkVOVFMuU1RFUF9BRlRFUlxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdGVwLnBsYWNlbWVudCA9PT0gXCJjZW50ZXJcIiAmJiBzdGF0dXMgPT09IFNUQVRVUy5SVU5OSU5HICYmIGNoYW5nZWQoXCJpbmRleFwiKSAmJiBhY3Rpb24gIT09IEFDVElPTlMuU1RBUlQgJiYgbGlmZWN5Y2xlID09PSBMSUZFQ1lDTEUuSU5JVCkge1xuICAgICAgdXBkYXRlKHsgbGlmZWN5Y2xlOiBMSUZFQ1lDTEUuUkVBRFkgfSk7XG4gICAgfVxuICAgIGlmIChoYXNTdG9yZUNoYW5nZWQpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KHN0ZXAudGFyZ2V0KTtcbiAgICAgIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSAhIWVsZW1lbnQ7XG4gICAgICBjb25zdCBoYXNSZW5kZXJlZFRhcmdldCA9IGVsZW1lbnRFeGlzdHMgJiYgaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KTtcbiAgICAgIGlmIChoYXNSZW5kZXJlZFRhcmdldCkge1xuICAgICAgICBpZiAoY2hhbmdlZEZyb20oXCJzdGF0dXNcIiwgU1RBVFVTLlJFQURZLCBTVEFUVVMuUlVOTklORykgfHwgY2hhbmdlZEZyb20oXCJsaWZlY3ljbGVcIiwgTElGRUNZQ0xFLklOSVQsIExJRkVDWUNMRS5SRUFEWSkpIHtcbiAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgICB0eXBlOiBFVkVOVFMuU1RFUF9CRUZPUkVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVsZW1lbnRFeGlzdHMgPyBcIlRhcmdldCBub3QgdmlzaWJsZVwiIDogXCJUYXJnZXQgbm90IG1vdW50ZWRcIiwgc3RlcCk7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB0eXBlOiBFVkVOVFMuVEFSR0VUX05PVF9GT1VORCxcbiAgICAgICAgICBzdGVwXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHtcbiAgICAgICAgICB1cGRhdGUoeyBpbmRleDogaW5kZXggKyAoYWN0aW9uID09PSBBQ1RJT05TLlBSRVYgPyAtMSA6IDEpIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkRnJvbShcImxpZmVjeWNsZVwiLCBMSUZFQ1lDTEUuSU5JVCwgTElGRUNZQ0xFLlJFQURZKSkge1xuICAgICAgdXBkYXRlKHsgbGlmZWN5Y2xlOiBoaWRlQmVhY29uKHN0ZXApIHx8IHNraXBCZWFjb24gPyBMSUZFQ1lDTEUuVE9PTFRJUCA6IExJRkVDWUNMRS5CRUFDT04gfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkKFwiaW5kZXhcIikpIHtcbiAgICAgIGxvZyh7XG4gICAgICAgIHRpdGxlOiBgc3RlcDoke2xpZmVjeWNsZX1gLFxuICAgICAgICBkYXRhOiBbeyBrZXk6IFwicHJvcHNcIiwgdmFsdWU6IHRoaXMucHJvcHMgfV0sXG4gICAgICAgIGRlYnVnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWQoXCJsaWZlY3ljbGVcIiwgTElGRUNZQ0xFLkJFQUNPTikpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHR5cGU6IEVWRU5UUy5CRUFDT05cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZChcImxpZmVjeWNsZVwiLCBMSUZFQ1lDTEUuVE9PTFRJUCkpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHR5cGU6IEVWRU5UUy5UT09MVElQXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IG5ldyBTY29wZSh0aGlzLnRvb2x0aXAsIHsgc2VsZWN0b3I6IFwiW2RhdGEtYWN0aW9uPXByaW1hcnldXCIgfSk7XG4gICAgICAgIHRoaXMuc2NvcGUuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZWRGcm9tKFwibGlmZWN5Y2xlXCIsIFtMSUZFQ1lDTEUuVE9PTFRJUCwgTElGRUNZQ0xFLklOSVRdLCBMSUZFQ1lDTEUuSU5JVCkpIHtcbiAgICAgIChfYSA9IHRoaXMuc2NvcGUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5yZW1vdmVTY29wZSgpO1xuICAgICAgdGhpcy5iZWFjb25Qb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy50b29sdGlwUG9wcGVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMuc2NvcGUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5yZW1vdmVTY29wZSgpO1xuICB9XG4gIGdldCBvcGVuKCkge1xuICAgIGNvbnN0IHsgbGlmZWN5Y2xlLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBoaWRlQmVhY29uKHN0ZXApIHx8IGxpZmVjeWNsZSA9PT0gTElGRUNZQ0xFLlRPT0xUSVA7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGludW91cywgZGVidWcsIGluZGV4LCBsaWZlY3ljbGUsIG5vbmNlLCBzaG91bGRTY3JvbGw6IHNob3VsZFNjcm9sbDIsIHNpemUsIHN0ZXAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudChzdGVwLnRhcmdldCk7XG4gICAgaWYgKCF2YWxpZGF0ZVN0ZXAoc3RlcCkgfHwgIWlzNS5kb21FbGVtZW50KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBgSm95cmlkZVN0ZXAtJHtpbmRleH1gLCBjbGFzc05hbWU6IFwicmVhY3Qtam95cmlkZV9fc3RlcFwiIH0sIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChKb3lyaWRlUG9ydGFsLCB7IGlkOiBcInJlYWN0LWpveXJpZGUtcG9ydGFsXCIgfSwgLyogQF9fUFVSRV9fICovIFJlYWN0OC5jcmVhdGVFbGVtZW50KFxuICAgICAgSm95cmlkZU92ZXJsYXksXG4gICAgICB7XG4gICAgICAgIC4uLnN0ZXAsXG4gICAgICAgIGRlYnVnLFxuICAgICAgICBsaWZlY3ljbGUsXG4gICAgICAgIG9uQ2xpY2tPdmVybGF5OiB0aGlzLmhhbmRsZUNsaWNrT3ZlcmxheVxuICAgICAgfVxuICAgICkpLCAvKiBAX19QVVJFX18gKi8gUmVhY3Q4LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBGbG9hdGVyLFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMucmVuZGVyVG9vbHRpcCxcbiAgICAgICAgZGVidWcsXG4gICAgICAgIGdldFBvcHBlcjogdGhpcy5zZXRQb3BwZXIsXG4gICAgICAgIGlkOiBgcmVhY3Qtam95cmlkZS1zdGVwLSR7aW5kZXh9YCxcbiAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICBwbGFjZW1lbnQ6IHN0ZXAucGxhY2VtZW50LFxuICAgICAgICB0YXJnZXQ6IHN0ZXAudGFyZ2V0LFxuICAgICAgICAuLi5zdGVwLmZsb2F0ZXJQcm9wc1xuICAgICAgfSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBSZWFjdDguY3JlYXRlRWxlbWVudChcbiAgICAgICAgSm95cmlkZUJlYWNvbixcbiAgICAgICAge1xuICAgICAgICAgIGJlYWNvbkNvbXBvbmVudDogc3RlcC5iZWFjb25Db21wb25lbnQsXG4gICAgICAgICAgY29udGludW91cyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBpc0xhc3RTdGVwOiBpbmRleCArIDEgPT09IHNpemUsXG4gICAgICAgICAgbG9jYWxlOiBzdGVwLmxvY2FsZSxcbiAgICAgICAgICBub25jZSxcbiAgICAgICAgICBvbkNsaWNrT3JIb3ZlcjogdGhpcy5oYW5kbGVDbGlja0hvdmVyQmVhY29uLFxuICAgICAgICAgIHNob3VsZEZvY3VzOiBzaG91bGRTY3JvbGwyLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgc3RlcCxcbiAgICAgICAgICBzdHlsZXM6IHN0ZXAuc3R5bGVzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICApKTtcbiAgfVxufTtcblxuLy8gc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4XG52YXIgSm95cmlkZSA9IGNsYXNzIGV4dGVuZHMgUmVhY3Q5LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoZWxwZXJzXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzdG9yZVwiKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiYmVhY29uUG9wcGVyXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ0b29sdGlwUG9wcGVyXCIpO1xuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsYmFja1wiLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgeyBjYWxsYmFjayB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChpczYuZnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEtleWRvd24gZXZlbnQgbGlzdGVuZXJcbiAgICAgKi9cbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlS2V5Ym9hcmRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGluZGV4LCBsaWZlY3ljbGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBzW2luZGV4XTtcbiAgICAgIGlmIChsaWZlY3ljbGUgPT09IExJRkVDWUNMRS5UT09MVElQKSB7XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSBcIkVzY2FwZVwiICYmIHN0ZXAgJiYgIXN0ZXAuZGlzYWJsZUNsb3NlT25Fc2MpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTeW5jIHRoZSBzdG9yZSB3aXRoIHRoZSBjb21wb25lbnQncyBzdGF0ZVxuICAgICAqL1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzeW5jU3RhdGVcIiwgKHN0YXRlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic2V0UG9wcGVyXCIsIChwb3BwZXIsIHR5cGUpID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcIndyYXBwZXJcIikge1xuICAgICAgICB0aGlzLmJlYWNvblBvcHBlciA9IHBvcHBlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvcHBlciA9IHBvcHBlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCB7IGRlYnVnLCBnZXRIZWxwZXJzLCBydW4sIHN0ZXBJbmRleCB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY29udHJvbGxlZDogcnVuICYmIGlzNi5udW1iZXIoc3RlcEluZGV4KVxuICAgIH0pO1xuICAgIHRoaXMuaGVscGVycyA9IHRoaXMuc3RvcmUuZ2V0SGVscGVycygpO1xuICAgIGNvbnN0IHsgYWRkTGlzdGVuZXIgfSA9IHRoaXMuc3RvcmU7XG4gICAgbG9nKHtcbiAgICAgIHRpdGxlOiBcImluaXRcIixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyBrZXk6IFwicHJvcHNcIiwgdmFsdWU6IHRoaXMucHJvcHMgfSxcbiAgICAgICAgeyBrZXk6IFwic3RhdGVcIiwgdmFsdWU6IHRoaXMuc3RhdGUgfVxuICAgICAgXSxcbiAgICAgIGRlYnVnXG4gICAgfSk7XG4gICAgYWRkTGlzdGVuZXIodGhpcy5zeW5jU3RhdGUpO1xuICAgIGlmIChnZXRIZWxwZXJzKSB7XG4gICAgICBnZXRIZWxwZXJzKHRoaXMuaGVscGVycyk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGRlYnVnLCBkaXNhYmxlQ2xvc2VPbkVzYywgcnVuLCBzdGVwcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0IH0gPSB0aGlzLnN0b3JlO1xuICAgIGlmICh2YWxpZGF0ZVN0ZXBzKHN0ZXBzLCBkZWJ1ZykgJiYgcnVuKSB7XG4gICAgICBzdGFydCgpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVDbG9zZU9uRXNjKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5Ym9hcmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMsIHByZXZpb3VzU3RhdGUpIHtcbiAgICBpZiAoIWNhblVzZURPTSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgYWN0aW9uLCBjb250cm9sbGVkLCBpbmRleCwgbGlmZWN5Y2xlLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBkZWJ1ZywgcnVuLCBzdGVwSW5kZXgsIHN0ZXBzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RlcEluZGV4OiBwcmV2aW91c1N0ZXBJbmRleCwgc3RlcHM6IHByZXZpb3VzU3RlcHMgfSA9IHByZXZpb3VzUHJvcHM7XG4gICAgY29uc3QgeyByZXNldCwgc2V0U3RlcHMsIHN0YXJ0LCBzdG9wLCB1cGRhdGUgfSA9IHRoaXMuc3RvcmU7XG4gICAgY29uc3QgeyBjaGFuZ2VkOiBjaGFuZ2VkUHJvcHMgfSA9IHRyZWVDaGFuZ2VzMyhwcmV2aW91c1Byb3BzLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCB7IGNoYW5nZWQsIGNoYW5nZWRGcm9tIH0gPSB0cmVlQ2hhbmdlczMocHJldmlvdXNTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgY29uc3Qgc3RlcCA9IGdldE1lcmdlZFN0ZXAoc3RlcHNbaW5kZXhdLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCBzdGVwc0NoYW5nZWQgPSAhaXNFcXVhbChwcmV2aW91c1N0ZXBzLCBzdGVwcyk7XG4gICAgY29uc3Qgc3RlcEluZGV4Q2hhbmdlZCA9IGlzNi5udW1iZXIoc3RlcEluZGV4KSAmJiBjaGFuZ2VkUHJvcHMoXCJzdGVwSW5kZXhcIik7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudChzdGVwLnRhcmdldCk7XG4gICAgaWYgKHN0ZXBzQ2hhbmdlZCkge1xuICAgICAgaWYgKHZhbGlkYXRlU3RlcHMoc3RlcHMsIGRlYnVnKSkge1xuICAgICAgICBzZXRTdGVwcyhzdGVwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdGVwcyBhcmUgbm90IHZhbGlkXCIsIHN0ZXBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcyhcInJ1blwiKSkge1xuICAgICAgaWYgKHJ1bikge1xuICAgICAgICBzdGFydChzdGVwSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3RlcEluZGV4Q2hhbmdlZCkge1xuICAgICAgbGV0IG5leHRBY3Rpb24gPSBpczYubnVtYmVyKHByZXZpb3VzU3RlcEluZGV4KSAmJiBwcmV2aW91c1N0ZXBJbmRleCA8IHN0ZXBJbmRleCA/IEFDVElPTlMuTkVYVCA6IEFDVElPTlMuUFJFVjtcbiAgICAgIGlmIChhY3Rpb24gPT09IEFDVElPTlMuU1RPUCkge1xuICAgICAgICBuZXh0QWN0aW9uID0gQUNUSU9OUy5TVEFSVDtcbiAgICAgIH1cbiAgICAgIGlmICghW1NUQVRVUy5GSU5JU0hFRCwgU1RBVFVTLlNLSVBQRURdLmluY2x1ZGVzKHN0YXR1cykpIHtcbiAgICAgICAgdXBkYXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbiA9PT0gQUNUSU9OUy5DTE9TRSA/IEFDVElPTlMuQ0xPU0UgOiBuZXh0QWN0aW9uLFxuICAgICAgICAgIGluZGV4OiBzdGVwSW5kZXgsXG4gICAgICAgICAgbGlmZWN5Y2xlOiBMSUZFQ1lDTEUuSU5JVFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjb250cm9sbGVkICYmIHN0YXR1cyA9PT0gU1RBVFVTLlJVTk5JTkcgJiYgaW5kZXggPT09IDAgJiYgIXRhcmdldCkge1xuICAgICAgdGhpcy5zdG9yZS51cGRhdGUoeyBpbmRleDogaW5kZXggKyAxIH0pO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIHR5cGU6IEVWRU5UUy5UQVJHRVRfTk9UX0ZPVU5ELFxuICAgICAgICBzdGVwXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2tEYXRhID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIGluZGV4LFxuICAgICAgc3RlcFxuICAgIH07XG4gICAgY29uc3QgaXNBZnRlckFjdGlvbiA9IGNoYW5nZWQoXCJhY3Rpb25cIiwgW1xuICAgICAgQUNUSU9OUy5ORVhULFxuICAgICAgQUNUSU9OUy5QUkVWLFxuICAgICAgQUNUSU9OUy5TS0lQLFxuICAgICAgQUNUSU9OUy5DTE9TRVxuICAgIF0pO1xuICAgIGlmIChpc0FmdGVyQWN0aW9uICYmIGNoYW5nZWQoXCJzdGF0dXNcIiwgU1RBVFVTLlBBVVNFRCkpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IGdldE1lcmdlZFN0ZXAoc3RlcHNbcHJldmlvdXNTdGF0ZS5pbmRleF0sIHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIC4uLmNhbGxiYWNrRGF0YSxcbiAgICAgICAgaW5kZXg6IHByZXZpb3VzU3RhdGUuaW5kZXgsXG4gICAgICAgIGxpZmVjeWNsZTogTElGRUNZQ0xFLkNPTVBMRVRFLFxuICAgICAgICBzdGVwOiBwcmV2aW91c1N0ZXAsXG4gICAgICAgIHR5cGU6IEVWRU5UUy5TVEVQX0FGVEVSXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWQoXCJzdGF0dXNcIiwgW1NUQVRVUy5GSU5JU0hFRCwgU1RBVFVTLlNLSVBQRURdKSkge1xuICAgICAgY29uc3QgcHJldmlvdXNTdGVwID0gZ2V0TWVyZ2VkU3RlcChzdGVwc1twcmV2aW91c1N0YXRlLmluZGV4XSwgdGhpcy5wcm9wcyk7XG4gICAgICBpZiAoIWNvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgLi4uY2FsbGJhY2tEYXRhLFxuICAgICAgICAgIGluZGV4OiBwcmV2aW91c1N0YXRlLmluZGV4LFxuICAgICAgICAgIGxpZmVjeWNsZTogTElGRUNZQ0xFLkNPTVBMRVRFLFxuICAgICAgICAgIHN0ZXA6IHByZXZpb3VzU3RlcCxcbiAgICAgICAgICB0eXBlOiBFVkVOVFMuU1RFUF9BRlRFUlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAuLi5jYWxsYmFja0RhdGEsXG4gICAgICAgIHR5cGU6IEVWRU5UUy5UT1VSX0VORCxcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBsYXN0IHN0ZXAgd2hlbiB0aGUgdG91ciBpcyBmaW5pc2hlZFxuICAgICAgICBzdGVwOiBwcmV2aW91c1N0ZXAsXG4gICAgICAgIGluZGV4OiBwcmV2aW91c1N0YXRlLmluZGV4XG4gICAgICB9KTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VkRnJvbShcInN0YXR1c1wiLCBbU1RBVFVTLklETEUsIFNUQVRVUy5SRUFEWV0sIFNUQVRVUy5SVU5OSU5HKSkge1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIC4uLmNhbGxiYWNrRGF0YSxcbiAgICAgICAgdHlwZTogRVZFTlRTLlRPVVJfU1RBUlRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlZChcInN0YXR1c1wiKSB8fCBjaGFuZ2VkKFwiYWN0aW9uXCIsIEFDVElPTlMuUkVTRVQpKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgLi4uY2FsbGJhY2tEYXRhLFxuICAgICAgICB0eXBlOiBFVkVOVFMuVE9VUl9TVEFUVVNcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFRvU3RlcChwcmV2aW91c1N0YXRlKTtcbiAgICBpZiAoc3RlcC5wbGFjZW1lbnQgPT09IFwiY2VudGVyXCIgJiYgc3RhdHVzID09PSBTVEFUVVMuUlVOTklORyAmJiBsaWZlY3ljbGUgPT09IExJRkVDWUNMRS5JTklUKSB7XG4gICAgICB0aGlzLnN0b3JlLnVwZGF0ZSh7IGxpZmVjeWNsZTogTElGRUNZQ0xFLlJFQURZIH0pO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVDbG9zZU9uRXNjIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZGlzYWJsZUNsb3NlT25Fc2MpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlib2FyZCk7XG4gICAgfVxuICB9XG4gIHNjcm9sbFRvU3RlcChwcmV2aW91c1N0YXRlKSB7XG4gICAgY29uc3QgeyBpbmRleCwgbGlmZWN5Y2xlLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgZGVidWcsXG4gICAgICBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4ID0gZmFsc2UsXG4gICAgICBzY3JvbGxEdXJhdGlvbixcbiAgICAgIHNjcm9sbE9mZnNldCA9IDIwLFxuICAgICAgc2Nyb2xsVG9GaXJzdFN0ZXAgPSBmYWxzZSxcbiAgICAgIHN0ZXBzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RlcCA9IGdldE1lcmdlZFN0ZXAoc3RlcHNbaW5kZXhdLCB0aGlzLnByb3BzKTtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50KHN0ZXAudGFyZ2V0KTtcbiAgICBjb25zdCBzaG91bGRTY3JvbGxUb1N0ZXAgPSBzaG91bGRTY3JvbGwoe1xuICAgICAgaXNGaXJzdFN0ZXA6IGluZGV4ID09PSAwLFxuICAgICAgbGlmZWN5Y2xlLFxuICAgICAgcHJldmlvdXNMaWZlY3ljbGU6IHByZXZpb3VzU3RhdGUubGlmZWN5Y2xlLFxuICAgICAgc2Nyb2xsVG9GaXJzdFN0ZXAsXG4gICAgICBzdGVwLFxuICAgICAgdGFyZ2V0XG4gICAgfSk7XG4gICAgaWYgKHN0YXR1cyA9PT0gU1RBVFVTLlJVTk5JTkcgJiYgc2hvdWxkU2Nyb2xsVG9TdGVwKSB7XG4gICAgICBjb25zdCBoYXNDdXN0b21TY3JvbGwgPSBoYXNDdXN0b21TY3JvbGxQYXJlbnQodGFyZ2V0LCBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4KTtcbiAgICAgIGNvbnN0IHNjcm9sbFBhcmVudDIgPSBnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LCBkaXNhYmxlU2Nyb2xsUGFyZW50Rml4KTtcbiAgICAgIGxldCBzY3JvbGxZID0gTWF0aC5mbG9vcihnZXRTY3JvbGxUbyh0YXJnZXQsIHNjcm9sbE9mZnNldCwgZGlzYWJsZVNjcm9sbFBhcmVudEZpeCkpIHx8IDA7XG4gICAgICBsb2coe1xuICAgICAgICB0aXRsZTogXCJzY3JvbGxUb1N0ZXBcIixcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHsga2V5OiBcImluZGV4XCIsIHZhbHVlOiBpbmRleCB9LFxuICAgICAgICAgIHsga2V5OiBcImxpZmVjeWNsZVwiLCB2YWx1ZTogbGlmZWN5Y2xlIH0sXG4gICAgICAgICAgeyBrZXk6IFwic3RhdHVzXCIsIHZhbHVlOiBzdGF0dXMgfVxuICAgICAgICBdLFxuICAgICAgICBkZWJ1Z1xuICAgICAgfSk7XG4gICAgICBpZiAobGlmZWN5Y2xlID09PSBMSUZFQ1lDTEUuQkVBQ09OICYmIHRoaXMuYmVhY29uUG9wcGVyKSB7XG4gICAgICAgIGNvbnN0IHsgcGxhY2VtZW50LCBwb3BwZXIgfSA9IHRoaXMuYmVhY29uUG9wcGVyO1xuICAgICAgICBpZiAoIVtcImJvdHRvbVwiXS5pbmNsdWRlcyhwbGFjZW1lbnQpICYmICFoYXNDdXN0b21TY3JvbGwpIHtcbiAgICAgICAgICBzY3JvbGxZID0gTWF0aC5mbG9vcihwb3BwZXIudG9wIC0gc2Nyb2xsT2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaWZlY3ljbGUgPT09IExJRkVDWUNMRS5UT09MVElQICYmIHRoaXMudG9vbHRpcFBvcHBlcikge1xuICAgICAgICBjb25zdCB7IGZsaXBwZWQsIHBsYWNlbWVudCwgcG9wcGVyIH0gPSB0aGlzLnRvb2x0aXBQb3BwZXI7XG4gICAgICAgIGlmIChbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImxlZnRcIl0uaW5jbHVkZXMocGxhY2VtZW50KSAmJiAhZmxpcHBlZCAmJiAhaGFzQ3VzdG9tU2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsWSA9IE1hdGguZmxvb3IocG9wcGVyLnRvcCAtIHNjcm9sbE9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsWSAtPSBzdGVwLnNwb3RsaWdodFBhZGRpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjcm9sbFkgPSBzY3JvbGxZID49IDAgPyBzY3JvbGxZIDogMDtcbiAgICAgIGlmIChzdGF0dXMgPT09IFNUQVRVUy5SVU5OSU5HKSB7XG4gICAgICAgIHNjcm9sbFRvKHNjcm9sbFksIHsgZWxlbWVudDogc2Nyb2xsUGFyZW50MiwgZHVyYXRpb246IHNjcm9sbER1cmF0aW9uIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgaWYgKCFjYW5Vc2VET00oKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgaW5kZXgsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBjb250aW51b3VzID0gZmFsc2UsXG4gICAgICBkZWJ1ZyA9IGZhbHNlLFxuICAgICAgbm9uY2UsXG4gICAgICBzY3JvbGxUb0ZpcnN0U3RlcCA9IGZhbHNlLFxuICAgICAgc3RlcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChzdGF0dXMgPT09IFNUQVRVUy5SVU5OSU5HICYmIHN0ZXBzW2luZGV4XSkge1xuICAgICAgY29uc3Qgc3RlcCA9IGdldE1lcmdlZFN0ZXAoc3RlcHNbaW5kZXhdLCB0aGlzLnByb3BzKTtcbiAgICAgIG91dHB1dCA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdDkuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSm95cmlkZVN0ZXAsXG4gICAgICAgIHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmNhbGxiYWNrLFxuICAgICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgICAgZGVidWcsXG4gICAgICAgICAgaGVscGVyczogdGhpcy5oZWxwZXJzLFxuICAgICAgICAgIG5vbmNlLFxuICAgICAgICAgIHNldFBvcHBlcjogdGhpcy5zZXRQb3BwZXIsXG4gICAgICAgICAgc2hvdWxkU2Nyb2xsOiAhc3RlcC5kaXNhYmxlU2Nyb2xsaW5nICYmIChpbmRleCAhPT0gMCB8fCBzY3JvbGxUb0ZpcnN0U3RlcCksXG4gICAgICAgICAgc3RlcCxcbiAgICAgICAgICB1cGRhdGU6IHRoaXMuc3RvcmUudXBkYXRlXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3Q5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVhY3Qtam95cmlkZVwiIH0sIG91dHB1dCk7XG4gIH1cbn07XG5fX3B1YmxpY0ZpZWxkKEpveXJpZGUsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG52YXIgY29tcG9uZW50c19kZWZhdWx0ID0gSm95cmlkZTtcbmV4cG9ydCB7XG4gIEFDVElPTlMsXG4gIEVWRU5UUyxcbiAgTElGRUNZQ0xFLFxuICBTVEFUVVMsXG4gIGNvbXBvbmVudHNfZGVmYXVsdCBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IGVxdWFsMiBmcm9tIFwiQGdpbGJhcmJhcmEvZGVlcC1lcXVhbFwiO1xuaW1wb3J0IGlzMiBmcm9tIFwiaXMtbGl0ZVwiO1xuXG4vLyBzcmMvaGVscGVycy50c1xuaW1wb3J0IGVxdWFsIGZyb20gXCJAZ2lsYmFyYmFyYS9kZWVwLWVxdWFsXCI7XG5pbXBvcnQgaXMgZnJvbSBcImlzLWxpdGVcIjtcbmZ1bmN0aW9uIGNhbkhhdmVMZW5ndGgoLi4uYXJndW1lbnRzXykge1xuICByZXR1cm4gYXJndW1lbnRzXy5ldmVyeSgoZCkgPT4gaXMuc3RyaW5nKGQpIHx8IGlzLmFycmF5KGQpIHx8IGlzLnBsYWluT2JqZWN0KGQpKTtcbn1cbmZ1bmN0aW9uIGNoZWNrRXF1YWxpdHkobGVmdCwgcmlnaHQsIHZhbHVlKSB7XG4gIGlmICghaXNTYW1lVHlwZShsZWZ0LCByaWdodCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMuYXJyYXkpKSB7XG4gICAgcmV0dXJuICFsZWZ0LnNvbWUoaGFzVmFsdWUodmFsdWUpKSAmJiByaWdodC5zb21lKGhhc1ZhbHVlKHZhbHVlKSk7XG4gIH1cbiAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMucGxhaW5PYmplY3QpKSB7XG4gICAgcmV0dXJuICFPYmplY3QuZW50cmllcyhsZWZ0KS5zb21lKGhhc0VudHJ5KHZhbHVlKSkgJiYgT2JqZWN0LmVudHJpZXMocmlnaHQpLnNvbWUoaGFzRW50cnkodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gcmlnaHQgPT09IHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcGFyZU51bWJlcnMocHJldmlvdXNEYXRhLCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgYWN0dWFsLCBrZXksIHByZXZpb3VzLCB0eXBlIH0gPSBvcHRpb25zO1xuICBjb25zdCBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgY29uc3QgcmlnaHQgPSBuZXN0ZWQoZGF0YSwga2V5KTtcbiAgbGV0IGNoYW5nZWQgPSBbbGVmdCwgcmlnaHRdLmV2ZXJ5KGlzLm51bWJlcikgJiYgKHR5cGUgPT09IFwiaW5jcmVhc2VkXCIgPyBsZWZ0IDwgcmlnaHQgOiBsZWZ0ID4gcmlnaHQpO1xuICBpZiAoIWlzLnVuZGVmaW5lZChhY3R1YWwpKSB7XG4gICAgY2hhbmdlZCA9IGNoYW5nZWQgJiYgcmlnaHQgPT09IGFjdHVhbDtcbiAgfVxuICBpZiAoIWlzLnVuZGVmaW5lZChwcmV2aW91cykpIHtcbiAgICBjaGFuZ2VkID0gY2hhbmdlZCAmJiBsZWZ0ID09PSBwcmV2aW91cztcbiAgfVxuICByZXR1cm4gY2hhbmdlZDtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVWYWx1ZXMocHJldmlvdXNEYXRhLCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsga2V5LCB0eXBlLCB2YWx1ZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgbGVmdCA9IG5lc3RlZChwcmV2aW91c0RhdGEsIGtleSk7XG4gIGNvbnN0IHJpZ2h0ID0gbmVzdGVkKGRhdGEsIGtleSk7XG4gIGNvbnN0IHByaW1hcnkgPSB0eXBlID09PSBcImFkZGVkXCIgPyBsZWZ0IDogcmlnaHQ7XG4gIGNvbnN0IHNlY29uZGFyeSA9IHR5cGUgPT09IFwiYWRkZWRcIiA/IHJpZ2h0IDogbGVmdDtcbiAgaWYgKCFpcy5udWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgaWYgKGlzLmRlZmluZWQocHJpbWFyeSkpIHtcbiAgICAgIGlmIChpcy5hcnJheShwcmltYXJ5KSB8fCBpcy5wbGFpbk9iamVjdChwcmltYXJ5KSkge1xuICAgICAgICByZXR1cm4gY2hlY2tFcXVhbGl0eShwcmltYXJ5LCBzZWNvbmRhcnksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVxdWFsKHNlY29uZGFyeSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMuYXJyYXkpKSB7XG4gICAgcmV0dXJuICFzZWNvbmRhcnkuZXZlcnkoaXNFcXVhbFByZWRpY2F0ZShwcmltYXJ5KSk7XG4gIH1cbiAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMucGxhaW5PYmplY3QpKSB7XG4gICAgcmV0dXJuIGhhc0V4dHJhS2V5cyhPYmplY3Qua2V5cyhwcmltYXJ5KSwgT2JqZWN0LmtleXMoc2Vjb25kYXJ5KSk7XG4gIH1cbiAgcmV0dXJuICFbbGVmdCwgcmlnaHRdLmV2ZXJ5KChkKSA9PiBpcy5wcmltaXRpdmUoZCkgJiYgaXMuZGVmaW5lZChkKSkgJiYgKHR5cGUgPT09IFwiYWRkZWRcIiA/ICFpcy5kZWZpbmVkKGxlZnQpICYmIGlzLmRlZmluZWQocmlnaHQpIDogaXMuZGVmaW5lZChsZWZ0KSAmJiAhaXMuZGVmaW5lZChyaWdodCkpO1xufVxuZnVuY3Rpb24gZ2V0SXRlcmFibGVzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXkgfSA9IHt9KSB7XG4gIGxldCBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgbGV0IHJpZ2h0ID0gbmVzdGVkKGRhdGEsIGtleSk7XG4gIGlmICghaXNTYW1lVHlwZShsZWZ0LCByaWdodCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW5wdXRzIGhhdmUgZGlmZmVyZW50IHR5cGVzXCIpO1xuICB9XG4gIGlmICghY2FuSGF2ZUxlbmd0aChsZWZ0LCByaWdodCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW5wdXRzIGRvbid0IGhhdmUgbGVuZ3RoXCIpO1xuICB9XG4gIGlmIChbbGVmdCwgcmlnaHRdLmV2ZXJ5KGlzLnBsYWluT2JqZWN0KSkge1xuICAgIGxlZnQgPSBPYmplY3Qua2V5cyhsZWZ0KTtcbiAgICByaWdodCA9IE9iamVjdC5rZXlzKHJpZ2h0KTtcbiAgfVxuICByZXR1cm4gW2xlZnQsIHJpZ2h0XTtcbn1cbmZ1bmN0aW9uIGhhc0VudHJ5KGlucHV0KSB7XG4gIHJldHVybiAoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKGlzLmFycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGVxdWFsKGlucHV0LCB2YWx1ZSkgfHwgaW5wdXQuc29tZSgoZCkgPT4gZXF1YWwoZCwgdmFsdWUpIHx8IGlzLmFycmF5KHZhbHVlKSAmJiBpc0VxdWFsUHJlZGljYXRlKHZhbHVlKShkKSk7XG4gICAgfVxuICAgIGlmIChpcy5wbGFpbk9iamVjdChpbnB1dCkgJiYgaW5wdXRba2V5XSkge1xuICAgICAgcmV0dXJuICEhaW5wdXRba2V5XSAmJiBlcXVhbChpbnB1dFtrZXldLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlcXVhbChpbnB1dCwgdmFsdWUpO1xuICB9O1xufVxuZnVuY3Rpb24gaGFzRXh0cmFLZXlzKGxlZnQsIHJpZ2h0KSB7XG4gIHJldHVybiByaWdodC5zb21lKChkKSA9PiAhbGVmdC5pbmNsdWRlcyhkKSk7XG59XG5mdW5jdGlvbiBoYXNWYWx1ZShpbnB1dCkge1xuICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgaWYgKGlzLmFycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0LnNvbWUoKGQpID0+IGVxdWFsKGQsIHZhbHVlKSB8fCBpcy5hcnJheSh2YWx1ZSkgJiYgaXNFcXVhbFByZWRpY2F0ZSh2YWx1ZSkoZCkpO1xuICAgIH1cbiAgICByZXR1cm4gZXF1YWwoaW5wdXQsIHZhbHVlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGluY2x1ZGVzT3JFcXVhbHNUbyhwcmV2aW91c1ZhbHVlLCB2YWx1ZSkge1xuICByZXR1cm4gaXMuYXJyYXkocHJldmlvdXNWYWx1ZSkgPyBwcmV2aW91c1ZhbHVlLnNvbWUoKGQpID0+IGVxdWFsKGQsIHZhbHVlKSkgOiBlcXVhbChwcmV2aW91c1ZhbHVlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0VxdWFsUHJlZGljYXRlKGRhdGEpIHtcbiAgcmV0dXJuICh2YWx1ZSkgPT4gZGF0YS5zb21lKChkKSA9PiBlcXVhbChkLCB2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNTYW1lVHlwZSguLi5hcmd1bWVudHNfKSB7XG4gIHJldHVybiBhcmd1bWVudHNfLmV2ZXJ5KGlzLmFycmF5KSB8fCBhcmd1bWVudHNfLmV2ZXJ5KGlzLm51bWJlcikgfHwgYXJndW1lbnRzXy5ldmVyeShpcy5wbGFpbk9iamVjdCkgfHwgYXJndW1lbnRzXy5ldmVyeShpcy5zdHJpbmcpO1xufVxuZnVuY3Rpb24gbmVzdGVkKGRhdGEsIHByb3BlcnR5KSB7XG4gIGlmIChpcy5wbGFpbk9iamVjdChkYXRhKSB8fCBpcy5hcnJheShkYXRhKSkge1xuICAgIGlmIChpcy5zdHJpbmcocHJvcGVydHkpKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHByb3BlcnR5LnNwbGl0KFwiLlwiKTtcbiAgICAgIHJldHVybiBwcm9wcy5yZWR1Y2UoKGFjYywgZCkgPT4gYWNjICYmIGFjY1tkXSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChpcy5udW1iZXIocHJvcGVydHkpKSB7XG4gICAgICByZXR1cm4gZGF0YVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vLyBzcmMvaW5kZXgudHNcbmZ1bmN0aW9uIHRyZWVDaGFuZ2VzKHByZXZpb3VzRGF0YSwgZGF0YSkge1xuICBpZiAoW3ByZXZpb3VzRGF0YSwgZGF0YV0uc29tZShpczIubnVsbE9yVW5kZWZpbmVkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyc1wiKTtcbiAgfVxuICBpZiAoIVtwcmV2aW91c0RhdGEsIGRhdGFdLmV2ZXJ5KChkKSA9PiBpczIucGxhaW5PYmplY3QoZCkgfHwgaXMyLmFycmF5KGQpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHBsYWluIG9iamVjdHMgb3IgYXJyYXlcIik7XG4gIH1cbiAgY29uc3QgYWRkZWQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29tcGFyZVZhbHVlcyhwcmV2aW91c0RhdGEsIGRhdGEsIHsga2V5LCB0eXBlOiBcImFkZGVkXCIsIHZhbHVlIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlZCA9IChrZXksIGFjdHVhbCwgcHJldmlvdXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGVmdCA9IG5lc3RlZChwcmV2aW91c0RhdGEsIGtleSk7XG4gICAgICBjb25zdCByaWdodCA9IG5lc3RlZChkYXRhLCBrZXkpO1xuICAgICAgY29uc3QgaGFzQWN0dWFsID0gaXMyLmRlZmluZWQoYWN0dWFsKTtcbiAgICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gaXMyLmRlZmluZWQocHJldmlvdXMpO1xuICAgICAgaWYgKGhhc0FjdHVhbCB8fCBoYXNQcmV2aW91cykge1xuICAgICAgICBjb25zdCBsZWZ0Q29tcGFyYXRvciA9IGhhc1ByZXZpb3VzID8gaW5jbHVkZXNPckVxdWFsc1RvKHByZXZpb3VzLCBsZWZ0KSA6ICFpbmNsdWRlc09yRXF1YWxzVG8oYWN0dWFsLCBsZWZ0KTtcbiAgICAgICAgY29uc3QgcmlnaHRDb21wYXJhdG9yID0gaW5jbHVkZXNPckVxdWFsc1RvKGFjdHVhbCwgcmlnaHQpO1xuICAgICAgICByZXR1cm4gbGVmdENvbXBhcmF0b3IgJiYgcmlnaHRDb21wYXJhdG9yO1xuICAgICAgfVxuICAgICAgaWYgKFtsZWZ0LCByaWdodF0uZXZlcnkoaXMyLmFycmF5KSB8fCBbbGVmdCwgcmlnaHRdLmV2ZXJ5KGlzMi5wbGFpbk9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuICFlcXVhbDIobGVmdCwgcmlnaHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2hhbmdlZEZyb20gPSAoa2V5LCBwcmV2aW91cywgYWN0dWFsKSA9PiB7XG4gICAgaWYgKCFpczIuZGVmaW5lZChrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZWZ0ID0gbmVzdGVkKHByZXZpb3VzRGF0YSwga2V5KTtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gbmVzdGVkKGRhdGEsIGtleSk7XG4gICAgICBjb25zdCBoYXNBY3R1YWwgPSBpczIuZGVmaW5lZChhY3R1YWwpO1xuICAgICAgcmV0dXJuIGluY2x1ZGVzT3JFcXVhbHNUbyhwcmV2aW91cywgbGVmdCkgJiYgKGhhc0FjdHVhbCA/IGluY2x1ZGVzT3JFcXVhbHNUbyhhY3R1YWwsIHJpZ2h0KSA6ICFoYXNBY3R1YWwpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGVjcmVhc2VkID0gKGtleSwgYWN0dWFsLCBwcmV2aW91cykgPT4ge1xuICAgIGlmICghaXMyLmRlZmluZWQoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbXBhcmVOdW1iZXJzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXksIGFjdHVhbCwgcHJldmlvdXMsIHR5cGU6IFwiZGVjcmVhc2VkXCIgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbXB0aWVkID0gKGtleSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gZ2V0SXRlcmFibGVzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXkgfSk7XG4gICAgICByZXR1cm4gISFsZWZ0Lmxlbmd0aCAmJiAhcmlnaHQubGVuZ3RoO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZmlsbGVkID0gKGtleSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gZ2V0SXRlcmFibGVzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXkgfSk7XG4gICAgICByZXR1cm4gIWxlZnQubGVuZ3RoICYmICEhcmlnaHQubGVuZ3RoO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaW5jcmVhc2VkID0gKGtleSwgYWN0dWFsLCBwcmV2aW91cykgPT4ge1xuICAgIGlmICghaXMyLmRlZmluZWQoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbXBhcmVOdW1iZXJzKHByZXZpb3VzRGF0YSwgZGF0YSwgeyBrZXksIGFjdHVhbCwgcHJldmlvdXMsIHR5cGU6IFwiaW5jcmVhc2VkXCIgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVkID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNvbXBhcmVWYWx1ZXMocHJldmlvdXNEYXRhLCBkYXRhLCB7IGtleSwgdHlwZTogXCJyZW1vdmVkXCIsIHZhbHVlIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgYWRkZWQsIGNoYW5nZWQsIGNoYW5nZWRGcm9tLCBkZWNyZWFzZWQsIGVtcHRpZWQsIGZpbGxlZCwgaW5jcmVhc2VkLCByZW1vdmVkIH07XG59XG5leHBvcnQge1xuICB0cmVlQ2hhbmdlcyBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEd1aWRlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEluc2VydFdpZGdldEd1aWRlLCBEYXRhU291cmNlU2VsZWN0aW9uR3VpZGUgfSBmcm9tICcuL2xpYi9ndWlkZSdcblxuR3VpZGVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJHdWlkZU1vZHVsZSgnaW5zZXJ0LXdpZGdldCcsIEluc2VydFdpZGdldEd1aWRlKVxuR3VpZGVNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVnaXN0ZXJHdWlkZU1vZHVsZSgnZHMtc2VsZWN0aW9uJywgRGF0YVNvdXJjZVNlbGVjdGlvbkd1aWRlKVxuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9ndWlkZSdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==