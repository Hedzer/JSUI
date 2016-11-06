import StyleRule from 'Framework/Classes/StyleSheetRule';
import isStyleSheetRule from 'Framework/TypeChecks/isStyleSheetRule';

export default describe("Framework/TypeChecks/isStyleSheetRule", function() {
	//TRUE
	it("should return true if argument is a style rule", function() {
		expect(isStyleSheetRule((new StyleRule()))).toBe(true);
	});
	it("should return true if argument is inherited from a style rule", function() {
		class SomeRule extends StyleRule {}
		expect(isStyleSheetRule((new SomeRule()))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isStyleSheetRule(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isStyleSheetRule(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isStyleSheetRule(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isStyleSheetRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isStyleSheetRule({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isStyleSheetRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isStyleSheetRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isStyleSheetRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isStyleSheetRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isStyleSheetRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isStyleSheetRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isStyleSheetRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isStyleSheetRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isStyleSheetRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isStyleSheetRule(true)).toBe(false);
	});
});