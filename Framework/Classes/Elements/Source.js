import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Source',
	major: 1, minor: 0, patch: 0
});

export default class Source extends Element {
	constructor() {
		super('source');
		this.identity = identity;
	}
}