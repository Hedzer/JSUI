import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Area',
	major: 1, minor: 0, patch: 0
});

export default class Area extends Element {
	constructor() {
		super('area');
		this.identity = identity;
	}
}