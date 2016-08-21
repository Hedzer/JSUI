import isArray from '../TypeChecks/isArray';
import DoToEach from './Collection/Handlers/DoToEach';
import getHandledType from './Element/getHandledType';

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