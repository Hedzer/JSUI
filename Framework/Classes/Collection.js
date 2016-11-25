import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import Do from 'Framework/Classes/Collection/Handlers/Do';
import Get from 'Framework/Classes/Collection/Handlers/Get';
import Set from 'Framework/Classes/Collection/Handlers/Set';
import $private from 'Framework/Constants/Keys/General/private';
import unhandled from 'Framework/Classes/General/Handlers/unhandled';
import getHandledType from 'Framework/Classes/Element/getHandledType';
import CollectionWhereReceipt from 'Framework/Classes/CollectionWhereReceipt';
import native from 'Framework/Utilities/Classes/native';

export default class Collection extends native(Array) {
	do(method, args) {
		let type = getHandledType(method);
		let action = Do[type];
		return (action || unhandled).call(this, method, args);
	}
	get(property) {
		let type = getHandledType(property);
		let action = Get[type];
		return (action || unhandled).call(this, property);
	}
	set(property, value) {
		let type = getHandledType(property);
		let action = Set[type];
		return (action || unhandled).call(this, property, value);
	}
	where(selector) {
		let receipt = new CollectionWhereReceipt();
		if (!isFunction(selector)) { return receipt; }
		for (let i = this.length - 1; i >= 0; i--) {
			let item = this[i];
			let action = (selector(item) ? 'selected' : 'rejected');
			receipt[action].push(item);
		}
		return receipt;
	}
}