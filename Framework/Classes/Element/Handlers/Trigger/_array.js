export default function _array(collection, args){
	let results = [];
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}