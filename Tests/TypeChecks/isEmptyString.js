import isEmptyString from 'Framework/TypeChecks/isEmptyString';

export default describe("Framework/TypeChecks/isEmptyString", function() {
	//TRUE
	it("should return true if argument is an empty string", function() {
		expect(isEmptyString("")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isEmptyString(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isEmptyString(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isEmptyString(class A {})).toBe(false);
	});
	it("should return false if argument is a string with a value of '0'", function() {
		expect(isEmptyString("0")).toBe(false);
	});
	it("should return false if argument is a string with a value of '1'", function() {
		expect(isEmptyString("1")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isEmptyString(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isEmptyString(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isEmptyString(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isEmptyString(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isEmptyString(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isEmptyString(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isEmptyString({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isEmptyString([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isEmptyString(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isEmptyString(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function() {
		expect(isEmptyString(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function() {
		expect(isEmptyString(true)).toBe(false);
	});
});