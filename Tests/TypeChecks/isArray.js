import isArray from 'Framework/TypeChecks/isArray';

export default describe("Framework/TypeChecks/isArray", function() {
	it("should return false if argument is a function", function() {
		expect(isArray(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isArray(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isArray(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isArray("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isArray(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isArray(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isArray(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isArray(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isArray(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isArray(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isArray({})).toBe(false);
	});
	it("should return true if argument is array", function() {
		expect(isArray([])).toBe(true);
	});
	it("should return false if argument is null", function() {
		expect(isArray(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isArray(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function() {
		expect(isArray(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function() {
		expect(isArray(true)).toBe(false);
	});
});