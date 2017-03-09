
//Classes
import Base from '/Framework/V1.0/Classes/Core/Base';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import uid from '/Framework/V1.0/Utilities/General/uid';

//Mixins
import Enableable from '/Framework/V1.0/Mixins/Enableable';
import Eventful from '/Framework/V1.0/Mixins/Eventful';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Stateful from '/Framework/V1.0/Mixins/Stateful';

//TypeChecks
import isBoolean from '/Framework/V1.0/TypeChecks/isBoolean';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isNumber from '/Framework/V1.0/TypeChecks/isNumber';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';

//Utilities
import debounce from '/Framework/V1.0/Utilities/Functions/debounce';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import throttle from '/Framework/V1.0/Utilities/Functions/throttle';

export default class JSUIFunction extends Base
	.implements(
		Privatelike,
		Stateful,
		Eventful,
		Enableable,
	) {

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

	//methods
	apply() {
		if (!this.executable) { return; }
		this[$private].count++;
		return Function.prototype.apply.apply(this.modified, arguments);
	}
	call() {
		if (!this.executable) { return; }
		this[$private].count++;
		return Function.prototype.call.apply(this.modified, arguments);
	}
	debounce(time) {
		time = (isNumber(time) ? time : false);
		this[$private].debounce = time;
		this.modify();
		return this;
	}
	execute() {
		if (!this.executable) { return; }
		this[$private].count++;
		return this.modified.apply(null, arguments);
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
	throttle(time) {
		time = (isNumber(time) ? time : false);
		this[$private].throttle = time;
		this.modify();
		return this;
	}

	//properties
	get context() {
		return this[$private].context;
	}
	set context(v) {
		this[$private].context = v;
		this.modify();
	}
	get count() {
		return this[$private].count;
	}
	get executable() {
		return (!this.isAtLimit && this.enabled);
	}
	get isAtLimit() {
		return (this[$private].count >= this[$private].limit);
	}
	set isAtLimit(v) {
		this[$private].count = (v ? this[$private].limit : 0);
	}
	get limit() {
		return this[$private].limit;
	}
	set limit(v) {
		v = (isNumber(v) ? v : Infinity);
		this[$private].limit = v;
	}
	get modified() {
		return this[$private].modified;
	}
	get original() {
		return this[$private].original;
	}
	set original(v) {
		this[$private].original = v;
		this.modify();
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
}

exports(Base).as('/Framework/V1.0/Classes/Core/Base');
