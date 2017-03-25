
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _object(assignments) {
	let results = {};
	
	Object.keys(assignments).forEach((name) => {
		let method = assignments[name];
		results[name] = this.on(name, method);
	});
	
	return results;
}

exports(_object).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/On/_object');
