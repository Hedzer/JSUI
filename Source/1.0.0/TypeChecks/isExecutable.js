
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isJSUIFunction from 'JSUI/Source/1.0.0/TypeChecks/isJSUIFunction';

//Utilities
import exports from 'Parcello/exports';

export default function isExecutable(method) {
	return (isFunction(method) || isJSUIFunction(method));
}

exports(isExecutable).as('JSUI/Source/1.0.0/TypeChecks/isExecutable');
