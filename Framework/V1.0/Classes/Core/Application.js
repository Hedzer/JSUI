import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Routable from '/Framework/V1.0/Mixins/Routable';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isPage from '/Framework/V1.0/TypeChecks/isPage';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Distinct) {
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].routes = {};
		Router.add(this);
	}
	static get route() {
		return 'Application';
	}
	static get Root() {
		return document.body;
	}
	get Root() {
		let root = (this.state('Root') || Application.Root);
		return root;
	}
	set Root(HTMLElement) {
		let element = false;
		if (isElement(HTMLElement)) {
			element = HTMLElement;
		}
		if (isJSUI(HTMLElement)) {
			element = HTMLElement.element;
		}
		if (!element) { return; }
		this.state('Root', element);
	}
	get Page() {
		return this.state('Page');
	}
	set Page(page) {
		if (!isPage(page)) { return; }
		let previous = this.state('Page');
		if (this.state('Page', page)) {
			if (isPage(previous)) {
				previous.remove();
			}
			page.addTo(this.Root);
		}
	}
	get Navigation() {}
	set Navigation(navigation) {}
}

//Application -> Roles -> Features -> Pages -> Endpoint
