import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Figure',
	major: 1, minor: 0, patch: 0
});

export default class Figure extends Element {
	constructor() {
		super('figure');
		this.identity = identity;
	}
}