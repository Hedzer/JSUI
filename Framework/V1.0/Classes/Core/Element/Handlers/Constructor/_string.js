
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Constructor/_string');
