import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Rt',
	major: 1, minor: 0, patch: 0
});

export default class Rt extends Element {
	constructor() {
		super('rt');
		this.identity = identity;
	}
}