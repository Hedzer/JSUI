
//Utilities
import exports from 'Parcello/exports';

export default function _string(tag) {
	tag = (tag || 'div');
	this.element = document.createElement(tag);
	return tag;
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor/_string');
