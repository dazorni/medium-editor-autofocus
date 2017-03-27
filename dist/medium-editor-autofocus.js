(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("medium-editor"));
	else if(typeof define === 'function' && define.amd)
		define(["medium-editor"], factory);
	else if(typeof exports === 'object')
		exports["MediumEditorAutofocus"] = factory(require("medium-editor"));
	else
		root["MediumEditorAutofocus"] = factory(root["medium-editor"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mediumEditor = __webpack_require__(1);

	var _mediumEditor2 = _interopRequireDefault(_mediumEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MediumEditorAutofocus = _mediumEditor2.default.Extension.extend({
	  name: 'autofocus',

	  init: function init() {
	    if (this.getEditorElements().length < 1) {
	      return;
	    }

	    if (!this.getEditorElements()[0].children.length) {
	      this.getEditorElements()[0].focus();
	    } else {
	      this.base.selectElement(this.getEditorElements()[0].children[0]);
	      _mediumEditor2.default.selection.clearSelection(document, true);
	    }
	  }
	});

	exports.default = MediumEditorAutofocus;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;