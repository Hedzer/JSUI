import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

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