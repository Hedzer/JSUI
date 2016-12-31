//Keys
import isObject from 'Framework/TypeChecks/isObject';
import isNull from 'Framework/TypeChecks/isNull';
import $private from 'Framework/Constants/Keys/General/private';
import $$private from 'Framework/Constants/Keys/Mixins/Privatelike/private';
import instanceTypeCheck from 'Framework/Constants/Keys/Mixins/Privatelike/isInstance';
import staticTypeCheck from 'Framework/Constants/Keys/Mixins/Privatelike/isStatic';
import define from 'Framework/Utilities/Properties/addHiddenValue';
import extend from 'Framework/Utilities/Objects/extend';

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
	get [instanceTypeCheck]() {
		return true;
	}
	static get [staticTypeCheck]() {
		return true;
	}
	destructor() {
		delete this[$$private];
	}
};

export default Privatelike;