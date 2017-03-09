
//Handlers
import _element from '/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_element';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Constructor = {
	element: _element,
	string: _string
};

export default Constructor;

exports(Constructor).as('/Framework/V1.0/Classes/Core/Element/Handlers/Constructor');