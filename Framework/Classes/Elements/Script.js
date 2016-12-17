import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Script',
	major: 1, minor: 0, patch: 0
});

export default class Script extends Element {
	constructor() {
		super('script');
		this.identity = identity;
	}
}