
//Classes
import Element from '/JSUI/Source/V1.0/Classes/Core/Element';
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Param',
	major: 1, minor: 0, patch: 0,
});

export default class Param extends Element {
	constructor() {
		super('param');
		this.identity = identity;
	}
}

exports(Param).as('/JSUI/Source/V1.0/Classes/Elements/Param');
