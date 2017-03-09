
//Handlers
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _get_path() {
	return _string.apply(this, arguments);
}

exports(_get_path).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_get_path');