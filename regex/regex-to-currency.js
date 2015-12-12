function toCurrency(price) {
    var reversed = price.toString().split("").reverse().join("");
    var currencyFormat = reversed.replace(/(\d\d\d)/g, "$1,").split("").reverse().join("");
    if(currencyFormat[0] !== ",")
        return currencyFormat;
    else
        return currencyFormat.substr(1, currencyFormat.length-1);
}

module.exports = toCurrency;