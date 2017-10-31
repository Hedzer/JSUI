
//Classes
import Data from 'JSUI/Source/1.0.0/Classes/Core/Data';

//Utilities
import exports from 'Parcello/exports';

export default class NavigationItem extends Data {
	
	//properties
	get Application() {
		return Data.state(this, 'Application');
	}
	set Application(value) {
		return Data.state(this, 'Application', value);
	}
	get description() {
		return Data.state(this, 'description');
	}
	set description(text) {
		return Data.state(this, 'description', text);
	}
	get Endpoint() {
		return Data.state(this, 'Endpoint');
	}
	set Endpoint(value) {
		return Data.state(this, 'Endpoint', value);
	}
	get Feature() {
		return Data.state(this, 'Feature');
	}
	set Feature(value) {
		return Data.state(this, 'Feature', value);
	}
	get hashpath() {
		return Data.state(this, 'hashpath');
	}
	set hashpath(value) {
		return Data.state(this, 'hashpath', value);
	}
	get icon() {
		return Data.state(this, 'icon');
	}
	set icon(value) {
		return Data.state(this, 'icon', value);
	}
	get Page() {
		return Data.state(this, 'Page');
	}
	set Page(value) {
		return Data.state(this, 'Page', value);
	}
	get path() {
		return Data.state(this, 'path');
	}
	set path(value) {
		return Data.state(this, 'path', value);
	}
	get Role() {
		return Data.state(this, 'Role');
	}
	set Role(value) {
		return Data.state(this, 'Role', value);
	}
	get shortpath() {
		return Data.state(this, 'shortpath');
	}
	set shortpath(value) {
		return Data.state(this, 'shortpath', value);
	}
	get title() {
		return Data.state(this, 'title');
	}
	set title(text) {
		return Data.state(this, 'title', text);
	}
	get url() {
		return Data.state(this, 'url');
	}
	set url(value) {
		return Data.state(this, 'url', value);
	}

	//defaults
	static get defaults() {
		return {
			title: false,
			icon: false,
			description: false,
			path: false,
			shortpath: false,
			hashpath: false,
			url: false,
		};
	}
}

exports(NavigationItem).as('JSUI/Source/1.0.0/DataTypes/NavigationItem');
