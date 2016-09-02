import StyleRule from '/Framework/Classes/StyleSheetRule';
import isStyleRule from '/Framework/TypeChecks/isStyleRule';

export default describe("Framework/TypeChecks/isStyleRule", function() {
	//TRUE
	it("should return true if argument is a style rule", function() {
		expect(isStyleRule((new StyleRule()))).toBe(true);
	});
	it("should return true if argument is inherited from a style rule", function() {
		class SomeRule extends StyleRule {}
		expect(isStyleRule((new SomeRule()))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isStyleRule(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isStyleRule(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isStyleRule(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isStyleRule("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isStyleRule({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isStyleRule([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isStyleRule(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isStyleRule(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isStyleRule(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isStyleRule(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isStyleRule(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isStyleRule(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isStyleRule(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isStyleRule(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isStyleRule(true)).toBe(false);
	});
});