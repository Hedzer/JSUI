
//Classes
import Extensible from '/Framework/V1.0/Classes/Core/Extensible';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import uid from '/Framework/V1.0/Utilities/General/uid';

const identity = new Identity({
	class: 'Distinct',
	major: 1, minor: 0, patch: 0,
});

export default class Distinct extends Extensible {
	constructor() {
		super();
		this[$private].uid = uid();
		this[$private].Is = {};
		this.identity = identity;
	}
	get identity() {
		return this.state('identity');
	}
	set identity(identity) {
		this.state('identity', identity);
		if (!this[$private].Is[identity]) {
			this[$private].Is[identity.class] = identity;
		}
	}
	get Is() {
		return this[$private].Is;
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
	}
}

exports(Distinct).as('/Framework/V1.0/Classes/Core/Distinct');
