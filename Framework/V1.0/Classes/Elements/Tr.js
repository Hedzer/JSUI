import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

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