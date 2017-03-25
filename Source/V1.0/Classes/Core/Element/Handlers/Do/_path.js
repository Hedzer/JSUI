
//TypeChecks
import isArray from '/JSUI/Source/V1.0/TypeChecks/isArray';
import isFunction from '/JSUI/Source/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import getWithContext from '/JSUI/Source/V1.0/Utilities/Paths/getWithContext';

export default function _path(command, args) {
	let path = getWithContext(this, command);
	if (!path || !path.context || !path.property) { return; }
	
	let method = path.context[path.property];
	if (isFunction(method)) {
		if (isArray(args)) {
			return method.apply(path.context, args);
		}
		return method.call(path.context, args);
	}
}

exports(_path).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_path');
