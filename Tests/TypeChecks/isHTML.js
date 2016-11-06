import isHTML from 'Framework/TypeChecks/isHTML';

export default describe("Framework/TypeChecks/isHTML", function() {
	//TRUE
	it("should return true if argument is an HTML string", function() {
		expect(isHTML("<div></div>")).toBe(true);
	});
	//FALSE
	it("should return false if argument is a function", function() {
		expect(isHTML(function(){})).toBe(false);
	});
	it("should return false if argument is an arrow function", function() {
		expect(isHTML(() => {})).toBe(false);
	});
	it("should return false if argument is a class", function() {
		expect(isHTML(class A {})).toBe(false);
	});
	it("should return false if argument is a string", function() {
		expect(isHTML("")).toBe(false);
	});
	it("should return false if argument is a valid HTML string", function() {
		expect(isHTML("<div>")).toBe(false);
	});
	it("should return false if argument is a number = 1", function() {
		expect(isHTML(1)).toBe(false);
	});
	it("should return false if argument is a number = 0", function() {
		expect(isHTML(0)).toBe(false);
	});
	it("should return false if argument is a number = NaN", function() {
		expect(isHTML(NaN)).toBe(false);
	});
	it("should return false if argument is a number = Infinity", function() {
		expect(isHTML(Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -Infinity", function() {
		expect(isHTML(-Infinity)).toBe(false);
	});
	it("should return false if argument is a number = -1", function() {
		expect(isHTML(-1)).toBe(false);
	});
	it("should return false if argument is object", function() {
		expect(isHTML({})).toBe(false);
	});
	it("should return false if argument is array", function() {
		expect(isHTML([])).toBe(false);
	});
	it("should return false if argument is null", function() {
		expect(isHTML(null)).toBe(false);
	});
	it("should return false if argument is undefined", function() {
		expect(isHTML(undefined)).toBe(false);
	});
	it("should return false if argument is boolean = false", function() {
		expect(isHTML(false)).toBe(false);
	});
	it("should return false if argument is boolean = true", function() {
		expect(isHTML(true)).toBe(false);
	});
});