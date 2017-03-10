//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import instanceTypeCheck from '/Framework/V1.0/Constants/Keys/TypeChecks/Enableable/isInstance';
import staticTypeCheck from '/Framework/V1.0/Constants/Keys/TypeChecks/Enableable/isStatic';

let Enableable = (descendant) => class EnableableMixin extends descendant {
	constructor() {
		super();
		this[$private] = {
			state: {
				enabled: true
			}
		};
	}
	get enabled() {
		return this[$private].state.enabled;
	}
	set enabled(v) {
		this[$private].state.enabled = !!v;
	}
	get [instanceTypeCheck]() {
		return true;
	}
	static get [staticTypeCheck]() {
		return true;
	}
};

export default Enableable;