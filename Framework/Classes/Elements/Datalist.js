import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Datalist',
	major: 1, minor: 0, patch: 0
});

export default class Datalist extends Element {
	constructor() {
		super('datalist');
		this.identity = identity;
	}
}