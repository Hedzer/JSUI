import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Colgroup',
	major: 1, minor: 0, patch: 0
});

export default class Colgroup extends Element {
	constructor() {
		super('colgroup');
		this.identity = identity;
	}
}