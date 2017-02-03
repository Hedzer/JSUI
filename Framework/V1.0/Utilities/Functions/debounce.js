import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

export default function debounce(fn, time) {
	if (isFunction(fn)) {
		let dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(() => {fn.apply(null, arguments)}, time);
		};
	}
}