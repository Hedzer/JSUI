
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _get_array(collection) {
	let results = {};
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	return results;
}

exports(_get_array).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_get_array');
