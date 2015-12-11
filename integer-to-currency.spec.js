var toCurrency = require("./integer-to-currency");
var expect = require('chai').expect;

describe("Integer to currency -", function() {
    it("", function() {
        var price1 = 123456;
        expect(toCurrency(price1)).to.equal("123,456");
    });
    it("", function() {
        var price2 = 1234;
        expect(toCurrency(price2)).to.equal("1,234");
    });
    it("", function() {
        var price3 = 123;
        expect(toCurrency(price3)).to.equal("123");
    });
    it("", function() {
        var price4 = 123456789012;
        expect(toCurrency(price4)).to.equal("123,456,789,012");
    });
    it("", function() {
        var price5 = 123006789012;
        expect(toCurrency(price5)).to.equal("123,006,789,012");
    });
    it("", function() {
        var price6 = 0;
        expect(toCurrency(price6)).to.equal("0");
    });
    it("", function() {
        var price7 = 87;
        expect(toCurrency(price7)).to.equal("87");
    });
    it("", function() {
        var price8 = 1000;
        expect(toCurrency(price8)).to.equal("1,000");
    });
});