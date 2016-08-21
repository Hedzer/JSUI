import isFunction from '../../TypeChecks/isFunction';

export default function debounce(fn, time) {
	if (isFunction(fn)) {
		var dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(fn, time);
		};
	}
}