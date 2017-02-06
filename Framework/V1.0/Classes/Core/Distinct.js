import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Extensible from '/Framework/V1.0/Classes/Core/Extensible';
import uid from '/Framework/V1.0/Utilities/General/uid';
import constructor from '/Framework/V1.0/Classes/Core/Distinct/constructor';

const identity = new Identity({
	class: 'Distinct',
	major: 1, minor: 0, patch: 0
});

export default class Distinct extends Extensible {
	constructor() {
		super();
		constructor.call(this);
		this.identity = identity;
	}
	get uid() {
		return this[$private].uid;
	}
	set uid(id) {
		this[$private].uid = id;
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
}