import Base from 'Framework/Classes/Base';
import Privatelike from 'Framework/Mixins/Privatelike';
import Enableable from 'Framework/Mixins/Enableable';
import $private from 'Framework/Constants/Keys/General/private';
import isRoutable from 'Framework/TypeChecks/isRoutable';
import isURoutable from 'Framework/TypeChecks/isURoutable';
import isFunction from 'Framework/TypeChecks/isFunction';

export default class Router extends Enableable(Privatelike(Base)) {
	constructor(){
		super();
		this[$private] = {
			roots: {},
			lastURL: null,
			root: null,
			nonexistent: null,
			unauthorized: null
		};
		window.addEventListener("hashchange", this.onHashChange);
	}
	onHashChange(event) {
		let lastURL = this[$private].lastURL;
		let hash = window.location.hash;
		let path = hash.replace('#!', '');
		let routes = path.split('/');
		routes = routes.filter((route) => { return !!route.length; });
		if (!routes.length) { return; }
		let roots = this.roots;
		let root = (routes.splice(0, 1))[0];
		let count = routes.length;
		let parent = roots[root];
		if (!parent) {
			let method = this.nonexistent;
			if (isFunction(method)) {
				method();
			}
			return;
		}
		if (isURoutable(parent) && parent.isInstancedRoute) {
			parent = new parent();
		}
		this[$private].root = parent;
		for (let index = 0; index < count; index++) {
			let route = routes[index];
		}
	}
	get nonexistent() {}
	set nonexistent(method) {}
	get unauthorized() {}
	set unauthorized(method) {}
	add(routable) {}
	remove(routable) {}
	get roots() {
		return this[$private].roots;
	}
}
