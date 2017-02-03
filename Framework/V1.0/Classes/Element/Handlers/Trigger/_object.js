export default function _object(assignments) {
	Object.keys(assignments).forEach((name) => {
		let args = assignments[name];
		this.trigger(name, args);
	});
}