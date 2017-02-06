import $private from '/Framework/V1.0/Constants/Keys/General/private';

import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Routable from '/Framework/V1.0/Mixins/Routable';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Distinct) {
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].routes = {};
		Router.add(this);
	}
	static get route() {
		return 'Application';
	}
}

//Application -> Roles -> Features -> Pages & Server
