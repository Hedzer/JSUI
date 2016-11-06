import isElement from 'Framework/TypeChecks/isElement';

export default describe("Framework/TypeChecks/isElement", function() {
	it("should return true if argument is a DOM element", function() {
		expect(isElement(document.createElement('div'))).toBe(true);
	});
	it("should return false if argument is a function", function() {
		expect(isElement(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isElement(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isElement(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isElement("")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isElement(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isElement(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isElement(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isElement(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isElement(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isElement(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isElement({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isElement([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isElement(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isElement(undefined)).toBe(false);
	});
	it("should return false if argument is boolean/false", function() {
		expect(isElement(false)).toBe(false);
	});
	it("should return false if argument is boolean/true", function() {
		expect(isElement(true)).toBe(false);
	});
});