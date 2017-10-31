
//Classes
import Element from 'JSUI/Source/1.0.0/Classes/Core/Element';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Utilities
import exports from 'Parcello/exports';

const identity = new Identity({
	class: 'Map',
	major: 1, minor: 0, patch: 0,
});

export default class Map extends Element {
	constructor() {
		super('map');
		this.identity = identity;
	}
}

exports(Map).as('JSUI/Source/1.0.0/Classes/Elements/Map');
