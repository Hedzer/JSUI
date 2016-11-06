export default function _array(collection, method){
	let results = [];
	collection.forEach((item) => {
		results.push(this.on(item, method));
	});
	return results;
}