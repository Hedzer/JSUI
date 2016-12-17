import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Center',
	major: 1, minor: 0, patch: 0
});

export default class Center extends Element {
	constructor() {
		super('center');
		this.identity = identity;
	}
}