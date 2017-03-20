
//Handlers
import _dom from '/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_dom';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_string';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Constructor = {
	dom: _dom,
	string: _string,
};

export default Constructor;

exports(Constructor).as('/Framework/V1.0/Classes/Core/Element/Handlers/Constructor');