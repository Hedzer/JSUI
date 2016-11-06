import isString from 'Framework/TypeChecks/isString';

export default function _array(collection) {
	let results = [];
	collection.forEach((item) => {

		let result = this.get(item);
		results.push(result);

		if (isString(item)) {
			results[item] = result;
		}
		
	});
	return results;	
}