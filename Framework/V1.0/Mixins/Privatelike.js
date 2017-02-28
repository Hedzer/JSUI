//Keys
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isNull from '/Framework/V1.0/TypeChecks/isNull';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import $$private from '/Framework/V1.0/Constants/Keys/Mixins/Privatelike/private';
import isInstance from '/Framework/V1.0/Constants/Keys/Mixins/Privatelike/isInstance';
import isStatic from '/Framework/V1.0/Constants/Keys/Mixins/Privatelike/isStatic';
import define from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import extend from '/Framework/V1.0/Utilities/Objects/extend';

let Privatelike = (descendant) => class PrivatelikeMixin extends descendant {
	constructor() {
		super();
		define(this, $$private, {});
	}
	get [$private]() {
		return this[$$private];
	}
	set [$private](v) {
		if (isObject(v)) {
			extend(this[$$private]).with(v);
			return;
		}
		if (isNull(v)) {
			delete this[$$private];
			return;
		}
	}
	get [isInstance]() {
		return true;
	}
	static get [isStatic]() {
		return true;
	}
	destructor() {
		delete this[$$private];
	}
};

export default Privatelike;