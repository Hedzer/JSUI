export default function _object(assignments) {
	var results = {};
	Object.keys(assignments).forEach((name) => {
		var method = assignments[name];
		results[name] = this.on(name, method);
	});
	return results;
}