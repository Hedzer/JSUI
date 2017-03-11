
//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/Framework/V1.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isExecutable(method) {
	return (isFunction(method) || isJSUIFunction(method));
}

exports(isExecutable).as('/Framework/V1.0/TypeChecks/isExecutable');
