import childNodes from 'Framework/Utilities/Elements/childNodes';

export default describe("Framework/Utilities/Elements/childNodes", function() {
	var el = document.createElement('div');
	var children = [
		document.createElement('a'),
		document.createElement('b'),
		document.createElement('c')
	];
	el.appendChild(children[0]);
	el.appendChild(children[1]);
	el.appendChild(children[2]);

	it("should iterate over existing nodes", function() {
		var n = 0;
		childNodes(el, function(child) {
			expect(children[n]).toBe(child);
			n++;
		});
	});
	it("should iterate over existing nodes, break when true is returned", function() {
		var n = 0;
		childNodes(el, function(child) {
			n++;
			return true;
		});
		expect(n).toBe(1);
	});
	it("should return an array with children", function() {
		var kids = childNodes(el);
		expect(kids).toEqual(children);
	});
});