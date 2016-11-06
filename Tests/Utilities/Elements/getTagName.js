import { default as tags } from 'Framework/Constants/HTML/tags';
import getTagName from 'Framework/Utilities/Elements/getTagName';

export default describe("Framework/Utilities/Elements/getTagName", function() {
	it("should get the tag name of the element", function() {
		var el = document.createElement('div');
		expect(getTagName(el)).toBe('div');
	});
	it("should get the tag name of each element in HTML Constants", function() {
		tags.forEach(function(tag) {
			var el = document.createElement(tag);
			expect(getTagName(el)).toBe(tag);
		});
	});
});