
//Handlers
import _array from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_array';
import _function from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_function';
import _object from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_object';
import _path from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_path';
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Do = {
	array: _array,
	function: _function,
	object: _object,
	path: _path,
	string: _string,
};

export default Do;

exports(Do).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do');
