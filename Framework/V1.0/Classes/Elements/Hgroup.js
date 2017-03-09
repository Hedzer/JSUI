
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Hgroup',
	major: 1, minor: 0, patch: 0,
});

export default class Hgroup extends Element {
	constructor() {
		super('hgroup');
		this.identity = identity;
	}
}

exports(Hgroup).as('/Framework/V1.0/Classes/Elements/Hgroup');
