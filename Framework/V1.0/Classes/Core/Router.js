import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import isString from '/Framework/V1.0/TypeChecks/isString';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import Base from '/Framework/V1.0/Classes/Core/Base';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Enableable from '/Framework/V1.0/Mixins/Enableable';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import getHashRoutes from '/Framework/V1.0/Utilities/Navigation/getHashRoutes';
import getUrlParams from '/Framework/V1.0/Utilities/Navigation/getUrlParams';
import getIdentifiedType from '/Framework/V1.0/Classes/Core/Router/getIdentifiedType';
import capitalize from '/Framework/V1.0/Utilities/Strings/capitalize';

export default class Router extends Enableable(Privatelike(Base)) {
	constructor(){
		super();
		this[$private] = {
			roots: {},
			lastURL: null,
			instances: {},
			shortened: {},
			missing: () => {},
			unauthorized: () => {}
		};
		window.addEventListener("hashchange", (e) => { this.onHashChange(e); });
	}
	onHashChange(event) {
		let instances = {};
		let lastURL = this[$private].lastURL;
		let routes = getHashRoutes(window.location.hash);
		let context = {
			arguments: false,
			parameters: getUrlParams(),
			instances: instances
		};
		if (!routes) { return; }
		let rootRoute = (routes.splice(0, 1))[0];
		let root = this.roots[rootRoute];
		//if the root doesn't exist, 404 and exit
		if (!root) { return this.missing(); }
		//get the root route, if uninstanced, instantiate
		root = (isURoutable(root) ? new root() : root);
		//if the instance isn't routable, return 
		if (!isRoutable(root)) { return; }
		this[$private].root = root;
		let traversed = "";
		let instance = root;
		for (let index = 0; index < routes.length; index++) {
			let route = routes[index];
			traversed = (!index ? `${rootRoute}/` : `${traversed}/`) + `${route}`;
			let parent = instance;
			let existing = this.instance(traversed);
			instance = (existing || (isRoutable(parent) ? parent.subroute(route) : false));
			instance = (instance.instantiate ? instance.instantiate() : instance);
			instances[traversed] = instance;
			//if there's no existing instance, destroy the instances not traversed
			if (!existing) {
				let killList = [];
				Object.keys(this.instances).forEach((route) => {
					let instance = instances[route];
					if (instance) { return; }
					killList.push({ route: route, instance: instance });
				});
				//sort the kill list by shortest path to longest
				killList.sort((a, b) => { return (a.route.length - b.route.length);	});
				killList.forEach((entry) => {
					let destructor = entry.instance[destructor];
					if (!isFunction(destructor)) { return; }
					destructor();
				});
			}
			//if there's no instance, 404 and return
			if (!instance) { return this.missing(); }
			if (!isRoutable(instance)) { return; }

			//if unauthorized, run unauth and return
			if (!instance.onRouteAuthorized()) { return this.unauthorized(); }

			let identity = getIdentifiedType(instance);
			if (isString(identity)) {
				context[capitalize(identity)] = instance;
			}

			let activation = (instance.isRouteEndpoint ? 'onRouteCompleted' : 'onRouteTraversed');
			if (isExecutable(instance.trigger)) {
				instance.trigger.call(instance, activation, context);
				continue;
			}
			instance[activation].call(instance, activation, context);
		}
	}
	get missing() {
		return this[$private].missing;
	}
	set missing(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].missing = method;
	}
	get unauthorized() {
		return this[$private].unauthorized;
	}
	set unauthorized(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].unauthorized = method;
	}
	instance(route, value) {
		let instances = this.instances;
		if (arguments.length > 1) {
			instances[route] = value;
			return value;
		}
		return instances[route];
	}
	get instances() {
		return this[$private].instances;
	}
	set instances(instances) {
		this[$private].instances = instances;
	}
	add(routable) {
		if (isURoutable(routable) || isRoutable(routable)) {
			this[$private].roots[routable.route] = routable;
			return;
		}
		return super.add(routable);
	}
	remove(routable) {
		if (isURoutable(routable) || isRoutable(routable)) {
			delete this[$private].roots[routable.route];
			return;
		}
		return super.remove(routable);
	}
	shorten(url) {
		//syntax: shorten('/Common/Guest/Authentication/login').to('login');
	}
	get roots() {
		return this[$private].roots;
	}
}
