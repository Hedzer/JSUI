import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Main',
	major: 1, minor: 0, patch: 0
});

export default class Main extends Element {
	constructor() {
		super('main');
		this.identity = identity;
	}
}