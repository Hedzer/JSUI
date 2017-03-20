
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isDOM(u) {
	return (u instanceof Element);
}

exports(isDOM).as('/Framework/V1.0/TypeChecks/isDOM');
