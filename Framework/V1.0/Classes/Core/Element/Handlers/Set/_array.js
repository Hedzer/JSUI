export default function _object(properties, value) {
	let results = {};
	properties.forEach((command) => {
		results[command] = this.set(command, value);
	});
	return results;
}