import isTextNode from 'Framework/TypeChecks/isTextNode';

export default describe("Framework/TypeChecks/isTextNode", function() {
	//TRUE
	it("should return true if argument is a text node", function() {
		expect(isTextNode(document.createTextNode('text node'))).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isTextNode(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isTextNode(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isTextNode(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isTextNode("a string")).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isTextNode({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isTextNode([])).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isTextNode(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isTextNode(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isTextNode(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isTextNode(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isTextNode(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isTextNode(-1)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isTextNode(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isTextNode(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isTextNode(true)).toBe(false);
	});
});