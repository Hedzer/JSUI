
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import setter from '/Framework/V1.0/Utilities/Paths/setter';

export default function set(obj, path, value) {
	return setter(obj, path, value);
}

exports(set).as('/Framework/V1.0/Utilities/Paths/set');
