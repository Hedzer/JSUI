
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _element(proto) {
	let results = [];
	
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	
	return results;
}

exports(_element).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Find/_element');
