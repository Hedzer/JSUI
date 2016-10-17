 export default function _array(collection){
	let results = [];
	collection.forEach((item) => {
		results.push(this.addTo(item));
	});
	return results;
}