import { default as Element } from 'Framework/Classes/Element';
import isUJSUI from 'Framework/TypeChecks/isUJSUI';

export default describe("Framework/TypeChecks/isUJSUI", function() {
	//TRUE
	it("should return true if argument is an uninstanced JSUI class", function() {
		expect(isUJSUI(Element)).toBe(true);
	});
	it("should return true if argument inherits Element and is uninstanced", function() {
		class TestElement extends Element {}
		expect(isUJSUI(TestElement)).toBe(true);
	});
	//FALSE
	it("should return false if argument is an instanced Element", function() {
		expect(isUJSUI(new Element())).toBe(false);
	});
	it("should return false if argument inherits from Element and is instanced", function() {
		class TestElement extends Element {}
		expect(isUJSUI(new TestElement())).toBe(false);
	});
	it("should return false if argument is a function", function() {
		expect(isUJSUI(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isUJSUI(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isUJSUI(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isUJSUI("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isUJSUI({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isUJSUI([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isUJSUI(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isUJSUI(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isUJSUI(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isUJSUI(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isUJSUI(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isUJSUI(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isUJSUI(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isUJSUI(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isUJSUI(true)).toBe(false);
	});
});