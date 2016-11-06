import getter from 'Framework/Utilities/Paths/getter';

export default describe("Framework/Utilities/Paths/getter", function () {
    var testProperty = "prop";
    var testValue = "value";

    it("should get prop from object", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, testProperty)).toBe(testValue);
    });

    it("should return undefined for bool", function () {
        var testBool = true;

        expect(getter(testBool, testProperty)).toBe(undefined);
    });

    it("should return undefined for array", function () {
        var testArray = [];

        expect(getter(testArray, testProperty)).toBe(undefined);
    });

    it("should return undefined for number", function () {
        var testNumber = 0;

        expect(getter(testNumber, testProperty)).toBe(undefined);
    });

    it("should return undefined for string", function () {
        var testString = "test";

        expect(getter(testString, testProperty)).toBe(undefined);
    });

    it("should return undefined for null", function () {
        var testNull = null;

        expect(getter(testNull, testProperty)).toBe(undefined);
    });

    it("should return undefined for undefined", function () {
        var testUndefined = undefined;

        expect(getter(testUndefined, testProperty)).toBe(undefined);
    });

    it("should return undefined for NaN", function () {
        var testNaN = NaN;

        expect(getter(testNaN, testProperty)).toBe(undefined);
    });

    it("should return undefined for date", function () {
        var testDate = new Date();

        expect(getter(testDate, testProperty)).toBe(undefined);
    });

    it("should return undefined for symbol", function () {
        var testSymbol = Symbol("test");

        expect(getter(testSymbol, testProperty)).toBe(undefined);
    });

    it("should return undefined for prop not on object", function () {
        var propertyNotInObject = "nonExistentProperty";
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, propertyNotInObject)).toBe(undefined);
    });
    
    it("should return undefined for prop equal to null", function () {
        var testObject = {
            [testProperty]: testValue
        };
        
        expect(getter(testObject, null)).toBe(undefined);
    });

    it("should return undefined for prop equal to bool", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, true)).toBe(undefined);
    });

    it("should return undefined for prop equal to undefined", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, undefined)).toBe(undefined);
    });

    it("should return undefined for prop equal to object", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, {})).toBe(undefined);
    });

    it("should return undefined for prop equal to function", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, Function.prototype)).toBe(undefined);
    });

    it("should return undefined for prop equal to symbol", function () {
        var testObject = {
            [testProperty]: testValue
        };

        expect(getter(testObject, Symbol("test"))).toBe(undefined);
    });
});
