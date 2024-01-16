System.register(["jimu-core","jimu-core/react","jimu-core/react-dom/server","jimu-layouts/layout-runtime","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom_server__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom_server__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_react_dom_server__[key] = module[key];
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

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


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

/***/ "./node_modules/react-contenteditable/lib/react-contenteditable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-contenteditable/lib/react-contenteditable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __importStar(__webpack_require__(/*! react */ "react"));
var fast_deep_equal_1 = __importDefault(__webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js"));
var PropTypes = __importStar(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
function normalizeHtml(str) {
    return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ').replace(/<br \/>/g, '<br>');
}
function replaceCaret(el) {
    // Place the caret at the end of the element
    var target = document.createTextNode('');
    el.appendChild(target);
    // do not move caret if element was not focused
    var isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
        var sel = window.getSelection();
        if (sel !== null) {
            var range = document.createRange();
            range.setStart(target, target.nodeValue.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        if (el instanceof HTMLElement)
            el.focus();
    }
}
/**
 * A simple component for an html element with editable contents.
 */
var ContentEditable = /** @class */ (function (_super) {
    __extends(ContentEditable, _super);
    function ContentEditable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastHtml = _this.props.html;
        _this.el = typeof _this.props.innerRef === 'function' ? { current: null } : React.createRef();
        _this.getEl = function () { return (_this.props.innerRef && typeof _this.props.innerRef !== 'function' ? _this.props.innerRef : _this.el).current; };
        _this.emitChange = function (originalEvt) {
            var el = _this.getEl();
            if (!el)
                return;
            var html = el.innerHTML;
            if (_this.props.onChange && html !== _this.lastHtml) {
                // Clone event with Object.assign to avoid
                // "Cannot assign to read only property 'target' of object"
                var evt = Object.assign({}, originalEvt, {
                    target: {
                        value: html
                    }
                });
                _this.props.onChange(evt);
            }
            _this.lastHtml = html;
        };
        return _this;
    }
    ContentEditable.prototype.render = function () {
        var _this = this;
        var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, ["tagName", "html", "innerRef"]);
        return React.createElement(tagName || 'div', __assign(__assign({}, props), { ref: typeof innerRef === 'function' ? function (current) {
                innerRef(current);
                _this.el.current = current;
            } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);
    };
    ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {
        var props = this.props;
        var el = this.getEl();
        // We need not rerender if the change of props simply reflects the user's edits.
        // Rerendering in this case would make the cursor/caret jump
        // Rerender if there is no element yet... (somehow?)
        if (!el)
            return true;
        // ...or if html really changed... (programmatically, not by user edit)
        if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
            return true;
        }
        // Handle additional properties
        return props.disabled !== nextProps.disabled ||
            props.tagName !== nextProps.tagName ||
            props.className !== nextProps.className ||
            props.innerRef !== nextProps.innerRef ||
            props.placeholder !== nextProps.placeholder ||
            !(0, fast_deep_equal_1.default)(props.style, nextProps.style);
    };
    ContentEditable.prototype.componentDidUpdate = function () {
        var el = this.getEl();
        if (!el)
            return;
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        if (this.props.html !== el.innerHTML) {
            el.innerHTML = this.props.html;
        }
        this.lastHtml = this.props.html;
        replaceCaret(el);
    };
    ContentEditable.propTypes = {
        html: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        tagName: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        innerRef: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.func,
        ])
    };
    return ContentEditable;
}(React.Component));
exports["default"] = ContentEditable;


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

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/data/braces.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/data/braces.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M0 0h16v16H0z\" opacity=\".01\"></path><path fill=\"#000\" d=\"M2 7.527c.433 0 .761-.152.984-.457.222-.305.333-.736.333-1.293V3.971c0-.368.05-.678.15-.93.1-.253.234-.452.4-.6a1.4 1.4 0 0 1 .567-.33c.222-.074.45-.111.684-.111h1.05v.851h-.8c-.2 0-.367.042-.5.126a.755.755 0 0 0-.284.3 1.288 1.288 0 0 0-.133.426c-.022.157-.034.31-.034.457v1.806c0 .379-.06.7-.183.962a1.87 1.87 0 0 1-.417.615 1.718 1.718 0 0 1-.483.33c-.167.064-.3.1-.4.111v.032c.1.01.233.052.4.126.166.063.328.173.483.331.167.147.306.352.417.615.122.252.183.567.183.946v1.806c0 .147.012.3.034.457.022.158.066.3.133.426a.756.756 0 0 0 .284.3c.133.084.3.126.5.126h.8V14h-1.05c-.234 0-.462-.037-.684-.11a1.399 1.399 0 0 1-.567-.331 1.538 1.538 0 0 1-.4-.6c-.1-.252-.15-.562-.15-.93v-1.806c0-.557-.111-.988-.333-1.293-.223-.305-.55-.457-.984-.457zM14 8.473c-.434 0-.761.152-.984.457-.222.305-.333.736-.333 1.293v1.806c0 .368-.05.678-.15.93-.1.253-.234.452-.4.6a1.388 1.388 0 0 1-.584.33c-.211.074-.433.111-.667.111h-1.05v-.851h.8c.2 0 .361-.042.484-.126a.727.727 0 0 0 .3-.3c.066-.126.111-.268.133-.426a3.28 3.28 0 0 0 .034-.457v-1.806c0-.379.055-.694.166-.946.122-.263.261-.468.417-.615.167-.158.333-.268.5-.331.167-.074.3-.116.4-.126v-.032c-.1-.01-.233-.047-.4-.11a1.96 1.96 0 0 1-.5-.331 2.285 2.285 0 0 1-.417-.615c-.11-.263-.167-.583-.167-.962V4.16c0-.147-.01-.3-.033-.457a1.287 1.287 0 0 0-.133-.426.726.726 0 0 0-.3-.3.838.838 0 0 0-.484-.126h-.8V2h1.05c.234 0 .456.037.667.11.223.063.417.174.584.331.166.148.3.347.4.6.1.252.15.562.15.93v1.806c0 .557.111.988.333 1.293.223.305.55.457.984.457z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/data/code.svg":
/*!***********************************************!*\
  !*** ./jimu-icons/svg/outlined/data/code.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M0 0h16v16H0z\" opacity=\".01\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"m9.603 3-4.175 9.642.97.358 4.174-9.642zm1.897 8.233-.738-.681L13.524 8l-2.762-2.552.738-.681L15 8zm-7-6.466.738.681L2.476 8l2.762 2.552-.738.681L1 8z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/data/text-page.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/data/text-page.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9.707 1H2v14h1V2h6.293L12 4.707V14H5v1h8V4.293zM5 5h4V4H5zm6 3H5V7h6zm-6 3h4v-1H5z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/sum.svg":
/*!************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/sum.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.547 1.788A.5.5 0 0 1 3 1.5h9.167c.358 0 .699.147.947.403.249.255.386.599.386.954v1.714a.5.5 0 0 1-1 0V2.857a.37.37 0 0 0-.103-.257.322.322 0 0 0-.23-.1h-8.1l4.317 5.18a.5.5 0 0 1 0 .64L4.068 13.5h8.099a.322.322 0 0 0 .23-.1.37.37 0 0 0 .103-.257v-1.714a.5.5 0 1 1 1 0v1.714c0 .355-.137.699-.386.954-.248.257-.59.403-.947.403H3a.5.5 0 0 1-.384-.82L7.349 8 2.616 2.32a.5.5 0 0 1-.069-.532\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/setting.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/setting.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingOutlined: () => (/* binding */ SettingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/setting.svg */ "./jimu-icons/svg/outlined/application/setting.svg");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SettingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder-popup/index.tsx":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-builder-popup/index.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ExpressionBuilderPopup: () => (/* binding */ _ExpressionBuilderPopup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _expression_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expression-builder */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./jimu-ui/advanced/lib/expression-builder/utils.ts");
/** @jsx jsx */





/**
 * The `ExpressionBuilderPopup` component allows users to build an Expression using a popup.
 *
 * ```ts
 * import { ExpressionBuilderPopup } from 'jimu-ui/advanced/expression-builder'
 * ```
 */
class _ExpressionBuilderPopup extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.overflowYStyle = { overflow: 'hidden' };
        this.__unmount = false;
        this.state = {
            SidePopper: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/setting-components').then(clazz => { !this.__unmount && this.setState({ SidePopper: clazz.SidePopper }); });
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    render() {
        const SidePopper = this.state.SidePopper;
        const types = this.props.types;
        const title = types
            ? (types.length > 1
                ? this.props.intl.formatMessage({ id: 'dynamicContent', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.dynamicContent })
                : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getExpressionFromString)(types[0], this.props.intl))
            : '';
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100' }, SidePopper && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidePopper, { isOpen: this.props.isOpen && !jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAppIdPageIdFromUrl().pageId, position: 'right', toggle: this.props.onClose, trigger: this.props.trigger, backToFocusNode: this.props.backToFocusNode, title: title },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'h-100 bg-light-300 border-color-gray-400 component-expression-builder-popup' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 expression-popup' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: this.overflowYStyle, className: 'h-100' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_expression_builder__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.props))))))));
    }
}
const ExpressionBuilderPopup = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ExpressionBuilderPopup));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpressionBuilderPopup);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/attribute.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/attribute.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DATA_VIEW_ID: () => (/* binding */ DEFAULT_DATA_VIEW_ID),
/* harmony export */   "default": () => (/* binding */ AttributeTab)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./jimu-ui/advanced/lib/expression-builder/utils.ts");


const DEFAULT_DATA_VIEW_ID = 'USE_MAIN_DATA_SOURCE';
class AttributeTab extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.__unmount = false;
        this.getSelectedFields = () => {
            if (!this.props.expression || !this.props.useDataSources) {
                return null;
            }
            const part = this.props.expression.parts && this.props.expression.parts[0];
            const selectedFieldJimuName = part && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherUseDssMatchExpDss)(part, this.props.useDataSources) && part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field ? part.jimuFieldName : null;
            if (!selectedFieldJimuName) {
                return null;
            }
            else {
                const dsId = part.dataSourceId;
                const fields = dsId ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ [dsId]: [selectedFieldJimuName] }) : null;
                return { fields, isSelectedFromRepeatedDataSourceContext: part.isFromRepeatedDataSourceContext };
            }
        };
        this.onSelectedFieldsChange = (allSelectedFields, ds, isFromRepeatedDataSourceContext) => {
            const field = allSelectedFields && allSelectedFields[0];
            if (!field || !ds) {
                return;
            }
            const part = {
                type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field,
                exp: `{${field.alias || field.name}}`,
                dataSourceId: ds.id,
                jimuFieldName: field.jimuName,
                isFromRepeatedDataSourceContext: !!isFromRepeatedDataSourceContext
            };
            this.props.onChange({ name: part.exp, parts: [part] });
        };
        this.state = {
            FieldSelector: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/data-source-selector').then(clazz => {
            !this.__unmount && this.setState({
                FieldSelector: clazz.FieldSelector
            });
        });
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    render() {
        const FieldSelector = this.state.FieldSelector;
        const selectResult = this.getSelectedFields();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'expression-builder-tab attribute-tab common-tab p-0' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'field-selector-container' }, FieldSelector && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(FieldSelector, { types: this.props.types, useDataSources: this.props.useDataSources, widgetId: this.props.widgetId, onChange: this.onSelectedFieldsChange, selectedFields: selectResult === null || selectResult === void 0 ? void 0 : selectResult.fields, isSelectedFromRepeatedDataSourceContext: selectResult === null || selectResult === void 0 ? void 0 : selectResult.isSelectedFromRepeatedDataSourceContext, useSelectionDataView: true, usePopulatedDataView: true }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/expression.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/expression.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var _expression_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../expression-editor */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/index.tsx");




const DefaultNumberFormat = {
    useGrouping: true,
    notation: 'standard',
    minimumFractionDigits: 0,
    maximumFractionDigits: 4
};
class ExpressionTab extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.numberFormatBtnRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.expressionCountAdded = false;
        this.insertCount = 0;
        this.getMutableExpression = (expression) => {
            const e = this.props.expression && this.props.expression.asMutable
                ? this.props.expression.asMutable({ deep: true })
                : this.props.expression;
            return e;
        };
        this.onExpChange = (e) => {
            this.setState({ expression: e });
        };
        this.onChange = () => {
            const newExpression = { name: this.state.name || this.getDefaultName(), parts: this.state.expression && this.state.expression.parts };
            if (this.state.numberFormat) {
                newExpression.numberFormat = this.state.numberFormat;
            }
            this.insertCount++;
            this.props.onChange(newExpression);
        };
        this.onNameChange = e => {
            this.setState({ name: e.target.value });
        };
        this.getDefaultName = () => {
            return `${this.props.intl.formatMessage({ id: 'expression', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.expression })} ${ExpressionTab.count}`;
        };
        this.getWhetherDisableInsert = () => {
            return !this.state.expression || !this.state.expression.parts || this.state.expression.parts.length === 0 || !jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getWhetherExpressionValid(this.state.expression);
        };
        this.onNumberFormatClick = () => {
            this.toggleNumberFormatSettingPopper();
        };
        this.toggleNumberFormatSettingPopper = () => {
            this.setState({ isNumberFormatSettingOpen: !this.state.isNumberFormatSettingOpen });
        };
        this.onToggleNumberFormatSetting = (e, checked) => {
            if (checked) {
                this.setState({ numberFormat: DefaultNumberFormat });
            }
            else {
                this.setState({ numberFormat: null });
            }
        };
        this.onMinDigitsChange = (v) => {
            this.setState({ numberFormat: Object.assign(Object.assign({}, this.state.numberFormat), { minimumFractionDigits: v }) });
        };
        this.onMaxDigitsChange = (v) => {
            this.setState({ numberFormat: Object.assign(Object.assign({}, this.state.numberFormat), { maximumFractionDigits: v }) });
        };
        this.onUseGroupChange = (e, checked) => {
            this.setState({ numberFormat: Object.assign(Object.assign({}, this.state.numberFormat), { useGrouping: checked }) });
        };
        this.onNotationChange = (e, checked) => {
            this.setState({ numberFormat: Object.assign(Object.assign({}, this.state.numberFormat), { notation: checked ? 'compact' : 'standard' }) });
        };
        if (!((_a = props.expression) === null || _a === void 0 ? void 0 : _a.name)) {
            // index in default expression name need to plus one
            ExpressionTab.count++;
            this.expressionCountAdded = true;
        }
        this.state = {
            expression: this.getMutableExpression(this.props.expression),
            name: ((_b = this.props.expression) === null || _b === void 0 ? void 0 : _b.name) || this.getDefaultName(),
            numberFormat: (_c = this.props.expression) === null || _c === void 0 ? void 0 : _c.numberFormat,
            isNumberFormatSettingOpen: false
        };
    }
    componentDidUpdate(prevProps) {
        var _a, _b;
        if (prevProps.expression !== this.props.expression) {
            this.setState({
                expression: this.getMutableExpression(this.props.expression),
                name: ((_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.name) || this.getDefaultName(),
                numberFormat: (_b = this.props.expression) === null || _b === void 0 ? void 0 : _b.numberFormat
            });
        }
    }
    componentWillUnmount() {
        // didn't insert any expression, reset the index of default expression name
        if (this.expressionCountAdded && this.insertCount === 0) {
            ExpressionTab.count--;
        }
    }
    render() {
        var _a, _b;
        const numberFormatString = this.props.intl.formatMessage({ id: 'numberFormatting', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.numberFormatting });
        const decimalPlaceString = this.props.intl.formatMessage({ id: 'decimalPlace', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.decimalPlace });
        const showThousandSeparatorString = this.props.intl.formatMessage({ id: 'showThousandSeparator', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.showThousandSeparator });
        const unitString = this.props.intl.formatMessage({ id: 'unit', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.unit });
        const toString = this.props.intl.formatMessage({ id: 'to', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.to });
        const numberFormatDecimalId = `expression-${ExpressionTab.count}-number-format-decimal`;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'expression-builder-tab expression-tab px-4' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-4' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-start' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { className: 'flex-grow-1', value: this.state.name, onChange: this.onNameChange, id: 'expression-name-input', size: 'sm' }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'expression-editor-container' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_expression_editor__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.props, { expression: this.state.expression, onChange: this.onExpChange, autoFocus: this.props.isActive }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'fixed-at-bottom d-flex align-items-center justify-content-between px-4' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'default', icon: true, size: 'default', onClick: this.onNumberFormatClick, title: numberFormatString, "aria-label": numberFormatString, ref: this.numberFormatBtnRef },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_2__.SettingOutlined, { size: 'm' })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.onChange, type: 'primary', disabled: this.getWhetherDisableInsert(), className: 'expression-insert-btn ml-2', size: 'default', title: this.props.intl.formatMessage({ id: 'insert', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.insert }) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'text-truncate' }, this.props.intl.formatMessage({ id: 'insert', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.insert })))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { reference: this.numberFormatBtnRef.current, open: this.state.isNumberFormatSettingOpen, showArrow: true, toggle: this.toggleNumberFormatSettingPopper, offset: [-8, 0], placement: 'top-start', disablePortal: true },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'number-format-setting' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 mb-2' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'w-100 d-flex justify-content-between' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-75 text-truncate number-format-switch-label', title: numberFormatString }, numberFormatString),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: !!this.state.numberFormat, onChange: this.onToggleNumberFormatSetting }))),
                    this.state.numberFormat &&
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 mb-2 d-flex' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'w-100 text-truncate m-0 number-format-numeric-input-label', for: numberFormatDecimalId }, decimalPlaceString)),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 d-flex justify-content-between mb-4', id: numberFormatDecimalId },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: this.state.numberFormat.minimumFractionDigits, onChange: this.onMinDigitsChange, showHandlers: true, precision: 0, min: 0, max: (_a = this.state.numberFormat.maximumFractionDigits) !== null && _a !== void 0 ? _a : 20, size: 'sm' }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: 'mx-2 number-format-numeric-input-label' }, toString),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: this.state.numberFormat.maximumFractionDigits, onChange: this.onMaxDigitsChange, showHandlers: true, precision: 0, min: (_b = this.state.numberFormat.minimumFractionDigits) !== null && _b !== void 0 ? _b : 0, max: 20, size: 'sm' })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 mb-2' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'w-100 d-flex justify-content-start m-0' },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: 'mr-2', checked: !!this.state.numberFormat.useGrouping, onChange: this.onUseGroupChange }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-85 text-truncate number-format-checkbox-label', title: showThousandSeparatorString }, showThousandSeparatorString))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'w-100 d-flex justify-content-start m-0' },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: 'mr-2', checked: this.state.numberFormat.notation === 'compact', onChange: this.onNotationChange }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-85 text-truncate number-format-checkbox-label', title: unitString }, unitString))))))));
    }
}
ExpressionTab.count = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpressionTab);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/statistics.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/statistics.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatisticsTab)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./jimu-ui/advanced/lib/expression-builder/utils.ts");



class StatisticsTab extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a;
        super(props);
        this.dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        this.__unmount = false;
        this.getWhetherExpressionIsFuncAndHasOnePart = (groupedParts) => {
            if (!groupedParts) {
                return false;
            }
            return !!(groupedParts.length === 1 && groupedParts[0] && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function);
        };
        this.hasNoParamAndDsEnabled = (part) => {
            if (!part) {
                return false;
            }
            return (!part.parts || part.parts.length === 0) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getWhetherUseDssMatchExpDss)(part, this.props.useDataSources);
        };
        this.hasOneParamAndDsEnabled = (part) => {
            if (!part) {
                return false;
            }
            return part.parts && part.parts.length === 1 && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getWhetherUseDssMatchExpDss)(part.parts[0], this.props.useDataSources);
        };
        this.getWhetherUseSelectedDs = (part) => {
            if (!this.state || !this.state.selectedDsId) {
                return true;
            }
            else {
                return part.dataSourceId === this.state.selectedDsId;
            }
        };
        this.getDefaultDsId = () => {
            const parts = this.props.expression && this.props.expression.parts;
            const groupedParts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.groupExpressionPartsByFunction)(parts);
            if (this.getWhetherExpressionIsFuncAndHasOnePart(groupedParts)) {
                const groupedFuncPart = groupedParts[0];
                if (this.hasNoParamAndDsEnabled(groupedFuncPart)) {
                    return groupedFuncPart.dataSourceId;
                }
                else if (this.hasOneParamAndDsEnabled(groupedFuncPart)) {
                    return groupedFuncPart.parts[0].dataSourceId;
                }
            }
            return null;
        };
        this.getDefaultFunc = () => {
            const parts = this.props.expression && this.props.expression.parts;
            const groupedParts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.groupExpressionPartsByFunction)(parts);
            if (this.getWhetherExpressionIsFuncAndHasOnePart(groupedParts)) {
                const groupedFuncPart = groupedParts[0];
                return groupedFuncPart.exp || jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Average;
            }
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Average;
        };
        this.getDefaultJimuFieldName = (dsId) => {
            const parts = this.props.expression && this.props.expression.parts;
            const groupedParts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.groupExpressionPartsByFunction)(parts);
            const groupedFuncPart = groupedParts[0];
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
            const defaultFieldName = ds === null || ds === void 0 ? void 0 : ds.getIdField();
            if (this.getWhetherExpressionIsFuncAndHasOnePart(groupedParts) && this.hasOneParamAndDsEnabled(groupedFuncPart) && this.getWhetherUseSelectedDs(groupedFuncPart.parts[0])) {
                return groupedFuncPart.parts[0].jimuFieldName || defaultFieldName;
            }
            return defaultFieldName;
        };
        this.getDefaultExpName = (fieldName, func) => {
            return `${func}({${fieldName}})`;
        };
        this.getCustomExpName = (fieldName, func, previousExpName) => {
            // That previous expression name is the same as default expression name implies user didn't change the expression name before.
            return previousExpName === this.getDefaultExpName(fieldName, func) ? '' : (previousExpName || '');
        };
        this.getDataSourceId = () => {
            return this.state.selectedDsId;
        };
        this.getSelectedFieldName = (fields, fieldJimuName) => {
            if (!fields) {
                return '';
            }
            return fieldJimuName && fields[fieldJimuName] && (fields[fieldJimuName].alias || fields[fieldJimuName].name);
        };
        this.getSelectedJimuFieldName = () => {
            return this.state.selectedJimuFieldName;
        };
        this.getSelectedFunction = () => {
            return this.state.selectedFunction;
        };
        /**
         * If function is count, will return all fields, else, will return number fields.
         */
        this.getFieldsByFunc = (dsId, func) => {
            if (!dsId) {
                return {};
            }
            const ds = this.dsManager && this.dsManager.getDataSource(dsId);
            const schema = ds && ds.getSchema();
            const fields = schema && schema.fields;
            if (!fields) {
                return {};
            }
            if (func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Count) {
                return fields.asMutable({ deep: true });
            }
            const newFields = {};
            const isMinOrMax = func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Min || func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Max;
            Object.keys(fields).forEach(f => {
                if (fields[f].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number || (isMinOrMax && fields[f].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date)) {
                    newFields[f] = fields[f];
                }
            });
            return newFields;
        };
        this.getDsLabel = (dsId) => {
            const ds = this.dsManager && this.dsManager.getDataSource(dsId);
            if (ds) {
                return ds.getLabel() || ds.id;
            }
            return dsId;
        };
        this.getSelectedUseDataSource = () => {
            var _a;
            const d = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.state.selectedDsId);
            if (!this.state.selectedDsId || !d) {
                return null;
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                dataSourceId: d.id,
                mainDataSourceId: d.getMainDataSource().id,
                dataViewId: d.dataViewId,
                rootDataSourceId: (_a = d.getRootDataSource()) === null || _a === void 0 ? void 0 : _a.id
            });
        };
        this.onFieldChange = (e) => {
            const value = e.currentTarget.value;
            this.setState({ selectedJimuFieldName: value });
        };
        this.onFunctionChange = (e) => {
            const value = e.currentTarget.value;
            this.setState({ selectedFunction: value });
        };
        this.onCustomExpNameChange = (e) => { this.setState({ customExpName: e.target.value }); };
        this.onChange = () => {
            const fields = this.getFieldsByFunc(this.state.selectedDsId, this.state.selectedFunction);
            const fieldName = this.getSelectedFieldName(fields, this.state.selectedJimuFieldName);
            const name = this.state.customExpName || this.getDefaultExpName(fieldName, this.state.selectedFunction);
            const parts = [{
                    type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function,
                    exp: this.state.selectedFunction
                }, {
                    type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator,
                    exp: '('
                }, {
                    type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field,
                    exp: `{${fieldName}}`,
                    dataSourceId: this.state.selectedDsId,
                    jimuFieldName: this.state.selectedJimuFieldName
                }, {
                    type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator,
                    exp: ')'
                }];
            this.props.onChange({ name, parts });
        };
        this.onSelectedUseDsChange = (useDataSource) => { this.setState({ selectedDsId: useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId }); };
        const dsId = this.getDefaultDsId();
        const jimuFieldName = this.getDefaultJimuFieldName(dsId);
        const func = this.getDefaultFunc();
        const fields = this.getFieldsByFunc(dsId, func);
        const fieldName = this.getSelectedFieldName(fields, jimuFieldName);
        this.state = {
            customExpName: this.getCustomExpName(fieldName, func, (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.name),
            selectedDsId: dsId,
            selectedJimuFieldName: jimuFieldName,
            selectedFunction: func,
            MainDataAndViewSelector: null,
            DataViewPriority: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/data-source-selector').then(clazz => {
            !this.__unmount && this.setState({
                MainDataAndViewSelector: clazz.MainDataAndViewSelector,
                DataViewPriority: clazz.DataViewPriority
            });
        });
    }
    componentDidUpdate(prevProps, prevState) {
        var _a;
        if (prevProps.expression !== this.props.expression || prevProps.useDataSources !== this.props.useDataSources) {
            const dsId = this.getDefaultDsId();
            const jimuFieldName = this.getDefaultJimuFieldName(dsId);
            const func = this.getDefaultFunc();
            const fields = this.getFieldsByFunc(dsId, func);
            const fieldName = this.getSelectedFieldName(fields, jimuFieldName);
            this.setState({
                customExpName: this.getCustomExpName(fieldName, func, (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.name),
                selectedDsId: dsId,
                selectedJimuFieldName: jimuFieldName,
                selectedFunction: func
            });
        }
        if (prevState.selectedDsId !== this.state.selectedDsId) {
            const jimuName = this.getDefaultJimuFieldName(this.state.selectedDsId);
            this.setState({ selectedJimuFieldName: jimuName });
        }
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    render() {
        const fields = this.getFieldsByFunc(this.state.selectedDsId, this.state.selectedFunction);
        const MainDataAndViewSelector = this.state.MainDataAndViewSelector;
        const DataViewPriority = this.state.DataViewPriority;
        const fieldName = this.getSelectedFieldName(fields, this.state.selectedJimuFieldName);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'expression-builder-tab statistics-tab common-tab' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-option' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'flex-grow-1' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { placeholder: this.getDefaultExpName(fieldName, this.state.selectedFunction), value: this.state.customExpName, className: 'flex-grow-1', size: 'sm', onChange: this.onCustomExpNameChange }))),
            MainDataAndViewSelector && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(MainDataAndViewSelector, { useDataSources: this.props.useDataSources, onChange: this.onSelectedUseDsChange, useSelectionDataView: true, className: 'p-4', selectedUseDataSource: this.getSelectedUseDataSource(), defaultDataViewPriority: DataViewPriority.Second }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-option mb-3' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 text-truncate mb-3 option-label' }, this.props.intl.formatMessage({ id: 'operator', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.operator })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'flex-grow-1' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: this.getSelectedFunction(), className: 'select-max-width', size: 'sm', onChange: this.onFunctionChange }, Object.keys(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions).map((f, i) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[f], key: i, className: 'select-max-width text-truncate' }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[f]))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-option mb-3' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 text-truncate mb-3 option-label' }, this.props.intl.formatMessage({ id: 'field', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.field })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'flex-grow-1' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: this.getSelectedJimuFieldName(), size: 'sm', onChange: this.onFieldChange, className: 'select-max-width' }, fields && Object.keys(fields).map((f, i) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: fields[f].jimuName, key: i, className: 'select-max-width text-truncate' }, fields[f].alias || fields[f].name))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'data-option w-100 mt-2 d-flex justify-content-end' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.onChange, type: 'primary', className: 'stat-inter-btn', title: this.props.intl.formatMessage({ id: 'insert', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.insert }), disabled: !Object.keys(fields || {}).includes(this.getSelectedJimuFieldName()) },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'text-truncate' }, this.props.intl.formatMessage({ id: 'insert', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.insert }))))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/index.tsx":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-builder/index.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ExpressionBuilder: () => (/* binding */ _ExpressionBuilder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _components_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/attribute */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/attribute.tsx");
/* harmony import */ var _components_expression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/expression */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/expression.tsx");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/statistics */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/components/statistics.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./jimu-ui/advanced/lib/expression-builder/types.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */







/**
 * The `ExpressionBuilder` component allows users to build an Expression.
 *
 * ```ts
 * import { ExpressionBuilder } from 'jimu-ui/advanced/expression-builder'
 * ```
 */
class _ExpressionBuilder extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.expressionFrom = {
            [_types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Attribute]: this.props.intl.formatMessage({ id: 'attribute', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.attribute }),
            [_types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Statistics]: this.props.intl.formatMessage({ id: 'statistics', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.statistics }),
            [_types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression]: this.props.intl.formatMessage({ id: 'expression', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.expression })
        };
        this.onChange = (e) => {
            this.props.onChange && this.props.onChange(e);
        };
        this.getActiveExpressionFrom = () => {
            if (!this.props.expression || !this.props.expression.parts || this.props.expression.parts.length === 0) {
                return this.props.types[0];
            }
            if (this.props.expression.numberFormat) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression : this.props.types[0];
            }
            const groupedParts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.groupExpressionPartsByFunction)(this.props.expression.parts);
            if (groupedParts.length === 1 && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Attribute)
                    ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Attribute
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression : this.props.types[0]);
            }
            if (groupedParts.length === 1 && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Statistics)
                    ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Statistics
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression : this.props.types[0]);
            }
            return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression : this.props.types[0];
        };
        this.getTab = (tab, isActive, useDataSources, expression) => {
            switch (tab) {
                case _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Attribute:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_attribute__WEBPACK_IMPORTED_MODULE_2__["default"], { types: this.props.fieldTypes, useDataSources: useDataSources, expression: expression, onChange: this.onChange, intl: this.props.intl, widgetId: this.props.widgetId }));
                case _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Statistics:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_statistics__WEBPACK_IMPORTED_MODULE_4__["default"], { useDataSources: useDataSources, expression: expression, onChange: this.onChange, intl: this.props.intl, widgetId: this.props.widgetId }));
                case _types__WEBPACK_IMPORTED_MODULE_5__.ExpressionBuilderType.Expression:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_expression__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, this.props, { useDataSources: useDataSources, expression: expression, onChange: this.onChange, intl: this.props.intl, isActive: isActive })));
                default:
                    return null;
            }
        };
        this.onActiveTabChange = (types) => {
            this.setState({ activeTab: types });
        };
        this.state = {
            activeTab: this.getActiveExpressionFrom()
        };
    }
    componentDidUpdate(prevProps, prevState) {
        // This is for updating tab when clicking different expressions in the editor
        if (this.props.types !== prevProps.types || this.props.expression !== prevProps.expression) {
            this.setState({ activeTab: this.getActiveExpressionFrom() });
        }
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.MultipleDataSourceComponent, { useDataSources: this.props.useDataSources },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: this.props.style, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [this.props.className]: !!this.props.className }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 component-expression-builder' },
                    (this.props.types && this.props.types.length === 1) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('h-100', { 'has-nav': this.props.types && this.props.types.length > 1 }) }, this.getTab(this.props.types[0], true, this.props.useDataSources, this.props.expression)),
                    this.props.types && this.props.types.length > 1
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { fill: true, type: 'underline', className: 'h-100', value: this.state.activeTab, onChange: (e) => { this.onActiveTabChange(e); } }, this.props.types.asMutable().map((t) => {
                            const tabName = this.expressionFrom[t];
                            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: t, title: tabName, key: t },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('h-100', { 'has-nav': this.props.types && this.props.types.length > 1 }) }, this.getTab(t, t === this.state.activeTab, this.props.useDataSources, this.props.expression)));
                        }))
                        : null))));
    }
}
/**
 * This component is used to build an {@link Expression}.
 */
const ExpressionBuilder = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_6__.withStyles)(_ExpressionBuilder, 'ExpressionBuilder'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpressionBuilder);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx":
/*!******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpBase)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class ExpBase extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: this.props.className, contentEditable: !!this.props.isEditable, suppressContentEditableWarning: true, id: this.props.id, style: this.props.style, title: this.props.title || null, tabIndex: this.props.tabIndex || null }, this.props.exp));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-editor-helper.tsx":
/*!***************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-editor-helper.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpEditorHelper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/index.ts");



var ExpEditorHelperTabs;
(function (ExpEditorHelperTabs) {
    ExpEditorHelperTabs["Fields"] = "FIELDS";
    ExpEditorHelperTabs["Functions"] = "FUNCTIONS";
})(ExpEditorHelperTabs || (ExpEditorHelperTabs = {}));
class ExpEditorHelper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b;
        super(props);
        this.dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        this.__unmount = false;
        this.ExpEditorHelperTabs = {
            [ExpEditorHelperTabs.Fields]: this.props.intl.formatMessage({ id: 'fields', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.fields }),
            [ExpEditorHelperTabs.Functions]: this.props.intl.formatMessage({ id: 'functions', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.functions })
        };
        this.getTab = (tab) => {
            const FieldSelector = this.state.FieldSelector;
            switch (tab) {
                case ExpEditorHelperTabs.Fields:
                    return FieldSelector && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(FieldSelector, { widgetId: this.props.widgetId, useDataSources: this.props.useDataSources, onChange: this.onFieldSelect, useSelectionDataView: true, usePopulatedDataView: true, selectedFields: this.getSelectedFields() });
                case ExpEditorHelperTabs.Functions:
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(FunctionSelector, { onSelect: this.onFunctionSelect, selectedFunction: this.getSelectedFunction() }));
                default:
                    return null;
            }
        };
        this.getSelectedFields = () => {
            var _a, _b;
            const editingPartIndex = this.getEditingPartIndex();
            const editingPart = (_b = (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[editingPartIndex];
            if ((editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field) {
                const selectedFieldJimuName = editingPart.jimuFieldName;
                if (selectedFieldJimuName) {
                    const dsId = editingPart.dataSourceId;
                    const fields = dsId ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ [dsId]: [selectedFieldJimuName] }) : null;
                    return fields;
                }
            }
            return null;
        };
        this.getSelectedFunction = () => {
            var _a, _b;
            const editingPartIndex = this.getEditingPartIndex();
            const editingPart = (_b = (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[editingPartIndex];
            if ((editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function) {
                return editingPart.exp;
            }
            return null;
        };
        this.onFunctionSelect = (functionName) => {
            if (!functionName) {
                return;
            }
            const newPart = {
                type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function,
                exp: functionName
            };
            let newParts;
            const isReplacing = this.getIsReplacing();
            if (isReplacing) {
                newParts = [
                    newPart
                ];
            }
            else {
                newParts = [
                    newPart,
                    { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator, exp: '(' },
                    { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator, exp: ')' }
                ];
            }
            this.changeExpression(newParts, this.props.expression);
        };
        this.onFieldSelect = (allSelectedFields, ds, isFromRepeatedDataSourceContext) => {
            const field = allSelectedFields && allSelectedFields[0];
            if (!field || !ds) {
                return;
            }
            const newPart = {
                type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field,
                exp: `{${field.alias || field.name}}`,
                dataSourceId: ds.id,
                jimuFieldName: field.jimuName,
                isFromRepeatedDataSourceContext
            };
            this.changeExpression([newPart], this.props.expression);
        };
        this.onActiveTabChange = (tab) => {
            this.setState({ active: tab });
        };
        this.getSelectionPartId = () => {
            var _a;
            let partId;
            if (this.props.inEditablePart) {
                const s = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getSelectionPosInnerPart)(this.props.externalId, this.props.container);
                partId = s && s.partId;
            }
            else {
                const n = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getPreviousNodeOfSelection)(this.props.externalId);
                partId = n && n.id;
            }
            partId = partId || ((_a = this.props.expSelection) === null || _a === void 0 ? void 0 : _a.partId);
            if (!partId) {
                partId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getPartIdByIndex)(this.props.externalId, 0);
            }
            return partId;
        };
        this.changeExpression = (newParts, expression) => {
            if (!newParts) {
                return;
            }
            const isReplacing = this.getIsReplacing();
            const newIndex = this.getNewPartIndex(newParts, expression, isReplacing);
            const newPartId = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getPartIdByIndex)(this.props.externalId, newIndex);
            let p = (expression && expression.parts && expression.parts.slice()) || [];
            if (p.length === 0) {
                p = newParts;
            }
            else {
                const deleteNum = isReplacing ? 1 : 0;
                p.splice(newIndex, deleteNum, ...newParts);
            }
            this.props.onSelect({ name: (expression && expression.name) || this.props.externalId, parts: p }, newPartId, isReplacing);
        };
        this.getNewPartIndex = (newParts, expression, isReplacing) => {
            if (!newParts) {
                return null;
            }
            const p = (expression && expression.parts) || [];
            let newIndex;
            if (p.length === 0) {
                newIndex = 0;
            }
            else {
                if (isReplacing) { // is replacing one existed part
                    newIndex = this.getEditingPartIndex();
                }
                else { // is adding new part
                    const selectionPartId = this.getSelectionPartId();
                    const index = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIndexByPartId)(this.props.externalId, selectionPartId);
                    newIndex = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.areFunctionParts)(newParts) ? index + 1 : index + newParts.length;
                }
            }
            return newIndex;
        };
        this.getEditingPartIndex = () => {
            if (!this.props.inEditablePart) {
                return null;
            }
            const selectionPartId = this.getSelectionPartId();
            const index = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIndexByPartId)(this.props.externalId, selectionPartId);
            return index;
        };
        this.getIsReplacing = () => {
            var _a, _b;
            const editingPartIndex = this.getEditingPartIndex();
            const editingPart = (_b = (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[editingPartIndex];
            return (editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field || (editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function;
        };
        const editingPartIndex = this.getEditingPartIndex();
        const editingPart = (_b = (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[editingPartIndex];
        this.state = {
            active: (editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function ? ExpEditorHelperTabs.Functions : ExpEditorHelperTabs.Fields,
            FieldSelector: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/data-source-selector').then(clazz => { !this.__unmount && this.setState({ FieldSelector: clazz.FieldSelector }); });
    }
    componentDidUpdate(prevProps) {
        var _a, _b;
        if (prevProps.expSelection !== this.props.expSelection && this.getIsReplacing()) {
            const editingPartIndex = this.getEditingPartIndex();
            const editingPart = (_b = (_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[editingPartIndex];
            this.setState({ active: (editingPart === null || editingPart === void 0 ? void 0 : editingPart.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function ? ExpEditorHelperTabs.Functions : ExpEditorHelperTabs.Fields });
        }
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    render() {
        if (!this.props.container) {
            return null;
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'exp-editor-helper h-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { fill: true, type: 'pills', className: 'h-100', value: this.state.active, onChange: (e) => { this.onActiveTabChange(e); } }, Object.keys(ExpEditorHelperTabs).map((tabName) => {
                const tabKey = ExpEditorHelperTabs[tabName];
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: tabKey, key: tabKey, title: this.ExpEditorHelperTabs[tabKey] }, this.getTab(this.state.active)));
            }))));
    }
}
const FunctionSelector = ({ onSelect, selectedFunction }) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mt-18 px-4' }, Object.keys(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions).map((f, i) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: () => { onSelect(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[f]); }, key: i, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('mt-3 p-1 expression-editor-function-item', { 'expression-editor-function-item-selected': selectedFunction === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[f] }), tabIndex: 0 }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[f]))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-popover.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-popover.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExpPopover)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


class ExpPopover extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.itemHeight = 25;
        this.popoverItemStyle = { lineHeight: `${this.itemHeight}px !important` };
        this.getTarget = (id, containerNode) => {
            if (!id || !containerNode) {
                return null;
            }
            return containerNode.querySelector(`#${id}`);
        };
        this.state = {
            targetNode: this.getTarget(this.props.targetNodeId, this.props.containerNode)
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.selectedItemIndex !== prevProps.selectedItemIndex && this.props.selectedItemIndex && this.root) {
            let scrollTop;
            if (parseInt(this.props.selectedItemIndex) > parseInt(prevProps.selectedItemIndex)) {
                if (parseInt(this.props.selectedItemIndex) === this.props.items.length - 1) {
                    scrollTop = this.root.scrollHeight - this.root.offsetHeight;
                }
                else {
                    const maxIndexInScreen = Math.floor((this.root.scrollTop + this.root.offsetHeight) / this.itemHeight) - 1;
                    if (parseInt(this.props.selectedItemIndex) >= maxIndexInScreen) {
                        scrollTop = this.root.scrollTop + this.itemHeight;
                    }
                    else {
                        scrollTop = this.root.scrollTop;
                    }
                }
            }
            else {
                if (parseInt(this.props.selectedItemIndex) === 0) {
                    scrollTop = 0;
                }
                else {
                    const minIndexInScreen = Math.floor(this.root.scrollTop / this.itemHeight);
                    if (parseInt(this.props.selectedItemIndex) <= minIndexInScreen) {
                        scrollTop = this.root.scrollTop - this.itemHeight;
                    }
                    else {
                        scrollTop = this.root.scrollTop;
                    }
                }
            }
            this.root.scrollTo(null, scrollTop);
        }
        if (this.props.expSelection !== prevProps.expSelection || this.props.targetNodeId !== prevProps.targetNodeId || this.props.containerNode !== prevProps.containerNode) {
            this.setState({
                targetNode: this.getTarget(this.props.targetNodeId, this.props.containerNode)
            });
        }
    }
    render() {
        if (!this.state.targetNode || !this.props.items || this.props.items.length === 0) {
            return null;
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { reference: this.state.targetNode, open: this.props.isOpen, autoFocus: false, placement: 'bottom', className: 'exp-poper', offset: [0, 5], showArrow: true, disablePortal: true },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '200px', maxHeight: '200px', overflow: 'auto' }, ref: n => { this.root = n; } }, this.props.items.map((item, index) => {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: index, onClick: () => { this.props.onClick && this.props.onClick(item, this.props.targetNodeId); }, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('text-break exp-popper-item', { 'exp-popper-selected-item': `${index}` === this.props.selectedItemIndex }), title: item.content, css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css)(this.popoverItemStyle) }, item.content));
            }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/field-exp.tsx":
/*!*******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/field-exp.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldExp)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _exp_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-base */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx");


class FieldExp extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.getDsLabel = () => {
            const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const ds = dsManager && dsManager.getDataSource(this.props.dataSourceId);
            if (ds) {
                return ds.getLabel();
            }
            return null;
        };
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_exp_base__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.props, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('field-exp', {
                [this.props.className]: !!this.props.className,
                'error-exp': this.props.isError,
                'ds-disabled-exp': this.props.isDsDisabled
            }), style: this.props.style, title: this.getDsLabel(), tabIndex: 0 })));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/function-exp.tsx":
/*!**********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/function-exp.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FunctionExp)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class FunctionExp extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.getFunctionTooltip = (exp) => {
            if (!exp) {
                return null;
            }
            switch (this.props.exp) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Average:
                    return 'Average ( fieldName ) returns  { Number }';
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Count:
                    return 'Count ( ) returns  { Number }';
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Sum:
                    return 'Sum ( fieldName ) returns  { Number }';
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Max:
                    return 'Max ( fieldName ) returns  { Number }';
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Min:
                    return 'Min ( fieldName ) returns  { Number }';
                default:
                    return null;
            }
        };
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('function-exp', {
                [this.props.className]: !!this.props.className,
                'ds-disabled-exp': this.props.isDsDisabled
            }), contentEditable: !!this.props.isEditable, suppressContentEditableWarning: true, id: this.props.id, title: this.getFunctionTooltip(this.props.exp) }, this.props.exp));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/number-exp.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/number-exp.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberExp)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _exp_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-base */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx");


class NumberExp extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_exp_base__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.props, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('number-exp', { [this.props.className]: !!this.props.className }), style: this.props.style, tabIndex: 0 })));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/operator-exp.tsx":
/*!**********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/operator-exp.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Operator)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _exp_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-base */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx");


class Operator extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_exp_base__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.props, { className: 'operator-exp' })));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/string-exp.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/string-exp.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringExp)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _exp_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-base */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx");


class StringExp extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_exp_base__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.props, { className: 'string-exp', tabIndex: 0 })));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/unknown-exp.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/unknown-exp.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorExp)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _exp_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-base */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-base.tsx");


class ErrorExp extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_exp_base__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, this.props, { className: 'unknown-exp' })));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/index.tsx":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/index.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./jimu-ui/advanced/lib/expression-builder/utils.ts");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-contenteditable */ "./node_modules/react-contenteditable/lib/react-contenteditable.js");
/* harmony import */ var react_contenteditable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_contenteditable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts");
/* harmony import */ var _components_field_exp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/field-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/field-exp.tsx");
/* harmony import */ var _components_string_exp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/string-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/string-exp.tsx");
/* harmony import */ var _components_function_exp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/function-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/function-exp.tsx");
/* harmony import */ var _components_number_exp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/number-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/number-exp.tsx");
/* harmony import */ var _components_unknown_exp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/unknown-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/unknown-exp.tsx");
/* harmony import */ var _components_operator_exp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/operator-exp */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/operator-exp.tsx");
/* harmony import */ var _components_exp_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/exp-popover */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-popover.tsx");
/* harmony import */ var _components_exp_editor_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/exp-editor-helper */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/components/exp-editor-helper.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/index.ts");
/** @jsx jsx */
















class _ExpressionEditor extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.expressionString = '';
        this.ltrStyle = { direction: 'ltr' };
        this.getFocusOnce = false; // if auto focus is true, get focus once at most
        this.resizeHelperContainer = () => {
            var _a, _b, _c, _d;
            const editorHeight = ((_b = (_a = this.contentEditableContainer) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
            const errorMsgHeight = ((_d = (_c = this.errorMsgContainer) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.offsetHeight) || 0;
            this.helperContainer.current.style.height = `calc(100% - 30px - ${editorHeight}px - ${errorMsgHeight}px)`;
        };
        this.setSelectionToEnd = () => {
            this.setState({
                isPopoverOpen: false,
                expSelection: {
                    partId: (this.props.expression && this.props.expression.parts && (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, this.props.expression.parts.length - 1)) || (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, 0),
                    type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part,
                    toStart: false
                }
            });
        };
        this.getWhetherLoseFocus = () => {
            const s = window.getSelection && window.getSelection();
            return !(s && this.contentEditableContainer && this.contentEditableContainer.current.contains(s.focusNode) &&
                this.contentEditableContainer.current !== s.focusNode);
        };
        this.getExpressionString = (container) => {
            const c = container || this.contentEditableContainer ? this.contentEditableContainer.current : document;
            const p = c && c.querySelector(`#${this.id}`);
            if (!p) {
                return '';
            }
            return p.textContent.replace(/\ufeff/g, '');
        };
        this.getComponent = (part, index) => {
            var _a;
            const id = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, index);
            const isInEditablePart = this.getWhetherInEditablePart();
            switch (part.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_field_exp__WEBPACK_IMPORTED_MODULE_7__["default"], { exp: part.exp, id: id, key: index, isDsDisabled: !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.getWhetherUseDssMatchExpDss)(part, this.props.useDataSources), isEditable: isInEditablePart && this.state.expSelection.partId === id, dataSourceId: part.dataSourceId, isError: !jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getWhetherFieldInDs(part.dataSourceId, part.jimuFieldName, part.exp.replace(/^\{/, '').replace(/\}$/, '')) }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String:
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_string_exp__WEBPACK_IMPORTED_MODULE_8__["default"], { exp: part.exp, id: id, key: index, isEditable: isInEditablePart && this.state.expSelection.partId === id });
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator:
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_operator_exp__WEBPACK_IMPORTED_MODULE_12__["default"], { exp: part.exp, id: id, key: index, isEditable: isInEditablePart && this.state.expSelection.partId === id });
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_function_exp__WEBPACK_IMPORTED_MODULE_9__["default"], { exp: part.exp, id: id, key: index, isDsDisabled: !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.getWhetherUseDssMatchExpDss)(part, this.props.useDataSources), isEditable: isInEditablePart && this.state.expSelection.partId === id, externalId: this.id, dataSourceIds: (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.map(u => u.dataSourceId) }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Number:
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_number_exp__WEBPACK_IMPORTED_MODULE_10__["default"], { exp: part.exp, id: id, key: index, isEditable: isInEditablePart && this.state.expSelection.partId === id });
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Unknown:
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_unknown_exp__WEBPACK_IMPORTED_MODULE_11__["default"], { exp: part.exp, id: id, key: index, isEditable: isInEditablePart && this.state.expSelection.partId === id });
                default:
                    return null;
            }
        };
        this.getWhetherInEditablePart = () => {
            return !!(this.state.expSelection && this.state.expSelection.type === _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char);
        };
        this.getSingleExpFromPopoverItem = (item) => {
            switch (item.type) {
                case _types__WEBPACK_IMPORTED_MODULE_6__.PopoverType.Field:
                    return `{${item.content}}`;
                default:
                    return item.content;
            }
        };
        this.renderPartsToHtml = (parts) => {
            // &#65279; stands for ZERO WIDTH NO-BREAK SPACE, it makes selection next to uneditable span
            return react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToStaticMarkup((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { id: this.id, className: 'w-100 m-0 p-1', spellCheck: false, style: { textAlign: 'left' } },
                "\uFEFF",
                parts && parts.map((p, i) => this.getComponent(p, i)),
                "\uFEFF"));
        };
        this.getNewExpression = (parts) => {
            return { parts, name: (this.props.expression && this.props.expression.name) || this.id };
        };
        this.onChange = e => {
            var _a;
            const parentNode = e.currentTarget.querySelector(`#${this.id}`);
            if (!parentNode || !e.isTrusted) { // isTrusted is false when the event is created or modified by a script
                return;
            }
            const expressionString = this.getExpressionString(parentNode);
            const newCharacters = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getNewCharacterFromExpressionString)(this.expressionString, expressionString);
            if (!newCharacters) {
                return;
            }
            const isInEditablePart = this.getWhetherInEditablePart();
            const originalParts = this.props.expression && this.props.expression.parts;
            const range = isInEditablePart ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionRange)() : null;
            const nextNodeOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getNextNodeOfSelection)(this.id);
            const editResult = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.addCharactersToParts)(this.id, originalParts, newCharacters, isInEditablePart, (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.asMutable().map(u => u.dataSourceId), range, nextNodeOfSelection);
            const parts = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.applyEditResultToParts)(editResult, originalParts);
            const innerSelection = isInEditablePart ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, document && document.querySelector(`#${this.id}`)) : null;
            const expSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getExpSelectionAndEitablePart)(this.id, isInEditablePart, editResult, parts, innerSelection);
            this.setState({
                isPopoverOpen: false,
                expSelection: expSelection
            }, () => {
                this.setState({ isPopoverOpen: true });
            });
            this.props.onChange(this.getNewExpression(parts));
        };
        this.onClick = e => {
            const partId = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByChildNode)(this.id, e.target);
            const index = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId);
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_15__.isNumberVariable)(index) || index < 0) {
                if (e.target === this.contentEditableContainer.current || this.contentEditableContainer.current.contains(e.target)) {
                    this.setSelectionToEnd();
                }
                return;
            }
            const partNode = index > -1 ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getNodeByPartId)(partId, this.contentEditableContainer.current) : null;
            if (partNode && this.state.expSelection && (this.state.expSelection.type !== _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char || (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, this.state.expSelection.partId) !== index) &&
                this.props.expression && this.props.expression.parts && this.props.expression.parts[index]) {
                const expSelection = {
                    partId,
                    type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                    startOffset: partNode.textContent.length
                };
                this.setState({
                    expSelection,
                    isPopoverOpen: false
                }, () => {
                    this.setState({
                        isPopoverOpen: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getWhetherPartNeedPopover)(this.props.expression.parts[index].type)
                    });
                });
            }
        };
        this.onHelperItemSelect = (e, partId, isReplacing) => {
            this.props.onChange(e);
            if (e && e.parts && partId) {
                const index = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId);
                const part = e.parts[index];
                if (!part) {
                    console.warn('Can not move selection because can not find part: ', partId);
                    return;
                }
                const isPopoverOpen = false;
                let expSelection = {
                    type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                    partId,
                    startOffset: part.exp.length
                };
                if (part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function) {
                    if (!isReplacing) {
                        expSelection = {
                            type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part,
                            partId: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId) + 1),
                            toStart: false
                        };
                    }
                }
                this.setState({
                    expSelection,
                    isPopoverOpen: false
                }, () => { this.setState({ isPopoverOpen }); });
            }
        };
        this.onBlur = e => {
            this.props.onChange(this.props.expression);
        };
        this.onKeyDown = e => {
            // do not bubble the keydown event to container
            // when react componnet receives event it has already bubbled all the way up to the document
            // and stopping it only stops it from synthetically bubbling up through the React hierarchy
            // so we need to `stopImmediatePropagation`
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (['Backspace', 'Delete', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
                if (e.key === 'Backspace' || e.key === 'Delete') { // actually innerHTML has been changed
                    (0,_utils__WEBPACK_IMPORTED_MODULE_15__.triggerInputEvent)(e.currentTarget);
                }
                if (e.key === 'Backspace') {
                    this.handleBackspace();
                }
                else if (e.key === 'Delete') {
                    this.handleDelete();
                }
                else if (e.key === 'ArrowLeft') {
                    this.handleLeftArrow();
                }
                else if (e.key === 'ArrowRight') {
                    this.handleRightArrow();
                }
                else if (e.key === 'Enter') {
                    this.handleEnter();
                }
                else if (e.key === 'ArrowDown') {
                    this.handleDownArrow();
                }
                else if (e.key === 'ArrowUp') {
                    this.handleUpArrow();
                }
            }
            else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90)) { // number || letter
                const range = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionRange)();
                if (!range.collapsed) {
                    // if selection is a range, remove selected characters before input new characters
                    this.handleBackspace();
                }
            }
        };
        this.handleBackspace = () => {
            const originalParts = this.props.expression && this.props.expression.parts;
            let editResult;
            let removedCharNumber;
            if (!this.getWhetherInEditablePart()) {
                const startIndexOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getStartPartIndexOfRangeSelection)(this.id);
                const endIndexOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getEndPartIndexOfRangeSelection)(this.id, originalParts);
                editResult = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.removeParts)(this.id, originalParts, startIndexOfSelection, endIndexOfSelection);
                removedCharNumber = 0;
            }
            else {
                const innerSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, this.contentEditableContainer.current);
                if (innerSelection && innerSelection.partId) {
                    const startIndex = innerSelection.startOffset === innerSelection.endOffset ? innerSelection.startOffset - 1 : innerSelection.startOffset;
                    const endIndex = innerSelection.endOffset - 1;
                    editResult = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.removeCharactersFromOnePart)(this.id, originalParts, innerSelection.partId, startIndex, endIndex);
                    removedCharNumber = endIndex - startIndex + 1;
                }
            }
            this.doRemove(editResult, originalParts, removedCharNumber);
        };
        this.handleDelete = () => {
            const originalParts = this.props.expression && this.props.expression.parts;
            let editResult;
            let removedCharNumber;
            if (!this.getWhetherInEditablePart()) {
                const startIndexOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getStartPartIndexOfRangeSelection)(this.id);
                const endIndexOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getEndPartIndexOfRangeSelection)(this.id, originalParts);
                const range = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionRange)();
                const startIndexToBeRemoved = range.collapsed ? ((0,_utils__WEBPACK_IMPORTED_MODULE_15__.isNumberVariable)(startIndexOfSelection) ? startIndexOfSelection + 1 : 0) : startIndexOfSelection;
                const endIndexToBeRemoved = range.collapsed ? ((0,_utils__WEBPACK_IMPORTED_MODULE_15__.isNumberVariable)(startIndexOfSelection) ? startIndexOfSelection + 1 : 0) : endIndexOfSelection;
                editResult = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.removeParts)(this.id, originalParts, startIndexToBeRemoved, endIndexToBeRemoved);
                removedCharNumber = 0;
            }
            else {
                const innerSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, this.contentEditableContainer.current);
                if (innerSelection && innerSelection.partId) {
                    const startIndex = innerSelection.startOffset;
                    const endIndex = innerSelection.startOffset === innerSelection.endOffset ? innerSelection.endOffset : innerSelection.endOffset - 1;
                    editResult = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.removeCharactersFromOnePart)(this.id, originalParts, innerSelection.partId, startIndex, endIndex);
                    removedCharNumber = startIndex === endIndex ? 0 : endIndex - startIndex + 1;
                }
            }
            this.doRemove(editResult, originalParts, removedCharNumber);
        };
        this.doRemove = (editResult, originalParts, removedCharNumber) => {
            const parts = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.applyEditResultToParts)(editResult, originalParts);
            const isInEditablePart = this.getWhetherInEditablePart();
            const innerSelection = isInEditablePart ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, document && document.querySelector(`#${this.id}`)) : null;
            // get selecion and eitable status from edit result,
            // use current state if eidit result is null
            const expSelection = editResult
                ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getExpSelectionAndEitablePart)(this.id, isInEditablePart, editResult, parts, innerSelection, removedCharNumber)
                : this.state.expSelection;
            this.props.onChange(this.getNewExpression(parts));
            this.setState({
                isPopoverOpen: false,
                expSelection: expSelection
            }, () => {
                this.setState({
                    isPopoverOpen: expSelection.partId && parts[(0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, expSelection.partId)] &&
                        (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getWhetherPartNeedPopover)(parts[(0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, expSelection.partId)].type)
                });
            });
        };
        this.handleLeftArrow = () => {
            if (!this.getWhetherInEditablePart()) {
                const previousNodeOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPreviousNodeOfSelection)(this.id);
                if (previousNodeOfSelection) {
                    this.setState({
                        expSelection: {
                            partId: previousNodeOfSelection.id,
                            toStart: true,
                            type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part
                        },
                        isPopoverOpen: false
                    });
                }
            }
            else {
                const innerSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, this.contentEditableContainer.current);
                if (innerSelection && innerSelection.partId) {
                    const expSelection = innerSelection.startOffset - 1 > -1
                        ? {
                            type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                            partId: innerSelection.partId,
                            startOffset: innerSelection.startOffset - 1
                        }
                        : (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSiblingOfExpSelection)(this.id, innerSelection.partId, true, false, this.props.expression && this.props.expression.parts);
                    this.setState({
                        expSelection,
                        isPopoverOpen: false
                    });
                }
            }
        };
        this.handleRightArrow = () => {
            if (!this.getWhetherInEditablePart()) {
                const nextNodeOfSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getNextNodeOfSelection)(this.id);
                if (nextNodeOfSelection) {
                    this.setState({
                        expSelection: {
                            partId: nextNodeOfSelection.id,
                            toStart: false,
                            type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part
                        },
                        isPopoverOpen: false
                    });
                }
            }
            else {
                const innerSelection = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSelectionPosInnerPart)(this.id, this.contentEditableContainer.current);
                if (innerSelection && innerSelection.partId) {
                    const expSelection = innerSelection.startOffset + 1 <= innerSelection.contentLength
                        ? {
                            type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                            partId: innerSelection.partId,
                            startOffset: innerSelection.startOffset + 1
                        }
                        : (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getSiblingOfExpSelection)(this.id, innerSelection.partId, false, false, this.props.expression && this.props.expression.parts);
                    this.setState({
                        expSelection,
                        isPopoverOpen: false
                    });
                }
            }
        };
        this.handleDownArrow = () => {
            if (this.state.isPopoverOpen) {
                const popoverTarget = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverTarget)(this.id, this.getWhetherInEditablePart(), this.props.expression && this.props.expression.parts);
                const popoverItems = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverItems)(this.id, popoverTarget, this.props.expression && this.props.expression.parts, this.props.useDataSources, this.props.widgetId, this.props.browserSizeMode);
                let selectedPopoverItemIndex = this.state.selectedPopoverItemIndex;
                if (!selectedPopoverItemIndex) {
                    selectedPopoverItemIndex = '0';
                }
                else if (parseInt(selectedPopoverItemIndex) < popoverItems.length - 1) {
                    selectedPopoverItemIndex = `${parseInt(this.state.selectedPopoverItemIndex) + 1}`;
                }
                else {
                    selectedPopoverItemIndex = `${popoverItems.length - 1}`;
                }
                this.setState({ selectedPopoverItemIndex });
            }
        };
        this.handleUpArrow = () => {
            if (this.state.isPopoverOpen) {
                const popoverTarget = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverTarget)(this.id, this.getWhetherInEditablePart(), this.props.expression && this.props.expression.parts);
                const popoverItems = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverItems)(this.id, popoverTarget, this.props.expression && this.props.expression.parts, this.props.useDataSources, this.props.widgetId, this.props.browserSizeMode);
                let selectedPopoverItemIndex = this.state.selectedPopoverItemIndex;
                if (!selectedPopoverItemIndex) {
                    selectedPopoverItemIndex = `${popoverItems.length - 1}`;
                }
                else if (parseInt(selectedPopoverItemIndex) > 0) {
                    selectedPopoverItemIndex = `${parseInt(this.state.selectedPopoverItemIndex) - 1}`;
                }
                else {
                    selectedPopoverItemIndex = '0';
                }
                this.setState({ selectedPopoverItemIndex });
            }
        };
        this.handleEnter = () => {
            if (this.state.isPopoverOpen && this.state.selectedPopoverItemIndex) {
                const popoverTarget = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverTarget)(this.id, this.getWhetherInEditablePart(), this.props.expression && this.props.expression.parts);
                const popoverItems = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverItems)(this.id, popoverTarget, this.props.expression && this.props.expression.parts, this.props.useDataSources, this.props.widgetId, this.props.browserSizeMode);
                this.setState({ selectedPopoverItemIndex: null });
                this.handlePopoverItemClick(popoverItems[this.state.selectedPopoverItemIndex], popoverTarget);
            }
            else {
                const partsLength = (this.props.expression && this.props.expression.parts && this.props.expression.parts.length) || 0;
                this.setState({
                    isPopoverOpen: false,
                    expSelection: {
                        // move selection to end of editable part or move selection to end of editor
                        partId: this.state.expSelection && this.state.expSelection.type === _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char
                            ? this.state.expSelection.partId
                            : (partsLength > 0 ? (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, partsLength - 1) : (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, 0)),
                        toStart: false,
                        type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part
                    }
                });
            }
        };
        this.handlePopoverItemClick = (item, partId) => {
            if (!item || !partId) {
                return;
            }
            const newParts = this.props.expression && this.props.expression.parts ? this.props.expression.parts.slice() : [];
            if (item.type === _types__WEBPACK_IMPORTED_MODULE_6__.PopoverType.Field) {
                this.handleFieldPopoverClick(newParts, partId, item);
            }
            else if (item.type === _types__WEBPACK_IMPORTED_MODULE_6__.PopoverType.DataSource) {
                this.handleDsPopoverClick(newParts, partId, item);
            }
            else if (item.type === _types__WEBPACK_IMPORTED_MODULE_6__.PopoverType.Function) {
                this.handleFunctionPopoverClick(newParts, partId, item);
            }
        };
        this.handleFieldPopoverClick = (newParts, partId, item) => {
            newParts = newParts || [];
            const index = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId);
            const dsId = newParts[index].dataSourceId;
            const newPart = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getExpressionPart)(this.getSingleExpFromPopoverItem(item), dsId, newParts[index].isFromRepeatedDataSourceContext, item.id);
            newParts.splice(index, 1, newPart);
            const expSelection = {
                partId: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, index),
                toStart: false,
                type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part
            };
            this.setState({
                isPopoverOpen: false,
                expSelection
            });
            this.props.onChange(this.getNewExpression(newParts));
        };
        this.handleDsPopoverClick = (parts, partId, item) => {
            parts = parts || [];
            const index = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId);
            const newParts = parts.slice();
            if (item.id.split('-').reverse()[0] === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID) {
                const mainDataSourceId = item.id.split('-').reverse().slice(1).reverse().join('-');
                const tempUseDs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ dataSourceId: item.id, mainDataSourceId, dataViewId: jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID });
                const realUseDs = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getRealUseDataSources)(tempUseDs, this.props.useDataSources);
                newParts[index].isFromRepeatedDataSourceContext = true;
                newParts[index].dataSourceId = realUseDs && realUseDs.dataSourceId;
            }
            else {
                newParts[index].dataSourceId = item.id;
            }
            const expSelection = {
                partId,
                type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                startOffset: newParts[index].exp.length - 1
            };
            this.props.onChange(this.getNewExpression(newParts));
            this.setState({
                isPopoverOpen: false,
                expSelection
            }, () => { this.setState({ isPopoverOpen: true }); });
        };
        this.handleFunctionPopoverClick = (newParts, partId, item) => {
            newParts = newParts || [];
            const index = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getIndexByPartId)(this.id, partId);
            const newPart = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getExpressionPart)(this.getSingleExpFromPopoverItem(item));
            const expSelection = {
                partId: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, index + 1),
                type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part,
                toStart: false
            };
            newParts.splice(index, 1, newPart, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator, exp: '(' }, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator, exp: ')' });
            this.props.onChange(this.getNewExpression(newParts));
            this.setState({
                isPopoverOpen: false,
                expSelection
            });
        };
        _ExpressionEditor.count++;
        this.id = `${_types__WEBPACK_IMPORTED_MODULE_6__.EXP_CONTAINER_PREFIX}-${_ExpressionEditor.count}`;
        this.contentEditableContainer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.helperContainer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.state = {
            isPopoverOpen: false,
            isEditorMounted: false,
            expSelection: null,
            selectedPopoverItemIndex: null
        };
    }
    componentDidMount() {
        this.resizeObserver = new ResizeObserver(this.resizeHelperContainer);
        this.resizeObserver.observe(this.contentEditableContainer.current);
        this.expressionString = this.getExpressionString() || '';
        if (this.props.autoFocus) {
            this.getFocusOnce = true;
            if (this.props.expression && this.props.expression.parts && this.props.expression.parts.length === 1 && this.props.expression.parts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String) {
                this.setState({
                    expSelection: {
                        partId: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPartIdByIndex)(this.id, 0),
                        type: _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char,
                        startOffset: this.props.expression.parts[0].exp.length - 1
                    }
                });
            }
            else {
                this.contentEditableContainer.current.focus();
                this.setSelectionToEnd();
            }
        }
        this.setState({ isEditorMounted: true });
        // prevent from dragging selected text
        this.contentEditableContainer.current.ondragstart = () => false;
        // TODO: handle paste event
        this.contentEditableContainer.current.onpaste = () => false;
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.expSelection && this.state.expSelection.partId &&
            (prevState.expSelection !== this.state.expSelection || (this.props.autoFocus && !this.getFocusOnce && this.getWhetherLoseFocus()))) {
            this.getFocusOnce = true;
            if (this.state.expSelection.type === _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Part) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_15__.moveSelectionByPart)(this.state.expSelection.partId, this.state.expSelection.toStart, this.contentEditableContainer.current);
            }
            else if (this.state.expSelection.type === _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_15__.moveSelectionByCharacter)(this.state.expSelection.partId, this.state.expSelection.startOffset, this.contentEditableContainer.current);
            }
        }
        if (prevProps.expression !== this.props.expression) {
            if (this.props.expression && this.props.expression.parts) {
                this.expressionString = this.getExpressionString();
            }
            else {
                this.expressionString = '';
            }
        }
    }
    componentWillUnmount() {
        this.resizeObserver.disconnect();
    }
    render() {
        var _a;
        let popoverTarget;
        if (this.state.isPopoverOpen) {
            popoverTarget = (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverTarget)(this.id, this.getWhetherInEditablePart(), this.props.expression && this.props.expression.parts);
        }
        let html = this.renderPartsToHtml(this.props.expression && this.props.expression.parts);
        html = html && html.replace(/&quot;/g, '"');
        const isValid = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getWhetherExpressionValid(this.props.expression);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.MultipleDataSourceComponent, { useDataSources: this.props.useDataSources },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: this.props.style, onClick: this.onClick, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [this.props.className]: !!this.props.className }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 component-expression-editor' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 expression-editor-input', { 'error-border': !isValid }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_contenteditable__WEBPACK_IMPORTED_MODULE_5___default()), { innerRef: this.contentEditableContainer, html: html, disabled: !!(this.state.expSelection && this.state.expSelection.type === _types__WEBPACK_IMPORTED_MODULE_6__.ExpSelectionType.Char), onChange: this.onChange, onKeyDown: this.onKeyDown, onBlur: this.onBlur, className: 'w-100 break-all expression-editor-input-content-editable', style: this.ltrStyle }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_exp_popover__WEBPACK_IMPORTED_MODULE_13__["default"], { targetNodeId: popoverTarget, containerNode: (_a = this.contentEditableContainer) === null || _a === void 0 ? void 0 : _a.current, expSelection: this.state.expSelection, items: (0,_utils__WEBPACK_IMPORTED_MODULE_15__.getPopoverItems)(this.id, popoverTarget, this.props.expression && this.props.expression.parts, this.props.useDataSources, this.props.widgetId, this.props.browserSizeMode), isOpen: this.state.isPopoverOpen, onClick: this.handlePopoverItemClick, theme: this.props.theme, selectedItemIndex: this.state.selectedPopoverItemIndex })),
                    !isValid && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-1 error-message', ref: this.errorMsgContainer }, this.props.intl.formatMessage({ id: 'invalidExpression', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.invalidExpression })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('expression-editor-helper mt-4', { 'with-error-message': !isValid }), ref: this.helperContainer },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_exp_editor_helper__WEBPACK_IMPORTED_MODULE_14__["default"], { expression: this.props.expression, useDataSources: this.props.useDataSources, onSelect: this.onHelperItemSelect, intl: this.props.intl, externalId: this.id, inEditablePart: this.getWhetherInEditablePart(), container: this.state.isEditorMounted ? this.contentEditableContainer.current : null, expSelection: this.state.expSelection, widgetId: this.props.widgetId }))))));
    }
}
_ExpressionEditor.count = -1;
const mapStateToProps = (state, ownProps) => {
    var _a, _b;
    return {
        browserSizeMode: ((_a = state === null || state === void 0 ? void 0 : state.appContext) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_b = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.browserSizeMode : state === null || state === void 0 ? void 0 : state.browserSizeMode
    };
};
// eslint-disable-next-line
const __ExpressionEditor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(_ExpressionEditor);
const ExpressionEditor = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withTheme)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withStyles)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(__ExpressionEditor), 'ExpressionEditor'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpressionEditor);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXP_CONTAINER_PREFIX: () => (/* binding */ EXP_CONTAINER_PREFIX),
/* harmony export */   EXP_PART_PREFIX: () => (/* binding */ EXP_PART_PREFIX),
/* harmony export */   ExpSelectionType: () => (/* binding */ ExpSelectionType),
/* harmony export */   PopoverType: () => (/* binding */ PopoverType)
/* harmony export */ });
const EXP_PART_PREFIX = 'part';
const EXP_CONTAINER_PREFIX = 'expression';
var ExpSelectionType;
(function (ExpSelectionType) {
    ExpSelectionType["Part"] = "PART";
    ExpSelectionType["Char"] = "CHAR"; // selection is in the middle of a part
})(ExpSelectionType || (ExpSelectionType = {}));
var PopoverType;
(function (PopoverType) {
    PopoverType["Field"] = "FIELD";
    PopoverType["DataSource"] = "DATASOURCE";
    PopoverType["Function"] = "FUNCTION";
})(PopoverType || (PopoverType = {}));


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/add-remove-utils.ts":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/add-remove-utils.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCharactersToParts: () => (/* binding */ addCharactersToParts),
/* harmony export */   applyEditResultToParts: () => (/* binding */ applyEditResultToParts),
/* harmony export */   getExpressionPart: () => (/* binding */ getExpressionPart),
/* harmony export */   getExps: () => (/* binding */ getExps),
/* harmony export */   getPopoverItems: () => (/* binding */ getPopoverItems),
/* harmony export */   getPopoverTarget: () => (/* binding */ getPopoverTarget),
/* harmony export */   getWhetherPartNeedPopover: () => (/* binding */ getWhetherPartNeedPopover),
/* harmony export */   handleFieldExps: () => (/* binding */ handleFieldExps),
/* harmony export */   handleOperatoExps: () => (/* binding */ handleOperatoExps),
/* harmony export */   handleStringExps: () => (/* binding */ handleStringExps),
/* harmony export */   removeCharactersFromOnePart: () => (/* binding */ removeCharactersFromOnePart),
/* harmony export */   removeParts: () => (/* binding */ removeParts)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _basic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/basic-utils.ts");
/* harmony import */ var _selection_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/selection-utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts");




function getExps(expressionString) {
    // \ufeff stands for ZERO WIDTH NO-BREAK SPACE
    const e = expressionString.replace(/\ufeff/g, '');
    let result = handleStringExps(e);
    result = handleFieldExps(result);
    result = handleOperatoExps(result);
    return result;
}
/**
 * return an array which members are string exps and other exps not split
 *
 * e.g. ['"abc"+123+{f1}+AVG({f2})'] -> ['"abc"', '+123+{f1}+AVG({f2})']
 *
 */
function handleStringExps(e) {
    const q = e.split(/([\"])/g).filter(e => !!e);
    let t = '';
    let isStringStart = false;
    let isStringEnd = false;
    const result = [];
    q.forEach((v, i) => {
        if (v === '"') {
            t += v;
            isStringEnd = isStringStart;
            isStringStart = true;
            if (isStringStart && isStringEnd) {
                result.push(t);
                t = '';
                isStringStart = false;
                isStringEnd = false;
            }
        }
        else if (isStringStart) {
            t += v;
        }
        else {
            result.push(v);
        }
        if (i === q.length - 1 && isStringStart && !isStringEnd) {
            result.push(t);
        }
    });
    return result;
}
/**
 * return an array which is split by curly brackets
 *
 * e.g. ['"abc"', '+123+{f1}+AVG({f2})'] -> ['"abc"', '+123+', '{f1}', '+AVG(', '{f2}', ')']
 */
function handleFieldExps(e) {
    let result = e.map(r => {
        if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isString)(r)) {
            return r;
        }
        else {
            return r.split(/({[^\{\}]*})/g).filter(e => !!e);
        }
    });
    result = Array.prototype.concat.apply([], result);
    return result;
}
/**
 * return an array which is split by operators and front curly bracket: + - * / , ( ) { space
 *
 * e.g. ['"abc"', '+123+', '{f1}', '+AVG(', '{f2}', ')'] -> ['"abc"', '+', '123', '+', '{f1}', '+', 'AVG', '(', '{f2}', ')']
 *
 */
function handleOperatoExps(e) {
    let result = e.map(r => {
        if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isString)(r) || (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isField)(r)) {
            return r;
        }
        else {
            return r.split(/(\s*[\+\-\*\/\(\)\s]\s*)/g).filter(e => !!e);
        }
    });
    result = Array.prototype.concat.apply([], result);
    return result;
}
/**
 *
 * @param externalId expression editor node id
 * @param parts expression parts
 * @param newCharacters input characters
 * @param isInEditablePart whether is in an editable part
 * @param dsIds data source id
 * @param range
 * @param nextNodeOfSelection next node of selection
 */
function addCharactersToParts(externalId, parts, newCharacters, isInEditablePart, dsIds, range, nextNodeOfSelection) {
    parts = parts || [];
    let editResult = {};
    if (!newCharacters) {
        return editResult;
    }
    parts = parts || [];
    // get index of next part from position of selection
    const nextPartIndex = nextNodeOfSelection ? (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, nextNodeOfSelection.id) : parts.length;
    const completeQuotationAndBracketNewChars = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharDoubleQuotationMarker)(newCharacters) ? '""' : ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharFrontCurlyBracket)(newCharacters) ? '{}' : newCharacters);
    const partsFromNewCharacters = getExps(completeQuotationAndBracketNewChars).map(exp => getExpressionPart(exp));
    // is first part of parts from new characters unmergeable
    const isFirstPartUnmergeable = partsFromNewCharacters[0] && partsFromNewCharacters[0].exp.length === 1
        ? (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharacterUnmergeable)(partsFromNewCharacters[0].exp)
        : (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(partsFromNewCharacters[0]);
    // is last part of parts from new characters unmergeable
    const isLastPartUnmergeable = partsFromNewCharacters[partsFromNewCharacters.length - 1] && partsFromNewCharacters[partsFromNewCharacters.length - 1].exp.length === 1
        ? (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharacterUnmergeable)(partsFromNewCharacters[partsFromNewCharacters.length - 1].exp)
        : (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(partsFromNewCharacters[partsFromNewCharacters.length - 1]);
    if (isInEditablePart) {
        // current part is the part before next part
        // current part is the editable part
        const currentPartIndex = nextPartIndex - 1 > 0 ? nextPartIndex - 1 : 0;
        const currentPart = parts[currentPartIndex];
        const isCurrentPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(currentPart);
        const startOffset = range && range.startOffset;
        const startContainer = range && range.startContainer;
        // is adding new characters to the start of the part
        const isAddingToStart = !!(startOffset && startOffset === newCharacters.length);
        // is adding new characters to the end of the part
        const isAddingToEnd = !!(startOffset && startContainer && startOffset === startContainer.textContent.length);
        if (isCurrentPartUnmergeable) {
            if (isAddingToStart) {
                const previousPartIndex = currentPartIndex - 1;
                const previousPart = parts[previousPartIndex];
                const isPrevPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(previousPart);
                if (!isPrevPartUnmergeable && !isFirstPartUnmergeable) {
                    const p = getExps(previousPart.exp + completeQuotationAndBracketNewChars).map(exp => getExpressionPart(exp));
                    editResult = getEidtResultFromPartsFromNewCharacters(p, previousPartIndex, 0, p[p.length - 1].exp.length, p.length - 1);
                }
                else {
                    editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, currentPartIndex);
                }
            }
            else if (isAddingToEnd) {
                const nextPart = parts[nextPartIndex];
                const isNextPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(nextPart);
                if (!isNextPartUnmergeable && !isLastPartUnmergeable) {
                    const p = getExps(completeQuotationAndBracketNewChars + nextPart.exp).map(exp => getExpressionPart(exp));
                    const startOffset = p[p.length - 1].exp.length - nextPart.exp.length > -1 ? p[p.length - 1].exp.length - nextPart.exp.length : p[p.length - 1].exp.length;
                    editResult = getEidtResultFromPartsFromNewCharacters(p, nextPartIndex, p.length - 1, startOffset, p.length - 1);
                }
                else {
                    editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, nextPartIndex);
                }
            }
            else { // is adding new characters to middle of the part
                const currentPart = parts[currentPartIndex];
                const exp = startContainer && startContainer.textContent;
                const updatedCurrentPart = currentPart && exp && getExpressionPart(exp, currentPart.dataSourceId, currentPart.isFromRepeatedDataSourceContext, currentPart.jimuFieldName);
                editResult[currentPartIndex] = {
                    part: updatedCurrentPart,
                    isReplacing: true,
                    startOffset: range && range.startOffset
                };
            }
        }
        else { // current part is mergeable, which means previous part and next part must be unmergeable
            if (isAddingToStart) {
                if (!isLastPartUnmergeable) {
                    const p = getExps(completeQuotationAndBracketNewChars + currentPart.exp).map(exp => getExpressionPart(exp));
                    const s = p[p.length - 1].exp.length - currentPart.exp.length > -1 ? p[p.length - 1].exp.length - currentPart.exp.length : p[p.length - 1].exp.length;
                    editResult = getEidtResultFromPartsFromNewCharacters(p, currentPartIndex, p.length - 1, s, p.length - 1);
                }
                else {
                    editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, currentPartIndex);
                }
            }
            else if (isAddingToEnd) {
                if (!isFirstPartUnmergeable) {
                    const p = getExps(currentPart.exp + completeQuotationAndBracketNewChars).map(exp => getExpressionPart(exp));
                    editResult = getEidtResultFromPartsFromNewCharacters(p, currentPartIndex, 0, p[0].exp.length, 0);
                }
                else {
                    editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, nextPartIndex);
                }
            }
            else { // is adding new characters to middle of the part
                const expString = startContainer && startContainer.textContent;
                const partsFromExpString = getExps(expString.replace(/\"/g, '""').replace(/\{/g, '{}')).map(exp => getExpressionPart(exp));
                const s = partsFromExpString.length === 1 ? startOffset : partsFromExpString[partsFromExpString.length - 1].exp.length;
                const sIndex = partsFromExpString.length === 1 ? 0 : partsFromExpString.length - 1;
                editResult = getEidtResultFromPartsFromNewCharacters(partsFromExpString, currentPartIndex, 0, s, sIndex);
            }
        }
    }
    else { // not in a editable part, which means the editor is editable and selection is between two parts
        const nextPart = parts[nextPartIndex];
        // previous part is the part before next part
        // selection is between previous part and next part
        const previousPartIndex = nextPartIndex - 1 > 0 ? nextPartIndex - 1 : 0;
        const previousPart = parts[previousPartIndex];
        // only when both of part and character are mergeable, the charater can be merged to the part
        const isPreviousPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(previousPart);
        const isNextPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(nextPart);
        // there only three conditions:
        // 1. both of previous part and next part are unmergeable, 2. only previous part is unmergeable, 3. only next part is unmergeable
        if (isPreviousPartUnmergeable && isNextPartUnmergeable) {
            editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, nextPartIndex);
        }
        else if (!isNextPartUnmergeable) {
            if (!isLastPartUnmergeable) {
                const p = getExps(completeQuotationAndBracketNewChars + nextPart.exp).map(exp => getExpressionPart(exp));
                const startOffset = p[p.length - 1].exp.length - nextPart.exp.length > -1 ? p[p.length - 1].exp.length - nextPart.exp.length : p[p.length - 1].exp.length;
                editResult = getEidtResultFromPartsFromNewCharacters(p, nextPartIndex, p.length - 1, startOffset, p.length - 1);
            }
            else {
                editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, nextPartIndex);
            }
        }
        else if (!isPreviousPartUnmergeable) {
            if (!isFirstPartUnmergeable) {
                const p = getExps(previousPart.exp + completeQuotationAndBracketNewChars).map(exp => getExpressionPart(exp));
                editResult = getEidtResultFromPartsFromNewCharacters(p, previousPartIndex, 0, p[0].exp.length, 0);
            }
            else {
                editResult = getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, nextPartIndex);
            }
        }
        else {
            console.warn('One mergeable part can not be next to another mergeable part');
        }
    }
    return editResult;
}
function getEidtResultFromPartsFromNewCharacters(partsFromNewCharacters, startIndex, replaceIndex, startOffset, startOffsetIndex) {
    const editResult = {};
    if (!partsFromNewCharacters || !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(startIndex) || startIndex < 0) {
        return editResult;
    }
    partsFromNewCharacters.forEach((p, i) => {
        const isReplacing = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(replaceIndex) && replaceIndex > -1 && i === replaceIndex;
        const s = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(startOffsetIndex) && startOffsetIndex > -1 && i === startOffsetIndex ? startOffset : null;
        editResult[startIndex + i] = {
            part: p,
            isReplacing,
            startOffset: s
        };
    });
    return editResult;
}
function applyEditResultToParts(editResult, parts = []) {
    if (!editResult) {
        return parts;
    }
    parts = parts || [];
    const newParts = parts.slice();
    let deleteCount = 0;
    const replacingParts = [];
    Object.keys(editResult).sort((i, j) => parseInt(i) - parseInt(j)).forEach(index => {
        deleteCount += editResult[index].isReplacing ? 1 : 0;
        if (editResult[index].part) {
            replacingParts.push(editResult[index].part);
        }
    });
    newParts.splice(Math.min.apply(null, Object.keys(editResult)), deleteCount, ...replacingParts);
    return newParts;
}
function getWhetherPartNeedPopover(type) {
    if (!type) {
        return false;
    }
    return type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field || type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function;
}
function getJimuFieldNameFromAlias(dataSourceId, alias) {
    if (!dataSourceId || !alias) {
        return null;
    }
    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    const ds = dsManager.getDataSource(dataSourceId);
    const schema = ds && ds.getSchema && ds.getSchema();
    const fields = schema && schema.fields;
    if (!fields) {
        return null;
    }
    else {
        return Object.keys(fields).sort((j1, j2) => j1.localeCompare(j2)).find(jimuFieldName => {
            const a = fields[jimuFieldName].alias || fields[jimuFieldName].name;
            return a === alias;
        }) || null;
    }
}
function getExpressionPart(exp, dataSourceId, isFromRepeatedDataSourceContext, jimuFieldName) {
    if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isField)(exp)) {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field,
            exp: exp,
            dataSourceId,
            jimuFieldName: jimuFieldName || getJimuFieldNameFromAlias(dataSourceId, exp.replace(/^\{/, '').replace(/\}$/, '')),
            isFromRepeatedDataSourceContext: !!isFromRepeatedDataSourceContext
        };
    }
    else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(exp)) {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function,
            exp: exp
        };
    }
    else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(exp)) {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Number,
            exp: exp
        };
    }
    else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isOperator)(exp)) {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator,
            exp: exp
        };
    }
    else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isString)(exp)) {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
            exp: exp
        };
    }
    else {
        return {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Unknown,
            exp: exp
        };
    }
}
/**
 *
 * @param externalId expression editor node id
 * @param parts expression parts
 * @param startIndex start part index
 * @param endIndex end part index
 */
function removeParts(externalId, parts, startIndex, endIndex) {
    parts = parts || [];
    if (!parts || !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(startIndex) || !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(endIndex)) {
        return null;
    }
    const previousPart = parts[startIndex - 1]; // part before to-be-removed parts
    const nextPart = parts[endIndex + 1]; // part after to-be-removed parts
    const editResult = {};
    if (previousPart && nextPart && !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(previousPart) && !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(nextPart)) {
        const newExpressionString = previousPart.exp + nextPart.exp;
        const newExps = getExps(newExpressionString);
        const newParts = newExps.map((e, i) => getExpressionPart(e));
        for (let i = startIndex - 1; i <= endIndex + 1; i++) {
            editResult[i] = {
                part: newParts[i - (startIndex - 1)] || null,
                isReplacing: true,
                startOffset: newParts[i - (startIndex - 1)] ? previousPart.exp.length : null
            };
        }
    }
    else {
        for (let i = startIndex; i <= endIndex; i++) {
            editResult[i] = {
                part: null,
                isReplacing: true,
                startOffset: null
            };
        }
    }
    return editResult;
}
/**
 *
 * @param externalId expression editor node id
 * @param parts expression parts
 * @param partId part id which is editing
 * @param startIndex start character index
 * @param endIndex end character index
 */
function removeCharactersFromOnePart(externalId, parts, partId, startIndex, endIndex) {
    parts = parts || [];
    const index = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, partId);
    const part = parts && parts[index];
    if (!part || !part.exp || !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(startIndex) || !(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(endIndex) || startIndex < 0 || endIndex < 0) {
        return null;
    }
    let editResult = {};
    const toBeRemovedCharacters = part.exp.slice(startIndex, endIndex + 1);
    const isFirstCharToBeRemoved = startIndex === 0;
    const isLastCharToBeRemoved = endIndex === part.exp.length - 1;
    let newExp;
    // eslint-disable-next-line
    let newPart;
    if ((isFirstCharToBeRemoved || isLastCharToBeRemoved) && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharDoubleQuotationMarker)(toBeRemovedCharacters)) {
        newExp = part.exp.replace(/^\"/, '').replace(/\"$/, '');
    }
    else if ((isFirstCharToBeRemoved && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharFrontCurlyBracket)(toBeRemovedCharacters)) || (isLastCharToBeRemoved && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isCharPostCurlyBracket)(toBeRemovedCharacters))) {
        newExp = part.exp.replace(/^\{/, '').replace(/\}$/, '');
    }
    else {
        newExp = `${part.exp.slice(0, startIndex)}${part.exp.slice(endIndex + 1)}`;
    }
    // eslint-disable-next-line
    newPart = getExpressionPart(newExp, part.dataSourceId, part.isFromRepeatedDataSourceContext, part.jimuFieldName);
    if (newPart.exp.length > 0) {
        if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(newPart)) {
            editResult[index] = {
                part: newPart,
                isReplacing: true,
                startOffset: startIndex + 1 - (endIndex - startIndex + 1)
            };
        }
        else { // new part is mergeable
            const prevPart = parts[index - 1];
            const nextPart = parts[index + 1];
            const newPartsFromNewExp = getExps(newExp.replace(/\"/g, '""').replace(/\{/g, '{}')).map(exp => getExpressionPart(exp));
            const isPrevPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(prevPart);
            const isNextPartUnmergeable = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isPartUnmergeable)(nextPart);
            // length of parts which are edited but are not current part
            // e.g. [45, "123", 67] -> remove one " -> [4512367], the first part 45 and last part 67 are edited, but are not current part, current part is "123"
            let extraEditedPartsLength;
            let expStringAfterMerge;
            if (prevPart && nextPart && !isPrevPartUnmergeable && !isNextPartUnmergeable) {
                expStringAfterMerge = prevPart.exp + newExp + nextPart.exp;
                extraEditedPartsLength = 2;
            }
            else if (prevPart && !isPrevPartUnmergeable) {
                expStringAfterMerge = prevPart.exp + newExp;
                extraEditedPartsLength = 1;
            }
            else if (nextPart && !isNextPartUnmergeable) {
                expStringAfterMerge = newExp + nextPart.exp;
                extraEditedPartsLength = 1;
            }
            else {
                expStringAfterMerge = newExp;
                extraEditedPartsLength = 0;
            }
            // start index of edited parts in origin parts
            let startIndexInOriginParts;
            let startOffset;
            if (prevPart && !isPrevPartUnmergeable) {
                startIndexInOriginParts = index - 1;
                startOffset = isFirstCharToBeRemoved ? prevPart.exp.length : (isLastCharToBeRemoved ? newPartsFromNewExp[newPartsFromNewExp.length - 1].exp.length : 0);
            }
            else {
                startIndexInOriginParts = index;
                startOffset = isFirstCharToBeRemoved ? 0 : (isLastCharToBeRemoved ? newPartsFromNewExp[newPartsFromNewExp.length - 1].exp.length : 0);
            }
            const newParts = getExps(expStringAfterMerge.replace(/\"/g, '""').replace(/\{/g, '{}')).map(exp => getExpressionPart(exp));
            const selectedPartIndex = isFirstCharToBeRemoved ? startIndexInOriginParts : (isLastCharToBeRemoved ? startIndexInOriginParts + newParts.length - 1 : null);
            for (let i = startIndexInOriginParts; i <= startIndexInOriginParts + newParts.length + extraEditedPartsLength - 1; i++) {
                editResult[i] = {
                    part: newParts[i - startIndexInOriginParts] || null,
                    isReplacing: i - startIndexInOriginParts <= extraEditedPartsLength, // only edited part is replaced
                    startOffset: i === selectedPartIndex ? startOffset : null
                };
            }
        }
    }
    else {
        editResult = removeParts(externalId, parts, index, index);
    }
    return editResult;
}
function getPopoverItems(externalId, partId, parts, useDataSources, widgetId, browserSizeMode) {
    parts = parts || [];
    if (!partId || !parts) {
        return [];
    }
    let popoverItems = [];
    const index = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, partId);
    const part = parts[index];
    if (!part) {
        return;
    }
    if (part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field) {
        if (part.dataSourceId) {
            const selectedDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(part.dataSourceId);
            const fields = selectedDs && selectedDs.getSchema && selectedDs.getSchema().fields;
            fields && Object.keys(fields)
                .filter(jimuFieldName => {
                const name = fields[jimuFieldName].alias || fields[jimuFieldName].name;
                return name && name.toLowerCase().indexOf(part.exp.replace(/[\{\}]/g, '').toLowerCase()) === 0;
            })
                .filter(jimuFieldName => {
                if (parts[index - 1] && parts[index - 1].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator && parts[index - 1].exp === '(' &&
                    parts[index - 2] && parts[index - 2].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function) {
                    const func = parts[index - 2].exp;
                    const isFuncCount = func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Count;
                    if (isFuncCount) {
                        return true;
                    }
                    const isFuncMinOrMax = func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Min || func === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions.Max;
                    return fields[jimuFieldName].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number || (isFuncMinOrMax && fields[jimuFieldName].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date);
                }
                return true;
            })
                .sort((j1, j2) => fields[j1].name.localeCompare(fields[j2].name))
                .forEach(jimuFieldName => {
                popoverItems.push({
                    id: jimuFieldName,
                    content: fields[jimuFieldName].alias || fields[jimuFieldName].name,
                    type: _types__WEBPACK_IMPORTED_MODULE_3__.PopoverType.Field
                });
            });
        }
        else if (useDataSources && useDataSources.length > 0) {
            const isInsideFunction = index > 1 && parts[index - 1].exp === '(' && parts[index - 2].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function;
            const usePopulatedDataView = !isInsideFunction;
            popoverItems = getDssPopoverItems((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.addAutoAddedDataViews)(widgetId, useDataSources, browserSizeMode, usePopulatedDataView), useDataSources);
        }
    }
    else if (part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Unknown) { // it may be a function
        (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getSortedKeys)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions)
            .filter(k => jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[k].toLowerCase().indexOf(part.exp.toLowerCase()) === 0)
            .forEach(k => {
            popoverItems.push({
                id: k,
                content: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[k],
                type: _types__WEBPACK_IMPORTED_MODULE_3__.PopoverType.Function
            });
        });
    }
    return popoverItems;
}
function getDssPopoverItems(useDataSources, previouseUseDataSources) {
    const popoverItems = [];
    useDataSources && useDataSources.asMutable().forEach(u => {
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getRealUseDataSources)(u, previouseUseDataSources).dataSourceId);
        if (ds) {
            let label;
            if (!u.dataViewId || u.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID) {
                label = ds.getLabel();
            }
            else {
                if (u.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID) {
                    label = `${ds.getMainDataSource().getLabel()} / ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatMessage({ id: 'selectionDataView' })}`;
                }
                else if (u.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID) {
                    label = `${ds.getMainDataSource().getLabel()} / ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatMessage({ id: 'populatedDataView' })}`;
                }
                else {
                    label = `${ds.getMainDataSource().getLabel()} / ${ds.getLabel()}`;
                }
            }
            popoverItems.push({
                id: u.dataSourceId,
                content: label,
                type: _types__WEBPACK_IMPORTED_MODULE_3__.PopoverType.DataSource
            });
        }
    });
    return popoverItems;
}
function getPopoverTarget(externalId, isInEditablePart, parts) {
    if (!document || !document.querySelector(`#${externalId}`)) {
        return null;
    }
    let previousNodeOfSelection = (0,_selection_utils__WEBPACK_IMPORTED_MODULE_2__.getPreviousNodeOfSelection)(externalId);
    while (previousNodeOfSelection && parts[(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, previousNodeOfSelection.id)] &&
        parts[(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, previousNodeOfSelection.id)].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator) {
        previousNodeOfSelection = previousNodeOfSelection.previousElementSibling;
    }
    if (!isInEditablePart && previousNodeOfSelection) {
        return previousNodeOfSelection.id;
    }
    else {
        return (0,_selection_utils__WEBPACK_IMPORTED_MODULE_2__.getPartIdOfSelection)(externalId);
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/basic-utils.ts":
/*!***************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/basic-utils.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAutoAddedDataViews: () => (/* binding */ addAutoAddedDataViews),
/* harmony export */   areFunctionParts: () => (/* binding */ areFunctionParts),
/* harmony export */   getAddedPartIndexes: () => (/* binding */ getAddedPartIndexes),
/* harmony export */   getIndexByPartId: () => (/* binding */ getIndexByPartId),
/* harmony export */   getInernalId: () => (/* binding */ getInernalId),
/* harmony export */   getJimuFieldNameFromAlias: () => (/* binding */ getJimuFieldNameFromAlias),
/* harmony export */   getNewCharacterFromExpressionString: () => (/* binding */ getNewCharacterFromExpressionString),
/* harmony export */   getNodeByPartId: () => (/* binding */ getNodeByPartId),
/* harmony export */   getPartIdByChildNode: () => (/* binding */ getPartIdByChildNode),
/* harmony export */   getPartIdByIndex: () => (/* binding */ getPartIdByIndex),
/* harmony export */   getRealUseDataSources: () => (/* binding */ getRealUseDataSources),
/* harmony export */   getRemovedPartIndexes: () => (/* binding */ getRemovedPartIndexes),
/* harmony export */   getSortedKeys: () => (/* binding */ getSortedKeys),
/* harmony export */   getWhetherIsPartId: () => (/* binding */ getWhetherIsPartId),
/* harmony export */   getWhetherNodeIsParentOfParts: () => (/* binding */ getWhetherNodeIsParentOfParts),
/* harmony export */   isCharDoubleQuotationMarker: () => (/* binding */ isCharDoubleQuotationMarker),
/* harmony export */   isCharFrontCurlyBracket: () => (/* binding */ isCharFrontCurlyBracket),
/* harmony export */   isCharPostCurlyBracket: () => (/* binding */ isCharPostCurlyBracket),
/* harmony export */   isCharacterUnmergeable: () => (/* binding */ isCharacterUnmergeable),
/* harmony export */   isField: () => (/* binding */ isField),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isNumberVariable: () => (/* binding */ isNumberVariable),
/* harmony export */   isOperator: () => (/* binding */ isOperator),
/* harmony export */   isPartUnmergeable: () => (/* binding */ isPartUnmergeable),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   triggerInputEvent: () => (/* binding */ triggerInputEvent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");



function getNodeByPartId(partId, container) {
    if (!partId) {
        return null;
    }
    if (container) {
        return container.querySelector(`#${partId}`);
    }
    else {
        return document && document.querySelector(`#${partId}`);
    }
}
function getWhetherNodeIsParentOfParts(id) {
    if (!id) {
        return false;
    }
    const t = id.split('-');
    return !!(t.length && t.length === 2 && t[0] === _types__WEBPACK_IMPORTED_MODULE_1__.EXP_CONTAINER_PREFIX && /^\d+$/.test(t[1]));
}
function getPartIdByChildNode(externalId, node) {
    if (!node || getWhetherNodeIsParentOfParts(node.id)) {
        return null;
    }
    while (node && !getWhetherIsPartId(externalId, node.id)) {
        node = node.parentElement;
    }
    return node ? node.id : null;
}
function getSortedKeys(obj) {
    return Object.keys(obj).sort((ds1, ds2) => ds1.localeCompare(ds2));
}
function getPartIdByIndex(externalId, index) {
    if (!isNumberVariable(index)) {
        return null;
    }
    return `${externalId}-${_types__WEBPACK_IMPORTED_MODULE_1__.EXP_PART_PREFIX}-${index}`;
}
function getIndexByPartId(exteranlId, partId) {
    if (!partId) {
        return null;
    }
    const temp = partId.split('-');
    const index = getWhetherIsPartId(exteranlId, partId) ? temp.length - 1 : -1;
    return index > -1 ? parseInt(temp[index]) : null;
}
function getInernalId(externalId, id) {
    if (!id || !externalId) {
        return null;
    }
    return id.split(`${externalId}-`)[1];
}
function getWhetherIsPartId(externalId, id) {
    if (!id || !externalId) {
        return false;
    }
    const internalId = getInernalId(externalId, id);
    return !!(internalId && internalId.split('-').length === _types__WEBPACK_IMPORTED_MODULE_1__.EXP_PART_PREFIX.split('-').length + 1 && id.indexOf(_types__WEBPACK_IMPORTED_MODULE_1__.EXP_PART_PREFIX) === externalId.length + 1 && /\d$/.test(id));
}
/**
 * unmergeable part: string, field and operator
 *
 * mergeable part means that if a character added to the start or the end of the part, the character can be merged to the part,
 * e.g., 123 -> 123A (one number part -> one unkown part)
 * unmergeable part means that if a character added to the start or the end of the part, the character can not be merged to the part,
 * e.g., "123" -> "123"A (one string part -> one string part and one unknown part)
 *
 * unmergeable part should have a specail character or stable pattern, to mark the start of the part and the end of the part,
 * e.g., string part is using " and field part is using {}
 */
function isPartUnmergeable(part) {
    if (!part) {
        return true; // null is unmergeable
    }
    if (!part.type) {
        console.warn('Part has no type: ', part);
        return false;
    }
    return part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String || part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field || part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator;
}
/**
 * unmergeable character: operator, ", {
 *
 * mergeable character means that if the character added to the start or the end of one part, the character can be merged to the part,
 * e.g., 123 -> 123A (one number part -> one unkown part)
 * unmergeable character means that if the character added to the start or the end of one part, the character can not be merged to the part,
 * e.g., 123 -> 123+ (one number part -> one number part and one operator part)
 * e.g., 123 -> "123 (editor will automatically complete the quotation marks) -> ""123 (one number part -> one string part and one number part)
 * e.g., 123 -> 123{} (editor will automatically complete the  curly braces) -> 123{} (one number part -> one number part and one field part)
 */
function isCharacterUnmergeable(char) {
    if (!char) {
        return false;
    }
    return isOperator(char) || isCharDoubleQuotationMarker(char) || isCharFrontCurlyBracket(char);
}
function isNumberVariable(n) {
    if (isNaN(n)) {
        return false;
    }
    return Object.prototype.toString.call(n) === '[object Number]';
}
function getNewCharacterFromExpressionString(previousExpressionString, expressionString) {
    const pre = previousExpressionString.split('');
    const cur = expressionString.split('');
    return cur.find((c, i) => c !== pre[i]);
}
function triggerInputEvent(element) {
    if (!element) {
        return;
    }
    const e = new Event('input', {
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(e);
}
function isCharDoubleQuotationMarker(char) {
    return !!(char && char === '"');
}
function isCharFrontCurlyBracket(char) {
    return !!(char && char === '{');
}
function isCharPostCurlyBracket(char) {
    return !!(char && char === '}');
}
function isField(exp) {
    return /^\{(.*?)\}$/.test(exp);
}
function isFunction(exp) {
    if (!exp) {
        return false;
    }
    return Object.keys(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions).some(k => jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionFunctions[k] === exp);
}
function isString(exp) {
    if (!exp) {
        return false;
    }
    return /^\"(.*?)\"$/.test(exp);
}
function isNumber(exp) {
    if (!exp) {
        return false;
    }
    return /^\d*\.?\d+(\d|\s)*$/.test(exp) || /^\d+\.?\d*(\d|\s)*$/.test(exp);
}
function isOperator(exp) {
    if (!exp) {
        return false;
    }
    return /^[\+\-\*\/\,\(\)\s+]$/.test(exp);
}
function getJimuFieldNameFromAlias(dataSourceId, alias) {
    if (!dataSourceId || !alias) {
        return null;
    }
    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    const ds = dsManager.getDataSource(dataSourceId);
    const schema = ds && ds.getSchema && ds.getSchema();
    const fields = schema && schema.fields;
    if (!fields) {
        return null;
    }
    else {
        return Object.keys(fields).sort((j1, j2) => j1.localeCompare(j2)).find(jimuFieldName => {
            const a = fields[jimuFieldName].alias || fields[jimuFieldName].name;
            return a === alias;
        }) || null;
    }
}
function areFunctionParts(parts) {
    if (!parts) {
        return false;
    }
    const startWithFunctionPart = parts[0] && parts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function;
    const parenthesesAfterFunctionName = parts[1] && parts[1].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator && parts[1].exp === '(';
    const endWithParenthesesOperatorPart = parts[parts.length - 1] && parts[parts.length - 1].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Operator && parts[parts.length - 1].exp === ')';
    return startWithFunctionPart && parenthesesAfterFunctionName && endWithParenthesesOperatorPart;
}
function getAddedPartIndexes(editResult) {
    if (!editResult) {
        return [];
    }
    return Object.keys(editResult).filter(index => editResult[index] && editResult[index].part && !editResult[index].isReplacing)
        .map(index => parseInt(index));
}
function getRemovedPartIndexes(editResult) {
    if (!editResult) {
        return [];
    }
    return Object.keys(editResult).filter(index => editResult[index] && !editResult[index].part && editResult[index].isReplacing)
        .map(index => parseInt(index));
}
// TODO: use module loader and remove this function to data source selector
function addAutoAddedDataViews(widgetId, allUseDataSources, browserSizeMode, usePopulatedDataView) {
    const groupedUseDss = groupUseDataSourcesByMainDs(widgetId, allUseDataSources, browserSizeMode);
    Object.keys(groupedUseDss).forEach(mainDataSourceId => {
        var _a;
        // add auto added data views
        groupedUseDss[mainDataSourceId] = (_a = groupedUseDss[mainDataSourceId]) === null || _a === void 0 ? void 0 : _a.concat(getAutoAddedDataViews(widgetId, groupedUseDss[mainDataSourceId], allUseDataSources, browserSizeMode, usePopulatedDataView));
    });
    let newUsedss = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    Object.values(groupedUseDss).forEach(useDss => {
        newUsedss = newUsedss.concat(useDss);
    });
    return newUsedss;
}
function groupUseDataSourcesByMainDs(widgetId, allUseDataSources, browserSizeMode) {
    if (!browserSizeMode || !allUseDataSources || allUseDataSources.length === 0) {
        return {};
    }
    const groupedUseDss = {};
    allUseDataSources.forEach(u => {
        if (!groupedUseDss[u.mainDataSourceId]) {
            groupedUseDss[u.mainDataSourceId] = [];
        }
        if (!groupedUseDss[u.mainDataSourceId].some(v => v.dataSourceId === u.dataSourceId)) {
            groupedUseDss[u.mainDataSourceId] = groupedUseDss[u.mainDataSourceId].concat(u);
        }
    });
    return groupedUseDss;
}
function getAutoAddedDataViews(widgetId, useDataSourcesWithSameMainDs, allUseDataSources, browserSizeMode, usePopulatedDataView) {
    if (!useDataSourcesWithSameMainDs || useDataSourcesWithSameMainDs.length === 0 || !browserSizeMode) {
        return [];
    }
    let defaultDataViews = [];
    if (!useDataSourcesWithSameMainDs.some(u => u.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID)) { // If using selection data view, do not duplicate it.
        const selectionView = useDataSourcesWithSameMainDs[0]
            .set('dataSourceId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataViewDataSourceId(useDataSourcesWithSameMainDs[0].mainDataSourceId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID))
            .set('dataViewId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID);
        defaultDataViews = defaultDataViews.concat(selectionView);
    }
    if (usePopulatedDataView && getWhetherUseRepeatedDataSourceContext(widgetId, useDataSourcesWithSameMainDs, allUseDataSources, browserSizeMode)) {
        const repeatContextView = useDataSourcesWithSameMainDs[0]
            .set('dataSourceId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataViewDataSourceId(useDataSourcesWithSameMainDs[0].mainDataSourceId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID))
            .set('dataViewId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID);
        defaultDataViews = defaultDataViews.concat(repeatContextView);
    }
    return defaultDataViews;
}
function getWhetherUseRepeatedDataSourceContext(widgetId, useDataSourcesWithSameMainDs, allUseDataSources, browserSizeMode) {
    var _a, _b, _c, _d, _e;
    const config = ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_c = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig : (_d = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _d === void 0 ? void 0 : _d.appConfig;
    if (!config || !widgetId || !useDataSourcesWithSameMainDs || useDataSourcesWithSameMainDs.length === 0 || !allUseDataSources || !browserSizeMode) {
        return false;
    }
    const parentWidgetId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getParentWidgetIdOfContent(config, widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget, browserSizeMode);
    const parentWidgetJson = config.widgets[parentWidgetId];
    const isInRepeatedDataSourceContext = parentWidgetJson && ((_e = parentWidgetJson.manifest.properties) === null || _e === void 0 ? void 0 : _e.canProvideRepeatDataSource);
    let haveSameUseDataSources = false;
    for (let i = 0; i < useDataSourcesWithSameMainDs.length; i++) {
        const realUseDataSource = getRealUseDataSources(useDataSourcesWithSameMainDs[i], allUseDataSources);
        haveSameUseDataSources = (parentWidgetJson === null || parentWidgetJson === void 0 ? void 0 : parentWidgetJson.useDataSources) && parentWidgetJson.useDataSources
            .some(parentU => (realUseDataSource === null || realUseDataSource === void 0 ? void 0 : realUseDataSource.dataSourceId) === parentU.dataSourceId);
        if (haveSameUseDataSources) {
            break;
        }
    }
    return isInRepeatedDataSourceContext && haveSameUseDataSources;
}
function getRealUseDataSources(tempSelectUseDs, allUseDataSources) {
    if (!tempSelectUseDs) {
        return null;
    }
    if (tempSelectUseDs.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.REPEAT_CONTEXT_DATA_VIEW_ID) {
        const useDsHasSameMainDsAsSelectedUseDs = allUseDataSources.find(u => u.mainDataSourceId === tempSelectUseDs.mainDataSourceId);
        return useDsHasSameMainDsAsSelectedUseDs && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDsHasSameMainDsAsSelectedUseDs);
    }
    else {
        return tempSelectUseDs;
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/index.ts":
/*!*********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/index.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAutoAddedDataViews: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.addAutoAddedDataViews),
/* harmony export */   addCharactersToParts: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.addCharactersToParts),
/* harmony export */   applyEditResultToParts: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.applyEditResultToParts),
/* harmony export */   areFunctionParts: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.areFunctionParts),
/* harmony export */   createRange: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.createRange),
/* harmony export */   getAddedPartIndexes: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getAddedPartIndexes),
/* harmony export */   getEndPartIndexOfRangeSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getEndPartIndexOfRangeSelection),
/* harmony export */   getExpSelectionAndEitablePart: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getExpSelectionAndEitablePart),
/* harmony export */   getExpressionPart: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.getExpressionPart),
/* harmony export */   getExps: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.getExps),
/* harmony export */   getIndexByPartId: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getIndexByPartId),
/* harmony export */   getInernalId: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getInernalId),
/* harmony export */   getJimuFieldNameFromAlias: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getJimuFieldNameFromAlias),
/* harmony export */   getNewCharacterFromExpressionString: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getNewCharacterFromExpressionString),
/* harmony export */   getNextNodeOfSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getNextNodeOfSelection),
/* harmony export */   getNodeByPartId: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getNodeByPartId),
/* harmony export */   getPartIdByChildNode: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getPartIdByChildNode),
/* harmony export */   getPartIdByIndex: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getPartIdByIndex),
/* harmony export */   getPartIdOfSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdOfSelection),
/* harmony export */   getPopoverItems: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.getPopoverItems),
/* harmony export */   getPopoverTarget: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.getPopoverTarget),
/* harmony export */   getPreviousNodeOfSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getPreviousNodeOfSelection),
/* harmony export */   getRealUseDataSources: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getRealUseDataSources),
/* harmony export */   getRemovedPartIndexes: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getRemovedPartIndexes),
/* harmony export */   getSelectionPosInnerPart: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectionPosInnerPart),
/* harmony export */   getSelectionRange: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectionRange),
/* harmony export */   getSiblingOfExpSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getSiblingOfExpSelection),
/* harmony export */   getSortedKeys: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getSortedKeys),
/* harmony export */   getStartPartIndexOfRangeSelection: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getStartPartIndexOfRangeSelection),
/* harmony export */   getWhetherIsPartId: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getWhetherIsPartId),
/* harmony export */   getWhetherNodeAfterRange: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherNodeAfterRange),
/* harmony export */   getWhetherNodeBeforeRange: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherNodeBeforeRange),
/* harmony export */   getWhetherNodeIsParentOfParts: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.getWhetherNodeIsParentOfParts),
/* harmony export */   getWhetherPartNeedPopover: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.getWhetherPartNeedPopover),
/* harmony export */   handleFieldExps: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.handleFieldExps),
/* harmony export */   handleOperatoExps: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.handleOperatoExps),
/* harmony export */   handleStringExps: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.handleStringExps),
/* harmony export */   isCharDoubleQuotationMarker: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isCharDoubleQuotationMarker),
/* harmony export */   isCharFrontCurlyBracket: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isCharFrontCurlyBracket),
/* harmony export */   isCharPostCurlyBracket: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isCharPostCurlyBracket),
/* harmony export */   isCharacterUnmergeable: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isCharacterUnmergeable),
/* harmony export */   isField: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isField),
/* harmony export */   isFunction: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   isNumber: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   isNumberVariable: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isNumberVariable),
/* harmony export */   isOperator: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isOperator),
/* harmony export */   isPartUnmergeable: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isPartUnmergeable),
/* harmony export */   isString: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   moveSelectionByCharacter: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.moveSelectionByCharacter),
/* harmony export */   moveSelectionByPart: () => (/* reexport safe */ _selection_utils__WEBPACK_IMPORTED_MODULE_1__.moveSelectionByPart),
/* harmony export */   removeCharactersFromOnePart: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.removeCharactersFromOnePart),
/* harmony export */   removeParts: () => (/* reexport safe */ _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__.removeParts),
/* harmony export */   triggerInputEvent: () => (/* reexport safe */ _basic_utils__WEBPACK_IMPORTED_MODULE_0__.triggerInputEvent)
/* harmony export */ });
/* harmony import */ var _basic_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/basic-utils.ts");
/* harmony import */ var _selection_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/selection-utils.ts");
/* harmony import */ var _add_remove_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-remove-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/add-remove-utils.ts");





/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/selection-utils.ts":
/*!*******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/selection-utils.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRange: () => (/* binding */ createRange),
/* harmony export */   getEndPartIndexOfRangeSelection: () => (/* binding */ getEndPartIndexOfRangeSelection),
/* harmony export */   getExpSelectionAndEitablePart: () => (/* binding */ getExpSelectionAndEitablePart),
/* harmony export */   getNextNodeOfSelection: () => (/* binding */ getNextNodeOfSelection),
/* harmony export */   getPartIdOfSelection: () => (/* binding */ getPartIdOfSelection),
/* harmony export */   getPreviousNodeOfSelection: () => (/* binding */ getPreviousNodeOfSelection),
/* harmony export */   getSelectionPosInnerPart: () => (/* binding */ getSelectionPosInnerPart),
/* harmony export */   getSelectionRange: () => (/* binding */ getSelectionRange),
/* harmony export */   getSiblingOfExpSelection: () => (/* binding */ getSiblingOfExpSelection),
/* harmony export */   getStartPartIndexOfRangeSelection: () => (/* binding */ getStartPartIndexOfRangeSelection),
/* harmony export */   getWhetherNodeAfterRange: () => (/* binding */ getWhetherNodeAfterRange),
/* harmony export */   getWhetherNodeBeforeRange: () => (/* binding */ getWhetherNodeBeforeRange),
/* harmony export */   moveSelectionByCharacter: () => (/* binding */ moveSelectionByCharacter),
/* harmony export */   moveSelectionByPart: () => (/* binding */ moveSelectionByPart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _basic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-utils */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/utils/basic-utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/types.ts");



function getWhetherNodeAfterRange(range, node) {
    if (!range || !range.collapsed || !node) {
        return;
    }
    let nodeRange;
    const r = range;
    if (r.compareBoundaryPoints && document && document.createRange) {
        nodeRange = document.createRange();
        nodeRange.selectNodeContents(node);
        nodeRange.collapse(true);
        return r.compareBoundaryPoints(r.START_TO_END, nodeRange) < 1;
    }
    return false;
}
function getWhetherNodeBeforeRange(range, node) {
    if (!range || !range.collapsed || !node) {
        return;
    }
    let nodeRange;
    const r = range;
    if (r.compareBoundaryPoints && document && document.createRange) {
        nodeRange = document.createRange();
        nodeRange.selectNodeContents(node);
        nodeRange.collapse(false);
        return r.compareBoundaryPoints(r.START_TO_END, nodeRange) > -1;
    }
    return false;
}
function moveSelectionByPart(partId, toStart, container) {
    const node = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getNodeByPartId)(partId, container);
    if (!node) {
        container && container.focus();
        return;
    }
    if (window.getSelection && document && document.createRange) { // TODO: other browsers
        const r = document.createRange();
        if (node) {
            r.selectNode(node);
            r.collapse(toStart);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(r);
        }
    }
}
function moveSelectionByCharacter(partId, startOffset, container) {
    const node = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getNodeByPartId)(partId, container);
    if (!node) {
        return;
    }
    if (startOffset >= 0 && window.getSelection) {
        const range = createRange(node, { count: startOffset });
        if (range) {
            range.collapse(false);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    }
}
function createRange(node, chars, range) {
    if (!document || !document.createRange) {
        return null;
    }
    if (!range) {
        range = document.createRange();
        range.selectNodeContents(node);
        range.setStart(node, 0);
    }
    if (chars.count === 0) {
        range.setEnd(node, chars.count);
    }
    else if (node && chars.count > 0) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
            }
            else {
                range.setEnd(node, chars.count);
                chars.count = 0;
            }
        }
        else {
            for (let lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);
                if (chars.count === 0) {
                    break;
                }
            }
        }
    }
    return range;
}
function getSelectionRange() {
    let range = null;
    if (window.getSelection && window.getSelection().getRangeAt) { // TODO: other browsers
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            range = selection.getRangeAt(0);
        }
    }
    return range;
}
function getSelectionPosInnerPart(externalId, container) {
    const range = getSelectionRange();
    if (!range) {
        return null;
    }
    let innerSelection = null;
    const startContainer = (range.startContainer.nodeType === Node.TEXT_NODE ? range.startContainer.parentElement : range.startContainer);
    const endContainer = (range.endContainer.nodeType === Node.TEXT_NODE ? range.endContainer.parentElement : range.endContainer);
    const isSelectionInPart = startContainer === endContainer && startContainer && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, startContainer.id);
    const partNode = isSelectionInPart ? startContainer : null;
    const partId = isSelectionInPart ? startContainer.id : null;
    if (partNode && partId) {
        innerSelection = {
            partId: partId,
            startOffset: range.startOffset,
            endOffset: range.endOffset,
            contentLength: partNode.textContent.length || 0
        };
    }
    return innerSelection;
}
function getPartIdOfSelection(externalId) {
    const range = getSelectionRange();
    if (range && range.collapsed) {
        if (range.startContainer) {
            const node = range.startContainer;
            return (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByChildNode)(externalId, node);
        }
    }
    return null;
}
function getPreviousNodeOfSelection(externalId) {
    const parentNode = document && document.querySelector(`#${externalId}`);
    const range = getSelectionRange();
    let node;
    let previousNodeOfSelection;
    if (parentNode && range) {
        node = parentNode.lastElementChild;
        while (node) {
            if (getWhetherNodeBeforeRange(range, node) && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, node.id)) {
                previousNodeOfSelection = node;
                break;
            }
            else {
                node = node.previousElementSibling;
            }
        }
    }
    return previousNodeOfSelection;
}
function getNextNodeOfSelection(externalId) {
    const parentNode = document && document.querySelector(`#${externalId}`);
    const range = getSelectionRange();
    let node;
    let nextNodeOfSelection;
    if (parentNode && range) {
        node = parentNode.firstElementChild;
        while (node) {
            if (getWhetherNodeAfterRange(range, node) && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, node.id)) {
                nextNodeOfSelection = node;
                break;
            }
            else {
                node = node.nextElementSibling;
            }
        }
    }
    return nextNodeOfSelection;
}
function getSiblingOfExpSelection(externalId, partId, useNextSibling, isRemoving, parts) {
    const partNode = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getNodeByPartId)(partId, document && document.querySelector(`#${externalId}`));
    let expSiblingId = null;
    let expSelection = null;
    if (!partNode) {
        return null;
    }
    if (!useNextSibling && partNode.nextElementSibling && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, partNode.nextElementSibling.id)) {
        expSiblingId = partNode.nextElementSibling.id;
    }
    else if (useNextSibling && partNode.previousElementSibling && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, partNode.previousElementSibling.id)) {
        expSiblingId = partNode.previousElementSibling.id;
    }
    if (expSiblingId) {
        expSelection = {
            type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
            partId: expSiblingId,
            startOffset: !useNextSibling ? 0 : (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getNodeByPartId)(expSiblingId, document && document.querySelector(`#${externalId}`)).textContent.length
        };
    }
    else {
        expSelection = {
            partId: useNextSibling ? (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(externalId, 0) : (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(externalId, parts && parts.length > 0 ? parts.length - 1 : 0),
            toStart: useNextSibling,
            type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Part
        };
    }
    return expSelection;
}
function getStartPartIndexOfRangeSelection(externalId) {
    const range = getSelectionRange();
    let startPartIndex;
    if (range.collapsed) {
        const previousNodeOfSelection = getPreviousNodeOfSelection(externalId);
        startPartIndex = previousNodeOfSelection && previousNodeOfSelection.id && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, previousNodeOfSelection.id) &&
            (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, previousNodeOfSelection.id);
    }
    else {
        // \ufeff stands for ZERO WIDTH NO-BREAK SPACE
        if (range.startContainer.nodeType === Node.TEXT_NODE &&
            (/^\ufeff$/.test(range.startContainer.textContent) || /^\ufeff$/.test(range.startContainer.parentElement.previousSibling.textContent))) {
            startPartIndex = 0;
        }
        else if (range.startContainer.id === externalId) {
            startPartIndex = range.startOffset - 1;
        }
        else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, range.startContainer.id)) {
            startPartIndex = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, range.startContainer.id) + range.startOffset + 1;
        }
        else {
            console.warn('Can not get start part of selection');
        }
    }
    if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(startPartIndex)) {
        return startPartIndex;
    }
    return null;
}
function getEndPartIndexOfRangeSelection(externalId, parts = []) {
    const range = getSelectionRange();
    let endPartIndex;
    if (range.collapsed) {
        const previousNodeOfSelection = getPreviousNodeOfSelection(externalId);
        endPartIndex = previousNodeOfSelection && previousNodeOfSelection.id && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, previousNodeOfSelection.id) &&
            (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, previousNodeOfSelection.id);
    }
    else {
        // \ufeff stands for ZERO WIDTH NO-BREAK SPACE
        if (range.endContainer.nodeType === Node.TEXT_NODE &&
            (/^\ufeff$/.test(range.endContainer.textContent) || /^\ufeff$/.test(range.startContainer.parentElement.previousSibling.textContent))) {
            endPartIndex = parts.length - 1 > -1 ? parts.length - 1 : 0;
        }
        else if (range.endContainer.id === externalId) {
            endPartIndex = range.endOffset - 2;
        }
        else if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getWhetherIsPartId)(externalId, range.endContainer.id)) {
            endPartIndex = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(externalId, range.endContainer.id) - range.endOffset - 1;
        }
        else {
            console.warn('Can not get end part of selection');
        }
    }
    if ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(endPartIndex)) {
        return endPartIndex;
    }
    return null;
}
/**
 *
 * @param exteranlId expression editor node id
 * @param isInEditablePart whether is in an editable part
 * @param editResult add or remove result
 * @param parts new parts after add or remove
 * @param innerSelection selection position inner one part
 * @param moveCharacterNumber removed character number after remmove
 */
function getExpSelectionAndEitablePart(exteranlId, isInEditablePart, editResult, parts, innerSelection, moveCharacterNumber) {
    let expSelection = null;
    if (!editResult) {
        return expSelection;
    }
    // find a part which is field or string and doesn't have content
    const noContentStringOrFieldPartIndex = Object.keys(editResult).find(index => editResult[index] && editResult[index].part && ((editResult[index].part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String && editResult[index].part.exp === '""') ||
        (editResult[index].part.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field && editResult[index].part.exp === '{}')));
    const noContentStringOrFieldPart = noContentStringOrFieldPartIndex && editResult[noContentStringOrFieldPartIndex] && editResult[noContentStringOrFieldPartIndex].part;
    if (noContentStringOrFieldPart) { // edit result contain a special part
        expSelection = {
            partId: (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, parseInt(noContentStringOrFieldPartIndex)),
            type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
            startOffset: 1
        };
    }
    else { // edit result doesen't contain any special parts
        const addedNewPartIndexes = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getAddedPartIndexes)(editResult);
        const removedPartIndexes = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getRemovedPartIndexes)(editResult);
        const areNewPartsAdded = addedNewPartIndexes.length > 0; // whether new parts are added to expression
        const arePartsRemoved = removedPartIndexes.length > 0; // whether parts are removed from expression
        if (arePartsRemoved) {
            const firstRemovedPartIndex = Math.min.apply(null, removedPartIndexes);
            const prevPartIndex = firstRemovedPartIndex - 1; // previous part of the first removed part
            const prevPart = parts[prevPartIndex];
            if (isInEditablePart) {
                if (prevPart) {
                    if (removedPartIndexes.length === Object.keys(editResult).length) { // only remove some parts
                        expSelection = {
                            partId: (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, prevPartIndex),
                            type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
                            startOffset: (prevPart.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String || prevPart.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field) ? prevPart.exp.length - 1 : prevPart.exp.length
                        };
                    }
                    else { // remove some parts and merge some parts
                        expSelection = getExpSelectionAfterSomePartsMerged(exteranlId, parts, editResult);
                    }
                }
                else {
                    const partIndexSelectionShouldBehind = prevPartIndex > -1 ? prevPartIndex : 0;
                    expSelection = {
                        partId: (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, partIndexSelectionShouldBehind),
                        type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Part,
                        toStart: true
                    };
                }
            }
            else { // no parts are editable
                if (removedPartIndexes.length === Object.keys(editResult).length) { // only remove some parts
                    const partIndexSelectionShouldBehind = prevPartIndex > -1 ? prevPartIndex : 0;
                    const toStart = !(prevPartIndex > -1);
                    expSelection = {
                        partId: (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, partIndexSelectionShouldBehind),
                        type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Part,
                        toStart
                    };
                }
                else { // remove some parts and merge some parts
                    expSelection = getExpSelectionAfterSomePartsMerged(exteranlId, parts, editResult);
                }
            }
        }
        else if (areNewPartsAdded) {
            if (addedNewPartIndexes.length === Object.keys(editResult).length) { // only add some parts
                const lastAddedPartIndex = Math.max.apply(null, addedNewPartIndexes);
                const lastAddedPartId = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, lastAddedPartIndex);
                const lastAddedPart = editResult[lastAddedPartIndex] && editResult[lastAddedPartIndex].part;
                expSelection = {
                    partId: lastAddedPartId,
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
                    startOffset: lastAddedPart && lastAddedPart.exp && lastAddedPart.exp.length
                };
            }
            else { // add some parts and merge some parts
                expSelection = getExpSelectionAfterSomePartsMerged(exteranlId, parts, editResult);
            }
        }
        else { // only some parts are modified
            const mergedPartIndex = getMergedPartIndex(exteranlId, editResult);
            const editResultPartIndex = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(mergedPartIndex) ? mergedPartIndex : parseInt(Object.keys(editResult)[0]);
            const editResultPartId = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(editResultPartIndex) && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, editResultPartIndex);
            if (isInEditablePart) {
                const selectionPartId = innerSelection && innerSelection.partId;
                // is selection part edited, in some condition selection part is not the edited part
                // e.g., [123, 'abc'] and selection is in the start of part 'abc' -> add number 5 -> [1235, 'abc'] and selection is in part 1235
                // selection part is not edited
                const isSelectionPartEdited = editResultPartId === selectionPartId;
                const leftCharNumber = innerSelection.endOffset - ((0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(moveCharacterNumber) ? moveCharacterNumber : 0);
                const editablePart = parts[(0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getIndexByPartId)(exteranlId, selectionPartId)];
                const editablePartExpLength = editablePart && editablePart.exp ? editablePart.exp.length : -1;
                expSelection = {
                    partId: editResultPartId,
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
                    startOffset: isSelectionPartEdited && leftCharNumber >= 0 && leftCharNumber <= editablePartExpLength
                        ? leftCharNumber
                        : editResult[editResultPartIndex] && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(editResult[editResultPartIndex].startOffset) ? editResult[editResultPartIndex].startOffset : 0
                };
            }
            else { // not in editable part, which means selection is between two parts
                expSelection = {
                    partId: editResultPartId,
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
                    startOffset: editResult[editResultPartIndex].startOffset
                };
            }
        }
    }
    return expSelection;
}
function getExpSelectionAfterSomePartsMerged(exteranlId, parts, editResult) {
    const mergedPartIndex = getMergedPartIndex(exteranlId, editResult);
    const doesMergedPartExist = (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(mergedPartIndex);
    const editablePartIndex = doesMergedPartExist ? mergedPartIndex : parts.length - 1;
    const startOffset = doesMergedPartExist ? editResult[mergedPartIndex].startOffset : 0;
    const expSelection = {
        partId: (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.getPartIdByIndex)(exteranlId, editablePartIndex),
        type: _types__WEBPACK_IMPORTED_MODULE_2__.ExpSelectionType.Char,
        startOffset
    };
    return expSelection;
}
function getMergedPartIndex(exteranlId, editResult) {
    const index = Object.keys(editResult).find(index => editResult[index].part && (0,_basic_utils__WEBPACK_IMPORTED_MODULE_1__.isNumberVariable)(editResult[index].startOffset));
    return parseInt(index);
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/components/expression-input/index.tsx":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/components/expression-input/index.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./jimu-ui/advanced/lib/expression-builder/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./jimu-ui/advanced/lib/expression-builder/types.ts");
/* harmony import */ var _expression_builder_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expression-builder-popup */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder-popup/index.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_svg_outlined_data_text_page_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/svg/outlined/data/text-page.svg */ "./jimu-icons/svg/outlined/data/text-page.svg");
/* harmony import */ var jimu_icons_svg_outlined_data_text_page_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_data_text_page_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jimu_icons_svg_outlined_editor_sum_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-icons/svg/outlined/editor/sum.svg */ "./jimu-icons/svg/outlined/editor/sum.svg");
/* harmony import */ var jimu_icons_svg_outlined_editor_sum_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_editor_sum_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jimu_icons_svg_outlined_data_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jimu-icons/svg/outlined/data/code.svg */ "./jimu-icons/svg/outlined/data/code.svg");
/* harmony import */ var jimu_icons_svg_outlined_data_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_data_code_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jimu_icons_svg_outlined_data_braces_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-icons/svg/outlined/data/braces.svg */ "./jimu-icons/svg/outlined/data/braces.svg");
/* harmony import */ var jimu_icons_svg_outlined_data_braces_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_data_braces_svg__WEBPACK_IMPORTED_MODULE_9__);
/** @jsx jsx */










class _ExpressionInput extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.expBuilderTrigger = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.dropdownButton = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.toggleDropdown = () => { this.setState({ isDropdownOpen: !this.state.isDropdownOpen }); };
        this.getExpFromIcon = (from) => {
            switch (from) {
                case _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static:
                    return (jimu_icons_svg_outlined_data_text_page_svg__WEBPACK_IMPORTED_MODULE_6___default());
                case _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Attribute:
                    return (jimu_icons_svg_outlined_data_braces_svg__WEBPACK_IMPORTED_MODULE_9___default());
                case _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Statistics:
                    return (jimu_icons_svg_outlined_editor_sum_svg__WEBPACK_IMPORTED_MODULE_7___default());
                case _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression:
                    return (jimu_icons_svg_outlined_data_code_svg__WEBPACK_IMPORTED_MODULE_8___default());
                default:
                    return null;
            }
        };
        this.getSelectedExpFromExpression = () => {
            var _a;
            if ((_a = this.props.expression) === null || _a === void 0 ? void 0 : _a.numberFormat) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0];
            }
            if (!this.props.expression || !this.props.expression.parts || this.props.expression.parts.length === 0) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static)
                    ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Attribute)
                        ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Attribute
                        : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Statistics)
                            ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Statistics
                            : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0])));
            }
            const groupedParts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.groupExpressionPartsByFunction)(this.props.expression.parts);
            if (groupedParts.length === 1 && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Field) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Attribute)
                    ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Attribute
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0]);
            }
            if (groupedParts.length === 1 && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.Function) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Statistics)
                    ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Statistics
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0]);
            }
            if (groupedParts.length === 1 && groupedParts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String) {
                return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static)
                    ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static
                    : (this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0]);
            }
            return this.props.types.some(f => f === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) ? _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression : this.props.types[0];
        };
        this.getWhetherFromExpBuilder = (expFrom) => {
            return expFrom && Object.keys(_types__WEBPACK_IMPORTED_MODULE_3__.ExpressionBuilderType).some(f => _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionBuilderType[f] === expFrom);
        };
        this.getExpressionFrom = () => {
            if (this.getWhetherFromExpBuilder(this.state.selectedExpFrom)) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([this.state.selectedExpFrom]);
            }
            else {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            }
        };
        this.getStringFromExpression = () => {
            if (!this.props.expression) {
                return '';
            }
            if (this.props.expression.parts.length === 1 && this.props.expression.parts[0].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String) {
                return this.props.expression.parts[0].exp.replace(/^"/, '').replace(/"$/, '');
            }
            return '';
        };
        this.onInputBlur = e => {
            const value = e.target.value;
            const expression = {
                name: value,
                parts: [{
                        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
                        exp: `"${value}"`
                    }]
            };
            this.props.onChange && this.props.onChange(expression);
        };
        this.onInputChange = e => {
            this.setState({ inputValue: e.target.value });
        };
        this.onExpChange = (expression) => {
            this.props.onChange && this.props.onChange(expression);
        };
        this.onExpFromChange = (value) => {
            if (value !== this.state.selectedExpFrom) {
                if (value !== _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Expression) {
                    // Other types of expression can not convert to each other, reset expression.
                    this.onExpChange({ name: '', parts: [] });
                }
                this.setState({ selectedExpFrom: value }, () => {
                    // Static doesn't need expression builder popup.
                    if (value === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static) {
                        this.props.closeExpPopup();
                    }
                    else {
                        this.props.openExpPopup();
                    }
                });
            }
            else {
                this.toggleExpPopup();
            }
        };
        this.getWhetherExpDssMatchInUseDss = (expression) => {
            const parts = expression && expression.parts;
            if (parts) {
                return parts.every(p => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getWhetherUseDssMatchExpDss)(p, this.props.useDataSources));
            }
            return false;
        };
        this.toggleExpPopup = () => {
            if (this.getWhetherFromExpBuilder(this.state.selectedExpFrom)) {
                if (this.props.isExpPopupOpen) {
                    this.props.closeExpPopup();
                }
                else {
                    this.props.openExpPopup();
                }
            }
            else {
                this.props.closeExpPopup();
            }
        };
        this.state = {
            selectedExpFrom: this.getSelectedExpFromExpression(),
            isDropdownOpen: false,
            inputValue: this.getStringFromExpression()
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedExpFrom === _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static && this.state.selectedExpFrom !== _types__WEBPACK_IMPORTED_MODULE_3__.ExpressionInputType.Static) {
            this.setState({ inputValue: '' });
        }
    }
    render() {
        const isFromExpBuilder = this.getWhetherFromExpBuilder(this.state.selectedExpFrom);
        const inputValue = isFromExpBuilder ? (this.props.expression && this.props.expression.name) || '' : this.state.inputValue;
        const isExpressionValid = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getWhetherExpressionValid(this.props.expression);
        const doExpressionDssMatchInUseDss = this.getWhetherExpDssMatchInUseDss(this.props.expression);
        const isExpressionError = !isExpressionValid || !doExpressionDssMatchInUseDss;
        const { placeHolders = {}, autoHide } = this.props;
        const { selectedExpFrom } = this.state;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: this.props.style, ref: this.expBuilderTrigger, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [this.props.className]: !!this.props.className }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-start align-items-center component-expression-input' },
                !(autoHide && (this.props.types || []).length <= 1) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'expression-builder-trigger' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { isOpen: this.state.isDropdownOpen, toggle: this.toggleDropdown, className: 'w-100 h-100 expression-builder-trigger-dropdown' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { arrow: false, dot: true, icon: true, ref: this.dropdownButton, title: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getExpressionFromString)(this.state.selectedExpFrom, this.props.intl), className: 'text-truncate d-flex justify-content-center align-items-center trigger-dropdown-toggle p-0 jimu-outline-inside' }, selectedExpFrom &&
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: this.getExpFromIcon(selectedExpFrom), className: 'm-0 p-0' })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { appendToBody: false, strategy: 'fixed' }, this.props.types.map((f, i) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { onClick: e => { this.onExpFromChange(f); }, key: i, className: 'text-dark', a11yFocusBack: false },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: this.getExpFromIcon(f), className: 'mr-2' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getExpressionFromString)(f, this.props.intl))))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 expression-input' }, !isExpressionError || !isFromExpBuilder
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', onClick: isFromExpBuilder ? this.toggleExpPopup : undefined },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { 'ds-disabled': isFromExpBuilder }), value: inputValue, disabled: isFromExpBuilder, onChange: this.onInputChange, onBlur: this.onInputBlur, title: inputValue, placeholder: placeHolders[selectedExpFrom], "aria-label": this.props['aria-label'] }),
                            isFromExpBuilder && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ds-disabled disabled-input-cover' })))
                    : (inputValue
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 text-truncate ds-disabled d-flex align-items-center', onClick: this.toggleExpPopup },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'error-wrapper', title: inputValue }, inputValue))
                        : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 text-truncate ds-disabled ds-placeholder d-flex align-items-center', onClick: this.toggleExpPopup },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'error-wrapper', title: placeHolders[selectedExpFrom] }, placeHolders[selectedExpFrom]))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_expression_builder_popup__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.props, { onChange: this.onExpChange, types: this.getExpressionFrom(), isOpen: this.props.isExpPopupOpen, onClose: this.props.closeExpPopup, trigger: this.expBuilderTrigger.current, backToFocusNode: this.dropdownButton.current }))));
    }
}
const ExpressionInput = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)(_ExpressionInput, 'ExpressionInput'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpressionInput);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/index.tsx":
/*!***********************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionBuilder: () => (/* reexport safe */ _components_expression_builder__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ExpressionBuilderPopup: () => (/* reexport safe */ _components_expression_builder_popup__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ExpressionBuilderType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ExpressionBuilderType),
/* harmony export */   ExpressionEditor: () => (/* reexport safe */ _components_expression_editor__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ExpressionInput: () => (/* reexport safe */ _components_expression_input__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ExpressionInputType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ExpressionInputType),
/* harmony export */   _ExpressionBuilder: () => (/* reexport safe */ _components_expression_builder__WEBPACK_IMPORTED_MODULE_1__._ExpressionBuilder),
/* harmony export */   _ExpressionBuilderPopup: () => (/* reexport safe */ _components_expression_builder_popup__WEBPACK_IMPORTED_MODULE_2__._ExpressionBuilderPopup)
/* harmony export */ });
/* harmony import */ var _components_expression_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/expression-editor */ "./jimu-ui/advanced/lib/expression-builder/components/expression-editor/index.tsx");
/* harmony import */ var _components_expression_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/expression-builder */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder/index.tsx");
/* harmony import */ var _components_expression_builder_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/expression-builder-popup */ "./jimu-ui/advanced/lib/expression-builder/components/expression-builder-popup/index.tsx");
/* harmony import */ var _components_expression_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/expression-input */ "./jimu-ui/advanced/lib/expression-builder/components/expression-input/index.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./jimu-ui/advanced/lib/expression-builder/types.ts");








/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-builder.ts":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/styles/components/expression-builder.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expressionBuilderStyles: () => (/* binding */ expressionBuilderStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function expressionBuilderStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-expression-builder{
      .w-33{
        width: 33% !important;
      }
      .w-85{
        width: 85%;
      }
      .fixed-at-bottom{
        width: 100%;
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(64)};
        border-top: 1px solid ${theme.colors.palette.light[800]};
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: ${theme.colors.palette.light[300]};
      }
      .number-format-setting{
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(240)};
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
        .number-format-switch-label{
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
          font-weight: 600;
          color: ${theme.colors.palette.dark[800]};
        }
        .number-format-checkbox-label{
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
          color: ${theme.colors.palette.dark[800]};
        }
        .number-format-numeric-input-label{
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
          color: ${theme.colors.palette.dark[400]};
        }
      }
      .expression-builder-tab{
        padding-top: 1rem;
        padding-bottom: 1rem;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      .has-nav .expression-builder-tab{
        height: calc(100% - 30px);
      }
      .common-tab{
        .option-label{
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
          font-weight: 500;
          color: ${theme.colors.palette.dark[400]};
        }
        .data-option{
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }
      .field-selector-container{
        height: 100%;
      }
      .expression-editor-container{
        height: calc(100% - 95px);
      }
      .expression-editor-helper{
        height: calc(100% - 130px);
        .tab-content{
          margin: 0 -1rem;
        }
      }
      .exp-editor-helper-tab{
        height: calc(100% - 20px);
      }
      .field-selector-container, .expression-editor-container{
        width: 100%;
      }
      .expression-insert-btn{
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(180)};
      }
      .stat-inter-btn{
        max-width: 100%;
      }
    }

  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-editor.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/styles/components/expression-editor.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expressionEditorStyles: () => (/* binding */ expressionEditorStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function expressionEditorStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-expression-editor{
      .mt-18{
        margin-top: 18px;
      }
      .jimu-nav.nav.nav-pills.nav-fill{
        border-top: 0;
        border-left: 0;
        border-right: 0;
      }
      .expression-editor-input{
        -webkit-user-select: text !important;
        user-select: text !important;
        font-size: 13px;
        font-weight: 400;
        overflow-x: hidden;
        overflow-y: auto;
        min-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(48)};
        max-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(100)};
        user-select: none;
        border: 0;
        outline: none;
        background-color: ${theme.colors.palette.light[200]};
        padding: 1px;
        .expression-editor-input-content-editable:focus{
          border-color: ${theme.colors.palette.primary[700]};
          outline: none;
        }
        .expression-editor-input-content-editable{
          border: 1px solid ${theme.colors.palette.light[200]};
          min-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(48)};
          max-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(100)};
          border-radius: 2px;
          outline: none;
        }
        p{
          min-height: 100%;
        }
        .break-all{
          word-break: break-all;
        }
        span.error-exp{
          color: ${theme.colors.palette.danger[700]};
        }
        .field-exp{
          color: ${theme.colors.palette.warning[700]};
        }
        .function-exp{
          color: ${theme.colors.palette.primary[700]};
        }
        .number-exp{
          color: ${theme.colors.palette.info[600]};
        }
        .string-exp{
          color: ${theme.colors.palette.success[700]};
        }
        .operator-exp{
          color: ${theme.colors.palette.dark[700]};
        }
        .unknown-exp{
          color: ${theme.colors.palette.danger[700]};
        }
        .ds-disabled-exp{
          color: ${theme.colors.palette.danger[700]};
        }
      }

      .error-border{
        border: 1px solid #FF5066;
        outline: none;
        .expression-editor-input-content-editable{
          outline: none;
          border: 0;
        }
      }

      .expression-editor-function-item{
        border: 1px solid transparent;
        cursor: pointer;
        background-color: ${theme.colors.palette.light[400]};
        user-select: none;
      }
      .expression-editor-function-item-selected{
        border: 1px solid ${theme.colors.primary};
      }
      .expression-editor-function-item:hover{
        background-color: ${theme.colors.palette.light[500]};
      }
      .expression-editor-function-item:active.expression-editor-function-item:hover{
        background-color: ${theme.colors.white};
      }

      .exp-editor-helper{
        user-select: none;
      }
      .with-error-message .exp-editor-helper .component-field-selector .field-list{
        height: calc(100% - 185px);
      }
      .exp-editor-helper-tab{
        margin-left: -16px;
        margin-right: -16px;
      }

      .error-message{
        height: 20px;
        line-height: 20px;
      }

      .exp-poper{
        background-color: ${theme.colors.palette.light[200]};
        border: 1px solid ${theme.colors.palette.light[800]};
        font-size: 13px;
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(200)};
        z-index: 1;
        padding: 0 !important;
        box-shadow: 0 0 8px 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.white, 0.5)};
        .exp-popper-item{
          padding-left: 8px;
          padding-right: 8px;
        }
        .jimu-popper--arrow::after {
          border-bottom-color: ${theme.colors.palette.light[200]} !important;
        }
      }
      .exp-popper-selected-item, .exp-popper-item:hover{
        background-color: ${theme.colors.secondary};
        cursor: pointer;
      }

    }

  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-input.ts":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/styles/components/expression-input.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expressionInputStyles: () => (/* binding */ expressionInputStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function expressionInputStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-expression-input{
      font-size: ${theme.typography.fontSizeBase};
      .input-wrapper{
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(26)};
        padding-top: 0;
        padding-bottom: 0;
      }
      .disabled-input-cover{
        width: 100%;
        height: 100%;
        position: relative;
        top: -100%;
        &.ds-disabled{
          background-color: transparent;
        }
      }
      .ds-disabled{
        background-color: ${theme.colors.palette.light[200]};
        cursor: pointer;
        border: 0;
        >span.error-wrapper{
          color: ${theme.colors.dark};
          background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.palette.danger[600], 0.5)};
          vertical-align: sub;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      .ds-placeholder{
        >span{
          color: ${theme.colors.palette.dark[400]};
          background-color: ${theme.colors.transparent};
        }
      }
      .expression-builder-trigger{
        cursor: pointer;
        width: 26px;
        height: 26px;
        padding: 0;
        .dropdown-button-content{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expression-builder-trigger-dropdown{
          padding: 0;
          .trigger-dropdown-toggle{
            background: ${theme.colors.palette.light[600]};
            border-radius: 2px 0 0 2px;
            border-color: ${theme.colors.palette.light[600]};
          }
        }
      }
      .expression-input{
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(26)};
        .jimu-input, .ds-placeholder{
          border-radius: 0 2px 2px 0;
        }
      }
    }

  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/styles/index.ts":
/*!*****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/styles/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionBuilder: () => (/* reexport safe */ _components_expression_builder__WEBPACK_IMPORTED_MODULE_0__.expressionBuilderStyles),
/* harmony export */   ExpressionEditor: () => (/* reexport safe */ _components_expression_editor__WEBPACK_IMPORTED_MODULE_1__.expressionEditorStyles),
/* harmony export */   ExpressionInput: () => (/* reexport safe */ _components_expression_input__WEBPACK_IMPORTED_MODULE_2__.expressionInputStyles)
/* harmony export */ });
/* harmony import */ var _components_expression_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/expression-builder */ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-builder.ts");
/* harmony import */ var _components_expression_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/expression-editor */ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-editor.ts");
/* harmony import */ var _components_expression_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/expression-input */ "./jimu-ui/advanced/lib/expression-builder/styles/components/expression-input.ts");





/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/types.ts":
/*!**********************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionBuilderType: () => (/* binding */ ExpressionBuilderType),
/* harmony export */   ExpressionInputType: () => (/* binding */ ExpressionInputType)
/* harmony export */ });
var ExpressionBuilderType;
(function (ExpressionBuilderType) {
    ExpressionBuilderType["Attribute"] = "ATTRIBUTE";
    ExpressionBuilderType["Statistics"] = "STATISTICS";
    ExpressionBuilderType["Expression"] = "EXPRESSION";
})(ExpressionBuilderType || (ExpressionBuilderType = {}));
var FromStatic;
(function (FromStatic) {
    FromStatic["Static"] = "STATIC";
})(FromStatic || (FromStatic = {}));
const ExpressionInputType = Object.assign(Object.assign({}, FromStatic), ExpressionBuilderType);


/***/ }),

/***/ "./jimu-ui/advanced/lib/expression-builder/utils.ts":
/*!**********************************************************!*\
  !*** ./jimu-ui/advanced/lib/expression-builder/utils.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExpressionFromString: () => (/* binding */ getExpressionFromString),
/* harmony export */   getWhetherUseDssMatchExpDss: () => (/* binding */ getWhetherUseDssMatchExpDss)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./jimu-ui/advanced/lib/expression-builder/types.ts");



function getWhetherUseDssMatchExpDss(part, useDataSources) {
    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    if (part && part.dataSourceId && useDataSources) {
        const isSelectionDataView = part.dataSourceId.split('-').reverse()[0] === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID;
        if (isSelectionDataView) {
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(part.dataSourceId);
            const mainDs = ds && ds.getMainDataSource();
            const mainDataSourceId = mainDs && mainDs.id;
            return useDataSources.some(u => (u === null || u === void 0 ? void 0 : u.mainDataSourceId) === mainDataSourceId);
        }
        return !!(useDataSources.some(u => (u === null || u === void 0 ? void 0 : u.dataSourceId) === part.dataSourceId) && dsManager && dsManager.getDataSource(part.dataSourceId));
    }
    return true;
}
function getExpressionFromString(from, intl) {
    if (!from) {
        return '';
    }
    switch (from) {
        case _types__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Attribute:
            return intl.formatMessage({ id: 'attribute', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.attribute });
        case _types__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Statistics:
            return intl.formatMessage({ id: 'statistics', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.statistics });
        case _types__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Expression:
            return intl.formatMessage({ id: 'expression', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.expression });
        case _types__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Static:
            return intl.formatMessage({ id: 'static', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.static });
        default:
            return '';
    }
}


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

/***/ "react-dom/server":
/*!*********************************************!*\
  !*** external "jimu-core/react-dom/server" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

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
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/expression-builder.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionBuilder: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionBuilder),
/* harmony export */   ExpressionBuilderPopup: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionBuilderPopup),
/* harmony export */   ExpressionBuilderType: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionBuilderType),
/* harmony export */   ExpressionEditor: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionEditor),
/* harmony export */   ExpressionInput: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInput),
/* harmony export */   ExpressionInputType: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType),
/* harmony export */   _ExpressionBuilder: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__._ExpressionBuilder),
/* harmony export */   _ExpressionBuilderPopup: () => (/* reexport safe */ _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__._ExpressionBuilderPopup)
/* harmony export */ });
/* harmony import */ var _lib_expression_builder_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/expression-builder/styles */ "./jimu-ui/advanced/lib/expression-builder/styles/index.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_expression_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/expression-builder */ "./jimu-ui/advanced/lib/expression-builder/index.tsx");


(0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.registerStyles)('jimu-ui/advanced/expression-builder/', _lib_expression_builder_styles__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9leHByZXNzaW9uLWJ1aWxkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhOztBQUViOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsVUFBVTtBQUMvQjs7QUFFQSxxQkFBcUIsVUFBVTtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBLElBQUksSUFBcUM7QUFDekMsNkJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RSxZQUFZLEVBQUUsY0FBYyxFQUFFLG9EQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0YsS0FBSyx1REFBbUIsQ0FBQyxVQUFVO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG9EQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0YsS0FBSyx1REFBbUIsQ0FBQyxNQUFNO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLG9EQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckY7WUFDRSxPQUFPLEVBQUU7SUFDYixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkNEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055RDtBQUNkO0FBQzNDLDBEQUFjLENBQUMsc0NBQXNDLEVBQUUsMkRBQU0sQ0FBQztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvaGFzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29udGVudGVkaXRhYmxlL2xpYi9yZWFjdC1jb250ZW50ZWRpdGFibGUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RhdGEvYnJhY2VzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGF0YS9jb2RlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGF0YS90ZXh0LXBhZ2Uuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3Ivc3VtLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1idWlsZGVyLXBvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvYXR0cmlidXRlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL3N0YXRpc3RpY3MudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWJ1aWxkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci9jb21wb25lbnRzL2V4cC1iYXNlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvY29tcG9uZW50cy9leHAtZWRpdG9yLWhlbHBlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL2V4cHJlc3Npb24tZWRpdG9yL2NvbXBvbmVudHMvZXhwLXBvcG92ZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci9jb21wb25lbnRzL2ZpZWxkLWV4cC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL2V4cHJlc3Npb24tZWRpdG9yL2NvbXBvbmVudHMvZnVuY3Rpb24tZXhwLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvY29tcG9uZW50cy9udW1iZXItZXhwLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvY29tcG9uZW50cy9vcGVyYXRvci1leHAudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci9jb21wb25lbnRzL3N0cmluZy1leHAudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci9jb21wb25lbnRzL3Vua25vd24tZXhwLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci90eXBlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvdXRpbHMvYWRkLXJlbW92ZS11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZXhwcmVzc2lvbi1idWlsZGVyL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IvdXRpbHMvYmFzaWMtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL2V4cHJlc3Npb24tZWRpdG9yL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvY29tcG9uZW50cy9leHByZXNzaW9uLWVkaXRvci91dGlscy9zZWxlY3Rpb24tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9jb21wb25lbnRzL2V4cHJlc3Npb24taW5wdXQvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvc3R5bGVzL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1idWlsZGVyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvc3R5bGVzL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci9zdHlsZXMvY29tcG9uZW50cy9leHByZXNzaW9uLWlucHV0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvc3R5bGVzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9leHByZXNzaW9uLWJ1aWxkZXIvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2V4cHJlc3Npb24tYnVpbGRlci91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvZXhwcmVzc2lvbi1idWlsZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IHJlcXVpcmUoJy4vbGliL2hhcycpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7IC8qKi8gfVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArXG4gICAgICAgICAgICAgICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vbGliL2hhcycpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYmlnaW50OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYmlnaW50JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UsIGRhdGEpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnID8gZGF0YToge307XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJyksXG4gICAgICAgICAge2V4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICB2YXIgY2hlY2tlclJlc3VsdCA9IGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChjaGVja2VyUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tlclJlc3VsdC5kYXRhICYmIGhhcyhjaGVja2VyUmVzdWx0LmRhdGEsICdleHBlY3RlZFR5cGUnKSkge1xuICAgICAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChjaGVja2VyUmVzdWx0LmRhdGEuZXhwZWN0ZWRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGV4cGVjdGVkVHlwZXNNZXNzYWdlID0gKGV4cGVjdGVkVHlwZXMubGVuZ3RoID4gMCkgPyAnLCBleHBlY3RlZCBvbmUgb2YgdHlwZSBbJyArIGV4cGVjdGVkVHlwZXMuam9pbignLCAnKSArICddJzogJyc7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgJyArIGV4cGVjdGVkVHlwZXNNZXNzYWdlICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZhbGlkVmFsaWRhdG9yRXJyb3IoY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwga2V5LCB0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXkgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGUgKyAnYC4nXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbGlkYXRvckVycm9yKGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIGtleSwgZ2V0UHJlY2lzZVR5cGUoY2hlY2tlcikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKGhhcyhzaGFwZVR5cGVzLCBrZXkpICYmIHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGludmFsaWRWYWxpZGF0b3JFcnJvcihjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBrZXksIGdldFByZWNpc2VUeXBlKGNoZWNrZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBmYXN0X2RlZXBfZXF1YWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpKTtcbnZhciBQcm9wVHlwZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuZnVuY3Rpb24gbm9ybWFsaXplSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyICYmIHN0ci5yZXBsYWNlKC8mbmJzcDt8XFx1MjAyRnxcXHUwMEEwL2csICcgJykucmVwbGFjZSgvPGJyIFxcLz4vZywgJzxicj4nKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VDYXJldChlbCkge1xuICAgIC8vIFBsYWNlIHRoZSBjYXJldCBhdCB0aGUgZW5kIG9mIHRoZSBlbGVtZW50XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBlbC5hcHBlbmRDaGlsZCh0YXJnZXQpO1xuICAgIC8vIGRvIG5vdCBtb3ZlIGNhcmV0IGlmIGVsZW1lbnQgd2FzIG5vdCBmb2N1c2VkXG4gICAgdmFyIGlzVGFyZ2V0Rm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsO1xuICAgIGlmICh0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0Lm5vZGVWYWx1ZSAhPT0gbnVsbCAmJiBpc1RhcmdldEZvY3VzZWQpIHtcbiAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKHNlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHRhcmdldCwgdGFyZ2V0Lm5vZGVWYWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICB9XG59XG4vKipcbiAqIEEgc2ltcGxlIGNvbXBvbmVudCBmb3IgYW4gaHRtbCBlbGVtZW50IHdpdGggZWRpdGFibGUgY29udGVudHMuXG4gKi9cbnZhciBDb250ZW50RWRpdGFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRlbnRFZGl0YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250ZW50RWRpdGFibGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5sYXN0SHRtbCA9IF90aGlzLnByb3BzLmh0bWw7XG4gICAgICAgIF90aGlzLmVsID0gdHlwZW9mIF90aGlzLnByb3BzLmlubmVyUmVmID09PSAnZnVuY3Rpb24nID8geyBjdXJyZW50OiBudWxsIH0gOiBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgX3RoaXMuZ2V0RWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX3RoaXMucHJvcHMuaW5uZXJSZWYgJiYgdHlwZW9mIF90aGlzLnByb3BzLmlubmVyUmVmICE9PSAnZnVuY3Rpb24nID8gX3RoaXMucHJvcHMuaW5uZXJSZWYgOiBfdGhpcy5lbCkuY3VycmVudDsgfTtcbiAgICAgICAgX3RoaXMuZW1pdENoYW5nZSA9IGZ1bmN0aW9uIChvcmlnaW5hbEV2dCkge1xuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZ2V0RWwoKTtcbiAgICAgICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UgJiYgaHRtbCAhPT0gX3RoaXMubGFzdEh0bWwpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBldmVudCB3aXRoIE9iamVjdC5hc3NpZ24gdG8gYXZvaWRcbiAgICAgICAgICAgICAgICAvLyBcIkNhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5ICd0YXJnZXQnIG9mIG9iamVjdFwiXG4gICAgICAgICAgICAgICAgdmFyIGV2dCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsRXZ0LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGh0bWxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5sYXN0SHRtbCA9IGh0bWw7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29udGVudEVkaXRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHRhZ05hbWUgPSBfYS50YWdOYW1lLCBodG1sID0gX2EuaHRtbCwgaW5uZXJSZWYgPSBfYS5pbm5lclJlZiwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInRhZ05hbWVcIiwgXCJodG1sXCIsIFwiaW5uZXJSZWZcIl0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lIHx8ICdkaXYnLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IHJlZjogdHlwZW9mIGlubmVyUmVmID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpbm5lclJlZihjdXJyZW50KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbC5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgICAgICAgIH0gOiBpbm5lclJlZiB8fCB0aGlzLmVsLCBvbklucHV0OiB0aGlzLmVtaXRDaGFuZ2UsIG9uQmx1cjogdGhpcy5wcm9wcy5vbkJsdXIgfHwgdGhpcy5lbWl0Q2hhbmdlLCBvbktleVVwOiB0aGlzLnByb3BzLm9uS2V5VXAgfHwgdGhpcy5lbWl0Q2hhbmdlLCBvbktleURvd246IHRoaXMucHJvcHMub25LZXlEb3duIHx8IHRoaXMuZW1pdENoYW5nZSwgY29udGVudEVkaXRhYmxlOiAhdGhpcy5wcm9wcy5kaXNhYmxlZCwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBodG1sIH0gfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH07XG4gICAgQ29udGVudEVkaXRhYmxlLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBlbCA9IHRoaXMuZ2V0RWwoKTtcbiAgICAgICAgLy8gV2UgbmVlZCBub3QgcmVyZW5kZXIgaWYgdGhlIGNoYW5nZSBvZiBwcm9wcyBzaW1wbHkgcmVmbGVjdHMgdGhlIHVzZXIncyBlZGl0cy5cbiAgICAgICAgLy8gUmVyZW5kZXJpbmcgaW4gdGhpcyBjYXNlIHdvdWxkIG1ha2UgdGhlIGN1cnNvci9jYXJldCBqdW1wXG4gICAgICAgIC8vIFJlcmVuZGVyIGlmIHRoZXJlIGlzIG5vIGVsZW1lbnQgeWV0Li4uIChzb21laG93PylcbiAgICAgICAgaWYgKCFlbClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAuLi5vciBpZiBodG1sIHJlYWxseSBjaGFuZ2VkLi4uIChwcm9ncmFtbWF0aWNhbGx5LCBub3QgYnkgdXNlciBlZGl0KVxuICAgICAgICBpZiAobm9ybWFsaXplSHRtbChuZXh0UHJvcHMuaHRtbCkgIT09IG5vcm1hbGl6ZUh0bWwoZWwuaW5uZXJIVE1MKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICAgICAgICByZXR1cm4gcHJvcHMuZGlzYWJsZWQgIT09IG5leHRQcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgICAgICAgcHJvcHMudGFnTmFtZSAhPT0gbmV4dFByb3BzLnRhZ05hbWUgfHxcbiAgICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSAhPT0gbmV4dFByb3BzLmNsYXNzTmFtZSB8fFxuICAgICAgICAgICAgcHJvcHMuaW5uZXJSZWYgIT09IG5leHRQcm9wcy5pbm5lclJlZiB8fFxuICAgICAgICAgICAgcHJvcHMucGxhY2Vob2xkZXIgIT09IG5leHRQcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgISgwLCBmYXN0X2RlZXBfZXF1YWxfMS5kZWZhdWx0KShwcm9wcy5zdHlsZSwgbmV4dFByb3BzLnN0eWxlKTtcbiAgICB9O1xuICAgIENvbnRlbnRFZGl0YWJsZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLmdldEVsKCk7XG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFBlcmhhcHMgUmVhY3QgKHdob3NlIFZET00gZ2V0cyBvdXRkYXRlZCBiZWNhdXNlIHdlIG9mdGVuIHByZXZlbnRcbiAgICAgICAgLy8gcmVyZW5kZXJpbmcpIGRpZCBub3QgdXBkYXRlIHRoZSBET00uIFNvIHdlIHVwZGF0ZSBpdCBtYW51YWxseSBub3cuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmh0bWwgIT09IGVsLmlubmVySFRNTCkge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5odG1sO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdEh0bWwgPSB0aGlzLnByb3BzLmh0bWw7XG4gICAgICAgIHJlcGxhY2VDYXJldChlbCk7XG4gICAgfTtcbiAgICBDb250ZW50RWRpdGFibGUucHJvcFR5cGVzID0ge1xuICAgICAgICBodG1sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICB0YWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBpbm5lclJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIF0pXG4gICAgfTtcbiAgICByZXR1cm4gQ29udGVudEVkaXRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnRFZGl0YWJsZTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOS40MzguOTk0Yy4yMTMgMCAuMzk3LjE0Ni40NC4zNS4xNTEuNzIyLjI1NyAxLjM0LjMxNiAxLjg1Mi4zNzQuMTYuNzI1LjM2MiAxLjA0OC41OTlsMS43MjgtLjY3NmEuNDU1LjQ1NSAwIDAgMSAuNTU2LjE4OGwxLjQyIDIuMzk0YS40My40MyAwIDAgMS0uMDkxLjU0NyAyMS45OCAyMS45OCAwIDAgMS0xLjQ5IDEuMTk0IDUuMTcgNS4xNyAwIDAgMS0uMDA3IDEuMTgzbDEuNDY0IDEuMTE5YS40My40MyAwIDAgMSAuMTExLjU2M2wtMS40MiAyLjM5NGEuNDU0LjQ1NCAwIDAgMS0uNTMuMTk3IDIyLjQ0NSAyMi40NDUgMCAwIDEtMS44MDctLjY2Yy0uMzI1LjIzMy0uNjc5LjQzLTEuMDU1LjU4NmwtLjI2MyAxLjc5NGEuNDQ2LjQ0NiAwIDAgMS0uNDQ1LjM3Nkg2LjU3NGEuNDQ2LjQ0NiAwIDAgMS0uNDQtLjM1IDIxLjAxOSAyMS4wMTkgMCAwIDEtLjMxNy0xLjg1MyA1LjM0IDUuMzQgMCAwIDEtMS4wNDctLjU5OGwtMS43MjguNjc1YS40NTUuNDU1IDAgMCAxLS41NTYtLjE4N2wtMS40Mi0yLjM5NWEuNDMuNDMgMCAwIDEgLjA5MS0uNTQ2Yy41NjctLjQ5IDEuMDYzLS44ODggMS40OS0xLjE5NGE1LjE2NyA1LjE2NyAwIDAgMSAuMDA4LTEuMTgzTDEuMTkgNi4yNDNhLjQzLjQzIDAgMCAxLS4xMTItLjU2MmwxLjQyLTIuMzk1YS40NTUuNDU1IDAgMCAxIC41MzEtLjE5NmMuNzE5LjIzMyAxLjMyMS40NTMgMS44MDcuNjYuMzI0LS4yMzMuNjc5LS40MyAxLjA1Ni0uNTg3bC4yNjItMS43OTRBLjQ0Ni40NDYgMCAwIDEgNi42Ljk5NHptLS4zNjUgMUg2Ljk4NWwtLjI4IDEuODY2LS40NjcuMTljLS4yMzUuMDk1LS40Ni4yMS0uNjcyLjM0bC0uMjA3LjEzNi0uNDIuMjkzLS40NzYtLjE5N2MtLjMyOC0uMTM3LS43MTgtLjI4MS0xLjE2OS0uNDMzbC0uMjIxLS4wNzQtMS4wNDUgMS43MTlMMy41OSA2Ljk5OWwtLjA2LjQ3OWE0LjEyNyA0LjEyNyAwIDAgMC0uMDIxLjgxNmwuMDE0LjE0NC4wNTguNDkyLS40MTkuMjk0Yy0uMjg4LjIwMy0uNjE1LjQ1MS0uOTc5Ljc0NmwtLjE3Ny4xNDUgMS4wNDMgMS43MiAxLjg0NS0uNzAzLjQwNi4yOWMuMjA0LjE0Ni40Mi4yNzQuNjQ1LjM4NGwuMjI4LjEwMy40NzQuMTk5LjA1OS40OWMuMDQuMzM4LjEwMy43MzEuMTkgMS4xNzdsLjA0My4yMTloMi4wODhsLjI4Mi0xLjg2Ny40NjYtLjE5Yy4yMzYtLjA5NS40Ni0uMjEuNjcyLS4zNGwuMjA3LS4xMzYuNDE5LS4yOTMuNDc2LjE5OGMuMzMuMTM2LjcyLjI4IDEuMTcuNDMzbC4yMi4wNzIgMS4wNDQtMS43MTgtMS41Ni0xLjE2NS4wNi0uNDc5YTQuMTMxIDQuMTMxIDAgMCAwIC4wMi0uODE1bC0uMDEzLS4xNDQtLjA2LS40OTIuNDItLjI5NWExOC4xIDE4LjEgMCAwIDAgLjk4LS43NDZsLjE3Ni0uMTQ2LTEuMDQzLTEuNzItMS44NDQuNzA1LS40MDYtLjI5YTQuNDk2IDQuNDk2IDAgMCAwLS42NDYtLjM4NWwtLjIyOC0uMTAzLS40NzQtLjE5OS0uMDU4LS40OWMtLjAzMi0uMjctLjA4LS41NzYtLjE0LS45MTZ6bS0xLjA2NyAzYTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNm0wIDFhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMCAwaDE2djE2SDB6XFxcIiBvcGFjaXR5PVxcXCIuMDFcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMiA3LjUyN2MuNDMzIDAgLjc2MS0uMTUyLjk4NC0uNDU3LjIyMi0uMzA1LjMzMy0uNzM2LjMzMy0xLjI5M1YzLjk3MWMwLS4zNjguMDUtLjY3OC4xNS0uOTMuMS0uMjUzLjIzNC0uNDUyLjQtLjZhMS40IDEuNCAwIDAgMSAuNTY3LS4zM2MuMjIyLS4wNzQuNDUtLjExMS42ODQtLjExMWgxLjA1di44NTFoLS44Yy0uMiAwLS4zNjcuMDQyLS41LjEyNmEuNzU1Ljc1NSAwIDAgMC0uMjg0LjMgMS4yODggMS4yODggMCAwIDAtLjEzMy40MjZjLS4wMjIuMTU3LS4wMzQuMzEtLjAzNC40NTd2MS44MDZjMCAuMzc5LS4wNi43LS4xODMuOTYyYTEuODcgMS44NyAwIDAgMS0uNDE3LjYxNSAxLjcxOCAxLjcxOCAwIDAgMS0uNDgzLjMzYy0uMTY3LjA2NC0uMy4xLS40LjExMXYuMDMyYy4xLjAxLjIzMy4wNTIuNC4xMjYuMTY2LjA2My4zMjguMTczLjQ4My4zMzEuMTY3LjE0Ny4zMDYuMzUyLjQxNy42MTUuMTIyLjI1Mi4xODMuNTY3LjE4My45NDZ2MS44MDZjMCAuMTQ3LjAxMi4zLjAzNC40NTcuMDIyLjE1OC4wNjYuMy4xMzMuNDI2YS43NTYuNzU2IDAgMCAwIC4yODQuM2MuMTMzLjA4NC4zLjEyNi41LjEyNmguOFYxNGgtMS4wNWMtLjIzNCAwLS40NjItLjAzNy0uNjg0LS4xMWExLjM5OSAxLjM5OSAwIDAgMS0uNTY3LS4zMzEgMS41MzggMS41MzggMCAwIDEtLjQtLjZjLS4xLS4yNTItLjE1LS41NjItLjE1LS45M3YtMS44MDZjMC0uNTU3LS4xMTEtLjk4OC0uMzMzLTEuMjkzLS4yMjMtLjMwNS0uNTUtLjQ1Ny0uOTg0LS40NTd6TTE0IDguNDczYy0uNDM0IDAtLjc2MS4xNTItLjk4NC40NTctLjIyMi4zMDUtLjMzMy43MzYtLjMzMyAxLjI5M3YxLjgwNmMwIC4zNjgtLjA1LjY3OC0uMTUuOTMtLjEuMjUzLS4yMzQuNDUyLS40LjZhMS4zODggMS4zODggMCAwIDEtLjU4NC4zM2MtLjIxMS4wNzQtLjQzMy4xMTEtLjY2Ny4xMTFoLTEuMDV2LS44NTFoLjhjLjIgMCAuMzYxLS4wNDIuNDg0LS4xMjZhLjcyNy43MjcgMCAwIDAgLjMtLjNjLjA2Ni0uMTI2LjExMS0uMjY4LjEzMy0uNDI2YTMuMjggMy4yOCAwIDAgMCAuMDM0LS40NTd2LTEuODA2YzAtLjM3OS4wNTUtLjY5NC4xNjYtLjk0Ni4xMjItLjI2My4yNjEtLjQ2OC40MTctLjYxNS4xNjctLjE1OC4zMzMtLjI2OC41LS4zMzEuMTY3LS4wNzQuMy0uMTE2LjQtLjEyNnYtLjAzMmMtLjEtLjAxLS4yMzMtLjA0Ny0uNC0uMTFhMS45NiAxLjk2IDAgMCAxLS41LS4zMzEgMi4yODUgMi4yODUgMCAwIDEtLjQxNy0uNjE1Yy0uMTEtLjI2My0uMTY3LS41ODMtLjE2Ny0uOTYyVjQuMTZjMC0uMTQ3LS4wMS0uMy0uMDMzLS40NTdhMS4yODcgMS4yODcgMCAwIDAtLjEzMy0uNDI2LjcyNi43MjYgMCAwIDAtLjMtLjMuODM4LjgzOCAwIDAgMC0uNDg0LS4xMjZoLS44VjJoMS4wNWMuMjM0IDAgLjQ1Ni4wMzcuNjY3LjExLjIyMy4wNjMuNDE3LjE3NC41ODQuMzMxLjE2Ni4xNDguMy4zNDcuNC42LjEuMjUyLjE1LjU2Mi4xNS45M3YxLjgwNmMwIC41NTcuMTExLjk4OC4zMzMgMS4yOTMuMjIzLjMwNS41NS40NTcuOTg0LjQ1N3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMCAwaDE2djE2SDB6XFxcIiBvcGFjaXR5PVxcXCIuMDFcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIm05LjYwMyAzLTQuMTc1IDkuNjQyLjk3LjM1OCA0LjE3NC05LjY0MnptMS44OTcgOC4yMzMtLjczOC0uNjgxTDEzLjUyNCA4bC0yLjc2Mi0yLjU1Mi43MzgtLjY4MUwxNSA4em0tNy02LjQ2Ni43MzguNjgxTDIuNDc2IDhsMi43NjIgMi41NTItLjczOC42ODFMMSA4elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOS43MDcgMUgydjE0aDFWMmg2LjI5M0wxMiA0LjcwN1YxNEg1djFoOFY0LjI5M3pNNSA1aDRWNEg1em02IDNINVY3aDZ6bS02IDNoNHYtMUg1elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMi41NDcgMS43ODhBLjUuNSAwIDAgMSAzIDEuNWg5LjE2N2MuMzU4IDAgLjY5OS4xNDcuOTQ3LjQwMy4yNDkuMjU1LjM4Ni41OTkuMzg2Ljk1NHYxLjcxNGEuNS41IDAgMCAxLTEgMFYyLjg1N2EuMzcuMzcgMCAwIDAtLjEwMy0uMjU3LjMyMi4zMjIgMCAwIDAtLjIzLS4xaC04LjFsNC4zMTcgNS4xOGEuNS41IDAgMCAxIDAgLjY0TDQuMDY4IDEzLjVoOC4wOTlhLjMyMi4zMjIgMCAwIDAgLjIzLS4xLjM3LjM3IDAgMCAwIC4xMDMtLjI1N3YtMS43MTRhLjUuNSAwIDEgMSAxIDB2MS43MTRjMCAuMzU1LS4xMzcuNjk5LS4zODYuOTU0LS4yNDguMjU3LS41OS40MDMtLjk0Ny40MDNIM2EuNS41IDAgMCAxLS4zODQtLjgyTDcuMzQ5IDggMi42MTYgMi4zMmEuNS41IDAgMCAxLS4wNjktLjUzMlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB1cmxVdGlscywgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCB0eXBlIEludGxTaGFwZSwgaW5qZWN0SW50bCwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgRXhwcmVzc2lvbkJ1aWxkZXIgZnJvbSAnLi4vZXhwcmVzc2lvbi1idWlsZGVyJ1xuaW1wb3J0IHsgdHlwZSBFeHByZXNzaW9uQnVpbGRlclByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgeyBnZXRFeHByZXNzaW9uRnJvbVN0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBTaWRlUG9wcGVyOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHByZXNzaW9uQnVpbGRlclBvcHVwUHJvcHMgZXh0ZW5kcyBFeHByZXNzaW9uQnVpbGRlclByb3BzIHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgcG9wdXAuXG4gICAqL1xuICBpc09wZW46IGJvb2xlYW5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHdoZW4gdGhlIGNsb3NlIGljb24gaW4gaGVhZGVyIG9mIHRoZSBwb3B1cCBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25DbG9zZTogKCkgPT4gdm9pZFxuICAvKipcbiAgICogU2VlIGBTaWRlUG9wcGVyYCBpbiBqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgdHJpZ2dlcj86IEhUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXVxuICAvKipcbiAgICogU2VlIGBTaWRlUG9wcGVyYCBpbiBqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgYmFja1RvRm9jdXNOb2RlPzogSFRNTEVsZW1lbnRcbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXNcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGludGw6IEludGxTaGFwZVxufVxuXG4vKipcbiAqIFRoZSBgRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cGAgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBidWlsZCBhbiBFeHByZXNzaW9uIHVzaW5nIGEgcG9wdXAuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEV4cHJlc3Npb25CdWlsZGVyUG9wdXAgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2V4cHJlc3Npb24tYnVpbGRlcidcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgX0V4cHJlc3Npb25CdWlsZGVyUG9wdXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEV4cHJlc3Npb25CdWlsZGVyUG9wdXBQcm9wcyAmIEV4dHJhUHJvcHMsIFN0YXRlPiB7XG4gIG92ZXJmbG93WVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBvdmVyZmxvdzogJ2hpZGRlbicgfVxuICBfX3VubW91bnQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFNpZGVQb3BwZXI6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxuICAgIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKCdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cycpLnRoZW4oY2xhenogPT4geyAhdGhpcy5fX3VubW91bnQgJiYgdGhpcy5zZXRTdGF0ZSh7IFNpZGVQb3BwZXI6IGNsYXp6LlNpZGVQb3BwZXIgfSkgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLl9fdW5tb3VudCA9IHRydWVcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgU2lkZVBvcHBlciA9IHRoaXMuc3RhdGUuU2lkZVBvcHBlclxuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5wcm9wcy50eXBlc1xuICAgIGNvbnN0IHRpdGxlID0gdHlwZXNcbiAgICAgID8gKHR5cGVzLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdkeW5hbWljQ29udGVudCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuZHluYW1pY0NvbnRlbnQgfSlcbiAgICAgICAgICA6IGdldEV4cHJlc3Npb25Gcm9tU3RyaW5nKHR5cGVzWzBdLCB0aGlzLnByb3BzLmludGwpKVxuICAgICAgOiAnJ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxuICAgICAgICB7XG4gICAgICAgICAgU2lkZVBvcHBlciAmJiA8U2lkZVBvcHBlciBpc09wZW49e3RoaXMucHJvcHMuaXNPcGVuICYmICF1cmxVdGlscy5nZXRBcHBJZFBhZ2VJZEZyb21VcmwoKS5wYWdlSWR9IHBvc2l0aW9uPSdyaWdodCcgdG9nZ2xlPXt0aGlzLnByb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICB0cmlnZ2VyPXt0aGlzLnByb3BzLnRyaWdnZXJ9IGJhY2tUb0ZvY3VzTm9kZT17dGhpcy5wcm9wcy5iYWNrVG9Gb2N1c05vZGV9IHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0xMDAgYmctbGlnaHQtMzAwIGJvcmRlci1jb2xvci1ncmF5LTQwMCBjb21wb25lbnQtZXhwcmVzc2lvbi1idWlsZGVyLXBvcHVwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwIGV4cHJlc3Npb24tcG9wdXAnPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMub3ZlcmZsb3dZU3R5bGV9IGNsYXNzTmFtZT0naC0xMDAnPlxuICAgICAgICAgICAgICAgICAgPEV4cHJlc3Npb25CdWlsZGVyIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2lkZVBvcHBlcj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IEV4cHJlc3Npb25CdWlsZGVyUG9wdXAgPSB3aXRoVGhlbWUoaW5qZWN0SW50bDwnaW50bCcsIEV4cHJlc3Npb25CdWlsZGVyUG9wdXBQcm9wcyAmIEV4dHJhUHJvcHM+KF9FeHByZXNzaW9uQnVpbGRlclBvcHVwKSlcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcbiIsImltcG9ydCB7XG4gIFJlYWN0LCB0eXBlIEltbXV0YWJsZUFycmF5LCBtb2R1bGVMb2FkZXIsIHR5cGUgRXhwcmVzc2lvbiwgdHlwZSBJTUZpZWxkU2NoZW1hLCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgRXhwcmVzc2lvblBhcnQsIEV4cHJlc3Npb25QYXJ0VHlwZSwgSW1tdXRhYmxlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBKaW11RmllbGRUeXBlLFxuICB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSW50bFNoYXBlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGdldFdoZXRoZXJVc2VEc3NNYXRjaEV4cERzcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbiB8IEltbXV0YWJsZU9iamVjdDxFeHByZXNzaW9uPlxuICBpbnRsOiBJbnRsU2hhcGVcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgdHlwZXM/OiBJbW11dGFibGVBcnJheTxKaW11RmllbGRUeXBlPlxuICBvbkNoYW5nZTogKGV4cHJlc3Npb246IEV4cHJlc3Npb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgRmllbGRTZWxlY3RvcjogYW55XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RBVEFfVklFV19JRCA9ICdVU0VfTUFJTl9EQVRBX1NPVVJDRSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlVGFiIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgX191bm1vdW50ID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgRmllbGRTZWxlY3RvcjogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9fdW5tb3VudCA9IGZhbHNlXG4gICAgbW9kdWxlTG9hZGVyLmxvYWRNb2R1bGUoJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InKS50aGVuKGNsYXp6ID0+IHtcbiAgICAgICF0aGlzLl9fdW5tb3VudCAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgRmllbGRTZWxlY3RvcjogY2xhenouRmllbGRTZWxlY3RvclxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX191bm1vdW50ID0gdHJ1ZVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRGaWVsZHMgPSAoKTogeyBmaWVsZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4gfCBJbW11dGFibGVPYmplY3Q8eyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBzdHJpbmdbXSB9PiwgaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0OiBib29sZWFuIH0gPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5leHByZXNzaW9uIHx8ICF0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1swXVxuICAgIGNvbnN0IHNlbGVjdGVkRmllbGRKaW11TmFtZSA9IHBhcnQgJiYgZ2V0V2hldGhlclVzZURzc01hdGNoRXhwRHNzKHBhcnQsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpICYmIHBhcnQudHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLkZpZWxkID8gcGFydC5qaW11RmllbGROYW1lIDogbnVsbFxuICAgIGlmICghc2VsZWN0ZWRGaWVsZEppbXVOYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkc0lkID0gcGFydC5kYXRhU291cmNlSWRcbiAgICAgIGNvbnN0IGZpZWxkcyA9IGRzSWQgPyBJbW11dGFibGUoeyBbZHNJZF06IFtzZWxlY3RlZEZpZWxkSmltdU5hbWVdIH0pIDogbnVsbFxuICAgICAgcmV0dXJuIHsgZmllbGRzLCBpc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQ6IHBhcnQuaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCB9XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RlZEZpZWxkc0NoYW5nZSA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSwgaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGZpZWxkID0gYWxsU2VsZWN0ZWRGaWVsZHMgJiYgYWxsU2VsZWN0ZWRGaWVsZHNbMF1cbiAgICBpZiAoIWZpZWxkIHx8ICFkcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHBhcnQ6IEV4cHJlc3Npb25QYXJ0ID0ge1xuICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLkZpZWxkLFxuICAgICAgZXhwOiBgeyR7ZmllbGQuYWxpYXMgfHwgZmllbGQubmFtZX19YCxcbiAgICAgIGRhdGFTb3VyY2VJZDogZHMuaWQsXG4gICAgICBqaW11RmllbGROYW1lOiBmaWVsZC5qaW11TmFtZSxcbiAgICAgIGlzRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQ6ICEhaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dFxuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgbmFtZTogcGFydC5leHAsIHBhcnRzOiBbcGFydF0gfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgRmllbGRTZWxlY3RvciA9IHRoaXMuc3RhdGUuRmllbGRTZWxlY3RvclxuICAgIGNvbnN0IHNlbGVjdFJlc3VsdCA9IHRoaXMuZ2V0U2VsZWN0ZWRGaWVsZHMoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXhwcmVzc2lvbi1idWlsZGVyLXRhYiBhdHRyaWJ1dGUtdGFiIGNvbW1vbi10YWIgcC0wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkLXNlbGVjdG9yLWNvbnRhaW5lcic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgRmllbGRTZWxlY3RvciAmJiA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICB0eXBlcz17dGhpcy5wcm9wcy50eXBlc31cbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLndpZGdldElkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdGVkRmllbGRzQ2hhbmdlfVxuICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17c2VsZWN0UmVzdWx0Py5maWVsZHN9XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dD17c2VsZWN0UmVzdWx0Py5pc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHR9XG4gICAgICAgICAgICAgIHVzZVNlbGVjdGlvbkRhdGFWaWV3XG4gICAgICAgICAgICAgIHVzZVBvcHVsYXRlZERhdGFWaWV3XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIEV4cHJlc3Npb24sIHR5cGUgSW50bFNoYXBlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZXhwcmVzc2lvblV0aWxzLCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIFRleHRJbnB1dCwgZGVmYXVsdE1lc3NhZ2VzLCBQb3BwZXIsIExhYmVsLCBTd2l0Y2gsIE51bWVyaWNJbnB1dCwgQ2hlY2tib3ggfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nJ1xuXG5pbXBvcnQgRXhwcmVzc2lvbkVkaXRvciBmcm9tICcuLi8uLi9leHByZXNzaW9uLWVkaXRvcidcblxuaW1wb3J0IHsgdHlwZSBGb3JtYXROdW1iZXJPcHRpb25zIH0gZnJvbSAncmVhY3QtaW50bCdcblxuY29uc3QgRGVmYXVsdE51bWJlckZvcm1hdDogRm9ybWF0TnVtYmVyT3B0aW9ucyA9IHtcbiAgdXNlR3JvdXBpbmc6IHRydWUsXG4gIG5vdGF0aW9uOiAnc3RhbmRhcmQnLFxuICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0czogNFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbiB8IEltbXV0YWJsZU9iamVjdDxFeHByZXNzaW9uPlxuICBpbnRsOiBJbnRsU2hhcGVcbiAgaXNBY3RpdmU6IGJvb2xlYW5cbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChleHByZXNzaW9uOiBFeHByZXNzaW9uKSA9PiB2b2lkXG59XG5cbi8qKlxuICogU2F2ZSBwYXJ0cyAoaW4gZXhwcmVzc2lvbiksIG5hbWUgYW5kIG51bWJlckZvcm1hdCBpbiBkaWZmZXJlbnQgc3RhdGVzIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHJlbmRlcmluZy5cbiAqL1xuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvblxuICBuYW1lOiBzdHJpbmdcbiAgbnVtYmVyRm9ybWF0OiBGb3JtYXROdW1iZXJPcHRpb25zXG4gIGlzTnVtYmVyRm9ybWF0U2V0dGluZ09wZW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvblRhYiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBjb3VudCA9IDBcbiAgbnVtYmVyRm9ybWF0QnRuUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxCdXR0b25FbGVtZW50PigpXG4gIGV4cHJlc3Npb25Db3VudEFkZGVkID0gZmFsc2VcbiAgaW5zZXJ0Q291bnQgPSAwXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKCFwcm9wcy5leHByZXNzaW9uPy5uYW1lKSB7XG4gICAgICAvLyBpbmRleCBpbiBkZWZhdWx0IGV4cHJlc3Npb24gbmFtZSBuZWVkIHRvIHBsdXMgb25lXG4gICAgICBFeHByZXNzaW9uVGFiLmNvdW50KytcbiAgICAgIHRoaXMuZXhwcmVzc2lvbkNvdW50QWRkZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHByZXNzaW9uOiB0aGlzLmdldE11dGFibGVFeHByZXNzaW9uKHRoaXMucHJvcHMuZXhwcmVzc2lvbiksXG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmV4cHJlc3Npb24/Lm5hbWUgfHwgdGhpcy5nZXREZWZhdWx0TmFtZSgpLFxuICAgICAgbnVtYmVyRm9ybWF0OiB0aGlzLnByb3BzLmV4cHJlc3Npb24/Lm51bWJlckZvcm1hdCxcbiAgICAgIGlzTnVtYmVyRm9ybWF0U2V0dGluZ09wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5leHByZXNzaW9uICE9PSB0aGlzLnByb3BzLmV4cHJlc3Npb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleHByZXNzaW9uOiB0aGlzLmdldE11dGFibGVFeHByZXNzaW9uKHRoaXMucHJvcHMuZXhwcmVzc2lvbiksXG4gICAgICAgIG5hbWU6IHRoaXMucHJvcHMuZXhwcmVzc2lvbj8ubmFtZSB8fCB0aGlzLmdldERlZmF1bHROYW1lKCksXG4gICAgICAgIG51bWJlckZvcm1hdDogdGhpcy5wcm9wcy5leHByZXNzaW9uPy5udW1iZXJGb3JtYXRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIC8vIGRpZG4ndCBpbnNlcnQgYW55IGV4cHJlc3Npb24sIHJlc2V0IHRoZSBpbmRleCBvZiBkZWZhdWx0IGV4cHJlc3Npb24gbmFtZVxuICAgIGlmICh0aGlzLmV4cHJlc3Npb25Db3VudEFkZGVkICYmIHRoaXMuaW5zZXJ0Q291bnQgPT09IDApIHtcbiAgICAgIEV4cHJlc3Npb25UYWIuY291bnQtLVxuICAgIH1cbiAgfVxuXG4gIGdldE11dGFibGVFeHByZXNzaW9uID0gKGV4cHJlc3Npb246IEV4cHJlc3Npb24gfCBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj4pOiBFeHByZXNzaW9uID0+IHtcbiAgICBjb25zdCBlID0gdGhpcy5wcm9wcy5leHByZXNzaW9uICYmICh0aGlzLnByb3BzLmV4cHJlc3Npb24gYXMgSW1tdXRhYmxlT2JqZWN0PEV4cHJlc3Npb24+KS5hc011dGFibGVcbiAgICAgID8gKHRoaXMucHJvcHMuZXhwcmVzc2lvbiBhcyBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj4pLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICAgIDogdGhpcy5wcm9wcy5leHByZXNzaW9uIGFzIEV4cHJlc3Npb25cblxuICAgIHJldHVybiBlXG4gIH1cblxuICBvbkV4cENoYW5nZSA9IChlOiBFeHByZXNzaW9uKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4cHJlc3Npb246IGUgfSlcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0V4cHJlc3Npb246IEV4cHJlc3Npb24gPSB7IG5hbWU6IHRoaXMuc3RhdGUubmFtZSB8fCB0aGlzLmdldERlZmF1bHROYW1lKCksIHBhcnRzOiB0aGlzLnN0YXRlLmV4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS5leHByZXNzaW9uLnBhcnRzIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQpIHtcbiAgICAgIG5ld0V4cHJlc3Npb24ubnVtYmVyRm9ybWF0ID0gdGhpcy5zdGF0ZS5udW1iZXJGb3JtYXRcbiAgICB9XG4gICAgdGhpcy5pbnNlcnRDb3VudCsrXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdFeHByZXNzaW9uKVxuICB9XG5cbiAgb25OYW1lQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBnZXREZWZhdWx0TmFtZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgJHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnZXhwcmVzc2lvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuZXhwcmVzc2lvbiB9KX0gJHtFeHByZXNzaW9uVGFiLmNvdW50fWBcbiAgfVxuXG4gIGdldFdoZXRoZXJEaXNhYmxlSW5zZXJ0ID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5leHByZXNzaW9uIHx8ICF0aGlzLnN0YXRlLmV4cHJlc3Npb24ucGFydHMgfHwgdGhpcy5zdGF0ZS5leHByZXNzaW9uLnBhcnRzLmxlbmd0aCA9PT0gMCB8fCAhZXhwcmVzc2lvblV0aWxzLmdldFdoZXRoZXJFeHByZXNzaW9uVmFsaWQodGhpcy5zdGF0ZS5leHByZXNzaW9uKVxuICB9XG5cbiAgb25OdW1iZXJGb3JtYXRDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvZ2dsZU51bWJlckZvcm1hdFNldHRpbmdQb3BwZXIoKVxuICB9XG5cbiAgdG9nZ2xlTnVtYmVyRm9ybWF0U2V0dGluZ1BvcHBlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNOdW1iZXJGb3JtYXRTZXR0aW5nT3BlbjogIXRoaXMuc3RhdGUuaXNOdW1iZXJGb3JtYXRTZXR0aW5nT3BlbiB9KVxuICB9XG5cbiAgb25Ub2dnbGVOdW1iZXJGb3JtYXRTZXR0aW5nID0gKGUsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG51bWJlckZvcm1hdDogRGVmYXVsdE51bWJlckZvcm1hdCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyRm9ybWF0OiBudWxsIH0pXG4gICAgfVxuICB9XG5cbiAgb25NaW5EaWdpdHNDaGFuZ2UgPSAodjogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG51bWJlckZvcm1hdDogeyAuLi50aGlzLnN0YXRlLm51bWJlckZvcm1hdCwgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB2IH0gfSlcbiAgfVxuXG4gIG9uTWF4RGlnaXRzQ2hhbmdlID0gKHY6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBudW1iZXJGb3JtYXQ6IHsgLi4udGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogdiB9IH0pXG4gIH1cblxuICBvblVzZUdyb3VwQ2hhbmdlID0gKGUsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyRm9ybWF0OiB7IC4uLnRoaXMuc3RhdGUubnVtYmVyRm9ybWF0LCB1c2VHcm91cGluZzogY2hlY2tlZCB9IH0pXG4gIH1cblxuICBvbk5vdGF0aW9uQ2hhbmdlID0gKGUsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbnVtYmVyRm9ybWF0OiB7IC4uLnRoaXMuc3RhdGUubnVtYmVyRm9ybWF0LCBub3RhdGlvbjogY2hlY2tlZCA/ICdjb21wYWN0JyA6ICdzdGFuZGFyZCcgfSB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBudW1iZXJGb3JtYXRTdHJpbmcgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbnVtYmVyRm9ybWF0dGluZycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubnVtYmVyRm9ybWF0dGluZyB9KVxuICAgIGNvbnN0IGRlY2ltYWxQbGFjZVN0cmluZyA9IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdkZWNpbWFsUGxhY2UnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmRlY2ltYWxQbGFjZSB9KVxuICAgIGNvbnN0IHNob3dUaG91c2FuZFNlcGFyYXRvclN0cmluZyA9IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzaG93VGhvdXNhbmRTZXBhcmF0b3InLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNob3dUaG91c2FuZFNlcGFyYXRvciB9KVxuICAgIGNvbnN0IHVuaXRTdHJpbmcgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAndW5pdCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMudW5pdCB9KVxuICAgIGNvbnN0IHRvU3RyaW5nID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3RvJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy50byB9KVxuICAgIGNvbnN0IG51bWJlckZvcm1hdERlY2ltYWxJZCA9IGBleHByZXNzaW9uLSR7RXhwcmVzc2lvblRhYi5jb3VudH0tbnVtYmVyLWZvcm1hdC1kZWNpbWFsYFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdleHByZXNzaW9uLWJ1aWxkZXItdGFiIGV4cHJlc3Npb24tdGFiIHB4LTQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5vbk5hbWVDaGFuZ2V9IGlkPSdleHByZXNzaW9uLW5hbWUtaW5wdXQnIHNpemU9J3NtJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXhwcmVzc2lvbi1lZGl0b3ItY29udGFpbmVyJz5cbiAgICAgICAgICA8RXhwcmVzc2lvbkVkaXRvciB7Li4udGhpcy5wcm9wc30gZXhwcmVzc2lvbj17dGhpcy5zdGF0ZS5leHByZXNzaW9ufSBvbkNoYW5nZT17dGhpcy5vbkV4cENoYW5nZX0gYXV0b0ZvY3VzPXt0aGlzLnByb3BzLmlzQWN0aXZlfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQtYXQtYm90dG9tIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtNCc+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPSdkZWZhdWx0JyBpY29uIHNpemU9J2RlZmF1bHQnIG9uQ2xpY2s9e3RoaXMub25OdW1iZXJGb3JtYXRDbGlja30gdGl0bGU9e251bWJlckZvcm1hdFN0cmluZ30gYXJpYS1sYWJlbD17bnVtYmVyRm9ybWF0U3RyaW5nfSByZWY9e3RoaXMubnVtYmVyRm9ybWF0QnRuUmVmfSA+XG4gICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIHNpemU9J20nIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlfSB0eXBlPSdwcmltYXJ5JyBkaXNhYmxlZD17dGhpcy5nZXRXaGV0aGVyRGlzYWJsZUluc2VydCgpfSBjbGFzc05hbWU9J2V4cHJlc3Npb24taW5zZXJ0LWJ0biBtbC0yJyBzaXplPSdkZWZhdWx0JyB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2luc2VydCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuaW5zZXJ0IH0pfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlJz5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdpbnNlcnQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmluc2VydCB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UG9wcGVyIHJlZmVyZW5jZT17dGhpcy5udW1iZXJGb3JtYXRCdG5SZWYuY3VycmVudH0gb3Blbj17dGhpcy5zdGF0ZS5pc051bWJlckZvcm1hdFNldHRpbmdPcGVufSBzaG93QXJyb3cgdG9nZ2xlPXt0aGlzLnRvZ2dsZU51bWJlckZvcm1hdFNldHRpbmdQb3BwZXJ9IG9mZnNldD17Wy04LCAwXX0gcGxhY2VtZW50PSd0b3Atc3RhcnQnIGRpc2FibGVQb3J0YWw9e3RydWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdudW1iZXItZm9ybWF0LXNldHRpbmcnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIG1iLTInPlxuICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTc1IHRleHQtdHJ1bmNhdGUgbnVtYmVyLWZvcm1hdC1zd2l0Y2gtbGFiZWwnIHRpdGxlPXtudW1iZXJGb3JtYXRTdHJpbmd9PntudW1iZXJGb3JtYXRTdHJpbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXshIXRoaXMuc3RhdGUubnVtYmVyRm9ybWF0fSBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZU51bWJlckZvcm1hdFNldHRpbmd9IC8+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgbWItMiBkLWZsZXgnPlxuICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT0ndy0xMDAgdGV4dC10cnVuY2F0ZSBtLTAgbnVtYmVyLWZvcm1hdC1udW1lcmljLWlucHV0LWxhYmVsJyBmb3I9e251bWJlckZvcm1hdERlY2ltYWxJZH0+e2RlY2ltYWxQbGFjZVN0cmluZ308L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNCcgaWQ9e251bWJlckZvcm1hdERlY2ltYWxJZH0+XG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlckZvcm1hdC5taW5pbXVtRnJhY3Rpb25EaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLm9uTWluRGlnaXRzQ2hhbmdlfSBzaG93SGFuZGxlcnMgcHJlY2lzaW9uPXswfSBtaW49ezB9IG1heD17dGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQubWF4aW11bUZyYWN0aW9uRGlnaXRzID8/IDIwfSBzaXplPSdzbScgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXgtMiBudW1iZXItZm9ybWF0LW51bWVyaWMtaW5wdXQtbGFiZWwnPnt0b1N0cmluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlckZvcm1hdC5tYXhpbXVtRnJhY3Rpb25EaWdpdHN9IG9uQ2hhbmdlPXt0aGlzLm9uTWF4RGlnaXRzQ2hhbmdlfSBzaG93SGFuZGxlcnMgcHJlY2lzaW9uPXswfSBtaW49e3RoaXMuc3RhdGUubnVtYmVyRm9ybWF0Lm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA/PyAwfSBtYXg9ezIwfSBzaXplPSdzbScgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgbWItMic+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG0tMCc+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9J21yLTInIGNoZWNrZWQ9eyEhdGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQudXNlR3JvdXBpbmd9IG9uQ2hhbmdlPXt0aGlzLm9uVXNlR3JvdXBDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTg1IHRleHQtdHJ1bmNhdGUgbnVtYmVyLWZvcm1hdC1jaGVja2JveC1sYWJlbCcgdGl0bGU9e3Nob3dUaG91c2FuZFNlcGFyYXRvclN0cmluZ30+e3Nob3dUaG91c2FuZFNlcGFyYXRvclN0cmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwJz5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgbS0wJz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT0nbXItMicgY2hlY2tlZD17dGhpcy5zdGF0ZS5udW1iZXJGb3JtYXQubm90YXRpb24gPT09ICdjb21wYWN0J30gb25DaGFuZ2U9e3RoaXMub25Ob3RhdGlvbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctODUgdGV4dC10cnVuY2F0ZSBudW1iZXItZm9ybWF0LWNoZWNrYm94LWxhYmVsJyB0aXRsZT17dW5pdFN0cmluZ30+e3VuaXRTdHJpbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BwZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFJlYWN0LCB0eXBlIEltbXV0YWJsZUFycmF5LCBFeHByZXNzaW9uRnVuY3Rpb25zLCB0eXBlIEV4cHJlc3Npb24sIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEZpZWxkU2NoZW1hLCB0eXBlIEV4cHJlc3Npb25QYXJ0LCBFeHByZXNzaW9uUGFydFR5cGUsIEppbXVGaWVsZFR5cGUsXG4gIHR5cGUgSW50bFNoYXBlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZ3JvdXBFeHByZXNzaW9uUGFydHNCeUZ1bmN0aW9uLCB0eXBlIEV4cHJlc3Npb25QYXJ0R3JvdXAsIHR5cGUgVXNlRGF0YVNvdXJjZSwgbW9kdWxlTG9hZGVyLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFNlbGVjdCwgQnV0dG9uLCBkZWZhdWx0TWVzc2FnZXMsIFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBnZXRXaGV0aGVyVXNlRHNzTWF0Y2hFeHBEc3MgfSBmcm9tICcuLi8uLi8uLi91dGlscydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb24gfCBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj5cbiAgaW50bDogSW50bFNoYXBlXG4gIHdpZGdldElkPzogc3RyaW5nXG4gIG9uQ2hhbmdlOiAoZXhwcmVzc2lvbjogRXhwcmVzc2lvbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBjdXN0b21FeHBOYW1lPzogc3RyaW5nXG4gIHNlbGVjdGVkRHNJZDogc3RyaW5nXG4gIHNlbGVjdGVkSmltdUZpZWxkTmFtZTogc3RyaW5nIC8vIGppbXVOYW1lXG4gIHNlbGVjdGVkRnVuY3Rpb246IEV4cHJlc3Npb25GdW5jdGlvbnNcbiAgTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3I6IGFueVxuICBEYXRhVmlld1ByaW9yaXR5OiBhbnlcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpc3RpY3NUYWIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBkc01hbmFnZXI6IERhdGFTb3VyY2VNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBfX3VubW91bnQgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IGRzSWQgPSB0aGlzLmdldERlZmF1bHREc0lkKClcbiAgICBjb25zdCBqaW11RmllbGROYW1lID0gdGhpcy5nZXREZWZhdWx0SmltdUZpZWxkTmFtZShkc0lkKVxuICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmdldERlZmF1bHRGdW5jKClcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkc0J5RnVuYyhkc0lkLCBmdW5jKVxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRGaWVsZE5hbWUoZmllbGRzLCBqaW11RmllbGROYW1lKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXN0b21FeHBOYW1lOiB0aGlzLmdldEN1c3RvbUV4cE5hbWUoZmllbGROYW1lLCBmdW5jLCB0aGlzLnByb3BzLmV4cHJlc3Npb24/Lm5hbWUpLFxuICAgICAgc2VsZWN0ZWREc0lkOiBkc0lkLFxuICAgICAgc2VsZWN0ZWRKaW11RmllbGROYW1lOiBqaW11RmllbGROYW1lLFxuICAgICAgc2VsZWN0ZWRGdW5jdGlvbjogZnVuYyxcbiAgICAgIE1haW5EYXRhQW5kVmlld1NlbGVjdG9yOiBudWxsLFxuICAgICAgRGF0YVZpZXdQcmlvcml0eTogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLl9fdW5tb3VudCA9IGZhbHNlXG4gICAgbW9kdWxlTG9hZGVyLmxvYWRNb2R1bGUoJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InKS50aGVuKGNsYXp6ID0+IHtcbiAgICAgICF0aGlzLl9fdW5tb3VudCAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3I6IGNsYXp6Lk1haW5EYXRhQW5kVmlld1NlbGVjdG9yLFxuICAgICAgICBEYXRhVmlld1ByaW9yaXR5OiBjbGF6ei5EYXRhVmlld1ByaW9yaXR5XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcbiAgICBpZiAocHJldlByb3BzLmV4cHJlc3Npb24gIT09IHRoaXMucHJvcHMuZXhwcmVzc2lvbiB8fCBwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXMgIT09IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGNvbnN0IGRzSWQgPSB0aGlzLmdldERlZmF1bHREc0lkKClcbiAgICAgIGNvbnN0IGppbXVGaWVsZE5hbWUgPSB0aGlzLmdldERlZmF1bHRKaW11RmllbGROYW1lKGRzSWQpXG4gICAgICBjb25zdCBmdW5jID0gdGhpcy5nZXREZWZhdWx0RnVuYygpXG4gICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkc0J5RnVuYyhkc0lkLCBmdW5jKVxuICAgICAgY29uc3QgZmllbGROYW1lID0gdGhpcy5nZXRTZWxlY3RlZEZpZWxkTmFtZShmaWVsZHMsIGppbXVGaWVsZE5hbWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VzdG9tRXhwTmFtZTogdGhpcy5nZXRDdXN0b21FeHBOYW1lKGZpZWxkTmFtZSwgZnVuYywgdGhpcy5wcm9wcy5leHByZXNzaW9uPy5uYW1lKSxcbiAgICAgICAgc2VsZWN0ZWREc0lkOiBkc0lkLFxuICAgICAgICBzZWxlY3RlZEppbXVGaWVsZE5hbWU6IGppbXVGaWVsZE5hbWUsXG4gICAgICAgIHNlbGVjdGVkRnVuY3Rpb246IGZ1bmNcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChwcmV2U3RhdGUuc2VsZWN0ZWREc0lkICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkRHNJZCkge1xuICAgICAgY29uc3QgamltdU5hbWUgPSB0aGlzLmdldERlZmF1bHRKaW11RmllbGROYW1lKHRoaXMuc3RhdGUuc2VsZWN0ZWREc0lkKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSmltdUZpZWxkTmFtZTogamltdU5hbWUgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5fX3VubW91bnQgPSB0cnVlXG4gIH1cblxuICBnZXRXaGV0aGVyRXhwcmVzc2lvbklzRnVuY0FuZEhhc09uZVBhcnQgPSAoZ3JvdXBlZFBhcnRzOiBFeHByZXNzaW9uUGFydEdyb3VwW10pOiBib29sZWFuID0+IHtcbiAgICBpZiAoIWdyb3VwZWRQYXJ0cykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuICEhKFxuICAgICAgZ3JvdXBlZFBhcnRzLmxlbmd0aCA9PT0gMSAmJiBncm91cGVkUGFydHNbMF0gJiYgZ3JvdXBlZFBhcnRzWzBdLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvblxuICAgIClcbiAgfVxuXG4gIGhhc05vUGFyYW1BbmREc0VuYWJsZWQgPSAocGFydDogRXhwcmVzc2lvblBhcnRHcm91cCk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghcGFydCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiAoIXBhcnQucGFydHMgfHwgcGFydC5wYXJ0cy5sZW5ndGggPT09IDApICYmIGdldFdoZXRoZXJVc2VEc3NNYXRjaEV4cERzcyhwYXJ0LCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKVxuICB9XG5cbiAgaGFzT25lUGFyYW1BbmREc0VuYWJsZWQgPSAocGFydDogRXhwcmVzc2lvblBhcnRHcm91cCk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghcGFydCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBwYXJ0LnBhcnRzICYmIHBhcnQucGFydHMubGVuZ3RoID09PSAxICYmIGdldFdoZXRoZXJVc2VEc3NNYXRjaEV4cERzcyhwYXJ0LnBhcnRzWzBdLCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKVxuICB9XG5cbiAgZ2V0V2hldGhlclVzZVNlbGVjdGVkRHMgPSAocGFydDogRXhwcmVzc2lvblBhcnQpOiBib29sZWFuID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUgfHwgIXRoaXMuc3RhdGUuc2VsZWN0ZWREc0lkKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFydC5kYXRhU291cmNlSWQgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWREc0lkXG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdERzSWQgPSAoKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHNcbiAgICBjb25zdCBncm91cGVkUGFydHMgPSBncm91cEV4cHJlc3Npb25QYXJ0c0J5RnVuY3Rpb24ocGFydHMpXG5cbiAgICBpZiAodGhpcy5nZXRXaGV0aGVyRXhwcmVzc2lvbklzRnVuY0FuZEhhc09uZVBhcnQoZ3JvdXBlZFBhcnRzKSkge1xuICAgICAgY29uc3QgZ3JvdXBlZEZ1bmNQYXJ0ID0gZ3JvdXBlZFBhcnRzWzBdXG4gICAgICBpZiAodGhpcy5oYXNOb1BhcmFtQW5kRHNFbmFibGVkKGdyb3VwZWRGdW5jUGFydCkpIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwZWRGdW5jUGFydC5kYXRhU291cmNlSWRcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNPbmVQYXJhbUFuZERzRW5hYmxlZChncm91cGVkRnVuY1BhcnQpKSB7XG4gICAgICAgIHJldHVybiBncm91cGVkRnVuY1BhcnQucGFydHNbMF0uZGF0YVNvdXJjZUlkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldERlZmF1bHRGdW5jID0gKCk6IEV4cHJlc3Npb25GdW5jdGlvbnMgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1xuICAgIGNvbnN0IGdyb3VwZWRQYXJ0cyA9IGdyb3VwRXhwcmVzc2lvblBhcnRzQnlGdW5jdGlvbihwYXJ0cylcblxuICAgIGlmICh0aGlzLmdldFdoZXRoZXJFeHByZXNzaW9uSXNGdW5jQW5kSGFzT25lUGFydChncm91cGVkUGFydHMpKSB7XG4gICAgICBjb25zdCBncm91cGVkRnVuY1BhcnQgPSBncm91cGVkUGFydHNbMF1cbiAgICAgIHJldHVybiBncm91cGVkRnVuY1BhcnQuZXhwIGFzIEV4cHJlc3Npb25GdW5jdGlvbnMgfHwgRXhwcmVzc2lvbkZ1bmN0aW9ucy5BdmVyYWdlXG4gICAgfVxuICAgIHJldHVybiBFeHByZXNzaW9uRnVuY3Rpb25zLkF2ZXJhZ2VcbiAgfVxuXG4gIGdldERlZmF1bHRKaW11RmllbGROYW1lID0gKGRzSWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzXG4gICAgY29uc3QgZ3JvdXBlZFBhcnRzID0gZ3JvdXBFeHByZXNzaW9uUGFydHNCeUZ1bmN0aW9uKHBhcnRzKVxuICAgIGNvbnN0IGdyb3VwZWRGdW5jUGFydCA9IGdyb3VwZWRQYXJ0c1swXVxuICAgIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzSWQpXG4gICAgY29uc3QgZGVmYXVsdEZpZWxkTmFtZSA9IGRzPy5nZXRJZEZpZWxkKClcblxuICAgIGlmICh0aGlzLmdldFdoZXRoZXJFeHByZXNzaW9uSXNGdW5jQW5kSGFzT25lUGFydChncm91cGVkUGFydHMpICYmIHRoaXMuaGFzT25lUGFyYW1BbmREc0VuYWJsZWQoZ3JvdXBlZEZ1bmNQYXJ0KSAmJiB0aGlzLmdldFdoZXRoZXJVc2VTZWxlY3RlZERzKGdyb3VwZWRGdW5jUGFydC5wYXJ0c1swXSkpIHtcbiAgICAgIHJldHVybiBncm91cGVkRnVuY1BhcnQucGFydHNbMF0uamltdUZpZWxkTmFtZSB8fCBkZWZhdWx0RmllbGROYW1lXG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RmllbGROYW1lXG4gIH1cblxuICBnZXREZWZhdWx0RXhwTmFtZSA9IChmaWVsZE5hbWU6IHN0cmluZywgZnVuYzogRXhwcmVzc2lvbkZ1bmN0aW9ucyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGAke2Z1bmN9KHske2ZpZWxkTmFtZX19KWBcbiAgfVxuXG4gIGdldEN1c3RvbUV4cE5hbWUgPSAoZmllbGROYW1lOiBzdHJpbmcsIGZ1bmM6IEV4cHJlc3Npb25GdW5jdGlvbnMsIHByZXZpb3VzRXhwTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAvLyBUaGF0IHByZXZpb3VzIGV4cHJlc3Npb24gbmFtZSBpcyB0aGUgc2FtZSBhcyBkZWZhdWx0IGV4cHJlc3Npb24gbmFtZSBpbXBsaWVzIHVzZXIgZGlkbid0IGNoYW5nZSB0aGUgZXhwcmVzc2lvbiBuYW1lIGJlZm9yZS5cbiAgICByZXR1cm4gcHJldmlvdXNFeHBOYW1lID09PSB0aGlzLmdldERlZmF1bHRFeHBOYW1lKGZpZWxkTmFtZSwgZnVuYykgPyAnJyA6IChwcmV2aW91c0V4cE5hbWUgfHwgJycpXG4gIH1cblxuICBnZXREYXRhU291cmNlSWQgPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZERzSWRcbiAgfVxuXG4gIGdldFNlbGVjdGVkRmllbGROYW1lID0gKGZpZWxkczogeyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0sIGZpZWxkSmltdU5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCFmaWVsZHMpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gZmllbGRKaW11TmFtZSAmJiBmaWVsZHNbZmllbGRKaW11TmFtZV0gJiYgKGZpZWxkc1tmaWVsZEppbXVOYW1lXS5hbGlhcyB8fCBmaWVsZHNbZmllbGRKaW11TmFtZV0ubmFtZSlcbiAgfVxuXG4gIGdldFNlbGVjdGVkSmltdUZpZWxkTmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZEppbXVGaWVsZE5hbWVcbiAgfVxuXG4gIGdldFNlbGVjdGVkRnVuY3Rpb24gPSAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZEZ1bmN0aW9uXG4gIH1cblxuICAvKipcbiAgICogSWYgZnVuY3Rpb24gaXMgY291bnQsIHdpbGwgcmV0dXJuIGFsbCBmaWVsZHMsIGVsc2UsIHdpbGwgcmV0dXJuIG51bWJlciBmaWVsZHMuXG4gICAqL1xuICBnZXRGaWVsZHNCeUZ1bmMgPSAoZHNJZDogc3RyaW5nLCBmdW5jOiBFeHByZXNzaW9uRnVuY3Rpb25zKTogeyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0gPT4ge1xuICAgIGlmICghZHNJZCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICAgIGNvbnN0IGRzID0gdGhpcy5kc01hbmFnZXIgJiYgdGhpcy5kc01hbmFnZXIuZ2V0RGF0YVNvdXJjZShkc0lkKVxuICAgIGNvbnN0IHNjaGVtYSA9IGRzICYmIGRzLmdldFNjaGVtYSgpXG4gICAgY29uc3QgZmllbGRzID0gc2NoZW1hICYmIHNjaGVtYS5maWVsZHNcblxuICAgIGlmICghZmllbGRzKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBpZiAoZnVuYyA9PT0gRXhwcmVzc2lvbkZ1bmN0aW9ucy5Db3VudCkge1xuICAgICAgcmV0dXJuIGZpZWxkcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RmllbGRzID0ge31cbiAgICBjb25zdCBpc01pbk9yTWF4ID0gZnVuYyA9PT0gRXhwcmVzc2lvbkZ1bmN0aW9ucy5NaW4gfHwgZnVuYyA9PT0gRXhwcmVzc2lvbkZ1bmN0aW9ucy5NYXhcbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZiA9PiB7XG4gICAgICBpZiAoZmllbGRzW2ZdLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyIHx8IChpc01pbk9yTWF4ICYmIGZpZWxkc1tmXS50eXBlID09PSBKaW11RmllbGRUeXBlLkRhdGUpKSB7XG4gICAgICAgIG5ld0ZpZWxkc1tmXSA9IGZpZWxkc1tmXVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0ZpZWxkc1xuICB9XG5cbiAgZ2V0RHNMYWJlbCA9IChkc0lkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGRzID0gdGhpcy5kc01hbmFnZXIgJiYgdGhpcy5kc01hbmFnZXIuZ2V0RGF0YVNvdXJjZShkc0lkKVxuICAgIGlmIChkcykge1xuICAgICAgcmV0dXJuIGRzLmdldExhYmVsKCkgfHwgZHMuaWRcbiAgICB9XG4gICAgcmV0dXJuIGRzSWRcbiAgfVxuXG4gIGdldFNlbGVjdGVkVXNlRGF0YVNvdXJjZSA9ICgpOiBJTVVzZURhdGFTb3VyY2UgPT4ge1xuICAgIGNvbnN0IGQgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodGhpcy5zdGF0ZS5zZWxlY3RlZERzSWQpXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkRHNJZCB8fCAhZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIEltbXV0YWJsZSh7XG4gICAgICBkYXRhU291cmNlSWQ6IGQuaWQsXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkLmdldE1haW5EYXRhU291cmNlKCkuaWQsXG4gICAgICBkYXRhVmlld0lkOiBkLmRhdGFWaWV3SWQsXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBkLmdldFJvb3REYXRhU291cmNlKCk/LmlkXG4gICAgfSlcbiAgfVxuXG4gIG9uRmllbGRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEppbXVGaWVsZE5hbWU6IHZhbHVlIH0pXG4gIH1cblxuICBvbkZ1bmN0aW9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWUgYXMgRXhwcmVzc2lvbkZ1bmN0aW9uc1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZ1bmN0aW9uOiB2YWx1ZSB9KVxuICB9XG5cbiAgb25DdXN0b21FeHBOYW1lQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBjdXN0b21FeHBOYW1lOiBlLnRhcmdldC52YWx1ZSB9KSB9XG5cbiAgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5nZXRGaWVsZHNCeUZ1bmModGhpcy5zdGF0ZS5zZWxlY3RlZERzSWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRGdW5jdGlvbilcbiAgICBjb25zdCBmaWVsZE5hbWUgPSB0aGlzLmdldFNlbGVjdGVkRmllbGROYW1lKGZpZWxkcywgdGhpcy5zdGF0ZS5zZWxlY3RlZEppbXVGaWVsZE5hbWUpXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuc3RhdGUuY3VzdG9tRXhwTmFtZSB8fCB0aGlzLmdldERlZmF1bHRFeHBOYW1lKGZpZWxkTmFtZSwgdGhpcy5zdGF0ZS5zZWxlY3RlZEZ1bmN0aW9uKVxuICAgIGNvbnN0IHBhcnRzOiBFeHByZXNzaW9uUGFydFtdID0gW3tcbiAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvbixcbiAgICAgIGV4cDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZ1bmN0aW9uXG4gICAgfSwge1xuICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLk9wZXJhdG9yLFxuICAgICAgZXhwOiAnKCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQsXG4gICAgICBleHA6IGB7JHtmaWVsZE5hbWV9fWAsXG4gICAgICBkYXRhU291cmNlSWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWREc0lkLFxuICAgICAgamltdUZpZWxkTmFtZTogdGhpcy5zdGF0ZS5zZWxlY3RlZEppbXVGaWVsZE5hbWVcbiAgICB9LCB7XG4gICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3IsXG4gICAgICBleHA6ICcpJ1xuICAgIH1dXG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgbmFtZSwgcGFydHMgfSlcbiAgfVxuXG4gIG9uU2VsZWN0ZWRVc2VEc0NoYW5nZSA9ICh1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRHNJZDogdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkIH0pIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzQnlGdW5jKHRoaXMuc3RhdGUuc2VsZWN0ZWREc0lkLCB0aGlzLnN0YXRlLnNlbGVjdGVkRnVuY3Rpb24pXG4gICAgY29uc3QgTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3IgPSB0aGlzLnN0YXRlLk1haW5EYXRhQW5kVmlld1NlbGVjdG9yXG4gICAgY29uc3QgRGF0YVZpZXdQcmlvcml0eSA9IHRoaXMuc3RhdGUuRGF0YVZpZXdQcmlvcml0eVxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRGaWVsZE5hbWUoZmllbGRzLCB0aGlzLnN0YXRlLnNlbGVjdGVkSmltdUZpZWxkTmFtZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXhwcmVzc2lvbi1idWlsZGVyLXRhYiBzdGF0aXN0aWNzLXRhYiBjb21tb24tdGFiJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtb3B0aW9uJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93LTEnPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBwbGFjZWhvbGRlcj17dGhpcy5nZXREZWZhdWx0RXhwTmFtZShmaWVsZE5hbWUsIHRoaXMuc3RhdGUuc2VsZWN0ZWRGdW5jdGlvbil9IHZhbHVlPXt0aGlzLnN0YXRlLmN1c3RvbUV4cE5hbWV9IGNsYXNzTmFtZT0nZmxleC1ncm93LTEnIHNpemU9J3NtJyBvbkNoYW5nZT17dGhpcy5vbkN1c3RvbUV4cE5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtcbiAgICAgICAgICBNYWluRGF0YUFuZFZpZXdTZWxlY3RvciAmJiA8TWFpbkRhdGFBbmRWaWV3U2VsZWN0b3JcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RlZFVzZURzQ2hhbmdlfSB1c2VTZWxlY3Rpb25EYXRhVmlldyBjbGFzc05hbWU9J3AtNCdcbiAgICAgICAgICAgIHNlbGVjdGVkVXNlRGF0YVNvdXJjZT17dGhpcy5nZXRTZWxlY3RlZFVzZURhdGFTb3VyY2UoKX0gZGVmYXVsdERhdGFWaWV3UHJpb3JpdHk9e0RhdGFWaWV3UHJpb3JpdHkuU2Vjb25kfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGEtb3B0aW9uIG1iLTMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCB0ZXh0LXRydW5jYXRlIG1iLTMgb3B0aW9uLWxhYmVsJz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnb3BlcmF0b3InLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm9wZXJhdG9yIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3ctMSc+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdGVkRnVuY3Rpb24oKX0gY2xhc3NOYW1lPSdzZWxlY3QtbWF4LXdpZHRoJyBzaXplPSdzbSdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GdW5jdGlvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKEV4cHJlc3Npb25GdW5jdGlvbnMpLm1hcCgoZiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0V4cHJlc3Npb25GdW5jdGlvbnNbZl19IGtleT17aX0gY2xhc3NOYW1lPSdzZWxlY3QtbWF4LXdpZHRoIHRleHQtdHJ1bmNhdGUnPntFeHByZXNzaW9uRnVuY3Rpb25zW2ZdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRhLW9wdGlvbiBtYi0zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgdGV4dC10cnVuY2F0ZSBtYi0zIG9wdGlvbi1sYWJlbCc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2ZpZWxkJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5maWVsZCB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93LTEnPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEppbXVGaWVsZE5hbWUoKX0gc2l6ZT0nc20nXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9IGNsYXNzTmFtZT0nc2VsZWN0LW1heC13aWR0aCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpZWxkcyAmJiBPYmplY3Qua2V5cyhmaWVsZHMpLm1hcCgoZiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZpZWxkc1tmXS5qaW11TmFtZX0ga2V5PXtpfSBjbGFzc05hbWU9J3NlbGVjdC1tYXgtd2lkdGggdGV4dC10cnVuY2F0ZSc+e2ZpZWxkc1tmXS5hbGlhcyB8fCBmaWVsZHNbZl0ubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1vcHRpb24gdy0xMDAgbXQtMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCc+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlfSB0eXBlPSdwcmltYXJ5JyBjbGFzc05hbWU9J3N0YXQtaW50ZXItYnRuJyB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2luc2VydCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuaW5zZXJ0IH0pfVxuICAgICAgICAgICBkaXNhYmxlZD17IU9iamVjdC5rZXlzKGZpZWxkcyB8fCB7fSkuaW5jbHVkZXModGhpcy5nZXRTZWxlY3RlZEppbXVGaWVsZE5hbWUoKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2luc2VydCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuaW5zZXJ0IH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIHR5cGUgSW1tdXRhYmxlQXJyYXksIGNsYXNzTmFtZXMsIHR5cGUgRXhwcmVzc2lvbiwgdHlwZSBJbnRsU2hhcGUsIGluamVjdEludGwsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsXG4gIEV4cHJlc3Npb25QYXJ0VHlwZSwgTXVsdGlwbGVEYXRhU291cmNlQ29tcG9uZW50LCBncm91cEV4cHJlc3Npb25QYXJ0c0J5RnVuY3Rpb25cbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuXG5pbXBvcnQgQXR0cmlidXRlVGFiIGZyb20gJy4vY29tcG9uZW50cy9hdHRyaWJ1dGUnXG5pbXBvcnQgRXhwcmVzc2lvblRhYiBmcm9tICcuL2NvbXBvbmVudHMvZXhwcmVzc2lvbidcbmltcG9ydCBTdGF0aXN0aWNzVGFiIGZyb20gJy4vY29tcG9uZW50cy9zdGF0aXN0aWNzJ1xuXG5pbXBvcnQgdHlwZSB7IEV4cHJlc3Npb25CdWlsZGVyUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7IEV4cHJlc3Npb25CdWlsZGVyVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbi8qKlxuICogUHJvcHMgb2YgZXhwcmVzc2lvbiBidWlsZGVyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IHR5cGUgeyBFeHByZXNzaW9uQnVpbGRlclByb3BzIH1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaW50bDogSW50bFNoYXBlXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGFjdGl2ZVRhYjogRXhwcmVzc2lvbkJ1aWxkZXJUeXBlXG59XG5cbi8qKlxuICogVGhlIGBFeHByZXNzaW9uQnVpbGRlcmAgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBidWlsZCBhbiBFeHByZXNzaW9uLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBFeHByZXNzaW9uQnVpbGRlciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZXhwcmVzc2lvbi1idWlsZGVyJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBfRXhwcmVzc2lvbkJ1aWxkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEV4cHJlc3Npb25CdWlsZGVyUHJvcHMgJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xuICBleHByZXNzaW9uRnJvbSA9IHtcbiAgICBbRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkF0dHJpYnV0ZV06IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdhdHRyaWJ1dGUnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmF0dHJpYnV0ZSB9KSxcbiAgICBbRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLlN0YXRpc3RpY3NdOiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnc3RhdGlzdGljcycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc3RhdGlzdGljcyB9KSxcbiAgICBbRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkV4cHJlc3Npb25dOiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnZXhwcmVzc2lvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuZXhwcmVzc2lvbiB9KVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVRhYjogdGhpcy5nZXRBY3RpdmVFeHByZXNzaW9uRnJvbSgpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEV4cHJlc3Npb25CdWlsZGVyUHJvcHMgJiBFeHRyYVByb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdXBkYXRpbmcgdGFiIHdoZW4gY2xpY2tpbmcgZGlmZmVyZW50IGV4cHJlc3Npb25zIGluIHRoZSBlZGl0b3JcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlcyAhPT0gcHJldlByb3BzLnR5cGVzIHx8IHRoaXMucHJvcHMuZXhwcmVzc2lvbiAhPT0gcHJldlByb3BzLmV4cHJlc3Npb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWI6IHRoaXMuZ2V0QWN0aXZlRXhwcmVzc2lvbkZyb20oKSB9KVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGU6IEV4cHJlc3Npb24pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgfVxuXG4gIGdldEFjdGl2ZUV4cHJlc3Npb25Gcm9tID0gKCk6IEV4cHJlc3Npb25CdWlsZGVyVHlwZSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4cHJlc3Npb24gfHwgIXRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cyB8fCB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlc1swXVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmV4cHJlc3Npb24ubnVtYmVyRm9ybWF0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkV4cHJlc3Npb24pID8gRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkV4cHJlc3Npb24gOiB0aGlzLnByb3BzLnR5cGVzWzBdXG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBlZFBhcnRzID0gZ3JvdXBFeHByZXNzaW9uUGFydHNCeUZ1bmN0aW9uKHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cylcblxuICAgIGlmIChncm91cGVkUGFydHMubGVuZ3RoID09PSAxICYmIGdyb3VwZWRQYXJ0c1swXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uQnVpbGRlclR5cGUuQXR0cmlidXRlKVxuICAgICAgICA/IEV4cHJlc3Npb25CdWlsZGVyVHlwZS5BdHRyaWJ1dGVcbiAgICAgICAgOiAodGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkV4cHJlc3Npb24pID8gRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkV4cHJlc3Npb24gOiB0aGlzLnByb3BzLnR5cGVzWzBdKVxuICAgIH1cblxuICAgIGlmIChncm91cGVkUGFydHMubGVuZ3RoID09PSAxICYmIGdyb3VwZWRQYXJ0c1swXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uQnVpbGRlclR5cGUuU3RhdGlzdGljcylcbiAgICAgICAgPyBFeHByZXNzaW9uQnVpbGRlclR5cGUuU3RhdGlzdGljc1xuICAgICAgICA6ICh0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uQnVpbGRlclR5cGUuRXhwcmVzc2lvbikgPyBFeHByZXNzaW9uQnVpbGRlclR5cGUuRXhwcmVzc2lvbiA6IHRoaXMucHJvcHMudHlwZXNbMF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZXMuc29tZShmID0+IGYgPT09IEV4cHJlc3Npb25CdWlsZGVyVHlwZS5FeHByZXNzaW9uKSA/IEV4cHJlc3Npb25CdWlsZGVyVHlwZS5FeHByZXNzaW9uIDogdGhpcy5wcm9wcy50eXBlc1swXVxuICB9XG5cbiAgZ2V0VGFiID0gKHRhYjogRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLCBpc0FjdGl2ZTogYm9vbGVhbiwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBleHByZXNzaW9uOiBFeHByZXNzaW9uIHwgSW1tdXRhYmxlT2JqZWN0PEV4cHJlc3Npb24+KSA9PiB7XG4gICAgc3dpdGNoICh0YWIpIHtcbiAgICAgIGNhc2UgRXhwcmVzc2lvbkJ1aWxkZXJUeXBlLkF0dHJpYnV0ZTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXR0cmlidXRlVGFiXG4gICAgICAgICAgICB0eXBlcz17dGhpcy5wcm9wcy5maWVsZFR5cGVzfSB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e2V4cHJlc3Npb259IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgaW50bD17dGhpcy5wcm9wcy5pbnRsfSB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlIEV4cHJlc3Npb25CdWlsZGVyVHlwZS5TdGF0aXN0aWNzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTdGF0aXN0aWNzVGFiXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e2V4cHJlc3Npb259IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgaW50bD17dGhpcy5wcm9wcy5pbnRsfSB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlIEV4cHJlc3Npb25CdWlsZGVyVHlwZS5FeHByZXNzaW9uOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFeHByZXNzaW9uVGFiXG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc30gdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXtleHByZXNzaW9ufSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIGludGw9e3RoaXMucHJvcHMuaW50bH0gaXNBY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgb25BY3RpdmVUYWJDaGFuZ2UgPSAodHlwZXM6IEV4cHJlc3Npb25CdWlsZGVyVHlwZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWI6IHR5cGVzIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TXVsdGlwbGVEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfT5cbiAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3LTEwMCBoLTEwMCcsIHsgW3RoaXMucHJvcHMuY2xhc3NOYW1lXTogISF0aGlzLnByb3BzLmNsYXNzTmFtZSB9KX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwIGNvbXBvbmVudC1leHByZXNzaW9uLWJ1aWxkZXInPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAodGhpcy5wcm9wcy50eXBlcyAmJiB0aGlzLnByb3BzLnR5cGVzLmxlbmd0aCA9PT0gMSkgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMTAwJywgeyAnaGFzLW5hdic6IHRoaXMucHJvcHMudHlwZXMgJiYgdGhpcy5wcm9wcy50eXBlcy5sZW5ndGggPiAxIH0pfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRUYWIodGhpcy5wcm9wcy50eXBlc1swXSwgdHJ1ZSwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcywgdGhpcy5wcm9wcy5leHByZXNzaW9uKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZXMgJiYgdGhpcy5wcm9wcy50eXBlcy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyA8VGFic1xuICAgICAgICAgICAgICAgICAgICBmaWxsIHR5cGU9J3VuZGVybGluZScgY2xhc3NOYW1lPSdoLTEwMCcgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV4cHJlc3Npb25CdWlsZGVyVHlwZSkgPT4geyB0aGlzLm9uQWN0aXZlVGFiQ2hhbmdlKGUpIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVzLmFzTXV0YWJsZSgpLm1hcCgodCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IHRoaXMuZXhwcmVzc2lvbkZyb21bdF1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFiIGlkPXt0fSB0aXRsZT17dGFiTmFtZX0ga2V5PXt0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtMTAwJywgeyAnaGFzLW5hdic6IHRoaXMucHJvcHMudHlwZXMgJiYgdGhpcy5wcm9wcy50eXBlcy5sZW5ndGggPiAxIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRUYWIodCwgdCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMsIHRoaXMucHJvcHMuZXhwcmVzc2lvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L011bHRpcGxlRGF0YVNvdXJjZUNvbXBvbmVudD5cbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIGJ1aWxkIGFuIHtAbGluayBFeHByZXNzaW9ufS5cbiAqL1xuY29uc3QgRXhwcmVzc2lvbkJ1aWxkZXIgPSBpbmplY3RJbnRsPCdpbnRsJywgRXhwcmVzc2lvbkJ1aWxkZXJQcm9wcyAmIHsgaW50bDogSW50bFNoYXBlIH0+KHdpdGhTdHlsZXMoX0V4cHJlc3Npb25CdWlsZGVyLCAnRXhwcmVzc2lvbkJ1aWxkZXInKSlcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25CdWlsZGVyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlUHJvcHMge1xuICBleHA6IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGlzRWRpdGFibGU6IGJvb2xlYW5cbiAgdGFiSW5kZXg/OiBudW1iZXJcbiAgdGl0bGU/OiBzdHJpbmdcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICByZW5kZXJDb21tYT86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cEJhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEJhc2VQcm9wcywgdW5rbm93bj4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBjb250ZW50RWRpdGFibGU9eyEhdGhpcy5wcm9wcy5pc0VkaXRhYmxlfSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZSB8fCBudWxsfSB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleCB8fCBudWxsfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5leHB9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBSZWFjdCwgdHlwZSBFeHByZXNzaW9uLCB0eXBlIEV4cHJlc3Npb25QYXJ0LCBFeHByZXNzaW9uRnVuY3Rpb25zLCBFeHByZXNzaW9uUGFydFR5cGUsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1GaWVsZFNjaGVtYSwgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIEludGxTaGFwZSwgRGF0YVNvdXJjZU1hbmFnZXIsIG1vZHVsZUxvYWRlciwgdHlwZSBVc2VEYXRhU291cmNlLCBjbGFzc05hbWVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgSW1tdXRhYmxlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFRhYiwgVGFicywgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcblxuaW1wb3J0IHsgYXJlRnVuY3Rpb25QYXJ0cywgZ2V0SW5kZXhCeVBhcnRJZCwgZ2V0UGFydElkQnlJbmRleCwgZ2V0U2VsZWN0aW9uUG9zSW5uZXJQYXJ0LCBnZXRQcmV2aW91c05vZGVPZlNlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdHlwZSBFeHBTZWxlY3Rpb24gfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvblxuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgZXh0ZXJuYWxJZDogc3RyaW5nXG4gIGV4cFNlbGVjdGlvbjogRXhwU2VsZWN0aW9uXG4gIGluRWRpdGFibGVQYXJ0OiBib29sZWFuXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnRcbiAgaW50bDogSW50bFNoYXBlXG4gIHdpZGdldElkOiBzdHJpbmdcbiAgLyoqXG4gICAqIGU6IG5ldyBleHByZXNzaW9uXG4gICAqIHBhcnRJZDogaWQgb2YgYWRkZWQgbmV3IHBhcnRcbiAgICogaXNSZXBsYWNpbmc6IGlmIHRydWUsIHdpbGwgcmVwbGFjZSBhIGV4aXN0ZWQgcGFydCB3aXRoIG5ldyBwYXJ0IChvbmx5IHdoZW4gaXMgaW4gZWRpdGFibGUgcGFydCBhbmQgdGhlIHBhcnQgaXMgZmllbGQgb3IgZnVuY3Rpb24pXG4gICAqL1xuICBvblNlbGVjdDogKGU6IEV4cHJlc3Npb24sIHBhcnRJZDogc3RyaW5nLCBpc1JlcGxhY2luZzogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBhY3RpdmU6IEV4cEVkaXRvckhlbHBlclRhYnNcbiAgRmllbGRTZWxlY3RvcjogYW55XG59XG5cbmVudW0gRXhwRWRpdG9ySGVscGVyVGFicyB7XG4gIEZpZWxkcyA9ICdGSUVMRFMnLFxuICBGdW5jdGlvbnMgPSAnRlVOQ1RJT05TJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBFZGl0b3JIZWxwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBkc01hbmFnZXI6IERhdGFTb3VyY2VNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBfX3VubW91bnQgPSBmYWxzZVxuICBFeHBFZGl0b3JIZWxwZXJUYWJzID0ge1xuICAgIFtFeHBFZGl0b3JIZWxwZXJUYWJzLkZpZWxkc106IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdmaWVsZHMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmZpZWxkcyB9KSxcbiAgICBbRXhwRWRpdG9ySGVscGVyVGFicy5GdW5jdGlvbnNdOiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnZnVuY3Rpb25zJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5mdW5jdGlvbnMgfSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IGVkaXRpbmdQYXJ0SW5kZXggPSB0aGlzLmdldEVkaXRpbmdQYXJ0SW5kZXgoKVxuICAgIGNvbnN0IGVkaXRpbmdQYXJ0ID0gdGhpcy5wcm9wcy5leHByZXNzaW9uPy5wYXJ0cz8uW2VkaXRpbmdQYXJ0SW5kZXhdXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZWRpdGluZ1BhcnQ/LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvbiA/IEV4cEVkaXRvckhlbHBlclRhYnMuRnVuY3Rpb25zIDogRXhwRWRpdG9ySGVscGVyVGFicy5GaWVsZHMsXG4gICAgICBGaWVsZFNlbGVjdG9yOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcbiAgICBtb2R1bGVMb2FkZXIubG9hZE1vZHVsZSgnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcicpLnRoZW4oY2xhenogPT4geyAhdGhpcy5fX3VubW91bnQgJiYgdGhpcy5zZXRTdGF0ZSh7IEZpZWxkU2VsZWN0b3I6IGNsYXp6LkZpZWxkU2VsZWN0b3IgfSkgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuZXhwU2VsZWN0aW9uICE9PSB0aGlzLnByb3BzLmV4cFNlbGVjdGlvbiAmJiB0aGlzLmdldElzUmVwbGFjaW5nKCkpIHtcbiAgICAgIGNvbnN0IGVkaXRpbmdQYXJ0SW5kZXggPSB0aGlzLmdldEVkaXRpbmdQYXJ0SW5kZXgoKVxuICAgICAgY29uc3QgZWRpdGluZ1BhcnQgPSB0aGlzLnByb3BzLmV4cHJlc3Npb24/LnBhcnRzPy5bZWRpdGluZ1BhcnRJbmRleF1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGVkaXRpbmdQYXJ0Py50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRnVuY3Rpb24gPyBFeHBFZGl0b3JIZWxwZXJUYWJzLkZ1bmN0aW9ucyA6IEV4cEVkaXRvckhlbHBlclRhYnMuRmllbGRzIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMuX191bm1vdW50ID0gdHJ1ZVxuICB9XG5cbiAgZ2V0VGFiID0gKHRhYjogRXhwRWRpdG9ySGVscGVyVGFicykgPT4ge1xuICAgIGNvbnN0IEZpZWxkU2VsZWN0b3IgPSB0aGlzLnN0YXRlLkZpZWxkU2VsZWN0b3JcbiAgICBzd2l0Y2ggKHRhYikge1xuICAgICAgY2FzZSBFeHBFZGl0b3JIZWxwZXJUYWJzLkZpZWxkczpcbiAgICAgICAgcmV0dXJuIEZpZWxkU2VsZWN0b3IgJiYgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkU2VsZWN0fVxuICAgICAgICAgIHVzZVNlbGVjdGlvbkRhdGFWaWV3XG4gICAgICAgICAgdXNlUG9wdWxhdGVkRGF0YVZpZXdcbiAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5nZXRTZWxlY3RlZEZpZWxkcygpfVxuICAgICAgICAvPlxuICAgICAgY2FzZSBFeHBFZGl0b3JIZWxwZXJUYWJzLkZ1bmN0aW9uczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RnVuY3Rpb25TZWxlY3RvclxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25GdW5jdGlvblNlbGVjdH1cbiAgICAgICAgICAgIHNlbGVjdGVkRnVuY3Rpb249e3RoaXMuZ2V0U2VsZWN0ZWRGdW5jdGlvbigpfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRGaWVsZHMgPSAoKTogSW1tdXRhYmxlT2JqZWN0PHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogc3RyaW5nW10gfT4gPT4ge1xuICAgIGNvbnN0IGVkaXRpbmdQYXJ0SW5kZXggPSB0aGlzLmdldEVkaXRpbmdQYXJ0SW5kZXgoKVxuICAgIGNvbnN0IGVkaXRpbmdQYXJ0ID0gdGhpcy5wcm9wcy5leHByZXNzaW9uPy5wYXJ0cz8uW2VkaXRpbmdQYXJ0SW5kZXhdXG4gICAgaWYgKGVkaXRpbmdQYXJ0Py50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRmllbGRKaW11TmFtZSA9IGVkaXRpbmdQYXJ0LmppbXVGaWVsZE5hbWVcbiAgICAgIGlmIChzZWxlY3RlZEZpZWxkSmltdU5hbWUpIHtcbiAgICAgICAgY29uc3QgZHNJZCA9IGVkaXRpbmdQYXJ0LmRhdGFTb3VyY2VJZFxuICAgICAgICBjb25zdCBmaWVsZHMgPSBkc0lkID8gSW1tdXRhYmxlKHsgW2RzSWRdOiBbc2VsZWN0ZWRGaWVsZEppbXVOYW1lXSB9KSA6IG51bGxcbiAgICAgICAgcmV0dXJuIGZpZWxkc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRGdW5jdGlvbiA9ICgpOiBFeHByZXNzaW9uRnVuY3Rpb25zID0+IHtcbiAgICBjb25zdCBlZGl0aW5nUGFydEluZGV4ID0gdGhpcy5nZXRFZGl0aW5nUGFydEluZGV4KClcbiAgICBjb25zdCBlZGl0aW5nUGFydCA9IHRoaXMucHJvcHMuZXhwcmVzc2lvbj8ucGFydHM/LltlZGl0aW5nUGFydEluZGV4XVxuICAgIGlmIChlZGl0aW5nUGFydD8udHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLkZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gZWRpdGluZ1BhcnQuZXhwIGFzIEV4cHJlc3Npb25GdW5jdGlvbnNcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIG9uRnVuY3Rpb25TZWxlY3QgPSAoZnVuY3Rpb25OYW1lOiBFeHByZXNzaW9uRnVuY3Rpb25zKSA9PiB7XG4gICAgaWYgKCFmdW5jdGlvbk5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5ld1BhcnQ6IEV4cHJlc3Npb25QYXJ0ID0ge1xuICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLkZ1bmN0aW9uLFxuICAgICAgZXhwOiBmdW5jdGlvbk5hbWVcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFydHM6IEV4cHJlc3Npb25QYXJ0W11cbiAgICBjb25zdCBpc1JlcGxhY2luZyA9IHRoaXMuZ2V0SXNSZXBsYWNpbmcoKVxuXG4gICAgaWYgKGlzUmVwbGFjaW5nKSB7XG4gICAgICBuZXdQYXJ0cyA9IFtcbiAgICAgICAgbmV3UGFydFxuICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQYXJ0cyA9IFtcbiAgICAgICAgbmV3UGFydCxcbiAgICAgICAgeyB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3IsIGV4cDogJygnIH0sXG4gICAgICAgIHsgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLk9wZXJhdG9yLCBleHA6ICcpJyB9XG4gICAgICBdXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRXhwcmVzc2lvbihuZXdQYXJ0cywgdGhpcy5wcm9wcy5leHByZXNzaW9uKVxuICB9XG5cbiAgb25GaWVsZFNlbGVjdCA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSwgaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGZpZWxkID0gYWxsU2VsZWN0ZWRGaWVsZHMgJiYgYWxsU2VsZWN0ZWRGaWVsZHNbMF1cbiAgICBpZiAoIWZpZWxkIHx8ICFkcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG5ld1BhcnQ6IEV4cHJlc3Npb25QYXJ0ID0ge1xuICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLkZpZWxkLFxuICAgICAgZXhwOiBgeyR7ZmllbGQuYWxpYXMgfHwgZmllbGQubmFtZX19YCxcbiAgICAgIGRhdGFTb3VyY2VJZDogZHMuaWQsXG4gICAgICBqaW11RmllbGROYW1lOiBmaWVsZC5qaW11TmFtZSxcbiAgICAgIGlzRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHRcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VFeHByZXNzaW9uKFtuZXdQYXJ0XSwgdGhpcy5wcm9wcy5leHByZXNzaW9uKVxuICB9XG5cbiAgb25BY3RpdmVUYWJDaGFuZ2UgPSAodGFiOiBFeHBFZGl0b3JIZWxwZXJUYWJzKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdGFiIH0pXG4gIH1cblxuICBnZXRTZWxlY3Rpb25QYXJ0SWQgPSAoKTogc3RyaW5nID0+IHtcbiAgICBsZXQgcGFydElkXG4gICAgaWYgKHRoaXMucHJvcHMuaW5FZGl0YWJsZVBhcnQpIHtcbiAgICAgIGNvbnN0IHMgPSBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5wcm9wcy5leHRlcm5hbElkLCB0aGlzLnByb3BzLmNvbnRhaW5lcilcbiAgICAgIHBhcnRJZCA9IHMgJiYgcy5wYXJ0SWRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbiA9IGdldFByZXZpb3VzTm9kZU9mU2VsZWN0aW9uKHRoaXMucHJvcHMuZXh0ZXJuYWxJZClcbiAgICAgIHBhcnRJZCA9IG4gJiYgbi5pZFxuICAgIH1cblxuICAgIHBhcnRJZCA9IHBhcnRJZCB8fCB0aGlzLnByb3BzLmV4cFNlbGVjdGlvbj8ucGFydElkXG5cbiAgICBpZiAoIXBhcnRJZCkge1xuICAgICAgcGFydElkID0gZ2V0UGFydElkQnlJbmRleCh0aGlzLnByb3BzLmV4dGVybmFsSWQsIDApXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRJZFxuICB9XG5cbiAgY2hhbmdlRXhwcmVzc2lvbiA9IChuZXdQYXJ0czogRXhwcmVzc2lvblBhcnRbXSwgZXhwcmVzc2lvbjogRXhwcmVzc2lvbikgPT4ge1xuICAgIGlmICghbmV3UGFydHMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzUmVwbGFjaW5nID0gdGhpcy5nZXRJc1JlcGxhY2luZygpXG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmdldE5ld1BhcnRJbmRleChuZXdQYXJ0cywgZXhwcmVzc2lvbiwgaXNSZXBsYWNpbmcpXG4gICAgY29uc3QgbmV3UGFydElkID0gZ2V0UGFydElkQnlJbmRleCh0aGlzLnByb3BzLmV4dGVybmFsSWQsIG5ld0luZGV4KVxuICAgIGxldCBwID0gKGV4cHJlc3Npb24gJiYgZXhwcmVzc2lvbi5wYXJ0cyAmJiBleHByZXNzaW9uLnBhcnRzLnNsaWNlKCkpIHx8IFtdXG5cbiAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgIHAgPSBuZXdQYXJ0c1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWxldGVOdW0gPSBpc1JlcGxhY2luZyA/IDEgOiAwXG4gICAgICBwLnNwbGljZShuZXdJbmRleCwgZGVsZXRlTnVtLCAuLi5uZXdQYXJ0cylcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHsgbmFtZTogKGV4cHJlc3Npb24gJiYgZXhwcmVzc2lvbi5uYW1lKSB8fCB0aGlzLnByb3BzLmV4dGVybmFsSWQsIHBhcnRzOiBwIH0sIG5ld1BhcnRJZCwgaXNSZXBsYWNpbmcpXG4gIH1cblxuICBnZXROZXdQYXJ0SW5kZXggPSAobmV3UGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIGV4cHJlc3Npb246IEV4cHJlc3Npb24sIGlzUmVwbGFjaW5nOiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgICBpZiAoIW5ld1BhcnRzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHAgPSAoZXhwcmVzc2lvbiAmJiBleHByZXNzaW9uLnBhcnRzKSB8fCBbXVxuICAgIGxldCBuZXdJbmRleFxuXG4gICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXdJbmRleCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUmVwbGFjaW5nKSB7IC8vIGlzIHJlcGxhY2luZyBvbmUgZXhpc3RlZCBwYXJ0XG4gICAgICAgIG5ld0luZGV4ID0gdGhpcy5nZXRFZGl0aW5nUGFydEluZGV4KClcbiAgICAgIH0gZWxzZSB7IC8vIGlzIGFkZGluZyBuZXcgcGFydFxuICAgICAgICBjb25zdCBzZWxlY3Rpb25QYXJ0SWQgPSB0aGlzLmdldFNlbGVjdGlvblBhcnRJZCgpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeVBhcnRJZCh0aGlzLnByb3BzLmV4dGVybmFsSWQsIHNlbGVjdGlvblBhcnRJZClcbiAgICAgICAgbmV3SW5kZXggPSBhcmVGdW5jdGlvblBhcnRzKG5ld1BhcnRzKSA/IGluZGV4ICsgMSA6IGluZGV4ICsgbmV3UGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0luZGV4XG4gIH1cblxuICBnZXRFZGl0aW5nUGFydEluZGV4ID0gKCk6IG51bWJlciA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmluRWRpdGFibGVQYXJ0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBzZWxlY3Rpb25QYXJ0SWQgPSB0aGlzLmdldFNlbGVjdGlvblBhcnRJZCgpXG4gICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5UGFydElkKHRoaXMucHJvcHMuZXh0ZXJuYWxJZCwgc2VsZWN0aW9uUGFydElkKVxuICAgIHJldHVybiBpbmRleFxuICB9XG5cbiAgZ2V0SXNSZXBsYWNpbmcgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZWRpdGluZ1BhcnRJbmRleCA9IHRoaXMuZ2V0RWRpdGluZ1BhcnRJbmRleCgpXG4gICAgY29uc3QgZWRpdGluZ1BhcnQgPSB0aGlzLnByb3BzLmV4cHJlc3Npb24/LnBhcnRzPy5bZWRpdGluZ1BhcnRJbmRleF1cbiAgICByZXR1cm4gZWRpdGluZ1BhcnQ/LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GaWVsZCB8fCBlZGl0aW5nUGFydD8udHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLkZ1bmN0aW9uXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZXhwLWVkaXRvci1oZWxwZXIgaC0xMDAnPlxuICAgICAgICA8VGFic1xuICAgICAgICAgIGZpbGwgdHlwZT0ncGlsbHMnIGNsYXNzTmFtZT0naC0xMDAnIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IEV4cEVkaXRvckhlbHBlclRhYnMpID0+IHsgdGhpcy5vbkFjdGl2ZVRhYkNoYW5nZShlKSB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoRXhwRWRpdG9ySGVscGVyVGFicykubWFwKCh0YWJOYW1lKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhYktleSA9IEV4cEVkaXRvckhlbHBlclRhYnNbdGFiTmFtZV1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiIGlkPXt0YWJLZXl9IGtleT17dGFiS2V5fSB0aXRsZT17dGhpcy5FeHBFZGl0b3JIZWxwZXJUYWJzW3RhYktleV19PlxuICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0VGFiKHRoaXMuc3RhdGUuYWN0aXZlKX1cbiAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBGdW5jdGlvblNlbGVjdG9yID0gKHsgb25TZWxlY3QsIHNlbGVjdGVkRnVuY3Rpb24gfTogeyBvblNlbGVjdDogKGZ1bmN0aW9uTmFtZTogRXhwcmVzc2lvbkZ1bmN0aW9ucykgPT4gdm9pZCwgc2VsZWN0ZWRGdW5jdGlvbj86IEV4cHJlc3Npb25GdW5jdGlvbnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xOCBweC00Jz5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoRXhwcmVzc2lvbkZ1bmN0aW9ucykubWFwKChmLCBpKSA9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25TZWxlY3QoRXhwcmVzc2lvbkZ1bmN0aW9uc1tmXSkgfX0ga2V5PXtpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdC0zIHAtMSBleHByZXNzaW9uLWVkaXRvci1mdW5jdGlvbi1pdGVtJywgeyAnZXhwcmVzc2lvbi1lZGl0b3ItZnVuY3Rpb24taXRlbS1zZWxlY3RlZCc6IHNlbGVjdGVkRnVuY3Rpb24gPT09IEV4cHJlc3Npb25GdW5jdGlvbnNbZl0gfSl9XG4gICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7RXhwcmVzc2lvbkZ1bmN0aW9uc1tmXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgY2xhc3NOYW1lcywgdHlwZSBJTVRoZW1lVmFyaWFibGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgUG9wcGVyIH0gZnJvbSAnamltdS11aSdcblxuaW1wb3J0IHsgdHlwZSBFeHBTZWxlY3Rpb24sIHR5cGUgUG9wb3Zlckl0ZW0gfSBmcm9tICcuLi90eXBlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbXM6IFBvcG92ZXJJdGVtW11cbiAgc2VsZWN0ZWRJdGVtSW5kZXg6IHN0cmluZ1xuICB0YXJnZXROb2RlSWQ6IHN0cmluZ1xuICBjb250YWluZXJOb2RlOiBIVE1MRWxlbWVudFxuICBpc09wZW46IGJvb2xlYW5cbiAgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXNcbiAgZXhwU2VsZWN0aW9uOiBFeHBTZWxlY3Rpb24gLy8gcG9zaXRpb24gb2Ygc2VsZWN0aW9uXG4gIG9uQ2xpY2s/OiAoaXRlbTogUG9wb3Zlckl0ZW0sIHRhcmdldDogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHRhcmdldE5vZGU6IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICByb290OiBIVE1MRWxlbWVudFxuICBpdGVtSGVpZ2h0ID0gMjVcbiAgcG9wb3Zlckl0ZW1TdHlsZSA9IHsgbGluZUhlaWdodDogYCR7dGhpcy5pdGVtSGVpZ2h0fXB4ICFpbXBvcnRhbnRgIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFyZ2V0Tm9kZTogdGhpcy5nZXRUYXJnZXQodGhpcy5wcm9wcy50YXJnZXROb2RlSWQsIHRoaXMucHJvcHMuY29udGFpbmVyTm9kZSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1JbmRleCAhPT0gcHJldlByb3BzLnNlbGVjdGVkSXRlbUluZGV4ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtSW5kZXggJiYgdGhpcy5yb290KSB7XG4gICAgICBsZXQgc2Nyb2xsVG9wXG5cbiAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbUluZGV4KSA+IHBhcnNlSW50KHByZXZQcm9wcy5zZWxlY3RlZEl0ZW1JbmRleCkpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtSW5kZXgpID09PSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSB0aGlzLnJvb3Quc2Nyb2xsSGVpZ2h0IC0gdGhpcy5yb290Lm9mZnNldEhlaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1heEluZGV4SW5TY3JlZW4gPSBNYXRoLmZsb29yKCh0aGlzLnJvb3Quc2Nyb2xsVG9wICsgdGhpcy5yb290Lm9mZnNldEhlaWdodCkgLyB0aGlzLml0ZW1IZWlnaHQpIC0gMVxuICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbUluZGV4KSA+PSBtYXhJbmRleEluU2NyZWVuKSB7XG4gICAgICAgICAgICBzY3JvbGxUb3AgPSB0aGlzLnJvb3Quc2Nyb2xsVG9wICsgdGhpcy5pdGVtSGVpZ2h0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IHRoaXMucm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbUluZGV4KSA9PT0gMCkge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtaW5JbmRleEluU2NyZWVuID0gTWF0aC5mbG9vcih0aGlzLnJvb3Quc2Nyb2xsVG9wIC8gdGhpcy5pdGVtSGVpZ2h0KVxuICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbUluZGV4KSA8PSBtaW5JbmRleEluU2NyZWVuKSB7XG4gICAgICAgICAgICBzY3JvbGxUb3AgPSB0aGlzLnJvb3Quc2Nyb2xsVG9wIC0gdGhpcy5pdGVtSGVpZ2h0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IHRoaXMucm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yb290LnNjcm9sbFRvKG51bGwsIHNjcm9sbFRvcClcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZXhwU2VsZWN0aW9uICE9PSBwcmV2UHJvcHMuZXhwU2VsZWN0aW9uIHx8IHRoaXMucHJvcHMudGFyZ2V0Tm9kZUlkICE9PSBwcmV2UHJvcHMudGFyZ2V0Tm9kZUlkIHx8IHRoaXMucHJvcHMuY29udGFpbmVyTm9kZSAhPT0gcHJldlByb3BzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0YXJnZXROb2RlOiB0aGlzLmdldFRhcmdldCh0aGlzLnByb3BzLnRhcmdldE5vZGVJZCwgdGhpcy5wcm9wcy5jb250YWluZXJOb2RlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRUYXJnZXQgPSAoaWQ6IHN0cmluZywgY29udGFpbmVyTm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgaWYgKCFpZCB8fCAhY29udGFpbmVyTm9kZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUudGFyZ2V0Tm9kZSB8fCAhdGhpcy5wcm9wcy5pdGVtcyB8fCB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BwZXIgcmVmZXJlbmNlPXt0aGlzLnN0YXRlLnRhcmdldE5vZGV9IG9wZW49e3RoaXMucHJvcHMuaXNPcGVufSBhdXRvRm9jdXM9e2ZhbHNlfSBwbGFjZW1lbnQ9J2JvdHRvbScgY2xhc3NOYW1lPSdleHAtcG9wZXInIG9mZnNldD17WzAsIDVdfSBzaG93QXJyb3cgZGlzYWJsZVBvcnRhbD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgbWF4SGVpZ2h0OiAnMjAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nIH19IHJlZj17biA9PiB7IHRoaXMucm9vdCA9IG4gfX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGl0ZW0sIHRoaXMucHJvcHMudGFyZ2V0Tm9kZUlkKSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0ZXh0LWJyZWFrIGV4cC1wb3BwZXItaXRlbScsIHsgJ2V4cC1wb3BwZXItc2VsZWN0ZWQtaXRlbSc6IGAke2luZGV4fWAgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtSW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5jb250ZW50fSBjc3M9e2Nzcyh0aGlzLnBvcG92ZXJJdGVtU3R5bGUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wcGVyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIERhdGFTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IEV4cEJhc2UgZnJvbSAnLi9leHAtYmFzZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBpc0VkaXRhYmxlOiBib29sZWFuXG5cbiAgLy8gd2hldGhlciBmaWVsZCBhbmQgZGF0YSBzb3VyY2UgaW4gZXhwcmVzc2lvbiBhcmUgbWF0Y2hlZFxuICBpc0Vycm9yOiBib29sZWFuXG5cbiAgLy8gd2hldGhlciBkYXRhIHNvdXJjZSBpbiBleHByZXNzaW9uIGlzIGRpc2FibGVkLFxuICAvLyAnZGlzYWJsZScgbWVhbnMsXG4gIC8vIDEuIGRhdGEgc291cmNlIGluIGV4cHJlc3Npb24gYW5kIGRhdGEgc291cmNlIGluIHByb3BzIGFyZSBub3QgbWF0Y2hlZFxuICAvLyAyLiBkYXRhIHNvdXJjZSBpbiBleHByZXNzaW9uIGZhaWxlZCB0byBjcmVhdGVcbiAgaXNEc0Rpc2FibGVkOiBib29sZWFuXG5cbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZEV4cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHVua25vd24+IHtcbiAgZ2V0RHNMYWJlbCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGRzTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCBkcyA9IGRzTWFuYWdlciAmJiBkc01hbmFnZXIuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLmRhdGFTb3VyY2VJZClcbiAgICBpZiAoZHMpIHtcbiAgICAgIHJldHVybiBkcy5nZXRMYWJlbCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXhwQmFzZVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICdmaWVsZC1leHAnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmNsYXNzTmFtZV06ICEhdGhpcy5wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAnZXJyb3ItZXhwJzogdGhpcy5wcm9wcy5pc0Vycm9yLFxuICAgICAgICAgICAgJ2RzLWRpc2FibGVkLWV4cCc6IHRoaXMucHJvcHMuaXNEc0Rpc2FibGVkXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gdGl0bGU9e3RoaXMuZ2V0RHNMYWJlbCgpfSB0YWJJbmRleD17MH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgRXhwcmVzc2lvbkZ1bmN0aW9ucywgY2xhc3NOYW1lcywgdHlwZSBJbW11dGFibGVBcnJheSB9IGZyb20gJ2ppbXUtY29yZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwOiBzdHJpbmdcbiAgZGF0YVNvdXJjZUlkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPlxuICBpZDogc3RyaW5nXG4gIGV4dGVybmFsSWQ6IHN0cmluZ1xuICBpc0VkaXRhYmxlOiBib29sZWFuXG5cbiAgLy8gd2hldGhlciBkYXRhIHNvdXJjZSBpbiBleHByZXNzaW9uIGlzIGRpc2FibGVkLFxuICAvLyAnZGlzYWJsZScgbWVhbnMsXG4gIC8vIDEuIGRhdGEgc291cmNlIGluIGV4cHJlc3Npb24gYW5kIGRhdGEgc291cmNlIGluIHByb3BzIGFyZSBub3QgbWF0Y2hlZFxuICAvLyAyLiBkYXRhIHNvdXJjZSBpbiBleHByZXNzaW9uIGZhaWxlZCB0byBjcmVhdGVcbiAgaXNEc0Rpc2FibGVkOiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkV4cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHVua25vd24+IHtcbiAgZ2V0RnVuY3Rpb25Ub29sdGlwID0gKGV4cDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAoIWV4cCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLmV4cCkge1xuICAgICAgY2FzZSBFeHByZXNzaW9uRnVuY3Rpb25zLkF2ZXJhZ2U6XG4gICAgICAgIHJldHVybiAnQXZlcmFnZSAoIGZpZWxkTmFtZSApIHJldHVybnMgIHsgTnVtYmVyIH0nXG4gICAgICBjYXNlIEV4cHJlc3Npb25GdW5jdGlvbnMuQ291bnQ6XG4gICAgICAgIHJldHVybiAnQ291bnQgKCApIHJldHVybnMgIHsgTnVtYmVyIH0nXG4gICAgICBjYXNlIEV4cHJlc3Npb25GdW5jdGlvbnMuU3VtOlxuICAgICAgICByZXR1cm4gJ1N1bSAoIGZpZWxkTmFtZSApIHJldHVybnMgIHsgTnVtYmVyIH0nXG4gICAgICBjYXNlIEV4cHJlc3Npb25GdW5jdGlvbnMuTWF4OlxuICAgICAgICByZXR1cm4gJ01heCAoIGZpZWxkTmFtZSApIHJldHVybnMgIHsgTnVtYmVyIH0nXG4gICAgICBjYXNlIEV4cHJlc3Npb25GdW5jdGlvbnMuTWluOlxuICAgICAgICByZXR1cm4gJ01pbiAoIGZpZWxkTmFtZSApIHJldHVybnMgIHsgTnVtYmVyIH0nXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAnZnVuY3Rpb24tZXhwJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgJ2RzLWRpc2FibGVkLWV4cCc6IHRoaXMucHJvcHMuaXNEc0Rpc2FibGVkXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgICBjb250ZW50RWRpdGFibGU9eyEhdGhpcy5wcm9wcy5pc0VkaXRhYmxlfSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9IHRpdGxlPXt0aGlzLmdldEZ1bmN0aW9uVG9vbHRpcCh0aGlzLnByb3BzLmV4cCl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmV4cH1cbiAgICAgIDwvc3Bhbj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IEV4cEJhc2UgZnJvbSAnLi9leHAtYmFzZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBpc0VkaXRhYmxlOiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyRXhwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgdW5rbm93bj4ge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXhwQmFzZVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdudW1iZXItZXhwJywgeyBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lIH0pfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gdGFiSW5kZXg9ezB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgRXhwQmFzZSBmcm9tICcuL2V4cC1iYXNlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleHA6IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGlzRWRpdGFibGU6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmF0b3IgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCB1bmtub3duPiB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFeHBCYXNlIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9J29wZXJhdG9yLWV4cCcgLz5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IEV4cEJhc2UgZnJvbSAnLi9leHAtYmFzZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBpc0VkaXRhYmxlOiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ0V4cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHVua25vd24+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEV4cEJhc2Ugey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT0nc3RyaW5nLWV4cCcgdGFiSW5kZXg9ezB9IC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBFeHBCYXNlIGZyb20gJy4vZXhwLWJhc2UnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV4cDogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgaXNFZGl0YWJsZTogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckV4cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIHVua25vd24+IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEV4cEJhc2Ugey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT0ndW5rbm93bi1leHAnIC8+XG4gICAgKVxuICB9XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LCBqc3gsIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgdHlwZSBJbW11dGFibGVBcnJheSwgY2xhc3NOYW1lcywgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBFeHByZXNzaW9uLCB0eXBlIElNVXNlRGF0YVNvdXJjZSxcbiAgRXhwcmVzc2lvblBhcnRUeXBlLCB0eXBlIEV4cHJlc3Npb25QYXJ0LCBNdWx0aXBsZURhdGFTb3VyY2VDb21wb25lbnQsIGV4cHJlc3Npb25VdGlscywgdHlwZSBJTVN0YXRlLCBSZWFjdFJlZHV4LCB0eXBlIEJyb3dzZXJTaXplTW9kZSwgQ09OU1RBTlRTLCBJbW11dGFibGVcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHdpdGhTdHlsZXMsIHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBnZXRXaGV0aGVyVXNlRHNzTWF0Y2hFeHBEc3MgfSBmcm9tICcuLi8uLi91dGlscydcblxuaW1wb3J0ICogYXMgUmVhY3RET01TZXJ2ZXIgZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcblxuaW1wb3J0IENvbnRlbnRFZGl0YWJsZSBmcm9tICdyZWFjdC1jb250ZW50ZWRpdGFibGUnXG5cbmltcG9ydCB7IEV4cFNlbGVjdGlvblR5cGUsIHR5cGUgRXhwU2VsZWN0aW9uLCB0eXBlIFBvcG92ZXJJdGVtLCBQb3BvdmVyVHlwZSwgdHlwZSBFZGl0UmVzdWx0LCBFWFBfQ09OVEFJTkVSX1BSRUZJWCB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBGaWVsZEV4cCBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtZXhwJ1xuaW1wb3J0IFN0cmluZ0V4cCBmcm9tICcuL2NvbXBvbmVudHMvc3RyaW5nLWV4cCdcbmltcG9ydCBGdW5jdGlvbkV4cCBmcm9tICcuL2NvbXBvbmVudHMvZnVuY3Rpb24tZXhwJ1xuaW1wb3J0IE51bWJlckV4cCBmcm9tICcuL2NvbXBvbmVudHMvbnVtYmVyLWV4cCdcbmltcG9ydCBVbmtub3duRXhwIGZyb20gJy4vY29tcG9uZW50cy91bmtub3duLWV4cCdcbmltcG9ydCBPcGVyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvb3BlcmF0b3ItZXhwJ1xuaW1wb3J0IEV4cFBvcG92ZXIgZnJvbSAnLi9jb21wb25lbnRzL2V4cC1wb3BvdmVyJ1xuaW1wb3J0IEV4cEVkaXRvckhlbHBlciBmcm9tICcuL2NvbXBvbmVudHMvZXhwLWVkaXRvci1oZWxwZXInXG5cbmltcG9ydCB7XG4gIGdldFByZXZpb3VzTm9kZU9mU2VsZWN0aW9uLCBnZXROZXh0Tm9kZU9mU2VsZWN0aW9uLCBtb3ZlU2VsZWN0aW9uQnlQYXJ0LCBtb3ZlU2VsZWN0aW9uQnlDaGFyYWN0ZXIsIGdldFJlYWxVc2VEYXRhU291cmNlcyxcbiAgZ2V0U2VsZWN0aW9uUG9zSW5uZXJQYXJ0LCBnZXRQYXJ0SWRCeUluZGV4LCBnZXROb2RlQnlQYXJ0SWQsIGdldFBhcnRJZEJ5Q2hpbGROb2RlLCBhZGRDaGFyYWN0ZXJzVG9QYXJ0cyxcbiAgZ2V0SW5kZXhCeVBhcnRJZCwgcmVtb3ZlUGFydHMsIGdldFNpYmxpbmdPZkV4cFNlbGVjdGlvbiwgZ2V0U3RhcnRQYXJ0SW5kZXhPZlJhbmdlU2VsZWN0aW9uLCBnZXRFbmRQYXJ0SW5kZXhPZlJhbmdlU2VsZWN0aW9uLFxuICBnZXRFeHByZXNzaW9uUGFydCwgZ2V0V2hldGhlclBhcnROZWVkUG9wb3ZlciwgdHJpZ2dlcklucHV0RXZlbnQsIHJlbW92ZUNoYXJhY3RlcnNGcm9tT25lUGFydCwgZ2V0TmV3Q2hhcmFjdGVyRnJvbUV4cHJlc3Npb25TdHJpbmcsXG4gIGFwcGx5RWRpdFJlc3VsdFRvUGFydHMsIGlzTnVtYmVyVmFyaWFibGUsIGdldEV4cFNlbGVjdGlvbkFuZEVpdGFibGVQYXJ0LCBnZXRTZWxlY3Rpb25SYW5nZSwgZ2V0UG9wb3ZlclRhcmdldCwgZ2V0UG9wb3Zlckl0ZW1zXG59IGZyb20gJy4vdXRpbHMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxuICBleHByZXNzaW9uOiBFeHByZXNzaW9uXG4gIC8qKlxuICAgKiBVc2Ugd2lkZ2V0IGlkIHRvIGdldCB3aWRnZXQgY29udGV4dCwgZS5nLiB3aGV0aGVyIHdpZGdldCBpcyBpbiByZXBlYXRlZCBkYXRhIHNvdXJjZSBjb250ZXh0LlxuICAgKi9cbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIG9uQ2hhbmdlOiAoZXhwcmVzc2lvbjogRXhwcmVzc2lvbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc1BvcG92ZXJPcGVuOiBib29sZWFuXG4gIGlzRWRpdG9yTW91bnRlZDogYm9vbGVhblxuICBleHBTZWxlY3Rpb246IEV4cFNlbGVjdGlvbiAvLyBwb3NpdGlvbiBvZiBzZWxlY3Rpb25cbiAgc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4OiBzdHJpbmcgLy8gaWQgb2Ygc2VsZWN0ZWQgcG9wb3ZlciBpdGVtXG59XG5cbmludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXNcbiAgaW50bDogSW50bFNoYXBlXG59XG5cbmludGVyZmFjZSBTdGF0ZVRvUHJvcHMge1xuICBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZVxufVxuXG5jbGFzcyBfRXhwcmVzc2lvbkVkaXRvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMgJiBFeHRyYVByb3BzICYgU3RhdGVUb1Byb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgY291bnQgPSAtMVxuICBpZDogc3RyaW5nXG4gIGNvbnRlbnRFZGl0YWJsZUNvbnRhaW5lcjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxuICBoZWxwZXJDb250YWluZXI6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cbiAgZXJyb3JNc2dDb250YWluZXI6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cbiAgZXhwcmVzc2lvblN0cmluZzogc3RyaW5nID0gJydcbiAgbHRyU3R5bGUgPSB7IGRpcmVjdGlvbjogJ2x0cicgfVxuICBnZXRGb2N1c09uY2UgPSBmYWxzZSAvLyBpZiBhdXRvIGZvY3VzIGlzIHRydWUsIGdldCBmb2N1cyBvbmNlIGF0IG1vc3RcblxuICByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIgLy8gdG8gb2JzZXJ2ZSBzaXplIGNoYW5nZSBvZiBlZGl0b3JcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBfRXhwcmVzc2lvbkVkaXRvci5jb3VudCsrXG4gICAgdGhpcy5pZCA9IGAke0VYUF9DT05UQUlORVJfUFJFRklYfS0ke19FeHByZXNzaW9uRWRpdG9yLmNvdW50fWBcbiAgICB0aGlzLmNvbnRlbnRFZGl0YWJsZUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5oZWxwZXJDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1BvcG92ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGlzRWRpdG9yTW91bnRlZDogZmFsc2UsXG4gICAgICBleHBTZWxlY3Rpb246IG51bGwsXG4gICAgICBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXg6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0aGlzLnJlc2l6ZUhlbHBlckNvbnRhaW5lcilcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudClcbiAgICB0aGlzLmV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLmdldEV4cHJlc3Npb25TdHJpbmcoKSB8fCAnJ1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5nZXRGb2N1c09uY2UgPSB0cnVlXG4gICAgICBpZiAodGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cyAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMubGVuZ3RoID09PSAxICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1swXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGV4cFNlbGVjdGlvbjoge1xuICAgICAgICAgICAgcGFydElkOiBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIDApLFxuICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5DaGFyLFxuICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1swXS5leHAubGVuZ3RoIC0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyLmN1cnJlbnQuZm9jdXMoKVxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvblRvRW5kKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0b3JNb3VudGVkOiB0cnVlIH0pXG5cbiAgICAvLyBwcmV2ZW50IGZyb20gZHJhZ2dpbmcgc2VsZWN0ZWQgdGV4dFxuICAgIHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyLmN1cnJlbnQub25kcmFnc3RhcnQgPSAoKSA9PiBmYWxzZVxuICAgIC8vIFRPRE86IGhhbmRsZSBwYXN0ZSBldmVudFxuICAgIHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyLmN1cnJlbnQub25wYXN0ZSA9ICgpID0+IGZhbHNlXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogUHJvcHMgJiBFeHRyYVByb3BzICYgU3RhdGVUb1Byb3BzLCBwcmV2U3RhdGU6IFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uICYmIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnBhcnRJZCAmJlxuICAgICAgKFxuICAgICAgICBwcmV2U3RhdGUuZXhwU2VsZWN0aW9uICE9PSB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbiB8fCAodGhpcy5wcm9wcy5hdXRvRm9jdXMgJiYgIXRoaXMuZ2V0Rm9jdXNPbmNlICYmIHRoaXMuZ2V0V2hldGhlckxvc2VGb2N1cygpKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5nZXRGb2N1c09uY2UgPSB0cnVlXG4gICAgICBpZiAodGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24udHlwZSA9PT0gRXhwU2VsZWN0aW9uVHlwZS5QYXJ0KSB7XG4gICAgICAgIG1vdmVTZWxlY3Rpb25CeVBhcnQoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24ucGFydElkLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnRvU3RhcnQsXG4gICAgICAgICAgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnR5cGUgPT09IEV4cFNlbGVjdGlvblR5cGUuQ2hhcikge1xuICAgICAgICBtb3ZlU2VsZWN0aW9uQnlDaGFyYWN0ZXIoXG4gICAgICAgICAgdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24ucGFydElkLFxuICAgICAgICAgIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnN0YXJ0T2Zmc2V0LFxuICAgICAgICAgIHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyLmN1cnJlbnRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMuZXhwcmVzc2lvbiAhPT0gdGhpcy5wcm9wcy5leHByZXNzaW9uKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cykge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLmdldEV4cHJlc3Npb25TdHJpbmcoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uU3RyaW5nID0gJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgfVxuXG4gIHJlc2l6ZUhlbHBlckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0b3JIZWlnaHQ6IG51bWJlciA9IHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyPy5jdXJyZW50Py5vZmZzZXRIZWlnaHQgfHwgMFxuICAgIGNvbnN0IGVycm9yTXNnSGVpZ2h0OiBudW1iZXIgPSB0aGlzLmVycm9yTXNnQ29udGFpbmVyPy5jdXJyZW50Py5vZmZzZXRIZWlnaHQgfHwgMFxuICAgIHRoaXMuaGVscGVyQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYGNhbGMoMTAwJSAtIDMwcHggLSAke2VkaXRvckhlaWdodH1weCAtICR7ZXJyb3JNc2dIZWlnaHR9cHgpYFxuICB9XG5cbiAgc2V0U2VsZWN0aW9uVG9FbmQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1BvcG92ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGV4cFNlbGVjdGlvbjoge1xuICAgICAgICBwYXJ0SWQ6ICh0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzICYmIGdldFBhcnRJZEJ5SW5kZXgodGhpcy5pZCwgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzLmxlbmd0aCAtIDEpKSB8fCBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIDApLFxuICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLlBhcnQsXG4gICAgICAgIHRvU3RhcnQ6IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldFdoZXRoZXJMb3NlRm9jdXMgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcyA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gJiYgd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgcmV0dXJuICEocyAmJiB0aGlzLmNvbnRlbnRFZGl0YWJsZUNvbnRhaW5lciAmJiB0aGlzLmNvbnRlbnRFZGl0YWJsZUNvbnRhaW5lci5jdXJyZW50LmNvbnRhaW5zKHMuZm9jdXNOb2RlKSAmJlxuICAgICAgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudCAhPT0gcy5mb2N1c05vZGUpXG4gIH1cblxuICBnZXRFeHByZXNzaW9uU3RyaW5nID0gKGNvbnRhaW5lcj86IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjID0gY29udGFpbmVyIHx8IHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyID8gdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudCA6IGRvY3VtZW50XG4gICAgY29uc3QgcCA9IGMgJiYgYy5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApXG4gICAgaWYgKCFwKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICByZXR1cm4gcC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHVmZWZmL2csICcnKVxuICB9XG5cbiAgZ2V0Q29tcG9uZW50ID0gKHBhcnQ6IEV4cHJlc3Npb25QYXJ0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaWQgPSBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIGluZGV4KVxuICAgIGNvbnN0IGlzSW5FZGl0YWJsZVBhcnQgPSB0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpXG4gICAgc3dpdGNoIChwYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgRXhwcmVzc2lvblBhcnRUeXBlLkZpZWxkOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGaWVsZEV4cFxuICAgICAgICAgICAgZXhwPXtwYXJ0LmV4cH0gaWQ9e2lkfSBrZXk9e2luZGV4fSBpc0RzRGlzYWJsZWQ9eyFnZXRXaGV0aGVyVXNlRHNzTWF0Y2hFeHBEc3MocGFydCwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyl9XG4gICAgICAgICAgICBpc0VkaXRhYmxlPXtpc0luRWRpdGFibGVQYXJ0ICYmIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnBhcnRJZCA9PT0gaWR9XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ9e3BhcnQuZGF0YVNvdXJjZUlkfSBpc0Vycm9yPXshZXhwcmVzc2lvblV0aWxzLmdldFdoZXRoZXJGaWVsZEluRHMocGFydC5kYXRhU291cmNlSWQsIHBhcnQuamltdUZpZWxkTmFtZSwgcGFydC5leHAucmVwbGFjZSgvXlxcey8sICcnKS5yZXBsYWNlKC9cXH0kLywgJycpKX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICBjYXNlIEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmc6XG4gICAgICAgIHJldHVybiA8U3RyaW5nRXhwIGV4cD17cGFydC5leHB9IGlkPXtpZH0ga2V5PXtpbmRleH0gaXNFZGl0YWJsZT17aXNJbkVkaXRhYmxlUGFydCAmJiB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbi5wYXJ0SWQgPT09IGlkfSAvPlxuICAgICAgY2FzZSBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3I6XG4gICAgICAgIHJldHVybiA8T3BlcmF0b3IgZXhwPXtwYXJ0LmV4cH0gaWQ9e2lkfSBrZXk9e2luZGV4fSBpc0VkaXRhYmxlPXtpc0luRWRpdGFibGVQYXJ0ICYmIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnBhcnRJZCA9PT0gaWR9IC8+XG4gICAgICBjYXNlIEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvbjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RnVuY3Rpb25FeHBcbiAgICAgICAgICAgIGV4cD17cGFydC5leHB9IGlkPXtpZH0ga2V5PXtpbmRleH0gaXNEc0Rpc2FibGVkPXshZ2V0V2hldGhlclVzZURzc01hdGNoRXhwRHNzKHBhcnQsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpfVxuICAgICAgICAgICAgaXNFZGl0YWJsZT17aXNJbkVkaXRhYmxlUGFydCAmJiB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbi5wYXJ0SWQgPT09IGlkfSBleHRlcm5hbElkPXt0aGlzLmlkfVxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8ubWFwKHUgPT4gdS5kYXRhU291cmNlSWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIGNhc2UgRXhwcmVzc2lvblBhcnRUeXBlLk51bWJlcjpcbiAgICAgICAgcmV0dXJuIDxOdW1iZXJFeHAgZXhwPXtwYXJ0LmV4cH0gaWQ9e2lkfSBrZXk9e2luZGV4fSBpc0VkaXRhYmxlPXtpc0luRWRpdGFibGVQYXJ0ICYmIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnBhcnRJZCA9PT0gaWR9IC8+XG4gICAgICBjYXNlIEV4cHJlc3Npb25QYXJ0VHlwZS5Vbmtub3duOlxuICAgICAgICByZXR1cm4gPFVua25vd25FeHAgZXhwPXtwYXJ0LmV4cH0gaWQ9e2lkfSBrZXk9e2luZGV4fSBpc0VkaXRhYmxlPXtpc0luRWRpdGFibGVQYXJ0ICYmIHRoaXMuc3RhdGUuZXhwU2VsZWN0aW9uLnBhcnRJZCA9PT0gaWR9IC8+XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCA9ICgpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gISEodGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24gJiYgdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24udHlwZSA9PT0gRXhwU2VsZWN0aW9uVHlwZS5DaGFyKVxuICB9XG5cbiAgZ2V0U2luZ2xlRXhwRnJvbVBvcG92ZXJJdGVtID0gKGl0ZW06IFBvcG92ZXJJdGVtKTogc3RyaW5nID0+IHtcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgY2FzZSBQb3BvdmVyVHlwZS5GaWVsZDpcbiAgICAgICAgcmV0dXJuIGB7JHtpdGVtLmNvbnRlbnR9fWBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpdGVtLmNvbnRlbnRcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYXJ0c1RvSHRtbCA9IChwYXJ0czogRXhwcmVzc2lvblBhcnRbXSk6IHN0cmluZyA9PiB7XG4gICAgLy8gJiM2NTI3OTsgc3RhbmRzIGZvciBaRVJPIFdJRFRIIE5PLUJSRUFLIFNQQUNFLCBpdCBtYWtlcyBzZWxlY3Rpb24gbmV4dCB0byB1bmVkaXRhYmxlIHNwYW5cbiAgICByZXR1cm4gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICA8cCBpZD17dGhpcy5pZH0gY2xhc3NOYW1lPSd3LTEwMCBtLTAgcC0xJyBzcGVsbENoZWNrPXtmYWxzZX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XG4gICAgICAgICYjNjUyNzk7XG4gICAgICAgIHtcbiAgICAgICAgICBwYXJ0cyAmJiBwYXJ0cy5tYXAoKHAsIGkpID0+IHRoaXMuZ2V0Q29tcG9uZW50KHAsIGkpKVxuICAgICAgICB9XG4gICAgICAgICYjNjUyNzk7XG4gICAgICA8L3A+XG4gICAgKVxuICB9XG5cbiAgZ2V0TmV3RXhwcmVzc2lvbiA9IChwYXJ0czogRXhwcmVzc2lvblBhcnRbXSk6IEV4cHJlc3Npb24gPT4ge1xuICAgIHJldHVybiB7IHBhcnRzLCBuYW1lOiAodGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5uYW1lKSB8fCB0aGlzLmlkIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApXG5cbiAgICBpZiAoIXBhcmVudE5vZGUgfHwgIWUuaXNUcnVzdGVkKSB7IC8vIGlzVHJ1c3RlZCBpcyBmYWxzZSB3aGVuIHRoZSBldmVudCBpcyBjcmVhdGVkIG9yIG1vZGlmaWVkIGJ5IGEgc2NyaXB0XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gdGhpcy5nZXRFeHByZXNzaW9uU3RyaW5nKHBhcmVudE5vZGUpXG4gICAgY29uc3QgbmV3Q2hhcmFjdGVycyA9IGdldE5ld0NoYXJhY3RlckZyb21FeHByZXNzaW9uU3RyaW5nKHRoaXMuZXhwcmVzc2lvblN0cmluZywgZXhwcmVzc2lvblN0cmluZylcblxuICAgIGlmICghbmV3Q2hhcmFjdGVycykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNJbkVkaXRhYmxlUGFydCA9IHRoaXMuZ2V0V2hldGhlckluRWRpdGFibGVQYXJ0KClcbiAgICBjb25zdCBvcmlnaW5hbFBhcnRzID0gdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1xuICAgIGNvbnN0IHJhbmdlID0gaXNJbkVkaXRhYmxlUGFydCA/IGdldFNlbGVjdGlvblJhbmdlKCkgOiBudWxsXG4gICAgY29uc3QgbmV4dE5vZGVPZlNlbGVjdGlvbiA9IGdldE5leHROb2RlT2ZTZWxlY3Rpb24odGhpcy5pZClcbiAgICBjb25zdCBlZGl0UmVzdWx0OiBFZGl0UmVzdWx0ID0gYWRkQ2hhcmFjdGVyc1RvUGFydHModGhpcy5pZCwgb3JpZ2luYWxQYXJ0cywgbmV3Q2hhcmFjdGVycywgaXNJbkVkaXRhYmxlUGFydCxcbiAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSgpLm1hcCh1ID0+IHUuZGF0YVNvdXJjZUlkKSwgcmFuZ2UsIG5leHROb2RlT2ZTZWxlY3Rpb24pXG5cbiAgICBjb25zdCBwYXJ0cyA9IGFwcGx5RWRpdFJlc3VsdFRvUGFydHMoZWRpdFJlc3VsdCwgb3JpZ2luYWxQYXJ0cylcbiAgICBjb25zdCBpbm5lclNlbGVjdGlvbiA9IGlzSW5FZGl0YWJsZVBhcnQgPyBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5pZCwgZG9jdW1lbnQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSkgOiBudWxsXG4gICAgY29uc3QgZXhwU2VsZWN0aW9uID0gZ2V0RXhwU2VsZWN0aW9uQW5kRWl0YWJsZVBhcnQodGhpcy5pZCwgaXNJbkVkaXRhYmxlUGFydCwgZWRpdFJlc3VsdCwgcGFydHMsIGlubmVyU2VsZWN0aW9uKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1BvcG92ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGV4cFNlbGVjdGlvbjogZXhwU2VsZWN0aW9uXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUG9wb3Zlck9wZW46IHRydWUgfSlcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXROZXdFeHByZXNzaW9uKHBhcnRzKSlcbiAgfVxuXG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBwYXJ0SWQgPSBnZXRQYXJ0SWRCeUNoaWxkTm9kZSh0aGlzLmlkLCBlLnRhcmdldClcbiAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlQYXJ0SWQodGhpcy5pZCwgcGFydElkKVxuXG4gICAgaWYgKCFpc051bWJlclZhcmlhYmxlKGluZGV4KSB8fCBpbmRleCA8IDApIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudCB8fCB0aGlzLmNvbnRlbnRFZGl0YWJsZUNvbnRhaW5lci5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvblRvRW5kKClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcnROb2RlID0gaW5kZXggPiAtMSA/IGdldE5vZGVCeVBhcnRJZChwYXJ0SWQsIHRoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyLmN1cnJlbnQpIDogbnVsbFxuICAgIGlmIChwYXJ0Tm9kZSAmJiB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbiAmJiAodGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24udHlwZSAhPT0gRXhwU2VsZWN0aW9uVHlwZS5DaGFyIHx8IGdldEluZGV4QnlQYXJ0SWQodGhpcy5pZCwgdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24ucGFydElkKSAhPT0gaW5kZXgpICYmXG4gICAgICB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1tpbmRleF0pIHtcbiAgICAgIGNvbnN0IGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgICAgcGFydElkLFxuICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICAgIHN0YXJ0T2Zmc2V0OiBwYXJ0Tm9kZS50ZXh0Q29udGVudC5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleHBTZWxlY3Rpb24sXG4gICAgICAgIGlzUG9wb3Zlck9wZW46IGZhbHNlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzUG9wb3Zlck9wZW46IGdldFdoZXRoZXJQYXJ0TmVlZFBvcG92ZXIodGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzW2luZGV4XS50eXBlKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkhlbHBlckl0ZW1TZWxlY3QgPSAoZTogRXhwcmVzc2lvbiwgcGFydElkOiBzdHJpbmcsIGlzUmVwbGFjaW5nOiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuXG4gICAgaWYgKGUgJiYgZS5wYXJ0cyAmJiBwYXJ0SWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeVBhcnRJZCh0aGlzLmlkLCBwYXJ0SWQpXG4gICAgICBjb25zdCBwYXJ0OiBFeHByZXNzaW9uUGFydCA9IGUucGFydHNbaW5kZXhdXG5cbiAgICAgIGlmICghcGFydCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NhbiBub3QgbW92ZSBzZWxlY3Rpb24gYmVjYXVzZSBjYW4gbm90IGZpbmQgcGFydDogJywgcGFydElkKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNQb3BvdmVyT3BlbjogYm9vbGVhbiA9IGZhbHNlXG4gICAgICBsZXQgZXhwU2VsZWN0aW9uOiBFeHBTZWxlY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6IEV4cFNlbGVjdGlvblR5cGUuQ2hhcixcbiAgICAgICAgcGFydElkLFxuICAgICAgICBzdGFydE9mZnNldDogcGFydC5leHAubGVuZ3RoXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvbikge1xuICAgICAgICBpZiAoIWlzUmVwbGFjaW5nKSB7XG4gICAgICAgICAgZXhwU2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5QYXJ0LFxuICAgICAgICAgICAgcGFydElkOiBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIGdldEluZGV4QnlQYXJ0SWQodGhpcy5pZCwgcGFydElkKSArIDEpLFxuICAgICAgICAgICAgdG9TdGFydDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGV4cFNlbGVjdGlvbixcbiAgICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2VcbiAgICAgIH0sICgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IGlzUG9wb3Zlck9wZW4gfSkgfSlcbiAgICB9XG4gIH1cblxuICBvbkJsdXIgPSBlID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuZXhwcmVzc2lvbilcbiAgfVxuXG4gIG9uS2V5RG93biA9IGUgPT4ge1xuICAgIC8vIGRvIG5vdCBidWJibGUgdGhlIGtleWRvd24gZXZlbnQgdG8gY29udGFpbmVyXG4gICAgLy8gd2hlbiByZWFjdCBjb21wb25uZXQgcmVjZWl2ZXMgZXZlbnQgaXQgaGFzIGFscmVhZHkgYnViYmxlZCBhbGwgdGhlIHdheSB1cCB0byB0aGUgZG9jdW1lbnRcbiAgICAvLyBhbmQgc3RvcHBpbmcgaXQgb25seSBzdG9wcyBpdCBmcm9tIHN5bnRoZXRpY2FsbHkgYnViYmxpbmcgdXAgdGhyb3VnaCB0aGUgUmVhY3QgaGllcmFyY2h5XG4gICAgLy8gc28gd2UgbmVlZCB0byBgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uYFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoWydCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0VudGVyJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJ10uaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKGUua2V5ID09PSAnQmFja3NwYWNlJyB8fCBlLmtleSA9PT0gJ0RlbGV0ZScpIHsgLy8gYWN0dWFsbHkgaW5uZXJIVE1MIGhhcyBiZWVuIGNoYW5nZWRcbiAgICAgICAgdHJpZ2dlcklucHV0RXZlbnQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQmFja3NwYWNlKClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlKClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTGVmdEFycm93KClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB0aGlzLmhhbmRsZVJpZ2h0QXJyb3coKVxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICB0aGlzLmhhbmRsZUVudGVyKClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRG93bkFycm93KClcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICB0aGlzLmhhbmRsZVVwQXJyb3coKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKGUua2V5Q29kZSA+PSA0OCAmJiBlLmtleUNvZGUgPD0gNTcpIHx8IChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDkwKSkgeyAvLyBudW1iZXIgfHwgbGV0dGVyXG4gICAgICBjb25zdCByYW5nZSA9IGdldFNlbGVjdGlvblJhbmdlKClcbiAgICAgIGlmICghcmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgICAgIC8vIGlmIHNlbGVjdGlvbiBpcyBhIHJhbmdlLCByZW1vdmUgc2VsZWN0ZWQgY2hhcmFjdGVycyBiZWZvcmUgaW5wdXQgbmV3IGNoYXJhY3RlcnNcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrc3BhY2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJhY2tzcGFjZSA9ICgpID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbFBhcnRzID0gdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1xuICAgIGxldCBlZGl0UmVzdWx0XG4gICAgbGV0IHJlbW92ZWRDaGFyTnVtYmVyXG5cbiAgICBpZiAoIXRoaXMuZ2V0V2hldGhlckluRWRpdGFibGVQYXJ0KCkpIHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXhPZlNlbGVjdGlvbiA9IGdldFN0YXJ0UGFydEluZGV4T2ZSYW5nZVNlbGVjdGlvbih0aGlzLmlkKVxuICAgICAgY29uc3QgZW5kSW5kZXhPZlNlbGVjdGlvbiA9IGdldEVuZFBhcnRJbmRleE9mUmFuZ2VTZWxlY3Rpb24odGhpcy5pZCwgb3JpZ2luYWxQYXJ0cylcbiAgICAgIGVkaXRSZXN1bHQgPSByZW1vdmVQYXJ0cyh0aGlzLmlkLCBvcmlnaW5hbFBhcnRzLCBzdGFydEluZGV4T2ZTZWxlY3Rpb24sIGVuZEluZGV4T2ZTZWxlY3Rpb24pXG4gICAgICByZW1vdmVkQ2hhck51bWJlciA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJTZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5pZCwgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudClcbiAgICAgIGlmIChpbm5lclNlbGVjdGlvbiAmJiBpbm5lclNlbGVjdGlvbi5wYXJ0SWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGlubmVyU2VsZWN0aW9uLnN0YXJ0T2Zmc2V0ID09PSBpbm5lclNlbGVjdGlvbi5lbmRPZmZzZXQgPyBpbm5lclNlbGVjdGlvbi5zdGFydE9mZnNldCAtIDEgOiBpbm5lclNlbGVjdGlvbi5zdGFydE9mZnNldFxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGlubmVyU2VsZWN0aW9uLmVuZE9mZnNldCAtIDFcbiAgICAgICAgZWRpdFJlc3VsdCA9IHJlbW92ZUNoYXJhY3RlcnNGcm9tT25lUGFydCh0aGlzLmlkLCBvcmlnaW5hbFBhcnRzLCBpbm5lclNlbGVjdGlvbi5wYXJ0SWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgICAgICByZW1vdmVkQ2hhck51bWJlciA9IGVuZEluZGV4IC0gc3RhcnRJbmRleCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRvUmVtb3ZlKGVkaXRSZXN1bHQsIG9yaWdpbmFsUGFydHMsIHJlbW92ZWRDaGFyTnVtYmVyKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsUGFydHMgPSB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzXG4gICAgbGV0IGVkaXRSZXN1bHRcbiAgICBsZXQgcmVtb3ZlZENoYXJOdW1iZXJcblxuICAgIGlmICghdGhpcy5nZXRXaGV0aGVySW5FZGl0YWJsZVBhcnQoKSkge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleE9mU2VsZWN0aW9uID0gZ2V0U3RhcnRQYXJ0SW5kZXhPZlJhbmdlU2VsZWN0aW9uKHRoaXMuaWQpXG4gICAgICBjb25zdCBlbmRJbmRleE9mU2VsZWN0aW9uID0gZ2V0RW5kUGFydEluZGV4T2ZSYW5nZVNlbGVjdGlvbih0aGlzLmlkLCBvcmlnaW5hbFBhcnRzKVxuICAgICAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3Rpb25SYW5nZSgpXG4gICAgICBjb25zdCBzdGFydEluZGV4VG9CZVJlbW92ZWQgPSByYW5nZS5jb2xsYXBzZWQgPyAoaXNOdW1iZXJWYXJpYWJsZShzdGFydEluZGV4T2ZTZWxlY3Rpb24pID8gc3RhcnRJbmRleE9mU2VsZWN0aW9uICsgMSA6IDApIDogc3RhcnRJbmRleE9mU2VsZWN0aW9uXG4gICAgICBjb25zdCBlbmRJbmRleFRvQmVSZW1vdmVkID0gcmFuZ2UuY29sbGFwc2VkID8gKGlzTnVtYmVyVmFyaWFibGUoc3RhcnRJbmRleE9mU2VsZWN0aW9uKSA/IHN0YXJ0SW5kZXhPZlNlbGVjdGlvbiArIDEgOiAwKSA6IGVuZEluZGV4T2ZTZWxlY3Rpb25cbiAgICAgIGVkaXRSZXN1bHQgPSByZW1vdmVQYXJ0cyh0aGlzLmlkLCBvcmlnaW5hbFBhcnRzLCBzdGFydEluZGV4VG9CZVJlbW92ZWQsIGVuZEluZGV4VG9CZVJlbW92ZWQpXG4gICAgICByZW1vdmVkQ2hhck51bWJlciA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJTZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5pZCwgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudClcbiAgICAgIGlmIChpbm5lclNlbGVjdGlvbiAmJiBpbm5lclNlbGVjdGlvbi5wYXJ0SWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGlubmVyU2VsZWN0aW9uLnN0YXJ0T2Zmc2V0XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gaW5uZXJTZWxlY3Rpb24uc3RhcnRPZmZzZXQgPT09IGlubmVyU2VsZWN0aW9uLmVuZE9mZnNldCA/IGlubmVyU2VsZWN0aW9uLmVuZE9mZnNldCA6IGlubmVyU2VsZWN0aW9uLmVuZE9mZnNldCAtIDFcbiAgICAgICAgZWRpdFJlc3VsdCA9IHJlbW92ZUNoYXJhY3RlcnNGcm9tT25lUGFydCh0aGlzLmlkLCBvcmlnaW5hbFBhcnRzLCBpbm5lclNlbGVjdGlvbi5wYXJ0SWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4KVxuICAgICAgICByZW1vdmVkQ2hhck51bWJlciA9IHN0YXJ0SW5kZXggPT09IGVuZEluZGV4ID8gMCA6IGVuZEluZGV4IC0gc3RhcnRJbmRleCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRvUmVtb3ZlKGVkaXRSZXN1bHQsIG9yaWdpbmFsUGFydHMsIHJlbW92ZWRDaGFyTnVtYmVyKVxuICB9XG5cbiAgZG9SZW1vdmUgPSAoZWRpdFJlc3VsdDogRWRpdFJlc3VsdCwgb3JpZ2luYWxQYXJ0czogRXhwcmVzc2lvblBhcnRbXSwgcmVtb3ZlZENoYXJOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gYXBwbHlFZGl0UmVzdWx0VG9QYXJ0cyhlZGl0UmVzdWx0LCBvcmlnaW5hbFBhcnRzKVxuICAgIGNvbnN0IGlzSW5FZGl0YWJsZVBhcnQgPSB0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpXG4gICAgY29uc3QgaW5uZXJTZWxlY3Rpb24gPSBpc0luRWRpdGFibGVQYXJ0ID8gZ2V0U2VsZWN0aW9uUG9zSW5uZXJQYXJ0KHRoaXMuaWQsIGRvY3VtZW50ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCkpIDogbnVsbFxuICAgIC8vIGdldCBzZWxlY2lvbiBhbmQgZWl0YWJsZSBzdGF0dXMgZnJvbSBlZGl0IHJlc3VsdCxcbiAgICAvLyB1c2UgY3VycmVudCBzdGF0ZSBpZiBlaWRpdCByZXN1bHQgaXMgbnVsbFxuICAgIGNvbnN0IGV4cFNlbGVjdGlvbiA9IGVkaXRSZXN1bHRcbiAgICAgID8gZ2V0RXhwU2VsZWN0aW9uQW5kRWl0YWJsZVBhcnQodGhpcy5pZCwgaXNJbkVkaXRhYmxlUGFydCwgZWRpdFJlc3VsdCwgcGFydHMsIGlubmVyU2VsZWN0aW9uLCByZW1vdmVkQ2hhck51bWJlcilcbiAgICAgIDogdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb25cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXROZXdFeHByZXNzaW9uKHBhcnRzKSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzUG9wb3Zlck9wZW46IGZhbHNlLFxuICAgICAgZXhwU2VsZWN0aW9uOiBleHBTZWxlY3Rpb25cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNQb3BvdmVyT3BlbjogZXhwU2VsZWN0aW9uLnBhcnRJZCAmJiBwYXJ0c1tnZXRJbmRleEJ5UGFydElkKHRoaXMuaWQsIGV4cFNlbGVjdGlvbi5wYXJ0SWQpXSAmJlxuICAgICAgICBnZXRXaGV0aGVyUGFydE5lZWRQb3BvdmVyKHBhcnRzW2dldEluZGV4QnlQYXJ0SWQodGhpcy5pZCwgZXhwU2VsZWN0aW9uLnBhcnRJZCldLnR5cGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMZWZ0QXJyb3cgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c05vZGVPZlNlbGVjdGlvbiA9IGdldFByZXZpb3VzTm9kZU9mU2VsZWN0aW9uKHRoaXMuaWQpXG4gICAgICBpZiAocHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXhwU2VsZWN0aW9uOiB7XG4gICAgICAgICAgICBwYXJ0SWQ6IHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uLmlkLFxuICAgICAgICAgICAgdG9TdGFydDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IEV4cFNlbGVjdGlvblR5cGUuUGFydFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJTZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5pZCwgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudClcbiAgICAgIGlmIChpbm5lclNlbGVjdGlvbiAmJiBpbm5lclNlbGVjdGlvbi5wYXJ0SWQpIHtcbiAgICAgICAgY29uc3QgZXhwU2VsZWN0aW9uID0gaW5uZXJTZWxlY3Rpb24uc3RhcnRPZmZzZXQgLSAxID4gLTFcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5DaGFyLFxuICAgICAgICAgICAgICBwYXJ0SWQ6IGlubmVyU2VsZWN0aW9uLnBhcnRJZCxcbiAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IGlubmVyU2VsZWN0aW9uLnN0YXJ0T2Zmc2V0IC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZ2V0U2libGluZ09mRXhwU2VsZWN0aW9uKHRoaXMuaWQsIGlubmVyU2VsZWN0aW9uLnBhcnRJZCwgdHJ1ZSwgZmFsc2UsIHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGV4cFNlbGVjdGlvbixcbiAgICAgICAgICBpc1BvcG92ZXJPcGVuOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJpZ2h0QXJyb3cgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpKSB7XG4gICAgICBjb25zdCBuZXh0Tm9kZU9mU2VsZWN0aW9uID0gZ2V0TmV4dE5vZGVPZlNlbGVjdGlvbih0aGlzLmlkKVxuICAgICAgaWYgKG5leHROb2RlT2ZTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXhwU2VsZWN0aW9uOiB7XG4gICAgICAgICAgICBwYXJ0SWQ6IG5leHROb2RlT2ZTZWxlY3Rpb24uaWQsXG4gICAgICAgICAgICB0b1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IEV4cFNlbGVjdGlvblR5cGUuUGFydFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJTZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb25Qb3NJbm5lclBhcnQodGhpcy5pZCwgdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudClcbiAgICAgIGlmIChpbm5lclNlbGVjdGlvbiAmJiBpbm5lclNlbGVjdGlvbi5wYXJ0SWQpIHtcbiAgICAgICAgY29uc3QgZXhwU2VsZWN0aW9uID0gaW5uZXJTZWxlY3Rpb24uc3RhcnRPZmZzZXQgKyAxIDw9IGlubmVyU2VsZWN0aW9uLmNvbnRlbnRMZW5ndGhcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5DaGFyLFxuICAgICAgICAgICAgICBwYXJ0SWQ6IGlubmVyU2VsZWN0aW9uLnBhcnRJZCxcbiAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IGlubmVyU2VsZWN0aW9uLnN0YXJ0T2Zmc2V0ICsgMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZ2V0U2libGluZ09mRXhwU2VsZWN0aW9uKHRoaXMuaWQsIGlubmVyU2VsZWN0aW9uLnBhcnRJZCwgZmFsc2UsIGZhbHNlLCB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBleHBTZWxlY3Rpb24sXG4gICAgICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVEb3duQXJyb3cgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNQb3BvdmVyT3Blbikge1xuICAgICAgY29uc3QgcG9wb3ZlclRhcmdldCA9IGdldFBvcG92ZXJUYXJnZXQodGhpcy5pZCwgdGhpcy5nZXRXaGV0aGVySW5FZGl0YWJsZVBhcnQoKSwgdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cylcbiAgICAgIGNvbnN0IHBvcG92ZXJJdGVtcyA9IGdldFBvcG92ZXJJdGVtcyh0aGlzLmlkLCBwb3BvdmVyVGFyZ2V0LCB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzLCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLFxuICAgICAgICB0aGlzLnByb3BzLndpZGdldElkLCB0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSlcbiAgICAgIGxldCBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleFxuICAgICAgaWYgKCFzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXgpIHtcbiAgICAgICAgc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4ID0gJzAnXG4gICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleCkgPCBwb3BvdmVySXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXggPSBgJHtwYXJzZUludCh0aGlzLnN0YXRlLnNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleCkgKyAxfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleCA9IGAke3BvcG92ZXJJdGVtcy5sZW5ndGggLSAxfWBcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXggfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVVcEFycm93ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzUG9wb3Zlck9wZW4pIHtcbiAgICAgIGNvbnN0IHBvcG92ZXJUYXJnZXQgPSBnZXRQb3BvdmVyVGFyZ2V0KHRoaXMuaWQsIHRoaXMuZ2V0V2hldGhlckluRWRpdGFibGVQYXJ0KCksIHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMpXG4gICAgICBjb25zdCBwb3BvdmVySXRlbXMgPSBnZXRQb3BvdmVySXRlbXModGhpcy5pZCwgcG9wb3ZlclRhcmdldCwgdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cywgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyxcbiAgICAgICAgdGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5icm93c2VyU2l6ZU1vZGUpXG4gICAgICBsZXQgc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXhcbiAgICAgIGlmICghc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4KSB7XG4gICAgICAgIHNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleCA9IGAke3BvcG92ZXJJdGVtcy5sZW5ndGggLSAxfWBcbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4KSA+IDApIHtcbiAgICAgICAgc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4ID0gYCR7cGFyc2VJbnQodGhpcy5zdGF0ZS5zZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXgpIC0gMX1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXggPSAnMCdcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBvcG92ZXJJdGVtSW5kZXggfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1BvcG92ZXJPcGVuICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBwb3BvdmVyVGFyZ2V0ID0gZ2V0UG9wb3ZlclRhcmdldCh0aGlzLmlkLCB0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpLCB0aGlzLnByb3BzLmV4cHJlc3Npb24gJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzKVxuICAgICAgY29uc3QgcG9wb3Zlckl0ZW1zID0gZ2V0UG9wb3Zlckl0ZW1zKHRoaXMuaWQsIHBvcG92ZXJUYXJnZXQsIHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMsXG4gICAgICAgIHRoaXMucHJvcHMud2lkZ2V0SWQsIHRoaXMucHJvcHMuYnJvd3NlclNpemVNb2RlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleDogbnVsbCB9KVxuICAgICAgdGhpcy5oYW5kbGVQb3BvdmVySXRlbUNsaWNrKHBvcG92ZXJJdGVtc1t0aGlzLnN0YXRlLnNlbGVjdGVkUG9wb3Zlckl0ZW1JbmRleF0sIHBvcG92ZXJUYXJnZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gKHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMgJiYgdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzLmxlbmd0aCkgfHwgMFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUG9wb3Zlck9wZW46IGZhbHNlLFxuICAgICAgICBleHBTZWxlY3Rpb246IHtcbiAgICAgICAgICAvLyBtb3ZlIHNlbGVjdGlvbiB0byBlbmQgb2YgZWRpdGFibGUgcGFydCBvciBtb3ZlIHNlbGVjdGlvbiB0byBlbmQgb2YgZWRpdG9yXG4gICAgICAgICAgcGFydElkOiB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbiAmJiB0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbi50eXBlID09PSBFeHBTZWxlY3Rpb25UeXBlLkNoYXJcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24ucGFydElkXG4gICAgICAgICAgICA6IChwYXJ0c0xlbmd0aCA+IDAgPyBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIHBhcnRzTGVuZ3RoIC0gMSkgOiBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIDApKSxcbiAgICAgICAgICB0b1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLlBhcnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQb3BvdmVySXRlbUNsaWNrID0gKGl0ZW06IFBvcG92ZXJJdGVtLCBwYXJ0SWQ6IHN0cmluZykgPT4ge1xuICAgIGlmICghaXRlbSB8fCAhcGFydElkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXdQYXJ0cyA9IHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMgPyB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMuc2xpY2UoKSA6IFtdXG5cbiAgICBpZiAoaXRlbS50eXBlID09PSBQb3BvdmVyVHlwZS5GaWVsZCkge1xuICAgICAgdGhpcy5oYW5kbGVGaWVsZFBvcG92ZXJDbGljayhuZXdQYXJ0cywgcGFydElkLCBpdGVtKVxuICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSBQb3BvdmVyVHlwZS5EYXRhU291cmNlKSB7XG4gICAgICB0aGlzLmhhbmRsZURzUG9wb3ZlckNsaWNrKG5ld1BhcnRzLCBwYXJ0SWQsIGl0ZW0pXG4gICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09IFBvcG92ZXJUeXBlLkZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZUZ1bmN0aW9uUG9wb3ZlckNsaWNrKG5ld1BhcnRzLCBwYXJ0SWQsIGl0ZW0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmllbGRQb3BvdmVyQ2xpY2sgPSAobmV3UGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIHBhcnRJZDogc3RyaW5nLCBpdGVtOiBQb3BvdmVySXRlbSkgPT4ge1xuICAgIG5ld1BhcnRzID0gbmV3UGFydHMgfHwgW11cbiAgICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlQYXJ0SWQodGhpcy5pZCwgcGFydElkKVxuICAgIGNvbnN0IGRzSWQ6IHN0cmluZyA9IG5ld1BhcnRzW2luZGV4XS5kYXRhU291cmNlSWRcbiAgICBjb25zdCBuZXdQYXJ0OiBFeHByZXNzaW9uUGFydCA9IGdldEV4cHJlc3Npb25QYXJ0KHRoaXMuZ2V0U2luZ2xlRXhwRnJvbVBvcG92ZXJJdGVtKGl0ZW0pLCBkc0lkLCBuZXdQYXJ0c1tpbmRleF0uaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCwgaXRlbS5pZClcblxuICAgIG5ld1BhcnRzLnNwbGljZShpbmRleCwgMSwgbmV3UGFydClcblxuICAgIGNvbnN0IGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgIHBhcnRJZDogZ2V0UGFydElkQnlJbmRleCh0aGlzLmlkLCBpbmRleCksXG4gICAgICB0b1N0YXJ0OiBmYWxzZSxcbiAgICAgIHR5cGU6IEV4cFNlbGVjdGlvblR5cGUuUGFydFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2UsXG4gICAgICBleHBTZWxlY3Rpb25cbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXROZXdFeHByZXNzaW9uKG5ld1BhcnRzKSlcbiAgfVxuXG4gIGhhbmRsZURzUG9wb3ZlckNsaWNrID0gKHBhcnRzOiBFeHByZXNzaW9uUGFydFtdLCBwYXJ0SWQ6IHN0cmluZywgaXRlbTogUG9wb3Zlckl0ZW0pID0+IHtcbiAgICBwYXJ0cyA9IHBhcnRzIHx8IFtdXG4gICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5UGFydElkKHRoaXMuaWQsIHBhcnRJZClcbiAgICBjb25zdCBuZXdQYXJ0cyA9IHBhcnRzLnNsaWNlKClcblxuICAgIGlmIChpdGVtLmlkLnNwbGl0KCctJykucmV2ZXJzZSgpWzBdID09PSBDT05TVEFOVFMuUkVQRUFUX0NPTlRFWFRfREFUQV9WSUVXX0lEKSB7XG4gICAgICBjb25zdCBtYWluRGF0YVNvdXJjZUlkID0gaXRlbS5pZC5zcGxpdCgnLScpLnJldmVyc2UoKS5zbGljZSgxKS5yZXZlcnNlKCkuam9pbignLScpXG4gICAgICBjb25zdCB0ZW1wVXNlRHM6IElNVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7IGRhdGFTb3VyY2VJZDogaXRlbS5pZCwgbWFpbkRhdGFTb3VyY2VJZCwgZGF0YVZpZXdJZDogQ09OU1RBTlRTLlJFUEVBVF9DT05URVhUX0RBVEFfVklFV19JRCB9KVxuICAgICAgY29uc3QgcmVhbFVzZURzID0gZ2V0UmVhbFVzZURhdGFTb3VyY2VzKHRlbXBVc2VEcywgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcylcbiAgICAgIG5ld1BhcnRzW2luZGV4XS5pc0Zyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0ID0gdHJ1ZVxuICAgICAgbmV3UGFydHNbaW5kZXhdLmRhdGFTb3VyY2VJZCA9IHJlYWxVc2VEcyAmJiByZWFsVXNlRHMuZGF0YVNvdXJjZUlkXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BhcnRzW2luZGV4XS5kYXRhU291cmNlSWQgPSBpdGVtLmlkXG4gICAgfVxuXG4gICAgY29uc3QgZXhwU2VsZWN0aW9uOiBFeHBTZWxlY3Rpb24gPSB7XG4gICAgICBwYXJ0SWQsXG4gICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICBzdGFydE9mZnNldDogbmV3UGFydHNbaW5kZXhdLmV4cC5sZW5ndGggLSAxXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldE5ld0V4cHJlc3Npb24obmV3UGFydHMpKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2UsXG4gICAgICBleHBTZWxlY3Rpb25cbiAgICB9LCAoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBpc1BvcG92ZXJPcGVuOiB0cnVlIH0pIH0pXG4gIH1cblxuICBoYW5kbGVGdW5jdGlvblBvcG92ZXJDbGljayA9IChuZXdQYXJ0czogRXhwcmVzc2lvblBhcnRbXSwgcGFydElkOiBzdHJpbmcsIGl0ZW06IFBvcG92ZXJJdGVtKSA9PiB7XG4gICAgbmV3UGFydHMgPSBuZXdQYXJ0cyB8fCBbXVxuICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeVBhcnRJZCh0aGlzLmlkLCBwYXJ0SWQpXG4gICAgY29uc3QgbmV3UGFydCA9IGdldEV4cHJlc3Npb25QYXJ0KHRoaXMuZ2V0U2luZ2xlRXhwRnJvbVBvcG92ZXJJdGVtKGl0ZW0pKVxuICAgIGNvbnN0IGV4cFNlbGVjdGlvbjogRXhwU2VsZWN0aW9uID0ge1xuICAgICAgcGFydElkOiBnZXRQYXJ0SWRCeUluZGV4KHRoaXMuaWQsIGluZGV4ICsgMSksXG4gICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLlBhcnQsXG4gICAgICB0b1N0YXJ0OiBmYWxzZVxuICAgIH1cblxuICAgIG5ld1BhcnRzLnNwbGljZShpbmRleCwgMSwgbmV3UGFydCwgeyB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3IsIGV4cDogJygnIH0sIHsgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLk9wZXJhdG9yLCBleHA6ICcpJyB9KVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldE5ld0V4cHJlc3Npb24obmV3UGFydHMpKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNQb3BvdmVyT3BlbjogZmFsc2UsXG4gICAgICBleHBTZWxlY3Rpb25cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgcG9wb3ZlclRhcmdldFxuICAgIGlmICh0aGlzLnN0YXRlLmlzUG9wb3Zlck9wZW4pIHtcbiAgICAgIHBvcG92ZXJUYXJnZXQgPSBnZXRQb3BvdmVyVGFyZ2V0KHRoaXMuaWQsIHRoaXMuZ2V0V2hldGhlckluRWRpdGFibGVQYXJ0KCksIHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMpXG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlclBhcnRzVG9IdG1sKHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMpXG4gICAgaHRtbCA9IGh0bWwgJiYgaHRtbC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICBjb25zdCBpc1ZhbGlkID0gZXhwcmVzc2lvblV0aWxzLmdldFdoZXRoZXJFeHByZXNzaW9uVmFsaWQodGhpcy5wcm9wcy5leHByZXNzaW9uKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWx0aXBsZURhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ctMTAwIGgtMTAwJywgeyBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwIGNvbXBvbmVudC1leHByZXNzaW9uLWVkaXRvcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAgZXhwcmVzc2lvbi1lZGl0b3ItaW5wdXQnLCB7ICdlcnJvci1ib3JkZXInOiAhaXNWYWxpZCB9KX0+XG4gICAgICAgICAgICAgIDxDb250ZW50RWRpdGFibGVcbiAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgaHRtbD17aHRtbH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISEodGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24gJiYgdGhpcy5zdGF0ZS5leHBTZWxlY3Rpb24udHlwZSA9PT0gRXhwU2VsZWN0aW9uVHlwZS5DaGFyKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCBicmVhay1hbGwgZXhwcmVzc2lvbi1lZGl0b3ItaW5wdXQtY29udGVudC1lZGl0YWJsZSdcbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5sdHJTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEV4cFBvcG92ZXJcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlSWQ9e3BvcG92ZXJUYXJnZXR9IGNvbnRhaW5lck5vZGU9e3RoaXMuY29udGVudEVkaXRhYmxlQ29udGFpbmVyPy5jdXJyZW50fSBleHBTZWxlY3Rpb249e3RoaXMuc3RhdGUuZXhwU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtnZXRQb3BvdmVySXRlbXModGhpcy5pZCwgcG9wb3ZlclRhcmdldCwgdGhpcy5wcm9wcy5leHByZXNzaW9uICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cywgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyxcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2lkZ2V0SWQsIHRoaXMucHJvcHMuYnJvd3NlclNpemVNb2RlKX0gaXNPcGVuPXt0aGlzLnN0YXRlLmlzUG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVQb3BvdmVySXRlbUNsaWNrfSB0aGVtZT17dGhpcy5wcm9wcy50aGVtZX0gc2VsZWN0ZWRJdGVtSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQb3BvdmVySXRlbUluZGV4fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIWlzVmFsaWQgJiYgPGRpdiBjbGFzc05hbWU9J210LTEgZXJyb3ItbWVzc2FnZScgcmVmPXt0aGlzLmVycm9yTXNnQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2ludmFsaWRFeHByZXNzaW9uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5pbnZhbGlkRXhwcmVzc2lvbiB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdleHByZXNzaW9uLWVkaXRvci1oZWxwZXIgbXQtNCcsIHsgJ3dpdGgtZXJyb3ItbWVzc2FnZSc6ICFpc1ZhbGlkIH0pfSByZWY9e3RoaXMuaGVscGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPEV4cEVkaXRvckhlbHBlclxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb249e3RoaXMucHJvcHMuZXhwcmVzc2lvbn0gdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IG9uU2VsZWN0PXt0aGlzLm9uSGVscGVySXRlbVNlbGVjdH0gaW50bD17dGhpcy5wcm9wcy5pbnRsfVxuICAgICAgICAgICAgICAgIGV4dGVybmFsSWQ9e3RoaXMuaWR9IGluRWRpdGFibGVQYXJ0PXt0aGlzLmdldFdoZXRoZXJJbkVkaXRhYmxlUGFydCgpfSBjb250YWluZXI9e3RoaXMuc3RhdGUuaXNFZGl0b3JNb3VudGVkID8gdGhpcy5jb250ZW50RWRpdGFibGVDb250YWluZXIuY3VycmVudCA6IG51bGx9XG4gICAgICAgICAgICAgICAgZXhwU2VsZWN0aW9uPXt0aGlzLnN0YXRlLmV4cFNlbGVjdGlvbn0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L011bHRpcGxlRGF0YVNvdXJjZUNvbXBvbmVudD5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJTVN0YXRlLCBvd25Qcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBicm93c2VyU2l6ZU1vZGU6IHN0YXRlPy5hcHBDb250ZXh0Py5pc0J1aWxkZXIgPyBzdGF0ZT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmJyb3dzZXJTaXplTW9kZSA6IHN0YXRlPy5icm93c2VyU2l6ZU1vZGVcbiAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBfX0V4cHJlc3Npb25FZGl0b3IgPSBSZWFjdFJlZHV4LmNvbm5lY3Q8U3RhdGVUb1Byb3BzLCB1bmtub3duLCBQcm9wcz4obWFwU3RhdGVUb1Byb3BzKShfRXhwcmVzc2lvbkVkaXRvcilcbmNvbnN0IEV4cHJlc3Npb25FZGl0b3IgPSB3aXRoVGhlbWUod2l0aFN0eWxlcyhpbmplY3RJbnRsPCdpbnRsJywgUHJvcHMgJiBFeHRyYVByb3BzPihfX0V4cHJlc3Npb25FZGl0b3IpLCAnRXhwcmVzc2lvbkVkaXRvcicpKVxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvbkVkaXRvclxuIiwiaW1wb3J0IHsgdHlwZSBFeHByZXNzaW9uUGFydCB9IGZyb20gJ2ppbXUtY29yZSdcbmV4cG9ydCBpbnRlcmZhY2UgRXhwU2VsZWN0aW9uIHsgLy8gc2VsZWN0aW9uIHBvc2l0aW9uXG4gIHBhcnRJZDogc3RyaW5nIC8vIHBhcnQgbm9kZSBpZFxuICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlXG4gIHRvU3RhcnQ/OiBib29sZWFuIC8vIGZvciBwYXJ0XG4gIHN0YXJ0T2Zmc2V0PzogbnVtYmVyIC8vIGZvciBjaGFyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5uZXJFeHBTZWxlY3Rpb24geyAvLyBzZWxlY3Rpb24gcG9zaXRpb24gaW5uZXIgb25lIHBhcnRcbiAgcGFydElkOiBzdHJpbmdcbiAgc3RhcnRPZmZzZXQ6IG51bWJlciAvLyBudW1iZXIgb2YgY2hhcmFjdGVycywgc3RhcnQgb2Ygc2VsZWN0aW9uIHRvIHRoZSBzdGFydCBvZiB0aGUgcGFydFxuICBlbmRPZmZzZXQ6IG51bWJlciAvLyBudW1iZXIgb2YgY2hhcmFjdGVycywgZW5kIG9mIHNlbGVjdGlvbiB0byB0aGUgc3RhcnQgb2YgdGhlIHBhcnRcbiAgY29udGVudExlbmd0aDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdEl0ZW0ge1xuICAvLyBwYXJ0IGNhbiBiZSBudWxsLCB3aGljaCBtZWFucyB0aGUgcGFydCBpcyByZW1vdmVkXG4gIHBhcnQ6IEV4cHJlc3Npb25QYXJ0XG4gIC8vIHdoZXRoZXIgdGhlIHBhcnQgaXMgcmVwbGFjaW5nIHByZXZpb3VzIHBhcnQsIGlmIGZhbHNlLCBpbnNlcnQgdGhlIHBhcnQsIGlmIHRydWUsIGluc2VydCB0aGUgcGFydCBhbmQgcmVtb3ZlIHByZXZpb3VzIHBhcnRcbiAgaXNSZXBsYWNpbmc6IGJvb2xlYW5cbiAgLy8gd2hlbiByZXBsYWNpbmcgaXMgdHJ1ZSwgdGhlcmUgbXVzdCBiZSB0d28gcGFydHMgbWVyZ2VkLCB3ZSBuZWVkIHRvIGtub3cgaG93IHRoZSB0d28gcGFydHMgYXJlIG1lcmdlZFxuICAvLyB3aGVuIHJlcGxhY2luZyBpcyBmYWxzZSwgc3RhcnRPZmZzZXQgaXMgbnVsbFxuICAvLyBlLmcuLCBbMTIzLCB7ZjF9XSAtPiBhZGQgbnVtYmVyIDUgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdHdvIHBhcnRzIC0+IFsxMjM1LCB7ZjF9XSwgc3RhcnRPZmZzZXQgd2lsbCBiZSAzXG4gIC8vIGUuZy4sIFsrLCBhYmNdIC0+IHBhc3RlIDEyIHRvIHRoZSBtaWRkbGUgb2YgdGhlIHR3byBwYXJ0cyAtPiBbKywgMTJhYmNdLCBzdGFydE9mZnNldCB3aWxsIGJlIDJcbiAgLy8gZS5nLiwgWyssIGFiY10gLT4gYWRkIC0gdG8gdGhlIG1pZGRsZSBvZiB0aGUgdHdvIHBhcnRzIC0+IFsrLCAtLCBhYmNdLCBzdGFydE9mZnNldCB3aWxsIGJlIG51bGxcbiAgc3RhcnRPZmZzZXQ6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRSZXN1bHQge1xuICBbaW5kZXg6IHN0cmluZ106IEVkaXRJdGVtXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9wb3Zlckl0ZW0ge1xuICBpZDogc3RyaW5nIC8vIGppbXVOYW1lIG9mIGZpZWxkLCBvciBpZCBvZiBkYXRhIHNvdXJjZVxuICBjb250ZW50OiBzdHJpbmcgLy8gYWxpYXMvbmFtZSBvZiBmaWVsZCwgb3IgbGFiZWwgb2YgZGF0YSBzb3VyY2VcbiAgdHlwZTogUG9wb3ZlclR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IEVYUF9QQVJUX1BSRUZJWCA9ICdwYXJ0J1xuXG5leHBvcnQgY29uc3QgRVhQX0NPTlRBSU5FUl9QUkVGSVggPSAnZXhwcmVzc2lvbidcblxuZXhwb3J0IGVudW0gRXhwU2VsZWN0aW9uVHlwZSB7XG4gIFBhcnQgPSAnUEFSVCcsIC8vIHNlbGVjdGlvbiBpcyBuZXh0IHRvIGEgcGFydFxuICBDaGFyID0gJ0NIQVInIC8vIHNlbGVjdGlvbiBpcyBpbiB0aGUgbWlkZGxlIG9mIGEgcGFydFxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyVHlwZSB7XG4gIEZpZWxkID0gJ0ZJRUxEJyxcbiAgRGF0YVNvdXJjZSA9ICdEQVRBU09VUkNFJyxcbiAgRnVuY3Rpb24gPSAnRlVOQ1RJT04nXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIEV4cHJlc3Npb25QYXJ0LCBFeHByZXNzaW9uUGFydFR5cGUsIEV4cHJlc3Npb25GdW5jdGlvbnMsIHR5cGUgRmllbGRTY2hlbWEsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBEYXRhU291cmNlTWFuYWdlciwgSmltdUZpZWxkVHlwZSxcbiAgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIEJyb3dzZXJTaXplTW9kZSwgaTE4blxuICAsIENPTlNUQU5UU1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBnZXRJbmRleEJ5UGFydElkLCBnZXRTb3J0ZWRLZXlzLCBpc1N0cmluZywgaXNGaWVsZCwgaXNPcGVyYXRvciwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGFkZEF1dG9BZGRlZERhdGFWaWV3cywgZ2V0UmVhbFVzZURhdGFTb3VyY2VzLFxuICBpc0NoYXJEb3VibGVRdW90YXRpb25NYXJrZXIsIGlzQ2hhckZyb250Q3VybHlCcmFja2V0LCBpc0NoYXJQb3N0Q3VybHlCcmFja2V0LCBpc051bWJlclZhcmlhYmxlLCBpc0NoYXJhY3RlclVubWVyZ2VhYmxlLCBpc1BhcnRVbm1lcmdlYWJsZVxufSBmcm9tICcuL2Jhc2ljLXV0aWxzJ1xuaW1wb3J0IHsgZ2V0UHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24sIGdldFBhcnRJZE9mU2VsZWN0aW9uIH0gZnJvbSAnLi9zZWxlY3Rpb24tdXRpbHMnXG5pbXBvcnQgeyB0eXBlIEVkaXRSZXN1bHQsIHR5cGUgUG9wb3Zlckl0ZW0sIFBvcG92ZXJUeXBlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBzIChleHByZXNzaW9uU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIC8vIFxcdWZlZmYgc3RhbmRzIGZvciBaRVJPIFdJRFRIIE5PLUJSRUFLIFNQQUNFXG4gIGNvbnN0IGUgPSBleHByZXNzaW9uU3RyaW5nLnJlcGxhY2UoL1xcdWZlZmYvZywgJycpXG5cbiAgbGV0IHJlc3VsdDogYW55W10gPSBoYW5kbGVTdHJpbmdFeHBzKGUpXG4gIHJlc3VsdCA9IGhhbmRsZUZpZWxkRXhwcyhyZXN1bHQpXG4gIHJlc3VsdCA9IGhhbmRsZU9wZXJhdG9FeHBzKHJlc3VsdClcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogcmV0dXJuIGFuIGFycmF5IHdoaWNoIG1lbWJlcnMgYXJlIHN0cmluZyBleHBzIGFuZCBvdGhlciBleHBzIG5vdCBzcGxpdFxuICpcbiAqIGUuZy4gWydcImFiY1wiKzEyMyt7ZjF9K0FWRyh7ZjJ9KSddIC0+IFsnXCJhYmNcIicsICcrMTIzK3tmMX0rQVZHKHtmMn0pJ11cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHJpbmdFeHBzIChlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHEgPSBlLnNwbGl0KC8oW1xcXCJdKS9nKS5maWx0ZXIoZSA9PiAhIWUpXG4gIGxldCB0ID0gJydcbiAgbGV0IGlzU3RyaW5nU3RhcnQgPSBmYWxzZVxuICBsZXQgaXNTdHJpbmdFbmQgPSBmYWxzZVxuICBjb25zdCByZXN1bHQgPSBbXVxuICBxLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICBpZiAodiA9PT0gJ1wiJykge1xuICAgICAgdCArPSB2XG4gICAgICBpc1N0cmluZ0VuZCA9IGlzU3RyaW5nU3RhcnRcbiAgICAgIGlzU3RyaW5nU3RhcnQgPSB0cnVlXG4gICAgICBpZiAoaXNTdHJpbmdTdGFydCAmJiBpc1N0cmluZ0VuZCkge1xuICAgICAgICByZXN1bHQucHVzaCh0KVxuICAgICAgICB0ID0gJydcbiAgICAgICAgaXNTdHJpbmdTdGFydCA9IGZhbHNlXG4gICAgICAgIGlzU3RyaW5nRW5kID0gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nU3RhcnQpIHtcbiAgICAgIHQgKz0gdlxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2KVxuICAgIH1cblxuICAgIGlmIChpID09PSBxLmxlbmd0aCAtIDEgJiYgaXNTdHJpbmdTdGFydCAmJiAhaXNTdHJpbmdFbmQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHQpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiByZXR1cm4gYW4gYXJyYXkgd2hpY2ggaXMgc3BsaXQgYnkgY3VybHkgYnJhY2tldHNcbiAqXG4gKiBlLmcuIFsnXCJhYmNcIicsICcrMTIzK3tmMX0rQVZHKHtmMn0pJ10gLT4gWydcImFiY1wiJywgJysxMjMrJywgJ3tmMX0nLCAnK0FWRygnLCAne2YyfScsICcpJ11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZpZWxkRXhwcyAoZTogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGxldCByZXN1bHQ6IGFueVtdID0gZS5tYXAociA9PiB7XG4gICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICByZXR1cm4gclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gci5zcGxpdCgvKHtbXlxce1xcfV0qfSkvZykuZmlsdGVyKGUgPT4gISFlKVxuICAgIH1cbiAgfSlcbiAgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgcmVzdWx0KSBhcyBzdHJpbmdbXVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiByZXR1cm4gYW4gYXJyYXkgd2hpY2ggaXMgc3BsaXQgYnkgb3BlcmF0b3JzIGFuZCBmcm9udCBjdXJseSBicmFja2V0OiArIC0gKiAvICwgKCApIHsgc3BhY2VcbiAqXG4gKiBlLmcuIFsnXCJhYmNcIicsICcrMTIzKycsICd7ZjF9JywgJytBVkcoJywgJ3tmMn0nLCAnKSddIC0+IFsnXCJhYmNcIicsICcrJywgJzEyMycsICcrJywgJ3tmMX0nLCAnKycsICdBVkcnLCAnKCcsICd7ZjJ9JywgJyknXVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU9wZXJhdG9FeHBzIChlOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgbGV0IHJlc3VsdDogYW55W10gPSBlLm1hcChyID0+IHtcbiAgICBpZiAoaXNTdHJpbmcocikgfHwgaXNGaWVsZChyKSkge1xuICAgICAgcmV0dXJuIHJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHIuc3BsaXQoLyhcXHMqW1xcK1xcLVxcKlxcL1xcKFxcKVxcc11cXHMqKS9nKS5maWx0ZXIoZSA9PiAhIWUpXG4gICAgfVxuICB9KVxuICByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCByZXN1bHQpIGFzIHN0cmluZ1tdXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZXh0ZXJuYWxJZCBleHByZXNzaW9uIGVkaXRvciBub2RlIGlkXG4gKiBAcGFyYW0gcGFydHMgZXhwcmVzc2lvbiBwYXJ0c1xuICogQHBhcmFtIG5ld0NoYXJhY3RlcnMgaW5wdXQgY2hhcmFjdGVyc1xuICogQHBhcmFtIGlzSW5FZGl0YWJsZVBhcnQgd2hldGhlciBpcyBpbiBhbiBlZGl0YWJsZSBwYXJ0XG4gKiBAcGFyYW0gZHNJZHMgZGF0YSBzb3VyY2UgaWRcbiAqIEBwYXJhbSByYW5nZVxuICogQHBhcmFtIG5leHROb2RlT2ZTZWxlY3Rpb24gbmV4dCBub2RlIG9mIHNlbGVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2hhcmFjdGVyc1RvUGFydHMgKGV4dGVybmFsSWQ6IHN0cmluZywgcGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIG5ld0NoYXJhY3RlcnM6IHN0cmluZywgaXNJbkVkaXRhYmxlUGFydDogYm9vbGVhbiwgZHNJZHM6IHN0cmluZ1tdLFxuICByYW5nZTogUmFuZ2UsIG5leHROb2RlT2ZTZWxlY3Rpb246IEhUTUxFbGVtZW50KTogRWRpdFJlc3VsdCB7XG4gIHBhcnRzID0gcGFydHMgfHwgW11cbiAgbGV0IGVkaXRSZXN1bHQ6IEVkaXRSZXN1bHQgPSB7fVxuXG4gIGlmICghbmV3Q2hhcmFjdGVycykge1xuICAgIHJldHVybiBlZGl0UmVzdWx0XG4gIH1cblxuICBwYXJ0cyA9IHBhcnRzIHx8IFtdXG5cbiAgLy8gZ2V0IGluZGV4IG9mIG5leHQgcGFydCBmcm9tIHBvc2l0aW9uIG9mIHNlbGVjdGlvblxuICBjb25zdCBuZXh0UGFydEluZGV4ID0gbmV4dE5vZGVPZlNlbGVjdGlvbiA/IGdldEluZGV4QnlQYXJ0SWQoZXh0ZXJuYWxJZCwgbmV4dE5vZGVPZlNlbGVjdGlvbi5pZCkgOiBwYXJ0cy5sZW5ndGhcbiAgY29uc3QgY29tcGxldGVRdW90YXRpb25BbmRCcmFja2V0TmV3Q2hhcnMgPSBpc0NoYXJEb3VibGVRdW90YXRpb25NYXJrZXIobmV3Q2hhcmFjdGVycykgPyAnXCJcIicgOiAoaXNDaGFyRnJvbnRDdXJseUJyYWNrZXQobmV3Q2hhcmFjdGVycykgPyAne30nIDogbmV3Q2hhcmFjdGVycylcblxuICBjb25zdCBwYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzID0gZ2V0RXhwcyhjb21wbGV0ZVF1b3RhdGlvbkFuZEJyYWNrZXROZXdDaGFycykubWFwKGV4cCA9PiBnZXRFeHByZXNzaW9uUGFydChleHApKVxuICAvLyBpcyBmaXJzdCBwYXJ0IG9mIHBhcnRzIGZyb20gbmV3IGNoYXJhY3RlcnMgdW5tZXJnZWFibGVcbiAgY29uc3QgaXNGaXJzdFBhcnRVbm1lcmdlYWJsZSA9IHBhcnRzRnJvbU5ld0NoYXJhY3RlcnNbMF0gJiYgcGFydHNGcm9tTmV3Q2hhcmFjdGVyc1swXS5leHAubGVuZ3RoID09PSAxXG4gICAgPyBpc0NoYXJhY3RlclVubWVyZ2VhYmxlKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnNbMF0uZXhwKVxuICAgIDogaXNQYXJ0VW5tZXJnZWFibGUocGFydHNGcm9tTmV3Q2hhcmFjdGVyc1swXSlcbiAgLy8gaXMgbGFzdCBwYXJ0IG9mIHBhcnRzIGZyb20gbmV3IGNoYXJhY3RlcnMgdW5tZXJnZWFibGVcbiAgY29uc3QgaXNMYXN0UGFydFVubWVyZ2VhYmxlID0gcGFydHNGcm9tTmV3Q2hhcmFjdGVyc1twYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzLmxlbmd0aCAtIDFdICYmIHBhcnRzRnJvbU5ld0NoYXJhY3RlcnNbcGFydHNGcm9tTmV3Q2hhcmFjdGVycy5sZW5ndGggLSAxXS5leHAubGVuZ3RoID09PSAxXG4gICAgPyBpc0NoYXJhY3RlclVubWVyZ2VhYmxlKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnNbcGFydHNGcm9tTmV3Q2hhcmFjdGVycy5sZW5ndGggLSAxXS5leHApXG4gICAgOiBpc1BhcnRVbm1lcmdlYWJsZShwYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzW3BhcnRzRnJvbU5ld0NoYXJhY3RlcnMubGVuZ3RoIC0gMV0pXG5cbiAgaWYgKGlzSW5FZGl0YWJsZVBhcnQpIHtcbiAgICAvLyBjdXJyZW50IHBhcnQgaXMgdGhlIHBhcnQgYmVmb3JlIG5leHQgcGFydFxuICAgIC8vIGN1cnJlbnQgcGFydCBpcyB0aGUgZWRpdGFibGUgcGFydFxuICAgIGNvbnN0IGN1cnJlbnRQYXJ0SW5kZXggPSBuZXh0UGFydEluZGV4IC0gMSA+IDAgPyBuZXh0UGFydEluZGV4IC0gMSA6IDBcbiAgICBjb25zdCBjdXJyZW50UGFydCA9IHBhcnRzW2N1cnJlbnRQYXJ0SW5kZXhdXG4gICAgY29uc3QgaXNDdXJyZW50UGFydFVubWVyZ2VhYmxlID0gaXNQYXJ0VW5tZXJnZWFibGUoY3VycmVudFBhcnQpXG5cbiAgICBjb25zdCBzdGFydE9mZnNldCA9IHJhbmdlICYmIHJhbmdlLnN0YXJ0T2Zmc2V0XG4gICAgY29uc3Qgc3RhcnRDb250YWluZXIgPSByYW5nZSAmJiByYW5nZS5zdGFydENvbnRhaW5lclxuICAgIC8vIGlzIGFkZGluZyBuZXcgY2hhcmFjdGVycyB0byB0aGUgc3RhcnQgb2YgdGhlIHBhcnRcbiAgICBjb25zdCBpc0FkZGluZ1RvU3RhcnQgPSAhIShzdGFydE9mZnNldCAmJiBzdGFydE9mZnNldCA9PT0gbmV3Q2hhcmFjdGVycy5sZW5ndGgpXG4gICAgLy8gaXMgYWRkaW5nIG5ldyBjaGFyYWN0ZXJzIHRvIHRoZSBlbmQgb2YgdGhlIHBhcnRcbiAgICBjb25zdCBpc0FkZGluZ1RvRW5kID0gISEoc3RhcnRPZmZzZXQgJiYgc3RhcnRDb250YWluZXIgJiYgc3RhcnRPZmZzZXQgPT09IHN0YXJ0Q29udGFpbmVyLnRleHRDb250ZW50Lmxlbmd0aClcblxuICAgIGlmIChpc0N1cnJlbnRQYXJ0VW5tZXJnZWFibGUpIHtcbiAgICAgIGlmIChpc0FkZGluZ1RvU3RhcnQpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYXJ0SW5kZXggPSBjdXJyZW50UGFydEluZGV4IC0gMVxuICAgICAgICBjb25zdCBwcmV2aW91c1BhcnQgPSBwYXJ0c1twcmV2aW91c1BhcnRJbmRleF1cbiAgICAgICAgY29uc3QgaXNQcmV2UGFydFVubWVyZ2VhYmxlID0gaXNQYXJ0VW5tZXJnZWFibGUocHJldmlvdXNQYXJ0KVxuICAgICAgICBpZiAoIWlzUHJldlBhcnRVbm1lcmdlYWJsZSAmJiAhaXNGaXJzdFBhcnRVbm1lcmdlYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHAgPSBnZXRFeHBzKHByZXZpb3VzUGFydC5leHAgKyBjb21wbGV0ZVF1b3RhdGlvbkFuZEJyYWNrZXROZXdDaGFycykubWFwKGV4cCA9PiBnZXRFeHByZXNzaW9uUGFydChleHApKVxuICAgICAgICAgIGVkaXRSZXN1bHQgPSBnZXRFaWR0UmVzdWx0RnJvbVBhcnRzRnJvbU5ld0NoYXJhY3RlcnMocCwgcHJldmlvdXNQYXJ0SW5kZXgsIDAsIHBbcC5sZW5ndGggLSAxXS5leHAubGVuZ3RoLCBwLmxlbmd0aCAtIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzLCBjdXJyZW50UGFydEluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzQWRkaW5nVG9FbmQpIHtcbiAgICAgICAgY29uc3QgbmV4dFBhcnQgPSBwYXJ0c1tuZXh0UGFydEluZGV4XVxuICAgICAgICBjb25zdCBpc05leHRQYXJ0VW5tZXJnZWFibGUgPSBpc1BhcnRVbm1lcmdlYWJsZShuZXh0UGFydClcbiAgICAgICAgaWYgKCFpc05leHRQYXJ0VW5tZXJnZWFibGUgJiYgIWlzTGFzdFBhcnRVbm1lcmdlYWJsZSkge1xuICAgICAgICAgIGNvbnN0IHAgPSBnZXRFeHBzKGNvbXBsZXRlUXVvdGF0aW9uQW5kQnJhY2tldE5ld0NoYXJzICsgbmV4dFBhcnQuZXhwKS5tYXAoZXhwID0+IGdldEV4cHJlc3Npb25QYXJ0KGV4cCkpXG4gICAgICAgICAgY29uc3Qgc3RhcnRPZmZzZXQgPSBwW3AubGVuZ3RoIC0gMV0uZXhwLmxlbmd0aCAtIG5leHRQYXJ0LmV4cC5sZW5ndGggPiAtMSA/IHBbcC5sZW5ndGggLSAxXS5leHAubGVuZ3RoIC0gbmV4dFBhcnQuZXhwLmxlbmd0aCA6IHBbcC5sZW5ndGggLSAxXS5leHAubGVuZ3RoXG4gICAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwLCBuZXh0UGFydEluZGV4LCBwLmxlbmd0aCAtIDEsIHN0YXJ0T2Zmc2V0LCBwLmxlbmd0aCAtIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzLCBuZXh0UGFydEluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBpcyBhZGRpbmcgbmV3IGNoYXJhY3RlcnMgdG8gbWlkZGxlIG9mIHRoZSBwYXJ0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJ0ID0gcGFydHNbY3VycmVudFBhcnRJbmRleF1cbiAgICAgICAgY29uc3QgZXhwID0gc3RhcnRDb250YWluZXIgJiYgc3RhcnRDb250YWluZXIudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgdXBkYXRlZEN1cnJlbnRQYXJ0ID0gY3VycmVudFBhcnQgJiYgZXhwICYmIGdldEV4cHJlc3Npb25QYXJ0KGV4cCwgY3VycmVudFBhcnQuZGF0YVNvdXJjZUlkLCBjdXJyZW50UGFydC5pc0Zyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0LCBjdXJyZW50UGFydC5qaW11RmllbGROYW1lKVxuICAgICAgICBlZGl0UmVzdWx0W2N1cnJlbnRQYXJ0SW5kZXhdID0ge1xuICAgICAgICAgIHBhcnQ6IHVwZGF0ZWRDdXJyZW50UGFydCxcbiAgICAgICAgICBpc1JlcGxhY2luZzogdHJ1ZSxcbiAgICAgICAgICBzdGFydE9mZnNldDogcmFuZ2UgJiYgcmFuZ2Uuc3RhcnRPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIGN1cnJlbnQgcGFydCBpcyBtZXJnZWFibGUsIHdoaWNoIG1lYW5zIHByZXZpb3VzIHBhcnQgYW5kIG5leHQgcGFydCBtdXN0IGJlIHVubWVyZ2VhYmxlXG4gICAgICBpZiAoaXNBZGRpbmdUb1N0YXJ0KSB7XG4gICAgICAgIGlmICghaXNMYXN0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGdldEV4cHMoY29tcGxldGVRdW90YXRpb25BbmRCcmFja2V0TmV3Q2hhcnMgKyBjdXJyZW50UGFydC5leHApLm1hcChleHAgPT4gZ2V0RXhwcmVzc2lvblBhcnQoZXhwKSlcbiAgICAgICAgICBjb25zdCBzID0gcFtwLmxlbmd0aCAtIDFdLmV4cC5sZW5ndGggLSBjdXJyZW50UGFydC5leHAubGVuZ3RoID4gLTEgPyBwW3AubGVuZ3RoIC0gMV0uZXhwLmxlbmd0aCAtIGN1cnJlbnRQYXJ0LmV4cC5sZW5ndGggOiBwW3AubGVuZ3RoIC0gMV0uZXhwLmxlbmd0aFxuICAgICAgICAgIGVkaXRSZXN1bHQgPSBnZXRFaWR0UmVzdWx0RnJvbVBhcnRzRnJvbU5ld0NoYXJhY3RlcnMocCwgY3VycmVudFBhcnRJbmRleCwgcC5sZW5ndGggLSAxLCBzLCBwLmxlbmd0aCAtIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzLCBjdXJyZW50UGFydEluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzQWRkaW5nVG9FbmQpIHtcbiAgICAgICAgaWYgKCFpc0ZpcnN0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGdldEV4cHMoY3VycmVudFBhcnQuZXhwICsgY29tcGxldGVRdW90YXRpb25BbmRCcmFja2V0TmV3Q2hhcnMpLm1hcChleHAgPT4gZ2V0RXhwcmVzc2lvblBhcnQoZXhwKSlcbiAgICAgICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHAsIGN1cnJlbnRQYXJ0SW5kZXgsIDAsIHBbMF0uZXhwLmxlbmd0aCwgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnMsIG5leHRQYXJ0SW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGlzIGFkZGluZyBuZXcgY2hhcmFjdGVycyB0byBtaWRkbGUgb2YgdGhlIHBhcnRcbiAgICAgICAgY29uc3QgZXhwU3RyaW5nID0gc3RhcnRDb250YWluZXIgJiYgc3RhcnRDb250YWluZXIudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgcGFydHNGcm9tRXhwU3RyaW5nID0gZ2V0RXhwcyhleHBTdHJpbmcucmVwbGFjZSgvXFxcIi9nLCAnXCJcIicpLnJlcGxhY2UoL1xcey9nLCAne30nKSkubWFwKGV4cCA9PiBnZXRFeHByZXNzaW9uUGFydChleHApKVxuICAgICAgICBjb25zdCBzID0gcGFydHNGcm9tRXhwU3RyaW5nLmxlbmd0aCA9PT0gMSA/IHN0YXJ0T2Zmc2V0IDogcGFydHNGcm9tRXhwU3RyaW5nW3BhcnRzRnJvbUV4cFN0cmluZy5sZW5ndGggLSAxXS5leHAubGVuZ3RoXG4gICAgICAgIGNvbnN0IHNJbmRleCA9IHBhcnRzRnJvbUV4cFN0cmluZy5sZW5ndGggPT09IDEgPyAwIDogcGFydHNGcm9tRXhwU3RyaW5nLmxlbmd0aCAtIDFcbiAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwYXJ0c0Zyb21FeHBTdHJpbmcsIGN1cnJlbnRQYXJ0SW5kZXgsIDAsIHMsIHNJbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7IC8vIG5vdCBpbiBhIGVkaXRhYmxlIHBhcnQsIHdoaWNoIG1lYW5zIHRoZSBlZGl0b3IgaXMgZWRpdGFibGUgYW5kIHNlbGVjdGlvbiBpcyBiZXR3ZWVuIHR3byBwYXJ0c1xuICAgIGNvbnN0IG5leHRQYXJ0ID0gcGFydHNbbmV4dFBhcnRJbmRleF1cbiAgICAvLyBwcmV2aW91cyBwYXJ0IGlzIHRoZSBwYXJ0IGJlZm9yZSBuZXh0IHBhcnRcbiAgICAvLyBzZWxlY3Rpb24gaXMgYmV0d2VlbiBwcmV2aW91cyBwYXJ0IGFuZCBuZXh0IHBhcnRcbiAgICBjb25zdCBwcmV2aW91c1BhcnRJbmRleCA9IG5leHRQYXJ0SW5kZXggLSAxID4gMCA/IG5leHRQYXJ0SW5kZXggLSAxIDogMFxuICAgIGNvbnN0IHByZXZpb3VzUGFydCA9IHBhcnRzW3ByZXZpb3VzUGFydEluZGV4XVxuICAgIC8vIG9ubHkgd2hlbiBib3RoIG9mIHBhcnQgYW5kIGNoYXJhY3RlciBhcmUgbWVyZ2VhYmxlLCB0aGUgY2hhcmF0ZXIgY2FuIGJlIG1lcmdlZCB0byB0aGUgcGFydFxuICAgIGNvbnN0IGlzUHJldmlvdXNQYXJ0VW5tZXJnZWFibGUgPSBpc1BhcnRVbm1lcmdlYWJsZShwcmV2aW91c1BhcnQpXG4gICAgY29uc3QgaXNOZXh0UGFydFVubWVyZ2VhYmxlID0gaXNQYXJ0VW5tZXJnZWFibGUobmV4dFBhcnQpXG5cbiAgICAvLyB0aGVyZSBvbmx5IHRocmVlIGNvbmRpdGlvbnM6XG4gICAgLy8gMS4gYm90aCBvZiBwcmV2aW91cyBwYXJ0IGFuZCBuZXh0IHBhcnQgYXJlIHVubWVyZ2VhYmxlLCAyLiBvbmx5IHByZXZpb3VzIHBhcnQgaXMgdW5tZXJnZWFibGUsIDMuIG9ubHkgbmV4dCBwYXJ0IGlzIHVubWVyZ2VhYmxlXG4gICAgaWYgKGlzUHJldmlvdXNQYXJ0VW5tZXJnZWFibGUgJiYgaXNOZXh0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnMsIG5leHRQYXJ0SW5kZXgpXG4gICAgfSBlbHNlIGlmICghaXNOZXh0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICBpZiAoIWlzTGFzdFBhcnRVbm1lcmdlYWJsZSkge1xuICAgICAgICBjb25zdCBwID0gZ2V0RXhwcyhjb21wbGV0ZVF1b3RhdGlvbkFuZEJyYWNrZXROZXdDaGFycyArIG5leHRQYXJ0LmV4cCkubWFwKGV4cCA9PiBnZXRFeHByZXNzaW9uUGFydChleHApKVxuICAgICAgICBjb25zdCBzdGFydE9mZnNldCA9IHBbcC5sZW5ndGggLSAxXS5leHAubGVuZ3RoIC0gbmV4dFBhcnQuZXhwLmxlbmd0aCA+IC0xID8gcFtwLmxlbmd0aCAtIDFdLmV4cC5sZW5ndGggLSBuZXh0UGFydC5leHAubGVuZ3RoIDogcFtwLmxlbmd0aCAtIDFdLmV4cC5sZW5ndGhcbiAgICAgICAgZWRpdFJlc3VsdCA9IGdldEVpZHRSZXN1bHRGcm9tUGFydHNGcm9tTmV3Q2hhcmFjdGVycyhwLCBuZXh0UGFydEluZGV4LCBwLmxlbmd0aCAtIDEsIHN0YXJ0T2Zmc2V0LCBwLmxlbmd0aCAtIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnMsIG5leHRQYXJ0SW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNQcmV2aW91c1BhcnRVbm1lcmdlYWJsZSkge1xuICAgICAgaWYgKCFpc0ZpcnN0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICAgIGNvbnN0IHAgPSBnZXRFeHBzKHByZXZpb3VzUGFydC5leHAgKyBjb21wbGV0ZVF1b3RhdGlvbkFuZEJyYWNrZXROZXdDaGFycykubWFwKGV4cCA9PiBnZXRFeHByZXNzaW9uUGFydChleHApKVxuICAgICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHAsIHByZXZpb3VzUGFydEluZGV4LCAwLCBwWzBdLmV4cC5sZW5ndGgsIDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGl0UmVzdWx0ID0gZ2V0RWlkdFJlc3VsdEZyb21QYXJ0c0Zyb21OZXdDaGFyYWN0ZXJzKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnMsIG5leHRQYXJ0SW5kZXgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignT25lIG1lcmdlYWJsZSBwYXJ0IGNhbiBub3QgYmUgbmV4dCB0byBhbm90aGVyIG1lcmdlYWJsZSBwYXJ0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWRpdFJlc3VsdFxufVxuXG5mdW5jdGlvbiBnZXRFaWR0UmVzdWx0RnJvbVBhcnRzRnJvbU5ld0NoYXJhY3RlcnMgKHBhcnRzRnJvbU5ld0NoYXJhY3RlcnM6IEV4cHJlc3Npb25QYXJ0W10sIHN0YXJ0SW5kZXg6IG51bWJlciwgcmVwbGFjZUluZGV4PzogbnVtYmVyLCBzdGFydE9mZnNldD86IG51bWJlciwgc3RhcnRPZmZzZXRJbmRleD86IG51bWJlcik6IEVkaXRSZXN1bHQge1xuICBjb25zdCBlZGl0UmVzdWx0OiBFZGl0UmVzdWx0ID0ge31cblxuICBpZiAoIXBhcnRzRnJvbU5ld0NoYXJhY3RlcnMgfHwgIWlzTnVtYmVyVmFyaWFibGUoc3RhcnRJbmRleCkgfHwgc3RhcnRJbmRleCA8IDApIHtcbiAgICByZXR1cm4gZWRpdFJlc3VsdFxuICB9XG5cbiAgcGFydHNGcm9tTmV3Q2hhcmFjdGVycy5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgY29uc3QgaXNSZXBsYWNpbmcgPSBpc051bWJlclZhcmlhYmxlKHJlcGxhY2VJbmRleCkgJiYgcmVwbGFjZUluZGV4ID4gLTEgJiYgaSA9PT0gcmVwbGFjZUluZGV4XG4gICAgY29uc3QgcyA9IGlzTnVtYmVyVmFyaWFibGUoc3RhcnRPZmZzZXRJbmRleCkgJiYgc3RhcnRPZmZzZXRJbmRleCA+IC0xICYmIGkgPT09IHN0YXJ0T2Zmc2V0SW5kZXggPyBzdGFydE9mZnNldCA6IG51bGxcbiAgICBlZGl0UmVzdWx0W3N0YXJ0SW5kZXggKyBpXSA9IHtcbiAgICAgIHBhcnQ6IHAsXG4gICAgICBpc1JlcGxhY2luZyxcbiAgICAgIHN0YXJ0T2Zmc2V0OiBzXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBlZGl0UmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUVkaXRSZXN1bHRUb1BhcnRzIChlZGl0UmVzdWx0OiBFZGl0UmVzdWx0LCBwYXJ0czogRXhwcmVzc2lvblBhcnRbXSA9IFtdKTogRXhwcmVzc2lvblBhcnRbXSB7XG4gIGlmICghZWRpdFJlc3VsdCkge1xuICAgIHJldHVybiBwYXJ0c1xuICB9XG5cbiAgcGFydHMgPSBwYXJ0cyB8fCBbXVxuXG4gIGNvbnN0IG5ld1BhcnRzID0gcGFydHMuc2xpY2UoKVxuICBsZXQgZGVsZXRlQ291bnQgPSAwXG4gIGNvbnN0IHJlcGxhY2luZ1BhcnRzID0gW11cblxuICBPYmplY3Qua2V5cyhlZGl0UmVzdWx0KS5zb3J0KChpLCBqKSA9PiBwYXJzZUludChpKSAtIHBhcnNlSW50KGopKS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICBkZWxldGVDb3VudCArPSBlZGl0UmVzdWx0W2luZGV4XS5pc1JlcGxhY2luZyA/IDEgOiAwXG4gICAgaWYgKGVkaXRSZXN1bHRbaW5kZXhdLnBhcnQpIHtcbiAgICAgIHJlcGxhY2luZ1BhcnRzLnB1c2goZWRpdFJlc3VsdFtpbmRleF0ucGFydClcbiAgICB9XG4gIH0pXG5cbiAgbmV3UGFydHMuc3BsaWNlKE1hdGgubWluLmFwcGx5KG51bGwsIE9iamVjdC5rZXlzKGVkaXRSZXN1bHQpKSwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2luZ1BhcnRzKVxuXG4gIHJldHVybiBuZXdQYXJ0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2hldGhlclBhcnROZWVkUG9wb3ZlciAodHlwZTogRXhwcmVzc2lvblBhcnRUeXBlKTogYm9vbGVhbiB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQgfHwgdHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLkZ1bmN0aW9uXG59XG5cbmZ1bmN0aW9uIGdldEppbXVGaWVsZE5hbWVGcm9tQWxpYXMgKGRhdGFTb3VyY2VJZDogc3RyaW5nLCBhbGlhczogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFkYXRhU291cmNlSWQgfHwgIWFsaWFzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gIGNvbnN0IGRzID0gZHNNYW5hZ2VyLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKVxuICBjb25zdCBzY2hlbWEgPSBkcyAmJiBkcy5nZXRTY2hlbWEgJiYgZHMuZ2V0U2NoZW1hKClcbiAgY29uc3QgZmllbGRzID0gc2NoZW1hICYmIHNjaGVtYS5maWVsZHNcbiAgaWYgKCFmaWVsZHMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGoxLCBqMikgPT4gajEubG9jYWxlQ29tcGFyZShqMikpLmZpbmQoamltdUZpZWxkTmFtZSA9PiB7XG4gICAgICBjb25zdCBhID0gZmllbGRzW2ppbXVGaWVsZE5hbWVdLmFsaWFzIHx8IGZpZWxkc1tqaW11RmllbGROYW1lXS5uYW1lXG4gICAgICByZXR1cm4gYSA9PT0gYWxpYXNcbiAgICB9KSB8fCBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cHJlc3Npb25QYXJ0IChleHA6IHN0cmluZywgZGF0YVNvdXJjZUlkPzogc3RyaW5nLCBpc0Zyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0PzogYm9vbGVhbiwgamltdUZpZWxkTmFtZT86IHN0cmluZyk6IEV4cHJlc3Npb25QYXJ0IHtcbiAgaWYgKGlzRmllbGQoZXhwKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQsXG4gICAgICBleHA6IGV4cCxcbiAgICAgIGRhdGFTb3VyY2VJZCxcbiAgICAgIGppbXVGaWVsZE5hbWU6IGppbXVGaWVsZE5hbWUgfHwgZ2V0SmltdUZpZWxkTmFtZUZyb21BbGlhcyhkYXRhU291cmNlSWQsIGV4cC5yZXBsYWNlKC9eXFx7LywgJycpLnJlcGxhY2UoL1xcfSQvLCAnJykpLFxuICAgICAgaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dDogISFpc0Zyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oZXhwKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuRnVuY3Rpb24sXG4gICAgICBleHA6IGV4cFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc051bWJlcihleHApKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5OdW1iZXIsXG4gICAgICBleHA6IGV4cFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09wZXJhdG9yKGV4cCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLk9wZXJhdG9yLFxuICAgICAgZXhwOiBleHBcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoZXhwKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nLFxuICAgICAgZXhwOiBleHBcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5Vbmtub3duLFxuICAgICAgZXhwOiBleHBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGV4dGVybmFsSWQgZXhwcmVzc2lvbiBlZGl0b3Igbm9kZSBpZFxuICogQHBhcmFtIHBhcnRzIGV4cHJlc3Npb24gcGFydHNcbiAqIEBwYXJhbSBzdGFydEluZGV4IHN0YXJ0IHBhcnQgaW5kZXhcbiAqIEBwYXJhbSBlbmRJbmRleCBlbmQgcGFydCBpbmRleFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGFydHMgKGV4dGVybmFsSWQ6IHN0cmluZywgcGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIHN0YXJ0SW5kZXg6IG51bWJlciwgZW5kSW5kZXg6IG51bWJlcik6IEVkaXRSZXN1bHQge1xuICBwYXJ0cyA9IHBhcnRzIHx8IFtdXG4gIGlmICghcGFydHMgfHwgIWlzTnVtYmVyVmFyaWFibGUoc3RhcnRJbmRleCkgfHwgIWlzTnVtYmVyVmFyaWFibGUoZW5kSW5kZXgpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzUGFydCA9IHBhcnRzW3N0YXJ0SW5kZXggLSAxXSAvLyBwYXJ0IGJlZm9yZSB0by1iZS1yZW1vdmVkIHBhcnRzXG4gIGNvbnN0IG5leHRQYXJ0ID0gcGFydHNbZW5kSW5kZXggKyAxXSAvLyBwYXJ0IGFmdGVyIHRvLWJlLXJlbW92ZWQgcGFydHNcbiAgY29uc3QgZWRpdFJlc3VsdDogRWRpdFJlc3VsdCA9IHt9XG5cbiAgaWYgKHByZXZpb3VzUGFydCAmJiBuZXh0UGFydCAmJiAhaXNQYXJ0VW5tZXJnZWFibGUocHJldmlvdXNQYXJ0KSAmJiAhaXNQYXJ0VW5tZXJnZWFibGUobmV4dFBhcnQpKSB7XG4gICAgY29uc3QgbmV3RXhwcmVzc2lvblN0cmluZyA9IHByZXZpb3VzUGFydC5leHAgKyBuZXh0UGFydC5leHBcbiAgICBjb25zdCBuZXdFeHBzID0gZ2V0RXhwcyhuZXdFeHByZXNzaW9uU3RyaW5nKVxuICAgIGNvbnN0IG5ld1BhcnRzID0gbmV3RXhwcy5tYXAoKGUsIGkpID0+IGdldEV4cHJlc3Npb25QYXJ0KGUpKVxuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpIDw9IGVuZEluZGV4ICsgMTsgaSsrKSB7XG4gICAgICBlZGl0UmVzdWx0W2ldID0ge1xuICAgICAgICBwYXJ0OiBuZXdQYXJ0c1tpIC0gKHN0YXJ0SW5kZXggLSAxKV0gfHwgbnVsbCxcbiAgICAgICAgaXNSZXBsYWNpbmc6IHRydWUsXG4gICAgICAgIHN0YXJ0T2Zmc2V0OiBuZXdQYXJ0c1tpIC0gKHN0YXJ0SW5kZXggLSAxKV0gPyBwcmV2aW91c1BhcnQuZXhwLmxlbmd0aCA6IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPD0gZW5kSW5kZXg7IGkrKykge1xuICAgICAgZWRpdFJlc3VsdFtpXSA9IHtcbiAgICAgICAgcGFydDogbnVsbCxcbiAgICAgICAgaXNSZXBsYWNpbmc6IHRydWUsXG4gICAgICAgIHN0YXJ0T2Zmc2V0OiBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVkaXRSZXN1bHRcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGV4dGVybmFsSWQgZXhwcmVzc2lvbiBlZGl0b3Igbm9kZSBpZFxuICogQHBhcmFtIHBhcnRzIGV4cHJlc3Npb24gcGFydHNcbiAqIEBwYXJhbSBwYXJ0SWQgcGFydCBpZCB3aGljaCBpcyBlZGl0aW5nXG4gKiBAcGFyYW0gc3RhcnRJbmRleCBzdGFydCBjaGFyYWN0ZXIgaW5kZXhcbiAqIEBwYXJhbSBlbmRJbmRleCBlbmQgY2hhcmFjdGVyIGluZGV4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGFyYWN0ZXJzRnJvbU9uZVBhcnQgKGV4dGVybmFsSWQ6IHN0cmluZywgcGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIHBhcnRJZDogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIsIGVuZEluZGV4OiBudW1iZXIpOiBFZGl0UmVzdWx0IHtcbiAgcGFydHMgPSBwYXJ0cyB8fCBbXVxuICBjb25zdCBpbmRleCA9IGdldEluZGV4QnlQYXJ0SWQoZXh0ZXJuYWxJZCwgcGFydElkKVxuICBjb25zdCBwYXJ0ID0gcGFydHMgJiYgcGFydHNbaW5kZXhdXG5cbiAgaWYgKCFwYXJ0IHx8ICFwYXJ0LmV4cCB8fCAhaXNOdW1iZXJWYXJpYWJsZShzdGFydEluZGV4KSB8fCAhaXNOdW1iZXJWYXJpYWJsZShlbmRJbmRleCkgfHwgc3RhcnRJbmRleCA8IDAgfHwgZW5kSW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxldCBlZGl0UmVzdWx0OiBFZGl0UmVzdWx0ID0ge31cbiAgY29uc3QgdG9CZVJlbW92ZWRDaGFyYWN0ZXJzID0gcGFydC5leHAuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXggKyAxKVxuICBjb25zdCBpc0ZpcnN0Q2hhclRvQmVSZW1vdmVkID0gc3RhcnRJbmRleCA9PT0gMFxuICBjb25zdCBpc0xhc3RDaGFyVG9CZVJlbW92ZWQgPSBlbmRJbmRleCA9PT0gcGFydC5leHAubGVuZ3RoIC0gMVxuICBsZXQgbmV3RXhwXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBsZXQgbmV3UGFydDtcblxuICBpZiAoKGlzRmlyc3RDaGFyVG9CZVJlbW92ZWQgfHwgaXNMYXN0Q2hhclRvQmVSZW1vdmVkKSAmJiBpc0NoYXJEb3VibGVRdW90YXRpb25NYXJrZXIodG9CZVJlbW92ZWRDaGFyYWN0ZXJzKSkge1xuICAgIG5ld0V4cCA9IHBhcnQuZXhwLnJlcGxhY2UoL15cXFwiLywgJycpLnJlcGxhY2UoL1xcXCIkLywgJycpXG4gIH0gZWxzZSBpZiAoKGlzRmlyc3RDaGFyVG9CZVJlbW92ZWQgJiYgaXNDaGFyRnJvbnRDdXJseUJyYWNrZXQodG9CZVJlbW92ZWRDaGFyYWN0ZXJzKSkgfHwgKGlzTGFzdENoYXJUb0JlUmVtb3ZlZCAmJiBpc0NoYXJQb3N0Q3VybHlCcmFja2V0KHRvQmVSZW1vdmVkQ2hhcmFjdGVycykpKSB7XG4gICAgbmV3RXhwID0gcGFydC5leHAucmVwbGFjZSgvXlxcey8sICcnKS5yZXBsYWNlKC9cXH0kLywgJycpXG4gIH0gZWxzZSB7XG4gICAgbmV3RXhwID0gYCR7cGFydC5leHAuc2xpY2UoMCwgc3RhcnRJbmRleCl9JHtwYXJ0LmV4cC5zbGljZShlbmRJbmRleCArIDEpfWBcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgbmV3UGFydCA9IGdldEV4cHJlc3Npb25QYXJ0KG5ld0V4cCwgcGFydC5kYXRhU291cmNlSWQsIHBhcnQuaXNGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCwgcGFydC5qaW11RmllbGROYW1lKTtcblxuICBpZiAobmV3UGFydC5leHAubGVuZ3RoID4gMCkge1xuICAgIGlmIChpc1BhcnRVbm1lcmdlYWJsZShuZXdQYXJ0KSkge1xuICAgICAgZWRpdFJlc3VsdFtpbmRleF0gPSB7XG4gICAgICAgIHBhcnQ6IG5ld1BhcnQsXG4gICAgICAgIGlzUmVwbGFjaW5nOiB0cnVlLFxuICAgICAgICBzdGFydE9mZnNldDogc3RhcnRJbmRleCArIDEgLSAoZW5kSW5kZXggLSBzdGFydEluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBuZXcgcGFydCBpcyBtZXJnZWFibGVcbiAgICAgIGNvbnN0IHByZXZQYXJ0ID0gcGFydHNbaW5kZXggLSAxXVxuICAgICAgY29uc3QgbmV4dFBhcnQgPSBwYXJ0c1tpbmRleCArIDFdXG4gICAgICBjb25zdCBuZXdQYXJ0c0Zyb21OZXdFeHAgPSBnZXRFeHBzKG5ld0V4cC5yZXBsYWNlKC9cXFwiL2csICdcIlwiJykucmVwbGFjZSgvXFx7L2csICd7fScpKS5tYXAoZXhwID0+IGdldEV4cHJlc3Npb25QYXJ0KGV4cCkpXG4gICAgICBjb25zdCBpc1ByZXZQYXJ0VW5tZXJnZWFibGUgPSBpc1BhcnRVbm1lcmdlYWJsZShwcmV2UGFydClcbiAgICAgIGNvbnN0IGlzTmV4dFBhcnRVbm1lcmdlYWJsZSA9IGlzUGFydFVubWVyZ2VhYmxlKG5leHRQYXJ0KVxuXG4gICAgICAvLyBsZW5ndGggb2YgcGFydHMgd2hpY2ggYXJlIGVkaXRlZCBidXQgYXJlIG5vdCBjdXJyZW50IHBhcnRcbiAgICAgIC8vIGUuZy4gWzQ1LCBcIjEyM1wiLCA2N10gLT4gcmVtb3ZlIG9uZSBcIiAtPiBbNDUxMjM2N10sIHRoZSBmaXJzdCBwYXJ0IDQ1IGFuZCBsYXN0IHBhcnQgNjcgYXJlIGVkaXRlZCwgYnV0IGFyZSBub3QgY3VycmVudCBwYXJ0LCBjdXJyZW50IHBhcnQgaXMgXCIxMjNcIlxuICAgICAgbGV0IGV4dHJhRWRpdGVkUGFydHNMZW5ndGhcbiAgICAgIGxldCBleHBTdHJpbmdBZnRlck1lcmdlXG4gICAgICBpZiAocHJldlBhcnQgJiYgbmV4dFBhcnQgJiYgIWlzUHJldlBhcnRVbm1lcmdlYWJsZSAmJiAhaXNOZXh0UGFydFVubWVyZ2VhYmxlKSB7XG4gICAgICAgIGV4cFN0cmluZ0FmdGVyTWVyZ2UgPSBwcmV2UGFydC5leHAgKyBuZXdFeHAgKyBuZXh0UGFydC5leHBcbiAgICAgICAgZXh0cmFFZGl0ZWRQYXJ0c0xlbmd0aCA9IDJcbiAgICAgIH0gZWxzZSBpZiAocHJldlBhcnQgJiYgIWlzUHJldlBhcnRVbm1lcmdlYWJsZSkge1xuICAgICAgICBleHBTdHJpbmdBZnRlck1lcmdlID0gcHJldlBhcnQuZXhwICsgbmV3RXhwXG4gICAgICAgIGV4dHJhRWRpdGVkUGFydHNMZW5ndGggPSAxXG4gICAgICB9IGVsc2UgaWYgKG5leHRQYXJ0ICYmICFpc05leHRQYXJ0VW5tZXJnZWFibGUpIHtcbiAgICAgICAgZXhwU3RyaW5nQWZ0ZXJNZXJnZSA9IG5ld0V4cCArIG5leHRQYXJ0LmV4cFxuICAgICAgICBleHRyYUVkaXRlZFBhcnRzTGVuZ3RoID0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwU3RyaW5nQWZ0ZXJNZXJnZSA9IG5ld0V4cFxuICAgICAgICBleHRyYUVkaXRlZFBhcnRzTGVuZ3RoID0gMFxuICAgICAgfVxuXG4gICAgICAvLyBzdGFydCBpbmRleCBvZiBlZGl0ZWQgcGFydHMgaW4gb3JpZ2luIHBhcnRzXG4gICAgICBsZXQgc3RhcnRJbmRleEluT3JpZ2luUGFydHNcbiAgICAgIGxldCBzdGFydE9mZnNldFxuICAgICAgaWYgKHByZXZQYXJ0ICYmICFpc1ByZXZQYXJ0VW5tZXJnZWFibGUpIHtcbiAgICAgICAgc3RhcnRJbmRleEluT3JpZ2luUGFydHMgPSBpbmRleCAtIDFcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBpc0ZpcnN0Q2hhclRvQmVSZW1vdmVkID8gcHJldlBhcnQuZXhwLmxlbmd0aCA6IChpc0xhc3RDaGFyVG9CZVJlbW92ZWQgPyBuZXdQYXJ0c0Zyb21OZXdFeHBbbmV3UGFydHNGcm9tTmV3RXhwLmxlbmd0aCAtIDFdLmV4cC5sZW5ndGggOiAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRJbmRleEluT3JpZ2luUGFydHMgPSBpbmRleFxuICAgICAgICBzdGFydE9mZnNldCA9IGlzRmlyc3RDaGFyVG9CZVJlbW92ZWQgPyAwIDogKGlzTGFzdENoYXJUb0JlUmVtb3ZlZCA/IG5ld1BhcnRzRnJvbU5ld0V4cFtuZXdQYXJ0c0Zyb21OZXdFeHAubGVuZ3RoIC0gMV0uZXhwLmxlbmd0aCA6IDApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1BhcnRzID0gZ2V0RXhwcyhleHBTdHJpbmdBZnRlck1lcmdlLnJlcGxhY2UoL1xcXCIvZywgJ1wiXCInKS5yZXBsYWNlKC9cXHsvZywgJ3t9JykpLm1hcChleHAgPT4gZ2V0RXhwcmVzc2lvblBhcnQoZXhwKSlcbiAgICAgIGNvbnN0IHNlbGVjdGVkUGFydEluZGV4ID0gaXNGaXJzdENoYXJUb0JlUmVtb3ZlZCA/IHN0YXJ0SW5kZXhJbk9yaWdpblBhcnRzIDogKGlzTGFzdENoYXJUb0JlUmVtb3ZlZCA/IHN0YXJ0SW5kZXhJbk9yaWdpblBhcnRzICsgbmV3UGFydHMubGVuZ3RoIC0gMSA6IG51bGwpXG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4SW5PcmlnaW5QYXJ0czsgaSA8PSBzdGFydEluZGV4SW5PcmlnaW5QYXJ0cyArIG5ld1BhcnRzLmxlbmd0aCArIGV4dHJhRWRpdGVkUGFydHNMZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgZWRpdFJlc3VsdFtpXSA9IHtcbiAgICAgICAgICBwYXJ0OiBuZXdQYXJ0c1tpIC0gc3RhcnRJbmRleEluT3JpZ2luUGFydHNdIHx8IG51bGwsXG4gICAgICAgICAgaXNSZXBsYWNpbmc6IGkgLSBzdGFydEluZGV4SW5PcmlnaW5QYXJ0cyA8PSBleHRyYUVkaXRlZFBhcnRzTGVuZ3RoLCAvLyBvbmx5IGVkaXRlZCBwYXJ0IGlzIHJlcGxhY2VkXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IGkgPT09IHNlbGVjdGVkUGFydEluZGV4ID8gc3RhcnRPZmZzZXQgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWRpdFJlc3VsdCA9IHJlbW92ZVBhcnRzKGV4dGVybmFsSWQsIHBhcnRzLCBpbmRleCwgaW5kZXgpXG4gIH1cblxuICByZXR1cm4gZWRpdFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9wb3Zlckl0ZW1zIChleHRlcm5hbElkOiBzdHJpbmcsIHBhcnRJZDogc3RyaW5nLCBwYXJ0czogRXhwcmVzc2lvblBhcnRbXSwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LFxuICB3aWRnZXRJZDogc3RyaW5nLCBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZSk6IFBvcG92ZXJJdGVtW10ge1xuICBwYXJ0cyA9IHBhcnRzIHx8IFtdXG4gIGlmICghcGFydElkIHx8ICFwYXJ0cykge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgbGV0IHBvcG92ZXJJdGVtczogUG9wb3Zlckl0ZW1bXSA9IFtdXG4gIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXhCeVBhcnRJZChleHRlcm5hbElkLCBwYXJ0SWQpXG4gIGNvbnN0IHBhcnQ6IEV4cHJlc3Npb25QYXJ0ID0gcGFydHNbaW5kZXhdXG5cbiAgaWYgKCFwYXJ0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocGFydC50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQpIHtcbiAgICBpZiAocGFydC5kYXRhU291cmNlSWQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UocGFydC5kYXRhU291cmNlSWQpXG4gICAgICBjb25zdCBmaWVsZHM6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11RmllbGROYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9PiA9IHNlbGVjdGVkRHMgJiYgc2VsZWN0ZWREcy5nZXRTY2hlbWEgJiYgc2VsZWN0ZWREcy5nZXRTY2hlbWEoKS5maWVsZHNcbiAgICAgIGZpZWxkcyAmJiBPYmplY3Qua2V5cyhmaWVsZHMpXG4gICAgICAgIC5maWx0ZXIoamltdUZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGZpZWxkc1tqaW11RmllbGROYW1lXS5hbGlhcyB8fCBmaWVsZHNbamltdUZpZWxkTmFtZV0ubmFtZVxuICAgICAgICAgIHJldHVybiBuYW1lICYmIG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHBhcnQuZXhwLnJlcGxhY2UoL1tcXHtcXH1dL2csICcnKS50b0xvd2VyQ2FzZSgpKSA9PT0gMFxuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKGppbXVGaWVsZE5hbWUgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhcnRzW2luZGV4IC0gMV0gJiYgcGFydHNbaW5kZXggLSAxXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3IgJiYgcGFydHNbaW5kZXggLSAxXS5leHAgPT09ICcoJyAmJlxuICAgICAgICAgICAgcGFydHNbaW5kZXggLSAyXSAmJiBwYXJ0c1tpbmRleCAtIDJdLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IHBhcnRzW2luZGV4IC0gMl0uZXhwXG4gICAgICAgICAgICBjb25zdCBpc0Z1bmNDb3VudCA9IGZ1bmMgPT09IEV4cHJlc3Npb25GdW5jdGlvbnMuQ291bnRcbiAgICAgICAgICAgIGlmIChpc0Z1bmNDb3VudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNGdW5jTWluT3JNYXggPSBmdW5jID09PSBFeHByZXNzaW9uRnVuY3Rpb25zLk1pbiB8fCBmdW5jID09PSBFeHByZXNzaW9uRnVuY3Rpb25zLk1heFxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkc1tqaW11RmllbGROYW1lXS50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlciB8fCAoaXNGdW5jTWluT3JNYXggJiYgZmllbGRzW2ppbXVGaWVsZE5hbWVdLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuRGF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgLnNvcnQoKGoxLCBqMikgPT4gZmllbGRzW2oxXS5uYW1lLmxvY2FsZUNvbXBhcmUoZmllbGRzW2oyXS5uYW1lKSlcbiAgICAgICAgLmZvckVhY2goamltdUZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgcG9wb3Zlckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGppbXVGaWVsZE5hbWUsXG4gICAgICAgICAgICBjb250ZW50OiBmaWVsZHNbamltdUZpZWxkTmFtZV0uYWxpYXMgfHwgZmllbGRzW2ppbXVGaWVsZE5hbWVdLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBQb3BvdmVyVHlwZS5GaWVsZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpc0luc2lkZUZ1bmN0aW9uID0gaW5kZXggPiAxICYmIHBhcnRzW2luZGV4IC0gMV0uZXhwID09PSAnKCcgJiYgcGFydHNbaW5kZXggLSAyXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRnVuY3Rpb25cbiAgICAgIGNvbnN0IHVzZVBvcHVsYXRlZERhdGFWaWV3ID0gIWlzSW5zaWRlRnVuY3Rpb25cbiAgICAgIHBvcG92ZXJJdGVtcyA9IGdldERzc1BvcG92ZXJJdGVtcyhcbiAgICAgICAgYWRkQXV0b0FkZGVkRGF0YVZpZXdzKHdpZGdldElkLCB1c2VEYXRhU291cmNlcywgYnJvd3NlclNpemVNb2RlLCB1c2VQb3B1bGF0ZWREYXRhVmlldyksXG4gICAgICAgIHVzZURhdGFTb3VyY2VzXG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHBhcnQudHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLlVua25vd24pIHsgLy8gaXQgbWF5IGJlIGEgZnVuY3Rpb25cbiAgICBnZXRTb3J0ZWRLZXlzKEV4cHJlc3Npb25GdW5jdGlvbnMpXG4gICAgICAuZmlsdGVyKGsgPT4gRXhwcmVzc2lvbkZ1bmN0aW9uc1trXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocGFydC5leHAudG9Mb3dlckNhc2UoKSkgPT09IDApXG4gICAgICAuZm9yRWFjaChrID0+IHtcbiAgICAgICAgcG9wb3Zlckl0ZW1zLnB1c2goe1xuICAgICAgICAgIGlkOiBrLFxuICAgICAgICAgIGNvbnRlbnQ6IEV4cHJlc3Npb25GdW5jdGlvbnNba10sXG4gICAgICAgICAgdHlwZTogUG9wb3ZlclR5cGUuRnVuY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gcG9wb3Zlckl0ZW1zXG59XG5cbmZ1bmN0aW9uIGdldERzc1BvcG92ZXJJdGVtcyAodXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBwcmV2aW91c2VVc2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4pIHtcbiAgY29uc3QgcG9wb3Zlckl0ZW1zID0gW11cbiAgdXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMuYXNNdXRhYmxlKCkuZm9yRWFjaCh1ID0+IHtcbiAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShnZXRSZWFsVXNlRGF0YVNvdXJjZXModSwgcHJldmlvdXNlVXNlRGF0YVNvdXJjZXMpLmRhdGFTb3VyY2VJZClcbiAgICBpZiAoZHMpIHtcbiAgICAgIGxldCBsYWJlbFxuICAgICAgaWYgKCF1LmRhdGFWaWV3SWQgfHwgdS5kYXRhVmlld0lkID09PSBDT05TVEFOVFMuT1VUUFVUX0RBVEFfVklFV19JRCkge1xuICAgICAgICBsYWJlbCA9IGRzLmdldExhYmVsKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1LmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5TRUxFQ1RJT05fREFUQV9WSUVXX0lEKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtkcy5nZXRNYWluRGF0YVNvdXJjZSgpLmdldExhYmVsKCl9IC8gJHtpMThuLmdldEludGwoKS5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzZWxlY3Rpb25EYXRhVmlldycgfSl9YFxuICAgICAgICB9IGVsc2UgaWYgKHUuZGF0YVZpZXdJZCA9PT0gQ09OU1RBTlRTLlJFUEVBVF9DT05URVhUX0RBVEFfVklFV19JRCkge1xuICAgICAgICAgIGxhYmVsID0gYCR7ZHMuZ2V0TWFpbkRhdGFTb3VyY2UoKS5nZXRMYWJlbCgpfSAvICR7aTE4bi5nZXRJbnRsKCkuZm9ybWF0TWVzc2FnZSh7IGlkOiAncG9wdWxhdGVkRGF0YVZpZXcnIH0pfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbCA9IGAke2RzLmdldE1haW5EYXRhU291cmNlKCkuZ2V0TGFiZWwoKX0gLyAke2RzLmdldExhYmVsKCl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwb3BvdmVySXRlbXMucHVzaCh7XG4gICAgICAgIGlkOiB1LmRhdGFTb3VyY2VJZCxcbiAgICAgICAgY29udGVudDogbGFiZWwsXG4gICAgICAgIHR5cGU6IFBvcG92ZXJUeXBlLkRhdGFTb3VyY2VcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuICByZXR1cm4gcG9wb3Zlckl0ZW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3BvdmVyVGFyZ2V0IChleHRlcm5hbElkOiBzdHJpbmcsIGlzSW5FZGl0YWJsZVBhcnQ6IGJvb2xlYW4sIHBhcnRzOiBFeHByZXNzaW9uUGFydFtdKTogc3RyaW5nIHtcbiAgaWYgKCFkb2N1bWVudCB8fCAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXh0ZXJuYWxJZH1gKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgbGV0IHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uID0gZ2V0UHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24oZXh0ZXJuYWxJZClcblxuICB3aGlsZSAocHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24gJiYgcGFydHNbZ2V0SW5kZXhCeVBhcnRJZChleHRlcm5hbElkLCBwcmV2aW91c05vZGVPZlNlbGVjdGlvbi5pZCldICYmXG4gICAgcGFydHNbZ2V0SW5kZXhCeVBhcnRJZChleHRlcm5hbElkLCBwcmV2aW91c05vZGVPZlNlbGVjdGlvbi5pZCldLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5PcGVyYXRvcikge1xuICAgIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uID0gcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24ucHJldmlvdXNFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudFxuICB9XG5cbiAgaWYgKCFpc0luRWRpdGFibGVQYXJ0ICYmIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uKSB7XG4gICAgcmV0dXJuIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uLmlkXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldFBhcnRJZE9mU2VsZWN0aW9uKGV4dGVybmFsSWQpXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgRXhwcmVzc2lvblBhcnQsIEV4cHJlc3Npb25QYXJ0VHlwZSwgRXhwcmVzc2lvbkZ1bmN0aW9ucywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsXG4gIHR5cGUgQnJvd3NlclNpemVNb2RlLCBDT05TVEFOVFMsIGdldEFwcFN0b3JlLCBMYXlvdXRJdGVtVHlwZSwgSW1tdXRhYmxlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEVYUF9QQVJUX1BSRUZJWCwgRVhQX0NPTlRBSU5FUl9QUkVGSVgsIHR5cGUgRWRpdFJlc3VsdCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgc2VhcmNoVXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlQnlQYXJ0SWQgKHBhcnRJZDogc3RyaW5nLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICBpZiAoIXBhcnRJZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7cGFydElkfWApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhcnRJZH1gKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaGV0aGVyTm9kZUlzUGFyZW50T2ZQYXJ0cyAoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgdCA9IGlkLnNwbGl0KCctJylcbiAgcmV0dXJuICEhKHQubGVuZ3RoICYmIHQubGVuZ3RoID09PSAyICYmIHRbMF0gPT09IEVYUF9DT05UQUlORVJfUFJFRklYICYmIC9eXFxkKyQvLnRlc3QodFsxXSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJ0SWRCeUNoaWxkTm9kZSAoZXh0ZXJuYWxJZDogc3RyaW5nLCBub2RlOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gIGlmICghbm9kZSB8fCBnZXRXaGV0aGVyTm9kZUlzUGFyZW50T2ZQYXJ0cyhub2RlLmlkKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgd2hpbGUgKG5vZGUgJiYgIWdldFdoZXRoZXJJc1BhcnRJZChleHRlcm5hbElkLCBub2RlLmlkKSkge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnRcbiAgfVxuICByZXR1cm4gbm9kZSA/IG5vZGUuaWQgOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRLZXlzIChvYmo6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KTogc3RyaW5nW10ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb3J0KChkczEsIGRzMikgPT4gZHMxLmxvY2FsZUNvbXBhcmUoZHMyKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnRJZEJ5SW5kZXggKGV4dGVybmFsSWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmICghaXNOdW1iZXJWYXJpYWJsZShpbmRleCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBgJHtleHRlcm5hbElkfS0ke0VYUF9QQVJUX1BSRUZJWH0tJHtpbmRleH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleEJ5UGFydElkIChleHRlcmFubElkOiBzdHJpbmcsIHBhcnRJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgaWYgKCFwYXJ0SWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHRlbXAgPSBwYXJ0SWQuc3BsaXQoJy0nKVxuICBjb25zdCBpbmRleCA9IGdldFdoZXRoZXJJc1BhcnRJZChleHRlcmFubElkLCBwYXJ0SWQpID8gdGVtcC5sZW5ndGggLSAxIDogLTFcbiAgcmV0dXJuIGluZGV4ID4gLTEgPyBwYXJzZUludCh0ZW1wW2luZGV4XSkgOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmVybmFsSWQgKGV4dGVybmFsSWQ6IHN0cmluZywgaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaWQgfHwgIWV4dGVybmFsSWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBpZC5zcGxpdChgJHtleHRlcm5hbElkfS1gKVsxXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2hldGhlcklzUGFydElkIChleHRlcm5hbElkOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFpZCB8fCAhZXh0ZXJuYWxJZCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGludGVybmFsSWQgPSBnZXRJbmVybmFsSWQoZXh0ZXJuYWxJZCwgaWQpXG4gIHJldHVybiAhIShpbnRlcm5hbElkICYmIGludGVybmFsSWQuc3BsaXQoJy0nKS5sZW5ndGggPT09IEVYUF9QQVJUX1BSRUZJWC5zcGxpdCgnLScpLmxlbmd0aCArIDEgJiYgaWQuaW5kZXhPZihFWFBfUEFSVF9QUkVGSVgpID09PSBleHRlcm5hbElkLmxlbmd0aCArIDEgJiYgL1xcZCQvLnRlc3QoaWQpKVxufVxuXG4vKipcbiAqIHVubWVyZ2VhYmxlIHBhcnQ6IHN0cmluZywgZmllbGQgYW5kIG9wZXJhdG9yXG4gKlxuICogbWVyZ2VhYmxlIHBhcnQgbWVhbnMgdGhhdCBpZiBhIGNoYXJhY3RlciBhZGRlZCB0byB0aGUgc3RhcnQgb3IgdGhlIGVuZCBvZiB0aGUgcGFydCwgdGhlIGNoYXJhY3RlciBjYW4gYmUgbWVyZ2VkIHRvIHRoZSBwYXJ0LFxuICogZS5nLiwgMTIzIC0+IDEyM0EgKG9uZSBudW1iZXIgcGFydCAtPiBvbmUgdW5rb3duIHBhcnQpXG4gKiB1bm1lcmdlYWJsZSBwYXJ0IG1lYW5zIHRoYXQgaWYgYSBjaGFyYWN0ZXIgYWRkZWQgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIHBhcnQsIHRoZSBjaGFyYWN0ZXIgY2FuIG5vdCBiZSBtZXJnZWQgdG8gdGhlIHBhcnQsXG4gKiBlLmcuLCBcIjEyM1wiIC0+IFwiMTIzXCJBIChvbmUgc3RyaW5nIHBhcnQgLT4gb25lIHN0cmluZyBwYXJ0IGFuZCBvbmUgdW5rbm93biBwYXJ0KVxuICpcbiAqIHVubWVyZ2VhYmxlIHBhcnQgc2hvdWxkIGhhdmUgYSBzcGVjYWlsIGNoYXJhY3RlciBvciBzdGFibGUgcGF0dGVybiwgdG8gbWFyayB0aGUgc3RhcnQgb2YgdGhlIHBhcnQgYW5kIHRoZSBlbmQgb2YgdGhlIHBhcnQsXG4gKiBlLmcuLCBzdHJpbmcgcGFydCBpcyB1c2luZyBcIiBhbmQgZmllbGQgcGFydCBpcyB1c2luZyB7fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJ0VW5tZXJnZWFibGUgKHBhcnQ6IEV4cHJlc3Npb25QYXJ0KTogYm9vbGVhbiB7XG4gIGlmICghcGFydCkge1xuICAgIHJldHVybiB0cnVlIC8vIG51bGwgaXMgdW5tZXJnZWFibGVcbiAgfVxuXG4gIGlmICghcGFydC50eXBlKSB7XG4gICAgY29uc29sZS53YXJuKCdQYXJ0IGhhcyBubyB0eXBlOiAnLCBwYXJ0KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhcnQudHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZyB8fCBwYXJ0LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GaWVsZCB8fCBwYXJ0LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5PcGVyYXRvclxufVxuXG4vKipcbiAqIHVubWVyZ2VhYmxlIGNoYXJhY3Rlcjogb3BlcmF0b3IsIFwiLCB7XG4gKlxuICogbWVyZ2VhYmxlIGNoYXJhY3RlciBtZWFucyB0aGF0IGlmIHRoZSBjaGFyYWN0ZXIgYWRkZWQgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2Ygb25lIHBhcnQsIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIG1lcmdlZCB0byB0aGUgcGFydCxcbiAqIGUuZy4sIDEyMyAtPiAxMjNBIChvbmUgbnVtYmVyIHBhcnQgLT4gb25lIHVua293biBwYXJ0KVxuICogdW5tZXJnZWFibGUgY2hhcmFjdGVyIG1lYW5zIHRoYXQgaWYgdGhlIGNoYXJhY3RlciBhZGRlZCB0byB0aGUgc3RhcnQgb3IgdGhlIGVuZCBvZiBvbmUgcGFydCwgdGhlIGNoYXJhY3RlciBjYW4gbm90IGJlIG1lcmdlZCB0byB0aGUgcGFydCxcbiAqIGUuZy4sIDEyMyAtPiAxMjMrIChvbmUgbnVtYmVyIHBhcnQgLT4gb25lIG51bWJlciBwYXJ0IGFuZCBvbmUgb3BlcmF0b3IgcGFydClcbiAqIGUuZy4sIDEyMyAtPiBcIjEyMyAoZWRpdG9yIHdpbGwgYXV0b21hdGljYWxseSBjb21wbGV0ZSB0aGUgcXVvdGF0aW9uIG1hcmtzKSAtPiBcIlwiMTIzIChvbmUgbnVtYmVyIHBhcnQgLT4gb25lIHN0cmluZyBwYXJ0IGFuZCBvbmUgbnVtYmVyIHBhcnQpXG4gKiBlLmcuLCAxMjMgLT4gMTIze30gKGVkaXRvciB3aWxsIGF1dG9tYXRpY2FsbHkgY29tcGxldGUgdGhlICBjdXJseSBicmFjZXMpIC0+IDEyM3t9IChvbmUgbnVtYmVyIHBhcnQgLT4gb25lIG51bWJlciBwYXJ0IGFuZCBvbmUgZmllbGQgcGFydClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyVW5tZXJnZWFibGUgKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIWNoYXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBpc09wZXJhdG9yKGNoYXIpIHx8IGlzQ2hhckRvdWJsZVF1b3RhdGlvbk1hcmtlcihjaGFyKSB8fCBpc0NoYXJGcm9udEN1cmx5QnJhY2tldChjaGFyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXJWYXJpYWJsZSAobjogYW55KTogYm9vbGVhbiB7XG4gIGlmIChpc05hTihuKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobikgPT09ICdbb2JqZWN0IE51bWJlcl0nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdDaGFyYWN0ZXJGcm9tRXhwcmVzc2lvblN0cmluZyAocHJldmlvdXNFeHByZXNzaW9uU3RyaW5nOiBzdHJpbmcsIGV4cHJlc3Npb25TdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHByZSA9IHByZXZpb3VzRXhwcmVzc2lvblN0cmluZy5zcGxpdCgnJylcbiAgY29uc3QgY3VyID0gZXhwcmVzc2lvblN0cmluZy5zcGxpdCgnJylcbiAgcmV0dXJuIGN1ci5maW5kKChjLCBpKSA9PiBjICE9PSBwcmVbaV0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VySW5wdXRFdmVudCAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZSA9IG5ldyBFdmVudCgnaW5wdXQnLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlXG4gIH0pXG5cbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoYXJEb3VibGVRdW90YXRpb25NYXJrZXIgKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoY2hhciAmJiBjaGFyID09PSAnXCInKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFyRnJvbnRDdXJseUJyYWNrZXQgKGNoYXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoY2hhciAmJiBjaGFyID09PSAneycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoYXJQb3N0Q3VybHlCcmFja2V0IChjaGFyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhKGNoYXIgJiYgY2hhciA9PT0gJ30nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaWVsZCAoZXhwOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eXFx7KC4qPylcXH0kLy50ZXN0KGV4cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24gKGV4cDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghZXhwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoRXhwcmVzc2lvbkZ1bmN0aW9ucykuc29tZShrID0+IEV4cHJlc3Npb25GdW5jdGlvbnNba10gPT09IGV4cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nIChleHA6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIWV4cCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIC9eXFxcIiguKj8pXFxcIiQvLnRlc3QoZXhwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKGV4cDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghZXhwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIC9eXFxkKlxcLj9cXGQrKFxcZHxcXHMpKiQvLnRlc3QoZXhwKSB8fCAvXlxcZCtcXC4/XFxkKihcXGR8XFxzKSokLy50ZXN0KGV4cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3BlcmF0b3IgKGV4cDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghZXhwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIC9eW1xcK1xcLVxcKlxcL1xcLFxcKFxcKVxccytdJC8udGVzdChleHApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKaW11RmllbGROYW1lRnJvbUFsaWFzIChkYXRhU291cmNlSWQ6IHN0cmluZywgYWxpYXM6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghZGF0YVNvdXJjZUlkIHx8ICFhbGlhcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgZHNNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBjb25zdCBkcyA9IGRzTWFuYWdlci5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZClcbiAgY29uc3Qgc2NoZW1hID0gZHMgJiYgZHMuZ2V0U2NoZW1hICYmIGRzLmdldFNjaGVtYSgpXG4gIGNvbnN0IGZpZWxkcyA9IHNjaGVtYSAmJiBzY2hlbWEuZmllbGRzXG4gIGlmICghZmllbGRzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzKS5zb3J0KChqMSwgajIpID0+IGoxLmxvY2FsZUNvbXBhcmUoajIpKS5maW5kKGppbXVGaWVsZE5hbWUgPT4ge1xuICAgICAgY29uc3QgYSA9IGZpZWxkc1tqaW11RmllbGROYW1lXS5hbGlhcyB8fCBmaWVsZHNbamltdUZpZWxkTmFtZV0ubmFtZVxuICAgICAgcmV0dXJuIGEgPT09IGFsaWFzXG4gICAgfSkgfHwgbnVsbFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVGdW5jdGlvblBhcnRzIChwYXJ0czogRXhwcmVzc2lvblBhcnRbXSk6IGJvb2xlYW4ge1xuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBzdGFydFdpdGhGdW5jdGlvblBhcnQ6IGJvb2xlYW4gPSBwYXJ0c1swXSAmJiBwYXJ0c1swXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRnVuY3Rpb25cbiAgY29uc3QgcGFyZW50aGVzZXNBZnRlckZ1bmN0aW9uTmFtZTogYm9vbGVhbiA9IHBhcnRzWzFdICYmIHBhcnRzWzFdLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5PcGVyYXRvciAmJiBwYXJ0c1sxXS5leHAgPT09ICcoJ1xuICBjb25zdCBlbmRXaXRoUGFyZW50aGVzZXNPcGVyYXRvclBhcnQ6IGJvb2xlYW4gPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSAmJiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuT3BlcmF0b3IgJiYgcGFydHNbcGFydHMubGVuZ3RoIC0gMV0uZXhwID09PSAnKSdcblxuICByZXR1cm4gc3RhcnRXaXRoRnVuY3Rpb25QYXJ0ICYmIHBhcmVudGhlc2VzQWZ0ZXJGdW5jdGlvbk5hbWUgJiYgZW5kV2l0aFBhcmVudGhlc2VzT3BlcmF0b3JQYXJ0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRlZFBhcnRJbmRleGVzIChlZGl0UmVzdWx0OiBFZGl0UmVzdWx0KTogbnVtYmVyW10ge1xuICBpZiAoIWVkaXRSZXN1bHQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhlZGl0UmVzdWx0KS5maWx0ZXIoaW5kZXggPT4gZWRpdFJlc3VsdFtpbmRleF0gJiYgZWRpdFJlc3VsdFtpbmRleF0ucGFydCAmJiAhZWRpdFJlc3VsdFtpbmRleF0uaXNSZXBsYWNpbmcpXG4gICAgLm1hcChpbmRleCA9PiBwYXJzZUludChpbmRleCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZW1vdmVkUGFydEluZGV4ZXMgKGVkaXRSZXN1bHQ6IEVkaXRSZXN1bHQpOiBudW1iZXJbXSB7XG4gIGlmICghZWRpdFJlc3VsdCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGVkaXRSZXN1bHQpLmZpbHRlcihpbmRleCA9PiBlZGl0UmVzdWx0W2luZGV4XSAmJiAhZWRpdFJlc3VsdFtpbmRleF0ucGFydCAmJiBlZGl0UmVzdWx0W2luZGV4XS5pc1JlcGxhY2luZylcbiAgICAubWFwKGluZGV4ID0+IHBhcnNlSW50KGluZGV4KSlcbn1cblxuLy8gVE9ETzogdXNlIG1vZHVsZSBsb2FkZXIgYW5kIHJlbW92ZSB0aGlzIGZ1bmN0aW9uIHRvIGRhdGEgc291cmNlIHNlbGVjdG9yXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0b0FkZGVkRGF0YVZpZXdzICh3aWRnZXRJZDogc3RyaW5nLCBhbGxVc2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sXG4gIGJyb3dzZXJTaXplTW9kZTogQnJvd3NlclNpemVNb2RlLCB1c2VQb3B1bGF0ZWREYXRhVmlldzogYm9vbGVhbik6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcbiAgY29uc3QgZ3JvdXBlZFVzZURzcyA9IGdyb3VwVXNlRGF0YVNvdXJjZXNCeU1haW5Ecyh3aWRnZXRJZCwgYWxsVXNlRGF0YVNvdXJjZXMsIGJyb3dzZXJTaXplTW9kZSlcblxuICBPYmplY3Qua2V5cyhncm91cGVkVXNlRHNzKS5mb3JFYWNoKG1haW5EYXRhU291cmNlSWQgPT4ge1xuICAgIC8vIGFkZCBhdXRvIGFkZGVkIGRhdGEgdmlld3NcbiAgICBncm91cGVkVXNlRHNzW21haW5EYXRhU291cmNlSWRdID0gZ3JvdXBlZFVzZURzc1ttYWluRGF0YVNvdXJjZUlkXT8uY29uY2F0KFxuICAgICAgZ2V0QXV0b0FkZGVkRGF0YVZpZXdzKHdpZGdldElkLCBncm91cGVkVXNlRHNzW21haW5EYXRhU291cmNlSWRdLCBhbGxVc2VEYXRhU291cmNlcywgYnJvd3NlclNpemVNb2RlLCB1c2VQb3B1bGF0ZWREYXRhVmlldylcbiAgICApXG4gIH0pXG5cbiAgbGV0IG5ld1VzZWRzcyA9IEltbXV0YWJsZShbXSlcbiAgT2JqZWN0LnZhbHVlcyhncm91cGVkVXNlRHNzKS5mb3JFYWNoKHVzZURzcyA9PiB7XG4gICAgbmV3VXNlZHNzID0gbmV3VXNlZHNzLmNvbmNhdCh1c2VEc3MpXG4gIH0pXG5cbiAgcmV0dXJuIG5ld1VzZWRzc1xufVxuXG5mdW5jdGlvbiBncm91cFVzZURhdGFTb3VyY2VzQnlNYWluRHMgKHdpZGdldElkOiBzdHJpbmcsIGFsbFVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgYnJvd3NlclNpemVNb2RlOiBCcm93c2VyU2l6ZU1vZGUpOiB7IFttYWluRHNJZDogc3RyaW5nXTogSU1Vc2VEYXRhU291cmNlW10gfSB7XG4gIGlmICghYnJvd3NlclNpemVNb2RlIHx8ICFhbGxVc2VEYXRhU291cmNlcyB8fCBhbGxVc2VEYXRhU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IGdyb3VwZWRVc2VEc3M6IHsgW21haW5Ec0lkOiBzdHJpbmddOiBJTVVzZURhdGFTb3VyY2VbXSB9ID0ge31cbiAgYWxsVXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1ID0+IHtcbiAgICBpZiAoIWdyb3VwZWRVc2VEc3NbdS5tYWluRGF0YVNvdXJjZUlkXSkge1xuICAgICAgZ3JvdXBlZFVzZURzc1t1Lm1haW5EYXRhU291cmNlSWRdID0gW11cbiAgICB9XG4gICAgaWYgKCFncm91cGVkVXNlRHNzW3UubWFpbkRhdGFTb3VyY2VJZF0uc29tZSh2ID0+IHYuZGF0YVNvdXJjZUlkID09PSB1LmRhdGFTb3VyY2VJZCkpIHtcbiAgICAgIGdyb3VwZWRVc2VEc3NbdS5tYWluRGF0YVNvdXJjZUlkXSA9IGdyb3VwZWRVc2VEc3NbdS5tYWluRGF0YVNvdXJjZUlkXS5jb25jYXQodSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRVc2VEc3Ncbn1cblxuZnVuY3Rpb24gZ2V0QXV0b0FkZGVkRGF0YVZpZXdzICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlc1dpdGhTYW1lTWFpbkRzOiBJTVVzZURhdGFTb3VyY2VbXSwgYWxsVXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LFxuICBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZSwgdXNlUG9wdWxhdGVkRGF0YVZpZXc6IGJvb2xlYW4pOiBJTVVzZURhdGFTb3VyY2VbXSB7XG4gIGlmICghdXNlRGF0YVNvdXJjZXNXaXRoU2FtZU1haW5EcyB8fCB1c2VEYXRhU291cmNlc1dpdGhTYW1lTWFpbkRzLmxlbmd0aCA9PT0gMCB8fCAhYnJvd3NlclNpemVNb2RlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBsZXQgZGVmYXVsdERhdGFWaWV3cyA9IFtdXG5cbiAgaWYgKCF1c2VEYXRhU291cmNlc1dpdGhTYW1lTWFpbkRzLnNvbWUodSA9PiB1LmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5TRUxFQ1RJT05fREFUQV9WSUVXX0lEKSkgeyAvLyBJZiB1c2luZyBzZWxlY3Rpb24gZGF0YSB2aWV3LCBkbyBub3QgZHVwbGljYXRlIGl0LlxuICAgIGNvbnN0IHNlbGVjdGlvblZpZXc6IElNVXNlRGF0YVNvdXJjZSA9IHVzZURhdGFTb3VyY2VzV2l0aFNhbWVNYWluRHNbMF1cbiAgICAgIC5zZXQoJ2RhdGFTb3VyY2VJZCcsIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVZpZXdEYXRhU291cmNlSWQodXNlRGF0YVNvdXJjZXNXaXRoU2FtZU1haW5Ec1swXS5tYWluRGF0YVNvdXJjZUlkLCBDT05TVEFOVFMuU0VMRUNUSU9OX0RBVEFfVklFV19JRCkpXG4gICAgICAuc2V0KCdkYXRhVmlld0lkJywgQ09OU1RBTlRTLlNFTEVDVElPTl9EQVRBX1ZJRVdfSUQpXG4gICAgZGVmYXVsdERhdGFWaWV3cyA9IGRlZmF1bHREYXRhVmlld3MuY29uY2F0KHNlbGVjdGlvblZpZXcpXG4gIH1cblxuICBpZiAodXNlUG9wdWxhdGVkRGF0YVZpZXcgJiYgZ2V0V2hldGhlclVzZVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQod2lkZ2V0SWQsIHVzZURhdGFTb3VyY2VzV2l0aFNhbWVNYWluRHMsIGFsbFVzZURhdGFTb3VyY2VzLCBicm93c2VyU2l6ZU1vZGUpKSB7XG4gICAgY29uc3QgcmVwZWF0Q29udGV4dFZpZXc6IElNVXNlRGF0YVNvdXJjZSA9IHVzZURhdGFTb3VyY2VzV2l0aFNhbWVNYWluRHNbMF1cbiAgICAgIC5zZXQoJ2RhdGFTb3VyY2VJZCcsIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVZpZXdEYXRhU291cmNlSWQodXNlRGF0YVNvdXJjZXNXaXRoU2FtZU1haW5Ec1swXS5tYWluRGF0YVNvdXJjZUlkLCBDT05TVEFOVFMuUkVQRUFUX0NPTlRFWFRfREFUQV9WSUVXX0lEKSlcbiAgICAgIC5zZXQoJ2RhdGFWaWV3SWQnLCBDT05TVEFOVFMuUkVQRUFUX0NPTlRFWFRfREFUQV9WSUVXX0lEKVxuICAgIGRlZmF1bHREYXRhVmlld3MgPSBkZWZhdWx0RGF0YVZpZXdzLmNvbmNhdChyZXBlYXRDb250ZXh0VmlldylcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0RGF0YVZpZXdzXG59XG5cbmZ1bmN0aW9uIGdldFdoZXRoZXJVc2VSZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0ICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlc1dpdGhTYW1lTWFpbkRzOiBJTVVzZURhdGFTb3VyY2VbXSwgYWxsVXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LFxuICBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZSk6IGJvb2xlYW4ge1xuICBjb25zdCBjb25maWcgPSB3aW5kb3c/LmppbXVDb25maWc/LmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXG4gIGlmICghY29uZmlnIHx8ICF3aWRnZXRJZCB8fCAhdXNlRGF0YVNvdXJjZXNXaXRoU2FtZU1haW5EcyB8fCB1c2VEYXRhU291cmNlc1dpdGhTYW1lTWFpbkRzLmxlbmd0aCA9PT0gMCB8fCAhYWxsVXNlRGF0YVNvdXJjZXMgfHwgIWJyb3dzZXJTaXplTW9kZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHBhcmVudFdpZGdldElkID0gc2VhcmNoVXRpbHMuZ2V0UGFyZW50V2lkZ2V0SWRPZkNvbnRlbnQoY29uZmlnLCB3aWRnZXRJZCwgTGF5b3V0SXRlbVR5cGUuV2lkZ2V0LCBicm93c2VyU2l6ZU1vZGUpXG4gIGNvbnN0IHBhcmVudFdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1twYXJlbnRXaWRnZXRJZF1cbiAgY29uc3QgaXNJblJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQgPSBwYXJlbnRXaWRnZXRKc29uICYmIHBhcmVudFdpZGdldEpzb24ubWFuaWZlc3QucHJvcGVydGllcz8uY2FuUHJvdmlkZVJlcGVhdERhdGFTb3VyY2VcblxuICBsZXQgaGF2ZVNhbWVVc2VEYXRhU291cmNlcyA9IGZhbHNlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXNXaXRoU2FtZU1haW5Ecy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJlYWxVc2VEYXRhU291cmNlID0gZ2V0UmVhbFVzZURhdGFTb3VyY2VzKHVzZURhdGFTb3VyY2VzV2l0aFNhbWVNYWluRHNbaV0sIGFsbFVzZURhdGFTb3VyY2VzKVxuICAgIGhhdmVTYW1lVXNlRGF0YVNvdXJjZXMgPSBwYXJlbnRXaWRnZXRKc29uPy51c2VEYXRhU291cmNlcyAmJiBwYXJlbnRXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzXG4gICAgICAuc29tZShwYXJlbnRVID0+IHJlYWxVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWQgPT09IHBhcmVudFUuZGF0YVNvdXJjZUlkKVxuXG4gICAgaWYgKGhhdmVTYW1lVXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBpc0luUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCAmJiBoYXZlU2FtZVVzZURhdGFTb3VyY2VzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFsVXNlRGF0YVNvdXJjZXMgKHRlbXBTZWxlY3RVc2VEczogSU1Vc2VEYXRhU291cmNlLCBhbGxVc2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4pOiBJTVVzZURhdGFTb3VyY2Uge1xuICBpZiAoIXRlbXBTZWxlY3RVc2VEcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodGVtcFNlbGVjdFVzZURzLmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5SRVBFQVRfQ09OVEVYVF9EQVRBX1ZJRVdfSUQpIHtcbiAgICBjb25zdCB1c2VEc0hhc1NhbWVNYWluRHNBc1NlbGVjdGVkVXNlRHMgPSBhbGxVc2VEYXRhU291cmNlcy5maW5kKHUgPT4gdS5tYWluRGF0YVNvdXJjZUlkID09PSB0ZW1wU2VsZWN0VXNlRHMubWFpbkRhdGFTb3VyY2VJZClcbiAgICByZXR1cm4gdXNlRHNIYXNTYW1lTWFpbkRzQXNTZWxlY3RlZFVzZURzICYmIEltbXV0YWJsZSh1c2VEc0hhc1NhbWVNYWluRHNBc1NlbGVjdGVkVXNlRHMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRlbXBTZWxlY3RVc2VEc1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhc2ljLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3Rpb24tdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL2FkZC1yZW1vdmUtdXRpbHMnXG4iLCJpbXBvcnQgeyB0eXBlIEV4cHJlc3Npb25QYXJ0LCBFeHByZXNzaW9uUGFydFR5cGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBnZXROb2RlQnlQYXJ0SWQsIGdldFBhcnRJZEJ5Q2hpbGROb2RlLCBnZXRXaGV0aGVySXNQYXJ0SWQsIGdldFBhcnRJZEJ5SW5kZXgsIGdldEluZGV4QnlQYXJ0SWQsIGlzTnVtYmVyVmFyaWFibGUsIGdldEFkZGVkUGFydEluZGV4ZXMsIGdldFJlbW92ZWRQYXJ0SW5kZXhlcyB9IGZyb20gJy4vYmFzaWMtdXRpbHMnXG5pbXBvcnQgeyB0eXBlIElubmVyRXhwU2VsZWN0aW9uLCBFeHBTZWxlY3Rpb25UeXBlLCB0eXBlIEV4cFNlbGVjdGlvbiwgdHlwZSBFZGl0UmVzdWx0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaGV0aGVyTm9kZUFmdGVyUmFuZ2UgKHJhbmdlOiBSYW5nZSwgbm9kZTogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgaWYgKCFyYW5nZSB8fCAhcmFuZ2UuY29sbGFwc2VkIHx8ICFub2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG5vZGVSYW5nZTogUmFuZ2VcbiAgY29uc3QgcjogUmFuZ2UgPSByYW5nZVxuICBpZiAoci5jb21wYXJlQm91bmRhcnlQb2ludHMgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICBub2RlUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgbm9kZVJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKVxuICAgIG5vZGVSYW5nZS5jb2xsYXBzZSh0cnVlKVxuICAgIHJldHVybiByLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhyLlNUQVJUX1RPX0VORCwgbm9kZVJhbmdlKSA8IDFcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdoZXRoZXJOb2RlQmVmb3JlUmFuZ2UgKHJhbmdlOiBSYW5nZSwgbm9kZTogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgaWYgKCFyYW5nZSB8fCAhcmFuZ2UuY29sbGFwc2VkIHx8ICFub2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG5vZGVSYW5nZTogUmFuZ2VcbiAgY29uc3QgcjogUmFuZ2UgPSByYW5nZVxuICBpZiAoci5jb21wYXJlQm91bmRhcnlQb2ludHMgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICBub2RlUmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgbm9kZVJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKVxuICAgIG5vZGVSYW5nZS5jb2xsYXBzZShmYWxzZSlcbiAgICByZXR1cm4gci5jb21wYXJlQm91bmRhcnlQb2ludHMoci5TVEFSVF9UT19FTkQsIG5vZGVSYW5nZSkgPiAtMVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZVNlbGVjdGlvbkJ5UGFydCAocGFydElkOiBzdHJpbmcsIHRvU3RhcnQ6IGJvb2xlYW4sIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3Qgbm9kZSA9IGdldE5vZGVCeVBhcnRJZChwYXJ0SWQsIGNvbnRhaW5lcilcblxuICBpZiAoIW5vZGUpIHtcbiAgICBjb250YWluZXIgJiYgY29udGFpbmVyLmZvY3VzKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7IC8vIFRPRE86IG90aGVyIGJyb3dzZXJzXG4gICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICBpZiAobm9kZSkge1xuICAgICAgci5zZWxlY3ROb2RlKG5vZGUpXG4gICAgICByLmNvbGxhcHNlKHRvU3RhcnQpXG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZVNlbGVjdGlvbkJ5Q2hhcmFjdGVyIChwYXJ0SWQ6IHN0cmluZywgc3RhcnRPZmZzZXQ6IG51bWJlciwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBjb25zdCBub2RlID0gZ2V0Tm9kZUJ5UGFydElkKHBhcnRJZCwgY29udGFpbmVyKVxuXG4gIGlmICghbm9kZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHN0YXJ0T2Zmc2V0ID49IDAgJiYgd2luZG93LmdldFNlbGVjdGlvbikge1xuICAgIGNvbnN0IHJhbmdlID0gY3JlYXRlUmFuZ2Uobm9kZSwgeyBjb3VudDogc3RhcnRPZmZzZXQgfSlcblxuICAgIGlmIChyYW5nZSkge1xuICAgICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpXG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlIChub2RlOiBOb2RlLCBjaGFyczogeyBjb3VudDogbnVtYmVyIH0sIHJhbmdlPzogUmFuZ2UpOiBSYW5nZSB7XG4gIGlmICghZG9jdW1lbnQgfHwgIWRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAoIXJhbmdlKSB7XG4gICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpXG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgMClcbiAgfVxuXG4gIGlmIChjaGFycy5jb3VudCA9PT0gMCkge1xuICAgIHJhbmdlLnNldEVuZChub2RlLCBjaGFycy5jb3VudClcbiAgfSBlbHNlIGlmIChub2RlICYmIGNoYXJzLmNvdW50ID4gMCkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgaWYgKG5vZGUudGV4dENvbnRlbnQubGVuZ3RoIDwgY2hhcnMuY291bnQpIHtcbiAgICAgICAgY2hhcnMuY291bnQgLT0gbm9kZS50ZXh0Q29udGVudC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlLnNldEVuZChub2RlLCBjaGFycy5jb3VudClcbiAgICAgICAgY2hhcnMuY291bnQgPSAwXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGxwID0gMDsgbHAgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBscCsrKSB7XG4gICAgICAgIHJhbmdlID0gY3JlYXRlUmFuZ2Uobm9kZS5jaGlsZE5vZGVzW2xwXSwgY2hhcnMsIHJhbmdlKVxuXG4gICAgICAgIGlmIChjaGFycy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZ2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGlvblJhbmdlICgpOiBSYW5nZSB7XG4gIGxldCByYW5nZSA9IG51bGxcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24gJiYgd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQpIHsgLy8gVE9ETzogb3RoZXIgYnJvd3NlcnNcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgPiAwKSB7XG4gICAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXG4gICAgfVxuICB9XG4gIHJldHVybiByYW5nZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uUG9zSW5uZXJQYXJ0IChleHRlcm5hbElkOiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBJbm5lckV4cFNlbGVjdGlvbiB7XG4gIGNvbnN0IHJhbmdlOiBSYW5nZSA9IGdldFNlbGVjdGlvblJhbmdlKClcbiAgaWYgKCFyYW5nZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsZXQgaW5uZXJTZWxlY3Rpb246IElubmVyRXhwU2VsZWN0aW9uID0gbnVsbFxuICBjb25zdCBzdGFydENvbnRhaW5lciA9IChyYW5nZS5zdGFydENvbnRhaW5lci5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyByYW5nZS5zdGFydENvbnRhaW5lci5wYXJlbnRFbGVtZW50IDogcmFuZ2Uuc3RhcnRDb250YWluZXIpIGFzIEhUTUxFbGVtZW50XG4gIGNvbnN0IGVuZENvbnRhaW5lciA9IChyYW5nZS5lbmRDb250YWluZXIubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFID8gcmFuZ2UuZW5kQ29udGFpbmVyLnBhcmVudEVsZW1lbnQgOiByYW5nZS5lbmRDb250YWluZXIpIGFzIEhUTUxFbGVtZW50XG4gIGNvbnN0IGlzU2VsZWN0aW9uSW5QYXJ0ID0gc3RhcnRDb250YWluZXIgPT09IGVuZENvbnRhaW5lciAmJiBzdGFydENvbnRhaW5lciAmJiBnZXRXaGV0aGVySXNQYXJ0SWQoZXh0ZXJuYWxJZCwgc3RhcnRDb250YWluZXIuaWQpXG4gIGNvbnN0IHBhcnROb2RlID0gaXNTZWxlY3Rpb25JblBhcnQgPyBzdGFydENvbnRhaW5lciA6IG51bGxcbiAgY29uc3QgcGFydElkID0gaXNTZWxlY3Rpb25JblBhcnQgPyBzdGFydENvbnRhaW5lci5pZCA6IG51bGxcblxuICBpZiAocGFydE5vZGUgJiYgcGFydElkKSB7XG4gICAgaW5uZXJTZWxlY3Rpb24gPSB7XG4gICAgICBwYXJ0SWQ6IHBhcnRJZCxcbiAgICAgIHN0YXJ0T2Zmc2V0OiByYW5nZS5zdGFydE9mZnNldCxcbiAgICAgIGVuZE9mZnNldDogcmFuZ2UuZW5kT2Zmc2V0LFxuICAgICAgY29udGVudExlbmd0aDogcGFydE5vZGUudGV4dENvbnRlbnQubGVuZ3RoIHx8IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5uZXJTZWxlY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnRJZE9mU2VsZWN0aW9uIChleHRlcm5hbElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCByYW5nZTogUmFuZ2UgPSBnZXRTZWxlY3Rpb25SYW5nZSgpXG5cbiAgaWYgKHJhbmdlICYmIHJhbmdlLmNvbGxhcHNlZCkge1xuICAgIGlmIChyYW5nZS5zdGFydENvbnRhaW5lcikge1xuICAgICAgY29uc3Qgbm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyIGFzIEhUTUxFbGVtZW50XG4gICAgICByZXR1cm4gZ2V0UGFydElkQnlDaGlsZE5vZGUoZXh0ZXJuYWxJZCwgbm9kZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24gKGV4dGVybmFsSWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHsgLy8gZ2V0IHByZXZpb3VzIGV4cHJlc3Npb24gbm9kZSBvZiBzZWxlY3Rpb25cbiAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V4dGVybmFsSWR9YClcbiAgY29uc3QgcmFuZ2U6IFJhbmdlID0gZ2V0U2VsZWN0aW9uUmFuZ2UoKVxuICBsZXQgbm9kZTogSFRNTEVsZW1lbnRcbiAgbGV0IHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uOiBIVE1MRWxlbWVudFxuXG4gIGlmIChwYXJlbnROb2RlICYmIHJhbmdlKSB7XG4gICAgbm9kZSA9IHBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudFxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAoZ2V0V2hldGhlck5vZGVCZWZvcmVSYW5nZShyYW5nZSwgbm9kZSkgJiYgZ2V0V2hldGhlcklzUGFydElkKGV4dGVybmFsSWQsIG5vZGUuaWQpKSB7XG4gICAgICAgIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uID0gbm9kZVxuICAgICAgICBicmVha1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyBhcyBIVE1MRWxlbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c05vZGVPZlNlbGVjdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE5vZGVPZlNlbGVjdGlvbiAoZXh0ZXJuYWxJZDogc3RyaW5nKTogSFRNTEVsZW1lbnQgeyAvLyBnZXQgbmV4dCBleHByZXNzaW9uIG5vZGUgb2Ygc2VsZWN0aW9uXG4gIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtleHRlcm5hbElkfWApXG4gIGNvbnN0IHJhbmdlOiBSYW5nZSA9IGdldFNlbGVjdGlvblJhbmdlKClcbiAgbGV0IG5vZGU6IEhUTUxFbGVtZW50XG4gIGxldCBuZXh0Tm9kZU9mU2VsZWN0aW9uOiBIVE1MRWxlbWVudFxuXG4gIGlmIChwYXJlbnROb2RlICYmIHJhbmdlKSB7XG4gICAgbm9kZSA9IHBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnRcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGdldFdoZXRoZXJOb2RlQWZ0ZXJSYW5nZShyYW5nZSwgbm9kZSkgJiYgZ2V0V2hldGhlcklzUGFydElkKGV4dGVybmFsSWQsIG5vZGUuaWQpKSB7XG4gICAgICAgIG5leHROb2RlT2ZTZWxlY3Rpb24gPSBub2RlXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTEVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dE5vZGVPZlNlbGVjdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2libGluZ09mRXhwU2VsZWN0aW9uIChleHRlcm5hbElkOiBzdHJpbmcsIHBhcnRJZDogc3RyaW5nLCB1c2VOZXh0U2libGluZzogYm9vbGVhbiwgaXNSZW1vdmluZzogYm9vbGVhbiwgcGFydHM6IEV4cHJlc3Npb25QYXJ0W10pOiBFeHBTZWxlY3Rpb24ge1xuICBjb25zdCBwYXJ0Tm9kZSA9IGdldE5vZGVCeVBhcnRJZChwYXJ0SWQsIGRvY3VtZW50ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V4dGVybmFsSWR9YCkpXG4gIGxldCBleHBTaWJsaW5nSWQ6IHN0cmluZyA9IG51bGxcbiAgbGV0IGV4cFNlbGVjdGlvbjogRXhwU2VsZWN0aW9uID0gbnVsbFxuXG4gIGlmICghcGFydE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKCF1c2VOZXh0U2libGluZyAmJiBwYXJ0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZ2V0V2hldGhlcklzUGFydElkKGV4dGVybmFsSWQsIHBhcnROb2RlLm5leHRFbGVtZW50U2libGluZy5pZCkpIHtcbiAgICBleHBTaWJsaW5nSWQgPSBwYXJ0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuaWRcbiAgfSBlbHNlIGlmICh1c2VOZXh0U2libGluZyAmJiBwYXJ0Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIGdldFdoZXRoZXJJc1BhcnRJZChleHRlcm5hbElkLCBwYXJ0Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkKSkge1xuICAgIGV4cFNpYmxpbmdJZCA9IHBhcnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWRcbiAgfVxuXG4gIGlmIChleHBTaWJsaW5nSWQpIHtcbiAgICBleHBTZWxlY3Rpb24gPSB7XG4gICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICBwYXJ0SWQ6IGV4cFNpYmxpbmdJZCxcbiAgICAgIHN0YXJ0T2Zmc2V0OiAhdXNlTmV4dFNpYmxpbmcgPyAwIDogZ2V0Tm9kZUJ5UGFydElkKGV4cFNpYmxpbmdJZCwgZG9jdW1lbnQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXh0ZXJuYWxJZH1gKSkudGV4dENvbnRlbnQubGVuZ3RoXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgIHBhcnRJZDogdXNlTmV4dFNpYmxpbmcgPyBnZXRQYXJ0SWRCeUluZGV4KGV4dGVybmFsSWQsIDApIDogZ2V0UGFydElkQnlJbmRleChleHRlcm5hbElkLCBwYXJ0cyAmJiBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMubGVuZ3RoIC0gMSA6IDApLFxuICAgICAgdG9TdGFydDogdXNlTmV4dFNpYmxpbmcsXG4gICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLlBhcnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXhwU2VsZWN0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydFBhcnRJbmRleE9mUmFuZ2VTZWxlY3Rpb24gKGV4dGVybmFsSWQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHJhbmdlID0gZ2V0U2VsZWN0aW9uUmFuZ2UoKVxuICBsZXQgc3RhcnRQYXJ0SW5kZXhcblxuICBpZiAocmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgY29uc3QgcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24gPSBnZXRQcmV2aW91c05vZGVPZlNlbGVjdGlvbihleHRlcm5hbElkKVxuICAgIHN0YXJ0UGFydEluZGV4ID0gcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24gJiYgcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24uaWQgJiYgZ2V0V2hldGhlcklzUGFydElkKGV4dGVybmFsSWQsIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uLmlkKSAmJlxuICAgICAgZ2V0SW5kZXhCeVBhcnRJZChleHRlcm5hbElkLCBwcmV2aW91c05vZGVPZlNlbGVjdGlvbi5pZClcbiAgfSBlbHNlIHtcbiAgICAvLyBcXHVmZWZmIHN0YW5kcyBmb3IgWkVSTyBXSURUSCBOTy1CUkVBSyBTUEFDRVxuICAgIGlmIChcbiAgICAgIHJhbmdlLnN0YXJ0Q29udGFpbmVyLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJlxuICAgICAgKC9eXFx1ZmVmZiQvLnRlc3QocmFuZ2Uuc3RhcnRDb250YWluZXIudGV4dENvbnRlbnQpIHx8IC9eXFx1ZmVmZiQvLnRlc3QocmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQpKVxuICAgICkge1xuICAgICAgc3RhcnRQYXJ0SW5kZXggPSAwXG4gICAgfSBlbHNlIGlmICgocmFuZ2Uuc3RhcnRDb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmlkID09PSBleHRlcm5hbElkKSB7XG4gICAgICBzdGFydFBhcnRJbmRleCA9IHJhbmdlLnN0YXJ0T2Zmc2V0IC0gMVxuICAgIH0gZWxzZSBpZiAoZ2V0V2hldGhlcklzUGFydElkKGV4dGVybmFsSWQsIChyYW5nZS5zdGFydENvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuaWQpKSB7XG4gICAgICBzdGFydFBhcnRJbmRleCA9IGdldEluZGV4QnlQYXJ0SWQoZXh0ZXJuYWxJZCwgKHJhbmdlLnN0YXJ0Q29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5pZCkgKyByYW5nZS5zdGFydE9mZnNldCArIDFcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdDYW4gbm90IGdldCBzdGFydCBwYXJ0IG9mIHNlbGVjdGlvbicpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzTnVtYmVyVmFyaWFibGUoc3RhcnRQYXJ0SW5kZXgpKSB7XG4gICAgcmV0dXJuIHN0YXJ0UGFydEluZGV4XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kUGFydEluZGV4T2ZSYW5nZVNlbGVjdGlvbiAoZXh0ZXJuYWxJZDogc3RyaW5nLCBwYXJ0czogRXhwcmVzc2lvblBhcnRbXSA9IFtdKTogbnVtYmVyIHtcbiAgY29uc3QgcmFuZ2UgPSBnZXRTZWxlY3Rpb25SYW5nZSgpXG4gIGxldCBlbmRQYXJ0SW5kZXhcblxuICBpZiAocmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgY29uc3QgcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24gPSBnZXRQcmV2aW91c05vZGVPZlNlbGVjdGlvbihleHRlcm5hbElkKVxuICAgIGVuZFBhcnRJbmRleCA9IHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uICYmIHByZXZpb3VzTm9kZU9mU2VsZWN0aW9uLmlkICYmIGdldFdoZXRoZXJJc1BhcnRJZChleHRlcm5hbElkLCBwcmV2aW91c05vZGVPZlNlbGVjdGlvbi5pZCkgJiZcbiAgICAgIGdldEluZGV4QnlQYXJ0SWQoZXh0ZXJuYWxJZCwgcHJldmlvdXNOb2RlT2ZTZWxlY3Rpb24uaWQpXG4gIH0gZWxzZSB7XG4gICAgLy8gXFx1ZmVmZiBzdGFuZHMgZm9yIFpFUk8gV0lEVEggTk8tQlJFQUsgU1BBQ0VcbiAgICBpZiAoXG4gICAgICByYW5nZS5lbmRDb250YWluZXIubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmXG4gICAgICAoL15cXHVmZWZmJC8udGVzdChyYW5nZS5lbmRDb250YWluZXIudGV4dENvbnRlbnQpIHx8IC9eXFx1ZmVmZiQvLnRlc3QocmFuZ2Uuc3RhcnRDb250YWluZXIucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQpKVxuICAgICkge1xuICAgICAgZW5kUGFydEluZGV4ID0gcGFydHMubGVuZ3RoIC0gMSA+IC0xID8gcGFydHMubGVuZ3RoIC0gMSA6IDBcbiAgICB9IGVsc2UgaWYgKChyYW5nZS5lbmRDb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmlkID09PSBleHRlcm5hbElkKSB7XG4gICAgICBlbmRQYXJ0SW5kZXggPSByYW5nZS5lbmRPZmZzZXQgLSAyXG4gICAgfSBlbHNlIGlmIChnZXRXaGV0aGVySXNQYXJ0SWQoZXh0ZXJuYWxJZCwgKHJhbmdlLmVuZENvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuaWQpKSB7XG4gICAgICBlbmRQYXJ0SW5kZXggPSBnZXRJbmRleEJ5UGFydElkKGV4dGVybmFsSWQsIChyYW5nZS5lbmRDb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmlkKSAtIHJhbmdlLmVuZE9mZnNldCAtIDFcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdDYW4gbm90IGdldCBlbmQgcGFydCBvZiBzZWxlY3Rpb24nKVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc051bWJlclZhcmlhYmxlKGVuZFBhcnRJbmRleCkpIHtcbiAgICByZXR1cm4gZW5kUGFydEluZGV4XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZXh0ZXJhbmxJZCBleHByZXNzaW9uIGVkaXRvciBub2RlIGlkXG4gKiBAcGFyYW0gaXNJbkVkaXRhYmxlUGFydCB3aGV0aGVyIGlzIGluIGFuIGVkaXRhYmxlIHBhcnRcbiAqIEBwYXJhbSBlZGl0UmVzdWx0IGFkZCBvciByZW1vdmUgcmVzdWx0XG4gKiBAcGFyYW0gcGFydHMgbmV3IHBhcnRzIGFmdGVyIGFkZCBvciByZW1vdmVcbiAqIEBwYXJhbSBpbm5lclNlbGVjdGlvbiBzZWxlY3Rpb24gcG9zaXRpb24gaW5uZXIgb25lIHBhcnRcbiAqIEBwYXJhbSBtb3ZlQ2hhcmFjdGVyTnVtYmVyIHJlbW92ZWQgY2hhcmFjdGVyIG51bWJlciBhZnRlciByZW1tb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBTZWxlY3Rpb25BbmRFaXRhYmxlUGFydCAoZXh0ZXJhbmxJZDogc3RyaW5nLCBpc0luRWRpdGFibGVQYXJ0OiBib29sZWFuLCBlZGl0UmVzdWx0OiBFZGl0UmVzdWx0LCBwYXJ0czogRXhwcmVzc2lvblBhcnRbXSwgaW5uZXJTZWxlY3Rpb246IElubmVyRXhwU2VsZWN0aW9uLFxuICBtb3ZlQ2hhcmFjdGVyTnVtYmVyPzogbnVtYmVyKTogRXhwU2VsZWN0aW9uIHtcbiAgbGV0IGV4cFNlbGVjdGlvbjogRXhwU2VsZWN0aW9uID0gbnVsbFxuXG4gIGlmICghZWRpdFJlc3VsdCkge1xuICAgIHJldHVybiBleHBTZWxlY3Rpb25cbiAgfVxuXG4gIC8vIGZpbmQgYSBwYXJ0IHdoaWNoIGlzIGZpZWxkIG9yIHN0cmluZyBhbmQgZG9lc24ndCBoYXZlIGNvbnRlbnRcbiAgY29uc3Qgbm9Db250ZW50U3RyaW5nT3JGaWVsZFBhcnRJbmRleCA9IE9iamVjdC5rZXlzKGVkaXRSZXN1bHQpLmZpbmQoaW5kZXggPT5cbiAgICBlZGl0UmVzdWx0W2luZGV4XSAmJiBlZGl0UmVzdWx0W2luZGV4XS5wYXJ0ICYmIChcbiAgICAgIChlZGl0UmVzdWx0W2luZGV4XS5wYXJ0LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcgJiYgZWRpdFJlc3VsdFtpbmRleF0ucGFydC5leHAgPT09ICdcIlwiJykgfHxcbiAgICAgIChlZGl0UmVzdWx0W2luZGV4XS5wYXJ0LnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GaWVsZCAmJiBlZGl0UmVzdWx0W2luZGV4XS5wYXJ0LmV4cCA9PT0gJ3t9JylcbiAgICApXG4gIClcbiAgY29uc3Qgbm9Db250ZW50U3RyaW5nT3JGaWVsZFBhcnQgPSBub0NvbnRlbnRTdHJpbmdPckZpZWxkUGFydEluZGV4ICYmIGVkaXRSZXN1bHRbbm9Db250ZW50U3RyaW5nT3JGaWVsZFBhcnRJbmRleF0gJiYgZWRpdFJlc3VsdFtub0NvbnRlbnRTdHJpbmdPckZpZWxkUGFydEluZGV4XS5wYXJ0XG5cbiAgaWYgKG5vQ29udGVudFN0cmluZ09yRmllbGRQYXJ0KSB7IC8vIGVkaXQgcmVzdWx0IGNvbnRhaW4gYSBzcGVjaWFsIHBhcnRcbiAgICBleHBTZWxlY3Rpb24gPSB7XG4gICAgICBwYXJ0SWQ6IGdldFBhcnRJZEJ5SW5kZXgoZXh0ZXJhbmxJZCwgcGFyc2VJbnQobm9Db250ZW50U3RyaW5nT3JGaWVsZFBhcnRJbmRleCkpLFxuICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5DaGFyLFxuICAgICAgc3RhcnRPZmZzZXQ6IDFcbiAgICB9XG4gIH0gZWxzZSB7IC8vIGVkaXQgcmVzdWx0IGRvZXNlbid0IGNvbnRhaW4gYW55IHNwZWNpYWwgcGFydHNcbiAgICBjb25zdCBhZGRlZE5ld1BhcnRJbmRleGVzID0gZ2V0QWRkZWRQYXJ0SW5kZXhlcyhlZGl0UmVzdWx0KVxuICAgIGNvbnN0IHJlbW92ZWRQYXJ0SW5kZXhlcyA9IGdldFJlbW92ZWRQYXJ0SW5kZXhlcyhlZGl0UmVzdWx0KVxuICAgIGNvbnN0IGFyZU5ld1BhcnRzQWRkZWQ6IGJvb2xlYW4gPSBhZGRlZE5ld1BhcnRJbmRleGVzLmxlbmd0aCA+IDAgLy8gd2hldGhlciBuZXcgcGFydHMgYXJlIGFkZGVkIHRvIGV4cHJlc3Npb25cbiAgICBjb25zdCBhcmVQYXJ0c1JlbW92ZWQ6IGJvb2xlYW4gPSByZW1vdmVkUGFydEluZGV4ZXMubGVuZ3RoID4gMCAvLyB3aGV0aGVyIHBhcnRzIGFyZSByZW1vdmVkIGZyb20gZXhwcmVzc2lvblxuICAgIGlmIChhcmVQYXJ0c1JlbW92ZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0UmVtb3ZlZFBhcnRJbmRleCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJlbW92ZWRQYXJ0SW5kZXhlcylcbiAgICAgIGNvbnN0IHByZXZQYXJ0SW5kZXggPSBmaXJzdFJlbW92ZWRQYXJ0SW5kZXggLSAxIC8vIHByZXZpb3VzIHBhcnQgb2YgdGhlIGZpcnN0IHJlbW92ZWQgcGFydFxuICAgICAgY29uc3QgcHJldlBhcnQgPSBwYXJ0c1twcmV2UGFydEluZGV4XVxuXG4gICAgICBpZiAoaXNJbkVkaXRhYmxlUGFydCkge1xuICAgICAgICBpZiAocHJldlBhcnQpIHtcbiAgICAgICAgICBpZiAocmVtb3ZlZFBhcnRJbmRleGVzLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMoZWRpdFJlc3VsdCkubGVuZ3RoKSB7IC8vIG9ubHkgcmVtb3ZlIHNvbWUgcGFydHNcbiAgICAgICAgICAgIGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgcGFydElkOiBnZXRQYXJ0SWRCeUluZGV4KGV4dGVyYW5sSWQsIHByZXZQYXJ0SW5kZXgpLFxuICAgICAgICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiAocHJldlBhcnQudHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZyB8fCBwcmV2UGFydC50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuRmllbGQpID8gcHJldlBhcnQuZXhwLmxlbmd0aCAtIDEgOiBwcmV2UGFydC5leHAubGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHsgLy8gcmVtb3ZlIHNvbWUgcGFydHMgYW5kIG1lcmdlIHNvbWUgcGFydHNcbiAgICAgICAgICAgIGV4cFNlbGVjdGlvbiA9IGdldEV4cFNlbGVjdGlvbkFmdGVyU29tZVBhcnRzTWVyZ2VkKGV4dGVyYW5sSWQsIHBhcnRzLCBlZGl0UmVzdWx0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0SW5kZXhTZWxlY3Rpb25TaG91bGRCZWhpbmQgPSBwcmV2UGFydEluZGV4ID4gLTEgPyBwcmV2UGFydEluZGV4IDogMFxuICAgICAgICAgIGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIHBhcnRJZDogZ2V0UGFydElkQnlJbmRleChleHRlcmFubElkLCBwYXJ0SW5kZXhTZWxlY3Rpb25TaG91bGRCZWhpbmQpLFxuICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5QYXJ0LFxuICAgICAgICAgICAgdG9TdGFydDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gbm8gcGFydHMgYXJlIGVkaXRhYmxlXG4gICAgICAgIGlmIChyZW1vdmVkUGFydEluZGV4ZXMubGVuZ3RoID09PSBPYmplY3Qua2V5cyhlZGl0UmVzdWx0KS5sZW5ndGgpIHsgLy8gb25seSByZW1vdmUgc29tZSBwYXJ0c1xuICAgICAgICAgIGNvbnN0IHBhcnRJbmRleFNlbGVjdGlvblNob3VsZEJlaGluZCA9IHByZXZQYXJ0SW5kZXggPiAtMSA/IHByZXZQYXJ0SW5kZXggOiAwXG4gICAgICAgICAgY29uc3QgdG9TdGFydCA9ICEocHJldlBhcnRJbmRleCA+IC0xKVxuICAgICAgICAgIGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIHBhcnRJZDogZ2V0UGFydElkQnlJbmRleChleHRlcmFubElkLCBwYXJ0SW5kZXhTZWxlY3Rpb25TaG91bGRCZWhpbmQpLFxuICAgICAgICAgICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5QYXJ0LFxuICAgICAgICAgICAgdG9TdGFydFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLy8gcmVtb3ZlIHNvbWUgcGFydHMgYW5kIG1lcmdlIHNvbWUgcGFydHNcbiAgICAgICAgICBleHBTZWxlY3Rpb24gPSBnZXRFeHBTZWxlY3Rpb25BZnRlclNvbWVQYXJ0c01lcmdlZChleHRlcmFubElkLCBwYXJ0cywgZWRpdFJlc3VsdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJlTmV3UGFydHNBZGRlZCkge1xuICAgICAgaWYgKGFkZGVkTmV3UGFydEluZGV4ZXMubGVuZ3RoID09PSBPYmplY3Qua2V5cyhlZGl0UmVzdWx0KS5sZW5ndGgpIHsgLy8gb25seSBhZGQgc29tZSBwYXJ0c1xuICAgICAgICBjb25zdCBsYXN0QWRkZWRQYXJ0SW5kZXggPSBNYXRoLm1heC5hcHBseShudWxsLCBhZGRlZE5ld1BhcnRJbmRleGVzKVxuICAgICAgICBjb25zdCBsYXN0QWRkZWRQYXJ0SWQgPSBnZXRQYXJ0SWRCeUluZGV4KGV4dGVyYW5sSWQsIGxhc3RBZGRlZFBhcnRJbmRleClcbiAgICAgICAgY29uc3QgbGFzdEFkZGVkUGFydCA9IGVkaXRSZXN1bHRbbGFzdEFkZGVkUGFydEluZGV4XSAmJiBlZGl0UmVzdWx0W2xhc3RBZGRlZFBhcnRJbmRleF0ucGFydFxuXG4gICAgICAgIGV4cFNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBwYXJ0SWQ6IGxhc3RBZGRlZFBhcnRJZCxcbiAgICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IGxhc3RBZGRlZFBhcnQgJiYgbGFzdEFkZGVkUGFydC5leHAgJiYgbGFzdEFkZGVkUGFydC5leHAubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGFkZCBzb21lIHBhcnRzIGFuZCBtZXJnZSBzb21lIHBhcnRzXG4gICAgICAgIGV4cFNlbGVjdGlvbiA9IGdldEV4cFNlbGVjdGlvbkFmdGVyU29tZVBhcnRzTWVyZ2VkKGV4dGVyYW5sSWQsIHBhcnRzLCBlZGl0UmVzdWx0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG9ubHkgc29tZSBwYXJ0cyBhcmUgbW9kaWZpZWRcbiAgICAgIGNvbnN0IG1lcmdlZFBhcnRJbmRleCA9IGdldE1lcmdlZFBhcnRJbmRleChleHRlcmFubElkLCBlZGl0UmVzdWx0KVxuICAgICAgY29uc3QgZWRpdFJlc3VsdFBhcnRJbmRleCA9IGlzTnVtYmVyVmFyaWFibGUobWVyZ2VkUGFydEluZGV4KSA/IG1lcmdlZFBhcnRJbmRleCA6IHBhcnNlSW50KE9iamVjdC5rZXlzKGVkaXRSZXN1bHQpWzBdKVxuICAgICAgY29uc3QgZWRpdFJlc3VsdFBhcnRJZCA9IGlzTnVtYmVyVmFyaWFibGUoZWRpdFJlc3VsdFBhcnRJbmRleCkgJiYgZ2V0UGFydElkQnlJbmRleChleHRlcmFubElkLCBlZGl0UmVzdWx0UGFydEluZGV4KVxuXG4gICAgICBpZiAoaXNJbkVkaXRhYmxlUGFydCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25QYXJ0SWQgPSBpbm5lclNlbGVjdGlvbiAmJiBpbm5lclNlbGVjdGlvbi5wYXJ0SWRcbiAgICAgICAgLy8gaXMgc2VsZWN0aW9uIHBhcnQgZWRpdGVkLCBpbiBzb21lIGNvbmRpdGlvbiBzZWxlY3Rpb24gcGFydCBpcyBub3QgdGhlIGVkaXRlZCBwYXJ0XG4gICAgICAgIC8vIGUuZy4sIFsxMjMsICdhYmMnXSBhbmQgc2VsZWN0aW9uIGlzIGluIHRoZSBzdGFydCBvZiBwYXJ0ICdhYmMnIC0+IGFkZCBudW1iZXIgNSAtPiBbMTIzNSwgJ2FiYyddIGFuZCBzZWxlY3Rpb24gaXMgaW4gcGFydCAxMjM1XG4gICAgICAgIC8vIHNlbGVjdGlvbiBwYXJ0IGlzIG5vdCBlZGl0ZWRcbiAgICAgICAgY29uc3QgaXNTZWxlY3Rpb25QYXJ0RWRpdGVkID0gZWRpdFJlc3VsdFBhcnRJZCA9PT0gc2VsZWN0aW9uUGFydElkXG4gICAgICAgIGNvbnN0IGxlZnRDaGFyTnVtYmVyID0gaW5uZXJTZWxlY3Rpb24uZW5kT2Zmc2V0IC0gKGlzTnVtYmVyVmFyaWFibGUobW92ZUNoYXJhY3Rlck51bWJlcikgPyBtb3ZlQ2hhcmFjdGVyTnVtYmVyIDogMClcbiAgICAgICAgY29uc3QgZWRpdGFibGVQYXJ0ID0gcGFydHNbZ2V0SW5kZXhCeVBhcnRJZChleHRlcmFubElkLCBzZWxlY3Rpb25QYXJ0SWQpXVxuICAgICAgICBjb25zdCBlZGl0YWJsZVBhcnRFeHBMZW5ndGggPSBlZGl0YWJsZVBhcnQgJiYgZWRpdGFibGVQYXJ0LmV4cCA/IGVkaXRhYmxlUGFydC5leHAubGVuZ3RoIDogLTFcblxuICAgICAgICBleHBTZWxlY3Rpb24gPSB7XG4gICAgICAgICAgcGFydElkOiBlZGl0UmVzdWx0UGFydElkLFxuICAgICAgICAgIHR5cGU6IEV4cFNlbGVjdGlvblR5cGUuQ2hhcixcbiAgICAgICAgICBzdGFydE9mZnNldDogaXNTZWxlY3Rpb25QYXJ0RWRpdGVkICYmIGxlZnRDaGFyTnVtYmVyID49IDAgJiYgbGVmdENoYXJOdW1iZXIgPD0gZWRpdGFibGVQYXJ0RXhwTGVuZ3RoXG4gICAgICAgICAgICA/IGxlZnRDaGFyTnVtYmVyXG4gICAgICAgICAgICA6IGVkaXRSZXN1bHRbZWRpdFJlc3VsdFBhcnRJbmRleF0gJiYgaXNOdW1iZXJWYXJpYWJsZShlZGl0UmVzdWx0W2VkaXRSZXN1bHRQYXJ0SW5kZXhdLnN0YXJ0T2Zmc2V0KSA/IGVkaXRSZXN1bHRbZWRpdFJlc3VsdFBhcnRJbmRleF0uc3RhcnRPZmZzZXQgOiAwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIG5vdCBpbiBlZGl0YWJsZSBwYXJ0LCB3aGljaCBtZWFucyBzZWxlY3Rpb24gaXMgYmV0d2VlbiB0d28gcGFydHNcbiAgICAgICAgZXhwU2VsZWN0aW9uID0ge1xuICAgICAgICAgIHBhcnRJZDogZWRpdFJlc3VsdFBhcnRJZCxcbiAgICAgICAgICB0eXBlOiBFeHBTZWxlY3Rpb25UeXBlLkNoYXIsXG4gICAgICAgICAgc3RhcnRPZmZzZXQ6IGVkaXRSZXN1bHRbZWRpdFJlc3VsdFBhcnRJbmRleF0uc3RhcnRPZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHBTZWxlY3Rpb25cbn1cblxuZnVuY3Rpb24gZ2V0RXhwU2VsZWN0aW9uQWZ0ZXJTb21lUGFydHNNZXJnZWQgKGV4dGVyYW5sSWQ6IHN0cmluZywgcGFydHM6IEV4cHJlc3Npb25QYXJ0W10sIGVkaXRSZXN1bHQ6IEVkaXRSZXN1bHQpOiBFeHBTZWxlY3Rpb24ge1xuICBjb25zdCBtZXJnZWRQYXJ0SW5kZXggPSBnZXRNZXJnZWRQYXJ0SW5kZXgoZXh0ZXJhbmxJZCwgZWRpdFJlc3VsdClcbiAgY29uc3QgZG9lc01lcmdlZFBhcnRFeGlzdCA9IGlzTnVtYmVyVmFyaWFibGUobWVyZ2VkUGFydEluZGV4KVxuICBjb25zdCBlZGl0YWJsZVBhcnRJbmRleCA9IGRvZXNNZXJnZWRQYXJ0RXhpc3QgPyBtZXJnZWRQYXJ0SW5kZXggOiBwYXJ0cy5sZW5ndGggLSAxXG4gIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gZG9lc01lcmdlZFBhcnRFeGlzdCA/IGVkaXRSZXN1bHRbbWVyZ2VkUGFydEluZGV4XS5zdGFydE9mZnNldCA6IDBcbiAgY29uc3QgZXhwU2VsZWN0aW9uID0ge1xuICAgIHBhcnRJZDogZ2V0UGFydElkQnlJbmRleChleHRlcmFubElkLCBlZGl0YWJsZVBhcnRJbmRleCksXG4gICAgdHlwZTogRXhwU2VsZWN0aW9uVHlwZS5DaGFyLFxuICAgIHN0YXJ0T2Zmc2V0XG4gIH1cblxuICByZXR1cm4gZXhwU2VsZWN0aW9uXG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlZFBhcnRJbmRleCAoZXh0ZXJhbmxJZDogc3RyaW5nLCBlZGl0UmVzdWx0OiBFZGl0UmVzdWx0KTogbnVtYmVyIHtcbiAgY29uc3QgaW5kZXggPSBPYmplY3Qua2V5cyhlZGl0UmVzdWx0KS5maW5kKGluZGV4ID0+IGVkaXRSZXN1bHRbaW5kZXhdLnBhcnQgJiYgaXNOdW1iZXJWYXJpYWJsZShlZGl0UmVzdWx0W2luZGV4XS5zdGFydE9mZnNldCkpXG5cbiAgcmV0dXJuIHBhcnNlSW50KGluZGV4KVxufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBSZWFjdCwganN4LCBjbGFzc05hbWVzLCB0eXBlIEV4cHJlc3Npb24sIEV4cHJlc3Npb25QYXJ0VHlwZSxcbiAgdHlwZSBJbnRsU2hhcGUsIGluamVjdEludGwsIGV4cHJlc3Npb25VdGlscywgZ3JvdXBFeHByZXNzaW9uUGFydHNCeUZ1bmN0aW9uLCB0eXBlIElNRXhwcmVzc2lvbiwgdHlwZSBJbW11dGFibGVBcnJheSwgSW1tdXRhYmxlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFRleHRJbnB1dCwgRHJvcGRvd24sIERyb3Bkb3duQnV0dG9uLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgSWNvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBnZXRXaGV0aGVyVXNlRHNzTWF0Y2hFeHBEc3MsIGdldEV4cHJlc3Npb25Gcm9tU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmltcG9ydCB7IEV4cHJlc3Npb25CdWlsZGVyVHlwZSwgRXhwcmVzc2lvbklucHV0VHlwZSwgdHlwZSBFeHByZXNzaW9uQnVpbGRlclByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCBmcm9tICcuLi9leHByZXNzaW9uLWJ1aWxkZXItcG9wdXAnXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnamltdS10aGVtZSdcblxuaW1wb3J0IFRleHRQYWdlT3V0bGluZWQgZnJvbSAnamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGF0YS90ZXh0LXBhZ2Uuc3ZnJ1xuaW1wb3J0IFN1bU91dGxpbmVkIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9zdW0uc3ZnJ1xuaW1wb3J0IENvZGVPdXRsaW5lZCBmcm9tICdqaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kYXRhL2NvZGUuc3ZnJ1xuaW1wb3J0IEJyYWNlc091dGxpbmVkIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RhdGEvYnJhY2VzLnN2ZydcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2VsZWN0ZWRFeHBGcm9tOiBFeHByZXNzaW9uSW5wdXRUeXBlXG4gIGlucHV0VmFsdWU6IHN0cmluZ1xuICBpc0Ryb3Bkb3duT3BlbjogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRXhwcmVzc2lvbklucHV0UHJvcHMgZXh0ZW5kcyBPbWl0PEV4cHJlc3Npb25CdWlsZGVyUHJvcHMsICd0eXBlcyc+IHtcbiAgaXNFeHBQb3B1cE9wZW46IGJvb2xlYW5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCBhbmQgdGhlIGxlbmd0aCBvZiBgdHlwZXNgIGxlc3MgdGhhbiAxLCBoaWRlIHRoZSB0eXBlcyBzZWxlY3Rvcihkcm9wZG93bilcbiAgICovXG4gIGF1dG9IaWRlPzogYm9vbGVhblxuICB0eXBlczogSW1tdXRhYmxlQXJyYXk8RXhwcmVzc2lvbklucHV0VHlwZT5cbiAgcGxhY2VIb2xkZXJzPzoge1xuICAgIFt0eXBlczogc3RyaW5nXTogc3RyaW5nXG4gIH0gLy8gbWF0Y2ggd2l0aCB0eXBlcyBwcm9wXG4gIC8qKlxuICAgKiBUbyBwcm92aWRlIGEgbGFiZWwgZm9yIGludGVyYWN0aXZlIGNvbXBvbmVudHMgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG4gICAqL1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmdcbiAgb3BlbkV4cFBvcHVwOiAoKSA9PiB2b2lkXG4gIGNsb3NlRXhwUG9wdXA6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsOiBJbnRsU2hhcGVcbn1cblxuY2xhc3MgX0V4cHJlc3Npb25JbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RXhwcmVzc2lvbklucHV0UHJvcHMgJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xuICBleHBCdWlsZGVyVHJpZ2dlciA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBkcm9wZG93bkJ1dHRvbiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4oKVxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEV4cEZyb206IHRoaXMuZ2V0U2VsZWN0ZWRFeHBGcm9tRXhwcmVzc2lvbigpLFxuICAgICAgaXNEcm9wZG93bk9wZW46IGZhbHNlLFxuICAgICAgaW5wdXRWYWx1ZTogdGhpcy5nZXRTdHJpbmdGcm9tRXhwcmVzc2lvbigpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEV4cHJlc3Npb25JbnB1dFByb3BzICYgRXh0cmFQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuc2VsZWN0ZWRFeHBGcm9tID09PSBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpYyAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkRXhwRnJvbSAhPT0gRXhwcmVzc2lvbklucHV0VHlwZS5TdGF0aWMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiAnJyB9KVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duID0gKCkgPT4geyB0aGlzLnNldFN0YXRlKHsgaXNEcm9wZG93bk9wZW46ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25PcGVuIH0pIH1cblxuICBnZXRFeHBGcm9tSWNvbiA9IChmcm9tOiBFeHByZXNzaW9uSW5wdXRUeXBlKSA9PiB7XG4gICAgc3dpdGNoIChmcm9tKSB7XG4gICAgICBjYXNlIEV4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGljOlxuICAgICAgICByZXR1cm4gVGV4dFBhZ2VPdXRsaW5lZFxuICAgICAgY2FzZSBFeHByZXNzaW9uSW5wdXRUeXBlLkF0dHJpYnV0ZTpcbiAgICAgICAgcmV0dXJuIEJyYWNlc091dGxpbmVkXG4gICAgICBjYXNlIEV4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGlzdGljczpcbiAgICAgICAgcmV0dXJuIFN1bU91dGxpbmVkXG4gICAgICBjYXNlIEV4cHJlc3Npb25JbnB1dFR5cGUuRXhwcmVzc2lvbjpcbiAgICAgICAgcmV0dXJuIENvZGVPdXRsaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZEV4cEZyb21FeHByZXNzaW9uID0gKCk6IEV4cHJlc3Npb25JbnB1dFR5cGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmV4cHJlc3Npb24/Lm51bWJlckZvcm1hdCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZXMuc29tZShmID0+IGYgPT09IEV4cHJlc3Npb25JbnB1dFR5cGUuRXhwcmVzc2lvbikgPyBFeHByZXNzaW9uSW5wdXRUeXBlLkV4cHJlc3Npb24gOiB0aGlzLnByb3BzLnR5cGVzWzBdXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmV4cHJlc3Npb24gfHwgIXRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0cyB8fCB0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbklucHV0VHlwZS5TdGF0aWMpXG4gICAgICAgID8gRXhwcmVzc2lvbklucHV0VHlwZS5TdGF0aWNcbiAgICAgICAgOiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uSW5wdXRUeXBlLkF0dHJpYnV0ZSlcbiAgICAgICAgICAgICAgPyBFeHByZXNzaW9uSW5wdXRUeXBlLkF0dHJpYnV0ZVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZXMuc29tZShmID0+IGYgPT09IEV4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGlzdGljcylcbiAgICAgICAgICAgICAgICAgICAgPyBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpc3RpY3NcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uSW5wdXRUeXBlLkV4cHJlc3Npb24pID8gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uIDogdGhpcy5wcm9wcy50eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwZWRQYXJ0cyA9IGdyb3VwRXhwcmVzc2lvblBhcnRzQnlGdW5jdGlvbih0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMpXG5cbiAgICBpZiAoZ3JvdXBlZFBhcnRzLmxlbmd0aCA9PT0gMSAmJiBncm91cGVkUGFydHNbMF0udHlwZSA9PT0gRXhwcmVzc2lvblBhcnRUeXBlLkZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbklucHV0VHlwZS5BdHRyaWJ1dGUpXG4gICAgICAgID8gRXhwcmVzc2lvbklucHV0VHlwZS5BdHRyaWJ1dGVcbiAgICAgICAgOiAodGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uKSA/IEV4cHJlc3Npb25JbnB1dFR5cGUuRXhwcmVzc2lvbiA6IHRoaXMucHJvcHMudHlwZXNbMF0pXG4gICAgfVxuXG4gICAgaWYgKGdyb3VwZWRQYXJ0cy5sZW5ndGggPT09IDEgJiYgZ3JvdXBlZFBhcnRzWzBdLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5GdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZXMuc29tZShmID0+IGYgPT09IEV4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGlzdGljcylcbiAgICAgICAgPyBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpc3RpY3NcbiAgICAgICAgOiAodGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uKSA/IEV4cHJlc3Npb25JbnB1dFR5cGUuRXhwcmVzc2lvbiA6IHRoaXMucHJvcHMudHlwZXNbMF0pXG4gICAgfVxuXG4gICAgaWYgKGdyb3VwZWRQYXJ0cy5sZW5ndGggPT09IDEgJiYgZ3JvdXBlZFBhcnRzWzBdLnR5cGUgPT09IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpYylcbiAgICAgICAgPyBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpY1xuICAgICAgICA6ICh0aGlzLnByb3BzLnR5cGVzLnNvbWUoZiA9PiBmID09PSBFeHByZXNzaW9uSW5wdXRUeXBlLkV4cHJlc3Npb24pID8gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uIDogdGhpcy5wcm9wcy50eXBlc1swXSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlcy5zb21lKGYgPT4gZiA9PT0gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uKSA/IEV4cHJlc3Npb25JbnB1dFR5cGUuRXhwcmVzc2lvbiA6IHRoaXMucHJvcHMudHlwZXNbMF1cbiAgfVxuXG4gIGdldFdoZXRoZXJGcm9tRXhwQnVpbGRlciA9IChleHBGcm9tOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gZXhwRnJvbSAmJiBPYmplY3Qua2V5cyhFeHByZXNzaW9uQnVpbGRlclR5cGUpLnNvbWUoZiA9PiBFeHByZXNzaW9uQnVpbGRlclR5cGVbZl0gPT09IGV4cEZyb20pXG4gIH1cblxuICBnZXRFeHByZXNzaW9uRnJvbSA9ICgpOiBJbW11dGFibGVBcnJheTxFeHByZXNzaW9uQnVpbGRlclR5cGU+ID0+IHtcbiAgICBpZiAodGhpcy5nZXRXaGV0aGVyRnJvbUV4cEJ1aWxkZXIodGhpcy5zdGF0ZS5zZWxlY3RlZEV4cEZyb20pKSB7XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKFt0aGlzLnN0YXRlLnNlbGVjdGVkRXhwRnJvbSBhcyBFeHByZXNzaW9uQnVpbGRlclR5cGVdKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKFtdKVxuICAgIH1cbiAgfVxuXG4gIGdldFN0cmluZ0Zyb21FeHByZXNzaW9uID0gKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmV4cHJlc3Npb24ucGFydHMubGVuZ3RoID09PSAxICYmIHRoaXMucHJvcHMuZXhwcmVzc2lvbi5wYXJ0c1swXS50eXBlID09PSBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5leHByZXNzaW9uLnBhcnRzWzBdLmV4cC5yZXBsYWNlKC9eXCIvLCAnJykucmVwbGFjZSgvXCIkLywgJycpXG4gICAgfVxuXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBvbklucHV0Qmx1ciA9IGUgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICBjb25zdCBleHByZXNzaW9uOiBFeHByZXNzaW9uID0ge1xuICAgICAgbmFtZTogdmFsdWUsXG4gICAgICBwYXJ0czogW3tcbiAgICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZyxcbiAgICAgICAgZXhwOiBgXCIke3ZhbHVlfVwiYFxuICAgICAgfV1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXhwcmVzc2lvbilcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uRXhwQ2hhbmdlID0gKGV4cHJlc3Npb246IEV4cHJlc3Npb24pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXhwcmVzc2lvbilcbiAgfVxuXG4gIG9uRXhwRnJvbUNoYW5nZSA9ICh2YWx1ZTogRXhwcmVzc2lvbklucHV0VHlwZSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEV4cEZyb20pIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gRXhwcmVzc2lvbklucHV0VHlwZS5FeHByZXNzaW9uKSB7XG4gICAgICAgIC8vIE90aGVyIHR5cGVzIG9mIGV4cHJlc3Npb24gY2FuIG5vdCBjb252ZXJ0IHRvIGVhY2ggb3RoZXIsIHJlc2V0IGV4cHJlc3Npb24uXG4gICAgICAgIHRoaXMub25FeHBDaGFuZ2UoeyBuYW1lOiAnJywgcGFydHM6IFtdIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRFeHBGcm9tOiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgIC8vIFN0YXRpYyBkb2Vzbid0IG5lZWQgZXhwcmVzc2lvbiBidWlsZGVyIHBvcHVwLlxuICAgICAgICBpZiAodmFsdWUgPT09IEV4cHJlc3Npb25JbnB1dFR5cGUuU3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUV4cFBvcHVwKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9wZW5FeHBQb3B1cCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlRXhwUG9wdXAoKVxuICAgIH1cbiAgfVxuXG4gIGdldFdoZXRoZXJFeHBEc3NNYXRjaEluVXNlRHNzID0gKGV4cHJlc3Npb246IEV4cHJlc3Npb24gfCBJTUV4cHJlc3Npb24pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IGV4cHJlc3Npb24gJiYgZXhwcmVzc2lvbi5wYXJ0c1xuXG4gICAgaWYgKHBhcnRzKSB7XG4gICAgICByZXR1cm4gcGFydHMuZXZlcnkocCA9PiBnZXRXaGV0aGVyVXNlRHNzTWF0Y2hFeHBEc3MocCwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB0b2dnbGVFeHBQb3B1cCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5nZXRXaGV0aGVyRnJvbUV4cEJ1aWxkZXIodGhpcy5zdGF0ZS5zZWxlY3RlZEV4cEZyb20pKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0V4cFBvcHVwT3Blbikge1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlRXhwUG9wdXAoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuRXhwUG9wdXAoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlRXhwUG9wdXAoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaXNGcm9tRXhwQnVpbGRlciA9IHRoaXMuZ2V0V2hldGhlckZyb21FeHBCdWlsZGVyKHRoaXMuc3RhdGUuc2VsZWN0ZWRFeHBGcm9tKVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpc0Zyb21FeHBCdWlsZGVyID8gKHRoaXMucHJvcHMuZXhwcmVzc2lvbiAmJiB0aGlzLnByb3BzLmV4cHJlc3Npb24ubmFtZSkgfHwgJycgOiB0aGlzLnN0YXRlLmlucHV0VmFsdWVcbiAgICBjb25zdCBpc0V4cHJlc3Npb25WYWxpZCA9IGV4cHJlc3Npb25VdGlscy5nZXRXaGV0aGVyRXhwcmVzc2lvblZhbGlkKHRoaXMucHJvcHMuZXhwcmVzc2lvbilcbiAgICBjb25zdCBkb0V4cHJlc3Npb25Ec3NNYXRjaEluVXNlRHNzID0gdGhpcy5nZXRXaGV0aGVyRXhwRHNzTWF0Y2hJblVzZURzcyh0aGlzLnByb3BzLmV4cHJlc3Npb24pXG4gICAgY29uc3QgaXNFeHByZXNzaW9uRXJyb3IgPSAhaXNFeHByZXNzaW9uVmFsaWQgfHwgIWRvRXhwcmVzc2lvbkRzc01hdGNoSW5Vc2VEc3NcblxuICAgIGNvbnN0IHsgcGxhY2VIb2xkZXJzID0ge30sIGF1dG9IaWRlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZEV4cEZyb20gfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcmVmPXt0aGlzLmV4cEJ1aWxkZXJUcmlnZ2VyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ctMTAwIGgtMTAwJywgeyBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXIgY29tcG9uZW50LWV4cHJlc3Npb24taW5wdXQnPlxuICAgICAgICAgIHshKGF1dG9IaWRlICYmICh0aGlzLnByb3BzLnR5cGVzIHx8IFtdKS5sZW5ndGggPD0gMSkgJiYgPGRpdiBjbGFzc05hbWU9J2V4cHJlc3Npb24tYnVpbGRlci10cmlnZ2VyJz5cbiAgICAgICAgICAgIDxEcm9wZG93biBpc09wZW49e3RoaXMuc3RhdGUuaXNEcm9wZG93bk9wZW59IHRvZ2dsZT17dGhpcy50b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPSd3LTEwMCBoLTEwMCBleHByZXNzaW9uLWJ1aWxkZXItdHJpZ2dlci1kcm9wZG93bic+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgICAgICAgIGFycm93PXtmYWxzZX0gZG90PXt0cnVlfSBpY29uIHJlZj17dGhpcy5kcm9wZG93bkJ1dHRvbn1cbiAgICAgICAgICAgICAgICB0aXRsZT17Z2V0RXhwcmVzc2lvbkZyb21TdHJpbmcodGhpcy5zdGF0ZS5zZWxlY3RlZEV4cEZyb20sIHRoaXMucHJvcHMuaW50bCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXRydW5jYXRlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB0cmlnZ2VyLWRyb3Bkb3duLXRvZ2dsZSBwLTAgamltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRXhwRnJvbSAmJlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXt0aGlzLmdldEV4cEZyb21JY29uKHNlbGVjdGVkRXhwRnJvbSl9IGNsYXNzTmFtZT0nbS0wIHAtMCcgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgYXBwZW5kVG9Cb2R5PXtmYWxzZX0gc3RyYXRlZ3k9J2ZpeGVkJz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVzLm1hcCgoZiwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXtlID0+IHsgdGhpcy5vbkV4cEZyb21DaGFuZ2UoZikgfX0ga2V5PXtpfSBjbGFzc05hbWU9J3RleHQtZGFyaycgYTExeUZvY3VzQmFjaz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e3RoaXMuZ2V0RXhwRnJvbUljb24oZil9IGNsYXNzTmFtZT0nbXItMicgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z2V0RXhwcmVzc2lvbkZyb21TdHJpbmcoZiwgdGhpcy5wcm9wcy5pbnRsKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93LTEgZXhwcmVzc2lvbi1pbnB1dCc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICFpc0V4cHJlc3Npb25FcnJvciB8fCAhaXNGcm9tRXhwQnVpbGRlclxuICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwJyBvbkNsaWNrPXtpc0Zyb21FeHBCdWlsZGVyID8gdGhpcy50b2dnbGVFeHBQb3B1cCA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3LTEwMCBoLTEwMCcsIHsgJ2RzLWRpc2FibGVkJzogaXNGcm9tRXhwQnVpbGRlciB9KX0gdmFsdWU9e2lucHV0VmFsdWV9IGRpc2FibGVkPXtpc0Zyb21FeHBCdWlsZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IG9uQmx1cj17dGhpcy5vbklucHV0Qmx1cn0gdGl0bGU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyc1tzZWxlY3RlZEV4cEZyb21dfSBhcmlhLWxhYmVsPXt0aGlzLnByb3BzWydhcmlhLWxhYmVsJ119XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0Zyb21FeHBCdWlsZGVyICYmIDxkaXYgY2xhc3NOYW1lPSdkcy1kaXNhYmxlZCBkaXNhYmxlZC1pbnB1dC1jb3ZlcicgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOiAoaW5wdXRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBoLTEwMCB0ZXh0LXRydW5jYXRlIGRzLWRpc2FibGVkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRXhwUG9wdXB9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yLXdyYXBwZXInIHRpdGxlPXtpbnB1dFZhbHVlfT57aW5wdXRWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAgdGV4dC10cnVuY2F0ZSBkcy1kaXNhYmxlZCBkcy1wbGFjZWhvbGRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyBvbkNsaWNrPXt0aGlzLnRvZ2dsZUV4cFBvcHVwfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlcnJvci13cmFwcGVyJyB0aXRsZT17cGxhY2VIb2xkZXJzW3NlbGVjdGVkRXhwRnJvbV19PntwbGFjZUhvbGRlcnNbc2VsZWN0ZWRFeHBGcm9tXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25FeHBDaGFuZ2V9IHR5cGVzPXt0aGlzLmdldEV4cHJlc3Npb25Gcm9tKCl9XG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnByb3BzLmlzRXhwUG9wdXBPcGVufSBvbkNsb3NlPXt0aGlzLnByb3BzLmNsb3NlRXhwUG9wdXB9XG4gICAgICAgICAgdHJpZ2dlcj17dGhpcy5leHBCdWlsZGVyVHJpZ2dlci5jdXJyZW50fSBiYWNrVG9Gb2N1c05vZGU9e3RoaXMuZHJvcGRvd25CdXR0b24uY3VycmVudH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBFeHByZXNzaW9uSW5wdXQgPSBpbmplY3RJbnRsKHdpdGhTdHlsZXMoX0V4cHJlc3Npb25JbnB1dCwgJ0V4cHJlc3Npb25JbnB1dCcpKVxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvbklucHV0XG4iLCJpbXBvcnQgRXhwcmVzc2lvbkVkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1lZGl0b3InXG5pbXBvcnQgRXhwcmVzc2lvbkJ1aWxkZXIsIHsgX0V4cHJlc3Npb25CdWlsZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2V4cHJlc3Npb24tYnVpbGRlcidcbmltcG9ydCB0eXBlIHsgRXhwcmVzc2lvbkJ1aWxkZXJQcm9wcyB9IGZyb20gJy4vY29tcG9uZW50cy9leHByZXNzaW9uLWJ1aWxkZXInXG5pbXBvcnQgRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCwgeyBfRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCB9IGZyb20gJy4vY29tcG9uZW50cy9leHByZXNzaW9uLWJ1aWxkZXItcG9wdXAnXG5pbXBvcnQgdHlwZSB7IEV4cHJlc3Npb25CdWlsZGVyUG9wdXBQcm9wcyB9IGZyb20gJy4vY29tcG9uZW50cy9leHByZXNzaW9uLWJ1aWxkZXItcG9wdXAnXG5pbXBvcnQgRXhwcmVzc2lvbklucHV0IGZyb20gJy4vY29tcG9uZW50cy9leHByZXNzaW9uLWlucHV0J1xuZXhwb3J0IHsgRXhwcmVzc2lvbkVkaXRvciwgRXhwcmVzc2lvbkJ1aWxkZXIsIEV4cHJlc3Npb25JbnB1dCwgX0V4cHJlc3Npb25CdWlsZGVyLCBfRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCwgRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCB9XG5leHBvcnQgdHlwZSB7IEV4cHJlc3Npb25CdWlsZGVyUHJvcHMsIEV4cHJlc3Npb25CdWlsZGVyUG9wdXBQcm9wcyB9XG5cbmV4cG9ydCB7IEV4cHJlc3Npb25CdWlsZGVyVHlwZSwgRXhwcmVzc2lvbklucHV0VHlwZSB9IGZyb20gJy4vdHlwZXMnXG4iLCJpbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgcG9saXNoZWQsIHR5cGUgSU1UaGVtZVZhcmlhYmxlcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25CdWlsZGVyU3R5bGVzIChwcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xuICBjb25zdCB0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyA9IHByb3BzLnRoZW1lXG4gIHJldHVybiBjc3NgXG4gICAgLmNvbXBvbmVudC1leHByZXNzaW9uLWJ1aWxkZXJ7XG4gICAgICAudy0zM3tcbiAgICAgICAgd2lkdGg6IDMzJSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnctODV7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICB9XG4gICAgICAuZml4ZWQtYXQtYm90dG9te1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAke3BvbGlzaGVkLnJlbSg2NCl9O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFs4MDBdfTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbMzAwXX07XG4gICAgICB9XG4gICAgICAubnVtYmVyLWZvcm1hdC1zZXR0aW5ne1xuICAgICAgICB3aWR0aDogJHtwb2xpc2hlZC5yZW0oMjQwKX07XG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDE2KX07XG4gICAgICAgIC5udW1iZXItZm9ybWF0LXN3aXRjaC1sYWJlbHtcbiAgICAgICAgICBmb250LXNpemU6ICR7cG9saXNoZWQucmVtKDE0KX07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzgwMF19O1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXItZm9ybWF0LWNoZWNrYm94LWxhYmVse1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTMpfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzgwMF19O1xuICAgICAgICB9XG4gICAgICAgIC5udW1iZXItZm9ybWF0LW51bWVyaWMtaW5wdXQtbGFiZWx7XG4gICAgICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxMyl9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbNDAwXX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5leHByZXNzaW9uLWJ1aWxkZXItdGFie1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAuaGFzLW5hdiAuZXhwcmVzc2lvbi1idWlsZGVyLXRhYntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgIH1cbiAgICAgIC5jb21tb24tdGFie1xuICAgICAgICAub3B0aW9uLWxhYmVse1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTMpfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbNDAwXX07XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGEtb3B0aW9ue1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmllbGQtc2VsZWN0b3ItY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAuZXhwcmVzc2lvbi1lZGl0b3ItY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDk1cHgpO1xuICAgICAgfVxuICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWhlbHBlcntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMzBweCk7XG4gICAgICAgIC50YWItY29udGVudHtcbiAgICAgICAgICBtYXJnaW46IDAgLTFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5leHAtZWRpdG9yLWhlbHBlci10YWJ7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICB9XG4gICAgICAuZmllbGQtc2VsZWN0b3ItY29udGFpbmVyLCAuZXhwcmVzc2lvbi1lZGl0b3ItY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5leHByZXNzaW9uLWluc2VydC1idG57XG4gICAgICAgIHdpZHRoOiAke3BvbGlzaGVkLnJlbSgxODApfTtcbiAgICAgIH1cbiAgICAgIC5zdGF0LWludGVyLWJ0bntcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICBgXG59XG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25FZGl0b3JTdHlsZXMgKHByb3BzKTogU2VyaWFsaXplZFN0eWxlcyB7XG4gIGNvbnN0IHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzID0gcHJvcHMudGhlbWVcbiAgcmV0dXJuIGNzc2BcbiAgICAuY29tcG9uZW50LWV4cHJlc3Npb24tZWRpdG9ye1xuICAgICAgLm10LTE4e1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmppbXUtbmF2Lm5hdi5uYXYtcGlsbHMubmF2LWZpbGx7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAuZXhwcmVzc2lvbi1lZGl0b3ItaW5wdXR7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6ICR7cG9saXNoZWQucmVtKDQ4KX07XG4gICAgICAgIG1heC1oZWlnaHQ6ICR7cG9saXNoZWQucmVtKDEwMCl9O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzIwMF19O1xuICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgIC5leHByZXNzaW9uLWVkaXRvci1pbnB1dC1jb250ZW50LWVkaXRhYmxlOmZvY3Vze1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5wcmltYXJ5WzcwMF19O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWlucHV0LWNvbnRlbnQtZWRpdGFibGV7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFsyMDBdfTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAke3BvbGlzaGVkLnJlbSg0OCl9O1xuICAgICAgICAgIG1heC1oZWlnaHQ6ICR7cG9saXNoZWQucmVtKDEwMCl9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuYnJlYWstYWxse1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmVycm9yLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYW5nZXJbNzAwXX07XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS53YXJuaW5nWzcwMF19O1xuICAgICAgICB9XG4gICAgICAgIC5mdW5jdGlvbi1leHB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUucHJpbWFyeVs3MDBdfTtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVyLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5pbmZvWzYwMF19O1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpbmctZXhwe1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLnN1Y2Nlc3NbNzAwXX07XG4gICAgICAgIH1cbiAgICAgICAgLm9wZXJhdG9yLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzcwMF19O1xuICAgICAgICB9XG4gICAgICAgIC51bmtub3duLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYW5nZXJbNzAwXX07XG4gICAgICAgIH1cbiAgICAgICAgLmRzLWRpc2FibGVkLWV4cHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYW5nZXJbNzAwXX07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmVycm9yLWJvcmRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNTA2NjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWlucHV0LWNvbnRlbnQtZWRpdGFibGV7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWZ1bmN0aW9uLWl0ZW17XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbNDAwXX07XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWZ1bmN0aW9uLWl0ZW0tc2VsZWN0ZWR7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgLmV4cHJlc3Npb24tZWRpdG9yLWZ1bmN0aW9uLWl0ZW06aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbNTAwXX07XG4gICAgICB9XG4gICAgICAuZXhwcmVzc2lvbi1lZGl0b3ItZnVuY3Rpb24taXRlbTphY3RpdmUuZXhwcmVzc2lvbi1lZGl0b3ItZnVuY3Rpb24taXRlbTpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgfVxuXG4gICAgICAuZXhwLWVkaXRvci1oZWxwZXJ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuICAgICAgLndpdGgtZXJyb3ItbWVzc2FnZSAuZXhwLWVkaXRvci1oZWxwZXIgLmNvbXBvbmVudC1maWVsZC1zZWxlY3RvciAuZmllbGQtbGlzdHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxODVweCk7XG4gICAgICB9XG4gICAgICAuZXhwLWVkaXRvci1oZWxwZXItdGFie1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvci1tZXNzYWdle1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuZXhwLXBvcGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzIwMF19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzgwMF19O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHdpZHRoOiAke3BvbGlzaGVkLnJlbSgyMDApfTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgJHtwb2xpc2hlZC5yZ2JhKHRoZW1lLmNvbG9ycy53aGl0ZSwgMC41KX07XG4gICAgICAgIC5leHAtcG9wcGVyLWl0ZW17XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5qaW11LXBvcHBlci0tYXJyb3c6OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzIwMF19ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5leHAtcG9wcGVyLXNlbGVjdGVkLWl0ZW0sIC5leHAtcG9wcGVyLWl0ZW06aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgIH1cblxuICBgXG59XG4iLCJpbXBvcnQgeyB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25JbnB1dFN0eWxlcyAocHJvcHMpOiBTZXJpYWxpemVkU3R5bGVzIHtcbiAgY29uc3QgdGhlbWU6IElNVGhlbWVWYXJpYWJsZXMgPSBwcm9wcy50aGVtZVxuICByZXR1cm4gY3NzYFxuICAgIC5jb21wb25lbnQtZXhwcmVzc2lvbi1pbnB1dHtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplQmFzZX07XG4gICAgICAuaW5wdXQtd3JhcHBlcntcbiAgICAgICAgaGVpZ2h0OiAke3BvbGlzaGVkLnJlbSgyNil9O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZWQtaW5wdXQtY292ZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMTAwJTtcbiAgICAgICAgJi5kcy1kaXNhYmxlZHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRzLWRpc2FibGVke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzIwMF19O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgPnNwYW4uZXJyb3Itd3JhcHBlcntcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwb2xpc2hlZC5yZ2JhKHRoZW1lLmNvbG9ycy5wYWxldHRlLmRhbmdlcls2MDBdLCAwLjUpfTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kcy1wbGFjZWhvbGRlcntcbiAgICAgICAgPnNwYW57XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUuZGFya1s0MDBdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy50cmFuc3BhcmVudH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5leHByZXNzaW9uLWJ1aWxkZXItdHJpZ2dlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAuZHJvcGRvd24tYnV0dG9uLWNvbnRlbnR7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5leHByZXNzaW9uLWJ1aWxkZXItdHJpZ2dlci1kcm9wZG93bntcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIC50cmlnZ2VyLWRyb3Bkb3duLXRvZ2dsZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbNjAwXX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFs2MDBdfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5leHByZXNzaW9uLWlucHV0e1xuICAgICAgICBoZWlnaHQ6ICR7cG9saXNoZWQucmVtKDI2KX07XG4gICAgICAgIC5qaW11LWlucHV0LCAuZHMtcGxhY2Vob2xkZXJ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgYFxufVxuIiwiZXhwb3J0IHsgZXhwcmVzc2lvbkJ1aWxkZXJTdHlsZXMgYXMgRXhwcmVzc2lvbkJ1aWxkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvZXhwcmVzc2lvbi1idWlsZGVyJ1xuZXhwb3J0IHsgZXhwcmVzc2lvbkVkaXRvclN0eWxlcyBhcyBFeHByZXNzaW9uRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2V4cHJlc3Npb24tZWRpdG9yJ1xuZXhwb3J0IHsgZXhwcmVzc2lvbklucHV0U3R5bGVzIGFzIEV4cHJlc3Npb25JbnB1dCB9IGZyb20gJy4vY29tcG9uZW50cy9leHByZXNzaW9uLWlucHV0J1xuIiwiaW1wb3J0IHsgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBFeHByZXNzaW9uLCB0eXBlIEppbXVGaWVsZFR5cGUgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBlbnVtIEV4cHJlc3Npb25CdWlsZGVyVHlwZSB7XG4gIEF0dHJpYnV0ZSA9ICdBVFRSSUJVVEUnLFxuICBTdGF0aXN0aWNzID0gJ1NUQVRJU1RJQ1MnLFxuICBFeHByZXNzaW9uID0gJ0VYUFJFU1NJT04nXG59XG5cbmVudW0gRnJvbVN0YXRpYyB7XG4gIFN0YXRpYyA9ICdTVEFUSUMnXG59XG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbklucHV0VHlwZSA9IHsgLi4uRnJvbVN0YXRpYywgLi4uRXhwcmVzc2lvbkJ1aWxkZXJUeXBlIH1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgdHlwZSBFeHByZXNzaW9uSW5wdXRUeXBlID0gRnJvbVN0YXRpYyB8IEV4cHJlc3Npb25CdWlsZGVyVHlwZVxuXG4vKipcbiAqIFByb3BzIG9mIGV4cHJlc3Npb24gYnVpbGRlciBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbkJ1aWxkZXJQcm9wcyB7XG4gIC8qKlxuICAgKiBXaWRnZXQncyBgdXNlRGF0YVNvdXJjZXNgLCB3aGljaCBtZWFucyBkYXRhIHNvdXJjZXMgdGhhdCB3aWRnZXQgaXMgdXNpbmcuXG4gICAqIFdpbGwgdXNlIHRoZXNlIGRhdGEgc291cmNlIHRvIGJ1aWxkIGV4cHJlc3Npb24uXG4gICAqL1xuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cbiAgLyoqXG4gICAqIEV4cHJlc3Npb24geW91IHdhbnQgdG8gc2hvdyBpbiB0aGUgYnVpbGRlci5cbiAgICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb24gfCBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj5cbiAgLyoqXG4gICAqIFRoZSBidWlsZGVyIGNvbnRhaW5zIHRocmVlIHRhYnMsIHBhc3MgaW4gYHR5cGVzYCB0byBzaG93IHNvbWUgb2YgdGhlIHRhYnMuXG4gICAqIGBFeHByZXNzaW9uQnVpbGRlclR5cGVgIGlzIGVudW0gdHlwZS5cbiAgICpcbiAgICogYGBgdHNcbiAgICogaW1wb3J0IHsgRXhwcmVzc2lvbkJ1aWxkZXJUeXBlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9leHByZXNzaW9uLWJ1aWxkZXInXG4gICAqIGBgYFxuICAgKi9cbiAgdHlwZXM6IEltbXV0YWJsZUFycmF5PEV4cHJlc3Npb25CdWlsZGVyVHlwZT5cbiAgLyoqXG4gICAqIElkIG9mIHdpZGdldC5cbiAgICogVXNlIHdpZGdldCBpZCB0byBnZXQgd2lkZ2V0IGNvbnRleHQsIGUuZy4gd2hldGhlciB3aWRnZXQgaXMgaW4gYSByZXBlYXRlZCBkYXRhIHNvdXJjZSBjb250ZXh0LlxuICAgKi9cbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEZpZWxkIHR5cGVzIGluIGF0dHJpYnV0ZSB0YWIuXG4gICAqL1xuICBmaWVsZFR5cGVzPzogSW1tdXRhYmxlQXJyYXk8SmltdUZpZWxkVHlwZT5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBXaWxsIGNhbGwgdGhlIGZ1bmN0aW9uIHdoZW4gY2xpY2sgYSBmaWVsZCBvciBjbGljayBpbnNlcnQgYnV0dG9uLlxuICAgKi9cbiAgb25DaGFuZ2U6IChleHByZXNzaW9uOiBFeHByZXNzaW9uKSA9PiB2b2lkXG59XG4iLCJpbXBvcnQgeyB0eXBlIEV4cHJlc3Npb25QYXJ0LCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBJbnRsU2hhcGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJbW11dGFibGVBcnJheSwgQ09OU1RBTlRTIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IEV4cHJlc3Npb25JbnB1dFR5cGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2hldGhlclVzZURzc01hdGNoRXhwRHNzIChwYXJ0OiBFeHByZXNzaW9uUGFydCwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGRzTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgaWYgKHBhcnQgJiYgcGFydC5kYXRhU291cmNlSWQgJiYgdXNlRGF0YVNvdXJjZXMpIHtcbiAgICBjb25zdCBpc1NlbGVjdGlvbkRhdGFWaWV3ID0gcGFydC5kYXRhU291cmNlSWQuc3BsaXQoJy0nKS5yZXZlcnNlKClbMF0gPT09IENPTlNUQU5UUy5TRUxFQ1RJT05fREFUQV9WSUVXX0lEXG4gICAgaWYgKGlzU2VsZWN0aW9uRGF0YVZpZXcpIHtcbiAgICAgIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHBhcnQuZGF0YVNvdXJjZUlkKVxuICAgICAgY29uc3QgbWFpbkRzID0gZHMgJiYgZHMuZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgICAgY29uc3QgbWFpbkRhdGFTb3VyY2VJZCA9IG1haW5EcyAmJiBtYWluRHMuaWRcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlcy5zb21lKHUgPT4gdT8ubWFpbkRhdGFTb3VyY2VJZCA9PT0gbWFpbkRhdGFTb3VyY2VJZClcbiAgICB9XG4gICAgcmV0dXJuICEhKHVzZURhdGFTb3VyY2VzLnNvbWUodSA9PiB1Py5kYXRhU291cmNlSWQgPT09IHBhcnQuZGF0YVNvdXJjZUlkKSAmJiBkc01hbmFnZXIgJiYgZHNNYW5hZ2VyLmdldERhdGFTb3VyY2UocGFydC5kYXRhU291cmNlSWQpKVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHByZXNzaW9uRnJvbVN0cmluZyAoZnJvbTogRXhwcmVzc2lvbklucHV0VHlwZSwgaW50bDogSW50bFNoYXBlKTogc3RyaW5nIHtcbiAgaWYgKCFmcm9tKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgc3dpdGNoIChmcm9tKSB7XG4gICAgY2FzZSBFeHByZXNzaW9uSW5wdXRUeXBlLkF0dHJpYnV0ZTpcbiAgICAgIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2F0dHJpYnV0ZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuYXR0cmlidXRlIH0pXG4gICAgY2FzZSBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpc3RpY3M6XG4gICAgICByZXR1cm4gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzdGF0aXN0aWNzJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zdGF0aXN0aWNzIH0pXG4gICAgY2FzZSBFeHByZXNzaW9uSW5wdXRUeXBlLkV4cHJlc3Npb246XG4gICAgICByZXR1cm4gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdleHByZXNzaW9uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5leHByZXNzaW9uIH0pXG4gICAgY2FzZSBFeHByZXNzaW9uSW5wdXRUeXBlLlN0YXRpYzpcbiAgICAgIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3N0YXRpYycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc3RhdGljIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJ1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9zZXJ2ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9sYXlvdXRzX2xheW91dF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9saWIvZXhwcmVzc2lvbi1idWlsZGVyL3N0eWxlcydcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGVzIH0gZnJvbSAnamltdS10aGVtZSdcbnJlZ2lzdGVyU3R5bGVzKCdqaW11LXVpL2FkdmFuY2VkL2V4cHJlc3Npb24tYnVpbGRlci8nLCBzdHlsZXMpXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2V4cHJlc3Npb24tYnVpbGRlcidcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==