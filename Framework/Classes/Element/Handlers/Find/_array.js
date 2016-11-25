import Collection from 'Framework/Classes/Collection';

export default function _array(collection) {
	let results = new Collection();
	collection.forEach((item) => {
		results.push(this.find(item));
	});
	return results;
}