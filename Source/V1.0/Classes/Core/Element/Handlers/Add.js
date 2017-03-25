
//Handlers
import _array from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_array';
import _behavior from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_behavior';
import _dom from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_dom';
import _function from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_function';
import _html from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_html';
import _element from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_element';
import _path from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_path';
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Add = {
	array: _array,
	behavior: _behavior,
	dom: _dom,
	function: _function,
	html: _html,
	element: _element,
	path: _path,
	string: _string,
};

export default Add;

exports(Add).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Add');
