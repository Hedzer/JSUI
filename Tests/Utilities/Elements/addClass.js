import addClass from 'Framework/Utilities/Elements/addClass';

export default describe("Framework/Utilities/Elements/addClass", function() {
	it("should add a class when there is none", function() {
		var el = document.createElement('div');
		addClass(el, 'test');
		expect(el.className).toBe('test');
	});
	it("should add a class when there is already one", function() {
		var el = document.createElement('div');
		addClass(el, 'test');
		addClass(el, 'test2');
		expect(el.className).toBe('test test2');
	});
	it("should add multiple space delimited classes when there are none", function() {
		var el = document.createElement('div');
		addClass(el, 'test test2');
		expect(el.className).toBe('test test2');
	});
	it("should add multiple space delimited classes when there already is one", function() {
		var el = document.createElement('div');
		addClass(el, 'test');
		addClass(el, 'test2 test3')
		expect(el.className).toBe('test test2 test3');
	});
});