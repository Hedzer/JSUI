//Keys
import $private from 'Framework/Constants/Keys/General/private';

let Enableable = (descendant) => class EnableableMixin extends descendant {
	constructor() {
		super();
		let _private = this[$private];
		Object.assign(_private, {
			enabled: (_private.hasOwnProperty('enabled') ? _private.enabled : true)
		});
	}
	get enabled() {
		return _private.enabled;
	}
	set enabled(v) {
		this[$private].enabled = !!v;
	}
};

export default Enableable;