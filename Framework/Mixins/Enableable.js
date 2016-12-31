//Keys
import $private from 'Framework/Constants/Keys/General/private';
import instanceTypeCheck from 'Framework/Constants/Keys/Mixins/Enableable/isInstance';
import staticTypeCheck from 'Framework/Constants/Keys/Mixins/Enableable/isStatic';

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