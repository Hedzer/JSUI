import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Noscript',
	major: 1, minor: 0, patch: 0
});

export default class Noscript extends Element {
	constructor() {
		super('noscript');
		this.identity = identity;
	}
}