
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _jsui(proto) {
	let results = [];
	this.children(function(child) {
		if (child instanceof proto) {
			results.push(child);
		}
	});
	return results;
}

exports(_jsui).as('/Framework/V1.0/Classes/Core/Element/Handlers/Find/_jsui');
