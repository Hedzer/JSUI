import _array from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger/_array';
import _object from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger/_object';
import _path from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger/_path';
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Trigger = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
};

export default Trigger;

exports(Trigger).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Trigger');