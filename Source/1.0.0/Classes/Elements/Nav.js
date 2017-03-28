
//Classes
import Element from '/JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from '/JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Nav',
	major: 1, minor: 0, patch: 0,
});

export default class Nav extends Element {
	constructor() {
		super('nav');
		this.identity = identity;
	}
}

exports(Nav).as('/JSUI/Source/1.0.0/Classes/Elements/Nav');