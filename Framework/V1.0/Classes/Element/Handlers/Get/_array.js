import isString from '/Framework/V1.0/TypeChecks/isString';
import Collection from '/Framework/V1.0/Classes/Collection';

export default function _array(collection) {
	let results = new Collection();
	collection.forEach((item) => {

		let result = this.get(item);
		results.push(result);

		if (isString(item)) {
			results[item] = result;
		}
		
	});
	return results;	
}