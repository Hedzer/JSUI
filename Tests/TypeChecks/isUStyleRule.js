import StyleRule from '/Framework/Classes/StyleSheetRule';
import isUStyleRule from '/Framework/TypeChecks/isUStyleRule';

export default describe("Framework/TypeChecks/isUStyleRule", function() {
	//TRUE
	it("should return true if argument is an uninstanced style rule", function() {
		expect(isUStyleRule(StyleRule)).toBe(true);
	});
	it("should return true if argument is inherited from a style rule and is uninstanced", function() {
		class SomeRule extends StyleRule {}
		expect(isUStyleRule(SomeRule)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isUStyleRule(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isUStyleRule(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isUStyleRule(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isUStyleRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isUStyleRule({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isUStyleRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isUStyleRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isUStyleRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isUStyleRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isUStyleRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isUStyleRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isUStyleRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isUStyleRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isUStyleRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isUStyleRule(true)).toBe(false);
	});
});