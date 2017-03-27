
//Constants
import $private from '/JSUI/Source/V1.0/Constants/Keys/General/private';
import isClass from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Enableable/isStatic';
import isInstance from '/JSUI/Source/V1.0/Constants/Keys/TypeChecks/Enableable/isInstance';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Enableable = (descendant) => class EnableableMixin extends descendant {
	constructor() {
		super();
		this[$private] = {
			state: {
				enabled: true,
			},
		};
	}

	//properties
	get enabled() {
		return this[$private].state.enabled;
	}
	set enabled(v) {
		this[$private].state.enabled = !!v;
	}

	//type checks
	static get [isClass]() {
		return true;
	}
	get [isInstance]() {
		return true;
	}
};

export default Enableable;

exports(Enableable).as('/JSUI/Source/V1.0/Mixins/Enableable');