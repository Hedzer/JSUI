
//TypeChecks
import isClass from '/JSUI/Source/V1.0/TypeChecks/isClass';
import isUClass from '/JSUI/Source/V1.0/TypeChecks/isUClass';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function getHandledType(types, u){
	let type = typeof u;
	
	if (type === 'function') {
		type = (isUClass(u) ? 'uclass' : type);
	}
	
	if (type === 'object') {
		type = (isClass(u) ? 'class' : type);
	}

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

exports(getHandledType).as('/JSUI/Source/V1.0/Utilities/TypeChecks/getHandledType');
