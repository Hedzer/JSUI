import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Caption',
	major: 1, minor: 0, patch: 0
});

export default class Caption extends Element {
	constructor() {
		super('caption');
		this.identity = identity;
	}
}