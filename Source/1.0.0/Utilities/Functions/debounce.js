
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

export default function debounce(fn, time) {
	if (isFunction(fn)) {
		let dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(() => {fn.apply(null, arguments)}, time);
		};
	}
}

exports(debounce).as('JSUI/Source/1.0.0/Utilities/Functions/debounce');
