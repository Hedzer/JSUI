import Collection from 'Framework/Classes/Collection';

export default function _array(collection, args){
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.trigger(item, args));
	});
	return results;
}