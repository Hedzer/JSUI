//Keys
import isObject from 'Framework/TypeChecks/isObject';
import isNull from 'Framework/TypeChecks/isNull';
import $private from 'Framework/Constants/Keys/General/private';
import $$private from 'Framework/Constants/Keys/Mixins/Privatelike/private';
import typeCheck from 'Framework/Constants/Keys/Mixins/Privatelike/isInstance';
import define from 'Framework/Utilities/Properties/addHiddenValue';

let Privatelike = (descendant) => class PrivatelikeMixin extends descendant {
	constructor() {
		define(this, $$private, {});
	}
	get [$private]() {
		return this[$$private];
	}
	set [$private](v) {
		if (isObject(v)) {
			Object.assign(this[$$private], v);
			return;
		}
		if (isNull(v)) {
			delete this[$$private];
			return;
		}
	}
	[typeCheck]() { return true; }
	destructor() {
		delete this[$$private];
	}
};

export default Privatelike;