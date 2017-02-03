import isElement from '/Framework/V1.0/TypeChecks/isElement';

export default function getTagName(el) {
	if (isElement(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}