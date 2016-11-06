import isPath from 'Framework/TypeChecks/isPath';

export default describe("Framework/TypeChecks/isPath", function() {
	//TRUE
	it("should return true if argument is a path string", function() {
		expect(isPath("@some.path")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isPath(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isPath(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isPath(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isPath("")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isPath({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isPath([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isPath(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isPath(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isPath(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isPath(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isPath(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isPath(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isPath(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isPath(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isPath(true)).toBe(false);
	});
});