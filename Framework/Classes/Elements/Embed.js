import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Embed',
	major: 1, minor: 0, patch: 0
});

export default class Embed extends Element {
	constructor() {
		super('embed');
		this.identity = identity;
	}
}