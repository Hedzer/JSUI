
//Handlers
import _dom from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor/_dom';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor/_string';

//Utilities
import exports from 'Parcello/exports';

let Constructor = {
	dom: _dom,
	string: _string,
};

export default Constructor;

exports(Constructor).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor');