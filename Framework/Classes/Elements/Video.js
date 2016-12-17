import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Video',
	major: 1, minor: 0, patch: 0
});

export default class Video extends Element {
	constructor() {
		super('video');
		this.identity = identity;
	}
}