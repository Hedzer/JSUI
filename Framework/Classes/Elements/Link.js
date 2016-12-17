import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Link',
	major: 1, minor: 0, patch: 0
});

export default class Link extends Element {
	constructor() {
		super('link');
		this.identity = identity;
	}
}