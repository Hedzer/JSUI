
//Handlers
import _set_object from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_object';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _get_object(macro){
	return _set_object.call(this, macro);
}

exports(_get_object).as('/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_get_object');
