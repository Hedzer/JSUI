import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Td',
	major: 1, minor: 0, patch: 0
});

export default class Td extends Element {
	constructor() {
		super('td');
		this.identity = identity;
	}
}