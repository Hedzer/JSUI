export default function _jsui(proto) {
	var results = [];
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}