import StyleRule from 'Framework/Classes/StyleSheetRule';
import isUStyleSheetRule from 'Framework/TypeChecks/isUStyleSheetRule';

export default describe("Framework/TypeChecks/isUStyleSheetRule", function() {
	//TRUE
	it("should return true if argument is an uninstanced style rule", function() {
		expect(isUStyleSheetRule(StyleRule)).toBe(true);
	});
	it("should return true if argument is inherited from a style rule and is uninstanced", function() {
		class SomeRule extends StyleRule {}
		expect(isUStyleSheetRule(SomeRule)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isUStyleSheetRule(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isUStyleSheetRule(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isUStyleSheetRule(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isUStyleSheetRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isUStyleSheetRule({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isUStyleSheetRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isUStyleSheetRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isUStyleSheetRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isUStyleSheetRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isUStyleSheetRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isUStyleSheetRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isUStyleSheetRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isUStyleSheetRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isUStyleSheetRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isUStyleSheetRule(true)).toBe(false);
	});
});