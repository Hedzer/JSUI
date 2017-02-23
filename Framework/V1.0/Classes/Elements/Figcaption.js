import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

const identity = new Identity({
	class: 'Figcaption',
	major: 1, minor: 0, patch: 0
});

export default class Figcaption extends Element {
	constructor() {
		super('figcaption');
		this.identity = identity;
	}
}