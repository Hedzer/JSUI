
//Handlers
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_string';

//Utilities
import exports from 'Parcello/exports';

export default function _path(name, method) {
	return _string.call(this, name, method);
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_path');