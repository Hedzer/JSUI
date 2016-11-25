import isString from 'Framework/TypeChecks/isString';
import Collection from 'Framework/Classes/Collection';

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