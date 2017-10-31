
//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';

//Mixins
import Routable from 'JSUI/Source/1.0.0/Mixins/Routable';

//Singletons
import Router from 'JSUI/Source/1.0.0/Singletons/Navigation/Router';

//TypeChecks
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isNavigation from 'JSUI/Source/1.0.0/TypeChecks/isNavigation';
import isPage from 'JSUI/Source/1.0.0/TypeChecks/isPage';
import isRouter from 'JSUI/Source/1.0.0/TypeChecks/isRouter';
import isUNavigation from 'JSUI/Source/1.0.0/TypeChecks/isUNavigation';
import isUPage from 'JSUI/Source/1.0.0/TypeChecks/isUPage';

//Utilities
import exports from 'Parcello/exports';

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
		if (isDOM(HTMLElement)) {
			element = HTMLElement;
		}

		if (isElement(HTMLElement)) {
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

exports(Application).as('JSUI/Source/1.0.0/Classes/Core/Application');
