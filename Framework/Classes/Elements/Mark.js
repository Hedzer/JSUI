import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Mark',
	major: 1, minor: 0, patch: 0
});

export default class Mark extends Element {
	constructor() {
		super('mark');
		this.identity = identity;
	}
}