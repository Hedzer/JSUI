import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Nav',
	major: 1, minor: 0, patch: 0
});

export default class Nav extends Element {
	constructor() {
		super('nav');
		this.identity = identity;
	}
}