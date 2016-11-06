export default function _object(macro) {
	let results = {};
	Object.keys(macro).forEach((command) => {
		results[command] = this.do(command, macro[command]);
	});
	return results;
}