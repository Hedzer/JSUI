export default function _array(collection, value) {
	let results = [];
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	return results;
}