import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_array';
import _object from '/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_object';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Trigger/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Trigger = {
	array: _array,
	object: _object,
	path: _path,
	string: _string
};

export default Trigger;

exports(Trigger).as('/Framework/V1.0/Classes/Core/Element/Handlers/Trigger');