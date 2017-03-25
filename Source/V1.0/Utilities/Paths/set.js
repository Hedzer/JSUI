
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import setter from '/JSUI/Source/V1.0/Utilities/Paths/setter';

export default function set(obj, path, value) {
	return setter(obj, path, value);
}

exports(set).as('/JSUI/Source/V1.0/Utilities/Paths/set');
