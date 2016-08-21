//Get
import { default as _get_undefined } from './Attribute/Get/_undefined';
import { default as _get_string } from './Attribute/Get/_string';
import { default as _get_path } from './Attribute/Get/_path';
import { default as _get_array } from './Attribute/Get/_array';
import { default as _get_object } from './Attribute/Get/_object';

//Set
import { default as _set_string } from './Attribute/Set/_string';
import { default as _set_path } from './Attribute/Set/_path';
import { default as _set_array } from './Attribute/Set/_array';
import { default as _set_object } from './Attribute/Set/_object';

var Attribute = {
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