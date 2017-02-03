export default function _string(query) {
	let results = null;
	results = this.element.querySelectorAll(query);
	results = (!results || results === null ? [] : results);
	return results;
}