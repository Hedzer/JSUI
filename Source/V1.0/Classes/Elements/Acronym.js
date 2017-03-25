
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Acronym',
	major: 1, minor: 0, patch: 0,
});

export default class Acronym extends Element {
	constructor() {
		super('acronym');
		this.identity = identity;
	}
}

exports(Acronym).as('/JSUI/Source/V1.0/Classes/Elements/Acronym');
