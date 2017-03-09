
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/On/_array';
import _object from '/Framework/V1.0/Classes/Core/Element/Handlers/On/_object';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/On/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/On/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let On = {
	array: _array,
	object: _object,
	path: _path,
	string: _string
};

export default On;

exports(On).as('/Framework/V1.0/Classes/Core/Element/Handlers/On');
