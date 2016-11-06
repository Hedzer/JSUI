import isUJSUI from 'Framework/TypeChecks/isUJSUI';
import isUBehavior from 'Framework/TypeChecks/isUBehavior';

export default function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
	if (isUBehavior(method)) {
		return this.add(new method());
	}
}