import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Track',
	major: 1, minor: 0, patch: 0
});

export default class Track extends Element {
	constructor() {
		super('track');
		this.identity = identity;
	}
}