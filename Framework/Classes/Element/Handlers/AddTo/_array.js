 export default function _array(collection){
	var results = [];
	collection.forEach((item) => {
		results.push(this.addTo(item));
	});
	return results;
}