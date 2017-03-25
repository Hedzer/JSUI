
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _object(assignments) {
	let results = {};
	
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	
	return results;	
}

exports(_object).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_object');
