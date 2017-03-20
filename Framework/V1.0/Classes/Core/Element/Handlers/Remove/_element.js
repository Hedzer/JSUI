
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _element(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}

exports(_element).as('/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_element');
