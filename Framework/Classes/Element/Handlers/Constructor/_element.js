import getTagName from 'Framework/Utilities/Elements/getTagName';

export default function _element(el) {
	this.element = el;
	return getTagName(el);
}