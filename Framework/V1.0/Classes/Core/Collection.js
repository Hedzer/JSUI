
//Classes
import CollectionWhereReceipt from '/Framework/V1.0/Classes/Receipts/CollectionWhere';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Handlers
import Do from '/Framework/V1.0/Classes/Core/Collection/Handlers/Do';
import Get from '/Framework/V1.0/Classes/Core/Collection/Handlers/Get';
import getHandledType from '/Framework/V1.0/Classes/Core/Element/getHandledType';
import Set from '/Framework/V1.0/Classes/Core/Collection/Handlers/Set';
import unhandled from '/Framework/V1.0/Classes/Core/Handlers/unhandled';

//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import native from '/Framework/V1.0/Utilities/Classes/native';

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

exports(Collection).as('/Framework/V1.0/Classes/Core/Collection');