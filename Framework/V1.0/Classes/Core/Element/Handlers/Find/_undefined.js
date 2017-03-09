
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _undefined() {
	let results = [];
	this.children(function(child) {
		results.push(child);
	});
	return results;
}

exports(_undefined).as('/Framework/V1.0/Classes/Core/Element/Handlers/Find/_undefined');
