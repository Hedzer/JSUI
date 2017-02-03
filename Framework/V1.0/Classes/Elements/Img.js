import Element from '/Framework/V1.0/Classes/Element';
import Identity from '/Framework/V1.0/Classes/Identity';

const identity = new Identity({
	class: 'Img',
	major: 1, minor: 0, patch: 0
});

export default class Img extends Element {
	constructor() {
		super('img');
		this.identity = identity;
	}
}