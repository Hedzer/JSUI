import Identity from 'Framework/Classes/Identity';
import Element from 'Framework/Classes/Element';
import Routable from 'Framework/Mixins/Routable';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Element) {
	constructor(){
		super('div');
		this.identity = identity;
	}
	add(role) {
		if (isRole(role)) {
			role = Object.getPrototypeOf(role);
		}
		if (isURole(role)) {
			
		}
		return super.add(role);
	}

}

//Application -> Roles -> Features -> Pages & Server