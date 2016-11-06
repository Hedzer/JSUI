import isString from 'Framework/TypeChecks/isString';

export default describe("Framework/TypeChecks/isString", function() {
	//TRUE
	it("should return true if argument is an empty string", function() {
		expect(isString("")).toBe(true);
	});
	it("should return true if argument is a string", function() {
		expect(isString("a string")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isString(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isString(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isString(class A {})).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isString({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isString([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isString(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isString(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isString(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isString(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isString(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isString(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isString(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isString(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isString(true)).toBe(false);
	});
});