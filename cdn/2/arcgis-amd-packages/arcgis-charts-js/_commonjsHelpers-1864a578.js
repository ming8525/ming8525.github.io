define(['exports'], (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function commonjsRequire (path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	exports.commonjsGlobal = commonjsGlobal;
	exports.commonjsRequire = commonjsRequire;
	exports.getDefaultExportFromCjs = getDefaultExportFromCjs;

}));
//# sourceMappingURL=_commonjsHelpers-1864a578.js.map
