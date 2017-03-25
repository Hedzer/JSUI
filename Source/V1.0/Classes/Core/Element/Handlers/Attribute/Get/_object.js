
//Handlers
import _set_object from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_object';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _get_object(macro){
	return _set_object.call(this, macro);
}

exports(_get_object).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_get_object');
