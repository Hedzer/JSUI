//Keys
import $private from 'Framework/Constants/Keys/General/private';

let Enableable = (descendant) => class EnableableMixin extends descendant {  
	get enabled() {
		if (this[$private].hasOwnProperty('enabled')) {
			return this[$private].enabled;
		}
		return true;
	}
	set enabled(v) {
		this[$private].enabled = !!v;
	}
};

export default Enableable;