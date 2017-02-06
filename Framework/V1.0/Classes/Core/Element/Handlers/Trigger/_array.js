import Collection from '/Framework/V1.0/Classes/Core/Collection';

export default function _array(collection, args){
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}