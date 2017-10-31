
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import settings from 'JSUI/Source/1.0.0/Constants/settings';

//TypeChecks
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';

//Utilities
import define from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';

let namespace = settings.namespace;
export default class Identity {
	constructor(identity) {

		let defaults = {
			namespace: namespace,
			class: 'NoClass',
			major: 0, minor: 0, patch: 0,
		};

		if (isObject(identity)) {
			defaults.namespace = (identity.namespace || defaults.namespace);
			defaults.class = (identity.class || defaults.class);
			defaults.major = (identity.major || defaults.major);
			defaults.minor = (identity.minor || defaults.minor);
			defaults.patch = (identity.patch || defaults.patch);
		}

		if (isString(identity)) {
			defaults.class = identity;
		}

		define(this, $private, defaults);

		Object.freeze(this[$private]);
	}

	//properties
	get namespace() {
		return this[$private].namespace;
	}
	get class() {
		return this[$private].class;
	}
	get major() {
		return this[$private].major;
	}
	get minor() {
		return this[$private].minor;
	}
	get patch() {
		return this[$private].patch;
	}
}

exports(Identity).as('JSUI/Source/1.0.0/Classes/Core/Identity');
