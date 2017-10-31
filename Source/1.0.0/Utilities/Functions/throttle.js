
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

export default function throttle(fn, time) {
	let nextCall = 0;
	if (isFunction(fn)) {
		return function() {
			let now = (new Date()).getTime();
			if (nextCall <= now) {
				nextCall = now + time;
				fn.apply(null, arguments);
			}
		};
	}
}

exports(throttle).as('JSUI/Source/1.0.0/Utilities/Functions/throttle');
