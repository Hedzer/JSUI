
//Get Handlers
import _get_array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_array';
import _get_object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_object';
import _get_path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_path';
import _get_string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_string';
import _get_undefined from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Get/_undefined';

//Set Handlers
import _set_array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_array';
import _set_object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_object';
import _set_path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_path';
import _set_string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute/Set/_string';

//Utilities
import exports from 'Parcello/exports';

let Attribute = {
	Get:{
		array: _get_array,
		object: _get_object,
		path: _get_path,
		string: _get_string,
		undefined: _get_undefined,
	},
	Set:{
		array: _set_array,
		object: _set_object,
		path: _set_path,
		string: _set_string,
	}
};

export default Attribute;

exports(Attribute).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Attribute');