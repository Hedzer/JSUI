import Element from '/Framework/V1.0/Classes/Core/Element';
import Identity from '/Framework/V1.0/Classes/Core/Identity';

const identity = new Identity({
	class: 'Col',
	major: 1, minor: 0, patch: 0
});

export default class Col extends Element {
	constructor() {
		super('col');
		this.identity = identity;
	}
}