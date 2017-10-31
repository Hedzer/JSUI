
//Utilities
import exports from 'Parcello/exports';

export default function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

exports(isTextNode).as('JSUI/Source/1.0.0/TypeChecks/isTextNode');
