
//Handlers
import _path from '/Framework/V1.0/Classes/Core/Element/Handlers/Text/_path';
import _string from '/Framework/V1.0/Classes/Core/Element/Handlers/Text/_string';
import _undefined from '/Framework/V1.0/Classes/Core/Element/Handlers/Text/_undefined';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Text = {
	path: _path,
	string: _string,
	undefined: _undefined
};

export default Text;

exports(Text).as('/Framework/V1.0/Classes/Core/Element/Handlers/Text');