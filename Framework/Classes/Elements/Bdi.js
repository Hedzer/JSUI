import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Bdi',
	major: 1, minor: 0, patch: 0
});

export default class Bdi extends Element {
	constructor() {
		super('bdi');
		this.identity = identity;
	}
}