
//Handlers
import _array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_array';
import _object from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_object';
import _path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_path';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_string';

//Utilities
import exports from 'Parcello/exports';

let On = {
	array: _array,
	object: _object,
	path: _path,
	string: _string,
};

export default On;

exports(On).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On');
