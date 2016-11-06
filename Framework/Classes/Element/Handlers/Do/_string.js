import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';

export default function _string(command, args) {
	if (isFunction(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}