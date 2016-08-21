import isElement from '../../TypeChecks/isElement';

export default function getTagName(el) {
	if (isElement(el)) {
		return el.tagName.toLowerCase();
	}
	return 'none';
}