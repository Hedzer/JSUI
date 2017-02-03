import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUIFunction from '/Framework/V1.0/TypeChecks/isJSUIFunction';

export default function isExecutable(method) {
	return (isFunction(method) || isJSUIFunction(method));
}