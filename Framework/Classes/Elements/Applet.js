import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Applet',
	major: 1, minor: 0, patch: 0
});

export default class Applet extends Element {
	constructor() {
		super('applet');
		this.identity = identity;
	}
}