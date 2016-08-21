export default function _object(assignments) {
	Object.keys(assignments).forEach((name) => {
		var args = assignments[name];
		this.trigger(name, args);
	});
}