import isRegex from 'Framework/TypeChecks/isRegex';

export default describe("Framework/TypeChecks/isRegex", function() {
	//TRUE
	it("should return true if argument is a regex literal", function() {
		expect(isRegex(/ab+c/)).toBe(true);
	});
	it("should return true if argument is a regex class instance", function() {
		expect(isRegex((new RegExp("ab+c")))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isRegex(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isRegex(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isRegex(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isRegex("")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isRegex({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isRegex([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isRegex(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isRegex(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isRegex(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isRegex(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isRegex(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isRegex(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isRegex(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isRegex(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isRegex(true)).toBe(false);
	});
});