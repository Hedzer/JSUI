import { default as tags } from 'Framework/Constants/HTML/tags';
import isNativeTag from 'Framework/TypeChecks/isNativeTag';

export default describe("Framework/TypeChecks/isNativeTag", function() {
	//TRUE
	it("should return true if argument is any native tag", function() {
		tags.forEach(function(tag) {
			expect(isNativeTag(tag)).toBe(true);
		});
	});
	//FALSE
	it("should return false if argument is not a native tag", function() {
		tags.forEach(function(tag) {
			expect(isNativeTag('NOT-' + tag)).toBe(false);
		});
	});
	it("should return false if argument is a function", function() {
		expect(isNativeTag(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isNativeTag(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isNativeTag(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isNativeTag("")).toBe(false);
	});
	it("should return false if argument is a number", function() {
		expect(isNativeTag(1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isNativeTag({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isNativeTag([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isNativeTag(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isNativeTag(undefined)).toBe(false);
	});
});