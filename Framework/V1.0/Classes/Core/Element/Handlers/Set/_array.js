
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _array(properties, value) {
	let results = {};
	
	properties.forEach((command) => {
		results[command] = this.set(command, value);
	});
	
	return results;
}

exports(_array).as('/Framework/V1.0/Classes/Core/Element/Handlers/Set/_array');
