import getTextNodes from 'Framework/Utilities/Elements/getTextNodes';

export default describe("Framework/Utilities/Elements/getTextNodes", function() {
	it("gets the text nodes of an element", function() {
		var el = document.createElement('div');
		var c1 = document.createElement('a');
		var t1 = document.createTextNode('test1');
		var c2 = document.createElement('a');
		var t2 = document.createTextNode('test2');
		var c3 = document.createElement('a');
		[c1, t1, c2, t2, c3].forEach(function(child) {
			el.appendChild(child);
		});
		var textNodes = [t1, t2];
		expect(getTextNodes(el)).toEqual(textNodes);
	});
});