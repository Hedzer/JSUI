import Collection from 'Framework/Classes/Collection';

export default function _array(collection, method){
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.on(item, method));
	});
	return results;
}