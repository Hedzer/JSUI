import { default as Element } from 'Framework/Classes/Element';
import isJSUI from 'Framework/TypeChecks/isJSUI';

export default describe("Framework/TypeChecks/isJSUI", function() {
	//TRUE
	it("should return true if argument is a JSUI Element Class", function() {
		var instance = new Element();
		expect(isJSUI(instance)).toBe(true);
	});
	it("should return true if argument is inherited from a JSUI Element Class", function() {
		class A extends Element {}
		var instance = new A();
		expect(isJSUI(instance)).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isJSUI(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isJSUI(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isJSUI(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isJSUI("")).toBe(false);
	});
	it("should return false if argument is a number", function() {
		expect(isJSUI(1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isJSUI({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isJSUI([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isJSUI(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isJSUI(undefined)).toBe(false);
	});
});