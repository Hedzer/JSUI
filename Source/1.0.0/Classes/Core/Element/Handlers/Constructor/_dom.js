
//Utilities
import exports from 'Parcello/exports';
import getTagName from 'JSUI/Source/1.0.0/Utilities/Elements/getTagName';

export default function _dom(el) {
	this.element = el;
	return getTagName(el);
}

exports(_dom).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Constructor/_dom');
