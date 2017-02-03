export default function _jsui(proto) {
	let results = [];
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}