import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isNumber from '/Framework/V1.0/TypeChecks/isNumber';
import isBoolean from '/Framework/V1.0/TypeChecks/isBoolean';
import uid from '/Framework/V1.0/Utilities/General/uid';
import debounce from '/Framework/V1.0/Utilities/Functions/debounce';
import throttle from '/Framework/V1.0/Utilities/Functions/throttle';
import $private from '/Framework/V1.0/Constants/Keys/General/private';

import Base from '/Framework/V1.0/Classes/Base';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Enableable from '/Framework/V1.0/Mixins/Enableable';

export default class JSUIFunction extends Enableable(Privatelike(Base)) {
	constructor(original) {
		super();
		original = (isFunction(original) ? original : () => {});

		this[$private] = {
			uid: uid(),
			original: original,
			debounce: false,
			throttle: false,
			modified: original,
			context: undefined,
			count: 0,
			limit: Infinity
		};
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
	get original() {
		return this[$private].original;
	}
	set original(v) {
		this[$private].original = v;
		this.modify();
	}
	get modified() {
		return this[$private].modified;
	}
	get context() {
		return this[$private].context;
	}
	set context(v) {
		this[$private].context = v;
		this.modify();
	}
	execute() {
		if (!this.executable) { return; }
		this[$private].count++;
		return this.modified.apply(null, arguments);
	}
	call() {
		if (!this.executable) { return; }
		this[$private].count++;
		return Function.prototype.call.apply(this.modified, arguments);
	}
	apply() {
		if (!this.executable) { return; }
		this[$private].count++;
		return Function.prototype.apply.apply(this.modified, arguments);
	}
	debounce(time) {
		time = (isNumber(time) ? time : false);
		this[$private].debounce = time;
		this.modify();
		return this;
	}
	throttle(time) {
		time = (isNumber(time) ? time : false);
		this[$private].throttle = time;
		this.modify();
		return this;
	}
	modify() {
		let modified = this.original;
		let dbcTime = this[$private].debounce;
		let trlTime = this[$private].throttle;
		modified = (isBoolean(dbcTime) ? modified : debounce(modified, dbcTime));
		modified = (isBoolean(trlTime) ? modified : throttle(modified, trlTime));
		modified = (isUndefined(this.context) ? modified : modified.bind(this.context));
		this[$private].modified = modified;
		return modified;
	}
	get count() {
		return this[$private].count;
	}
	get limit() {
		return this[$private].limit;
	}
	set limit(v) {
		v = (isNumber(v) ? v : Infinity);
		this[$private].limit = v;
	}
	get isAtLimit() {
		return (this[$private].count >= this[$private].limit);
	}
	set isAtLimit(v) {
		this[$private].count = (v ? this[$private].limit : 0);
	}
	get executable() {
		return (!this.isAtLimit && this.enabled);
	}
}