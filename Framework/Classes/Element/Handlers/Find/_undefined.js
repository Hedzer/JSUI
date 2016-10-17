export default function _undefined() {
	let results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}