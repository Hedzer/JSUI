
//Handlers
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _path(query) {
	return _string.call(this, query);
}

exports(_path).as('/Framework/V1.0/Classes/Core/Element/Handlers/Find/_path');
