export default function _array(collection, args){
	var results = [];
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}