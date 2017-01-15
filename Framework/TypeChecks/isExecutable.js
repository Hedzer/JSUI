import isFunction from 'Framework/TypeChecks/isFunction';
import isJSUIFunction from 'Framework/TypeChecks/isJSUIFunction';

export default function isExecutable(method) {
	return (isFunction(method) || isJSUIFunction(method));
}