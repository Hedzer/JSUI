
//Utilities
import exports from 'Parcello/exports';
import get from 'JSUI/Source/1.0.0/Utilities/Paths/get';

export default function _path(path) {
	return get(this, path);
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Get/_path');
