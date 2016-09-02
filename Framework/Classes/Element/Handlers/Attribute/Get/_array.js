export default function _get_array(collection) {
	var results = {};
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	return results;
}