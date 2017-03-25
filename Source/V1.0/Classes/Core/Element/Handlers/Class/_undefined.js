
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import getClasses from '/JSUI/Source/V1.0/Utilities/Elements/getClasses';

export default function _undefined() {
	return getClasses(this.element);
}

exports(_undefined).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Class/_undefined');
