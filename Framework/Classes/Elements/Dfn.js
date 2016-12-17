import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Dfn',
	major: 1, minor: 0, patch: 0
});

export default class Dfn extends Element {
	constructor() {
		super('dfn');
		this.identity = identity;
	}
}