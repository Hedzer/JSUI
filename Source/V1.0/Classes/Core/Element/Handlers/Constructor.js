
//Handlers
import _dom from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Constructor/_dom';
import _string from '/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Constructor/_string';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Constructor = {
	dom: _dom,
	string: _string,
};

export default Constructor;

exports(Constructor).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Constructor');