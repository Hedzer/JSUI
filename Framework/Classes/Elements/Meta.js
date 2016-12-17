import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Meta',
	major: 1, minor: 0, patch: 0
});

export default class Meta extends Element {
	constructor() {
		super('meta');
		this.identity = identity;
	}
}