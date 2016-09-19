import isFunction from 'Framework/TypeChecks/isFunction';
import isArray from 'Framework/TypeChecks/isArray';
import getWithContext from 'Framework/Utilities/Paths/getWithContext';

export default function _path(command, args) {
	var path = getWithContext(this, command);
	if (!path || !path.context || !path.property) {return; }
	var method = path.context[path.property];
	if (isFunction(method)) {
		if (isArray(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}