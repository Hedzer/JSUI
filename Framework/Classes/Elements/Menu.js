import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Menu',
	major: 1, minor: 0, patch: 0
});

export default class Menu extends Element {
	constructor() {
		super('menu');
		this.identity = identity;
	}
}