import isNumber from 'Framework/TypeChecks/isNumber';

export default describe("Framework/TypeChecks/isNumber", function() {
	//TRUE
	it("should return true if argument is a number = 1", function() {
		expect(isNumber(1)).toBe(true);
	});
	it("should return true if argument is a number = 0", function() {
		expect(isNumber(0)).toBe(true);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isNumber(NaN)).toBe(false);
	});
	it("should return true if argument is a number = Infinity", function() {
		expect(isNumber(Infinity)).toBe(true);
	});
	it("should return true if argument is a number = -Infinity", function() {
		expect(isNumber(-Infinity)).toBe(true);
	});
	it("should return true if argument is a number = -1", function() {
		expect(isNumber(-1)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isNumber(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isNumber(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isNumber(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isNumber("")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isNumber({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isNumber([])).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isNumber(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isNumber(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isNumber(true)).toBe(false);
	});
});