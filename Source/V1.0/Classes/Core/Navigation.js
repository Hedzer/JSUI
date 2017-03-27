
//Classes
import Identity from '/JSUI/Source/V1.0/Classes/Core/Identity';
import Nav from '/JSUI/Source/V1.0/Classes/Elements/Nav';

//TypeChecks
import isRoutable from '/JSUI/Source/V1.0/TypeChecks/isRoutable';
import isURoutable from '/JSUI/Source/V1.0/TypeChecks/isURoutable';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import map from '/JSUI/Source/V1.0/Utilities/Navigation/map';

const identity = new Identity({
	class: 'Navigation',
	major: 1, minor: 0, patch: 0,
});

export default class Navigation extends Nav {
	constructor(){
		super();
		this.identity = identity;
		this.Style.context = 'navigation';
	}

	//methods
	map(routable) {
		if ((!isRoutable(routable) && !isRoutable(routable))) { return false; }
		let items = map(routable);
		if (!this.willAddItemsAfterMap) { return items; }
		this.add(items);
	}

	//properties
	get willAddItemsAfterMap() {
		return this.state('willAddItemsAfterMap');
	}
	set willAddItemsAfterMap(bool) {
		this.state('willAddItemsAfterMap', !!bool);
	}
	static get willAddItemsAfterMap() {
		return true;
	}
}

exports(Navigation).as('/JSUI/Source/V1.0/Classes/Core/Navigation');