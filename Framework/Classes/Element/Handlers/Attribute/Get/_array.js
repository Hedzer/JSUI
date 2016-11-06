export default function _get_array(collection) {
	let results = {};
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	return results;
}