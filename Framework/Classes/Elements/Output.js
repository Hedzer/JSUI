import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Output',
	major: 1, minor: 0, patch: 0
});

export default class Output extends Element {
	constructor() {
		super('output');
		this.identity = identity;
	}
}