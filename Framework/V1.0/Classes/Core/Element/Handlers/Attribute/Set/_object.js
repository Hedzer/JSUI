
//TypeChecks
import isObject from '/Framework/V1.0/TypeChecks/isObject';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _object(macro, value){
	let result = (isObject(value) ? value : {});
	
	Object.keys(macro).forEach((attribute) => {
		results[attribute] = this.attribute(attribute, macro[attribute]);
	});
	
	return results;
}

exports(_object).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_object');