
//TypeChecks
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';

//Utilities
import exports from 'Parcello/exports';

export default function _object(macro, value){
	let result = (isObject(value) ? value : {});
	
	Object.keys(macro).forEach((attribute) => {
		results[attribute] = this.attribute(attribute, macro[attribute]);
	});
	
	return results;
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_object');