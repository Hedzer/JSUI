import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Hr',
	major: 1, minor: 0, patch: 0
});

export default class Hr extends Element {
	constructor() {
		super('hr');
		this.identity = identity;
	}
}