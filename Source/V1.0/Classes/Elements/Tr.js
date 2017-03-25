
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Tr',
	major: 1, minor: 0, patch: 0,
});

export default class Tr extends Element {
	constructor() {
		super('tr');
		this.identity = identity;
	}
}

exports(Tr).as('/JSUI/Source/V1.0/Classes/Elements/Tr');
