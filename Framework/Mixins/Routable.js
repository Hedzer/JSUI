//Keys
import $private from 'Framework/Constants/Keys/General/private';
import isRoutable from 'Framework/TypeChecks/isRoutable';
import isURoutable from 'Framework/TypeChecks/isURoutable';
import isInstance from 'Framework/Constants/Keys/Mixins/Routable/isInstance';
import isStatic from 'Framework/Constants/Keys/Mixins/Routable/isStatic';
import state from 'Framework/Constants/Keys/General/state';
import Router from 'Framework/Singletons/Navigation/Router';

let Routable = ((descendant) => {
	return class RoutableMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				state: {
					route: this.constructor.route,
					subroutes: {}
				}
			};

		}
		add(routable) {
			if (isRoutable(routable) || isURoutable(routable)) {
				let subroutes = this[state]('subroutes');
				//if a route already exists with this name throw an error
				subroutes[routable.route] = routable;
			}
			return super.add(routable);
		}
		static get route() {
			return 'route';
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
		get subroutes() {
			return this[state]('subroutes'); 
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
		get [isInstance]() {
			return true;
		}
		static get [isStatic]() {
			return true;
		}
	};
});

export default Routable;