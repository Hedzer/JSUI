
//Utilities
import exports from 'Parcello/exports';
import setter from 'JSUI/Source/1.0.0/Utilities/Paths/setter';

export default function set(obj, path, value) {
	return setter(obj, path, value);
}

exports(set).as('JSUI/Source/1.0.0/Utilities/Paths/set');
