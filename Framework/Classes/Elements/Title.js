import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Title',
	major: 1, minor: 0, patch: 0
});

export default class Title extends Element {
	constructor() {
		super('title');
		this.identity = identity;
	}
}