import isUndefined from 'Framework/TypeChecks/isUndefined';

export default describe("Framework/TypeChecks/isUndefined", function() {
	//TRUE
	it("should return true if argument is undefined", function() {
		expect(isUndefined(undefined)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isUndefined(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isUndefined(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isUndefined(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isUndefined("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isUndefined({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isUndefined([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isUndefined(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isUndefined(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isUndefined(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isUndefined(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isUndefined(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isUndefined(-1)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isUndefined(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isUndefined(true)).toBe(false);
	});
});