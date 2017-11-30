
//Utilities
import exports from 'Parcello/exports';
import set from 'JSUI/Source/1.0.0/Utilities/Paths/set';

export default function _path(path, value) {
	return set(this, path, value);
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_path');
