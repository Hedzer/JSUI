
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

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

exports(Hgroup).as('/JSUI/Source/V1.0/Classes/Elements/Hgroup');
