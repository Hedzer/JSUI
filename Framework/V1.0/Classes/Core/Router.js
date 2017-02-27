
import isRoutable from '/Framework/V1.0/TypeChecks/isRoutable';
import isURoutable from '/Framework/V1.0/TypeChecks/isURoutable';
import isString from '/Framework/V1.0/TypeChecks/isString';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import Base from '/Framework/V1.0/Classes/Core/Base';
import Privatelike from '/Framework/V1.0/Mixins/Privatelike';
import Enableable from '/Framework/V1.0/Mixins/Enableable';
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isExecutable from '/Framework/V1.0/TypeChecks/isExecutable';
import getHashParts from '/Framework/V1.0/Utilities/Navigation/getHashParts';
import getIdentifiedType from '/Framework/V1.0/Classes/Core/Router/getIdentifiedType';
import capitalize from '/Framework/V1.0/Utilities/Strings/capitalize';
import RouteShorten from '/Framework/V1.0/Classes/Receipts/RouteShorten';

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
		return this.navigate(window.location.hash);
	}
	navigate(url) {
		let instances = {};
		let lastURL = this[$private].lastURL;
		let resolved = this.resolve(url);
		let hash = getHashParts(resolved);
		let context = {
			url: url,
			resolved: resolved,
			arguments: false,
			parameters: hash.parameters,
			instances: instances
			Router: this,
		};
		let routes = hash.routes;
		if (!routes) { return; }
		context.arguments = routes;
		let rootRoute = (routes.splice(0, 1))[0];
		let root = this.roots[rootRoute];
		//if the root doesn't exist, 404 and exit
		if (!root) { return this.missing(context); }
		//get the root route, if uninstanced, instantiate
		root = (isURoutable(root) ? new root() : root);
		//if the instance isn't routable, return 
		if (!isRoutable(root)) { return; }
		//traverse root
		root.Context = context;
		this.traverse(root, context);
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
			if (!instance) { return this.missing(context); }
			if (!isRoutable(instance)) { return; }

			//if unauthorized, run unauth and return
			if (!instance.isRouteAuthorized) { return this.unauthorized(context); }

			context.arguments = routes.slice(index);
			instance.Context = context;
			this.traverse(instance, context);
			if (instance.isRouteEndpoint) {
				return;
			}
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
	traverse(instance, context) {
		if (!isRoutable(instance)) { return false; }
		let identity = getIdentifiedType(instance);
		if (isString(identity)) {
			context[capitalize(identity)] = instance;
		}

		let activation = (instance.isRouteEndpoint ? 'routeCompleted' : 'routeTraversed');
		if (isExecutable(instance.trigger)) {
			instance.trigger.call(instance, activation, context);
			return;
		}
		instance[activation].call(instance, context);
		return true;
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
		if (!isString(url)) { return false; }
		let shortened = this[$private].shortened;
		return new RouteShorten(this, url);
		//syntax: shorten('/Common/Guest/Authentication/login').to('login');
	}
	unshorten(shortcut) {
		if (!isString(shortcut)) { return false; }
		let shortened = this[$private].shortened;
		if (shortened.hasOwnProperty(shortcut)) {
			delete shortened[shortcut];
			return true;
		}
	}
	resolve(url) {
		if (!isString(url)) { return url; }
		url = url.replace(/#!|#/i, '');
		let shortened = this.shortened;
		let shortcuts = Object.keys(shortened).filter((a) => { return !url.indexOf(a); });
		if (!shortcuts.length) { return url; }
		shortcuts.sort((a, b) => { return a.length - b.length });
		url = (url[0] !== '/' ? '/' : '') + url;
		for (var i = shortcuts.length - 1; i >= 0; i--) {
			let shortcut = shortcuts[i];
			if (!url.indexOf(shortcut)) {
				let actual = shortened[shortcut];
				return url.replace(shortcut, actual);
			}
		}
	}
	get shortened() {
		return this[$private].shortened;
	}
	get roots() {
		return this[$private].roots;
	}
}
