
//Handlers
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _path(name, args) {
	return _string.call(this, name, args);
}

exports(_path).as('/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_path');
