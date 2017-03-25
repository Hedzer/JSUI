
//Handlers
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/On/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _path(name, method) {
	return _string.call(this, name, method);
}

exports(_path).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/On/_path');