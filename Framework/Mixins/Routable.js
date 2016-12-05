//Keys
import $private from 'Framework/Constants/Keys/General/private';
import typeCheck from 'Framework/Constants/Keys/Mixins/Routable/isInstance';
import state from 'Framework/Constants/Keys/General/state';

let Routable = (descendant) => class RoutableMixin extends descendant {
	constructor() {
		let _private = this[$private];
		Object.assign(_private, {
			route: 'route'
		});
	}
	get route() {
		return this[state]('route');
	}
	set route(route) {
		this[state]('route', route);
	}
	get isRootRoute() {
		return this[state]('isRootRoute');
	}
	set isRootRoute(bool) {
		this[state]('isRootRoute', bool);
	}
	get [typeCheck]() {
		return true;
	}
};

export default Routable;