
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/JSUIFunction/isInstance';
import isStatic from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/JSUIFunction/isStatic';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';
import Eventful from 'JSUI/Source/1.0.0/Mixins/Eventful';
import Privatelike from 'JSUI/Source/1.0.0/Mixins/Privatelike';
import Stateful from 'JSUI/Source/1.0.0/Mixins/Stateful';

//TypeChecks
import isBoolean from 'JSUI/Source/1.0.0/TypeChecks/isBoolean';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isNumber from 'JSUI/Source/1.0.0/TypeChecks/isNumber';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';

//Utilities
import debounce from 'JSUI/Source/1.0.0/Utilities/Functions/debounce';
import exports from 'Parcello/exports';
import throttle from 'JSUI/Source/1.0.0/Utilities/Functions/throttle';

export default class JSUIFunction extends Class
	.implements(
		Privatelike,
		Stateful,
		Eventful,
		Enableable
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
	get [isInstance]() {
		return true;
	}
	static get [isStatic]() {
		return true;
	}
}

exports(JSUIFunction).as('JSUI/Source/1.0.0/Classes/Core/Function');
