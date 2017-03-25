
//Classes
import Collection from '/JSUI/Source/V1.0/Classes/Core/Collection';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _array(collection) {
	let results = new Collection();
	
	collection.forEach((item) => {
		results.push(this.class(item));
	});
	
	return results;
}

exports(_array).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Class/_array');
