
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Mixins
import Behaviorlike from 'JSUI/Source/1.0.0/Mixins/Behaviorlike';

//Utilities
import exports from 'Parcello/exports';

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

exports(Behavior).as('JSUI/Source/1.0.0/Classes/Core/Behavior');