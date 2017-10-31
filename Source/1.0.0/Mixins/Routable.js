
//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import isClass from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isStatic';
import isInstance from 'JSUI/Source/1.0.0/Constants/Keys/TypeChecks/Routable/isInstance';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';

//Singletons
import Router from 'JSUI/Source/1.0.0/Singletons/Navigation/Router';

//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isExecutable from 'JSUI/Source/1.0.0/TypeChecks/isExecutable';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isRoutable from 'JSUI/Source/1.0.0/TypeChecks/isRoutable';
import isURoutable from 'JSUI/Source/1.0.0/TypeChecks/isURoutable';

//Utilities
import exports from 'Parcello/exports';

let Routable = ((descendant) => {
	return class RoutableMixin extends descendant {
		constructor() {
			super();
			this[$private] = {
				state: {
					route: this.constructor.route,
					traveled: false,
					Context: {},
				},
			};
		}

		//methods
		subroute(name) {
			let subroutes = this.constructor.subroutes;
			if (!isArray(subroutes)) { return false; }
			for (var i = subroutes.length - 1; i >= 0; i--) {
				let routable = subroutes[i];
				if (!isURoutable(routable)) { continue; }
				if (routable.route === name) {
					return routable;
				}
			}
			return false;
		}

		//properties
		get Context() {
			return this[state]('Context'); 
		}
		set Context(context) {
			return this[state]('Context', context); 
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
		get isRouteAuthorized() {
			return true;
		}
		get isRouteEndpoint() {
			return this[state]('isRouteEndpoint'); 
		}
		set isRouteEndpoint(bool) {
			return this[state]('isRouteEndpoint', bool); 
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
			return this.constructor.subroutes;
		}
		get [isInstance]() {
			return true;
		}
		static get [isClass]() {
			return true;
		}
		static get placard() {
			return false;
		}
		static get subroutes() {
			return [];
		}

		//pre-defined events
		onRouteTraversed(context) {}
		onRouteCompleted(context) {}

		//defaults
		static get route() {
			return this.name;
		}
	};
});

export default Routable;

exports(Routable).as('JSUI/Source/1.0.0/Mixins/Routable');
