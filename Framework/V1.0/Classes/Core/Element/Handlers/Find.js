
//Hanlders
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_array';
import _function from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_function';
import _jsui from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_jsui';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_path';
import _regex from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_regex';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_string';
import _undefined from '/Framework/V1.0/Classes/Core/Element/Handlers/Find/_undefined';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Find = {
	array: _array,
	function: _function,
	jsui: _jsui,
	path: _path,
	regex: _regex,
	string: _string,
	undefined: _undefined
};

export default Find;

exports(Find).as('/Framework/V1.0/Classes/Core/Element/Handlers/Find');
