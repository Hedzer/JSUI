import Data from 'Framework/Classes/Data';
import isUData from 'Framework/TypeChecks/isUData';

export default describe("Framework/TypeChecks/isUData", function() {
	//TRUE
	it("should return true if argument is an uninstanced data class", function() {
		expect(isUData(Data)).toBe(true);
	});
	it("should return true if argument is inherited from the data class and is uninstanced", function() {
		class SomeData extends Data {}
		expect(isUData(SomeData)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isUData(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isUData(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isUData(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isUData("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isUData({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isUData([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isUData(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isUData(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isUData(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isUData(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isUData(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isUData(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isUData(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isUData(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isUData(true)).toBe(false);
	});
});