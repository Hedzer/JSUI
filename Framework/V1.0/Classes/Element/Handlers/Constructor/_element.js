import getTagName from '/Framework/V1.0/Utilities/Elements/getTagName';

export default function _element(el) {
	this.element = el;
	return getTagName(el);
}