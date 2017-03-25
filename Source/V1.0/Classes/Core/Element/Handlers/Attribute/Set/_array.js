
//Classes
import Collection from '/JSUI/Source/V1.0/Classes/Core/Collection';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _array(collection, value) {
	let results = new Collection();
	
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	
	return results;
}

exports(_array).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_array');
