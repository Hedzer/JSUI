
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _object(assignments) {
	Object.keys(assignments).forEach((name) => {
		let args = assignments[name];
		this.trigger(name, args);
	});
}

exports(_object).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger/_object');
