import nodeAttributes from 'Framework/Utilities/Elements/nodeAttributes';

export default describe("Framework/Utilities/Elements/nodeAttributes", function() {
	var el = document.createElement('a');
	var attrs = {
		title: 'test',
		href: 'http://faux-test.com'
	}
	for (var name in attrs) {
		el.setAttribute(name, attrs[name]);
	}

	it("should iterate over existing attributes", function() {
		var n = 0;
		nodeAttributes(el, function(name, value) {
			expect(attrs[name]).toBe(value);
		});
	});
	it("should iterate over existing attributes, break when true is returned", function() {
		var n = 0;
		nodeAttributes(el, function(name, value) {
			n++;
			return true;
		});
		expect(n).toBe(1);
	});
	it("should return an object with attribute names as keys and attribute values as values", function() {
		var attributes = nodeAttributes(el);
		for (var name in attributes) {
			expect(attributes[name]).toEqual(attrs[name]);
		}
	});
});