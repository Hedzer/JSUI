
//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function debounce(fn, time) {
	if (isFunction(fn)) {
		let dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(() => {fn.apply(null, arguments)}, time);
		};
	}
}

exports(debounce).as('/Framework/V1.0/Utilities/Functions/debounce');
