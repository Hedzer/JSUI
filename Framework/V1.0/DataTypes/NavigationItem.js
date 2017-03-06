import Data from '/Framework/V1.0/Classes/Core/Data';

export default class NavigationItem extends Data {
	static get defaults() {
		return {
			title: false,
			icon: false,
			description: false,
			path: false,
			url: false,
			shortpath: false
		};
	}
	get title() {
		return Data.state(this, 'title');
	}
	set title(text) {
		return Data.state(this, 'title', text);
	}
	get icon() {
		return Data.state(this, 'icon');
	}
	set icon(value) {
		return Data.state(this, 'icon', value);
	}
	get description() {
		return Data.state(this, 'description');
	}
	set description(text) {
		return Data.state(this, 'description', text);
	}
	get path() {
		return Data.state(this, 'path');
	}
	set path(value) {
		return Data.state(this, 'path', value);
	}
	get hashpath() {
		return Data.state(this, 'hashpath');
	}
	set hashpath(value) {
		return Data.state(this, 'hashpath', value);
	}
	get shortpath() {
		return Data.state(this, 'shortpath');
	}
	set shortpath(value) {
		return Data.state(this, 'shortpath', value);
	}
}