
//Classes
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import isClass from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Identifiable/isStatic';
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Identifiable/isInstance';
 
 //TypeChecks
import isPrivatelike from 'JSUI/Source/1.0.0/TypeChecks/isPrivatelike';

//Utilities
import exports from 'Parcello/exports';
import uid from 'JSUI/Source/1.0.0/Utilities/General/uid';

const identity = new Identity({
	class: 'Identifiable',
	major: 1, minor: 0, patch: 0,
});

let Identifiable = (descendant) => {
	//requires privatelike
	class IdentifiableMixin extends descendant {
		constructor() {
			super();
			this[$private].uid = uid();
			this[$private].Is = {};
			this.identity = identity;
		}

		//properties
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

		//type checks
		static get [isClass]() {
			return true;
		}
		get [isInstance]() {
			return true;
		}
	};

	return IdentifiableMixin;
};


export default Identifiable;

exports(Identifiable).as('JSUI/Source/1.0.0/Mixins/Identifiable');