export default function _array(collection) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.class(item));
	});
	return results;
}