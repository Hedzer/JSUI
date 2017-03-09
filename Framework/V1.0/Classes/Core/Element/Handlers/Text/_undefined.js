
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _undefined() {
	if (this[$private].text) {
		return this[$private].text.nodeValue;
	}
}

exports(_undefined).as('/Framework/V1.0/Classes/Core/Element/Handlers/Text/_undefined');
