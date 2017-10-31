
//Classes
import Extensible from 'JSUI/Source/1.0.0/Classes/Core/Extensible';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Utilities
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

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

exports(Distinct).as('JSUI/Source/1.0.0/Classes/Core/Distinct');
