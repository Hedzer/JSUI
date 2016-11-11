import $private from 'Framework/Constants/Symbols/General/private';
import { default as settings } from 'Framework/Constants/JSUI/settings';
import isObject from 'Framework/TypeChecks/isObject';
import isString from 'Framework/TypeChecks/isString';

let namespace = settings.namespace;

export default class Identity {
	constructor(identity) {

		let defaults = {
			namespace: namespace,
			class: 'NoClass',
			major: 0, minor: 0, patch: 0
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

		Object.defineProperty(this, $private, {
			value: defaults,
			enumerable: false
		});

		Object.freeze(this[$private]);
	}
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