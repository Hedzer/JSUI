import isFunction from 'Framework/TypeChecks/isFunction';

export default function debounce(fn, time) {
	debugger;
	if (isFunction(fn)) {
		var dbcTimer;
		return function() {
			clearTimeout(dbcTimer);
			dbcTimer = setTimeout(fn, time);
		};
	}
}