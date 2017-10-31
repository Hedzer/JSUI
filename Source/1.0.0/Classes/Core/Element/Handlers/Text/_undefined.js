
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import exports from 'Parcello/exports';

export default function _undefined() {
	if (this[$private].text) {
		return this[$private].text.nodeValue;
	}
}

exports(_undefined).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Text/_undefined');
