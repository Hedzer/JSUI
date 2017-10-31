
//Utilities
import exports from 'Parcello/exports';

export default function _object(assignments) {
	let results = {};
	
	Object.keys(assignments).forEach((name) => {
		let method = assignments[name];
		results[name] = this.on(name, method);
	});
	
	return results;
}

exports(_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_object');
