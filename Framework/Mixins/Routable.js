//Keys
import $private from 'Framework/Constants/Keys/General/private';
import typeCheck from 'Framework/Constants/Keys/Mixins/Routable/isInstance';
import state from 'Framework/Constants/Keys/General/state';
import Router from 'Framework/Singletons/Navigation/Router';

let Routable = (descendant) => class RoutableMixin extends descendant {
	constructor() {
		super();
		let _private = this[$private];
		Object.assign(_private.state, {
			route: null,
			routes: {}
		});
	}
	get route() {
		return this[state]('route');
	}
	set route(route) {
		let old = this.route;
		if (this[state]('route', route)) {
			if (this.isRootRoute) {
				Router.remove(old);
				Router.add(route);
			}
		}
	}
	get routes() {
		return this[state]('routes'); 
	}
	get isRootRoute() {
		return this[state]('isRootRoute');
	}
	set isRootRoute(bool) {
		if (this[state]('isRootRoute', bool)) {
			if (bool) {
				Router.add(this.route);
				return;
			}
			Router.remove(route);
		}
	}
	get [typeCheck]() {
		return true;
	}
};

export default Routable;