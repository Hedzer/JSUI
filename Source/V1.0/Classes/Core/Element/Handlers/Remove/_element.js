
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _element(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}

exports(_element).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Remove/_element');
