export default function _array(collection, args) {
	let results = [];
	collection.forEach((item) => {
		results.push(this.with(item, args));
	});
	return results;	
}