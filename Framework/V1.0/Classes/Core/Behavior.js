
//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Mixins
import Behaviorlike from '/Framework/V1.0/Mixins/Behaviorlike';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';

const identity = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0,
});

export default class Behavior extends Behaviorlike(Distinct) {
	constructor(host) {
		super();

		//setup new props
		this.identity = identity;
	}
}

exports(Behavior).as('/Framework/V1.0/Classes/Core/Behavior');