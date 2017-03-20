
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_array';
import _behavior from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_behavior';
import _dom from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_dom';
import _function from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_function';
import _html from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_html';
import _element from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_element';
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Add/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(Add).as('/Framework/V1.0/Classes/Core/Element/Handlers/Add');
