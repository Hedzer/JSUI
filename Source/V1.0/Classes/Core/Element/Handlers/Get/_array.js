
//Classes
import Collection from '/JSUI/Source/V1.0/Classes/Core/Collection';

//TypeChecks
import isString from '/JSUI/Source/V1.0/TypeChecks/isString';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(_array).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Get/_array');
