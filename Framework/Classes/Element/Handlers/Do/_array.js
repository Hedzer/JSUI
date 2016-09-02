export default function _array(collection) {
	var results = [];
	collection.forEach((item) => {
		results.push(this.do(item));
	});
	return results;	
}