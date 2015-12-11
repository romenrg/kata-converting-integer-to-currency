function toCurrency(price){
    var stringResult = "";
    while (price >= 1000) {
        stringResult = _prependCommaIfNeeded(stringResult);
        stringResult = _concatenateNewModulus(price, stringResult);
        price = parseInt(price/1000);
    }
    var remainder = price % 1000;
    stringResult = _prependCommaIfNeeded(stringResult);
    stringResult = (remainder).toString().concat(stringResult);
    return stringResult;
}

function _concatenateNewModulus(price, stringResult) {
    var tempRightPart = price % 1000;
    if (tempRightPart >= 100) {
        stringResult = (tempRightPart).toString().concat(stringResult);
    }
    else if (tempRightPart >= 10) {
        stringResult = "0".concat(tempRightPart + stringResult);
    }
    else {
        stringResult = "00".concat(tempRightPart + stringResult);
    }
    return stringResult;
}

function _prependCommaIfNeeded(stringResult) {
    if(stringResult.match(/^\d/)) {
        stringResult = ",".concat(stringResult);
    }
    return stringResult;
}

module.exports = toCurrency;