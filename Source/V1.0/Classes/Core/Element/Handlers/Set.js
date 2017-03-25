
//Handlers
import _array from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_array';
import _object from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_object';
import _path from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_path';
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Set = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
};

export default Set;

exports(Set).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Set');
