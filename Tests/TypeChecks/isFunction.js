import isFunction from 'Framework/TypeChecks/isFunction';

export default describe("Framework/TypeChecks/isFunction", function() {
	it("should return true if argument is a function", function() {
		expect(isFunction(function(){})).toBe(true);
	});
	it("should return true if argument is an arrow function", function() {
		expect(isFunction(() => {})).toBe(true);
	});
	it("should return true if argument is a class", function() {
		expect(isFunction(class A {})).toBe(true);
	});
	it("should return false if argument is a string", function() {
		expect(isFunction("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isFunction(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isFunction(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isFunction(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isFunction(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isFunction(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isFunction(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isFunction({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isFunction([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isFunction(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isFunction(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function() {
		expect(isFunction(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function() {
		expect(isFunction(true)).toBe(false);
	});
});