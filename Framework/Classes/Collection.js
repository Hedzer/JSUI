import isArray from '/Framework/TypeChecks/isArray';
import DoToEach from '/Framework/Classes/Collection/Handlers/DoToEach';
import unhandled from '/Framework/Classes/General/Handlers/unhandled';
import getHandledType from '/Framework/Classes/Element/getHandledType';

export default class Collection extends Array {
	constructor(target) {
		super();
		if (isArray(target)) {
			target.forEach((item) => {
				this.push(item);
			});
		}
	}
	doToEach(method, args) {
		var type = getHandledType(method);
		var action = DoToEach[type];
		return (action || unhandled).call(this, method, args);
	}
}