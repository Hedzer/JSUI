import uncapitalize from 'Framework/Utilities/Strings/uncapitalize';

export default describe("Framework/Utilities/Strings/uncapitalize", function() {
	it("should uncapitalize a string", function() {
		expect(uncapitalize('Test')).toBe('test');
	});
});