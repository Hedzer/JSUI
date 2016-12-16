import isRole from 'Framework/TypeChecks/isRole';
import isURole from 'Framework/TypeChecks/isURole';
import $private from 'Framework/Constants/Keys/General/private';

import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';
import Routable from 'Framework/Mixins/Routable';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Distinct) {
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].roles = {};
	}
	add(role) {
		if (isURole(role)) {
			role = new role();
		}
		if (isRole(role)) {
			this[$private].roles[role.uid] = role;
			return;
		}
		return super.add(role);
	}
	get route() {
		return 'Application';
	}
}

//Application -> Roles -> Features -> Pages & Server