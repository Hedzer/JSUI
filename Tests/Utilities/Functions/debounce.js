import debounce from 'Framework/Utilities/Functions/debounce';

export default describe("Framework/Utilities/Functions/debounce", function () {
    var result = -1,
        expectedResult = 5,
        initialValue = 0,
        delay = 1000;

    function testFunction() {
        result = expectedResult;
    }

    it("should call function passed into debounce after specified delay", function (done) {
        jasmine.clock().install();

        result = initialValue;

        debounce(testFunction, delay)();

        jasmine.clock().tick(++delay);
        expect(result).toBe(expectedResult);

        jasmine.clock().uninstall();
        done();
    });

    it("should not call function passed into debounce prior to specified delay", function (done) {
        jasmine.clock().install();

        result = initialValue;

        debounce(testFunction, delay)();

        jasmine.clock().tick(--delay);
        expect(result).toBe(initialValue);

        jasmine.clock().uninstall();
        done();
    });

    it("should not call function passed into debounce until all bounces are complete", function (done) {
        jasmine.clock().install();

        result = initialValue;

        var debouncedFunction = debounce(testFunction, delay);

        for (var i = 0; i < 10; i++) {
            debouncedFunction();
            jasmine.clock().tick(delay - 1);
            expect(result).toBe(initialValue);
        }

        jasmine.clock().tick(1);
        expect(result).toBe(expectedResult);

        jasmine.clock().uninstall();
        done();
    });
});
