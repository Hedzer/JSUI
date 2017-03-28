//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function _get_string(name) {
	return this.element.getAttribute(name);
}

exports(_get_string).as('/JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_get_string');
