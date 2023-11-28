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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/lib.js
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


;// CONCATENATED MODULE: ./src/index.js


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
        return isFloat(value);
    }
}

Float.random = (min, max) => {
    return getRandomFloat(min, max);
}

Float.like = (value) => {
    if (Float.is(value)) {
        return true;
    } else {
        return likeFloat3(value);
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

/* harmony default export */ const src = (Float);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});