export default function _undefined() {
	var results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}