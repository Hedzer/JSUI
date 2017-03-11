
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isTextNode(u) {
	return !!(u && u.nodeName === "#text");
}

exports(isTextNode).as('/Framework/V1.0/TypeChecks/isTextNode');
