import isUJSUI from '/Framework/V1.0/TypeChecks/isUJSUI';
import isUBehavior from '/Framework/V1.0/TypeChecks/isUBehavior';

export default function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
	if (isUBehavior(method)) {
		return this.add(new method());
	}
}