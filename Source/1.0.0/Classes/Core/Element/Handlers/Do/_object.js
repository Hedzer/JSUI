
//Utilities
import exports from 'Parcello/exports';

export default function _object(macro) {
	let results = {};
	
	Object.keys(macro).forEach((command) => {
		results[command] = this.do(command, macro[command]);
	});
	
	return results;
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Do/_object');
