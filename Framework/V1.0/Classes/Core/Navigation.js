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
	}
	map(routable) {
		if ((!isRoutable(routable) && !isRoutable(routable))) { return false; }
		let items = map(routable);
		console.log(items);
	}
}