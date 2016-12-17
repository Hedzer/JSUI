import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Table',
	major: 1, minor: 0, patch: 0
});

export default class Table extends Element {
	constructor() {
		super('table');
		this.identity = identity;
	}
}