import Element from '/Framework/V1.0/Classes/Element';

export default function _function(method) {
	let results = [];
	let isJSUI = Element.isPrototypeOf(method.prototype);
	if (isJSUI) {
		let proto = method.prototype;
		this.children(function(child) {
			if (proto.isPrototypeOf(child)) {
				results.push(child);
			}
		});
	}
	return results;
}