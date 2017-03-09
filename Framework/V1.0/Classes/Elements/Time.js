
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Time',
	major: 1, minor: 0, patch: 0,
});

export default class Time extends Element {
	constructor() {
		super('time');
		this.identity = identity;
	}
}

exports(Time).as('/Framework/V1.0/Classes/Elements/Time');
