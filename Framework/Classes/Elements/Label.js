import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Label',
	major: 1, minor: 0, patch: 0
});

export default class Label extends Element {
	constructor() {
		super('label');
		this.identity = identity;
	}
}