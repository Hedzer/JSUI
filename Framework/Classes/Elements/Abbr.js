import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Abbr',
	major: 1, minor: 0, patch: 0
});

export default class Abbr extends Element {
	constructor() {
		super('abbr');
		this.identity = identity;
	}
}