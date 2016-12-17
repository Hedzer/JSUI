import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Span',
	major: 1, minor: 0, patch: 0
});

export default class Span extends Element {
	constructor() {
		super('span');
		this.identity = identity;
	}
}