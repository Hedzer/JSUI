import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Routable from '/Framework/V1.0/Mixins/Routable';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isPage from '/Framework/V1.0/TypeChecks/isPage';
import isNavigation from '/Framework/V1.0/TypeChecks/isNavigation';
import isRouter from '/Framework/V1.0/TypeChecks/isRouter';
import isUPage from '/Framework/V1.0/TypeChecks/isUPage';
import isUNavigation from '/Framework/V1.0/TypeChecks/isUNavigation';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0
});

export default class Application extends Routable(Distinct) {
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].routes = {};
		let DefaultPage = this.constructor.Page;
		let DefaultNavigation = this.constructor.Navigation;
		let DefaultRouter = this.constructor.Router;
		this.Page = (isUPage(DefaultPage) ? new DefaultPage() : false);
		this.Navigation = (isUNavigation(DefaultNavigation) ? new DefaultNavigation() : false);
		this.Router = (isRouter(DefaultRouter) ? DefaultRouter : Router);
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
	static get Page() {}
	get Navigation() {
		return this.state('Navigation');
	}
	set Navigation(navigation) {
		if (!isNavigation(navigation)) { return; }
		let previous = this.state('Navigation');
		if (this.state('Navigation', navigation)) {
			if (isNavigation(previous)) {
				previous.remove();
			}
			navigation.addTo(this.Root);
			if (!this.willAutoMapRoutes) { return; }
			navigation.map(this);
		}
	}
	static get Navigation() {}
	get Router() {
		return this.state('Router');
	}
	set Router(router) {
		if (!isRouter(router)) { return; }
		let previous = this.state('Router');
		if (this.state('Router', router)) {
			if (isRouter(previous)) {
				previous.remove(this);
			}
			router.add(this);
		}
	}
	static get Router() {
		return Router;
	}
	static get willAutoMapRoutes() {
		return true;
	}
	get willAutoMapRoutes() {
		return this.state('willAutoMapRoutes');
	}
	set willAutoMapRoutes(bool) {
		this.state('willAutoMapRoutes', !!bool);
	}
}

//Application -> Roles -> Features -> Pages -> Endpoint
