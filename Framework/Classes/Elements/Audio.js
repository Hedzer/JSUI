import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Audio',
	major: 1, minor: 0, patch: 0
});

export default class Audio extends Element {
	constructor() {
		super('audio');
		this.identity = identity;
	}
}