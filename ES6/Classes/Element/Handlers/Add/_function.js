import isUJSUI from '../../../../TypeChecks/isUJSUI';

export default function _function(method) {
	if (isUJSUI(method)) {
		return this.add(new method());
	}
}