
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getTagName from '/Framework/V1.0/Utilities/Elements/getTagName';

export default function _element(el) {
	this.element = el;
	return getTagName(el);
}

exports(_element).as('/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_element');
