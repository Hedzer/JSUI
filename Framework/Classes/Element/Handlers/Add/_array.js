export default function _array(collection){
	let results = [];
	collection.forEach((item) => {
		results.push(this.add(item));
	});
	return results;
}