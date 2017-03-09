
//Handlers
import _set_string from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _set_path() {
	return _set_string.apply(this, arguments);
}

exports(_set_path).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_set_path');
