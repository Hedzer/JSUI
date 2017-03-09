
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getClasses from '/Framework/V1.0/Utilities/Elements/getClasses';

export default function _undefined() {
	return getClasses(this.element);
}

exports(_undefined).as('/Framework/V1.0/Classes/Core/Element/Handlers/Class/_undefined');
