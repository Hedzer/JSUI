import isNull from 'Framework/TypeChecks/isNull';

export default describe("Framework/TypeChecks/isNull", function() {
	//TRUE
	it("should return true if argument is null", function() {
		expect(isNull(null)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isNull(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isNull(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isNull(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isNull("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isNull(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isNull(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isNull(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isNull(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isNull(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isNull(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isNull({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isNull([])).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isNull(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function() {
		expect(isNull(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function() {
		expect(isNull(true)).toBe(false);
	});
});