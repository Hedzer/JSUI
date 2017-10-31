
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';

//Utilities
import exports from 'Parcello/exports';

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

exports(_function).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find/_function');