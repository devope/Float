(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Float"] = factory();
	else
		root["Float"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomFloat: () => (/* binding */ getRandomFloat),
/* harmony export */   isFloat: () => (/* binding */ isFloat),
/* harmony export */   likeFloat3: () => (/* binding */ likeFloat3)
/* harmony export */ });
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function isFloat(value) {
    if (typeof value === "number") {
        return value % 1 != 0;
    } else {
        return false;
    }
}

function getRandomFloat(min, max) {
    min = min ? min : Math.random();
    max = max ? max : Math.random();

    let randomNumber;
    while (!isFloat(randomNumber)) {
        randomNumber = Math.random() * (max - min) + min;

        let randomDecimalsCount = getRandomInt(1, 16);
        randomNumber = randomNumber.toFixed(randomDecimalsCount);
        randomNumber = Number.parseFloat(randomNumber);
    }

    return randomNumber;
}

function likeFloat3(value) {
    if (typeof value === "number") {
        value = value + '';
    }

    if (typeof value === "string") {
        let regexpFloat = /^-?\d*\.\d+$/g;
        let is = !!value.match(regexpFloat);
        return is;
    } else {
        return false;
    }
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float: () => (/* binding */ Float)
/* harmony export */ });
/* harmony import */ var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.js */ "./src/lib.js");


function Float(value) {
    value = value ?? Float.random();
    if (this instanceof Float) {
        this.value = value;
    }
    return value;
}

Float.is = value => {
    if (typeof value === "object") {
        return value instanceof Float;
    } else {
        return (0,_lib_js__WEBPACK_IMPORTED_MODULE_0__.isFloat)(value);
    }
}

Float.random = (min, max) => {
    return (0,_lib_js__WEBPACK_IMPORTED_MODULE_0__.getRandomFloat)(min, max);
}

Float.like = (value) => {
    if (Float.is(value)) {
        return true;
    } else {
        return (0,_lib_js__WEBPACK_IMPORTED_MODULE_0__.likeFloat3)(value);
    }
}

Float.prototype.toFixed = function () {
    if (this instanceof Number) {
        return this.toFixed();
    } else if (this instanceof Float) {
        let value = this.value;
        let valueFixed = value.toFixed();
        let newObj = new Float(valueFixed);
        return newObj;
    }
};

Float.prototype.toString = function () {
    return `${this.value}`;
}

Float.prototype.valueOf = function () {
    return this.value;
}

Float.prototype.equals = function (numberToCompare) {
    if (typeof numberToCompare === "number") {
        return this.valueOf() === numberToCompare;
    } else {
        let numberToCompareAsFloatInstance = new Float(numberToCompare);
        return numberToCompareAsFloatInstance.valueOf === this.valueOf();
    }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});