import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Class/_array';
import _object from '/Framework/V1.0/Classes/Core/Element/Handlers/Class/_object';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Class/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Class/_string';
import _undefined from '/Framework/V1.0/Classes/Core/Element/Handlers/Class/_undefined';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Class = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
	undefined: _undefined,
};

export default Class;

exports(Class).as('/Framework/V1.0/Classes/Core/Element/Handlers/Class');