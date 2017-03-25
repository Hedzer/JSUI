
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import nodeAttributes from '/JSUI/Source/V1.0/Utilities/Elements/nodeAttributes';

export default function _undefined() {
	let results = {};
	
	nodeAttributes(this.element, (attribute, value, ref) => {
		results[attribute] = value;
	});
	
	return results;
}

exports(_undefined).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_undefined');
