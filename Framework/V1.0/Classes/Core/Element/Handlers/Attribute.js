//Get
import _get_undefined from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_undefined';
import _get_string from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_string';
import _get_path from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_path';
import _get_array from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_array';
import _get_object from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Get/_object';

//Set
import _set_string from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_string';
import _set_path from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_path';
import _set_array from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_array';
import _set_object from '/Framework/V1.0/Classes/Core/Element/Handlers/Attribute/Set/_object';

let Attribute = {
	Get:{
		undefined: _get_undefined,
		string: _get_string,
		path: _get_path,
		array: _get_array,
		object: _get_object
	},
	Set:{
		string: _set_string,
		path: _set_path,
		array: _set_array,
		object: _set_object
	}
};

export default Attribute;