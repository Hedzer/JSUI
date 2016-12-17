//Keys
import $private from 'Framework/Constants/Keys/General/private';

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
};

export default Enableable;