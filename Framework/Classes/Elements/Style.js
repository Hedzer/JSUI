import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Style',
	major: 1, minor: 0, patch: 0
});

export default class Style extends Element {
	constructor() {
		super('style');
		this.identity = identity;
	}
}