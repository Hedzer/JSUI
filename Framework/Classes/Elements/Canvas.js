import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Canvas',
	major: 1, minor: 0, patch: 0
});

export default class Canvas extends Element {
	constructor() {
		super('canvas');
		this.identity = identity;
	}
}