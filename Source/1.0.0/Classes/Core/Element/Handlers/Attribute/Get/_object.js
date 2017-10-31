
//Handlers
import _set_object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_object';

//Utilities
import exports from 'Parcello/exports';

export default function _get_object(macro){
	return _set_object.call(this, macro);
}

exports(_get_object).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_get_object');
