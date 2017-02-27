//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import isInstance from '/Framework/V1.0/Constants/Keys/Mixins/Routable/isInstance';
import isStatic from '/Framework/V1.0/Constants/Keys/Mixins/Routable/isStatic';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';

let Routable = ((descendant) => {
	return class RoutableMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				state: {
					route: this.constructor.route,
					subroutes: {},
					traveled: false,
					Context: {}
				}
			};
		}
		add(routable) {
			if (isRoutable(routable) || isURoutable(routable)) {
				let subroutes = this[state]('subroutes');
				//if a route already exists with this name throw an error
				subroutes[routable.route] = routable;
			}
			if (isExecutable(super.add)) {
				return super.add(routable);
			}
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
		subroute(name) {
			let subroute = this.subroutes[name];
			return (subroute ? subroute : false);
		}
		get subroutes() {
			return this[state]('subroutes'); 
		}
		instantiate() {
			return this;
		}
		static instantiate() {
			return new this();
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
		get isRouteEndpoint() {
			return this[state]('isRouteEndpoint'); 
		}
		set isRouteEndpoint(bool) {
			return this[state]('isRouteEndpoint', bool); 
		}
		get Context() {
			return this[state]('Context'); 
		}
		set Context(context) {
			return this[state]('Context', context); 
		}
		get [isInstance]() {
			return true;
		}
		static get [isStatic]() {
			return true;
		}
		get isRouteAuthorized() {
			return true;
		}
		onRouteTraversed(context) {}
		onRouteCompleted(context) {}
	};
});

export default Routable;