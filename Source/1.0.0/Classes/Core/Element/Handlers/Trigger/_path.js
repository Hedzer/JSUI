
//Handlers
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Trigger/_string';

//Utilities
import exports from 'Parcello/exports';

export default function _path(name, args) {
	return _string.call(this, name, args);
}

exports(_path).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Trigger/_path');
