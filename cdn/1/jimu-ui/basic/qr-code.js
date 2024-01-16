System.register(["jimu-core","jimu-core/react","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/qrcode.react/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode.react/lib/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QRCodeCanvas: () => (/* binding */ QRCodeCanvas),
/* harmony export */   QRCodeSVG: () => (/* binding */ QRCodeSVG),
/* harmony export */   "default": () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx


// src/third-party/qrcodegen/index.ts
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var qrcodegen;
((qrcodegen2) => {
  const _QrCode = class {
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++)
        row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _QrCode.encodeSegments(segs, ecl);
    }
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _QrCode.encodeSegments([seg], ecl);
    }
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_QrCode.Ecc.MEDIUM, _QrCode.Ecc.QUARTILE, _QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new _QrCode(version, ecl, dataCodewords, mask);
    }
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0; i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _QrCode.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    drawCodewords(data) {
      if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += _QrCode.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += _QrCode.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += _QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * _QrCode.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    static getNumRawDataModules(ver) {
      if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = _QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = _QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  };
  let QrCode = _QrCode;
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.PENALTY_N1 = 3;
  QrCode.PENALTY_N2 = 3;
  QrCode.PENALTY_N3 = 40;
  QrCode.PENALTY_N4 = 10;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  const _QrSegment = class {
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
    }
    static makeNumeric(digits) {
      if (!_QrSegment.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    static makeAlphanumeric(text) {
      if (!_QrSegment.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_QrSegment.isNumeric(text))
        return [_QrSegment.makeNumeric(text)];
      else if (_QrSegment.isAlphanumeric(text))
        return [_QrSegment.makeAlphanumeric(text)];
      else
        return [_QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))];
    }
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
    }
    static isNumeric(text) {
      return _QrSegment.NUMERIC_REGEX.test(text);
    }
    static isAlphanumeric(text) {
      return _QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  };
  let QrSegment = _QrSegment;
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrCode;
  ((QrCode2) => {
    const _Ecc = class {
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    };
    let Ecc = _Ecc;
    Ecc.LOW = new _Ecc(0, 1);
    Ecc.MEDIUM = new _Ecc(1, 0);
    Ecc.QUARTILE = new _Ecc(2, 3);
    Ecc.HIGH = new _Ecc(3, 2);
    QrCode2.Ecc = Ecc;
  })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrSegment;
  ((QrSegment2) => {
    const _Mode = class {
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    };
    let Mode = _Mode;
    Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    Mode.BYTE = new _Mode(4, [8, 16, 16]);
    Mode.KANJI = new _Mode(8, [8, 10, 12]);
    Mode.ECI = new _Mode(7, [0, 0, 0]);
    QrSegment2.Mode = Mode;
  })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;

// src/index.tsx
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var MARGIN_SIZE = 4;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y) {
    let start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
function getImageSettings(cells, size, includeMargin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x);
    let floorY = Math.floor(y);
    let ceilW = Math.ceil(w + x - floorX);
    let ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  return { x, y, h, w, excavation };
}
var SUPPORTS_PATH2D = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
function QRCodeCanvas(props) {
  const _a = props, {
    value,
    size = DEFAULT_SIZE,
    level = DEFAULT_LEVEL,
    bgColor = DEFAULT_BGCOLOR,
    fgColor = DEFAULT_FGCOLOR,
    includeMargin = DEFAULT_INCLUDEMARGIN,
    style,
    imageSettings
  } = _a, otherProps = __objRest(_a, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]);
  const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
  const _canvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const _image = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isImgLoaded, setIsImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_canvas.current != null) {
      const canvas = _canvas.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      let cells = qrcodegen_default.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]).getModules();
      const margin = includeMargin ? MARGIN_SIZE : 0;
      const numCells = cells.length + margin * 2;
      const calculatedImageSettings = getImageSettings(cells, size, includeMargin, imageSettings);
      const image = _image.current;
      const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
      if (haveImageToRender) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }
      }
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.height = canvas.width = size * pixelRatio;
      const scale = size / numCells * pixelRatio;
      ctx.scale(scale, scale);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, numCells, numCells);
      ctx.fillStyle = fgColor;
      if (SUPPORTS_PATH2D) {
        ctx.fill(new Path2D(generatePath(cells, margin)));
      } else {
        cells.forEach(function(row, rdx) {
          row.forEach(function(cell, cdx) {
            if (cell) {
              ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
            }
          });
        });
      }
      if (haveImageToRender) {
        ctx.drawImage(image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
      }
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsImageLoaded(false);
  }, [imgSrc]);
  const canvasStyle = __spreadValues({ height: size, width: size }, style);
  let img = null;
  if (imgSrc != null) {
    img = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
      src: imgSrc,
      key: imgSrc,
      style: { display: "none" },
      onLoad: () => {
        setIsImageLoaded(true);
      },
      ref: _image
    });
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("canvas", __spreadValues({
    style: canvasStyle,
    height: size,
    width: size,
    ref: _canvas
  }, otherProps)), img);
}
function QRCodeSVG(props) {
  const _a = props, {
    value,
    size = DEFAULT_SIZE,
    level = DEFAULT_LEVEL,
    bgColor = DEFAULT_BGCOLOR,
    fgColor = DEFAULT_FGCOLOR,
    includeMargin = DEFAULT_INCLUDEMARGIN,
    imageSettings
  } = _a, otherProps = __objRest(_a, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let cells = qrcodegen_default.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]).getModules();
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const calculatedImageSettings = getImageSettings(cells, size, includeMargin, imageSettings);
  let image = null;
  if (imageSettings != null && calculatedImageSettings != null) {
    if (calculatedImageSettings.excavation != null) {
      cells = excavateModules(cells, calculatedImageSettings.excavation);
    }
    image = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("image", {
      xlinkHref: imageSettings.src,
      height: calculatedImageSettings.h,
      width: calculatedImageSettings.w,
      x: calculatedImageSettings.x + margin,
      y: calculatedImageSettings.y + margin,
      preserveAspectRatio: "none"
    });
  }
  const fgPath = generatePath(cells, margin);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", __spreadValues({
    height: size,
    width: size,
    viewBox: `0 0 ${numCells} ${numCells}`
  }, otherProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fill: bgColor,
    d: `M0,0 h${numCells}v${numCells}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("path", {
    fill: fgColor,
    d: fgPath,
    shapeRendering: "crispEdges"
  }), image);
}
var QRCode = (props) => {
  const _a = props, { renderAs } = _a, otherProps = __objRest(_a, ["renderAs"]);
  if (renderAs === "svg") {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(QRCodeSVG, __spreadValues({}, otherProps));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(QRCodeCanvas, __spreadValues({}, otherProps));
};



/***/ }),

/***/ "./jimu-ui/basic/lib/qr-code/components/qr-code.tsx":
/*!**********************************************************!*\
  !*** ./jimu-ui/basic/lib/qr-code/components/qr-code.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QRCode: () => (/* binding */ QRCode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/esm/index.js");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */




class _QRCode extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        // static displayName = 'QRCode';
        this.RENDER_TYPE = 'canvas'; // just support "canvas" mode for download
        this.DOWNLOAD_FILE_NAME = 'exb-qr-code-img';
        this.DOWNLOAD_BTN_LABEL = 'Save as image';
        this._onBtnClick = () => {
            this.downloadImg();
        };
        this._getSaveBtnLabel = () => {
            return this.props.intl ? this.props.intl.formatMessage({ id: 'qrCodeSaveBtnLabel', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.qrCodeSaveBtnLabel }) : this.DOWNLOAD_BTN_LABEL;
        };
        this.wapperRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.hiddenLinkRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    componentDidCatch(error, errorInfo) {
        if (typeof this.props.onError === 'function') {
            this.props.onError(error, errorInfo);
        }
    }
    downloadImg() {
        try {
            const imgNode = this.wapperRef.current;
            const aNode = this.hiddenLinkRef.current;
            const canvas = imgNode.querySelector('canvas');
            aNode.href = canvas.toDataURL();
            aNode.download = this.props.downloadFileName ? this.props.downloadFileName : this.DOWNLOAD_FILE_NAME;
            aNode.click();
        }
        catch (e) {
            console.warn('jimuQRCode download error: ' + e);
        }
    }
    render() {
        const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(this.props.className, 'jimu-qrcode');
        let btnKlass = 'btn';
        if (this.props.hideDownloadBtn) {
            btnKlass = 'hide-btn';
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classes },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.wapperRef, className: 'qrcode-wapper' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(qrcode_react__WEBPACK_IMPORTED_MODULE_1__["default"], { value: this.props.value, size: this.props.size, bgColor: this.props.bgColor, fgColor: this.props.fgColor, level: this.props.level, includeMargin: this.props.includeMargin, renderAs: this.RENDER_TYPE }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: '', ref: this.hiddenLinkRef, tabIndex: -1 })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: btnKlass },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: this._onBtnClick, size: 'sm', type: 'secondary', className: 'mt-4' }, this._getSaveBtnLabel()))));
    }
}
/**
 *  A react component for generating a QR-code based on a URL string.
 */
const QRCode = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withStyles)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_QRCode), 'QRCode');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);


/***/ }),

/***/ "./jimu-ui/basic/lib/qr-code/styles/qr-code.ts":
/*!*****************************************************!*\
  !*** ./jimu-ui/basic/lib/qr-code/styles/qr-code.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qrcodeStyles: () => (/* binding */ qrcodeStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function qrcodeStyles(props) {
    // let theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    .qrcode-wapper{
      display: flex;
    }
    .btn{
      display: flex;
    }
    .hide-btn{
      display: none;
    }
  `;
}


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

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
/*!***********************************!*\
  !*** ./jimu-ui/basic/qr-code.tsx ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QRCode: () => (/* reexport safe */ _lib_qr_code_components_qr_code__WEBPACK_IMPORTED_MODULE_2__.QRCode)
/* harmony export */ });
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_qr_code_styles_qr_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/qr-code/styles/qr-code */ "./jimu-ui/basic/lib/qr-code/styles/qr-code.ts");
/* harmony import */ var _lib_qr_code_components_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/qr-code/components/qr-code */ "./jimu-ui/basic/lib/qr-code/components/qr-code.tsx");


(0,jimu_theme__WEBPACK_IMPORTED_MODULE_0__.registerStyles)('jimu-ui/basic/qr-code', { QRCode: _lib_qr_code_styles_qr_code__WEBPACK_IMPORTED_MODULE_1__.qrcodeStyles });


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9xci1jb2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMsd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQywwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQywwQkFBMEIsU0FBUztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0MsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckMsd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMEJBQTBCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDMEI7QUFFckUsMERBQWMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0seUVBQUUsQ0FBQztBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9xcmNvZGUucmVhY3QvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9saWIvcXItY29kZS9jb21wb25lbnRzL3FyLWNvZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9xci1jb2RlL3N0eWxlcy9xci1jb2RlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvcXItY29kZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fb2JqUmVzdCA9IChzb3VyY2UsIGV4Y2x1ZGUpID0+IHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoc291cmNlLCBwcm9wKSAmJiBleGNsdWRlLmluZGV4T2YocHJvcCkgPCAwKVxuICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICBpZiAoc291cmNlICE9IG51bGwgJiYgX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoc291cmNlKSkge1xuICAgICAgaWYgKGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDAgJiYgX19wcm9wSXNFbnVtLmNhbGwoc291cmNlLCBwcm9wKSlcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8vIHNyYy9pbmRleC50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gc3JjL3RoaXJkLXBhcnR5L3FyY29kZWdlbi9pbmRleC50c1xuLyoqXG4gKiBAbGljZW5zZSBRUiBDb2RlIGdlbmVyYXRvciBsaWJyYXJ5IChUeXBlU2NyaXB0KVxuICogQ29weXJpZ2h0IChjKSBQcm9qZWN0IE5heXVraS5cbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbiAqL1xudmFyIHFyY29kZWdlbjtcbigocXJjb2RlZ2VuMikgPT4ge1xuICBjb25zdCBfUXJDb2RlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBkYXRhQ29kZXdvcmRzLCBtc2spIHtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICB0aGlzLmVycm9yQ29ycmVjdGlvbkxldmVsID0gZXJyb3JDb3JyZWN0aW9uTGV2ZWw7XG4gICAgICB0aGlzLm1vZHVsZXMgPSBbXTtcbiAgICAgIHRoaXMuaXNGdW5jdGlvbiA9IFtdO1xuICAgICAgaWYgKHZlcnNpb24gPCBfUXJDb2RlLk1JTl9WRVJTSU9OIHx8IHZlcnNpb24gPiBfUXJDb2RlLk1BWF9WRVJTSU9OKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlZlcnNpb24gdmFsdWUgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgaWYgKG1zayA8IC0xIHx8IG1zayA+IDcpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWFzayB2YWx1ZSBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICB0aGlzLnNpemUgPSB2ZXJzaW9uICogNCArIDE3O1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKylcbiAgICAgICAgcm93LnB1c2goZmFsc2UpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICB0aGlzLm1vZHVsZXMucHVzaChyb3cuc2xpY2UoKSk7XG4gICAgICAgIHRoaXMuaXNGdW5jdGlvbi5wdXNoKHJvdy5zbGljZSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd0Z1bmN0aW9uUGF0dGVybnMoKTtcbiAgICAgIGNvbnN0IGFsbENvZGV3b3JkcyA9IHRoaXMuYWRkRWNjQW5kSW50ZXJsZWF2ZShkYXRhQ29kZXdvcmRzKTtcbiAgICAgIHRoaXMuZHJhd0NvZGV3b3JkcyhhbGxDb2Rld29yZHMpO1xuICAgICAgaWYgKG1zayA9PSAtMSkge1xuICAgICAgICBsZXQgbWluUGVuYWx0eSA9IDFlOTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLmFwcGx5TWFzayhpKTtcbiAgICAgICAgICB0aGlzLmRyYXdGb3JtYXRCaXRzKGkpO1xuICAgICAgICAgIGNvbnN0IHBlbmFsdHkgPSB0aGlzLmdldFBlbmFsdHlTY29yZSgpO1xuICAgICAgICAgIGlmIChwZW5hbHR5IDwgbWluUGVuYWx0eSkge1xuICAgICAgICAgICAgbXNrID0gaTtcbiAgICAgICAgICAgIG1pblBlbmFsdHkgPSBwZW5hbHR5O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFwcGx5TWFzayhpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXNzZXJ0KDAgPD0gbXNrICYmIG1zayA8PSA3KTtcbiAgICAgIHRoaXMubWFzayA9IG1zaztcbiAgICAgIHRoaXMuYXBwbHlNYXNrKG1zayk7XG4gICAgICB0aGlzLmRyYXdGb3JtYXRCaXRzKG1zayk7XG4gICAgICB0aGlzLmlzRnVuY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgc3RhdGljIGVuY29kZVRleHQodGV4dCwgZWNsKSB7XG4gICAgICBjb25zdCBzZWdzID0gcXJjb2RlZ2VuMi5RclNlZ21lbnQubWFrZVNlZ21lbnRzKHRleHQpO1xuICAgICAgcmV0dXJuIF9RckNvZGUuZW5jb2RlU2VnbWVudHMoc2VncywgZWNsKTtcbiAgICB9XG4gICAgc3RhdGljIGVuY29kZUJpbmFyeShkYXRhLCBlY2wpIHtcbiAgICAgIGNvbnN0IHNlZyA9IHFyY29kZWdlbjIuUXJTZWdtZW50Lm1ha2VCeXRlcyhkYXRhKTtcbiAgICAgIHJldHVybiBfUXJDb2RlLmVuY29kZVNlZ21lbnRzKFtzZWddLCBlY2wpO1xuICAgIH1cbiAgICBzdGF0aWMgZW5jb2RlU2VnbWVudHMoc2VncywgZWNsLCBtaW5WZXJzaW9uID0gMSwgbWF4VmVyc2lvbiA9IDQwLCBtYXNrID0gLTEsIGJvb3N0RWNsID0gdHJ1ZSkge1xuICAgICAgaWYgKCEoX1FyQ29kZS5NSU5fVkVSU0lPTiA8PSBtaW5WZXJzaW9uICYmIG1pblZlcnNpb24gPD0gbWF4VmVyc2lvbiAmJiBtYXhWZXJzaW9uIDw9IF9RckNvZGUuTUFYX1ZFUlNJT04pIHx8IG1hc2sgPCAtMSB8fCBtYXNrID4gNylcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHZhbHVlXCIpO1xuICAgICAgbGV0IHZlcnNpb247XG4gICAgICBsZXQgZGF0YVVzZWRCaXRzO1xuICAgICAgZm9yICh2ZXJzaW9uID0gbWluVmVyc2lvbjsgOyB2ZXJzaW9uKyspIHtcbiAgICAgICAgY29uc3QgZGF0YUNhcGFjaXR5Qml0czIgPSBfUXJDb2RlLmdldE51bURhdGFDb2Rld29yZHModmVyc2lvbiwgZWNsKSAqIDg7XG4gICAgICAgIGNvbnN0IHVzZWRCaXRzID0gUXJTZWdtZW50LmdldFRvdGFsQml0cyhzZWdzLCB2ZXJzaW9uKTtcbiAgICAgICAgaWYgKHVzZWRCaXRzIDw9IGRhdGFDYXBhY2l0eUJpdHMyKSB7XG4gICAgICAgICAgZGF0YVVzZWRCaXRzID0gdXNlZEJpdHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZlcnNpb24gPj0gbWF4VmVyc2lvbilcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkRhdGEgdG9vIGxvbmdcIik7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IG5ld0VjbCBvZiBbX1FyQ29kZS5FY2MuTUVESVVNLCBfUXJDb2RlLkVjYy5RVUFSVElMRSwgX1FyQ29kZS5FY2MuSElHSF0pIHtcbiAgICAgICAgaWYgKGJvb3N0RWNsICYmIGRhdGFVc2VkQml0cyA8PSBfUXJDb2RlLmdldE51bURhdGFDb2Rld29yZHModmVyc2lvbiwgbmV3RWNsKSAqIDgpXG4gICAgICAgICAgZWNsID0gbmV3RWNsO1xuICAgICAgfVxuICAgICAgbGV0IGJiID0gW107XG4gICAgICBmb3IgKGNvbnN0IHNlZyBvZiBzZWdzKSB7XG4gICAgICAgIGFwcGVuZEJpdHMoc2VnLm1vZGUubW9kZUJpdHMsIDQsIGJiKTtcbiAgICAgICAgYXBwZW5kQml0cyhzZWcubnVtQ2hhcnMsIHNlZy5tb2RlLm51bUNoYXJDb3VudEJpdHModmVyc2lvbiksIGJiKTtcbiAgICAgICAgZm9yIChjb25zdCBiIG9mIHNlZy5nZXREYXRhKCkpXG4gICAgICAgICAgYmIucHVzaChiKTtcbiAgICAgIH1cbiAgICAgIGFzc2VydChiYi5sZW5ndGggPT0gZGF0YVVzZWRCaXRzKTtcbiAgICAgIGNvbnN0IGRhdGFDYXBhY2l0eUJpdHMgPSBfUXJDb2RlLmdldE51bURhdGFDb2Rld29yZHModmVyc2lvbiwgZWNsKSAqIDg7XG4gICAgICBhc3NlcnQoYmIubGVuZ3RoIDw9IGRhdGFDYXBhY2l0eUJpdHMpO1xuICAgICAgYXBwZW5kQml0cygwLCBNYXRoLm1pbig0LCBkYXRhQ2FwYWNpdHlCaXRzIC0gYmIubGVuZ3RoKSwgYmIpO1xuICAgICAgYXBwZW5kQml0cygwLCAoOCAtIGJiLmxlbmd0aCAlIDgpICUgOCwgYmIpO1xuICAgICAgYXNzZXJ0KGJiLmxlbmd0aCAlIDggPT0gMCk7XG4gICAgICBmb3IgKGxldCBwYWRCeXRlID0gMjM2OyBiYi5sZW5ndGggPCBkYXRhQ2FwYWNpdHlCaXRzOyBwYWRCeXRlIF49IDIzNiBeIDE3KVxuICAgICAgICBhcHBlbmRCaXRzKHBhZEJ5dGUsIDgsIGJiKTtcbiAgICAgIGxldCBkYXRhQ29kZXdvcmRzID0gW107XG4gICAgICB3aGlsZSAoZGF0YUNvZGV3b3Jkcy5sZW5ndGggKiA4IDwgYmIubGVuZ3RoKVxuICAgICAgICBkYXRhQ29kZXdvcmRzLnB1c2goMCk7XG4gICAgICBiYi5mb3JFYWNoKChiLCBpKSA9PiBkYXRhQ29kZXdvcmRzW2kgPj4+IDNdIHw9IGIgPDwgNyAtIChpICYgNykpO1xuICAgICAgcmV0dXJuIG5ldyBfUXJDb2RlKHZlcnNpb24sIGVjbCwgZGF0YUNvZGV3b3JkcywgbWFzayk7XG4gICAgfVxuICAgIGdldE1vZHVsZSh4LCB5KSB7XG4gICAgICByZXR1cm4gMCA8PSB4ICYmIHggPCB0aGlzLnNpemUgJiYgMCA8PSB5ICYmIHkgPCB0aGlzLnNpemUgJiYgdGhpcy5tb2R1bGVzW3ldW3hdO1xuICAgIH1cbiAgICBnZXRNb2R1bGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kdWxlcztcbiAgICB9XG4gICAgZHJhd0Z1bmN0aW9uUGF0dGVybnMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2V0RnVuY3Rpb25Nb2R1bGUoNiwgaSwgaSAlIDIgPT0gMCk7XG4gICAgICAgIHRoaXMuc2V0RnVuY3Rpb25Nb2R1bGUoaSwgNiwgaSAlIDIgPT0gMCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXdGaW5kZXJQYXR0ZXJuKDMsIDMpO1xuICAgICAgdGhpcy5kcmF3RmluZGVyUGF0dGVybih0aGlzLnNpemUgLSA0LCAzKTtcbiAgICAgIHRoaXMuZHJhd0ZpbmRlclBhdHRlcm4oMywgdGhpcy5zaXplIC0gNCk7XG4gICAgICBjb25zdCBhbGlnblBhdFBvcyA9IHRoaXMuZ2V0QWxpZ25tZW50UGF0dGVyblBvc2l0aW9ucygpO1xuICAgICAgY29uc3QgbnVtQWxpZ24gPSBhbGlnblBhdFBvcy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFsaWduOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1BbGlnbjsgaisrKSB7XG4gICAgICAgICAgaWYgKCEoaSA9PSAwICYmIGogPT0gMCB8fCBpID09IDAgJiYgaiA9PSBudW1BbGlnbiAtIDEgfHwgaSA9PSBudW1BbGlnbiAtIDEgJiYgaiA9PSAwKSlcbiAgICAgICAgICAgIHRoaXMuZHJhd0FsaWdubWVudFBhdHRlcm4oYWxpZ25QYXRQb3NbaV0sIGFsaWduUGF0UG9zW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kcmF3Rm9ybWF0Qml0cygwKTtcbiAgICAgIHRoaXMuZHJhd1ZlcnNpb24oKTtcbiAgICB9XG4gICAgZHJhd0Zvcm1hdEJpdHMobWFzaykge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwuZm9ybWF0Qml0cyA8PCAzIHwgbWFzaztcbiAgICAgIGxldCByZW0gPSBkYXRhO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKVxuICAgICAgICByZW0gPSByZW0gPDwgMSBeIChyZW0gPj4+IDkpICogMTMzNTtcbiAgICAgIGNvbnN0IGJpdHMgPSAoZGF0YSA8PCAxMCB8IHJlbSkgXiAyMTUyMjtcbiAgICAgIGFzc2VydChiaXRzID4+PiAxNSA9PSAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDU7IGkrKylcbiAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk1vZHVsZSg4LCBpLCBnZXRCaXQoYml0cywgaSkpO1xuICAgICAgdGhpcy5zZXRGdW5jdGlvbk1vZHVsZSg4LCA3LCBnZXRCaXQoYml0cywgNikpO1xuICAgICAgdGhpcy5zZXRGdW5jdGlvbk1vZHVsZSg4LCA4LCBnZXRCaXQoYml0cywgNykpO1xuICAgICAgdGhpcy5zZXRGdW5jdGlvbk1vZHVsZSg3LCA4LCBnZXRCaXQoYml0cywgOCkpO1xuICAgICAgZm9yIChsZXQgaSA9IDk7IGkgPCAxNTsgaSsrKVxuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTW9kdWxlKDE0IC0gaSwgOCwgZ2V0Qml0KGJpdHMsIGkpKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKVxuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTW9kdWxlKHRoaXMuc2l6ZSAtIDEgLSBpLCA4LCBnZXRCaXQoYml0cywgaSkpO1xuICAgICAgZm9yIChsZXQgaSA9IDg7IGkgPCAxNTsgaSsrKVxuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTW9kdWxlKDgsIHRoaXMuc2l6ZSAtIDE1ICsgaSwgZ2V0Qml0KGJpdHMsIGkpKTtcbiAgICAgIHRoaXMuc2V0RnVuY3Rpb25Nb2R1bGUoOCwgdGhpcy5zaXplIC0gOCwgdHJ1ZSk7XG4gICAgfVxuICAgIGRyYXdWZXJzaW9uKCkge1xuICAgICAgaWYgKHRoaXMudmVyc2lvbiA8IDcpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCByZW0gPSB0aGlzLnZlcnNpb247XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspXG4gICAgICAgIHJlbSA9IHJlbSA8PCAxIF4gKHJlbSA+Pj4gMTEpICogNzk3MztcbiAgICAgIGNvbnN0IGJpdHMgPSB0aGlzLnZlcnNpb24gPDwgMTIgfCByZW07XG4gICAgICBhc3NlcnQoYml0cyA+Pj4gMTggPT0gMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRCaXQoYml0cywgaSk7XG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLnNpemUgLSAxMSArIGkgJSAzO1xuICAgICAgICBjb25zdCBiID0gTWF0aC5mbG9vcihpIC8gMyk7XG4gICAgICAgIHRoaXMuc2V0RnVuY3Rpb25Nb2R1bGUoYSwgYiwgY29sb3IpO1xuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTW9kdWxlKGIsIGEsIGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHJhd0ZpbmRlclBhdHRlcm4oeCwgeSkge1xuICAgICAgZm9yIChsZXQgZHkgPSAtNDsgZHkgPD0gNDsgZHkrKykge1xuICAgICAgICBmb3IgKGxldCBkeCA9IC00OyBkeCA8PSA0OyBkeCsrKSB7XG4gICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGgubWF4KE1hdGguYWJzKGR4KSwgTWF0aC5hYnMoZHkpKTtcbiAgICAgICAgICBjb25zdCB4eCA9IHggKyBkeDtcbiAgICAgICAgICBjb25zdCB5eSA9IHkgKyBkeTtcbiAgICAgICAgICBpZiAoMCA8PSB4eCAmJiB4eCA8IHRoaXMuc2l6ZSAmJiAwIDw9IHl5ICYmIHl5IDwgdGhpcy5zaXplKVxuICAgICAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk1vZHVsZSh4eCwgeXksIGRpc3QgIT0gMiAmJiBkaXN0ICE9IDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRyYXdBbGlnbm1lbnRQYXR0ZXJuKHgsIHkpIHtcbiAgICAgIGZvciAobGV0IGR5ID0gLTI7IGR5IDw9IDI7IGR5KyspIHtcbiAgICAgICAgZm9yIChsZXQgZHggPSAtMjsgZHggPD0gMjsgZHgrKylcbiAgICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTW9kdWxlKHggKyBkeCwgeSArIGR5LCBNYXRoLm1heChNYXRoLmFicyhkeCksIE1hdGguYWJzKGR5KSkgIT0gMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldEZ1bmN0aW9uTW9kdWxlKHgsIHksIGlzRGFyaykge1xuICAgICAgdGhpcy5tb2R1bGVzW3ldW3hdID0gaXNEYXJrO1xuICAgICAgdGhpcy5pc0Z1bmN0aW9uW3ldW3hdID0gdHJ1ZTtcbiAgICB9XG4gICAgYWRkRWNjQW5kSW50ZXJsZWF2ZShkYXRhKSB7XG4gICAgICBjb25zdCB2ZXIgPSB0aGlzLnZlcnNpb247XG4gICAgICBjb25zdCBlY2wgPSB0aGlzLmVycm9yQ29ycmVjdGlvbkxldmVsO1xuICAgICAgaWYgKGRhdGEubGVuZ3RoICE9IF9RckNvZGUuZ2V0TnVtRGF0YUNvZGV3b3Jkcyh2ZXIsIGVjbCkpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICAgIGNvbnN0IG51bUJsb2NrcyA9IF9RckNvZGUuTlVNX0VSUk9SX0NPUlJFQ1RJT05fQkxPQ0tTW2VjbC5vcmRpbmFsXVt2ZXJdO1xuICAgICAgY29uc3QgYmxvY2tFY2NMZW4gPSBfUXJDb2RlLkVDQ19DT0RFV09SRFNfUEVSX0JMT0NLW2VjbC5vcmRpbmFsXVt2ZXJdO1xuICAgICAgY29uc3QgcmF3Q29kZXdvcmRzID0gTWF0aC5mbG9vcihfUXJDb2RlLmdldE51bVJhd0RhdGFNb2R1bGVzKHZlcikgLyA4KTtcbiAgICAgIGNvbnN0IG51bVNob3J0QmxvY2tzID0gbnVtQmxvY2tzIC0gcmF3Q29kZXdvcmRzICUgbnVtQmxvY2tzO1xuICAgICAgY29uc3Qgc2hvcnRCbG9ja0xlbiA9IE1hdGguZmxvb3IocmF3Q29kZXdvcmRzIC8gbnVtQmxvY2tzKTtcbiAgICAgIGxldCBibG9ja3MgPSBbXTtcbiAgICAgIGNvbnN0IHJzRGl2ID0gX1FyQ29kZS5yZWVkU29sb21vbkNvbXB1dGVEaXZpc29yKGJsb2NrRWNjTGVuKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gMDsgaSA8IG51bUJsb2NrczsgaSsrKSB7XG4gICAgICAgIGxldCBkYXQgPSBkYXRhLnNsaWNlKGssIGsgKyBzaG9ydEJsb2NrTGVuIC0gYmxvY2tFY2NMZW4gKyAoaSA8IG51bVNob3J0QmxvY2tzID8gMCA6IDEpKTtcbiAgICAgICAgayArPSBkYXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBlY2MgPSBfUXJDb2RlLnJlZWRTb2xvbW9uQ29tcHV0ZVJlbWFpbmRlcihkYXQsIHJzRGl2KTtcbiAgICAgICAgaWYgKGkgPCBudW1TaG9ydEJsb2NrcylcbiAgICAgICAgICBkYXQucHVzaCgwKTtcbiAgICAgICAgYmxvY2tzLnB1c2goZGF0LmNvbmNhdChlY2MpKTtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJsb2Nrcy5mb3JFYWNoKChibG9jaywgaikgPT4ge1xuICAgICAgICAgIGlmIChpICE9IHNob3J0QmxvY2tMZW4gLSBibG9ja0VjY0xlbiB8fCBqID49IG51bVNob3J0QmxvY2tzKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYmxvY2tbaV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGFzc2VydChyZXN1bHQubGVuZ3RoID09IHJhd0NvZGV3b3Jkcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBkcmF3Q29kZXdvcmRzKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCAhPSBNYXRoLmZsb29yKF9RckNvZGUuZ2V0TnVtUmF3RGF0YU1vZHVsZXModGhpcy52ZXJzaW9uKSAvIDgpKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKGxldCByaWdodCA9IHRoaXMuc2l6ZSAtIDE7IHJpZ2h0ID49IDE7IHJpZ2h0IC09IDIpIHtcbiAgICAgICAgaWYgKHJpZ2h0ID09IDYpXG4gICAgICAgICAgcmlnaHQgPSA1O1xuICAgICAgICBmb3IgKGxldCB2ZXJ0ID0gMDsgdmVydCA8IHRoaXMuc2l6ZTsgdmVydCsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSByaWdodCAtIGo7XG4gICAgICAgICAgICBjb25zdCB1cHdhcmQgPSAocmlnaHQgKyAxICYgMikgPT0gMDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSB1cHdhcmQgPyB0aGlzLnNpemUgLSAxIC0gdmVydCA6IHZlcnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGdW5jdGlvblt5XVt4XSAmJiBpIDwgZGF0YS5sZW5ndGggKiA4KSB7XG4gICAgICAgICAgICAgIHRoaXMubW9kdWxlc1t5XVt4XSA9IGdldEJpdChkYXRhW2kgPj4+IDNdLCA3IC0gKGkgJiA3KSk7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFzc2VydChpID09IGRhdGEubGVuZ3RoICogOCk7XG4gICAgfVxuICAgIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgICBpZiAobWFzayA8IDAgfHwgbWFzayA+IDcpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiTWFzayB2YWx1ZSBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplOyB4KyspIHtcbiAgICAgICAgICBsZXQgaW52ZXJ0O1xuICAgICAgICAgIHN3aXRjaCAobWFzaykge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpbnZlcnQgPSAoeCArIHkpICUgMiA9PSAwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgaW52ZXJ0ID0geSAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGludmVydCA9IHggJSAzID09IDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBpbnZlcnQgPSAoeCArIHkpICUgMyA9PSAwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaW52ZXJ0ID0gKE1hdGguZmxvb3IoeCAvIDMpICsgTWF0aC5mbG9vcih5IC8gMikpICUgMiA9PSAwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgaW52ZXJ0ID0geCAqIHkgJSAyICsgeCAqIHkgJSAzID09IDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBpbnZlcnQgPSAoeCAqIHkgJSAyICsgeCAqIHkgJSAzKSAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGludmVydCA9ICgoeCArIHkpICUgMiArIHggKiB5ICUgMykgJSAyID09IDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWFjaGFibGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5pc0Z1bmN0aW9uW3ldW3hdICYmIGludmVydClcbiAgICAgICAgICAgIHRoaXMubW9kdWxlc1t5XVt4XSA9ICF0aGlzLm1vZHVsZXNbeV1beF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGVuYWx0eVNjb3JlKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG4gICAgICAgIGxldCBydW5Db2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgcnVuWCA9IDA7XG4gICAgICAgIGxldCBydW5IaXN0b3J5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1t5XVt4XSA9PSBydW5Db2xvcikge1xuICAgICAgICAgICAgcnVuWCsrO1xuICAgICAgICAgICAgaWYgKHJ1blggPT0gNSlcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IF9RckNvZGUuUEVOQUxUWV9OMTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1blggPiA1KVxuICAgICAgICAgICAgICByZXN1bHQrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maW5kZXJQZW5hbHR5QWRkSGlzdG9yeShydW5YLCBydW5IaXN0b3J5KTtcbiAgICAgICAgICAgIGlmICghcnVuQ29sb3IpXG4gICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmZpbmRlclBlbmFsdHlDb3VudFBhdHRlcm5zKHJ1bkhpc3RvcnkpICogX1FyQ29kZS5QRU5BTFRZX04zO1xuICAgICAgICAgICAgcnVuQ29sb3IgPSB0aGlzLm1vZHVsZXNbeV1beF07XG4gICAgICAgICAgICBydW5YID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHRoaXMuZmluZGVyUGVuYWx0eVRlcm1pbmF0ZUFuZENvdW50KHJ1bkNvbG9yLCBydW5YLCBydW5IaXN0b3J5KSAqIF9RckNvZGUuUEVOQUxUWV9OMztcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplOyB4KyspIHtcbiAgICAgICAgbGV0IHJ1bkNvbG9yID0gZmFsc2U7XG4gICAgICAgIGxldCBydW5ZID0gMDtcbiAgICAgICAgbGV0IHJ1bkhpc3RvcnkgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaXplOyB5KyspIHtcbiAgICAgICAgICBpZiAodGhpcy5tb2R1bGVzW3ldW3hdID09IHJ1bkNvbG9yKSB7XG4gICAgICAgICAgICBydW5ZKys7XG4gICAgICAgICAgICBpZiAocnVuWSA9PSA1KVxuICAgICAgICAgICAgICByZXN1bHQgKz0gX1FyQ29kZS5QRU5BTFRZX04xO1xuICAgICAgICAgICAgZWxzZSBpZiAocnVuWSA+IDUpXG4gICAgICAgICAgICAgIHJlc3VsdCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbmRlclBlbmFsdHlBZGRIaXN0b3J5KHJ1blksIHJ1bkhpc3RvcnkpO1xuICAgICAgICAgICAgaWYgKCFydW5Db2xvcilcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuZmluZGVyUGVuYWx0eUNvdW50UGF0dGVybnMocnVuSGlzdG9yeSkgKiBfUXJDb2RlLlBFTkFMVFlfTjM7XG4gICAgICAgICAgICBydW5Db2xvciA9IHRoaXMubW9kdWxlc1t5XVt4XTtcbiAgICAgICAgICAgIHJ1blkgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gdGhpcy5maW5kZXJQZW5hbHR5VGVybWluYXRlQW5kQ291bnQocnVuQ29sb3IsIHJ1blksIHJ1bkhpc3RvcnkpICogX1FyQ29kZS5QRU5BTFRZX04zO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnNpemUgLSAxOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNpemUgLSAxOyB4KyspIHtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMubW9kdWxlc1t5XVt4XTtcbiAgICAgICAgICBpZiAoY29sb3IgPT0gdGhpcy5tb2R1bGVzW3ldW3ggKyAxXSAmJiBjb2xvciA9PSB0aGlzLm1vZHVsZXNbeSArIDFdW3hdICYmIGNvbG9yID09IHRoaXMubW9kdWxlc1t5ICsgMV1beCArIDFdKVxuICAgICAgICAgICAgcmVzdWx0ICs9IF9RckNvZGUuUEVOQUxUWV9OMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGRhcmsgPSAwO1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5tb2R1bGVzKVxuICAgICAgICBkYXJrID0gcm93LnJlZHVjZSgoc3VtLCBjb2xvcikgPT4gc3VtICsgKGNvbG9yID8gMSA6IDApLCBkYXJrKTtcbiAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5zaXplICogdGhpcy5zaXplO1xuICAgICAgY29uc3QgayA9IE1hdGguY2VpbChNYXRoLmFicyhkYXJrICogMjAgLSB0b3RhbCAqIDEwKSAvIHRvdGFsKSAtIDE7XG4gICAgICBhc3NlcnQoMCA8PSBrICYmIGsgPD0gOSk7XG4gICAgICByZXN1bHQgKz0gayAqIF9RckNvZGUuUEVOQUxUWV9ONDtcbiAgICAgIGFzc2VydCgwIDw9IHJlc3VsdCAmJiByZXN1bHQgPD0gMjU2ODg4OCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRBbGlnbm1lbnRQYXR0ZXJuUG9zaXRpb25zKCkge1xuICAgICAgaWYgKHRoaXMudmVyc2lvbiA9PSAxKVxuICAgICAgICByZXR1cm4gW107XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbnVtQWxpZ24gPSBNYXRoLmZsb29yKHRoaXMudmVyc2lvbiAvIDcpICsgMjtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMudmVyc2lvbiA9PSAzMiA/IDI2IDogTWF0aC5jZWlsKCh0aGlzLnZlcnNpb24gKiA0ICsgNCkgLyAobnVtQWxpZ24gKiAyIC0gMikpICogMjtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFs2XTtcbiAgICAgICAgZm9yIChsZXQgcG9zID0gdGhpcy5zaXplIC0gNzsgcmVzdWx0Lmxlbmd0aCA8IG51bUFsaWduOyBwb3MgLT0gc3RlcClcbiAgICAgICAgICByZXN1bHQuc3BsaWNlKDEsIDAsIHBvcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROdW1SYXdEYXRhTW9kdWxlcyh2ZXIpIHtcbiAgICAgIGlmICh2ZXIgPCBfUXJDb2RlLk1JTl9WRVJTSU9OIHx8IHZlciA+IF9RckNvZGUuTUFYX1ZFUlNJT04pXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVmVyc2lvbiBudW1iZXIgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgbGV0IHJlc3VsdCA9ICgxNiAqIHZlciArIDEyOCkgKiB2ZXIgKyA2NDtcbiAgICAgIGlmICh2ZXIgPj0gMikge1xuICAgICAgICBjb25zdCBudW1BbGlnbiA9IE1hdGguZmxvb3IodmVyIC8gNykgKyAyO1xuICAgICAgICByZXN1bHQgLT0gKDI1ICogbnVtQWxpZ24gLSAxMCkgKiBudW1BbGlnbiAtIDU1O1xuICAgICAgICBpZiAodmVyID49IDcpXG4gICAgICAgICAgcmVzdWx0IC09IDM2O1xuICAgICAgfVxuICAgICAgYXNzZXJ0KDIwOCA8PSByZXN1bHQgJiYgcmVzdWx0IDw9IDI5NjQ4KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROdW1EYXRhQ29kZXdvcmRzKHZlciwgZWNsKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihfUXJDb2RlLmdldE51bVJhd0RhdGFNb2R1bGVzKHZlcikgLyA4KSAtIF9RckNvZGUuRUNDX0NPREVXT1JEU19QRVJfQkxPQ0tbZWNsLm9yZGluYWxdW3Zlcl0gKiBfUXJDb2RlLk5VTV9FUlJPUl9DT1JSRUNUSU9OX0JMT0NLU1tlY2wub3JkaW5hbF1bdmVyXTtcbiAgICB9XG4gICAgc3RhdGljIHJlZWRTb2xvbW9uQ29tcHV0ZURpdmlzb3IoZGVncmVlKSB7XG4gICAgICBpZiAoZGVncmVlIDwgMSB8fCBkZWdyZWUgPiAyNTUpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiRGVncmVlIG91dCBvZiByYW5nZVwiKTtcbiAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVncmVlIC0gMTsgaSsrKVxuICAgICAgICByZXN1bHQucHVzaCgwKTtcbiAgICAgIHJlc3VsdC5wdXNoKDEpO1xuICAgICAgbGV0IHJvb3QgPSAxO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWdyZWU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHJlc3VsdFtqXSA9IF9RckNvZGUucmVlZFNvbG9tb25NdWx0aXBseShyZXN1bHRbal0sIHJvb3QpO1xuICAgICAgICAgIGlmIChqICsgMSA8IHJlc3VsdC5sZW5ndGgpXG4gICAgICAgICAgICByZXN1bHRbal0gXj0gcmVzdWx0W2ogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICByb290ID0gX1FyQ29kZS5yZWVkU29sb21vbk11bHRpcGx5KHJvb3QsIDIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc3RhdGljIHJlZWRTb2xvbW9uQ29tcHV0ZVJlbWFpbmRlcihkYXRhLCBkaXZpc29yKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gZGl2aXNvci5tYXAoKF8pID0+IDApO1xuICAgICAgZm9yIChjb25zdCBiIG9mIGRhdGEpIHtcbiAgICAgICAgY29uc3QgZmFjdG9yID0gYiBeIHJlc3VsdC5zaGlmdCgpO1xuICAgICAgICByZXN1bHQucHVzaCgwKTtcbiAgICAgICAgZGl2aXNvci5mb3JFYWNoKChjb2VmLCBpKSA9PiByZXN1bHRbaV0gXj0gX1FyQ29kZS5yZWVkU29sb21vbk11bHRpcGx5KGNvZWYsIGZhY3RvcikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc3RhdGljIHJlZWRTb2xvbW9uTXVsdGlwbHkoeCwgeSkge1xuICAgICAgaWYgKHggPj4+IDggIT0gMCB8fCB5ID4+PiA4ICE9IDApXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiQnl0ZSBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICBsZXQgeiA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gNzsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgeiA9IHogPDwgMSBeICh6ID4+PiA3KSAqIDI4NTtcbiAgICAgICAgeiBePSAoeSA+Pj4gaSAmIDEpICogeDtcbiAgICAgIH1cbiAgICAgIGFzc2VydCh6ID4+PiA4ID09IDApO1xuICAgICAgcmV0dXJuIHo7XG4gICAgfVxuICAgIGZpbmRlclBlbmFsdHlDb3VudFBhdHRlcm5zKHJ1bkhpc3RvcnkpIHtcbiAgICAgIGNvbnN0IG4gPSBydW5IaXN0b3J5WzFdO1xuICAgICAgYXNzZXJ0KG4gPD0gdGhpcy5zaXplICogMyk7XG4gICAgICBjb25zdCBjb3JlID0gbiA+IDAgJiYgcnVuSGlzdG9yeVsyXSA9PSBuICYmIHJ1bkhpc3RvcnlbM10gPT0gbiAqIDMgJiYgcnVuSGlzdG9yeVs0XSA9PSBuICYmIHJ1bkhpc3RvcnlbNV0gPT0gbjtcbiAgICAgIHJldHVybiAoY29yZSAmJiBydW5IaXN0b3J5WzBdID49IG4gKiA0ICYmIHJ1bkhpc3RvcnlbNl0gPj0gbiA/IDEgOiAwKSArIChjb3JlICYmIHJ1bkhpc3RvcnlbNl0gPj0gbiAqIDQgJiYgcnVuSGlzdG9yeVswXSA+PSBuID8gMSA6IDApO1xuICAgIH1cbiAgICBmaW5kZXJQZW5hbHR5VGVybWluYXRlQW5kQ291bnQoY3VycmVudFJ1bkNvbG9yLCBjdXJyZW50UnVuTGVuZ3RoLCBydW5IaXN0b3J5KSB7XG4gICAgICBpZiAoY3VycmVudFJ1bkNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmluZGVyUGVuYWx0eUFkZEhpc3RvcnkoY3VycmVudFJ1bkxlbmd0aCwgcnVuSGlzdG9yeSk7XG4gICAgICAgIGN1cnJlbnRSdW5MZW5ndGggPSAwO1xuICAgICAgfVxuICAgICAgY3VycmVudFJ1bkxlbmd0aCArPSB0aGlzLnNpemU7XG4gICAgICB0aGlzLmZpbmRlclBlbmFsdHlBZGRIaXN0b3J5KGN1cnJlbnRSdW5MZW5ndGgsIHJ1bkhpc3RvcnkpO1xuICAgICAgcmV0dXJuIHRoaXMuZmluZGVyUGVuYWx0eUNvdW50UGF0dGVybnMocnVuSGlzdG9yeSk7XG4gICAgfVxuICAgIGZpbmRlclBlbmFsdHlBZGRIaXN0b3J5KGN1cnJlbnRSdW5MZW5ndGgsIHJ1bkhpc3RvcnkpIHtcbiAgICAgIGlmIChydW5IaXN0b3J5WzBdID09IDApXG4gICAgICAgIGN1cnJlbnRSdW5MZW5ndGggKz0gdGhpcy5zaXplO1xuICAgICAgcnVuSGlzdG9yeS5wb3AoKTtcbiAgICAgIHJ1bkhpc3RvcnkudW5zaGlmdChjdXJyZW50UnVuTGVuZ3RoKTtcbiAgICB9XG4gIH07XG4gIGxldCBRckNvZGUgPSBfUXJDb2RlO1xuICBRckNvZGUuTUlOX1ZFUlNJT04gPSAxO1xuICBRckNvZGUuTUFYX1ZFUlNJT04gPSA0MDtcbiAgUXJDb2RlLlBFTkFMVFlfTjEgPSAzO1xuICBRckNvZGUuUEVOQUxUWV9OMiA9IDM7XG4gIFFyQ29kZS5QRU5BTFRZX04zID0gNDA7XG4gIFFyQ29kZS5QRU5BTFRZX040ID0gMTA7XG4gIFFyQ29kZS5FQ0NfQ09ERVdPUkRTX1BFUl9CTE9DSyA9IFtcbiAgICBbLTEsIDcsIDEwLCAxNSwgMjAsIDI2LCAxOCwgMjAsIDI0LCAzMCwgMTgsIDIwLCAyNCwgMjYsIDMwLCAyMiwgMjQsIDI4LCAzMCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAzMCwgMjYsIDI4LCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzBdLFxuICAgIFstMSwgMTAsIDE2LCAyNiwgMTgsIDI0LCAxNiwgMTgsIDIyLCAyMiwgMjYsIDMwLCAyMiwgMjIsIDI0LCAyNCwgMjgsIDI4LCAyNiwgMjYsIDI2LCAyNiwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDI4LCAyOCwgMjhdLFxuICAgIFstMSwgMTMsIDIyLCAxOCwgMjYsIDE4LCAyNCwgMTgsIDIyLCAyMCwgMjQsIDI4LCAyNiwgMjQsIDIwLCAzMCwgMjQsIDI4LCAyOCwgMjYsIDMwLCAyOCwgMzAsIDMwLCAzMCwgMzAsIDI4LCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzBdLFxuICAgIFstMSwgMTcsIDI4LCAyMiwgMTYsIDIyLCAyOCwgMjYsIDI2LCAyNCwgMjgsIDI0LCAyOCwgMjIsIDI0LCAyNCwgMzAsIDI4LCAyOCwgMjYsIDI4LCAzMCwgMjQsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzBdXG4gIF07XG4gIFFyQ29kZS5OVU1fRVJST1JfQ09SUkVDVElPTl9CTE9DS1MgPSBbXG4gICAgWy0xLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCA0LCA0LCA0LCA0LCA0LCA2LCA2LCA2LCA2LCA3LCA4LCA4LCA5LCA5LCAxMCwgMTIsIDEyLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDE5LCAyMCwgMjEsIDIyLCAyNCwgMjVdLFxuICAgIFstMSwgMSwgMSwgMSwgMiwgMiwgNCwgNCwgNCwgNSwgNSwgNSwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTMsIDE0LCAxNiwgMTcsIDE3LCAxOCwgMjAsIDIxLCAyMywgMjUsIDI2LCAyOCwgMjksIDMxLCAzMywgMzUsIDM3LCAzOCwgNDAsIDQzLCA0NSwgNDcsIDQ5XSxcbiAgICBbLTEsIDEsIDEsIDIsIDIsIDQsIDQsIDYsIDYsIDgsIDgsIDgsIDEwLCAxMiwgMTYsIDEyLCAxNywgMTYsIDE4LCAyMSwgMjAsIDIzLCAyMywgMjUsIDI3LCAyOSwgMzQsIDM0LCAzNSwgMzgsIDQwLCA0MywgNDUsIDQ4LCA1MSwgNTMsIDU2LCA1OSwgNjIsIDY1LCA2OF0sXG4gICAgWy0xLCAxLCAxLCAyLCA0LCA0LCA0LCA1LCA2LCA4LCA4LCAxMSwgMTEsIDE2LCAxNiwgMTgsIDE2LCAxOSwgMjEsIDI1LCAyNSwgMjUsIDM0LCAzMCwgMzIsIDM1LCAzNywgNDAsIDQyLCA0NSwgNDgsIDUxLCA1NCwgNTcsIDYwLCA2MywgNjYsIDcwLCA3NCwgNzcsIDgxXVxuICBdO1xuICBxcmNvZGVnZW4yLlFyQ29kZSA9IFFyQ29kZTtcbiAgZnVuY3Rpb24gYXBwZW5kQml0cyh2YWwsIGxlbiwgYmIpIHtcbiAgICBpZiAobGVuIDwgMCB8fCBsZW4gPiAzMSB8fCB2YWwgPj4+IGxlbiAhPSAwKVxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJWYWx1ZSBvdXQgb2YgcmFuZ2VcIik7XG4gICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgYmIucHVzaCh2YWwgPj4+IGkgJiAxKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRCaXQoeCwgaSkge1xuICAgIHJldHVybiAoeCA+Pj4gaSAmIDEpICE9IDA7XG4gIH1cbiAgZnVuY3Rpb24gYXNzZXJ0KGNvbmQpIHtcbiAgICBpZiAoIWNvbmQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3NlcnRpb24gZXJyb3JcIik7XG4gIH1cbiAgY29uc3QgX1FyU2VnbWVudCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RlLCBudW1DaGFycywgYml0RGF0YSkge1xuICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgIHRoaXMubnVtQ2hhcnMgPSBudW1DaGFycztcbiAgICAgIHRoaXMuYml0RGF0YSA9IGJpdERhdGE7XG4gICAgICBpZiAobnVtQ2hhcnMgPCAwKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgICB0aGlzLmJpdERhdGEgPSBiaXREYXRhLnNsaWNlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBtYWtlQnl0ZXMoZGF0YSkge1xuICAgICAgbGV0IGJiID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgb2YgZGF0YSlcbiAgICAgICAgYXBwZW5kQml0cyhiLCA4LCBiYik7XG4gICAgICByZXR1cm4gbmV3IF9RclNlZ21lbnQoX1FyU2VnbWVudC5Nb2RlLkJZVEUsIGRhdGEubGVuZ3RoLCBiYik7XG4gICAgfVxuICAgIHN0YXRpYyBtYWtlTnVtZXJpYyhkaWdpdHMpIHtcbiAgICAgIGlmICghX1FyU2VnbWVudC5pc051bWVyaWMoZGlnaXRzKSlcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJTdHJpbmcgY29udGFpbnMgbm9uLW51bWVyaWMgY2hhcmFjdGVyc1wiKTtcbiAgICAgIGxldCBiYiA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyApIHtcbiAgICAgICAgY29uc3QgbiA9IE1hdGgubWluKGRpZ2l0cy5sZW5ndGggLSBpLCAzKTtcbiAgICAgICAgYXBwZW5kQml0cyhwYXJzZUludChkaWdpdHMuc3Vic3RyKGksIG4pLCAxMCksIG4gKiAzICsgMSwgYmIpO1xuICAgICAgICBpICs9IG47XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IF9RclNlZ21lbnQoX1FyU2VnbWVudC5Nb2RlLk5VTUVSSUMsIGRpZ2l0cy5sZW5ndGgsIGJiKTtcbiAgICB9XG4gICAgc3RhdGljIG1ha2VBbHBoYW51bWVyaWModGV4dCkge1xuICAgICAgaWYgKCFfUXJTZWdtZW50LmlzQWxwaGFudW1lcmljKHRleHQpKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlN0cmluZyBjb250YWlucyB1bmVuY29kYWJsZSBjaGFyYWN0ZXJzIGluIGFscGhhbnVtZXJpYyBtb2RlXCIpO1xuICAgICAgbGV0IGJiID0gW107XG4gICAgICBsZXQgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgKyAyIDw9IHRleHQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBfUXJTZWdtZW50LkFMUEhBTlVNRVJJQ19DSEFSU0VULmluZGV4T2YodGV4dC5jaGFyQXQoaSkpICogNDU7XG4gICAgICAgIHRlbXAgKz0gX1FyU2VnbWVudC5BTFBIQU5VTUVSSUNfQ0hBUlNFVC5pbmRleE9mKHRleHQuY2hhckF0KGkgKyAxKSk7XG4gICAgICAgIGFwcGVuZEJpdHModGVtcCwgMTEsIGJiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpIDwgdGV4dC5sZW5ndGgpXG4gICAgICAgIGFwcGVuZEJpdHMoX1FyU2VnbWVudC5BTFBIQU5VTUVSSUNfQ0hBUlNFVC5pbmRleE9mKHRleHQuY2hhckF0KGkpKSwgNiwgYmIpO1xuICAgICAgcmV0dXJuIG5ldyBfUXJTZWdtZW50KF9RclNlZ21lbnQuTW9kZS5BTFBIQU5VTUVSSUMsIHRleHQubGVuZ3RoLCBiYik7XG4gICAgfVxuICAgIHN0YXRpYyBtYWtlU2VnbWVudHModGV4dCkge1xuICAgICAgaWYgKHRleHQgPT0gXCJcIilcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgZWxzZSBpZiAoX1FyU2VnbWVudC5pc051bWVyaWModGV4dCkpXG4gICAgICAgIHJldHVybiBbX1FyU2VnbWVudC5tYWtlTnVtZXJpYyh0ZXh0KV07XG4gICAgICBlbHNlIGlmIChfUXJTZWdtZW50LmlzQWxwaGFudW1lcmljKHRleHQpKVxuICAgICAgICByZXR1cm4gW19RclNlZ21lbnQubWFrZUFscGhhbnVtZXJpYyh0ZXh0KV07XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBbX1FyU2VnbWVudC5tYWtlQnl0ZXMoX1FyU2VnbWVudC50b1V0ZjhCeXRlQXJyYXkodGV4dCkpXTtcbiAgICB9XG4gICAgc3RhdGljIG1ha2VFY2koYXNzaWduVmFsKSB7XG4gICAgICBsZXQgYmIgPSBbXTtcbiAgICAgIGlmIChhc3NpZ25WYWwgPCAwKVxuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkVDSSBhc3NpZ25tZW50IHZhbHVlIG91dCBvZiByYW5nZVwiKTtcbiAgICAgIGVsc2UgaWYgKGFzc2lnblZhbCA8IDEgPDwgNylcbiAgICAgICAgYXBwZW5kQml0cyhhc3NpZ25WYWwsIDgsIGJiKTtcbiAgICAgIGVsc2UgaWYgKGFzc2lnblZhbCA8IDEgPDwgMTQpIHtcbiAgICAgICAgYXBwZW5kQml0cygyLCAyLCBiYik7XG4gICAgICAgIGFwcGVuZEJpdHMoYXNzaWduVmFsLCAxNCwgYmIpO1xuICAgICAgfSBlbHNlIGlmIChhc3NpZ25WYWwgPCAxZTYpIHtcbiAgICAgICAgYXBwZW5kQml0cyg2LCAzLCBiYik7XG4gICAgICAgIGFwcGVuZEJpdHMoYXNzaWduVmFsLCAyMSwgYmIpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiRUNJIGFzc2lnbm1lbnQgdmFsdWUgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgcmV0dXJuIG5ldyBfUXJTZWdtZW50KF9RclNlZ21lbnQuTW9kZS5FQ0ksIDAsIGJiKTtcbiAgICB9XG4gICAgc3RhdGljIGlzTnVtZXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gX1FyU2VnbWVudC5OVU1FUklDX1JFR0VYLnRlc3QodGV4dCk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0FscGhhbnVtZXJpYyh0ZXh0KSB7XG4gICAgICByZXR1cm4gX1FyU2VnbWVudC5BTFBIQU5VTUVSSUNfUkVHRVgudGVzdCh0ZXh0KTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJpdERhdGEuc2xpY2UoKTtcbiAgICB9XG4gICAgc3RhdGljIGdldFRvdGFsQml0cyhzZWdzLCB2ZXJzaW9uKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgIGZvciAoY29uc3Qgc2VnIG9mIHNlZ3MpIHtcbiAgICAgICAgY29uc3QgY2NiaXRzID0gc2VnLm1vZGUubnVtQ2hhckNvdW50Qml0cyh2ZXJzaW9uKTtcbiAgICAgICAgaWYgKHNlZy5udW1DaGFycyA+PSAxIDw8IGNjYml0cylcbiAgICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgICAgIHJlc3VsdCArPSA0ICsgY2NiaXRzICsgc2VnLmJpdERhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgc3RhdGljIHRvVXRmOEJ5dGVBcnJheShzdHIpIHtcbiAgICAgIHN0ciA9IGVuY29kZVVSSShzdHIpO1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgIT0gXCIlXCIpXG4gICAgICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzdHIuc3Vic3RyKGkgKyAxLCAyKSwgMTYpKTtcbiAgICAgICAgICBpICs9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xuICBsZXQgUXJTZWdtZW50ID0gX1FyU2VnbWVudDtcbiAgUXJTZWdtZW50Lk5VTUVSSUNfUkVHRVggPSAvXlswLTldKiQvO1xuICBRclNlZ21lbnQuQUxQSEFOVU1FUklDX1JFR0VYID0gL15bQS1aMC05ICQlKisuXFwvOi1dKiQvO1xuICBRclNlZ21lbnQuQUxQSEFOVU1FUklDX0NIQVJTRVQgPSBcIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiAkJSorLS4vOlwiO1xuICBxcmNvZGVnZW4yLlFyU2VnbWVudCA9IFFyU2VnbWVudDtcbn0pKHFyY29kZWdlbiB8fCAocXJjb2RlZ2VuID0ge30pKTtcbigocXJjb2RlZ2VuMikgPT4ge1xuICBsZXQgUXJDb2RlO1xuICAoKFFyQ29kZTIpID0+IHtcbiAgICBjb25zdCBfRWNjID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3Iob3JkaW5hbCwgZm9ybWF0Qml0cykge1xuICAgICAgICB0aGlzLm9yZGluYWwgPSBvcmRpbmFsO1xuICAgICAgICB0aGlzLmZvcm1hdEJpdHMgPSBmb3JtYXRCaXRzO1xuICAgICAgfVxuICAgIH07XG4gICAgbGV0IEVjYyA9IF9FY2M7XG4gICAgRWNjLkxPVyA9IG5ldyBfRWNjKDAsIDEpO1xuICAgIEVjYy5NRURJVU0gPSBuZXcgX0VjYygxLCAwKTtcbiAgICBFY2MuUVVBUlRJTEUgPSBuZXcgX0VjYygyLCAzKTtcbiAgICBFY2MuSElHSCA9IG5ldyBfRWNjKDMsIDIpO1xuICAgIFFyQ29kZTIuRWNjID0gRWNjO1xuICB9KShRckNvZGUgPSBxcmNvZGVnZW4yLlFyQ29kZSB8fCAocXJjb2RlZ2VuMi5RckNvZGUgPSB7fSkpO1xufSkocXJjb2RlZ2VuIHx8IChxcmNvZGVnZW4gPSB7fSkpO1xuKChxcmNvZGVnZW4yKSA9PiB7XG4gIGxldCBRclNlZ21lbnQ7XG4gICgoUXJTZWdtZW50MikgPT4ge1xuICAgIGNvbnN0IF9Nb2RlID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3IobW9kZUJpdHMsIG51bUJpdHNDaGFyQ291bnQpIHtcbiAgICAgICAgdGhpcy5tb2RlQml0cyA9IG1vZGVCaXRzO1xuICAgICAgICB0aGlzLm51bUJpdHNDaGFyQ291bnQgPSBudW1CaXRzQ2hhckNvdW50O1xuICAgICAgfVxuICAgICAgbnVtQ2hhckNvdW50Qml0cyh2ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtQml0c0NoYXJDb3VudFtNYXRoLmZsb29yKCh2ZXIgKyA3KSAvIDE3KV07XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgTW9kZSA9IF9Nb2RlO1xuICAgIE1vZGUuTlVNRVJJQyA9IG5ldyBfTW9kZSgxLCBbMTAsIDEyLCAxNF0pO1xuICAgIE1vZGUuQUxQSEFOVU1FUklDID0gbmV3IF9Nb2RlKDIsIFs5LCAxMSwgMTNdKTtcbiAgICBNb2RlLkJZVEUgPSBuZXcgX01vZGUoNCwgWzgsIDE2LCAxNl0pO1xuICAgIE1vZGUuS0FOSkkgPSBuZXcgX01vZGUoOCwgWzgsIDEwLCAxMl0pO1xuICAgIE1vZGUuRUNJID0gbmV3IF9Nb2RlKDcsIFswLCAwLCAwXSk7XG4gICAgUXJTZWdtZW50Mi5Nb2RlID0gTW9kZTtcbiAgfSkoUXJTZWdtZW50ID0gcXJjb2RlZ2VuMi5RclNlZ21lbnQgfHwgKHFyY29kZWdlbjIuUXJTZWdtZW50ID0ge30pKTtcbn0pKHFyY29kZWdlbiB8fCAocXJjb2RlZ2VuID0ge30pKTtcbnZhciBxcmNvZGVnZW5fZGVmYXVsdCA9IHFyY29kZWdlbjtcblxuLy8gc3JjL2luZGV4LnRzeFxuLyoqXG4gKiBAbGljZW5zZSBxcmNvZGUucmVhY3RcbiAqIENvcHlyaWdodCAoYykgUGF1bCBPJ1NoYW5uZXNzeVxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IElTQ1xuICovXG52YXIgRVJST1JfTEVWRUxfTUFQID0ge1xuICBMOiBxcmNvZGVnZW5fZGVmYXVsdC5RckNvZGUuRWNjLkxPVyxcbiAgTTogcXJjb2RlZ2VuX2RlZmF1bHQuUXJDb2RlLkVjYy5NRURJVU0sXG4gIFE6IHFyY29kZWdlbl9kZWZhdWx0LlFyQ29kZS5FY2MuUVVBUlRJTEUsXG4gIEg6IHFyY29kZWdlbl9kZWZhdWx0LlFyQ29kZS5FY2MuSElHSFxufTtcbnZhciBERUZBVUxUX1NJWkUgPSAxMjg7XG52YXIgREVGQVVMVF9MRVZFTCA9IFwiTFwiO1xudmFyIERFRkFVTFRfQkdDT0xPUiA9IFwiI0ZGRkZGRlwiO1xudmFyIERFRkFVTFRfRkdDT0xPUiA9IFwiIzAwMDAwMFwiO1xudmFyIERFRkFVTFRfSU5DTFVERU1BUkdJTiA9IGZhbHNlO1xudmFyIE1BUkdJTl9TSVpFID0gNDtcbnZhciBERUZBVUxUX0lNR19TQ0FMRSA9IDAuMTtcbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChtb2R1bGVzLCBtYXJnaW4gPSAwKSB7XG4gIGNvbnN0IG9wcyA9IFtdO1xuICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24ocm93LCB5KSB7XG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcbiAgICByb3cuZm9yRWFjaChmdW5jdGlvbihjZWxsLCB4KSB7XG4gICAgICBpZiAoIWNlbGwgJiYgc3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgb3BzLnB1c2goYE0ke3N0YXJ0ICsgbWFyZ2lufSAke3kgKyBtYXJnaW59aCR7eCAtIHN0YXJ0fXYxSCR7c3RhcnQgKyBtYXJnaW59emApO1xuICAgICAgICBzdGFydCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh4ID09PSByb3cubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgb3BzLnB1c2goYE0ke3ggKyBtYXJnaW59LCR7eSArIG1hcmdpbn0gaDF2MUgke3ggKyBtYXJnaW59emApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wcy5wdXNoKGBNJHtzdGFydCArIG1hcmdpbn0sJHt5ICsgbWFyZ2lufSBoJHt4ICsgMSAtIHN0YXJ0fXYxSCR7c3RhcnQgKyBtYXJnaW59emApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsICYmIHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0ID0geDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvcHMuam9pbihcIlwiKTtcbn1cbmZ1bmN0aW9uIGV4Y2F2YXRlTW9kdWxlcyhtb2R1bGVzLCBleGNhdmF0aW9uKSB7XG4gIHJldHVybiBtb2R1bGVzLnNsaWNlKCkubWFwKChyb3csIHkpID0+IHtcbiAgICBpZiAoeSA8IGV4Y2F2YXRpb24ueSB8fCB5ID49IGV4Y2F2YXRpb24ueSArIGV4Y2F2YXRpb24uaCkge1xuICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG4gICAgcmV0dXJuIHJvdy5tYXAoKGNlbGwsIHgpID0+IHtcbiAgICAgIGlmICh4IDwgZXhjYXZhdGlvbi54IHx8IHggPj0gZXhjYXZhdGlvbi54ICsgZXhjYXZhdGlvbi53KSB7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEltYWdlU2V0dGluZ3MoY2VsbHMsIHNpemUsIGluY2x1ZGVNYXJnaW4sIGltYWdlU2V0dGluZ3MpIHtcbiAgaWYgKGltYWdlU2V0dGluZ3MgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7XG4gIGNvbnN0IG51bUNlbGxzID0gY2VsbHMubGVuZ3RoICsgbWFyZ2luICogMjtcbiAgY29uc3QgZGVmYXVsdFNpemUgPSBNYXRoLmZsb29yKHNpemUgKiBERUZBVUxUX0lNR19TQ0FMRSk7XG4gIGNvbnN0IHNjYWxlID0gbnVtQ2VsbHMgLyBzaXplO1xuICBjb25zdCB3ID0gKGltYWdlU2V0dGluZ3Mud2lkdGggfHwgZGVmYXVsdFNpemUpICogc2NhbGU7XG4gIGNvbnN0IGggPSAoaW1hZ2VTZXR0aW5ncy5oZWlnaHQgfHwgZGVmYXVsdFNpemUpICogc2NhbGU7XG4gIGNvbnN0IHggPSBpbWFnZVNldHRpbmdzLnggPT0gbnVsbCA/IGNlbGxzLmxlbmd0aCAvIDIgLSB3IC8gMiA6IGltYWdlU2V0dGluZ3MueCAqIHNjYWxlO1xuICBjb25zdCB5ID0gaW1hZ2VTZXR0aW5ncy55ID09IG51bGwgPyBjZWxscy5sZW5ndGggLyAyIC0gaCAvIDIgOiBpbWFnZVNldHRpbmdzLnkgKiBzY2FsZTtcbiAgbGV0IGV4Y2F2YXRpb24gPSBudWxsO1xuICBpZiAoaW1hZ2VTZXR0aW5ncy5leGNhdmF0ZSkge1xuICAgIGxldCBmbG9vclggPSBNYXRoLmZsb29yKHgpO1xuICAgIGxldCBmbG9vclkgPSBNYXRoLmZsb29yKHkpO1xuICAgIGxldCBjZWlsVyA9IE1hdGguY2VpbCh3ICsgeCAtIGZsb29yWCk7XG4gICAgbGV0IGNlaWxIID0gTWF0aC5jZWlsKGggKyB5IC0gZmxvb3JZKTtcbiAgICBleGNhdmF0aW9uID0geyB4OiBmbG9vclgsIHk6IGZsb29yWSwgdzogY2VpbFcsIGg6IGNlaWxIIH07XG4gIH1cbiAgcmV0dXJuIHsgeCwgeSwgaCwgdywgZXhjYXZhdGlvbiB9O1xufVxudmFyIFNVUFBPUlRTX1BBVEgyRCA9IGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIG5ldyBQYXRoMkQoKS5hZGRQYXRoKG5ldyBQYXRoMkQoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KCk7XG5mdW5jdGlvbiBRUkNvZGVDYW52YXMocHJvcHMpIHtcbiAgY29uc3QgX2EgPSBwcm9wcywge1xuICAgIHZhbHVlLFxuICAgIHNpemUgPSBERUZBVUxUX1NJWkUsXG4gICAgbGV2ZWwgPSBERUZBVUxUX0xFVkVMLFxuICAgIGJnQ29sb3IgPSBERUZBVUxUX0JHQ09MT1IsXG4gICAgZmdDb2xvciA9IERFRkFVTFRfRkdDT0xPUixcbiAgICBpbmNsdWRlTWFyZ2luID0gREVGQVVMVF9JTkNMVURFTUFSR0lOLFxuICAgIHN0eWxlLFxuICAgIGltYWdlU2V0dGluZ3NcbiAgfSA9IF9hLCBvdGhlclByb3BzID0gX19vYmpSZXN0KF9hLCBbXG4gICAgXCJ2YWx1ZVwiLFxuICAgIFwic2l6ZVwiLFxuICAgIFwibGV2ZWxcIixcbiAgICBcImJnQ29sb3JcIixcbiAgICBcImZnQ29sb3JcIixcbiAgICBcImluY2x1ZGVNYXJnaW5cIixcbiAgICBcInN0eWxlXCIsXG4gICAgXCJpbWFnZVNldHRpbmdzXCJcbiAgXSk7XG4gIGNvbnN0IGltZ1NyYyA9IGltYWdlU2V0dGluZ3MgPT0gbnVsbCA/IHZvaWQgMCA6IGltYWdlU2V0dGluZ3Muc3JjO1xuICBjb25zdCBfY2FudmFzID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBfaW1hZ2UgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0ltZ0xvYWRlZCwgc2V0SXNJbWFnZUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9jYW52YXMuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBfY2FudmFzLmN1cnJlbnQ7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGNlbGxzID0gcXJjb2RlZ2VuX2RlZmF1bHQuUXJDb2RlLmVuY29kZVRleHQodmFsdWUsIEVSUk9SX0xFVkVMX01BUFtsZXZlbF0pLmdldE1vZHVsZXMoKTtcbiAgICAgIGNvbnN0IG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7XG4gICAgICBjb25zdCBudW1DZWxscyA9IGNlbGxzLmxlbmd0aCArIG1hcmdpbiAqIDI7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncyA9IGdldEltYWdlU2V0dGluZ3MoY2VsbHMsIHNpemUsIGluY2x1ZGVNYXJnaW4sIGltYWdlU2V0dGluZ3MpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBfaW1hZ2UuY3VycmVudDtcbiAgICAgIGNvbnN0IGhhdmVJbWFnZVRvUmVuZGVyID0gY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MgIT0gbnVsbCAmJiBpbWFnZSAhPT0gbnVsbCAmJiBpbWFnZS5jb21wbGV0ZSAmJiBpbWFnZS5uYXR1cmFsSGVpZ2h0ICE9PSAwICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMDtcbiAgICAgIGlmIChoYXZlSW1hZ2VUb1JlbmRlcikge1xuICAgICAgICBpZiAoY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MuZXhjYXZhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgY2VsbHMgPSBleGNhdmF0ZU1vZHVsZXMoY2VsbHMsIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggPSBzaXplICogcGl4ZWxSYXRpbztcbiAgICAgIGNvbnN0IHNjYWxlID0gc2l6ZSAvIG51bUNlbGxzICogcGl4ZWxSYXRpbztcbiAgICAgIGN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnQ29sb3I7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgbnVtQ2VsbHMsIG51bUNlbGxzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBmZ0NvbG9yO1xuICAgICAgaWYgKFNVUFBPUlRTX1BBVEgyRCkge1xuICAgICAgICBjdHguZmlsbChuZXcgUGF0aDJEKGdlbmVyYXRlUGF0aChjZWxscywgbWFyZ2luKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbHMuZm9yRWFjaChmdW5jdGlvbihyb3csIHJkeCkge1xuICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uKGNlbGwsIGNkeCkge1xuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNkeCArIG1hcmdpbiwgcmR4ICsgbWFyZ2luLCAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaGF2ZUltYWdlVG9SZW5kZXIpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MueCArIG1hcmdpbiwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MueSArIG1hcmdpbiwgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MudywgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MuaCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0ltYWdlTG9hZGVkKGZhbHNlKTtcbiAgfSwgW2ltZ1NyY10pO1xuICBjb25zdCBjYW52YXNTdHlsZSA9IF9fc3ByZWFkVmFsdWVzKHsgaGVpZ2h0OiBzaXplLCB3aWR0aDogc2l6ZSB9LCBzdHlsZSk7XG4gIGxldCBpbWcgPSBudWxsO1xuICBpZiAoaW1nU3JjICE9IG51bGwpIHtcbiAgICBpbWcgPSAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICBzcmM6IGltZ1NyYyxcbiAgICAgIGtleTogaW1nU3JjLFxuICAgICAgc3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgIG9uTG9hZDogKCkgPT4ge1xuICAgICAgICBzZXRJc0ltYWdlTG9hZGVkKHRydWUpO1xuICAgICAgfSxcbiAgICAgIHJlZjogX2ltYWdlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCBfX3NwcmVhZFZhbHVlcyh7XG4gICAgc3R5bGU6IGNhbnZhc1N0eWxlLFxuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICByZWY6IF9jYW52YXNcbiAgfSwgb3RoZXJQcm9wcykpLCBpbWcpO1xufVxuZnVuY3Rpb24gUVJDb2RlU1ZHKHByb3BzKSB7XG4gIGNvbnN0IF9hID0gcHJvcHMsIHtcbiAgICB2YWx1ZSxcbiAgICBzaXplID0gREVGQVVMVF9TSVpFLFxuICAgIGxldmVsID0gREVGQVVMVF9MRVZFTCxcbiAgICBiZ0NvbG9yID0gREVGQVVMVF9CR0NPTE9SLFxuICAgIGZnQ29sb3IgPSBERUZBVUxUX0ZHQ09MT1IsXG4gICAgaW5jbHVkZU1hcmdpbiA9IERFRkFVTFRfSU5DTFVERU1BUkdJTixcbiAgICBpbWFnZVNldHRpbmdzXG4gIH0gPSBfYSwgb3RoZXJQcm9wcyA9IF9fb2JqUmVzdChfYSwgW1xuICAgIFwidmFsdWVcIixcbiAgICBcInNpemVcIixcbiAgICBcImxldmVsXCIsXG4gICAgXCJiZ0NvbG9yXCIsXG4gICAgXCJmZ0NvbG9yXCIsXG4gICAgXCJpbmNsdWRlTWFyZ2luXCIsXG4gICAgXCJpbWFnZVNldHRpbmdzXCJcbiAgXSk7XG4gIGxldCBjZWxscyA9IHFyY29kZWdlbl9kZWZhdWx0LlFyQ29kZS5lbmNvZGVUZXh0KHZhbHVlLCBFUlJPUl9MRVZFTF9NQVBbbGV2ZWxdKS5nZXRNb2R1bGVzKCk7XG4gIGNvbnN0IG1hcmdpbiA9IGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fU0laRSA6IDA7XG4gIGNvbnN0IG51bUNlbGxzID0gY2VsbHMubGVuZ3RoICsgbWFyZ2luICogMjtcbiAgY29uc3QgY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MgPSBnZXRJbWFnZVNldHRpbmdzKGNlbGxzLCBzaXplLCBpbmNsdWRlTWFyZ2luLCBpbWFnZVNldHRpbmdzKTtcbiAgbGV0IGltYWdlID0gbnVsbDtcbiAgaWYgKGltYWdlU2V0dGluZ3MgIT0gbnVsbCAmJiBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgaWYgKGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24gIT0gbnVsbCkge1xuICAgICAgY2VsbHMgPSBleGNhdmF0ZU1vZHVsZXMoY2VsbHMsIGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLmV4Y2F2YXRpb24pO1xuICAgIH1cbiAgICBpbWFnZSA9IC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1hZ2VcIiwge1xuICAgICAgeGxpbmtIcmVmOiBpbWFnZVNldHRpbmdzLnNyYyxcbiAgICAgIGhlaWdodDogY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MuaCxcbiAgICAgIHdpZHRoOiBjYWxjdWxhdGVkSW1hZ2VTZXR0aW5ncy53LFxuICAgICAgeDogY2FsY3VsYXRlZEltYWdlU2V0dGluZ3MueCArIG1hcmdpbixcbiAgICAgIHk6IGNhbGN1bGF0ZWRJbWFnZVNldHRpbmdzLnkgKyBtYXJnaW4sXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcIm5vbmVcIlxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGZnUGF0aCA9IGdlbmVyYXRlUGF0aChjZWxscywgbWFyZ2luKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9fc3ByZWFkVmFsdWVzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogYDAgMCAke251bUNlbGxzfSAke251bUNlbGxzfWBcbiAgfSwgb3RoZXJQcm9wcyksIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbDogYmdDb2xvcixcbiAgICBkOiBgTTAsMCBoJHtudW1DZWxsc312JHtudW1DZWxsc31IMHpgLFxuICAgIHNoYXBlUmVuZGVyaW5nOiBcImNyaXNwRWRnZXNcIlxuICB9KSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBmZ0NvbG9yLFxuICAgIGQ6IGZnUGF0aCxcbiAgICBzaGFwZVJlbmRlcmluZzogXCJjcmlzcEVkZ2VzXCJcbiAgfSksIGltYWdlKTtcbn1cbnZhciBRUkNvZGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgX2EgPSBwcm9wcywgeyByZW5kZXJBcyB9ID0gX2EsIG90aGVyUHJvcHMgPSBfX29ialJlc3QoX2EsIFtcInJlbmRlckFzXCJdKTtcbiAgaWYgKHJlbmRlckFzID09PSBcInN2Z1wiKSB7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFFSQ29kZVNWRywgX19zcHJlYWRWYWx1ZXMoe30sIG90aGVyUHJvcHMpKTtcbiAgfVxuICByZXR1cm4gLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUVJDb2RlQ2FudmFzLCBfX3NwcmVhZFZhbHVlcyh7fSwgb3RoZXJQcm9wcykpO1xufTtcbmV4cG9ydCB7XG4gIFFSQ29kZUNhbnZhcyxcbiAgUVJDb2RlU1ZHLFxuICBRUkNvZGUgYXMgZGVmYXVsdFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGluamVjdEludGwsIHR5cGUgSW50bFNoYXBlLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgUVJDb2RlUmVhY3QgZnJvbSAncXJjb2RlLnJlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbi8qKlxuICogVGhlIFFSLWNvZGUgY29tcG9uZW50IHByb3BzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFFSY29kZVByb3BzIHtcbiAgLy8gcXJjb2RlOlxuICAvKiogVGhlIFVSTCBzdHJpbmcuICovXG4gIHZhbHVlOiBzdHJpbmdcbiAgLyoqIFRoZSBzaXplIG9mIHRoZSBRUiBjb2RlIGltYWdlLiAqL1xuICBzaXplPzogbnVtYmVyIC8vIDEyOFxuICAvKiogQmFja2dyb3VuZCBjb2xvci4gKi9cbiAgYmdDb2xvcj86IHN0cmluZyAvLyBcIiNGRkZGRkZcIlxuICAvKiogRm9yZWdyb3VuZCBjb2xvci4gKi9cbiAgZmdDb2xvcj86IHN0cmluZyAvLyBcIiMwMDAwMDBcIlxuICAvKiogQGlnbm9yZSAqL1xuICBsZXZlbD86ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyAvLyAnTCdcbiAgLyoqIEBpZ25vcmUgKi9cbiAgaW5jbHVkZU1hcmdpbjogYm9vbGVhbiAvLyBmYWxzZVxuXG4gIC8vIGJlaGF2aW9yczpcbiAgLyoqIEBpZ25vcmUgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKiBAaWdub3JlICovXG4gIGRvd25sb2FkRmlsZU5hbWU/OiBzdHJpbmdcbiAgLyoqIEluZGljYXRlcyB3aGV0aGVyIHRvIHNob3cgdGhlIFNhdmUgaW1hZ2UgYnV0dG9uLiAqL1xuICBoaWRlRG93bmxvYWRCdG4/OiBib29sZWFuXG5cbiAgb25FcnJvcj86IChlcnJvciwgZXJyb3JJbmZvKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaW50bDogSW50bFNoYXBlIC8vIGZvciBpMThuXG59XG5cbnR5cGUgUmVuZGVyVHlwZSA9ICdjYW52YXMnIHwgJ3N2ZydcblxuY2xhc3MgX1FSQ29kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UVJjb2RlUHJvcHMgJiBFeHRyYVByb3BzPiB7XG4gIC8vIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdRUkNvZGUnO1xuICBSRU5ERVJfVFlQRTogUmVuZGVyVHlwZSA9ICdjYW52YXMnIC8vIGp1c3Qgc3VwcG9ydCBcImNhbnZhc1wiIG1vZGUgZm9yIGRvd25sb2FkXG4gIERPV05MT0FEX0ZJTEVfTkFNRSA9ICdleGItcXItY29kZS1pbWcnXG4gIERPV05MT0FEX0JUTl9MQUJFTCA9ICdTYXZlIGFzIGltYWdlJ1xuXG4gIHdhcHBlclJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT5cbiAgaGlkZGVuTGlua1JlZjogUmVhY3QuUmVmT2JqZWN0PGFueT5cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLndhcHBlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5oaWRkZW5MaW5rUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoIChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvcihlcnJvciwgZXJyb3JJbmZvKVxuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkSW1nICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1nTm9kZSA9IHRoaXMud2FwcGVyUmVmLmN1cnJlbnRcbiAgICAgIGNvbnN0IGFOb2RlID0gdGhpcy5oaWRkZW5MaW5rUmVmLmN1cnJlbnRcblxuICAgICAgY29uc3QgY2FudmFzID0gaW1nTm9kZS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKVxuICAgICAgYU5vZGUuaHJlZiA9IGNhbnZhcy50b0RhdGFVUkwoKVxuICAgICAgYU5vZGUuZG93bmxvYWQgPSB0aGlzLnByb3BzLmRvd25sb2FkRmlsZU5hbWUgPyB0aGlzLnByb3BzLmRvd25sb2FkRmlsZU5hbWUgOiB0aGlzLkRPV05MT0FEX0ZJTEVfTkFNRVxuXG4gICAgICBhTm9kZS5jbGljaygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdqaW11UVJDb2RlIGRvd25sb2FkIGVycm9yOiAnICsgZSlcbiAgICB9XG4gIH1cblxuICBfb25CdG5DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmRvd25sb2FkSW1nKClcbiAgfVxuXG4gIF9nZXRTYXZlQnRuTGFiZWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW50bCA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdxckNvZGVTYXZlQnRuTGFiZWwnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnFyQ29kZVNhdmVCdG5MYWJlbCB9KSA6IHRoaXMuRE9XTkxPQURfQlROX0xBQkVMXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnamltdS1xcmNvZGUnKVxuXG4gICAgbGV0IGJ0bktsYXNzID0gJ2J0bidcbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlRG93bmxvYWRCdG4pIHtcbiAgICAgIGJ0bktsYXNzID0gJ2hpZGUtYnRuJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLndhcHBlclJlZn0gY2xhc3NOYW1lPSdxcmNvZGUtd2FwcGVyJz5cbiAgICAgICAgICA8UVJDb2RlUmVhY3RcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBzaXplPXt0aGlzLnByb3BzLnNpemV9XG4gICAgICAgICAgICBiZ0NvbG9yPXt0aGlzLnByb3BzLmJnQ29sb3J9IGZnQ29sb3I9e3RoaXMucHJvcHMuZmdDb2xvcn1cbiAgICAgICAgICAgIGxldmVsPXt0aGlzLnByb3BzLmxldmVsfSBpbmNsdWRlTWFyZ2luPXt0aGlzLnByb3BzLmluY2x1ZGVNYXJnaW59XG4gICAgICAgICAgICByZW5kZXJBcz17dGhpcy5SRU5ERVJfVFlQRX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxhIGhyZWY9JycgcmVmPXt0aGlzLmhpZGRlbkxpbmtSZWZ9IHRhYkluZGV4PXstMX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidG5LbGFzc30+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkJ0bkNsaWNrfSBzaXplPSdzbScgdHlwZT0nc2Vjb25kYXJ5JyBjbGFzc05hbWU9J210LTQnPlxuICAgICAgICAgICAge3RoaXMuX2dldFNhdmVCdG5MYWJlbCgpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqICBBIHJlYWN0IGNvbXBvbmVudCBmb3IgZ2VuZXJhdGluZyBhIFFSLWNvZGUgYmFzZWQgb24gYSBVUkwgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgUVJDb2RlID0gd2l0aFN0eWxlcyhpbmplY3RJbnRsKF9RUkNvZGUpLCAnUVJDb2RlJylcbmV4cG9ydCBkZWZhdWx0IFFSQ29kZVxuIiwiaW1wb3J0IHsgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBxcmNvZGVTdHlsZXMgKHByb3BzKTogU2VyaWFsaXplZFN0eWxlcyB7XG4gIC8vIGxldCB0aGVtZSA9IHByb3BzLnRoZW1lO1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucXJjb2RlLXdhcHBlcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5idG57XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuaGlkZS1idG57XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlZ2lzdGVyU3R5bGVzIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCB7IHFyY29kZVN0eWxlcyBhcyBRUkNvZGUgfSBmcm9tICcuL2xpYi9xci1jb2RlL3N0eWxlcy9xci1jb2RlJ1xuXG5yZWdpc3RlclN0eWxlcygnamltdS11aS9iYXNpYy9xci1jb2RlJywgeyBRUkNvZGUgfSlcbmV4cG9ydCB7IFFSQ29kZSB9IGZyb20gJy4vbGliL3FyLWNvZGUvY29tcG9uZW50cy9xci1jb2RlJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9