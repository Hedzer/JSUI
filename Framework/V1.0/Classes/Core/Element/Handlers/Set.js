
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Set/_array';
import _object from '/Framework/V1.0/Classes/Core/Element/Handlers/Set/_object';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Set/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Set/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Set = {
	array: _array,
	object: _object,
	path: _path,
	string: _string
};

export default Set;

exports(Set).as('/Framework/V1.0/Classes/Core/Element/Handlers/Set');
