
//Utilities
import exports from 'Parcello/exports';

export default function _element(instance) {
	if (instance.remove) {
		return instance.remove();
	}
}

exports(_element).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove/_element');
