import getFirstNonTextChild from 'Framework/Utilities/Elements/getFirstNonTextChild';

export default describe("Framework/Utilities/Elements/getFirstNonTextChild", function() {
	it("should return the first non-text node of an element's set of chidren", function() {
		var el = document.createElement('div');
		var textNode = document.createTextNode('test');
		var notATextNode = el.appendChild(document.createElement('a'));
		el.appendChild(document.createElement('b'));
		el.appendChild(textNode);
		expect(getFirstNonTextChild(el)).toEqual(notATextNode);
	});
});