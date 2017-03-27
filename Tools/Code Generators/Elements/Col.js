
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Col',
	major: 1, minor: 0, patch: 0,
});

export default class Col extends Element {
	constructor() {
		super('col');
		this.identity = identity;
	}
}

exports(Col).as('/JSUI/Source/V1.0/Classes/Elements/Col');