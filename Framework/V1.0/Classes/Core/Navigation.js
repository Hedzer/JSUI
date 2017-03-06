import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Nav from '/Framework/V1.0/Classes/Elements/Nav';
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import map from '/Framework/V1.0/Utilities/Navigation/map';

const identity = new Identity({
	class: 'Navigation',
	major: 1, minor: 0, patch: 0
});

export default class Navigation extends Nav {
	constructor(){
		super();
		this.identity = identity;
		this.Style.context = 'navigation';
		this.private.state.willAddItemsAfterMap = this.constructor.willAddItemsAfterMap;
	}
	static get willAddItemsAfterMap() {
		return true;
	}
	get willAddItemsAfterMap() {
		return this.state('willAddItemsAfterMap');
	}
	set willAddItemsAfterMap(bool) {
		this.state('willAddItemsAfterMap', !!bool);
	}
	map(routable) {
		if ((!isRoutable(routable) && !isRoutable(routable))) { return false; }
		let items = map(routable);
		if (!this.willAddItemsAfterMap) { return items; }
		this.add(items);
	}
}