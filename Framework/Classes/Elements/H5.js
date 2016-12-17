import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'H5',
	major: 1, minor: 0, patch: 0
});

export default class H5 extends Element {
	constructor() {
		super('h5');
		this.identity = identity;
	}
}