import capitalize from 'Framework/Utilities/Strings/capitalize';

export default describe("Framework/Utilities/Strings/capitalize", function() {
	it("should capitalize a string", function() {
		expect(capitalize('test')).toBe('Test');
	});
});