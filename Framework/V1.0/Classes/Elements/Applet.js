
//Classes
import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Applet',
	major: 1, minor: 0, patch: 0,
});

export default class Applet extends Element {
	constructor() {
		super('applet');
		this.identity = identity;
	}
}

exports(Applet).as('/Framework/V1.0/Classes/Elements/Applet');
