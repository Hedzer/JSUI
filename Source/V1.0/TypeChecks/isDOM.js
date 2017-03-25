
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isDOM(u) {
	return (u instanceof Element);
}

exports(isDOM).as('/JSUI/Source/V1.0/TypeChecks/isDOM');
