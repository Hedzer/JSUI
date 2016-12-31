import $private from 'Framework/Constants/Keys/General/private';

import Identity from 'Framework/Classes/Identity';
import Distinct from 'Framework/Classes/Distinct';
import Routable from 'Framework/Mixins/Routable';
import Router from 'Framework/Singletons/Navigation/Router';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Distinct) {
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].routes = {};
	}
	static register() {
		Router.add(this);
	}
	static get route() {
		return 'Application';
	}
}

//Application -> Roles -> Features -> Pages & Server
