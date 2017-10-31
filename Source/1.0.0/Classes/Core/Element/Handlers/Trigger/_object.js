
//Utilities
import exports from 'Parcello/exports';

export default function _object(assignments) {
	Object.keys(assignments).forEach((name) => {
		let args = assignments[name];
		this.trigger(name, args);
	});
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Trigger/_object');
