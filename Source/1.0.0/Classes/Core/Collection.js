
//Classes
import CollectionWhereReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/CollectionWhere';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Handlers
import getHandledType from 'JSUI/Source/1.0.0/Classes/Core/Element/getHandledType';
import unhandled from 'JSUI/Source/1.0.0/Classes/Core/Handlers/unhandled';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';
import native from 'JSUI/Source/1.0.0/Utilities/Classes/native';

export default class Collection extends native(Array) {
	do(method, args) {
		let results = new Collection();
		this.forEach((item) => {
			if (isFunction(item[method])) {
				results.push(item[method].apply(item, args));
			}
		});
		return results;
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

exports(Collection).as('JSUI/Source/1.0.0/Classes/Core/Collection');