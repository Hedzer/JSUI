
//Handlers
import _array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_array';
import _object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_object';
import _path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_path';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set/_string';

//Utilities
import exports from 'Parcello/exports';

let Set = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
};

export default Set;

exports(Set).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Set');
