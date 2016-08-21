import Element from '../../../Element';

export default function _function(method) {
	var results = [];
	var isJSUI = Element.isPrototypeOf(method.prototype);
	if (isJSUI) {
		var proto = method.prototype;
		this.children(function(child) {
			if (proto.isPrototypeOf(child)) {
				results.push(child);
			}
		});
	}
	return results;
}