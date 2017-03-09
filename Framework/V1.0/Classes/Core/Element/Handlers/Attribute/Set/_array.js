
//Classes
import Collection from '/Framework/V1.0/Classes/Core/Collection';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _array(collection, value) {
	let results = new Collection();
	
	collection.forEach((attribute) => {
		results.push(this.attribute(attribute, value));
	});
	
	return results;
}

exports(_array).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_array');
