
//Utilities
import exports from 'Parcello/exports';

export default function _get_array(collection) {
	let results = {};
	
	collection.forEach((attribute) => {
		results[attribute] = this.attribute(attribute);
	});
	
	return results;
}

exports(_get_array).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_get_array');
