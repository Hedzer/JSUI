import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import Base from '/Framework/V1.0/Classes/Base';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Enableable from '/Framework/V1.0/Mixins/Enableable';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import getHashRoutes from '/Framework/V1.0/Utilities/Navigation/getHashRoutes';

export default class Router extends Enableable(Privatelike(Base)) {
	constructor(){
		super();
		this[$private] = {
			roots: {},
			lastURL: null,
			instances: {},
			notFound: () => {},
			notAuthorized: () => {}
		};
		window.addEventListener("hashchange", (e) => { this.onHashChange(e); });
	}
	onHashChange(event) {
		let instances = {};
		let lastURL = this[$private].lastURL;
		let routes = getHashRoutes(window.location.hash);
		if (!routes) { return; }
		let rootRoute = (routes.splice(0, 1))[0];
		let root = this.roots[rootRoute];
		//if the root doesn't exist, 404 and exit
		if (!root) { return this.notFound(); }
		//get the root route, if uninstanced, instantiate
		root = (isURoutable(root) ? new root() : root);
		//if the instance isn't routable, return 
		if (!isRoutable(root)) { return; }
		this[$private].root = root;
		let traversed = "";
		let instance = false;
		console.log(this, routes);
		for (let index = 0; index < routes.length; index++) {
			console.log(traversed);
			let route = routes[index];
			traversed = (!index ? `${rootRoute}/` : '') + `${traversed}/${route}`;
			let parent = instance;
			let existing = this.instance(traversed);
			instance = (existing || (isRoutable(parent) ? parent.subroute(route) : false));
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
			if (!instance) { return this.notFound(); }
			if (!isRoutable(instance)) { return; }
			if (isExecutable(instance.trigger)) {
				instance.trigger('onRouteTraversed', traversed);
				continue;
			}
			instance.onRouteTraversed(traversed);
		}
		console.log(traversed);
	}
	get notFound() {
		return this[$private].notFound;
	}
	set notFound(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].notFound = method;
	}
	get notAuthorized() {
		return this[$private].notAuthorized;
	}
	set notAuthorized(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].notAuthorized = method;
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
	get roots() {
		return this[$private].roots;
	}
}
