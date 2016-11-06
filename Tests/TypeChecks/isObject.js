import isObject from 'Framework/TypeChecks/isObject';

export default describe("Framework/TypeChecks/isObject", function() {
	//TRUE
	it("should return true if argument is object", function() {
		expect(isObject({})).toBe(true);
	});
	it("should return true if argument is array", function() {
		expect(isObject([])).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isObject(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isObject(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isObject(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isObject("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isObject(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isObject(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isObject(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isObject(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isObject(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isObject(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isObject(undefined)).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isObject(null)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isObject(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isObject(true)).toBe(false);
	});
});