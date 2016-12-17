import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Wbr',
	major: 1, minor: 0, patch: 0
});

export default class Wbr extends Element {
	constructor() {
		super('wbr');
		this.identity = identity;
	}
}