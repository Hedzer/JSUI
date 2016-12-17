import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Col',
	major: 1, minor: 0, patch: 0
});

export default class Col extends Element {
	constructor() {
		super('col');
		this.identity = identity;
	}
}