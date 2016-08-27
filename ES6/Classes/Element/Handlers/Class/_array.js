export default function _array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.class(item));
	});
	return results;
}