
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Fieldset',
	major: 1, minor: 0, patch: 0,
});

export default class Fieldset extends Element {
	constructor() {
		super('fieldset');
		this.identity = identity;
	}
}

exports(Fieldset).as('/JSUI/Source/V1.0/Classes/Elements/Fieldset');
