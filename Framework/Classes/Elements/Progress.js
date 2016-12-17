import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Progress',
	major: 1, minor: 0, patch: 0
});

export default class Progress extends Element {
	constructor() {
		super('progress');
		this.identity = identity;
	}
}