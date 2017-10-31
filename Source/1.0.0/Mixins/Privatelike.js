
//Constants
import $$private from 'JSUI/Source/1.0.0/Constants/Keys/Privatelike/private';
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import isClass from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Privatelike/isStatic';
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Privatelike/isInstance';

//TypeChecks
import isNull from 'JSUI/Source/1.0.0/TypeChecks/isNull';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';

//Utilities
import define from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';
import extend from 'JSUI/Source/1.0.0/Utilities/Objects/extend';

let Privatelike = (descendant) => class PrivatelikeMixin extends descendant {
	constructor() {
		super();
		define(this, $$private, {});
	}

	//methods
	destructor() {
		delete this[$$private];
	}

	//properties
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

	//type checks
	static get [isClass]() {
		return true;
	}
	get [isInstance]() {
		return true;
	}	
};

//exposable
Privatelike.exposable = { private: $private };

export default Privatelike;

exports(Privatelike).as('JSUI/Source/1.0.0/Mixins/Privatelike');
