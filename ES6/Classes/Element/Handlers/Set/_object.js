export default function _object(assignments) {
	var results = {};
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	return results;	
}