import isFunction from 'Framework/TypeChecks/isFunction';
import isUndefined from 'Framework/TypeChecks/isUndefined';
import isNumber from 'Framework/TypeChecks/isNumber';
import isBoolean from 'Framework/TypeChecks/isBoolean';
import uid from 'Framework/Utilities/General/uid';
import debounce from 'Framework/Utilities/Functions/debounce';
import throttle from 'Framework/Utilities/Functions/throttle';

export default class RobustFunction {
	constructor(original) {
		original = (isFunction(original) ? original : () => {});
		this.private = {
			uid: uid(),
			original: original,
			debounce: false,
			throttle: false,
			modified: original,
			context: undefined
		};
	}
	get uid() {
		return this.private.uid;
	}
	get original() {
		return this.private.original;
	}
	set original(v) {
		this.private.original = v;
		this.modify();
	}
	get modified() {
		return this.private.modified;
	}
	get context() {
		return this.private.context;
	}
	set context(v) {
		this.private.context = v;
		this.modify();
	}
	execute() {
		return this.modified.apply(null, arguments);
	}
	call() {
		Function.prototype.call.apply(this.modified, arguments);
	}
	apply() {
		Function.prototype.apply.apply(this.modified, arguments);
	}
	debounce(time) {
		time = (isNumber(time) ? time : false);
		this.private.debounce = time;
		this.modify();
		return this;
	}
	throttle(time) {
		time = (isNumber(time) ? time : false);
		this.private.throttle = time;
		this.modify();
		return this;
	}
	modify() {
		let modified = this.original;
		let dbcTime = this.private.debounce;
		let trlTime = this.private.throttle;
		modified = (isBoolean(dbcTime) ? modified : debounce(modified, dbcTime));
		modified = (isBoolean(trlTime) ? modified : throttle(modified, trlTime));
		modified = (isUndefined(this.context) ? modified : modified.bind(this.context));
		this.private.modified = modified;
		return modified;
	}
}