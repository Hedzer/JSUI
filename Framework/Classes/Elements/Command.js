import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Command',
	major: 1, minor: 0, patch: 0
});

export default class Command extends Element {
	constructor() {
		super('command');
		this.identity = identity;
	}
}