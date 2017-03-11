
//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';

//Mixins
import Routable from '/Framework/V1.0/Mixins/Routable';

//Singletons
import Router from '/Framework/V1.0/Singletons/Navigation/Router';

//TypeChecks
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isNavigation from '/Framework/V1.0/TypeChecks/isNavigation';
import isPage from '/Framework/V1.0/TypeChecks/isPage';
import isRouter from '/Framework/V1.0/TypeChecks/isRouter';
import isUNavigation from '/Framework/V1.0/TypeChecks/isUNavigation';
import isUPage from '/Framework/V1.0/TypeChecks/isUPage';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const identity = new Identity({
	class: 'Application',
	major: 1, minor: 0, patch: 0,
});

export default class Application extends Distinct
	.implements(Routable) {
	
	constructor(){
		super('div');
		this.identity = identity;
		this[$private].routes = {};

		//get default values
		let defaults = this.constructor;
		let DefaultNavigation = defaults.Navigation;
		let DefaultPage = defaults.Page;
		let DefaultRouter = defaults.Router;

		//set instance defaults
		this.willAutoMapRoutes = defaults.willAutoMapRoutes;
		this.Navigation = (isUNavigation(DefaultNavigation) ? new DefaultNavigation() : false);
		this.Page = (isUPage(DefaultPage) ? new DefaultPage() : false);
		this.Router = (isRouter(DefaultRouter) ? DefaultRouter : Router);
	}

	//properties
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
	get willAutoMapRoutes() {
		return this.state('willAutoMapRoutes');
	}
	set willAutoMapRoutes(bool) {
		this.state('willAutoMapRoutes', !!bool);
	}

	//default values
	static get Navigation() {
		return false;
	}
	static get Root() {
		return document.body;
	}
	static get Router() {
		return Router;
	}
	static get Page() {
		return false;
	}
	static get willAutoMapRoutes() {
		return true;
	}
}

exports(Application).as('/Framework/V1.0/Classes/Core/Application');
