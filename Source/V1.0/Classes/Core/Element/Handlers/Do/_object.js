
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _object(macro) {
	let results = {};
	
	Object.keys(macro).forEach((command) => {
		results[command] = this.do(command, macro[command]);
	});
	
	return results;
}

exports(_object).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_object');
