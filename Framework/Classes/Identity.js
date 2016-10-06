import isObject from 'Framework/TypeChecks/isObject';
import isString from 'Framework/TypeChecks/isString';

export default class Identity {
	constructor(identity) {

		let defaults = {
			class: 'NoClass',
			major: 0, minor: 0, patch: 0
		};

		if (isObject(identity)) {
			defaults.class = (identity.class || defaults.class);
			defaults.major = (identity.major || defaults.major);
			defaults.minor = (identity.minor || defaults.minor);
			defaults.patch = (identity.patch || defaults.patch);
		}

		if (isString(identity)) {
			defaults.class = identity;
		}

		Object.defineProperty(this, 'private', {
			value: defaults,
			enumerable: false
		});

		Object.freeze(this.private);
	}
	get class() {
		return this.private.class;
	}
	get major() {
		return this.private.major;
	}
	get minor() {
		return this.private.minor;
	}
	get patch() {
		return this.private.patch;
	}
}