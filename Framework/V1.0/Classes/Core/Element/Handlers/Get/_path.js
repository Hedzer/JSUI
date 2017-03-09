
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import get from '/Framework/V1.0/Utilities/Paths/get';

export default function _path(path) {
	return get(this, path);
}

exports(_path).as('/Framework/V1.0/Classes/Core/Element/Handlers/Get/_path');
