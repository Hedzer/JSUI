
//TypeChecks
import isFunction from '/JSUI/Source/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/JSUI/Source/V1.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isExecutable(method) {
	return (isFunction(method) || isJSUIFunction(method));
}

exports(isExecutable).as('/JSUI/Source/V1.0/TypeChecks/isExecutable');
