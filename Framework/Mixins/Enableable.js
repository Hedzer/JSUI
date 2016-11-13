//Keys
import $private from 'Framework/Constants/Keys/General/private';

let Enableable = (descendant) => class EnableableMixin extends descendant {  
	constructor() {
		super();
		this[$private].enabled = true;
	}
	get enabled() {
		return this[$private].enabled;
	}
	set enabled(v) {
		this[$private].enabled = !!v;
	}
};

export default Enableable;