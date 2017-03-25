
//Constants
import $private from '/JSUI/Source/V1.0/Constants/Keys/General/private';

//Classes
import Distinct from '/JSUI/Source/V1.0/Classes/Core/Distinct';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Mixins
import Behaviorlike from '/JSUI/Source/V1.0/Mixins/Behaviorlike';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0,
});

export default class Behavior extends Distinct
	.implements(Behaviorlike) {
		
	constructor(host) {
		super();

		//setup new props
		this.identity = identity;
	}
}

exports(Behavior).as('/JSUI/Source/V1.0/Classes/Core/Behavior');