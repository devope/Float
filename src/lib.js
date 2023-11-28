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

export { isFloat, getRandomFloat, likeFloat3 }