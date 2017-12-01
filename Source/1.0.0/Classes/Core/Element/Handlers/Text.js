
//Handlers
import _path from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text/_path';
import _string from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text/_string';
import _undefined from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text/_undefined';

//Utilities
import exports from 'Parcello/exports';

let Text = {
	path: _path,
	string: _string,
	number: _string,
	boolean: _string,
	undefined: _undefined,
};

export default Text;

exports(Text).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text');