
//Utilities
import exports from 'Parcello/exports';

export default function isDOM(u) {
	return (u instanceof Element);
}

exports(isDOM).as('JSUI/Source/1.0.0/TypeChecks/isDOM');
