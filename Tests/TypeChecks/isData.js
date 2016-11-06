import Data from 'Framework/Classes/Data';
import isData from 'Framework/TypeChecks/isData';

export default describe("Framework/TypeChecks/isData", function() {
	//TRUE
	it("should return true if argument is a data class instance", function() {
		expect(isData((new Data()))).toBe(true);
	});
	it("should return true if argument inherits from the Data class", function() {
		class SomeData extends Data {}
		expect(isData((new SomeData()))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isData(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isData(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isData(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isData("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isData({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isData([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isData(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isData(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isData(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isData(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isData(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isData(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isData(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isData(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isData(true)).toBe(false);
	});
});