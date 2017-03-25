
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import set from '/JSUI/Source/V1.0/Utilities/Paths/set';

export default function _path(path, value) {
	return set(this, path, value);
}

exports(_path).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_path');
