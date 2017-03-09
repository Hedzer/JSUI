
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _object(assignments) {
	let results = {};
	
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	
	return results;	
}

exports(_object).as('/Framework/V1.0/Classes/Core/Element/Handlers/Set/_object');
