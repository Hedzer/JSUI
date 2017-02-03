import Collection from '/Framework/V1.0/Classes/Collection';

export default function _array(collection, value) {
	let results = new Collection();
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	return results;
}