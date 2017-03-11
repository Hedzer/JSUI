
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function getHandledType(types, u){
	let type = typeof u;
	let subtypes = types[type];
	if (!subtypes) {
		return type;
	}
	for (let name in subtypes) {
		let subtype = subtypes[name];
		if (subtype(u)) {
			return name;
		}
	}
	return type;
};

exports(getHandledType).as('/Framework/V1.0/Utilities/TypeChecks/getHandledType');
