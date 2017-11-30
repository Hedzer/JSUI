
//Utilities
import exports from 'Parcello/exports';

export default function _array(properties, value) {
	let results = {};
	
	properties.forEach((command) => {
		results[command] = this.set(command, value);
	});
	
	return results;
}

exports(_array).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_array');
