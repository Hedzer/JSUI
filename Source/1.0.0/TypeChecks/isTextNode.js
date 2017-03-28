
//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

export default function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

exports(isTextNode).as('/JSUI/Source/1.0.0/TypeChecks/isTextNode');
