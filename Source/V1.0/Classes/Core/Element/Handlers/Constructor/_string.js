
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _string(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}

exports(_string).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Constructor/_string');
