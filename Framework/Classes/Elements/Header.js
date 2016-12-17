import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Header',
	major: 1, minor: 0, patch: 0
});

export default class Header extends Element {
	constructor() {
		super('header');
		this.identity = identity;
	}
}