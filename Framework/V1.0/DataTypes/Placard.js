import Data from '/Framework/V1.0/Classes/Core/Data';

export default class Placard extends Data {
	static get defaults() {
		return {
			title: false,
			icon: false,
			description: false
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
}