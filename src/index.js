import { isFloat, getRandomFloat, likeFloat3 } from './lib.js';

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

module.export = Float;