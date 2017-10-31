
//Classes
import Class from 'JSUI/Source/1.0.0/Classes/Core/Class';
import RouteShorten from 'JSUI/Source/1.0.0/Classes/Receipts/RouteShorten';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import destructor from 'JSUI/Source/1.0.0/Constants/Keys/General/destructor';

//Handlers
import getIdentifiedType from 'JSUI/Source/1.0.0/Classes/Core/Router/getIdentifiedType';

//Mixins
import Enableable from 'JSUI/Source/1.0.0/Mixins/Enableable';
import Privatelike from 'JSUI/Source/1.0.0/Mixins/Privatelike';

//TypeChecks
import isExecutable from 'JSUI/Source/1.0.0/TypeChecks/isExecutable';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isRoutable from 'JSUI/Source/1.0.0/TypeChecks/isRoutable';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';
import isURoutable from 'JSUI/Source/1.0.0/TypeChecks/isURoutable';

//Utilities
import capitalize from 'JSUI/Source/1.0.0/Utilities/Strings/capitalize';
import exports from 'Parcello/exports';
import getHashParts from 'JSUI/Source/1.0.0/Utilities/Navigation/getHashParts';

export default class Router extends Class
	.implements(
		Privatelike,
		Enableable
	) {
	
	constructor(){
		super();
		this[$private] = {
			roots: {},
			last: null,
			instances: {},
			shortened: {},
			lengthened: {},
			missing: () => {},
			unauthorized: () => {},
		};
		window.addEventListener("hashchange", (e) => { this.onHashChange(e); });
	}

	//methods
	add(routable) {
		if (isURoutable(routable) || isRoutable(routable)) {
			this[$private].roots[routable.route] = routable;
			return;
		}
		return super.add(routable);
	}
	instance(route, value) {
		let instances = this.instances;
		if (arguments.length > 1) {
			instances[route] = value;
			return value;
		}
		return instances[route];
	}
	navigate(hashpath) {
		let instances = {};
		let last = this[$private].last;
		let resolved = this.resolve(hashpath);
		let hash = getHashParts(resolved);
		let context = {
			hashpath: hashpath,
			resolved: resolved,
			arguments: undefined,
			parameters: hash.parameters,
			instances: instances,
			Router: this,
		};
		this[$private].last = context;
		let routes = hash.routes;
		if (!routes) { return; }
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

			instance.Context = context;
			if (instance.isRouteEndpoint) {
				context.arguments = routes.slice(index + 1);
				return this.traverse(instance, context);
			}
			this.traverse(instance, context);
		}
	}
	remove(routable) {
		if (isURoutable(routable) || isRoutable(routable)) {
			delete this[$private].roots[routable.route];
			return;
		}
		return super.remove(routable);
	}
	resolve(url) {
		if (!isString(url)) { return url; }
		url = url.replace(/#!|#/i, '');
		let shortened = this.shortened;
		let shortcuts = Object.keys(shortened).filter((a) => { return !url.indexOf(a); });
		if (!shortcuts.length) { return url; }
		shortcuts.sort((a, b) => { return a.length - b.length });
		url = (url.charAt(0) !== '/' ? '/' : '') + url;
		for (var i = shortcuts.length - 1; i >= 0; i--) {
			let shortcut = shortcuts[i];
			if (!url.indexOf(shortcut)) {
				let actual = shortened[shortcut];
				return url.replace(shortcut, actual);
			}
		}
	}
	shorten(url) {
		if (!isString(url)) { return false; }
		let shortened = this[$private].shortened;
		return new RouteShorten(this, url);
		//syntax: shorten('/Common/Guest/Authentication/login').to('login');
	}
	shortcutOf(url) {
		if (!isString(url)) { return url; }
		url = url.replace(/#!|#/i, '');
		let lengthened = this.lengthened;
		let longcuts = Object.keys(lengthened).filter((a) => { return !url.indexOf(a); });
		if (!longcuts.length) { return url; }
		longcuts.sort((a, b) => { return a.length - b.length });
		url = (url.charAt(0) !== '/' ? '/' : '') + url;
		for (var i = longcuts.length - 1; i >= 0; i--) {
			let longcut = longcuts[i];
			if (!url.indexOf(longcut)) {
				let shortened = lengthened[longcut];
				let replaced = url.replace(longcut, shortened);
				if (replaced.length !== shortened.length) {
					let removed = url.replace(longcut, '');
					shortened = ((shortened.charAt(shortened.length - 1) !== '/' && removed.charAt(0) !== '/') ? `${shortened}/` : shortened);
				}
				return url.replace(longcut, shortened);
			}
		}
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
		activation = capitalize(activation);
		instance[`on${activation}`].call(instance, context);
		return true;
	}
	unshorten(shortcut) {
		if (!isString(shortcut)) { return false; }
		let shortened = this[$private].shortened;
		let lengthened = this[$private].lengthened;
		if (shortened.hasOwnProperty(shortcut)) {
			let longValue = shortened[shortcut];
			delete shortened[shortcut];
			if (lengthened[longValue] === shortcut) {
				delete lengthened[longValue];
			}
			return true;
		}
	}

	//properties
	get instances() {
		return this[$private].instances;
	}
	set instances(instances) {
		this[$private].instances = instances;
	}
	get lengthened() {
		return this[$private].lengthened;
	}
	get missing() {
		return this[$private].missing;
	}
	set missing(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].missing = method;
	}
	get roots() {
		return this[$private].roots;
	}
	get shortened() {
		return this[$private].shortened;
	}
	get unauthorized() {
		return this[$private].unauthorized;
	}
	set unauthorized(method) {
		if (!isFunction(method)) { method = function() {}; }
		this[$private].unauthorized = method;
	}

	//pre-defined events
	onHashChange(event) {
		return this.navigate(window.location.hash);
	}
}

exports(Router).as('JSUI/Source/1.0.0/Classes/Core/Router');

