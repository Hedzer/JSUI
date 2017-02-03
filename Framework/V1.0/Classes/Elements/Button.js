import Element from '/Framework/V1.0/Classes/Element';
import Identity from '/Framework/V1.0/Classes/Identity';

const identity = new Identity({
	class: 'Button',
	major: 1, minor: 0, patch: 0
});

export default class Button extends Element {
	constructor() {
		super('button');
		this.identity = identity;
	}
}