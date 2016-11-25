import isArray from 'Framework/TypeChecks/isArray';
import isFunction from 'Framework/TypeChecks/isFunction';
import Do from 'Framework/Classes/Collection/Handlers/Do';
import unhandled from 'Framework/Classes/General/Handlers/unhandled';
import getHandledType from 'Framework/Classes/Element/getHandledType';

export default class Collection extends Array {
	constructor(target) {
		super();
		if (isArray(target)) {
			target.forEach((item) => {
				this.push(item);
			});
		}
	}
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
	where(filter) {
		let results = new Collection();
		if (!isFunction(filter)) { return results; }
		for (let i = this.length - 1; i >= 0; i--) {
			let result = this[i];
			if (filter(result)) {
				results.push(result);
			}
		}
		return results;
	}
}