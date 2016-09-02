export default function _array(collection, value) {
	var results = [];
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	return results;
}