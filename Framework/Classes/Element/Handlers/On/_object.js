export default function _object(assignments) {
	let results = {};
	Object.keys(assignments).forEach((name) => {
		let method = assignments[name];
		results[name] = this.on(name, method);
	});
	return results;
}