import Element from 'Framework/Classes/Element';
import Identity from 'Framework/Classes/Identity';

const identity = new Identity({
	class: 'Article',
	major: 1, minor: 0, patch: 0
});

export default class Article extends Element {
	constructor() {
		super('article');
		this.identity = identity;
	}
}