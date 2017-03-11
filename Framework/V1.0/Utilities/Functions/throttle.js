
//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(throttle).as('/Framework/V1.0/Utilities/Functions/throttle');
