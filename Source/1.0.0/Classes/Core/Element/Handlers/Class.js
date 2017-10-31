import _array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_array';
import _object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_object';
import _path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_path';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_string';
import _undefined from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_undefined';

//Utilities
import exports from 'Parcello/exports';

let Class = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
	undefined: _undefined,
};

export default Class;

exports(Class).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class');