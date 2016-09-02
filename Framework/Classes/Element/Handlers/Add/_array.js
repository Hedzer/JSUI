export default function _array(collection){
	var results = [];
	collection.forEach((item) => {
		results.push(this.add(item));
	});
	return results;
}