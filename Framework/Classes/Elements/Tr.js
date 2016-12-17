import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Tr',
	major: 1, minor: 0, patch: 0
});

export default class Tr extends Element {
	constructor() {
		super('tr');
		this.identity = identity;
	}
}