System.register(["jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/csvjson/index.js":
/*!***************************************!*\
  !*** ./node_modules/csvjson/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var app 		= __webpack_require__(/*! ./src/app */ "./node_modules/csvjson/src/app.js");
var stream 		= __webpack_require__(/*! ./src/stream */ "./node_modules/csvjson/src/stream.js");
app.stream 		= stream;
module.exports 	= app;

/***/ }),

/***/ "./node_modules/csvjson/src/app.js":
/*!*****************************************!*\
  !*** ./node_modules/csvjson/src/app.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var helper = __webpack_require__(/*! ./helper.js */ "./node_modules/csvjson/src/helper.js");
module.exports = {
    toObject        : toObject,
    toArray         : toArray,
    toColumnArray   : toColumnArray,
    toSchemaObject  : toSchemaObject,
    toCSV           : toCSV
}


function toColumnArray(data, opts){

    opts = opts || { };

    var delimiter   = (opts.delimiter || ',');
    var quote       = helper.getQuoteChar(opts.quote);
    var content     = data;
    var headers     = null;

    if(typeof(content) !== "string"){
        throw new Error("Invalid input, input data should be a string");
    }

    content     = content.split(/[\n\r]+/ig);

    if(typeof(opts.headers) === "string"){
        headers = opts.headers.split(/[\n\r]+/ig);
        headers = quote ?
                helper.convertArray(headers.shift(), delimiter, quote) :
                headers.shift().split(delimiter);
    }else{
        headers = quote ?
                helper.convertArray(content.shift(), delimiter, quote) :
                content.shift().split(delimiter);
    }


    var hashData    = { };

    headers.forEach(function(item){
        hashData[item] = [];
    });

    content.forEach(function(item){
        if(item){
            item = quote ?
                  helper.convertArray(item, delimiter, quote) :
                  item.split(delimiter);
            item.forEach(function(val, index){
                hashData[headers[index]].push(helper.removeQuote(val));
            });
        }
    });

    return hashData;
}

function toObject(data, opts){

    opts = opts || { };

    var delimiter   = (opts.delimiter || ',');
    var quote       = helper.getQuoteChar(opts.quote);
    var content     = data;
    var headers     = null;

    if(typeof(content) !== "string"){
        throw new Error("Invalid input, input data should be a string");
    }

    content = content.split(/[\n\r]+/ig);

    if(typeof(opts.headers) === "string"){
        headers = opts.headers.split(/[\n\r]+/ig);
        headers = quote ?
                helper.convertArray(headers.shift(), delimiter, quote) :
                headers.shift().split(delimiter);
    }else{
        headers = quote ?
                helper.convertArray(content.shift(), delimiter, quote) :
                content.shift().split(delimiter);
    }

    var hashData = [ ];
    content.forEach(function(item){
        if(item){
          item = quote ?
                helper.convertArray(item, delimiter, quote) :
                item.split(delimiter);
          var hashItem = { };
          headers.forEach(function(headerItem, index){
              hashItem[headerItem] = helper.removeQuote(item[index]);
          });
          hashData.push(hashItem);
        }
    });
    return hashData;
}

function toSchemaObject(data, opts){

    opts = opts || { };

    var delimiter   = (opts.delimiter || ',');
    var quote       = helper.getQuoteChar(opts.quote);
    var content     = data;
    var headers     = null;
    if(typeof(content) !== "string"){
        throw new Error("Invalid input, input should be a string");
    }

    content         = content.split(/[\n\r]+/ig);


    if(typeof(opts.headers) === "string"){
        headers = opts.headers.split(/[\n\r]+/ig);
        headers = quote ?
                helper.convertArray(headers.shift(), delimiter, quote) :
                headers.shift().split(delimiter);
    }else{
        headers = quote ?
                helper.convertArray(content.shift(), delimiter, quote) :
                content.shift().split(delimiter);
    }


    var hashData    = [ ];

    content.forEach(function(item){
        if(item){
          item = quote ?
                helper.convertArray(item, delimiter, quote) :
                item.split(delimiter);
            var schemaObject = {};
            item.forEach(function(val, index){
                helper.addDataInSchema(headers[index], val, schemaObject , delimiter, quote);
            });
            hashData.push(schemaObject);
        }
    });

    return hashData;
}

function toArray(data, opts){

    opts = opts || { };

    var delimiter   = (opts.delimiter || ',');
    var quote       = helper.getQuoteChar(opts.quote);
    var content     = data;

    if(typeof(content) !== "string"){
        throw new Error("Invalid input, input data should be a string");
    }

    content = content.split(/[\n\r]+/ig);
    var arrayData = [ ];
    content.forEach(function(item){
        if(item){
            item = quote ?
                helper.convertArray(item, delimiter, quote) :
                item.split(delimiter);

            item = item.map(function(cItem){
                return helper.removeQuote(cItem);
            });
            arrayData.push(item);
        }
    });
    return arrayData;
}

function toCSV(data, opts){

    opts                = (opts || { });
    opts.delimiter      = (opts.delimiter || ',');
    opts.wrap           = (opts.wrap || '');
    opts.arrayDenote    = (opts.arrayDenote && String(opts.arrayDenote).trim() ? opts.arrayDenote : '[]');
    opts.objectDenote   = (opts.objectDenote && String(opts.objectDenote).trim() ? opts.objectDenote : '.');
    opts.detailedOutput = (typeof(opts.detailedOutput) !== "boolean" ? true : opts.detailedOutput);
    opts.headers        = String(opts.headers).toLowerCase();
    var csvJSON         = { };
    var csvData         = "";

    if(!opts.headers.match(/none|full|relative|key/)){
      opts.headers = 'full';
    }else{
      opts.headers = opts.headers.match(/none|full|relative|key/)[0];
    }

    if(opts.wrap === true){
        opts.wrap = '"';
    }

    if(typeof(data) === "string"){
        data = JSON.parse(data);
    }

    helper.toCsv(data, csvJSON, "", 0, opts);

    var headers = helper.getHeaders(opts.headers, csvJSON, opts);

    if(headers){
      if(opts.wrap){
        headers = headers.map(function(item){
          return opts.wrap + item + opts.wrap;
        });
      }
      csvData = headers.join(opts.delimiter);
    }

    var bigArrayLen = helper.getLengthyItem(csvJSON);
    var keys        = Object.keys(csvJSON);
    var row         = [ ];

    var replaceNewLinePattern = /\n|\r/g;
    if(!opts.wrap){
        replaceNewLinePattern = new RegExp('\n|\r|' + opts.delimiter, 'g');
    }


    for(var i = 0; i < bigArrayLen; i++){
        row = [ ];
        for(var j = 0; j < keys.length; j++){
            if(csvJSON[keys[j]][i]){
                csvJSON[keys[j]][i] = csvJSON[keys[j]][i].replace(replaceNewLinePattern, '\t');
                if(opts.wrap){
                    csvJSON[keys[j]][i] = opts.wrap + csvJSON[keys[j]][i] + opts.wrap;
                }
                row[row.length] = csvJSON[keys[j]][i];
            }else{
                row[row.length] = "";
            }
        }
      csvData += '\n' + row.join(opts.delimiter);
    }
    return csvData;
}


/***/ }),

/***/ "./node_modules/csvjson/src/helper.js":
/*!********************************************!*\
  !*** ./node_modules/csvjson/src/helper.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
    getQuoteChar : getQuoteChar,
    dataType : dataType,
    toCsv : toCsv,
    putData : putData,
    allObjsOrArray : allObjsOrArray,
    getHeaders : getHeaders,
    getLengthyItem : getLengthyItem,
    addDataInSchema : addDataInSchema,
    removeQuote : removeQuote,
    arrayToCsv : arrayToCsv,
    objectToCsv : objectToCsv,
    convertArray : convertArray,
    csvToArray : csvToArray
}

function getQuoteChar(q){
  if(typeof(q) === "string"){
    return q;
  }else if(q === true){
    return '"';
  }
  return null;
}

function dataType(arg) {
    if (arg === null) {
        return 'null';
    }
    else if (arg && (arg.nodeType === 1 || arg.nodeType === 9)) {
        return 'element';
    }
    var type = (Object.prototype.toString.call(arg)).match(/\[object (.*?)\]/)[1].toLowerCase();
    if (type === 'number') {
        if (isNaN(arg)) {
            return 'nan';
        }
        if (!isFinite(arg)) {
            return 'infinity';
        }
    }
    return type;
}


function toCsv(data, table, parent, row, opt){
    if(dataType(data) === 'undefined'){
        return putData('', table, parent, row, opt);
    }else if(dataType(data) === 'null'){
        return putData('null', table, parent, row, opt);
    }else if(Array.isArray(data)){
        return arrayToCsv(data, table, parent, row, opt);
    }else if(typeof(data) === "object"){
        return objectToCsv(data, table, parent, row, opt);
    }else{
        return putData(String(data), table, parent, row, opt);
    }
}

function putData(data, table, parent, row, opt){
  if(!table || !table[parent]){
      table[parent] = [ ];
  }
  if(row < table[parent].length){
    row = table[parent].length;
  }
  table[parent][row] = data;
  return table;
}


function allObjsOrArray(array){
  return array.every(function(item){
        var datatype = dataType(item);
        if(!datatype.match(/array|object/)){
          return true;
        }
        return false;
  });
}


function getHeaders(headerType, table, opt){
  var keyMatchPattern       = /([^\[\]\.]+)$/;
  var relativeMatchPattern  = /\[\]\.?([^\[\]]+)$/;
  switch(headerType){
    case "none":
      return null;
    case "full":
      return Object.keys(table);
    case "key":
      return Object.keys(table).map(function(header){
        var head = header.match(keyMatchPattern);
        if(head && head.length === 2){
          return head[1];
        }
        return header;
      });
    case "relative":
      return Object.keys(table).map(function(header){
        var head = header.match(relativeMatchPattern);
        if(head && head.length === 2){
          return head[1];
        }
        return header;
      });
  }
}

function getLengthyItem(table){
  var len = 0;
  Object.keys(table).forEach(function(item){
      if(Array.isArray(table[item]) && table[item].length > len){
        len = table[item].length;
      }
  });
  return len;
}

function addDataInSchema(header, item, schema, delimiter, quote){
    var match = header.match(/\[*[\d]\]\.(\w+)|\.|\[\]|\[(.)\]|-|\+/ig);
    var headerName, currentPoint;
    if(match){
        var testMatch = match[0];
        if(match.indexOf('-') !== -1){
            return true;
        }else if(match.indexOf('.') !== -1){
            var headParts = header.split('.');
            currentPoint = headParts.shift();
            schema[currentPoint] = schema[currentPoint] || {};
            addDataInSchema(headParts.join('.'), item, schema[currentPoint], delimiter, quote);
        }else if(match.indexOf('[]') !== -1){
            headerName = header.replace(/\[\]/ig,'');
            if(!schema[headerName]){
            schema[headerName] = [];
            }
            schema[headerName].push(item);
        }else if(/\[*[\d]\]\.(\w+)/.test(testMatch)){
            headerName = header.split('[').shift();
            var index = parseInt(testMatch.match(/\[(.)\]/).pop(),10);
            currentPoint = header.split('.').pop();
            schema[headerName] = schema[headerName] || [];
            schema[headerName][index] = schema[headerName][index] || {};
            schema[headerName][index][currentPoint] = item;
        }else if(/\[(.)\]/.test(testMatch)){
            var delimiter = testMatch.match(/\[(.)\]/).pop();
            headerName = header.replace(/\[(.)\]/ig,'');
            schema[headerName] = convertArray(item, delimiter, quote);
        }else if(match.indexOf('+') !== -1){
            headerName = header.replace(/\+/ig,"");
            schema[headerName] = Number(item);
        }
    }else{
        schema[header] = removeQuote(item);
    }
    return schema ;
}

function removeQuote(str){
    if(str){
        return String(str).trim().replace(/^["|'](.*)["|']$/, '$1');
    }
    return "";
}

function arrayToCsv(data, table, parent, row, opt){
    if(allObjsOrArray(data)){
      return putData(data.join(';'), table, parent + opt.arrayDenote, row, opt);
    }
    data.forEach(function(item, index){
        return toCsv(item, table, parent + opt.arrayDenote, index, opt);
    });
}

function objectToCsv(data, table, parent, row, opt){
  Object.keys(data).forEach(function(item){
      return toCsv(data[item], table, parent + opt.objectDenote + item, row, opt);
  });
}

function convertArray(str, delimiter, quote) {
    if(quote && str.indexOf(quote) !== -1){
      return csvToArray(str, delimiter, quote);
    }
    var output = [];
    var arr = str.split(delimiter);
    arr.forEach(function(val) {
        var trimmed = val.trim();
        output.push(trimmed);
    });
    return output;
}

function csvToArray(text, delimit, quote) {

    delimit = delimit || ",";
    quote   = quote || '"';

    var value = new RegExp("(?!\\s*$)\\s*(?:" +  quote + "([^" +  quote + "\\\\]*(?:\\\\[\\S\\s][^" +  quote + "\\\\]*)*)" +  quote + "|([^" +  delimit  +  quote + "\\s\\\\]*(?:\\s+[^" +  delimit  +  quote + "\\s\\\\]+)*))\\s*(?:" +  delimit + "|$)", "g");

    var a = [ ];

    text.replace(value,
        function(m0, m1, m2) {
            if(m1 !== undefined){
                a.push(m1.replace(/\\'/g, "'"));
            }else if(m2 !== undefined){
                a.push(m2);
            }
            return '';
        }
    );

    if (/,\s*$/.test(text)){
        a.push('');
    }
    return a;
}


/***/ }),

/***/ "./node_modules/csvjson/src/stream.js":
/*!********************************************!*\
  !*** ./node_modules/csvjson/src/stream.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var app = __webpack_require__(/*! ./app.js */ "./node_modules/csvjson/src/app.js");

module.exports = {
	toColumnArray: toColumnArray,
	toObject: toObject,
	toSchemaObject: toSchemaObject,
	toArray: toArray,
	transform: transform,
	stringify: stringify
}

function chopLines(str) {
	return str.split(/[\n\r]/ig);
}

function transform(func) {
	var stream = __webpack_require__(/*! stream */ "?3fb3");
	return new stream.Transform({
		readableObjectMode: true,
		writableObjectMode: true,
		transform: func
	});
}

function stringify(space) {
	return transform(function (data, encoding, callback) {
		this.push(JSON.stringify(data, null, space))
		callback()
	});
}

function _toColumnArray(data, encoding, callback, trans) {
	var lines = chopLines(data.toString());
	if (!trans._head) {
		var head = lines.shift();
		trans._head = head;
		trans._opts.headers = head;
	}
	this.push(app.toColumnArray(lines.join('\n'), trans._opts))
	callback()
}

function toColumnArray(opts) {
	opts = opts || {};
	var trans = transform(function (data, encoding, callback) {
		_toColumnArray.call(this, data, encoding, callback, trans);
	});
	trans._head = opts.headers ? opts.headers : null;
	trans._opts = opts;
	return trans;
}

function _toObject(data, encoding, callback, trans) {
	var lines = chopLines(data.toString());
	if (!trans._head) {
		var head = lines.shift();
		trans._head = head;
		trans._opts.headers = head;
	}
	this.push(app.toObject(lines.join('\n'), trans._opts))
	callback()
}

function toObject(opts) {
	opts = opts || {};
	var trans = transform(function (data, encoding, callback) {
		_toObject.call(this, data, encoding, callback, trans);
	});
	trans._head = opts.headers ? opts.headers : null;
	trans._opts = opts;
	return trans;
}

function _toSchemaObject(data, encoding, callback, trans) {
	var lines = chopLines(data.toString());
	if (!trans._head) {
		var head = lines.shift();
		trans._head = head;
		trans._opts.headers = head;
	}
	this.push(app.toSchemaObject(lines.join('\n'), trans._opts))
	callback()
}

function toSchemaObject(opts) {
	opts = opts || {};
	var trans = transform(function (data, encoding, callback) {
		_toSchemaObject.call(this, data, encoding, callback, trans);
	});
	trans._head = opts.headers ? opts.headers : null;
	trans._opts = opts;
	return trans;
}

function _toArray(data, encoding, callback, trans) {
	var lines = chopLines(data.toString());
	this.push(app.toArray(lines.join('\n'), trans._opts))
	callback()
}

function toArray(opts) {
	opts = opts || {};
	var trans = transform(function (data, encoding, callback) {
		_toArray.call(this, data, encoding, callback, trans);
	});
	trans._opts = opts;
	return trans;
}

/***/ }),

/***/ "./node_modules/rc-upload/es/AjaxUploader.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-upload/es/AjaxUploader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./request */ "./node_modules/rc-upload/es/request.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./uid */ "./node_modules/rc-upload/es/uid.js");
/* harmony import */ var _attr_accept__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./attr-accept */ "./node_modules/rc-upload/es/attr-accept.js");
/* harmony import */ var _traverseFileTree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./traverseFileTree */ "./node_modules/rc-upload/es/traverseFileTree.js");












var _excluded = ["component", "prefixCls", "className", "classNames", "disabled", "id", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave"];







var AjaxUploader = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(AjaxUploader, _Component);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__["default"])(AjaxUploader);
  function AjaxUploader() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AjaxUploader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      uid: (0,_uid__WEBPACK_IMPORTED_MODULE_16__["default"])()
    };
    _this.reqs = {};
    _this.fileInput = void 0;
    _this._isMounted = void 0;
    _this.onChange = function (e) {
      var _this$props = _this.props,
        accept = _this$props.accept,
        directory = _this$props.directory;
      var files = e.target.files;
      var acceptedFiles = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(files).filter(function (file) {
        return !directory || (0,_attr_accept__WEBPACK_IMPORTED_MODULE_17__["default"])(file, accept);
      });
      _this.uploadFiles(acceptedFiles);
      _this.reset();
    };
    _this.onClick = function (e) {
      var el = _this.fileInput;
      if (!el) {
        return;
      }
      var _this$props2 = _this.props,
        children = _this$props2.children,
        onClick = _this$props2.onClick;
      if (children && children.type === 'button') {
        var parent = el.parentNode;
        parent.focus();
        parent.querySelector('button').blur();
      }
      el.click();
      if (onClick) {
        onClick(e);
      }
    };
    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick(e);
      }
    };
    _this.onFileDrop = function (e) {
      var multiple = _this.props.multiple;
      e.preventDefault();
      if (e.type === 'dragover') {
        return;
      }
      if (_this.props.directory) {
        (0,_traverseFileTree__WEBPACK_IMPORTED_MODULE_18__["default"])(Array.prototype.slice.call(e.dataTransfer.items), _this.uploadFiles, function (_file) {
          return (0,_attr_accept__WEBPACK_IMPORTED_MODULE_17__["default"])(_file, _this.props.accept);
        });
      } else {
        var files = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(e.dataTransfer.files).filter(function (file) {
          return (0,_attr_accept__WEBPACK_IMPORTED_MODULE_17__["default"])(file, _this.props.accept);
        });
        if (multiple === false) {
          files = files.slice(0, 1);
        }
        _this.uploadFiles(files);
      }
    };
    _this.uploadFiles = function (files) {
      var originFiles = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(files);
      var postFiles = originFiles.map(function (file) {
        // eslint-disable-next-line no-param-reassign
        file.uid = (0,_uid__WEBPACK_IMPORTED_MODULE_16__["default"])();
        return _this.processFile(file, originFiles);
      });
      // Batch upload files
      Promise.all(postFiles).then(function (fileList) {
        var onBatchStart = _this.props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function (_ref) {
          var origin = _ref.origin,
            parsedFile = _ref.parsedFile;
          return {
            file: origin,
            parsedFile: parsedFile
          };
        }));
        fileList.filter(function (file) {
          return file.parsedFile !== null;
        }).forEach(function (file) {
          _this.post(file);
        });
      });
    };
    /**
     * Process file before upload. When all the file is ready, we start upload.
     */
    _this.processFile = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee(file, fileList) {
        var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
        return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = _this.props.beforeUpload;
              transformedFile = file;
              if (!beforeUpload) {
                _context.next = 14;
                break;
              }
              _context.prev = 3;
              _context.next = 6;
              return beforeUpload(file, fileList);
            case 6:
              transformedFile = _context.sent;
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              // Rejection will also trade as false
              transformedFile = false;
            case 12:
              if (!(transformedFile === false)) {
                _context.next = 14;
                break;
              }
              return _context.abrupt("return", {
                origin: file,
                parsedFile: null,
                action: null,
                data: null
              });
            case 14:
              // Get latest action
              action = _this.props.action;
              if (!(typeof action === 'function')) {
                _context.next = 21;
                break;
              }
              _context.next = 18;
              return action(file);
            case 18:
              mergedAction = _context.sent;
              _context.next = 22;
              break;
            case 21:
              mergedAction = action;
            case 22:
              // Get latest data
              data = _this.props.data;
              if (!(typeof data === 'function')) {
                _context.next = 29;
                break;
              }
              _context.next = 26;
              return data(file);
            case 26:
              mergedData = _context.sent;
              _context.next = 30;
              break;
            case 29:
              mergedData = data;
            case 30:
              parsedData =
              // string type is from legacy `transformFile`.
              // Not sure if this will work since no related test case works with it
              ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile ? transformedFile : file;
              if (parsedData instanceof File) {
                parsedFile = parsedData;
              } else {
                parsedFile = new File([parsedData], file.name, {
                  type: file.type
                });
              }
              mergedParsedFile = parsedFile;
              mergedParsedFile.uid = file.uid;
              return _context.abrupt("return", {
                origin: file,
                data: mergedData,
                parsedFile: mergedParsedFile,
                action: mergedAction
              });
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 9]]);
      }));
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    _this.saveFileInput = function (node) {
      _this.fileInput = node;
    };
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AjaxUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: "post",
    value: function post(_ref3) {
      var _this2 = this;
      var data = _ref3.data,
        origin = _ref3.origin,
        action = _ref3.action,
        parsedFile = _ref3.parsedFile;
      if (!this._isMounted) {
        return;
      }
      var _this$props3 = this.props,
        onStart = _this$props3.onStart,
        customRequest = _this$props3.customRequest,
        name = _this$props3.name,
        headers = _this$props3.headers,
        withCredentials = _this$props3.withCredentials,
        method = _this$props3.method;
      var uid = origin.uid;
      var request = customRequest || _request__WEBPACK_IMPORTED_MODULE_15__["default"];
      var requestOption = {
        action: action,
        filename: name,
        data: data,
        file: parsedFile,
        headers: headers,
        withCredentials: withCredentials,
        method: method || 'post',
        onProgress: function onProgress(e) {
          var onProgress = _this2.props.onProgress;
          onProgress === null || onProgress === void 0 ? void 0 : onProgress(e, parsedFile);
        },
        onSuccess: function onSuccess(ret, xhr) {
          var onSuccess = _this2.props.onSuccess;
          onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(ret, parsedFile, xhr);
          delete _this2.reqs[uid];
        },
        onError: function onError(err, ret) {
          var onError = _this2.props.onError;
          onError === null || onError === void 0 ? void 0 : onError(err, ret, parsedFile);
          delete _this2.reqs[uid];
        }
      };
      onStart(origin);
      this.reqs[uid] = request(requestOption);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        uid: (0,_uid__WEBPACK_IMPORTED_MODULE_16__["default"])()
      });
    }
  }, {
    key: "abort",
    value: function abort(file) {
      var reqs = this.reqs;
      if (file) {
        var uid = file.uid ? file.uid : file;
        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }
        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }
          delete reqs[uid];
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _clsx;
      var _this$props4 = this.props,
        Tag = _this$props4.component,
        prefixCls = _this$props4.prefixCls,
        className = _this$props4.className,
        _this$props4$classNam = _this$props4.classNames,
        classNames = _this$props4$classNam === void 0 ? {} : _this$props4$classNam,
        disabled = _this$props4.disabled,
        id = _this$props4.id,
        style = _this$props4.style,
        _this$props4$styles = _this$props4.styles,
        styles = _this$props4$styles === void 0 ? {} : _this$props4$styles,
        multiple = _this$props4.multiple,
        accept = _this$props4.accept,
        capture = _this$props4.capture,
        children = _this$props4.children,
        directory = _this$props4.directory,
        openFileDialogOnClick = _this$props4.openFileDialogOnClick,
        onMouseEnter = _this$props4.onMouseEnter,
        onMouseLeave = _this$props4.onMouseLeave,
        otherProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props4, _excluded);
      var cls = classnames__WEBPACK_IMPORTED_MODULE_13___default()((_clsx = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx, prefixCls, true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx, "".concat(prefixCls, "-disabled"), disabled), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_clsx, className, className), _clsx));
      // because input don't have directory/webkitdirectory type declaration
      var dirProps = directory ? {
        directory: 'directory',
        webkitdirectory: 'webkitdirectory'
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? this.onClick : function () {},
        onKeyDown: openFileDialogOnClick ? this.onKeyDown : function () {},
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, events, {
        className: cls,
        role: "button",
        style: style
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_14__["default"])(otherProps, {
        aria: true,
        data: true
      }), {
        id: id,
        disabled: disabled,
        type: "file",
        ref: this.saveFileInput,
        onClick: function onClick(e) {
          return e.stopPropagation();
        } // https://github.com/ant-design/ant-design/issues/19948
        ,
        key: this.state.uid,
        style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
          display: 'none'
        }, styles.input),
        className: classNames.input,
        accept: accept
      }, dirProps, {
        multiple: multiple,
        onChange: this.onChange
      }, capture != null ? {
        capture: capture
      } : {})), children);
    }
  }]);
  return AjaxUploader;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AjaxUploader);

/***/ }),

/***/ "./node_modules/rc-upload/es/Upload.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-upload/es/Upload.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _AjaxUploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AjaxUploader */ "./node_modules/rc-upload/es/AjaxUploader.js");





/* eslint react/prop-types:0 */


function empty() {}
var Upload = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Upload, _Component);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Upload);
  function Upload() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Upload);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.uploader = void 0;
    _this.saveUploader = function (node) {
      _this.uploader = node;
    };
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Upload, [{
    key: "abort",
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["default"].createElement(_AjaxUploader__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]);
  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);
Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);

/***/ }),

/***/ "./node_modules/rc-upload/es/attr-accept.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-upload/es/attr-accept.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();
      // This is something like */*,*  allow all files
      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      }
      // like .jpg, .png
      if (validType.charAt(0) === '.') {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];
        if (lowerType === '.jpg' || lowerType === '.jpeg') {
          affixList = ['.jpg', '.jpeg'];
        }
        return affixList.some(function (affix) {
          return lowerFileName.endsWith(affix);
        });
      }
      // This is something like a image/* mime type
      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      // Full match
      if (mimeType === validType) {
        return true;
      }
      // Invalidate type should skip
      if (/^\w+$/.test(validType)) {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
        return true;
      }
      return false;
    });
  }
  return true;
});

/***/ }),

/***/ "./node_modules/rc-upload/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-upload/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ "./node_modules/rc-upload/es/Upload.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-upload/es/request.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-upload/es/request.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ upload)
/* harmony export */ });
function getError(option, xhr) {
  var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}
function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
function upload(option) {
  // eslint-disable-next-line no-undef
  var xhr = new XMLHttpRequest();
  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }
  // eslint-disable-next-line no-undef
  var formData = new FormData();
  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      var value = option.data[key];
      // support key-value array data
      if (Array.isArray(value)) {
        value.forEach(function (item) {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append("".concat(key, "[]"), item);
        });
        return;
      }
      formData.append(key, value);
    });
  }
  // eslint-disable-next-line no-undef
  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }
  xhr.onerror = function error(e) {
    option.onError(e);
  };
  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }
    return option.onSuccess(getBody(xhr), xhr);
  };
  xhr.open(option.method, option.action, true);
  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  var headers = option.headers || {};
  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }
  Object.keys(headers).forEach(function (h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-upload/es/traverseFileTree.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-upload/es/traverseFileTree.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];
  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);
      // Check if all the file has been viewed
      var isFinished = !entryList.length;
      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }
  sequence();
}
var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var _traverseFileTree = function _traverseFileTree(item, path) {
    if (!item) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    item.path = path || '';
    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            });
            // eslint-disable-next-line no-param-reassign
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };
  files.forEach(function (file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (traverseFileTree);

/***/ }),

/***/ "./node_modules/rc-upload/es/uid.js":
/*!******************************************!*\
  !*** ./node_modules/rc-upload/es/uid.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uid)
/* harmony export */ });
var now = +new Date();
var index = 0;
function uid() {
  // eslint-disable-next-line no-plusplus
  return "rc-upload-".concat(now, "-").concat(++index);
}

/***/ }),

/***/ "./node_modules/rc-util/es/pickAttrs.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-util/es/pickAttrs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pickAttrs)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ "./node_modules/rc-util/es/warning.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/warning.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   call: () => (/* binding */ call),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   note: () => (/* binding */ note),
/* harmony export */   noteOnce: () => (/* binding */ noteOnce),
/* harmony export */   preMessage: () => (/* binding */ preMessage),
/* harmony export */   resetWarned: () => (/* binding */ resetWarned),
/* harmony export */   warning: () => (/* binding */ warning),
/* harmony export */   warningOnce: () => (/* binding */ warningOnce)
/* harmony export */ });
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ "./jimu-ui/basic/lib/file-uploader/index.tsx":
/*!***************************************************!*\
  !*** ./jimu-ui/basic/lib/file-uploader/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploader: () => (/* binding */ FileUploader)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-upload */ "./node_modules/rc-upload/es/index.js");
/* harmony import */ var csvjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csvjson */ "./node_modules/csvjson/index.js");
/* harmony import */ var csvjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvjson__WEBPACK_IMPORTED_MODULE_2__);



class FileUploader extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onUploadSuccess = (result, file, xhr) => {
            const reader = new FileReader();
            reader.onload = () => {
                new Promise((resolve, reject) => { resolve(csvjson__WEBPACK_IMPORTED_MODULE_2__.toObject(reader.result)); }).then((records) => {
                    this.props.onUploadSuccess && this.props.onUploadSuccess({ records, name: file.name, id: file.uid.replace('rc', 'exb') });
                });
            };
            reader.readAsBinaryString(file);
        };
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(rc_upload__WEBPACK_IMPORTED_MODULE_1__["default"], { id: 'fileSelect', onSuccess: this.onUploadSuccess, style: { width: '60px', height: '20px' }, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [this.props.className]: !!this.props.className }), accept: this.props.accept }, "Upload"));
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

/***/ "?3fb3":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

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
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _regeneratorRuntime)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : String(i);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
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
/*!*****************************************!*\
  !*** ./jimu-ui/basic/file-uploader.tsx ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileUploader: () => (/* reexport safe */ _lib_file_uploader__WEBPACK_IMPORTED_MODULE_0__.FileUploader)
/* harmony export */ });
/* harmony import */ var _lib_file_uploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/file-uploader */ "./jimu-ui/basic/lib/file-uploader/index.tsx");
// import * as styles from './lib/file-uploader/styles';
// registerStyles('jimu-ui/basic/file-uploader/', {
//   componentStyles: styles
// });


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRCw0QkFBNEI7QUFDNUIsTUFBTTtBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzdmpzb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3Zqc29uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3Zqc29uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3Zqc29uL3NyYy9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvQWpheFVwbG9hZGVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9hdHRyLWFjY2VwdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL3RyYXZlcnNlRmlsZVRyZWUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvdWlkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9waWNrQXR0cnMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2ZpbGUtdXBsb2FkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2lnbm9yZWR8L1VzZXJzL21pbmc4NTI1L3JlcG9zL3dyZXBvcy9FeHBlcmllbmNlQnVpbGRlci9jbGllbnQvbm9kZV9tb2R1bGVzL2Nzdmpzb24vc3JjfHN0cmVhbSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9maWxlLXVwbG9hZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwidmFyIGFwcCBcdFx0PSByZXF1aXJlKCcuL3NyYy9hcHAnKTtcbnZhciBzdHJlYW0gXHRcdD0gcmVxdWlyZSgnLi9zcmMvc3RyZWFtJyk7XG5hcHAuc3RyZWFtIFx0XHQ9IHN0cmVhbTtcbm1vZHVsZS5leHBvcnRzIFx0PSBhcHA7IiwidmFyIGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0b09iamVjdCAgICAgICAgOiB0b09iamVjdCxcbiAgICB0b0FycmF5ICAgICAgICAgOiB0b0FycmF5LFxuICAgIHRvQ29sdW1uQXJyYXkgICA6IHRvQ29sdW1uQXJyYXksXG4gICAgdG9TY2hlbWFPYmplY3QgIDogdG9TY2hlbWFPYmplY3QsXG4gICAgdG9DU1YgICAgICAgICAgIDogdG9DU1Zcbn1cblxuXG5mdW5jdGlvbiB0b0NvbHVtbkFycmF5KGRhdGEsIG9wdHMpe1xuXG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgdmFyIGRlbGltaXRlciAgID0gKG9wdHMuZGVsaW1pdGVyIHx8ICcsJyk7XG4gICAgdmFyIHF1b3RlICAgICAgID0gaGVscGVyLmdldFF1b3RlQ2hhcihvcHRzLnF1b3RlKTtcbiAgICB2YXIgY29udGVudCAgICAgPSBkYXRhO1xuICAgIHZhciBoZWFkZXJzICAgICA9IG51bGw7XG5cbiAgICBpZih0eXBlb2YoY29udGVudCkgIT09IFwic3RyaW5nXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0LCBpbnB1dCBkYXRhIHNob3VsZCBiZSBhIHN0cmluZ1wiKTtcbiAgICB9XG5cbiAgICBjb250ZW50ICAgICA9IGNvbnRlbnQuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG5cbiAgICBpZih0eXBlb2Yob3B0cy5oZWFkZXJzKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgIGhlYWRlcnMgPSBvcHRzLmhlYWRlcnMuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG4gICAgICAgIGhlYWRlcnMgPSBxdW90ZSA/XG4gICAgICAgICAgICAgICAgaGVscGVyLmNvbnZlcnRBcnJheShoZWFkZXJzLnNoaWZ0KCksIGRlbGltaXRlciwgcXVvdGUpIDpcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnNoaWZ0KCkuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaGVhZGVycyA9IHF1b3RlID9cbiAgICAgICAgICAgICAgICBoZWxwZXIuY29udmVydEFycmF5KGNvbnRlbnQuc2hpZnQoKSwgZGVsaW1pdGVyLCBxdW90ZSkgOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2hpZnQoKS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIH1cblxuXG4gICAgdmFyIGhhc2hEYXRhICAgID0geyB9O1xuXG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICBoYXNoRGF0YVtpdGVtXSA9IFtdO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICBpZihpdGVtKXtcbiAgICAgICAgICAgIGl0ZW0gPSBxdW90ZSA/XG4gICAgICAgICAgICAgICAgICBoZWxwZXIuY29udmVydEFycmF5KGl0ZW0sIGRlbGltaXRlciwgcXVvdGUpIDpcbiAgICAgICAgICAgICAgICAgIGl0ZW0uc3BsaXQoZGVsaW1pdGVyKTtcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbih2YWwsIGluZGV4KXtcbiAgICAgICAgICAgICAgICBoYXNoRGF0YVtoZWFkZXJzW2luZGV4XV0ucHVzaChoZWxwZXIucmVtb3ZlUXVvdGUodmFsKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc2hEYXRhO1xufVxuXG5mdW5jdGlvbiB0b09iamVjdChkYXRhLCBvcHRzKXtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHsgfTtcblxuICAgIHZhciBkZWxpbWl0ZXIgICA9IChvcHRzLmRlbGltaXRlciB8fCAnLCcpO1xuICAgIHZhciBxdW90ZSAgICAgICA9IGhlbHBlci5nZXRRdW90ZUNoYXIob3B0cy5xdW90ZSk7XG4gICAgdmFyIGNvbnRlbnQgICAgID0gZGF0YTtcbiAgICB2YXIgaGVhZGVycyAgICAgPSBudWxsO1xuXG4gICAgaWYodHlwZW9mKGNvbnRlbnQpICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCwgaW5wdXQgZGF0YSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgfVxuXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG5cbiAgICBpZih0eXBlb2Yob3B0cy5oZWFkZXJzKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgIGhlYWRlcnMgPSBvcHRzLmhlYWRlcnMuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG4gICAgICAgIGhlYWRlcnMgPSBxdW90ZSA/XG4gICAgICAgICAgICAgICAgaGVscGVyLmNvbnZlcnRBcnJheShoZWFkZXJzLnNoaWZ0KCksIGRlbGltaXRlciwgcXVvdGUpIDpcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnNoaWZ0KCkuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaGVhZGVycyA9IHF1b3RlID9cbiAgICAgICAgICAgICAgICBoZWxwZXIuY29udmVydEFycmF5KGNvbnRlbnQuc2hpZnQoKSwgZGVsaW1pdGVyLCBxdW90ZSkgOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuc2hpZnQoKS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIH1cblxuICAgIHZhciBoYXNoRGF0YSA9IFsgXTtcbiAgICBjb250ZW50LmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIGlmKGl0ZW0pe1xuICAgICAgICAgIGl0ZW0gPSBxdW90ZSA/XG4gICAgICAgICAgICAgICAgaGVscGVyLmNvbnZlcnRBcnJheShpdGVtLCBkZWxpbWl0ZXIsIHF1b3RlKSA6XG4gICAgICAgICAgICAgICAgaXRlbS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICAgIHZhciBoYXNoSXRlbSA9IHsgfTtcbiAgICAgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVySXRlbSwgaW5kZXgpe1xuICAgICAgICAgICAgICBoYXNoSXRlbVtoZWFkZXJJdGVtXSA9IGhlbHBlci5yZW1vdmVRdW90ZShpdGVtW2luZGV4XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFzaERhdGEucHVzaChoYXNoSXRlbSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGFzaERhdGE7XG59XG5cbmZ1bmN0aW9uIHRvU2NoZW1hT2JqZWN0KGRhdGEsIG9wdHMpe1xuXG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgdmFyIGRlbGltaXRlciAgID0gKG9wdHMuZGVsaW1pdGVyIHx8ICcsJyk7XG4gICAgdmFyIHF1b3RlICAgICAgID0gaGVscGVyLmdldFF1b3RlQ2hhcihvcHRzLnF1b3RlKTtcbiAgICB2YXIgY29udGVudCAgICAgPSBkYXRhO1xuICAgIHZhciBoZWFkZXJzICAgICA9IG51bGw7XG4gICAgaWYodHlwZW9mKGNvbnRlbnQpICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCwgaW5wdXQgc2hvdWxkIGJlIGEgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIGNvbnRlbnQgICAgICAgICA9IGNvbnRlbnQuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG5cblxuICAgIGlmKHR5cGVvZihvcHRzLmhlYWRlcnMpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgaGVhZGVycyA9IG9wdHMuaGVhZGVycy5zcGxpdCgvW1xcblxccl0rL2lnKTtcbiAgICAgICAgaGVhZGVycyA9IHF1b3RlID9cbiAgICAgICAgICAgICAgICBoZWxwZXIuY29udmVydEFycmF5KGhlYWRlcnMuc2hpZnQoKSwgZGVsaW1pdGVyLCBxdW90ZSkgOlxuICAgICAgICAgICAgICAgIGhlYWRlcnMuc2hpZnQoKS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIH1lbHNle1xuICAgICAgICBoZWFkZXJzID0gcXVvdGUgP1xuICAgICAgICAgICAgICAgIGhlbHBlci5jb252ZXJ0QXJyYXkoY29udGVudC5zaGlmdCgpLCBkZWxpbWl0ZXIsIHF1b3RlKSA6XG4gICAgICAgICAgICAgICAgY29udGVudC5zaGlmdCgpLnNwbGl0KGRlbGltaXRlcik7XG4gICAgfVxuXG5cbiAgICB2YXIgaGFzaERhdGEgICAgPSBbIF07XG5cbiAgICBjb250ZW50LmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIGlmKGl0ZW0pe1xuICAgICAgICAgIGl0ZW0gPSBxdW90ZSA/XG4gICAgICAgICAgICAgICAgaGVscGVyLmNvbnZlcnRBcnJheShpdGVtLCBkZWxpbWl0ZXIsIHF1b3RlKSA6XG4gICAgICAgICAgICAgICAgaXRlbS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgICAgICAgICAgdmFyIHNjaGVtYU9iamVjdCA9IHt9O1xuICAgICAgICAgICAgaXRlbS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaW5kZXgpe1xuICAgICAgICAgICAgICAgIGhlbHBlci5hZGREYXRhSW5TY2hlbWEoaGVhZGVyc1tpbmRleF0sIHZhbCwgc2NoZW1hT2JqZWN0ICwgZGVsaW1pdGVyLCBxdW90ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGhhc2hEYXRhLnB1c2goc2NoZW1hT2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhc2hEYXRhO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGRhdGEsIG9wdHMpe1xuXG4gICAgb3B0cyA9IG9wdHMgfHwgeyB9O1xuXG4gICAgdmFyIGRlbGltaXRlciAgID0gKG9wdHMuZGVsaW1pdGVyIHx8ICcsJyk7XG4gICAgdmFyIHF1b3RlICAgICAgID0gaGVscGVyLmdldFF1b3RlQ2hhcihvcHRzLnF1b3RlKTtcbiAgICB2YXIgY29udGVudCAgICAgPSBkYXRhO1xuXG4gICAgaWYodHlwZW9mKGNvbnRlbnQpICE9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCwgaW5wdXQgZGF0YSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgfVxuXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3BsaXQoL1tcXG5cXHJdKy9pZyk7XG4gICAgdmFyIGFycmF5RGF0YSA9IFsgXTtcbiAgICBjb250ZW50LmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgIGlmKGl0ZW0pe1xuICAgICAgICAgICAgaXRlbSA9IHF1b3RlID9cbiAgICAgICAgICAgICAgICBoZWxwZXIuY29udmVydEFycmF5KGl0ZW0sIGRlbGltaXRlciwgcXVvdGUpIDpcbiAgICAgICAgICAgICAgICBpdGVtLnNwbGl0KGRlbGltaXRlcik7XG5cbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLm1hcChmdW5jdGlvbihjSXRlbSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlbHBlci5yZW1vdmVRdW90ZShjSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFycmF5RGF0YS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5RGF0YTtcbn1cblxuZnVuY3Rpb24gdG9DU1YoZGF0YSwgb3B0cyl7XG5cbiAgICBvcHRzICAgICAgICAgICAgICAgID0gKG9wdHMgfHwgeyB9KTtcbiAgICBvcHRzLmRlbGltaXRlciAgICAgID0gKG9wdHMuZGVsaW1pdGVyIHx8ICcsJyk7XG4gICAgb3B0cy53cmFwICAgICAgICAgICA9IChvcHRzLndyYXAgfHwgJycpO1xuICAgIG9wdHMuYXJyYXlEZW5vdGUgICAgPSAob3B0cy5hcnJheURlbm90ZSAmJiBTdHJpbmcob3B0cy5hcnJheURlbm90ZSkudHJpbSgpID8gb3B0cy5hcnJheURlbm90ZSA6ICdbXScpO1xuICAgIG9wdHMub2JqZWN0RGVub3RlICAgPSAob3B0cy5vYmplY3REZW5vdGUgJiYgU3RyaW5nKG9wdHMub2JqZWN0RGVub3RlKS50cmltKCkgPyBvcHRzLm9iamVjdERlbm90ZSA6ICcuJyk7XG4gICAgb3B0cy5kZXRhaWxlZE91dHB1dCA9ICh0eXBlb2Yob3B0cy5kZXRhaWxlZE91dHB1dCkgIT09IFwiYm9vbGVhblwiID8gdHJ1ZSA6IG9wdHMuZGV0YWlsZWRPdXRwdXQpO1xuICAgIG9wdHMuaGVhZGVycyAgICAgICAgPSBTdHJpbmcob3B0cy5oZWFkZXJzKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBjc3ZKU09OICAgICAgICAgPSB7IH07XG4gICAgdmFyIGNzdkRhdGEgICAgICAgICA9IFwiXCI7XG5cbiAgICBpZighb3B0cy5oZWFkZXJzLm1hdGNoKC9ub25lfGZ1bGx8cmVsYXRpdmV8a2V5Lykpe1xuICAgICAgb3B0cy5oZWFkZXJzID0gJ2Z1bGwnO1xuICAgIH1lbHNle1xuICAgICAgb3B0cy5oZWFkZXJzID0gb3B0cy5oZWFkZXJzLm1hdGNoKC9ub25lfGZ1bGx8cmVsYXRpdmV8a2V5LylbMF07XG4gICAgfVxuXG4gICAgaWYob3B0cy53cmFwID09PSB0cnVlKXtcbiAgICAgICAgb3B0cy53cmFwID0gJ1wiJztcbiAgICB9XG5cbiAgICBpZih0eXBlb2YoZGF0YSkgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG5cbiAgICBoZWxwZXIudG9Dc3YoZGF0YSwgY3N2SlNPTiwgXCJcIiwgMCwgb3B0cyk7XG5cbiAgICB2YXIgaGVhZGVycyA9IGhlbHBlci5nZXRIZWFkZXJzKG9wdHMuaGVhZGVycywgY3N2SlNPTiwgb3B0cyk7XG5cbiAgICBpZihoZWFkZXJzKXtcbiAgICAgIGlmKG9wdHMud3JhcCl7XG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLm1hcChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICByZXR1cm4gb3B0cy53cmFwICsgaXRlbSArIG9wdHMud3JhcDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjc3ZEYXRhID0gaGVhZGVycy5qb2luKG9wdHMuZGVsaW1pdGVyKTtcbiAgICB9XG5cbiAgICB2YXIgYmlnQXJyYXlMZW4gPSBoZWxwZXIuZ2V0TGVuZ3RoeUl0ZW0oY3N2SlNPTik7XG4gICAgdmFyIGtleXMgICAgICAgID0gT2JqZWN0LmtleXMoY3N2SlNPTik7XG4gICAgdmFyIHJvdyAgICAgICAgID0gWyBdO1xuXG4gICAgdmFyIHJlcGxhY2VOZXdMaW5lUGF0dGVybiA9IC9cXG58XFxyL2c7XG4gICAgaWYoIW9wdHMud3JhcCl7XG4gICAgICAgIHJlcGxhY2VOZXdMaW5lUGF0dGVybiA9IG5ldyBSZWdFeHAoJ1xcbnxcXHJ8JyArIG9wdHMuZGVsaW1pdGVyLCAnZycpO1xuICAgIH1cblxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGJpZ0FycmF5TGVuOyBpKyspe1xuICAgICAgICByb3cgPSBbIF07XG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmKGNzdkpTT05ba2V5c1tqXV1baV0pe1xuICAgICAgICAgICAgICAgIGNzdkpTT05ba2V5c1tqXV1baV0gPSBjc3ZKU09OW2tleXNbal1dW2ldLnJlcGxhY2UocmVwbGFjZU5ld0xpbmVQYXR0ZXJuLCAnXFx0Jyk7XG4gICAgICAgICAgICAgICAgaWYob3B0cy53cmFwKXtcbiAgICAgICAgICAgICAgICAgICAgY3N2SlNPTltrZXlzW2pdXVtpXSA9IG9wdHMud3JhcCArIGNzdkpTT05ba2V5c1tqXV1baV0gKyBvcHRzLndyYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvd1tyb3cubGVuZ3RoXSA9IGNzdkpTT05ba2V5c1tqXV1baV07XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByb3dbcm93Lmxlbmd0aF0gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjc3ZEYXRhICs9ICdcXG4nICsgcm93LmpvaW4ob3B0cy5kZWxpbWl0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY3N2RGF0YTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdldFF1b3RlQ2hhciA6IGdldFF1b3RlQ2hhcixcbiAgICBkYXRhVHlwZSA6IGRhdGFUeXBlLFxuICAgIHRvQ3N2IDogdG9Dc3YsXG4gICAgcHV0RGF0YSA6IHB1dERhdGEsXG4gICAgYWxsT2Jqc09yQXJyYXkgOiBhbGxPYmpzT3JBcnJheSxcbiAgICBnZXRIZWFkZXJzIDogZ2V0SGVhZGVycyxcbiAgICBnZXRMZW5ndGh5SXRlbSA6IGdldExlbmd0aHlJdGVtLFxuICAgIGFkZERhdGFJblNjaGVtYSA6IGFkZERhdGFJblNjaGVtYSxcbiAgICByZW1vdmVRdW90ZSA6IHJlbW92ZVF1b3RlLFxuICAgIGFycmF5VG9Dc3YgOiBhcnJheVRvQ3N2LFxuICAgIG9iamVjdFRvQ3N2IDogb2JqZWN0VG9Dc3YsXG4gICAgY29udmVydEFycmF5IDogY29udmVydEFycmF5LFxuICAgIGNzdlRvQXJyYXkgOiBjc3ZUb0FycmF5XG59XG5cbmZ1bmN0aW9uIGdldFF1b3RlQ2hhcihxKXtcbiAgaWYodHlwZW9mKHEpID09PSBcInN0cmluZ1wiKXtcbiAgICByZXR1cm4gcTtcbiAgfWVsc2UgaWYocSA9PT0gdHJ1ZSl7XG4gICAgcmV0dXJuICdcIic7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRhdGFUeXBlKGFyZykge1xuICAgIGlmIChhcmcgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnICYmIChhcmcubm9kZVR5cGUgPT09IDEgfHwgYXJnLm5vZGVUeXBlID09PSA5KSkge1xuICAgICAgICByZXR1cm4gJ2VsZW1lbnQnO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSkubWF0Y2goL1xcW29iamVjdCAoLio/KVxcXS8pWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpc05hTihhcmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25hbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShhcmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2luZmluaXR5JztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbn1cblxuXG5mdW5jdGlvbiB0b0NzdihkYXRhLCB0YWJsZSwgcGFyZW50LCByb3csIG9wdCl7XG4gICAgaWYoZGF0YVR5cGUoZGF0YSkgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIHB1dERhdGEoJycsIHRhYmxlLCBwYXJlbnQsIHJvdywgb3B0KTtcbiAgICB9ZWxzZSBpZihkYXRhVHlwZShkYXRhKSA9PT0gJ251bGwnKXtcbiAgICAgICAgcmV0dXJuIHB1dERhdGEoJ251bGwnLCB0YWJsZSwgcGFyZW50LCByb3csIG9wdCk7XG4gICAgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShkYXRhKSl7XG4gICAgICAgIHJldHVybiBhcnJheVRvQ3N2KGRhdGEsIHRhYmxlLCBwYXJlbnQsIHJvdywgb3B0KTtcbiAgICB9ZWxzZSBpZih0eXBlb2YoZGF0YSkgPT09IFwib2JqZWN0XCIpe1xuICAgICAgICByZXR1cm4gb2JqZWN0VG9Dc3YoZGF0YSwgdGFibGUsIHBhcmVudCwgcm93LCBvcHQpO1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gcHV0RGF0YShTdHJpbmcoZGF0YSksIHRhYmxlLCBwYXJlbnQsIHJvdywgb3B0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1dERhdGEoZGF0YSwgdGFibGUsIHBhcmVudCwgcm93LCBvcHQpe1xuICBpZighdGFibGUgfHwgIXRhYmxlW3BhcmVudF0pe1xuICAgICAgdGFibGVbcGFyZW50XSA9IFsgXTtcbiAgfVxuICBpZihyb3cgPCB0YWJsZVtwYXJlbnRdLmxlbmd0aCl7XG4gICAgcm93ID0gdGFibGVbcGFyZW50XS5sZW5ndGg7XG4gIH1cbiAgdGFibGVbcGFyZW50XVtyb3ddID0gZGF0YTtcbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5cbmZ1bmN0aW9uIGFsbE9ianNPckFycmF5KGFycmF5KXtcbiAgcmV0dXJuIGFycmF5LmV2ZXJ5KGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICB2YXIgZGF0YXR5cGUgPSBkYXRhVHlwZShpdGVtKTtcbiAgICAgICAgaWYoIWRhdGF0eXBlLm1hdGNoKC9hcnJheXxvYmplY3QvKSl7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGhlYWRlclR5cGUsIHRhYmxlLCBvcHQpe1xuICB2YXIga2V5TWF0Y2hQYXR0ZXJuICAgICAgID0gLyhbXlxcW1xcXVxcLl0rKSQvO1xuICB2YXIgcmVsYXRpdmVNYXRjaFBhdHRlcm4gID0gL1xcW1xcXVxcLj8oW15cXFtcXF1dKykkLztcbiAgc3dpdGNoKGhlYWRlclR5cGUpe1xuICAgIGNhc2UgXCJub25lXCI6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlIFwiZnVsbFwiOlxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRhYmxlKTtcbiAgICBjYXNlIFwia2V5XCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGFibGUpLm1hcChmdW5jdGlvbihoZWFkZXIpe1xuICAgICAgICB2YXIgaGVhZCA9IGhlYWRlci5tYXRjaChrZXlNYXRjaFBhdHRlcm4pO1xuICAgICAgICBpZihoZWFkICYmIGhlYWQubGVuZ3RoID09PSAyKXtcbiAgICAgICAgICByZXR1cm4gaGVhZFsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgICAgfSk7XG4gICAgY2FzZSBcInJlbGF0aXZlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGFibGUpLm1hcChmdW5jdGlvbihoZWFkZXIpe1xuICAgICAgICB2YXIgaGVhZCA9IGhlYWRlci5tYXRjaChyZWxhdGl2ZU1hdGNoUGF0dGVybik7XG4gICAgICAgIGlmKGhlYWQgJiYgaGVhZC5sZW5ndGggPT09IDIpe1xuICAgICAgICAgIHJldHVybiBoZWFkWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGh5SXRlbSh0YWJsZSl7XG4gIHZhciBsZW4gPSAwO1xuICBPYmplY3Qua2V5cyh0YWJsZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodGFibGVbaXRlbV0pICYmIHRhYmxlW2l0ZW1dLmxlbmd0aCA+IGxlbil7XG4gICAgICAgIGxlbiA9IHRhYmxlW2l0ZW1dLmxlbmd0aDtcbiAgICAgIH1cbiAgfSk7XG4gIHJldHVybiBsZW47XG59XG5cbmZ1bmN0aW9uIGFkZERhdGFJblNjaGVtYShoZWFkZXIsIGl0ZW0sIHNjaGVtYSwgZGVsaW1pdGVyLCBxdW90ZSl7XG4gICAgdmFyIG1hdGNoID0gaGVhZGVyLm1hdGNoKC9cXFsqW1xcZF1cXF1cXC4oXFx3Kyl8XFwufFxcW1xcXXxcXFsoLilcXF18LXxcXCsvaWcpO1xuICAgIHZhciBoZWFkZXJOYW1lLCBjdXJyZW50UG9pbnQ7XG4gICAgaWYobWF0Y2gpe1xuICAgICAgICB2YXIgdGVzdE1hdGNoID0gbWF0Y2hbMF07XG4gICAgICAgIGlmKG1hdGNoLmluZGV4T2YoJy0nKSAhPT0gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNlIGlmKG1hdGNoLmluZGV4T2YoJy4nKSAhPT0gLTEpe1xuICAgICAgICAgICAgdmFyIGhlYWRQYXJ0cyA9IGhlYWRlci5zcGxpdCgnLicpO1xuICAgICAgICAgICAgY3VycmVudFBvaW50ID0gaGVhZFBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICBzY2hlbWFbY3VycmVudFBvaW50XSA9IHNjaGVtYVtjdXJyZW50UG9pbnRdIHx8IHt9O1xuICAgICAgICAgICAgYWRkRGF0YUluU2NoZW1hKGhlYWRQYXJ0cy5qb2luKCcuJyksIGl0ZW0sIHNjaGVtYVtjdXJyZW50UG9pbnRdLCBkZWxpbWl0ZXIsIHF1b3RlKTtcbiAgICAgICAgfWVsc2UgaWYobWF0Y2guaW5kZXhPZignW10nKSAhPT0gLTEpe1xuICAgICAgICAgICAgaGVhZGVyTmFtZSA9IGhlYWRlci5yZXBsYWNlKC9cXFtcXF0vaWcsJycpO1xuICAgICAgICAgICAgaWYoIXNjaGVtYVtoZWFkZXJOYW1lXSl7XG4gICAgICAgICAgICBzY2hlbWFbaGVhZGVyTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjaGVtYVtoZWFkZXJOYW1lXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9ZWxzZSBpZigvXFxbKltcXGRdXFxdXFwuKFxcdyspLy50ZXN0KHRlc3RNYXRjaCkpe1xuICAgICAgICAgICAgaGVhZGVyTmFtZSA9IGhlYWRlci5zcGxpdCgnWycpLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0ZXN0TWF0Y2gubWF0Y2goL1xcWyguKVxcXS8pLnBvcCgpLDEwKTtcbiAgICAgICAgICAgIGN1cnJlbnRQb2ludCA9IGhlYWRlci5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICAgICAgc2NoZW1hW2hlYWRlck5hbWVdID0gc2NoZW1hW2hlYWRlck5hbWVdIHx8IFtdO1xuICAgICAgICAgICAgc2NoZW1hW2hlYWRlck5hbWVdW2luZGV4XSA9IHNjaGVtYVtoZWFkZXJOYW1lXVtpbmRleF0gfHwge307XG4gICAgICAgICAgICBzY2hlbWFbaGVhZGVyTmFtZV1baW5kZXhdW2N1cnJlbnRQb2ludF0gPSBpdGVtO1xuICAgICAgICB9ZWxzZSBpZigvXFxbKC4pXFxdLy50ZXN0KHRlc3RNYXRjaCkpe1xuICAgICAgICAgICAgdmFyIGRlbGltaXRlciA9IHRlc3RNYXRjaC5tYXRjaCgvXFxbKC4pXFxdLykucG9wKCk7XG4gICAgICAgICAgICBoZWFkZXJOYW1lID0gaGVhZGVyLnJlcGxhY2UoL1xcWyguKVxcXS9pZywnJyk7XG4gICAgICAgICAgICBzY2hlbWFbaGVhZGVyTmFtZV0gPSBjb252ZXJ0QXJyYXkoaXRlbSwgZGVsaW1pdGVyLCBxdW90ZSk7XG4gICAgICAgIH1lbHNlIGlmKG1hdGNoLmluZGV4T2YoJysnKSAhPT0gLTEpe1xuICAgICAgICAgICAgaGVhZGVyTmFtZSA9IGhlYWRlci5yZXBsYWNlKC9cXCsvaWcsXCJcIik7XG4gICAgICAgICAgICBzY2hlbWFbaGVhZGVyTmFtZV0gPSBOdW1iZXIoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgc2NoZW1hW2hlYWRlcl0gPSByZW1vdmVRdW90ZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYSA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVF1b3RlKHN0cil7XG4gICAgaWYoc3RyKXtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpLnRyaW0oKS5yZXBsYWNlKC9eW1wifCddKC4qKVtcInwnXSQvLCAnJDEnKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFycmF5VG9Dc3YoZGF0YSwgdGFibGUsIHBhcmVudCwgcm93LCBvcHQpe1xuICAgIGlmKGFsbE9ianNPckFycmF5KGRhdGEpKXtcbiAgICAgIHJldHVybiBwdXREYXRhKGRhdGEuam9pbignOycpLCB0YWJsZSwgcGFyZW50ICsgb3B0LmFycmF5RGVub3RlLCByb3csIG9wdCk7XG4gICAgfVxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgICAgIHJldHVybiB0b0NzdihpdGVtLCB0YWJsZSwgcGFyZW50ICsgb3B0LmFycmF5RGVub3RlLCBpbmRleCwgb3B0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0VG9Dc3YoZGF0YSwgdGFibGUsIHBhcmVudCwgcm93LCBvcHQpe1xuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgcmV0dXJuIHRvQ3N2KGRhdGFbaXRlbV0sIHRhYmxlLCBwYXJlbnQgKyBvcHQub2JqZWN0RGVub3RlICsgaXRlbSwgcm93LCBvcHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydEFycmF5KHN0ciwgZGVsaW1pdGVyLCBxdW90ZSkge1xuICAgIGlmKHF1b3RlICYmIHN0ci5pbmRleE9mKHF1b3RlKSAhPT0gLTEpe1xuICAgICAgcmV0dXJuIGNzdlRvQXJyYXkoc3RyLCBkZWxpbWl0ZXIsIHF1b3RlKTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIHZhciBhcnIgPSBzdHIuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdmFyIHRyaW1tZWQgPSB2YWwudHJpbSgpO1xuICAgICAgICBvdXRwdXQucHVzaCh0cmltbWVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjc3ZUb0FycmF5KHRleHQsIGRlbGltaXQsIHF1b3RlKSB7XG5cbiAgICBkZWxpbWl0ID0gZGVsaW1pdCB8fCBcIixcIjtcbiAgICBxdW90ZSAgID0gcXVvdGUgfHwgJ1wiJztcblxuICAgIHZhciB2YWx1ZSA9IG5ldyBSZWdFeHAoXCIoPyFcXFxccyokKVxcXFxzKig/OlwiICsgIHF1b3RlICsgXCIoW15cIiArICBxdW90ZSArIFwiXFxcXFxcXFxdKig/OlxcXFxcXFxcW1xcXFxTXFxcXHNdW15cIiArICBxdW90ZSArIFwiXFxcXFxcXFxdKikqKVwiICsgIHF1b3RlICsgXCJ8KFteXCIgKyAgZGVsaW1pdCAgKyAgcXVvdGUgKyBcIlxcXFxzXFxcXFxcXFxdKig/OlxcXFxzK1teXCIgKyAgZGVsaW1pdCAgKyAgcXVvdGUgKyBcIlxcXFxzXFxcXFxcXFxdKykqKSlcXFxccyooPzpcIiArICBkZWxpbWl0ICsgXCJ8JClcIiwgXCJnXCIpO1xuXG4gICAgdmFyIGEgPSBbIF07XG5cbiAgICB0ZXh0LnJlcGxhY2UodmFsdWUsXG4gICAgICAgIGZ1bmN0aW9uKG0wLCBtMSwgbTIpIHtcbiAgICAgICAgICAgIGlmKG0xICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGEucHVzaChtMS5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIikpO1xuICAgICAgICAgICAgfWVsc2UgaWYobTIgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgYS5wdXNoKG0yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoLyxcXHMqJC8udGVzdCh0ZXh0KSl7XG4gICAgICAgIGEucHVzaCgnJyk7XG4gICAgfVxuICAgIHJldHVybiBhO1xufVxuIiwidmFyIGFwcCA9IHJlcXVpcmUoJy4vYXBwLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR0b0NvbHVtbkFycmF5OiB0b0NvbHVtbkFycmF5LFxuXHR0b09iamVjdDogdG9PYmplY3QsXG5cdHRvU2NoZW1hT2JqZWN0OiB0b1NjaGVtYU9iamVjdCxcblx0dG9BcnJheTogdG9BcnJheSxcblx0dHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG5cdHN0cmluZ2lmeTogc3RyaW5naWZ5XG59XG5cbmZ1bmN0aW9uIGNob3BMaW5lcyhzdHIpIHtcblx0cmV0dXJuIHN0ci5zcGxpdCgvW1xcblxccl0vaWcpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZnVuYykge1xuXHR2YXIgc3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5cdHJldHVybiBuZXcgc3RyZWFtLlRyYW5zZm9ybSh7XG5cdFx0cmVhZGFibGVPYmplY3RNb2RlOiB0cnVlLFxuXHRcdHdyaXRhYmxlT2JqZWN0TW9kZTogdHJ1ZSxcblx0XHR0cmFuc2Zvcm06IGZ1bmNcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShzcGFjZSkge1xuXHRyZXR1cm4gdHJhbnNmb3JtKGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcblx0XHR0aGlzLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgc3BhY2UpKVxuXHRcdGNhbGxiYWNrKClcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbHVtbkFycmF5KGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpIHtcblx0dmFyIGxpbmVzID0gY2hvcExpbmVzKGRhdGEudG9TdHJpbmcoKSk7XG5cdGlmICghdHJhbnMuX2hlYWQpIHtcblx0XHR2YXIgaGVhZCA9IGxpbmVzLnNoaWZ0KCk7XG5cdFx0dHJhbnMuX2hlYWQgPSBoZWFkO1xuXHRcdHRyYW5zLl9vcHRzLmhlYWRlcnMgPSBoZWFkO1xuXHR9XG5cdHRoaXMucHVzaChhcHAudG9Db2x1bW5BcnJheShsaW5lcy5qb2luKCdcXG4nKSwgdHJhbnMuX29wdHMpKVxuXHRjYWxsYmFjaygpXG59XG5cbmZ1bmN0aW9uIHRvQ29sdW1uQXJyYXkob3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0dmFyIHRyYW5zID0gdHJhbnNmb3JtKGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcblx0XHRfdG9Db2x1bW5BcnJheS5jYWxsKHRoaXMsIGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpO1xuXHR9KTtcblx0dHJhbnMuX2hlYWQgPSBvcHRzLmhlYWRlcnMgPyBvcHRzLmhlYWRlcnMgOiBudWxsO1xuXHR0cmFucy5fb3B0cyA9IG9wdHM7XG5cdHJldHVybiB0cmFucztcbn1cblxuZnVuY3Rpb24gX3RvT2JqZWN0KGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpIHtcblx0dmFyIGxpbmVzID0gY2hvcExpbmVzKGRhdGEudG9TdHJpbmcoKSk7XG5cdGlmICghdHJhbnMuX2hlYWQpIHtcblx0XHR2YXIgaGVhZCA9IGxpbmVzLnNoaWZ0KCk7XG5cdFx0dHJhbnMuX2hlYWQgPSBoZWFkO1xuXHRcdHRyYW5zLl9vcHRzLmhlYWRlcnMgPSBoZWFkO1xuXHR9XG5cdHRoaXMucHVzaChhcHAudG9PYmplY3QobGluZXMuam9pbignXFxuJyksIHRyYW5zLl9vcHRzKSlcblx0Y2FsbGJhY2soKVxufVxuXG5mdW5jdGlvbiB0b09iamVjdChvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgdHJhbnMgPSB0cmFuc2Zvcm0oZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuXHRcdF90b09iamVjdC5jYWxsKHRoaXMsIGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpO1xuXHR9KTtcblx0dHJhbnMuX2hlYWQgPSBvcHRzLmhlYWRlcnMgPyBvcHRzLmhlYWRlcnMgOiBudWxsO1xuXHR0cmFucy5fb3B0cyA9IG9wdHM7XG5cdHJldHVybiB0cmFucztcbn1cblxuZnVuY3Rpb24gX3RvU2NoZW1hT2JqZWN0KGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpIHtcblx0dmFyIGxpbmVzID0gY2hvcExpbmVzKGRhdGEudG9TdHJpbmcoKSk7XG5cdGlmICghdHJhbnMuX2hlYWQpIHtcblx0XHR2YXIgaGVhZCA9IGxpbmVzLnNoaWZ0KCk7XG5cdFx0dHJhbnMuX2hlYWQgPSBoZWFkO1xuXHRcdHRyYW5zLl9vcHRzLmhlYWRlcnMgPSBoZWFkO1xuXHR9XG5cdHRoaXMucHVzaChhcHAudG9TY2hlbWFPYmplY3QobGluZXMuam9pbignXFxuJyksIHRyYW5zLl9vcHRzKSlcblx0Y2FsbGJhY2soKVxufVxuXG5mdW5jdGlvbiB0b1NjaGVtYU9iamVjdChvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgdHJhbnMgPSB0cmFuc2Zvcm0oZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuXHRcdF90b1NjaGVtYU9iamVjdC5jYWxsKHRoaXMsIGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaywgdHJhbnMpO1xuXHR9KTtcblx0dHJhbnMuX2hlYWQgPSBvcHRzLmhlYWRlcnMgPyBvcHRzLmhlYWRlcnMgOiBudWxsO1xuXHR0cmFucy5fb3B0cyA9IG9wdHM7XG5cdHJldHVybiB0cmFucztcbn1cblxuZnVuY3Rpb24gX3RvQXJyYXkoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrLCB0cmFucykge1xuXHR2YXIgbGluZXMgPSBjaG9wTGluZXMoZGF0YS50b1N0cmluZygpKTtcblx0dGhpcy5wdXNoKGFwcC50b0FycmF5KGxpbmVzLmpvaW4oJ1xcbicpLCB0cmFucy5fb3B0cykpXG5cdGNhbGxiYWNrKClcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgdHJhbnMgPSB0cmFuc2Zvcm0oZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuXHRcdF90b0FycmF5LmNhbGwodGhpcywgZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrLCB0cmFucyk7XG5cdH0pO1xuXHR0cmFucy5fb3B0cyA9IG9wdHM7XG5cdHJldHVybiB0cmFucztcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWdlbmVyYXRvclJ1bnRpbWVcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvclwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiY29tcG9uZW50XCIsIFwicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lc1wiLCBcImRpc2FibGVkXCIsIFwiaWRcIiwgXCJzdHlsZVwiLCBcInN0eWxlc1wiLCBcIm11bHRpcGxlXCIsIFwiYWNjZXB0XCIsIFwiY2FwdHVyZVwiLCBcImNoaWxkcmVuXCIsIFwiZGlyZWN0b3J5XCIsIFwib3BlbkZpbGVEaWFsb2dPbkNsaWNrXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCJdO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHBpY2tBdHRycyBmcm9tIFwicmMtdXRpbC9lcy9waWNrQXR0cnNcIjtcbmltcG9ydCBkZWZhdWx0UmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IGdldFVpZCBmcm9tICcuL3VpZCc7XG5pbXBvcnQgYXR0ckFjY2VwdCBmcm9tICcuL2F0dHItYWNjZXB0JztcbmltcG9ydCB0cmF2ZXJzZUZpbGVUcmVlIGZyb20gJy4vdHJhdmVyc2VGaWxlVHJlZSc7XG52YXIgQWpheFVwbG9hZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBamF4VXBsb2FkZXIsIF9Db21wb25lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFqYXhVcGxvYWRlcik7XG4gIGZ1bmN0aW9uIEFqYXhVcGxvYWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXhVcGxvYWRlcik7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB1aWQ6IGdldFVpZCgpXG4gICAgfTtcbiAgICBfdGhpcy5yZXFzID0ge307XG4gICAgX3RoaXMuZmlsZUlucHV0ID0gdm9pZCAwO1xuICAgIF90aGlzLl9pc01vdW50ZWQgPSB2b2lkIDA7XG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGFjY2VwdCA9IF90aGlzJHByb3BzLmFjY2VwdCxcbiAgICAgICAgZGlyZWN0b3J5ID0gX3RoaXMkcHJvcHMuZGlyZWN0b3J5O1xuICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IF90b0NvbnN1bWFibGVBcnJheShmaWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIHJldHVybiAhZGlyZWN0b3J5IHx8IGF0dHJBY2NlcHQoZmlsZSwgYWNjZXB0KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMudXBsb2FkRmlsZXMoYWNjZXB0ZWRGaWxlcyk7XG4gICAgICBfdGhpcy5yZXNldCgpO1xuICAgIH07XG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5maWxlSW5wdXQ7XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljaztcbiAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LmZvY3VzKCk7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5ibHVyKCk7XG4gICAgICB9XG4gICAgICBlbC5jbGljaygpO1xuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgX3RoaXMub25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uRmlsZURyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG11bHRpcGxlID0gX3RoaXMucHJvcHMubXVsdGlwbGU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZS50eXBlID09PSAnZHJhZ292ZXInKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXJlY3RvcnkpIHtcbiAgICAgICAgdHJhdmVyc2VGaWxlVHJlZShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmRhdGFUcmFuc2Zlci5pdGVtcyksIF90aGlzLnVwbG9hZEZpbGVzLCBmdW5jdGlvbiAoX2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gYXR0ckFjY2VwdChfZmlsZSwgX3RoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmlsZXMgPSBfdG9Db25zdW1hYmxlQXJyYXkoZS5kYXRhVHJhbnNmZXIuZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHJldHVybiBhdHRyQWNjZXB0KGZpbGUsIF90aGlzLnByb3BzLmFjY2VwdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZmlsZXMgPSBmaWxlcy5zbGljZSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy51cGxvYWRGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgdmFyIG9yaWdpbkZpbGVzID0gX3RvQ29uc3VtYWJsZUFycmF5KGZpbGVzKTtcbiAgICAgIHZhciBwb3N0RmlsZXMgPSBvcmlnaW5GaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGZpbGUudWlkID0gZ2V0VWlkKCk7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9jZXNzRmlsZShmaWxlLCBvcmlnaW5GaWxlcyk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJhdGNoIHVwbG9hZCBmaWxlc1xuICAgICAgUHJvbWlzZS5hbGwocG9zdEZpbGVzKS50aGVuKGZ1bmN0aW9uIChmaWxlTGlzdCkge1xuICAgICAgICB2YXIgb25CYXRjaFN0YXJ0ID0gX3RoaXMucHJvcHMub25CYXRjaFN0YXJ0O1xuICAgICAgICBvbkJhdGNoU3RhcnQgPT09IG51bGwgfHwgb25CYXRjaFN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkJhdGNoU3RhcnQoZmlsZUxpc3QubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIG9yaWdpbiA9IF9yZWYub3JpZ2luLFxuICAgICAgICAgICAgcGFyc2VkRmlsZSA9IF9yZWYucGFyc2VkRmlsZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZTogb3JpZ2luLFxuICAgICAgICAgICAgcGFyc2VkRmlsZTogcGFyc2VkRmlsZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgZmlsZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbGUucGFyc2VkRmlsZSAhPT0gbnVsbDtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIF90aGlzLnBvc3QoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGZpbGUgYmVmb3JlIHVwbG9hZC4gV2hlbiBhbGwgdGhlIGZpbGUgaXMgcmVhZHksIHdlIHN0YXJ0IHVwbG9hZC5cbiAgICAgKi9cbiAgICBfdGhpcy5wcm9jZXNzRmlsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgICAgdmFyIGJlZm9yZVVwbG9hZCwgdHJhbnNmb3JtZWRGaWxlLCBhY3Rpb24sIG1lcmdlZEFjdGlvbiwgZGF0YSwgbWVyZ2VkRGF0YSwgcGFyc2VkRGF0YSwgcGFyc2VkRmlsZSwgbWVyZ2VkUGFyc2VkRmlsZTtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgYmVmb3JlVXBsb2FkID0gX3RoaXMucHJvcHMuYmVmb3JlVXBsb2FkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm1lZEZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICBpZiAoIWJlZm9yZVVwbG9hZCkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMztcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgIHJldHVybiBiZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1lZEZpbGUgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gOTtcbiAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDMpO1xuICAgICAgICAgICAgICAvLyBSZWplY3Rpb24gd2lsbCBhbHNvIHRyYWRlIGFzIGZhbHNlXG4gICAgICAgICAgICAgIHRyYW5zZm9ybWVkRmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgaWYgKCEodHJhbnNmb3JtZWRGaWxlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgb3JpZ2luOiBmaWxlLFxuICAgICAgICAgICAgICAgIHBhcnNlZEZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAvLyBHZXQgbGF0ZXN0IGFjdGlvblxuICAgICAgICAgICAgICBhY3Rpb24gPSBfdGhpcy5wcm9wcy5hY3Rpb247XG4gICAgICAgICAgICAgIGlmICghKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxODtcbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbihmaWxlKTtcbiAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgIG1lcmdlZEFjdGlvbiA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICBtZXJnZWRBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAvLyBHZXQgbGF0ZXN0IGRhdGFcbiAgICAgICAgICAgICAgZGF0YSA9IF90aGlzLnByb3BzLmRhdGE7XG4gICAgICAgICAgICAgIGlmICghKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyOTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjY7XG4gICAgICAgICAgICAgIHJldHVybiBkYXRhKGZpbGUpO1xuICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgbWVyZ2VkRGF0YSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgICBtZXJnZWREYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGNhc2UgMzA6XG4gICAgICAgICAgICAgIHBhcnNlZERhdGEgPVxuICAgICAgICAgICAgICAvLyBzdHJpbmcgdHlwZSBpcyBmcm9tIGxlZ2FjeSBgdHJhbnNmb3JtRmlsZWAuXG4gICAgICAgICAgICAgIC8vIE5vdCBzdXJlIGlmIHRoaXMgd2lsbCB3b3JrIHNpbmNlIG5vIHJlbGF0ZWQgdGVzdCBjYXNlIHdvcmtzIHdpdGggaXRcbiAgICAgICAgICAgICAgKF90eXBlb2YodHJhbnNmb3JtZWRGaWxlKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHRyYW5zZm9ybWVkRmlsZSA9PT0gJ3N0cmluZycpICYmIHRyYW5zZm9ybWVkRmlsZSA/IHRyYW5zZm9ybWVkRmlsZSA6IGZpbGU7XG4gICAgICAgICAgICAgIGlmIChwYXJzZWREYXRhIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZEZpbGUgPSBwYXJzZWREYXRhO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZEZpbGUgPSBuZXcgRmlsZShbcGFyc2VkRGF0YV0sIGZpbGUubmFtZSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbWVyZ2VkUGFyc2VkRmlsZSA9IHBhcnNlZEZpbGU7XG4gICAgICAgICAgICAgIG1lcmdlZFBhcnNlZEZpbGUudWlkID0gZmlsZS51aWQ7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICAgIG9yaWdpbjogZmlsZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBtZXJnZWREYXRhLFxuICAgICAgICAgICAgICAgIHBhcnNlZEZpbGU6IG1lcmdlZFBhcnNlZEZpbGUsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBtZXJnZWRBY3Rpb25cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1szLCA5XV0pO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeCwgX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCk7XG4gICAgX3RoaXMuc2F2ZUZpbGVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5maWxlSW5wdXQgPSBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhBamF4VXBsb2FkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KF9yZWYzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcbiAgICAgICAgb3JpZ2luID0gX3JlZjMub3JpZ2luLFxuICAgICAgICBhY3Rpb24gPSBfcmVmMy5hY3Rpb24sXG4gICAgICAgIHBhcnNlZEZpbGUgPSBfcmVmMy5wYXJzZWRGaWxlO1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uU3RhcnQgPSBfdGhpcyRwcm9wczMub25TdGFydCxcbiAgICAgICAgY3VzdG9tUmVxdWVzdCA9IF90aGlzJHByb3BzMy5jdXN0b21SZXF1ZXN0LFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMzLm5hbWUsXG4gICAgICAgIGhlYWRlcnMgPSBfdGhpcyRwcm9wczMuaGVhZGVycyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzID0gX3RoaXMkcHJvcHMzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgbWV0aG9kID0gX3RoaXMkcHJvcHMzLm1ldGhvZDtcbiAgICAgIHZhciB1aWQgPSBvcmlnaW4udWlkO1xuICAgICAgdmFyIHJlcXVlc3QgPSBjdXN0b21SZXF1ZXN0IHx8IGRlZmF1bHRSZXF1ZXN0O1xuICAgICAgdmFyIHJlcXVlc3RPcHRpb24gPSB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBmaWxlbmFtZTogbmFtZSxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZmlsZTogcGFyc2VkRmlsZSxcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdwb3N0JyxcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24gb25Qcm9ncmVzcyhlKSB7XG4gICAgICAgICAgdmFyIG9uUHJvZ3Jlc3MgPSBfdGhpczIucHJvcHMub25Qcm9ncmVzcztcbiAgICAgICAgICBvblByb2dyZXNzID09PSBudWxsIHx8IG9uUHJvZ3Jlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUHJvZ3Jlc3MoZSwgcGFyc2VkRmlsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHJldCwgeGhyKSB7XG4gICAgICAgICAgdmFyIG9uU3VjY2VzcyA9IF90aGlzMi5wcm9wcy5vblN1Y2Nlc3M7XG4gICAgICAgICAgb25TdWNjZXNzID09PSBudWxsIHx8IG9uU3VjY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25TdWNjZXNzKHJldCwgcGFyc2VkRmlsZSwgeGhyKTtcbiAgICAgICAgICBkZWxldGUgX3RoaXMyLnJlcXNbdWlkXTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlcnIsIHJldCkge1xuICAgICAgICAgIHZhciBvbkVycm9yID0gX3RoaXMyLnByb3BzLm9uRXJyb3I7XG4gICAgICAgICAgb25FcnJvciA9PT0gbnVsbCB8fCBvbkVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkVycm9yKGVyciwgcmV0LCBwYXJzZWRGaWxlKTtcbiAgICAgICAgICBkZWxldGUgX3RoaXMyLnJlcXNbdWlkXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG9uU3RhcnQob3JpZ2luKTtcbiAgICAgIHRoaXMucmVxc1t1aWRdID0gcmVxdWVzdChyZXF1ZXN0T3B0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdWlkOiBnZXRVaWQoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFib3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICAgIHZhciByZXFzID0gdGhpcy5yZXFzO1xuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdmFyIHVpZCA9IGZpbGUudWlkID8gZmlsZS51aWQgOiBmaWxlO1xuICAgICAgICBpZiAocmVxc1t1aWRdICYmIHJlcXNbdWlkXS5hYm9ydCkge1xuICAgICAgICAgIHJlcXNbdWlkXS5hYm9ydCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXFzKS5mb3JFYWNoKGZ1bmN0aW9uICh1aWQpIHtcbiAgICAgICAgICBpZiAocmVxc1t1aWRdICYmIHJlcXNbdWlkXS5hYm9ydCkge1xuICAgICAgICAgICAgcmVxc1t1aWRdLmFib3J0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbHN4O1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzNC5jb21wb25lbnQsXG4gICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNC5wcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgIF90aGlzJHByb3BzNCRjbGFzc05hbSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWVzLFxuICAgICAgICBjbGFzc05hbWVzID0gX3RoaXMkcHJvcHM0JGNsYXNzTmFtID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzNCRjbGFzc05hbSxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczQuZGlzYWJsZWQsXG4gICAgICAgIGlkID0gX3RoaXMkcHJvcHM0LmlkLFxuICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZSxcbiAgICAgICAgX3RoaXMkcHJvcHM0JHN0eWxlcyA9IF90aGlzJHByb3BzNC5zdHlsZXMsXG4gICAgICAgIHN0eWxlcyA9IF90aGlzJHByb3BzNCRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHM0JHN0eWxlcyxcbiAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczQubXVsdGlwbGUsXG4gICAgICAgIGFjY2VwdCA9IF90aGlzJHByb3BzNC5hY2NlcHQsXG4gICAgICAgIGNhcHR1cmUgPSBfdGhpcyRwcm9wczQuY2FwdHVyZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgIGRpcmVjdG9yeSA9IF90aGlzJHByb3BzNC5kaXJlY3RvcnksXG4gICAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayA9IF90aGlzJHByb3BzNC5vcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzNC5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZSA9IF90aGlzJHByb3BzNC5vbk1vdXNlTGVhdmUsXG4gICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHM0LCBfZXhjbHVkZWQpO1xuICAgICAgdmFyIGNscyA9IGNsc3goKF9jbHN4ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xzeCwgcHJlZml4Q2xzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbHN4LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xzeCwgY2xhc3NOYW1lLCBjbGFzc05hbWUpLCBfY2xzeCkpO1xuICAgICAgLy8gYmVjYXVzZSBpbnB1dCBkb24ndCBoYXZlIGRpcmVjdG9yeS93ZWJraXRkaXJlY3RvcnkgdHlwZSBkZWNsYXJhdGlvblxuICAgICAgdmFyIGRpclByb3BzID0gZGlyZWN0b3J5ID8ge1xuICAgICAgICBkaXJlY3Rvcnk6ICdkaXJlY3RvcnknLFxuICAgICAgICB3ZWJraXRkaXJlY3Rvcnk6ICd3ZWJraXRkaXJlY3RvcnknXG4gICAgICB9IDoge307XG4gICAgICB2YXIgZXZlbnRzID0gZGlzYWJsZWQgPyB7fSA6IHtcbiAgICAgICAgb25DbGljazogb3BlbkZpbGVEaWFsb2dPbkNsaWNrID8gdGhpcy5vbkNsaWNrIDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uS2V5RG93bjogb3BlbkZpbGVEaWFsb2dPbkNsaWNrID8gdGhpcy5vbktleURvd24gOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgICBvbkRyb3A6IHRoaXMub25GaWxlRHJvcCxcbiAgICAgICAgb25EcmFnT3ZlcjogdGhpcy5vbkZpbGVEcm9wLFxuICAgICAgICB0YWJJbmRleDogJzAnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGV2ZW50cywge1xuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7fSwgcGlja0F0dHJzKG90aGVyUHJvcHMsIHtcbiAgICAgICAgYXJpYTogdHJ1ZSxcbiAgICAgICAgZGF0YTogdHJ1ZVxuICAgICAgfSksIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZUZpbGVJbnB1dCxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTk5NDhcbiAgICAgICAgLFxuICAgICAgICBrZXk6IHRoaXMuc3RhdGUudWlkLFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0sIHN0eWxlcy5pbnB1dCksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcy5pbnB1dCxcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRcbiAgICAgIH0sIGRpclByb3BzLCB7XG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgIH0sIGNhcHR1cmUgIT0gbnVsbCA/IHtcbiAgICAgICAgY2FwdHVyZTogY2FwdHVyZVxuICAgICAgfSA6IHt9KSksIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEFqYXhVcGxvYWRlcjtcbn0oQ29tcG9uZW50KTtcbmV4cG9ydCBkZWZhdWx0IEFqYXhVcGxvYWRlcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczowICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqYXhVcGxvYWQgZnJvbSAnLi9BamF4VXBsb2FkZXInO1xuZnVuY3Rpb24gZW1wdHkoKSB7fVxudmFyIFVwbG9hZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVXBsb2FkLCBfQ29tcG9uZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihVcGxvYWQpO1xuICBmdW5jdGlvbiBVcGxvYWQoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVcGxvYWQpO1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzLnVwbG9hZGVyID0gdm9pZCAwO1xuICAgIF90aGlzLnNhdmVVcGxvYWRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy51cGxvYWRlciA9IG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFVwbG9hZCwgW3tcbiAgICBrZXk6IFwiYWJvcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoZmlsZSkge1xuICAgICAgdGhpcy51cGxvYWRlci5hYm9ydChmaWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBamF4VXBsb2FkLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IHRoaXMuc2F2ZVVwbG9hZGVyXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBVcGxvYWQ7XG59KENvbXBvbmVudCk7XG5VcGxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgcHJlZml4Q2xzOiAncmMtdXBsb2FkJyxcbiAgZGF0YToge30sXG4gIGhlYWRlcnM6IHt9LFxuICBuYW1lOiAnZmlsZScsXG4gIG11bHRpcGFydDogZmFsc2UsXG4gIG9uU3RhcnQ6IGVtcHR5LFxuICBvbkVycm9yOiBlbXB0eSxcbiAgb25TdWNjZXNzOiBlbXB0eSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBiZWZvcmVVcGxvYWQ6IG51bGwsXG4gIGN1c3RvbVJlcXVlc3Q6IG51bGwsXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gIG9wZW5GaWxlRGlhbG9nT25DbGljazogdHJ1ZVxufTtcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiLCJpbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGZpbGUsIGFjY2VwdGVkRmlsZXMpIHtcbiAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xuICAgIHZhciBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLm5hbWUgfHwgJyc7XG4gICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlIHx8ICcnO1xuICAgIHZhciBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XG4gICAgICAvLyBUaGlzIGlzIHNvbWV0aGluZyBsaWtlICovKiwqICBhbGxvdyBhbGwgZmlsZXNcbiAgICAgIGlmICgvXlxcKihcXC9cXCopPyQvLnRlc3QodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBsaWtlIC5qcGcsIC5wbmdcbiAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgdmFyIGxvd2VyRmlsZU5hbWUgPSBmaWxlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgbG93ZXJUeXBlID0gdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBhZmZpeExpc3QgPSBbbG93ZXJUeXBlXTtcbiAgICAgICAgaWYgKGxvd2VyVHlwZSA9PT0gJy5qcGcnIHx8IGxvd2VyVHlwZSA9PT0gJy5qcGVnJykge1xuICAgICAgICAgIGFmZml4TGlzdCA9IFsnLmpwZycsICcuanBlZyddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZmZpeExpc3Quc29tZShmdW5jdGlvbiAoYWZmaXgpIHtcbiAgICAgICAgICByZXR1cm4gbG93ZXJGaWxlTmFtZS5lbmRzV2l0aChhZmZpeCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICBpZiAoL1xcL1xcKiQvLnRlc3QodmFsaWRUeXBlKSkge1xuICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgfVxuICAgICAgLy8gRnVsbCBtYXRjaFxuICAgICAgaWYgKG1pbWVUeXBlID09PSB2YWxpZFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyBJbnZhbGlkYXRlIHR5cGUgc2hvdWxkIHNraXBcbiAgICAgIGlmICgvXlxcdyskLy50ZXN0KHZhbGlkVHlwZSkpIHtcbiAgICAgICAgd2FybmluZyhmYWxzZSwgXCJVcGxvYWQgdGFrZXMgYW4gaW52YWxpZGF0ZSAnYWNjZXB0JyB0eXBlICdcIi5jb25jYXQodmFsaWRUeXBlLCBcIicuU2tpcCBmb3IgY2hlY2suXCIpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTsiLCJpbXBvcnQgVXBsb2FkIGZyb20gJy4vVXBsb2FkJztcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiLCJmdW5jdGlvbiBnZXRFcnJvcihvcHRpb24sIHhocikge1xuICB2YXIgbXNnID0gXCJjYW5ub3QgXCIuY29uY2F0KG9wdGlvbi5tZXRob2QsIFwiIFwiKS5jb25jYXQob3B0aW9uLmFjdGlvbiwgXCIgXCIpLmNvbmNhdCh4aHIuc3RhdHVzLCBcIidcIik7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBvcHRpb24ubWV0aG9kO1xuICBlcnIudXJsID0gb3B0aW9uLmFjdGlvbjtcbiAgcmV0dXJuIGVycjtcbn1cbmZ1bmN0aW9uIGdldEJvZHkoeGhyKSB7XG4gIHZhciB0ZXh0ID0geGhyLnJlc3BvbnNlVGV4dCB8fCB4aHIucmVzcG9uc2U7XG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBsb2FkKG9wdGlvbikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICBpZiAob3B0aW9uLm9uUHJvZ3Jlc3MgJiYgeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKGUpIHtcbiAgICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICB9XG4gICAgICBvcHRpb24ub25Qcm9ncmVzcyhlKTtcbiAgICB9O1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9uLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uLmRhdGFba2V5XTtcbiAgICAgIC8vIHN1cHBvcnQga2V5LXZhbHVlIGFycmF5IGRhdGFcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgLy8geyBsaXN0OiBbIDExLCAyMiBdIH1cbiAgICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2xpc3RbXScsIDExKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJcIi5jb25jYXQoa2V5LCBcIltdXCIpLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgaWYgKG9wdGlvbi5maWxlIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGZvcm1EYXRhLmFwcGVuZChvcHRpb24uZmlsZW5hbWUsIG9wdGlvbi5maWxlLCBvcHRpb24uZmlsZS5uYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtRGF0YS5hcHBlbmQob3B0aW9uLmZpbGVuYW1lLCBvcHRpb24uZmlsZSk7XG4gIH1cbiAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihlKSB7XG4gICAgb3B0aW9uLm9uRXJyb3IoZSk7XG4gIH07XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgLy8gYWxsb3cgc3VjY2VzcyB3aGVuIDJ4eCBzdGF0dXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91cGxvYWQvaXNzdWVzLzM0XG4gICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgIHJldHVybiBvcHRpb24ub25FcnJvcihnZXRFcnJvcihvcHRpb24sIHhociksIGdldEJvZHkoeGhyKSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb24ub25TdWNjZXNzKGdldEJvZHkoeGhyKSwgeGhyKTtcbiAgfTtcbiAgeGhyLm9wZW4ob3B0aW9uLm1ldGhvZCwgb3B0aW9uLmFjdGlvbiwgdHJ1ZSk7XG4gIC8vIEhhcyB0byBiZSBhZnRlciBgLm9wZW4oKWAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZW55by9kcm9wem9uZS9pc3N1ZXMvMTc5XG4gIGlmIChvcHRpb24ud2l0aENyZWRlbnRpYWxzICYmICd3aXRoQ3JlZGVudGlhbHMnIGluIHhocikge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG4gIHZhciBoZWFkZXJzID0gb3B0aW9uLmhlYWRlcnMgfHwge307XG4gIC8vIHdoZW4gc2V0IGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IG51bGwgLCBjYW4gY2xvc2UgZGVmYXVsdCBYSFIgaGVhZGVyXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3VwbG9hZC9pc3N1ZXMvMzNcbiAgaWYgKGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gIH1cbiAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgIGlmIChoZWFkZXJzW2hdICE9PSBudWxsKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoLCBoZWFkZXJzW2hdKTtcbiAgICB9XG4gIH0pO1xuICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gIHJldHVybiB7XG4gICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxuICB9O1xufSIsImZ1bmN0aW9uIGxvb3BGaWxlcyhpdGVtLCBjYWxsYmFjaykge1xuICB2YXIgZGlyUmVhZGVyID0gaXRlbS5jcmVhdGVSZWFkZXIoKTtcbiAgdmFyIGZpbGVMaXN0ID0gW107XG4gIGZ1bmN0aW9uIHNlcXVlbmNlKCkge1xuICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgdmFyIGVudHJ5TGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbnRyaWVzKTtcbiAgICAgIGZpbGVMaXN0ID0gZmlsZUxpc3QuY29uY2F0KGVudHJ5TGlzdCk7XG4gICAgICAvLyBDaGVjayBpZiBhbGwgdGhlIGZpbGUgaGFzIGJlZW4gdmlld2VkXG4gICAgICB2YXIgaXNGaW5pc2hlZCA9ICFlbnRyeUxpc3QubGVuZ3RoO1xuICAgICAgaWYgKGlzRmluaXNoZWQpIHtcbiAgICAgICAgY2FsbGJhY2soZmlsZUxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VxdWVuY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXF1ZW5jZSgpO1xufVxudmFyIHRyYXZlcnNlRmlsZVRyZWUgPSBmdW5jdGlvbiB0cmF2ZXJzZUZpbGVUcmVlKGZpbGVzLCBjYWxsYmFjaywgaXNBY2NlcHRlZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG4gIHZhciBfdHJhdmVyc2VGaWxlVHJlZSA9IGZ1bmN0aW9uIF90cmF2ZXJzZUZpbGVUcmVlKGl0ZW0sIHBhdGgpIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgaXRlbS5wYXRoID0gcGF0aCB8fCAnJztcbiAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcbiAgICAgIGl0ZW0uZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBpZiAoaXNBY2NlcHRlZChmaWxlKSkge1xuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NDI2XG4gICAgICAgICAgaWYgKGl0ZW0uZnVsbFBhdGggJiYgIWZpbGUud2Via2l0UmVsYXRpdmVQYXRoKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhmaWxlLCB7XG4gICAgICAgICAgICAgIHdlYmtpdFJlbGF0aXZlUGF0aDoge1xuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICBmaWxlLndlYmtpdFJlbGF0aXZlUGF0aCA9IGl0ZW0uZnVsbFBhdGgucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGZpbGUsIHtcbiAgICAgICAgICAgICAgd2Via2l0UmVsYXRpdmVQYXRoOiB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsYmFjayhbZmlsZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcbiAgICAgIGxvb3BGaWxlcyhpdGVtLCBmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5SXRlbSkge1xuICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJ5SXRlbSwgXCJcIi5jb25jYXQocGF0aCkuY29uY2F0KGl0ZW0ubmFtZSwgXCIvXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICBfdHJhdmVyc2VGaWxlVHJlZShmaWxlLndlYmtpdEdldEFzRW50cnkoKSk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHRyYXZlcnNlRmlsZVRyZWU7IiwidmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xudmFyIGluZGV4ID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpZCgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIHJldHVybiBcInJjLXVwbG9hZC1cIi5jb25jYXQobm93LCBcIi1cIikuY29uY2F0KCsraW5kZXgpO1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG52YXIgYXR0cmlidXRlcyA9IFwiYWNjZXB0IGFjY2VwdENoYXJzZXQgYWNjZXNzS2V5IGFjdGlvbiBhbGxvd0Z1bGxTY3JlZW4gYWxsb3dUcmFuc3BhcmVuY3lcXG4gICAgYWx0IGFzeW5jIGF1dG9Db21wbGV0ZSBhdXRvRm9jdXMgYXV0b1BsYXkgY2FwdHVyZSBjZWxsUGFkZGluZyBjZWxsU3BhY2luZyBjaGFsbGVuZ2VcXG4gICAgY2hhclNldCBjaGVja2VkIGNsYXNzSUQgY2xhc3NOYW1lIGNvbFNwYW4gY29scyBjb250ZW50IGNvbnRlbnRFZGl0YWJsZSBjb250ZXh0TWVudVxcbiAgICBjb250cm9scyBjb29yZHMgY3Jvc3NPcmlnaW4gZGF0YSBkYXRlVGltZSBkZWZhdWx0IGRlZmVyIGRpciBkaXNhYmxlZCBkb3dubG9hZCBkcmFnZ2FibGVcXG4gICAgZW5jVHlwZSBmb3JtIGZvcm1BY3Rpb24gZm9ybUVuY1R5cGUgZm9ybU1ldGhvZCBmb3JtTm9WYWxpZGF0ZSBmb3JtVGFyZ2V0IGZyYW1lQm9yZGVyXFxuICAgIGhlYWRlcnMgaGVpZ2h0IGhpZGRlbiBoaWdoIGhyZWYgaHJlZkxhbmcgaHRtbEZvciBodHRwRXF1aXYgaWNvbiBpZCBpbnB1dE1vZGUgaW50ZWdyaXR5XFxuICAgIGlzIGtleVBhcmFtcyBrZXlUeXBlIGtpbmQgbGFiZWwgbGFuZyBsaXN0IGxvb3AgbG93IG1hbmlmZXN0IG1hcmdpbkhlaWdodCBtYXJnaW5XaWR0aCBtYXggbWF4TGVuZ3RoIG1lZGlhXFxuICAgIG1lZGlhR3JvdXAgbWV0aG9kIG1pbiBtaW5MZW5ndGggbXVsdGlwbGUgbXV0ZWQgbmFtZSBub1ZhbGlkYXRlIG5vbmNlIG9wZW5cXG4gICAgb3B0aW11bSBwYXR0ZXJuIHBsYWNlaG9sZGVyIHBvc3RlciBwcmVsb2FkIHJhZGlvR3JvdXAgcmVhZE9ubHkgcmVsIHJlcXVpcmVkXFxuICAgIHJldmVyc2VkIHJvbGUgcm93U3BhbiByb3dzIHNhbmRib3ggc2NvcGUgc2NvcGVkIHNjcm9sbGluZyBzZWFtbGVzcyBzZWxlY3RlZFxcbiAgICBzaGFwZSBzaXplIHNpemVzIHNwYW4gc3BlbGxDaGVjayBzcmMgc3JjRG9jIHNyY0xhbmcgc3JjU2V0IHN0YXJ0IHN0ZXAgc3R5bGVcXG4gICAgc3VtbWFyeSB0YWJJbmRleCB0YXJnZXQgdGl0bGUgdHlwZSB1c2VNYXAgdmFsdWUgd2lkdGggd21vZGUgd3JhcFwiO1xudmFyIGV2ZW50c05hbWUgPSBcIm9uQ29weSBvbkN1dCBvblBhc3RlIG9uQ29tcG9zaXRpb25FbmQgb25Db21wb3NpdGlvblN0YXJ0IG9uQ29tcG9zaXRpb25VcGRhdGUgb25LZXlEb3duXFxuICAgIG9uS2V5UHJlc3Mgb25LZXlVcCBvbkZvY3VzIG9uQmx1ciBvbkNoYW5nZSBvbklucHV0IG9uU3VibWl0IG9uQ2xpY2sgb25Db250ZXh0TWVudSBvbkRvdWJsZUNsaWNrXFxuICAgIG9uRHJhZyBvbkRyYWdFbmQgb25EcmFnRW50ZXIgb25EcmFnRXhpdCBvbkRyYWdMZWF2ZSBvbkRyYWdPdmVyIG9uRHJhZ1N0YXJ0IG9uRHJvcCBvbk1vdXNlRG93blxcbiAgICBvbk1vdXNlRW50ZXIgb25Nb3VzZUxlYXZlIG9uTW91c2VNb3ZlIG9uTW91c2VPdXQgb25Nb3VzZU92ZXIgb25Nb3VzZVVwIG9uU2VsZWN0IG9uVG91Y2hDYW5jZWxcXG4gICAgb25Ub3VjaEVuZCBvblRvdWNoTW92ZSBvblRvdWNoU3RhcnQgb25TY3JvbGwgb25XaGVlbCBvbkFib3J0IG9uQ2FuUGxheSBvbkNhblBsYXlUaHJvdWdoXFxuICAgIG9uRHVyYXRpb25DaGFuZ2Ugb25FbXB0aWVkIG9uRW5jcnlwdGVkIG9uRW5kZWQgb25FcnJvciBvbkxvYWRlZERhdGEgb25Mb2FkZWRNZXRhZGF0YVxcbiAgICBvbkxvYWRTdGFydCBvblBhdXNlIG9uUGxheSBvblBsYXlpbmcgb25Qcm9ncmVzcyBvblJhdGVDaGFuZ2Ugb25TZWVrZWQgb25TZWVraW5nIG9uU3RhbGxlZCBvblN1c3BlbmQgb25UaW1lVXBkYXRlIG9uVm9sdW1lQ2hhbmdlIG9uV2FpdGluZyBvbkxvYWQgb25FcnJvclwiO1xudmFyIHByb3BMaXN0ID0gXCJcIi5jb25jYXQoYXR0cmlidXRlcywgXCIgXCIpLmNvbmNhdChldmVudHNOYW1lKS5zcGxpdCgvW1xcc1xcbl0rLyk7XG5cbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xudmFyIGFyaWFQcmVmaXggPSAnYXJpYS0nO1xudmFyIGRhdGFQcmVmaXggPSAnZGF0YS0nO1xuZnVuY3Rpb24gbWF0Y2goa2V5LCBwcmVmaXgpIHtcbiAgcmV0dXJuIGtleS5pbmRleE9mKHByZWZpeCkgPT09IDA7XG59XG4vKipcbiAqIFBpY2tlciBwcm9wcyBmcm9tIGV4aXN0IHByb3BzIHdpdGggZmlsdGVyXG4gKiBAcGFyYW0gcHJvcHMgUGFzc2VkIHByb3BzXG4gKiBAcGFyYW0gYXJpYU9ubHkgYm9vbGVhbiB8IHsgYXJpYT86IGJvb2xlYW47IGRhdGE/OiBib29sZWFuOyBhdHRyPzogYm9vbGVhbjsgfSBmaWx0ZXIgY29uZmlnXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2tBdHRycyhwcm9wcykge1xuICB2YXIgYXJpYU9ubHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICB2YXIgbWVyZ2VkQ29uZmlnO1xuICBpZiAoYXJpYU9ubHkgPT09IGZhbHNlKSB7XG4gICAgbWVyZ2VkQ29uZmlnID0ge1xuICAgICAgYXJpYTogdHJ1ZSxcbiAgICAgIGRhdGE6IHRydWUsXG4gICAgICBhdHRyOiB0cnVlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChhcmlhT25seSA9PT0gdHJ1ZSkge1xuICAgIG1lcmdlZENvbmZpZyA9IHtcbiAgICAgIGFyaWE6IHRydWVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZENvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIGFyaWFPbmx5KTtcbiAgfVxuICB2YXIgYXR0cnMgPSB7fTtcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChcbiAgICAvLyBBcmlhXG4gICAgbWVyZ2VkQ29uZmlnLmFyaWEgJiYgKGtleSA9PT0gJ3JvbGUnIHx8IG1hdGNoKGtleSwgYXJpYVByZWZpeCkpIHx8XG4gICAgLy8gRGF0YVxuICAgIG1lcmdlZENvbmZpZy5kYXRhICYmIG1hdGNoKGtleSwgZGF0YVByZWZpeCkgfHxcbiAgICAvLyBBdHRyXG4gICAgbWVyZ2VkQ29uZmlnLmF0dHIgJiYgcHJvcExpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgYXR0cnNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGF0dHJzO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbnZhciB3YXJuZWQgPSB7fTtcbnZhciBwcmVXYXJuaW5nRm5zID0gW107XG5cbi8qKlxuICogUHJlIHdhcm5pbmcgZW5hYmxlIHlvdSB0byBwYXJzZSBjb250ZW50IGJlZm9yZSBjb25zb2xlLmVycm9yLlxuICogTW9kaWZ5IHRvIG51bGwgd2lsbCBwcmV2ZW50IHdhcm5pbmcuXG4gKi9cbmV4cG9ydCB2YXIgcHJlTWVzc2FnZSA9IGZ1bmN0aW9uIHByZU1lc3NhZ2UoZm4pIHtcbiAgcHJlV2FybmluZ0Zucy5wdXNoKGZuKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyh2YWxpZCwgbWVzc2FnZSkge1xuICAvLyBTdXBwb3J0IHVnbGlmeVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhdmFsaWQgJiYgY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbmFsTWVzc2FnZSA9IHByZVdhcm5pbmdGbnMucmVkdWNlKGZ1bmN0aW9uIChtc2csIHByZU1lc3NhZ2VGbikge1xuICAgICAgcmV0dXJuIHByZU1lc3NhZ2VGbihtc2cgIT09IG51bGwgJiYgbXNnICE9PSB2b2lkIDAgPyBtc2cgOiAnJywgJ3dhcm5pbmcnKTtcbiAgICB9LCBtZXNzYWdlKTtcbiAgICBpZiAoZmluYWxNZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiV2FybmluZzogXCIuY29uY2F0KGZpbmFsTWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdGUodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaW5hbE1lc3NhZ2UgPSBwcmVXYXJuaW5nRm5zLnJlZHVjZShmdW5jdGlvbiAobXNnLCBwcmVNZXNzYWdlRm4pIHtcbiAgICAgIHJldHVybiBwcmVNZXNzYWdlRm4obXNnICE9PSBudWxsICYmIG1zZyAhPT0gdm9pZCAwID8gbXNnIDogJycsICdub3RlJyk7XG4gICAgfSwgbWVzc2FnZSk7XG4gICAgaWYgKGZpbmFsTWVzc2FnZSkge1xuICAgICAgY29uc29sZS53YXJuKFwiTm90ZTogXCIuY29uY2F0KGZpbmFsTWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxsKG1ldGhvZCwgdmFsaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWxpZCAmJiAhd2FybmVkW21lc3NhZ2VdKSB7XG4gICAgbWV0aG9kKGZhbHNlLCBtZXNzYWdlKTtcbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ09uY2UodmFsaWQsIG1lc3NhZ2UpIHtcbiAgY2FsbCh3YXJuaW5nLCB2YWxpZCwgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbm90ZU9uY2UodmFsaWQsIG1lc3NhZ2UpIHtcbiAgY2FsbChub3RlLCB2YWxpZCwgbWVzc2FnZSk7XG59XG53YXJuaW5nT25jZS5wcmVNZXNzYWdlID0gcHJlTWVzc2FnZTtcbndhcm5pbmdPbmNlLnJlc2V0V2FybmVkID0gcmVzZXRXYXJuZWQ7XG53YXJuaW5nT25jZS5ub3RlT25jZSA9IG5vdGVPbmNlO1xuZXhwb3J0IGRlZmF1bHQgd2FybmluZ09uY2U7XG4vKiBlc2xpbnQtZW5hYmxlICovIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgVXBsb2FkIGZyb20gJ3JjLXVwbG9hZCdcbmltcG9ydCAqIGFzIGNzdmpzb24gZnJvbSAnY3N2anNvbidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWNjZXB0OiBzdHJpbmdcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIG9uVXBsb2FkU3VjY2Vzcz86IChjc3Y6IENzdkZpbGVJbmZvKSA9PiB2b2lkXG59XG5leHBvcnQgaW50ZXJmYWNlIENzdkZpbGVJbmZvIHtcbiAgbmFtZTogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgcmVjb3JkczogQXJyYXk8eyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+XG59XG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgdW5rbm93bj4ge1xuICBvblVwbG9hZFN1Y2Nlc3MgPSAocmVzdWx0LCBmaWxlLCB4aHIpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgcmVzb2x2ZShjc3Zqc29uLnRvT2JqZWN0KHJlYWRlci5yZXN1bHQpKSB9KS50aGVuKChyZWNvcmRzOiBBcnJheTx7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4pID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwbG9hZFN1Y2Nlc3MgJiYgdGhpcy5wcm9wcy5vblVwbG9hZFN1Y2Nlc3MoeyByZWNvcmRzLCBuYW1lOiBmaWxlLm5hbWUsIGlkOiBmaWxlLnVpZC5yZXBsYWNlKCdyYycsICdleGInKSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VXBsb2FkXG4gICAgICAgIGlkPSdmaWxlU2VsZWN0JyBvblN1Y2Nlc3M9e3RoaXMub25VcGxvYWRTdWNjZXNzfSBzdHlsZT17eyB3aWR0aDogJzYwcHgnLCBoZWlnaHQ6ICcyMHB4JyB9fSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3ctMTAwIGgtMTAwJywgeyBbdGhpcy5wcm9wcy5jbGFzc05hbWVdOiAhIXRoaXMucHJvcHMuY2xhc3NOYW1lIH0pfVxuICAgICAgICBhY2NlcHQ9e3RoaXMucHJvcHMuYWNjZXB0fVxuICAgICAgPlVwbG9hZFxuICAgICAgPC9VcGxvYWQ+XG4gICAgKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLyogKGlnbm9yZWQpICovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBnZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgIHJlc3VsdDtcbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZTtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZTtcbiAgfTtcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKG8gPT09IHMpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gaSkgdGhyb3cgYTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdCxcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZm9yIChuLm1ldGhvZCA9IGksIG4uYXJnID0gYTs7KSB7XG4gICAgICAgIHZhciBjID0gbi5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB2YXIgdSA9IG1heWJlSW52b2tlRGVsZWdhdGUoYywgbik7XG4gICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgIGlmICh1ID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IG4ubWV0aG9kKSBuLnNlbnQgPSBuLl9zZW50ID0gbi5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBuLm1ldGhvZCkge1xuICAgICAgICAgIGlmIChvID09PSBoKSB0aHJvdyBvID0gcywgbi5hcmc7XG4gICAgICAgICAgbi5kaXNwYXRjaEV4Y2VwdGlvbihuLmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBuLm1ldGhvZCAmJiBuLmFicnVwdChcInJldHVyblwiLCBuLmFyZyk7XG4gICAgICAgIG8gPSBmO1xuICAgICAgICB2YXIgcCA9IHRyeUNhdGNoKGUsIHIsIG4pO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcC50eXBlKSB7XG4gICAgICAgICAgaWYgKG8gPSBuLmRvbmUgPyBzIDogbCwgcC5hcmcgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcC5hcmcsXG4gICAgICAgICAgICBkb25lOiBuLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcC50eXBlICYmIChvID0gcywgbi5tZXRob2QgPSBcInRocm93XCIsIG4uYXJnID0gcC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSB7XG4gICAgdmFyIG4gPSByLm1ldGhvZCxcbiAgICAgIG8gPSBlLml0ZXJhdG9yW25dO1xuICAgIGlmIChvID09PSB0KSByZXR1cm4gci5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbiAmJiBlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChyLm1ldGhvZCA9IFwicmV0dXJuXCIsIHIuYXJnID0gdCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSwgXCJ0aHJvd1wiID09PSByLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbiAmJiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbiArIFwiJyBtZXRob2RcIikpLCB5O1xuICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IGkuYXJnLCByLmRlbGVnYXRlID0gbnVsbCwgeTtcbiAgICB2YXIgYSA9IGkuYXJnO1xuICAgIHJldHVybiBhID8gYS5kb25lID8gKHJbZS5yZXN1bHROYW1lXSA9IGEudmFsdWUsIHIubmV4dCA9IGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksIHIuZGVsZWdhdGUgPSBudWxsLCB5KSA6IGEgOiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHRyeUxvYzogdFswXVxuICAgIH07XG4gICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTtcbiAgICBlLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhlKSB7XG4gICAgaWYgKGUgfHwgXCJcIiA9PT0gZSkge1xuICAgICAgdmFyIHIgPSBlW2FdO1xuICAgICAgaWYgKHIpIHJldHVybiByLmNhbGwoZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm5leHQpIHJldHVybiBlO1xuICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG8gPSAtMSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBpLm5leHQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKF90eXBlb2YoZSkgKyBcIiBpcyBub3QgaXRlcmFibGVcIik7XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBvKGcsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBvKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgdC5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFlICYmIChlID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChlLmRpc3BsYXlOYW1lIHx8IGUubmFtZSkpO1xuICB9LCBlLm1hcmsgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKHQuX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZSh0LCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGcpLCB0O1xuICB9LCBlLmF3cmFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogdFxuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZS5hc3luYyA9IGZ1bmN0aW9uICh0LCByLCBuLCBvLCBpKSB7XG4gICAgdm9pZCAwID09PSBpICYmIChpID0gUHJvbWlzZSk7XG4gICAgdmFyIGEgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKHQsIHIsIG4sIG8pLCBpKTtcbiAgICByZXR1cm4gZS5pc0dlbmVyYXRvckZ1bmN0aW9uKHIpID8gYSA6IGEubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRvbmUgPyB0LnZhbHVlIDogYS5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhnKSwgZGVmaW5lKGcsIHUsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoZywgYSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKGcsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZS5rZXlzID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IE9iamVjdCh0KSxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHZhciBuIGluIGUpIHIucHVzaChuKTtcbiAgICByZXR1cm4gci5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsgci5sZW5ndGg7KSB7XG4gICAgICAgIHZhciB0ID0gci5wb3AoKTtcbiAgICAgICAgaWYgKHQgaW4gZSkgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBlLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KGUpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhZSkgZm9yICh2YXIgciBpbiB0aGlzKSBcInRcIiA9PT0gci5jaGFyQXQoMCkgJiYgbi5jYWxsKHRoaXMsIHIpICYmICFpc05hTigrci5zbGljZSgxKSkgJiYgKHRoaXNbcl0gPSB0KTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciB0ID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihlKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBlO1xuICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKG4sIG8pIHtcbiAgICAgICAgcmV0dXJuIGEudHlwZSA9IFwidGhyb3dcIiwgYS5hcmcgPSBlLCByLm5leHQgPSBuLCBvICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCAhIW87XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBvID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IG8gPj0gMDsgLS1vKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy50cnlFbnRyaWVzW29dLFxuICAgICAgICAgIGEgPSBpLmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gaS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChpLnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgYyA9IG4uY2FsbChpLCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgdSA9IG4uY2FsbChpLCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGMgJiYgdSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXUpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodCwgZSkge1xuICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJ5RW50cmllc1tyXTtcbiAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldiAmJiBuLmNhbGwobywgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IG8uZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSAmJiAoXCJicmVha1wiID09PSB0IHx8IFwiY29udGludWVcIiA9PT0gdCkgJiYgaS50cnlMb2MgPD0gZSAmJiBlIDw9IGkuZmluYWxseUxvYyAmJiAoaSA9IG51bGwpO1xuICAgICAgdmFyIGEgPSBpID8gaS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGkuZmluYWxseUxvYywgeSkgOiB0aGlzLmNvbXBsZXRlKGEpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkge1xuICAgICAgICAgIHZhciBuID0gci5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG4udHlwZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSAnLi9saWIvZmlsZS11cGxvYWRlci9zdHlsZXMnO1xuLy8gcmVnaXN0ZXJTdHlsZXMoJ2ppbXUtdWkvYmFzaWMvZmlsZS11cGxvYWRlci8nLCB7XG4vLyAgIGNvbXBvbmVudFN0eWxlczogc3R5bGVzXG4vLyB9KTtcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvZmlsZS11cGxvYWRlcidcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==