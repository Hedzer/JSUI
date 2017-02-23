import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

const identity = new Identity({
	class: 'Input',
	major: 1, minor: 0, patch: 0
});

export default class Input extends Element {
	constructor() {
		super('input');
		this.identity = identity;
	}
}