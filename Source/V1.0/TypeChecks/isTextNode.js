
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

exports(isTextNode).as('/JSUI/Source/V1.0/TypeChecks/isTextNode');
