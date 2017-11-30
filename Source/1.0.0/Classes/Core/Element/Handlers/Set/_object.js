
//Utilities
import exports from 'Parcello/exports';

export default function _object(assignments) {
	let results = {};
	
	Object.keys(assignments).forEach((command) => {
		results[command] = this.set(command, assignments[command]);
	});
	
	return results;	
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_object');
