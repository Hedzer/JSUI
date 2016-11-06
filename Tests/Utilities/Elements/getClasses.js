import getClasses from 'Framework/Utilities/Elements/getClasses';

export default describe("Framework/Utilities/Elements/getClasses", function() {
	it("should return an object with class names for keys, true for values", function() {
		var el = document.createElement('div');
		el.className = 'a b c';
		var classes = getClasses(el);
		expect(classes).toEqual({
			a: true,
			b: true,
			c: true
		});
	});
});